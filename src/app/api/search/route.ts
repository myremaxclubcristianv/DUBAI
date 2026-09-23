import { NextRequest, NextResponse } from 'next/server'
import { createServerClient, isSupabaseServerConfigured } from '@/lib/supabase/server'
import { VERIFIED_PROPERTIES } from '@/lib/data/properties'
import { VERIFIED_PROJECTS } from '@/lib/data/projects'
import { VERIFIED_DEVELOPERS } from '@/lib/data/developers'
import { DUBAI_AREAS } from '@/lib/data/areas'

const ALLOWED_CATEGORIES = ['all', 'properties', 'projects', 'developers', 'areas']

export async function GET(request: NextRequest) {
  try {
    const searchParams = request.nextUrl.searchParams
    const rawQ = searchParams.get('q') || ''
    const q = rawQ.slice(0, 100).trim().toLowerCase()
    const rawCategory = searchParams.get('category') || 'all'
    const category = ALLOWED_CATEGORIES.includes(rawCategory) ? rawCategory : 'all'
    const limit = Math.min(50, Math.max(1, parseInt(searchParams.get('limit') || '20', 10)))
    const page = Math.max(1, parseInt(searchParams.get('page') || '1', 10))
    const offset = (page - 1) * limit

    if (!isSupabaseServerConfigured()) {
      // Return audited static baseline search results with honest provenance disclosure
      let results: Array<{
        id: string
        type: 'property' | 'project' | 'developer' | 'area'
        title: string
        subtitle?: string
        slug?: string
        price?: number
        status?: string
      }> = []

      if (category === 'all' || category === 'properties') {
        const filtered = VERIFIED_PROPERTIES.filter(
          (p) =>
            !q ||
            p.title.toLowerCase().includes(q) ||
            p.area_name.toLowerCase().includes(q) ||
            p.developer_name.toLowerCase().includes(q) ||
            p.property_type.toLowerCase().includes(q)
        ).map((p) => ({
          id: p.id,
          type: 'property' as const,
          title: p.title,
          subtitle: `${p.bedrooms} Beds • ${p.area_name} • ${p.property_type}`,
          slug: p.slug,
          price: p.asking_price,
          status: p.completion_status,
        }))
        results = results.concat(filtered)
      }

      if (category === 'all' || category === 'projects') {
        const filtered = VERIFIED_PROJECTS.filter(
          (proj) =>
            !q ||
            proj.name.toLowerCase().includes(q) ||
            proj.area_name.toLowerCase().includes(q) ||
            proj.developer_name.toLowerCase().includes(q)
        ).map((proj) => ({
          id: proj.id,
          type: 'project' as const,
          title: proj.name,
          subtitle: `${proj.area_name} • By ${proj.developer_name}`,
          slug: proj.slug,
          price: proj.starting_price,
          status: proj.completion_status,
        }))
        results = results.concat(filtered)
      }

      if (category === 'all' || category === 'developers') {
        const filtered = VERIFIED_DEVELOPERS.filter(
          (dev) =>
            !q ||
            dev.name.toLowerCase().includes(q) ||
            dev.portfolio_overview.toLowerCase().includes(q)
        ).map((dev) => ({
          id: dev.id,
          type: 'developer' as const,
          title: dev.name,
          subtitle: `Founded ${dev.founded_year} • HQ ${dev.headquarters}`,
          slug: dev.slug,
        }))
        results = results.concat(filtered)
      }

      if (category === 'all' || category === 'areas') {
        const filtered = DUBAI_AREAS.filter(
          (area) =>
            !q ||
            area.name.toLowerCase().includes(q) ||
            area.sector.toLowerCase().includes(q) ||
            area.description.toLowerCase().includes(q)
        ).map((area) => ({
          id: area.id,
          type: 'area' as const,
          title: area.name,
          subtitle: `${area.sector} • ${area.freehold_status}`,
          slug: area.slug,
        }))
        results = results.concat(filtered)
      }

      const total = results.length
      const paginated = results.slice(offset, offset + limit)

      return NextResponse.json({
        success: true,
        query: q,
        total,
        page,
        limit,
        total_pages: Math.ceil(total / limit),
        source: 'STATIC_AUDITED_REGISTRY',
        backend_status: 'SUPABASE_UNPROVISIONED',
        results: paginated,
      })
    }

    // Live Supabase database search query
    const supabase = createServerClient()
    if (!supabase) {
      throw new Error('Supabase client failed initialization')
    }

    let query = supabase
      .from('properties')
      .select('id, title, property_type, asking_price, bedrooms, completion_status, area_name', { count: 'exact' })
      .range(offset, offset + limit - 1)

    if (q) {
      query = query.ilike('title', `%${q}%`)
    }

    const { data, count, error } = await query

    if (error) {
      return NextResponse.json({ success: false, error: 'Failed to complete database search query.' }, { status: 500 })
    }

    return NextResponse.json({
      success: true,
      query: q,
      total: count || 0,
      page,
      limit,
      total_pages: Math.ceil((count || 0) / limit),
      source: 'SUPABASE_POSTGRESQL',
      backend_status: 'CONNECTED',
      results: data || [],
    })
  } catch {
    return NextResponse.json(
      { success: false, error: 'Invalid search request' },
      { status: 400 }
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
