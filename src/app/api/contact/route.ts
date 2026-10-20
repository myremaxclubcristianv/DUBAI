import { NextRequest, NextResponse } from 'next/server'
import { createServerClient, isSupabaseServerConfigured } from '@/lib/supabase/server'

const EMAIL_REGEX = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
const PHONE_REGEX = /^[+]?[(]?[0-9]{1,4}[)]?[-\s./0-9]{5,25}$/

const VALID_INTERESTS = [
  'PROPERTY',
  'INVESTMENT',
  'RESIDENCY',
  'LIFESTYLE',
  'PRIVATE CLIENT',
] as const

// In-memory rate limiting map: ip -> timestamps[]
const rateLimitMap = new Map<string, number[]>()
const RATE_LIMIT_WINDOW_MS = 10 * 60 * 1000 // 10 minutes
const MAX_REQUESTS_PER_WINDOW = 10

function isRateLimited(ip: string): boolean {
  const now = Date.now()
  const timestamps = (rateLimitMap.get(ip) || []).filter(
    (ts) => now - ts < RATE_LIMIT_WINDOW_MS
  )
  if (timestamps.length >= MAX_REQUESTS_PER_WINDOW) {
    rateLimitMap.set(ip, timestamps)
    return true
  }
  timestamps.push(now)
  rateLimitMap.set(ip, timestamps)
  return false
}

// In-memory idempotency deduplication cache: submission_id -> timestamp
const deduplicationCache = new Map<string, number>()
const DEDUPLICATION_TTL_MS = 5 * 60 * 1000 // 5 minutes

function checkAndRecordSubmission(submissionId?: string): boolean {
  if (!submissionId) return false
  const now = Date.now()
  // Clean expired
  for (const [id, ts] of deduplicationCache.entries()) {
    if (now - ts > DEDUPLICATION_TTL_MS) {
      deduplicationCache.delete(id)
    }
  }
  if (deduplicationCache.has(submissionId)) {
    return true // Already processed
  }
  deduplicationCache.set(submissionId, now)
  return false
}

function escapeHtml(text: string): string {
  return text
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;')
}

export async function POST(request: NextRequest) {
  try {
    // 1. IP extraction & Rate limiting
    const ip =
      request.headers.get('x-forwarded-for')?.split(',')[0]?.trim() ||
      request.headers.get('x-real-ip') ||
      '127.0.0.1'

    if (isRateLimited(ip)) {
      return NextResponse.json(
        {
          success: false,
          error: 'Rate limit exceeded. Please wait a few minutes before submitting another enquiry.',
        },
        { status: 429 }
      )
    }

    const body = await request.json()

    // 2. Anti-Spam Honeypot Check
    // If the hidden honeypot fields are filled, silently drop spam
    if (body.b_website || body.honeypot || body.company_fax) {
      return NextResponse.json({ success: true, note: 'discarded' }, { status: 200 })
    }

    // 3. Idempotency Check (Prevents double submission on retry/double click)
    const submissionId = typeof body.submission_id === 'string' ? body.submission_id.trim() : undefined
    if (submissionId && checkAndRecordSubmission(submissionId)) {
      return NextResponse.json(
        {
          success: true,
          deduplicated: true,
          message: 'Enquiry was already received and processed.',
        },
        { status: 200 }
      )
    }

    const {
      name,
      email,
      phone,
      country,
      interest,
      budget,
      message,
      consent,
      property_title,
      property_id,
      source,
      page,
    } = body

    // 4. Mandatory Validation
    if (consent !== true) {
      return NextResponse.json(
        { success: false, error: 'Consent to the privacy policy is required to transmit an enquiry.' },
        { status: 400 }
      )
    }

    if (!name || typeof name !== 'string' || name.trim().length < 2 || name.length > 100) {
      return NextResponse.json(
        { success: false, error: 'Full name is required (between 2 and 100 characters).' },
        { status: 400 }
      )
    }

    if (!email || typeof email !== 'string' || !EMAIL_REGEX.test(email.trim()) || email.length > 255) {
      return NextResponse.json(
        { success: false, error: 'A valid email address is required.' },
        { status: 400 }
      )
    }

    if (phone && (typeof phone !== 'string' || (!PHONE_REGEX.test(phone.trim()) && phone.trim().length > 35))) {
      return NextResponse.json(
        { success: false, error: 'Invalid phone number format.' },
        { status: 400 }
      )
    }

    const cleanInterest = typeof interest === 'string' ? interest.trim().toUpperCase() : 'PRIVATE CLIENT'
    if (!VALID_INTERESTS.includes(cleanInterest as typeof VALID_INTERESTS[number])) {
      return NextResponse.json(
        { success: false, error: 'Invalid interest category.' },
        { status: 400 }
      )
    }

    if (!message || typeof message !== 'string' || message.trim().length < 3 || message.length > 2500) {
      return NextResponse.json(
        { success: false, error: 'Message / brief is required (between 3 and 2500 characters).' },
        { status: 400 }
      )
    }

    // 5. Sanitization
    const cleanName = name.trim()
    const cleanEmail = email.trim().toLowerCase()
    const cleanPhone = typeof phone === 'string' && phone.trim() ? phone.trim() : 'Not provided'
    const cleanCountry = typeof country === 'string' && country.trim() ? country.trim().slice(0, 100) : 'Not provided'
    const cleanBudget = typeof budget === 'string' && budget.trim() ? budget.trim().slice(0, 100) : 'Not provided'
    const cleanMessage = message.trim()
    const cleanPropertyTitle = typeof property_title === 'string' && property_title.trim() ? property_title.trim().slice(0, 200) : undefined
    const cleanPropertyId = typeof property_id === 'string' && property_id.trim() ? property_id.trim().slice(0, 100) : undefined
    const cleanSource = typeof source === 'string' && source.trim() ? source.trim().slice(0, 100) : 'dubai.cristianvaduva.com'
    const cleanPage = typeof page === 'string' && page.trim() ? page.trim().slice(0, 200) : '/'

    // 6. CRM Storage (Supabase if provisioned)
    let crmStored = false
    let crmLeadId: string | undefined

    if (isSupabaseServerConfigured()) {
      try {
        const supabase = createServerClient()
        if (supabase) {
          const notesParts = [
            `Interest: ${cleanInterest}`,
            `Country: ${cleanCountry}`,
            `Budget: ${cleanBudget}`,
            cleanPropertyTitle ? `Property: ${cleanPropertyTitle} (${cleanPropertyId || ''})` : null,
            `Page: ${cleanPage}`,
            `Brief: ${cleanMessage}`,
          ].filter(Boolean)

          const { data, error } = await supabase
            .from('leads')
            .insert({
              first_name: cleanName.split(' ')[0] || cleanName,
              last_name: cleanName.split(' ').slice(1).join(' ') || '',
              email: cleanEmail,
              phone: cleanPhone !== 'Not provided' ? cleanPhone : null,
              source: cleanSource,
              notes: notesParts.join(' | '),
              status: 'NEW',
            })
            .select('id')
            .single()

          if (!error && data?.id) {
            crmStored = true
            crmLeadId = String(data.id)
          } else if (error) {
            console.warn('[Contact API] Supabase lead persistence error:', error.message)
          }
        }
      } catch (err) {
        console.warn('[Contact API] Supabase lead insertion exception:', err instanceof Error ? err.message : 'Unknown')
      }
    }

    // 7. Telegram Bot Dispatch (Server-side via secure environment variables only)
    const botToken = process.env.TELEGRAM_BOT_TOKEN?.trim()
    const chatId = process.env.TELEGRAM_CHAT_ID?.trim()

    let telegramSent = false
    let telegramError: string | null = null

    if (botToken && chatId) {
      try {
        const now = new Date()
        const formattedDate = `${now.getUTCFullYear()}-${String(now.getUTCMonth() + 1).padStart(2, '0')}-${String(
          now.getUTCDate()
        ).padStart(2, '0')} ${String(now.getUTCHours()).padStart(2, '0')}:${String(now.getUTCMinutes()).padStart(2, '0')} UTC`

        const maskedIp = ip.includes('.')
          ? ip.split('.').slice(0, 2).concat(['*.*']).join('.')
          : ip.slice(0, 8) + '::*'

        let assetLine = ''
        if (cleanPropertyTitle || cleanPropertyId) {
          assetLine = `\n• <b>Asset:</b> ${escapeHtml(cleanPropertyTitle || cleanPropertyId || '')}`
        }

        const telegramHtml = [
          '🏛 <b>DUBAI PLATFORM — CLIENT MANDATE INTAKE</b>',
          '━━━━━━━━━━━━━━━━━━━━',
          '',
          '👤 <b>CLIENT CREDENTIALS</b>',
          `• <b>Name:</b> ${escapeHtml(cleanName)}`,
          `• <b>Email:</b> ${escapeHtml(cleanEmail)}`,
          `• <b>Phone:</b> ${escapeHtml(cleanPhone)}`,
          `• <b>Country:</b> ${escapeHtml(cleanCountry)}`,
          '',
          '🎯 <b>MANDATE SCOPE</b>',
          `• <b>Interest:</b> ${escapeHtml(cleanInterest)}`,
          `• <b>Budget / Tier:</b> ${escapeHtml(cleanBudget)}${assetLine}`,
          '',
          '💬 <b>REQUIREMENT / BRIEF</b>',
          `<blockquote>${escapeHtml(cleanMessage.slice(0, 1500))}</blockquote>`,
          '',
          '📍 <b>METADATA &amp; PROVENANCE</b>',
          `• <b>Source:</b> ${escapeHtml(cleanSource)}`,
          `• <b>Page:</b> <code>${escapeHtml(cleanPage)}</code>`,
          `• <b>Timestamp:</b> ${escapeHtml(formattedDate)}`,
          `• <b>Client IP:</b> <code>${escapeHtml(maskedIp)}</code>`,
          crmStored ? `• <b>CRM Record:</b> <code>#${escapeHtml(crmLeadId || 'SAVED')}</code>` : '',
          '━━━━━━━━━━━━━━━━━━━━',
        ]
          .filter(Boolean)
          .join('\n')

        const telegramRes = await fetch(`https://api.telegram.org/bot${botToken}/sendMessage`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            chat_id: chatId,
            text: telegramHtml,
            parse_mode: 'HTML',
            disable_web_page_preview: true,
          }),
        })

        if (telegramRes.ok) {
          telegramSent = true
        } else {
          telegramError = `Telegram HTTP ${telegramRes.status}`
          console.error(`[Contact API] Telegram dispatch error (HTTP status ${telegramRes.status})`)
        }
      } catch {
        telegramError = 'Network error'
        console.error('[Contact API] Telegram fetch network exception')
      }
    } else {
      telegramError = 'unprovisioned'
      console.warn('[Contact API] Telegram credentials not provisioned in environment variables.')
    }

    // 8. Delivery Response Resolution
    if (telegramSent) {
      return NextResponse.json(
        {
          success: true,
          channel: crmStored ? 'crm_and_telegram' : 'telegram_fallback',
          timestamp: new Date().toISOString(),
        },
        { status: 200 }
      )
    }

    if (crmStored) {
      // Stored in CRM even if Telegram failed
      return NextResponse.json(
        {
          success: true,
          channel: 'crm_only',
          warning: 'telegram_dispatch_unavailable',
          timestamp: new Date().toISOString(),
        },
        { status: 200 }
      )
    }

    // Neither Telegram nor CRM succeeded
    if (telegramError === 'unprovisioned') {
      return NextResponse.json(
        {
          success: false,
          error: 'service_unavailable',
          message: 'Contact service channels are currently unprovisioned. Please reach out directly via WhatsApp or email.',
        },
        { status: 503 }
      )
    }

    return NextResponse.json(
      {
        success: false,
        error: 'delivery_failed',
        message: 'Direct transmission could not be completed at this time. Please use the direct WhatsApp or email channels.',
      },
      { status: 502 }
    )
  } catch (err) {
    console.error('[Contact API] Internal processing error:', err instanceof Error ? err.message : 'Unknown')
    return NextResponse.json(
      { success: false, error: 'Internal server error processing enquiry.' },
      { status: 500 }
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
        Allow: 'POST',
      },
    }
  )
}
