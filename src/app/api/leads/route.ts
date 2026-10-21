import { NextRequest, NextResponse } from 'next/server'
import { createServerClient, isSupabaseServerConfigured } from '@/lib/supabase/server'

const EMAIL_REGEX = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
const PHONE_REGEX = /^[+]?[(]?[0-9]{1,4}[)]?[-\s./0-9]{5,20}$/

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const full_name = body.full_name || body.name || body.client_name
    const email = body.email || body.client_email
    const phone = body.phone || body.client_phone
    const { service_category, budget_min, budget_max, notes, source } = body

    // 1. Mandatory Fields Validation
    if (!full_name || typeof full_name !== 'string' || full_name.trim().length < 2 || full_name.length > 100) {
      return NextResponse.json(
        { success: false, error: 'Full name is required (between 2 and 100 characters).' },
        { status: 400 }
      )
    }

    if (!email || typeof email !== 'string' || !EMAIL_REGEX.test(email.trim()) || email.length > 255) {
      return NextResponse.json(
        { success: false, error: 'A valid email address is required (e.g. name@domain.com).' },
        { status: 400 }
      )
    }

    if (!phone || typeof phone !== 'string' || !PHONE_REGEX.test(phone.trim()) || phone.length > 30) {
      return NextResponse.json(
        { success: false, error: 'A valid contact phone number is required (including country code).' },
        { status: 400 }
      )
    }

    // 2. Optional Fields Sanitization
    const cleanBudgetMin = budget_min ? Math.max(0, Number(budget_min)) : null
    const cleanBudgetMax = budget_max ? Math.max(0, Number(budget_max)) : null
    const cleanNotes = typeof notes === 'string' ? notes.slice(0, 2000) : ''
    const cleanSource = typeof source === 'string' ? source.slice(0, 50) : 'WEBSITE_FORM'
    const cleanCategory = typeof service_category === 'string' ? service_category.slice(0, 50) : 'General'

    let crmStored = false
    let telegramDispatched = false
    let recordData: { id?: string; email?: string; status?: string; created_at?: string } | null = null

    // 3. Server-Side Supabase Persistence (if configured)
    if (isSupabaseServerConfigured()) {
      try {
        const supabase = createServerClient()
        if (supabase) {
          const { data, error } = await supabase
            .from('leads')
            .insert({
              first_name: full_name.trim().split(' ')[0] || full_name.trim(),
              last_name: full_name.trim().split(' ').slice(1).join(' ') || '',
              email: email.trim().toLowerCase(),
              phone: phone.trim(),
              source: cleanSource,
              budget_min: cleanBudgetMin,
              budget_max: cleanBudgetMax,
              notes: cleanNotes ? `${cleanCategory}: ${cleanNotes}` : cleanCategory,
              status: 'NEW',
            })
            .select('id, email, status, created_at')
            .single()

          if (!error && data?.id) {
            crmStored = true
            recordData = data
          } else if (error) {
            console.warn('[Leads API] Supabase persistence error:', error.message)
          }
        }
      } catch (err) {
        console.warn('[Leads API] Supabase insertion exception:', err)
      }
    }

    // 4. Telegram Notification Dispatch (if configured via secure server env)
    const botToken = process.env.TELEGRAM_BOT_TOKEN?.trim()
    const chatId = process.env.TELEGRAM_CHAT_ID?.trim()

    if (botToken && chatId) {
      try {
        const text = [
          '🏛 <b>DUBAI PLATFORM — LEAD / SOLICITARE NOUĂ</b>',
          '━━━━━━━━━━━━━━━━━━━━',
          `• <b>Nume:</b> ${full_name.trim()}`,
          `• <b>Email:</b> ${email.trim().toLowerCase()}`,
          `• <b>Telefon:</b> ${phone.trim()}`,
          `• <b>Categorie:</b> ${cleanCategory}`,
          cleanNotes ? `• <b>Detalii:</b> ${cleanNotes}` : '',
          `• <b>Sursă:</b> ${cleanSource}`,
          `• <b>Timestamp:</b> ${new Date().toISOString()}`,
          crmStored ? `• <b>CRM ID:</b> <code>#${recordData?.id}</code>` : '',
          '━━━━━━━━━━━━━━━━━━━━',
        ].filter(Boolean).join('\n')

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
          telegramDispatched = true
        }
      } catch (teleErr) {
        console.warn('[Leads API] Telegram dispatch exception:', teleErr)
      }
    }

    // 5. Delivery Check — DO NOT return false success if not persisted or dispatched
    if (!crmStored && !telegramDispatched) {
      return NextResponse.json(
        {
          success: false,
          error: 'service_unavailable',
          message:
            'Canalele de recepție automată nu sunt configurate pe server în acest moment. Vă rugăm să ne contactați direct prin WhatsApp (+43 650 9536345) sau prin e-mail (cristianvaduva@duck.com).',
        },
        { status: 503 }
      )
    }

    return NextResponse.json(
      {
        success: true,
        message: 'Solicitarea dvs. a fost înregistrată cu succes.',
        data: recordData || {
          name: full_name.trim(),
          email: email.trim().toLowerCase(),
          phone: phone.trim(),
          status: 'NEW',
          created_at: new Date().toISOString(),
        },
      },
      { status: 201 }
    )
  } catch {
    return NextResponse.json(
      { success: false, error: 'Invalid or malformed request payload.' },
      { status: 400 }
    )
  }
}

export async function GET() {
  return new NextResponse(
    JSON.stringify({ success: false, error: 'Method Not Allowed' }),
    {
      status: 405,
      headers: {
        'Content-Type': 'application/json',
        'Allow': 'POST',
      },
    }
  )
}

export async function PUT() {
  return new NextResponse(
    JSON.stringify({ success: false, error: 'Method Not Allowed' }),
    {
      status: 405,
      headers: {
        'Content-Type': 'application/json',
        'Allow': 'POST',
      },
    }
  )
}

export async function DELETE() {
  return new NextResponse(
    JSON.stringify({ success: false, error: 'Method Not Allowed' }),
    {
      status: 405,
      headers: {
        'Content-Type': 'application/json',
        'Allow': 'POST',
      },
    }
  )
}
