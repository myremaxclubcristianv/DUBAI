'use client'

import * as React from 'react'
import Link from 'next/link'
import { PageIntro } from '@/components/layout/layout-primitives'
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
    title: 'Concerning Escrow Accounts for Real Estate Development in the Emirate of Dubai',
    authority: 'Real Estate Regulatory Agency (RERA)',
    year: '2007',
    category: 'REAL_ESTATE',
    summary: 'Mandates that all funds collected from off-plan purchasers must be deposited directly into a project-specific escrow account at an accredited financial institution.',
    coreProvisions: [
      'Prohibits developers from selling off-plan units or accepting funds prior to project registration and escrow account activation.',
      'Requires independent engineering audit certificates from project consultants before funds are disbursed at statutory construction milestones.',
      'Mandates a statutory 5% retention held in escrow for one year post-handover to cover structural defect liabilities.'
    ],
    officialGazetteRef: 'Dubai Official Gazette No. 321 (2007)',
    officialPortalUrl: 'https://dubailand.gov.ae'
  },
  {
    id: 'law-13-2008',
    lawNumber: 'Dubai Law No. 13 of 2008 (Amended by Law 9/2009)',
    title: 'Regulating the Interim Real Estate Register in the Emirate of Dubai',
    authority: 'Dubai Land Department (DLD)',
    year: '2008',
    category: 'REAL_ESTATE',
    summary: 'Establishes the Oqood (Interim Property Register) framework protecting purchaser rights during off-plan construction phases prior to completion.',
    coreProvisions: [
      'Renders any off-plan contract null and void if not registered on the DLD Interim Register within statutory deadlines.',
      'Codifies strict statutory notice and cure period procedures (Article 11) for off-plan contract termination and cancellation.',
      'Regulates allowable developer deduction scales strictly tied to verified construction completion percentages.'
    ],
    officialGazetteRef: 'Dubai Official Gazette No. 334 (2008)',
    officialPortalUrl: 'https://dubailand.gov.ae'
  },
  {
    id: 'cabinet-65-2022',
    lawNumber: 'UAE Cabinet Resolution No. 65 of 2022',
    title: 'Executive Regulations of Federal Decree-Law No. 29 of 2021 Regarding Foreigners Entry and Residence',
    authority: 'Federal Authority for Identity, Citizenship, Customs & Port Security (ICP / GDRFA)',
    year: '2022',
    category: 'IMMIGRATION',
    summary: 'Enacts the enhanced 10-Year UAE Golden Visa framework for real estate investors acquiring properties valued at AED 2,000,000 or greater.',
    coreProvisions: [
      'Eliminates the mandatory 6-month stay rule, allowing investors to remain outside the UAE indefinitely without invalidating residency status.',
      'Permits Golden Visa eligibility for completed and off-plan properties purchased from approved master developers.',
      'Allows mortgaged properties from accredited UAE local banks, provided net equity meets or exceeds statutory thresholds.',
      'Grants 100% self-sponsored renewable residency covering spouse, children of all ages, and domestic personnel.'
    ],
    officialGazetteRef: 'Federal Official Gazette No. 726 (2022)',
    officialPortalUrl: 'https://icp.gov.ae'
  },
  {
    id: 'decree-47-2022',
    lawNumber: 'Federal Decree-Law No. 47 of 2022',
    title: 'Taxation of Corporations and Businesses in the United Arab Emirates',
    authority: 'Federal Tax Authority (FTA) / Ministry of Finance',
    year: '2022',
    category: 'TAX_CORPORATE',
    summary: 'Introduces the UAE federal 9% corporate tax regime while expressly exempting qualifying natural person real estate investment income and capital appreciation.',
    coreProvisions: [
      'Cabinet Decision No. 49 of 2023 explicitly excludes real estate activities conducted by natural persons in their personal capacity from Corporate Tax.',
      'Maintains zero personal income tax, zero inheritance tax, zero wealth tax, and zero municipal property taxes for individual homeowners.',
      'Sets a 0% tax bracket on qualifying taxable profits up to AED 375,000 for standard corporate entities, and 9% on taxable net profits exceeding AED 375,000.'
    ],
    officialGazetteRef: 'Federal Official Gazette No. 737 (2022)',
    officialPortalUrl: 'https://tax.gov.ae'
  },
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
    <div className="bg-[#08080a] text-[#f5f5f7] min-h-screen pb-28 selection:bg-[#c9a962]/20 selection:text-[#f5f5f7]">
      {/* 1. EDITORIAL PAGE INTRO */}
      <PageIntro
        eyebrow="Statutory Law & Regulatory Gazette Directory"
        badge={<SourceBadge status="OFFICIAL SOURCE" sourceName="UAE Official Gazettes & Government Laws" />}
        title={<>Statutory Register<span className="text-[#c9a962]">.</span></>}
        description="Comprehensive compendium of official Dubai and UAE statutory laws, executive council resolutions, ministerial decrees, and regulatory fee structures governing real estate title, escrow, and residency."
      />

      <main className="w-full max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-16 pt-10 space-y-16">
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
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 p-4 rounded-xs bg-[#111116] border border-white/[0.08]">
            {/* Search Input */}
            <div className="relative flex-1">
              <Search className="h-4 w-4 text-[#71717a] absolute left-4 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search by law number, title, or authority..."
                className="w-full pl-11 pr-4 py-2.5 rounded-xs bg-black/40 border border-white/10 text-xs text-[#f5f5f7] placeholder-[#71717a] focus:outline-none focus:border-[#c9a962]"
              />
            </div>

            {/* Category Filter Pills */}
            <div className="flex flex-wrap items-center gap-1.5 shrink-0">
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
                  className={`px-3 py-1.5 rounded-xs text-xs font-mono uppercase tracking-wider transition-all cursor-pointer ${
                    selectedCategory === tab.id
                      ? 'bg-[#c9a962] text-[#08080a] font-semibold'
                      : 'bg-black/30 border border-white/10 text-[#a1a1aa] hover:text-[#f5f5f7] hover:border-white/20'
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
              className="p-6 sm:p-8 rounded-xs bg-[#111116] border border-white/[0.08] hover:border-[#c9a962]/40 transition-all space-y-6 group"
            >
              <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 border-b border-white/[0.06] pb-6">
                <div className="space-y-1">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-xs font-mono font-medium text-[#c9a962] uppercase tracking-wider">
                      {law.lawNumber}
                    </span>
                    <span className="text-[10px] font-mono px-2.5 py-0.5 rounded-xs bg-white/5 border border-white/10 text-[#71717a]">
                      {law.year}
                    </span>
                  </div>
                  <h3 className="text-xl sm:text-2xl font-light text-[#f5f5f7] tracking-tight group-hover:text-[#c9a962] transition-colors">
                    {law.title}
                  </h3>
                  <div className="text-xs font-mono text-[#71717a] pt-1">
                    Authority: <strong className="text-[#f5f5f7] font-medium">{law.authority}</strong>
                  </div>
                </div>

                <div className="shrink-0 flex items-center gap-3">
                  <span className="text-[10px] font-mono px-3 py-1 rounded-xs bg-[#c9a962]/10 border border-[#c9a962]/30 text-[#c9a962]">
                    {law.officialGazetteRef}
                  </span>
                </div>
              </div>

              <p className="text-xs sm:text-sm text-[#a1a1aa] font-light leading-relaxed max-w-4xl">
                {law.summary}
              </p>

              {/* Core Provisions */}
              <div className="p-5 rounded-xs bg-black/40 border border-white/[0.06] space-y-3">
                <span className="text-[10px] font-mono uppercase tracking-wider text-[#c9a962] block">
                  Core Statutory Provisions
                </span>
                <ul className="space-y-2 text-xs text-[#a1a1aa] font-light">
                  {law.coreProvisions.map((prov, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className="text-[#c9a962] font-mono mt-0.5">›</span>
                      <span>{prov}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {law.officialPortalUrl && (
                <div className="pt-2 flex items-center justify-between text-[11px] font-mono text-[#71717a]">
                  <span>Official Legal Verification: Active Gazette</span>
                  <a
                    href={law.officialPortalUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-[#c9a962] hover:underline"
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
        <div className="p-8 sm:p-10 rounded-xs border border-white/[0.08] bg-[#111116] flex flex-col sm:flex-row sm:items-center justify-between gap-6">
          <div className="space-y-2 max-w-xl">
            <h3 className="text-xl font-light text-[#f5f5f7] tracking-tight">
              Need statutory due diligence on a specific transaction?
            </h3>
            <p className="text-xs sm:text-sm text-[#a1a1aa] font-light leading-relaxed">
              Cristian Văduva Private Client Advisory coordinates title deed searches, escrow status verification, and conveyancing with DLD Registration Trustees.
            </p>
          </div>
          <Link
            href="/private-client"
            className="px-6 py-3.5 rounded-xs bg-[#c9a962] text-[#08080a] hover:bg-[#dbbe7a] text-xs font-mono uppercase tracking-wider font-semibold transition-all flex items-center gap-2 shrink-0 cursor-pointer"
          >
            <span>Access Advisory Desk</span>
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </main>
    </div>
  )
}
