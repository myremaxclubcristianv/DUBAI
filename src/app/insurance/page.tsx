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
    <div className="bg-[#08080a] text-[#f5f5f7] min-h-screen pb-32 selection:bg-[#c9a962]/20 selection:text-[#f5f5f7]">
      {/* 1. EDITORIAL HERO INTRO */}
      <PageIntro
        eyebrow="Healthcare & Asset Underwriting Architecture"
        badge={<SourceBadge status="VERIFIED" sourceName="Dubai Health Authority (DHA) & Central Bank of UAE" />}
        title={<>Insurance & Asset Protection<span className="text-[#c9a962]">.</span></>}
        description="Authoritative guide to Dubai’s mandatory healthcare framework (ISAHD), Golden Visa medical compliance, property homeowner insurance, and cross-border estate succession."
      />

      <div className="w-full max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-16 space-y-12">
        {/* 2. INSURANCE PILLARS */}
        <div className="space-y-8">
          {VERIFIED_INSURANCE_PILLARS.map((pillar) => (
            <div
              key={pillar.id}
              className="bg-[#111116] rounded-xs p-8 md:p-12 border border-white/[0.08] hover:border-[#c9a962]/40 transition-all"
            >
              <div className="flex flex-col lg:flex-row lg:items-center justify-between pb-6 border-b border-white/[0.06] gap-4 mb-8">
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <span className="px-2.5 py-0.5 rounded-xs text-[10px] font-mono uppercase bg-[#c9a962]/10 border border-[#c9a962]/30 text-[#c9a962]">
                      {pillar.category.replace(/_/g, ' ')}
                    </span>
                    <span className="text-xs font-mono text-[#71717a]">
                      Regulator: {pillar.regulatoryBody}
                    </span>
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-light text-[#f5f5f7]">
                    {pillar.title}
                  </h3>
                  <div className="text-xs font-arabic text-[#71717a] mt-1">
                    {pillar.arabicTitle}
                  </div>
                </div>

                <div className="bg-black/40 p-4 rounded-xs border border-white/[0.06] text-xs text-left lg:text-right">
                  <span className="text-[10px] uppercase font-mono tracking-wider text-[#71717a] block">Typical Annual Premium</span>
                  <span className="text-sm font-mono font-medium text-[#c9a962] block mt-0.5">{pillar.typicalAnnualCost}</span>
                </div>
              </div>

              {/* Statutory Mandate */}
              <div className="mb-8">
                <span className="text-[11px] font-mono uppercase text-[#71717a] block mb-1">
                  Statutory Mandate &amp; Legal Framework
                </span>
                <p className="text-xs font-light text-[#f5f5f7] leading-relaxed">
                  {pillar.statutoryMandate}
                </p>
              </div>

              {/* Coverage Scope */}
              <div className="bg-black/40 p-6 sm:p-8 rounded-xs border border-white/[0.06] mb-8">
                <span className="text-xs font-mono uppercase text-[#c9a962] block mb-4">
                  Standard Statutory Coverage Scope
                </span>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {pillar.coverageScope.map((scope, idx) => (
                    <div key={idx} className="flex items-start gap-3 text-xs text-[#a1a1aa] font-light">
                      <CheckCircle2 className="h-4 w-4 text-[#c9a962] shrink-0 mt-0.5" />
                      <span>{scope}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Golden Visa & Providers */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <div className="p-5 rounded-xs bg-[#c9a962]/5 border border-[#c9a962]/20 text-xs">
                  <div className="flex items-center gap-2 mb-2 text-[#c9a962] font-mono uppercase">
                    <AlertCircle className="h-4 w-4 text-[#c9a962]" />
                    <span>Golden Visa Residency Requirement</span>
                  </div>
                  <p className="text-[#f5f5f7] font-light leading-relaxed">
                    {pillar.goldenVisaCompliance}
                  </p>
                </div>

                <div className="p-5 rounded-xs bg-black/40 border border-white/[0.06] text-xs">
                  <span className="text-[10px] font-mono uppercase text-[#71717a] block mb-3">
                    Accredited National Underwriters
                  </span>
                  <div className="flex flex-wrap gap-2">
                    {pillar.approvedProviders.map((provider, idx) => (
                      <span
                        key={idx}
                        className="px-2.5 py-1 rounded-xs bg-white/5 border border-white/10 text-xs font-mono text-[#f5f5f7]"
                      >
                        {provider}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Footer */}
              <div className="pt-4 border-t border-white/[0.06] flex items-center justify-between text-xs text-[#71717a]">
                <div className="flex items-center gap-1.5 font-mono">
                  <ShieldCheck className="h-3.5 w-3.5 text-[#c9a962]" />
                  <span>DHA &amp; CBUAE Supervised Tariff Standard</span>
                </div>

                <a
                  href={pillar.provenance.source_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 font-mono text-[#c9a962] hover:underline"
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
