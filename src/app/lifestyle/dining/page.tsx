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
    <div className="bg-white text-[#1d1d1f] min-h-screen pb-24 selection:bg-accent/20 selection:text-[#1d1d1f]">
      {/* 1. CENTERED PAGE INTRO */}
      <PageIntro
        eyebrow="Michelin Guide Dubai Certified"
        badge={<SourceBadge status="OFFICIAL SOURCE" sourceName="Michelin Guide Dubai" />}
        title={<>Michelin Gastronomy<span className="text-gradient-gold">.</span></>}
        description="Verified Michelin-starred establishments, multi-course culinary theaters, and prime dining destinations across Dubai."
      />

      <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-4">
        <Link
          href="/lifestyle"
          className="inline-flex items-center gap-2 text-xs font-semibold text-[#6e6e73] hover:text-[#1d1d1f] transition-colors"
        >
          <ArrowLeft className="h-4 w-4" />
          <span>Back to Lifestyle Directory</span>
        </Link>
      </div>

      <main className="w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 space-y-10">
        {/* Entities Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {diningList.map((item) => (
            <div
              key={item.id}
              className="p-6 sm:p-7 bg-white rounded-3xl border border-black/10 hover:border-black/20 hover:shadow-xl transition-all duration-300 flex flex-col justify-between space-y-6 group shadow-sm"
            >
              <div className="space-y-5">
                <div className="relative aspect-[16/10] rounded-2xl overflow-hidden bg-[#f5f5f7]">
                  <Image
                    src={item.image || diningImages[item.id] || 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=800&q=80'}
                    alt={item.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 rounded-full text-[10px] font-mono font-bold bg-white/90 backdrop-blur-md text-[#1d1d1f] border border-black/10 shadow-sm">
                      Michelin Guide
                    </span>
                  </div>
                </div>

                <div className="flex items-start justify-between gap-3">
                  <div>
                    <h3 className="text-lg font-extrabold text-[#1d1d1f] tracking-tight">{item.title}</h3>
                    <p className="text-xs text-[#6e6e73] flex items-center gap-1.5 mt-1 font-mono">
                      <MapPin className="h-3.5 w-3.5 text-accent shrink-0" />
                      <span className="truncate">{item.location}</span>
                    </p>
                  </div>
                  <SourceBadge provenance={item.provenance} showDetailButton={false} />
                </div>

                <p className="text-xs text-[#6e6e73] leading-relaxed line-clamp-3">
                  {item.description}
                </p>

                {item.specs && (
                  <div className="p-4 bg-[#f5f5f7] rounded-2xl border border-black/5 text-xs space-y-2 font-mono">
                    {Object.entries(item.specs).map(([k, v]) => (
                      <div key={k} className="flex justify-between">
                        <span className="text-[#6e6e73]">{k}:</span>
                        <span className="font-semibold text-[#1d1d1f]">{v}</span>
                      </div>
                    ))}
                  </div>
                )}

                <div className="pt-2">
                  <span className="text-[10px] font-mono uppercase tracking-widest text-[#6e6e73] font-semibold block mb-1">Tariff / Pricing</span>
                  <span className="text-base font-bold text-accent font-mono">{item.price_display}</span>
                </div>
              </div>

              {item.official_url && (
                <div className="pt-4 border-t border-black/10">
                  <a
                    href={item.official_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-3 px-4 rounded-full border border-black/10 bg-[#f5f5f7] hover:bg-[#1d1d1f] hover:text-white text-xs font-semibold text-center transition-all flex items-center justify-center gap-2 cursor-pointer text-[#1d1d1f]"
                  >
                    <span>Official Reservations Portal</span>
                    <ExternalLink className="h-3.5 w-3.5" />
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