'use client'

import * as React from 'react'
import Link from 'next/link'
import { PageIntro, SectionHeader } from '@/components/layout/layout-primitives'
import { SourceBadge } from '@/components/ui/source-badge'
import { CadranQuadrant } from '@/components/ui/luxury-cadran'
import {
  ExternalLink,
  Search,
  ArrowRight,
} from 'lucide-react'

interface StatutoryLaw {
  id: string
  lawNumber: string
  title: string
  authority: string
  year: string
  category: 'REAL_ESTATE' | 'IMMIGRATION' | 'TAX_CORPORATE' | 'BANKING_FINANCE'
  summary: string
  coreProvisions: string[]
  officialGazetteRef: string
  officialPortalUrl?: string
}

const STATUTORY_LAWS: StatutoryLaw[] = [
  {
    id: 'law-7-2006',
    lawNumber: 'Dubai Law No. 7 of 2006',
    title: 'Concerning Real Property Registration in the Emirate of Dubai',
    authority: 'Dubai Land Department (DLD)',
    year: '2006',
    category: 'REAL_ESTATE',
    summary: 'The foundational legal cornerstone establishing the centralized DLD electronic real property register and the absolute legal title protection of freehold property rights.',
    coreProvisions: [
      'Grants absolute ownership rights (Freehold) in designated areas determined by the Ruler.',
      'Mandates that all property transfers, mortgages, and encumbrances must be registered on the DLD Land Ledger to possess legal effect.',
      'Establishes the electronic Title Deed (E-Certificate) as the sole conclusive evidence of ownership.'
    ],
    officialGazetteRef: 'Dubai Official Gazette No. 313 (2006)',
    officialPortalUrl: 'https://dubailand.gov.ae'
  },
  {
    id: 'reg-3-2006',
    lawNumber: 'Regulation No. 3 of 2006',
    title: 'Determining Areas in Which Non-UAE Nationals May Own Real Property',
    authority: 'Ruler of Dubai / DLD',
    year: '2006',
    category: 'REAL_ESTATE',
    summary: 'Specifies the geographical designated freehold zones across Dubai where foreign individuals and offshore entities are permitted to acquire freehold title in perpetuity.',
    coreProvisions: [
      'Designates 68+ premier freehold areas including Palm Jumeirah, Downtown Dubai, Dubai Marina, DIFC, and Emirates Hills.',
      'Provides foreign nationals the right to acquire title in perpetuity (Absolute Freehold) or long-term leasehold up to 99 years.',
      'Permits 100% foreign natural person ownership without requiring local UAE national sponsorship.'
    ],
    officialGazetteRef: 'Dubai Executive Council Regulation No. 3/2006',
    officialPortalUrl: 'https://dubailand.gov.ae'
  },
  {
    id: 'law-8-2007',
    lawNumber: 'Dubai Law No. 8 of 2007',
    title: 'Concerning Escrow Accounts for Real Estate Development in Dubai',
    authority: 'Real Estate Regulatory Agency (RERA) / DLD',
    year: '2007',
    category: 'REAL_ESTATE',
    summary: 'Mandates strict escrow banking mechanisms for all off-plan development projects, protecting purchaser capital from developer diversion.',
    coreProvisions: [
      'Requires every developer to open a dedicated DLD-approved Escrow Account with an accredited UAE bank before selling off-plan units.',
      'Funds deposited by purchasers can only be disbursed to the developer upon certified completion of construction milestones audited by DLD engineers.',
      'Retains 5% of total project value in escrow for one year post-handover to cover warranty defect liabilities.'
    ],
    officialGazetteRef: 'Dubai Official Gazette No. 322 (2007)',
    officialPortalUrl: 'https://dubailand.gov.ae'
  },
  {
    id: 'res-30-2013',
    lawNumber: 'Executive Council Resolution No. 30 of 2013',
    title: 'Approving the Fees of the Land Department',
    authority: 'Dubai Executive Council',
    year: '2013',
    category: 'REAL_ESTATE',
    summary: 'Establishes the statutory fee schedule for all real estate transactions, conveyancing procedures, and title deed issuances across Dubai.',
    coreProvisions: [
      'Fixes the combined DLD property transfer fee at 4.0% of the sale purchase price.',
      'Allocates the standard statutory breakdown as 2.0% payable by the buyer and 2.0% payable by the seller (unless contractually agreed otherwise).',
      'Prescribes DLD Registration Trustee fees at AED 4,000 (+5% VAT) for properties ≥ AED 500,000 and AED 2,000 (+5% VAT) for properties < AED 500,000.'
    ],
    officialGazetteRef: 'Dubai Official Gazette No. 385 (2013)',
    officialPortalUrl: 'https://dubailand.gov.ae'
  },
  {
    id: 'cabinet-65-2022',
    lawNumber: 'Cabinet Resolution No. 65 of 2022',
    title: 'Executive Regulations of Federal Decree-Law on Entry and Residence of Foreigners',
    authority: 'UAE Federal Cabinet / ICP / GDRFA',
    year: '2022',
    category: 'IMMIGRATION',
    summary: 'Defines the modern statutory framework for the 10-Year Real Estate Investor Golden Residency Visa and family sponsorship privileges.',
    coreProvisions: [
      'Establishes the minimum qualifying property threshold at AED 2,000,000 in freehold real estate value.',
      'Permits the qualification threshold to be satisfied through single or multiple aggregated properties.',
      'Grants Golden Visa holders total exemption from the 6-month stay requirement, allowing continuous stay outside the UAE without status invalidation.',
      'Authorizes unlimited sponsorship of spouse, unmarried sons up to age 25, unmarried daughters of any age, and domestic staff.'
    ],
    officialGazetteRef: 'UAE Federal Official Gazette Issue 738 (2022)',
    officialPortalUrl: 'https://u.ae/en/information-and-services/visa-and-emirates-id/residence-visas/golden-visa'
  },
  {
    id: 'decree-47-2022',
    lawNumber: 'Federal Decree-Law No. 47 of 2022',
    title: 'On the Taxation of Corporations and Businesses',
    authority: 'UAE Ministry of Finance / Federal Tax Authority (FTA)',
    year: '2022',
    category: 'TAX_CORPORATE',
    summary: 'Introduces the 9% corporate tax regime while preserving zero personal income tax and capital gains exemption for natural person investors.',
    coreProvisions: [
      'Establishes a 0% corporate tax rate on taxable corporate profits up to AED 375,000 and 9% on taxable profits exceeding AED 375,000.',
      'Exempts natural persons from corporate tax on qualifying individual investment income, personal real estate yields, and dividend distributions.',
      'Maintains 0% personal income tax and 0% capital gains tax on individual property disposals under Cabinet Decision No. 49 of 2023.'
    ],
    officialGazetteRef: 'UAE Federal Gazette Issue 741 (2022)',
    officialPortalUrl: 'https://tax.gov.ae'
  },
  {
    id: 'decree-43-2013',
    lawNumber: 'Decree No. 43 of 2013',
    title: 'Determining the Rent Increase for Real Property in Dubai',
    authority: 'RERA / Dubai Land Department',
    year: '2013',
    category: 'REAL_ESTATE',
    summary: 'Sets the statutory rent increase formula and maximum legal caps based on the official RERA Rental Index benchmark.',
    coreProvisions: [
      '0% increase permitted if current rent is within 10% below average market rent.',
      'Maximum 5% increase if current rent is 11% to 20% below average market rent.',
      'Maximum 10% increase if current rent is 21% to 30% below average market rent.',
      'Maximum 15% increase if current rent is 31% to 40% below average market rent.',
      'Maximum 20% increase if current rent is more than 40% below average market rent.'
    ],
    officialGazetteRef: 'Dubai Official Gazette No. 388 (2013)',
    officialPortalUrl: 'https://dubailand.gov.ae'
  },
  {
    id: 'law-85-2006',
    lawNumber: 'Dubai Law No. 85 of 2006',
    title: 'Regulating the Real Estate Broker Register in the Emirate of Dubai',
    authority: 'RERA / DLD',
    year: '2006',
    category: 'REAL_ESTATE',
    summary: 'Governs real estate brokerage practice, professional certification, unified contract templates, and commission rules.',
    coreProvisions: [
      'Requires all practicing brokers to be certified by RERA and hold active broker registration cards.',
      'Mandates unified standardized contracts: Form A (Seller Agreement), Form B (Buyer Agreement), and Form F (Unified MOU Sale Contract).',
      'Regulates standard 2% brokerage commission split and enforces strict fiduciary obligations against misrepresentation.'
    ],
    officialGazetteRef: 'Dubai Official Gazette No. 316 (2006)',
    officialPortalUrl: 'https://dubailand.gov.ae'
  },
  {
    id: 'cbuae-mortgage',
    lawNumber: 'CBUAE Mortgage Regulations Notice No. 3871/2019',
    title: 'Regulations on Mortgage Loans for Retail Customers',
    authority: 'Central Bank of the UAE (CBUAE)',
    year: '2019',
    category: 'BANKING_FINANCE',
    summary: 'Establishes statutory loan-to-value (LTV) ceilings, debt-burden ratios, and stress-test underwriting standards for UAE banking institutions.',
    coreProvisions: [
      'Maximum 80% LTV for expatriates on first residential property ≤ AED 5,000,000.',
      'Maximum 70% LTV for expatriates on residential properties > AED 5,000,000.',
      'Maximum 60% LTV for second and subsequent investment properties.',
      'Maximum 50% Debt Burden Ratio (DBR) across all monthly liabilities and maximum 25-year mortgage tenure.'
    ],
    officialGazetteRef: 'Central Bank of the UAE Regulatory Gazette',
    officialPortalUrl: 'https://centralbank.ae'
  }
]

export default function RegulatoryPage() {
  const [selectedCategory, setSelectedCategory] = React.useState<string>('ALL')
  const [searchQuery, setSearchQuery] = React.useState<string>('')

  const filteredLaws = STATUTORY_LAWS.filter((law) => {
    if (selectedCategory !== 'ALL' && law.category !== selectedCategory) return false
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase()
      return (
        law.lawNumber.toLowerCase().includes(q) ||
        law.title.toLowerCase().includes(q) ||
        law.authority.toLowerCase().includes(q) ||
        law.summary.toLowerCase().includes(q)
      )
    }
    return true
  })

  return (
    <div className="bg-white text-[#1d1d1f] min-h-screen pb-28 selection:bg-accent/20 selection:text-[#1d1d1f]">
      {/* 1. EDITORIAL PAGE INTRO */}
      <PageIntro
        eyebrow="Statutory Law & Regulatory Gazette Directory"
        badge={<SourceBadge status="OFFICIAL SOURCE" sourceName="UAE Official Gazettes & Government Laws" />}
        title={<>Statutory Register<span className="text-gradient-gold">.</span></>}
        description="Comprehensive compendium of official Dubai and UAE statutory laws, executive council resolutions, ministerial decrees, and regulatory fee structures governing real estate title, escrow, and residency."
      />

      <main className="w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 space-y-14">
        {/* 2. STATUTORY PILLARS QUADRANT */}
        <CadranQuadrant
          eyebrow="LEGAL SOVEREIGNTY ARCHITECTURE"
          title="Four Pillars of Dubai Real Estate Law"
          statutorySource="Dubai Land Department & UAE Ministry of Justice"
          quadrants={[
            {
              title: 'Perpetual Title Guarantee',
              value: 'LAW 7/2006',
              subtext: 'Centralized electronic land registry guaranteeing indefeasible legal title deeds backed by the Government of Dubai.',
              delta: 'PERPETUAL TITLE',
              isPositive: true,
              statutoryRef: 'Dubai Law No. 7 of 2006',
            },
            {
              title: '100% Escrow Protection',
              value: 'LAW 8/2007',
              subtext: 'Mandatory escrow banking accounts for off-plan developments with milestone-linked construction releases.',
              delta: 'FUNDS SECURED',
              isPositive: true,
              statutoryRef: 'Dubai Law No. 8 of 2007',
            },
            {
              title: 'Statutory 10-Yr Golden Visa',
              value: 'CABINET 65/2022',
              subtext: 'Federal residency framework granting long-term Golden Visas for property acquisitions ≥ AED 2,000,000.',
              delta: 'ZERO STAY RULE',
              isPositive: true,
              statutoryRef: 'Cabinet Res. No. 65 of 2022',
            },
            {
              title: 'Fiscal Neutrality & 0% Tax',
              value: 'DECISION 49/2023',
              subtext: 'Zero personal income tax and zero capital gains tax on qualifying individual real estate investments.',
              delta: '0% PERSONAL TAX',
              isPositive: true,
              statutoryRef: 'Cabinet Decision No. 49 of 2023',
            },
          ]}
        />

        {/* 3. SEARCH & CATEGORY FILTER PILLS */}
        <div className="space-y-6">
          <SectionHeader
            align="center"
            eyebrow="Statutory Gazette Register"
            title="Search the Legal Compendium"
            description="Filter official legal decrees by regulatory domain, gazette reference, or statutory authority."
          />

          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 p-4 rounded-3xl bg-[#f5f5f7] border border-black/5 shadow-sm">
            {/* Search Input */}
            <div className="relative flex-1">
              <Search className="h-4 w-4 text-[#6e6e73] absolute left-4 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search by law number, title, or authority..."
                className="w-full pl-11 pr-4 py-2.5 rounded-2xl bg-white border border-black/10 text-xs text-[#1d1d1f] placeholder-[#6e6e73] focus:outline-none focus:border-accent"
              />
            </div>

            {/* Category Filter Pills */}
            <div className="flex flex-wrap items-center gap-1.5 p-1 bg-white rounded-2xl border border-black/10 shrink-0">
              {[
                { id: 'ALL', label: 'All Laws' },
                { id: 'REAL_ESTATE', label: 'Real Estate' },
                { id: 'IMMIGRATION', label: 'Residency' },
                { id: 'TAX_CORPORATE', label: 'Tax & Fiscal' },
                { id: 'BANKING_FINANCE', label: 'Mortgage' },
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setSelectedCategory(tab.id)}
                  className={`px-3.5 py-1.5 rounded-full text-xs font-semibold transition-all cursor-pointer ${
                    selectedCategory === tab.id
                      ? 'bg-[#1d1d1f] text-white shadow-sm'
                      : 'text-[#6e6e73] hover:text-[#1d1d1f]'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* 4. STATUTORY LAWS DIRECTORY CARDS */}
        <div className="space-y-6">
          {filteredLaws.map((law) => (
            <div
              key={law.id}
              className="p-6 sm:p-8 rounded-3xl bg-white border border-black/10 hover:border-black/20 hover:shadow-xl transition-all space-y-6 shadow-sm"
            >
              <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 border-b border-black/10 pb-6">
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-mono font-bold text-accent uppercase tracking-wider">
                      {law.lawNumber}
                    </span>
                    <span className="text-[10px] font-mono px-2.5 py-0.5 rounded-full bg-[#f5f5f7] border border-black/5 text-[#6e6e73]">
                      {law.year}
                    </span>
                  </div>
                  <h3 className="text-xl sm:text-2xl font-extrabold text-[#1d1d1f] tracking-tight">
                    {law.title}
                  </h3>
                  <div className="text-xs font-mono text-[#6e6e73] pt-1">
                    Authority: <strong className="text-[#1d1d1f]">{law.authority}</strong>
                  </div>
                </div>

                <div className="shrink-0 flex items-center gap-3">
                  <span className="text-[10px] font-mono px-3 py-1 rounded-full bg-[#c9a962]/10 border border-[#c9a962]/30 text-accent font-semibold">
                    {law.officialGazetteRef}
                  </span>
                </div>
              </div>

              <p className="text-xs sm:text-sm text-[#6e6e73] leading-relaxed max-w-4xl">
                {law.summary}
              </p>

              {/* Core Provisions */}
              <div className="p-5 rounded-2xl bg-[#f5f5f7] border border-black/5 space-y-3">
                <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-accent font-semibold block">
                  Core Statutory Provisions
                </span>
                <ul className="space-y-2 text-xs text-[#1d1d1f]">
                  {law.coreProvisions.map((prov, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className="text-accent font-bold mt-0.5">›</span>
                      <span>{prov}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {law.officialPortalUrl && (
                <div className="pt-2 flex items-center justify-between text-[11px] font-mono text-[#6e6e73]">
                  <span>Official Legal Verification: Active Gazette</span>
                  <a
                    href={law.officialPortalUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-accent hover:underline font-semibold"
                  >
                    <span>Government Portal</span>
                    <ExternalLink className="h-3 w-3" />
                  </a>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* 5. PRIVATE CLIENT CTA */}
        <div className="p-8 sm:p-10 rounded-3xl border border-black/10 bg-[#f5f5f7] flex flex-col sm:flex-row sm:items-center justify-between gap-6 shadow-sm">
          <div className="space-y-2 max-w-xl">
            <h3 className="text-xl font-extrabold text-[#1d1d1f] tracking-tight">
              Need statutory due diligence on a specific transaction?
            </h3>
            <p className="text-xs sm:text-sm text-[#6e6e73] leading-relaxed">
              Cristian Văduva Private Client Advisory coordinates title deed searches, escrow status verification, and conveyancing with DLD Registration Trustees.
            </p>
          </div>
          <Link
            href="/private-client"
            className="px-6 py-3.5 rounded-full bg-[#1d1d1f] text-white hover:bg-black text-xs font-semibold transition-all flex items-center gap-2 shrink-0 cursor-pointer shadow-sm hover:shadow-md"
          >
            <span>Access Advisory Desk</span>
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </main>
    </div>
  )
}
