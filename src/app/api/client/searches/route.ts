import { NextRequest, NextResponse } from 'next/server'
import { createServerClient, isSupabaseServerConfigured } from '@/lib/supabase/server'

export async function GET() {
  try {
    if (!isSupabaseServerConfigured()) {
      return NextResponse.json({
        success: true,
        searches: [],
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
        searches: [],
        storage_mode: 'ANONYMOUS_SESSION',
        message: 'Authenticate to access server-persisted searches.',
      })
    }

    const { data, error } = await supabase
      .from('saved_searches')
      .select('*')
      .eq('user_id', user.id)
      .order('created_at', { ascending: false })

    if (error) {
      return NextResponse.json({ success: false, error: error.message }, { status: 500 })
    }

    return NextResponse.json({
      success: true,
      searches: data || [],
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
    const { name, filters, sort_order } = body

    if (!name || !filters) {
      return NextResponse.json({ success: false, error: 'Search name and filter parameters are required' }, { status: 400 })
    }

    if (!isSupabaseServerConfigured()) {
      return NextResponse.json({
        success: true,
        message: 'Search saved in local browser state. Database persistence inactive.',
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
        message: 'Search saved locally. Sign in to synchronize across devices.',
        storage_mode: 'ANONYMOUS_LOCAL',
      })
    }

    const { data, error } = await supabase
      .from('saved_searches')
      .insert({
        user_id: user.id,
        name,
        filters,
        sort_order: sort_order || 'DEFAULT',
      })
      .select()
      .single()

    if (error) {
      return NextResponse.json({ success: false, error: error.message }, { status: 500 })
    }

    return NextResponse.json({
      success: true,
      data,
      message: 'Saved search synced to user profile',
      storage_mode: 'SUPABASE_SYNCED',
    })
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
