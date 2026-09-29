'use client'

import * as React from 'react'
import { VERIFIED_DEVELOPERS } from '@/lib/data/developers'
import { ProvenanceTag } from '@/components/layout/layout-primitives'
import {
  ExternalLink,
  ShieldCheck,
  Search,
} from 'lucide-react'

export default function DevelopersPage() {
  const [searchQuery, setSearchQuery] = React.useState('')

  const filteredDevelopers = React.useMemo(() => {
    if (!searchQuery) return VERIFIED_DEVELOPERS
    const q = searchQuery.toLowerCase().trim()
    return VERIFIED_DEVELOPERS.filter(
      (d) =>
        d.name.toLowerCase().includes(q) ||
        d.headquarters.toLowerCase().includes(q) ||
        d.notable_communities.some((c) => c.toLowerCase().includes(q))
    )
  }, [searchQuery])

  return (
    <div className="bg-[#ffffff] text-[#111111] min-h-screen pb-24">
      
      {/* 1. EDITORIAL HEADER */}
      <section className="pt-12 pb-12 sm:pt-16 sm:pb-16 border-b border-[#e5e5ea] bg-[#fafaf8]">
        <div className="w-full max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          <div className="flex items-center justify-between">
            <span className="text-[10px] font-mono font-bold uppercase tracking-[0.2em] text-[#9f8144]">
              OFFICIAL REGISTRY &bull; DLD REGISTERED DEVELOPERS
            </span>
            <ProvenanceTag sourceClass="OFFICIAL REGULATORY" sourceName="DLD Developer Register" />
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-[#111111]">
            Master Developer Registry
          </h1>
          
          <p className="text-sm sm:text-base text-[#484848] max-w-3xl leading-relaxed">
            Institutional master developers licensed by the Dubai Land Department (DLD) and regulated by RERA under Law No. 8 of 2007 (Escrow Accounts).
          </p>
        </div>
      </section>

      {/* 2. SEARCH & CONTROLS */}
      <section className="sticky top-16 z-30 bg-[#ffffff] border-b border-[#e5e5ea] py-3.5 px-4 sm:px-6 lg:px-8">
        <div className="w-full max-w-[1240px] mx-auto flex items-center justify-between gap-4">
          <div className="relative w-full sm:w-80">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-3.5 w-3.5 text-[#6b6b6b]" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search developer entity, community..."
              className="w-full pl-9 pr-3 py-1.5 bg-[#ffffff] rounded border border-[#e5e5ea] text-xs text-[#111111] placeholder:text-[#8e8e93] focus:outline-none focus:border-[#111111]"
            />
          </div>

          <div className="text-xs font-mono text-[#6b6b6b] hidden sm:block">
            {filteredDevelopers.length} Verified Master Developers
          </div>
        </div>
      </section>

      {/* 3. STRUCTURED DIRECTORY REGISTER TABLE */}
      <main className="w-full max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-10">
        
        <div className="border border-[#e5e5ea] rounded divide-y divide-[#e5e5ea] bg-[#ffffff]">
          {/* Header */}
          <div className="hidden md:grid grid-cols-12 gap-4 px-6 py-3.5 bg-[#fafaf8] text-[10px] font-mono text-[#6b6b6b] uppercase tracking-wider font-semibold">
            <div className="col-span-4">Developer Entity</div>
            <div className="col-span-2">DLD Registration</div>
            <div className="col-span-2">Founded / HQ</div>
            <div className="col-span-3">Key Master Developments</div>
            <div className="col-span-1 text-right">Official</div>
          </div>

          {/* Developer Rows */}
          {filteredDevelopers.map((dev) => (
            <div
              key={dev.id}
              className="grid grid-cols-1 md:grid-cols-12 gap-3 md:gap-4 p-5 md:px-6 md:py-5 items-start hover:bg-[#fafaf8] transition-colors"
            >
              <div className="col-span-1 md:col-span-4 space-y-1">
                <div className="text-base font-semibold text-[#111111]">
                  {dev.name}
                </div>
                {dev.arabic_name && (
                  <span className="text-xs text-[#6b6b6b] font-mono block">
                    {dev.arabic_name}
                  </span>
                )}
                <p className="text-xs text-[#484848] leading-relaxed pt-1 line-clamp-2">
                  {dev.portfolio_overview}
                </p>
              </div>

              <div className="col-span-1 md:col-span-2 text-xs font-mono text-[#484848] pt-1">
                <span className="md:hidden text-[#6b6b6b] text-[10px] mr-2">DLD REG:</span>
                <span className="px-2 py-0.5 rounded bg-[#fafaf8] border border-[#e5e5ea] font-semibold">
                  DLD No. {dev.dld_developer_number}
                </span>
              </div>

              <div className="col-span-1 md:col-span-2 text-xs font-mono text-[#484848] pt-1 space-y-0.5">
                <div>Founded: {dev.founded_year}</div>
                <div className="text-[11px] text-[#6b6b6b]">{dev.headquarters}</div>
              </div>

              <div className="col-span-1 md:col-span-3 text-xs text-[#484848] pt-1">
                <span className="md:hidden text-[#6b6b6b] font-mono text-[10px] mr-2">COMMUNITIES:</span>
                <div className="flex flex-wrap gap-1">
                  {dev.notable_communities.map((comm, cIdx) => (
                    <span
                      key={cIdx}
                      className="px-1.5 py-0.5 rounded bg-[#fafaf8] border border-[#e5e5ea] text-[10px] font-mono text-[#6b6b6b]"
                    >
                      {comm}
                    </span>
                  ))}
                </div>
              </div>

              <div className="col-span-1 md:col-span-1 flex md:justify-end pt-2 md:pt-1">
                {dev.official_website && (
                  <a
                    href={dev.official_website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs text-[#111111] hover:text-[#9f8144] inline-flex items-center gap-1 font-mono"
                    title="Visit Official Developer Portal"
                  >
                    <ExternalLink className="h-3.5 w-3.5" />
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Regulatory Governance Note */}
        <div className="p-5 rounded bg-[#fafaf8] border border-[#e5e5ea] space-y-2 text-xs text-[#484848] leading-relaxed">
          <div className="flex items-center gap-2 font-semibold text-[#111111]">
            <ShieldCheck className="h-4 w-4 text-[#9f8144]" />
            <span>Escrow &amp; Off-Plan Protection Notice</span>
          </div>
          <p>
            Under Dubai Law No. 8 of 2007, every licensed developer operating off-plan sales must maintain an audited project escrow account. Purchaser installment funds are ring-fenced and disbursed exclusively in alignment with certified construction progress audits verified by RERA engineering inspectors.
          </p>
        </div>

      </main>

    </div>
  )
}