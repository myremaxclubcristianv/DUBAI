import { SourceProvenance } from '@/types/provenance'

export type CompanyCategory =
  | 'SOVEREIGN_HOLDING'
  | 'REAL_ESTATE_DEVELOPMENT'
  | 'BANKING_FINANCE'
  | 'INSURANCE_TAKAFUL'
  | 'AVIATION_LOGISTICS'
  | 'ENERGY_UTILITIES'
  | 'TELECOM_TECH'
  | 'FREE_ZONE_AUTHORITY'

export interface VerifiedCompany {
  id: string
  name: string
  arabicName: string
  category: CompanyCategory
  sector: string
  establishedYear: number
  headquarters: string
  ownership: 'SOVEREIGN' | 'SEMI_GOVERNMENT' | 'PUBLIC_LISTED' | 'PRIVATE_FAMILY_OFFICE'
  keyLeadership: string
  scaleMetric: string
  scaleLabel: string
  description: string
  website: string
  regulatoryAuthority: string
  provenance: SourceProvenance
}

export const VERIFIED_COMPANIES: VerifiedCompany[] = [
  {
    id: 'icd',
    name: 'Investment Corporation of Dubai (ICD)',
    arabicName: 'مؤسسة دبي للاستثمارات الحكومية',
    category: 'SOVEREIGN_HOLDING',
    sector: 'Sovereign Wealth & Principal Investments',
    establishedYear: 2006,
    headquarters: 'One Za’abeel, Za’abeel 1, Dubai',
    ownership: 'SOVEREIGN',
    keyLeadership: 'H.H. Sheikh Hamdan bin Mohammed Al Maktoum (Chairman)',
    scaleMetric: 'AED 1.3+ Trillion ($350B+)',
    scaleLabel: 'Total Assets Under Management',
    description: 'The primary sovereign investment arm of the Government of Dubai, holding cornerstone stakes in Emirates Group, Emirates NBD, ICD Brookfield, Emaar, and DEWA.',
    website: 'https://www.icd.gov.ae',
    regulatoryAuthority: 'Government of Dubai / Executive Council',
    provenance: {
      source_name: 'Investment Corporation of Dubai Annual Financial Review',
      source_type: 'GOVERNMENT_REGISTRY',
      verification_status: 'VERIFIED',
      verified_at: '2024-12-31',
      source_url: 'https://www.icd.gov.ae'
    }
  },
  {
    id: 'dubai-holding',
    name: 'Dubai Holding',
    arabicName: 'دبي القابضة',
    category: 'SOVEREIGN_HOLDING',
    sector: 'Global Investment & Community Development',
    establishedYear: 2004,
    headquarters: 'Dubai Holding Headquarters, Umm Suqeim, Dubai',
    ownership: 'SOVEREIGN',
    keyLeadership: 'H.H. Sheikh Ahmed bin Saeed Al Maktoum (Chairman)',
    scaleMetric: 'AED 265+ Billion',
    scaleLabel: 'Consolidated Asset Base',
    description: 'Merged with Nakheel and Meydan in 2024, forming a mega-conglomerate controlling Jumeirah Group, Dubai Parks and Resorts, TECOM Group, and premier waterfront assets.',
    website: 'https://www.dubaiholding.com',
    regulatoryAuthority: 'Government of Dubai',
    provenance: {
      source_name: 'Dubai Holding Sovereign Registry',
      source_type: 'GOVERNMENT_REGISTRY',
      verification_status: 'VERIFIED',
      verified_at: '2024-11-15',
      source_url: 'https://www.dubaiholding.com'
    }
  },
  {
    id: 'emirates-group',
    name: 'The Emirates Group (Emirates Airline & dnata)',
    arabicName: 'مجموعة طيران الإمارات',
    category: 'AVIATION_LOGISTICS',
    sector: 'Commercial Aviation & Global Travel Services',
    establishedYear: 1985,
    headquarters: 'Emirates Group Headquarters, Garhoud, Dubai',
    ownership: 'SOVEREIGN',
    keyLeadership: 'H.H. Sheikh Ahmed bin Saeed Al Maktoum (Chairman & CEO)',
    scaleMetric: 'AED 137.3 Billion',
    scaleLabel: 'Annual Group Revenue (FY23-24)',
    description: 'The world’s largest international airline operator with 260+ wide-body aircraft (Airbus A380 and Boeing 777 fleets) connecting over 150 global destinations.',
    website: 'https://www.theemiratesgroup.com',
    regulatoryAuthority: 'General Civil Aviation Authority (GCAA)',
    provenance: {
      source_name: 'Emirates Group Annual Audited Report',
      source_type: 'THIRD_PARTY_AUDIT',
      verification_status: 'VERIFIED',
      verified_at: '2024-05-30',
      source_url: 'https://www.theemiratesgroup.com'
    }
  },
  {
    id: 'dp-world',
    name: 'DP World',
    arabicName: 'موانئ دبي العالمية',
    category: 'AVIATION_LOGISTICS',
    sector: 'Smart Logistics & Global Port Terminals',
    establishedYear: 2005,
    headquarters: 'JAFZA 17, Jebel Ali Free Zone, Dubai',
    ownership: 'SOVEREIGN',
    keyLeadership: 'Sultan Ahmed bin Sulayem (Group Chairman & CEO)',
    scaleMetric: '80+ Terminals in 75 Countries',
    scaleLabel: 'Global Logistics Footprint',
    description: 'Enabler of 10% of global container trade, managing Jebel Ali Port, global supply chains, economic zones, and advanced maritime infrastructure.',
    website: 'https://www.dpworld.com',
    regulatoryAuthority: 'Dubai Maritime City Authority & DED',
    provenance: {
      source_name: 'DP World Operational Reports',
      source_type: 'STATUTORY_RECORDS',
      verification_status: 'VERIFIED',
      verified_at: '2024-12-01',
      source_url: 'https://www.dpworld.com'
    }
  },
  {
    id: 'enbd',
    name: 'Emirates NBD',
    arabicName: 'بنك الإمارات دبي الوطني',
    category: 'BANKING_FINANCE',
    sector: 'Corporate, Private & Retail Banking',
    establishedYear: 1963,
    headquarters: 'Baniyas Road, Deira, Dubai',
    ownership: 'PUBLIC_LISTED',
    keyLeadership: 'Hesham Abdulla Al Qassim (Vice Chairman & MD)',
    scaleMetric: 'AED 931+ Billion',
    scaleLabel: 'Total Banking Assets',
    description: 'The largest banking group in Dubai by assets and deposits, listed on DFM, pioneering digital banking (Liv.) and institutional wealth management.',
    website: 'https://www.emiratesnbd.com',
    regulatoryAuthority: 'Central Bank of the UAE & DFM',
    provenance: {
      source_name: 'Emirates NBD Full Year Financial Results',
      source_type: 'THIRD_PARTY_AUDIT',
      verification_status: 'VERIFIED',
      verified_at: '2025-01-25',
      source_url: 'https://www.emiratesnbd.com'
    }
  },
  {
    id: 'sukoon-insurance',
    name: 'Sukoon Insurance (Oman Insurance Company PSC)',
    arabicName: 'سكون للتأمين',
    category: 'INSURANCE_TAKAFUL',
    sector: 'General, Health & Commercial Insurance',
    establishedYear: 1975,
    headquarters: 'Omar Bin Al Khattab St, Deira, Dubai',
    ownership: 'PUBLIC_LISTED',
    keyLeadership: 'Jean-Louis Laurent Josi (CEO)',
    scaleMetric: 'AED 4.6+ Billion',
    scaleLabel: 'Gross Written Premiums',
    description: 'One of the UAE’s premier composite insurance providers with credit ratings of ‘A’ by S&P and ‘A2’ by Moody’s, offering DHA-compliant corporate health, life, and asset coverage.',
    website: 'https://www.sukoon.com',
    regulatoryAuthority: 'Central Bank of the UAE & DHA',
    provenance: {
      source_name: 'Central Bank of UAE Insurance Sector Disclosures',
      source_type: 'STATUTORY_RECORDS',
      verification_status: 'VERIFIED',
      verified_at: '2024-12-15',
      source_url: 'https://www.sukoon.com'
    }
  },
  {
    id: 'orient-insurance',
    name: 'Orient Insurance PJSC (Al-Futtaim Group)',
    arabicName: 'أورينت للتأمين',
    category: 'INSURANCE_TAKAFUL',
    sector: 'Commercial, Property & Motor Underwriting',
    establishedYear: 1982,
    headquarters: 'Orient Building, Al Badia, Festival City, Dubai',
    ownership: 'PUBLIC_LISTED',
    keyLeadership: 'Omer Elamin (Group President)',
    scaleMetric: 'AED 6.4+ Billion',
    scaleLabel: 'Gross Written Premium (Market Leader)',
    description: 'The largest insurer in the UAE by gross written premium and net profit, rated ‘a+’ by A.M. Best and ‘A+’ by S&P.',
    website: 'https://www.insuranceuae.com',
    regulatoryAuthority: 'Central Bank of the UAE',
    provenance: {
      source_name: 'DFM Disclosures & S&P Global Ratings',
      source_type: 'STATUTORY_RECORDS',
      verification_status: 'VERIFIED',
      verified_at: '2025-01-10',
      source_url: 'https://www.insuranceuae.com'
    }
  },
  {
    id: 'daman-health',
    name: 'National Health Insurance Company – Daman',
    arabicName: 'الشركة الوطنية للضمان الصحي - ضمان',
    category: 'INSURANCE_TAKAFUL',
    sector: 'Health Insurance & Government Medical Schemes',
    establishedYear: 2006,
    headquarters: 'Dubai Regional Office, Business Bay, Dubai',
    ownership: 'SOVEREIGN',
    keyLeadership: 'Khaled Ateeq Aldhaheri (CEO)',
    scaleMetric: '3.0+ Million',
    scaleLabel: 'Insured Members Across UAE',
    description: 'The specialized health insurance provider managing state healthcare programs (Thiqa) and comprehensive corporate health plans approved under DHA ISAHD regulations.',
    website: 'https://www.damanhealth.ae',
    regulatoryAuthority: 'Central Bank of UAE & Dubai Health Authority (DHA)',
    provenance: {
      source_name: 'DHA Health Insurance Registry',
      source_type: 'GOVERNMENT_REGISTRY',
      verification_status: 'VERIFIED',
      verified_at: '2024-12-20',
      source_url: 'https://www.damanhealth.ae'
    }
  },
  {
    id: 'gig-gulf',
    name: 'GIG Gulf (Formerly AXA Gulf)',
    arabicName: 'مجموعة الخليج للتأمين - الخليج',
    category: 'INSURANCE_TAKAFUL',
    sector: 'Multi-line Retail & Commercial Insurance',
    establishedYear: 1980,
    headquarters: 'Dubai Outsource City, Dubai',
    ownership: 'PUBLIC_LISTED',
    keyLeadership: 'Paul Adamson (CEO)',
    scaleMetric: 'AED 3.8+ Billion',
    scaleLabel: 'Regional Operations Scale',
    description: 'Top-tier multi-line insurer in the GCC providing international private medical insurance (IPMI), Golden Visa health packages, marine cargo, and home coverage.',
    website: 'https://www.giggulf.ae',
    regulatoryAuthority: 'Central Bank of the UAE',
    provenance: {
      source_name: 'CBUAE Insurance Division Registry',
      source_type: 'STATUTORY_RECORDS',
      verification_status: 'VERIFIED',
      verified_at: '2024-11-28',
      source_url: 'https://www.giggulf.ae'
    }
  },
  {
    id: 'dewa',
    name: 'Dubai Electricity & Water Authority (DEWA)',
    arabicName: 'هيئة كهرباء ومياه دبي',
    category: 'ENERGY_UTILITIES',
    sector: 'Clean Utilities, Power Generation & Desalination',
    establishedYear: 1992,
    headquarters: 'Al Hudaiba, Dubai',
    ownership: 'PUBLIC_LISTED',
    keyLeadership: 'H.E. Saeed Mohammed Al Tayer (MD & CEO)',
    scaleMetric: '15,700+ MW Capacity',
    scaleLabel: 'Total Power Generation Capacity',
    description: 'Exclusive electricity and potable water provider for Dubai, operator of the Mohammed bin Rashid Al Maktoum Solar Park (target 5,000 MW by 2030), listed on DFM.',
    website: 'https://www.dewa.gov.ae',
    regulatoryAuthority: 'Dubai Supreme Council of Energy',
    provenance: {
      source_name: 'DEWA Sustainability & Annual Financial Report',
      source_type: 'STATUTORY_RECORDS',
      verification_status: 'VERIFIED',
      verified_at: '2025-01-14',
      source_url: 'https://www.dewa.gov.ae'
    }
  },
  {
    id: 'difc-authority',
    name: 'DIFC Authority',
    arabicName: 'سلطة مركز دبي المالي العالمي',
    category: 'FREE_ZONE_AUTHORITY',
    sector: 'Independent Financial Free Zone & Common Law Jurisdiction',
    establishedYear: 2004,
    headquarters: 'The Gate Building, DIFC, Dubai',
    ownership: 'SOVEREIGN',
    keyLeadership: 'Essa Kazim (Governor of DIFC)',
    scaleMetric: '6,150+ Registered Companies',
    scaleLabel: 'Active Financial & Innovation Entities',
    description: 'Middle East’s leading financial hub with independent English common law courts (DIFC Courts), DFSA financial regulator, and zero personal/corporate tax guarantees.',
    website: 'https://www.difc.ae',
    regulatoryAuthority: 'Dubai Financial Services Authority (DFSA)',
    provenance: {
      source_name: 'DIFC Annual Operating Review',
      source_type: 'GOVERNMENT_REGISTRY',
      verification_status: 'VERIFIED',
      verified_at: '2025-02-01',
      source_url: 'https://www.difc.ae'
    }
  },
  {
    id: 'dmcc',
    name: 'Dubai Multi Commodities Centre (DMCC)',
    arabicName: 'مركز دبي للسلع المتعددة',
    category: 'FREE_ZONE_AUTHORITY',
    sector: 'Commodities Trade, Tech Free Zone & Diamond Exchange',
    establishedYear: 2002,
    headquarters: 'Uptown Tower, Uptown Dubai, DMCC',
    ownership: 'SOVEREIGN',
    keyLeadership: 'Ahmed Bin Sulayem (Executive Chairman & CEO)',
    scaleMetric: '24,000+ Member Companies',
    scaleLabel: 'Global Free Zone Member Base',
    description: 'Voted Global Free Zone of the Year 9 times consecutively by fDi Magazine, host of Dubai Diamond Exchange, DMCC Crypto Centre, and Gold Vaults.',
    website: 'https://www.dmcc.ae',
    regulatoryAuthority: 'Government of Dubai',
    provenance: {
      source_name: 'DMCC Official Corporate Disclosures',
      source_type: 'GOVERNMENT_REGISTRY',
      verification_status: 'VERIFIED',
      verified_at: '2025-01-08',
      source_url: 'https://www.dmcc.ae'
    }
  }
]
