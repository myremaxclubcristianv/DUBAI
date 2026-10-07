'use client'

import * as React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import {
  ArrowRight,
  ShieldCheck,
} from 'lucide-react'

export default function LifestyleMagazinePage() {
  return (
    <div className="flex flex-col min-h-screen bg-white text-slate-950 selection:bg-slate-900 selection:text-white">
      
      {/* 1. EDITORIAL OPENING */}
      <section className="pt-16 pb-14 sm:pt-24 sm:pb-20 border-b border-slate-200 bg-white relative">
        <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-10 lg:px-16 space-y-6">
          <div className="flex flex-wrap items-center justify-between gap-4 font-mono text-xs">
            <div className="flex items-center gap-2">
              <span className="text-[10px] tracking-[0.24em] uppercase text-slate-500 font-semibold">
                CURATED LIFESTYLE &bull; EDITORIAL MONOGRAPH
              </span>
            </div>
            <div className="flex items-center gap-3 text-[11px] text-slate-500">
              <span className="text-emerald-800 font-semibold flex items-center gap-1">
                <ShieldCheck className="h-3.5 w-3.5 text-emerald-700" />
                Curated Sovereign Access
              </span>
            </div>
          </div>
          
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 border-t border-slate-200/80 pt-6">
            <div className="max-w-3xl space-y-4">
              <h1 className="text-4xl sm:text-6xl lg:text-7xl font-light tracking-[-0.035em] text-slate-950 font-serif">
                LIFESTYLE
              </h1>
              <p className="text-base sm:text-lg text-slate-600 font-light leading-relaxed">
                An architectural and cultural monograph exploring private aviation corridors, maritime berths, Michelin-starred culinary institutions, and bespoke desert conservation reserves.
              </p>
            </div>

            <div className="p-4 bg-slate-50 border border-slate-200 font-mono text-xs text-slate-600 shadow-2xs space-y-1">
              <div className="text-slate-950 font-bold">
                6 Access Portfolios
              </div>
              <div className="text-[10px] text-slate-400">
                Aviation, Marine, Gastronomy, Clubs
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. FULL-BLEED ARCHITECTURAL MARITIME SPREAD */}
      <section className="w-full">
        <div className="relative aspect-[16/9] sm:aspect-[24/10] w-full bg-slate-100 overflow-hidden border-b border-slate-200">
          <Image
            src="https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=2200&q=85"
            alt="Dubai Maritime & Harbour Infrastructure"
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent" />
          <div className="absolute bottom-6 left-6 sm:left-12 px-4 py-2 bg-slate-950/85 backdrop-blur-md border border-white/20 text-xs font-mono text-white shadow-xs">
            <span>Dubai Harbour &bull; Deep Water Superyacht Berths &bull; 160m Capacity</span>
          </div>
        </div>
      </section>

      {/* 3. EDITORIAL THESIS */}
      <section className="py-20 lg:py-28 bg-white border-b border-slate-200">
        <div className="w-full max-w-[880px] mx-auto px-4 sm:px-10 space-y-6">
          <span className="text-[10px] font-mono tracking-[0.24em] uppercase text-slate-500 font-semibold block">
            01 &bull; MARITIME &amp; AVIATION ACCESS
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light text-slate-950 leading-tight font-serif">
            Dubai’s infrastructure is engineered for sovereign mobility and unencumbered global access.
          </h2>
          <p className="text-base sm:text-lg text-slate-600 font-light leading-relaxed">
            From the dedicated VIP FBO lounges at Al Maktoum International Airport (DWC) to custom 160-meter berths at Dubai Harbour, access protocols are structured for maximum discretion and operational reliability.
          </p>
        </div>
      </section>

      {/* 4. ASYMMETRIC IMAGE PAIR & CULINARY ESSAY */}
      <section className="py-20 lg:py-28 bg-slate-50 border-b border-slate-200">
        <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-10 lg:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            
            {/* Image 1 (Left 7 cols) */}
            <div className="lg:col-span-7">
              <div className="relative aspect-[4/3] w-full overflow-hidden bg-slate-100 border border-slate-200 shadow-sm">
                <Image
                  src="https://images.unsplash.com/photo-1550966871-3ed3cdb5ed0c?auto=format&fit=crop&w=1400&q=85"
                  alt="Michelin Culinary Heritage"
                  fill
                  sizes="(max-width: 1024px) 100vw, 60vw"
                  className="object-cover"
                />
                <div className="absolute bottom-3 left-3 px-2.5 py-1 bg-slate-950/80 font-mono text-[9px] text-slate-300">
                  FIG 02.1 &bull; MICHELIN GASTRONOMY
                </div>
              </div>
            </div>

            {/* Text & Image 2 (Right 5 cols) */}
            <div className="lg:col-span-5 space-y-6">
              <div className="space-y-3">
                <span className="text-[10px] font-mono tracking-[0.24em] uppercase text-slate-500 font-semibold block">
                  02 &bull; MICHELIN GASTRONOMY
                </span>
                <h3 className="text-2xl sm:text-3xl font-light text-slate-950 font-serif">
                  Culinary Distinction
                </h3>
                <p className="text-sm text-slate-600 font-light leading-relaxed">
                  The Dubai Michelin Guide benchmarks two and three-star culinary dining rooms across the Palm Jumeirah, DIFC, and Jumeirah Bay Island, led by acclaimed global masters.
                </p>
              </div>

              <div className="relative aspect-[16/10] w-full overflow-hidden bg-slate-100 border border-slate-200 shadow-sm">
                <Image
                  src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1000&q=85"
                  alt="DIFC Private Member Clubs"
                  fill
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  className="object-cover"
                />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 5. CURATED DISCIPLINES DIRECTORY */}
      <section className="py-20 lg:py-28 bg-white border-b border-slate-200">
        <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-10 lg:px-16 space-y-12">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-slate-200 pb-6">
            <div className="space-y-1">
              <span className="text-[10px] font-mono uppercase tracking-[0.24em] text-slate-500 font-bold block">
                03 &bull; LIFESTYLE DIRECTORY DISCIPLINES
              </span>
              <h2 className="text-3xl sm:text-4xl font-light text-slate-950 font-serif">
                Access Portfolios
              </h2>
            </div>
            <span className="text-xs font-mono text-slate-500">6 Curated Sectors</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: 'Superyachts & Marinas',
                category: 'MARINE & BERTHS',
                desc: 'Dubai Harbour, Bulgari Marina, and Dubai Marina deep-water moorings.',
                href: '/lifestyle/yachts',
                src: 'https://images.unsplash.com/photo-1567899378494-47b22a2ae96a?auto=format&fit=crop&w=800&q=80',
              },
              {
                title: 'Private Aviation & FBOs',
                category: 'AVIATION & MOBILITY',
                desc: 'Al Maktoum International (DWC) VIP Terminal & executive lounges.',
                href: '/lifestyle/aviation',
                src: 'https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?auto=format&fit=crop&w=800&q=80',
              },
              {
                title: 'Michelin Dining',
                category: 'CULINARY GUIDE',
                desc: 'Official Michelin Guide two-star & one-star tasting tables.',
                href: '/lifestyle/dining',
                src: 'https://images.unsplash.com/photo-1550966871-3ed3cdb5ed0c?auto=format&fit=crop&w=800&q=80',
              },
              {
                title: 'Desert Conservation',
                category: 'NATURE & RESERVES',
                desc: 'Dubai Desert Conservation Reserve (DDCR) protected private expeditions.',
                href: '/lifestyle/safari',
                src: 'https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?auto=format&fit=crop&w=800&q=80',
              },
              {
                title: 'Private Member Clubs',
                category: 'PRIVATE NETWORK',
                desc: 'The Arts Club DIFC and private business salons.',
                href: '/lifestyle/clubs',
                src: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=800&q=80',
              },
              {
                title: 'Palatial Hospitality',
                category: 'HOTELS & RESIDENCES',
                desc: 'Bulgari Resort, Atlantis The Royal, and The Lana Dorchester Collection.',
                href: '/lifestyle/hotels',
                src: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=800&q=80',
              },
            ].map((item, idx) => (
              <Link
                key={idx}
                href={item.href}
                className="group block space-y-4 p-6 bg-white border border-slate-200 hover:border-slate-950 transition-all shadow-2xs"
              >
                <div className="relative aspect-[16/10] w-full overflow-hidden bg-slate-100">
                  <Image
                    src={item.src}
                    alt={item.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 30vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                </div>
                <div className="space-y-1 font-mono">
                  <span className="text-[10px] uppercase tracking-wider text-slate-500 block font-semibold">
                    {item.category}
                  </span>
                  <h3 className="text-lg font-light text-slate-950 group-hover:text-slate-600 transition-colors font-serif">
                    {item.title}
                  </h3>
                  <p className="text-xs text-slate-500 font-light line-clamp-2 font-sans">
                    {item.desc}
                  </p>
                </div>
                <div className="pt-2 flex items-center gap-1.5 text-xs font-mono text-slate-950 group-hover:translate-x-1 transition-transform">
                  <span>Explore Portfolio</span>
                  <ArrowRight className="h-3 w-3" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

    </div>
  )
}