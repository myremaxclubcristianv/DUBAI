'use client'

import * as React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import {
  Section,
  Eyebrow,
} from '@/components/layout/layout-primitives'

export default function LifestyleMagazinePage() {
  return (
    <div className="flex flex-col min-h-screen bg-[#08080a] text-[#f5f5f7]">
      
      {/* 1. EDITORIAL OPENING */}
      <section className="pt-16 pb-14 sm:pt-24 sm:pb-20 border-b border-white/10 bg-[#0d0d11]">
        <div className="w-full max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-16 space-y-6">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#c9a962]" />
            <Eyebrow>CURATED LIFESTYLE &bull; EDITORIAL MONOGRAPH</Eyebrow>
          </div>
          
          <div className="max-w-3xl space-y-4">
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-light tracking-[-0.035em] text-[#f5f5f7]">
              LIFESTYLE
            </h1>
            <p className="text-base sm:text-lg text-[#a1a1aa] font-light leading-relaxed">
              An architectural and cultural monograph exploring private aviation corridors, maritime berths, Michelin-starred culinary institutions, and bespoke desert conservation reserves.
            </p>
          </div>
        </div>
      </section>

      {/* 2. FULL-BLEED IMAGE SPREAD */}
      <section className="w-full">
        <div className="relative aspect-[16/9] sm:aspect-[24/10] w-full bg-[#111116] overflow-hidden border-b border-white/10">
          <Image
            src="https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=2200&q=85"
            alt="Dubai Maritime & Harbour Infrastructure"
            fill
            priority
            sizes="100vw"
            className="object-cover brightness-80"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#08080a] via-transparent to-transparent opacity-60" />
          <div className="absolute bottom-6 left-6 sm:left-12 px-4 py-1.5 rounded-xs bg-[#08080a]/90 backdrop-blur-md border border-white/15 text-xs font-mono text-[#c9a962]">
            <span>Dubai Harbour &bull; Deep Water Superyacht Berths</span>
          </div>
        </div>
      </section>

      {/* 3. EDITORIAL THESIS */}
      <Section spacing="room-160" surface="pure" containerSize="reading">
        <div className="space-y-6">
          <Eyebrow>MARITIME &amp; AVIATION ACCESS</Eyebrow>
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-light text-[#f5f5f7] leading-tight">
            Dubai’s infrastructure is engineered for sovereign mobility and unencumbered global access.
          </h2>
          <p className="text-base sm:text-lg text-[#a1a1aa] font-light leading-relaxed">
            From the dedicated VIP FBO lounges at Al Maktoum International Airport (DWC) to custom 160-meter berths at Dubai Harbour, access protocols are structured for maximum discretion and operational reliability.
          </p>
        </div>
      </Section>

      {/* 4. ASYMMETRIC IMAGE PAIR & CULINARY ESSAY */}
      <Section spacing="room-160" surface="subtle" containerSize="wide">
        <div className="space-y-14">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            
            {/* Image 1 (Left 7 cols) */}
            <div className="lg:col-span-7">
              <div className="relative aspect-[4/3] w-full overflow-hidden rounded-sm bg-[#111116] border border-white/10">
                <Image
                  src="https://images.unsplash.com/photo-1550966871-3ed3cdb5ed0c?auto=format&fit=crop&w=1400&q=85"
                  alt="Michelin Culinary Heritage"
                  fill
                  sizes="(max-width: 1024px) 100vw, 60vw"
                  className="object-cover brightness-85"
                />
              </div>
            </div>

            {/* Text & Image 2 (Right 5 cols) */}
            <div className="lg:col-span-5 space-y-6">
              <div className="space-y-3">
                <Eyebrow>MICHELIN GASTRONOMY</Eyebrow>
                <h3 className="text-2xl sm:text-3xl font-light text-[#f5f5f7]">
                  Culinary Distinction
                </h3>
                <p className="text-sm text-[#a1a1aa] font-light leading-relaxed">
                  The Dubai Michelin Guide benchmarks two and three-star culinary dining rooms across the Palm Jumeirah, DIFC, and Jumeirah Bay Island, led by acclaimed global masters.
                </p>
              </div>

              <div className="relative aspect-[16/10] w-full overflow-hidden rounded-sm bg-[#111116] border border-white/10">
                <Image
                  src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1000&q=85"
                  alt="DIFC Private Member Clubs"
                  fill
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  className="object-cover brightness-85"
                />
              </div>
            </div>

          </div>
        </div>
      </Section>

      {/* 5. CURATED DISCIPLINES STRIP */}
      <Section spacing="room-160" surface="pure" containerSize="wide">
        <div className="space-y-10">
          <div className="space-y-2">
            <Eyebrow>LIFESTYLE DIRECTORY DISCIPLINES</Eyebrow>
            <h2 className="text-3xl sm:text-4xl font-light text-[#f5f5f7]">
              Access Portfolios
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
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
                className="group block space-y-4 p-5 rounded-sm bg-[#111116] border border-white/10 hover:border-[#c9a962]/50 transition-all"
              >
                <div className="relative aspect-[16/10] w-full overflow-hidden rounded-xs bg-[#08080a]">
                  <Image
                    src={item.src}
                    alt={item.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 30vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-700 brightness-85 group-hover:brightness-100"
                  />
                </div>
                <div className="space-y-1">
                  <span className="text-[10px] font-mono uppercase tracking-wider text-[#c9a962] block font-semibold">
                    {item.category}
                  </span>
                  <h3 className="text-lg font-light text-[#f5f5f7] group-hover:text-[#c9a962] transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-xs text-[#8e8e93] font-light">
                    {item.desc}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </Section>

    </div>
  )
}