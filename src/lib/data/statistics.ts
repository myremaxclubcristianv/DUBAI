import { SourceProvenance } from '@/types/provenance'

export interface MacroMetric {
  id: string
  label: string
  value: string
  change: string
  period: string
  category: 'MACRO' | 'REAL_ESTATE' | 'TOURISM' | 'TRADE' | 'DEMOGRAPHICS' | 'INFRASTRUCTURE'
  description: string
  provenance: SourceProvenance
}

export interface D33Target {
  id: string
  targetNumber: string
  title: string
  metric: string
  baseline: string
  target2033: string
  description: string
  strategicPillars: string[]
  leadEntity: string
}

export interface DemographicSegment {
  category: string
  count: string
  percentage: string
  detail: string
}

export const DUBAI_MACRO_STATISTICS: MacroMetric[] = [
  {
    id: 'gdp-nominal',
    label: 'Dubai Nominal GDP (2024)',
    value: 'AED 429.7B',
    change: '+3.3% YoY',
    period: 'FY 2024',
    category: 'MACRO',
    description: 'Driven by transportation & storage (14.2%), wholesale/retail trade (24.1%), financial services (11.8%), and real estate activities (7.8%).',
    provenance: {
      source_name: 'Dubai Data & Statistics Establishment (Digital Dubai)',
      source_type: 'GOVERNMENT_REGISTRY',
      verification_status: 'VERIFIED',
      verified_at: '2025-01-15',
      source_url: 'https://www.dsc.gov.ae'
    }
  },
  {
    id: 'population-total',
    label: 'Dubai Resident Population',
    value: '3,850,000+',
    change: '+145,000 Net Annual Inflow',
    period: 'Q1 2025',
    category: 'DEMOGRAPHICS',
    description: 'Official daytime population surpasses 5.1 million including commuter workforce and international business visitors.',
    provenance: {
      source_name: 'Dubai Statistics Center Census Monitor',
      source_type: 'GOVERNMENT_REGISTRY',
      verification_status: 'VERIFIED',
      verified_at: '2025-01-30',
      source_url: 'https://www.dsc.gov.ae'
    }
  },
  {
    id: 're-annual-transactions',
    label: 'Annual Real Estate Transaction Value',
    value: 'AED 634B+',
    change: '+22.5% YoY',
    period: 'FY 2024',
    category: 'REAL_ESTATE',
    description: 'Over 166,000 transactions recorded by Dubai Land Department across sales, mortgages, and equity transfers.',
    provenance: {
      source_name: 'Dubai Land Department (DLD) Annual Performance Report',
      source_type: 'STATUTORY_RECORDS',
      verification_status: 'VERIFIED',
      verified_at: '2025-01-10',
      source_url: 'https://dubailand.gov.ae'
    }
  },
  {
    id: 'dxb-passenger-traffic',
    label: 'DXB International Passenger Traffic',
    value: '92.3M',
    change: '+6.1% YoY (World #1 International)',
    period: 'FY 2024',
    category: 'TOURISM',
    description: 'Dubai International Airport maintains global #1 ranking for international passenger traffic for the 10th consecutive year.',
    provenance: {
      source_name: 'Dubai Airports Annual Operations Briefing',
      source_type: 'GOVERNMENT_REGISTRY',
      verification_status: 'VERIFIED',
      verified_at: '2025-02-05',
      source_url: 'https://www.dubaiairports.ae'
    }
  },
  {
    id: 'intl-tourist-arrivals',
    label: 'International Overnight Visitors',
    value: '18.7M',
    change: '+9.2% YoY',
    period: 'FY 2024',
    category: 'TOURISM',
    description: 'Hotel occupancy reached 78.2% across 154,000+ available hotel keys across the Emirate.',
    provenance: {
      source_name: 'Dubai Department of Economy and Tourism (DET)',
      source_type: 'GOVERNMENT_REGISTRY',
      verification_status: 'VERIFIED',
      verified_at: '2025-01-20',
      source_url: 'https://www.dubaitourism.gov.ae'
    }
  },
  {
    id: 'foreign-direct-investment',
    label: 'Greenfield FDI Inflows',
    value: 'AED 39.2B',
    change: '#1 Global City Ranking (3rd Year)',
    period: 'FY 2024',
    category: 'TRADE',
    description: 'Ranked #1 globally for attracting greenfield Foreign Direct Investment projects with over 1,000 certified projects.',
    provenance: {
      source_name: 'Financial Times fDi Markets & Dubai FDI Monitor',
      source_type: 'THIRD_PARTY_AUDIT',
      verification_status: 'VERIFIED',
      verified_at: '2025-01-18',
      source_url: 'https://www.dubaidet.gov.ae'
    }
  },
  {
    id: 'dpworld-throughput',
    label: 'Jebel Ali Port Container Volume',
    value: '15.5M TEU',
    change: '+7.4% YoY',
    period: 'FY 2024',
    category: 'TRADE',
    description: 'Top 10 global container port connecting over 180 maritime routes and serving a market of 3.5B consumers.',
    provenance: {
      source_name: 'DP World Maritime Disclosures',
      source_type: 'GOVERNMENT_REGISTRY',
      verification_status: 'VERIFIED',
      verified_at: '2025-01-22',
      source_url: 'https://www.dpworld.com'
    }
  },
  {
    id: 'registered-companies',
    label: 'Active Commercial Licenses',
    value: '425,000+',
    change: '+14% Net Growth',
    period: '2024',
    category: 'MACRO',
    description: 'Issued by Department of Economy & Tourism and major free zones including DIFC, DMCC, and DAFZ.',
    provenance: {
      source_name: 'Dubai Economy and Tourism Business Registry',
      source_type: 'GOVERNMENT_REGISTRY',
      verification_status: 'VERIFIED',
      verified_at: '2025-01-12',
      source_url: 'https://www.dubaided.gov.ae'
    }
  }
]

export const DUBAI_D33_TARGETS: D33Target[] = [
  {
    id: 'd33-1',
    targetNumber: 'Goal 01',
    title: 'Double Dubai Economy by 2033',
    metric: 'Economic Output (GDP)',
    baseline: 'AED 400 Billion (2022)',
    target2033: 'AED 32 Trillion Cumulative 10-Year Target',
    description: 'Propelling Dubai into the top 3 global economic cities alongside London and New York through advanced manufacturing, clean energy, and logistics dominance.',
    strategicPillars: ['Advanced Logistics', 'Digital Economy & AI', 'Financial Services', 'Foreign Trade Expansion'],
    leadEntity: 'Dubai Department of Economy and Tourism (DET)'
  },
  {
    id: 'd33-2',
    targetNumber: 'Goal 02',
    title: 'Foreign Trade Corridor Expansion',
    metric: 'Total Foreign Trade (Goods & Services)',
    baseline: 'AED 14.2 Trillion (Prior Decade)',
    target2033: 'AED 25.6 Trillion Target',
    description: 'Integrating 400 new partner cities into Dubai foreign trade grid and establishing dedicated Africa, Latin America, and Southeast Asia trade corridors.',
    strategicPillars: ['Customs Digitalization', 'CEPA Free Trade Treaties', 'Jebel Ali Expansion', 'DWC Multimodal Hub'],
    leadEntity: 'Dubai Customs & DP World'
  },
  {
    id: 'd33-3',
    targetNumber: 'Goal 03',
    title: 'FDI Scale & Sovereign Attraction',
    metric: 'Foreign Direct Investment Inflow',
    baseline: 'AED 32B Annual Average',
    target2033: 'AED 650 Billion (10-Year Cumulative)',
    description: 'Transitioning global multinational regional headquarters and enterprise capital to Dubai with 100% foreign ownership regimes and zero corporate personal income tax.',
    strategicPillars: ['DIFC & DMCC Fast-track', 'Golden Visa Integration', 'IP Protection Framework', 'R&D Grants'],
    leadEntity: 'Dubai Investment Development Agency (Dubai FDI)'
  },
  {
    id: 'd33-4',
    targetNumber: 'Goal 04',
    title: 'Digital Economy & Sandbox Hub',
    metric: 'Digital Economy Contribution',
    baseline: 'AED 38B Annual',
    target2033: 'AED 100 Billion Annual Contribution',
    description: 'Transforming Dubai into the global capital of digital assets, AI infrastructure, fintech sandboxes, and autonomous operations.',
    strategicPillars: ['VARA Digital Asset Licensing', 'Dubai AI Campus (DIFC)', 'Dubai Metaverse Strategy', 'Smart City Data Hub'],
    leadEntity: 'Digital Dubai & Dubai Future Foundation'
  },
  {
    id: 'd33-5',
    targetNumber: 'Goal 05',
    title: 'Dubai 2040 Urban Master Plan Integration',
    metric: 'Green Spaces & Public Beaches',
    baseline: '3.6M Population',
    target2033: '60% Nature Reserves / 400% Public Beach Expansion',
    description: 'Urban master planning ensuring 55% of residents live within 800 meters of public transport stations and 20-minute city living access.',
    strategicPillars: ['Transit Oriented Development (TOD)', 'Public Beach Expansion (105 km)', 'Blue Line Metro', 'Hatta Eco-Tourism'],
    leadEntity: 'Dubai Municipality & Supreme Committee for Urban Planning'
  }
]

export const DUBAI_DEMOGRAPHICS: DemographicSegment[] = [
  {
    category: 'Expatriate Professionals & Investors',
    count: '3,450,000+',
    percentage: '89.5%',
    detail: 'Over 200+ nationalities residing with dominant professional segments from UK, Europe, India, USA, GCC, and East Asia.'
  },
  {
    category: 'UAE National Citizens (Emiratis)',
    count: '400,000+',
    percentage: '10.5%',
    detail: 'Full citizen rights, sovereign housing support programs, and premier corporate leadership across public and private sectors.'
  },
  {
    category: 'Working Age Cohort (20–49)',
    count: '2,880,000+',
    percentage: '74.8%',
    detail: 'One of the most productive, economically active, and digitally proficient urban demographic profiles in the world.'
  },
  {
    category: 'Golden Visa Long-Term Holders',
    count: '210,000+',
    percentage: '5.4%',
    detail: '10-year residency grants conferred upon property investors, entrepreneurs, scientists, senior executives, and exceptional talents.'
  }
]
