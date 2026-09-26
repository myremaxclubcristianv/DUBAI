'use client'

import * as React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { VERIFIED_LIFESTYLE } from '@/lib/data/lifestyle'
import { SourceBadge } from '@/components/ui/source-badge'
import { PageIntro } from '@/components/layout/layout-primitives'
import { ArrowLeft, ExternalLink, MapPin } from 'lucide-react'

export default function HotelsPage() {
  const hotelList = VERIFIED_LIFESTYLE.filter((l) => l.category === 'hotels')

  const hotelImages: Record<string, string> = {
    'life-hotel-burj-al-arab': 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1200&q=80',
    'life-hotel-atlantis-royal': 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1200&q=80',
  }

  return (
    <div className="bg-white text-[#1d1d1f] min-h-screen pb-24 selection:bg-accent/20 selection:text-[#1d1d1f]">
      {/* 1. CENTERED PAGE INTRO */}
      <PageIntro
        eyebrow="DET 5-Star Deluxe Register"
        badge={<SourceBadge status="LICENSED OPERATOR" sourceName="Dubai Department of Economy & Tourism" />}
        title={<>Ultra-Luxury Hospitality<span className="text-gradient-gold">.</span></>}
        description="World-renowned iconic architectural hotels, penthouses, and palatial beachfront suites across Dubai."
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
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {hotelList.map((item) => (
            <div
              key={item.id}
              className="p-6 sm:p-8 bg-white rounded-3xl border border-black/10 hover:border-black/20 hover:shadow-xl transition-all duration-300 flex flex-col justify-between space-y-6 group shadow-sm"
            >
              <div className="space-y-5">
                <div className="relative aspect-[16/9] rounded-2xl overflow-hidden bg-[#f5f5f7]">
                  <Image
                    src={item.image || hotelImages[item.id] || 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=800&q=80'}
                    alt={item.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 rounded-full text-[10px] font-mono font-bold bg-white/90 backdrop-blur-md text-[#1d1d1f] border border-black/10 shadow-sm">
                      5-Star Deluxe Licensed
                    </span>
                  </div>
                </div>

                <div className="flex items-start justify-between gap-3">
                  <div>
                    <h3 className="text-xl font-extrabold text-[#1d1d1f] tracking-tight">{item.title}</h3>
                    <p className="text-xs text-[#6e6e73] flex items-center gap-1.5 mt-1 font-mono">
                      <MapPin className="h-3.5 w-3.5 text-accent shrink-0" />
                      <span className="truncate">{item.location}</span>
                    </p>
                  </div>
                  <SourceBadge provenance={item.provenance} showDetailButton={false} />
                </div>

                <p className="text-xs sm:text-sm text-[#6e6e73] leading-relaxed">
                  {item.description}
                </p>

                {item.specs && (
                  <div className="p-4 bg-[#f5f5f7] rounded-2xl border border-black/5 text-xs space-y-2 font-mono">
                    {Object.entries(item.specs).map(([k, v]) => (
                      <div key={k} className="flex justify-between">
                        <span className="text-[#6e6e73]">{k}:</span>
                        <span className="font-semibold text-[#1d1d1f] text-right max-w-[240px]">{v}</span>
                      </div>
                    ))}
                  </div>
                )}

                <div className="pt-2">
                  <span className="text-[10px] font-mono uppercase tracking-widest text-[#6e6e73] font-semibold block mb-1">Published Room Tariffs</span>
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
                    <span>Official Hotel Booking Portal</span>
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
