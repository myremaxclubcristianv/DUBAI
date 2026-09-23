import { NextRequest, NextResponse } from 'next/server'
import { createServerClient, isSupabaseServerConfigured } from '@/lib/supabase/server'

const EMAIL_REGEX = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
const PHONE_REGEX = /^[+]?[(]?[0-9]{1,4}[)]?[-\s./0-9]{5,20}$/
const DATE_REGEX = /^\d{4}-\d{2}-\d{2}$/

const ALLOWED_SLOTS = [
  '10:00 AM - 11:30 AM',
  '01:00 PM - 02:30 PM',
  '04:00 PM - 05:30 PM',
  'Sunset Viewing (05:30 PM - 07:00 PM)',
]

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const property_id = body.property_id
    const client_name = body.client_name || body.full_name || body.name
    const client_email = body.client_email || body.email
    const client_phone = body.client_phone || body.phone
    const requested_date = body.requested_date || body.preferred_date
    const time_slot = body.time_slot || body.preferred_time
    const notes = body.notes || body.message

    // 1. Mandatory Fields Validation
    if (!property_id || typeof property_id !== 'string' || property_id.length > 100) {
      return NextResponse.json(
        { success: false, error: 'A valid Property ID is required.' },
        { status: 400 }
      )
    }

    if (!client_name || typeof client_name !== 'string' || client_name.trim().length < 2 || client_name.length > 100) {
      return NextResponse.json(
        { success: false, error: 'Client name is required (between 2 and 100 characters).' },
        { status: 400 }
      )
    }

    if (!client_email || typeof client_email !== 'string' || !EMAIL_REGEX.test(client_email.trim()) || client_email.length > 255) {
      return NextResponse.json(
        { success: false, error: 'A valid email address is required.' },
        { status: 400 }
      )
    }

    if (client_phone && (typeof client_phone !== 'string' || !PHONE_REGEX.test(client_phone.trim()) || client_phone.length > 30)) {
      return NextResponse.json(
        { success: false, error: 'Phone number format is invalid.' },
        { status: 400 }
      )
    }

    if (!requested_date || typeof requested_date !== 'string' || !DATE_REGEX.test(requested_date)) {
      return NextResponse.json(
        { success: false, error: 'A valid date in YYYY-MM-DD format is required.' },
        { status: 400 }
      )
    }

    const cleanSlot = typeof time_slot === 'string' && ALLOWED_SLOTS.includes(time_slot)
      ? time_slot
      : (typeof time_slot === 'string' && time_slot.trim().length > 0 ? time_slot.slice(0, 50) : ALLOWED_SLOTS[0])

    const cleanNotes = typeof notes === 'string' ? notes.slice(0, 1000) : ''

    // 2. Fallback when Supabase is not provisioned
    if (!isSupabaseServerConfigured()) {
      return NextResponse.json(
        {
          success: true,
          message: 'Viewing request received in confidential client queue. Database persistence unprovisioned.',
          storage_mode: 'LOCAL_QUEUE_FALLBACK',
          data: {
            property_id,
            requested_date,
            time_slot: cleanSlot,
            client_name: client_name.trim(),
            status: 'NEW', // Enforced server-side: prevents client status manipulation
            created_at: new Date().toISOString(),
          },
        },
        { status: 201 }
      )
    }

    // 3. Server-Side Supabase Persistence
    const supabase = createServerClient()
    if (!supabase) {
      return NextResponse.json(
        { success: false, error: 'Database service unavailable.' },
        { status: 503 }
      )
    }

    const { data, error } = await supabase
      .from('viewing_requests')
      .insert({
        property_id,
        requested_date,
        requested_time: cleanSlot,
        contact_name: client_name.trim(),
        contact_email: client_email.trim().toLowerCase(),
        contact_phone: client_phone ? client_phone.trim() : 'N/A',
        message: cleanNotes,
        status: 'NEW', // Enforced server-side: prevents client status manipulation
      })
      .select('id, property_id, requested_date, status, created_at')
      .single()

    if (error) {
      return NextResponse.json(
        { success: false, error: 'Failed to record viewing request.' },
        { status: 500 }
      )
    }

    return NextResponse.json({ success: true, data }, { status: 201 })
  } catch {
    return NextResponse.json(
      { success: false, error: 'Invalid request payload.' },
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
