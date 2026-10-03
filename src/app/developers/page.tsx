'use client'

import * as React from 'react'
import Link from 'next/link'
import { VERIFIED_DEVELOPERS } from '@/lib/data/developers'
import {
  Eyebrow,
  SourceBadge,
} from '@/components/layout/layout-primitives'
import { Search, ShieldCheck, ArrowUpRight } from 'lucide-react'

export default function DevelopersPage() {
  const [searchQuery, setSearchQuery] = React.useState('')

  const filteredDevelopers = React.useMemo(() => {
    if (!searchQuery) return VERIFIED_DEVELOPERS
    const q = searchQuery.toLowerCase().trim()
    return VERIFIED_DEVELOPERS.filter(
      (d) =>
        d.name.toLowerCase().includes(q) ||
        (d.headquarters || '').toLowerCase().includes(q) ||
        (d.notable_communities || []).some((p) => p.toLowerCase().includes(q))
    )
  }, [searchQuery])

  return (
    <div className="flex flex-col min-h-screen bg-[#ffffff] text-[#111111]">
      
      {/* 1. EDITORIAL HEADER */}
      <section className="pt-20 pb-16 sm:pt-28 sm:pb-24 border-b border-[#e5e5ea] bg-[#fafaf8]">
        <div className="w-full max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-16 space-y-6">
          <Eyebrow>MASTER DEVELOPERS &bull; STATUTORY REGISTER</Eyebrow>
          
          <div className="max-w-3xl space-y-4">
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-light tracking-[-0.035em] text-[#111111]">
              DEVELOPERS
            </h1>
            <p className="text-lg sm:text-xl text-[#6b6b6b] font-light leading-relaxed">
              Verified master developer registry licensed under the Dubai Land Department and governed by Law No. 8 of 2007 (Escrow Trust Regulations).
            </p>
          </div>
        </div>
      </section>

      {/* 2. RESTRAINED SEARCH BAR */}
      <section className="sticky top-[80px] sm:top-[84px] z-30 bg-[#ffffff]/95 backdrop-blur-md border-b border-[#e5e5ea] py-4 px-6 sm:px-10 lg:px-16">
        <div className="w-full max-w-[1440px] mx-auto flex items-center justify-between gap-4">
          <div className="relative w-full sm:w-80">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 h-3.5 w-3.5 text-[#8e8e93]" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search master developer or project..."
              className="w-full pl-9 pr-4 py-2.5 bg-[#ffffff] rounded-full border border-[#e5e5ea] text-xs text-[#111111] placeholder:text-stone-400 focus:outline-none focus:border-[#9f8144] transition-colors"
            />
          </div>

          <div className="text-xs font-mono text-[#8e8e93] hidden sm:block">
            {filteredDevelopers.length} Verified Master Developers
          </div>
        </div>
      </section>

      {/* 3. VERTICAL DIRECTORY (Clean Rows) */}
      <main className="w-full max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-16 py-16 sm:py-24 space-y-16 flex-1">
        
        <div className="divide-y divide-[#e5e5ea] border-t border-b border-[#e5e5ea]">
          {filteredDevelopers.map((dev) => (
            <div
              key={dev.id}
              className="group py-8 sm:py-10 grid grid-cols-1 md:grid-cols-12 gap-6 items-center hover:bg-[#fafaf8]/50 transition-colors"
            >
              {/* Left 4 cols: Name & Established */}
              <div className="md:col-span-4 space-y-1">
                <span className="text-[10px] font-mono text-[#8e8e93] uppercase tracking-wider block">
                  Est. {dev.founded_year || 'Verified'} &bull; {dev.headquarters || 'Dubai, UAE'}
                </span>
                <Link href={`/developers/${dev.slug}`} className="text-2xl sm:text-3xl font-light text-[#111111] group-hover:text-[#9f8144] transition-colors block">
                  {dev.name}
                </Link>
              </div>

              {/* Center 3 cols: Source / Status */}
              <div className="md:col-span-3">
                <SourceBadge sourceClass="OFFICIAL CORPORATE" sourceName="DLD Registered Developer" />
              </div>

              {/* Right-center 4 cols: Selected Projects */}
              <div className="md:col-span-4 text-xs font-light text-[#484848] space-y-1">
                <span className="text-[10px] font-mono uppercase text-[#8e8e93] block">Key Developments:</span>
                <p className="line-clamp-2">
                  {(dev.notable_communities || []).join(', ') || 'Major Prime Enclaves'}
                </p>
              </div>

              {/* Right 1 col: Open Action */}
              <div className="md:col-span-1 flex justify-end">
                <Link
                  href={`/developers/${dev.slug}`}
                  className="p-3 rounded-full border border-[#e5e5ea] group-hover:border-[#111111] group-hover:bg-[#ffffff] transition-all"
                  aria-label={`Open ${dev.name} Dossier`}
                >
                  <ArrowUpRight className="h-4 w-4 text-[#8e8e93] group-hover:text-[#111111]" />
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Escrow Legal Footnote */}
        <div className="p-8 rounded-2xl bg-[#fafaf8] border border-[#e5e5ea] space-y-3">
          <div className="flex items-center gap-2">
            <ShieldCheck className="h-4 w-4 text-[#9f8144]" />
            <span className="text-xs font-mono uppercase tracking-wider text-[#111111] font-semibold">
              Statutory Escrow Guarantee (Law No. 8 of 2007)
            </span>
          </div>
          <p className="text-xs text-[#6b6b6b] leading-relaxed">
            All listed developers are subject to the Dubai Real Estate Regulatory Authority (RERA) escrow regime. Project accounts are ring-fenced at certified custodian banks and payments are audited against physical construction milestones.
          </p>
        </div>

      </main>

    </div>
  )
}