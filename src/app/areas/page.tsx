'use client'

import * as React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { DUBAI_AREAS } from '@/lib/data/areas'
import { PageIntro } from '@/components/layout/layout-primitives'
import { Plane, ArrowRight, Compass } from 'lucide-react'

export default function AreasPage() {
  const [selectedSector, setSelectedSector] = React.useState('ALL')

  const filteredAreas = selectedSector === 'ALL'
    ? DUBAI_AREAS
    : DUBAI_AREAS.filter((a) => a.sector === selectedSector)

  const primaryArea = filteredAreas[0] || DUBAI_AREAS[0]
  const otherAreas = filteredAreas.slice(1)

  return (
    <div className="bg-white text-text-primary min-h-screen pb-24">
      {/* 1. EDITORIAL PAGE INTRO */}
      <PageIntro
        eyebrow="Statutory Freehold Zone Registry (Regulation No. 3/2006)"
        badge={
          <Link
            href="/map"
            className="px-4 py-2 bg-white hover:bg-surface border border-border text-xs font-bold text-text-primary rounded-xl transition-colors flex items-center gap-1.5 shadow-2xs"
          >
            <Compass className="h-3.5 w-3.5 text-accent" />
            <span>Geodetic Vector Atlas</span>
          </Link>
        }
        title="AREAS"
        description="The prime Dubai community atlas. Geographic directory of Dubai freehold communities, master developer covenants, airport transit matrices, and foreign title ownership rights."
      />

      <main className="w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 space-y-12">
        {/* 2. SECTOR FILTER PILLS */}
        <div className="flex flex-wrap items-center gap-2 p-1.5 bg-surface rounded-2xl border border-border">
          {['ALL', 'DOWNTOWN', 'WATERFRONT', 'ISLAND', 'FINANCIAL', 'GOLF_SUBURBS', 'INLAND'].map((sec) => (
            <button
              key={sec}
              onClick={() => setSelectedSector(sec)}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                selectedSector === sec
                  ? 'bg-text-primary text-white shadow-xs'
                  : 'text-text-secondary hover:text-text-primary hover:bg-surface-elevated'
              }`}
            >
              {sec === 'ALL' ? 'All Freehold Sectors' : sec.replace('_', ' ')}
            </button>
          ))}
        </div>

        {/* 3. LARGE PRIMARY COMMUNITY FEATURE */}
        {primaryArea && (
          <div className="group border border-border rounded-3xl overflow-hidden bg-white hover:border-accent transition-all duration-300 grid grid-cols-1 lg:grid-cols-12 shadow-2xs">
            <div className="lg:col-span-7 relative aspect-[16/10] bg-surface-elevated overflow-hidden">
              <Image
                src={primaryArea.image || 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=1200&q=80'}
                alt={primaryArea.name}
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 60vw"
                className="object-cover group-hover:scale-102 transition-transform duration-500"
              />
              <div className="absolute top-4 left-4 flex items-center gap-2">
                <span className="px-3 py-1 rounded-full text-xs font-bold bg-white/95 backdrop-blur-sm text-text-primary shadow-sm">
                  {primaryArea.sector}
                </span>
                <span className="px-3 py-1 rounded-full text-xs font-mono font-bold bg-emerald-800 text-white backdrop-blur-sm">
                  {primaryArea.freehold_status}
                </span>
              </div>
            </div>

            <div className="lg:col-span-5 p-6 sm:p-8 flex flex-col justify-between space-y-6">
              <div className="space-y-3">
                <div className="text-xs font-mono text-text-muted">
                  Master Developer: <strong className="text-text-primary">{primaryArea.master_developer}</strong>
                </div>
                <h2 className="text-3xl sm:text-4xl font-black text-text-primary group-hover:text-accent transition-colors leading-tight">
                  {primaryArea.name}
                </h2>
                <p className="text-xs text-text-secondary leading-relaxed line-clamp-3">
                  {primaryArea.description}
                </p>
              </div>

              <div className="space-y-4 pt-4 border-t border-border">
                <div className="p-3.5 bg-surface rounded-xl border border-border text-xs space-y-1">
                  <div className="text-[10px] text-text-muted font-mono uppercase">Investment Context</div>
                  <div className="text-text-secondary leading-snug">{primaryArea.investment_profile}</div>
                </div>

                <div className="grid grid-cols-2 gap-2 text-xs font-mono text-text-muted">
                  <div className="flex items-center gap-1.5 p-2 rounded-lg bg-surface-subtle border border-border">
                    <Plane className="h-3.5 w-3.5 text-accent" />
                    <span>DXB: {primaryArea.transit.airport_mins_dxb} mins</span>
                  </div>
                  <div className="flex items-center gap-1.5 p-2 rounded-lg bg-surface-subtle border border-border">
                    <Plane className="h-3.5 w-3.5 text-accent" />
                    <span>DWC: {primaryArea.transit.airport_mins_dwc} mins</span>
                  </div>
                </div>

                <Link
                  href={`/areas/${primaryArea.slug}`}
                  className="w-full py-3.5 rounded-xl bg-text-primary text-white hover:bg-black text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 transition-colors shadow-sm"
                >
                  <span>Explore {primaryArea.name} Dossier</span>
                  <ArrowRight className="h-4 w-4 text-accent" />
                </Link>
              </div>
            </div>
          </div>
        )}

        {/* 4. ASYMMETRIC COMMUNITY ATLAS CARDS */}
        <div className="space-y-4">
          <div className="flex items-center justify-between border-b border-border pb-3">
            <span className="text-[11px] font-mono font-bold uppercase tracking-widest text-text-muted">
              COMMUNITY DIRECTORY ({filteredAreas.length})
            </span>
            <span className="text-xs text-text-muted font-mono">Regulation No. 3 of 2006</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {otherAreas.map((area) => (
              <Link
                key={area.id}
                href={`/areas/${area.slug}`}
                className="group bg-white rounded-2xl border border-border overflow-hidden flex flex-col justify-between hover:border-accent hover:shadow-xs transition-all duration-300"
              >
                <div>
                  <div className="relative aspect-[16/10] bg-surface-elevated overflow-hidden">
                    <Image
                      src={area.image || 'https://images.unsplash.com/photo-1546412414-e1885259563a?auto=format&fit=crop&w=800&q=80'}
                      alt={area.name}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-3 left-3 flex items-center gap-1.5">
                      <span className="px-2.5 py-0.5 rounded text-[10px] font-bold bg-white/95 text-text-primary shadow-xs">
                        {area.sector}
                      </span>
                      <span className="px-2.5 py-0.5 rounded text-[10px] font-mono font-bold bg-emerald-700 text-white shadow-xs">
                        {area.freehold_status}
                      </span>
                    </div>
                  </div>

                  <div className="p-6 space-y-3">
                    <div>
                      <span className="text-[10px] font-mono text-text-muted uppercase">
                        Master Developer: {area.master_developer}
                      </span>
                      <h3 className="text-xl font-bold text-text-primary group-hover:text-accent transition-colors mt-0.5">
                        {area.name}
                      </h3>
                    </div>
                    <p className="text-xs text-text-secondary line-clamp-2 leading-relaxed">
                      {area.description}
                    </p>
                  </div>
                </div>

                <div className="p-6 pt-0 space-y-3">
                  <div className="pt-3 border-t border-border-subtle flex items-center justify-between text-xs text-text-muted font-mono">
                    <span>DXB {area.transit.airport_mins_dxb}m</span>
                    <span>•</span>
                    <span>DWC {area.transit.airport_mins_dwc}m</span>
                    <span>•</span>
                    <span>Downtown {area.transit.downtown_mins}m</span>
                  </div>

                  <div className="w-full py-2 px-3 rounded-xl border border-border bg-surface group-hover:bg-text-primary group-hover:text-white text-xs font-bold text-center transition-all flex items-center justify-center gap-1">
                    <span>View Area Dossier</span>
                    <ArrowRight className="h-3 w-3" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </main>
    </div>
  )
}
