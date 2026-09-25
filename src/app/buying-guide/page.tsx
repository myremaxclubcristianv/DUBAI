'use client'

import * as React from 'react'
import Link from 'next/link'
import { SourceBadge } from '@/components/ui/source-badge'
import { PageIntro } from '@/components/layout/layout-primitives'
import {
  CheckCircle2,
  ChevronDown,
  ChevronUp,
  Info,
  ArrowRight,
} from 'lucide-react'

type ClassificationType = 
  | 'OFFICIAL_REQUIREMENT' 
  | 'GENERAL_GUIDANCE' 
  | 'PLATFORM_WORKFLOW' 
  | 'VERIFY_WITH_PROFESSIONAL'

interface BuyingStage {
  step: string
  title: string
  subtitle: string
  classification: ClassificationType
  classificationLabel: string
  description: string
  documents: string[]
  statutory_fees: string
  responsibilities: string
  statutory_source: string
}

const BUYING_STAGES: BuyingStage[] = [
  {
    step: '01',
    title: 'Define Objective & Ownership Structure',
    subtitle: 'Freehold Territory & Purpose Classification',
    classification: 'GENERAL_GUIDANCE',
    classificationLabel: 'GENERAL GUIDANCE',
    description: 'Establish clear portfolio objective: capital appreciation, recurring net yield, or primary family residence. Confirm property is located in designated freehold areas under Regulation No. 3 of 2006 granting foreign title ownership in perpetuity.',
    documents: ['Passport Copy', 'Investor KYC / Source of Funds Identification'],
    statutory_fees: 'Zero statutory search fees',
    responsibilities: 'Principal & Advisor establish acquisition parameters and designated freehold zone boundaries.',
    statutory_source: 'Regulation No. 3 of 2006 Determining Areas for Foreign Ownership in Dubai.'
  },
  {
    step: '02',
    title: 'Budget Modeling & Total Capital Allocation',
    subtitle: 'Statutory Fee Schedule & All-in Capital Modeling',
    classification: 'PLATFORM_WORKFLOW',
    classificationLabel: 'PLATFORM WORKFLOW',
    description: 'Model all acquisition cash requirements including the buyer DLD transfer fee (2% standard buyer share of the combined 4% transaction fee), trustee registration charges (AED 4,200 / AED 2,100), document tariffs, brokerage fee (2% + 5% VAT), and contingency reserve using the platform investment calculator.',
    documents: ['Platform Scenario Worksheet', 'Proof of Liquid Capital / Bank Statements'],
    statutory_fees: 'Zero fees for modeling; combined statutory transfer fee is 4% of purchase price (2% buyer + 2% seller standard breakdown)',
    responsibilities: 'Investor calculates estimated buyer acquisition costs before formal bidding.',
    statutory_source: 'Executive Council Resolution No. 30 of 2013 on Dubai Land Department Fees.'
  },
  {
    step: '03',
    title: 'Area Selection & Infrastructure Analysis',
    subtitle: 'Master Community Governance & Zoning',
    classification: 'GENERAL_GUIDANCE',
    classificationLabel: 'GENERAL GUIDANCE',
    description: 'Evaluate micro-locations across prime Dubai master communities (Palm Jumeirah, Downtown, DIFC, Dubai Hills, Dubai Marina). Review developer track record, service charge ranges, and master developer covenants.',
    documents: ['Community Master Plan', 'Mollak Service Charge Schedules'],
    statutory_fees: 'Zero public inspection fees',
    responsibilities: 'Buyer reviews infrastructure connectivity and historical occupancy dynamics.',
    statutory_source: 'Dubai Law No. 6 of 2019 Concerning Ownership of Jointly Owned Real Property.'
  },
  {
    step: '04',
    title: 'Property & Project Identification',
    subtitle: 'Verified Registry Shortlisting & Physical Inspection',
    classification: 'PLATFORM_WORKFLOW',
    classificationLabel: 'PLATFORM WORKFLOW',
    description: 'Shortlist verified properties and projects with authenticated DLD developer numbers, escrow registration, and exact unit specifications. Schedule private walkthroughs or snagging reviews.',
    documents: ['Architectural Floor Plan', 'Project Brochure / Spec Sheet', 'Unit Number Identification'],
    statutory_fees: 'Zero inspection fees',
    responsibilities: 'Buyer selects candidate assets from verified database inventory.',
    statutory_source: 'DLD Official Project & Developer Registry.'
  },
  {
    step: '05',
    title: 'Title & Developer Due Diligence',
    subtitle: 'Escrow Account Validation & Title Ledger Check',
    classification: 'OFFICIAL_REQUIREMENT',
    classificationLabel: 'OFFICIAL REQUIREMENT',
    description: 'Execute formal title search on the DLD REST platform for ready units to verify unencumbered ownership. For off-plan purchases, confirm the developer has an active escrow account with project completion percentage verified by DLD engineering audits.',
    documents: ['DLD Title Deed E-Certificate', 'DLD Escrow Account Certificate', 'Building Completion Certificate'],
    statutory_fees: 'Zero fee for online title verification',
    responsibilities: 'Buyer / Advisor verifies legal title integrity and escrow account compliance.',
    statutory_source: 'Law No. 8 of 2007 Concerning Escrow Accounts for Real Estate Development in Dubai.'
  },
  {
    step: '06',
    title: 'Commercial Offer & Form F (MOU) Execution',
    subtitle: 'Standardized Contract F & 10% Security Deposit',
    classification: 'OFFICIAL_REQUIREMENT',
    classificationLabel: 'OFFICIAL REQUIREMENT',
    description: 'Parties agree on commercial terms and sign the standardized RERA Contract F (Form F) generated via the official Dubai REST portal. The buyer lodges a 10% security deposit cheque held in escrow by the licensed brokerage.',
    documents: ['Unified RERA Form F Contract', 'Passport Copies & Emirates IDs', '10% Deposit Cheque'],
    statutory_fees: 'Zero contract generation fee on DLD portal',
    responsibilities: 'RERA-certified broker prepares Form F; Buyer and Seller sign digitally or physically.',
    statutory_source: 'Dubai Law No. 85 of 2006 Regulating Real Estate Brokers in Dubai.'
  },
  {
    step: '07',
    title: 'Financing & Mortgage Approval (If Applicable)',
    subtitle: 'CBUAE Mortgage Standards & Bank NOC',
    classification: 'VERIFY_WITH_PROFESSIONAL',
    classificationLabel: 'VERIFY WITH PROFESSIONAL',
    description: 'For financed transactions, secure final mortgage sanction from a UAE Central Bank licensed bank (maximum 80% LTV for expatriate first homes ≤ AED 5M). Lender issues final offer letter and valuation confirmation.',
    documents: ['Bank Final Offer Letter (FOL)', 'Property Valuation Report', 'Salary / Corporate Financials'],
    statutory_fees: 'Bank Valuation Fee (AED 2,500–3,500) • DLD Mortgage Reg Fee (0.25% of loan + AED 250 Title Deed + AED 20 Knowledge/Innovation)',
    responsibilities: 'Mortgage lender conducts property appraisal and prepares discharge/security paperwork.',
    statutory_source: 'Central Bank of the UAE Mortgage Regulations.'
  },
  {
    step: '08',
    title: 'Developer NOC Clearance (No Objection Certificate)',
    subtitle: 'Service Charge Settlement & Resale Clearance',
    classification: 'OFFICIAL_REQUIREMENT',
    classificationLabel: 'OFFICIAL REQUIREMENT',
    description: 'Seller applies to the master developer (e.g., Emaar, Nakheel, Meraas) for an official No Objection Certificate (NOC). The developer verifies that all community service charges and utility arrears are fully settled.',
    documents: ['Executed Form F', 'Title Deed Copy', 'Service Charge Receipts / Clearance Letter'],
    statutory_fees: 'Developer NOC fee: typically AED 500 to AED 5,000 + 5% VAT',
    responsibilities: 'Seller pays outstanding community charges; Developer issues electronic NOC.',
    statutory_source: 'DLD Master Community Developer Regulations.'
  },
  {
    step: '09',
    title: 'Statutory Fee Settlement & Manager Cheques',
    subtitle: 'Preparation of Official Bank Cheques for DLD Closing',
    classification: 'OFFICIAL_REQUIREMENT',
    classificationLabel: 'OFFICIAL REQUIREMENT',
    description: 'Buyer prepares official UAE bank manager cheques for: (1) purchase balance to seller, (2) Buyer DLD transfer fee (2% of price; combined 4% transfer fee is split 2% buyer / 2% seller per official DLD tariff schedule or contractual agreement), (3) DLD Registration Trustee fee (AED 4,000 + 5% VAT), (4) Brokerage commission (2% + 5% VAT).',
    documents: ['Manager Cheques', 'Proof of Source of Funds', 'Original Passports / EIDs'],
    statutory_fees: 'DLD Transfer Fee (2% buyer + 2% seller) + AED 250 Title Deed + AED 250/225/100 Map Category + AED 10 Knowledge + AED 10 Innovation + AED 4,000 Trustee (+5% VAT)',
    responsibilities: 'Buyer bank issues bank-certified manager cheques in exact beneficiary names.',
    statutory_source: 'Executive Council Resolution No. 30 of 2013.'
  },
  {
    step: '10',
    title: 'Conveyance Closing & Title Deed Issuance',
    subtitle: 'DLD Registration Trustee Closing & Land Ledger Registration',
    classification: 'OFFICIAL_REQUIREMENT',
    classificationLabel: 'OFFICIAL REQUIREMENT',
    description: 'Buyer and Seller convene at an authorized DLD Registration Trustee office to execute the transfer. The trustee validates all original documents and immediately triggers title transfer on the DLD central electronic ledger.',
    documents: ['Original Passports / Emirates IDs', 'Developer NOC', 'Manager Cheques', 'Form F'],
    statutory_fees: 'Conveyance fees collected at Trustee counter',
    responsibilities: 'DLD Registration Trustee validates identities, executes transfer, and issues electronic Title Deed.',
    statutory_source: 'Dubai Law No. 7 of 2006 Concerning Real Property Registration.'
  },
  {
    step: '11',
    title: 'Handover, Utilities & DEWA Activation',
    subtitle: 'Key Exchange, Snagging Handover & District Cooling',
    classification: 'GENERAL_GUIDANCE',
    classificationLabel: 'GENERAL GUIDANCE',
    description: 'Seller surrenders keys, access fobs, and parking permits to buyer. Buyer activates DEWA move-in, air conditioning account (Empower / Tabreed), and registers the tenancy in Ejari if property is leased.',
    documents: ['New Electronic Title Deed', 'DEWA Move-in Number', 'Key Handover Protocol Form'],
    statutory_fees: 'DEWA Deposit: AED 2,000 (Apt) / AED 4,000 (Villa) + AED 130 connection',
    responsibilities: 'New owner activates utility accounts and assumes physical custody.',
    statutory_source: 'DEWA Move-In Regulations & DLD Ejari System Rules.'
  },
  {
    step: '12',
    title: 'Residency Application & Post-Purchase Structuring',
    subtitle: 'Golden Visa (Cabinet Res. No. 65/2022) & Tax Context',
    classification: 'OFFICIAL_REQUIREMENT',
    classificationLabel: 'OFFICIAL REQUIREMENT',
    description: 'For property value threshold ≥ AED 2,000,000, apply for Real Estate Investor Golden Residency (5 years per UAE Government summary / 10 years per federal service portals) via DLD Cube or GDRFA. Ownership, financing, property eligibility and residency requirements are subject to the competent authority\'s current rules.',
    documents: ['Electronic Title Deed (≥ AED 2M)', 'Medical Fitness Test', 'Dubai Police Good Conduct Certificate', 'Passport'],
    statutory_fees: 'DLD Cube Golden Visa statutory fees (approx. AED 9,500 per applicant)',
    responsibilities: 'Investor files residency petition at DLD Cube headquarters or via GDRFA.',
    statutory_source: 'Cabinet Resolution No. 65 of 2022 on the Executive Regulations of the Law on Entry and Residence of Foreigners.'
  }
]

export default function BuyingGuidePage() {
  const [expandedStep, setExpandedStep] = React.useState<string | null>('10')

  const getBadgeStyle = (classification: ClassificationType) => {
    switch (classification) {
      case 'OFFICIAL_REQUIREMENT':
        return 'bg-emerald-50 text-emerald-800 border-emerald-200'
      case 'GENERAL_GUIDANCE':
        return 'bg-blue-50 text-blue-800 border-blue-200'
      case 'PLATFORM_WORKFLOW':
        return 'bg-amber-50 text-amber-800 border-amber-200'
      case 'VERIFY_WITH_PROFESSIONAL':
        return 'bg-purple-50 text-purple-800 border-purple-200'
    }
  }

  return (
    <div className="bg-white text-text-primary min-h-screen pb-24">
      {/* 1. EDITORIAL PAGE INTRO */}
      <PageIntro
        eyebrow="Statutory Conveyancing & Acquisition Roadmap"
        badge={<SourceBadge status="UAE GOVERNMENT" sourceName="DLD & RERA Standard Framework" />}
        title="BUYING GUIDE"
        description="12-Stage acquisition & conveyancing roadmap. From initial objective definition to DLD registration trustee title deed transfer and Golden Visa processing."
      />

      <main className="w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 space-y-8">
        {/* 2. CLASSIFICATION LEGEND */}
        <div className="p-4 rounded-xl border border-border bg-surface-subtle flex flex-wrap items-center gap-4 text-xs">
          <span className="font-bold text-text-primary uppercase tracking-wider font-mono text-[10px]">Classification Standard:</span>
          <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-md border text-[11px] font-semibold bg-emerald-50 text-emerald-800 border-emerald-200">
            <span>[OFFICIAL REQUIREMENT]</span>
          </div>
          <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-md border text-[11px] font-semibold bg-blue-50 text-blue-800 border-blue-200">
            <span>[GENERAL GUIDANCE]</span>
          </div>
          <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-md border text-[11px] font-semibold bg-amber-50 text-amber-800 border-amber-200">
            <span>[PLATFORM WORKFLOW]</span>
          </div>
          <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-md border text-[11px] font-semibold bg-purple-50 text-purple-800 border-purple-200">
            <span>[VERIFY WITH PROFESSIONAL]</span>
          </div>
        </div>

        {/* 3. 12-STAGE TIMELINE ACCORDION */}
        <div className="space-y-4">
          {BUYING_STAGES.map((stage) => {
            const isExpanded = expandedStep === stage.step
            return (
              <div
                key={stage.step}
                className="rounded-2xl border border-border bg-white overflow-hidden transition-all shadow-2xs hover:border-text-muted"
              >
                <button
                  type="button"
                  onClick={() => setExpandedStep(isExpanded ? null : stage.step)}
                  className="w-full p-6 text-left flex items-start sm:items-center justify-between gap-4 cursor-pointer"
                >
                  <div className="flex items-start sm:items-center gap-4">
                    <span className="text-xl sm:text-2xl font-black font-mono text-accent shrink-0">
                      {stage.step}
                    </span>
                    <div className="space-y-1">
                      <div className="flex flex-wrap items-center gap-2">
                        <span className="text-base sm:text-lg font-bold text-text-primary">
                          {stage.title}
                        </span>
                        <span className={`px-2 py-0.5 rounded text-[10px] font-mono font-bold border ${getBadgeStyle(stage.classification)}`}>
                          [{stage.classificationLabel}]
                        </span>
                      </div>
                      <p className="text-xs text-text-secondary">{stage.subtitle}</p>
                    </div>
                  </div>

                  <div className="p-2 rounded-lg bg-surface-subtle text-text-secondary shrink-0">
                    {isExpanded ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
                  </div>
                </button>

                {isExpanded && (
                  <div className="px-6 pb-6 pt-2 border-t border-border-subtle bg-surface-subtle/50 space-y-6 animate-in fade-in duration-150">
                    <p className="text-xs sm:text-sm text-text-secondary leading-relaxed">
                      {stage.description}
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs">
                      <div className="p-5 rounded-2xl bg-white border border-border flex flex-col justify-between h-full space-y-2.5 shadow-2xs">
                        <span className="text-[10px] font-mono uppercase font-bold text-accent tracking-wider">
                          Required Documentation
                        </span>
                        <ul className="space-y-1.5 text-text-secondary pt-1 border-t border-border-subtle mt-auto">
                          {stage.documents.map((doc, idx) => (
                            <li key={idx} className="flex items-start gap-1.5">
                              <CheckCircle2 className="h-3.5 w-3.5 text-emerald-600 shrink-0 mt-0.5" />
                              <span>{doc}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="p-5 rounded-2xl bg-white border border-border flex flex-col justify-between h-full space-y-2.5 shadow-2xs">
                        <span className="text-[10px] font-mono uppercase font-bold text-accent tracking-wider">
                          Statutory & Professional Fees
                        </span>
                        <p className="text-text-secondary leading-relaxed pt-1 border-t border-border-subtle mt-auto">
                          {stage.statutory_fees}
                        </p>
                      </div>

                      <div className="p-5 rounded-2xl bg-white border border-border flex flex-col justify-between h-full space-y-2.5 shadow-2xs">
                        <span className="text-[10px] font-mono uppercase font-bold text-accent tracking-wider">
                          Primary Responsibility
                        </span>
                        <p className="text-text-secondary leading-relaxed pt-1 border-t border-border-subtle mt-auto">
                          {stage.responsibilities}
                        </p>
                      </div>
                    </div>

                    <div className="pt-3 border-t border-border-subtle flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-[11px] font-mono text-text-muted">
                      <span>Legal Authority: {stage.statutory_source}</span>
                      <span>DLD Verification: Current Official Framework</span>
                    </div>
                  </div>
                )}
              </div>
            )
          })}
        </div>

        {/* 4. INTAKE PROMPT */}
        <div className="p-6 sm:p-8 rounded-2xl border border-border bg-white flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="space-y-1">
            <h3 className="text-base font-bold text-text-primary">
              Ready to initiate a transaction or verify portfolio due diligence?
            </h3>
            <p className="text-xs text-text-secondary">
              Cristian Văduva Private Client Advisory coordinates direct DLD conveyancing, trustee settlements, and investor residency files.
            </p>
          </div>
          <Link
            href="/private-client"
            className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-text-primary text-white hover:bg-black rounded-xl text-xs font-bold transition-colors shrink-0"
          >
            <span>Access Private Client Desk</span>
            <ArrowRight className="h-4 w-4 text-accent" />
          </Link>
        </div>

        {/* 5. LEGAL NOTICE */}
        <div className="p-6 rounded-2xl border border-border bg-surface text-xs text-text-secondary space-y-2">
          <div className="flex items-center gap-2 font-bold text-text-primary">
            <Info className="h-4 w-4 text-accent" />
            <span>Statutory Conveyancing Disclaimer</span>
          </div>
          <p className="leading-relaxed">
            This guide outlines the standard statutory procedure established by Dubai Land Department and RERA for freehold property transactions. Complex transactions involving corporate offshore entities (DIFC, JAFZA, BVI) or Power of Attorney representations require notarized and MoFA-attested documentation.
          </p>
        </div>
      </main>
    </div>
  )
}
