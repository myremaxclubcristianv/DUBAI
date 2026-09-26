'use client'

import * as React from 'react'
import Link from 'next/link'
import { DUBAI_MACRO_STATISTICS, DUBAI_D33_TARGETS, DUBAI_DEMOGRAPHICS } from '@/lib/data/statistics'
import { PageIntro, SectionHeader } from '@/components/layout/layout-primitives'
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
    <div className="bg-white text-[#1d1d1f] min-h-screen pb-32 selection:bg-[#0071e3]/10 selection:text-[#1d1d1f]">
      {/* 1. APPLE HERO INTRO */}
      <PageIntro
        eyebrow="Sovereign Macroeconomic Observatory"
        badge={<SourceBadge status="VERIFIED" sourceName="Digital Dubai & Department of Economy (DET)" />}
        title="The Dubai Economic Engine."
        subtitle="Authoritative macroeconomic indicators, foreign trade metrics, population dynamics, and the Dubai Economic Agenda (D33) strategic roadmap."
      />

      <div className="w-full max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8 space-y-24">
        {/* 2. MACRO CADRAN GRID */}
        <div>
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
            <div>
              <span className="text-[11px] font-bold uppercase tracking-widest text-[#b8860b] block mb-1">
                Verified Statistical Registry
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-[#1d1d1f]">
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
                  className={`px-4 py-1.5 rounded-full text-xs font-semibold transition-all ${
                    selectedCategory === filter.val
                      ? 'bg-[#1d1d1f] text-white shadow-xs'
                      : 'bg-[#f5f5f7] text-[#6e6e73] hover:text-[#1d1d1f] hover:bg-black/5'
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
                className="bg-white rounded-3xl p-6 border border-black/10 shadow-[0_2px_12px_rgba(0,0,0,0.03)] hover:shadow-md transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="px-2.5 py-0.5 rounded-md bg-[#f5f5f7] border border-black/5 text-[10px] font-bold text-[#6e6e73]">
                      {item.period}
                    </span>
                    <span className="text-[11px] font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-md border border-emerald-100">
                      {item.change}
                    </span>
                  </div>

                  <span className="text-xs font-semibold text-[#86868b] block mb-1">
                    {item.label}
                  </span>
                  <div className="text-3xl font-extrabold tracking-tight text-[#1d1d1f] mb-3">
                    {item.value}
                  </div>
                  <p className="text-xs text-[#515154] leading-relaxed mb-4">
                    {item.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-black/5 flex items-center justify-between text-[11px] text-[#86868b]">
                  <span className="truncate pr-2">{item.provenance.source_name}</span>
                  <ShieldCheck className="h-3.5 w-3.5 text-[#b8860b] shrink-0" />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 3. DUBAI ECONOMIC AGENDA D33 SECTION */}
        <div className="bg-[#f5f5f7] rounded-[36px] p-8 md:p-14 border border-black/5">
          <div className="max-w-3xl mb-12">
            <span className="px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-white border border-black/10 text-[#b8860b] inline-block mb-3">
              Royal Economic Charter
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-[#1d1d1f] mb-4">
              Dubai Economic Agenda (D33)
            </h2>
            <p className="text-base text-[#6e6e73] leading-relaxed">
              Launched by H.H. Sheikh Mohammed bin Rashid Al Maktoum to double the size of the Dubai economy by 2033, positioning the Emirate among the top 3 global economic powerhouses alongside London and New York.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {DUBAI_D33_TARGETS.map((target) => (
              <div
                key={target.id}
                className="bg-white rounded-3xl p-8 border border-black/10 shadow-[0_2px_12px_rgba(0,0,0,0.03)] flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs font-bold uppercase text-[#b8860b] tracking-wider">
                      {target.targetNumber}
                    </span>
                    <span className="text-[11px] font-semibold text-[#86868b] bg-[#f5f5f7] px-2.5 py-1 rounded-full">
                      Lead: {target.leadEntity}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-[#1d1d1f] mb-2">
                    {target.title}
                  </h3>
                  <p className="text-xs text-[#515154] leading-relaxed mb-6">
                    {target.description}
                  </p>

                  <div className="grid grid-cols-2 gap-4 p-4 rounded-2xl bg-[#f5f5f7] border border-black/5 mb-6">
                    <div>
                      <span className="text-[10px] uppercase font-bold text-[#86868b] block">Baseline Metric</span>
                      <span className="text-sm font-bold text-[#1d1d1f] mt-0.5 block">{target.baseline}</span>
                    </div>
                    <div>
                      <span className="text-[10px] uppercase font-bold text-[#b8860b] block">2033 Target</span>
                      <span className="text-sm font-bold text-emerald-700 mt-0.5 block">{target.target2033}</span>
                    </div>
                  </div>
                </div>

                <div>
                  <span className="text-[11px] font-bold uppercase text-[#86868b] block mb-2">
                    Strategic Execution Pillars
                  </span>
                  <div className="flex flex-wrap gap-2">
                    {target.strategicPillars.map((pillar, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1 rounded-full bg-white border border-black/10 text-xs font-medium text-[#1d1d1f]"
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
          <SectionHeader
            badge="Census Dynamics"
            title="Population Structure & Workforce"
            subtitle="Dubai's resident population exceeds 3.85 million, characterized by high disposable income, technical proficiency, and global capital mobility."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {DUBAI_DEMOGRAPHICS.map((demo, idx) => (
              <div
                key={idx}
                className="bg-white rounded-3xl p-6 border border-black/10 shadow-[0_2px_12px_rgba(0,0,0,0.03)]"
              >
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-bold text-[#86868b]">{demo.percentage}</span>
                  <Users className="h-4 w-4 text-[#b8860b]" />
                </div>
                <div className="text-2xl font-extrabold text-[#1d1d1f] mb-1">
                  {demo.count}
                </div>
                <h4 className="text-xs font-bold text-[#1d1d1f] mb-2">
                  {demo.category}
                </h4>
                <p className="text-xs text-[#6e6e73] leading-relaxed">
                  {demo.detail}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* 5. INTERCONNECTED PLATFORM ROUTING */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-8">
          <Link
            href="/companies"
            className="p-8 rounded-3xl bg-[#f5f5f7] hover:bg-white border border-black/5 hover:border-black/15 shadow-xs hover:shadow-md transition-all group"
          >
            <Building2 className="h-6 w-6 text-[#b8860b] mb-4 group-hover:scale-110 transition-transform" />
            <h4 className="text-lg font-bold text-[#1d1d1f] mb-2 flex items-center justify-between">
              <span>Sovereign & Corporate Directory</span>
              <ArrowRight className="h-4 w-4 opacity-50 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
            </h4>
            <p className="text-xs text-[#6e6e73]">
              Explore Dubai’s top sovereign conglomerates, banks, insurance leaders, and free zone authorities.
            </p>
          </Link>

          <Link
            href="/government"
            className="p-8 rounded-3xl bg-[#f5f5f7] hover:bg-white border border-black/5 hover:border-black/15 shadow-xs hover:shadow-md transition-all group"
          >
            <Landmark className="h-6 w-6 text-[#b8860b] mb-4 group-hover:scale-110 transition-transform" />
            <h4 className="text-lg font-bold text-[#1d1d1f] mb-2 flex items-center justify-between">
              <span>Government & Authorities</span>
              <ArrowRight className="h-4 w-4 opacity-50 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
            </h4>
            <p className="text-xs text-[#6e6e73]">
              Statutory bodies, Executive Council directives, RERA, DEWA, and public development programs.
            </p>
          </Link>

          <Link
            href="/legal"
            className="p-8 rounded-3xl bg-[#f5f5f7] hover:bg-white border border-black/5 hover:border-black/15 shadow-xs hover:shadow-md transition-all group"
          >
            <FileCheck className="h-6 w-6 text-[#b8860b] mb-4 group-hover:scale-110 transition-transform" />
            <h4 className="text-lg font-bold text-[#1d1d1f] mb-2 flex items-center justify-between">
              <span>Legal & Regulatory Atlas</span>
              <ArrowRight className="h-4 w-4 opacity-50 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
            </h4>
            <p className="text-xs text-[#6e6e73]">
              Federal Corporate Tax laws, Law No. 8 Escrow regulations, DIFC Courts jurisdiction, and freehold rights.
            </p>
          </Link>
        </div>
      </div>
    </div>
  )
}
