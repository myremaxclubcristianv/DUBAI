import { ProvenanceMetadata } from '@/types/provenance'
import { createOfficialProvenance } from './sources'

export interface ProjectItem {
  id: string
  slug: string
  name: string
  developer_name: string
  developer_id: string
  area_name: string
  area_id: string
  completion_status: 'Under Construction' | 'Completed' | 'Off-Plan'
  completion_year: string
  escrow_verified: boolean
  unit_types: string
  starting_price?: number
  image: string
  description: string
  provenance: ProvenanceMetadata
}

export const VERIFIED_PROJECTS: ProjectItem[] = [
  {
    id: 'proj-one-palm',
    slug: 'one-at-palm-jumeirah',
    name: 'One at Palm Jumeirah (Dorchester Collection)',
    developer_name: 'OMNIYAT',
    developer_id: 'dev-omniyat',
    area_name: 'Palm Jumeirah',
    area_id: 'area-palm-jumeirah',
    completion_status: 'Completed',
    completion_year: '2021',
    escrow_verified: true,
    unit_types: '3, 4, 5-Bedroom Luxury Penthouses & Duplexes',
    starting_price: 24000000,
    image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1200&q=80',
    description: 'Award-winning architectural landmark on the Trunk of Palm Jumeirah managed by Dorchester Collection with private beachfront and yacht marina.',
    provenance: createOfficialProvenance(
      'DLD',
      'Dubai Law No. 7 of 2006',
      'DLD Title Registry & Escrow Account'
    ),
  },
  {
    id: 'proj-il-primo',
    slug: 'il-primo-opera-district',
    name: 'Il Primo Opera District',
    developer_name: 'Emaar Properties PJSC',
    developer_id: 'dev-emaar',
    area_name: 'Downtown Dubai',
    area_id: 'area-downtown-dubai',
    completion_status: 'Completed',
    completion_year: '2023',
    escrow_verified: true,
    unit_types: '4, 5, 6-Bedroom Ultra-Prime Penthouses',
    starting_price: 32000000,
    image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1200&q=80',
    description: '77-story premier residential tower positioned directly opposite Dubai Opera and Burj Khalifa with unobstructed fountain views.',
    provenance: createOfficialProvenance(
      'DLD',
      'Dubai Law No. 7 of 2006',
      'DLD Title Registry & Escrow Account'
    ),
  },
  {
    id: 'proj-sobha-seahaven',
    slug: 'sobha-seahaven',
    name: 'Sobha Seahaven Tower A & B',
    developer_name: 'Sobha Realty',
    developer_id: 'dev-sobha',
    area_name: 'Dubai Marina / Dubai Harbour',
    area_id: 'area-dubai-marina',
    completion_status: 'Under Construction',
    completion_year: 'Q4 2026',
    escrow_verified: true,
    unit_types: '1, 2, 3, 4-Bedroom Waterfront Residences',
    starting_price: 3800000,
    image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=1200&q=80',
    description: 'Triple-tower waterfront development at Dubai Harbour with 360-degree vistas of Palm Jumeirah, Ain Dubai, and superyacht berths.',
    provenance: createOfficialProvenance(
      'DLD',
      'Law No. 8 of 2007 (Escrow Accounts)',
      'DLD Supervised Escrow Account'
    ),
  },
  {
    id: 'proj-central-park',
    slug: 'central-park-city-walk',
    name: 'Central Park at City Walk',
    developer_name: 'Meraas (Dubai Holding)',
    developer_id: 'dev-meraas',
    area_name: 'City Walk',
    area_id: 'area-city-walk',
    completion_status: 'Completed',
    completion_year: '2024',
    escrow_verified: true,
    unit_types: '1, 2, 3, 4-Bedroom Contemporary Apartments',
    starting_price: 2800000,
    image: 'https://images.unsplash.com/photo-1578683010236-d716f9a3f461?auto=format&fit=crop&w=1200&q=80',
    description: 'Contemporary European-style low-rise residential district centered around a 48,000 sqm private landscaped park in central Jumeirah.',
    provenance: createOfficialProvenance(
      'DLD',
      'Dubai Law No. 7 of 2006',
      'DLD Title Registry & Escrow Account'
    ),
  },
  {
    id: 'proj-hills-park',
    slug: 'dubai-hills-golf-mansions',
    name: 'Dubai Hills Park & Golf Mansions',
    developer_name: 'Emaar Properties PJSC',
    developer_id: 'dev-emaar',
    area_name: 'Dubai Hills Estate',
    area_id: 'area-dubai-hills-estate',
    completion_status: 'Completed',
    completion_year: '2022',
    escrow_verified: true,
    unit_types: '5, 6, 7-Bedroom Fairway Mansions',
    starting_price: 35000000,
    image: 'https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&w=1200&q=80',
    description: 'Private golf front estates facing the 18-hole championship golf course and Downtown Dubai skyline.',
    provenance: createOfficialProvenance(
      'DLD',
      'Dubai Law No. 7 of 2006',
      'DLD Title Registry'
    ),
  },
  {
    id: 'proj-marina-gate',
    slug: 'the-residences-at-marina-gate',
    name: 'The Residences at Marina Gate',
    developer_name: 'Select Group',
    developer_id: 'dev-select-group',
    area_name: 'Dubai Marina',
    area_id: 'area-dubai-marina',
    completion_status: 'Completed',
    completion_year: '2020',
    escrow_verified: true,
    unit_types: '1, 2, 3-Bedroom Apartments & Duplex Penthouses',
    starting_price: 2100000,
    image: 'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=1200&q=80',
    description: 'Three-tower waterfront development marking the gateway entrance to Dubai Marina promenade with premium wellness amenities.',
    provenance: createOfficialProvenance(
      'DLD',
      'Dubai Law No. 7 of 2006',
      'DLD Title Registry'
    ),
  },
]
