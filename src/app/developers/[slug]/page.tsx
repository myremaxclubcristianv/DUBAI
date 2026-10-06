'use client'

import * as React from 'react'
import { useParams } from 'next/navigation'
import Link from 'next/link'
import { getDeveloperBySlug, VERIFIED_DEVELOPERS } from '@/lib/data/developers'
import { VERIFIED_PROPERTIES } from '@/lib/data/properties'
import { useClient } from '@/lib/context/client-context'
import {
  Section,
  Eyebrow,
  SourceBadge,
  DataRow,
  PrimaryLink,
} from '@/components/layout/layout-primitives'
import { ArrowLeft, ShieldCheck, Building2 } from 'lucide-react'

export default function DeveloperDetailPage() {
  const params = useParams()
  const slug = params?.slug as string
  const developer = getDeveloperBySlug(slug) || VERIFIED_DEVELOPERS[0]

  const { formatCurrency } = useClient()

  const developerProperties = VERIFIED_PROPERTIES.filter(
    (p) => p.developer_name?.toLowerCase().includes(developer.name.toLowerCase())
  )

  return (
    <div className="flex flex-col min-h-screen bg-white text-slate-900">
      
      {/* 1. TOP STATUTORY BAR */}
      <div className="border-b border-slate-200 bg-slate-50/90 backdrop-blur-md py-4 sticky top-16 z-30">
        <div className="w-full max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-16 flex items-center justify-between">
          <Link
            href="/developers"
            className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-slate-600 hover:text-[#0284c7] transition-colors"
          >
            <ArrowLeft className="h-3.5 w-3.5" />
            <span>Back to Developers Registry</span>
          </Link>
          <div className="flex items-center gap-3">
            <SourceBadge sourceClass="OFFICIAL REGULATORY" sourceName="DLD Registered Entity" />
          </div>
        </div>
      </div>

      {/* 2. DEVELOPER DOSSIER HEADER */}
      <section className="pt-16 pb-16 sm:pt-24 sm:pb-20 border-b border-slate-200 bg-gradient-to-b from-[#f0f7ff] to-white">
        <div className="w-full max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-16 space-y-6">
          <div className="flex flex-wrap items-center gap-3 text-xs font-mono text-[#0284c7] uppercase">
            <span className="px-2.5 py-0.5 bg-sky-100/60 border border-sky-200 text-sky-900 rounded-xs font-medium">
              DLD Developer Registry
            </span>
            <span>&bull;</span>
            <span className="text-slate-600">Est. {developer.founded_year || 'Verified'}</span>
          </div>

          <div className="max-w-4xl space-y-4">
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-light tracking-[-0.035em] text-slate-900 font-serif">
              {developer.name}
            </h1>
            <p className="text-lg sm:text-xl text-slate-600 font-light leading-relaxed">
              {developer.portfolio_overview}
            </p>
          </div>
        </div>
      </section>

      {/* 3. DEVELOPMENT CONTEXT & STATUTORY RECORDS */}
      <Section spacing="room-120" surface="pure" containerSize="editorial">
        <div className="space-y-12">
          <Eyebrow>01 &bull; CORPORATE &amp; STATUTORY RECORD</Eyebrow>

          <div className="divide-y divide-slate-200 border-t border-b border-slate-200 bg-white p-6 rounded-xs border shadow-xs">
            <DataRow label="Entity Legal Title" value={developer.name} />
            <DataRow label="Headquarters" value={developer.headquarters || 'Dubai, United Arab Emirates'} />
            <DataRow label="Year Established" value={String(developer.founded_year || 'Verified')} />
            <DataRow label="Escrow Regime Compliance" value="Dubai Law No. 8 of 2007" />
            <DataRow label="Regulatory Authority" value="Real Estate Regulatory Agency (RERA)" />
          </div>
        </div>
      </Section>

      {/* 4. SELECTED PROJECTS */}
      <Section spacing="room-120" surface="subtle" containerSize="wide">
        <div className="space-y-12">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div className="space-y-3">
              <Eyebrow>02 &bull; MASTER DEVELOPMENTS</Eyebrow>
              <h2 className="text-3xl sm:text-4xl font-light text-slate-900 font-serif">
                Selected Projects &amp; Communities
              </h2>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {(developer.notable_communities || []).map((proj: string, idx: number) => (
              <div key={idx} className="p-8 rounded-xs bg-white border border-slate-200 hover:border-[#0284c7]/40 transition-colors space-y-3 group shadow-xs">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono text-[#0284c7] uppercase tracking-wider block font-semibold">
                    Project {String(idx + 1).padStart(2, '0')}
                  </span>
                  <Building2 className="w-4 h-4 text-slate-400 group-hover:text-[#0284c7] transition-colors" />
                </div>
                <h3 className="text-2xl font-light text-slate-900 font-serif">
                  {proj}
                </h3>
                <p className="text-xs text-slate-600 font-light leading-relaxed">
                  Statutory master plan zoning with registered escrow accounts under Dubai Law No. 8 of 2007.
                </p>
              </div>
            ))}
          </div>

          {developerProperties.length > 0 && (
            <div className="pt-10 space-y-6">
              <h3 className="text-2xl font-light text-slate-900 font-serif">
                Active Platform Inventory by {developer.name}
              </h3>
              <div className="space-y-4">
                {developerProperties.map((prop) => (
                  <div
                    key={prop.id}
                    className="p-6 rounded-xs bg-white border border-slate-200 hover:border-[#0284c7]/40 transition-colors flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 shadow-xs"
                  >
                    <div>
                      <h4 className="text-lg font-light text-slate-900 font-serif">
                        {prop.title}
                      </h4>
                      <span className="text-xs font-mono text-slate-500">
                        {prop.area_name} &bull; {prop.property_type} &bull; <span className="text-slate-900 font-semibold">{formatCurrency(prop.asking_price || 0)}</span>
                      </span>
                    </div>
                    <PrimaryLink href={`/properties/${prop.id}`}>
                      View Property Dossier
                    </PrimaryLink>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </Section>

      {/* 5. STATUTORY FOOTER */}
      <Section spacing="room-96" surface="pure" containerSize="reading">
        <div className="p-8 rounded-xs bg-slate-50 border border-slate-200 space-y-4 shadow-xs">
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-[#0284c7]" />
            <h3 className="text-xl font-light text-slate-900 font-serif">
              Statutory Escrow &amp; Compliance Audit
            </h3>
          </div>
          <p className="text-xs sm:text-sm text-slate-600 font-light leading-relaxed">
            All developments by {developer.name} comply with the trust and escrow framework stipulated under Dubai Law No. 8 of 2007. Buyer capital is ring-fenced and disbursed exclusively against certified engineer progress audits verified by RERA.
          </p>
          <div className="pt-4 border-t border-slate-200 flex items-center justify-between text-[11px] font-mono text-slate-400">
            <span>Registration: Dubai Land Department</span>
            <span>Source Class: OFFICIAL REGULATORY</span>
          </div>
        </div>
      </Section>

    </div>
  )
}
