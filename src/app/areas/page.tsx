'use client'

import * as React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { DUBAI_AREAS } from '@/lib/data/areas'
import {
  ArrowRight,
  ArrowUpRight,
  ShieldCheck,
  Compass,
  Landmark,
} from 'lucide-react'

export default function DistrictsAtlasPage() {
  const [activeDistrictIndex, setActiveDistrictIndex] = React.useState(0)
  const activeDistrict = DUBAI_AREAS[activeDistrictIndex] || DUBAI_AREAS[0]

  return (
    <div className="flex flex-col min-h-screen bg-white text-slate-900 selection:bg-[#0284c7]/20">
      
      {/* 1. EDITORIAL ATLAS HEADER */}
      <section className="pt-16 pb-14 sm:pt-24 sm:pb-20 border-b border-slate-200 bg-gradient-to-b from-[#f0f7ff] to-white relative">
        <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-10 lg:px-16 space-y-6">
          
          <div className="flex flex-wrap items-center justify-between gap-4 font-mono text-xs">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 bg-[#0284c7]" />
              <span className="text-[10px] tracking-[0.24em] uppercase text-slate-600 font-semibold">
                GEOGRAPHIC ATLAS &bull; FREEHOLD ZONES REGULATION 3 (2006)
              </span>
            </div>
            <div className="flex items-center gap-3 text-[11px] text-slate-500">
              <span className="text-emerald-700 font-semibold flex items-center gap-1">
                <ShieldCheck className="h-3.5 w-3.5" />
                DLD Designated Freehold
              </span>
              <span>&bull;</span>
              <span>100% Foreign Title</span>
            </div>
          </div>
          
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 border-t border-slate-200/80 pt-6">
            <div className="space-y-3 max-w-2xl">
              <h1 className="text-4xl sm:text-6xl lg:text-7xl font-light tracking-[-0.035em] text-slate-900 font-serif">
                DUBAI ATLAS
              </h1>
              <p className="text-base sm:text-lg text-slate-600 font-light leading-relaxed">
                Cartographic directory and zoning intelligence across the designated foreign freehold territories established under Regulation No. 3 of 2006.
              </p>
            </div>

            <div className="p-4 bg-white border border-slate-200 font-mono text-xs text-slate-600 shadow-2xs space-y-1">
              <div className="flex items-center gap-2 text-slate-900 font-semibold">
                <Compass className="h-4 w-4 text-[#0284c7]" />
                <span>{DUBAI_AREAS.length} Master Freehold Zones</span>
              </div>
              <div className="text-[10px] text-slate-400">
                Official Dubai Land Department Gazetted Sectors
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* 2. ATLAS SPLIT: Sticky Visual Dossier on Left + Architectural Directory on Right */}
      <main className="w-full max-w-[1440px] mx-auto px-4 sm:px-10 lg:px-16 py-14 sm:py-20 flex-1">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          
          {/* Left 5 Columns: Active District Visual & Cartographic Dossier (Sticky) */}
          <div className="lg:col-span-5 space-y-6 lg:sticky lg:top-28">
            <div className="border border-slate-200 bg-white overflow-hidden shadow-lg">
              
              <div className="relative aspect-[4/3] w-full overflow-hidden bg-slate-100">
                <Image
                  src={
                    activeDistrict.image ||
                    'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=1200&q=80'
                  }
                  alt={activeDistrict.name}
                  fill
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  className="object-cover transition-all duration-700"
                />
                <div className="absolute top-4 left-4 flex gap-2">
                  <span className="px-2.5 py-1 text-[10px] font-mono font-semibold uppercase bg-white/95 backdrop-blur-xs text-emerald-800 border border-emerald-200">
                    DLD REG. 3/2006
                  </span>
                  <span className="px-2.5 py-1 text-[10px] font-mono font-semibold uppercase bg-slate-950/80 text-white">
                    SECTOR {activeDistrict.sector || '01'}
                  </span>
                </div>
                <div className="absolute bottom-3 right-3 px-2 py-0.5 bg-slate-950/80 font-mono text-[9px] text-slate-300">
                  GEOGRAPHIC DOSSIER
                </div>
              </div>

              <div className="p-6 sm:p-8 space-y-4">
                <div className="space-y-1">
                  <span className="text-[10px] font-mono uppercase tracking-widest text-[#0284c7] font-semibold block">
                    {activeDistrict.sector} &bull; FREEHOLD ZONE
                  </span>
                  <h2 className="text-2xl sm:text-3xl font-light text-slate-900 font-serif">
                    {activeDistrict.name}
                  </h2>
                </div>

                <p className="text-sm text-slate-600 font-light leading-relaxed">
                  {activeDistrict.description}
                </p>

                <div className="pt-3 border-t border-slate-100 grid grid-cols-2 gap-4 font-mono text-xs text-slate-600">
                  <div>
                    <span className="text-slate-400 block uppercase text-[10px]">Master Developer</span>
                    <span className="text-slate-900 font-semibold">{activeDistrict.master_developer || 'Master Planned'}</span>
                  </div>
                  <div>
                    <span className="text-slate-400 block uppercase text-[10px]">Tenure Status</span>
                    <span className="text-emerald-700 font-semibold">100% Freehold</span>
                  </div>
                </div>

                <div className="pt-3">
                  <Link
                    href={`/districts/${activeDistrict.slug}`}
                    className="w-full py-3 bg-[#0284c7] hover:bg-[#0369a1] text-white text-xs font-mono uppercase tracking-[0.14em] font-semibold transition-colors flex items-center justify-center gap-2 shadow-2xs"
                  >
                    <span>OPEN {activeDistrict.name} DOSSIER</span>
                    <ArrowRight className="h-3.5 w-3.5" />
                  </Link>
                </div>
              </div>

            </div>
          </div>

          {/* Right 7 Columns: Architectural District Directory Rows */}
          <div className="lg:col-span-7 divide-y divide-slate-200 border-t border-b border-slate-200 bg-white border shadow-2xs">
            {DUBAI_AREAS.map((district, idx) => (
              <div
                key={district.slug || district.id}
                onMouseEnter={() => setActiveDistrictIndex(idx)}
                className={`group flex items-center justify-between py-5 px-4 sm:px-6 transition-all cursor-pointer ${
                  activeDistrictIndex === idx ? 'bg-sky-50/70 border-l-2 border-l-[#0284c7]' : 'hover:bg-slate-50'
                }`}
              >
                <div className="space-y-1">
                  <div className="flex items-center gap-4">
                    <span className="text-xs font-mono text-slate-400 w-6 font-semibold">
                      {String(idx + 1).padStart(2, '0')}
                    </span>
                    <Link
                      href={`/districts/${district.slug}`}
                      className="text-lg sm:text-xl font-light text-slate-900 group-hover:text-[#0284c7] transition-colors font-serif"
                    >
                      {district.name}
                    </Link>
                  </div>
                  <span className="text-xs font-mono text-slate-500 pl-10 block">
                    {district.sector} &bull; Master: {district.master_developer || 'Verified Freehold'}
                  </span>
                </div>

                <div className="flex items-center gap-4">
                  <Link
                    href={`/districts/${district.slug}`}
                    className="p-2 border border-slate-200 group-hover:border-[#0284c7] group-hover:bg-[#0284c7]/10 transition-all"
                  >
                    <ArrowUpRight className="h-4 w-4 text-slate-400 group-hover:text-[#0284c7]" />
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
