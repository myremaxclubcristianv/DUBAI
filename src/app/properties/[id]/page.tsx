'use client'

import * as React from 'react'
import { useParams } from 'next/navigation'
import Link from 'next/link'
import Image from 'next/image'
import { getPropertyById, VERIFIED_PROPERTIES } from '@/lib/data/properties'
import { calculateAcquisitionCosts } from '@/lib/calculators/investment'
import { SourceBadge } from '@/components/ui/source-badge'
import { ViewingModal } from '@/components/property/viewing-modal'
import { useClient } from '@/lib/context/client-context'
import { useToast } from '@/components/ui/toast'
import {
  ArrowLeft,
  Bookmark,
  Layers,
  ShieldCheck,
  Calculator,
  Calendar,
  ArrowRight,
  CheckCircle2
} from 'lucide-react'

export default function PropertyDetailPage() {
  const params = useParams()
  const id = params?.id as string
  const property = getPropertyById(id) || VERIFIED_PROPERTIES[0]

  const [isViewingOpen, setIsViewingOpen] = React.useState(false)
  const [activeImageIndex, setActiveImageIndex] = React.useState(0)
  const { isShortlisted, toggleShortlist, isInComparison, toggleComparison } = useClient()
  const { addToast } = useToast()

  const isSaved = isShortlisted(property.id)
  const isCompared = isInComparison(property.id)

  // Interactive Investment Simulator
  const estimatedRent = Math.round(((property.asking_price || 0) * 0.06) / 10000) * 10000 || 500000

  // Conversions & Statutory Calculations
  const sqMeters = (property.internal_area_sqft * 0.092903).toFixed(1)
  const acquisition = calculateAcquisitionCosts(property.asking_price || 0, false)

  // Service Charge & Yield Calculations
  const annualServiceCharge = (property.service_charge_per_sqft || 20) * property.internal_area_sqft
  const annualMaintenance = estimatedRent * 0.05 // 5% reserve
  const annualNOI = Math.max(0, estimatedRent - annualServiceCharge - annualMaintenance)
  const grossYield = property.asking_price ? ((estimatedRent / property.asking_price) * 100).toFixed(2) : '0.00'
  const netYield = property.asking_price ? ((annualNOI / acquisition.total_acquisition_cost) * 100).toFixed(2) : '0.00'

  const propertyImages = property.images && property.images.length > 0 ? property.images : [
    'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1600&q=80',
    'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1600&q=80',
    'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1600&q=80',
  ]

  return (
    <div className="bg-white text-[#1d1d1f] min-h-screen pb-32 selection:bg-[#0071e3]/10 selection:text-[#1d1d1f]">
      {/* 1. TOP NAV & BREADCRUMB */}
      <div className="border-b border-black/10 bg-white/85 backdrop-blur-md py-3.5 sticky top-16 z-20">
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          <Link
            href="/properties"
            className="inline-flex items-center gap-2 text-xs font-semibold text-[#6e6e73] hover:text-[#1d1d1f] transition-colors"
          >
            <ArrowLeft className="h-4 w-4" />
            <span>Property Directory</span>
          </Link>

          <div className="flex items-center gap-3">
            <button
              onClick={() => {
                toggleComparison(property.id)
                addToast(
                  isCompared ? `Removed from comparison desk` : `Added ${property.title} to comparison desk`,
                  'info'
                )
              }}
              className="text-xs font-semibold text-[#6e6e73] hover:text-[#1d1d1f] flex items-center gap-1.5 px-3.5 py-1.5 rounded-full border border-black/10 bg-[#f5f5f7] cursor-pointer transition-colors shadow-2xs"
            >
              <Layers className="h-3.5 w-3.5" />
              <span>{isCompared ? 'In Comparison' : 'Compare'}</span>
            </button>

            <button
              onClick={() => {
                toggleShortlist(property.id, property.title)
                addToast(
                  isSaved ? `Removed from saved shortlist` : `Saved ${property.title} to shortlist`,
                  'success'
                )
              }}
              className={`text-xs font-semibold flex items-center gap-1.5 px-3.5 py-1.5 rounded-full border cursor-pointer transition-all shadow-2xs ${
                isSaved
                  ? 'border-black/10 bg-[#1d1d1f] text-white'
                  : 'border-black/10 bg-[#f5f5f7] text-[#6e6e73] hover:text-[#1d1d1f]'
              }`}
            >
              <Bookmark className={`h-3.5 w-3.5 ${isSaved ? 'fill-white' : ''}`} />
              <span>{isSaved ? 'Shortlisted' : 'Save'}</span>
            </button>
          </div>
        </div>
      </div>

      {/* ========================================================================= */}
      {/* 2. APPLE KEYNOTE HERO MEDIA SHOWCASE */}
      {/* ========================================================================= */}
      <div className="relative w-full aspect-[21/9] min-h-[480px] max-h-[75vh] bg-[#f5f5f7] overflow-hidden border-b border-black/10">
        <Image
          src={propertyImages[activeImageIndex] || propertyImages[0]}
          alt={property.title}
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        {/* Subtle Vignette */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent pointer-events-none" />

        <div className="absolute bottom-0 inset-x-0 p-6 sm:p-10 lg:p-14 text-white">
          <div className="w-full max-w-7xl mx-auto flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div className="space-y-3 max-w-3xl">
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/90 backdrop-blur-md border border-black/10 text-xs font-mono font-bold tracking-widest text-[#1d1d1f] uppercase shadow-xs">
                <span>{property.area_name}</span>
                <span>•</span>
                <span>{property.developer_name}</span>
              </div>
              <h1 className="text-3xl sm:text-5xl md:text-6xl font-extrabold tracking-tight leading-tight uppercase text-white drop-shadow-md">
                {property.title}
              </h1>
            </div>

            <div className="text-left md:text-right shrink-0 space-y-1 bg-white/90 backdrop-blur-md p-5 sm:p-7 rounded-3xl border border-black/10 text-[#1d1d1f] shadow-lg">
              <div className="text-[10px] font-mono font-bold text-[#86868b] uppercase tracking-wider">
                Asking Price
              </div>
              <div className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#1d1d1f] tabular-nums">
                AED {property.asking_price?.toLocaleString()}
              </div>
            </div>
          </div>
        </div>

        {/* Thumbnail Selector (Top Right) */}
        {propertyImages.length > 1 && (
          <div className="absolute top-6 right-6 flex items-center gap-2 z-10 bg-white/85 backdrop-blur-md p-2 rounded-2xl border border-black/10 shadow-md">
            {propertyImages.map((img, idx) => (
              <button
                key={idx}
                type="button"
                onClick={() => setActiveImageIndex(idx)}
                className={`relative h-12 w-16 rounded-xl overflow-hidden border-2 transition-all cursor-pointer ${
                  activeImageIndex === idx ? 'border-[#1d1d1f] scale-105 shadow-sm' : 'border-transparent opacity-60 hover:opacity-100'
                }`}
              >
                <Image src={img} alt={`View ${idx + 1}`} fill sizes="80px" className="object-cover" />
              </button>
            ))}
          </div>
        )}
      </div>

      <main className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 space-y-16">
        {/* ========================================================================= */}
        {/* 3. APPLE TECH SPECS BENTO STRIP */}
        {/* ========================================================================= */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
          <div className="p-6 rounded-3xl bg-white border border-black/10 flex flex-col items-center justify-center text-center space-y-1 shadow-[0_2px_12px_rgba(0,0,0,0.03)] apple-card-hover">
            <div className="text-[10px] font-mono text-[#86868b] uppercase font-semibold tracking-wider">Bedrooms</div>
            <div className="text-xl font-extrabold text-[#1d1d1f]">{property.bedrooms} Bed</div>
          </div>
          <div className="p-6 rounded-3xl bg-white border border-black/10 flex flex-col items-center justify-center text-center space-y-1 shadow-[0_2px_12px_rgba(0,0,0,0.03)] apple-card-hover">
            <div className="text-[10px] font-mono text-[#86868b] uppercase font-semibold tracking-wider">Bathrooms</div>
            <div className="text-xl font-extrabold text-[#1d1d1f]">{property.bathrooms} Bath</div>
          </div>
          <div className="p-6 rounded-3xl bg-white border border-black/10 flex flex-col items-center justify-center text-center space-y-1 shadow-[0_2px_12px_rgba(0,0,0,0.03)] apple-card-hover">
            <div className="text-[10px] font-mono text-[#86868b] uppercase font-semibold tracking-wider">Internal Area</div>
            <div className="text-xl font-extrabold text-[#1d1d1f] tabular-nums">{property.internal_area_sqft.toLocaleString()} sqft</div>
            <div className="text-[10px] text-[#86868b] font-mono">({sqMeters} m²)</div>
          </div>
          <div className="p-6 rounded-3xl bg-white border border-black/10 flex flex-col items-center justify-center text-center space-y-1 shadow-[0_2px_12px_rgba(0,0,0,0.03)] apple-card-hover">
            <div className="text-[10px] font-mono text-[#86868b] uppercase font-semibold tracking-wider">Community</div>
            <div className="text-lg font-extrabold text-[#1d1d1f] truncate max-w-full">{property.area_name}</div>
          </div>
          <div className="p-6 rounded-3xl bg-white border border-black/10 flex flex-col items-center justify-center text-center space-y-1 shadow-[0_2px_12px_rgba(0,0,0,0.03)] apple-card-hover">
            <div className="text-[10px] font-mono text-[#86868b] uppercase font-semibold tracking-wider">Master Project</div>
            <div className="text-lg font-extrabold text-[#1d1d1f] truncate max-w-full">{property.project_name || 'Individual Estate'}</div>
          </div>
          <div className="p-6 rounded-3xl bg-white border border-black/10 flex flex-col items-center justify-center text-center space-y-1 shadow-[0_2px_12px_rgba(0,0,0,0.03)] apple-card-hover">
            <div className="text-[10px] font-mono text-[#86868b] uppercase font-semibold tracking-wider">Developer</div>
            <div className="text-lg font-extrabold text-[#1d1d1f] truncate max-w-full">{property.developer_name}</div>
          </div>
        </div>

        {/* ========================================================================= */}
        {/* 4. EDITORIAL DESCRIPTION & DOSSIER FACTS */}
        {/* ========================================================================= */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          <div className="lg:col-span-8 space-y-10">
            {/* Description */}
            <div className="space-y-4">
              <span className="text-[11px] font-mono font-bold text-[#b8860b] uppercase tracking-widest block">
                ARCHITECTURAL OVERVIEW
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1d1d1f] tracking-tight">
                Asset Intelligence & Living Experience
              </h2>
              <p className="text-base sm:text-lg text-[#6e6e73] leading-relaxed font-normal">
                {property.description}
              </p>
            </div>

            {/* Property Facts Matrix */}
            <div className="space-y-4 pt-6 border-t border-black/10">
              <span className="text-[11px] font-mono font-bold text-[#b8860b] uppercase tracking-widest block">
                AUDITED ASSET SPECIFICATIONS
              </span>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
                <div className="p-5 rounded-2xl border border-black/10 bg-[#f5f5f7] flex items-center justify-between">
                  <span className="text-[#6e6e73] font-mono">Completion Status:</span>
                  <strong className="text-[#1d1d1f] font-semibold">{property.completion_status}</strong>
                </div>
                <div className="p-5 rounded-2xl border border-black/10 bg-[#f5f5f7] flex items-center justify-between">
                  <span className="text-[#6e6e73] font-mono">Ownership Rights:</span>
                  <strong className="text-[#1d1d1f] font-semibold">Designated Freehold Area (Perpetual Title)</strong>
                </div>
                <div className="p-5 rounded-2xl border border-black/10 bg-[#f5f5f7] flex items-center justify-between">
                  <span className="text-[#6e6e73] font-mono">Service Charge Index:</span>
                  <strong className="text-[#1d1d1f] font-semibold">AED {property.service_charge_per_sqft || 20} / sqft annually</strong>
                </div>
                <div className="p-5 rounded-2xl border border-black/10 bg-[#f5f5f7] flex items-center justify-between">
                  <span className="text-[#6e6e73] font-mono">Residency Qualification:</span>
                  <strong className="text-emerald-700 font-bold flex items-center gap-1">
                    <CheckCircle2 className="h-3.5 w-3.5" />
                    10-Year Golden Visa Eligible
                  </strong>
                </div>
              </div>
            </div>

            {/* Provenance Box */}
            <div className="p-6 sm:p-8 rounded-3xl border border-black/10 bg-[#f5f5f7] space-y-3">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2 text-sm font-bold text-[#1d1d1f]">
                  <ShieldCheck className="h-5 w-5 text-[#b8860b]" />
                  <span>Statutory Land Ledger Provenance</span>
                </div>
                <SourceBadge status="OFFICIAL SOURCE" sourceName="DLD Title Deed" />
              </div>
              <p className="text-xs sm:text-sm text-[#6e6e73] leading-relaxed">
                This asset is verified in the central freehold register of the Dubai Land Department. Pricing reflects direct developer / title holder asking terms without intermediary markup.
              </p>
            </div>
          </div>

          {/* Right Column: Acquisition Desk Action & Private Viewing */}
          <div className="lg:col-span-4 space-y-6">
            <div className="p-6 sm:p-8 rounded-3xl border border-black/10 bg-white space-y-6 sticky top-28 shadow-[0_2px_12px_rgba(0,0,0,0.03)] apple-card-hover">
              <div className="space-y-2">
                <span className="text-[10px] font-mono font-bold text-[#b8860b] uppercase tracking-wider">
                  CONFIDENTIAL ADVISORY
                </span>
                <h3 className="text-2xl font-extrabold text-[#1d1d1f]">
                  Private Acquisition Desk
                </h3>
                <p className="text-xs text-[#6e6e73] leading-relaxed">
                  Schedule an on-site walkthrough, request the title deed dossier, or review escrow status with an accredited advisor.
                </p>
              </div>

              <div className="space-y-3 pt-2">
                <button
                  type="button"
                  onClick={() => setIsViewingOpen(true)}
                  className="w-full py-4 rounded-full bg-[#1d1d1f] text-white hover:bg-[#000000] text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 transition-all shadow-sm cursor-pointer"
                >
                  <Calendar className="h-4 w-4 text-white/70" />
                  <span>Schedule Private Viewing</span>
                </button>

                <Link
                  href="/private-client"
                  className="w-full py-3.5 rounded-full bg-[#f5f5f7] border border-black/10 hover:bg-[#ebebeb] text-[#1d1d1f] text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 transition-colors cursor-pointer shadow-2xs"
                >
                  <span>Private Client Mandate</span>
                  <ArrowRight className="h-3.5 w-3.5 text-[#b8860b]" />
                </Link>
              </div>

              <div className="pt-4 border-t border-black/10 text-[11px] font-mono text-[#86868b] space-y-1.5">
                <div>• Direct DLD conveyance closing</div>
                <div>• Zero buyer advisory markup</div>
                <div>• 10-Year Golden Visa legal sponsorship</div>
              </div>
            </div>
          </div>
        </div>

        {/* ========================================================================= */}
        {/* 5. STATUTORY ACQUISITION UNDERWRITING SIMULATOR */}
        {/* ========================================================================= */}
        <div className="p-6 sm:p-10 rounded-3xl border border-black/10 bg-white space-y-8 shadow-[0_2px_12px_rgba(0,0,0,0.03)] apple-card-hover">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-black/10 pb-6">
            <div>
              <div className="flex items-center gap-2 text-[11px] font-mono font-bold text-[#b8860b] uppercase tracking-wider">
                <Calculator className="h-4 w-4" />
                <span>Statutory Underwriting Simulator</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-[#1d1d1f] mt-1">
                Financial Model & Cash Flow Analysis
              </h3>
            </div>
            <SourceBadge status="CALCULATED" sourceName="DLD Tariff Resolution No. 30/2013" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-6 rounded-2xl bg-[#f5f5f7] border border-black/10 space-y-1">
              <div className="text-[10px] font-mono text-[#86868b] uppercase">Statutory 4% DLD Fee</div>
              <div className="text-2xl font-extrabold text-[#1d1d1f] tabular-nums">
                AED {acquisition.dld_transfer_fee.toLocaleString()}
              </div>
              <div className="text-[11px] text-[#6e6e73]">Statutory conveyance registration</div>
            </div>

            <div className="p-6 rounded-2xl bg-[#f5f5f7] border border-black/10 space-y-1">
              <div className="text-[10px] font-mono text-[#86868b] uppercase">Total Capital Outlay</div>
              <div className="text-2xl font-extrabold text-[#1d1d1f] tabular-nums">
                AED {acquisition.total_acquisition_cost.toLocaleString()}
              </div>
              <div className="text-[11px] text-[#6e6e73]">Asset price + all statutory & customary fees</div>
            </div>

            <div className="p-6 rounded-2xl bg-[#f5f5f7] border border-black/10 space-y-1">
              <div className="text-[10px] font-mono text-[#86868b] uppercase">Modeled Gross Yield</div>
              <div className="text-2xl font-extrabold text-[#b8860b] tabular-nums">{grossYield}%</div>
              <div className="text-[11px] text-[#6e6e73]">Based on AED {estimatedRent.toLocaleString()} rent</div>
            </div>

            <div className="p-6 rounded-2xl bg-[#f5f5f7] border border-black/10 space-y-1">
              <div className="text-[10px] font-mono text-[#86868b] uppercase">All-In Net Yield</div>
              <div className="text-2xl font-extrabold text-[#1d1d1f] tabular-nums">{netYield}%</div>
              <div className="text-[11px] text-[#6e6e73]">Net operating income ÷ all-in acquisition</div>
            </div>
          </div>

          <div className="text-center pt-2">
            <Link
              href="/investment"
              className="inline-flex items-center gap-2 text-xs font-bold text-[#b8860b] hover:underline"
            >
              <span>Launch Full Multi-Scenario Investment Builder →</span>
            </Link>
          </div>
        </div>
      </main>

      {/* Viewing Request Modal */}
      <ViewingModal
        isOpen={isViewingOpen}
        onClose={() => setIsViewingOpen(false)}
        property={property}
      />
    </div>
  )
}
