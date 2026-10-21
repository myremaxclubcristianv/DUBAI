import { NextRequest, NextResponse } from 'next/server'
import { isSupabaseServerConfigured, createServerClient } from '@/lib/supabase/server'

const EMAIL_REGEX = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { email, name, consent, hp_field } = body

    // 1. Anti-spam honeypot detection
    if (hp_field && hp_field.trim() !== '') {
      // Return 200 silently to foil automated bots
      return NextResponse.json({ success: true, message: 'Subscription request registered.' })
    }

    // 2. Email Validation
    if (!email || typeof email !== 'string' || !EMAIL_REGEX.test(email.trim()) || email.length > 255) {
      return NextResponse.json(
        { success: false, error: 'Vă rugăm să introduceți o adresă de e-mail validă (ex: nume@domeniu.ro).' },
        { status: 400 }
      )
    }

    // 3. GDPR Consent Validation
    if (consent !== true) {
      return NextResponse.json(
        { success: false, error: 'Consimțământul pentru prelucrarea datelor cu caracter personal este obligatoriu.' },
        { status: 400 }
      )
    }

    const cleanEmail = email.trim().toLowerCase()
    const cleanName = typeof name === 'string' ? name.trim().slice(0, 100) : ''

    let stored = false
    let dispatched = false

    // 4. Persistence handling (Supabase leads / newsletter if configured)
    if (isSupabaseServerConfigured()) {
      try {
        const supabase = await createServerClient()
        if (supabase) {
          const { error: dbErr } = await supabase.from('leads').insert({
            client_name: cleanName || 'Abonat Newsletter',
            client_email: cleanEmail,
            client_phone: '+40000000000',
            service_category: 'Newsletter RO',
            notes: 'Abonare la newsletterul lunar de cercetare imobiliară Dubai',
            source: 'NEWSLETTER_FORM',
            status: 'NEW',
          })
          if (!dbErr) {
            stored = true
          }
        }
      } catch (dbErr) {
        console.warn('[Newsletter API] Supabase persistence exception:', dbErr)
      }
    }

    // 5. Telegram Dispatch fallback/alert (via secure server env vars only)
    const botToken = process.env.TELEGRAM_BOT_TOKEN?.trim()
    const chatId = process.env.TELEGRAM_CHAT_ID?.trim()

    if (botToken && chatId) {
      try {
        const text = `📬 <b>DUBAI PLATFORM — NOU ABONAT NEWSLETTER RO</b>\n━━━━━━━━━━━━━━━━━━━━\n• <b>Email:</b> <code>${cleanEmail}</code>\n• <b>Nume:</b> ${cleanName || 'Nespecificat'}\n• <b>Sursă:</b> /newsletter\n• <b>Timestamp:</b> ${new Date().toISOString()}\n━━━━━━━━━━━━━━━━━━━━`
        const teleRes = await fetch(`https://api.telegram.org/bot${botToken}/sendMessage`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            chat_id: chatId,
            text,
            parse_mode: 'HTML',
          }),
        })
        if (teleRes.ok) {
          dispatched = true
        }
      } catch (teleErr) {
        console.warn('[Newsletter API] Telegram dispatch exception:', teleErr)
      }
    }

    // 6. Honest Delivery Resolution — NEVER return false success if not persisted or dispatched
    if (!stored && !dispatched) {
      return NextResponse.json(
        {
          success: false,
          error: 'service_unavailable',
          message:
            'Canalele de înregistrare automată nu sunt configurate pe server în acest moment. Vă rugăm să transmiteți adresa dvs. direct pe WhatsApp (+43 650 9536345) sau pe e-mail (cristianvaduva@duck.com).',
        },
        { status: 503 }
      )
    }

    return NextResponse.json(
      {
        success: true,
        message: 'V-ați abonat cu succes la analiza lunară DUBAI. Puteți să vă dezabonați oricând printr-un singur clic.',
        email: cleanEmail,
      },
      { status: 200 }
    )
  } catch {
    return NextResponse.json(
      { success: false, error: 'A apărut o eroare tehnică la procesarea solicitării. Vă rugăm să reîncercați.' },
      { status: 500 }
    )
  }
}
