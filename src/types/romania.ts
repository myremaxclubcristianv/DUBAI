import { ProvenanceMetadata } from './provenance'

export interface RomaniaPropertyRecord {
  id: string
  slug: string
  title: string
  city: string
  county: string
  address?: string
  property_type: 'Apartment' | 'Villa' | 'Penthouse' | 'Land' | 'Commercial' | 'House'
  listing_type: 'Sale' | 'Rent'
  price_eur?: number
  price_ron?: number
  price_display: string
  rooms?: number
  bedrooms?: number
  bathrooms?: number
  surface_sqm: number
  surface_sqft: number
  description: string
  images: string[]
  features: string[]
  provenance: ProvenanceMetadata
}
