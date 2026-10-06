'use client'

import * as React from 'react'
import Link from 'next/link'
import { DUBAI_MACRO_STATISTICS, DUBAI_D33_TARGETS, DUBAI_DEMOGRAPHICS } from '@/lib/data/statistics'
import { PageIntro, Eyebrow } from '@/components/layout/layout-primitives'
import { SourceBadge } from '@/components/ui/source-badge'
import {
  Building2,
  Users,
  ArrowRight,
  ShieldCheck,
  Landmark,
  FileCheck,
} from 'lucide-react'

export default function EconomyPage() {
  const [selectedCategory, setSelectedCategory] = React.useState<string>('ALL')

  const filteredMetrics = selectedCategory === 'ALL'
    ? DUBAI_MACRO_STATISTICS
    : DUBAI_MACRO_STATISTICS.filter((m) => m.category === selectedCategory)

  return (
    <div className="bg-[#08080a] text-[#f5f5f7] min-h-screen pb-32 selection:bg-[#c9a962]/20 selection:text-[#f5f5f7]">
      {/* 1. EDITORIAL HERO INTRO */}
      <PageIntro
        eyebrow="Sovereign Macroeconomic Observatory"
        badge={<SourceBadge status="VERIFIED" sourceName="Digital Dubai & Department of Economy (DET)" />}
        title={<>The Dubai Economic Engine<span className="text-[#c9a962]">.</span></>}
        description="Authoritative macroeconomic indicators, foreign trade metrics, population dynamics, and the Dubai Economic Agenda (D33) strategic roadmap."
      />

      <div className="w-full max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-16 space-y-20">
        {/* 2. MACRO CADRAN GRID */}
        <div>
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4 border-b border-white/[0.06] pb-6">
            <div>
              <Eyebrow>VERIFIED STATISTICAL REGISTRY</Eyebrow>
              <h2 className="text-3xl sm:text-4xl font-light text-[#f5f5f7]">
                Emirate Core Statistics
              </h2>
            </div>

            {/* Category Filter Pills */}
            <div className="flex flex-wrap gap-2">
              {[
                { label: 'All Indicators', val: 'ALL' },
                { label: 'Macro Economy', val: 'MACRO' },
                { label: 'Real Estate', val: 'REAL_ESTATE' },
                { label: 'Tourism & Aviation', val: 'TOURISM' },
                { label: 'Trade & Logistics', val: 'TRADE' },
                { label: 'Demographics', val: 'DEMOGRAPHICS' },
              ].map((filter) => (
                <button
                  key={filter.val}
                  onClick={() => setSelectedCategory(filter.val)}
                  className={`px-3 py-1.5 rounded-xs text-xs font-mono uppercase tracking-wider transition-all ${
                    selectedCategory === filter.val
                      ? 'bg-[#c9a962] text-[#08080a] font-semibold'
                      : 'bg-black/30 border border-white/10 text-[#a1a1aa] hover:text-[#f5f5f7] hover:border-white/20'
                  }`}
                >
                  {filter.label}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {filteredMetrics.map((item) => (
              <div
                key={item.id}
                className="bg-[#111116] rounded-xs p-6 border border-white/[0.08] hover:border-[#c9a962]/40 transition-all flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="px-2 py-0.5 rounded-xs bg-white/5 border border-white/10 text-[10px] font-mono text-[#71717a]">
                      {item.period}
                    </span>
                    <span className="text-[11px] font-mono font-medium text-emerald-400 bg-emerald-950/40 px-2 py-0.5 rounded-xs border border-emerald-500/30">
                      {item.change}
                    </span>
                  </div>

                  <span className="text-xs font-mono uppercase text-[#71717a] block mb-1">
                    {item.label}
                  </span>
                  <div className="text-3xl font-light tracking-tight text-[#f5f5f7] mb-3 group-hover:text-[#c9a962] transition-colors">
                    {item.value}
                  </div>
                  <p className="text-xs text-[#a1a1aa] leading-relaxed mb-4 font-light">
                    {item.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-white/[0.06] flex items-center justify-between text-[11px] font-mono text-[#71717a]">
                  <span className="truncate pr-2">{item.provenance.source_name}</span>
                  <ShieldCheck className="h-3.5 w-3.5 text-[#c9a962] shrink-0" />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 3. DUBAI ECONOMIC AGENDA D33 SECTION */}
        <div className="bg-[#111116] rounded-xs p-8 md:p-12 border border-white/[0.08]">
          <div className="max-w-3xl mb-10 space-y-3">
            <span className="px-2.5 py-0.5 rounded-xs text-[10px] font-mono uppercase tracking-wider bg-[#c9a962]/10 border border-[#c9a962]/30 text-[#c9a962] inline-block">
              Royal Economic Charter
            </span>
            <h2 className="text-3xl sm:text-4xl font-light tracking-tight text-[#f5f5f7]">
              Dubai Economic Agenda (D33)
            </h2>
            <p className="text-sm text-[#a1a1aa] font-light leading-relaxed">
              Launched by H.H. Sheikh Mohammed bin Rashid Al Maktoum to double the size of the Dubai economy by 2033, positioning the Emirate among the top 3 global economic powerhouses alongside London and New York.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {DUBAI_D33_TARGETS.map((target) => (
              <div
                key={target.id}
                className="bg-black/40 rounded-xs p-8 border border-white/[0.06] hover:border-[#c9a962]/30 transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs font-mono uppercase text-[#c9a962] tracking-wider">
                      {target.targetNumber}
                    </span>
                    <span className="text-[11px] font-mono text-[#71717a] bg-white/5 px-2.5 py-1 rounded-xs border border-white/10">
                      Lead: {target.leadEntity}
                    </span>
                  </div>

                  <h3 className="text-xl font-light text-[#f5f5f7] mb-2">
                    {target.title}
                  </h3>
                  <p className="text-xs text-[#a1a1aa] font-light leading-relaxed mb-6">
                    {target.description}
                  </p>

                  <div className="grid grid-cols-2 gap-4 p-4 rounded-xs bg-[#111116] border border-white/[0.06] mb-6">
                    <div>
                      <span className="text-[10px] uppercase font-mono text-[#71717a] block">Baseline Metric</span>
                      <span className="text-sm font-mono font-medium text-[#f5f5f7] mt-0.5 block">{target.baseline}</span>
                    </div>
                    <div>
                      <span className="text-[10px] uppercase font-mono text-[#c9a962] block">2033 Target</span>
                      <span className="text-sm font-mono font-medium text-emerald-400 mt-0.5 block">{target.target2033}</span>
                    </div>
                  </div>
                </div>

                <div>
                  <span className="text-[11px] font-mono uppercase text-[#71717a] block mb-2">
                    Strategic Execution Pillars
                  </span>
                  <div className="flex flex-wrap gap-2">
                    {target.strategicPillars.map((pillar, idx) => (
                      <span
                        key={idx}
                        className="px-2.5 py-1 rounded-xs bg-white/5 border border-white/10 text-xs font-mono text-[#f5f5f7]"
                      >
                        {pillar}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 4. DEMOGRAPHICS & POPULATION MATRIX */}
        <div>
          <div className="mb-8 space-y-3">
            <Eyebrow>CENSUS DYNAMICS</Eyebrow>
            <h2 className="text-3xl sm:text-4xl font-light text-[#f5f5f7]">
              Population Structure &amp; Workforce
            </h2>
            <p className="text-sm text-[#a1a1aa] font-light max-w-2xl leading-relaxed">
              Dubai&apos;s resident population exceeds 3.85 million, characterized by high disposable income, technical proficiency, and global capital mobility.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {DUBAI_DEMOGRAPHICS.map((demo, idx) => (
              <div
                key={idx}
                className="bg-[#111116] rounded-xs p-6 border border-white/[0.08]"
              >
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-mono text-[#c9a962]">{demo.percentage}</span>
                  <Users className="h-4 w-4 text-[#71717a]" />
                </div>
                <div className="text-2xl font-light text-[#f5f5f7] mb-1 font-mono">
                  {demo.count}
                </div>
                <h4 className="text-xs font-mono uppercase text-[#f5f5f7] mb-2">
                  {demo.category}
                </h4>
                <p className="text-xs text-[#a1a1aa] font-light leading-relaxed">
                  {demo.detail}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* 5. INTERCONNECTED PLATFORM ROUTING */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4">
          <Link
            href="/companies"
            className="p-8 rounded-xs bg-[#111116] hover:border-[#c9a962]/40 border border-white/[0.08] transition-all group"
          >
            <Building2 className="h-6 w-6 text-[#c9a962] mb-4" />
            <h4 className="text-lg font-light text-[#f5f5f7] mb-2 flex items-center justify-between group-hover:text-[#c9a962] transition-colors">
              <span>Sovereign &amp; Corporate Directory</span>
              <ArrowRight className="h-4 w-4 opacity-50 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
            </h4>
            <p className="text-xs text-[#a1a1aa] font-light">
              Explore Dubai’s top sovereign conglomerates, banks, insurance leaders, and free zone authorities.
            </p>
          </Link>

          <Link
            href="/government"
            className="p-8 rounded-xs bg-[#111116] hover:border-[#c9a962]/40 border border-white/[0.08] transition-all group"
          >
            <Landmark className="h-6 w-6 text-[#c9a962] mb-4" />
            <h4 className="text-lg font-light text-[#f5f5f7] mb-2 flex items-center justify-between group-hover:text-[#c9a962] transition-colors">
              <span>Government &amp; Authorities</span>
              <ArrowRight className="h-4 w-4 opacity-50 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
            </h4>
            <p className="text-xs text-[#a1a1aa] font-light">
              Statutory bodies, Executive Council directives, RERA, DEWA, and public development programs.
            </p>
          </Link>

          <Link
            href="/legal"
            className="p-8 rounded-xs bg-[#111116] hover:border-[#c9a962]/40 border border-white/[0.08] transition-all group"
          >
            <FileCheck className="h-6 w-6 text-[#c9a962] mb-4" />
            <h4 className="text-lg font-light text-[#f5f5f7] mb-2 flex items-center justify-between group-hover:text-[#c9a962] transition-colors">
              <span>Legal &amp; Regulatory Atlas</span>
              <ArrowRight className="h-4 w-4 opacity-50 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
            </h4>
            <p className="text-xs text-[#a1a1aa] font-light">
              Federal Corporate Tax laws, Law No. 8 Escrow regulations, DIFC Courts jurisdiction, and freehold rights.
            </p>
          </Link>
        </div>
      </div>
    </div>
  )
}
