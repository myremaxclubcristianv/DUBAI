'use client'

import * as React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { VERIFIED_LIFESTYLE } from '@/lib/data/lifestyle'
import { SourceBadge } from '@/components/ui/source-badge'
import { PageIntro } from '@/components/layout/layout-primitives'
import {
  ArrowRight,
  Plane,
  Anchor,
  Utensils,
  Building,
  Compass,
  ShieldCheck,
} from 'lucide-react'

const LIFESTYLE_SECTORS = [
  {
    id: 'aviation',
    title: 'Private Aviation & FBO',
    subtitle: 'VIP Terminals & Jet Charters',
    description: 'VIP executive FBO terminals at Al Maktoum International (DWC), bespoke private jet flight manifests, and scenic helicopter transfers.',
    image: 'https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?auto=format&fit=crop&w=1200&q=80',
    count: VERIFIED_LIFESTYLE.filter((l) => l.category === 'aviation').length,
    icon: Plane,
  },
  {
    id: 'yachts',
    title: 'Superyachts & Marine',
    subtitle: 'Private Yacht Charters & Berths',
    description: 'Licensed luxury motor yacht and superyacht charters departing Dubai Marina Yacht Club and Dubai Harbour.',
    image: 'https://images.unsplash.com/photo-1567899378494-47b22a2ae96a?auto=format&fit=crop&w=1200&q=80',
    count: VERIFIED_LIFESTYLE.filter((l) => l.category === 'yachts').length,
    icon: Anchor,
  },
  {
    id: 'dining',
    title: 'Michelin Gastronomy',
    subtitle: 'Fine Dining & Culinary Theaters',
    description: 'Verified Michelin-starred tasting menus and multi-course culinary experiences certified by the Michelin Guide Dubai.',
    image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1200&q=80',
    count: VERIFIED_LIFESTYLE.filter((l) => l.category === 'dining').length,
    icon: Utensils,
  },
  {
    id: 'hotels',
    title: 'Ultra-Luxury Hospitality',
    subtitle: 'Five-Star Palaces & Suites',
    description: 'Iconic palatial hotels and residences including Dorchester Collection, Bulgari Resort Dubai, and Atlantis The Royal.',
    image: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1200&q=80',
    count: VERIFIED_LIFESTYLE.filter((l) => l.category === 'hotels').length,
    icon: Building,
  },
  {
    id: 'safari',
    title: 'Conservation Desert Safaris',
    subtitle: 'Protected Sanctuary Expeditions',
    description: 'Eco-luxury desert safaris operating inside the protected Dubai Desert Conservation Reserve (DDCR) with vintage Land Rovers.',
    image: 'https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?auto=format&fit=crop&w=1200&q=80',
    count: VERIFIED_LIFESTYLE.filter((l) => l.category === 'safari').length,
    icon: Compass,
  },
  {
    id: 'cars',
    title: 'Exotic Supercars & Chauffeur',
    subtitle: 'Bespoke Fleet & Executive Mobility',
    description: 'Licensed luxury exotic supercar fleet rentals and dedicated private executive chauffeur transportation services.',
    image: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1200&q=80',
    count: 2,
    icon: Compass,
  },
  {
    id: 'concierge',
    title: 'Private Client Concierge',
    subtitle: 'Bespoke Access & Lifestyle Desk',
    description: 'Confidential lifestyle management, priority reservation access, private event curation, and executive relocation protocol.',
    image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1200&q=80',
    count: 1,
    icon: ShieldCheck,
  },
]

export default function LifestylePage() {
  const aviationSector = LIFESTYLE_SECTORS[0]
  const yachtSector = LIFESTYLE_SECTORS[1]
  const otherSectors = LIFESTYLE_SECTORS.slice(2)

  return (
    <div className="bg-black text-white min-h-screen pb-24">
      {/* 1. APPLE PRO CENTERED PAGE INTRO */}
      <PageIntro
        eyebrow="Curated Ecosystem • Licensed Protocols"
        badge={<SourceBadge status="LICENSED OPERATOR" sourceName="DET & Licensed Registry" />}
        title="LIFESTYLE PROTOCOLS"
        description="Licensed luxury directory across private aviation FBOs, superyachts, Michelin gastronomy, palatial hospitality, and desert conservation in Dubai."
      />

      <main className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 space-y-14">
        {/* 2. DUAL FEATURED KEYNOTE CARDS (AVIATION & SUPERYACHTS) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Aviation Feature */}
          <Link
            href={`/lifestyle/${aviationSector.id}`}
            className="group border border-white/10 rounded-3xl overflow-hidden bg-zinc-950/80 hover:border-gold/40 transition-all duration-300 flex flex-col justify-between shadow-2xl backdrop-blur-md"
          >
            <div>
              <div className="relative aspect-[16/10] bg-zinc-900 overflow-hidden">
                <Image
                  src={aviationSector.image}
                  alt={aviationSector.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent" />
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 rounded-full text-xs font-mono font-bold bg-black/70 backdrop-blur-md text-white border border-white/15">
                    {aviationSector.count} Verified FBOs
                  </span>
                </div>
              </div>

              <div className="p-6 sm:p-8 space-y-2">
                <span className="text-[10px] font-mono font-bold text-gold uppercase tracking-widest block">
                  01 • EXECUTIVE MOBILITY
                </span>
                <h2 className="text-2xl font-bold text-white group-hover:text-gold transition-colors">
                  {aviationSector.title}
                </h2>
                <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed">
                  {aviationSector.description}
                </p>
              </div>
            </div>

            <div className="p-6 sm:p-8 pt-0">
              <div className="w-full py-3.5 rounded-full bg-white text-black group-hover:bg-zinc-200 text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 transition-all shadow-lg">
                <span>View Aviation Directory & Tariffs</span>
                <ArrowRight className="h-3.5 w-3.5 text-black" />
              </div>
            </div>
          </Link>

          {/* Superyachts Feature */}
          <Link
            href={`/lifestyle/${yachtSector.id}`}
            className="group border border-white/10 rounded-3xl overflow-hidden bg-zinc-950/80 hover:border-gold/40 transition-all duration-300 flex flex-col justify-between shadow-2xl backdrop-blur-md"
          >
            <div>
              <div className="relative aspect-[16/10] bg-zinc-900 overflow-hidden">
                <Image
                  src={yachtSector.image}
                  alt={yachtSector.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent" />
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 rounded-full text-xs font-mono font-bold bg-black/70 backdrop-blur-md text-white border border-white/15">
                    {yachtSector.count} Verified Fleets
                  </span>
                </div>
              </div>

              <div className="p-6 sm:p-8 space-y-2">
                <span className="text-[10px] font-mono font-bold text-gold uppercase tracking-widest block">
                  02 • MARINE & BERTHS
                </span>
                <h2 className="text-2xl font-bold text-white group-hover:text-gold transition-colors">
                  {yachtSector.title}
                </h2>
                <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed">
                  {yachtSector.description}
                </p>
              </div>
            </div>

            <div className="p-6 sm:p-8 pt-0">
              <div className="w-full py-3.5 rounded-full bg-white text-black group-hover:bg-zinc-200 text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 transition-all shadow-lg">
                <span>View Superyacht Fleets & Rates</span>
                <ArrowRight className="h-3.5 w-3.5 text-black" />
              </div>
            </div>
          </Link>
        </div>

        {/* 3. ADDITIONAL 5 CURATED BENTO TILES */}
        <div className="space-y-6">
          <div className="flex items-center justify-between border-b border-white/10 pb-4">
            <span className="text-[11px] font-mono font-bold uppercase tracking-widest text-gold">
              ADDITIONAL LIFESTYLE SECTORS
            </span>
            <span className="text-xs text-zinc-500 font-mono">DET Licensed Protocols</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-6">
            {otherSectors.map((sector, idx) => {
              const spanClass = idx === 0 ? 'lg:col-span-7' : idx === 1 ? 'lg:col-span-5' : 'lg:col-span-4'
              return (
                <Link
                  key={sector.id}
                  href={`/lifestyle/${sector.id}`}
                  className={`group bg-zinc-950/80 rounded-3xl border border-white/10 overflow-hidden flex flex-col justify-between hover:border-gold/40 transition-all duration-300 backdrop-blur-md ${spanClass}`}
                >
                  <div>
                    <div className="relative aspect-[16/10] bg-zinc-900 overflow-hidden">
                      <Image
                        src={sector.image}
                        alt={sector.title}
                        fill
                        sizes="(max-width: 768px) 100vw, 33vw"
                        className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />
                      <div className="absolute top-3 left-3">
                        <span className="px-3 py-1 rounded-full text-[10px] font-mono font-bold bg-black/70 backdrop-blur-md text-white border border-white/10">
                          {sector.count} Entities
                        </span>
                      </div>
                    </div>

                    <div className="p-6 space-y-2">
                      <h3 className="text-xl font-bold text-white group-hover:text-gold transition-colors">
                        {sector.title}
                      </h3>
                      <p className="text-xs text-zinc-400 leading-relaxed line-clamp-2">
                        {sector.description}
                      </p>
                    </div>
                  </div>

                  <div className="p-6 pt-0">
                    <div className="flex items-center gap-1.5 text-xs font-bold text-gold group-hover:translate-x-1 transition-transform">
                      <span>Explore Sector & Protocols</span>
                      <ArrowRight className="h-3.5 w-3.5" />
                    </div>
                  </div>
                </Link>
              )
            })}
          </div>
        </div>
      </main>
    </div>
  )
}