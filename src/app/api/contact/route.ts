import { NextRequest, NextResponse } from 'next/server'

const EMAIL_REGEX = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
const PHONE_REGEX = /^[+]?[(]?[0-9]{1,4}[)]?[-\s./0-9]{5,20}$/

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
const MAX_REQUESTS_PER_WINDOW = 5

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
          error: 'Rate limit exceeded. Please wait before submitting another enquiry.',
        },
        { status: 429 }
      )
    }

    const body = await request.json()

    // 2. Anti-Spam Honeypot Check
    // If the hidden honeypot field is filled, silently discard spam
    if (body.b_website || body.honeypot || body.company_fax) {
      return NextResponse.json({ success: true }, { status: 200 })
    }

    const { name, email, phone, country, interest, budget, message } = body

    // 3. Validation
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

    if (!message || typeof message !== 'string' || message.trim().length < 5 || message.length > 2000) {
      return NextResponse.json(
        { success: false, error: 'Message is required (between 5 and 2000 characters).' },
        { status: 400 }
      )
    }

    const cleanName = name.trim()
    const cleanEmail = email.trim().toLowerCase()
    const cleanPhone = typeof phone === 'string' && phone.trim() ? phone.trim() : 'Not provided'
    const cleanCountry = typeof country === 'string' && country.trim() ? country.trim().slice(0, 100) : 'Not provided'
    const cleanBudget = typeof budget === 'string' && budget.trim() ? budget.trim().slice(0, 100) : 'Not provided'
    const cleanMessage = message.trim()

    // 4. Server-Side Telegram Dispatch
    const botToken = process.env.TELEGRAM_BOT_TOKEN
    const chatId = process.env.TELEGRAM_CHAT_ID

    if (!botToken || !chatId) {
      console.warn('[Contact API] Telegram credentials unprovisioned (TELEGRAM_BOT_TOKEN or TELEGRAM_CHAT_ID missing).')
      return NextResponse.json(
        {
          success: false,
          error: 'service_unavailable',
        },
        { status: 503 }
      )
    }

    const now = new Date()
    const formattedDate = `${now.getUTCFullYear()}-${String(now.getUTCMonth() + 1).padStart(2, '0')}-${String(
      now.getUTCDate()
    ).padStart(2, '0')} ${String(now.getUTCHours()).padStart(2, '0')}:${String(now.getUTCMinutes()).padStart(2, '0')} UTC`

    const telegramText = [
      '━━━━━━━━━━━━━━━━━━━━',
      'DUBAI — NEW PRIVATE CLIENT',
      '━━━━━━━━━━━━━━━━━━━━',
      '',
      'NAME',
      cleanName,
      '',
      'EMAIL',
      cleanEmail,
      '',
      'PHONE',
      cleanPhone,
      '',
      'COUNTRY',
      cleanCountry,
      '',
      'INTEREST',
      cleanInterest,
      '',
      'BUDGET',
      cleanBudget,
      '',
      'MESSAGE',
      cleanMessage,
      '',
      '━━━━━━━━━━━━━━━━━━━━',
      'SOURCE',
      'dubai.cristianvaduva.com',
      '',
      'TIME',
      formattedDate,
    ].join('\n')

    const telegramUrl = `https://api.telegram.org/bot${botToken}/sendMessage`

    const telegramRes = await fetch(telegramUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        chat_id: chatId,
        text: telegramText,
        disable_web_page_preview: true,
      }),
    })

    if (!telegramRes.ok) {
      const errorText = await telegramRes.text()
      console.error(`[Contact API] Telegram API error: status ${telegramRes.status}`, errorText.slice(0, 100))
      return NextResponse.json(
        { success: false, error: 'delivery_failed' },
        { status: 502 }
      )
    }

    return NextResponse.json({ success: true }, { status: 200 })
  } catch (err) {
    console.error('[Contact API] Internal processing error:', err instanceof Error ? err.message : 'Unknown error')
    return NextResponse.json(
      { success: false, error: 'Internal server error.' },
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
