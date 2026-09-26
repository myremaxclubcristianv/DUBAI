import { SourceProvenance } from '@/types/provenance'

export interface InfrastructureProject {
  id: string
  name: string
  arabicName: string
  category: 'AVIATION' | 'MASS_TRANSIT' | 'ISLAND_COASTAL' | 'CLEAN_ENERGY' | 'LOGISTICS_RAIL'
  estimatedCost: string
  completionHorizon: string
  developerOrEntity: string
  status: 'UNDER_CONSTRUCTION' | 'EXPANSION_PHASE' | 'PROCUREMENT_TENDER' | 'ACTIVE_COMMISSIONED'
  scaleHighlights: string[]
  strategicImpact: string
  coordinates: {
    lat: number
    lng: number
  }
  provenance: SourceProvenance
}

export const VERIFIED_INFRASTRUCTURE_PROJECTS: InfrastructureProject[] = [
  {
    id: 'al-maktoum-airport-expansion',
    name: 'Al Maktoum International Airport (DWC) Expansion',
    arabicName: 'توسعة مطار آل مكتوم الدولي',
    category: 'AVIATION',
    estimatedCost: 'AED 128 Billion ($35 Billion)',
    completionHorizon: 'Phase 1: 2032 | Full Build: 2050',
    developerOrEntity: 'Dubai Aviation Engineering Projects (DAEP) & Dubai Airports',
    status: 'UNDER_CONSTRUCTION',
    scaleHighlights: [
      'Capacity for 260 Million passengers annually (5x scale of current DXB)',
      '5 parallel runways operating simultaneously with 400 aircraft gates',
      '70 square kilometers total airport operational footprint',
      'All operations of DXB will fully transition to DWC upon phase completion'
    ],
    strategicImpact: 'Will become the world’s largest international passenger and cargo hub, anchoring the entire Dubai South aerotropolis and Dubai Economic Agenda D33.',
    coordinates: { lat: 24.8964, lng: 55.1614 },
    provenance: {
      source_name: 'Government of Dubai Media Office & DAEP',
      source_type: 'GOVERNMENT_REGISTRY',
      verification_status: 'VERIFIED',
      verified_at: '2024-04-28',
      source_url: 'https://mediaoffice.ae/en/news/2024/April/28-04/Mohammed-bin-Rashid-approves-designs-for-the-new-passenger-terminal-at-Al-Maktoum-International-Airport'
    }
  },
  {
    id: 'dubai-metro-blue-line',
    name: 'Dubai Metro Blue Line',
    arabicName: 'مسار الخط الأزرق لمترو دبي',
    category: 'MASS_TRANSIT',
    estimatedCost: 'AED 18 Billion ($4.9 Billion)',
    completionHorizon: 'Operational Delivery: 2029',
    developerOrEntity: 'Roads and Transport Authority (RTA)',
    status: 'UNDER_CONSTRUCTION',
    scaleHighlights: [
      '30 kilometers total track length (15.5 km underground, 14.5 km elevated)',
      '14 modern transit stations connecting Dubai Creek Harbour, Dubai Festival City, International City, Silicon Oasis, and Academic City',
      'First metro route crossing the Dubai Creek via a 1,300-meter iconic bridge',
      'Integrated with existing Red Line (Centrepoint) and Green Line (Creek station)'
    ],
    strategicImpact: 'Connects 1 million residents across nine high-density residential and educational corridors to Dubai’s rapid transit backbone, cutting commute times by 50%.',
    coordinates: { lat: 25.1950, lng: 55.3500 },
    provenance: {
      source_name: 'RTA Dubai Board of Directors Disclosures',
      source_type: 'STATUTORY_RECORDS',
      verification_status: 'VERIFIED',
      verified_at: '2024-11-25',
      source_url: 'https://www.rta.ae'
    }
  },
  {
    id: 'palm-jebel-ali',
    name: 'Palm Jebel Ali Master Development',
    arabicName: 'نخلة جبل علي',
    category: 'ISLAND_COASTAL',
    estimatedCost: 'AED 90+ Billion',
    completionHorizon: 'First Handover Wave: 2026–2028',
    developerOrEntity: 'Nakheel (Dubai Holding Real Estate)',
    status: 'UNDER_CONSTRUCTION',
    scaleHighlights: [
      'Twice the physical footprint of Palm Jumeirah (13.4 square kilometers)',
      'Adds 110 kilometers of private and public coastline to Dubai',
      '16 interconnected fronds with 80+ luxury hotels, resorts, and wellness complexes',
      'Self-contained green smart city powering 30% of public utilities via solar'
    ],
    strategicImpact: 'A cornerstone of the Dubai 2040 Urban Master Plan, unlocking ultra-luxury beachfront real estate supply and superyacht marina berthing.',
    coordinates: { lat: 25.0020, lng: 54.9850 },
    provenance: {
      source_name: 'Nakheel Official Masterplan Releases',
      source_type: 'STATUTORY_RECORDS',
      verification_status: 'VERIFIED',
      verified_at: '2024-10-10',
      source_url: 'https://www.nakheel.com'
    }
  },
  {
    id: 'mbr-solar-park',
    name: 'Mohammed bin Rashid Al Maktoum Solar Park',
    arabicName: 'مجمع محمد بن راشد آل مكتوم للطاقة الشمسية',
    category: 'CLEAN_ENERGY',
    estimatedCost: 'AED 50 Billion ($13.6 Billion)',
    completionHorizon: 'Target 5,000 MW by 2030',
    developerOrEntity: 'Dubai Electricity and Water Authority (DEWA)',
    status: 'ACTIVE_COMMISSIONED',
    scaleHighlights: [
      'Largest single-site solar park in the world with 5,000 MW planned capacity',
      'Features the world’s tallest Concentrated Solar Power (CSP) tower (263.1 meters)',
      'World’s largest thermal energy storage capacity (15 hours of 24/7 continuous clean power)',
      'Reduces carbon emissions by more than 6.5 million tonnes annually'
    ],
    strategicImpact: 'Key pillar of the Dubai Clean Energy Strategy 2050 to deliver 100% of Dubai’s power from zero-carbon sources.',
    coordinates: { lat: 24.7530, lng: 55.3940 },
    provenance: {
      source_name: 'DEWA Clean Energy Official Gazettes',
      source_type: 'STATUTORY_RECORDS',
      verification_status: 'VERIFIED',
      verified_at: '2025-01-05',
      source_url: 'https://www.dewa.gov.ae'
    }
  },
  {
    id: 'etihad-rail-passenger',
    name: 'Etihad Rail UAE Passenger Network',
    arabicName: 'قطار الاتحاد لنقل الركاب',
    category: 'LOGISTICS_RAIL',
    estimatedCost: 'AED 50 Billion',
    completionHorizon: 'Freight Active / Passenger Service 2026',
    developerOrEntity: 'Etihad Rail PJSC & UAE Ministry of Energy and Infrastructure',
    status: 'UNDER_CONSTRUCTION',
    scaleHighlights: [
      '1,200 km national rail network linking 11 major UAE cities from Ghuweifat to Fujairah',
      'Passenger trains traveling at speeds up to 200 km/h (Dubai to Abu Dhabi in 50 minutes)',
      'Main Dubai passenger terminus located in Al Jaddaf / Dubai South integrated hub',
      'Reduces highway truck transit by 8.2 million trips annually'
    ],
    strategicImpact: 'Unifies the 7 emirates into a single interconnected economic mobility corridor with seamless GCC railway connectivity.',
    coordinates: { lat: 25.2100, lng: 55.3200 },
    provenance: {
      source_name: 'Etihad Rail Official Disclosures',
      source_type: 'GOVERNMENT_REGISTRY',
      verification_status: 'VERIFIED',
      verified_at: '2024-12-12',
      source_url: 'https://www.etihadrail.ae'
    }
  }
]
