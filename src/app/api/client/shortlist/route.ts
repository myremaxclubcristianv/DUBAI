import { NextRequest, NextResponse } from 'next/server'
import { createServerClient, isSupabaseServerConfigured } from '@/lib/supabase/server'

export async function GET() {
  try {
    if (!isSupabaseServerConfigured()) {
      return NextResponse.json({
        success: true,
        shortlist: [],
        storage_mode: 'LOCAL_BROWSER_FALLBACK',
        database_status: 'DISCONNECTED',
      })
    }

    const supabase = createServerClient()
    if (!supabase) {
      return NextResponse.json({ success: false, error: 'Database client failed initialization' }, { status: 500 })
    }

    const { data: { user } } = await supabase.auth.getUser()
    if (!user) {
      return NextResponse.json({
        success: true,
        shortlist: [],
        storage_mode: 'ANONYMOUS_SESSION',
        message: 'Authenticate to access server-persisted shortlist.',
      })
    }

    const { data, error } = await supabase
      .from('saved_properties')
      .select('property_id, created_at, properties(*)')
      .eq('user_id', user.id)

    if (error) {
      return NextResponse.json({ success: false, error: error.message }, { status: 500 })
    }

    return NextResponse.json({
      success: true,
      shortlist: data || [],
      storage_mode: 'SUPABASE_SYNCED',
    })
  } catch (err) {
    return NextResponse.json(
      { success: false, error: err instanceof Error ? err.message : 'Internal error' },
      { status: 500 }
    )
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { property_id, action = 'ADD' } = body

    if (!property_id) {
      return NextResponse.json({ success: false, error: 'Property ID is required' }, { status: 400 })
    }

    if (!isSupabaseServerConfigured()) {
      return NextResponse.json({
        success: true,
        message: 'Saved in local browser state. Database persistence inactive.',
        storage_mode: 'LOCAL_BROWSER',
      })
    }

    const supabase = createServerClient()
    if (!supabase) {
      return NextResponse.json({ success: false, error: 'Database client failed initialization' }, { status: 500 })
    }

    const { data: { user } } = await supabase.auth.getUser()
    if (!user) {
      return NextResponse.json({
        success: true,
        message: 'Saved locally for anonymous session. Sign in to synchronize.',
        storage_mode: 'ANONYMOUS_LOCAL',
      })
    }

    if (action === 'ADD') {
      const { error } = await supabase
        .from('saved_properties')
        .upsert({ user_id: user.id, property_id }, { onConflict: 'user_id,property_id' })

      if (error) {
        return NextResponse.json({ success: false, error: error.message }, { status: 500 })
      }

      return NextResponse.json({ success: true, message: 'Property synced to server shortlist', action: 'ADDED' })
    } else {
      const { error } = await supabase
        .from('saved_properties')
        .delete()
        .eq('user_id', user.id)
        .eq('property_id', property_id)

      if (error) {
        return NextResponse.json({ success: false, error: error.message }, { status: 500 })
      }

      return NextResponse.json({ success: true, message: 'Property removed from server shortlist', action: 'REMOVED' })
    }
  } catch (err) {
    return NextResponse.json(
      { success: false, error: err instanceof Error ? err.message : 'Internal error' },
      { status: 500 }
    )
  }
}

export async function PUT() {
  return new NextResponse(
    JSON.stringify({ success: false, error: 'Method Not Allowed' }),
    {
      status: 405,
      headers: {
        'Content-Type': 'application/json',
        'Allow': 'GET, POST',
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
        'Allow': 'GET, POST',
      },
    }
  )
}
