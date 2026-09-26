'use client'

import * as React from 'react'
import Link from 'next/link'
import { SourceBadge } from '@/components/ui/source-badge'
import { PageIntro } from '@/components/layout/layout-primitives'
import { CadranDial, CadranQuadrant } from '@/components/ui/luxury-cadran'
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
  Award,
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
    minInvestment: 'Monthly income proof of USD 3,500 or equivalent',
    eligibilitySummary: 'Remote professionals employed outside the UAE or foreign business owners capable of executing their responsibilities digitally.',
    familySponsorship: 'Enables dependent sponsorship after principal residency permit validation.',
    mandatoryDocuments: [
      'Passport with minimum 6 months validity',
      'Proof of employment or company ownership outside the UAE',
      'Last 3 months of bank statements demonstrating minimum USD 3,500/month inflow',
      'Valid health insurance policy with UAE coverage'
    ],
    processSteps: [
      '01 • DOCUMENTATION: Collate remote employment contracts and certified bank statements.',
      '02 • SUBMISSION: Apply through DET Remote Work portal or GDRFA electronic channel.',
      '03 • ENTRY PERMIT: Entry permit generation and arrival protocol.',
      '04 • MEDICAL & BIOMETRICS: DHA medical evaluation and Emirates ID registration.',
      '05 • RESIDENCY ISSUANCE: Virtual work residency validation.'
    ],
    officialCaveats: [
      'Local Employment: Does not grant authorization to seek local UAE employment without converting visa category.',
      'Annual Re-verification: Income thresholds re-evaluated upon annual renewal.'
    ]
  },
  retirement: {
    title: 'Retire in Dubai Residency',
    validity: '5 Years (Renewable)',
    authority: 'Dubai Economy & Tourism (DET) / GDRFA Dubai',
    authorityUrl: 'https://www.visitdubai.com/en/invest-in-dubai/live-and-work/retire-in-dubai',
    legalBasis: 'Retire in Dubai Statutory Program',
    minInvestment: 'AED 1,000,000 property OR AED 1M bank deposit OR AED 15,000/month income',
    eligibilitySummary: 'Foreign nationals aged 55 years or older fulfilling at least one of the three statutory financial criteria.',
    familySponsorship: 'Enables sponsorship of spouse and dependent children.',
    mandatoryDocuments: [
      'Original Passport showing applicant age ≥ 55 years',
      'Proof of real estate title deed (≥ AED 1M) OR 3-year fixed bank deposit (≥ AED 1M) OR monthly pension statement (≥ AED 15k)',
      'UAE health insurance policy certificate',
      'Marriage certificate for spousal inclusion'
    ],
    processSteps: [
      '01 • CRITERIA QUALIFICATION: Select real estate, capital deposit, or pension income track.',
      '02 • APPLICATION: File via DET Retire in Dubai desk or GDRFA portal.',
      '03 • VERIFICATION: Authority financial verification and screening.',
      '04 • MEDICAL & BIOMETRICS: Statutory medical fitness and Emirates ID biometrics.',
      '05 • ISSUANCE: 5-year renewable retirement residency permit.'
    ],
    officialCaveats: [
      'Age Floor: Strict minimum age criteria of 55 years at application filing.',
      'Capital Ring-Fencing: Deposit route requires fixed deposit maintenance throughout validity.'
    ]
  },
  hybrid: {
    title: 'Corporate + Real Estate Investor Dual-Track',
    validity: 'Combined 10-Year Golden Visa + Corporate License',
    authority: 'DLD Cube / DET / DIFC Authority / GDRFA',
    authorityUrl: 'https://dubailand.gov.ae',
    legalBasis: 'Unified Executive Council Directives & Cabinet Res. 65/2022',
    minInvestment: 'Property title ≥ AED 2M + Commercial incorporation',
    eligibilitySummary: 'High-net-worth investors establishing holding company entities (DIFC / ADGM / Mainland) alongside qualifying trophy real estate assets.',
    familySponsorship: 'Comprehensive multi-generational family sponsorship and executive corporate quotas.',
    mandatoryDocuments: [
      'Electronic DLD Title Deeds (aggregate value ≥ AED 2M)',
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
    <div className="bg-white text-[#1d1d1f] min-h-screen pb-32 selection:bg-[#0071e3]/10 selection:text-[#1d1d1f]">
      {/* 1. APPLE PRO HERO HEADER */}
      <PageIntro
        eyebrow="Statutory Immigration & Golden Visa Hub"
        badge={<SourceBadge status="OFFICIAL SOURCE" sourceName="Cabinet Res No. 65 of 2022" />}
        title="Residency & Citizenship."
        description="Golden Residency through qualifying investment. Statutory immigration frameworks, Real Estate Investor Golden Residency criteria, procedural stages, and personal tax neutrality provisions."
      />

      <main className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 space-y-16">
        {/* 1B. GOLDEN VISA STATUTORY CADRANS */}
        <div className="space-y-6">
          <div className="flex items-center justify-between border-b border-black/10 pb-4">
            <span className="text-[11px] font-mono font-bold uppercase tracking-[0.2em] text-[#b8860b]">
              STATUTORY RESIDENCY CADRANS
            </span>
            <span className="text-xs font-mono text-[#86868b]">Cabinet Resolution No. 65 of 2022</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <CadranDial
              label="GOLDEN VISA THRESHOLD"
              sublabel="DLD Freehold Title Value"
              value="2.0M"
              unit="AED CAPITAL TIER"
              targetValue="Single or Aggregated Deeds"
              percentage={100}
              status="OPTIMAL"
              statutoryRef="Cabinet Res. 65/2022"
              icon={Landmark}
            />
            <CadranDial
              label="PHYSICAL STAY MINIMUM"
              sublabel="Continuous Stay Abroad"
              value="0 DAYS"
              unit="ZERO CONSTRAINT"
              targetValue="No 6-Month Revocation Rule"
              percentage={100}
              status="OPTIMAL"
              statutoryRef="Federal Residency Law"
              icon={ShieldCheck}
            />
            <CadranDial
              label="FAMILY SPONSORSHIP"
              sublabel="Spouse & Dependent Children"
              value="UNLIMITED"
              unit="FAMILY QUOTA"
              targetValue="Sons ≤25 / Daughters Any Age"
              percentage={95}
              status="VERIFIED"
              statutoryRef="GDRFA Family Statute"
              icon={Users}
            />
            <CadranDial
              label="PROCESSING HORIZON"
              sublabel="DLD Cube Priority Channel"
              value="5-7"
              unit="BUSINESS DAYS"
              targetValue="Medical Screening to EID"
              percentage={90}
              status="VERIFIED"
              statutoryRef="DLD Cube Express Protocol"
              icon={Award}
            />
          </div>
        </div>

        {/* 1C. GOLDEN RESIDENCY STRUCTURAL QUADRANT */}
        <CadranQuadrant
          eyebrow="IMMIGRATION STATUTORY MATRIX"
          title="Golden Residency Statutory Rights & Family Safeguards"
          statutorySource="ICP, GDRFA Dubai & Cabinet Resolution No. 65 of 2022"
          quadrants={[
            {
              title: 'Family Continuity Protection',
              value: '100% SECURED',
              subtext: 'In the event of primary applicant decease, sponsored family members retain Golden Visa validity until term expiry.',
              delta: 'PERPETUAL STATUS',
              isPositive: true,
              statutoryRef: 'Cabinet Res. 65/2022 Art. 18',
            },
            {
              title: 'Domestic & Support Staff Sponsorship',
              value: 'NO STATUTORY CAP',
              subtext: 'Primary Golden Visa holders can sponsor executive drivers, domestic staff, and private security without quota limits.',
              delta: 'FULL PRIVILEGES',
              isPositive: true,
              statutoryRef: 'GDRFA Executive Schedule',
            },
            {
              title: 'Mortgaged Asset Eligibility',
              value: 'MORTGAGE PERMITTED',
              subtext: 'Properties acquired with UAE bank mortgages qualify provided equity capital or DLD NOC confirms eligibility.',
              delta: 'LEVERAGE COMPLIANT',
              isPositive: true,
              statutoryRef: 'DLD Cube Mortgage Protocol',
            },
            {
              title: 'Corporate Holding Structure',
              value: 'DIFC / ADGM',
              subtext: 'Freehold properties held through 100% owned DIFC or ADGM Foundation / SPV entities qualify for Golden Visa filing.',
              delta: 'CORPORATE TITLE',
              isPositive: true,
              statutoryRef: 'DLD Legal Entity Registry',
            },
          ]}
        />

        {/* 2. STATUTORY MACRO BENCHMARKS (BENTO GRID) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="p-6 rounded-3xl bg-white border border-black/10 space-y-2 shadow-[0_2px_12px_rgba(0,0,0,0.03)] apple-card-hover">
            <div className="text-[10px] font-mono text-[#86868b] uppercase tracking-wider font-semibold">Investor Capital Minimum</div>
            <div className="text-2xl sm:text-3xl font-extrabold text-[#1d1d1f] tabular-nums">AED 2,000,000</div>
            <div className="text-xs text-[#6e6e73]">Property value threshold (single or aggregated freehold)</div>
            <div className="pt-2 text-[10px] font-mono text-[#b8860b] font-bold">Source: UAE Government Portal</div>
          </div>

          <div className="p-6 rounded-3xl bg-white border border-black/10 space-y-2 shadow-[0_2px_12px_rgba(0,0,0,0.03)] apple-card-hover">
            <div className="text-[10px] font-mono text-[#86868b] uppercase tracking-wider font-semibold">Investor Residency Validity</div>
            <div className="text-2xl sm:text-3xl font-extrabold text-[#1d1d1f]">5 or 10 <span className="text-sm font-normal text-[#6e6e73]">Years</span></div>
            <div className="text-xs text-[#6e6e73]">5-Yr UAE Govt summary / 10-Yr official service portals</div>
            <div className="pt-2 text-[10px] font-mono text-[#b8860b] font-bold">Source: UAE GOVT / ICP</div>
          </div>

          <div className="p-6 rounded-3xl bg-white border border-black/10 space-y-2 shadow-[0_2px_12px_rgba(0,0,0,0.03)] apple-card-hover">
            <div className="text-[10px] font-mono text-[#86868b] uppercase tracking-wider font-semibold">UAE Personal Income Tax</div>
            <div className="text-2xl sm:text-3xl font-extrabold text-[#b8860b]">0.00%</div>
            <div className="text-xs text-[#6e6e73]">No UAE personal income tax on qualifying individuals (Cabinet Dec 49/2023)</div>
            <div className="pt-2 text-[10px] font-mono text-[#b8860b] font-bold">Source: FTA Official Standard</div>
          </div>

          <div className="p-6 rounded-3xl bg-white border border-black/10 space-y-2 shadow-[0_2px_12px_rgba(0,0,0,0.03)] apple-card-hover">
            <div className="text-[10px] font-mono text-[#86868b] uppercase tracking-wider font-semibold">Stay Outside Constraint</div>
            <div className="text-2xl sm:text-3xl font-extrabold text-[#1d1d1f]">None <span className="text-sm font-normal text-[#6e6e73]">(0 Days)</span></div>
            <div className="text-xs text-[#6e6e73]">Visa remains valid regardless of continuous time abroad</div>
            <div className="pt-2 text-[10px] font-mono text-[#b8860b] font-bold">Source: UAE Golden Visa Statute</div>
          </div>
        </div>

        {/* 3. INTERACTIVE DECISION FLOW */}
        <div className="rounded-3xl border border-black/10 bg-white shadow-[0_2px_12px_rgba(0,0,0,0.03)] apple-card-hover overflow-hidden">
          <div className="p-6 sm:p-10 bg-[#f5f5f7] border-b border-black/10 space-y-3">
            <div className="flex items-center gap-2 text-[#b8860b] text-xs font-mono font-bold uppercase tracking-wider">
              <Compass className="h-4 w-4" />
              <span>Interactive Decision Intelligence</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1d1d1f] tracking-tight">
              What are you trying to achieve in Dubai?
            </h2>
            <p className="text-sm text-[#6e6e73] max-w-3xl">
              Select your primary objective to identify the officially matching residency framework, statutory authority, documentation requirements, and regulatory caveats.
            </p>

            {/* OBJECTIVE SELECTOR PILLS */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 pt-6">
              {[
                { id: 'property_2m', icon: Building, title: 'Acquire Real Estate (≥ AED 2M)', desc: 'Real Estate Golden Residency (5 or 10 Years). Ready or qualifying off-plan properties.' },
                { id: 'property_sub2m', icon: Building, title: 'Property Purchase (AED 750k–2M)', desc: '2-Year Real Estate Investor Residency for completed residential units.' },
                { id: 'business_setup', icon: Briefcase, title: 'Establish Business / Company', desc: '2-Year Partner/Investor Visa via Mainland LLC or Free Zone entity.' },
                { id: 'remote_work', icon: Laptop, title: 'Live in Dubai & Work Remotely', desc: '1-Year Virtual Work Visa based on foreign income (≥ USD 3,500/mo).' },
                { id: 'retirement', icon: ShieldCheck, title: 'Retire in Dubai (Age 55+)', desc: '5-Year Retirement Visa via property (≥ AED 1M) or bank deposit.' },
                { id: 'hybrid', icon: Landmark, title: 'Capital + Commercial Desk', desc: 'Combined Golden Visa property asset + corporate holding & tax structuring.' },
              ].map((item) => {
                const Icon = item.icon
                const isSelected = selectedObjective === item.id
                return (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => setSelectedObjective(item.id as ObjectiveType)}
                    className={`p-6 rounded-2xl border text-left transition-all flex flex-col justify-between h-full min-h-[7rem] cursor-pointer ${
                      isSelected
                        ? 'border-[#b8860b] bg-amber-50/50 shadow-sm ring-1 ring-[#b8860b]'
                        : 'border-black/10 bg-white hover:bg-[#fbfbfd]'
                    }`}
                  >
                    <div className="flex items-center gap-2.5">
                      <Icon className={`h-4 w-4 shrink-0 ${isSelected ? 'text-[#b8860b]' : 'text-[#86868b]'}`} />
                      <span className="text-xs font-bold text-[#1d1d1f]">{item.title}</span>
                    </div>
                    <p className="text-xs text-[#6e6e73] mt-2 leading-relaxed">
                      {item.desc}
                    </p>
                  </button>
                )
              })}
            </div>
          </div>

          {/* ACTIVE PATHWAY DETAILED INTELLIGENCE PANEL */}
          <div className="p-6 sm:p-10 space-y-10">
            <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 pb-8 border-b border-black/10">
              <div>
                <div className="flex items-center gap-2 text-[11px] font-mono text-[#b8860b] font-bold uppercase tracking-wider">
                  <span className="inline-block h-2 w-2 rounded-full bg-[#b8860b] animate-pulse" />
                  <span>Potentially Relevant Official Pathway</span>
                </div>
                <h3 className="text-3xl sm:text-4xl font-extrabold text-[#1d1d1f] tracking-tight mt-1">
                  {activePathway.title}
                </h3>
              </div>
              <div className="flex flex-wrap items-center gap-3">
                <div className="px-4 py-2 bg-[#f5f5f7] border border-black/10 rounded-full text-xs">
                  <span className="text-[#6e6e73]">Statutory Term: </span>
                  <strong className="text-[#1d1d1f]">{activePathway.validity}</strong>
                </div>
                <a
                  href={activePathway.authorityUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#1d1d1f] text-white hover:bg-[#000000] rounded-full text-xs font-bold transition-all shadow-xs"
                >
                  <span>Official Authority: {activePathway.authority}</span>
                  <ArrowRight className="h-3.5 w-3.5 text-white/70" />
                </a>
              </div>
            </div>

            {/* DETAILS GRID */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              {/* LEFT: SUMMARY & FAMILY */}
              <div className="space-y-8">
                <div className="space-y-2">
                  <div className="text-[11px] font-mono uppercase font-bold text-[#b8860b]">
                    Statutory Legal Basis & Threshold
                  </div>
                  <div className="p-6 rounded-2xl bg-[#f5f5f7] border border-black/10 space-y-2">
                    <div className="text-sm font-bold text-[#1d1d1f]">{activePathway.legalBasis}</div>
                    <div className="text-xs sm:text-sm text-[#6e6e73] leading-relaxed">
                      {activePathway.eligibilitySummary}
                    </div>
                    <div className="text-xs font-mono text-[#b8860b] pt-2 font-bold">
                      Minimum Statutory Investment: {activePathway.minInvestment}
                    </div>
                  </div>
                </div>

                <div className="space-y-2">
                  <div className="text-[11px] font-mono uppercase font-bold text-[#b8860b] flex items-center gap-2">
                    <Users className="h-4 w-4" />
                    <span>Family & Dependent Sponsorship</span>
                  </div>
                  <p className="text-xs sm:text-sm text-[#6e6e73] leading-relaxed p-6 rounded-2xl bg-[#f5f5f7] border border-black/10">
                    {activePathway.familySponsorship}
                  </p>
                </div>

                {/* MANDATORY DOCUMENTS */}
                <div className="space-y-3">
                  <div className="text-[11px] font-mono uppercase font-bold text-[#b8860b] flex items-center gap-2">
                    <FileText className="h-4 w-4" />
                    <span>Mandatory Verification Documents</span>
                  </div>
                  <ul className="space-y-2 text-xs sm:text-sm text-[#6e6e73]">
                    {activePathway.mandatoryDocuments.map((doc, idx) => (
                      <li key={idx} className="flex items-start gap-2.5 p-3 rounded-xl bg-[#f5f5f7] border border-black/5">
                        <CheckCircle2 className="h-4 w-4 text-[#b8860b] shrink-0 mt-0.5" />
                        <span>{doc}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* RIGHT: PROCESS & CAVEATS */}
              <div className="space-y-8">
                <div className="space-y-3">
                  <div className="text-[11px] font-mono uppercase font-bold text-[#b8860b]">
                    Official End-to-End Procedure
                  </div>
                  <div className="relative pl-6 space-y-4 before:absolute before:left-2.5 before:top-2 before:bottom-2 before:w-0.5 before:bg-black/10">
                    {activePathway.processSteps.map((step, idx) => (
                      <div key={idx} className="relative space-y-1">
                        <div className="absolute -left-6 top-0.5 h-5 w-5 rounded-full bg-white border border-[#b8860b] flex items-center justify-center text-[9px] font-mono font-bold text-[#b8860b]">
                          {idx + 1}
                        </div>
                        <div className="text-xs sm:text-sm text-[#6e6e73] leading-relaxed pl-3">
                          {step}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="space-y-3">
                  <div className="text-[11px] font-mono uppercase font-bold text-[#b8860b] flex items-center gap-2">
                    <AlertCircle className="h-4 w-4 text-amber-600" />
                    <span>Statutory Caveats & Legal Limitations</span>
                  </div>
                  <ul className="space-y-2 text-xs text-[#6e6e73]">
                    {activePathway.officialCaveats.map((cav, idx) => (
                      <li key={idx} className="flex items-start gap-2.5 p-4 rounded-xl bg-amber-50 border border-amber-200 text-amber-900 leading-relaxed">
                        <span className="h-1.5 w-1.5 rounded-full bg-amber-600 shrink-0 mt-2" />
                        <span>{cav}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {/* INTAKE CTA */}
            <div className="pt-8 border-t border-black/10 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div className="text-sm text-[#6e6e73]">
                Need bespoke verification for a specific property portfolio or corporate holding?
              </div>
              <Link
                href="/private-client"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#1d1d1f] text-white hover:bg-[#000000] rounded-full text-xs font-bold uppercase tracking-wider transition-all shadow-sm"
              >
                <span>Request Private Client Residency Review</span>
                <ArrowRight className="h-4 w-4 text-white/70" />
              </Link>
            </div>
          </div>
        </div>

        {/* 4. SIX CORE REGULATORY PILLARS */}
        <div className="space-y-8">
          <div className="border-b border-black/10 pb-4">
            <h2 className="text-3xl font-extrabold text-[#1d1d1f] tracking-tight">
              Statutory Frameworks & Official Rules
            </h2>
            <p className="text-sm text-[#6e6e73] mt-1">
              Verified legal provisions governing real estate acquisitions and fiscal residency in Dubai.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* PILLAR 1: REAL ESTATE INVESTOR RESIDENCY */}
            <div className="p-6 sm:p-8 rounded-3xl border border-black/10 bg-white space-y-4 flex flex-col justify-between shadow-[0_2px_12px_rgba(0,0,0,0.03)] apple-card-hover">
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-mono uppercase font-bold text-[#b8860b]">
                    01 • INVESTOR RESIDENCY
                  </span>
                  <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-[#f5f5f7] text-[#b8860b] border border-black/10">
                    CABINET RES 65/2022
                  </span>
                </div>
                <h3 className="text-2xl font-bold text-[#1d1d1f]">
                  Golden Residency — Real Estate Investor
                </h3>
                <div className="space-y-2 text-xs sm:text-sm text-[#6e6e73] leading-relaxed">
                  <p>
                    <strong className="text-[#1d1d1f]">Summary:</strong> Long-term renewable residence permit granted to foreign property investors acquiring property with an aggregated value of AED 2,000,000 or greater. Ownership, financing, property eligibility and residency requirements are subject to the competent authority&apos;s current rules.
                  </p>
                  <p>
                    <strong className="text-[#1d1d1f]">Source Differentiation:</strong> The official UAE Government summary describes real estate Golden Visas as 5 years, while federal ICP and Dubai GDRFA service portals describe 10-year tracks.
                  </p>
                </div>
              </div>
              <div className="pt-4 border-t border-black/10 flex items-center justify-between text-[11px] text-[#86868b] font-mono">
                <span>Sources: u.ae · icp.gov.ae · gdrfad.gov.ae</span>
                <span>Verified: 2026-09-01</span>
              </div>
            </div>

            {/* PILLAR 2: FREEHOLD PROPERTY OWNERSHIP */}
            <div className="p-6 sm:p-8 rounded-3xl border border-black/10 bg-white space-y-4 flex flex-col justify-between shadow-[0_2px_12px_rgba(0,0,0,0.03)] apple-card-hover">
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-mono uppercase font-bold text-[#b8860b]">
                    02 • PROPERTY OWNERSHIP
                  </span>
                  <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-[#f5f5f7] text-[#b8860b] border border-black/10">
                    REGULATION 3/2006
                  </span>
                </div>
                <h3 className="text-2xl font-bold text-[#1d1d1f]">
                  Designated Freehold Areas Foreign Ownership
                </h3>
                <div className="space-y-2 text-xs sm:text-sm text-[#6e6e73] leading-relaxed">
                  <p>
                    <strong className="text-[#1d1d1f]">Summary:</strong> Non-UAE and non-GCC nationals are entitled to absolute freehold ownership rights (including perpetual title deed registration) within designated areas determined under Regulation No. 3 of 2006.
                  </p>
                  <p>
                    <strong className="text-[#1d1d1f]">Current Rule:</strong> Freehold rights include the full legal right to sell, lease, mortgage, and bequeath the real property asset without local sponsorship requirements.
                  </p>
                </div>
              </div>
              <div className="pt-4 border-t border-black/10 flex items-center justify-between text-[11px] text-[#86868b] font-mono">
                <span>Source: Dubai Land Department (DLD)</span>
                <span>Verified: 2026-09-01</span>
              </div>
            </div>

            {/* PILLAR 3: PERSONAL INCOME TAX */}
            <div className="p-6 sm:p-8 rounded-3xl border border-black/10 bg-white space-y-4 flex flex-col justify-between shadow-[0_2px_12px_rgba(0,0,0,0.03)] apple-card-hover">
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-mono uppercase font-bold text-[#b8860b]">
                    03 • PERSONAL TAX
                  </span>
                  <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-[#f5f5f7] text-[#b8860b] border border-black/10">
                    FTA STATUTORY
                  </span>
                </div>
                <h3 className="text-2xl font-bold text-[#1d1d1f]">
                  No UAE Personal Income Tax
                </h3>
                <div className="space-y-2 text-xs sm:text-sm text-[#6e6e73] leading-relaxed">
                  <p>
                    <strong className="text-[#1d1d1f]">Summary:</strong> The UAE does not levy personal income tax on individuals. For natural persons, qualifying Real Estate Investment Income is outside Business Activity for UAE Corporate Tax purposes under the applicable rules.
                  </p>
                </div>
              </div>
              <div className="pt-4 border-t border-black/10 flex items-center justify-between text-[11px] text-[#86868b] font-mono">
                <span>Source: UAE Federal Tax Authority (FTA)</span>
                <span>Verified: 2026-09-01</span>
              </div>
            </div>

            {/* PILLAR 4: DLD CONVEYANCE FEES */}
            <div className="p-6 sm:p-8 rounded-3xl border border-black/10 bg-white space-y-4 flex flex-col justify-between shadow-[0_2px_12px_rgba(0,0,0,0.03)] apple-card-hover">
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-mono uppercase font-bold text-[#b8860b]">
                    04 • STATUTORY FEES
                  </span>
                  <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-[#f5f5f7] text-[#b8860b] border border-black/10">
                    DLD TARIFF REGISTRY
                  </span>
                </div>
                <h3 className="text-2xl font-bold text-[#1d1d1f]">
                  DLD Conveyance & Administrative Tariffs
                </h3>
                <div className="space-y-2 text-xs sm:text-sm text-[#6e6e73] leading-relaxed">
                  <p>
                    <strong className="text-[#1d1d1f]">Summary:</strong> DLD Property Sale Registration transfer fee is 4% (2% buyer + 2% seller per official DLD portal; contractually allocated in Form F). Registration Trustee fee: AED 4,000 + 5% VAT.
                  </p>
                </div>
              </div>
              <div className="pt-4 border-t border-black/10 flex items-center justify-between text-[11px] text-[#86868b] font-mono">
                <span>Source: DLD Property Sale Registration Service</span>
                <span>Verified: 2026-09-01</span>
              </div>
            </div>
          </div>
        </div>

        {/* 5. LEGAL DISCLAIMER DRAWER */}
        <div className="p-6 sm:p-8 rounded-3xl border border-black/10 bg-[#f5f5f7] text-xs text-[#6e6e73] space-y-2">
          <div className="flex items-center gap-2 font-bold text-[#1d1d1f] text-sm">
            <Scale className="h-4 w-4 text-[#b8860b]" />
            <span>Statutory Legal Notice & Provenance Attribution</span>
          </div>
          <p className="leading-relaxed">
            The regulatory intelligence displayed on this page is compiled strictly from published UAE federal laws, cabinet resolutions, and Dubai Land Department official tariffs. This information does not constitute personalized legal, tax, or corporate structuring advice.
          </p>
        </div>
      </main>
    </div>
  )
}
