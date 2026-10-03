'use client'

import * as React from 'react'
import { useParams } from 'next/navigation'
import Link from 'next/link'
import Image from 'next/image'
import { getPropertyById, VERIFIED_PROPERTIES } from '@/lib/data/properties'
import { useClient } from '@/lib/context/client-context'
import {
  Section,
  Eyebrow,
  SourceBadge,
  DataRow,
  PrimaryLink,
  SecondaryLink,
} from '@/components/layout/layout-primitives'
import { ArrowLeft, ShieldCheck } from 'lucide-react'

export default function PropertyDetailPage() {
  const params = useParams()
  const id = params?.id as string
  const property = getPropertyById(id) || VERIFIED_PROPERTIES[0]

  const { formatCurrency } = useClient()

  const price = property.asking_price || 0
  const district = property.area_name || ''
  const type = property.property_type || ''
  const developer = property.developer_name || ''
  const size = property.internal_area_sqft || 0
  const beds = property.bedrooms || 0
  const baths = property.bathrooms || 0
  const status = property.completion_status || 'Ready'
  const isGoldenVisaEligible = price >= 2000000

  // Statutory Calculations
  const dldTransferFee = price * 0.04
  const adminFee = 4200
  const trusteeFee = price >= 500000 ? 4200 : 2100
  const conveyanceFee = 10500
  const totalAcquisition = price + dldTransferFee + adminFee + trusteeFee + conveyanceFee

  const images = property.images && property.images.length > 0 ? property.images : [
    'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1600&q=85',
    'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1600&q=85',
    'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1600&q=85',
  ]

  return (
    <div className="flex flex-col min-h-screen bg-[#ffffff] text-[#111111]">
      
      {/* 1. TOP STATUTORY BAR */}
      <div className="border-b border-[#e5e5ea] bg-[#fafaf8] py-4">
        <div className="w-full max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-16 flex items-center justify-between">
          <Link
            href="/properties"
            className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-[#6b6b6b] hover:text-[#111111] transition-colors"
          >
            <ArrowLeft className="h-3.5 w-3.5" />
            <span>Back to Property Directory</span>
          </Link>
          <div className="flex items-center gap-3">
            <SourceBadge sourceClass="OFFICIAL CORPORATE" sourceName={developer} />
          </div>
        </div>
      </div>

      {/* 2. OPENING: Large Full-Width Image, Property Name, District, Price, Status */}
      <section className="pt-12 sm:pt-16 border-b border-[#e5e5ea] bg-[#ffffff]">
        <div className="w-full max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-16 space-y-8">
          
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-xs font-mono uppercase text-[#9f8144]">
                <span>{district}</span>
                <span>&bull;</span>
                <span>{type}</span>
                <span>&bull;</span>
                <span>{status}</span>
              </div>
              <h1 className="text-4xl sm:text-6xl lg:text-7xl font-light tracking-[-0.035em] text-[#111111]">
                {property.title}
              </h1>
            </div>

            <div className="text-left lg:text-right font-mono space-y-1">
              <span className="text-xs text-[#8e8e93] uppercase block">Asking Price</span>
              <div className="text-3xl sm:text-4xl font-light text-[#111111] tabular-nums">
                {formatCurrency(price)}
              </div>
            </div>
          </div>

          {/* Large Full-Width Architectural Image */}
          <div className="relative aspect-[16/9] sm:aspect-[21/9] w-full overflow-hidden rounded-2xl bg-[#f5f5f3]">
            <Image
              src={images[0]}
              alt={property.title}
              fill
              priority
              sizes="(max-width: 1440px) 100vw, 1440px"
              className="object-cover"
            />
            {isGoldenVisaEligible && (
              <div className="absolute top-6 left-6">
                <span className="px-3.5 py-1.5 rounded-full text-[10px] font-mono uppercase bg-emerald-900/90 backdrop-blur-md text-emerald-100 flex items-center gap-1.5 border border-emerald-700/50">
                  <ShieldCheck className="h-3.5 w-3.5" />
                  <span>Golden Visa Eligible (&ge; AED 2M)</span>
                </span>
              </div>
            )}
          </div>

        </div>
      </section>

      {/* 3. PROPERTY OVERVIEW: Large Typography & Elegant Metadata Rows */}
      <Section spacing="room-160" surface="white" containerSize="editorial">
        <div className="space-y-12">
          <div className="space-y-6">
            <Eyebrow>01 &bull; PROPERTY OVERVIEW</Eyebrow>
            <h2 className="text-3xl sm:text-4xl font-light text-[#111111] leading-relaxed">
              {property.unit_descriptor || property.editorial_display_name}
            </h2>
          </div>

          {/* Elegant Metadata Rows */}
          <div className="divide-y divide-[#e5e5ea] border-t border-b border-[#e5e5ea]">
            <DataRow label="Internal Living Area" value={`${size.toLocaleString()} SQ. FT`} />
            <DataRow label="Bedrooms / Suites" value={`${beds} Bedrooms`} />
            <DataRow label="Bathrooms" value={`${baths} Bathrooms`} />
            <DataRow label="Asset Type" value={type} />
            <DataRow label="Master Developer" value={developer} />
            <DataRow label="Zoning Status" value="Designated Foreign Freehold" />
            <DataRow label="Completion Schedule" value={status} />
          </div>
        </div>
      </Section>

      {/* 4. ARCHITECTURE: Large Image / Text Split */}
      <Section spacing="room-160" surface="subtle" containerSize="wide">
        <div className="space-y-12">
          <Eyebrow>02 &bull; ARCHITECTURAL DOSSIER</Eyebrow>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            <div className="lg:col-span-7">
              <div className="relative aspect-[16/10] w-full overflow-hidden rounded-2xl bg-[#f5f5f3]">
                <Image
                  src={images[1] || images[0]}
                  alt="Architectural Detailing"
                  fill
                  sizes="(max-width: 1024px) 100vw, 60vw"
                  className="object-cover"
                />
              </div>
            </div>

            <div className="lg:col-span-5 space-y-6">
              <h3 className="text-2xl sm:text-3xl font-light text-[#111111]">
                Materiality &amp; Spatial Flow
              </h3>
              <p className="text-base text-[#484848] font-light leading-relaxed">
                Engineered with floor-to-ceiling structural glazing, expansive sea and skyline apertures, and refined bespoke joinery aligned with Dubai&apos;s most rigorous architectural benchmarks.
              </p>
              
              {property.amenities && (
                <div className="pt-4 space-y-3">
                  <span className="text-xs font-mono uppercase text-[#8e8e93] block">
                    Curated Building Amenities
                  </span>
                  <div className="flex flex-wrap gap-2">
                    {property.amenities.map((item, idx) => (
                      <span key={idx} className="px-3 py-1 rounded-full bg-[#ffffff] border border-[#e5e5ea] text-xs font-mono text-[#484848]">
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </Section>

      {/* 5. LOCATION & DISTRICT CONTEXT */}
      <Section spacing="room-160" surface="white" containerSize="wide">
        <div className="space-y-12">
          <Eyebrow>03 &bull; DISTRICT CONTEXT</Eyebrow>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            <div className="lg:col-span-5 space-y-6">
              <h3 className="text-2xl sm:text-3xl font-light text-[#111111]">
                Enclave of {district}
              </h3>
              <p className="text-base text-[#484848] font-light leading-relaxed">
                Positioned within one of Dubai&apos;s prime freehold enclaves under Regulation No. 3 of 2006, offering unencumbered 100% foreign title ownership, dedicated infrastructure, and private access arteries.
              </p>
              <div className="pt-2">
                <SecondaryLink href="/districts">
                  Explore Dubai Atlas
                </SecondaryLink>
              </div>
            </div>

            <div className="lg:col-span-7">
              <div className="relative aspect-[16/10] w-full overflow-hidden rounded-2xl bg-[#f5f5f3]">
                <Image
                  src={images[2] || images[0]}
                  alt={district}
                  fill
                  sizes="(max-width: 1024px) 100vw, 60vw"
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* 6. FINANCIAL CONTEXT: Deterministic Acquisition Memorandum */}
      <Section spacing="room-200" surface="subtle" containerSize="editorial">
        <div className="space-y-12">
          <div className="space-y-4">
            <Eyebrow>04 &bull; FINANCIAL UNDERWRITING</Eyebrow>
            <h2 className="text-3xl sm:text-4xl font-light text-[#111111]">
              Statutory Conveyancing Schedule
            </h2>
            <p className="text-base text-[#6b6b6b] font-light max-w-2xl leading-relaxed">
              Official acquisition framework calculated in compliance with DLD registration tariffs and statutory trustee requirements.
            </p>
          </div>

          <div className="p-8 sm:p-10 rounded-2xl bg-[#ffffff] border border-[#e5e5ea] space-y-8">
            <div className="space-y-3">
              <DataRow
                label="Asking Asset Valuation"
                value={formatCurrency(price)}
                source={<SourceBadge sourceClass="OFFICIAL CORPORATE" sourceName="Developer Registry" />}
              />
              <DataRow
                label="DLD Sale Registration (4%)"
                value={formatCurrency(dldTransferFee)}
                source={<SourceBadge sourceClass="OFFICIAL GOVERNMENT" sourceName="Law No. 7 of 2006" />}
              />
              <DataRow
                label="DLD Admin & Map Tariff"
                value={formatCurrency(adminFee)}
                source={<SourceBadge sourceClass="OFFICIAL GOVERNMENT" sourceName="DLD Published Tariff" />}
              />
              <DataRow
                label="Registration Trustee Fee"
                value={formatCurrency(trusteeFee)}
                source={<SourceBadge sourceClass="OFFICIAL REGULATORY" sourceName="DLD Authorized Trustee" />}
              />
              <DataRow
                label="Estimated Statutory Conveyancing"
                value={formatCurrency(conveyanceFee)}
                source={<SourceBadge sourceClass="CALCULATED" sourceName="Standard Escrow Protocol" />}
              />
            </div>

            <div className="pt-6 border-t-2 border-[#111111] flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div className="space-y-1">
                <span className="text-xs font-mono uppercase tracking-widest text-[#111111] font-semibold">
                  TOTAL STATUTORY OUTLAY
                </span>
                <p className="text-xs text-[#6b6b6b] font-light">
                  Inclusive of all statutory transfer and registration charges.
                </p>
              </div>
              <div className="text-3xl sm:text-4xl font-light text-[#111111] font-mono tabular-nums">
                {formatCurrency(totalAcquisition)}
              </div>
            </div>

            <div className="pt-4 flex flex-col sm:flex-row gap-4">
              <PrimaryLink href="/private-client" className="w-full sm:w-auto justify-center">
                Request Private Viewing &amp; Mandate
              </PrimaryLink>
              <Link
                href="/investment"
                className="px-6 py-3.5 rounded-full border border-[#e5e5ea] hover:border-[#111111] text-xs font-mono uppercase tracking-wider text-[#111111] text-center transition-colors"
              >
                Open Full Underwriting Engine
              </Link>
            </div>
          </div>
        </div>
      </Section>

      {/* 7. PROVENANCE & VERIFICATION FOOTNOTE */}
      <Section spacing="room-96" surface="white" containerSize="reading">
        <div className="p-8 rounded-2xl bg-[#fafaf8] border border-[#e5e5ea] space-y-4 text-xs font-light text-[#6b6b6b]">
          <div className="flex items-center gap-2">
            <ShieldCheck className="h-4 w-4 text-[#9f8144]" />
            <span className="font-mono text-xs uppercase tracking-wider text-[#111111] font-medium">
              Statutory Provenance Guarantee
            </span>
          </div>
          <p className="leading-relaxed">
            All data records for <strong>{property.title}</strong> have been audited against official Dubai Land Department registry filings and developer sales schedules. Prices and specifications represent verified statutory submissions.
          </p>
        </div>
      </Section>

    </div>
  )
}
