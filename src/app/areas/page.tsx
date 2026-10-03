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
    <div className="flex flex-col min-h-screen bg-[#ffffff] text-[#111111]">
      
      {/* 1. EDITORIAL HEADER */}
      <section className="pt-20 pb-16 sm:pt-28 sm:pb-24 border-b border-[#e5e5ea] bg-[#fafaf8]">
        <div className="w-full max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-16 space-y-6">
          <Eyebrow>GEOGRAPHIC ATLAS &bull; FREEHOLD ZONES</Eyebrow>
          
          <div className="max-w-3xl space-y-4">
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-light tracking-[-0.035em] text-[#111111]">
              DUBAI ATLAS
            </h1>
            <p className="text-lg sm:text-xl text-[#6b6b6b] font-light leading-relaxed">
              Cartographic directory and zoning intelligence across the designated foreign freehold territories established under Regulation No. 3 of 2006.
            </p>
          </div>
        </div>
      </section>

      {/* 2. ATLAS SPLIT: Map/Visual on Left + Luxury Directory on Right */}
      <main className="w-full max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-16 py-16 sm:py-24 flex-1">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left 5 cols: Active District Visual & Cartographic Dossier (Sticky) */}
          <div className="lg:col-span-5 space-y-6 lg:sticky lg:top-28">
            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl bg-[#f5f5f3] border border-[#e5e5ea]">
              <Image
                src={activeDistrict.image || 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=1200&q=80'}
                alt={activeDistrict.name}
                fill
                sizes="(max-width: 1024px) 100vw, 40vw"
                className="object-cover transition-all duration-700"
              />
              <div className="absolute top-4 left-4">
                <SourceBadge sourceClass="OFFICIAL GOVERNMENT" sourceName="DLD Reg. 3/2006" />
              </div>
            </div>

            <div className="space-y-4">
              <div className="flex items-center justify-between text-xs font-mono text-[#8e8e93]">
                <span>SECTOR: {activeDistrict.sector}</span>
                <span>FREEHOLD ZONE</span>
              </div>

              <h2 className="text-3xl font-light text-[#111111]">
                {activeDistrict.name}
              </h2>

              <p className="text-sm text-[#484848] font-light leading-relaxed">
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
          <div className="lg:col-span-7 divide-y divide-[#e5e5ea] border-t border-b border-[#e5e5ea]">
            {DUBAI_AREAS.map((district, idx) => (
              <div
                key={district.slug || district.id}
                onMouseEnter={() => setActiveDistrictIndex(idx)}
                className={`group flex items-center justify-between py-6 px-4 sm:px-6 transition-all cursor-pointer ${
                  activeDistrictIndex === idx ? 'bg-[#fafaf8]' : 'hover:bg-[#fafaf8]/50'
                }`}
              >
                <div className="space-y-1">
                  <div className="flex items-center gap-4">
                    <span className="text-xs font-mono text-[#8e8e93] w-6">
                      {String(idx + 1).padStart(2, '0')}
                    </span>
                    <Link
                      href={`/districts/${district.slug}`}
                      className="text-xl sm:text-2xl font-light text-[#111111] group-hover:text-[#9f8144] transition-colors"
                    >
                      {district.name}
                    </Link>
                  </div>
                  <span className="text-xs font-mono text-[#6b6b6b] pl-10 block">
                    {district.sector} &bull; Master: {district.master_developer || 'Verified'}
                  </span>
                </div>

                <div className="flex items-center gap-4">
                  <Link
                    href={`/districts/${district.slug}`}
                    className="p-2.5 rounded-full border border-[#e5e5ea] group-hover:border-[#111111] group-hover:bg-[#ffffff] transition-all"
                  >
                    <ArrowUpRight className="h-4 w-4 text-[#8e8e93] group-hover:text-[#111111]" />
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
