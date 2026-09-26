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
    <div className="bg-black text-white min-h-screen pb-24">
      {/* 1. TOP NAV & BREADCRUMB */}
      <div className="border-b border-white/10 bg-zinc-950/80 backdrop-blur-md py-3.5 sticky top-16 z-20">
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          <Link
            href="/properties"
            className="inline-flex items-center gap-2 text-xs font-semibold text-zinc-400 hover:text-white transition-colors"
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
              className="text-xs font-semibold text-zinc-400 hover:text-white flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-white/10 bg-zinc-900/80 cursor-pointer transition-colors"
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
              className={`text-xs font-semibold flex items-center gap-1.5 px-3 py-1.5 rounded-full border cursor-pointer transition-all ${
                isSaved
                  ? 'border-gold/30 bg-gold/10 text-gold'
                  : 'border-white/10 bg-zinc-900/80 text-zinc-400 hover:text-white'
              }`}
            >
              <Bookmark className={`h-3.5 w-3.5 ${isSaved ? 'fill-gold' : ''}`} />
              <span>{isSaved ? 'Shortlisted' : 'Save'}</span>
            </button>
          </div>
        </div>
      </div>

      {/* ========================================================================= */}
      {/* 2. APPLE KEYNOTE HERO MEDIA SHOWCASE */}
      {/* ========================================================================= */}
      <div className="relative w-full aspect-[21/9] min-h-[480px] max-h-[75vh] bg-zinc-950 overflow-hidden border-b border-white/10">
        <Image
          src={propertyImages[activeImageIndex] || propertyImages[0]}
          alt={property.title}
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        {/* Dark Vignette */}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-black/20 pointer-events-none" />

        <div className="absolute bottom-0 inset-x-0 p-6 sm:p-10 lg:p-14 text-white">
          <div className="w-full max-w-7xl mx-auto flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div className="space-y-3 max-w-3xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-black/60 backdrop-blur-md border border-white/15 text-xs font-mono font-bold tracking-widest text-gold uppercase">
                <span>{property.area_name}</span>
                <span>•</span>
                <span>{property.developer_name}</span>
              </div>
              <h1 className="text-3xl sm:text-5xl md:text-6xl font-black tracking-tight leading-tight uppercase text-white">
                {property.title}
              </h1>
            </div>

            <div className="text-left md:text-right shrink-0 space-y-1 bg-black/60 backdrop-blur-md p-4 sm:p-6 rounded-3xl border border-white/15">
              <div className="text-[10px] font-mono font-bold text-zinc-400 uppercase tracking-wider">
                Official Asking Price
              </div>
              <div className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tabular-nums">
                AED {property.asking_price?.toLocaleString()}
              </div>
            </div>
          </div>
        </div>

        {/* Thumbnail Selector (Top Right) */}
        {propertyImages.length > 1 && (
          <div className="absolute top-6 right-6 flex items-center gap-2 z-10 bg-black/60 backdrop-blur-md p-2 rounded-2xl border border-white/20">
            {propertyImages.map((img, idx) => (
              <button
                key={idx}
                type="button"
                onClick={() => setActiveImageIndex(idx)}
                className={`relative h-12 w-16 rounded-xl overflow-hidden border-2 transition-all cursor-pointer ${
                  activeImageIndex === idx ? 'border-gold scale-105 shadow-lg shadow-gold/20' : 'border-transparent opacity-60 hover:opacity-100'
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
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
          <div className="p-5 rounded-2xl bg-zinc-950 border border-white/10 flex flex-col items-center justify-center text-center space-y-1 backdrop-blur-md">
            <div className="text-[10px] font-mono text-zinc-400 uppercase font-semibold tracking-wider">Bedrooms</div>
            <div className="text-lg font-bold text-white">{property.bedrooms} Bed</div>
          </div>
          <div className="p-5 rounded-2xl bg-zinc-950 border border-white/10 flex flex-col items-center justify-center text-center space-y-1 backdrop-blur-md">
            <div className="text-[10px] font-mono text-zinc-400 uppercase font-semibold tracking-wider">Bathrooms</div>
            <div className="text-lg font-bold text-white">{property.bathrooms} Bath</div>
          </div>
          <div className="p-5 rounded-2xl bg-zinc-950 border border-white/10 flex flex-col items-center justify-center text-center space-y-1 backdrop-blur-md">
            <div className="text-[10px] font-mono text-zinc-400 uppercase font-semibold tracking-wider">Internal Area</div>
            <div className="text-lg font-bold text-white tabular-nums">{property.internal_area_sqft.toLocaleString()} sqft</div>
            <div className="text-[10px] text-zinc-500 font-mono">({sqMeters} m²)</div>
          </div>
          <div className="p-5 rounded-2xl bg-zinc-950 border border-white/10 flex flex-col items-center justify-center text-center space-y-1 backdrop-blur-md">
            <div className="text-[10px] font-mono text-zinc-400 uppercase font-semibold tracking-wider">Community</div>
            <div className="text-lg font-bold text-white truncate max-w-full">{property.area_name}</div>
          </div>
          <div className="p-5 rounded-2xl bg-zinc-950 border border-white/10 flex flex-col items-center justify-center text-center space-y-1 backdrop-blur-md">
            <div className="text-[10px] font-mono text-zinc-400 uppercase font-semibold tracking-wider">Master Project</div>
            <div className="text-lg font-bold text-white truncate max-w-full">{property.project_name || 'Individual Estate'}</div>
          </div>
          <div className="p-5 rounded-2xl bg-zinc-950 border border-white/10 flex flex-col items-center justify-center text-center space-y-1 backdrop-blur-md">
            <div className="text-[10px] font-mono text-zinc-400 uppercase font-semibold tracking-wider">Developer</div>
            <div className="text-lg font-bold text-white truncate max-w-full">{property.developer_name}</div>
          </div>
        </div>

        {/* ========================================================================= */}
        {/* 4. EDITORIAL DESCRIPTION & DOSSIER FACTS */}
        {/* ========================================================================= */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          <div className="lg:col-span-8 space-y-10">
            {/* Description */}
            <div className="space-y-4">
              <span className="text-[11px] font-mono font-bold text-gold uppercase tracking-widest block">
                ARCHITECTURAL OVERVIEW
              </span>
              <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight">
                Asset Intelligence & Living Experience
              </h2>
              <p className="text-base text-zinc-300 leading-relaxed font-normal">
                {property.description}
              </p>
            </div>

            {/* Property Facts Matrix */}
            <div className="space-y-4 pt-6 border-t border-white/10">
              <span className="text-[11px] font-mono font-bold text-gold uppercase tracking-widest block">
                AUDITED ASSET SPECIFICATIONS
              </span>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
                <div className="p-5 rounded-2xl border border-white/10 bg-zinc-950/80 flex items-center justify-between">
                  <span className="text-zinc-400 font-mono">Completion Status:</span>
                  <strong className="text-white font-semibold">{property.completion_status}</strong>
                </div>
                <div className="p-5 rounded-2xl border border-white/10 bg-zinc-950/80 flex items-center justify-between">
                  <span className="text-zinc-400 font-mono">Ownership Rights:</span>
                  <strong className="text-white font-semibold">Designated Freehold Area (Perpetual Title)</strong>
                </div>
                <div className="p-5 rounded-2xl border border-white/10 bg-zinc-950/80 flex items-center justify-between">
                  <span className="text-zinc-400 font-mono">Service Charge Index:</span>
                  <strong className="text-white font-semibold">AED {property.service_charge_per_sqft || 20} / sqft annually</strong>
                </div>
                <div className="p-5 rounded-2xl border border-white/10 bg-zinc-950/80 flex items-center justify-between">
                  <span className="text-zinc-400 font-mono">Residency Qualification:</span>
                  <strong className="text-gold font-bold flex items-center gap-1">
                    <CheckCircle2 className="h-3.5 w-3.5" />
                    10-Year Golden Visa Eligible
                  </strong>
                </div>
              </div>
            </div>

            {/* Provenance Box */}
            <div className="p-6 sm:p-8 rounded-3xl border border-white/10 bg-zinc-950/90 space-y-3">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2 text-sm font-bold text-white">
                  <ShieldCheck className="h-5 w-5 text-gold" />
                  <span>Statutory Land Ledger Provenance</span>
                </div>
                <SourceBadge status="OFFICIAL SOURCE" sourceName="DLD Title Deed" />
              </div>
              <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed">
                This asset is verified in the central freehold register of the Dubai Land Department. Pricing reflects direct developer / title holder asking terms without intermediary markup.
              </p>
            </div>
          </div>

          {/* Right Column: Acquisition Desk Action & Private Viewing */}
          <div className="lg:col-span-4 space-y-6">
            <div className="p-6 sm:p-8 rounded-3xl border border-white/10 bg-zinc-950/90 space-y-6 sticky top-28 shadow-2xl backdrop-blur-md">
              <div className="space-y-2">
                <span className="text-[10px] font-mono font-bold text-gold uppercase tracking-wider">
                  CONFIDENTIAL ADVISORY
                </span>
                <h3 className="text-2xl font-black text-white">
                  Private Acquisition Desk
                </h3>
                <p className="text-xs text-zinc-400 leading-relaxed">
                  Schedule an on-site walkthrough, request the title deed dossier, or review escrow status with an accredited advisor.
                </p>
              </div>

              <div className="space-y-3 pt-2">
                <button
                  type="button"
                  onClick={() => setIsViewingOpen(true)}
                  className="w-full py-4 rounded-full bg-white text-black hover:bg-zinc-200 text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 transition-all shadow-lg hover:shadow-white/10 cursor-pointer"
                >
                  <Calendar className="h-4 w-4 text-black" />
                  <span>Schedule Private Viewing</span>
                </button>

                <Link
                  href="/private-client"
                  className="w-full py-3.5 rounded-full bg-zinc-900 border border-white/15 hover:bg-zinc-800 text-white text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 transition-colors cursor-pointer"
                >
                  <span>Private Client Mandate</span>
                  <ArrowRight className="h-3.5 w-3.5 text-gold" />
                </Link>
              </div>

              <div className="pt-4 border-t border-white/10 text-[11px] font-mono text-zinc-500 space-y-1.5">
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
        <div className="p-6 sm:p-10 rounded-3xl border border-white/10 bg-zinc-950/80 space-y-8 backdrop-blur-md">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-white/10 pb-6">
            <div>
              <div className="flex items-center gap-2 text-[11px] font-mono font-bold text-gold uppercase tracking-wider">
                <Calculator className="h-4 w-4" />
                <span>Statutory Underwriting Simulator</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-black text-white mt-1">
                Financial Model & Cash Flow Analysis
              </h3>
            </div>
            <SourceBadge status="CALCULATED" sourceName="DLD Tariff Resolution No. 30/2013" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="p-6 rounded-2xl bg-black border border-white/10 space-y-1">
              <div className="text-[10px] font-mono text-zinc-400 uppercase">Statutory 4% DLD Fee</div>
              <div className="text-2xl font-black text-white tabular-nums">
                AED {acquisition.dld_transfer_fee.toLocaleString()}
              </div>
              <div className="text-[11px] text-zinc-400">Statutory conveyance registration</div>
            </div>

            <div className="p-6 rounded-2xl bg-black border border-white/10 space-y-1">
              <div className="text-[10px] font-mono text-zinc-400 uppercase">Total Capital Outlay</div>
              <div className="text-2xl font-black text-white tabular-nums">
                AED {acquisition.total_acquisition_cost.toLocaleString()}
              </div>
              <div className="text-[11px] text-zinc-400">Asset price + all statutory & customary fees</div>
            </div>

            <div className="p-6 rounded-2xl bg-black border border-white/10 space-y-1">
              <div className="text-[10px] font-mono text-zinc-400 uppercase">Modeled Gross Yield</div>
              <div className="text-2xl font-black text-gold tabular-nums">{grossYield}%</div>
              <div className="text-[11px] text-zinc-400">Based on AED {estimatedRent.toLocaleString()} rent</div>
            </div>

            <div className="p-6 rounded-2xl bg-black border border-white/10 space-y-1">
              <div className="text-[10px] font-mono text-zinc-400 uppercase">All-In Net Yield</div>
              <div className="text-2xl font-black text-white tabular-nums">{netYield}%</div>
              <div className="text-[11px] text-zinc-400">Net operating income ÷ all-in acquisition</div>
            </div>
          </div>

          <div className="text-center pt-2">
            <Link
              href="/investment"
              className="inline-flex items-center gap-2 text-xs font-bold text-gold hover:underline"
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

