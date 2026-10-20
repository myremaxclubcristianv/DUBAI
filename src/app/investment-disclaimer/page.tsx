import type { Metadata } from 'next'
import Link from 'next/link'
import { PageIntro, Eyebrow } from '@/components/layout/layout-primitives'
import { SourceBadge } from '@/components/ui/source-badge'
import {
  AlertTriangle,
  Scale,
  ShieldAlert,
  Building,
  DollarSign,
  FileText,
  ArrowRight,
  ExternalLink,
} from 'lucide-react'

export const metadata: Metadata = {
  title: 'Investment Disclaimer & Risk Disclosure',
  description:
    'Comprehensive statutory risk disclosure, independent platform status, and property investment disclaimers for the Dubai Real Estate Intelligence platform.',
  alternates: {
    canonical: 'https://dubai.cristianvaduva.com/investment-disclaimer',
  },
  openGraph: {
    title: 'Investment Disclaimer & Risk Disclosure | Dubai Platform',
    description:
      'Independent research notice, investment risk parameters, and statutory disclaimers governing Dubai real estate analysis.',
    url: 'https://dubai.cristianvaduva.com/investment-disclaimer',
  },
}

export default function InvestmentDisclaimerPage() {
  return (
    <div className="bg-white text-slate-900 min-h-screen pb-28">
      {/* 1. Page Intro */}
      <PageIntro
        eyebrow="Independent Platform Notice & Statutory Risk Parameters"
        badge={
          <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-xs text-[10px] font-mono tracking-wider uppercase border bg-amber-50 text-amber-900 border-amber-200 font-semibold">
            Statutory Legal Notice &bull; Risk Parameters
          </span>
        }
        title={
          <>
            Investment Disclaimer<span className="text-[#0284c7]">.</span>
          </>
        }
        description="Statutory disclosure regarding the independent status of this platform, investment risks inherent in UAE real estate, data provenance limitations, and the necessity of independent professional counsel."
      />

      <main className="w-full max-w-[1120px] mx-auto px-6 sm:px-10 lg:px-16 pt-10 space-y-12">
        {/* Core Independent Status Notice */}
        <div className="p-6 sm:p-8 border border-amber-200 bg-amber-50/50 rounded-xs space-y-4">
          <div className="flex items-center gap-2.5 text-amber-900 font-medium text-sm">
            <ShieldAlert className="h-5 w-5 text-amber-700 shrink-0" />
            <h2 className="font-semibold text-base">Independent Status Disclosure</h2>
          </div>
          <p className="text-xs sm:text-sm text-amber-950 font-light leading-relaxed">
            Dubai (dubai.cristianvaduva.com) is an independent real estate research and advisory platform. It is not affiliated with, endorsed by, sponsored by, or operated by the Dubai Land Department (DLD), the General Directorate of Residency and Foreigners Affairs (GDRFA), the Federal Tax Authority (FTA), the Dubai International Financial Centre (DIFC), the Real Estate Regulatory Agency (RERA), or any other UAE government ministry or authority mentioned on this website.
          </p>
          <p className="text-xs text-amber-900/80 leading-relaxed font-light">
            All government department names, legislative acts, and official references are cited solely for identification, educational, and legal reference purposes under public reporting standards.
          </p>
        </div>

        {/* Detailed Disclaimer Clauses */}
        <div className="space-y-6">
          <div className="space-y-2">
            <Eyebrow>RISK DISCLOSURES &amp; TERMS</Eyebrow>
            <h2 className="text-2xl sm:text-3xl font-light text-slate-950 font-serif">
              Comprehensive Investment &amp; Market Underwriting Disclaimers
            </h2>
          </div>

          <div className="space-y-5 text-xs text-slate-700 leading-relaxed font-light">
            {/* Clause 1 */}
            <div className="p-6 bg-white border border-slate-200 shadow-2xs space-y-2.5">
              <div className="flex items-center gap-2 text-slate-950 font-semibold text-sm">
                <FileText className="h-4 w-4 text-[#0284c7]" />
                <h3>1. General Educational &amp; Research Purposes</h3>
              </div>
              <p>
                All content, financial modeling calculators, district monographs, legislative summaries, historical price charts, and valuation matrices published on this website are provided strictly for general informational, educational, and preliminary research purposes. Nothing on this website constitutes, or is intended to constitute, financial advice, legal advice, tax advice, mortgage brokerage, or formal investment solicitation.
              </p>
            </div>

            {/* Clause 2 */}
            <div className="p-6 bg-white border border-slate-200 shadow-2xs space-y-2.5">
              <div className="flex items-center gap-2 text-slate-950 font-semibold text-sm">
                <AlertTriangle className="h-4 w-4 text-amber-600" />
                <h3>2. No Guarantee of Capital Appreciation, Rental Yields, or Liquidity</h3>
              </div>
              <p>
                Real estate investments are subject to market risks, economic fluctuations, and capital loss. This platform provides no guarantee, express or implied, regarding capital appreciation, future resale values, rental yields, achieved rental income, tenant occupancy rates, or secondary market liquidity. Historical transaction volumes, previous capital growth trends, and past rental performance do not guarantee or predict future investment results.
              </p>
            </div>

            {/* Clause 3 */}
            <div className="p-6 bg-white border border-slate-200 shadow-2xs space-y-2.5">
              <div className="flex items-center gap-2 text-slate-950 font-semibold text-sm">
                <Scale className="h-4 w-4 text-[#0284c7]" />
                <h3>3. Published Figures, Market Estimates, and Third-Party Data</h3>
              </div>
              <p>
                Published market indicators, rental indices, transaction medians, price per square foot figures, and financial projections are derived from official public records, third-party publications, and mathematical models. While reasonable efforts are made to reflect accurate data, information may be subject to delays, omissions, revisions by competent authorities, or differing calculation methodologies. Users must not rely on published estimates as definitive representations of current asset values.
              </p>
            </div>

            {/* Clause 4 */}
            <div className="p-6 bg-white border border-slate-200 shadow-2xs space-y-2.5">
              <div className="flex items-center gap-2 text-slate-950 font-semibold text-sm">
                <Building className="h-4 w-4 text-[#0284c7]" />
                <h3>4. Property Listings Supplied by Third Parties</h3>
              </div>
              <p>
                Property listings and opportunities displayed on this website may be supplied, marketed, or presented by independent local real estate agencies, licensed developers, private owners, or authorized local listing representatives. Unless explicitly documented, these parties are not employees, agents, representatives, or contractual partners of this platform. All listing information—including asking prices, unit availability, specifications, floor plans, photographs, service charges, completion dates, and contractual terms—must be verified directly with the responsible listing party and checked with official DLD registers before proceeding.
              </p>
            </div>

            {/* Clause 5 */}
            <div className="p-6 bg-white border border-slate-200 shadow-2xs space-y-2.5">
              <div className="flex items-center gap-2 text-slate-950 font-semibold text-sm">
                <DollarSign className="h-4 w-4 text-[#0284c7]" />
                <h3>5. Currency, Financing, Tax, and Transaction Costs</h3>
              </div>
              <p>
                Property investments in Dubai involve transaction expenses, including statutory DLD transfer tariffs (4%), registration trustee fees, developer administrative fees, title deed issuance costs, and ongoing master community service charges. Cross-border buyers are subject to foreign exchange rate fluctuations (where converting to or from non-pegged currencies), international wire fees, mortgage interest rate changes, and potential tax implications in their home jurisdictions.
              </p>
            </div>

            {/* Clause 6 */}
            <div className="p-6 bg-white border border-slate-200 shadow-2xs space-y-2.5">
              <div className="flex items-center gap-2 text-slate-950 font-semibold text-sm">
                <ShieldAlert className="h-4 w-4 text-rose-600" />
                <h3>6. No Brokerage Representation or Trustee Capacity</h3>
              </div>
              <p>
                This platform operates as an independent research and private advisory coordination service. It does not act as a licensed real estate brokerage, statutory title insurer, escrow agent, legal trustee, investment adviser, or portfolio investment fund manager. Any formal client engagement or brokerage representation requires a separate, expressly negotiated written agreement in accordance with applicable laws. This disclaimer does not attempt to exclude statutory liabilities that cannot be excluded under applicable UAE law.
              </p>
            </div>

            {/* Clause 7 */}
            <div className="p-6 bg-white border border-slate-200 shadow-2xs space-y-2.5">
              <div className="flex items-center gap-2 text-slate-950 font-semibold text-sm">
                <FileText className="h-4 w-4 text-[#0284c7]" />
                <h3>7. Independent Due Diligence Obligation</h3>
              </div>
              <p>
                Prior to entering into any legally binding reservation, Form F contract, Sales and Purchase Agreement (SPA), or escrow transfer, prospective buyers and investors must perform their own independent due diligence. Title deed authenticity, owner title status, RERA project registration, developer escrow account verification under Law No. 8 of 2007, and planning restrictions must be verified directly through official Dubai REST portals, licensed Registration Trustee offices, and competent local legal counsel.
              </p>
            </div>
          </div>
        </div>

        {/* Action Link to Terms and Sources */}
        <div className="p-6 bg-slate-50 border border-slate-200 flex flex-col sm:flex-row sm:items-center justify-between gap-4 font-mono text-xs">
          <div className="space-y-1">
            <span className="text-slate-900 font-bold uppercase tracking-wider block">
              Related Statutory Documents
            </span>
            <span className="text-slate-500 font-light">
              Review full platform terms and official data provenance registries.
            </span>
          </div>
          <div className="flex flex-wrap gap-4">
            <Link
              href="/terms"
              className="inline-flex items-center gap-1.5 text-[#0284c7] hover:underline font-semibold"
            >
              <span>Platform Terms</span>
              <ArrowRight className="h-3 w-3" />
            </Link>
            <Link
              href="/sources"
              className="inline-flex items-center gap-1.5 text-[#0284c7] hover:underline font-semibold"
            >
              <span>Sources &amp; Provenance</span>
              <ArrowRight className="h-3 w-3" />
            </Link>
          </div>
        </div>
      </main>
    </div>
  )
}
