'use client'

import * as React from 'react'
import { VERIFIED_LEGAL_STATUTES, VERIFIED_JUDICIAL_TRIBUNALS } from '@/lib/data/legal'
import { PageIntro, SectionHeader } from '@/components/layout/layout-primitives'
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
    <div className="bg-white text-[#1d1d1f] min-h-screen pb-32 selection:bg-[#0071e3]/10 selection:text-[#1d1d1f]">
      {/* 1. APPLE HERO INTRO */}
      <PageIntro
        eyebrow="Sovereign Legal & Jurisprudential Atlas"
        badge={<SourceBadge status="VERIFIED" sourceName="UAE Ministry of Justice & Dubai Official Gazette" />}
        title="Statutory Law & Jurisprudence."
        subtitle="Authoritative legal statutes governing corporate taxation, off-plan escrow safety, freehold property titles, tenancy caps, and the dual civil/common law court systems."
      />

      <div className="w-full max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8 space-y-24">
        {/* 2. DUAL JUDICIAL BENCHES */}
        <div>
          <SectionHeader
            badge="Court Jurisdictions"
            title="Judicial Tribunals & Dispute Resolution"
            subtitle="Dubai operates a dual legal framework: sovereign Arabic Civil Law courts alongside an independent English Common Law judicial system (DIFC Courts) with global enforcement treaties."
          />

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {VERIFIED_JUDICIAL_TRIBUNALS.map((tribunal) => (
              <div
                key={tribunal.id}
                className="bg-white rounded-3xl p-8 border border-black/10 shadow-[0_2px_12px_rgba(0,0,0,0.03)] flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="px-3 py-1 rounded-full text-[10px] font-bold uppercase bg-[#f5f5f7] text-[#1d1d1f] border border-black/5">
                      {tribunal.legalSystem.replace(/_/g, ' ')}
                    </span>
                    <Gavel className="h-4 w-4 text-[#b8860b]" />
                  </div>

                  <h3 className="text-xl font-bold text-[#1d1d1f] mb-3">
                    {tribunal.name}
                  </h3>

                  <p className="text-xs text-[#515154] leading-relaxed mb-6">
                    {tribunal.description}
                  </p>

                  <div className="space-y-3 bg-[#f5f5f7] p-4 rounded-2xl border border-black/5 text-xs mb-6">
                    <div>
                      <span className="text-[10px] font-bold uppercase text-[#86868b] block">Jurisdiction Scope</span>
                      <span className="text-[#1d1d1f] font-medium">{tribunal.primaryJurisdiction}</span>
                    </div>
                    <div>
                      <span className="text-[10px] font-bold uppercase text-[#86868b] block">Appellate Route</span>
                      <span className="text-[#515154] font-mono text-[11px]">{tribunal.appellateStructure}</span>
                    </div>
                  </div>
                </div>

                <div className="pt-4 border-t border-black/5 text-[11px] text-[#6e6e73]">
                  <strong className="text-[#1d1d1f] block mb-0.5">Enforcement Power:</strong>
                  <span>{tribunal.enforceability}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 3. CORE STATUTORY STATUTES */}
        <div>
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
            <div>
              <span className="text-[11px] font-bold uppercase tracking-widest text-[#b8860b] block mb-1">
                Codified Decrees
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-[#1d1d1f]">
                Statutory Decrees & Legal Codes
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
                  className={`px-4 py-1.5 rounded-full text-xs font-semibold transition-all ${
                    activeJurisdiction === f.val
                      ? 'bg-[#1d1d1f] text-white shadow-xs'
                      : 'bg-[#f5f5f7] text-[#6e6e73] hover:text-[#1d1d1f] hover:bg-black/5'
                  }`}
                >
                  {f.label}
                </button>
              ))}
            </div>
          </div>

          <div className="space-y-8">
            {filteredStatutes.map((statute) => (
              <div
                key={statute.id}
                className="bg-white rounded-3xl p-8 md:p-10 border border-black/10 shadow-[0_2px_12px_rgba(0,0,0,0.03)]"
              >
                <div className="flex flex-col md:flex-row md:items-center justify-between pb-6 border-b border-black/5 gap-4 mb-6">
                  <div>
                    <div className="flex items-center gap-2 mb-1.5">
                      <span className="px-3 py-1 rounded-full text-xs font-bold uppercase bg-[#f5f5f7] border border-black/5 text-[#b8860b]">
                        {statute.decreeCode}
                      </span>
                      <span className="text-xs text-[#86868b]">
                        Promulgated {statute.promulgationYear}
                      </span>
                    </div>
                    <h3 className="text-2xl font-bold text-[#1d1d1f]">
                      {statute.officialTitle}
                    </h3>
                  </div>

                  <div className="text-left md:text-right">
                    <span className="text-[10px] font-bold uppercase text-[#86868b] block">Regulatory Authority</span>
                    <span className="text-xs font-semibold text-[#1d1d1f]">{statute.regulatoryBody}</span>
                  </div>
                </div>

                <p className="text-xs font-medium text-[#1d1d1f] mb-6 leading-relaxed">
                  <strong>Statutory Scope:</strong> {statute.statutoryScope}
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  {/* Key Provisions */}
                  <div>
                    <span className="text-[11px] font-bold uppercase text-[#86868b] block mb-3">
                      Core Statutory Provisions
                    </span>
                    <div className="space-y-2">
                      {statute.keyProvisions.map((prov, idx) => (
                        <div key={idx} className="flex items-start gap-2.5 text-xs text-[#515154]">
                          <CheckCircle2 className="h-3.5 w-3.5 text-emerald-700 shrink-0 mt-0.5" />
                          <span>{prov}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Conditions & Penalties */}
                  <div className="space-y-4">
                    <div className="p-4 rounded-2xl bg-[#f5f5f7] border border-black/5 text-xs">
                      <span className="text-[10px] font-bold uppercase text-[#86868b] block mb-1">
                        Exemptions & Qualifying Criteria
                      </span>
                      <p className="text-[#515154]">{statute.exemptionsOrConditions}</p>
                    </div>

                    <div className="p-4 rounded-2xl bg-amber-50/50 border border-amber-200/60 text-xs">
                      <span className="text-[10px] font-bold uppercase text-amber-800 block mb-1">
                        Enforcement & Statutory Penalties
                      </span>
                      <p className="text-amber-900">{statute.penaltiesOrEnforcement}</p>
                    </div>
                  </div>
                </div>

                <div className="pt-4 border-t border-black/5 flex items-center justify-between text-xs text-[#86868b]">
                  <span>Gazette Reference: <strong className="text-[#1d1d1f] font-mono">{statute.officialGazetteRef}</strong></span>
                  <a
                    href={statute.provenance.source_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 font-bold text-[#1d1d1f] hover:underline"
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
