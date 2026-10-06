'use client'

import * as React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { VERIFIED_LIFESTYLE } from '@/lib/data/lifestyle'
import { SourceBadge } from '@/components/ui/source-badge'
import { PageIntro } from '@/components/layout/layout-primitives'
import { ArrowLeft, ExternalLink, MapPin } from 'lucide-react'

export default function DiningPage() {
  const diningList = VERIFIED_LIFESTYLE.filter((l) => l.category === 'dining')

  const diningImages: Record<string, string> = {
    'life-dining-ossiano': 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1200&q=80',
    'life-dining-tresind': 'https://images.unsplash.com/photo-1550966871-3ed3cdb5ed0c?auto=format&fit=crop&w=1200&q=80',
    'life-dining-zuma': 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=1200&q=80',
  }

  return (
    <div className="bg-[#08080a] text-[#f5f5f7] min-h-screen pb-24 selection:bg-[#c9a962]/20 selection:text-[#f5f5f7]">
      {/* 1. EDITORIAL PAGE INTRO */}
      <PageIntro
        eyebrow="Michelin Guide Dubai Certified"
        badge={<SourceBadge status="OFFICIAL SOURCE" sourceName="Michelin Guide Dubai" />}
        title={<>Michelin Gastronomy<span className="text-[#c9a962]">.</span></>}
        description="Verified Michelin-starred establishments, multi-course culinary theaters, and prime dining destinations across Dubai."
      />

      <div className="w-full max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-16 pt-4">
        <Link
          href="/lifestyle"
          className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-[#a1a1aa] hover:text-[#c9a962] transition-colors"
        >
          <ArrowLeft className="h-4 w-4" />
          <span>Back to Lifestyle Monograph</span>
        </Link>
      </div>

      <main className="w-full max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-16 pt-6 space-y-10">
        {/* Entities Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {diningList.map((item) => (
            <div
              key={item.id}
              className="p-6 sm:p-7 bg-[#111116] rounded-xs border border-white/[0.08] hover:border-[#c9a962]/40 transition-all duration-300 flex flex-col justify-between space-y-6 group"
            >
              <div className="space-y-5">
                <div className="relative aspect-[16/10] rounded-xs overflow-hidden bg-[#181820] border border-white/10">
                  <Image
                    src={item.image || diningImages[item.id] || 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=800&q=80'}
                    alt={item.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="px-2.5 py-0.5 rounded-xs text-[10px] font-mono font-semibold uppercase bg-black/70 backdrop-blur-md text-[#c9a962] border border-white/10">
                      Michelin Guide
                    </span>
                  </div>
                </div>

                <div className="flex items-start justify-between gap-3">
                  <div>
                    <h3 className="text-lg font-light text-[#f5f5f7] tracking-tight group-hover:text-[#c9a962] transition-colors">{item.title}</h3>
                    <p className="text-xs text-[#a1a1aa] flex items-center gap-1.5 mt-1 font-mono">
                      <MapPin className="h-3.5 w-3.5 text-[#c9a962] shrink-0" />
                      <span className="truncate">{item.location}</span>
                    </p>
                  </div>
                  <SourceBadge provenance={item.provenance} showDetailButton={false} />
                </div>

                <p className="text-xs text-[#a1a1aa] font-light leading-relaxed line-clamp-3">
                  {item.description}
                </p>

                {item.specs && (
                  <div className="p-4 bg-black/40 rounded-xs border border-white/[0.06] text-xs space-y-2 font-mono">
                    {Object.entries(item.specs).map(([k, v]) => (
                      <div key={k} className="flex justify-between items-center text-[#a1a1aa]">
                        <span className="text-[#71717a] capitalize">{k.replace(/_/g, ' ')}:</span>
                        <span className="font-medium text-[#f5f5f7]">{String(v)}</span>
                      </div>
                    ))}
                  </div>
                )}

                <div className="pt-2 border-t border-white/[0.06] flex items-center justify-between">
                  <span className="text-[10px] font-mono uppercase tracking-widest text-[#71717a] block">Tariff Indicator</span>
                  <span className="text-sm font-mono font-medium text-[#c9a962]">{item.price_display}</span>
                </div>
              </div>

              {item.official_url && (
                <div className="pt-4 border-t border-white/[0.06]">
                  <a
                    href={item.official_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-2.5 px-4 rounded-xs border border-white/10 bg-white/5 hover:bg-[#c9a962] hover:text-[#08080a] text-xs font-mono text-center transition-all flex items-center justify-center gap-2 cursor-pointer text-[#f5f5f7]"
                  >
                    <span>Reservations Portal</span>
                    <ExternalLink className="h-3 w-3" />
                  </a>
                </div>
              )}
            </div>
          ))}
        </div>
      </main>
    </div>
  )
}