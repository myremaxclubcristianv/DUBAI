'use client'

import * as React from 'react'
import { VERIFIED_INSURANCE_PILLARS } from '@/lib/data/insurance'
import { PageIntro } from '@/components/layout/layout-primitives'
import { SourceBadge } from '@/components/ui/source-badge'
import {
  CheckCircle2,
  ExternalLink,
  ShieldCheck,
  AlertCircle,
} from 'lucide-react'

export default function InsurancePage() {
  return (
    <div className="bg-white text-slate-900 min-h-screen pb-32">
      {/* 1. EDITORIAL HERO INTRO */}
      <PageIntro
        eyebrow="Healthcare & Asset Underwriting Architecture"
        badge={<SourceBadge status="VERIFIED" sourceName="Dubai Health Authority (DHA) & Central Bank of UAE" />}
        title={<>Insurance & Asset Protection<span className="text-[#0284c7]">.</span></>}
        description="Authoritative guide to Dubai’s mandatory healthcare framework (ISAHD), Golden Visa medical compliance, property homeowner insurance, and cross-border estate succession."
      />

      <div className="w-full max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-16 space-y-12 pt-8">
        {/* 2. INSURANCE PILLARS */}
        <div className="space-y-8">
          {VERIFIED_INSURANCE_PILLARS.map((pillar) => (
            <div
              key={pillar.id}
              className="bg-white rounded-xs p-8 md:p-12 border border-slate-200 hover:border-[#0284c7]/40 transition-all shadow-xs hover:shadow-md"
            >
              <div className="flex flex-col lg:flex-row lg:items-center justify-between pb-6 border-b border-slate-200 gap-4 mb-8">
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <span className="px-2.5 py-0.5 rounded-xs text-[10px] font-mono uppercase bg-sky-50 border border-sky-200 text-[#0284c7] font-semibold">
                      {pillar.category.replace(/_/g, ' ')}
                    </span>
                    <span className="text-xs font-mono text-slate-400">
                      Regulator: {pillar.regulatoryBody}
                    </span>
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-light text-slate-900 font-serif">
                    {pillar.title}
                  </h3>
                  <div className="text-xs font-arabic text-slate-400 mt-1">
                    {pillar.arabicTitle}
                  </div>
                </div>

                <div className="bg-slate-50 p-4 rounded-xs border border-slate-200 text-xs text-left lg:text-right">
                  <span className="text-[10px] uppercase font-mono tracking-wider text-slate-400 block font-semibold">Typical Annual Premium</span>
                  <span className="text-sm font-mono font-semibold text-slate-900 block mt-0.5">{pillar.typicalAnnualCost}</span>
                </div>
              </div>

              {/* Statutory Mandate */}
              <div className="mb-8">
                <span className="text-[11px] font-mono uppercase text-slate-400 block mb-1 font-semibold">
                  Statutory Mandate &amp; Legal Framework
                </span>
                <p className="text-xs font-light text-slate-700 leading-relaxed">
                  {pillar.statutoryMandate}
                </p>
              </div>

              {/* Coverage Scope */}
              <div className="bg-slate-50 p-6 sm:p-8 rounded-xs border border-slate-200 mb-8">
                <span className="text-xs font-mono uppercase text-[#0284c7] block mb-4 font-semibold">
                  Standard Statutory Coverage Scope
                </span>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {pillar.coverageScope.map((scope, idx) => (
                    <div key={idx} className="flex items-start gap-3 text-xs text-slate-700 font-light">
                      <CheckCircle2 className="h-4 w-4 text-[#0284c7] shrink-0 mt-0.5" />
                      <span>{scope}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Golden Visa & Providers */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <div className="p-5 rounded-xs bg-sky-50/60 border border-sky-200 text-xs">
                  <div className="flex items-center gap-2 mb-2 text-[#0284c7] font-mono uppercase font-semibold">
                    <AlertCircle className="h-4 w-4 text-[#0284c7]" />
                    <span>Golden Visa Residency Requirement</span>
                  </div>
                  <p className="text-slate-800 font-light leading-relaxed">
                    {pillar.goldenVisaCompliance}
                  </p>
                </div>

                <div className="p-5 rounded-xs bg-slate-50 border border-slate-200 text-xs">
                  <span className="text-[10px] font-mono uppercase text-slate-400 block mb-3 font-semibold">
                    Accredited National Underwriters
                  </span>
                  <div className="flex flex-wrap gap-2">
                    {pillar.approvedProviders.map((provider, idx) => (
                      <span
                        key={idx}
                        className="px-2.5 py-1 rounded-xs bg-white border border-slate-200 text-xs font-mono text-slate-800 shadow-xs"
                      >
                        {provider}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Footer */}
              <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
                <div className="flex items-center gap-1.5 font-mono">
                  <ShieldCheck className="h-3.5 w-3.5 text-[#0284c7]" />
                  <span>DHA &amp; CBUAE Supervised Tariff Standard</span>
                </div>

                <a
                  href={pillar.provenance.source_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 font-mono text-[#0284c7] hover:underline font-medium"
                >
                  <span>Official Regulatory Portal</span>
                  <ExternalLink className="h-3 w-3" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
