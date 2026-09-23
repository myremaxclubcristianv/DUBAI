import { ProvenanceMetadata } from '@/types/provenance'

export interface PrivateClientService {
  id: string
  title: string
  category: 'REAL_ESTATE' | 'INVESTMENTS' | 'INSURANCE' | 'CREDIT_FINANCE' | 'MARKET_INTELLIGENCE' | 'PRIVATE_CLIENT'
  headline: string
  description: string
  deliverables: string[]
  provenance: ProvenanceMetadata
}

export const CRISTIAN_VADUVA_PROFILE = {
  name: 'Cristian Văduva',
  title: 'Private Client Advisory & Real Estate Intelligence',
  brand: 'CRISTIAN VĂDUVA',
  official_website: 'https://cristianvaduva.com/',
  official_portal: 'https://cristianvaduva.com/',
  overview: 'Bespoke private advisory practice for international family offices, institutional investors, and ultra-high-net-worth individuals navigating Dubai real estate acquisitions, investment structuring, insurance protection, and credit financing.',
  core_pillars: [
    'Real Estate Advisory',
    'Investments & Capital Structuring',
    'Insurance Solutions',
    'Credit & Finance Advisory',
    'Market Intelligence & Data Provenance',
  ],
  verified_provenance: {
    source_id: 'src-cv-official',
    source_name: 'Cristian Văduva Official Domain',
    source_type: 'USER',
    source_url: 'https://cristianvaduva.com/',
    retrieved_at: '2026-09-17T20:00:00Z',
    verified_at: '2026-09-01',
    verification_status: 'OFFICIAL SOURCE',
    confidence_score: 100,
    notes: 'Verified official private client desk and advisory services ecosystem.',
  } as ProvenanceMetadata,
}

export const PRIVATE_CLIENT_SERVICES: PrivateClientService[] = [
  {
    id: 'srv-real-estate',
    title: 'Prime Real Estate Advisory',
    category: 'REAL_ESTATE',
    headline: 'Discreet acquisition and disposition of prime Dubai residential and commercial assets.',
    description: 'Direct access to verified off-market penthouses, beachfront villas, and primary developer allocations with meticulous due diligence and DLD escrow verification.',
    deliverables: [
      'Comprehensive Property Dossier & Title Deed Due Diligence',
      'Transaction Price History & Comparable Sales Analysis',
      'Direct Master Developer Unit Allocations (Emaar, Nakheel, Omniyat, Meraas)',
      'Confidential Contract Negotiation & Form F / SPA Structuring',
    ],
    provenance: CRISTIAN_VADUVA_PROFILE.verified_provenance,
  },
  {
    id: 'srv-investment',
    title: 'Investment Structuring & Intelligence',
    category: 'INVESTMENTS',
    headline: 'Data-driven capital deployment focused on risk-adjusted net yields and capital preservation.',
    description: 'Independent evaluation of off-plan payment schedules, cash-on-cash projections, and exit horizons free from developer sales bias.',
    deliverables: [
      'Multi-Scenario Cash Flow & Net Yield Modeling',
      'Post-Handover Payment Plan Stress Testing',
      'Market Entry & Portfolio Rebalancing Roadmaps',
      'Data-Backed Exit Strategy & Capital Repatriation Guidance',
    ],
    provenance: CRISTIAN_VADUVA_PROFILE.verified_provenance,
  },
  {
    id: 'srv-credit-finance',
    title: 'Credit & Mortgage Advisory',
    category: 'CREDIT_FINANCE',
    headline: 'Optimized debt structuring in compliance with UAE Central Bank regulatory ceilings.',
    description: 'Bespoke mortgage advisory for UAE residents and international non-resident buyers across major UAE commercial and private banks.',
    deliverables: [
      'Non-Resident & Resident Mortgage Eligibility Assessment',
      'Pre-Approval Coordination with Tier-1 UAE Lending Institutions',
      'Debt-Burden Ratio (DBR) & LTV Optimization',
      'Cross-Border Equity Transfer & Escrow Coordination',
    ],
    provenance: CRISTIAN_VADUVA_PROFILE.verified_provenance,
  },
  {
    id: 'srv-insurance',
    title: 'Asset Protection & Insurance Advisory',
    category: 'INSURANCE',
    headline: 'Comprehensive risk mitigation and asset protection for high-value physical real estate.',
    description: 'Strategic insurance structuring covering luxury building fabric, high-value art/interiors, third-party liability, and landlord protection policies.',
    deliverables: [
      'High-Value Property & Building Insurance Due Diligence',
      'Landlord Default & Loss of Rent Coverage Advisory',
      'Title and Escrow Risk Mitigation',
    ],
    provenance: CRISTIAN_VADUVA_PROFILE.verified_provenance,
  },
  {
    id: 'srv-private-office',
    title: 'Private Office & Residency Coordination',
    category: 'PRIVATE_CLIENT',
    headline: 'End-to-end advisory coordination of UAE Real Estate Investor Residency & Golden Visa schemes.',
    description: 'Seamless integration with GDRFA, Dubai Land Department, and Free Zone authorities for family residency stamping and corporate banking setup.',
    deliverables: [
      'DLD Title Deed Golden Visa Eligibility Audit (AED 2M+ freehold)',
      'Executive Medical Clearance & Emirates ID Registration Coordination',
      'Family & Dependent Sponsorship Coordination',
      'Family Office Relocation & Banking Introductions',
    ],
    provenance: CRISTIAN_VADUVA_PROFILE.verified_provenance,
  },
]
