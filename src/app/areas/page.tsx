'use client'

import * as React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { DUBAI_AREAS } from '@/lib/data/areas'
import {
  Eyebrow,
  SourceBadge,
  PrimaryLink,
} from '@/components/layout/layout-primitives'
import { ArrowUpRight } from 'lucide-react'

export default function DistrictsAtlasPage() {
  const [activeDistrictIndex, setActiveDistrictIndex] = React.useState(0)
  const activeDistrict = DUBAI_AREAS[activeDistrictIndex] || DUBAI_AREAS[0]

  return (
    <div className="flex flex-col min-h-screen bg-[#08080a] text-[#f5f5f7]">
      
      {/* 1. EDITORIAL HEADER */}
      <section className="pt-16 pb-14 sm:pt-24 sm:pb-20 border-b border-white/10 bg-[#0d0d11]">
        <div className="w-full max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-16 space-y-6">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#c9a962]" />
            <Eyebrow>GEOGRAPHIC ATLAS &bull; FREEHOLD ZONES REGULATION 3 (2006)</Eyebrow>
          </div>
          
          <div className="max-w-3xl space-y-4">
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-light tracking-[-0.035em] text-[#f5f5f7]">
              DUBAI ATLAS
            </h1>
            <p className="text-base sm:text-lg text-[#a1a1aa] font-light leading-relaxed">
              Cartographic directory and zoning intelligence across the designated foreign freehold territories established under Regulation No. 3 of 2006.
            </p>
          </div>
        </div>
      </section>

      {/* 2. ATLAS SPLIT: Visual Dossier on Left + Luxury Directory on Right */}
      <main className="w-full max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-16 py-14 sm:py-20 flex-1">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          
          {/* Left 5 cols: Active District Visual & Cartographic Dossier (Sticky) */}
          <div className="lg:col-span-5 space-y-6 lg:sticky lg:top-28">
            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-sm bg-[#111116] border border-white/10 shadow-[0_12px_40px_rgba(0,0,0,0.8)]">
              <Image
                src={activeDistrict.image || 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=1200&q=80'}
                alt={activeDistrict.name}
                fill
                sizes="(max-width: 1024px) 100vw, 40vw"
                className="object-cover transition-all duration-700 brightness-90"
              />
              <div className="absolute top-4 left-4">
                <SourceBadge sourceClass="OFFICIAL GOVERNMENT" sourceName="DLD Reg. 3/2006" />
              </div>
            </div>

            <div className="space-y-4 p-6 rounded-sm bg-[#111116] border border-white/10">
              <div className="flex items-center justify-between text-xs font-mono text-[#8e8e93]">
                <span className="text-[#c9a962]">SECTOR: {activeDistrict.sector}</span>
                <span>FREEHOLD ZONE</span>
              </div>

              <h2 className="text-2xl sm:text-3xl font-light text-[#f5f5f7]">
                {activeDistrict.name}
              </h2>

              <p className="text-sm text-[#a1a1aa] font-light leading-relaxed">
                {activeDistrict.description}
              </p>

              <div className="pt-2">
                <PrimaryLink href={`/districts/${activeDistrict.slug}`}>
                  Open {activeDistrict.name} Dossier
                </PrimaryLink>
              </div>
            </div>
          </div>

          {/* Right 7 cols: Luxury District Directory Rows */}
          <div className="lg:col-span-7 divide-y divide-white/10 border-t border-b border-white/10">
            {DUBAI_AREAS.map((district, idx) => (
              <div
                key={district.slug || district.id}
                onMouseEnter={() => setActiveDistrictIndex(idx)}
                className={`group flex items-center justify-between py-5 px-4 sm:px-6 transition-all cursor-pointer rounded-xs ${
                  activeDistrictIndex === idx ? 'bg-[#181820]' : 'hover:bg-white/[0.02]'
                }`}
              >
                <div className="space-y-1">
                  <div className="flex items-center gap-4">
                    <span className="text-xs font-mono text-[#71717a] w-6">
                      {String(idx + 1).padStart(2, '0')}
                    </span>
                    <Link
                      href={`/districts/${district.slug}`}
                      className="text-lg sm:text-xl font-light text-[#f5f5f7] group-hover:text-[#c9a962] transition-colors"
                    >
                      {district.name}
                    </Link>
                  </div>
                  <span className="text-xs font-mono text-[#8e8e93] pl-10 block">
                    {district.sector} &bull; Master: {district.master_developer || 'Verified'}
                  </span>
                </div>

                <div className="flex items-center gap-4">
                  <Link
                    href={`/districts/${district.slug}`}
                    className="p-2 rounded-xs border border-white/10 group-hover:border-[#c9a962] group-hover:bg-[#c9a962]/10 transition-all"
                  >
                    <ArrowUpRight className="h-4 w-4 text-[#71717a] group-hover:text-[#c9a962]" />
                  </Link>
                </div>
              </div>
            ))}
          </div>

        </div>
      </main>

    </div>
  )
}
