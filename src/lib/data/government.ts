import { SourceProvenance } from '@/types/provenance'

export interface GovernmentDepartment {
  id: string
  name: string
  arabicName: string
  category: 'REGULATORY_AUTHORITY' | 'EXECUTIVE_COUNCIL' | 'MUNICIPALITY_URBAN' | 'ECONOMIC_TRADE' | 'LEGAL_SECURITY' | 'INNOVATION_FUTURE'
  mandate: string
  leadership: string
  statutoryRole: string
  digitalPortals: {
    portalName: string
    url: string
  }[]
  keyServices: string[]
  jurisdiction: string
  provenance: SourceProvenance
}

export interface GovernmentProgram {
  id: string
  programCode: string
  title: string
  targetHorizon: string
  leadAgency: string
  coreObjective: string
  strategicDeliverables: string[]
  statutoryDecree: string
  publicBenefit: string
  provenance: SourceProvenance
}

export const VERIFIED_GOVERNMENT_ENTITIES: GovernmentDepartment[] = [
  {
    id: 'executive-council',
    name: 'The Executive Council of Dubai',
    arabicName: 'المجلس التنفيذي لإمارة دبي',
    category: 'EXECUTIVE_COUNCIL',
    mandate: 'Formulates emirate-level public policies, strategic directives, government performance standards, and the Dubai Strategic Plan under the leadership of the Crown Prince.',
    leadership: 'H.H. Sheikh Hamdan bin Mohammed Al Maktoum (Crown Prince & Chairman)',
    statutoryRole: 'Supreme executive decision-making body of the Government of Dubai.',
    digitalPortals: [
      { portalName: 'General Secretariat Portal', url: 'https://tec.gov.ae' }
    ],
    keyServices: [
      'Emirate Master Strategy & Vision',
      'Dubai Economic Agenda D33 Oversight',
      'Government Excellence Program (DGEP)',
      'Inter-Agency Legislative Approvals'
    ],
    jurisdiction: 'Emirate of Dubai (Universal)',
    provenance: {
      source_name: 'The Executive Council Official Portal',
      source_type: 'GOVERNMENT_REGISTRY',
      verification_status: 'VERIFIED',
      verified_at: '2025-01-01',
      source_url: 'https://tec.gov.ae'
    }
  },
  {
    id: 'dld-rera',
    name: 'Dubai Land Department (DLD) & RERA',
    arabicName: 'دائرة الأراضي والأملاك في دبي / مؤسسة التنظيم العقاري',
    category: 'REGULATORY_AUTHORITY',
    mandate: 'Sole government authority empowered by Law No. 7 of 2006 to register, regulate, and guarantee all real estate ownership, transactions, title deeds, escrow accounts, and brokerage licenses in Dubai.',
    leadership: 'H.E. Eng. Marwan Ahmed Bin Ghalita (Director General)',
    statutoryRole: 'Real estate registry, title deed issuance, escrow audits, and rental dispute management.',
    digitalPortals: [
      { portalName: 'Dubai REST Portal', url: 'https://dubailand.gov.ae' }
    ],
    keyServices: [
      'Title Deed (Tabu) Registration & Issuance',
      'Oqood Off-Plan Escrow Certification',
      'Ejari Tenancy Contract Registration',
      'Rental Index & Calculation Engine',
      'Real Estate Brokerage Trakheesi Licensing'
    ],
    jurisdiction: 'All Dubai Real Estate (Freehold & Leasehold)',
    provenance: {
      source_name: 'Dubai Land Department Regulatory Registry',
      source_type: 'STATUTORY_RECORDS',
      verification_status: 'VERIFIED',
      verified_at: '2025-01-20',
      source_url: 'https://dubailand.gov.ae'
    }
  },
  {
    id: 'det',
    name: 'Department of Economy and Tourism (DET)',
    arabicName: 'دائرة الاقتصاد والسياحة بدبي',
    category: 'ECONOMIC_TRADE',
    mandate: 'Primary body responsible for licensing mainland businesses, driving the D33 economic agenda, attracting FDI, and regulating tourism, hotel classifications, and retail trade.',
    leadership: 'H.E. Helal Saeed Almarri (Director General)',
    statutoryRole: 'Commercial licensing, trade registers, investor protection, and global destination promotion.',
    digitalPortals: [
      { portalName: 'Invest in Dubai', url: 'https://invest.dubai.ae' },
      { portalName: 'Dubai Economy & Tourism', url: 'https://www.dubaidet.gov.ae' }
    ],
    keyServices: [
      'Mainland Commercial License Issuance',
      'Instant Trade License Approval',
      'Investor Right Protection & Consumer Audits',
      'Hotel & Hospitality Classification Standards'
    ],
    jurisdiction: 'Dubai Mainland & UAE Economic Zones',
    provenance: {
      source_name: 'Dubai Economy and Tourism Registry',
      source_type: 'GOVERNMENT_REGISTRY',
      verification_status: 'VERIFIED',
      verified_at: '2025-01-10',
      source_url: 'https://www.dubaidet.gov.ae'
    }
  },
  {
    id: 'rta',
    name: 'Roads and Transport Authority (RTA)',
    arabicName: 'هيئة الطرق والمواصلات بدبي',
    category: 'MUNICIPALITY_URBAN',
    mandate: 'Designs, constructs, and operates all public transport, road networks, Dubai Metro (Red, Green, Blue lines), Dubai Tram, marine abras, and autonomous transport systems.',
    leadership: 'H.E. Mattar Al Tayer (Director General & Chairman of Executive Directors)',
    statutoryRole: 'Transport infrastructure planner, public mobility regulator, and toll operator (Salik).',
    digitalPortals: [
      { portalName: 'RTA Dubai Corporate', url: 'https://www.rta.ae' }
    ],
    keyServices: [
      'Dubai Metro & Tram Network Management',
      'Vehicle Registration & Driver Licensing',
      'Commercial Fleet & Taxi Regulation',
      'Urban Transport Master Planning (Dubai 2040)'
    ],
    jurisdiction: 'Emirate of Dubai Transport Grid',
    provenance: {
      source_name: 'RTA Annual Strategy Disclosures',
      source_type: 'STATUTORY_RECORDS',
      verification_status: 'VERIFIED',
      verified_at: '2025-01-15',
      source_url: 'https://www.rta.ae'
    }
  },
  {
    id: 'dubai-municipality',
    name: 'Dubai Municipality',
    arabicName: 'بلدية دبي',
    category: 'MUNICIPALITY_URBAN',
    mandate: 'Oversees municipal urban planning, building code compliance, environmental conservation, waste management, public parks, and geodetic mapping of the Emirate.',
    leadership: 'H.E. Dawoud Al Hajri (Director General)',
    statutoryRole: 'Building permits, zoning regulations, green building standards (Al Safat), and public land allocation.',
    digitalPortals: [
      { portalName: 'Dubai Municipality Portal', url: 'https://www.dm.gov.ae' }
    ],
    keyServices: [
      'Building Permits & Structural Code Audits',
      'Al Safat Green Building Compliance',
      'GIS Dubai Geodetic & Cadastral Mapping',
      'Public Parks & Beach Infrastructure'
    ],
    jurisdiction: 'All Municipal Land & Urban Boundaries',
    provenance: {
      source_name: 'Dubai Municipality Official Registry',
      source_type: 'GOVERNMENT_REGISTRY',
      verification_status: 'VERIFIED',
      verified_at: '2024-12-18',
      source_url: 'https://www.dm.gov.ae'
    }
  },
  {
    id: 'dha',
    name: 'Dubai Health Authority (DHA)',
    arabicName: 'هيئة الصحة بدبي',
    category: 'REGULATORY_AUTHORITY',
    mandate: 'Regulates healthcare providers, medical professional licensing, pharmaceutical distribution, and enforces the mandatory health insurance framework (ISAHD).',
    leadership: 'H.E. Awadh Seghayer Al Ketbi (Director General)',
    statutoryRole: 'Public health regulation, health insurance supervision, and medical licensure.',
    digitalPortals: [
      { portalName: 'DHA Health Services', url: 'https://www.dha.gov.ae' },
      { portalName: 'ISAHD Insurance Portal', url: 'https://www.isahd.ae' }
    ],
    keyServices: [
      'Mandatory Health Insurance (ISAHD) Verification',
      'Medical Professional Licensure (Sheryan)',
      'Hospital & Clinical Facility Accreditation',
      'Golden Visa Medical Fitness Testing'
    ],
    jurisdiction: 'Emirate of Dubai Healthcare Sector',
    provenance: {
      source_name: 'DHA Regulatory Authority Gazette',
      source_type: 'STATUTORY_RECORDS',
      verification_status: 'VERIFIED',
      verified_at: '2025-01-05',
      source_url: 'https://www.dha.gov.ae'
    }
  },
  {
    id: 'digital-dubai',
    name: 'Digital Dubai Authority',
    arabicName: 'هيئة دبي الرقمية',
    category: 'INNOVATION_FUTURE',
    mandate: 'Directs the citywide digitization agenda, Dubai Paperless Strategy, cybersecurity framework, and unified city services via the DubaiNow mobile application.',
    leadership: 'H.E. Hamad Obaid Al Mansoori (Director General)',
    statutoryRole: 'Digital governance, sovereign cyber defense, open data standards (Dubai Pulse).',
    digitalPortals: [
      { portalName: 'Digital Dubai', url: 'https://www.digitaldubai.ae' },
      { portalName: 'Dubai Pulse Open Data', url: 'https://www.dubaipulse.gov.ae' }
    ],
    keyServices: [
      'DubaiNow Unified Government App (170+ Services)',
      'UAE Pass National Digital Identity',
      'Dubai Electronic Security Center (DESC) Standards',
      'Dubai Pulse Big Data Aggregation Engine'
    ],
    jurisdiction: 'Emirate of Dubai Digital Ecosystem',
    provenance: {
      source_name: 'Digital Dubai Authority Official Portal',
      source_type: 'GOVERNMENT_REGISTRY',
      verification_status: 'VERIFIED',
      verified_at: '2025-01-12',
      source_url: 'https://www.digitaldubai.ae'
    }
  },
  {
    id: 'dff',
    name: 'Dubai Future Foundation (DFF)',
    arabicName: 'مؤسسة دبي للمستقبل',
    category: 'INNOVATION_FUTURE',
    mandate: 'Orchestrates foresight research, Dubai Future Accelerators, Museum of the Future, Dubai 10X initiative, and regulatory sandboxes for frontier technologies.',
    leadership: 'H.E. Khalfan Belhoul (CEO)',
    statutoryRole: 'Future prototyping, policy sandboxing, and autonomous tech testing.',
    digitalPortals: [
      { portalName: 'Dubai Future Foundation', url: 'https://www.dubaifuture.ae' }
    ],
    keyServices: [
      'Dubai Future Accelerators Cohorts',
      'Regulation Lab (RegLab) Sandboxes',
      'Museum of the Future Research Labs',
      'Dubai Global Council for Generative AI'
    ],
    jurisdiction: 'Global / Dubai Innovation Zones',
    provenance: {
      source_name: 'Dubai Future Foundation Disclosures',
      source_type: 'GOVERNMENT_REGISTRY',
      verification_status: 'VERIFIED',
      verified_at: '2025-01-20',
      source_url: 'https://www.dubaifuture.ae'
    }
  }
]

export const VERIFIED_GOVERNMENT_PROGRAMS: GovernmentProgram[] = [
  {
    id: 'd33',
    programCode: 'D33-AGENDA',
    title: 'Dubai Economic Agenda (D33)',
    targetHorizon: '2023–2033 (10-Year Horizon)',
    leadAgency: 'Department of Economy and Tourism (DET)',
    coreObjective: 'Double the size of Dubai economy over the next decade and position Dubai among the top 3 global cities economically.',
    strategicDeliverables: [
      'Target aggregate economic output of AED 32 Trillion',
      'Foreign trade expansion to reach AED 25.6 Trillion',
      'Attract foreign direct investment (FDI) exceeding AED 650 Billion',
      'Integration of 400 new global cities into trade corridors',
      'Sandbox Dubai: Launch of pilot licenses for new tech concepts'
    ],
    statutoryDecree: 'Announced by H.H. Sheikh Mohammed bin Rashid Al Maktoum on January 4, 2023.',
    publicBenefit: 'Zero personal income tax, full foreign corporate ownership, unmatched global logistics reach.',
    provenance: {
      source_name: 'Government of Dubai Media Office D33 Charter',
      source_type: 'GOVERNMENT_REGISTRY',
      verification_status: 'VERIFIED',
      verified_at: '2025-01-04',
      source_url: 'https://www.dubaidet.gov.ae/d33'
    }
  },
  {
    id: 'dubai-2040',
    programCode: 'MASTERPLAN-2040',
    title: 'Dubai 2040 Urban Master Plan',
    targetHorizon: '2021–2040 (20-Year Urban Blueprint)',
    leadAgency: 'Supreme Committee for Urban Planning & Dubai Municipality',
    coreObjective: 'Sustainable urban development to accommodate a projected population of 5.8 million residents by 2040 while preserving 60% of Dubai area as natural reserves.',
    strategicDeliverables: [
      'Development of 5 major urban centers (Deira/Bur Dubai, Downtown/Business Bay, Dubai Marina/JBR, Expo City, Silicon Oasis)',
      'Public beaches length increased by 400% (reaching 105 kilometers)',
      '55% of residents living within 800m of mass transit hubs (20-minute city)',
      '134% increase in space dedicated to hospitality and tourism activities',
      '25% expansion of designated healthcare and education facilities'
    ],
    statutoryDecree: 'Decree issued by the Ruler of Dubai, March 2021.',
    publicBenefit: 'Enhanced green corridors, world-class walkability, optimized transit commutes, and protected eco-reserves.',
    provenance: {
      source_name: 'Dubai 2040 Urban Master Plan Official Documentation',
      source_type: 'STATUTORY_RECORDS',
      verification_status: 'VERIFIED',
      verified_at: '2024-11-20',
      source_url: 'https://www.dubai2040.ae'
    }
  },
  {
    id: 'clean-energy-2050',
    programCode: 'CLEAN-ENERGY-2050',
    title: 'Dubai Clean Energy Strategy 2050 & Net Zero 2050',
    targetHorizon: '2015–2050',
    leadAgency: 'Dubai Supreme Council of Energy & DEWA',
    coreObjective: 'Produce 100% of Dubai total energy output from clean and renewable energy sources by 2050.',
    strategicDeliverables: [
      'Phase-by-phase ramp-up of Mohammed bin Rashid Al Maktoum Solar Park (5,000 MW)',
      'Green hydrogen production plant operations at MBR Solar Park',
      'Dubai Green Mobility Strategy (30% electric/hybrid public fleets)',
      'Demand Side Management Strategy 2030 (30% reduction in electricity & water consumption)'
    ],
    statutoryDecree: 'Approved by Dubai Supreme Council of Energy.',
    publicBenefit: 'Lowest clean energy tariffs globally (1.69 US cents/kWh), certified green building standards.',
    provenance: {
      source_name: 'DEWA Sustainability Registry',
      source_type: 'STATUTORY_RECORDS',
      verification_status: 'VERIFIED',
      verified_at: '2025-01-10',
      source_url: 'https://www.dewa.gov.ae'
    }
  },
  {
    id: 'dubai-ai-2031',
    programCode: 'AI-STRATEGY-2031',
    title: 'Dubai Universal Blueprint for AI (Dubai AI 2031)',
    targetHorizon: '2024–2031',
    leadAgency: 'Dubai Future Foundation & Digital Dubai',
    coreObjective: 'Appoint Chief AI Officers across all government entities, build world-class AI compute clusters, and generate AED 100B in annual digital economy value.',
    strategicDeliverables: [
      'Creation of the Dubai AI Campus in DIFC for 500+ frontier AI startups',
      'Launch of Dubai AI license with subsidized compute grants',
      'Integration of AI across health diagnostics, traffic routing, and legal research',
      'Launch of the annual Dubai AI & Web3 Festival'
    ],
    statutoryDecree: 'Endorsed by H.H. Sheikh Hamdan bin Mohammed Al Maktoum, April 2024.',
    publicBenefit: 'Accelerated digital public services, zero red tape, and premier talent attraction.',
    provenance: {
      source_name: 'Dubai Future Foundation Strategic Gazettes',
      source_type: 'GOVERNMENT_REGISTRY',
      verification_status: 'VERIFIED',
      verified_at: '2025-01-25',
      source_url: 'https://www.dubaifuture.ae'
    }
  }
]
