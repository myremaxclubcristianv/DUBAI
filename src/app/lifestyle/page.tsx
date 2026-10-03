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
    <div className="flex flex-col min-h-screen bg-[#ffffff] text-[#111111]">
      
      {/* 1. EDITORIAL OPENING */}
      <section className="pt-20 pb-16 sm:pt-28 sm:pb-24 border-b border-[#e5e5ea] bg-[#fafaf8]">
        <div className="w-full max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-16 space-y-6">
          <Eyebrow>CURATED LIFESTYLE &bull; EDITORIAL MONOGRAPH</Eyebrow>
          
          <div className="max-w-3xl space-y-4">
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-light tracking-[-0.035em] text-[#111111]">
              LIFESTYLE
            </h1>
            <p className="text-lg sm:text-xl text-[#6b6b6b] font-light leading-relaxed">
              An architectural and cultural monograph exploring private aviation corridors, maritime berths, Michelin-starred culinary institutions, and bespoke desert conservation reserves.
            </p>
          </div>
        </div>
      </section>

      {/* 2. FULL-BLEED IMAGE SPREAD */}
      <section className="w-full">
        <div className="relative aspect-[16/9] sm:aspect-[24/10] w-full bg-[#f5f5f3] overflow-hidden">
          <Image
            src="https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=2200&q=85"
            alt="Dubai Maritime & Harbour Infrastructure"
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
          <div className="absolute bottom-6 left-6 sm:left-12 px-4 py-1.5 rounded-full bg-[#ffffff]/90 backdrop-blur-md border border-[#e5e5ea] text-xs font-mono text-[#111111]">
            <span>Dubai Harbour &bull; Deep Water Superyacht Berths</span>
          </div>
        </div>
      </section>

      {/* 3. LARGE WHITESPACE & EDITORIAL THESIS */}
      <Section spacing="room-200" surface="white" containerSize="reading">
        <div className="space-y-8">
          <Eyebrow>MARITIME &amp; AVIATION ACCESS</Eyebrow>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light text-[#111111] leading-tight">
            Dubai’s infrastructure is engineered for sovereign mobility and unencumbered global access.
          </h2>
          <p className="text-base sm:text-lg text-[#484848] font-light leading-relaxed">
            From the dedicated VIP FBO lounges at Al Maktoum International Airport (DWC) to custom 160-meter berths at Dubai Harbour, access protocols are structured for maximum discretion and operational reliability.
          </p>
        </div>
      </Section>

      {/* 4. ASYMMETRIC IMAGE PAIR & CULINARY ESSAY */}
      <Section spacing="room-200" surface="subtle" containerSize="wide">
        <div className="space-y-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            {/* Image 1 (Left 7 cols) */}
            <div className="lg:col-span-7">
              <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl bg-[#f5f5f3]">
                <Image
                  src="https://images.unsplash.com/photo-1550966871-3ed3cdb5ed0c?auto=format&fit=crop&w=1400&q=85"
                  alt="Michelin Culinary Heritage"
                  fill
                  sizes="(max-width: 1024px) 100vw, 60vw"
                  className="object-cover"
                />
              </div>
            </div>

            {/* Text & Image 2 (Right 5 cols) */}
            <div className="lg:col-span-5 space-y-8">
              <div className="space-y-4">
                <Eyebrow>MICHELIN GASTRONOMY</Eyebrow>
                <h3 className="text-2xl sm:text-3xl font-light text-[#111111]">
                  Culinary Distinction
                </h3>
                <p className="text-sm sm:text-base text-[#484848] font-light leading-relaxed">
                  The Dubai Michelin Guide benchmarks two and three-star culinary dining rooms across the Palm Jumeirah, DIFC, and Jumeirah Bay Island, led by acclaimed global masters.
                </p>
              </div>

              <div className="relative aspect-[16/10] w-full overflow-hidden rounded-2xl bg-[#f5f5f3]">
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
      </Section>

      {/* 5. CURATED DISCIPLINES STRIP */}
      <Section spacing="room-160" surface="white" containerSize="wide">
        <div className="space-y-12">
          <div className="space-y-3">
            <Eyebrow>LIFESTYLE DIRECTORY DISCIPLINES</Eyebrow>
            <h2 className="text-3xl sm:text-4xl font-light text-[#111111]">
              Access Portfolios
            </h2>
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
                className="group block space-y-4 p-6 rounded-2xl bg-[#fafaf8] border border-[#e5e5ea] hover:border-[#111111] transition-all"
              >
                <div className="relative aspect-[16/10] w-full overflow-hidden rounded-xl bg-[#f5f5f3]">
                  <Image
                    src={item.src}
                    alt={item.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 30vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                </div>
                <div className="space-y-1">
                  <span className="text-[10px] font-mono uppercase tracking-wider text-[#9f8144]">
                    {item.category}
                  </span>
                  <h3 className="text-xl font-light text-[#111111] group-hover:text-[#9f8144] transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-xs text-[#6b6b6b] font-light">
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