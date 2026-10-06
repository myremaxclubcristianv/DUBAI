'use client'

import * as React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { PropertyRecord } from '@/types/provenance'
import { SourceBadge } from '@/components/ui/source-badge'
import { Bed, Bath, Maximize2, MapPin, ArrowUpRight, Bookmark, Building2, ShieldCheck } from 'lucide-react'
import { useClient } from '@/lib/context/client-context'

interface PropertyCardProps {
  property: PropertyRecord
  className?: string
  priority?: boolean
}

export function PropertyCard({ property, className = '', priority = false }: PropertyCardProps) {
  const { isShortlisted, toggleShortlist, formatCurrency } = useClient()
  const saved = isShortlisted(property.id)
  const isGoldenVisa = property.asking_price ? property.asking_price >= 2000000 : false

  const handleBookmark = (e: React.MouseEvent) => {
    e.preventDefault()
    e.stopPropagation()
    toggleShortlist(property.id, property.title)
  }

  return (
    <article
      className={`group bg-white rounded-xs border border-slate-200/90 overflow-hidden flex flex-col justify-between hover:border-[#0284c7]/60 transition-all duration-300 shadow-[0_2px_12px_rgba(15,23,42,0.04)] hover:shadow-[0_12px_32px_rgba(2,132,199,0.12)] ${className}`}
    >
      <div>
        {/* Dominant Architectural Image Spread (16:11 ratio) */}
        <div className="relative aspect-[16/11] w-full bg-slate-100 overflow-hidden">
          {property.images && property.images[0] ? (
            <Image
              src={property.images[0]}
              alt={property.title}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              priority={priority}
              className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
            />
          ) : (
            <div className="w-full h-full flex flex-col items-center justify-center p-6 text-center bg-slate-100 text-slate-400">
              <Building2 className="h-8 w-8 text-slate-300 mb-2" />
              <span className="text-xs font-semibold text-slate-600">Architectural Visual Pending</span>
              <span className="text-[10px] text-slate-400 mt-0.5 font-mono">Verified specifications active</span>
            </div>
          )}

          {/* Top Pill Badges */}
          <div className="absolute top-3 left-3 flex flex-wrap items-center gap-1.5 z-10">
            <span className="px-2 py-0.5 rounded-xs text-[9px] font-mono uppercase tracking-wider bg-white/95 backdrop-blur-md text-slate-800 border border-slate-200 shadow-2xs">
              {property.completion_status}
            </span>
            <span className="px-2 py-0.5 rounded-xs text-[9px] font-mono uppercase tracking-wider bg-sky-50/95 backdrop-blur-md text-[#0284c7] border border-sky-200 shadow-2xs font-semibold">
              {property.property_type}
            </span>
            {isGoldenVisa && (
              <span className="px-2 py-0.5 rounded-xs text-[9px] font-mono uppercase bg-emerald-50/95 backdrop-blur-md text-emerald-700 border border-emerald-200 flex items-center gap-1 shadow-2xs">
                <ShieldCheck className="h-2.5 w-2.5" />
                <span>Golden Visa</span>
              </span>
            )}
          </div>

          {/* Bookmark CTA Button */}
          <button
            onClick={handleBookmark}
            title={saved ? 'Remove from saved shortlist' : 'Save to shortlist'}
            className={`absolute top-3 right-3 p-2 rounded-xs backdrop-blur-md transition-all z-10 border cursor-pointer ${
              saved
                ? 'bg-[#0284c7] text-white border-[#0284c7]'
                : 'bg-white/90 text-slate-700 border-slate-200 hover:bg-[#0284c7] hover:text-white shadow-2xs'
            }`}
          >
            <Bookmark className={`h-3.5 w-3.5 ${saved ? 'fill-current' : ''}`} />
          </button>
        </div>

        {/* Editorial Body Content */}
        <div className="p-5 space-y-3">
          <div className="flex items-center justify-between gap-2">
            <div className="flex items-center gap-1.5 text-xs text-[#0284c7] font-mono font-medium">
              <MapPin className="h-3 w-3 text-[#0284c7] shrink-0" />
              <span className="truncate">{property.area_name}</span>
            </div>
            <SourceBadge provenance={property.provenance} showDetailButton={false} />
          </div>

          <Link href={`/properties/${property.id}`} className="block group-hover:text-[#0284c7] transition-colors">
            <h3 className="text-base sm:text-lg font-light text-slate-900 line-clamp-1 leading-snug">
              {property.editorial_display_name || property.title}
            </h3>
          </Link>

          <p className="text-[11px] text-slate-500 font-mono uppercase tracking-wider truncate">
            Developer: <span className="text-slate-700 font-medium">{property.developer_name}</span>
          </p>

          {/* Key Metric Specs */}
          <div className="grid grid-cols-3 gap-2 py-2.5 border-y border-slate-100 text-xs text-slate-600 items-center font-mono">
            <div className="flex items-center gap-1.5 truncate">
              <Bed className="h-3 w-3 text-slate-400 shrink-0" />
              <span className="truncate">{property.bedrooms} Beds</span>
            </div>
            <div className="flex items-center gap-1.5 truncate">
              <Bath className="h-3 w-3 text-slate-400 shrink-0" />
              <span className="truncate">{property.bathrooms} Baths</span>
            </div>
            <div className="flex items-center gap-1.5 truncate">
              <Maximize2 className="h-3 w-3 text-slate-400 shrink-0" />
              <span className="tabular-nums truncate">
                {property.internal_area_sqft.toLocaleString()} sqft
              </span>
            </div>
          </div>

          {/* Price & Valuation */}
          <div className="pt-0.5 flex items-baseline justify-between font-mono">
            <div>
              <span className="text-[9px] uppercase text-slate-400 tracking-wider block">
                Asking Price
              </span>
              <span className="text-lg font-light text-slate-900 tabular-nums font-semibold">
                {formatCurrency(property.asking_price)}
              </span>
            </div>
            <div className="text-right">
              <span className="text-[9px] text-[#0284c7] uppercase tracking-wider block font-semibold">
                STATUTORY DLD
              </span>
              <span className="text-xs text-slate-500 tabular-nums">
                AED {property.price_per_sqft?.toLocaleString()} / sqft
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Action Footer */}
      <div className="p-5 pt-0">
        <Link
          href={`/properties/${property.id}`}
          className="w-full py-2.5 px-4 rounded-xs bg-slate-100 hover:bg-[#0284c7] text-slate-800 hover:text-white text-xs font-mono uppercase tracking-[0.14em] font-semibold text-center transition-all flex items-center justify-center gap-1.5 border border-slate-200 hover:border-[#0284c7] shadow-2xs"
        >
          <span>Inspect Dossier</span>
          <ArrowUpRight className="h-3.5 w-3.5" />
        </Link>
      </div>
    </article>
  )
}
