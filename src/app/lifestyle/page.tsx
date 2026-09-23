'use client'

import * as React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { VERIFIED_LIFESTYLE } from '@/lib/data/lifestyle'
import { SourceBadge } from '@/components/ui/source-badge'
import {
  ArrowRight,
  Plane,
  Anchor,
  Utensils,
  Building,
  Compass,
  ShieldCheck
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
    <div className="bg-white text-text-primary min-h-screen pb-24">
      {/* 1. EDITORIAL HEADER */}
      <section className="pt-12 pb-10 border-b border-border bg-surface-subtle">
        <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-border text-xs font-semibold text-text-secondary shadow-2xs">
              <span className="h-2 w-2 rounded-full bg-accent animate-pulse" />
              <span>Licensed Luxury Directory & Private Client Protocols</span>
            </div>
            <SourceBadge status="LICENSED OPERATOR" sourceName="DET & Licensed Operator Registry" />
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-text-primary uppercase leading-tight">
            Lifestyle & Access.
          </h1>

          <p className="text-base sm:text-lg text-text-secondary max-w-2xl font-normal leading-relaxed">
            Curated licensed operators across private aviation, superyachts, Michelin-starred gastronomy, and ultra-luxury hospitality in Dubai.
          </p>
        </div>
      </section>

      <main className="w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 space-y-12">
        {/* 2. DUAL FEATURED MOMENTS (AVIATION & SUPERYACHTS) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Aviation Feature */}
          <Link
            href={`/lifestyle/${aviationSector.id}`}
            className="group border border-border rounded-3xl overflow-hidden bg-white hover:border-accent transition-all duration-300 flex flex-col justify-between shadow-2xs"
          >
            <div>
              <div className="relative aspect-[16/10] bg-surface-elevated overflow-hidden">
                <Image
                  src={aviationSector.image}
                  alt={aviationSector.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover group-hover:scale-102 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 rounded-full text-xs font-mono font-bold bg-white/95 text-text-primary shadow-xs">
                    {aviationSector.count} Verified FBOs
                  </span>
                </div>
              </div>

              <div className="p-6 sm:p-8 space-y-2">
                <span className="text-[10px] font-mono font-bold text-accent uppercase tracking-widest block">
                  01 • EXECUTIVE MOBILITY
                </span>
                <h2 className="text-2xl font-black text-text-primary group-hover:text-accent transition-colors">
                  {aviationSector.title}
                </h2>
                <p className="text-xs text-text-secondary leading-relaxed">
                  {aviationSector.description}
                </p>
              </div>
            </div>

            <div className="p-6 sm:p-8 pt-0">
              <div className="w-full py-3 rounded-xl bg-text-primary group-hover:bg-black text-white text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 transition-colors">
                <span>View Aviation Directory & Tariffs</span>
                <ArrowRight className="h-3.5 w-3.5 text-accent" />
              </div>
            </div>
          </Link>

          {/* Superyachts Feature */}
          <Link
            href={`/lifestyle/${yachtSector.id}`}
            className="group border border-border rounded-3xl overflow-hidden bg-white hover:border-accent transition-all duration-300 flex flex-col justify-between shadow-2xs"
          >
            <div>
              <div className="relative aspect-[16/10] bg-surface-elevated overflow-hidden">
                <Image
                  src={yachtSector.image}
                  alt={yachtSector.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover group-hover:scale-102 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 rounded-full text-xs font-mono font-bold bg-white/95 text-text-primary shadow-xs">
                    {yachtSector.count} Verified Fleets
                  </span>
                </div>
              </div>

              <div className="p-6 sm:p-8 space-y-2">
                <span className="text-[10px] font-mono font-bold text-accent uppercase tracking-widest block">
                  02 • MARINE & BERTHS
                </span>
                <h2 className="text-2xl font-black text-text-primary group-hover:text-accent transition-colors">
                  {yachtSector.title}
                </h2>
                <p className="text-xs text-text-secondary leading-relaxed">
                  {yachtSector.description}
                </p>
              </div>
            </div>

            <div className="p-6 sm:p-8 pt-0">
              <div className="w-full py-3 rounded-xl bg-text-primary group-hover:bg-black text-white text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 transition-colors">
                <span>View Superyacht Fleets & Rates</span>
                <ArrowRight className="h-3.5 w-3.5 text-accent" />
              </div>
            </div>
          </Link>
        </div>

        {/* 3. ADDITIONAL 5 CURATED SECTOR TILES */}
        <div className="space-y-4">
          <div className="flex items-center justify-between border-b border-border pb-3">
            <span className="text-[11px] font-mono font-bold uppercase tracking-widest text-text-muted">
              ADDITIONAL LIFESTYLE SECTORS
            </span>
            <span className="text-xs text-text-muted font-mono">DET Licensed Protocols</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-6">
            {otherSectors.map((sector, idx) => {
              const spanClass = idx === 0 ? 'lg:col-span-7' : idx === 1 ? 'lg:col-span-5' : 'lg:col-span-4'
              return (
                <Link
                  key={sector.id}
                  href={`/lifestyle/${sector.id}`}
                  className={`group bg-white rounded-2xl border border-border overflow-hidden flex flex-col justify-between hover:border-accent hover:shadow-xs transition-all duration-300 ${spanClass}`}
                >
                  <div>
                    <div className="relative aspect-[16/10] bg-surface-elevated overflow-hidden">
                      <Image
                        src={sector.image}
                        alt={sector.title}
                        fill
                        sizes="(max-width: 768px) 100vw, 33vw"
                        className="object-cover group-hover:scale-102 transition-transform duration-500"
                      />
                      <div className="absolute top-3 left-3">
                        <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono font-bold bg-white/95 text-text-primary shadow-2xs">
                          {sector.count} Entities
                        </span>
                      </div>
                    </div>

                    <div className="p-5 sm:p-6 space-y-1.5">
                      <h3 className="text-lg font-bold text-text-primary group-hover:text-accent transition-colors">
                        {sector.title}
                      </h3>
                      <p className="text-xs text-text-secondary leading-relaxed line-clamp-2">
                        {sector.description}
                      </p>
                    </div>
                  </div>

                  <div className="p-5 sm:p-6 pt-0">
                    <div className="flex items-center gap-1 text-xs font-bold text-accent group-hover:underline">
                      <span>Explore Sector & Protocols</span>
                      <ArrowRight className="h-3 w-3" />
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