'use client'

import * as React from 'react'
import { VERIFIED_GOVERNMENT_ENTITIES, VERIFIED_GOVERNMENT_PROGRAMS } from '@/lib/data/government'
import { PageIntro, SectionHeader } from '@/components/layout/layout-primitives'
import { SourceBadge } from '@/components/ui/source-badge'
import {
  ExternalLink,
  ShieldCheck,
  CheckCircle2,
} from 'lucide-react'

export default function GovernmentPage() {
  return (
    <div className="bg-white text-[#1d1d1f] min-h-screen pb-32 selection:bg-[#0071e3]/10 selection:text-[#1d1d1f]">
      {/* 1. APPLE HERO INTRO */}
      <PageIntro
        eyebrow="Sovereign Governance & Public Policy"
        badge={<SourceBadge status="VERIFIED" sourceName="The Executive Council & Dubai Official Gazette" />}
        title="Government & Strategic Mandates."
        subtitle="Authoritative directory of Dubai government authorities, regulatory councils, digital service hubs, and national master transformation blueprints."
      />

      <div className="w-full max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8 space-y-24">
        {/* 2. GOVERNMENT PROGRAMS OBSERVE */}
        <div>
          <SectionHeader
            badge="Strategic National Blueprints"
            title="Strategic Government Programs"
            subtitle="Pioneering long-term strategic roadmaps guiding urban development, clean energy, artificial intelligence, and trade growth."
          />

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {VERIFIED_GOVERNMENT_PROGRAMS.map((program) => (
              <div
                key={program.id}
                className="bg-white rounded-3xl p-8 md:p-10 border border-black/10 shadow-[0_2px_12px_rgba(0,0,0,0.03)] flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-[#f5f5f7] border border-black/5 text-[#b8860b]">
                      {program.programCode}
                    </span>
                    <span className="text-xs font-semibold text-[#86868b]">
                      Horizon: {program.targetHorizon}
                    </span>
                  </div>

                  <h3 className="text-2xl font-bold text-[#1d1d1f] mb-2">
                    {program.title}
                  </h3>
                  <div className="text-xs font-semibold text-[#86868b] mb-4">
                    Lead Authority: {program.leadAgency}
                  </div>

                  <p className="text-xs text-[#515154] leading-relaxed mb-6">
                    {program.coreObjective}
                  </p>

                  <div className="p-4 rounded-2xl bg-[#f5f5f7] border border-black/5 mb-6">
                    <span className="text-[10px] uppercase font-bold text-[#86868b] block mb-1">
                      Legal Foundation / Enactment
                    </span>
                    <span className="text-xs font-medium text-[#1d1d1f] block">
                      {program.statutoryDecree}
                    </span>
                  </div>

                  <div className="space-y-2.5 mb-6">
                    <span className="text-[11px] font-bold uppercase text-[#86868b] block">
                      Core Strategic Deliverables
                    </span>
                    {program.strategicDeliverables.map((item, idx) => (
                      <div key={idx} className="flex items-start gap-2.5 text-xs text-[#515154]">
                        <CheckCircle2 className="h-3.5 w-3.5 text-emerald-700 shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-4 border-t border-black/5 flex items-center justify-between text-xs">
                  <span className="text-[#86868b] font-medium">
                    Public Benefit: <strong className="text-[#1d1d1f] font-semibold">{program.publicBenefit}</strong>
                  </span>
                  <a
                    href={program.provenance.source_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-full hover:bg-black/5 text-[#1d1d1f] transition-colors"
                  >
                    <ExternalLink className="h-4 w-4" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 3. GOVERNMENT DEPARTMENTS DIRECTORY */}
        <div>
          <SectionHeader
            badge="Institutional Registry"
            title="Departments & Statutory Authorities"
            subtitle="The regulatory and executive bodies administering property registration, transport infrastructure, municipal zoning, digital identity, and healthcare."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {VERIFIED_GOVERNMENT_ENTITIES.map((entity) => (
              <div
                key={entity.id}
                className="bg-white rounded-3xl p-8 border border-black/10 shadow-[0_2px_12px_rgba(0,0,0,0.03)] hover:shadow-md transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="px-3 py-1 rounded-full text-[10px] font-bold uppercase bg-[#f5f5f7] text-[#1d1d1f] border border-black/5">
                      {entity.category.replace(/_/g, ' ')}
                    </span>
                    <span className="text-xs text-[#86868b]">
                      {entity.jurisdiction}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-[#1d1d1f] mb-1">
                    {entity.name}
                  </h3>
                  <div className="text-xs font-arabic text-[#86868b] mb-4">
                    {entity.arabicName}
                  </div>

                  <p className="text-xs text-[#515154] leading-relaxed mb-6">
                    {entity.mandate}
                  </p>

                  <div className="p-4 rounded-2xl bg-[#f5f5f7] border border-black/5 space-y-2 mb-6">
                    <div className="text-xs">
                      <span className="text-[#86868b] font-medium block">Leadership:</span>
                      <span className="font-semibold text-[#1d1d1f]">{entity.leadership}</span>
                    </div>
                    <div className="text-xs">
                      <span className="text-[#86868b] font-medium block">Statutory Role:</span>
                      <span className="text-[#515154]">{entity.statutoryRole}</span>
                    </div>
                  </div>

                  <div>
                    <span className="text-[11px] font-bold uppercase text-[#86868b] block mb-2">
                      Key Public Services & Powers
                    </span>
                    <div className="flex flex-wrap gap-2 mb-6">
                      {entity.keyServices.map((srv, idx) => (
                        <span
                          key={idx}
                          className="px-2.5 py-1 rounded-md bg-white border border-black/10 text-[11px] font-medium text-[#1d1d1f]"
                        >
                          {srv}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="pt-4 border-t border-black/5 flex items-center justify-between">
                  <div className="flex items-center gap-1.5 text-[11px] text-[#86868b]">
                    <ShieldCheck className="h-3.5 w-3.5 text-[#b8860b]" />
                    <span>Official Gazette Verified</span>
                  </div>

                  <div className="flex gap-2">
                    {entity.digitalPortals.map((portal, idx) => (
                      <a
                        key={idx}
                        href={portal.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 px-3 py-1.5 rounded-full bg-[#1d1d1f] text-white hover:bg-black text-xs font-semibold transition-colors"
                      >
                        <span>{portal.portalName}</span>
                        <ExternalLink className="h-3 w-3" />
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
