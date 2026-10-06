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
    description: 'Select verified property asset from official developer filings or certified secondary listings. Confirm property title deed number, Makani geographic locator, and RERA permit verification.',
    documents: ['Property Dossier', 'DLD Title Deed Copy / Oqood Certificate', 'RERA Permit Verification'],
    statutory_fees: 'Zero viewing or directory fees',
    responsibilities: 'Buyer coordinates viewing and confirms developer escrow account validity.',
    statutory_source: 'Dubai Law No. 85 of 2006 Regulating the Real Estate Brokers Register.'
  },
  {
    step: '05',
    title: 'Formal Offer & Terms Alignment',
    subtitle: 'Price, Inclusions & Conveyance Timelines',
    classification: 'GENERAL_GUIDANCE',
    classificationLabel: 'GENERAL GUIDANCE',
    description: 'Negotiate price, payment schedule, movable inventory inclusions, tenancy notice periods (if tenanted), and target transfer date with the seller through licensed RERA advisory brokers.',
    documents: ['Letter of Intent (LOI) / Formal Offer Memo', 'Tenancy Contract & Ejari (if tenanted)'],
    statutory_fees: 'Zero statutory submission fees',
    responsibilities: 'Parties agree on commercial covenants before signing legally binding contracts.',
    statutory_source: 'Law No. 26 of 2007 (as amended by Law No. 33 of 2008) on Landlord and Tenant Relationships.'
  },
  {
    step: '06',
    title: 'Contract Execution (RERA Unified Form F)',
    subtitle: 'Binding Memorandum of Understanding (MOU)',
    classification: 'OFFICIAL_REQUIREMENT',
    classificationLabel: 'OFFICIAL REQUIREMENT',
    description: 'Buyer and Seller sign the official RERA Unified Form F (Contract of Sale) generated via the Dubai REST portal. The contract establishes all terms, penalties, deposit provisions, and closing milestones.',
    documents: ['RERA Unified Form F', 'Passport & Emirates ID Copies', 'Title Deed Copy'],
    statutory_fees: 'Zero form generation fee (RERA mandatory unified contract)',
    responsibilities: 'Both parties sign electronically via Dubai REST app or in counter-signatory presence.',
    statutory_source: 'RERA Circulars on Unified Real Estate Contracts (Forms A, B, and F).'
  },
  {
    step: '07',
    title: 'Deposit Lodgement into Escrow',
    subtitle: '10% Security Deposit Manager Cheque',
    classification: 'OFFICIAL_REQUIREMENT',
    classificationLabel: 'OFFICIAL REQUIREMENT',
    description: 'Buyer deposits a 10% security deposit (standard manager cheque payable to the seller or held in custody by a licensed trustee/broker escrow until title conveyance).',
    documents: ['Manager Cheque for 10% Deposit', 'Signed Deposit Custody Acknowledgement'],
    statutory_fees: 'Zero statutory escrow fee (standard conveyance practice)',
    responsibilities: 'Escrow custodian holds cheque and issues written acknowledgment.',
    statutory_source: 'Dubai Law No. 85 of 2006 Regulating the Real Estate Brokers Register.'
  },
  {
    step: '08',
    title: 'Mortgage Pre-Approval & Property Valuation (If Financed)',
    subtitle: 'Banking Sanction & DLD Property Appraisal',
    classification: 'VERIFY_WITH_PROFESSIONAL',
    classificationLabel: 'VERIFY WITH PROFESSIONAL',
    description: 'For financed purchases, lender conducts official property appraisal and issues final offer letter. Mortgage contract is registered with the Dubai Land Department upon conveyance.',
    documents: ['Bank Final Offer Letter', 'Official Property Valuation Report', 'Mortgage Pre-Approval'],
    statutory_fees: 'Mortgage Registration: 0.25% of loan value + AED 290 admin fee; Bank valuation: ~AED 2,500 – 3,500',
    responsibilities: 'Bank valuator inspects property; lender coordinates mortgage discharge/issuance.',
    statutory_source: 'CBUAE Mortgage Lending Regulations & DLD Mortgage Tariffs.'
  },
  {
    step: '09',
    title: 'Developer NOC Application (No Objection Certificate)',
    subtitle: 'Master Developer Resale Clearance',
    classification: 'OFFICIAL_REQUIREMENT',
    classificationLabel: 'OFFICIAL REQUIREMENT',
    description: 'Seller applies to master developer (Emaar, Nakheel, Meraas, Damac, Sobha) for a No Objection Certificate verifying zero outstanding service charges or statutory violations.',
    documents: ['Signed Form F', 'Title Deed Copy', 'Clearance Receipts for Service Charges', 'Passport Copies'],
    statutory_fees: 'Developer NOC Fee: AED 500 – AED 5,000 (+5% VAT) depending on developer schedule',
    responsibilities: 'Seller applies and settles any outstanding service charges with the developer.',
    statutory_source: 'Dubai Law No. 6 of 2019 Concerning Ownership of Jointly Owned Real Property.'
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
        return 'bg-emerald-950/40 text-emerald-400 border-emerald-500/30'
      case 'GENERAL_GUIDANCE':
        return 'bg-sky-950/40 text-sky-300 border-sky-500/30'
      case 'PLATFORM_WORKFLOW':
        return 'bg-[#181820] text-[#c9a962] border-[#c9a962]/30'
      case 'VERIFY_WITH_PROFESSIONAL':
        return 'bg-purple-950/40 text-purple-300 border-purple-500/30'
      default:
        return 'bg-white/5 text-[#a1a1aa] border-white/10'
    }
  }

  return (
    <div className="bg-[#08080a] text-[#f5f5f7] min-h-screen pb-32">
      {/* 1. EDITORIAL PAGE INTRO */}
      <PageIntro
        eyebrow="Statutory Conveyancing &amp; Acquisition Roadmap"
        badge={<SourceBadge status="UAE GOVERNMENT" sourceName="DLD &amp; RERA Standard Framework" />}
        title="Buying Guide."
        description="12-Stage acquisition &amp; conveyancing roadmap. From initial objective definition to DLD registration trustee title deed transfer and Golden Visa processing."
      />

      <main className="w-full max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-16 pt-10 space-y-14">
        {/* 2. CLASSIFICATION LEGEND */}
        <div className="p-4 sm:p-5 rounded-xs border border-white/10 bg-[#111116] flex flex-wrap items-center gap-3 text-xs">
          <span className="font-semibold text-[#f5f5f7] uppercase tracking-widest font-mono text-[10px]">Classification Standard:</span>
          <div className="flex items-center gap-1.5 px-3 py-1 rounded-xs border text-[11px] font-mono bg-emerald-950/40 text-emerald-400 border-emerald-500/30">
            <span>[OFFICIAL REQUIREMENT]</span>
          </div>
          <div className="flex items-center gap-1.5 px-3 py-1 rounded-xs border text-[11px] font-mono bg-sky-950/40 text-sky-300 border-sky-500/30">
            <span>[GENERAL GUIDANCE]</span>
          </div>
          <div className="flex items-center gap-1.5 px-3 py-1 rounded-xs border text-[11px] font-mono bg-[#181820] text-[#c9a962] border-[#c9a962]/30">
            <span>[PLATFORM WORKFLOW]</span>
          </div>
          <div className="flex items-center gap-1.5 px-3 py-1 rounded-xs border text-[11px] font-mono bg-purple-950/40 text-purple-300 border-purple-500/30">
            <span>[VERIFY WITH PROFESSIONAL]</span>
          </div>
        </div>

        {/* 2B. STATUTORY CONVEYANCING CADRANS */}
        <div className="space-y-6">
          <div className="flex items-center justify-between border-b border-white/10 pb-4">
            <span className="text-[11px] font-mono font-semibold uppercase tracking-[0.2em] text-[#c9a962]">
              STATUTORY CONVEYANCING CADRANS
            </span>
            <span className="text-xs font-mono text-[#71717a]">Executive Council Res. No. 30 of 2013</span>
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
                className="rounded-sm border border-white/10 bg-[#111116] overflow-hidden transition-all hover:border-white/25"
              >
                <button
                  type="button"
                  onClick={() => setExpandedStep(isExpanded ? null : stage.step)}
                  className="w-full p-5 sm:p-6 text-left flex items-start sm:items-center justify-between gap-4 cursor-pointer"
                >
                  <div className="flex items-start sm:items-center gap-5">
                    <span className="text-xl sm:text-2xl font-light font-mono text-[#c9a962] shrink-0">
                      {stage.step}
                    </span>
                    <div className="space-y-1">
                      <div className="flex flex-wrap items-center gap-2.5">
                        <span className="text-base sm:text-lg font-light text-[#f5f5f7] tracking-tight">
                          {stage.title}
                        </span>
                        <span className={`px-2 py-0.5 rounded-xs text-[9px] font-mono font-semibold border ${getBadgeStyle(stage.classification)}`}>
                          [{stage.classificationLabel}]
                        </span>
                      </div>
                      <p className="text-xs text-[#8e8e93] font-mono">{stage.subtitle}</p>
                    </div>
                  </div>

                  <div className="p-2 rounded-xs bg-[#181820] text-[#f5f5f7] shrink-0 border border-white/10">
                    {isExpanded ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
                  </div>
                </button>

                {isExpanded && (
                  <div className="px-5 sm:px-6 pb-6 pt-3 border-t border-white/10 bg-[#0d0d11] space-y-5 animate-in fade-in duration-150">
                    <p className="text-xs sm:text-sm text-[#a1a1aa] leading-relaxed max-w-4xl font-light">
                      {stage.description}
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs">
                      <div className="p-4 rounded-xs bg-[#111116] border border-white/10 flex flex-col justify-between space-y-2">
                        <span className="text-[10px] font-mono uppercase font-semibold text-[#c9a962] tracking-widest">
                          Required Documentation
                        </span>
                        <ul className="space-y-1.5 text-[#8e8e93] pt-2 border-t border-white/10 font-light">
                          {stage.documents.map((doc, idx) => (
                            <li key={idx} className="flex items-start gap-2">
                              <CheckCircle2 className="h-3.5 w-3.5 text-[#c9a962] shrink-0 mt-0.5" />
                              <span className="text-[#f5f5f7]">{doc}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="p-4 rounded-xs bg-[#111116] border border-white/10 flex flex-col justify-between space-y-2">
                        <span className="text-[10px] font-mono uppercase font-semibold text-[#c9a962] tracking-widest">
                          Statutory &amp; Professional Fees
                        </span>
                        <p className="text-[#f5f5f7] leading-relaxed pt-2 border-t border-white/10 font-mono text-xs">
                          {stage.statutory_fees}
                        </p>
                      </div>

                      <div className="p-4 rounded-xs bg-[#111116] border border-white/10 flex flex-col justify-between space-y-2">
                        <span className="text-[10px] font-mono uppercase font-semibold text-[#c9a962] tracking-widest">
                          Primary Responsibility
                        </span>
                        <p className="text-[#a1a1aa] leading-relaxed pt-2 border-t border-white/10 font-light">
                          {stage.responsibilities}
                        </p>
                      </div>
                    </div>

                    <div className="pt-3 border-t border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-[10px] font-mono text-[#71717a]">
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
        <div className="p-6 sm:p-10 rounded-sm border border-white/15 bg-[#111116] flex flex-col sm:flex-row sm:items-center justify-between gap-6 shadow-[0_12px_40px_rgba(0,0,0,0.8)]">
          <div className="space-y-1.5 max-w-xl">
            <h3 className="text-xl font-light text-[#f5f5f7] tracking-tight">
              Ready to initiate a transaction or verify portfolio due diligence?
            </h3>
            <p className="text-xs text-[#8e8e93] leading-relaxed font-light">
              Cristian Văduva Private Client Advisory coordinates direct DLD conveyancing, trustee settlements, and investor residency files.
            </p>
          </div>
          <Link
            href="/private-client"
            className="inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-[#c9a962] text-[#08080a] hover:bg-[#dbbe7a] rounded-xs text-xs font-mono uppercase tracking-[0.14em] font-semibold transition-all shrink-0 cursor-pointer shadow-[0_0_15px_rgba(201,169,98,0.2)]"
          >
            <span>Access Private Client Desk</span>
            <ArrowRight className="h-3.5 w-3.5" />
          </Link>
        </div>

        {/* 5. LEGAL NOTICE */}
        <div className="p-6 rounded-sm border border-white/10 bg-[#111116] text-xs text-[#8e8e93] space-y-2 font-light">
          <div className="flex items-center gap-2 font-medium text-[#f5f5f7]">
            <Info className="h-4 w-4 text-[#c9a962]" />
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
