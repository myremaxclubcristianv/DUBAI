import {
  PropertyRecord,
  AreaRecord,
  DeveloperRecord,
  LifestyleRecord,
} from '@/types/provenance'
import { VERIFIED_PROPERTIES, getPropertyById, getPropertyBySlug } from '@/lib/data/properties'
import { VERIFIED_PROJECTS } from '@/lib/data/projects'
import { VERIFIED_DEVELOPERS, getDeveloperById, getDeveloperBySlug } from '@/lib/data/developers'
import { DUBAI_AREAS, getAreaById, getAreaBySlug } from '@/lib/data/areas'
import { VERIFIED_LIFESTYLE, getLifestyleByCategory } from '@/lib/data/lifestyle'

export interface PropertyQueryFilters {
  query?: string
  area_name?: string
  property_type?: string
  completion_status?: string
  price_min?: number
  price_max?: number
  bedrooms?: number
  bathrooms?: number
  developer_name?: string
  sortBy?: 'price_asc' | 'price_desc' | 'area_asc' | 'area_desc' | 'bedrooms_desc'
  limit?: number
  offset?: number
}

export interface PaginatedResult<T> {
  data: T[]
  total: number
  limit: number
  offset: number
  hasMore: boolean
}

/**
 * Property Repository Interface
 * Serves verified static records today and prepares interface for future Supabase SQL queries.
 */
export const PropertyRepository = {
  async getAll(): Promise<PropertyRecord[]> {
    return [...VERIFIED_PROPERTIES]
  },

  async getById(id: string): Promise<PropertyRecord | null> {
    const p = getPropertyById(id)
    return p || null
  },

  async getBySlug(slug: string): Promise<PropertyRecord | null> {
    const p = getPropertyBySlug(slug)
    return p || null
  },

  async find(filters: PropertyQueryFilters): Promise<PaginatedResult<PropertyRecord>> {
    let list = [...VERIFIED_PROPERTIES]

    if (filters.query) {
      const q = filters.query.toLowerCase().trim()
      list = list.filter(
        (p) =>
          p.title.toLowerCase().includes(q) ||
          p.area_name.toLowerCase().includes(q) ||
          p.developer_name.toLowerCase().includes(q) ||
          p.property_type.toLowerCase().includes(q) ||
          (p.project_name && p.project_name.toLowerCase().includes(q))
      )
    }

    if (filters.area_name && filters.area_name !== 'ALL') {
      list = list.filter((p) => p.area_name === filters.area_name)
    }

    if (filters.property_type && filters.property_type !== 'ALL') {
      list = list.filter((p) => p.property_type === filters.property_type)
    }

    if (filters.completion_status && filters.completion_status !== 'ALL') {
      list = list.filter((p) => p.completion_status === filters.completion_status)
    }

    if (filters.price_min !== undefined) {
      list = list.filter((p) => (p.asking_price || 0) >= filters.price_min!)
    }

    if (filters.price_max !== undefined) {
      list = list.filter((p) => (p.asking_price || 0) <= filters.price_max!)
    }

    if (filters.bedrooms !== undefined) {
      list = list.filter((p) => p.bedrooms >= filters.bedrooms!)
    }

    if (filters.developer_name && filters.developer_name !== 'ALL') {
      list = list.filter((p) => p.developer_name === filters.developer_name)
    }

    // Sort
    if (filters.sortBy === 'price_asc') {
      list.sort((a, b) => (a.asking_price || 0) - (b.asking_price || 0))
    } else if (filters.sortBy === 'price_desc') {
      list.sort((a, b) => (b.asking_price || 0) - (a.asking_price || 0))
    } else if (filters.sortBy === 'area_desc') {
      list.sort((a, b) => (b.internal_area_sqft || 0) - (a.internal_area_sqft || 0))
    } else if (filters.sortBy === 'bedrooms_desc') {
      list.sort((a, b) => (b.bedrooms || 0) - (a.bedrooms || 0))
    }

    const total = list.length
    const limit = filters.limit || 20
    const offset = filters.offset || 0
    const paginated = list.slice(offset, offset + limit)

    return {
      data: paginated,
      total,
      limit,
      offset,
      hasMore: offset + limit < total,
    }
  },
}

/**
 * Project Repository
 */
export const ProjectRepository = {
  async getAll() {
    return [...VERIFIED_PROJECTS]
  },

  async getById(id: string) {
    return VERIFIED_PROJECTS.find((p) => p.id === id) || null
  },

  async getBySlug(slug: string) {
    return VERIFIED_PROJECTS.find((p) => p.slug === slug) || null
  },
}

/**
 * Developer Repository
 */
export const DeveloperRepository = {
  async getAll(): Promise<DeveloperRecord[]> {
    return [...VERIFIED_DEVELOPERS]
  },

  async getById(id: string): Promise<DeveloperRecord | null> {
    return getDeveloperById(id) || null
  },

  async getBySlug(slug: string): Promise<DeveloperRecord | null> {
    return getDeveloperBySlug(slug) || null
  },
}

/**
 * Area Repository
 */
export const AreaRepository = {
  async getAll(): Promise<AreaRecord[]> {
    return [...DUBAI_AREAS]
  },

  async getById(id: string): Promise<AreaRecord | null> {
    return getAreaById(id) || null
  },

  async getBySlug(slug: string): Promise<AreaRecord | null> {
    return getAreaBySlug(slug) || null
  },
}

/**
 * Lifestyle Repository
 */
export const LifestyleRepository = {
  async getAll(): Promise<LifestyleRecord[]> {
    return [...VERIFIED_LIFESTYLE]
  },

  async getByCategory(category: LifestyleRecord['category']): Promise<LifestyleRecord[]> {
    return getLifestyleByCategory(category)
  },
}

/**
 * Universal Search Repository
 */
export const SearchRepository = {
  async search(query: string, category = 'all') {
    const q = query.trim().toLowerCase()
    const results: Array<{
      id: string
      type: 'property' | 'project' | 'developer' | 'area'
      title: string
      subtitle?: string
      slug?: string
      price?: number
      status?: string
    }> = []

    if (category === 'all' || category === 'properties') {
      const properties = VERIFIED_PROPERTIES.filter(
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
      results.push(...properties)
    }

    if (category === 'all' || category === 'projects') {
      const projects = VERIFIED_PROJECTS.filter(
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
      results.push(...projects)
    }

    if (category === 'all' || category === 'developers') {
      const developers = VERIFIED_DEVELOPERS.filter(
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
      results.push(...developers)
    }

    if (category === 'all' || category === 'areas') {
      const areas = DUBAI_AREAS.filter(
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
      results.push(...areas)
    }

    return results
  },
}
