'use client'

import * as React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { PropertyRecord } from '@/types/provenance'
import { SourceBadge } from '@/components/ui/source-badge'
import { Bed, Bath, Maximize2, MapPin, ArrowRight, Bookmark, Building2 } from 'lucide-react'
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
    <div
      className={`group bg-white rounded-3xl border border-black/10 overflow-hidden flex flex-col justify-between shadow-[0_2px_12px_rgba(0,0,0,0.03)] hover:shadow-xl hover:border-black/20 apple-card-hover transition-all duration-300 ${className}`}
    >
      <div>
        {/* Image Container with Next/Image */}
        <div className="relative aspect-[16/10] w-full bg-[#f5f5f7] overflow-hidden">
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
            <div className="w-full h-full flex flex-col items-center justify-center p-6 text-center bg-[#f5f5f7] text-[#86868b]">
              <Building2 className="h-8 w-8 text-black/10 mb-2" />
              <span className="text-xs font-semibold">Architectural Visual Pending</span>
              <span className="text-[10px] text-[#86868b] mt-0.5">Verified specifications active</span>
            </div>
          )}

          {/* Top Pill Badges */}
          <div className="absolute top-3.5 left-3.5 flex flex-wrap items-center gap-1.5 z-10">
            <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider bg-white/95 backdrop-blur-md text-[#1d1d1f] border border-black/10 shadow-xs">
              {property.completion_status}
            </span>
            <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider bg-white/95 backdrop-blur-md text-[#b8860b] border border-black/10 shadow-xs">
              {property.property_type}
            </span>
            {isGoldenVisa && (
              <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase bg-emerald-600/90 backdrop-blur-md text-white border border-emerald-500 shadow-xs">
                10-Yr Visa
              </span>
            )}
          </div>

          {/* Bookmark CTA Button */}
          <button
            onClick={handleBookmark}
            title={saved ? 'Remove from saved shortlist' : 'Save to shortlist'}
            className={`absolute top-3.5 right-3.5 p-2 rounded-full backdrop-blur-md transition-all z-10 border shadow-xs cursor-pointer ${
              saved
                ? 'bg-[#b8860b] text-white border-[#b8860b]'
                : 'bg-white/90 text-[#1d1d1f] border-black/10 hover:bg-white hover:text-[#b8860b]'
            }`}
          >
            <Bookmark className={`h-3.5 w-3.5 ${saved ? 'fill-current' : ''}`} />
          </button>
        </div>

        {/* Editorial Body Content */}
        <div className="p-6 space-y-3">
          <div className="flex items-center justify-between gap-2 min-h-[1.25rem]">
            <div className="flex items-center gap-1 text-xs text-[#6e6e73] font-medium">
              <MapPin className="h-3.5 w-3.5 text-[#b8860b] shrink-0" />
              <span className="truncate">{property.area_name}</span>
            </div>
            <SourceBadge provenance={property.provenance} showDetailButton={false} />
          </div>

          <Link href={`/properties/${property.id}`} className="block group-hover:text-[#b8860b] transition-colors">
            <h3 className="text-base font-bold text-[#1d1d1f] line-clamp-1 leading-snug min-h-[1.5rem]">
              {property.editorial_display_name || property.title}
            </h3>
          </Link>

          <p className="text-xs text-[#86868b] font-mono uppercase tracking-wider min-h-[1.125rem] truncate">
            Developer: {property.developer_name}
          </p>

          {/* Key Metric Specs */}
          <div className="grid grid-cols-3 gap-2 py-3 border-y border-black/5 text-xs text-[#6e6e73] min-h-[2.5rem] items-center">
            <div className="flex items-center gap-1.5 truncate">
              <Bed className="h-3.5 w-3.5 text-[#86868b] shrink-0" />
              <span className="font-semibold truncate">{property.bedrooms} Beds</span>
            </div>
            <div className="flex items-center gap-1.5 truncate">
              <Bath className="h-3.5 w-3.5 text-[#86868b] shrink-0" />
              <span className="font-semibold truncate">{property.bathrooms} Baths</span>
            </div>
            <div className="flex items-center gap-1.5 truncate">
              <Maximize2 className="h-3.5 w-3.5 text-[#86868b] shrink-0" />
              <span className="font-semibold tabular-nums truncate">
                {property.internal_area_sqft.toLocaleString()} sqft
              </span>
            </div>
          </div>

          {/* Price & Price/sqft */}
          <div className="pt-2 flex items-baseline justify-between min-h-[2.75rem]">
            <div>
              <span className="text-[10px] font-mono uppercase text-[#86868b] block">
                Asking Valuation
              </span>
              <span className="text-xl font-extrabold text-[#1d1d1f] tabular-nums">
                {formatCurrency(property.asking_price)}
              </span>
            </div>
            <div className="text-right">
              <span className="text-[10px] font-mono text-[#b8860b] font-bold block">
                STATUTORY DLD
              </span>
              <span className="text-xs text-[#6e6e73] font-semibold tabular-nums">
                AED {property.price_per_sqft?.toLocaleString()} / sqft
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Action Footer */}
      <div className="p-6 pt-0">
        <Link
          href={`/properties/${property.id}`}
          className="w-full py-3 px-4 rounded-full bg-[#1d1d1f] text-white hover:bg-black text-xs font-bold text-center transition-all flex items-center justify-center gap-1.5 shadow-xs"
        >
          <span>Inspect Property Dossier</span>
          <ArrowRight className="h-3.5 w-3.5" />
        </Link>
      </div>
    </div>
  )
}
