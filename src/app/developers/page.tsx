'use client'

import * as React from 'react'
import Link from 'next/link'
import { VERIFIED_DEVELOPERS } from '@/lib/data/developers'
import { SourceBadge } from '@/components/ui/source-badge'
import { PageIntro } from '@/components/layout/layout-primitives'
import { ExternalLink, ArrowRight } from 'lucide-react'

export default function DevelopersPage() {
  return (
    <div className="bg-black text-white min-h-screen pb-28 selection:bg-accent/30 selection:text-white">
      {/* 1. APPLE PRO HERO */}
      <PageIntro
        eyebrow="Official DLD Master Developer Registry"
        badge={<SourceBadge status="OFFICIAL SOURCE" sourceName="DLD Developer Register" />}
        title={<>Developer Directory<span className="text-gradient-gold">.</span></>}
        description="Institutional master developers licensed and audited by the Dubai Land Department (DLD). Direct escrow accounts and statutory project governance."
      />

      <main className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 space-y-10">
        <div className="flex items-center justify-between border-b border-white/10 pb-4">
          <span className="text-[11px] font-mono font-bold uppercase tracking-widest text-gold">
            REGISTERED MASTER DEVELOPERS ({VERIFIED_DEVELOPERS.length})
          </span>
          <span className="text-xs text-zinc-500 font-mono">DLD Registry Standards</span>
        </div>

        {/* 2. TYPOGRAPHIC DEVELOPER DIRECTORY */}
        <div className="divide-y divide-white/10 border-y border-white/10">
          {VERIFIED_DEVELOPERS.map((dev, idx) => (
            <div
              key={dev.id}
              className="py-10 grid grid-cols-1 lg:grid-cols-12 gap-6 items-start group hover:bg-zinc-950/60 transition-all px-4 sm:px-6 rounded-3xl"
            >
              {/* Col 1: Monospace Index */}
              <div className="lg:col-span-1">
                <span className="text-3xl sm:text-4xl font-black font-mono text-gold/80">
                  0{idx + 1}
                </span>
              </div>

              {/* Col 4: Identity & Registration */}
              <div className="lg:col-span-4 space-y-2">
                <div className="flex items-center gap-2">
                  <span className="text-[10px] font-mono uppercase px-2.5 py-0.5 rounded-full bg-zinc-900 border border-white/10 text-zinc-400 font-bold">
                    DLD #{dev.dld_developer_number}
                  </span>
                  <span className="text-xs font-mono text-zinc-500">
                    Est. {dev.founded_year}
                  </span>
                </div>
                <h2 className="text-2xl sm:text-3xl font-bold text-white group-hover:text-gold transition-colors">
                  {dev.name}
                </h2>
                {dev.arabic_name && (
                  <div className="text-xs text-zinc-500 font-sans">{dev.arabic_name}</div>
                )}
                <div className="text-xs text-zinc-400 pt-0.5 font-normal">
                  HQ: {dev.headquarters}
                </div>
              </div>

              {/* Col 4: Overview & Key Communities */}
              <div className="lg:col-span-4 space-y-3">
                <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed line-clamp-3">
                  {dev.portfolio_overview}
                </p>
                <div className="flex flex-wrap gap-1.5 pt-1">
                  {dev.notable_communities.map((comm) => (
                    <span
                      key={comm}
                      className="px-2.5 py-1 rounded-full text-xs font-medium bg-zinc-900 text-zinc-300 border border-white/10"
                    >
                      {comm}
                    </span>
                  ))}
                </div>
              </div>

              {/* Col 3: Actions & Verification */}
              <div className="lg:col-span-3 flex flex-col justify-between items-start lg:items-end gap-4 pt-2 lg:pt-0">
                <SourceBadge provenance={dev.provenance} showDetailButton={false} />

                <div className="flex items-center gap-2 w-full lg:w-auto">
                  <a
                    href={dev.official_website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 rounded-full border border-white/15 bg-zinc-900 hover:bg-zinc-800 text-xs font-semibold text-white transition-colors flex items-center gap-1.5"
                    title="Official Developer Portal"
                  >
                    <span>Portal</span>
                    <ExternalLink className="h-3 w-3 text-zinc-400" />
                  </a>

                  <Link
                    href="/properties"
                    className="px-4 py-2 rounded-full bg-white hover:bg-zinc-200 text-black text-xs font-bold transition-all flex items-center gap-1.5 shadow-lg"
                  >
                    <span>Inventory</span>
                    <ArrowRight className="h-3.5 w-3.5 text-black" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  )
}