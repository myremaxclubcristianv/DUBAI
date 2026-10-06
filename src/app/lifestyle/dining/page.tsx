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
    <div className="bg-white text-slate-900 min-h-screen pb-24">
      {/* 1. EDITORIAL PAGE INTRO */}
      <PageIntro
        eyebrow="Michelin Guide Dubai Certified"
        badge={<SourceBadge status="OFFICIAL SOURCE" sourceName="Michelin Guide Dubai" />}
        title={<>Michelin Gastronomy<span className="text-[#0284c7]">.</span></>}
        description="Verified Michelin-starred establishments, multi-course culinary theaters, and prime dining destinations across Dubai."
      />

      <div className="w-full max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-16 pt-4">
        <Link
          href="/lifestyle"
          className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-slate-600 hover:text-[#0284c7] transition-colors"
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
              className="p-6 sm:p-7 bg-white rounded-xs border border-slate-200 hover:border-[#0284c7]/40 transition-all duration-300 flex flex-col justify-between space-y-6 group shadow-xs hover:shadow-md"
            >
              <div className="space-y-5">
                <div className="relative aspect-[16/10] rounded-xs overflow-hidden bg-slate-100 border border-slate-200">
                  <Image
                    src={item.image || diningImages[item.id] || 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=800&q=80'}
                    alt={item.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="px-2.5 py-0.5 rounded-xs text-[10px] font-mono font-semibold uppercase bg-white/90 backdrop-blur-md text-[#0284c7] border border-sky-100 shadow-xs">
                      Michelin Guide
                    </span>
                  </div>
                </div>

                <div className="flex items-start justify-between gap-3">
                  <div>
                    <h3 className="text-lg font-light text-slate-900 tracking-tight group-hover:text-[#0284c7] transition-colors font-serif">{item.title}</h3>
                    <p className="text-xs text-slate-500 flex items-center gap-1.5 mt-1 font-mono">
                      <MapPin className="h-3.5 w-3.5 text-[#0284c7] shrink-0" />
                      <span className="truncate">{item.location}</span>
                    </p>
                  </div>
                  <SourceBadge provenance={item.provenance} showDetailButton={false} />
                </div>

                <p className="text-xs text-slate-600 font-light leading-relaxed line-clamp-3">
                  {item.description}
                </p>

                {item.specs && (
                  <div className="p-4 bg-slate-50 rounded-xs border border-slate-200 text-xs space-y-2 font-mono">
                    {Object.entries(item.specs).map(([k, v]) => (
                      <div key={k} className="flex justify-between items-center text-slate-600">
                        <span className="text-slate-400 capitalize">{k.replace(/_/g, ' ')}:</span>
                        <span className="font-medium text-slate-900">{String(v)}</span>
                      </div>
                    ))}
                  </div>
                )}

                <div className="pt-2 border-t border-slate-100 flex items-center justify-between">
                  <span className="text-[10px] font-mono uppercase tracking-widest text-slate-400 block">Tariff Indicator</span>
                  <span className="text-sm font-mono font-semibold text-slate-900">{item.price_display}</span>
                </div>
              </div>

              {item.official_url && (
                <div className="pt-4 border-t border-slate-100">
                  <a
                    href={item.official_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs font-mono uppercase tracking-wider text-[#0284c7] hover:underline flex items-center gap-1.5 font-medium"
                  >
                    <span>Direct Reservation</span>
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