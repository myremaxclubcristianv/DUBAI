'use client'

import * as React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { DUBAI_AREAS } from '@/lib/data/areas'
import { ProvenanceTag } from '@/components/layout/layout-primitives'
import {
  Compass,
  Plane,
} from 'lucide-react'

export default function DistrictsPage() {
  const [selectedSector, setSelectedSector] = React.useState('ALL')

  const sectors = React.useMemo(() => {
    return Array.from(new Set(DUBAI_AREAS.map((a) => a.sector))).sort()
  }, [])

  const filteredDistricts = selectedSector === 'ALL'
    ? DUBAI_AREAS
    : DUBAI_AREAS.filter((a) => a.sector === selectedSector)

  return (
    <div className="bg-[#ffffff] text-[#111111] min-h-screen pb-24">
      
      {/* 1. EDITORIAL HEADER */}
      <section className="pt-12 pb-12 sm:pt-16 sm:pb-16 border-b border-[#e5e5ea] bg-[#fafaf8]">
        <div className="w-full max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          <div className="flex items-center justify-between">
            <span className="text-[10px] font-mono font-bold uppercase tracking-[0.2em] text-[#9f8144]">
              GEOGRAPHIC ATLAS &bull; FREEHOLD ZONES
            </span>
            <ProvenanceTag sourceClass="OFFICIAL GOVERNMENT" sourceName="DLD Reg. No. 3/2006" />
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-[#111111]">
            Dubai Geographic &amp; Freehold Atlas
          </h1>
          
          <p className="text-sm sm:text-base text-[#484848] max-w-3xl leading-relaxed">
            Statutory registry of designated freehold investment zones granting 100% foreign title ownership in perpetuity under Regulation No. 3 of 2006.
          </p>
        </div>
      </section>

      {/* 2. SECTOR FILTER BAR */}
      <section className="sticky top-16 z-30 bg-[#ffffff] border-b border-[#e5e5ea] py-3.5 px-4 sm:px-6 lg:px-8">
        <div className="w-full max-w-[1240px] mx-auto flex items-center justify-between gap-4">
          <div className="flex items-center gap-2 overflow-x-auto">
            <button
              onClick={() => setSelectedSector('ALL')}
              className={`px-3 py-1.5 rounded text-xs font-mono font-medium transition-colors shrink-0 ${
                selectedSector === 'ALL'
                  ? 'bg-[#111111] text-[#fafaf8]'
                  : 'border border-[#e5e5ea] text-[#6b6b6b] hover:text-[#111111]'
              }`}
            >
              All Sectors ({DUBAI_AREAS.length})
            </button>
            {sectors.map((sec) => (
              <button
                key={sec}
                onClick={() => setSelectedSector(sec)}
                className={`px-3 py-1.5 rounded text-xs font-mono font-medium transition-colors shrink-0 ${
                  selectedSector === sec
                    ? 'bg-[#111111] text-[#fafaf8]'
                    : 'border border-[#e5e5ea] text-[#6b6b6b] hover:text-[#111111]'
                }`}
              >
                {sec}
              </button>
            ))}
          </div>

          <Link
            href="/map"
            className="hidden sm:inline-flex items-center gap-1.5 text-xs font-mono text-[#111111] hover:text-[#9f8144] shrink-0"
          >
            <Compass className="h-3.5 w-3.5" />
            <span>Interactive Map &rarr;</span>
          </Link>
        </div>
      </section>

      {/* 3. DISTRICTS DIRECTORY GRID */}
      <main className="w-full max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-10">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredDistricts.map((district) => (
            <div
              key={district.id}
              className="bg-[#ffffff] rounded border border-[#e5e5ea] overflow-hidden flex flex-col justify-between"
            >
              <div>
                <div className="relative aspect-[16/10] w-full bg-[#f5f5f3] overflow-hidden border-b border-[#e5e5ea]">
                  <Image
                    src={district.image || 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=800&q=80'}
                    alt={district.name}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute top-2.5 left-2.5 px-2.5 py-0.5 rounded bg-[#ffffff]/90 text-[10px] font-mono text-[#111111] border border-[#e5e5ea]">
                    {district.sector} &bull; {district.freehold_status}
                  </div>
                </div>

                <div className="p-5 space-y-2.5">
                  <div className="text-[10px] font-mono text-[#6b6b6b]">
                    Master Developer: {district.master_developer}
                  </div>
                  <h3 className="text-xl font-semibold text-[#111111]">
                    {district.name}
                  </h3>
                  <p className="text-xs text-[#484848] line-clamp-3 leading-relaxed">
                    {district.description}
                  </p>

                  {district.lifestyle_tags && (
                    <div className="flex flex-wrap gap-1.5 pt-2">
                      {district.lifestyle_tags.slice(0, 3).map((tag, idx) => (
                        <span
                          key={idx}
                          className="px-2 py-0.5 rounded bg-[#fafaf8] border border-[#e5e5ea] text-[10px] font-mono text-[#6b6b6b]"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </div>

              <div className="p-5 pt-0 border-t border-[#f5f5f3] mt-3 flex items-center justify-between text-xs font-mono text-[#6b6b6b]">
                <div className="flex items-center gap-1.5">
                  <Plane className="h-3 w-3 text-[#9f8144]" />
                  <span>DXB: {district.transit.airport_mins_dxb}m</span>
                </div>
                <Link
                  href={`/areas/${district.slug}`}
                  className="text-[#111111] hover:text-[#9f8144] font-semibold inline-flex items-center gap-1"
                >
                  <span>District Dossier &rarr;</span>
                </Link>
              </div>
            </div>
          ))}
        </div>

      </main>

    </div>
  )
}
