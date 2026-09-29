'use client'

import * as React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { ProvenanceTag } from '@/components/layout/layout-primitives'
import {
  ArrowRight,
} from 'lucide-react'

const LIFESTYLE_SECTORS = [
  {
    id: 'dining',
    title: 'Michelin Gastronomy',
    category: 'DINING & CULINARY',
    description: 'Verified Michelin-starred tasting menus and chef tables across the Emirate of Dubai, evaluated by anonymous Michelin Guide inspectors.',
    image: 'https://images.unsplash.com/photo-1550966871-3ed3cdb5ed0c?auto=format&fit=crop&w=1200&q=80',
    provenance: 'Michelin Guide Dubai (Editorial Source)',
    href: '/lifestyle/dining',
    subItems: ['Ossiano (1-Star)', 'Trèsind Studio (2-Star)', 'Stay by Yannick Alléno (2-Star)']
  },
  {
    id: 'aviation',
    title: 'Private Aviation & FBO Terminals',
    category: 'MOBILITY & AVIATION',
    description: 'Executive private aviation VIP FBO handling at Al Maktoum International Airport (DWC) and Dubai International (DXB).',
    image: 'https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?auto=format&fit=crop&w=1200&q=80',
    provenance: 'Licensed GCAA & DWC Operators',
    href: '/lifestyle/aviation',
    subItems: ['DWC VIP Terminal', 'ExecuJet FBO', 'Falcon Aviation Services']
  },
  {
    id: 'yachts',
    title: 'Superyachts & Marine Berths',
    category: 'MARINE & HARBOURS',
    description: 'Deep-water superyacht berths, luxury charter operations, and private mooring management across Dubai Harbour and Dubai Marina.',
    image: 'https://images.unsplash.com/photo-1567899378494-47b22a2ae96a?auto=format&fit=crop&w=1200&q=80',
    provenance: 'Dubai Maritime Authority Licensed',
    href: '/lifestyle/yachts',
    subItems: ['Dubai Harbour Marina (160m berths)', 'Bulgari Marina', 'Dubai Marina Yacht Club']
  },
  {
    id: 'hotels',
    title: 'Ultra-Luxury Hospitality Palaces',
    category: 'ACCOMMODATION & SUITES',
    description: 'Private branded hotel suites and palatial residences including Bulgari Resort Dubai, Atlantis The Royal, and The Lana (Dorchester Collection).',
    image: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1200&q=80',
    provenance: 'Dubai Department of Economy & Tourism',
    href: '/lifestyle/hotels',
    subItems: ['Bulgari Resort Jumeira Bay', 'Atlantis The Royal', 'The Lana Dorchester Collection']
  },
  {
    id: 'clubs',
    title: 'Private Member Salons & Clubs',
    category: 'PRIVATE NETWORK',
    description: 'Exclusive private member clubs and business salons in DIFC and Downtown providing discreet networking and dining.',
    image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1200&q=80',
    provenance: 'Licensed Private Member Operators',
    href: '/lifestyle/clubs',
    subItems: ['The Arts Club Dubai (DIFC)', 'Capital Club Dubai', 'Surveillant DIFC']
  },
  {
    id: 'safari',
    title: 'Conservation Desert Sanctuaries',
    category: 'NATURE & RESERVES',
    description: 'Eco-luxury wildlife conservation expeditions within the protected Dubai Desert Conservation Reserve (DDCR).',
    image: 'https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?auto=format&fit=crop&w=1200&q=80',
    provenance: 'Dubai Desert Conservation Reserve (DDCR)',
    href: '/lifestyle/safari',
    subItems: ['DDCR Protected Sanctuary', 'Al Maha Resort & Spa', 'Platinum Heritage Expeditions']
  }
]

export default function LifestylePage() {
  const featureSector = LIFESTYLE_SECTORS[0]
  const otherSectors = LIFESTYLE_SECTORS.slice(1)

  return (
    <div className="bg-[#ffffff] text-[#111111] min-h-screen pb-24">
      
      {/* 1. EDITORIAL HEADER */}
      <section className="pt-12 pb-12 sm:pt-16 sm:pb-16 border-b border-[#e5e5ea] bg-[#fafaf8]">
        <div className="w-full max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          <div className="flex items-center justify-between">
            <span className="text-[10px] font-mono font-bold uppercase tracking-[0.2em] text-[#9f8144]">
              CURATED ACCESS &bull; LIFESTYLE INFRASTRUCTURE
            </span>
            <ProvenanceTag sourceClass="EDITORIAL SOURCE" sourceName="Michelin &bull; Licensed Operators" />
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-[#111111]">
            Curated Lifestyle &amp; Marine Protocols
          </h1>
          
          <p className="text-sm sm:text-base text-[#484848] max-w-3xl leading-relaxed">
            Institutional directory of Dubai private aviation FBOs, certified superyacht harbours, Michelin gastronomy selections, and private member networks.
          </p>
        </div>
      </section>

      {/* 2. FEATURE SPREAD: Asymmetric Composition */}
      <section className="py-14 border-b border-[#e5e5ea]">
        <div className="w-full max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          
          <div className="flex items-center justify-between border-b border-[#e5e5ea] pb-3">
            <span className="text-[10px] font-mono font-bold uppercase tracking-[0.2em] text-[#9f8144]">
              FEATURE PROTOCOL &bull; {featureSector.category}
            </span>
            <span className="text-xs font-mono text-[#6b6b6b]">{featureSector.provenance}</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7">
              <div className="relative aspect-[16/10] w-full overflow-hidden rounded border border-[#e5e5ea] bg-[#f5f5f3]">
                <Image
                  src={featureSector.image}
                  alt={featureSector.title}
                  fill
                  priority
                  className="object-cover"
                />
              </div>
            </div>

            <div className="lg:col-span-5 space-y-4">
              <h2 className="text-2xl sm:text-3xl font-semibold text-[#111111]">
                {featureSector.title}
              </h2>
              <p className="text-sm text-[#484848] leading-relaxed">
                {featureSector.description}
              </p>
              
              <div className="space-y-2 pt-2 border-t border-[#e5e5ea]">
                <span className="text-[10px] font-mono uppercase text-[#6b6b6b] block font-semibold">
                  Verified Selections:
                </span>
                <ul className="space-y-1 text-xs text-[#484848]">
                  {featureSector.subItems.map((item, idx) => (
                    <li key={idx} className="flex items-center gap-2">
                      <span className="text-[#9f8144] font-bold">&bull;</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pt-2">
                <Link
                  href={featureSector.href}
                  className="px-4 py-2 rounded bg-[#111111] hover:bg-[#2a2a2e] text-[#fafaf8] text-xs font-medium inline-flex items-center gap-1.5 transition-colors"
                >
                  <span>Explore Gastronomy Guide</span>
                  <ArrowRight className="h-3 w-3" />
                </Link>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* 3. LIFESTYLE SECTOR GRID */}
      <main className="w-full max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8 py-14 space-y-10">
        
        <div className="border-b border-[#e5e5ea] pb-3">
          <h3 className="text-xl font-semibold text-[#111111]">
            Curated Lifestyle Infrastructure
          </h3>
          <p className="text-xs text-[#6b6b6b]">
            Verified operators, licensing credentials, and bespoke protocols.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {otherSectors.map((sec) => (
            <div
              key={sec.id}
              className="bg-[#ffffff] rounded border border-[#e5e5ea] overflow-hidden flex flex-col justify-between"
            >
              <div>
                <div className="relative aspect-[16/10] w-full bg-[#f5f5f3] overflow-hidden border-b border-[#e5e5ea]">
                  <Image
                    src={sec.image}
                    alt={sec.title}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute top-2.5 left-2.5 px-2 py-0.5 rounded bg-[#ffffff]/90 text-[10px] font-mono text-[#111111] border border-[#e5e5ea]">
                    {sec.category}
                  </div>
                </div>

                <div className="p-5 space-y-2.5">
                  <h4 className="text-lg font-semibold text-[#111111]">
                    {sec.title}
                  </h4>
                  <p className="text-xs text-[#484848] line-clamp-3 leading-relaxed">
                    {sec.description}
                  </p>

                  <div className="pt-2 border-t border-[#f5f5f3] text-[10px] font-mono text-[#6b6b6b]">
                    Source: {sec.provenance}
                  </div>
                </div>
              </div>

              <div className="p-5 pt-0 border-t border-[#f5f5f3] mt-2 flex items-center justify-between">
                <Link
                  href={sec.href}
                  className="text-xs font-semibold text-[#111111] hover:text-[#9f8144] inline-flex items-center gap-1 transition-colors"
                >
                  <span>Protocol Dossier &rarr;</span>
                </Link>
              </div>
            </div>
          ))}
        </div>

      </main>

    </div>
  )
}