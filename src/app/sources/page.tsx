'use client'

import { OFFICIAL_SOURCE_REGISTRY } from '@/lib/data/source-registry'
import {
  Eyebrow,
  SourceBadge,
} from '@/components/layout/layout-primitives'
import { ExternalLink, ShieldCheck } from 'lucide-react'

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
    <div className="flex flex-col min-h-screen bg-white text-slate-900">
      
      {/* 1. EDITORIAL HEADER */}
      <section className="pt-16 pb-14 sm:pt-24 sm:pb-20 border-b border-slate-200 bg-gradient-to-b from-[#f0f7ff] to-white">
        <div className="w-full max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-16 space-y-6">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#0284c7]" />
            <Eyebrow>DATA PROVENANCE &bull; RESEARCH METHODOLOGY &amp; CITATIONS</Eyebrow>
          </div>
          
          <div className="max-w-3xl space-y-4">
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-light tracking-[-0.035em] text-slate-900 font-serif">
              PROVENANCE CHARTER
            </h1>
            <p className="text-base sm:text-lg text-slate-600 font-light leading-relaxed">
              The platform enforces zero synthetic data. Every factual assertion, transaction tariff, developer registration number, and residency protocol is anchored in an explicit source class and statutory citation.
            </p>
          </div>
        </div>
      </section>

      {/* 2. SOURCE TAXONOMY & CLASSIFICATION */}
      <main className="w-full max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-16 py-14 sm:py-20 space-y-16 flex-1">
        
        {/* Section 1: Source Classes */}
        <div className="space-y-8">
          <div className="space-y-2">
            <Eyebrow>TAXONOMY HIERARCHY</Eyebrow>
            <h2 className="text-2xl sm:text-3xl font-light text-slate-900 font-serif">
              Source Classification Classes
            </h2>
            <p className="text-sm text-slate-500 font-light max-w-2xl">
              We strictly separate primary sovereign legislation, regulatory indices, corporate inventory, and mathematical calculations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {SOURCE_CLASSES.map((sc, idx) => (
              <div
                key={idx}
                className="p-6 rounded-sm border border-slate-200 bg-white space-y-4 flex flex-col justify-between hover:border-[#0284c7]/40 transition-all shadow-xs"
              >
                <div className="space-y-3">
                  <SourceBadge sourceClass={sc.badge} />
                  <p className="text-xs text-slate-600 font-light leading-relaxed">
                    {sc.description}
                  </p>
                </div>
                <div className="pt-3 border-t border-slate-100 text-[10px] font-mono text-slate-400">
                  Binding Status: {sc.binding}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Section 2: Official Sources Registry Table */}
        <div className="space-y-8">
          <div className="space-y-2">
            <Eyebrow>REGISTRY AUDIT</Eyebrow>
            <h2 className="text-2xl sm:text-3xl font-light text-slate-900 font-serif">
              Structured Source Register &amp; Statutory Provenance
            </h2>
            <p className="text-sm text-slate-500 font-light max-w-2xl">
              Primary public sector institutions, sovereign open data portals, statutory decrees, and central bank benchmarks powering the platform.
            </p>
          </div>

          <div className="divide-y divide-slate-200 border-t border-b border-slate-200 bg-white rounded-xs border shadow-xs">
            {OFFICIAL_SOURCE_REGISTRY.map((src) => (
              <div
                key={src.id}
                className="py-6 px-6 grid grid-cols-1 lg:grid-cols-12 gap-5 items-start hover:bg-sky-50/30 transition-colors"
              >
                <div className="lg:col-span-4 space-y-1">
                  <div className="flex items-center gap-2">
                    <span className="text-[10px] font-mono font-bold px-2 py-0.5 bg-slate-100 text-slate-700 rounded-sm">
                      {src.category}
                    </span>
                    <span className="text-[10px] font-mono text-slate-400">
                      Freq: {src.updateFrequency}
                    </span>
                  </div>
                  <h3 className="text-base font-medium text-slate-900 font-serif leading-snug pt-1">
                    {src.name}
                  </h3>
                  <div className="text-xs font-mono text-[#0284c7]">
                    Authority: {src.authority}
                  </div>
                  {src.governingLawOrDecree && (
                    <div className="text-[11px] text-slate-600 font-light italic">
                      Decree: {src.governingLawOrDecree}
                    </div>
                  )}
                </div>

                <div className="lg:col-span-4 space-y-2 text-xs">
                  <div>
                    <span className="text-slate-400 block text-[10px] font-mono uppercase font-semibold">Dataset / Endpoint:</span>
                    <span className="text-slate-800 font-medium">{src.datasetOrEndpoint}</span>
                  </div>
                  <div>
                    <span className="text-slate-400 block text-[10px] font-mono uppercase font-semibold">Field Mapping:</span>
                    <div className="flex flex-wrap gap-1 pt-1 font-mono text-[10px] text-slate-600">
                      {src.fieldMapping.map((field, fIdx) => (
                        <span key={fIdx} className="px-1.5 py-0.5 bg-slate-100 border border-slate-200 rounded-xs">
                          {field}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="lg:col-span-3 space-y-1 text-xs text-slate-600">
                  <span className="text-slate-400 block text-[10px] font-mono uppercase font-semibold">Method &amp; Limitations:</span>
                  <div className="text-[11px] font-mono text-slate-700">Access: {src.accessMethod}</div>
                  <p className="text-[11px] text-slate-500 font-light leading-relaxed">
                    {src.knownLimitations}
                  </p>
                </div>

                <div className="lg:col-span-1 flex lg:justify-end pt-1">
                  <a
                    href={src.officialUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2.5 rounded-sm border border-slate-200 hover:border-[#0284c7] hover:bg-[#0284c7]/10 transition-colors inline-flex items-center gap-1 text-xs font-mono text-[#0284c7]"
                    title="Open Official Website"
                  >
                    <ExternalLink className="h-4 w-4" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Regulatory Disclaimer */}
        <div className="p-6 sm:p-8 rounded-sm bg-slate-50 border border-slate-200 space-y-3 text-xs text-slate-600 leading-relaxed font-light shadow-xs">
          <div className="flex items-center gap-2 font-medium text-slate-900">
            <ShieldCheck className="h-4 w-4 text-[#0284c7]" />
            <span className="font-semibold">Statutory Legal &amp; Regulatory Notice</span>
          </div>
          <p>
            DUBAI Intelligence is an editorial research and private intelligence platform. Factual references cite official UAE laws including Law No. 7 of 2006 (Land Registration), Law No. 8 of 2007 (Escrow Accounts), Cabinet Resolution No. 65 of 2022 (Golden Visa Regulations), and Federal Decree-Law No. 47 of 2022 (Corporate Tax). Financial calculations are deterministic indicative models based on published schedules.
          </p>
        </div>

      </main>

    </div>
  )
}
