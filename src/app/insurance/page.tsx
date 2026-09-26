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
    <div className="bg-white text-[#1d1d1f] min-h-screen pb-32 selection:bg-[#0071e3]/10 selection:text-[#1d1d1f]">
      {/* 1. APPLE HERO INTRO */}
      <PageIntro
        eyebrow="Healthcare & Asset Underwriting Architecture"
        badge={<SourceBadge status="VERIFIED" sourceName="Dubai Health Authority (DHA) & Central Bank of UAE" />}
        title="Insurance & Asset Protection."
        subtitle="Authoritative guide to Dubai’s mandatory healthcare framework (ISAHD), Golden Visa medical compliance, property homeowner insurance, and cross-border estate succession."
      />

      <div className="w-full max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8 space-y-24">
        {/* 2. INSURANCE PILLARS */}
        <div className="space-y-12">
          {VERIFIED_INSURANCE_PILLARS.map((pillar) => (
            <div
              key={pillar.id}
              className="bg-white rounded-[36px] p-8 md:p-12 border border-black/10 shadow-[0_2px_12px_rgba(0,0,0,0.03)]"
            >
              <div className="flex flex-col lg:flex-row lg:items-center justify-between pb-6 border-b border-black/5 gap-4 mb-8">
                <div>
                  <div className="flex items-center gap-2 mb-1.5">
                    <span className="px-3 py-0.5 rounded-full text-[10px] font-bold uppercase bg-[#f5f5f7] text-[#1d1d1f] border border-black/5">
                      {pillar.category.replace(/_/g, ' ')}
                    </span>
                    <span className="text-xs text-[#86868b]">
                      Regulator: {pillar.regulatoryBody}
                    </span>
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-bold text-[#1d1d1f]">
                    {pillar.title}
                  </h3>
                  <div className="text-xs font-arabic text-[#86868b]">
                    {pillar.arabicTitle}
                  </div>
                </div>

                <div className="bg-[#f5f5f7] p-4 rounded-2xl border border-black/5 text-xs text-left lg:text-right">
                  <span className="text-[10px] uppercase font-bold text-[#86868b] block">Typical Annual Premium</span>
                  <span className="text-sm font-bold text-[#1d1d1f] block mt-0.5">{pillar.typicalAnnualCost}</span>
                </div>
              </div>

              {/* Statutory Mandate */}
              <div className="mb-8">
                <span className="text-[11px] font-bold uppercase text-[#86868b] block mb-1">
                  Statutory Mandate & Legal Framework
                </span>
                <p className="text-xs font-medium text-[#1d1d1f] leading-relaxed">
                  {pillar.statutoryMandate}
                </p>
              </div>

              {/* Coverage Scope */}
              <div className="bg-[#f5f5f7] p-6 sm:p-8 rounded-3xl border border-black/5 mb-8">
                <span className="text-xs font-bold uppercase text-[#86868b] block mb-4">
                  Standard Statutory Coverage Scope
                </span>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {pillar.coverageScope.map((scope, idx) => (
                    <div key={idx} className="flex items-start gap-3 text-xs text-[#515154]">
                      <CheckCircle2 className="h-4 w-4 text-emerald-700 shrink-0 mt-0.5" />
                      <span>{scope}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Golden Visa & Providers */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <div className="p-5 rounded-2xl bg-amber-50/50 border border-amber-200/60 text-xs">
                  <div className="flex items-center gap-2 mb-1 text-amber-900 font-bold">
                    <AlertCircle className="h-4 w-4 text-amber-700" />
                    <span>Golden Visa Residency Requirement</span>
                  </div>
                  <p className="text-amber-950 leading-relaxed">
                    {pillar.goldenVisaCompliance}
                  </p>
                </div>

                <div className="p-5 rounded-2xl bg-white border border-black/10 text-xs">
                  <span className="text-[10px] font-bold uppercase text-[#86868b] block mb-2">
                    Accredited National Underwriters
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {pillar.approvedProviders.map((provider, idx) => (
                      <span
                        key={idx}
                        className="px-2.5 py-1 rounded-md bg-[#f5f5f7] border border-black/5 text-xs font-medium text-[#1d1d1f]"
                      >
                        {provider}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Footer */}
              <div className="pt-4 border-t border-black/5 flex items-center justify-between text-xs text-[#86868b]">
                <div className="flex items-center gap-1.5">
                  <ShieldCheck className="h-3.5 w-3.5 text-[#b8860b]" />
                  <span>DHA & CBUAE Supervised Tariff Standard</span>
                </div>

                <a
                  href={pillar.provenance.source_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 font-bold text-[#1d1d1f] hover:underline"
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
