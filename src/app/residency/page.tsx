'use client'

import * as React from 'react'
import Link from 'next/link'
import { SourceBadge } from '@/components/ui/source-badge'
import { 
  ShieldCheck, 
  Building, 
  Briefcase, 
  Laptop, 
  Compass, 
  CheckCircle2, 
  AlertCircle, 
  ArrowRight, 
  FileText, 
  Landmark,
  Scale,
  Users,
  Sparkles
} from 'lucide-react'

type ObjectiveType = 
  | 'property_2m' 
  | 'property_sub2m' 
  | 'business_setup' 
  | 'remote_work' 
  | 'retirement' 
  | 'hybrid'

interface PathwayResult {
  title: string
  validity: string
  authority: string
  authorityUrl: string
  legalBasis: string
  minInvestment: string
  eligibilitySummary: string
  familySponsorship: string
  mandatoryDocuments: string[]
  processSteps: string[]
  officialCaveats: string[]
  sourceNotes?: string[]
}

const PATHWAY_DATA: Record<ObjectiveType, PathwayResult> = {
  property_2m: {
    title: 'Golden Residency — Real Estate Investor',
    validity: '5 Years (UAE Govt Summary) / 10 Years (Federal & Dubai Portals)',
    authority: 'UAE Government / ICP / GDRFA Dubai / DLD Cube',
    authorityUrl: 'https://u.ae/en/information-and-services/visa-and-emirates-id/residence-visas/golden-visa',
    legalBasis: 'Cabinet Resolution No. 65 of 2022 & Executive Regulations',
    minInvestment: 'Property value threshold: AED 2,000,000',
    eligibilitySummary: 'Foreign national property owners holding qualifying property with a total title deed value of at least AED 2,000,000 across one or multiple properties in the UAE. Ownership, financing, property eligibility and residency requirements are subject to the competent authority\'s current rules.',
    familySponsorship: 'Includes spouse, unmarried sons up to age 25, unmarried daughters of any age, and domestic staff without restrictive sponsorship caps.',
    mandatoryDocuments: [
      'Original Passport with valid UAE entry stamp or current visa',
      'Electronic Title Deed issued by Dubai Land Department (or DLD Oqood statement)',
      'Digital passport-standard photograph matching ICP specifications',
      'Valid UAE health insurance policy (DHA compliant)',
      'Police Clearance Certificate (Good Conduct Certificate)'
    ],
    processSteps: [
      '01 • ELIGIBILITY: Verify aggregate property value meets or exceeds the statutory AED 2,000,000 threshold.',
      '02 • OWNERSHIP / VALUE: Generate official electronic Title Deed or DLD Oqood valuation certificate.',
      '03 • DOCUMENTATION: Compile passport, attested certificates, health insurance, and police clearance.',
      '04 • APPLICATION: Submit initial registration through official portal (DLD Cube / GDRFA / ICP).',
      '05 • AUTHORITY REVIEW: Complete DHA medical fitness screening and ICP biometric capture.',
      '06 • ISSUANCE: Receive electronic Golden Residency approval and physical Emirates ID issuance.'
    ],
    officialCaveats: [
      'Duration Note: The official UAE Government summary describes the real estate Golden Visa as 5 years, while current ICP and GDRFA Dubai service portals describe 10-year tracks. Eligibility, qualifying property conditions, financing structure and residence duration should be confirmed directly with the competent authority at the time of application.',
      'Property Retention: Property ownership must be maintained throughout the residency validity. Disposal without acquiring replacement qualifying property invalidates residency.',
      'Freedom of Travel: Golden Visa holders are exempt from the standard 6-month stay rule and may remain abroad without voiding residency status.'
    ]
  },
  property_sub2m: {
    title: 'Property Investor Residency (Sub-AED 2M)',
    validity: '2 Years (Renewable)',
    authority: 'Dubai Land Department (DLD) / GDRFA Dubai',
    authorityUrl: 'https://dubailand.gov.ae/en/eservices/cube-services/',
    legalBasis: 'DLD Investor Services Regulations & Federal Residence Law',
    minInvestment: 'AED 750,000 in completed residential property',
    eligibilitySummary: 'Property owners holding finished residential real estate valued at AED 750,000 or above on the official DLD title deed.',
    familySponsorship: 'Permits sponsorship of spouse and dependent children under standard GDRFA dependency regulations.',
    mandatoryDocuments: [
      'Original Passport and current residency/visit status',
      'Title Deed issued by DLD (Ready completed residential property only)',
      'Dubai Police Good Conduct Certificate',
      'Health Insurance policy approved by Dubai Health Authority (DHA)',
      'Attested Marriage Certificate (for spousal co-ownership or dependent files)'
    ],
    processSteps: [
      '01 • ELIGIBILITY: Confirm completed residential property title value ≥ AED 750,000.',
      '02 • OWNERSHIP / VALUE: Secure official DLD Title Deed with building completion certificate.',
      '03 • DOCUMENTATION: Assemble attested police clearance, passport, and DHA health coverage.',
      '04 • APPLICATION: Submit application file via DLD Cube or licensed Amer Center.',
      '05 • AUTHORITY REVIEW: Undergo statutory medical fitness evaluation and Emirates ID biometrics.',
      '06 • ISSUANCE: Electronic residency permit generation and physical Emirates ID delivery.'
    ],
    officialCaveats: [
      'Off-plan restriction: Property must be 100% completed and handed over with a valid completion certificate.',
      'Physical stay rule: Standard 6-month UAE physical presence requirement applies to maintain status.'
    ]
  },
  business_setup: {
    title: 'Company Partner / Investor Residency',
    validity: '2 Years (Renewable)',
    authority: 'Dubai Economy & Tourism (DET) / Free Zone Authorities / GDRFA',
    authorityUrl: 'https://www.gdrfad.gov.ae/en',
    legalBasis: 'UAE Commercial Companies Law & Federal Immigration Regulations',
    minInvestment: 'Commercial license incorporation & capital shares',
    eligibilitySummary: 'Shareholders or partners holding equity in an incorporated Dubai Mainland LLC or designated Free Zone entity.',
    familySponsorship: 'Permits sponsorship of spouse and children upon securing active corporate establishment card and salary certificate.',
    mandatoryDocuments: [
      'Commercial License & Memorandum of Association (MOA)',
      'Establishment Card / Immigration File Registry',
      'Passport Copy & Emirates ID of applicant',
      'Share Certificate proving minimum equity participation',
      'DHA compliant corporate health insurance'
    ],
    processSteps: [
      '01 • INCORPORATION: Secure trade name approval and commercial license issuance.',
      '02 • IMMIGRATION REGISTRY: Establish corporate establishment card with GDRFA.',
      '03 • ENTRY PERMIT: Issue electronic partner entry permit or change-of-status in-country.',
      '04 • MEDICAL & BIOMETRICS: DHA health screening and ICP biometric enrollment.',
      '05 • ISSUANCE: Residency stamping and corporate bank account activation.'
    ],
    officialCaveats: [
      'Corporate Tax Registration: All UAE commercial entities must register with the Federal Tax Authority (FTA).',
      'Annual License Renewal: Active residency status requires annual commercial license renewal.'
    ]
  },
  remote_work: {
    title: 'Virtual Work Residency (Digital Nomad)',
    validity: '1 Year (Renewable)',
    authority: 'Dubai Economy & Tourism (DET) / GDRFA Dubai',
    authorityUrl: 'https://www.visitdubai.com/en/invest-in-dubai/live-and-work/visas-and-entry/work-remotely-from-dubai',
    legalBasis: 'UAE Remote Work Residence Framework',
    minInvestment: 'Foreign monthly income: USD 3,500 / month',
    eligibilitySummary: 'Employees working remotely for foreign companies or foreign company owners wanting to reside in Dubai without local employment.',
    familySponsorship: 'Permits sponsorship of direct family members subject to income and housing lease verification.',
    mandatoryDocuments: [
      'Proof of employment or business ownership outside the UAE (minimum 1-year contract)',
      'Last 3 months of certified bank statements showing minimum USD 3,500/month inflow',
      'Valid Passport with minimum 6 months validity',
      'Valid international or UAE health insurance coverage'
    ],
    processSteps: [
      '01 • INCOME AUDIT: Verify 3-month foreign payroll inflow exceeds USD 3,500/month.',
      '02 • ONLINE SUBMISSION: Apply through DET / GDRFA virtual work portal.',
      '03 • APPROVAL & ENTRY: Issue electronic entry permit.',
      '04 • MEDICAL & EID: Complete medical fitness test and biometric capture in Dubai.',
      '05 • ISSUANCE: 1-Year residence permit issued with access to local banking and housing.'
    ],
    officialCaveats: [
      'Local Employment: Does not permit working for UAE-based corporate employers without local contract transition.',
      'Renewal Income Test: Annual renewal requires fresh 3-month payroll documentation.'
    ]
  },
  retirement: {
    title: 'Retire in Dubai Residency',
    validity: '5 Years (Renewable)',
    authority: 'Dubai Economy & Tourism (DET) / GDRFA Dubai',
    authorityUrl: 'https://www.retireindubai.com/',
    legalBasis: 'Dubai Retirement Visa Scheme',
    minInvestment: 'Property value: AED 1M OR Savings: AED 1M OR Monthly Income: AED 20k',
    eligibilitySummary: 'Individuals aged 55 and above possessing qualifying real estate equity (≥ AED 1,000,000), a 3-year fixed bank deposit (≥ AED 1,000,000), or active monthly pension/income (≥ AED 20,000).',
    familySponsorship: 'Permits sponsorship of spouse and dependent family members.',
    mandatoryDocuments: [
      'Passport copy with minimum 6 months validity',
      'Title deed (≥ AED 1M) OR certified UAE bank letter (≥ AED 1M deposit) OR 6-month pension statement (≥ AED 20k/mo)',
      'Valid UAE health insurance policy for age 55+',
      'Police Clearance Certificate'
    ],
    processSteps: [
      '01 • CRITERIA SELECTION: Choose between Property (≥1M), Savings (≥1M), or Pension (≥20k/mo).',
      '02 • DOCUMENT CERTIFICATION: Gather official bank letters or DLD title deed certificate.',
      '03 • APPLICATION: Submit file through DET Retire in Dubai service desk.',
      '04 • MEDICAL & BIOMETRICS: Standard VIP medical examination and Emirates ID.',
      '05 • ISSUANCE: 5-Year renewable residence permit issued.'
    ],
    officialCaveats: [
      'Age Constraint: Strict statutory age requirement of 55+ at date of application.',
      'Health Insurance: Specialized senior comprehensive medical policy required.'
    ]
  },
  hybrid: {
    title: 'Integrated Capital & Private Desk Residency',
    validity: '10 Years Golden Visa + Bespoke Corporate Holding',
    authority: 'DLD Cube / DIFC / ADGM / GDRFA Dubai',
    authorityUrl: 'https://u.ae/en/information-and-services/visa-and-emirates-id/residence-visas/golden-visa',
    legalBasis: 'Integrated Wealth Structuring under UAE Federal Law & Free Zone Ordinances',
    minInvestment: 'Trophy Real Estate Portfolio (≥ AED 2M) + Family Holding / SPV',
    eligibilitySummary: 'Ultra-high-net-worth principals deploying combined real estate capital, single family office frameworks, or financial holding SPVs.',
    familySponsorship: 'Comprehensive multi-generational family sponsorship, executive assistants, and domestic retinue without standard dependency caps.',
    mandatoryDocuments: [
      'Freehold Title Deeds issued by Dubai Land Department (Property value threshold ≥ AED 2M)',
      'Free Zone or Mainland Commercial License & Share Certificate',
      'Attested Police Clearance Certificates and Biometric Standard Photos',
      'Corporate and Personal Banking Credentials',
      'DHA compliant comprehensive medical insurance policies'
    ],
    processSteps: [
      '01 • ELIGIBILITY: Dual-track structuring of qualifying real estate (≥ AED 2M) and commercial license.',
      '02 • ACQUISITION & CLOSING: Title deed issuance and corporate registration execution.',
      '03 • DOCUMENTATION: Harmonize immigration, banking, and commercial file registries.',
      '04 • APPLICATION: Coordinated residency filing through DLD Cube / GDRFA channels.',
      '05 • AUTHORITY REVIEW: Medical screenings, biometrics, and immigration file completion.',
      '06 • ISSUANCE: Residency issuance and corporate tax registration with FTA.'
    ],
    officialCaveats: [
      'Travel Flexibility: Real estate Golden Visa pathways eliminate physical presence limits.',
      'Fiscal Separation: Personal real estate yields remain distinct from corporate taxable revenues under FTA regulations.'
    ]
  }
}

export default function ResidencyPage() {
  const [selectedObjective, setSelectedObjective] = React.useState<ObjectiveType>('property_2m')
  const activePathway = PATHWAY_DATA[selectedObjective]

  return (
    <div className="bg-black text-white min-h-screen pb-24">
      {/* 1. APPLE PRO HERO HEADER */}
      <section className="relative pt-20 pb-12 overflow-hidden border-b border-white/10 bg-gradient-to-b from-zinc-950 via-black to-black">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-full max-w-[600px] h-[300px] bg-gold/5 blur-[120px] rounded-full pointer-events-none" />
        
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 backdrop-blur-md">
            <Sparkles className="h-3 w-3 text-gold" />
            <span className="text-[11px] font-mono font-semibold tracking-wider text-gold uppercase">
              Statutory Immigration & Golden Visa Hub
            </span>
          </div>

          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div>
              <h1 className="text-4xl sm:text-6xl font-bold tracking-tight text-white">
                Residency & Citizenship<span className="text-gradient-gold">.</span>
              </h1>
              <p className="text-base sm:text-xl text-zinc-400 mt-2 max-w-3xl font-normal leading-relaxed">
                Golden Residency through qualifying investment. Statutory immigration frameworks, Real Estate Investor Golden Residency criteria, procedural stages, and personal tax neutrality provisions.
              </p>
            </div>
            <SourceBadge status="OFFICIAL SOURCE" sourceName="Cabinet Res No. 65 of 2022" />
          </div>
        </div>
      </section>

      <main className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 space-y-14">
        {/* 2. STATUTORY MACRO BENCHMARKS (BENTO GRID) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="p-6 rounded-3xl bg-zinc-950 border border-white/10 space-y-2 backdrop-blur-md">
            <div className="text-[10px] font-mono text-zinc-400 uppercase tracking-wider">Investor Capital Minimum</div>
            <div className="text-2xl sm:text-3xl font-bold text-white tabular-nums">AED 2,000,000</div>
            <div className="text-xs text-zinc-400">Property value threshold (single or aggregated freehold)</div>
            <div className="pt-2 text-[10px] font-mono text-gold">Source: UAE Government Portal</div>
          </div>

          <div className="p-6 rounded-3xl bg-zinc-950 border border-white/10 space-y-2 backdrop-blur-md">
            <div className="text-[10px] font-mono text-zinc-400 uppercase tracking-wider">Investor Residency Validity</div>
            <div className="text-2xl sm:text-3xl font-bold text-white">5 or 10 <span className="text-sm font-normal text-zinc-400">Years</span></div>
            <div className="text-xs text-zinc-400">5-Yr UAE Govt summary / 10-Yr official service portals</div>
            <div className="pt-2 text-[10px] font-mono text-gold">Source: UAE GOVT / ICP</div>
          </div>

          <div className="p-6 rounded-3xl bg-zinc-950 border border-white/10 space-y-2 backdrop-blur-md">
            <div className="text-[10px] font-mono text-zinc-400 uppercase tracking-wider">UAE Personal Income Tax</div>
            <div className="text-2xl sm:text-3xl font-bold text-gold">0.00%</div>
            <div className="text-xs text-zinc-400">No UAE personal income tax on qualifying individuals (Cabinet Dec 49/2023)</div>
            <div className="pt-2 text-[10px] font-mono text-gold">Source: FTA Official Standard</div>
          </div>

          <div className="p-6 rounded-3xl bg-zinc-950 border border-white/10 space-y-2 backdrop-blur-md">
            <div className="text-[10px] font-mono text-zinc-400 uppercase tracking-wider">Stay Outside Constraint</div>
            <div className="text-2xl sm:text-3xl font-bold text-white">None <span className="text-sm font-normal text-zinc-400">(0 Days)</span></div>
            <div className="text-xs text-zinc-400">Visa remains valid regardless of continuous time abroad</div>
            <div className="pt-2 text-[10px] font-mono text-gold">Source: UAE Golden Visa Statute</div>
          </div>
        </div>

        {/* 3. INTERACTIVE DECISION FLOW */}
        <div className="rounded-3xl border border-white/10 bg-zinc-950/90 shadow-2xl overflow-hidden backdrop-blur-md">
          <div className="p-6 sm:p-10 bg-black/60 border-b border-white/10 space-y-3">
            <div className="flex items-center gap-2 text-gold text-xs font-mono font-bold uppercase tracking-wider">
              <Compass className="h-4 w-4" />
              <span>Interactive Decision Intelligence</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight">
              What are you trying to achieve in Dubai?
            </h2>
            <p className="text-sm text-zinc-400 max-w-3xl">
              Select your primary objective to identify the officially matching residency framework, statutory authority, documentation requirements, and regulatory caveats.
            </p>

            {/* OBJECTIVE SELECTOR PILLS */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 pt-6">
              <button
                type="button"
                onClick={() => setSelectedObjective('property_2m')}
                className={`p-5 rounded-2xl border text-left transition-all flex flex-col justify-between h-full min-h-[6.5rem] cursor-pointer ${
                  selectedObjective === 'property_2m'
                    ? 'border-gold bg-gold/10 shadow-lg shadow-gold/10 ring-1 ring-gold'
                    : 'border-white/10 bg-zinc-900/60 hover:bg-zinc-900 hover:border-white/20'
                }`}
              >
                <div className="flex items-center gap-2.5">
                  <Building className={`h-4 w-4 shrink-0 ${selectedObjective === 'property_2m' ? 'text-gold' : 'text-zinc-400'}`} />
                  <span className="text-xs font-bold text-white">Acquire Real Estate (≥ AED 2M)</span>
                </div>
                <p className="text-xs text-zinc-400 mt-2 leading-relaxed">
                  Real Estate Golden Residency (5 or 10 Years). Ready or qualifying off-plan properties.
                </p>
              </button>

              <button
                type="button"
                onClick={() => setSelectedObjective('property_sub2m')}
                className={`p-5 rounded-2xl border text-left transition-all flex flex-col justify-between h-full min-h-[6.5rem] cursor-pointer ${
                  selectedObjective === 'property_sub2m'
                    ? 'border-gold bg-gold/10 shadow-lg shadow-gold/10 ring-1 ring-gold'
                    : 'border-white/10 bg-zinc-900/60 hover:bg-zinc-900 hover:border-white/20'
                }`}
              >
                <div className="flex items-center gap-2.5">
                  <Building className={`h-4 w-4 shrink-0 ${selectedObjective === 'property_sub2m' ? 'text-gold' : 'text-zinc-400'}`} />
                  <span className="text-xs font-bold text-white">Property Purchase (AED 750k–2M)</span>
                </div>
                <p className="text-xs text-zinc-400 mt-2 leading-relaxed">
                  2-Year Real Estate Investor Residency for completed residential units.
                </p>
              </button>

              <button
                type="button"
                onClick={() => setSelectedObjective('business_setup')}
                className={`p-5 rounded-2xl border text-left transition-all flex flex-col justify-between h-full min-h-[6.5rem] cursor-pointer ${
                  selectedObjective === 'business_setup'
                    ? 'border-gold bg-gold/10 shadow-lg shadow-gold/10 ring-1 ring-gold'
                    : 'border-white/10 bg-zinc-900/60 hover:bg-zinc-900 hover:border-white/20'
                }`}
              >
                <div className="flex items-center gap-2.5">
                  <Briefcase className={`h-4 w-4 shrink-0 ${selectedObjective === 'business_setup' ? 'text-gold' : 'text-zinc-400'}`} />
                  <span className="text-xs font-bold text-white">Establish Business / Company</span>
                </div>
                <p className="text-xs text-zinc-400 mt-2 leading-relaxed">
                  2-Year Partner/Investor Visa via Mainland LLC or Free Zone entity.
                </p>
              </button>

              <button
                type="button"
                onClick={() => setSelectedObjective('remote_work')}
                className={`p-5 rounded-2xl border text-left transition-all flex flex-col justify-between h-full min-h-[6.5rem] cursor-pointer ${
                  selectedObjective === 'remote_work'
                    ? 'border-gold bg-gold/10 shadow-lg shadow-gold/10 ring-1 ring-gold'
                    : 'border-white/10 bg-zinc-900/60 hover:bg-zinc-900 hover:border-white/20'
                }`}
              >
                <div className="flex items-center gap-2.5">
                  <Laptop className={`h-4 w-4 shrink-0 ${selectedObjective === 'remote_work' ? 'text-gold' : 'text-zinc-400'}`} />
                  <span className="text-xs font-bold text-white">Live in Dubai & Work Remotely</span>
                </div>
                <p className="text-xs text-zinc-400 mt-2 leading-relaxed">
                  1-Year Virtual Work Visa based on foreign income (≥ USD 3,500/mo).
                </p>
              </button>

              <button
                type="button"
                onClick={() => setSelectedObjective('retirement')}
                className={`p-5 rounded-2xl border text-left transition-all flex flex-col justify-between h-full min-h-[6.5rem] cursor-pointer ${
                  selectedObjective === 'retirement'
                    ? 'border-gold bg-gold/10 shadow-lg shadow-gold/10 ring-1 ring-gold'
                    : 'border-white/10 bg-zinc-900/60 hover:bg-zinc-900 hover:border-white/20'
                }`}
              >
                <div className="flex items-center gap-2.5">
                  <ShieldCheck className={`h-4 w-4 shrink-0 ${selectedObjective === 'retirement' ? 'text-gold' : 'text-zinc-400'}`} />
                  <span className="text-xs font-bold text-white">Retire in Dubai (Age 55+)</span>
                </div>
                <p className="text-xs text-zinc-400 mt-2 leading-relaxed">
                  5-Year Retirement Visa via property (≥ AED 1M) or bank deposit.
                </p>
              </button>

              <button
                type="button"
                onClick={() => setSelectedObjective('hybrid')}
                className={`p-5 rounded-2xl border text-left transition-all flex flex-col justify-between h-full min-h-[6.5rem] cursor-pointer ${
                  selectedObjective === 'hybrid'
                    ? 'border-gold bg-gold/10 shadow-lg shadow-gold/10 ring-1 ring-gold'
                    : 'border-white/10 bg-zinc-900/60 hover:bg-zinc-900 hover:border-white/20'
                }`}
              >
                <div className="flex items-center gap-2.5">
                  <Landmark className={`h-4 w-4 shrink-0 ${selectedObjective === 'hybrid' ? 'text-gold' : 'text-zinc-400'}`} />
                  <span className="text-xs font-bold text-white">Capital + Commercial Desk</span>
                </div>
                <p className="text-xs text-zinc-400 mt-2 leading-relaxed">
                  Combined Golden Visa property asset + corporate holding & tax structuring.
                </p>
              </button>
            </div>
          </div>

          {/* ACTIVE PATHWAY DETAILED INTELLIGENCE PANEL */}
          <div className="p-6 sm:p-10 space-y-10">
            <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 pb-8 border-b border-white/10">
              <div>
                <div className="flex items-center gap-2 text-[11px] font-mono text-gold font-bold uppercase tracking-wider">
                  <span className="inline-block h-2 w-2 rounded-full bg-gold animate-pulse" />
                  <span>Potentially Relevant Official Pathway</span>
                </div>
                <h3 className="text-3xl sm:text-4xl font-black text-white tracking-tight mt-1">
                  {activePathway.title}
                </h3>
              </div>
              <div className="flex flex-wrap items-center gap-3">
                <div className="px-4 py-2 bg-zinc-900 border border-white/10 rounded-full text-xs">
                  <span className="text-zinc-400">Statutory Term: </span>
                  <strong className="text-white">{activePathway.validity}</strong>
                </div>
                <a
                  href={activePathway.authorityUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 bg-white text-black hover:bg-zinc-200 rounded-full text-xs font-bold transition-all shadow-lg"
                >
                  <span>Official Authority: {activePathway.authority}</span>
                  <ArrowRight className="h-3.5 w-3.5 text-black" />
                </a>
              </div>
            </div>

            {/* DETAILS GRID */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              {/* LEFT: SUMMARY & FAMILY */}
              <div className="space-y-8">
                <div className="space-y-2">
                  <div className="text-[11px] font-mono uppercase font-bold text-gold">
                    Statutory Legal Basis & Threshold
                  </div>
                  <div className="p-6 rounded-2xl bg-black border border-white/10 space-y-2">
                    <div className="text-sm font-bold text-white">{activePathway.legalBasis}</div>
                    <div className="text-xs sm:text-sm text-zinc-400 leading-relaxed">
                      {activePathway.eligibilitySummary}
                    </div>
                    <div className="text-xs font-mono text-gold pt-2 font-semibold">
                      Minimum Statutory Investment: {activePathway.minInvestment}
                    </div>
                  </div>
                </div>

                <div className="space-y-2">
                  <div className="text-[11px] font-mono uppercase font-bold text-gold flex items-center gap-2">
                    <Users className="h-4 w-4" />
                    <span>Family & Dependent Sponsorship</span>
                  </div>
                  <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed p-6 rounded-2xl bg-black border border-white/10">
                    {activePathway.familySponsorship}
                  </p>
                </div>

                {/* MANDATORY DOCUMENTS */}
                <div className="space-y-3">
                  <div className="text-[11px] font-mono uppercase font-bold text-gold flex items-center gap-2">
                    <FileText className="h-4 w-4" />
                    <span>Mandatory Verification Documents</span>
                  </div>
                  <ul className="space-y-2 text-xs sm:text-sm text-zinc-300">
                    {activePathway.mandatoryDocuments.map((doc, idx) => (
                      <li key={idx} className="flex items-start gap-2.5 p-3 rounded-xl bg-zinc-900/60 border border-white/5">
                        <CheckCircle2 className="h-4 w-4 text-gold shrink-0 mt-0.5" />
                        <span>{doc}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* RIGHT: PROCESS & CAVEATS */}
              <div className="space-y-8">
                <div className="space-y-3">
                  <div className="text-[11px] font-mono uppercase font-bold text-gold">
                    Official End-to-End Procedure
                  </div>
                  <div className="relative pl-6 space-y-4 before:absolute before:left-2.5 before:top-2 before:bottom-2 before:w-0.5 before:bg-white/10">
                    {activePathway.processSteps.map((step, idx) => (
                      <div key={idx} className="relative space-y-1">
                        <div className="absolute -left-6 top-0.5 h-5 w-5 rounded-full bg-black border border-gold flex items-center justify-center text-[9px] font-mono font-bold text-gold">
                          {idx + 1}
                        </div>
                        <div className="text-xs sm:text-sm text-zinc-300 leading-relaxed pl-3">
                          {step}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="space-y-3">
                  <div className="text-[11px] font-mono uppercase font-bold text-gold flex items-center gap-2">
                    <AlertCircle className="h-4 w-4 text-amber-400" />
                    <span>Statutory Caveats & Legal Limitations</span>
                  </div>
                  <ul className="space-y-2 text-xs text-zinc-400">
                    {activePathway.officialCaveats.map((cav, idx) => (
                      <li key={idx} className="flex items-start gap-2.5 p-4 rounded-xl bg-amber-500/5 border border-amber-500/20 text-zinc-300 leading-relaxed">
                        <span className="h-1.5 w-1.5 rounded-full bg-amber-400 shrink-0 mt-2" />
                        <span>{cav}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {/* INTAKE CTA */}
            <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div className="text-sm text-zinc-400">
                Need bespoke verification for a specific property portfolio or corporate holding?
              </div>
              <Link
                href="/private-client"
                className="inline-flex items-center justify-center gap-2 px-8 py-3.5 bg-white text-black hover:bg-zinc-200 rounded-full text-xs font-bold uppercase tracking-wider transition-all shadow-xl"
              >
                <span>Request Private Client Residency Review</span>
                <ArrowRight className="h-4 w-4 text-black" />
              </Link>
            </div>
          </div>
        </div>

        {/* 4. SIX CORE REGULATORY PILLARS */}
        <div className="space-y-8">
          <div className="border-b border-white/10 pb-4">
            <h2 className="text-3xl font-extrabold text-white tracking-tight">
              Statutory Frameworks & Official Rules
            </h2>
            <p className="text-sm text-zinc-400 mt-1">
              Verified legal provisions governing real estate acquisitions and fiscal residency in Dubai.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* PILLAR 1: REAL ESTATE INVESTOR RESIDENCY */}
            <div className="p-6 sm:p-8 rounded-3xl border border-white/10 bg-zinc-950/80 space-y-4 flex flex-col justify-between backdrop-blur-md">
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-mono uppercase font-bold text-gold">
                    01 • INVESTOR RESIDENCY
                  </span>
                  <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-gold/10 text-gold border border-gold/20">
                    CABINET RES 65/2022
                  </span>
                </div>
                <h3 className="text-2xl font-bold text-white">
                  Golden Residency — Real Estate Investor
                </h3>
                <div className="space-y-2 text-xs sm:text-sm text-zinc-400 leading-relaxed">
                  <p>
                    <strong className="text-white">Summary:</strong> Long-term renewable residence permit granted to foreign property investors acquiring property with an aggregated value of AED 2,000,000 or greater. Ownership, financing, property eligibility and residency requirements are subject to the competent authority&apos;s current rules.
                  </p>
                  <p>
                    <strong className="text-white">Source Differentiation:</strong> The official UAE Government summary describes real estate Golden Visas as 5 years, while federal ICP and Dubai GDRFA service portals describe 10-year tracks. Eligibility, qualifying property conditions, financing structure and residence duration should be confirmed with the competent authority at the time of application.
                  </p>
                  <p>
                    <strong className="text-white">Current Rule:</strong> Properties can be completed or off-plan from approved developers. Eligibility, qualifying property conditions and financing structures are subject to competent authority requirements.
                  </p>
                </div>
              </div>
              <div className="pt-4 border-t border-white/10 flex items-center justify-between text-[11px] text-zinc-500 font-mono">
                <span>Sources: u.ae · icp.gov.ae · gdrfad.gov.ae</span>
                <span>Verified: 2026-09-01</span>
              </div>
            </div>

            {/* PILLAR 2: FREEHOLD PROPERTY OWNERSHIP */}
            <div className="p-6 sm:p-8 rounded-3xl border border-white/10 bg-zinc-950/80 space-y-4 flex flex-col justify-between backdrop-blur-md">
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-mono uppercase font-bold text-gold">
                    02 • PROPERTY OWNERSHIP
                  </span>
                  <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-gold/10 text-gold border border-gold/20">
                    REGULATION 3/2006
                  </span>
                </div>
                <h3 className="text-2xl font-bold text-white">
                  Designated Freehold Areas Foreign Ownership
                </h3>
                <div className="space-y-2 text-xs sm:text-sm text-zinc-400 leading-relaxed">
                  <p>
                    <strong className="text-white">Summary:</strong> Non-UAE and non-GCC nationals are entitled to absolute freehold ownership rights (including perpetual title deed registration) within designated areas determined under Regulation No. 3 of 2006.
                  </p>
                  <p>
                    <strong className="text-white">Who It Applies To:</strong> All foreign individuals, offshore entities, and institutional investors purchasing within designated zones.
                  </p>
                  <p>
                    <strong className="text-white">Current Rule:</strong> Freehold rights include the full legal right to sell, lease, mortgage, and bequeath the real property asset without local sponsorship requirements.
                  </p>
                </div>
              </div>
              <div className="pt-4 border-t border-white/10 flex items-center justify-between text-[11px] text-zinc-500 font-mono">
                <span>Source: Dubai Land Department (DLD)</span>
                <span>Verified: 2026-09-01</span>
              </div>
            </div>

            {/* PILLAR 3: PERSONAL INCOME TAX */}
            <div className="p-6 sm:p-8 rounded-3xl border border-white/10 bg-zinc-950/80 space-y-4 flex flex-col justify-between backdrop-blur-md">
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-mono uppercase font-bold text-gold">
                    03 • PERSONAL TAX
                  </span>
                  <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-gold/10 text-gold border border-gold/20">
                    FTA STATUTORY
                  </span>
                </div>
                <h3 className="text-2xl font-bold text-white">
                  No UAE Personal Income Tax
                </h3>
                <div className="space-y-2 text-xs sm:text-sm text-zinc-400 leading-relaxed">
                  <p>
                    <strong className="text-white">Summary:</strong> The UAE does not levy personal income tax on individuals. For natural persons, qualifying Real Estate Investment Income is outside Business Activity for UAE Corporate Tax purposes under the applicable rules.
                  </p>
                  <p>
                    <strong className="text-white">Who It Applies To:</strong> Natural persons receiving individual real estate rental income, capital gains, or personal investment returns.
                  </p>
                  <p>
                    <strong className="text-white">Contextual Note:</strong> Business activities, licensed activities and corporate structures may be subject to different tax treatment under Federal Decree-Law No. 47 of 2022. Tax treatment depends on the investor&apos;s circumstances, ownership structure and applicable UAE rules.
                  </p>
                </div>
              </div>
              <div className="pt-4 border-t border-white/10 flex items-center justify-between text-[11px] text-zinc-500 font-mono">
                <span>Source: UAE Federal Tax Authority (FTA)</span>
                <span>Verified: 2026-09-01</span>
              </div>
            </div>

            {/* PILLAR 4: VALUE ADDED TAX (VAT 5%) */}
            <div className="p-6 sm:p-8 rounded-3xl border border-white/10 bg-zinc-950/80 space-y-4 flex flex-col justify-between backdrop-blur-md">
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-mono uppercase font-bold text-gold">
                    04 • VALUE ADDED TAX
                  </span>
                  <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-gold/10 text-gold border border-gold/20">
                    DECREE-LAW 8/2017
                  </span>
                </div>
                <h3 className="text-2xl font-bold text-white">
                  Residential Exemption & Commercial 5% VAT
                </h3>
                <div className="space-y-2 text-xs sm:text-sm text-zinc-400 leading-relaxed">
                  <p>
                    <strong className="text-white">Summary:</strong> Standard UAE VAT is 5%. First-time supply of residential buildings within 3 years of completion is zero-rated (0%). Subsequent residential sales and leases are exempt from VAT.
                  </p>
                  <p>
                    <strong className="text-white">Who It Applies To:</strong> Buyers, sellers, landlords, and commercial real estate operators.
                  </p>
                  <p>
                    <strong className="text-white">Current Rule:</strong> Commercial real estate sales and leases are subject to 5% VAT. Brokerage and trustee services attract standard 5% VAT.
                  </p>
                </div>
              </div>
              <div className="pt-4 border-t border-white/10 flex items-center justify-between text-[11px] text-zinc-500 font-mono">
                <span>Source: Federal Decree-Law No. 8 of 2017</span>
                <span>Verified: 2026-09-01</span>
              </div>
            </div>

            {/* PILLAR 5: CORPORATE TAX (9%) */}
            <div className="p-6 sm:p-8 rounded-3xl border border-white/10 bg-zinc-950/80 space-y-4 flex flex-col justify-between backdrop-blur-md">
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-mono uppercase font-bold text-gold">
                    05 • CORPORATE TAX
                  </span>
                  <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-gold/10 text-gold border border-gold/20">
                    DECREE-LAW 47/2022
                  </span>
                </div>
                <h3 className="text-2xl font-bold text-white">
                  Corporate Tax on Business Entities
                </h3>
                <div className="space-y-2 text-xs sm:text-sm text-zinc-400 leading-relaxed">
                  <p>
                    <strong className="text-white">Summary:</strong> UAE Federal Corporate Tax applies at 9% on taxable business profits exceeding AED 375,000 (0% on profits up to AED 375,000).
                  </p>
                  <p>
                    <strong className="text-white">Who It Applies To:</strong> Incorporated legal entities, commercial real estate businesses, and holding companies.
                  </p>
                  <p>
                    <strong className="text-white">Current Rule:</strong> Direct personal real estate investments held by individual natural persons in a personal capacity are outside Business Activity under Cabinet Decision No. 49 of 2023. Corporate structures, commercial businesses, and licensed entities remain subject to corporate tax rules.
                  </p>
                </div>
              </div>
              <div className="pt-4 border-t border-white/10 flex items-center justify-between text-[11px] text-zinc-500 font-mono">
                <span>Source: Federal Decree-Law No. 47 of 2022</span>
                <span>Verified: 2026-09-01</span>
              </div>
            </div>

            {/* PILLAR 6: STATUTORY PROPERTY FEES */}
            <div className="p-6 sm:p-8 rounded-3xl border border-white/10 bg-zinc-950/80 space-y-4 flex flex-col justify-between backdrop-blur-md">
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-mono uppercase font-bold text-gold">
                    06 • STATUTORY FEES
                  </span>
                  <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-gold/10 text-gold border border-gold/20">
                    DLD TARIFF REGISTRY
                  </span>
                </div>
                <h3 className="text-2xl font-bold text-white">
                  DLD Conveyance & Administrative Tariffs
                </h3>
                <div className="space-y-2 text-xs sm:text-sm text-zinc-400 leading-relaxed">
                  <p>
                    <strong className="text-white">Summary:</strong> DLD Property Sale Registration transfer fee is 4% (2% buyer + 2% seller per official DLD portal; contractually allocated in Form F).
                  </p>
                  <p>
                    <strong className="text-white">Itemized Tariffs:</strong> AED 250 title deed certificate issuance, AED 250 villa/apt map fee (or AED 225 Dubai Municipality map / AED 100 land outside DM), AED 10 knowledge fee, AED 10 innovation fee.
                  </p>
                  <p>
                    <strong className="text-white">Registration Trustee:</strong> AED 4,000 + 5% VAT (properties ≥ AED 500,000) or AED 2,000 + 5% VAT (properties &lt; AED 500,000).
                  </p>
                </div>
              </div>
              <div className="pt-4 border-t border-white/10 flex items-center justify-between text-[11px] text-zinc-500 font-mono">
                <span>Source: DLD Property Sale Registration Service</span>
                <span>Verified: 2026-09-01</span>
              </div>
            </div>
          </div>
        </div>

        {/* 5. LEGAL DISCLAIMER DRAWER */}
        <div className="p-6 sm:p-8 rounded-3xl border border-white/10 bg-zinc-950/80 text-xs text-zinc-400 space-y-2 backdrop-blur-md">
          <div className="flex items-center gap-2 font-bold text-white text-sm">
            <Scale className="h-4 w-4 text-gold" />
            <span>Statutory Legal Notice & Provenance Attribution</span>
          </div>
          <p className="leading-relaxed">
            The regulatory intelligence displayed on this page is compiled strictly from published UAE federal laws, cabinet resolutions, and Dubai Land Department official tariffs. This information does not constitute personalized legal, tax, or corporate structuring advice. Institutional principals are advised to consult qualified legal counsel for cross-border tax treaty planning.
          </p>
        </div>
      </main>
    </div>
  )
}
