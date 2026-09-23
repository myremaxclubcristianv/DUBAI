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
    <div className="bg-white text-text-primary min-h-screen pb-24">
      {/* 1. TOP BREADCRUMB */}
      <div className="border-b border-border bg-surface-subtle py-3.5">
        <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            href="/areas"
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-text-secondary hover:text-text-primary transition-colors"
          >
            <ArrowLeft className="h-4 w-4" />
            <span>Back to Freehold Atlas</span>
          </Link>
        </div>
      </div>

      <main className="w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 space-y-12">
        {/* 2. HERO IDENTITY BANNER */}
        <div className="relative aspect-[21/9] min-h-[320px] md:min-h-[420px] rounded-3xl overflow-hidden border border-border bg-surface-elevated">
          <Image
            src={area.image || 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=1600&q=80'}
            alt={area.name}
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/35 to-transparent pointer-events-none" />

          <div className="absolute top-6 left-6 flex items-center gap-2 z-10">
            <span className="px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-white/95 backdrop-blur-md text-text-primary">
              {area.sector} SECTOR
            </span>
            <span className="px-3 py-1 rounded-full text-xs font-mono font-bold uppercase tracking-wider bg-emerald-800 text-white">
              {area.freehold_status}
            </span>
          </div>

          <div className="absolute bottom-6 left-6 right-6 text-white space-y-2 z-10">
            <div className="flex items-center gap-2 text-xs text-white/80 font-mono">
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
          <div className="lg:col-span-8 p-6 sm:p-8 rounded-3xl border border-border bg-white space-y-6">
            <div className="space-y-3">
              <span className="text-[10px] font-mono font-bold text-accent uppercase tracking-widest">
                COMMUNITY DOSSIER
              </span>
              <h2 className="text-2xl font-black text-text-primary">Master Plan & Overview</h2>
              <p className="text-sm text-text-secondary leading-relaxed font-normal">
                {area.description}
              </p>
            </div>

            <div className="p-4 rounded-xl bg-surface-subtle border border-border text-xs space-y-1.5">
              <div className="font-bold text-text-primary">Investment Profile</div>
              <p className="text-text-secondary leading-relaxed">{area.investment_profile}</p>
            </div>

            {/* Lifestyle Tags */}
            {area.lifestyle_tags && area.lifestyle_tags.length > 0 && (
              <div className="space-y-2 pt-2 border-t border-border-subtle">
                <span className="text-xs font-bold uppercase tracking-wider text-text-muted block font-mono">
                  Lifestyle & Infrastructure
                </span>
                <div className="flex flex-wrap gap-2">
                  {area.lifestyle_tags.map((tag, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 rounded-lg bg-surface border border-border text-xs font-semibold text-text-secondary"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>

          <div className="lg:col-span-4 p-6 sm:p-8 rounded-3xl border border-border bg-surface space-y-4">
            <h3 className="text-xs font-bold text-text-primary uppercase font-mono tracking-wider">
              Statutory Geodesy & Transit
            </h3>
            <div className="space-y-3 text-xs">
              <div className="flex justify-between py-1.5 border-b border-border-subtle">
                <span className="text-text-muted">Centroid Latitude</span>
                <span className="font-mono font-bold text-text-primary">{area.coordinates.lat.toFixed(4)}° N</span>
              </div>
              <div className="flex justify-between py-1.5 border-b border-border-subtle">
                <span className="text-text-muted">Centroid Longitude</span>
                <span className="font-mono font-bold text-text-primary">{area.coordinates.lng.toFixed(4)}° E</span>
              </div>
              <div className="flex justify-between py-1.5 border-b border-border-subtle">
                <span className="text-text-muted">DXB International</span>
                <span className="font-mono font-bold text-text-primary">{area.transit.airport_mins_dxb} mins</span>
              </div>
              <div className="flex justify-between py-1.5 border-b border-border-subtle">
                <span className="text-text-muted">DWC Al Maktoum</span>
                <span className="font-mono font-bold text-text-primary">{area.transit.airport_mins_dwc} mins</span>
              </div>
              <div className="pt-2">
                <SourceBadge provenance={area.provenance} />
              </div>
            </div>
          </div>
        </div>

        {/* 4. VERIFIED PROPERTIES IN THIS COMMUNITY */}
        <div className="space-y-6">
          <div className="flex items-center justify-between border-b border-border pb-3">
            <div>
              <span className="text-[10px] font-mono font-bold text-accent uppercase tracking-widest block">
                AUDITED INVENTORY
              </span>
              <h3 className="text-2xl font-black text-text-primary mt-0.5">
                Properties in {area.name} ({matchingProperties.length})
              </h3>
            </div>
            <Link
              href="/properties"
              className="text-xs font-bold text-text-secondary hover:text-accent flex items-center gap-1 uppercase tracking-wider"
            >
              <span>View All Properties</span>
              <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          </div>

          {matchingProperties.length === 0 ? (
            <div className="p-8 rounded-2xl border border-border bg-surface text-center space-y-2">
              <p className="text-xs text-text-secondary">
                No active properties listed in {area.name} in current audited registry.
              </p>
              <Link
                href="/private-client"
                className="inline-flex items-center gap-1 text-xs font-bold text-accent hover:underline"
              >
                <span>Request Off-Market Allocation in {area.name} →</span>
              </Link>
            </div>
          ) : (
            <div className="space-y-3">
              {matchingProperties.map((prop) => (
                <div
                  key={prop.id}
                  className="p-5 rounded-2xl border border-border bg-white hover:border-accent hover:shadow-xs transition-all flex flex-col md:flex-row items-start md:items-center justify-between gap-4 group"
                >
                  <div className="flex items-center gap-4">
                    <div className="relative h-16 w-24 rounded-xl overflow-hidden bg-surface-elevated shrink-0">
                      <Image
                        src={prop.images[0] || 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=400&q=80'}
                        alt={prop.title}
                        fill
                        sizes="100px"
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <div className="text-[10px] font-mono text-text-muted">{prop.developer_name} • {prop.property_type}</div>
                      <h4 className="text-base font-bold text-text-primary group-hover:text-accent transition-colors">
                        {prop.title}
                      </h4>
                      <div className="text-xs text-text-secondary">
                        {prop.bedrooms} Bed • {prop.bathrooms} Bath • {prop.internal_area_sqft.toLocaleString()} sqft
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center gap-4 w-full md:w-auto justify-between md:justify-end pt-3 md:pt-0 border-t md:border-t-0 border-border-subtle">
                    <div className="text-left md:text-right">
                      <div className="text-[10px] font-mono text-text-muted uppercase">Asking Price</div>
                      <div className="text-base font-black text-text-primary tabular-nums">
                        AED {prop.asking_price?.toLocaleString()}
                      </div>
                    </div>
                    <Link
                      href={`/properties/${prop.id}`}
                      className="px-4 py-2 rounded-xl bg-text-primary text-white hover:bg-black text-xs font-bold transition-colors flex items-center gap-1.5"
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
