'use client'

import * as React from 'react'
import { VERIFIED_GOVERNMENT_ENTITIES, VERIFIED_GOVERNMENT_PROGRAMS } from '@/lib/data/government'
import { PageIntro, Eyebrow } from '@/components/layout/layout-primitives'
import { SourceBadge } from '@/components/ui/source-badge'
import {
  ExternalLink,
  ShieldCheck,
  CheckCircle2,
} from 'lucide-react'

export default function GovernmentPage() {
  return (
    <div className="bg-white text-slate-900 min-h-screen pb-32">
      {/* 1. EDITORIAL HERO INTRO */}
      <PageIntro
        eyebrow="Sovereign Governance & Public Policy"
        badge={<SourceBadge status="VERIFIED" sourceName="The Executive Council & Dubai Official Gazette" />}
        title={<>Government &amp; Strategic Mandates<span className="text-[#0284c7]">.</span></>}
        description="Authoritative directory of Dubai government authorities, regulatory councils, digital service hubs, and national master transformation blueprints."
      />

      <div className="w-full max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-16 space-y-20 pt-8">
        {/* 2. GOVERNMENT PROGRAMS OBSERVE */}
        <div>
          <div className="mb-8 space-y-3">
            <Eyebrow>STRATEGIC NATIONAL BLUEPRINTS</Eyebrow>
            <h2 className="text-3xl sm:text-4xl font-light text-slate-900 font-serif">
              Strategic Government Programs
            </h2>
            <p className="text-sm text-slate-600 font-light max-w-2xl leading-relaxed">
              Pioneering long-term strategic roadmaps guiding urban development, clean energy, artificial intelligence, and trade growth.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {VERIFIED_GOVERNMENT_PROGRAMS.map((program) => (
              <div
                key={program.id}
                className="bg-white rounded-xs p-8 md:p-10 border border-slate-200 hover:border-[#0284c7]/40 transition-all flex flex-col justify-between group shadow-xs hover:shadow-md"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="px-2.5 py-0.5 rounded-xs text-xs font-mono uppercase bg-sky-50 border border-sky-200 text-[#0284c7] font-semibold">
                      {program.programCode}
                    </span>
                    <span className="text-xs font-mono text-slate-500">
                      Horizon: {program.targetHorizon}
                    </span>
                  </div>

                  <h3 className="text-2xl font-light text-slate-900 mb-2 group-hover:text-[#0284c7] transition-colors font-serif">
                    {program.title}
                  </h3>
                  <div className="text-xs font-mono text-[#0284c7] mb-4 font-medium">
                    Lead Authority: {program.leadAgency}
                  </div>

                  <p className="text-xs text-slate-600 font-light leading-relaxed mb-6">
                    {program.coreObjective}
                  </p>

                  <div className="p-4 rounded-xs bg-slate-50 border border-slate-200 mb-6">
                    <span className="text-[10px] uppercase font-mono text-slate-400 block mb-1 font-semibold">
                      Legal Foundation / Enactment
                    </span>
                    <span className="text-xs font-mono text-slate-900 font-semibold block">
                      {program.statutoryDecree}
                    </span>
                  </div>

                  <div className="space-y-2.5 mb-6">
                    <span className="text-[11px] font-mono uppercase text-slate-400 block font-semibold">
                      Core Strategic Deliverables
                    </span>
                    {program.strategicDeliverables.map((item, idx) => (
                      <div key={idx} className="flex items-start gap-2.5 text-xs text-slate-600 font-light">
                        <CheckCircle2 className="h-3.5 w-3.5 text-[#0284c7] shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-xs">
                  <span className="text-slate-500 font-mono">
                    Public Benefit: <strong className="text-slate-900 font-medium">{program.publicBenefit}</strong>
                  </span>
                  <a
                    href={program.provenance.source_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-xs bg-slate-50 hover:bg-[#0284c7] hover:text-white text-slate-700 transition-colors border border-slate-200"
                  >
                    <ExternalLink className="h-3.5 w-3.5" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 3. GOVERNMENT DEPARTMENTS DIRECTORY */}
        <div>
          <div className="mb-8 space-y-3">
            <Eyebrow>INSTITUTIONAL REGISTRY</Eyebrow>
            <h2 className="text-3xl sm:text-4xl font-light text-slate-900 font-serif">
              Departments &amp; Statutory Authorities
            </h2>
            <p className="text-sm text-slate-600 font-light max-w-2xl leading-relaxed">
              The regulatory and executive bodies administering property registration, transport infrastructure, municipal zoning, digital identity, and healthcare.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {VERIFIED_GOVERNMENT_ENTITIES.map((entity) => (
              <div
                key={entity.id}
                className="bg-white rounded-xs p-8 border border-slate-200 hover:border-[#0284c7]/40 transition-all flex flex-col justify-between group shadow-xs hover:shadow-md"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="px-2.5 py-0.5 rounded-xs text-[10px] font-mono uppercase bg-sky-50 text-[#0284c7] border border-sky-200 font-semibold">
                      {entity.category.replace(/_/g, ' ')}
                    </span>
                    <span className="text-xs font-mono text-slate-400">
                      {entity.jurisdiction}
                    </span>
                  </div>

                  <h3 className="text-xl font-light text-slate-900 mb-1 group-hover:text-[#0284c7] transition-colors font-serif">
                    {entity.name}
                  </h3>
                  <div className="text-xs font-arabic text-slate-400 mb-4">
                    {entity.arabicName}
                  </div>

                  <p className="text-xs text-slate-600 font-light leading-relaxed mb-6">
                    {entity.mandate}
                  </p>

                  <div className="p-4 rounded-xs bg-slate-50 border border-slate-200 space-y-2 mb-6 text-xs font-mono">
                    <div>
                      <span className="text-slate-400 block text-[10px]">Leadership:</span>
                      <span className="text-slate-900 font-medium font-sans text-xs">{entity.leadership}</span>
                    </div>
                    <div>
                      <span className="text-slate-400 block text-[10px]">Statutory Role:</span>
                      <span className="text-[#0284c7] font-semibold">{entity.statutoryRole}</span>
                    </div>
                  </div>

                  <div>
                    <span className="text-[11px] font-mono uppercase text-slate-400 block mb-2 font-semibold">
                      Key Public Services &amp; Powers
                    </span>
                    <div className="flex flex-wrap gap-2 mb-6">
                      {entity.keyServices.map((srv, idx) => (
                        <span
                          key={idx}
                          className="px-2.5 py-1 rounded-xs bg-slate-50 border border-slate-200 text-[11px] font-mono text-slate-700"
                        >
                          {srv}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                  <div className="flex items-center gap-1.5 text-[11px] font-mono text-slate-400">
                    <ShieldCheck className="h-3.5 w-3.5 text-[#0284c7]" />
                    <span>Official Gazette Verified</span>
                  </div>

                  <div className="flex gap-2">
                    {entity.digitalPortals.map((portal, idx) => (
                      <a
                        key={idx}
                        href={portal.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 px-3 py-1 rounded-xs bg-slate-50 hover:bg-[#0284c7] hover:text-white text-xs font-mono text-slate-700 transition-colors border border-slate-200 font-medium"
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
