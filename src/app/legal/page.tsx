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
    <div className="bg-[#08080a] text-[#f5f5f7] min-h-screen pb-32 selection:bg-[#c9a962]/20 selection:text-[#f5f5f7]">
      {/* 1. EDITORIAL HERO INTRO */}
      <PageIntro
        eyebrow="Sovereign Legal & Jurisprudential Atlas"
        badge={<SourceBadge status="VERIFIED" sourceName="UAE Ministry of Justice & Dubai Official Gazette" />}
        title={<>Statutory Law & Jurisprudence<span className="text-[#c9a962]">.</span></>}
        description="Authoritative legal statutes governing corporate taxation, off-plan escrow safety, freehold property titles, tenancy caps, and the dual civil/common law court systems."
      />

      <div className="w-full max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-16 space-y-20">
        {/* 2. DUAL JUDICIAL BENCHES */}
        <div>
          <div className="mb-8 space-y-3">
            <Eyebrow>COURT JURISDICTIONS</Eyebrow>
            <h2 className="text-3xl sm:text-4xl font-light text-[#f5f5f7]">
              Judicial Tribunals &amp; Dispute Resolution
            </h2>
            <p className="text-sm text-[#a1a1aa] font-light max-w-2xl leading-relaxed">
              Dubai operates a dual legal framework: sovereign Arabic Civil Law courts alongside an independent English Common Law judicial system (DIFC Courts) with global enforcement treaties.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {VERIFIED_JUDICIAL_TRIBUNALS.map((tribunal) => (
              <div
                key={tribunal.id}
                className="bg-[#111116] rounded-xs p-8 border border-white/[0.08] hover:border-[#c9a962]/40 transition-all flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="px-2.5 py-0.5 rounded-xs text-[10px] font-mono uppercase tracking-wider bg-white/5 text-[#c9a962] border border-white/10">
                      {tribunal.legalSystem.replace(/_/g, ' ')}
                    </span>
                    <Gavel className="h-4 w-4 text-[#71717a] group-hover:text-[#c9a962] transition-colors" />
                  </div>

                  <h3 className="text-xl font-light text-[#f5f5f7] mb-3 group-hover:text-[#c9a962] transition-colors">
                    {tribunal.name}
                  </h3>

                  <p className="text-xs text-[#a1a1aa] leading-relaxed mb-6 font-light">
                    {tribunal.description}
                  </p>

                  <div className="space-y-3 bg-black/40 p-4 rounded-xs border border-white/[0.06] text-xs mb-6">
                    <div>
                      <span className="text-[10px] font-mono uppercase text-[#71717a] block">Jurisdiction Scope</span>
                      <span className="text-[#f5f5f7] font-light">{tribunal.primaryJurisdiction}</span>
                    </div>
                    <div>
                      <span className="text-[10px] font-mono uppercase text-[#71717a] block">Appellate Route</span>
                      <span className="text-[#c9a962] font-mono text-[11px]">{tribunal.appellateStructure}</span>
                    </div>
                  </div>
                </div>

                <div className="pt-4 border-t border-white/[0.06] text-[11px] text-[#71717a]">
                  <strong className="text-[#f5f5f7] block mb-0.5 font-medium">Enforcement Power:</strong>
                  <span>{tribunal.enforceability}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 3. CORE STATUTORY STATUTES */}
        <div>
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4 border-b border-white/[0.06] pb-6">
            <div>
              <Eyebrow>CODIFIED DECREES</Eyebrow>
              <h2 className="text-3xl sm:text-4xl font-light tracking-tight text-[#f5f5f7]">
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
                  className={`px-3 py-1.5 rounded-xs text-xs font-mono uppercase tracking-wider transition-all ${
                    activeJurisdiction === f.val
                      ? 'bg-[#c9a962] text-[#08080a] font-semibold'
                      : 'bg-black/30 border border-white/10 text-[#a1a1aa] hover:text-[#f5f5f7] hover:border-white/20'
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
                className="bg-[#111116] rounded-xs p-8 md:p-10 border border-white/[0.08] hover:border-[#c9a962]/40 transition-all"
              >
                <div className="flex flex-col md:flex-row md:items-center justify-between pb-6 border-b border-white/[0.06] gap-4 mb-6">
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <span className="px-2.5 py-0.5 rounded-xs text-xs font-mono uppercase bg-[#c9a962]/10 border border-[#c9a962]/30 text-[#c9a962]">
                        {statute.decreeCode}
                      </span>
                      <span className="text-xs font-mono text-[#71717a]">
                        Promulgated {statute.promulgationYear}
                      </span>
                    </div>
                    <h3 className="text-2xl font-light text-[#f5f5f7]">
                      {statute.officialTitle}
                    </h3>
                  </div>

                  <div className="text-left md:text-right">
                    <span className="text-[10px] font-mono uppercase text-[#71717a] block">Regulatory Authority</span>
                    <span className="text-xs font-mono text-[#c9a962]">{statute.regulatoryBody}</span>
                  </div>
                </div>

                <p className="text-xs font-light text-[#a1a1aa] mb-6 leading-relaxed">
                  <strong className="text-[#f5f5f7] font-medium">Statutory Scope:</strong> {statute.statutoryScope}
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  {/* Key Provisions */}
                  <div>
                    <span className="text-[11px] font-mono uppercase text-[#71717a] block mb-3">
                      Core Statutory Provisions
                    </span>
                    <div className="space-y-2">
                      {statute.keyProvisions.map((prov, idx) => (
                        <div key={idx} className="flex items-start gap-2.5 text-xs text-[#a1a1aa] font-light">
                          <CheckCircle2 className="h-3.5 w-3.5 text-[#c9a962] shrink-0 mt-0.5" />
                          <span>{prov}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Conditions & Penalties */}
                  <div className="space-y-4">
                    <div className="p-4 rounded-xs bg-black/40 border border-white/[0.06] text-xs">
                      <span className="text-[10px] font-mono uppercase text-[#71717a] block mb-1">
                        Exemptions &amp; Qualifying Criteria
                      </span>
                      <p className="text-[#a1a1aa] font-light">{statute.exemptionsOrConditions}</p>
                    </div>

                    <div className="p-4 rounded-xs bg-rose-950/20 border border-rose-500/20 text-xs">
                      <span className="text-[10px] font-mono uppercase text-rose-400 block mb-1">
                        Enforcement &amp; Statutory Penalties
                      </span>
                      <p className="text-rose-200/80 font-light">{statute.penaltiesOrEnforcement}</p>
                    </div>
                  </div>
                </div>

                <div className="pt-4 border-t border-white/[0.06] flex items-center justify-between text-xs text-[#71717a]">
                  <span>Gazette Reference: <strong className="text-[#f5f5f7] font-mono">{statute.officialGazetteRef}</strong></span>
                  <a
                    href={statute.provenance.source_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 font-mono text-[#c9a962] hover:underline"
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
