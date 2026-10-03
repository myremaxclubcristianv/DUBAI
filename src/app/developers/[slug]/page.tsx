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
import { ArrowLeft, ShieldCheck } from 'lucide-react'

export default function DeveloperDetailPage() {
  const params = useParams()
  const slug = params?.slug as string
  const developer = getDeveloperBySlug(slug) || VERIFIED_DEVELOPERS[0]

  const { formatCurrency } = useClient()

  const developerProperties = VERIFIED_PROPERTIES.filter(
    (p) => p.developer_name?.toLowerCase().includes(developer.name.toLowerCase())
  )

  return (
    <div className="flex flex-col min-h-screen bg-[#ffffff] text-[#111111]">
      
      {/* 1. TOP STATUTORY BAR */}
      <div className="border-b border-[#e5e5ea] bg-[#fafaf8] py-4">
        <div className="w-full max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-16 flex items-center justify-between">
          <Link
            href="/developers"
            className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-[#6b6b6b] hover:text-[#111111] transition-colors"
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
      <section className="pt-16 pb-16 sm:pt-24 sm:pb-20 border-b border-[#e5e5ea] bg-[#ffffff]">
        <div className="w-full max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-16 space-y-6">
          <div className="flex flex-wrap items-center gap-3 text-xs font-mono text-[#9f8144] uppercase">
            <span>DLD Developer Registry</span>
            <span>&bull;</span>
            <span>Est. {developer.founded_year || 'Verified'}</span>
          </div>

          <div className="max-w-4xl space-y-4">
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-light tracking-[-0.035em] text-[#111111]">
              {developer.name}
            </h1>
            <p className="text-lg sm:text-xl text-[#6b6b6b] font-light leading-relaxed">
              {developer.portfolio_overview}
            </p>
          </div>
        </div>
      </section>

      {/* 3. DEVELOPMENT CONTEXT & STATUTORY RECORDS */}
      <Section spacing="room-160" surface="white" containerSize="editorial">
        <div className="space-y-12">
          <Eyebrow>01 &bull; CORPORATE &amp; STATUTORY RECORD</Eyebrow>

          <div className="divide-y divide-[#e5e5ea] border-t border-b border-[#e5e5ea]">
            <DataRow label="Entity Legal Title" value={developer.name} />
            <DataRow label="Headquarters" value={developer.headquarters || 'Dubai, United Arab Emirates'} />
            <DataRow label="Year Established" value={String(developer.founded_year || 'Verified')} />
            <DataRow label="Escrow Regime Compliance" value="Dubai Law No. 8 of 2007" />
            <DataRow label="Regulatory Authority" value="Real Estate Regulatory Agency (RERA)" />
          </div>
        </div>
      </Section>

      {/* 4. SELECTED PROJECTS */}
      <Section spacing="room-160" surface="subtle" containerSize="wide">
        <div className="space-y-12">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div className="space-y-3">
              <Eyebrow>02 &bull; MASTER DEVELOPMENTS</Eyebrow>
              <h2 className="text-3xl sm:text-4xl font-light text-[#111111]">
                Selected Projects &amp; Communities
              </h2>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {(developer.notable_communities || []).map((proj: string, idx: number) => (
              <div key={idx} className="p-8 rounded-2xl bg-[#ffffff] border border-[#e5e5ea] space-y-3">
                <span className="text-xs font-mono text-[#9f8144] uppercase tracking-wider block">
                  Project {String(idx + 1).padStart(2, '0')}
                </span>
                <h3 className="text-2xl font-light text-[#111111]">
                  {proj}
                </h3>
                <p className="text-xs text-[#6b6b6b] font-light">
                  Statutory master plan zoning with registered escrow accounts.
                </p>
              </div>
            ))}
          </div>

          {developerProperties.length > 0 && (
            <div className="pt-8 space-y-6">
              <h3 className="text-2xl font-light text-[#111111]">
                Active Platform Inventory by {developer.name}
              </h3>
              <div className="space-y-4">
                {developerProperties.map((prop) => (
                  <div
                    key={prop.id}
                    className="p-6 rounded-2xl bg-[#ffffff] border border-[#e5e5ea] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4"
                  >
                    <div>
                      <h4 className="text-lg font-light text-[#111111]">
                        {prop.title}
                      </h4>
                      <span className="text-xs font-mono text-[#6b6b6b]">
                        {prop.area_name} &bull; {prop.property_type} &bull; {formatCurrency(prop.asking_price || 0)}
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

      {/* 5. STATUTORY FOOTNOTE */}
      <Section spacing="room-96" surface="white" containerSize="reading">
        <div className="p-8 rounded-2xl bg-[#fafaf8] border border-[#e5e5ea] space-y-3 text-xs text-[#6b6b6b]">
          <div className="flex items-center gap-2">
            <ShieldCheck className="h-4 w-4 text-[#9f8144]" />
            <span className="font-mono text-xs uppercase tracking-wider text-[#111111] font-medium">
              Verified Official Record
            </span>
          </div>
          <p className="leading-relaxed">
            Data concerning {developer.name} reflects certified corporate filings and published Dubai Land Department project registrations. No promotional ratings or unverified superlative endorsements are applied.
          </p>
        </div>
      </Section>

    </div>
  )
}
