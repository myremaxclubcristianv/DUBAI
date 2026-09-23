import { NextRequest, NextResponse } from 'next/server'
import { createServerClient, isSupabaseServerConfigured } from '@/lib/supabase/server'
import { PropertyRepository, PropertyQueryFilters } from '@/lib/repositories'

export async function GET(request: NextRequest) {
  try {
    const searchParams = request.nextUrl.searchParams
    const query = searchParams.get('q') || undefined
    const area_name = searchParams.get('area') || undefined
    const property_type = searchParams.get('type') || undefined
    const completion_status = searchParams.get('status') || undefined
    const developer_name = searchParams.get('developer') || undefined
    const price_min = searchParams.get('price_min') ? Number(searchParams.get('price_min')) : undefined
    const price_max = searchParams.get('price_max') ? Number(searchParams.get('price_max')) : undefined
    const bedrooms = searchParams.get('bedrooms') ? Number(searchParams.get('bedrooms')) : undefined
    const sortBy = (searchParams.get('sort') as PropertyQueryFilters['sortBy']) || undefined
    const limit = Math.min(50, Math.max(1, parseInt(searchParams.get('limit') || '20', 10)))
    const page = Math.max(1, parseInt(searchParams.get('page') || '1', 10))
    const offset = (page - 1) * limit

    const filters: PropertyQueryFilters = {
      query,
      area_name,
      property_type,
      completion_status,
      developer_name,
      price_min,
      price_max,
      bedrooms,
      sortBy,
      limit,
      offset,
    }

    if (!isSupabaseServerConfigured()) {
      // Return audited repository records with explicit static baseline metadata
      const result = await PropertyRepository.find(filters)
      return NextResponse.json({
        success: true,
        data: result.data,
        total: result.total,
        page,
        limit,
        total_pages: Math.ceil(result.total / limit),
        backend_source: 'STATIC_AUDITED_REGISTRY',
        database_status: 'DISCONNECTED',
      })
    }

    const supabase = createServerClient()
    if (!supabase) {
      const result = await PropertyRepository.find(filters)
      return NextResponse.json({
        success: true,
        data: result.data,
        total: result.total,
        page,
        limit,
        total_pages: Math.ceil(result.total / limit),
        backend_source: 'STATIC_AUDITED_REGISTRY',
        database_status: 'CLIENT_INIT_FAILED',
      })
    }

    let dbQuery = supabase
      .from('properties')
      .select('*', { count: 'exact' })
      .eq('listing_status', 'ACTIVE')
      .range(offset, offset + limit - 1)

    if (query) {
      dbQuery = dbQuery.ilike('title', `%${query}%`)
    }
    if (area_name && area_name !== 'ALL') {
      dbQuery = dbQuery.eq('area_name', area_name)
    }
    if (property_type && property_type !== 'ALL') {
      dbQuery = dbQuery.eq('property_type', property_type)
    }
    if (completion_status && completion_status !== 'ALL') {
      dbQuery = dbQuery.eq('completion_status', completion_status)
    }
    if (developer_name && developer_name !== 'ALL') {
      dbQuery = dbQuery.eq('developer_name', developer_name)
    }
    if (price_min !== undefined) {
      dbQuery = dbQuery.gte('asking_price', price_min)
    }
    if (price_max !== undefined) {
      dbQuery = dbQuery.lte('asking_price', price_max)
    }
    if (bedrooms !== undefined) {
      dbQuery = dbQuery.gte('bedrooms', bedrooms)
    }

    // Sort order
    if (sortBy === 'price_asc') {
      dbQuery = dbQuery.order('asking_price', { ascending: true })
    } else if (sortBy === 'price_desc') {
      dbQuery = dbQuery.order('asking_price', { ascending: false })
    } else if (sortBy === 'area_desc') {
      dbQuery = dbQuery.order('internal_area_sqft', { ascending: false })
    } else if (sortBy === 'bedrooms_desc') {
      dbQuery = dbQuery.order('bedrooms', { ascending: false })
    } else {
      dbQuery = dbQuery.order('created_at', { ascending: false })
    }

    const { data, count, error } = await dbQuery

    if (error) {
      // Fall back to static dataset on query failure
      const fallbackResult = await PropertyRepository.find(filters)
      return NextResponse.json({
        success: true,
        data: fallbackResult.data,
        total: fallbackResult.total,
        page,
        limit,
        total_pages: Math.ceil(fallbackResult.total / limit),
        backend_source: 'STATIC_AUDITED_REGISTRY_FALLBACK',
        error_context: error.message,
      })
    }

    return NextResponse.json({
      success: true,
      data: data || [],
      total: count || 0,
      page,
      limit,
      total_pages: Math.ceil((count || 0) / limit),
      backend_source: 'SUPABASE_POSTGRESQL',
      database_status: 'CONNECTED',
    })
  } catch (err) {
    return NextResponse.json(
      { success: false, error: err instanceof Error ? err.message : 'Internal query error' },
      { status: 500 }
    )
  }
}

export async function POST() {
  return new NextResponse(
    JSON.stringify({ success: false, error: 'Method Not Allowed' }),
    {
      status: 405,
      headers: {
        'Content-Type': 'application/json',
        'Allow': 'GET',
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
        'Allow': 'GET',
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
        'Allow': 'GET',
      },
    }
  )
}
