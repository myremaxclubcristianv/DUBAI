import { SourceProvenance } from '@/types/provenance'

export interface InsurancePillar {
  id: string
  title: string
  arabicTitle: string
  category: 'HEALTH_MANDATORY' | 'PROPERTY_TITLE' | 'LIFE_WEALTH' | 'COMMERCIAL_LIABILITY'
  regulatoryBody: string
  statutoryMandate: string
  coverageScope: string[]
  minimumRequirements: string
  typicalAnnualCost: string
  approvedProviders: string[]
  goldenVisaCompliance: string
  provenance: SourceProvenance
}

export const VERIFIED_INSURANCE_PILLARS: InsurancePillar[] = [
  {
    id: 'dha-health-insurance',
    title: 'DHA Mandatory Health Insurance (ISAHD Framework)',
    arabicTitle: 'التأمين الصحي الإلزامي لهيئة الصحة بدبي',
    category: 'HEALTH_MANDATORY',
    regulatoryBody: 'Dubai Health Authority (DHA) & Central Bank of the UAE',
    statutoryMandate: 'Dubai Health Insurance Law No. 11 of 2013 mandates that every employer and visa sponsor in Dubai must provide valid health insurance coverage for their employees and dependents.',
    coverageScope: [
      'In-patient hospital accommodation, surgery, and critical intensive care',
      'Out-patient specialist consultations, laboratory pathology, and diagnostic imaging',
      'Emergency medical treatment across accredited UAE hospital networks',
      'Basic pharmacy benefit and prescription drugs (up to AED 1,500 – AED 10,000+ limit)',
      'Maternity healthcare including pre-natal checkups and delivery benefits'
    ],
    minimumRequirements: 'Essential Benefit Plan (EBP) minimum annual aggregate limit of AED 150,000 with maximum 20% co-insurance per outpatient visit.',
    typicalAnnualCost: 'AED 650 – AED 950/yr for Basic EBP; AED 3,500 – AED 18,000+/yr for Comprehensive/VIP International Direct Billing.',
    approvedProviders: ['Sukoon Insurance', 'Daman National Health', 'Orient Insurance', 'GIG Gulf', 'Cigna Healthcare', 'Bupa Global'],
    goldenVisaCompliance: 'Golden Visa applicants who are self-sponsored or property investors must hold a DHA-compliant comprehensive health insurance policy with minimum UAE-wide inpatient coverage.',
    provenance: {
      source_name: 'Dubai Health Authority Insurance Systems Branch (ISAHD)',
      source_type: 'STATUTORY_RECORDS',
      verification_status: 'VERIFIED',
      verified_at: '2025-01-10',
      source_url: 'https://www.isahd.ae'
    }
  },
  {
    id: 'property-homeowner-insurance',
    title: 'Property, Building & Landlord Asset Protection',
    arabicTitle: 'تأمين المباني والممتلكات العقارية',
    category: 'PROPERTY_TITLE',
    regulatoryBody: 'Central Bank of the UAE (Insurance Division) & DLD',
    statutoryMandate: 'Mandated by UAE Central Bank mortgage regulations for all mortgaged residential properties. Highly recommended for freehold owners and landlords.',
    coverageScope: [
      'Full Building Replacement Cost against fire, lightning, storm, burst water pipes, and structural damage',
      'High-Value Home Contents Protection (art, bespoke furniture, luxury electronics, jewelry)',
      'Landlord Loss of Rent Coverage (compensates lost rent following an insured property disaster)',
      'Public & Property Owner Liability (covers bodily injury or damage to third parties up to AED 5,000,000)',
      'Alternative Accommodation Allowance for owner-occupiers during restoration'
    ],
    minimumRequirements: 'Full reinstatement value replacement basis without under-insurance penalties.',
    typicalAnnualCost: '0.04% to 0.08% of building structural value (e.g. AED 1,200/yr for an AED 2M apartment; AED 4,500/yr for an AED 8M villa).',
    approvedProviders: ['Orient Insurance PJSC', 'Sukoon Insurance', 'GIG Gulf', 'Dubai Insurance Company', 'Salama Islamic Arab Insurance'],
    goldenVisaCompliance: 'Provides asset risk hedging for freehold property titles anchoring 10-year investor visas.',
    provenance: {
      source_name: 'UAE Central Bank Insurance Regulation Department',
      source_type: 'STATUTORY_RECORDS',
      verification_status: 'VERIFIED',
      verified_at: '2024-12-20',
      source_url: 'https://www.centralbank.ae'
    }
  },
  {
    id: 'life-wealth-succession',
    title: 'Cross-Border Life & Succession Protection (DIFC / ADGM)',
    arabicTitle: 'تأمين الحياة وحماية الثروات والتوريث',
    category: 'LIFE_WEALTH',
    regulatoryBody: 'Dubai Financial Services Authority (DFSA) & DIFC Courts',
    statutoryMandate: 'Enables high-net-worth families, entrepreneurs, and global investors to structure liquidity for estate planning, estate tax mitigation abroad, and keyman business continuity.',
    coverageScope: [
      'Jumbo Universal Life & Indexed Universal Life (IUL) policies ($5M to $100M+ USD)',
      'DIFC Foundation & Common Law Trust settlement integration',
      'Statutory non-Sharia inheritance distribution registered under DIFC Wills Service (Law No. 15 of 2017)',
      'Key Person Insurance protecting commercial enterprises against executive loss',
      'Shareholder Buy-Sell Cross Purchase liquidity'
    ],
    minimumRequirements: 'Medical underwriting and wealth source due diligence conducted under international AML/CFT standards.',
    typicalAnnualCost: 'Custom risk-rated actuarial schedules based on age, policy structure, and asset scale.',
    approvedProviders: ['Zurich International Life Middle East', 'MetLife Gulf', 'Prudential International', 'Lombard International', 'Swiss Life Global Solutions'],
    goldenVisaCompliance: 'Provides liquidity reserves guaranteeing uninterrupted family office operations under UAE corporate governance.',
    provenance: {
      source_name: 'DIFC Wills Service Centre & DFSA Gazette',
      source_type: 'STATUTORY_RECORDS',
      verification_status: 'VERIFIED',
      verified_at: '2025-01-18',
      source_url: 'https://www.difccourts.ae/wills-service'
    }
  }
]
