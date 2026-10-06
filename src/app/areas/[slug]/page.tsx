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
    <div className="flex flex-col min-h-screen bg-[#08080a] text-[#f5f5f7]">
      
      {/* 1. TOP BREADCRUMB STRIP */}
      <div className="border-b border-white/[0.06] bg-[#0d0d11]/80 backdrop-blur-md py-4 sticky top-16 z-30">
        <div className="w-full max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-16 flex items-center justify-between">
          <Link
            href="/districts"
            className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-[#a1a1aa] hover:text-[#c9a962] transition-colors"
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
      <section className="pt-12 sm:pt-16 pb-12 border-b border-white/[0.06] bg-[#08080a]">
        <div className="w-full max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-16 space-y-8">
          
          <div className="space-y-4">
            <div className="flex items-center gap-3 text-xs font-mono uppercase text-[#c9a962]">
              <span className="px-2.5 py-0.5 bg-[#c9a962]/10 border border-[#c9a962]/25 rounded-xs">
                {area.sector} SECTOR
              </span>
              <span>&bull;</span>
              <span>100% FOREIGN FREEHOLD TITLE</span>
            </div>
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-light tracking-[-0.035em] text-[#f5f5f7]">
              {area.name}
            </h1>
            <p className="text-lg sm:text-xl text-[#a1a1aa] font-light max-w-3xl leading-relaxed">
              {area.description}
            </p>
          </div>

          {/* Large Architectural Photographic Spread */}
          <div className="relative aspect-[16/9] sm:aspect-[21/9] w-full overflow-hidden rounded-xs bg-[#111116] border border-white/[0.08] shadow-2xl">
            <Image
              src={heroImage}
              alt={area.name}
              fill
              priority
              sizes="(max-width: 1440px) 100vw, 1440px"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#08080a] via-transparent to-transparent opacity-80" />
            <div className="absolute bottom-6 left-6 right-6 flex items-center justify-between text-xs font-mono text-[#f5f5f7]">
              <span className="flex items-center gap-2 bg-black/60 backdrop-blur-md px-3 py-1.5 border border-white/10 rounded-xs">
                <MapPin className="w-3.5 h-3.5 text-[#c9a962]" />
                {area.name} Coordinates &bull; Dubai Master Zoning
              </span>
              <span className="hidden sm:inline bg-black/60 backdrop-blur-md px-3 py-1.5 border border-white/10 rounded-xs text-[#a1a1aa]">
                Law No. 7/2006 Freehold Jurisdiction
              </span>
            </div>
          </div>

        </div>
      </section>

      {/* 3. CHARACTER & URBAN FABRIC */}
      <Section spacing="room-120" surface="black" containerSize="editorial">
        <div className="space-y-8">
          <Eyebrow>01 &bull; DISTRICT CHARACTER</Eyebrow>
          <h2 className="text-2xl sm:text-4xl font-light text-[#f5f5f7] leading-relaxed tracking-tight">
            {area.name} represents an institutional master-planned territory combining strategic transport arterial connectivity, dedicated infrastructure covenants, and long-term capital preservation.
          </h2>
          <p className="text-base text-[#a1a1aa] font-light leading-relaxed">
            Governed under Dubai Land Department regulations and Law No. 7 of 2006, the district adheres to strict zoning covenants, common area management regulations, and verified title registration frameworks.
          </p>
        </div>
      </Section>

      {/* 4. PROPERTY REGISTER IN THIS DISTRICT */}
      <Section spacing="room-120" surface="charcoal" containerSize="wide">
        <div className="space-y-12">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div className="space-y-3">
              <Eyebrow>02 &bull; PROPERTY ASSETS</Eyebrow>
              <h2 className="text-3xl sm:text-4xl font-light text-[#f5f5f7]">
                Verified Residences in {area.name} ({matchingProperties.length})
              </h2>
            </div>
            <SecondaryLink href="/properties">
              View All Platform Properties
            </SecondaryLink>
          </div>

          {matchingProperties.length === 0 ? (
            <div className="p-10 rounded-xs bg-[#111116] border border-white/[0.08] text-center space-y-4">
              <Building className="w-8 h-8 text-[#c9a962] mx-auto opacity-60" />
              <p className="text-sm text-[#a1a1aa] max-w-md mx-auto">
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
                  className="p-6 sm:p-8 rounded-xs bg-[#111116] border border-white/[0.08] hover:border-[#c9a962]/40 transition-colors flex flex-col md:flex-row items-start md:items-center justify-between gap-6 group"
                >
                  <div className="flex items-center gap-6">
                    <div className="relative w-24 h-24 rounded-xs overflow-hidden bg-[#181820] shrink-0 border border-white/10">
                      <Image
                        src={prop.images[0] || heroImage}
                        alt={prop.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                    <div className="space-y-1">
                      <span className="text-[10px] font-mono text-[#c9a962] uppercase tracking-wider">
                        {prop.developer_name} &bull; {prop.property_type}
                      </span>
                      <h3 className="text-xl font-light text-[#f5f5f7]">
                        <Link href={`/properties/${prop.id}`} className="hover:text-[#c9a962] transition-colors">
                          {prop.title}
                        </Link>
                      </h3>
                      <span className="text-xs font-mono text-[#a1a1aa] block">
                        {prop.bedrooms} Bed &bull; {prop.internal_area_sqft?.toLocaleString()} SQ. FT
                      </span>
                    </div>
                  </div>

                  <div className="flex items-center gap-6 self-end md:self-auto">
                    <div className="text-left md:text-right font-mono">
                      <span className="text-[10px] text-[#71717a] uppercase block">Asking Price</span>
                      <span className="text-lg font-medium text-[#c9a962]">
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
      <Section spacing="room-120" surface="black" containerSize="editorial">
        <div className="space-y-8">
          <Eyebrow>03 &bull; ACCESS &amp; ARTERIAL CONNECTIONS</Eyebrow>
          <h2 className="text-3xl sm:text-4xl font-light text-[#f5f5f7]">
            Strategic Connectivity
          </h2>
          
          <div className="divide-y divide-white/[0.06] border-t border-b border-white/[0.06]">
            <DataRow label="DXB International Airport" value={`${area.transit?.airport_mins_dxb || 20} Minutes`} />
            <DataRow label="DWC Al Maktoum International" value={`${area.transit?.airport_mins_dwc || 35} Minutes`} />
            <DataRow label="Downtown Core & Burj Khalifa" value={`${area.transit?.downtown_mins || 15} Minutes`} />
            <DataRow label="Foreign Ownership Law" value="100% Freehold (Regulation 3/2006)" />
          </div>
        </div>
      </Section>

      {/* 6. INVESTMENT & STATUTORY SOURCE */}
      <Section spacing="room-120" surface="charcoal" containerSize="reading">
        <div className="space-y-6">
          <Eyebrow>04 &bull; INVESTMENT PROFILE &amp; SOURCE</Eyebrow>
          <div className="p-8 rounded-xs bg-[#111116] border border-white/[0.08] space-y-4">
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-[#c9a962]" />
              <h3 className="text-xl font-light text-[#f5f5f7]">
                Capital &amp; Legal Framework
              </h3>
            </div>
            <p className="text-xs sm:text-sm text-[#a1a1aa] font-light leading-relaxed">
              {area.investment_profile || 'Designated freehold territory granting absolute ownership rights in perpetuity to foreign nationals. Qualifying properties above AED 2,000,000 confer eligibility for the 10-Year Golden Visa.'}
            </p>
            <div className="pt-4 border-t border-white/[0.06] flex items-center justify-between text-[11px] font-mono text-[#71717a]">
              <span>Authority: Dubai Land Department</span>
              <span>Source Class: OFFICIAL GOVERNMENT</span>
            </div>
          </div>
        </div>
      </Section>

    </div>
  )
}
