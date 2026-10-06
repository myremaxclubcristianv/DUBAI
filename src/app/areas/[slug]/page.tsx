'use client'

import * as React from 'react'
import { useParams } from 'next/navigation'
import Link from 'next/link'
import Image from 'next/image'
import { getAreaBySlug, DUBAI_AREAS } from '@/lib/data/areas'
import { VERIFIED_PROPERTIES } from '@/lib/data/properties'
import { useClient } from '@/lib/context/client-context'
import {
  Section,
  Eyebrow,
  SourceBadge,
  DataRow,
  PrimaryLink,
  SecondaryLink,
} from '@/components/layout/layout-primitives'
import { ArrowLeft, Building, ShieldCheck, MapPin } from 'lucide-react'

export default function DistrictDetailPage() {
  const params = useParams()
  const slug = params?.slug as string
  const area = getAreaBySlug(slug) || DUBAI_AREAS[0]

  const { formatCurrency } = useClient()

  const matchingProperties = VERIFIED_PROPERTIES.filter(
    (p) => p.area_name?.toLowerCase().includes(area.name.toLowerCase())
  )

  const heroImage = area.image || 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=1600&q=85'

  return (
    <div className="flex flex-col min-h-screen bg-white text-slate-900">
      
      {/* 1. TOP BREADCRUMB STRIP */}
      <div className="border-b border-slate-200 bg-slate-50/90 backdrop-blur-md py-4 sticky top-16 z-30">
        <div className="w-full max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-16 flex items-center justify-between">
          <Link
            href="/districts"
            className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-slate-600 hover:text-[#0284c7] transition-colors"
          >
            <ArrowLeft className="h-3.5 w-3.5" />
            <span>Back to Dubai Atlas</span>
          </Link>
          <div className="flex items-center gap-3">
            <SourceBadge sourceClass="OFFICIAL GOVERNMENT" sourceName="DLD Regulation 3/2006" />
          </div>
        </div>
      </div>

      {/* 2. OPENING IMAGE & DISTRICT HEADLINE */}
      <section className="pt-12 sm:pt-16 pb-12 border-b border-slate-200 bg-gradient-to-b from-[#f0f7ff] to-white">
        <div className="w-full max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-16 space-y-8">
          
          <div className="space-y-4">
            <div className="flex items-center gap-3 text-xs font-mono uppercase text-[#0284c7]">
              <span className="px-2.5 py-0.5 bg-sky-100/60 border border-sky-200 text-sky-900 rounded-xs font-medium">
                {area.sector} SECTOR
              </span>
              <span>&bull;</span>
              <span className="text-slate-700">100% FOREIGN FREEHOLD TITLE</span>
            </div>
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-light tracking-[-0.035em] text-slate-900 font-serif">
              {area.name}
            </h1>
            <p className="text-lg sm:text-xl text-slate-600 font-light max-w-3xl leading-relaxed">
              {area.description}
            </p>
          </div>

          {/* Large Architectural Photographic Spread */}
          <div className="relative aspect-[16/9] sm:aspect-[21/9] w-full overflow-hidden rounded-xs bg-slate-100 border border-slate-200 shadow-lg">
            <Image
              src={heroImage}
              alt={area.name}
              fill
              priority
              sizes="(max-width: 1440px) 100vw, 1440px"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent" />
            <div className="absolute bottom-6 left-6 right-6 flex items-center justify-between text-xs font-mono text-white">
              <span className="flex items-center gap-2 bg-slate-900/80 backdrop-blur-md px-3 py-1.5 border border-white/20 rounded-xs">
                <MapPin className="w-3.5 h-3.5 text-[#38bdf8]" />
                {area.name} Coordinates &bull; Dubai Master Zoning
              </span>
              <span className="hidden sm:inline bg-slate-900/80 backdrop-blur-md px-3 py-1.5 border border-white/20 rounded-xs text-slate-200">
                Law No. 7/2006 Freehold Jurisdiction
              </span>
            </div>
          </div>

        </div>
      </section>

      {/* 3. CHARACTER & URBAN FABRIC */}
      <Section spacing="room-120" surface="pure" containerSize="editorial">
        <div className="space-y-8">
          <Eyebrow>01 &bull; DISTRICT CHARACTER</Eyebrow>
          <h2 className="text-2xl sm:text-4xl font-light text-slate-900 leading-relaxed tracking-tight font-serif">
            {area.name} represents an institutional master-planned territory combining strategic transport arterial connectivity, dedicated infrastructure covenants, and long-term capital preservation.
          </h2>
          <p className="text-base text-slate-600 font-light leading-relaxed">
            Governed under Dubai Land Department regulations and Law No. 7 of 2006, the district adheres to strict zoning covenants, common area management regulations, and verified title registration frameworks.
          </p>
        </div>
      </Section>

      {/* 4. PROPERTY REGISTER IN THIS DISTRICT */}
      <Section spacing="room-120" surface="subtle" containerSize="wide">
        <div className="space-y-12">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div className="space-y-3">
              <Eyebrow>02 &bull; PROPERTY ASSETS</Eyebrow>
              <h2 className="text-3xl sm:text-4xl font-light text-slate-900 font-serif">
                Verified Residences in {area.name} ({matchingProperties.length})
              </h2>
            </div>
            <SecondaryLink href="/properties">
              View All Platform Properties
            </SecondaryLink>
          </div>

          {matchingProperties.length === 0 ? (
            <div className="p-10 rounded-xs bg-white border border-slate-200 text-center space-y-4 shadow-xs">
              <Building className="w-8 h-8 text-[#0284c7] mx-auto opacity-60" />
              <p className="text-sm text-slate-600 max-w-md mx-auto">
                No public units currently listed in {area.name}. Private off-market allocations are available upon institutional mandate.
              </p>
              <PrimaryLink href="/private-client">
                Request Off-Market Allocation
              </PrimaryLink>
            </div>
          ) : (
            <div className="space-y-4">
              {matchingProperties.map((prop) => (
                <div
                  key={prop.id}
                  className="p-6 sm:p-8 rounded-xs bg-white border border-slate-200 hover:border-[#0284c7]/40 transition-colors flex flex-col md:flex-row items-start md:items-center justify-between gap-6 group shadow-xs"
                >
                  <div className="flex items-center gap-6">
                    <div className="relative w-24 h-24 rounded-xs overflow-hidden bg-slate-100 shrink-0 border border-slate-200">
                      <Image
                        src={prop.images[0] || heroImage}
                        alt={prop.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                    <div className="space-y-1">
                      <span className="text-[10px] font-mono text-[#0284c7] uppercase tracking-wider font-semibold">
                        {prop.developer_name} &bull; {prop.property_type}
                      </span>
                      <h3 className="text-xl font-light text-slate-900 font-serif">
                        <Link href={`/properties/${prop.id}`} className="hover:text-[#0284c7] transition-colors">
                          {prop.title}
                        </Link>
                      </h3>
                      <span className="text-xs font-mono text-slate-500 block">
                        {prop.bedrooms} Bed &bull; {prop.internal_area_sqft?.toLocaleString()} SQ. FT
                      </span>
                    </div>
                  </div>

                  <div className="flex items-center gap-6 self-end md:self-auto">
                    <div className="text-left md:text-right font-mono">
                      <span className="text-[10px] text-slate-400 uppercase block">Asking Price</span>
                      <span className="text-lg font-semibold text-slate-900">
                        {formatCurrency(prop.asking_price || 0)}
                      </span>
                    </div>
                    <PrimaryLink href={`/properties/${prop.id}`}>
                      View Dossier
                    </PrimaryLink>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </Section>

      {/* 5. ACCESS & TRANSIT */}
      <Section spacing="room-120" surface="pure" containerSize="editorial">
        <div className="space-y-8">
          <Eyebrow>03 &bull; ACCESS &amp; ARTERIAL CONNECTIONS</Eyebrow>
          <h2 className="text-3xl sm:text-4xl font-light text-slate-900 font-serif">
            Strategic Connectivity
          </h2>
          
          <div className="divide-y divide-slate-200 border-t border-b border-slate-200 bg-white p-6 rounded-xs border shadow-xs">
            <DataRow label="DXB International Airport" value={`${area.transit?.airport_mins_dxb || 20} Minutes`} />
            <DataRow label="DWC Al Maktoum International" value={`${area.transit?.airport_mins_dwc || 35} Minutes`} />
            <DataRow label="Downtown Core & Burj Khalifa" value={`${area.transit?.downtown_mins || 15} Minutes`} />
            <DataRow label="Foreign Ownership Law" value="100% Freehold (Regulation 3/2006)" />
          </div>
        </div>
      </Section>

      {/* 6. INVESTMENT & STATUTORY SOURCE */}
      <Section spacing="room-120" surface="subtle" containerSize="reading">
        <div className="space-y-6">
          <Eyebrow>04 &bull; INVESTMENT PROFILE &amp; SOURCE</Eyebrow>
          <div className="p-8 rounded-xs bg-white border border-slate-200 space-y-4 shadow-xs">
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-[#0284c7]" />
              <h3 className="text-xl font-light text-slate-900 font-serif">
                Capital &amp; Legal Framework
              </h3>
            </div>
            <p className="text-xs sm:text-sm text-slate-600 font-light leading-relaxed">
              {area.investment_profile || 'Designated freehold territory granting absolute ownership rights in perpetuity to foreign nationals. Qualifying properties above AED 2,000,000 confer eligibility for the 10-Year Golden Visa.'}
            </p>
            <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-[11px] font-mono text-slate-400">
              <span>Authority: Dubai Land Department</span>
              <span>Source Class: OFFICIAL GOVERNMENT</span>
            </div>
          </div>
        </div>
      </Section>

    </div>
  )
}
