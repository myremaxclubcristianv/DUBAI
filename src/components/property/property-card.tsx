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
      className={`group bg-[#0d0d11] rounded-sm border border-white/10 overflow-hidden flex flex-col justify-between hover:border-[#c9a962]/50 transition-all duration-500 shadow-[0_4px_24px_rgba(0,0,0,0.5)] hover:shadow-[0_8px_32px_rgba(201,169,98,0.08)] ${className}`}
    >
      <div>
        {/* Dominant Architectural Image Spread */}
        <div className="relative aspect-[16/10] sm:aspect-[16/11] w-full bg-[#08080a] overflow-hidden">
          {property.images && property.images[0] ? (
            <Image
              src={property.images[0]}
              alt={property.title}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              priority={priority}
              className="object-cover group-hover:scale-105 transition-transform duration-1000 ease-out brightness-90 group-hover:brightness-100"
            />
          ) : (
            <div className="w-full h-full flex flex-col items-center justify-center p-6 text-center bg-[#08080a] text-[#8e8e93]">
              <Building2 className="h-8 w-8 text-white/10 mb-2" />
              <span className="text-xs font-semibold text-[#c7c7cc]">Architectural Visual Pending</span>
              <span className="text-[10px] text-[#71717a] mt-0.5 font-mono">Verified specifications active</span>
            </div>
          )}

          <div className="absolute inset-0 bg-gradient-to-t from-[#0d0d11] via-transparent to-transparent opacity-60 pointer-events-none" />

          {/* Top Pill Badges */}
          <div className="absolute top-3.5 left-3.5 flex flex-wrap items-center gap-1.5 z-10">
            <span className="px-2 py-0.5 rounded-xs text-[9px] font-mono uppercase tracking-wider bg-[#08080a]/90 backdrop-blur-md text-[#f5f5f7] border border-white/10">
              {property.completion_status}
            </span>
            <span className="px-2 py-0.5 rounded-xs text-[9px] font-mono uppercase tracking-wider bg-[#08080a]/90 backdrop-blur-md text-[#c9a962] border border-[#c9a962]/30">
              {property.property_type}
            </span>
            {isGoldenVisa && (
              <span className="px-2 py-0.5 rounded-xs text-[9px] font-mono uppercase bg-emerald-950/90 backdrop-blur-md text-emerald-400 border border-emerald-500/40 flex items-center gap-1">
                <ShieldCheck className="h-2.5 w-2.5" />
                <span>Golden Visa</span>
              </span>
            )}
          </div>

          {/* Bookmark CTA Button */}
          <button
            onClick={handleBookmark}
            title={saved ? 'Remove from saved shortlist' : 'Save to shortlist'}
            className={`absolute top-3.5 right-3.5 p-2 rounded-xs backdrop-blur-md transition-all z-10 border cursor-pointer ${
              saved
                ? 'bg-[#c9a962] text-[#08080a] border-[#c9a962]'
                : 'bg-[#08080a]/80 text-[#f5f5f7] border-white/10 hover:bg-[#c9a962] hover:text-[#08080a]'
            }`}
          >
            <Bookmark className={`h-3.5 w-3.5 ${saved ? 'fill-current' : ''}`} />
          </button>
        </div>

        {/* Editorial Body Content */}
        <div className="p-5 space-y-3">
          <div className="flex items-center justify-between gap-2">
            <div className="flex items-center gap-1.5 text-xs text-[#c9a962] font-mono">
              <MapPin className="h-3 w-3 text-[#c9a962] shrink-0" />
              <span className="truncate">{property.area_name}</span>
            </div>
            <SourceBadge provenance={property.provenance} showDetailButton={false} />
          </div>

          <Link href={`/properties/${property.id}`} className="block group-hover:text-[#c9a962] transition-colors">
            <h3 className="text-base sm:text-lg font-light text-[#f5f5f7] line-clamp-1 leading-snug">
              {property.editorial_display_name || property.title}
            </h3>
          </Link>

          <p className="text-[11px] text-[#71717a] font-mono uppercase tracking-wider truncate">
            Developer: <span className="text-[#a1a1aa]">{property.developer_name}</span>
          </p>

          {/* Key Metric Specs */}
          <div className="grid grid-cols-3 gap-2 py-2.5 border-y border-white/10 text-xs text-[#a1a1aa] items-center font-mono">
            <div className="flex items-center gap-1.5 truncate">
              <Bed className="h-3 w-3 text-[#71717a] shrink-0" />
              <span className="truncate">{property.bedrooms} Beds</span>
            </div>
            <div className="flex items-center gap-1.5 truncate">
              <Bath className="h-3 w-3 text-[#71717a] shrink-0" />
              <span className="truncate">{property.bathrooms} Baths</span>
            </div>
            <div className="flex items-center gap-1.5 truncate">
              <Maximize2 className="h-3 w-3 text-[#71717a] shrink-0" />
              <span className="tabular-nums truncate">
                {property.internal_area_sqft.toLocaleString()} sqft
              </span>
            </div>
          </div>

          {/* Price & Valuation */}
          <div className="pt-0.5 flex items-baseline justify-between font-mono">
            <div>
              <span className="text-[9px] uppercase text-[#71717a] tracking-wider block">
                Asking Price
              </span>
              <span className="text-lg font-light text-[#f5f5f7] tabular-nums">
                {formatCurrency(property.asking_price)}
              </span>
            </div>
            <div className="text-right">
              <span className="text-[9px] text-[#c9a962] uppercase tracking-wider block font-semibold">
                STATUTORY DLD
              </span>
              <span className="text-xs text-[#8e8e93] tabular-nums">
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
          className="w-full py-2.5 px-4 rounded-xs bg-[#181820] hover:bg-[#c9a962] text-[#f5f5f7] hover:text-[#08080a] text-xs font-mono uppercase tracking-[0.14em] font-semibold text-center transition-all flex items-center justify-center gap-1.5 border border-white/10 hover:border-[#c9a962]"
        >
          <span>Inspect Dossier</span>
          <ArrowUpRight className="h-3.5 w-3.5" />
        </Link>
      </div>
    </article>
  )
}
