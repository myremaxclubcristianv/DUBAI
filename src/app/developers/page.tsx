'use client'

import * as React from 'react'
import Link from 'next/link'
import { VERIFIED_DEVELOPERS } from '@/lib/data/developers'
import { SourceBadge } from '@/components/ui/source-badge'
import { ExternalLink, ArrowRight } from 'lucide-react'

export default function DevelopersPage() {
  return (
    <div className="bg-white text-text-primary min-h-screen pb-24">
      {/* 1. EDITORIAL HEADER */}
      <section className="pt-12 pb-10 border-b border-border bg-surface-subtle">
        <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-border text-xs font-semibold text-text-secondary shadow-2xs">
              <span className="h-2 w-2 rounded-full bg-emerald-600 animate-pulse" />
              <span>Official DLD Master Developer Registry</span>
            </div>
            <SourceBadge status="OFFICIAL SOURCE" sourceName="DLD Developer Register" />
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-text-primary uppercase leading-tight">
            Developer Index.
          </h1>

          <p className="text-base sm:text-lg text-text-secondary max-w-2xl font-normal leading-relaxed">
            Institutional master developers licensed and audited by the Dubai Land Department (DLD). Direct escrow accounts and statutory project governance.
          </p>
        </div>
      </section>

      <main className="w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 space-y-10">
        <div className="flex items-center justify-between border-b border-border pb-3">
          <span className="text-[11px] font-mono font-bold uppercase tracking-widest text-text-muted">
            REGISTERED MASTER DEVELOPERS ({VERIFIED_DEVELOPERS.length})
          </span>
          <span className="text-xs text-text-muted font-mono">DLD Registry Standards</span>
        </div>

        {/* 2. TYPOGRAPHIC DEVELOPER DIRECTORY */}
        <div className="divide-y divide-border border-y border-border">
          {VERIFIED_DEVELOPERS.map((dev, idx) => (
            <div
              key={dev.id}
              className="py-8 grid grid-cols-1 lg:grid-cols-12 gap-6 items-start group hover:bg-surface-subtle/50 transition-colors px-2 rounded-xl"
            >
              {/* Col 1: Monospace Index */}
              <div className="lg:col-span-1">
                <span className="text-2xl sm:text-3xl font-black font-mono text-accent">
                  0{idx + 1}
                </span>
              </div>

              {/* Col 4: Identity & Registration */}
              <div className="lg:col-span-4 space-y-1">
                <div className="flex items-center gap-2">
                  <span className="text-[10px] font-mono uppercase px-2 py-0.5 rounded bg-surface border border-border text-text-muted font-bold">
                    DLD #{dev.dld_developer_number}
                  </span>
                  <span className="text-xs font-mono text-text-muted">
                    Est. {dev.founded_year}
                  </span>
                </div>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-text-primary group-hover:text-accent transition-colors">
                  {dev.name}
                </h2>
                {dev.arabic_name && (
                  <div className="text-xs text-text-muted font-sans">{dev.arabic_name}</div>
                )}
                <div className="text-xs text-text-secondary pt-0.5 font-normal">
                  HQ: {dev.headquarters}
                </div>
              </div>

              {/* Col 4: Overview & Key Communities */}
              <div className="lg:col-span-4 space-y-2.5">
                <p className="text-xs text-text-secondary leading-relaxed line-clamp-3">
                  {dev.portfolio_overview}
                </p>
                <div className="flex flex-wrap gap-1.5 pt-1">
                  {dev.notable_communities.map((comm) => (
                    <span
                      key={comm}
                      className="px-2 py-0.5 rounded text-[11px] font-medium bg-surface text-text-secondary border border-border"
                    >
                      {comm}
                    </span>
                  ))}
                </div>
              </div>

              {/* Col 3: Actions & Verification */}
              <div className="lg:col-span-3 flex flex-col justify-between items-start lg:items-end gap-3 pt-2 lg:pt-0">
                <SourceBadge provenance={dev.provenance} showDetailButton={false} />

                <div className="flex items-center gap-2 w-full lg:w-auto">
                  <a
                    href={dev.official_website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-3 py-1.5 rounded-lg border border-border bg-white hover:bg-surface text-xs font-semibold text-text-primary transition-colors flex items-center gap-1 shadow-2xs"
                    title="Official Developer Portal"
                  >
                    <span>Portal</span>
                    <ExternalLink className="h-3 w-3 text-text-muted" />
                  </a>

                  <Link
                    href="/properties"
                    className="px-3.5 py-1.5 rounded-lg bg-text-primary hover:bg-black text-white text-xs font-bold transition-colors flex items-center gap-1 shadow-2xs"
                  >
                    <span>Properties</span>
                    <ArrowRight className="h-3 w-3 text-accent" />
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