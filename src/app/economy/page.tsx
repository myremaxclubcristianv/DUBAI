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
    <div className="bg-white text-slate-900 min-h-screen pb-32">
      {/* 1. EDITORIAL HERO INTRO */}
      <PageIntro
        eyebrow="Sovereign Macroeconomic Observatory"
        badge={<SourceBadge status="VERIFIED" sourceName="Digital Dubai & Department of Economy (DET)" />}
        title={<>The Dubai Economic Engine<span className="text-[#0284c7]">.</span></>}
        description="Authoritative macroeconomic indicators, foreign trade metrics, population dynamics, and the Dubai Economic Agenda (D33) strategic roadmap."
      />

      <div className="w-full max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-16 space-y-20 pt-8">
        {/* 2. MACRO CADRAN GRID */}
        <div>
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4 border-b border-slate-200 pb-6">
            <div>
              <Eyebrow>VERIFIED STATISTICAL REGISTRY</Eyebrow>
              <h2 className="text-3xl sm:text-4xl font-light text-slate-900 font-serif">
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
                  className={`px-3 py-1.5 rounded-xs text-xs font-mono uppercase tracking-wider transition-all cursor-pointer ${
                    selectedCategory === filter.val
                      ? 'bg-[#0284c7] text-white font-semibold'
                      : 'bg-slate-100 border border-slate-200 text-slate-600 hover:text-slate-900 hover:bg-slate-200'
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
                className="bg-white rounded-xs p-6 border border-slate-200 hover:border-[#0284c7]/40 transition-all flex flex-col justify-between group shadow-xs hover:shadow-md"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="px-2 py-0.5 rounded-xs bg-slate-100 border border-slate-200 text-[10px] font-mono text-slate-500 font-medium">
                      {item.period}
                    </span>
                    <span className="text-[11px] font-mono font-medium text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-xs border border-emerald-200">
                      {item.change}
                    </span>
                  </div>

                  <span className="text-xs font-mono uppercase text-slate-400 block mb-1">
                    {item.label}
                  </span>
                  <div className="text-3xl font-light tracking-tight text-slate-900 mb-3 group-hover:text-[#0284c7] transition-colors font-mono font-semibold">
                    {item.value}
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed mb-4 font-light">
                    {item.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-[11px] font-mono text-slate-400">
                  <span className="truncate pr-2">{item.provenance.source_name}</span>
                  <ShieldCheck className="h-3.5 w-3.5 text-[#0284c7] shrink-0" />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 3. DUBAI ECONOMIC AGENDA D33 SECTION */}
        <div className="bg-[#f0f7ff] rounded-xs p-8 md:p-12 border border-sky-100 shadow-sm">
          <div className="max-w-3xl mb-10 space-y-3">
            <span className="px-2.5 py-0.5 rounded-xs text-[10px] font-mono uppercase tracking-wider bg-white border border-sky-200 text-[#0284c7] font-semibold inline-block">
              Royal Economic Charter
            </span>
            <h2 className="text-3xl sm:text-4xl font-light tracking-tight text-slate-900 font-serif">
              Dubai Economic Agenda (D33)
            </h2>
            <p className="text-sm text-slate-600 font-light leading-relaxed">
              Launched by H.H. Sheikh Mohammed bin Rashid Al Maktoum to double the size of the Dubai economy by 2033, positioning the Emirate among the top 3 global economic powerhouses alongside London and New York.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {DUBAI_D33_TARGETS.map((target) => (
              <div
                key={target.id}
                className="bg-white rounded-xs p-8 border border-slate-200 hover:border-[#0284c7]/30 transition-all flex flex-col justify-between shadow-xs"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs font-mono uppercase text-[#0284c7] tracking-wider font-semibold">
                      {target.targetNumber}
                    </span>
                    <span className="text-[11px] font-mono text-slate-500 bg-slate-50 px-2.5 py-1 rounded-xs border border-slate-200">
                      Lead: {target.leadEntity}
                    </span>
                  </div>

                  <h3 className="text-xl font-light text-slate-900 mb-2 font-serif">
                    {target.title}
                  </h3>
                  <p className="text-xs text-slate-600 font-light leading-relaxed mb-6">
                    {target.description}
                  </p>

                  <div className="grid grid-cols-2 gap-4 p-4 rounded-xs bg-slate-50 border border-slate-200 mb-6 font-mono">
                    <div>
                      <span className="text-[10px] uppercase text-slate-400 block">Baseline Metric</span>
                      <span className="text-sm font-medium text-slate-900 mt-0.5 block">{target.baseline}</span>
                    </div>
                    <div>
                      <span className="text-[10px] uppercase text-[#0284c7] block font-semibold">2033 Target</span>
                      <span className="text-sm font-semibold text-emerald-600 mt-0.5 block">{target.target2033}</span>
                    </div>
                  </div>
                </div>

                <div>
                  <span className="text-[11px] font-mono uppercase text-slate-400 block mb-2 font-semibold">
                    Strategic Execution Pillars
                  </span>
                  <div className="flex flex-wrap gap-2">
                    {target.strategicPillars.map((pillar, idx) => (
                      <span
                        key={idx}
                        className="px-2.5 py-1 rounded-xs bg-slate-50 border border-slate-200 text-xs font-mono text-slate-700"
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
            <h2 className="text-3xl sm:text-4xl font-light text-slate-900 font-serif">
              Population Structure &amp; Workforce
            </h2>
            <p className="text-sm text-slate-600 font-light max-w-2xl leading-relaxed">
              Dubai&apos;s resident population exceeds 3.85 million, characterized by high disposable income, technical proficiency, and global capital mobility.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {DUBAI_DEMOGRAPHICS.map((demo, idx) => (
              <div
                key={idx}
                className="bg-white rounded-xs p-6 border border-slate-200 shadow-xs"
              >
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-mono text-[#0284c7] font-semibold">{demo.percentage}</span>
                  <Users className="h-4 w-4 text-slate-400" />
                </div>
                <div className="text-2xl font-light text-slate-900 mb-1 font-mono font-semibold">
                  {demo.count}
                </div>
                <h4 className="text-xs font-mono uppercase text-slate-700 mb-2 font-semibold">
                  {demo.category}
                </h4>
                <p className="text-xs text-slate-600 font-light leading-relaxed">
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
            className="p-8 rounded-xs bg-white hover:border-[#0284c7]/40 border border-slate-200 transition-all group shadow-xs hover:shadow-md"
          >
            <Building2 className="h-6 w-6 text-[#0284c7] mb-4" />
            <h4 className="text-lg font-light text-slate-900 mb-2 flex items-center justify-between group-hover:text-[#0284c7] transition-colors font-serif">
              <span>Sovereign &amp; Corporate Directory</span>
              <ArrowRight className="h-4 w-4 opacity-50 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
            </h4>
            <p className="text-xs text-slate-600 font-light">
              Explore Dubai’s top sovereign conglomerates, banks, insurance leaders, and free zone authorities.
            </p>
          </Link>

          <Link
            href="/government"
            className="p-8 rounded-xs bg-white hover:border-[#0284c7]/40 border border-slate-200 transition-all group shadow-xs hover:shadow-md"
          >
            <Landmark className="h-6 w-6 text-[#0284c7] mb-4" />
            <h4 className="text-lg font-light text-slate-900 mb-2 flex items-center justify-between group-hover:text-[#0284c7] transition-colors font-serif">
              <span>Government &amp; Authorities</span>
              <ArrowRight className="h-4 w-4 opacity-50 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
            </h4>
            <p className="text-xs text-slate-600 font-light">
              Statutory bodies, Executive Council directives, RERA, DEWA, and public development programs.
            </p>
          </Link>

          <Link
            href="/legal"
            className="p-8 rounded-xs bg-white hover:border-[#0284c7]/40 border border-slate-200 transition-all group shadow-xs hover:shadow-md"
          >
            <FileCheck className="h-6 w-6 text-[#0284c7] mb-4" />
            <h4 className="text-lg font-light text-slate-900 mb-2 flex items-center justify-between group-hover:text-[#0284c7] transition-colors font-serif">
              <span>Legal &amp; Regulatory Atlas</span>
              <ArrowRight className="h-4 w-4 opacity-50 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
            </h4>
            <p className="text-xs text-slate-600 font-light">
              Federal Corporate Tax laws, Law No. 8 Escrow regulations, DIFC Courts jurisdiction, and freehold rights.
            </p>
          </Link>
        </div>
      </div>
    </div>
  )
}
