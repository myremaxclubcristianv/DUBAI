import { SourceProvenance } from '@/types/provenance'

export interface LegalDecree {
  id: string
  decreeCode: string
  officialTitle: string
  promulgationYear: number
  jurisdictionLevel: 'FEDERAL_UAE' | 'EMIRATE_DUBAI' | 'SPECIAL_JURISDICTION_DIFC'
  regulatoryBody: string
  statutoryScope: string
  keyProvisions: string[]
  exemptionsOrConditions: string
  penaltiesOrEnforcement: string
  officialGazetteRef: string
  provenance: SourceProvenance
}

export interface JudicialTribunal {
  id: string
  name: string
  legalSystem: 'CIVIL_LAW_ARABIC' | 'COMMON_LAW_ENGLISH' | 'SPECIALIZED_RENTAL_TRIBUNAL'
  primaryJurisdiction: string
  enforceability: string
  appellateStructure: string
  description: string
}

export const VERIFIED_LEGAL_STATUTES: LegalDecree[] = [
  {
    id: 'federal-corporate-tax-47-2022',
    decreeCode: 'Federal Decree-Law No. 47 of 2022',
    officialTitle: 'Taxation of Corporations and Businesses',
    promulgationYear: 2022,
    jurisdictionLevel: 'FEDERAL_UAE',
    regulatoryBody: 'Federal Tax Authority (FTA) & Ministry of Finance',
    statutoryScope: 'Imposes a headline 9% federal corporate tax on net taxable profits exceeding AED 375,000 (~$102,000 USD).',
    keyProvisions: [
      '0% rate on taxable income up to AED 375,000 to foster SME growth',
      '0% Qualifying Free Zone Person (QFZP) rate on qualifying income derived from wholesale, trading, and fund operations',
      '0% Personal Income Tax on employment salaries, real estate capital gains, personal investment portfolios, and dividends',
      'Participation Exemption: 0% tax on foreign dividends and capital gains from qualifying shareholdings (≥5% stake held for 12+ months)',
      'Small Business Relief: Available for revenue up to AED 3,000,000 through Dec 31, 2026'
    ],
    exemptionsOrConditions: 'Natural persons investing in real estate in their personal capacity are completely exempt from UAE Corporate Tax.',
    penaltiesOrEnforcement: 'Late registration penalties starting at AED 10,000; tax evasion subject to heavy administrative and penal sanctions.',
    officialGazetteRef: 'Federal Official Gazette Issue No. 737, Dec 2022',
    provenance: {
      source_name: 'UAE Ministry of Finance & Federal Tax Authority',
      source_type: 'STATUTORY_RECORDS',
      verification_status: 'VERIFIED',
      verified_at: '2025-01-01',
      source_url: 'https://mof.gov.ae'
    }
  },
  {
    id: 'dubai-real-estate-escrow-8-2007',
    decreeCode: 'Law No. 8 of 2007',
    officialTitle: 'Escrow Accounts for Real Estate Development in Dubai',
    promulgationYear: 2007,
    jurisdictionLevel: 'EMIRATE_DUBAI',
    regulatoryBody: 'Dubai Land Department (DLD) / RERA',
    statutoryScope: 'Mandates that all funds collected from off-plan property buyers must be deposited into a licensed escrow bank account supervised by RERA.',
    keyProvisions: [
      'Developers cannot access buyer funds for general corporate overhead or land acquisition',
      'Disbursements from escrow accounts are strictly released in direct proportion to certified engineering construction milestones audited by RERA engineers',
      '5% warranty retention must remain in escrow for 1 year post-handover to cover structural defect liabilities',
      'Developers must own 100% of the project land free of encumbrances or post a 20% construction bank guarantee prior to launching sales'
    ],
    exemptionsOrConditions: 'Applicable without exception to all off-plan commercial and residential developments across Dubai.',
    penaltiesOrEnforcement: 'Unauthorized collection of off-plan payments carries immediate criminal prosecution, freeze of accounts, and developer deregistration.',
    officialGazetteRef: 'Dubai Government Official Gazette No. 323, 2007',
    provenance: {
      source_name: 'Dubai Land Department Escrow Regulations Division',
      source_type: 'STATUTORY_RECORDS',
      verification_status: 'VERIFIED',
      verified_at: '2025-01-15',
      source_url: 'https://dubailand.gov.ae'
    }
  },
  {
    id: 'dubai-rental-cap-decree-43-2013',
    decreeCode: 'Decree No. 43 of 2013',
    officialTitle: 'Determining Rent Increase for Properties in the Emirate of Dubai',
    promulgationYear: 2013,
    jurisdictionLevel: 'EMIRATE_DUBAI',
    regulatoryBody: 'Rental Dispute Settlement Centre (RDSC) & DLD',
    statutoryScope: 'Establishes a statutory maximum cap on annual rent increases upon lease renewal based on official RERA Rental Index benchmark gaps.',
    keyProvisions: [
      '0% increase permitted if existing rent is within 10% below average market rent',
      '5% max increase if existing rent is 11% to 20% below market average',
      '10% max increase if existing rent is 21% to 30% below market average',
      '15% max increase if existing rent is 31% to 40% below market average',
      '20% max maximum statutory cap if existing rent is more than 40% below market average',
      'Mandatory 90-day written notice prior to tenancy expiration required for any proposed change to rental terms'
    ],
    exemptionsOrConditions: 'Landlord may only request above-index increase if supported by an official DLD Property Valuation Certificate.',
    penaltiesOrEnforcement: 'Arbitrary rent increases or unlawful eviction orders are overturned by the RDSC with mandatory damages awarded to tenants.',
    officialGazetteRef: 'Dubai Government Gazette No. 378, Dec 2013',
    provenance: {
      source_name: 'Rental Dispute Settlement Centre (RDSC)',
      source_type: 'STATUTORY_RECORDS',
      verification_status: 'VERIFIED',
      verified_at: '2025-01-10',
      source_url: 'https://dubailand.gov.ae/en/eservices/rental-index'
    }
  },
  {
    id: 'dubai-property-registration-7-2006',
    decreeCode: 'Law No. 7 of 2006',
    officialTitle: 'Real Property Registration in the Emirate of Dubai',
    promulgationYear: 2006,
    jurisdictionLevel: 'EMIRATE_DUBAI',
    regulatoryBody: 'Dubai Land Department (DLD)',
    statutoryScope: 'Foundational statute granting foreign non-GCC nationals the legal right to purchase, own, sell, and inherit freehold property in designated investment zones.',
    keyProvisions: [
      'Enshrines absolute freehold ownership (Title in Fee Simple) in designated zones (Downtown, Palm Jumeirah, Dubai Marina, Emirates Hills, etc.)',
      'Mandates title deeds issued exclusively by DLD as conclusive proof of ownership before all UAE courts',
      'Establishes 99-year leasehold (Musataha) rights in non-freehold areas for qualified enterprises',
      'Establishes DLD transfer fees (statutory 4% of purchase value + administrative issuance fees)'
    ],
    exemptionsOrConditions: 'Non-freehold areas (e.g. Jumeirah 1, Umm Suqeim residential villas) remain reserved for UAE and GCC citizens unless authorized by royal decree.',
    penaltiesOrEnforcement: 'Unregistered transactions are legally void and unenforceable before courts.',
    officialGazetteRef: 'Dubai Government Official Gazette No. 313, 2006',
    provenance: {
      source_name: 'Dubai Land Department Legal Affairs',
      source_type: 'STATUTORY_RECORDS',
      verification_status: 'VERIFIED',
      verified_at: '2025-01-05',
      source_url: 'https://dubailand.gov.ae'
    }
  },
  {
    id: 'federal-commercial-companies-32-2021',
    decreeCode: 'Federal Decree-Law No. 32 of 2021',
    officialTitle: 'Commercial Companies Law',
    promulgationYear: 2021,
    jurisdictionLevel: 'FEDERAL_UAE',
    regulatoryBody: 'Ministry of Economy & Department of Economy and Tourism',
    statutoryScope: 'Abolished the historical 51% mandatory Emirati local shareholder requirement, enabling 100% foreign ownership of mainland UAE commercial and industrial companies.',
    keyProvisions: [
      '100% foreign ownership permitted across 1,000+ commercial, industrial, and service activities on mainland',
      'Eliminated requirement for a local service agent (LSA) for branches of foreign companies',
      'Facilitated corporate conversions, Special Purpose Acquisition Companies (SPACs), and fractional share allocations',
      'Standardized corporate governance standards and electronic voting for general assemblies'
    ],
    exemptionsOrConditions: 'A narrow list of strategic impact sectors (e.g. defense, oil & gas upstream, sovereign banking) still require specific committee approval.',
    penaltiesOrEnforcement: 'Enforced via Department of Economy & Tourism Commercial Registry inspections.',
    officialGazetteRef: 'Federal Official Gazette No. 711, Sept 2021',
    provenance: {
      source_name: 'UAE Ministry of Economy Legislative Gazette',
      source_type: 'STATUTORY_RECORDS',
      verification_status: 'VERIFIED',
      verified_at: '2024-12-01',
      source_url: 'https://www.moec.gov.ae'
    }
  }
]

export const VERIFIED_JUDICIAL_TRIBUNALS: JudicialTribunal[] = [
  {
    id: 'difc-courts',
    name: 'DIFC Courts',
    legalSystem: 'COMMON_LAW_ENGLISH',
    primaryJurisdiction: 'Commercial, Financial & Civil Disputes (Opt-in available for any global contract)',
    enforceability: 'Direct reciprocal enforcement with UK High Court, Singapore, New York, and UAE onshore courts via Law No. 16 of 2011.',
    appellateStructure: 'Small Claims Tribunal (SCT) -> Court of First Instance -> Court of Appeal (Final Bench).',
    description: 'Independent, English-language, common law judicial system operating with international judges (including former UK Supreme Court and Australian federal justices), offering digital hearings and specialized Technology & Construction Division.'
  },
  {
    id: 'rdsc-tribunal',
    name: 'Rental Dispute Settlement Centre (RDSC)',
    legalSystem: 'SPECIALIZED_RENTAL_TRIBUNAL',
    primaryJurisdiction: 'All Landlord-Tenant Leasing and Eviction Disputes in Dubai',
    enforceability: 'Decisions have the immediate force of an execution writ enforced directly by Dubai Police and Central Bank asset freeze mechanisms.',
    appellateStructure: 'First Instance Department -> Appellate Department (Claims > AED 100,000) -> Petition for Review.',
    description: 'Judicial arm of Dubai Land Department established by Decree No. 26 of 2013. Resolves rental litigations with average case durations under 21 days via digital case filings.'
  },
  {
    id: 'dubai-courts',
    name: 'Dubai Onshore Civil & Commercial Courts',
    legalSystem: 'CIVIL_LAW_ARABIC',
    primaryJurisdiction: 'Civil, Commercial, Labor, Real Estate, and Penal Law across Mainland Dubai',
    enforceability: 'Direct sovereign enforcement under UAE Civil Procedures Code.',
    appellateStructure: 'Dubai Court of First Instance -> Dubai Court of Appeal -> Dubai Court of Cassation.',
    description: 'The sovereign civil law jurisdiction of the Emirate governed by Islamic Jurisprudence principles and modern civil law codifications, conducted in Arabic with official certified translation services.'
  }
]
