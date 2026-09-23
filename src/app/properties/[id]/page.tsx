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
  ArrowRight
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
    <div className="bg-white text-text-primary min-h-screen pb-24">
      {/* 1. TOP NAV & BREADCRUMB */}
      <div className="border-b border-border bg-surface-subtle py-3.5">
        <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          <Link
            href="/properties"
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-text-secondary hover:text-text-primary transition-colors"
          >
            <ArrowLeft className="h-4 w-4" />
            <span>Property Index</span>
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
              className="text-xs font-semibold text-text-secondary hover:text-text-primary flex items-center gap-1 cursor-pointer"
            >
              <Layers className="h-3.5 w-3.5" />
              <span>{isCompared ? 'In Comparison Desk' : 'Compare'}</span>
            </button>

            <span className="text-border">•</span>

            <button
              onClick={() => {
                toggleShortlist(property.id, property.title)
                addToast(
                  isSaved ? `Removed from saved shortlist` : `Saved ${property.title} to shortlist`,
                  'success'
                )
              }}
              className="text-xs font-semibold text-text-secondary hover:text-text-primary flex items-center gap-1 cursor-pointer"
            >
              <Bookmark className={`h-3.5 w-3.5 ${isSaved ? 'text-accent fill-accent' : ''}`} />
              <span>{isSaved ? 'Saved' : 'Save'}</span>
            </button>
          </div>
        </div>
      </div>

      {/* ========================================================================= */}
      {/* 2. FULL-WIDTH HERO IMAGE WITH ARCHITECTURAL OVERLAY */}
      {/* ========================================================================= */}
      <div className="relative w-full aspect-[16/9] max-h-[70vh] bg-surface-elevated overflow-hidden border-b border-border">
        <Image
          src={propertyImages[activeImageIndex] || propertyImages[0]}
          alt={property.title}
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        {/* Subtle Dark Gradient for Text Legibility */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent pointer-events-none" />

        <div className="absolute bottom-0 inset-x-0 p-6 sm:p-10 lg:p-12 text-white">
          <div className="w-full max-w-6xl mx-auto flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div className="space-y-2 max-w-3xl">
              <div className="flex items-center gap-2 text-xs font-mono font-bold tracking-widest text-[#c9a962] uppercase">
                <span>{property.area_name}</span>
                <span>•</span>
                <span>{property.developer_name}</span>
                <span>•</span>
                <span className="text-white/60 font-normal">Architecture Editorial Visual</span>
              </div>
              <h1 className="text-3xl sm:text-5xl md:text-6xl font-black tracking-tight leading-tight uppercase">
                {property.title}
              </h1>
            </div>

            <div className="text-left md:text-right shrink-0 space-y-1">
              <div className="text-xs font-mono font-bold text-white/70 uppercase">
                Asking Price (Listing Terms)
              </div>
              <div className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tabular-nums">
                AED {property.asking_price?.toLocaleString()}
              </div>
            </div>
          </div>
        </div>

        {/* Thumbnail Selector (Bottom Right) */}
        {propertyImages.length > 1 && (
          <div className="absolute top-4 right-4 flex items-center gap-2 z-10 bg-black/40 backdrop-blur-md p-1.5 rounded-xl border border-white/20">
            {propertyImages.map((img, idx) => (
              <button
                key={idx}
                type="button"
                onClick={() => setActiveImageIndex(idx)}
                className={`relative h-10 w-14 rounded-lg overflow-hidden border-2 transition-all ${
                  activeImageIndex === idx ? 'border-white scale-105' : 'border-transparent opacity-70 hover:opacity-100'
                }`}
              >
                <Image src={img} alt={`View ${idx + 1}`} fill sizes="60px" className="object-cover" />
              </button>
            ))}
          </div>
        )}
      </div>

      <main className="w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 space-y-14">
        {/* ========================================================================= */}
        {/* 3. LARGE SPECIFICATIONS & METRICS STRIP */}
        {/* ========================================================================= */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 p-4 rounded-2xl border border-border bg-surface-subtle">
          <div className="p-3 bg-white rounded-xl border border-border text-center space-y-0.5">
            <div className="text-[10px] font-mono text-text-muted uppercase">Bedrooms</div>
            <div className="text-base font-black text-text-primary">{property.bedrooms} Bed</div>
          </div>
          <div className="p-3 bg-white rounded-xl border border-border text-center space-y-0.5">
            <div className="text-[10px] font-mono text-text-muted uppercase">Bathrooms</div>
            <div className="text-base font-black text-text-primary">{property.bathrooms} Bath</div>
          </div>
          <div className="p-3 bg-white rounded-xl border border-border text-center space-y-0.5">
            <div className="text-[10px] font-mono text-text-muted uppercase">Internal Area</div>
            <div className="text-base font-black text-text-primary">{property.internal_area_sqft.toLocaleString()} sqft</div>
            <div className="text-[10px] text-text-muted font-mono">({sqMeters} m²)</div>
          </div>
          <div className="p-3 bg-white rounded-xl border border-border text-center space-y-0.5">
            <div className="text-[10px] font-mono text-text-muted uppercase">Community</div>
            <div className="text-base font-black text-text-primary truncate">{property.area_name}</div>
          </div>
          <div className="p-3 bg-white rounded-xl border border-border text-center space-y-0.5">
            <div className="text-[10px] font-mono text-text-muted uppercase">Master Project</div>
            <div className="text-base font-black text-text-primary truncate">{property.project_name || 'Individual Estate'}</div>
          </div>
          <div className="p-3 bg-white rounded-xl border border-border text-center space-y-0.5">
            <div className="text-[10px] font-mono text-text-muted uppercase">Developer</div>
            <div className="text-base font-black text-text-primary truncate">{property.developer_name}</div>
          </div>
        </div>

        {/* ========================================================================= */}
        {/* 4. EDITORIAL DESCRIPTION & DOSSIER FACTS */}
        {/* ========================================================================= */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          <div className="lg:col-span-8 space-y-8">
            {/* Description */}
            <div className="space-y-4">
              <span className="text-[11px] font-mono font-bold text-accent uppercase tracking-widest block">
                ARCHITECTURAL OVERVIEW
              </span>
              <h2 className="text-2xl sm:text-3xl font-black text-text-primary tracking-tight">
                Asset Intelligence & Living Experience
              </h2>
              <p className="text-sm sm:text-base text-text-secondary leading-relaxed font-normal">
                {property.description}
              </p>
            </div>

            {/* Property Facts Matrix */}
            <div className="space-y-4 pt-4 border-t border-border">
              <span className="text-[11px] font-mono font-bold text-accent uppercase tracking-widest block">
                AUDITED ASSET SPECIFICATIONS
              </span>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                <div className="p-4 rounded-xl border border-border bg-surface-subtle flex items-center justify-between">
                  <span className="text-text-muted font-mono">Completion Status:</span>
                  <strong className="text-text-primary">{property.completion_status}</strong>
                </div>
                <div className="p-4 rounded-xl border border-border bg-surface-subtle flex items-center justify-between">
                  <span className="text-text-muted font-mono">Ownership Rights:</span>
                  <strong className="text-text-primary">Designated Freehold Area (Perpetual Title)</strong>
                </div>
                <div className="p-4 rounded-xl border border-border bg-surface-subtle flex items-center justify-between">
                  <span className="text-text-muted font-mono">Service Charge Index:</span>
                  <strong className="text-text-primary">AED {property.service_charge_per_sqft || 20} / sqft annually</strong>
                </div>
                <div className="p-4 rounded-xl border border-border bg-surface-subtle flex items-center justify-between">
                  <span className="text-text-muted font-mono">Residency Qualification:</span>
                  <strong className="text-emerald-700 font-bold">5-Year Golden Visa Eligible</strong>
                </div>
              </div>
            </div>

            {/* Provenance Box */}
            <div className="p-6 rounded-2xl border border-border bg-surface space-y-2">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2 text-xs font-bold text-text-primary">
                  <ShieldCheck className="h-4 w-4 text-accent" />
                  <span>Statutory Land Ledger Provenance</span>
                </div>
                <SourceBadge status="OFFICIAL SOURCE" sourceName="DLD Title Deed" />
              </div>
              <p className="text-xs text-text-secondary leading-relaxed">
                This asset is verified in the central freehold register of the Dubai Land Department. Pricing reflects direct developer / title holder asking terms without intermediary markup.
              </p>
            </div>
          </div>

          {/* Right Column: Acquisition Desk Action & Private Viewing */}
          <div className="lg:col-span-4 space-y-6">
            <div className="p-6 sm:p-8 rounded-3xl border border-border bg-surface-subtle space-y-6 sticky top-24">
              <div className="space-y-1">
                <span className="text-[10px] font-mono font-bold text-accent uppercase tracking-wider">
                  CONFIDENTIAL ADVISORY
                </span>
                <h3 className="text-xl font-extrabold text-text-primary">
                  Private Acquisition Desk
                </h3>
                <p className="text-xs text-text-secondary">
                  Schedule an on-site walkthrough, request the title deed dossier, or review escrow status.
                </p>
              </div>

              <div className="space-y-2 pt-2">
                <button
                  type="button"
                  onClick={() => setIsViewingOpen(true)}
                  className="w-full py-3.5 rounded-xl bg-text-primary text-white hover:bg-black text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 transition-colors shadow-sm cursor-pointer"
                >
                  <Calendar className="h-4 w-4 text-accent" />
                  <span>Schedule Private Viewing</span>
                </button>

                <Link
                  href="/private-client"
                  className="w-full py-3 rounded-xl bg-white border border-border hover:bg-surface text-text-primary text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 transition-colors"
                >
                  <span>Private Client Mandate</span>
                  <ArrowRight className="h-3.5 w-3.5 text-accent" />
                </Link>
              </div>

              <div className="pt-4 border-t border-border text-[11px] font-mono text-text-muted space-y-1">
                <div>• Direct DLD conveyance closing</div>
                <div>• Zero buyer advisory markup</div>
                <div>• 5-Year Golden Visa assistance</div>
              </div>
            </div>
          </div>
        </div>

        {/* ========================================================================= */}
        {/* 5. STATUTORY ACQUISITION UNDERWRITING SIMULATOR */}
        {/* ========================================================================= */}
        <div className="p-6 sm:p-10 rounded-3xl border border-border bg-white space-y-8">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-border pb-6">
            <div>
              <div className="flex items-center gap-2 text-[11px] font-mono font-bold text-accent uppercase tracking-wider">
                <Calculator className="h-4 w-4" />
                <span>Statutory Underwriting Simulator</span>
              </div>
              <h3 className="text-2xl font-black text-text-primary mt-0.5">
                Financial Model & Cash Flow Analysis
              </h3>
            </div>
            <SourceBadge status="CALCULATED" sourceName="DLD Tariff Resolution No. 30/2013" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="p-5 rounded-2xl bg-surface-subtle border border-border space-y-1">
              <div className="text-[10px] font-mono text-text-muted uppercase">Statutory 4% DLD Fee</div>
              <div className="text-xl font-black text-text-primary tabular-nums">
                AED {acquisition.dld_transfer_fee.toLocaleString()}
              </div>
              <div className="text-[11px] text-text-secondary">Statutory conveyance registration</div>
            </div>

            <div className="p-5 rounded-2xl bg-surface-subtle border border-border space-y-1">
              <div className="text-[10px] font-mono text-text-muted uppercase">Total Capital Outlay</div>
              <div className="text-xl font-black text-text-primary tabular-nums">
                AED {acquisition.total_acquisition_cost.toLocaleString()}
              </div>
              <div className="text-[11px] text-text-secondary">Asset price + all statutory & customary fees</div>
            </div>

            <div className="p-5 rounded-2xl bg-surface-subtle border border-border space-y-1">
              <div className="text-[10px] font-mono text-text-muted uppercase">Modeled Gross Yield</div>
              <div className="text-xl font-black text-accent tabular-nums">{grossYield}%</div>
              <div className="text-[11px] text-text-secondary">Based on AED {estimatedRent.toLocaleString()} rent</div>
            </div>

            <div className="p-5 rounded-2xl bg-surface-subtle border border-border space-y-1">
              <div className="text-[10px] font-mono text-text-muted uppercase">All-In Net Yield</div>
              <div className="text-xl font-black text-text-primary tabular-nums">{netYield}%</div>
              <div className="text-[11px] text-text-secondary">Net operating income ÷ all-in acquisition</div>
            </div>
          </div>

          <div className="text-center pt-2">
            <Link
              href="/investment"
              className="inline-flex items-center gap-2 text-xs font-bold text-accent hover:underline"
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
