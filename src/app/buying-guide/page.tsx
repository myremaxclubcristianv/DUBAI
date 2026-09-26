'use client'

import * as React from 'react'
import Link from 'next/link'
import { SourceBadge } from '@/components/ui/source-badge'
import { PageIntro } from '@/components/layout/layout-primitives'
import { CadranDial, CadranQuadrant } from '@/components/ui/luxury-cadran'
import {
  CheckCircle2,
  ChevronDown,
  ChevronUp,
  Info,
  ArrowRight,
  Landmark,
  Scale,
  CreditCard,
  FileCheck,
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
    description: 'Buyer prepares official UAE bank manager cheques for purchase balance, 2% DLD transfer fee, AED 4,200 Registration Trustee fee, and broker commission.',
    documents: ['Bank Manager Cheques', 'Original Emirates IDs / Passports', 'Approved Developer NOC'],
    statutory_fees: 'Manager Cheque issuance fee (typically AED 25 per cheque charged by bank)',
    responsibilities: 'Buyer obtains guaranteed bank manager cheques from their UAE banking institution.',
    statutory_source: 'DLD Conveyancing Guidelines & Central Bank Standard.'
  },
  {
    step: '10',
    title: 'DLD Registration Trustee Closing & Conveyance',
    subtitle: 'Formal Title Transfer & E-Title Deed Issuance',
    classification: 'OFFICIAL_REQUIREMENT',
    classificationLabel: 'OFFICIAL REQUIREMENT',
    description: 'Parties attend a licensed DLD Registration Trustee office. The Trustee verifies identities, logs manager cheques, discharges existing mortgages, registers new title, and triggers electronic Title Deed generation.',
    documents: ['Original Passports / Emirates IDs', 'Developer NOC', 'Original Title Deed / Form F', 'Manager Cheques'],
    statutory_fees: '4% Combined DLD fee + AED 4,000 (+5% VAT) Trustee Fee + AED 580 Admin/Map/Knowledge Tariffs',
    responsibilities: 'DLD Registration Trustee executes legal conveyance on the central land ledger.',
    statutory_source: 'Executive Council Resolution No. 30 of 2013 on DLD Tariffs.'
  },
  {
    step: '11',
    title: 'Utility Transfer, Key Handover & Snagging',
    subtitle: 'DEWA, Empower / Tabreed, and Access Activation',
    classification: 'OFFICIAL_REQUIREMENT',
    classificationLabel: 'OFFICIAL REQUIREMENT',
    description: 'Buyer activates DEWA (Dubai Electricity and Water Authority) account using the new Title Deed number, settles security deposits, transfers district cooling accounts, and conducts physical unit handover with keys and access fobs.',
    documents: ['New Electronic Title Deed', 'Passport / Emirates ID Copy', 'DEWA Move-in Form'],
    statutory_fees: 'DEWA Deposit: AED 2,000 (Apartment) / AED 4,000 (Villa) + AED 130 Connection + District Cooling Deposit',
    responsibilities: 'Buyer activates utility accounts online and takes formal vacant possession.',
    statutory_source: 'DEWA & District Cooling Connection Regulations.'
  },
  {
    step: '12',
    title: 'Golden Visa & Investor Residency Filing (If Qualifying)',
    subtitle: 'DLD Cube Express 10-Year Residency Track',
    classification: 'GENERAL_GUIDANCE',
    classificationLabel: 'GENERAL GUIDANCE',
    description: 'For acquisitions meeting or exceeding AED 2,000,000, apply for the 10-Year Real Estate Investor Golden Residency Visa via DLD Cube. Complete medical fitness examination, Emirates ID biometrics, and family sponsorship.',
    documents: ['New Title Deed (Value ≥ AED 2M)', 'Passport Copy', 'DHA Health Insurance', 'Police Clearance Certificate'],
    statutory_fees: 'DLD Cube Golden Visa processing fee (~AED 9,500 to AED 10,500 inclusive of medical, Emirates ID, and stamping)',
    responsibilities: 'Investor files residency petition through DLD Cube VIP service centre.',
    statutory_source: 'Cabinet Resolution No. 65 of 2022 on Entry and Residence of Foreigners.'
  }
]

export default function BuyingGuidePage() {
  const [expandedStep, setExpandedStep] = React.useState<string | null>('01')

  const getBadgeStyle = (classification: ClassificationType) => {
    switch (classification) {
      case 'OFFICIAL_REQUIREMENT':
        return 'bg-emerald-50 text-emerald-700 border-emerald-200'
      case 'GENERAL_GUIDANCE':
        return 'bg-blue-50 text-blue-700 border-blue-200'
      case 'PLATFORM_WORKFLOW':
        return 'bg-amber-50 text-amber-700 border-amber-200'
      case 'VERIFY_WITH_PROFESSIONAL':
        return 'bg-purple-50 text-purple-700 border-purple-200'
      default:
        return 'bg-zinc-100 text-zinc-700 border-zinc-200'
    }
  }

  return (
    <div className="bg-white text-[#1d1d1f] min-h-screen pb-32 selection:bg-[#0071e3]/10 selection:text-[#1d1d1f]">
      {/* 1. EDITORIAL PAGE INTRO */}
      <PageIntro
        eyebrow="Statutory Conveyancing & Acquisition Roadmap"
        badge={<SourceBadge status="UAE GOVERNMENT" sourceName="DLD & RERA Standard Framework" />}
        title="Buying Guide."
        description="12-Stage acquisition & conveyancing roadmap. From initial objective definition to DLD registration trustee title deed transfer and Golden Visa processing."
      />

      <main className="w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 space-y-12">
        {/* 2. CLASSIFICATION LEGEND */}
        <div className="p-5 rounded-3xl border border-black/10 bg-[#f5f5f7] flex flex-wrap items-center gap-3 text-xs shadow-xs">
          <span className="font-bold text-[#1d1d1f] uppercase tracking-widest font-mono text-[10px]">Classification Standard:</span>
          <div className="flex items-center gap-1.5 px-3 py-1 rounded-full border text-[11px] font-mono font-medium bg-emerald-50 text-emerald-700 border-emerald-200">
            <span>[OFFICIAL REQUIREMENT]</span>
          </div>
          <div className="flex items-center gap-1.5 px-3 py-1 rounded-full border text-[11px] font-mono font-medium bg-blue-50 text-blue-700 border-blue-200">
            <span>[GENERAL GUIDANCE]</span>
          </div>
          <div className="flex items-center gap-1.5 px-3 py-1 rounded-full border text-[11px] font-mono font-medium bg-amber-50 text-amber-700 border-amber-200">
            <span>[PLATFORM WORKFLOW]</span>
          </div>
          <div className="flex items-center gap-1.5 px-3 py-1 rounded-full border text-[11px] font-mono font-medium bg-purple-50 text-purple-700 border-purple-200">
            <span>[VERIFY WITH PROFESSIONAL]</span>
          </div>
        </div>

        {/* 2B. STATUTORY CONVEYANCING CADRANS */}
        <div className="space-y-6">
          <div className="flex items-center justify-between border-b border-black/10 pb-4">
            <span className="text-[11px] font-mono font-bold uppercase tracking-[0.2em] text-[#b8860b]">
              STATUTORY CONVEYANCING CADRANS
            </span>
            <span className="text-xs font-mono text-[#86868b]">Executive Council Res. No. 30 of 2013</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <CadranDial
              label="DLD TRANSFER FEE"
              sublabel="Statutory Closing Tariff"
              value="4.00%"
              unit="COMBINED TARIFF"
              targetValue="Split 2% Buyer / 2% Seller"
              percentage={80}
              status="VERIFIED"
              statutoryRef="Resolution No. 30/2013"
              icon={Scale}
            />
            <CadranDial
              label="TRUSTEE REGISTRATION"
              sublabel="Property Value ≥ AED 500k"
              value="4,000"
              unit="AED + 5% VAT (AED 4,200)"
              targetValue="AED 2,000 if < AED 500k"
              percentage={90}
              status="VERIFIED"
              statutoryRef="DLD Trustee Schedule"
              icon={Landmark}
            />
            <CadranDial
              label="MOU SECURITY DEPOSIT"
              sublabel="RERA Form F Escrow Cheque"
              value="10.00%"
              unit="HELD IN ESCROW"
              targetValue="Manager Cheque Standard"
              percentage={100}
              status="OPTIMAL"
              statutoryRef="Dubai Law No. 85/2006"
              icon={CreditCard}
            />
            <CadranDial
              label="TITLE DEED ISSUANCE"
              sublabel="Electronic Ledger Update"
              value="AED 250"
              unit="E-CERTIFICATE"
              targetValue="Instant Conveyance Closing"
              percentage={95}
              status="VERIFIED"
              statutoryRef="Dubai Law No. 7/2006"
              icon={FileCheck}
            />
          </div>
        </div>

        {/* 2C. STATUTORY CONVEYANCING FEE QUADRANT */}
        <CadranQuadrant
          eyebrow="TRANSACTION COST TAXONOMY"
          title="Complete Statutory Closing Fee Breakdown"
          statutorySource="Dubai Land Department (DLD) & RERA Regulatory Fee Tables"
          quadrants={[
            {
              title: 'Buyer DLD Transfer Fee (2%)',
              value: '2.00% + AED 580',
              subtext: 'Buyer standard share of 4% combined transfer fee plus AED 250 Title Deed + AED 250 Map + AED 20 Knowledge/Innovation.',
              delta: 'STATUTORY',
              isPositive: true,
              statutoryRef: 'Executive Council Res. 30/2013',
            },
            {
              title: 'DLD Registration Trustee Fee',
              value: 'AED 4,200',
              subtext: 'Mandatory Trustee conveyance fee collected at counter (AED 4,000 + 5% VAT for assets ≥ AED 500k).',
              delta: 'MANDATORY',
              isPositive: true,
              statutoryRef: 'DLD Trustee Tariff Table',
            },
            {
              title: 'RERA Brokerage Commission',
              value: '2.00% + 5% VAT',
              subtext: 'Standard licensed real estate consultancy fee split 2% buyer side under RERA Form B mandate.',
              delta: 'PROFESSIONAL',
              isPositive: true,
              statutoryRef: 'Dubai Law No. 85/2006',
            },
            {
              title: 'Master Developer NOC Tariff',
              value: 'AED 500 – 5,000',
              subtext: 'Developer resale clearance certificate verifying all service charges and utility accounts are zero-arrears.',
              delta: 'CLEARANCE',
              isPositive: true,
              statutoryRef: 'DLD Master Community Rules',
            },
          ]}
        />

        {/* 3. 12-STAGE TIMELINE ACCORDION */}
        <div className="space-y-4">
          {BUYING_STAGES.map((stage) => {
            const isExpanded = expandedStep === stage.step
            return (
              <div
                key={stage.step}
                className="rounded-3xl border border-black/10 bg-white overflow-hidden transition-all shadow-[0_2px_12px_rgba(0,0,0,0.03)] apple-card-hover"
              >
                <button
                  type="button"
                  onClick={() => setExpandedStep(isExpanded ? null : stage.step)}
                  className="w-full p-6 sm:p-7 text-left flex items-start sm:items-center justify-between gap-4 cursor-pointer"
                >
                  <div className="flex items-start sm:items-center gap-5">
                    <span className="text-xl sm:text-2xl font-bold font-mono text-[#b8860b] shrink-0">
                      {stage.step}
                    </span>
                    <div className="space-y-1">
                      <div className="flex flex-wrap items-center gap-2.5">
                        <span className="text-base sm:text-lg font-bold text-[#1d1d1f] tracking-tight">
                          {stage.title}
                        </span>
                        <span className={`px-2.5 py-0.5 rounded-full text-[10px] font-mono font-bold border ${getBadgeStyle(stage.classification)}`}>
                          [{stage.classificationLabel}]
                        </span>
                      </div>
                      <p className="text-xs text-[#6e6e73]">{stage.subtitle}</p>
                    </div>
                  </div>

                  <div className="p-2.5 rounded-xl bg-[#f5f5f7] text-[#1d1d1f] shrink-0">
                    {isExpanded ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
                  </div>
                </button>

                {isExpanded && (
                  <div className="px-6 sm:px-7 pb-7 pt-4 border-t border-black/10 bg-[#fbfbfd] space-y-6 animate-in fade-in duration-150">
                    <p className="text-xs sm:text-sm text-[#6e6e73] leading-relaxed max-w-4xl">
                      {stage.description}
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs">
                      <div className="p-5 rounded-2xl bg-white border border-black/10 flex flex-col justify-between h-full space-y-3 shadow-xs">
                        <span className="text-[10px] font-mono uppercase font-bold text-[#b8860b] tracking-widest">
                          Required Documentation
                        </span>
                        <ul className="space-y-2 text-[#6e6e73] pt-2 border-t border-black/5 mt-auto">
                          {stage.documents.map((doc, idx) => (
                            <li key={idx} className="flex items-start gap-2">
                              <CheckCircle2 className="h-3.5 w-3.5 text-[#b8860b] shrink-0 mt-0.5" />
                              <span className="text-[#1d1d1f] font-medium">{doc}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="p-5 rounded-2xl bg-white border border-black/10 flex flex-col justify-between h-full space-y-3 shadow-xs">
                        <span className="text-[10px] font-mono uppercase font-bold text-[#b8860b] tracking-widest">
                          Statutory & Professional Fees
                        </span>
                        <p className="text-[#1d1d1f] leading-relaxed pt-2 border-t border-black/5 mt-auto font-medium">
                          {stage.statutory_fees}
                        </p>
                      </div>

                      <div className="p-5 rounded-2xl bg-white border border-black/10 flex flex-col justify-between h-full space-y-3 shadow-xs">
                        <span className="text-[10px] font-mono uppercase font-bold text-[#b8860b] tracking-widest">
                          Primary Responsibility
                        </span>
                        <p className="text-[#1d1d1f] leading-relaxed pt-2 border-t border-black/5 mt-auto font-medium">
                          {stage.responsibilities}
                        </p>
                      </div>
                    </div>

                    <div className="pt-4 border-t border-black/10 flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-[11px] font-mono text-[#86868b]">
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
        <div className="p-8 sm:p-12 rounded-3xl border border-black/10 bg-[#f5f5f7] flex flex-col sm:flex-row sm:items-center justify-between gap-6 shadow-xs">
          <div className="space-y-1.5 max-w-xl">
            <h3 className="text-xl font-bold text-[#1d1d1f] tracking-tight">
              Ready to initiate a transaction or verify portfolio due diligence?
            </h3>
            <p className="text-xs sm:text-sm text-[#6e6e73] leading-relaxed">
              Cristian Văduva Private Client Advisory coordinates direct DLD conveyancing, trustee settlements, and investor residency files.
            </p>
          </div>
          <Link
            href="/private-client"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#1d1d1f] text-white hover:bg-[#000000] rounded-full text-xs font-bold uppercase tracking-wider transition-all shrink-0 cursor-pointer shadow-sm"
          >
            <span>Access Private Client Desk</span>
            <ArrowRight className="h-4 w-4 text-white/70" />
          </Link>
        </div>

        {/* 5. LEGAL NOTICE */}
        <div className="p-6 rounded-3xl border border-black/10 bg-[#f5f5f7] text-xs text-[#6e6e73] space-y-2">
          <div className="flex items-center gap-2 font-bold text-[#1d1d1f]">
            <Info className="h-4 w-4 text-[#b8860b]" />
            <span>Statutory Conveyancing Disclaimer</span>
          </div>
          <p className="leading-relaxed text-[11px]">
            This guide outlines the standard statutory procedure established by Dubai Land Department and RERA for freehold property transactions. Complex transactions involving corporate offshore entities (DIFC, JAFZA, BVI) or Power of Attorney representations require notarized and MoFA-attested documentation.
          </p>
        </div>
      </main>
    </div>
  )
}
