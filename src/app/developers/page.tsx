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
    <div className="flex flex-col min-h-screen bg-[#08080a] text-[#f5f5f7]">
      
      {/* 1. EDITORIAL HEADER */}
      <section className="pt-16 pb-14 sm:pt-24 sm:pb-20 border-b border-white/10 bg-[#0d0d11]">
        <div className="w-full max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-16 space-y-6">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#c9a962]" />
            <Eyebrow>MASTER DEVELOPERS &bull; STATUTORY REGISTER LAW 8 (2007)</Eyebrow>
          </div>
          
          <div className="max-w-3xl space-y-4">
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-light tracking-[-0.035em] text-[#f5f5f7]">
              DEVELOPERS
            </h1>
            <p className="text-base sm:text-lg text-[#a1a1aa] font-light leading-relaxed">
              Verified master developer registry licensed under the Dubai Land Department and governed by Law No. 8 of 2007 (Escrow Trust Regulations).
            </p>
          </div>
        </div>
      </section>

      {/* 2. RESTRAINED SEARCH BAR */}
      <section className="sticky top-[72px] sm:top-[80px] z-30 bg-[#08080a]/95 backdrop-blur-md border-b border-white/10 py-3.5 px-6 sm:px-10 lg:px-16">
        <div className="w-full max-w-[1440px] mx-auto flex items-center justify-between gap-4">
          <div className="relative w-full sm:w-80">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 h-3.5 w-3.5 text-[#c9a962]" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search master developer or project..."
              className="w-full pl-9 pr-4 py-2 bg-[#131318] rounded-xs border border-white/10 text-xs text-[#f5f5f7] placeholder:text-[#636366] focus:outline-none focus:border-[#c9a962] transition-colors font-mono"
            />
          </div>

          <div className="text-xs font-mono text-[#8e8e93] hidden sm:block">
            <span className="text-[#c9a962] font-semibold">{filteredDevelopers.length}</span> Verified Master Developers
          </div>
        </div>
      </section>

      {/* 3. VERTICAL DIRECTORY */}
      <main className="w-full max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-16 py-14 sm:py-20 space-y-14 flex-1">
        
        <div className="divide-y divide-white/10 border-t border-b border-white/10">
          {filteredDevelopers.map((dev) => (
            <div
              key={dev.id}
              className="group py-6 sm:py-8 grid grid-cols-1 md:grid-cols-12 gap-6 items-center hover:bg-white/[0.02] px-4 -mx-4 transition-colors rounded-xs"
            >
              {/* Left 4 cols: Name & Established */}
              <div className="md:col-span-4 space-y-1">
                <span className="text-[10px] font-mono text-[#71717a] uppercase tracking-wider block">
                  Est. {dev.founded_year || 'Verified'} &bull; {dev.headquarters || 'Dubai, UAE'}
                </span>
                <Link href={`/developers/${dev.slug}`} className="text-xl sm:text-2xl font-light text-[#f5f5f7] group-hover:text-[#c9a962] transition-colors block">
                  {dev.name}
                </Link>
              </div>

              {/* Center 3 cols: Source / Status */}
              <div className="md:col-span-3">
                <SourceBadge sourceClass="OFFICIAL CORPORATE" sourceName="DLD Registered Developer" />
              </div>

              {/* Right-center 4 cols: Selected Projects */}
              <div className="md:col-span-4 text-xs font-light text-[#a1a1aa] space-y-1">
                <span className="text-[10px] font-mono uppercase text-[#71717a] block">Key Developments:</span>
                <p className="line-clamp-2">
                  {(dev.notable_communities || []).join(', ') || 'Major Prime Enclaves'}
                </p>
              </div>

              {/* Right 1 col: Open Action */}
              <div className="md:col-span-1 flex justify-end">
                <Link
                  href={`/developers/${dev.slug}`}
                  className="p-2.5 rounded-xs border border-white/10 group-hover:border-[#c9a962] group-hover:bg-[#c9a962]/10 transition-all"
                  aria-label={`Open ${dev.name} Dossier`}
                >
                  <ArrowUpRight className="h-4 w-4 text-[#71717a] group-hover:text-[#c9a962]" />
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Escrow Legal Footnote */}
        <div className="p-6 sm:p-8 rounded-sm bg-[#111116] border border-white/10 space-y-3">
          <div className="flex items-center gap-2">
            <ShieldCheck className="h-4 w-4 text-[#c9a962]" />
            <span className="text-xs font-mono uppercase tracking-wider text-[#f5f5f7] font-semibold">
              Statutory Escrow Guarantee (Law No. 8 of 2007)
            </span>
          </div>
          <p className="text-xs text-[#a1a1aa] leading-relaxed font-light">
            All listed developers are subject to the Dubai Real Estate Regulatory Authority (RERA) escrow regime. Project accounts are ring-fenced at certified custodian banks and payments are audited against physical construction milestones.
          </p>
        </div>

      </main>

    </div>
  )
}