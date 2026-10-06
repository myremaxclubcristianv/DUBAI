'use client'

import * as React from 'react'
import { VERIFIED_LEGAL_STATUTES, VERIFIED_JUDICIAL_TRIBUNALS } from '@/lib/data/legal'
import { PageIntro, Eyebrow } from '@/components/layout/layout-primitives'
import { SourceBadge } from '@/components/ui/source-badge'
import {
  Gavel,
  CheckCircle2,
  ExternalLink,
} from 'lucide-react'

export default function LegalAtlasPage() {
  const [activeJurisdiction, setActiveJurisdiction] = React.useState<string>('ALL')

  const filteredStatutes = activeJurisdiction === 'ALL'
    ? VERIFIED_LEGAL_STATUTES
    : VERIFIED_LEGAL_STATUTES.filter((s) => s.jurisdictionLevel === activeJurisdiction)

  return (
    <div className="bg-white text-slate-900 min-h-screen pb-32">
      {/* 1. EDITORIAL HERO INTRO */}
      <PageIntro
        eyebrow="Sovereign Legal & Jurisprudential Atlas"
        badge={<SourceBadge status="VERIFIED" sourceName="UAE Ministry of Justice & Dubai Official Gazette" />}
        title={<>Statutory Law & Jurisprudence<span className="text-[#0284c7]">.</span></>}
        description="Authoritative legal statutes governing corporate taxation, off-plan escrow safety, freehold property titles, tenancy caps, and the dual civil/common law court systems."
      />

      <div className="w-full max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-16 space-y-20 pt-8">
        {/* 2. DUAL JUDICIAL BENCHES */}
        <div>
          <div className="mb-8 space-y-3">
            <Eyebrow>COURT JURISDICTIONS</Eyebrow>
            <h2 className="text-3xl sm:text-4xl font-light text-slate-900 font-serif">
              Judicial Tribunals &amp; Dispute Resolution
            </h2>
            <p className="text-sm text-slate-600 font-light max-w-2xl leading-relaxed">
              Dubai operates a dual legal framework: sovereign Arabic Civil Law courts alongside an independent English Common Law judicial system (DIFC Courts) with global enforcement treaties.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {VERIFIED_JUDICIAL_TRIBUNALS.map((tribunal) => (
              <div
                key={tribunal.id}
                className="bg-white rounded-xs p-8 border border-slate-200 hover:border-[#0284c7]/40 transition-all flex flex-col justify-between group shadow-xs hover:shadow-md"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="px-2.5 py-0.5 rounded-xs text-[10px] font-mono uppercase tracking-wider bg-sky-50 text-[#0284c7] border border-sky-200 font-semibold">
                      {tribunal.legalSystem.replace(/_/g, ' ')}
                    </span>
                    <Gavel className="h-4 w-4 text-slate-400 group-hover:text-[#0284c7] transition-colors" />
                  </div>

                  <h3 className="text-xl font-light text-slate-900 mb-3 group-hover:text-[#0284c7] transition-colors font-serif">
                    {tribunal.name}
                  </h3>

                  <p className="text-xs text-slate-600 leading-relaxed mb-6 font-light">
                    {tribunal.description}
                  </p>

                  <div className="space-y-3 bg-slate-50 p-4 rounded-xs border border-slate-200 text-xs mb-6 font-mono">
                    <div>
                      <span className="text-[10px] uppercase text-slate-400 block">Jurisdiction Scope</span>
                      <span className="text-slate-900 font-medium font-sans text-xs">{tribunal.primaryJurisdiction}</span>
                    </div>
                    <div>
                      <span className="text-[10px] uppercase text-slate-400 block">Appellate Route</span>
                      <span className="text-[#0284c7] font-semibold text-[11px]">{tribunal.appellateStructure}</span>
                    </div>
                  </div>
                </div>

                <div className="pt-4 border-t border-slate-100 text-[11px] text-slate-500">
                  <strong className="text-slate-900 block mb-0.5 font-semibold">Enforcement Power:</strong>
                  <span>{tribunal.enforceability}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 3. CORE STATUTORY STATUTES */}
        <div>
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4 border-b border-slate-200 pb-6">
            <div>
              <Eyebrow>CODIFIED DECREES</Eyebrow>
              <h2 className="text-3xl sm:text-4xl font-light tracking-tight text-slate-900 font-serif">
                Statutory Decrees &amp; Legal Codes
              </h2>
            </div>

            {/* Jurisdiction filter */}
            <div className="flex flex-wrap gap-2">
              {[
                { label: 'All Jurisdictions', val: 'ALL' },
                { label: 'Federal UAE Decrees', val: 'FEDERAL_UAE' },
                { label: 'Emirate of Dubai Decrees', val: 'EMIRATE_DUBAI' },
              ].map((f) => (
                <button
                  key={f.val}
                  onClick={() => setActiveJurisdiction(f.val)}
                  className={`px-3 py-1.5 rounded-xs text-xs font-mono uppercase tracking-wider transition-all cursor-pointer ${
                    activeJurisdiction === f.val
                      ? 'bg-[#0284c7] text-white font-semibold'
                      : 'bg-slate-100 border border-slate-200 text-slate-600 hover:text-slate-900 hover:bg-slate-200'
                  }`}
                >
                  {f.label}
                </button>
              ))}
            </div>
          </div>

          <div className="space-y-6">
            {filteredStatutes.map((statute) => (
              <div
                key={statute.id}
                className="bg-white rounded-xs p-8 md:p-10 border border-slate-200 hover:border-[#0284c7]/40 transition-all shadow-xs"
              >
                <div className="flex flex-col md:flex-row md:items-center justify-between pb-6 border-b border-slate-200 gap-4 mb-6">
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <span className="px-2.5 py-0.5 rounded-xs text-xs font-mono uppercase bg-sky-50 border border-sky-200 text-[#0284c7] font-semibold">
                        {statute.decreeCode}
                      </span>
                      <span className="text-xs font-mono text-slate-400">
                        Promulgated {statute.promulgationYear}
                      </span>
                    </div>
                    <h3 className="text-2xl font-light text-slate-900 font-serif">
                      {statute.officialTitle}
                    </h3>
                  </div>

                  <div className="text-left md:text-right">
                    <span className="text-[10px] font-mono uppercase text-slate-400 block">Regulatory Authority</span>
                    <span className="text-xs font-mono text-[#0284c7] font-semibold">{statute.regulatoryBody}</span>
                  </div>
                </div>

                <p className="text-xs font-light text-slate-600 mb-6 leading-relaxed">
                  <strong className="text-slate-900 font-semibold">Statutory Scope:</strong> {statute.statutoryScope}
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  {/* Key Provisions */}
                  <div>
                    <span className="text-[11px] font-mono uppercase text-slate-400 block mb-3 font-semibold">
                      Core Statutory Provisions
                    </span>
                    <div className="space-y-2">
                      {statute.keyProvisions.map((prov, idx) => (
                        <div key={idx} className="flex items-start gap-2.5 text-xs text-slate-600 font-light">
                          <CheckCircle2 className="h-3.5 w-3.5 text-[#0284c7] shrink-0 mt-0.5" />
                          <span>{prov}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Conditions & Penalties */}
                  <div className="space-y-4">
                    <div className="p-4 rounded-xs bg-slate-50 border border-slate-200 text-xs">
                      <span className="text-[10px] font-mono uppercase text-slate-400 block mb-1 font-semibold">
                        Exemptions &amp; Qualifying Criteria
                      </span>
                      <p className="text-slate-600 font-light">{statute.exemptionsOrConditions}</p>
                    </div>

                    <div className="p-4 rounded-xs bg-rose-50 border border-rose-200 text-xs">
                      <span className="text-[10px] font-mono uppercase text-rose-700 block mb-1 font-semibold">
                        Enforcement &amp; Statutory Penalties
                      </span>
                      <p className="text-rose-900 font-light">{statute.penaltiesOrEnforcement}</p>
                    </div>
                  </div>
                </div>

                <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
                  <span>Gazette Reference: <strong className="text-slate-900 font-mono font-semibold">{statute.officialGazetteRef}</strong></span>
                  <a
                    href={statute.provenance.source_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 font-mono text-[#0284c7] hover:underline font-medium"
                  >
                    <span>Official Gazette Portal</span>
                    <ExternalLink className="h-3 w-3" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
