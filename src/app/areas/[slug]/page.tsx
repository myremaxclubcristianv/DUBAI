'use client'

import * as React from 'react'
import { useParams } from 'next/navigation'
import Link from 'next/link'
import Image from 'next/image'
import { getAreaBySlug, DUBAI_AREAS } from '@/lib/data/areas'
import { VERIFIED_PROPERTIES } from '@/lib/data/properties'
import { SourceBadge } from '@/components/ui/source-badge'
import { ArrowLeft, ArrowRight } from 'lucide-react'

export default function AreaDetailPage() {
  const params = useParams()
  const slug = params?.slug as string
  const area = getAreaBySlug(slug) || DUBAI_AREAS[0]

  const matchingProperties = VERIFIED_PROPERTIES.filter(
    (p) => p.area_id === area.id || p.area_name.toLowerCase().includes(area.name.toLowerCase())
  )

  return (
    <div className="bg-[#000000] text-white min-h-screen pb-28 selection:bg-accent/30 selection:text-white">
      {/* 1. TOP BREADCRUMB */}
      <div className="border-b border-white/10 bg-[#0c0c0e] py-3.5">
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            href="/areas"
            className="inline-flex items-center gap-2 text-xs font-semibold text-zinc-400 hover:text-white transition-colors"
          >
            <ArrowLeft className="h-4 w-4" />
            <span>Back to Freehold Atlas</span>
          </Link>
        </div>
      </div>

      <main className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 space-y-12">
        {/* 2. HERO IDENTITY BANNER */}
        <div className="relative aspect-[21/9] min-h-[320px] md:min-h-[460px] rounded-3xl overflow-hidden border border-white/10 bg-[#0c0c0e]">
          <Image
            src={area.image || 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=1600&q=80'}
            alt={area.name}
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-black/20 pointer-events-none" />

          <div className="absolute top-6 left-6 flex items-center gap-2 z-10">
            <span className="px-3.5 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider bg-black/70 backdrop-blur-md text-white border border-white/15">
              {area.sector} SECTOR
            </span>
            <span className="px-3.5 py-1.5 rounded-full text-xs font-mono font-semibold uppercase tracking-wider bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 backdrop-blur-md">
              {area.freehold_status}
            </span>
          </div>

          <div className="absolute bottom-6 left-6 right-6 text-white space-y-2 z-10">
            <div className="flex items-center gap-2 text-xs text-zinc-300 font-mono">
              <span>Master Developer: {area.master_developer}</span>
              {area.arabic_name && (
                <>
                  <span>•</span>
                  <span>{area.arabic_name}</span>
                </>
              )}
            </div>
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white uppercase">
              {area.name}
            </h1>
          </div>
        </div>

        {/* 3. COMMUNITY PROFILE & GEODETIC METRICS */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          <div className="lg:col-span-8 p-6 sm:p-8 rounded-3xl border border-white/10 bg-[#0c0c0e] space-y-6">
            <div className="space-y-3">
              <span className="text-[10px] font-mono font-semibold text-accent uppercase tracking-widest">
                COMMUNITY DOSSIER
              </span>
              <h2 className="text-2xl font-bold text-white tracking-tight">Master Plan & Overview</h2>
              <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed font-normal">
                {area.description}
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-white/[0.03] border border-white/10 text-xs space-y-2">
              <div className="font-semibold text-white">Investment Profile</div>
              <p className="text-zinc-400 leading-relaxed">{area.investment_profile}</p>
            </div>

            {/* Lifestyle Tags */}
            {area.lifestyle_tags && area.lifestyle_tags.length > 0 && (
              <div className="space-y-3 pt-4 border-t border-white/10">
                <span className="text-xs font-semibold uppercase tracking-wider text-zinc-400 block font-mono">
                  Lifestyle & Infrastructure
                </span>
                <div className="flex flex-wrap gap-2">
                  {area.lifestyle_tags.map((tag, idx) => (
                    <span
                      key={idx}
                      className="px-3.5 py-1.5 rounded-full bg-white/[0.04] border border-white/10 text-xs font-semibold text-zinc-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>

          <div className="lg:col-span-4 p-6 sm:p-8 rounded-3xl border border-white/10 bg-[#0c0c0e] space-y-5">
            <h3 className="text-xs font-semibold text-white uppercase font-mono tracking-wider">
              Statutory Geodesy & Transit
            </h3>
            <div className="space-y-3 text-xs">
              <div className="flex justify-between py-2 border-b border-white/10">
                <span className="text-zinc-400">Centroid Latitude</span>
                <span className="font-mono font-semibold text-white">{area.coordinates.lat.toFixed(4)}° N</span>
              </div>
              <div className="flex justify-between py-2 border-b border-white/10">
                <span className="text-zinc-400">Centroid Longitude</span>
                <span className="font-mono font-semibold text-white">{area.coordinates.lng.toFixed(4)}° E</span>
              </div>
              <div className="flex justify-between py-2 border-b border-white/10">
                <span className="text-zinc-400">DXB International</span>
                <span className="font-mono font-semibold text-white">{area.transit.airport_mins_dxb} mins</span>
              </div>
              <div className="flex justify-between py-2 border-b border-white/10">
                <span className="text-zinc-400">DWC Al Maktoum</span>
                <span className="font-mono font-semibold text-white">{area.transit.airport_mins_dwc} mins</span>
              </div>
              <div className="pt-2">
                <SourceBadge provenance={area.provenance} />
              </div>
            </div>
          </div>
        </div>

        {/* 4. VERIFIED PROPERTIES IN THIS COMMUNITY */}
        <div className="space-y-6">
          <div className="flex items-center justify-between border-b border-white/10 pb-4">
            <div>
              <span className="text-[10px] font-mono font-semibold text-accent uppercase tracking-widest block">
                AUDITED INVENTORY
              </span>
              <h3 className="text-2xl font-bold text-white mt-1">
                Properties in {area.name} ({matchingProperties.length})
              </h3>
            </div>
            <Link
              href="/properties"
              className="text-xs font-semibold text-zinc-400 hover:text-white flex items-center gap-1.5 uppercase tracking-wider transition-colors"
            >
              <span>View All Properties</span>
              <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          </div>

          {matchingProperties.length === 0 ? (
            <div className="p-10 rounded-3xl border border-white/10 bg-[#0c0c0e] text-center space-y-3">
              <p className="text-xs text-zinc-400">
                No active properties listed in {area.name} in current audited registry.
              </p>
              <Link
                href="/private-client"
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-accent hover:underline"
              >
                <span>Request Off-Market Allocation in {area.name} →</span>
              </Link>
            </div>
          ) : (
            <div className="space-y-4">
              {matchingProperties.map((prop) => (
                <div
                  key={prop.id}
                  className="p-5 sm:p-6 rounded-3xl border border-white/10 bg-[#0c0c0e] hover:border-accent/40 transition-all flex flex-col md:flex-row items-start md:items-center justify-between gap-6 group"
                >
                  <div className="flex items-center gap-4 sm:gap-5">
                    <div className="relative h-20 w-28 rounded-2xl overflow-hidden bg-white/[0.02] shrink-0 border border-white/10">
                      <Image
                        src={prop.images[0] || 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=400&q=80'}
                        alt={prop.title}
                        fill
                        sizes="120px"
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                    <div>
                      <div className="text-[10px] font-mono text-zinc-400">{prop.developer_name} • {prop.property_type}</div>
                      <h4 className="text-base font-bold text-white group-hover:text-accent transition-colors">
                        {prop.title}
                      </h4>
                      <div className="text-xs text-zinc-400 mt-0.5">
                        {prop.bedrooms} Bed • {prop.bathrooms} Bath • {prop.internal_area_sqft.toLocaleString()} sqft
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center gap-5 w-full md:w-auto justify-between md:justify-end pt-4 md:pt-0 border-t md:border-t-0 border-white/10">
                    <div className="text-left md:text-right">
                      <div className="text-[10px] font-mono text-zinc-400 uppercase">Asking Price</div>
                      <div className="text-base font-bold text-white tabular-nums">
                        AED {prop.asking_price?.toLocaleString()}
                      </div>
                    </div>
                    <Link
                      href={`/properties/${prop.id}`}
                      className="px-5 py-2.5 rounded-xl bg-white text-black hover:bg-zinc-200 text-xs font-semibold transition-all flex items-center gap-1.5 shadow-md"
                    >
                      <span>Open Dossier</span>
                      <ArrowRight className="h-3.5 w-3.5 text-accent" />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </main>
    </div>
  )
}
