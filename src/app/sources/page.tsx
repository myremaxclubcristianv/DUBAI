'use client'

import * as React from 'react'
import { OFFICIAL_SOURCES_REGISTRY } from '@/lib/data/sources'
import { ProvenanceTag } from '@/components/layout/layout-primitives'
import {
  Scale,
  ExternalLink,
} from 'lucide-react'

const SOURCE_CLASSES = [
  {
    name: 'OFFICIAL GOVERNMENT',
    badge: 'OFFICIAL GOVERNMENT' as const,
    description: 'Primary sovereign decrees, executive councils, and municipal ministries including Dubai Land Department (DLD), GDRFA Dubai, Federal Tax Authority (FTA), and Central Bank of the UAE (CBUAE).',
    binding: 'Statutory Law & Regulatory Mandate'
  },
  {
    name: 'OFFICIAL REGULATORY',
    badge: 'OFFICIAL REGULATORY' as const,
    description: 'Regulatory agencies and supervisory bodies including the Real Estate Regulatory Agency (RERA), DIFC Authority, and Dubai Maritime Authority.',
    binding: 'Official Regulatory Standards & Rules'
  },
  {
    name: 'OFFICIAL CORPORATE',
    badge: 'OFFICIAL CORPORATE' as const,
    description: 'Direct institutional disclosures from licensed master developers (e.g. Emaar, Nakheel, Meraas, OMNIYAT) and sovereign investment enterprises.',
    binding: 'Official Developer Inventory'
  },
  {
    name: 'LICENSED OPERATOR',
    badge: 'LICENSED OPERATOR' as const,
    description: 'Licensed private aviation FBO operators, registered marina managers, and hospitality conglomerates holding active UAE commercial licenses.',
    binding: 'Commercial Terms & Operating Schedules'
  },
  {
    name: 'EDITORIAL SOURCE',
    badge: 'EDITORIAL SOURCE' as const,
    description: 'Independent third-party editorial publications such as the Michelin Guide Dubai for gastronomy inspection selections.',
    binding: 'Editorial Evaluation (Non-Governmental)'
  },
  {
    name: 'CALCULATED',
    badge: 'CALCULATED' as const,
    description: 'Deterministic mathematical computations based on published statutory formulas (e.g. 4% combined DLD sale registration fee, 0.25% mortgage registration fee, Mollak service charges).',
    binding: 'Deterministic Mathematical Output'
  }
]

export default function SourcesPage() {
  return (
    <div className="bg-[#ffffff] text-[#111111] min-h-screen pb-24">
      
      {/* 1. EDITORIAL HEADER */}
      <section className="pt-12 pb-12 sm:pt-16 sm:pb-16 border-b border-[#e5e5ea] bg-[#fafaf8]">
        <div className="w-full max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          <div className="flex items-center justify-between">
            <span className="text-[10px] font-mono font-bold uppercase tracking-[0.2em] text-[#9f8144]">
              DATA PROVENANCE &bull; RESEARCH METHODOLOGY
            </span>
            <ProvenanceTag sourceClass="OFFICIAL GOVERNMENT" sourceName="Registry Audit" />
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-[#111111]">
            Sources, Provenance &amp; Methodology Charter
          </h1>
          
          <p className="text-sm sm:text-base text-[#484848] max-w-3xl leading-relaxed">
            The platform architecture enforces zero synthetic data. Every factual assertion, transaction tariff, developer number, and residency protocol is tied to an explicit source class and statutory citation.
          </p>
        </div>
      </section>

      {/* 2. SOURCE TAXONOMY & CLASSIFICATION */}
      <main className="w-full max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8 py-14 space-y-16">
        
        {/* Section 1: Source Classes */}
        <div className="space-y-6">
          <div className="border-b border-[#e5e5ea] pb-3">
            <span className="text-[10px] font-mono uppercase text-[#9f8144] font-semibold block">
              TAXONOMY HIERARCHY
            </span>
            <h2 className="text-2xl font-semibold text-[#111111]">
              Source Classification Classes
            </h2>
            <p className="text-xs text-[#6b6b6b]">
              We distinguish between primary sovereign legislation, regulatory indices, corporate inventory, and mathematical calculations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {SOURCE_CLASSES.map((sc, idx) => (
              <div
                key={idx}
                className="p-5 rounded border border-[#e5e5ea] bg-[#ffffff] space-y-3 flex flex-col justify-between"
              >
                <div className="space-y-2">
                  <ProvenanceTag sourceClass={sc.badge} />
                  <p className="text-xs text-[#484848] leading-relaxed pt-1">
                    {sc.description}
                  </p>
                </div>
                <div className="pt-3 border-t border-[#f5f5f3] text-[10px] font-mono text-[#6b6b6b]">
                  Classification: {sc.binding}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Section 2: Price & Valuation Provenance */}
        <div className="space-y-6">
          <div className="border-b border-[#e5e5ea] pb-3">
            <span className="text-[10px] font-mono uppercase text-[#9f8144] font-semibold block">
              VALUATION INTEGRITY
            </span>
            <h2 className="text-2xl font-semibold text-[#111111]">
              Price Classification Standard
            </h2>
            <p className="text-xs text-[#6b6b6b]">
              Strict separation between vendor asking valuations, achieved transaction records, and calculated estimates.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-5 rounded border border-[#e5e5ea] bg-[#fafaf8] space-y-2">
              <span className="text-xs font-mono font-bold text-[#111111] block uppercase">ASKING PRICE</span>
              <p className="text-xs text-[#484848] leading-relaxed">
                Direct quoted asking price from verified developer inventory or vendor representation. Never represented as achieved final sale value.
              </p>
              <div className="pt-2 text-[10px] font-mono text-[#6b6b6b]">Label: ASKING VALUATION</div>
            </div>

            <div className="p-5 rounded border border-[#e5e5ea] bg-[#fafaf8] space-y-2">
              <span className="text-xs font-mono font-bold text-[#111111] block uppercase">TRANSACTION PRICE</span>
              <p className="text-xs text-[#484848] leading-relaxed">
                Historical closed conveyance price recorded in official Dubai Land Department open data ledgers and registration trustee filings.
              </p>
              <div className="pt-2 text-[10px] font-mono text-[#6b6b6b]">Label: RECORDED DLD TRANSACTION</div>
            </div>

            <div className="p-5 rounded border border-[#e5e5ea] bg-[#fafaf8] space-y-2">
              <span className="text-xs font-mono font-bold text-[#111111] block uppercase">PRICE ON REQUEST</span>
              <p className="text-xs text-[#484848] leading-relaxed">
                Applied when property pricing is confidential or awaiting direct developer release. The platform never fabricates speculative numbers.
              </p>
              <div className="pt-2 text-[10px] font-mono text-[#6b6b6b]">Label: PRICE ON REQUEST</div>
            </div>
          </div>
        </div>

        {/* Section 3: Official Sources Registry Table */}
        <div className="space-y-6">
          <div className="border-b border-[#e5e5ea] pb-3">
            <span className="text-[10px] font-mono uppercase text-[#9f8144] font-semibold block">
              REGISTRY AUDIT
            </span>
            <h2 className="text-2xl font-semibold text-[#111111]">
              Verified Authority Registry
            </h2>
            <p className="text-xs text-[#6b6b6b]">
              Primary public sector institutions cited across the platform.
            </p>
          </div>

          <div className="border border-[#e5e5ea] rounded divide-y divide-[#e5e5ea] bg-[#ffffff]">
            <div className="hidden md:grid grid-cols-12 gap-4 px-6 py-3 bg-[#fafaf8] text-[10px] font-mono text-[#6b6b6b] uppercase tracking-wider font-semibold">
              <div className="col-span-4">Authority Entity</div>
              <div className="col-span-2">Class</div>
              <div className="col-span-2">Jurisdiction</div>
              <div className="col-span-3">Primary Mandate</div>
              <div className="col-span-1 text-right">Portal</div>
            </div>

            {OFFICIAL_SOURCES_REGISTRY.map((src) => (
              <div
                key={src.id}
                className="grid grid-cols-1 md:grid-cols-12 gap-3 md:gap-4 p-5 md:px-6 md:py-4 items-start hover:bg-[#fafaf8] transition-colors"
              >
                <div className="col-span-1 md:col-span-4 space-y-0.5">
                  <div className="text-sm font-semibold text-[#111111]">{src.name}</div>
                  <span className="text-xs font-mono text-[#6b6b6b]">Code: {src.code}</span>
                </div>

                <div className="col-span-1 md:col-span-2 text-xs font-mono text-[#484848] pt-0.5">
                  <span className="md:hidden text-[#6b6b6b] text-[10px] mr-2">CLASS:</span>
                  {src.authority_type}
                </div>

                <div className="col-span-1 md:col-span-2 text-xs text-[#484848] pt-0.5">
                  <span className="md:hidden text-[#6b6b6b] text-[10px] mr-2">JURISDICTION:</span>
                  {src.jurisdiction}
                </div>

                <div className="col-span-1 md:col-span-3 text-xs text-[#484848] pt-0.5">
                  <span className="md:hidden text-[#6b6b6b] text-[10px] mr-2">MANDATE:</span>
                  {src.key_mandate}
                </div>

                <div className="col-span-1 md:col-span-1 flex md:justify-end pt-1">
                  <a
                    href={src.official_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs text-[#111111] hover:text-[#9f8144] inline-flex items-center gap-1 font-mono"
                    title="Open Official Website"
                  >
                    <ExternalLink className="h-3.5 w-3.5" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Section 4: Regulatory Disclaimer */}
        <div className="p-6 rounded bg-[#fafaf8] border border-[#e5e5ea] space-y-3 text-xs text-[#484848] leading-relaxed">
          <h3 className="text-sm font-semibold text-[#111111] flex items-center gap-2">
            <Scale className="h-4 w-4 text-[#9f8144]" />
            <span>Statutory Legal &amp; Regulatory Notice</span>
          </h3>
          <p>
            The DUBAI Platform is an editorial research and private intelligence platform. Factual references cite official UAE laws including Law No. 7 of 2006 (Land Registration), Law No. 8 of 2007 (Escrow Accounts), Cabinet Resolution No. 65 of 2022 (Golden Visa Regulations), and Federal Decree-Law No. 47 of 2022 (Corporate Tax). Financial calculations are deterministic indicative models based on published schedules. This platform does not provide automated legal advice or licensed brokerage representation without direct consultation.
          </p>
        </div>

      </main>

    </div>
  )
}
