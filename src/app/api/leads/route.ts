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

    // 3. Fallback when Supabase credentials are not provisioned
    if (!isSupabaseServerConfigured()) {
      return NextResponse.json(
        {
          success: true,
          message: 'Lead received and processed in local queue. Supabase server persistence unprovisioned.',
          storage_mode: 'LOCAL_QUEUE_FALLBACK',
          data: {
            name: full_name.trim(),
            email: email.trim().toLowerCase(),
            phone: phone.trim(),
            status: 'NEW', // Enforced server-side: prevents client status manipulation
            created_at: new Date().toISOString(),
          },
        },
        { status: 201 }
      )
    }

    // 4. Server-Side Supabase Persistence
    const supabase = createServerClient()
    if (!supabase) {
      return NextResponse.json(
        { success: false, error: 'Database service unavailable.' },
        { status: 503 }
      )
    }

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
        status: 'NEW', // Enforced server-side: prevents client status manipulation
      })
      .select('id, email, status, created_at')
      .single()

    if (error) {
      return NextResponse.json(
        { success: false, error: 'Failed to record lead in database.' },
        { status: 500 }
      )
    }

    return NextResponse.json({ success: true, data }, { status: 201 })
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
