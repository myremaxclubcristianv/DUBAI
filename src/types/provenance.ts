export type SourceStatus =
  | 'DLD OFFICIAL DATA'
  | 'UAE GOVERNMENT'
  | 'FTA OFFICIAL'
  | 'DET OFFICIAL'
  | 'OFFICIAL SOURCE'
  | 'DEVELOPER SOURCE'
  | 'LICENSED OPERATOR'
  | 'EDITORIAL SOURCE'
  | 'REPUTABLE EDITORIAL SOURCE'
  | 'OFFICIAL CORPORATE SOURCE'
  | 'PUBLIC SOURCE'
  | 'MARKET DATA'
  | 'INDICATIVE'
  | 'ESTIMATE'
  | 'USER PROVIDED'
  | 'CALCULATED'
  | 'VERIFIED'
  | 'STATUTORY_RECORDS'
  | 'GOVERNMENT_REGISTRY'
  | 'THIRD_PARTY_AUDIT'
  | 'NOT VERIFIED'
  | 'PRICE ON REQUEST'

export interface ProvenanceMetadata {
  source_id?: string
  source_name: string
  source_type: 'GOVERNMENT' | 'DEVELOPER' | 'LICENSED_OPERATOR' | 'REGULATORY' | 'CALCULATED' | 'USER' | 'EDITORIAL' | 'CORPORATE' | 'GOVERNMENT_REGISTRY' | 'STATUTORY_RECORDS' | 'THIRD_PARTY_AUDIT'
  source_tier?: 'TIER_1_STATUTORY' | 'TIER_2_CORPORATE' | 'TIER_2_DEVELOPER' | 'TIER_3_OPERATOR' | 'TIER_3_LICENSED_PROFESSIONAL' | 'TIER_4_EDITORIAL' | 'TIER_5_UNVERIFIED'
  source_url?: string
  source_reference?: string
  evidence_reference?: string
  legal_decree?: string
  publication_date?: string
  data_period?: string
  retrieved_at?: string
  verified_at?: string
  verification_status: SourceStatus
  confidence_score?: number // 0 to 100
  notes?: string
  conditions?: string
}

export type SourceProvenance = ProvenanceMetadata

export interface ProvenanceField<T> {
  value: T
  provenance: ProvenanceMetadata
}

export interface AreaRecord {
  id: string
  slug: string
  name: string
  arabic_name?: string
  sector: 'DOWNTOWN' | 'WATERFRONT' | 'GOLF_SUBURBS' | 'FINANCIAL' | 'INLAND' | 'ISLAND'
  master_developer: string
  freehold_status: 'FREEHOLD' | 'LEASEHOLD'
  coordinates: {
    lat: number
    lng: number
  }
  image?: string
  description: string
  investment_profile?: string
  lifestyle_tags: string[]
  transit: {
    metro_stations?: string[]
    tram?: boolean
    water_taxi?: boolean
    airport_mins_dxb: number
    airport_mins_dwc: number
    downtown_mins?: number
  }
  amenities: {
    schools_nearby: string[]
    hospitals_nearby: string[]
    malls_nearby: string[]
    beaches_nearby?: string[]
    golf_courses?: string[]
  }
  provenance: ProvenanceMetadata
}

export interface DeveloperRecord {
  id: string
  slug: string
  name: string
  arabic_name?: string
  dld_developer_number?: string
  trade_license?: string
  founded_year: number
  headquarters: string
  official_website: string
  contact_email?: string
  image?: string
  portfolio_overview: string
  notable_communities: string[]
  provenance: ProvenanceMetadata
}

export interface PropertyRecord {
  id: string
  slug: string
  title: string // Main display title
  official_project_name?: string
  editorial_display_name?: string
  unit_descriptor?: string
  property_type: 'Apartment' | 'Villa' | 'Penthouse' | 'Townhouse' | 'Mansion' | 'Branded Residence'
  listing_type: 'Sale' | 'Rent'
  completion_status: 'Ready' | 'Off-Plan'
  description?: string
  
  // Strict separation of prices and sourcing channel
  asking_price?: number // in AED
  asking_price_channel?: 'DEVELOPER_DIRECT_INVENTORY' | 'SECONDARY_MARKET_LISTING'
  transaction_price?: number // in AED if recorded
  market_estimate?: number // in AED if analytical
  
  asking_rent_annual?: number // in AED
  achieved_rent_annual?: number // in AED
  
  currency: 'AED'
  bedrooms: number
  bathrooms: number
  internal_area_sqft: number
  plot_area_sqft?: number
  
  price_per_sqft?: number // Derived explicitly or verified
  
  building_name?: string
  project_id?: string
  project_name?: string
  developer_id: string
  developer_name: string
  area_id: string
  area_name: string
  coordinate_precision?: 'PROJECT_CENTROID' | 'COMMUNITY_CENTROID' | 'EXACT_PROPERTY_LOCATION'
  
  furnishing: 'Unfurnished' | 'Semi-Furnished' | 'Fully Furnished'
  handover_date?: string
  service_charge_per_sqft?: number // Verified AED/sqft/year
  
  payment_plan?: {
    reservation_pct: number
    construction_pct: number
    handover_pct: number
    post_handover_pct: number
    post_handover_months?: number
  }
  
  amenities: string[]
  images: string[]
  verified_features: string[]
  
  provenance: ProvenanceMetadata
}

export interface ProjectRecord {
  id: string
  slug: string
  name: string
  developer_id: string
  developer_name: string
  area_id: string
  area_name: string
  completion_status: 'Under Construction' | 'Completed' | 'Announced'
  estimated_completion?: string
  escrow_account_verified: boolean
  unit_types: string[]
  starting_price?: number
  official_brochure_url?: string
  official_website?: string
  provenance: ProvenanceMetadata
}

export interface LifestyleRecord {
  id: string
  slug: string
  title: string
  category: 'yachts' | 'aviation' | 'safari' | 'cars' | 'dining' | 'hotels' | 'concierge' | 'clubs'
  operator_name: string
  location: string
  image?: string
  description: string
  specs?: Record<string, string | number>
  pricing_type: 'FIXED' | 'INDICATIVE' | 'ON_REQUEST'
  price_display: string
  official_url?: string
  provenance: ProvenanceMetadata
}

export interface StatutoryFeeRule {
  id: string
  name: string
  category: 'DLD' | 'TRUSTEE' | 'MORTGAGE' | 'BROKERAGE' | 'TAX' | 'VISA'
  rate_pct?: number
  fixed_amount_aed?: number
  vat_applicable: boolean
  vat_rate_pct: number
  legal_reference: string
  description: string
  conditions: string
  provenance: ProvenanceMetadata
}
