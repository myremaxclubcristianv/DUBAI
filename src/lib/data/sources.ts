import { ProvenanceMetadata } from '@/types/provenance'

export interface OfficialSource {
  id: string
  code: string
  name: string
  authority_type: 'GOVERNMENT' | 'REGULATORY' | 'CORPORATE' | 'LICENSED_OPERATOR' | 'REPUTABLE_EDITORIAL' | 'GLOBAL_STANDARD'
  jurisdiction: 'Emirate of Dubai' | 'United Arab Emirates' | 'Federal' | 'International'
  official_url: string
  description: string
  key_mandate: string
  verification_date: string
  reliability_level: 'TIER_1_STATUTORY' | 'TIER_2_CORPORATE' | 'TIER_3_OPERATOR' | 'TIER_4_EDITORIAL'
}

export const OFFICIAL_SOURCES_REGISTRY: OfficialSource[] = [
  {
    id: 'src-dld',
    code: 'DLD',
    name: 'Dubai Land Department',
    authority_type: 'GOVERNMENT',
    jurisdiction: 'Emirate of Dubai',
    official_url: 'https://dubailand.gov.ae/',
    description: 'Government entity responsible for the registration, organization, and promotion of real estate investments in Dubai.',
    key_mandate: 'Property registration, title deed issuance, RERA regulation, escrow account supervision, and official transaction ledger.',
    verification_date: '2026-09-01',
    reliability_level: 'TIER_1_STATUTORY',
  },
  {
    id: 'src-rera',
    code: 'RERA',
    name: 'Real Estate Regulatory Agency',
    authority_type: 'REGULATORY',
    jurisdiction: 'Emirate of Dubai',
    official_url: 'https://dubailand.gov.ae/en/about-dubai-land-department/real-estate-regulatory-agency/',
    description: 'The regulatory arm of DLD that sets policies, regulates real estate companies, brokers, and publishes the official Rental Index.',
    key_mandate: 'Broker licensing, rental index calculation, developer project registration, and tenancy contract dispute guidelines.',
    verification_date: '2026-09-01',
    reliability_level: 'TIER_1_STATUTORY',
  },
  {
    id: 'src-gdrfa',
    code: 'GDRFA',
    name: 'General Directorate of Residency and Foreigners Affairs - Dubai',
    authority_type: 'GOVERNMENT',
    jurisdiction: 'Emirate of Dubai',
    official_url: 'https://www.gdrfad.gov.ae/',
    description: 'Official department managing entry permits, residency visas, and the UAE Real Estate Investor Residency / Golden Visa schemes for investors.',
    key_mandate: 'Residency issuance, Real Estate Investor Residency verification, entry clearance, and citizenship services.',
    verification_date: '2026-09-01',
    reliability_level: 'TIER_1_STATUTORY',
  },
  {
    id: 'src-fta',
    code: 'FTA',
    name: 'Federal Tax Authority (UAE)',
    authority_type: 'GOVERNMENT',
    jurisdiction: 'Federal',
    official_url: 'https://tax.gov.ae/',
    description: 'Federal authority responsible for managing and collecting federal taxes (VAT and Corporate Tax) in the UAE.',
    key_mandate: '5% VAT on commercial real estate, corporate tax administration, and personal real estate exclusion framework for natural persons under Cabinet Decision No. 49 of 2023.',
    verification_date: '2026-09-01',
    reliability_level: 'TIER_1_STATUTORY',
  },
  {
    id: 'src-cbuae',
    code: 'CBUAE',
    name: 'Central Bank of the United Arab Emirates',
    authority_type: 'REGULATORY',
    jurisdiction: 'Federal',
    official_url: 'https://www.centralbank.ae/',
    description: 'The banking and financial supervisory authority establishing mortgage Loan-to-Value (LTV) limits and bank lending regulations.',
    key_mandate: 'Mortgage Loan-to-Value (LTV) limits, debt-burden ratio (DBR max 50%), and banking sector liquidity oversight.',
    verification_date: '2026-09-01',
    reliability_level: 'TIER_1_STATUTORY',
  },
  {
    id: 'src-det',
    code: 'DET',
    name: 'Dubai Department of Economy and Tourism',
    authority_type: 'GOVERNMENT',
    jurisdiction: 'Emirate of Dubai',
    official_url: 'https://www.dubai.ae/en/about-dubai/dubai-economy-and-tourism',
    description: 'Principal authority for the planning, supervision, development, and marketing of tourism and commercial licensing in Dubai.',
    key_mandate: 'Commercial company registration, trade licensing, holiday home regulation, and hotel classifications.',
    verification_date: '2026-09-01',
    reliability_level: 'TIER_1_STATUTORY',
  },
  {
    id: 'src-rta',
    code: 'RTA',
    name: 'Roads and Transport Authority Dubai',
    authority_type: 'GOVERNMENT',
    jurisdiction: 'Emirate of Dubai',
    official_url: 'https://www.rta.ae/',
    description: 'Authority responsible for planning and executing transport and traffic infrastructure (Metro, Tram, Marine transport).',
    key_mandate: 'Public transit routes, master transport infrastructure, and marine transit integration.',
    verification_date: '2026-09-01',
    reliability_level: 'TIER_1_STATUTORY',
  },
  {
    id: 'src-michelin',
    code: 'MICHELIN_GUIDE',
    name: 'Michelin Guide Dubai',
    authority_type: 'REPUTABLE_EDITORIAL',
    jurisdiction: 'International',
    official_url: 'https://guide.michelin.com/en/ae/dubai/restaurants',
    description: 'Independent international culinary guide publishing certified star ratings and selections for Dubai restaurants.',
    key_mandate: 'Independent anonymous inspection and awarding of 1-Star, 2-Star, 3-Star, and Green Star culinary ratings.',
    verification_date: '2026-09-01',
    reliability_level: 'TIER_4_EDITORIAL',
  },
  {
    id: 'src-dld-cube',
    code: 'DLD_CUBE',
    name: 'DLD Cube (Investor Customer Service Center)',
    authority_type: 'GOVERNMENT',
    jurisdiction: 'Emirate of Dubai',
    official_url: 'https://dldcube.com/',
    description: 'Specialized investor customer service center operated under the Dubai Land Department for processing property investor residencies, Golden Visas, and title clearances.',
    key_mandate: 'Real estate investor residency facilitation, medical fitness coordination, Emirates ID clearance, and Golden Visa documentation.',
    verification_date: '2026-09-01',
    reliability_level: 'TIER_1_STATUTORY',
  },
]

export function getSourceByCode(code: string): OfficialSource | undefined {
  return OFFICIAL_SOURCES_REGISTRY.find((s) => s.code === code)
}

export function createOfficialProvenance(
  sourceCode: string,
  legalDecree?: string,
  notes?: string,
  conditions?: string
): ProvenanceMetadata {
  const source = getSourceByCode(sourceCode)
  const isRegulatory = source?.authority_type === 'REGULATORY'
  const isEditorial = source?.authority_type === 'REPUTABLE_EDITORIAL'
  
  return {
    source_id: source?.id || `src-${sourceCode.toLowerCase()}`,
    source_name: source?.name || sourceCode,
    source_type: isRegulatory ? 'REGULATORY' : isEditorial ? 'EDITORIAL' : 'GOVERNMENT',
    source_tier: source?.reliability_level || 'TIER_1_STATUTORY',
    source_url: source?.official_url,
    legal_decree: legalDecree,
    retrieved_at: '2026-09-17T20:00:00Z',
    verified_at: source?.verification_date || '2026-09-01',
    verification_status: isEditorial ? 'EDITORIAL SOURCE' : sourceCode === 'DLD' || sourceCode === 'RERA' ? 'DLD OFFICIAL DATA' : 'OFFICIAL SOURCE',
    confidence_score: 100,
    notes,
    conditions,
  }
}
