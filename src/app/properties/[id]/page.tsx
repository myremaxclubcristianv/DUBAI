'use client'

import * as React from 'react'
import { useParams } from 'next/navigation'
import Link from 'next/link'
import Image from 'next/image'
import { getPropertyById, VERIFIED_PROPERTIES } from '@/lib/data/properties'
import { calculateAcquisitionCosts } from '@/lib/calculators/investment'
import { useClient } from '@/lib/context/client-context'
import { ProvenanceTag } from '@/components/layout/layout-primitives'
import {
  ArrowLeft,
  ArrowRight,
  ShieldCheck,
  CheckCircle2,
  ExternalLink,
} from 'lucide-react'

export default function PropertyDetailPage() {
  const params = useParams()
  const id = params?.id as string
  const property = getPropertyById(id) || VERIFIED_PROPERTIES[0]

  const [activeImageIndex, setActiveImageIndex] = React.useState(0)
  const { formatCurrency } = useClient()

  // Statutory Calculations
  const acquisition = calculateAcquisitionCosts(property.asking_price || 0, false)
  const isGoldenVisaEligible = (property.asking_price || 0) >= 2000000

  const propertyImages = property.images && property.images.length > 0 ? property.images : [
    'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1600&q=80',
    'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1600&q=80',
    'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1600&q=80',
  ]

  return (
    <div className="bg-[#ffffff] text-[#111111] min-h-screen pb-24">
      
      {/* 1. TOP BREADCRUMB STRIP */}
      <div className="border-b border-[#e5e5ea] bg-[#fafaf8] py-3">
        <div className="w-full max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          <Link
            href="/properties"
            className="inline-flex items-center gap-1.5 text-xs font-mono text-[#6b6b6b] hover:text-[#111111] transition-colors"
          >
            <ArrowLeft className="h-3.5 w-3.5" />
            <span>Back to Property Register</span>
          </Link>
          <div className="flex items-center gap-2">
            <ProvenanceTag sourceClass="OFFICIAL REGULATORY" sourceName={property.developer_name} />
          </div>
        </div>
      </div>

      {/* 2. PROPERTY MEMORANDUM HEADER */}
      <section className="pt-8 pb-10 border-b border-[#e5e5ea]">
        <div className="w-full max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-xs font-mono text-[#6b6b6b]">
                <span className="text-[#9f8144] font-semibold">{property.area_name}</span>
                <span>&bull;</span>
                <span>{property.developer_name}</span>
                <span>&bull;</span>
                <span>DLD Title Record</span>
              </div>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-[#111111]">
                {property.title}
              </h1>
              <p className="text-sm text-[#484848] max-w-2xl">
                {property.unit_descriptor || `${property.bedrooms} Bedroom ${property.property_type} in ${property.area_name}`}
              </p>
            </div>

            {/* Asking Price Card */}
            <div className="bg-[#fafaf8] p-5 rounded border border-[#e5e5ea] space-y-1 shrink-0 min-w-[260px]">
              <span className="text-[10px] font-mono uppercase text-[#6b6b6b] block">Asking Price</span>
              <div className="text-2xl sm:text-3xl font-bold text-[#111111] tabular-nums">
                {formatCurrency(property.asking_price)}
              </div>
              <span className="text-[11px] font-mono text-[#6b6b6b] block">
                {property.price_per_sqft ? `~${property.price_per_sqft.toLocaleString()} AED / SQFT • Asking Price Direct` : 'Asking Price Direct'}
              </span>
            </div>
          </div>

          {/* Large Architectural Photography Spread */}
          <div className="space-y-3">
            <div className="relative aspect-[16/9] w-full overflow-hidden rounded border border-[#e5e5ea] bg-[#f5f5f3]">
              <Image
                src={propertyImages[activeImageIndex]}
                alt={property.title}
                fill
                priority
                sizes="(max-width: 1240px) 100vw, 1240px"
                className="object-cover"
              />
              <div className="absolute top-4 left-4 flex flex-wrap gap-2">
                <span className="px-2.5 py-1 rounded text-[10px] font-mono font-bold uppercase bg-[#ffffff]/90 backdrop-blur-xs text-[#111111] border border-[#e5e5ea]">
                  {property.completion_status}
                </span>
                {isGoldenVisaEligible && (
                  <span className="px-2.5 py-1 rounded text-[10px] font-mono font-bold uppercase bg-emerald-800 text-white flex items-center gap-1">
                    <ShieldCheck className="h-3 w-3" />
                    <span>Golden Visa ≥ AED 2M</span>
                  </span>
                )}
              </div>
            </div>

            {/* Thumbnail Strip */}
            {propertyImages.length > 1 && (
              <div className="flex gap-2 overflow-x-auto pb-1">
                {propertyImages.map((img, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveImageIndex(idx)}
                    className={`relative w-20 h-14 rounded overflow-hidden border shrink-0 cursor-pointer ${
                      activeImageIndex === idx ? 'border-[#111111]' : 'border-[#e5e5ea] opacity-60 hover:opacity-100'
                    }`}
                  >
                    <Image src={img} alt="" fill className="object-cover" />
                  </button>
                ))}
              </div>
            )}
          </div>

        </div>
      </section>

      {/* 3. STRUCTURED PROPERTY DOSSIER & CONVEYANCING COST FRAMEWORK */}
      <section className="py-12 border-b border-[#e5e5ea]">
        <div className="w-full max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            
            {/* Left 60%: Specifications, Features, and Location Context */}
            <div className="lg:col-span-7 space-y-10">
              
              {/* Specifications Matrix */}
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-[#111111] border-b border-[#e5e5ea] pb-2">
                  Technical Specifications
                </h3>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 text-xs font-mono">
                  <div className="p-3.5 rounded border border-[#e5e5ea] bg-[#fafaf8]">
                    <span className="text-[#6b6b6b] block text-[10px]">INTERNAL AREA</span>
                    <span className="font-semibold text-sm text-[#111111]">{property.internal_area_sqft.toLocaleString()} SQFT</span>
                  </div>
                  <div className="p-3.5 rounded border border-[#e5e5ea] bg-[#fafaf8]">
                    <span className="text-[#6b6b6b] block text-[10px]">CONFIGURATION</span>
                    <span className="font-semibold text-sm text-[#111111]">{property.bedrooms} Bed &bull; {property.bathrooms} Bath</span>
                  </div>
                  <div className="p-3.5 rounded border border-[#e5e5ea] bg-[#fafaf8]">
                    <span className="text-[#6b6b6b] block text-[10px]">PROPERTY TYPE</span>
                    <span className="font-semibold text-sm text-[#111111]">{property.property_type}</span>
                  </div>
                  <div className="p-3.5 rounded border border-[#e5e5ea] bg-[#fafaf8]">
                    <span className="text-[#6b6b6b] block text-[10px]">FURNISHING</span>
                    <span className="font-semibold text-sm text-[#111111]">{property.furnishing || 'Unfurnished'}</span>
                  </div>
                  <div className="p-3.5 rounded border border-[#e5e5ea] bg-[#fafaf8]">
                    <span className="text-[#6b6b6b] block text-[10px]">SERVICE CHARGES</span>
                    <span className="font-semibold text-sm text-[#111111]">{property.service_charge_per_sqft || 20} AED / SQFT</span>
                  </div>
                  <div className="p-3.5 rounded border border-[#e5e5ea] bg-[#fafaf8]">
                    <span className="text-[#6b6b6b] block text-[10px]">COMPLETION</span>
                    <span className="font-semibold text-sm text-[#111111]">{property.completion_status}</span>
                  </div>
                </div>
              </div>

              {/* Verified Features */}
              {property.verified_features && property.verified_features.length > 0 && (
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold text-[#111111] border-b border-[#e5e5ea] pb-2">
                    Verified Architectural Features
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-[#484848]">
                    {property.verified_features.map((feat, idx) => (
                      <div key={idx} className="flex items-start gap-2 p-2.5 rounded bg-[#fafaf8] border border-[#e5e5ea]">
                        <CheckCircle2 className="h-4 w-4 text-[#9f8144] shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Amenities */}
              {property.amenities && property.amenities.length > 0 && (
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold text-[#111111] border-b border-[#e5e5ea] pb-2">
                    Building &amp; Community Amenities
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {property.amenities.map((amenity, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1.5 rounded bg-[#fafaf8] border border-[#e5e5ea] text-xs font-mono text-[#484848]"
                      >
                        {amenity}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {/* Provenance Record */}
              <div className="p-5 rounded bg-[#fafaf8] border border-[#e5e5ea] space-y-2">
                <span className="text-[10px] font-mono uppercase text-[#6b6b6b] block font-semibold">
                  Data Provenance &amp; Verification Record
                </span>
                <p className="text-xs text-[#484848] leading-relaxed">
                  Source: <strong>{property.provenance.source_name}</strong>. Verification status: <strong>{property.provenance.verification_status}</strong>. Last verified on <strong>{property.provenance.verified_at}</strong>.
                </p>
                {property.provenance.source_url && (
                  <div className="pt-1">
                    <a
                      href={property.provenance.source_url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs text-[#111111] underline inline-flex items-center gap-1 font-mono"
                    >
                      <span>Review Source Reference</span>
                      <ExternalLink className="h-3 w-3" />
                    </a>
                  </div>
                )}
              </div>

            </div>

            {/* Right 40%: Statutory Conveyancing & Acquisition Cost Memorandum */}
            <div className="lg:col-span-5 bg-[#fafaf8] p-6 sm:p-7 rounded border border-[#e5e5ea] space-y-6">
              <div className="space-y-1 border-b border-[#e5e5ea] pb-4">
                <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-[#9f8144] block">
                  STATUTORY CONVEYANCING
                </span>
                <h3 className="text-xl font-semibold text-[#111111]">
                  Acquisition Cost Framework
                </h3>
                <p className="text-xs text-[#6b6b6b]">
                  Deterministic fee breakdown governed by DLD and RERA statutory schedules.
                </p>
              </div>

              {/* Breakdown Rows */}
              <div className="space-y-3 text-xs font-mono">
                <div className="flex items-center justify-between py-1 border-b border-[#e5e5ea]">
                  <span className="text-[#6b6b6b]">ASSET ASKING VALUE</span>
                  <span className="font-semibold text-[#111111] tabular-nums">{formatCurrency(property.asking_price)}</span>
                </div>
                
                <div className="flex items-center justify-between py-1 border-b border-[#e5e5ea]">
                  <div>
                    <span className="text-[#6b6b6b]">DLD REGISTRATION (4%)</span>
                    <span className="text-[10px] text-[#8e8e93] block">2% Buyer / 2% Seller standard</span>
                  </div>
                  <span className="font-semibold text-[#111111] tabular-nums">{formatCurrency(acquisition.dld_transfer_fee)}</span>
                </div>

                <div className="flex items-center justify-between py-1 border-b border-[#e5e5ea]">
                  <span className="text-[#6b6b6b]">DLD REGISTRATION TRUSTEE</span>
                  <span className="font-semibold text-[#111111] tabular-nums">{formatCurrency(acquisition.dld_admin_fee)}</span>
                </div>

                <div className="flex items-center justify-between py-1 border-b border-[#e5e5ea]">
                  <span className="text-[#6b6b6b]">TITLE DEED ISSUANCE</span>
                  <span className="font-semibold text-[#111111] tabular-nums">{formatCurrency(acquisition.dld_title_deed_fee)}</span>
                </div>

                <div className="flex items-center justify-between pt-2 text-sm font-bold border-t border-[#111111]">
                  <span className="text-[#111111]">TOTAL ACQUISITION COST</span>
                  <span className="text-[#111111] tabular-nums">{formatCurrency(acquisition.total_acquisition_cost)}</span>
                </div>
              </div>

              <div className="p-3 rounded bg-[#ffffff] border border-[#e5e5ea] text-[11px] text-[#6b6b6b]">
                <span>Calculated under Dubai Law No. 7 of 2006. Brokerage and auxiliary legal representation fees vary by mandate.</span>
              </div>

              {/* Private Client CTA */}
              <div className="pt-2 space-y-2">
                <Link
                  href="/private-client"
                  className="w-full py-3 rounded bg-[#111111] hover:bg-[#2a2a2e] text-[#fafaf8] text-center text-xs font-medium tracking-tight transition-colors flex items-center justify-center gap-2"
                >
                  <span>Request Private Viewing &amp; Mandate</span>
                  <ArrowRight className="h-3.5 w-3.5 opacity-70" />
                </Link>
                <Link
                  href="/investment"
                  className="w-full py-2.5 rounded border border-[#e5e5ea] hover:border-[#111111] text-[#111111] text-center text-xs font-medium tracking-tight transition-colors block"
                >
                  Open Financial Underwriting Desk
                </Link>
              </div>

            </div>

          </div>
        </div>
      </section>

    </div>
  )
}
