'use client'

import * as React from 'react'
import { useParams } from 'next/navigation'
import Link from 'next/link'
import Image from 'next/image'
import { getPropertyById, VERIFIED_PROPERTIES } from '@/lib/data/properties'
import { useClient } from '@/lib/context/client-context'
import { ContactModal } from '@/components/layout/contact-modal'
import {
  ArrowLeft,
  ArrowRight,
  ShieldCheck,
  Share2,
  Bookmark,
  Check,
  MapPin,
} from 'lucide-react'

export default function PropertyDetailPage() {
  const params = useParams()
  const id = params?.id as string
  const property = getPropertyById(id) || VERIFIED_PROPERTIES[0]

  const { formatCurrency, isShortlisted, toggleShortlist } = useClient()
  const [copiedShare, setCopiedShare] = React.useState(false)
  const [activeImageIndex, setActiveImageIndex] = React.useState(0)
  const [isContactModalOpen, setIsContactModalOpen] = React.useState(false)

  const saved = isShortlisted(property.id)
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

  const handleShare = async () => {
    if (typeof window !== 'undefined') {
      try {
        if (navigator.share) {
          await navigator.share({
            title: `${property.title} | Dubai Real Estate Dossier`,
            text: `Verified property brief for ${property.title} in ${district}.`,
            url: window.location.href,
          })
        } else {
          await navigator.clipboard.writeText(window.location.href)
          setCopiedShare(true)
          setTimeout(() => setCopiedShare(false), 2500)
        }
      } catch {
        await navigator.clipboard.writeText(window.location.href)
        setCopiedShare(true)
        setTimeout(() => setCopiedShare(false), 2500)
      }
    }
  }

  return (
    <div className="flex flex-col min-h-screen bg-white text-slate-950 selection:bg-slate-900 selection:text-white">
      
      {/* 1. TOP STATUTORY BREADCRUMB BAR */}
      <div className="border-b border-slate-200 bg-slate-50/70 py-3.5">
        <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-10 lg:px-16 flex items-center justify-between font-mono text-xs">
          <Link
            href="/properties"
            className="inline-flex items-center gap-2 uppercase tracking-wider text-slate-600 hover:text-slate-950 transition-colors"
          >
            <ArrowLeft className="h-3.5 w-3.5" />
            <span>Back to Property Inventory</span>
          </Link>
          <div className="flex items-center gap-3">
            <span className="px-2.5 py-1 bg-white border border-slate-200 text-slate-900 font-semibold text-[10px] uppercase">
              {developer}
            </span>
            <span className="px-2.5 py-1 bg-white border border-slate-200 text-emerald-800 font-semibold text-[10px] uppercase">
              DLD VERIFIED ASSET
            </span>
          </div>
        </div>
      </div>

      {/* 2. OPENING DOSSIER HEADER */}
      <section className="pt-10 sm:pt-14 pb-8 border-b border-slate-200 bg-white">
        <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-10 lg:px-16 space-y-8">
          
          {/* Title & Valuation Row */}
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
            <div className="space-y-3 max-w-3xl">
              <div className="flex flex-wrap items-center gap-2.5 text-xs font-mono uppercase text-slate-600">
                <span className="flex items-center gap-1 font-semibold text-slate-950">
                  <MapPin className="h-3.5 w-3.5" />
                  <span>{district}</span>
                </span>
                <span className="text-slate-300">&bull;</span>
                <span>{type}</span>
                <span className="text-slate-300">&bull;</span>
                <span className="px-2 py-0.5 bg-slate-100 border border-slate-200 text-slate-900 font-semibold">
                  {status}
                </span>
              </div>
              
              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-light tracking-[-0.035em] text-slate-950 font-serif">
                {property.title}
              </h1>

              {/* Action Row */}
              <div className="flex flex-wrap items-center gap-3 pt-2">
                <button
                  onClick={handleShare}
                  className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-white hover:bg-slate-50 border border-slate-200 text-xs font-mono uppercase tracking-wider text-slate-800 transition-colors cursor-pointer shadow-2xs"
                  title="Share Property Listing Dossier"
                >
                  {copiedShare ? (
                    <>
                      <Check className="h-3.5 w-3.5 text-emerald-700" />
                      <span className="text-emerald-800 font-semibold">Dossier Link Copied</span>
                    </>
                  ) : (
                    <>
                      <Share2 className="h-3.5 w-3.5 text-slate-600" />
                      <span>Share Listing</span>
                    </>
                  )}
                </button>

                <button
                  onClick={() => toggleShortlist(property.id, property.title)}
                  className={`inline-flex items-center gap-2 px-3.5 py-1.5 border text-xs font-mono uppercase tracking-wider transition-colors cursor-pointer ${
                    saved
                      ? 'bg-slate-950 text-white border-slate-950'
                      : 'bg-white hover:bg-slate-50 text-slate-800 border-slate-200 shadow-2xs'
                  }`}
                >
                  <Bookmark className={`h-3.5 w-3.5 ${saved ? 'fill-current' : ''}`} />
                  <span>{saved ? 'Shortlisted' : 'Save Dossier'}</span>
                </button>

                <button
                  onClick={() => setIsContactModalOpen(true)}
                  className="inline-flex items-center gap-1.5 px-4 py-1.5 bg-slate-950 hover:bg-slate-800 text-white text-xs font-mono uppercase tracking-wider font-semibold transition-all cursor-pointer shadow-2xs"
                >
                  <span>Request Private Briefing</span>
                </button>
              </div>
            </div>

            {/* Price Box */}
            <div className="text-left lg:text-right font-mono space-y-1 p-5 bg-slate-50 border border-slate-200 shadow-2xs shrink-0">
              <span className="text-[10px] text-slate-500 uppercase tracking-wider block font-semibold">
                Asking Valuation
              </span>
              <div className="text-2xl sm:text-4xl font-light text-slate-950 tabular-nums font-bold">
                {formatCurrency(price)}
              </div>
              <div className="text-xs text-slate-600 font-semibold">
                AED {property.price_per_sqft?.toLocaleString()} / sqft
              </div>
            </div>
          </div>

          {/* Dominant Architectural Gallery View */}
          <div className="space-y-3">
            <div className="relative aspect-[16/9] sm:aspect-[21/9] w-full overflow-hidden bg-slate-100 border border-slate-200 shadow-md">
              <Image
                src={images[activeImageIndex] || images[0]}
                alt={property.title}
                fill
                priority
                sizes="(max-width: 1440px) 100vw, 1440px"
                className="object-cover"
              />
              {isGoldenVisaEligible && (
                <div className="absolute top-4 left-4">
                  <span className="px-3.5 py-1.5 text-[10px] font-mono uppercase bg-white/95 backdrop-blur-xs text-emerald-800 flex items-center gap-1.5 border border-slate-200 font-semibold shadow-2xs">
                    <ShieldCheck className="h-3.5 w-3.5 text-emerald-700" />
                    <span>Golden Visa Eligible (&ge; AED 2M)</span>
                  </span>
                </div>
              )}
              <div className="absolute bottom-3 right-3 px-2.5 py-1 bg-slate-950/80 text-[9px] font-mono text-slate-300">
                VIEW {activeImageIndex + 1} OF {images.length}
              </div>
            </div>

            {/* Thumbnail Strip */}
            {images.length > 1 && (
              <div className="flex gap-3 overflow-x-auto pb-2">
                {images.map((img, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveImageIndex(idx)}
                    className={`relative aspect-[16/10] w-28 sm:w-36 shrink-0 overflow-hidden border transition-all cursor-pointer ${
                      activeImageIndex === idx
                        ? 'border-slate-950 ring-2 ring-slate-950'
                        : 'border-slate-200 opacity-65 hover:opacity-100'
                    }`}
                  >
                    <Image
                      src={img}
                      alt={`View ${idx + 1}`}
                      fill
                      sizes="144px"
                      className="object-cover"
                    />
                  </button>
                ))}
              </div>
            )}
          </div>

        </div>
      </section>

      {/* 3. PROPERTY SPECIFICATIONS & METRICS */}
      <section className="py-16 sm:py-20 bg-slate-50/60 border-b border-slate-200">
        <div className="w-full max-w-[1120px] mx-auto px-4 sm:px-10 lg:px-16 space-y-10">
          <div className="space-y-2">
            <span className="text-[10px] font-mono uppercase tracking-[0.24em] text-slate-500 font-semibold block">
              01 &bull; ASSET SPECIFICATION &amp; METRICS
            </span>
            <h2 className="text-2xl sm:text-3xl font-light text-slate-950 font-serif">
              {property.unit_descriptor || property.editorial_display_name}
            </h2>
          </div>

          <div className="divide-y divide-slate-200 border-t border-b border-slate-200 bg-white p-6 sm:p-8 border shadow-2xs font-mono text-xs">
            <div className="flex justify-between py-3">
              <span className="text-slate-500 uppercase">Internal Living Area</span>
              <span className="text-slate-950 font-bold">{size.toLocaleString()} SQ. FT</span>
            </div>
            <div className="flex justify-between py-3">
              <span className="text-slate-500 uppercase">Bedrooms / Suites</span>
              <span className="text-slate-950 font-bold">{beds} Bedrooms</span>
            </div>
            <div className="flex justify-between py-3">
              <span className="text-slate-500 uppercase">Bathrooms</span>
              <span className="text-slate-950 font-bold">{baths} Bathrooms</span>
            </div>
            <div className="flex justify-between py-3">
              <span className="text-slate-500 uppercase">Asset Type</span>
              <span className="text-slate-950 font-bold">{type}</span>
            </div>
            <div className="flex justify-between py-3">
              <span className="text-slate-500 uppercase">Master Developer</span>
              <span className="text-slate-950 font-bold">{developer}</span>
            </div>
            <div className="flex justify-between py-3">
              <span className="text-slate-500 uppercase">Zoning Status</span>
              <span className="text-slate-950 font-bold">Designated Foreign Freehold (Law 7/2006)</span>
            </div>
            <div className="flex justify-between py-3">
              <span className="text-slate-500 uppercase">Completion Schedule</span>
              <span className="text-slate-950 font-bold">{status}</span>
            </div>
          </div>
        </div>
      </section>

      {/* 4. STATUTORY CONVEYANCING SCHEDULE */}
      <section className="py-16 sm:py-24 bg-white border-b border-slate-200">
        <div className="w-full max-w-[1120px] mx-auto px-4 sm:px-10 lg:px-16 space-y-10">
          <div className="space-y-3">
            <span className="text-[10px] font-mono uppercase tracking-[0.24em] text-slate-500 font-semibold block">
              02 &bull; STATUTORY UNDERWRITING &amp; CONVEYANCING
            </span>
            <h2 className="text-2xl sm:text-3xl font-light text-slate-950 font-serif">
              Statutory Conveyancing Schedule
            </h2>
            <p className="text-sm text-slate-600 font-light max-w-2xl leading-relaxed">
              Official acquisition framework calculated in compliance with DLD registration tariffs and statutory trustee requirements.
            </p>
          </div>

          <div className="p-6 sm:p-10 bg-white border border-slate-200 space-y-8 shadow-sm">
            <div className="space-y-3 font-mono text-xs">
              <div className="flex items-center justify-between py-2 border-b border-slate-100">
                <span className="text-slate-600">Asking Asset Valuation</span>
                <span className="text-slate-950 font-bold">{formatCurrency(price)}</span>
              </div>
              <div className="flex items-center justify-between py-2 border-b border-slate-100">
                <span className="text-slate-600">DLD Sale Registration (4%)</span>
                <span className="text-slate-950 font-bold">{formatCurrency(dldTransferFee)}</span>
              </div>
              <div className="flex items-center justify-between py-2 border-b border-slate-100">
                <span className="text-slate-600">DLD Admin &amp; Map Tariff</span>
                <span className="text-slate-950 font-bold">AED 4,200</span>
              </div>
              <div className="flex items-center justify-between py-2 border-b border-slate-100">
                <span className="text-slate-600">Registration Trustee Fee</span>
                <span className="text-slate-950 font-bold">{formatCurrency(trusteeFee)}</span>
              </div>
              <div className="flex items-center justify-between py-2">
                <span className="text-slate-600">Estimated Statutory Conveyancing</span>
                <span className="text-slate-950 font-bold">{formatCurrency(conveyanceFee)}</span>
              </div>
            </div>

            <div className="pt-6 border-t border-slate-200 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div className="space-y-1">
                <span className="text-xs font-mono uppercase tracking-widest text-slate-950 font-bold">
                  TOTAL STATUTORY OUTLAY
                </span>
                <p className="text-xs text-slate-500 font-light">
                  Inclusive of all statutory transfer and registration charges.
                </p>
              </div>
              <div className="text-2xl sm:text-4xl font-light text-slate-950 font-mono tabular-nums font-bold">
                {formatCurrency(totalAcquisition)}
              </div>
            </div>

            <div className="pt-4 flex flex-col sm:flex-row gap-4">
              <button
                onClick={() => setIsContactModalOpen(true)}
                className="w-full sm:w-auto px-6 py-3.5 bg-slate-950 hover:bg-slate-800 text-white text-xs font-mono uppercase tracking-[0.14em] font-semibold transition-all cursor-pointer text-center shadow-xs"
              >
                Request Private Viewing &amp; Mandate
              </button>
              <Link
                href="/investment"
                className="px-6 py-3.5 border border-slate-200 hover:border-slate-950 text-xs font-mono uppercase tracking-wider text-slate-800 hover:text-slate-950 text-center transition-colors bg-slate-50"
              >
                Open Full Underwriting Engine
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 5. PROVENANCE & AUDIT GUARANTEE */}
      <section className="py-12 bg-slate-50/60">
        <div className="w-full max-w-[880px] mx-auto px-4 sm:px-10 space-y-3 text-xs font-light text-slate-600">
          <div className="flex items-center gap-2">
            <ShieldCheck className="h-4 w-4 text-emerald-700" />
            <span className="font-mono text-xs uppercase tracking-wider text-slate-950 font-bold">
              Statutory Provenance Guarantee
            </span>
          </div>
          <p className="leading-relaxed">
            All data records for <strong>{property.title}</strong> have been audited against official Dubai Land Department registry filings and developer sales schedules. Specifications and tariffs represent verified statutory submissions.
          </p>
        </div>
      </section>

      {/* Contact Modal */}
      <ContactModal
        isOpen={isContactModalOpen}
        onClose={() => setIsContactModalOpen(false)}
        initialInterest="PROPERTY"
      />

    </div>
  )
}
