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
import { ArrowLeft } from 'lucide-react'

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
    <div className="flex flex-col min-h-screen bg-[#ffffff] text-[#111111]">
      
      {/* 1. TOP BREADCRUMB STRIP */}
      <div className="border-b border-[#e5e5ea] bg-[#fafaf8] py-4">
        <div className="w-full max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-16 flex items-center justify-between">
          <Link
            href="/districts"
            className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-[#6b6b6b] hover:text-[#111111] transition-colors"
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
      <section className="pt-12 sm:pt-16 border-b border-[#e5e5ea] bg-[#ffffff]">
        <div className="w-full max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-16 space-y-8">
          
          <div className="space-y-3">
            <div className="flex items-center gap-3 text-xs font-mono uppercase text-[#9f8144]">
              <span>{area.sector} SECTOR</span>
              <span>&bull;</span>
              <span>100% FOREIGN TITLE</span>
            </div>
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-light tracking-[-0.035em] text-[#111111]">
              {area.name}
            </h1>
            <p className="text-lg sm:text-xl text-[#6b6b6b] font-light max-w-2xl leading-relaxed">
              {area.description}
            </p>
          </div>

          {/* Large Architectural Photographic Spread */}
          <div className="relative aspect-[16/9] sm:aspect-[21/9] w-full overflow-hidden rounded-2xl bg-[#f5f5f3]">
            <Image
              src={heroImage}
              alt={area.name}
              fill
              priority
              sizes="(max-width: 1440px) 100vw, 1440px"
              className="object-cover"
            />
          </div>

        </div>
      </section>

      {/* 3. CHARACTER & URBAN FABRIC */}
      <Section spacing="room-160" surface="white" containerSize="editorial">
        <div className="space-y-8">
          <Eyebrow>01 &bull; DISTRICT CHARACTER</Eyebrow>
          <h2 className="text-3xl sm:text-4xl font-light text-[#111111] leading-relaxed">
            {area.name} represents a master-planned enclave combining institutional infrastructure with dedicated arterial connectivity and waterfront or urban promenade access.
          </h2>
          <p className="text-base text-[#484848] font-light leading-relaxed">
            Governed by master developer covenants under Dubai Law No. 7 of 2006, the district features rigorous zoning covenants, managed common grounds, and long-term capital protection.
          </p>
        </div>
      </Section>

      {/* 4. PROPERTY REGISTER IN THIS DISTRICT */}
      <Section spacing="room-160" surface="subtle" containerSize="wide">
        <div className="space-y-12">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div className="space-y-3">
              <Eyebrow>02 &bull; PROPERTY ASSETS</Eyebrow>
              <h2 className="text-3xl sm:text-4xl font-light text-[#111111]">
                Verified Residences in {area.name} ({matchingProperties.length})
              </h2>
            </div>
            <SecondaryLink href="/properties">
              View All Platform Properties
            </SecondaryLink>
          </div>

          {matchingProperties.length === 0 ? (
            <div className="p-10 rounded-2xl bg-[#ffffff] border border-[#e5e5ea] text-center space-y-3">
              <p className="text-sm text-[#6b6b6b]">
                No public units currently listed in {area.name}. Private off-market allocations are available upon mandate.
              </p>
              <PrimaryLink href="/private-client">
                Request Off-Market Allocation
              </PrimaryLink>
            </div>
          ) : (
            <div className="space-y-8">
              {matchingProperties.map((prop) => (
                <div
                  key={prop.id}
                  className="p-6 sm:p-8 rounded-2xl bg-[#ffffff] border border-[#e5e5ea] flex flex-col md:flex-row items-start md:items-center justify-between gap-6"
                >
                  <div className="flex items-center gap-6">
                    <div className="relative w-24 h-24 rounded-xl overflow-hidden bg-[#f5f5f3] shrink-0">
                      <Image
                        src={prop.images[0] || heroImage}
                        alt={prop.title}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="space-y-1">
                      <span className="text-[10px] font-mono text-[#8e8e93] uppercase">{prop.developer_name} &bull; {prop.property_type}</span>
                      <h3 className="text-xl font-light text-[#111111]">
                        <Link href={`/properties/${prop.id}`} className="hover:text-[#9f8144] transition-colors">
                          {prop.title}
                        </Link>
                      </h3>
                      <span className="text-xs font-mono text-[#6b6b6b] block">
                        {prop.bedrooms} Bed &bull; {prop.internal_area_sqft?.toLocaleString()} SQ. FT
                      </span>
                    </div>
                  </div>

                  <div className="flex items-center gap-6 self-end md:self-auto">
                    <div className="text-left md:text-right font-mono">
                      <span className="text-[10px] text-[#8e8e93] uppercase block">Asking Price</span>
                      <span className="text-lg font-light text-[#111111]">
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
      <Section spacing="room-160" surface="white" containerSize="editorial">
        <div className="space-y-8">
          <Eyebrow>03 &bull; ACCESS &amp; ARTERIAL CONNECTIONS</Eyebrow>
          <h2 className="text-3xl sm:text-4xl font-light text-[#111111]">
            Strategic Connectivity
          </h2>
          
          <div className="divide-y divide-[#e5e5ea] border-t border-b border-[#e5e5ea]">
            <DataRow label="DXB International Airport" value={`${area.transit?.airport_mins_dxb || 20} Minutes`} />
            <DataRow label="DWC Al Maktoum International" value={`${area.transit?.airport_mins_dwc || 35} Minutes`} />
            <DataRow label="Downtown Core & Burj Khalifa" value={`${area.transit?.downtown_mins || 15} Minutes`} />
            <DataRow label="Foreign Ownership Law" value="100% Freehold (Regulation 3/2006)" />
          </div>
        </div>
      </Section>

      {/* 6. INVESTMENT & STATUTORY SOURCE */}
      <Section spacing="room-160" surface="subtle" containerSize="reading">
        <div className="space-y-6">
          <Eyebrow>04 &bull; INVESTMENT PROFILE &amp; SOURCE</Eyebrow>
          <div className="p-8 rounded-2xl bg-[#ffffff] border border-[#e5e5ea] space-y-4">
            <h3 className="text-xl font-light text-[#111111]">
              Capital &amp; Legal Framework
            </h3>
            <p className="text-xs sm:text-sm text-[#484848] font-light leading-relaxed">
              {area.investment_profile || 'Designated freehold territory granting absolute ownership rights in perpetuity to foreign nationals. Qualifying properties above AED 2,000,000 confer eligibility for the 10-Year Golden Visa.'}
            </p>
            <div className="pt-2 border-t border-[#e5e5ea] flex items-center justify-between text-[11px] font-mono text-[#8e8e93]">
              <span>Authority: Dubai Land Department</span>
              <span>Source Class: OFFICIAL GOVERNMENT</span>
            </div>
          </div>
        </div>
      </Section>

    </div>
  )
}
