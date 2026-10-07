'use client'

import * as React from 'react'
import Link from 'next/link'
import { VERIFIED_DEVELOPERS } from '@/lib/data/developers'
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
    <div className="flex flex-col min-h-screen bg-white text-slate-950 selection:bg-slate-900 selection:text-white">
      
      {/* 1. EDITORIAL HEADER */}
      <section className="pt-16 pb-14 sm:pt-24 sm:pb-20 border-b border-slate-200 bg-white relative">
        <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-10 lg:px-16 space-y-6">
          
          <div className="flex flex-wrap items-center justify-between gap-4 font-mono text-xs">
            <div className="flex items-center gap-2">
              <span className="text-[10px] tracking-[0.24em] uppercase text-slate-500 font-semibold">
                MASTER DEVELOPERS &bull; STATUTORY REGISTER LAW 8 (2007)
              </span>
            </div>
            <div className="flex items-center gap-3 text-[11px] text-slate-500">
              <span className="text-emerald-800 font-semibold flex items-center gap-1">
                <ShieldCheck className="h-3.5 w-3.5 text-emerald-700" />
                DLD Escrow Regulated
              </span>
              <span>&bull;</span>
              <span>100% Ring-Fenced Accounts</span>
            </div>
          </div>
          
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 border-t border-slate-200/80 pt-6">
            <div className="space-y-3 max-w-2xl">
              <h1 className="text-4xl sm:text-6xl lg:text-7xl font-light tracking-[-0.035em] text-slate-950 font-serif">
                DEVELOPERS
              </h1>
              <p className="text-base sm:text-lg text-slate-600 font-light leading-relaxed">
                Verified master developer registry licensed under the Dubai Land Department and governed by Law No. 8 of 2007 (Escrow Trust Account Regulations).
              </p>
            </div>

            <div className="p-4 bg-slate-50 border border-slate-200 font-mono text-xs text-slate-600 shadow-2xs space-y-1">
              <div className="text-slate-950 font-bold">
                {filteredDevelopers.length} Verified Master Entities
              </div>
              <div className="text-[10px] text-slate-400">
                Official RERA &amp; DLD Developer Licensing
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* 2. RESTRAINED SEARCH BAR */}
      <section className="sticky top-[76px] sm:top-[80px] z-30 bg-white/95 backdrop-blur-md border-b border-slate-200 py-4 px-4 sm:px-10 lg:px-16 shadow-2xs">
        <div className="w-full max-w-[1440px] mx-auto flex items-center justify-between gap-4">
          <div className="relative w-full sm:w-80">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 h-3.5 w-3.5 text-slate-400" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search master developer or project..."
              className="w-full pl-9 pr-4 py-2 bg-slate-50 border border-slate-200 text-xs text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-slate-900 focus:bg-white transition-colors font-mono"
            />
          </div>

          <div className="text-xs font-mono text-slate-500 hidden sm:block">
            <span className="text-slate-950 font-bold">{filteredDevelopers.length}</span> Master Developers Listed
          </div>
        </div>
      </section>

      {/* 3. VERTICAL DIRECTORY */}
      <main className="w-full max-w-[1440px] mx-auto px-4 sm:px-10 lg:px-16 py-14 sm:py-20 space-y-14 flex-1">
        
        <div className="divide-y divide-slate-200 border-t border-b border-slate-200 bg-white border shadow-2xs">
          {filteredDevelopers.map((dev) => (
            <div
              key={dev.id}
              className="group py-6 sm:py-8 grid grid-cols-1 md:grid-cols-12 gap-6 items-center hover:bg-slate-50/70 px-6 transition-colors"
            >
              {/* Left 4 cols: Name & Established */}
              <div className="md:col-span-4 space-y-1">
                <span className="text-[10px] font-mono text-slate-400 uppercase tracking-wider block">
                  Est. {dev.founded_year || 'Verified'} &bull; {dev.headquarters || 'Dubai, UAE'}
                </span>
                <Link href={`/developers/${dev.slug}`} className="text-xl sm:text-2xl font-light text-slate-950 group-hover:text-slate-600 transition-colors block font-serif">
                  {dev.name}
                </Link>
              </div>

              {/* Center 3 cols: Source / Status */}
              <div className="md:col-span-3 font-mono text-xs text-slate-600">
                <span className="px-2.5 py-1 bg-slate-50 border border-slate-200 text-[10px] text-slate-800 uppercase font-semibold">
                  DLD Registered Developer
                </span>
              </div>

              {/* Right-center 4 cols: Selected Projects */}
              <div className="md:col-span-4 text-xs font-light text-slate-600 space-y-1">
                <span className="text-[10px] font-mono uppercase text-slate-400 block font-semibold">Key Master Enclaves:</span>
                <p className="line-clamp-2">
                  {(dev.notable_communities || []).join(', ') || 'Major Prime Enclaves'}
                </p>
              </div>

              {/* Right 1 col: Open Action */}
              <div className="md:col-span-1 flex justify-end">
                <Link
                  href={`/developers/${dev.slug}`}
                  className="p-2.5 border border-slate-200 group-hover:border-slate-950 group-hover:bg-slate-100 transition-all text-slate-400 group-hover:text-slate-950"
                  title={`View ${dev.name} Portfolio`}
                >
                  <ArrowUpRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          ))}
        </div>

      </main>

    </div>
  )
}