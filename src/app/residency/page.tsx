'use client'

import * as React from 'react'
import Link from 'next/link'
import { SourceBadge } from '@/components/ui/source-badge'
import { PageIntro, MetricBand } from '@/components/layout/layout-primitives'
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
  Users
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
      '04 • APPLICATION: Submit application file via DLD Cube or licensed Amar Center.',
      '05 • AUTHORITY REVIEW: Undergo statutory medical fitness evaluation and Emirates ID biometrics.',
      '06 • ISSUANCE: Electronic residency permit generation and physical Emirates ID delivery.'
    ],
    officialCaveats: [
      'Physical Presence: Standard rule applies requiring entry into the UAE at least once every 180 days to maintain validity.',
      'Property Status: Property must be fully handed over with Building Completion Certificate and registered Title Deed.'
    ]
  },
  business_setup: {
    title: 'Investor / Partner Commercial Residency',
    validity: '2 Years (Renewable)',
    authority: 'Dubai DET / Relevant Free Zone Authority / GDRFA',
    authorityUrl: 'https://www.dubaidet.gov.ae/',
    legalBasis: 'Federal Decree-Law No. 32 of 2021 on Commercial Companies',
    minInvestment: 'Incorporation capital & trade license registration fees',
    eligibilitySummary: 'Shareholders, partners, or corporate executives holding shares in a Dubai Mainland Commercial LLC or registered Free Zone entity (e.g. DIFC, DMCC, DWTC).',
    familySponsorship: 'Spousal and dependent child sponsorship permitted upon establishing verified corporate dividend or salary credentials.',
    mandatoryDocuments: [
      'Valid Commercial Trade License / Certificate of Incorporation',
      'Memorandum of Association (MoA) or Share Registry Certificate',
      'Company Immigration Establishment Card',
      'Passport copy & biometric standard photograph',
      'Corporate bank reference where requested by immigration authorities'
    ],
    processSteps: [
      '01 • ELIGIBILITY: Select jurisdiction (Mainland vs Free Zone) and register corporate structure.',
      '02 • INCORPORATION: Issue trade license and establish immigration Establishment Card.',
      '03 • DOCUMENTATION: Prepare partner documentation, share certificates, and applicant passport.',
      '04 • APPLICATION: File investor entry permit request with GDRFA Dubai.',
      '05 • AUTHORITY REVIEW: Complete mandatory DHA medical testing and ICP fingerprint capture.',
      '06 • ISSUANCE: Finalize electronic investor residency visa and Emirates ID issuance.'
    ],
    officialCaveats: [
      'License Maintenance: Corporate trade license must remain active and renewed annually.',
      'Corporate Taxation: 9% Federal Corporate Tax applies on net taxable business profits above AED 375,000 (Federal Decree-Law No. 47 of 2022).'
    ]
  },
  remote_work: {
    title: 'Virtual Working / Remote Nomad Residency',
    validity: '1 Year (Renewable annually)',
    authority: 'GDRFA Dubai / Department of Economy and Tourism (DET)',
    authorityUrl: 'https://www.visitdubai.com/en/invest-in-dubai/live-and-work/visas-and-entry/virtual-working-program',
    legalBasis: 'Dubai Virtual Working Programme / Cabinet Resolution',
    minInvestment: 'Zero local capital investment; proof of USD 3,500/month foreign income',
    eligibilitySummary: 'Foreign employed professionals or business proprietors who perform their duties remotely for companies registered outside the UAE.',
    familySponsorship: 'Family sponsorship eligible after obtaining residency and proving qualifying residential accommodation in Dubai.',
    mandatoryDocuments: [
      'Proof of Employment with minimum 1-year contract outside UAE, or proof of foreign company ownership',
      'Bank statements for preceding 3 months reflecting minimum USD 3,500/month average income',
      'Latest payslip and foreign employer verification letter',
      'Comprehensive health insurance policy with UAE coverage'
    ],
    processSteps: [
      '01 • ELIGIBILITY: Verify continuous foreign remote income meeting USD 3,500/month threshold.',
      '02 • DOCUMENTATION: Gather foreign employment contract, bank statements, and insurance certificate.',
      '03 • APPLICATION: Submit digital application through GDRFA / Visit Dubai official service portal.',
      '04 • AUTHORITY REVIEW: Departmental review of overseas employment credentials.',
      '05 • SCREENING: Complete local medical screening and biometric registration.',
      '06 • ISSUANCE: 1-Year electronic residency permit and Emirates ID issuance.'
    ],
    officialCaveats: [
      'Local Employment Prohibited: Does not authorize working for UAE onshore entities without formal local contract conversion.',
      'Health Coverage: Private health insurance must be maintained throughout the duration.'
    ]
  },
  retirement: {
    title: '5-Year Retirement Residency (Retire in Dubai)',
    validity: '5 Years (Renewable)',
    authority: 'GDRFA Dubai / Dubai Department of Economy and Tourism',
    authorityUrl: 'https://www.visitdubai.com/en/invest-in-dubai/live-and-work/retire-in-dubai',
    legalBasis: 'Retire in Dubai Programme / Cabinet Resolution No. 56 of 2018',
    minInvestment: 'Property ≥ AED 1M, or AED 1M 3-yr bank deposit, or active income ≥ AED 15,000/mo',
    eligibilitySummary: 'Retirees aged 55 or above with at least 15 years of career history, fulfilling one of the three statutory financial criteria.',
    familySponsorship: 'Spousal and dependent sponsorship permitted under standard retirement framework.',
    mandatoryDocuments: [
      'Passport copy with minimum 6 months remaining validity',
      'Proof of age (≥ 55 years) and retirement verification letter',
      'Financial proof: Title deed (≥ AED 1M), 3-year UAE fixed deposit receipt (≥ AED 1M), or pension statement (≥ AED 15,000/mo)',
      'Valid UAE health insurance policy'
    ],
    processSteps: [
      '01 • ELIGIBILITY: Fulfill age (55+) and qualifying financial threshold option.',
      '02 • DOCUMENTATION: Compile pension records, title deeds, or bank deposit certificates.',
      '03 • APPLICATION: File formal application through GDRFA Dubai / DLD Cube.',
      '04 • AUTHORITY REVIEW: Review of financial solvency and statutory security check.',
      '05 • SCREENING: Medical examination and biometric registration at authorized center.',
      '06 • ISSUANCE: 5-Year renewable retirement residency and physical Emirates ID.'
    ],
    officialCaveats: [
      'Age Floor: Applicant must be strictly 55 years or older at the time of submission.',
      'Fixed Deposit: Bank deposit option requires funds to be locked in a CBUAE-licensed financial institution for the 3-year term.'
    ]
  },
  hybrid: {
    title: 'Integrated Capital & Commercial Advisory Framework',
    validity: '5 to 10 Years (Pathway Dependent)',
    authority: 'DLD Cube / GDRFA Dubai / Federal Tax Authority',
    authorityUrl: 'https://u.ae/en/information-and-services/visa-and-emirates-id/golden-visa',
    legalBasis: 'Executive Regulations to UAE Residence Law / Cabinet Res 65/2022',
    minInvestment: 'Qualifying Real Estate (≥ AED 2M) + Free Zone Holding Structure',
    eligibilitySummary: 'Private principals combining a prime Dubai real estate portfolio with an operational holding company or family enterprise structure in DIFC, ADGM, or specialized Free Zones.',
    familySponsorship: 'Comprehensive sponsorship covering spouse, children, senior corporate executives, and domestic staff.',
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
    <div className="bg-white text-text-primary min-h-screen pb-24">
      {/* 1. EDITORIAL PAGE INTRO */}
      <PageIntro
        eyebrow="UAE Federal Decrees & Official Authority Channels"
        badge={<SourceBadge status="OFFICIAL SOURCE" sourceName="Cabinet Res No. 65 of 2022" />}
        title="Residency Intelligence."
        description="Statutory immigration frameworks, Real Estate Investor Golden Residency criteria, procedural stages, and personal tax-neutrality mechanics."
      />

      <main className="w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 space-y-12">
        {/* 2. STATUTORY MACRO BENCHMARKS */}
        <MetricBand
          columns={4}
          items={[
            {
              label: 'Investor Capital Minimum',
              value: 'AED 2,000,000',
              subtext: 'Property value threshold: AED 2,000,000 (single or aggregated freehold)',
              source: 'UAE GOVT',
            },
            {
              label: 'Investor Residency Validity',
              value: '5 or 10',
              unit: 'Years',
              subtext: '5-Yr UAE Govt summary / 10-Yr official service portals (confirm with authority)',
              source: 'UAE GOVT / ICP',
            },
            {
              label: 'UAE Personal Income Tax',
              value: 'NO PERSONAL TAX',
              unit: 'QUALIFYING INDIVIDUALS',
              subtext: 'No UAE personal income tax on qualifying individual returns (Cabinet Dec 49/2023)',
              source: 'FTA OFFICIAL',
            },
            {
              label: 'Stay Outside Constraint',
              value: 'None',
              unit: '0 DAYS',
              subtext: 'Visa remains valid regardless of continuous time abroad',
              source: 'UAE GOVT',
            },
          ]}
        />

        {/* 3. INTERACTIVE DECISION FLOW: "WHAT ARE YOU TRYING TO ACHIEVE?" */}
        <div className="rounded-3xl border border-border bg-white shadow-sm overflow-hidden">
          <div className="p-6 sm:p-8 bg-surface-subtle border-b border-border space-y-2">
            <div className="flex items-center gap-2 text-accent text-xs font-mono font-bold uppercase tracking-wider">
              <Compass className="h-4 w-4" />
              <span>Interactive Decision Intelligence</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-text-primary tracking-tight">
              What are you trying to achieve in Dubai?
            </h2>
            <p className="text-xs sm:text-sm text-text-secondary max-w-3xl">
              Select your primary objective to identify the officially matching residency framework, statutory authority, documentation requirements, and regulatory caveats.
            </p>

            {/* OBJECTIVE SELECTOR PILLS */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 pt-4">
              <button
                type="button"
                onClick={() => setSelectedObjective('property_2m')}
                className={`p-4 rounded-xl border text-left transition-all flex flex-col justify-between h-full min-h-[5.75rem] cursor-pointer ${
                  selectedObjective === 'property_2m'
                    ? 'border-accent bg-white shadow-md ring-1 ring-accent'
                    : 'border-border bg-white/60 hover:bg-white hover:border-text-muted'
                }`}
              >
                <div className="flex items-center gap-2.5">
                  <Building className={`h-4 w-4 shrink-0 ${selectedObjective === 'property_2m' ? 'text-accent' : 'text-text-muted'}`} />
                  <span className="text-xs font-bold text-text-primary">Acquire Real Estate (≥ AED 2M)</span>
                </div>
                <p className="text-[11px] text-text-secondary mt-1.5 leading-snug">
                  Real Estate Golden Residency (5 or 10 Years). Ready or qualifying off-plan properties.
                </p>
              </button>

              <button
                type="button"
                onClick={() => setSelectedObjective('property_sub2m')}
                className={`p-4 rounded-xl border text-left transition-all flex flex-col justify-between h-full min-h-[5.75rem] cursor-pointer ${
                  selectedObjective === 'property_sub2m'
                    ? 'border-accent bg-white shadow-md ring-1 ring-accent'
                    : 'border-border bg-white/60 hover:bg-white hover:border-text-muted'
                }`}
              >
                <div className="flex items-center gap-2.5">
                  <Building className={`h-4 w-4 shrink-0 ${selectedObjective === 'property_sub2m' ? 'text-accent' : 'text-text-muted'}`} />
                  <span className="text-xs font-bold text-text-primary">Property Purchase (AED 750k–2M)</span>
                </div>
                <p className="text-[11px] text-text-secondary mt-1.5 leading-snug">
                  2-Year Real Estate Investor Residency for completed residential units.
                </p>
              </button>

              <button
                type="button"
                onClick={() => setSelectedObjective('business_setup')}
                className={`p-4 rounded-xl border text-left transition-all flex flex-col justify-between h-full min-h-[5.75rem] cursor-pointer ${
                  selectedObjective === 'business_setup'
                    ? 'border-accent bg-white shadow-md ring-1 ring-accent'
                    : 'border-border bg-white/60 hover:bg-white hover:border-text-muted'
                }`}
              >
                <div className="flex items-center gap-2.5">
                  <Briefcase className={`h-4 w-4 shrink-0 ${selectedObjective === 'business_setup' ? 'text-accent' : 'text-text-muted'}`} />
                  <span className="text-xs font-bold text-text-primary">Establish Business / Company</span>
                </div>
                <p className="text-[11px] text-text-secondary mt-1.5 leading-snug">
                  2-Year Partner/Investor Visa via Mainland LLC or Free Zone entity.
                </p>
              </button>

              <button
                type="button"
                onClick={() => setSelectedObjective('remote_work')}
                className={`p-4 rounded-xl border text-left transition-all flex flex-col justify-between h-full min-h-[5.75rem] cursor-pointer ${
                  selectedObjective === 'remote_work'
                    ? 'border-accent bg-white shadow-md ring-1 ring-accent'
                    : 'border-border bg-white/60 hover:bg-white hover:border-text-muted'
                }`}
              >
                <div className="flex items-center gap-2.5">
                  <Laptop className={`h-4 w-4 shrink-0 ${selectedObjective === 'remote_work' ? 'text-accent' : 'text-text-muted'}`} />
                  <span className="text-xs font-bold text-text-primary">Live in Dubai & Work Remotely</span>
                </div>
                <p className="text-[11px] text-text-secondary mt-1.5 leading-snug">
                  1-Year Virtual Work Visa based on foreign income (≥ USD 3,500/mo).
                </p>
              </button>

              <button
                type="button"
                onClick={() => setSelectedObjective('retirement')}
                className={`p-4 rounded-xl border text-left transition-all flex flex-col justify-between h-full min-h-[5.75rem] cursor-pointer ${
                  selectedObjective === 'retirement'
                    ? 'border-accent bg-white shadow-md ring-1 ring-accent'
                    : 'border-border bg-white/60 hover:bg-white hover:border-text-muted'
                }`}
              >
                <div className="flex items-center gap-2.5">
                  <ShieldCheck className={`h-4 w-4 shrink-0 ${selectedObjective === 'retirement' ? 'text-accent' : 'text-text-muted'}`} />
                  <span className="text-xs font-bold text-text-primary">Retire in Dubai (Age 55+)</span>
                </div>
                <p className="text-[11px] text-text-secondary mt-1.5 leading-snug">
                  5-Year Retirement Visa via property (≥ AED 1M) or bank deposit.
                </p>
              </button>

              <button
                type="button"
                onClick={() => setSelectedObjective('hybrid')}
                className={`p-4 rounded-xl border text-left transition-all flex flex-col justify-between h-full min-h-[5.75rem] cursor-pointer ${
                  selectedObjective === 'hybrid'
                    ? 'border-accent bg-white shadow-md ring-1 ring-accent'
                    : 'border-border bg-white/60 hover:bg-white hover:border-text-muted'
                }`}
              >
                <div className="flex items-center gap-2.5">
                  <Landmark className={`h-4 w-4 shrink-0 ${selectedObjective === 'hybrid' ? 'text-accent' : 'text-text-muted'}`} />
                  <span className="text-xs font-bold text-text-primary">Capital + Commercial Desk</span>
                </div>
                <p className="text-[11px] text-text-secondary mt-1.5 leading-snug">
                  Combined Golden Visa property asset + corporate holding & tax structuring.
                </p>
              </button>
            </div>
          </div>

          {/* ACTIVE PATHWAY DETAILED INTELLIGENCE PANEL */}
          <div className="p-6 sm:p-8 space-y-8">
            <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 pb-6 border-b border-border">
              <div>
                <div className="flex items-center gap-2 text-[11px] font-mono text-emerald-800 font-bold uppercase tracking-wider">
                  <span className="inline-block h-2 w-2 rounded-full bg-emerald-600" />
                  <span>Potentially Relevant Official Pathway</span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-black text-text-primary tracking-tight mt-1">
                  {activePathway.title}
                </h3>
              </div>
              <div className="flex flex-wrap items-center gap-3">
                <div className="px-3 py-1.5 bg-surface-subtle border border-border rounded-lg text-xs">
                  <span className="text-text-muted">Statutory Term: </span>
                  <strong className="text-text-primary">{activePathway.validity}</strong>
                </div>
                <a
                  href={activePathway.authorityUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-white border border-border hover:border-accent rounded-lg text-xs font-semibold text-text-primary transition-colors"
                >
                  <span>Official Authority: {activePathway.authority}</span>
                  <ArrowRight className="h-3.5 w-3.5 text-accent" />
                </a>
              </div>
            </div>

            {/* DETAILS GRID */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* LEFT: SUMMARY & FAMILY */}
              <div className="space-y-6">
                <div className="space-y-2">
                  <div className="text-[11px] font-mono uppercase font-bold text-accent">
                    Statutory Legal Basis & Threshold
                  </div>
                  <div className="p-4 rounded-xl bg-surface-subtle border border-border space-y-1.5">
                    <div className="text-xs font-bold text-text-primary">{activePathway.legalBasis}</div>
                    <div className="text-xs text-text-secondary leading-relaxed">
                      {activePathway.eligibilitySummary}
                    </div>
                    <div className="text-[11px] font-mono text-accent pt-1">
                      Minimum Statutory Investment: {activePathway.minInvestment}
                    </div>
                  </div>
                </div>

                <div className="space-y-2">
                  <div className="text-[11px] font-mono uppercase font-bold text-accent flex items-center gap-1.5">
                    <Users className="h-3.5 w-3.5" />
                    <span>Family & Dependent Sponsorship</span>
                  </div>
                  <p className="text-xs text-text-secondary leading-relaxed p-4 rounded-xl bg-surface-subtle border border-border">
                    {activePathway.familySponsorship}
                  </p>
                </div>

                {/* MANDATORY DOCUMENTS */}
                <div className="space-y-2">
                  <div className="text-[11px] font-mono uppercase font-bold text-accent flex items-center gap-1.5">
                    <FileText className="h-3.5 w-3.5" />
                    <span>Mandatory Verification Documents</span>
                  </div>
                  <ul className="space-y-2 text-xs text-text-secondary">
                    {activePathway.mandatoryDocuments.map((doc, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0 mt-0.5" />
                        <span>{doc}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* RIGHT: PROCESS & CAVEATS */}
              <div className="space-y-6">
                <div className="space-y-3">
                  <div className="text-[11px] font-mono uppercase font-bold text-accent">
                    Official End-to-End Procedure
                  </div>
                  <div className="relative pl-6 space-y-4 before:absolute before:left-2.5 before:top-2 before:bottom-2 before:w-0.5 before:bg-border">
                    {activePathway.processSteps.map((step, idx) => (
                      <div key={idx} className="relative space-y-1">
                        <div className="absolute -left-6 top-0.5 h-5 w-5 rounded-full bg-white border-2 border-accent flex items-center justify-center text-[9px] font-mono font-bold text-text-primary">
                          {idx + 1}
                        </div>
                        <div className="text-xs text-text-secondary leading-relaxed pl-2">
                          {step}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="space-y-2">
                  <div className="text-[11px] font-mono uppercase font-bold text-accent flex items-center gap-1.5">
                    <AlertCircle className="h-3.5 w-3.5 text-amber-600" />
                    <span>Statutory Caveats & Legal Limitations</span>
                  </div>
                  <ul className="space-y-2 text-xs text-text-secondary">
                    {activePathway.officialCaveats.map((cav, idx) => (
                      <li key={idx} className="flex items-start gap-2 p-2.5 rounded-lg bg-amber-500/5 border border-amber-500/20 text-text-secondary">
                        <span className="h-1.5 w-1.5 rounded-full bg-amber-600 shrink-0 mt-1.5" />
                        <span>{cav}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {/* INTAKE CTA */}
            <div className="pt-6 border-t border-border flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div className="text-xs text-text-muted">
                Need verification for a specific property portfolio or corporate setup?
              </div>
              <Link
                href="/private-client"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-text-primary text-white hover:bg-black rounded-xl text-xs font-bold transition-colors"
              >
                <span>Request Private Client Residency Review</span>
                <ArrowRight className="h-4 w-4 text-accent" />
              </Link>
            </div>
          </div>
        </div>

        {/* 4. SIX CORE REGULATORY PILLARS */}
        <div className="space-y-6">
          <div className="border-b border-border pb-3">
            <h2 className="text-2xl font-extrabold text-text-primary tracking-tight">
              Statutory Frameworks & Official Rules
            </h2>
            <p className="text-xs text-text-muted mt-0.5">
              Verified legal provisions governing real estate acquisitions and fiscal residency in Dubai.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* PILLAR 1: REAL ESTATE INVESTOR RESIDENCY */}
            <div className="p-6 sm:p-8 rounded-2xl border border-border bg-white space-y-4 flex flex-col justify-between">
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-mono uppercase font-bold text-accent">
                    01 • INVESTOR RESIDENCY
                  </span>
                  <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-emerald-50 text-emerald-800">
                    CABINET RES 65/2022
                  </span>
                </div>
                <h3 className="text-xl font-bold text-text-primary">
                  Golden Residency — Real Estate Investor
                </h3>
                <div className="space-y-2 text-xs text-text-secondary leading-relaxed">
                  <p>
                    <strong className="text-text-primary">Summary:</strong> Long-term renewable residence permit granted to foreign property investors acquiring property with an aggregated value of AED 2,000,000 or greater. Ownership, financing, property eligibility and residency requirements are subject to the competent authority&apos;s current rules.
                  </p>
                  <p>
                    <strong className="text-text-primary">Source Differentiation:</strong> The official UAE Government summary describes real estate Golden Visas as 5 years, while federal ICP and Dubai GDRFA service portals describe 10-year tracks. Eligibility, qualifying property conditions, financing structure and residence duration should be confirmed with the competent authority at the time of application.
                  </p>
                  <p>
                    <strong className="text-text-primary">Current Rule:</strong> Properties can be completed or off-plan from approved developers. Eligibility, qualifying property conditions and financing structures are subject to competent authority requirements.
                  </p>
                </div>
              </div>
              <div className="pt-3 border-t border-border-subtle flex items-center justify-between text-[11px] text-text-muted font-mono">
                <span>Sources: u.ae · icp.gov.ae · gdrfad.gov.ae</span>
                <span>Verified: 2026-09-01</span>
              </div>
            </div>

            {/* PILLAR 2: FREEHOLD PROPERTY OWNERSHIP */}
            <div className="p-6 sm:p-8 rounded-2xl border border-border bg-white space-y-4 flex flex-col justify-between">
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-mono uppercase font-bold text-accent">
                    02 • PROPERTY OWNERSHIP
                  </span>
                  <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-emerald-50 text-emerald-800">
                    REGULATION 3/2006
                  </span>
                </div>
                <h3 className="text-xl font-bold text-text-primary">
                  Designated Freehold Areas Foreign Ownership
                </h3>
                <div className="space-y-2 text-xs text-text-secondary leading-relaxed">
                  <p>
                    <strong className="text-text-primary">Summary:</strong> Non-UAE and non-GCC nationals are entitled to absolute freehold ownership rights (including perpetual title deed registration) within designated areas determined under Regulation No. 3 of 2006.
                  </p>
                  <p>
                    <strong className="text-text-primary">Who It Applies To:</strong> All foreign individuals, offshore entities, and institutional investors purchasing within designated zones.
                  </p>
                  <p>
                    <strong className="text-text-primary">Current Rule:</strong> Freehold rights include the full legal right to sell, lease, mortgage, and bequeath the real property asset without local sponsorship requirements.
                  </p>
                </div>
              </div>
              <div className="pt-3 border-t border-border-subtle flex items-center justify-between text-[11px] text-text-muted font-mono">
                <span>Source: Dubai Land Department (DLD)</span>
                <span>Verified: 2026-09-01</span>
              </div>
            </div>

            {/* PILLAR 3: PERSONAL INCOME TAX */}
            <div className="p-6 sm:p-8 rounded-2xl border border-border bg-white space-y-4 flex flex-col justify-between">
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-mono uppercase font-bold text-accent">
                    03 • PERSONAL TAX
                  </span>
                  <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-emerald-50 text-emerald-800">
                    FTA STATUTORY
                  </span>
                </div>
                <h3 className="text-xl font-bold text-text-primary">
                  No UAE Personal Income Tax
                </h3>
                <div className="space-y-2 text-xs text-text-secondary leading-relaxed">
                  <p>
                    <strong className="text-text-primary">Summary:</strong> The UAE does not levy personal income tax on individuals. For natural persons, qualifying Real Estate Investment Income is outside Business Activity for UAE Corporate Tax purposes under the applicable rules.
                  </p>
                  <p>
                    <strong className="text-text-primary">Who It Applies To:</strong> Natural persons receiving individual real estate rental income, capital gains, or personal investment returns.
                  </p>
                  <p>
                    <strong className="text-text-primary">Contextual Note:</strong> Business activities, licensed activities and corporate structures may be subject to different tax treatment under Federal Decree-Law No. 47 of 2022. Tax treatment depends on the investor&apos;s circumstances, ownership structure and applicable UAE rules.
                  </p>
                </div>
              </div>
              <div className="pt-3 border-t border-border-subtle flex items-center justify-between text-[11px] text-text-muted font-mono">
                <span>Source: UAE Federal Tax Authority (FTA)</span>
                <span>Verified: 2026-09-01</span>
              </div>
            </div>

            {/* PILLAR 4: VALUE ADDED TAX (VAT 5%) */}
            <div className="p-6 sm:p-8 rounded-2xl border border-border bg-white space-y-4 flex flex-col justify-between">
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-mono uppercase font-bold text-accent">
                    04 • VALUE ADDED TAX
                  </span>
                  <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-emerald-50 text-emerald-800">
                    DECREE-LAW 8/2017
                  </span>
                </div>
                <h3 className="text-xl font-bold text-text-primary">
                  Residential Exemption & Commercial 5% VAT
                </h3>
                <div className="space-y-2 text-xs text-text-secondary leading-relaxed">
                  <p>
                    <strong className="text-text-primary">Summary:</strong> Standard UAE VAT is 5%. First-time supply of residential buildings within 3 years of completion is zero-rated (0%). Subsequent residential sales and leases are exempt from VAT.
                  </p>
                  <p>
                    <strong className="text-text-primary">Who It Applies To:</strong> Buyers, sellers, landlords, and commercial real estate operators.
                  </p>
                  <p>
                    <strong className="text-text-primary">Current Rule:</strong> Commercial real estate sales and leases are subject to 5% VAT. Brokerage and trustee services attract standard 5% VAT.
                  </p>
                </div>
              </div>
              <div className="pt-3 border-t border-border-subtle flex items-center justify-between text-[11px] text-text-muted font-mono">
                <span>Source: Federal Decree-Law No. 8 of 2017</span>
                <span>Verified: 2026-09-01</span>
              </div>
            </div>

            {/* PILLAR 5: CORPORATE TAX (9%) */}
            <div className="p-6 sm:p-8 rounded-2xl border border-border bg-white space-y-4 flex flex-col justify-between">
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-mono uppercase font-bold text-accent">
                    05 • CORPORATE TAX
                  </span>
                  <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-emerald-50 text-emerald-800">
                    DECREE-LAW 47/2022
                  </span>
                </div>
                <h3 className="text-xl font-bold text-text-primary">
                  Corporate Tax on Business Entities
                </h3>
                <div className="space-y-2 text-xs text-text-secondary leading-relaxed">
                  <p>
                    <strong className="text-text-primary">Summary:</strong> UAE Federal Corporate Tax applies at 9% on taxable business profits exceeding AED 375,000 (0% on profits up to AED 375,000).
                  </p>
                  <p>
                    <strong className="text-text-primary">Who It Applies To:</strong> Incorporated legal entities, commercial real estate businesses, and holding companies.
                  </p>
                  <p>
                    <strong className="text-text-primary">Current Rule:</strong> Direct personal real estate investments held by individual natural persons in a personal capacity are outside Business Activity under Cabinet Decision No. 49 of 2023. Corporate structures, commercial businesses, and licensed entities remain subject to corporate tax rules.
                  </p>
                </div>
              </div>
              <div className="pt-3 border-t border-border-subtle flex items-center justify-between text-[11px] text-text-muted font-mono">
                <span>Source: Federal Decree-Law No. 47 of 2022</span>
                <span>Verified: 2026-09-01</span>
              </div>
            </div>

            {/* PILLAR 6: STATUTORY PROPERTY FEES */}
            <div className="p-6 sm:p-8 rounded-2xl border border-border bg-white space-y-4 flex flex-col justify-between">
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-mono uppercase font-bold text-accent">
                    06 • STATUTORY FEES
                  </span>
                  <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-emerald-50 text-emerald-800">
                    DLD TARIFF REGISTRY
                  </span>
                </div>
                <h3 className="text-xl font-bold text-text-primary">
                  DLD Conveyance & Administrative Tariffs
                </h3>
                <div className="space-y-2 text-xs text-text-secondary leading-relaxed">
                  <p>
                    <strong className="text-text-primary">Summary:</strong> DLD Property Sale Registration transfer fee is 4% (2% buyer + 2% seller per official DLD portal; contractually allocated in Form F).
                  </p>
                  <p>
                    <strong className="text-text-primary">Itemized Tariffs:</strong> AED 250 title deed certificate issuance, AED 250 villa/apt map fee (or AED 225 Dubai Municipality map / AED 100 land outside DM), AED 10 knowledge fee, AED 10 innovation fee.
                  </p>
                  <p>
                    <strong className="text-text-primary">Registration Trustee:</strong> AED 4,000 + 5% VAT (properties ≥ AED 500,000) or AED 2,000 + 5% VAT (properties &lt; AED 500,000).
                  </p>
                </div>
              </div>
              <div className="pt-3 border-t border-border-subtle flex items-center justify-between text-[11px] text-text-muted font-mono">
                <span>Source: DLD Property Sale Registration Service</span>
                <span>Verified: 2026-09-01</span>
              </div>
            </div>
          </div>
        </div>

        {/* 5. LEGAL DISCLAIMER DRAWER */}
        <div className="p-6 rounded-2xl border border-border bg-surface text-xs text-text-secondary space-y-2">
          <div className="flex items-center gap-2 font-bold text-text-primary">
            <Scale className="h-4 w-4 text-accent" />
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
