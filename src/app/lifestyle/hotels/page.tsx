'use client'

import * as React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { VERIFIED_LIFESTYLE } from '@/lib/data/lifestyle'
import { SourceBadge } from '@/components/ui/source-badge'
import { ArrowLeft, ExternalLink, MapPin } from 'lucide-react'

export default function HotelsPage() {
  const hotelList = VERIFIED_LIFESTYLE.filter((l) => l.category === 'hotels')

  const hotelImages: Record<string, string> = {
    'life-hotel-burj-al-arab': 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1200&q=80',
    'life-hotel-atlantis-royal': 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1200&q=80',
  }

  return (
    <div className="bg-black text-white min-h-screen pb-24">
      <div className="border-b border-white/10 bg-black/60 backdrop-blur-md py-4">
        <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            href="/lifestyle"
            className="inline-flex items-center gap-2 text-xs font-medium text-zinc-400 hover:text-white transition-colors"
          >
            <ArrowLeft className="h-4 w-4" />
            <span>Back to Lifestyle Directory</span>
          </Link>
        </div>
      </div>

      <main className="w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 space-y-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-white/10 pb-8">
          <div>
            <div className="flex items-center gap-2">
              <span className="text-[10px] font-bold uppercase tracking-widest text-accent font-mono">
                DET 5-STAR DELUXE REGISTER
              </span>
              <SourceBadge status="LICENSED OPERATOR" sourceName="Department of Economy and Tourism" />
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-white tracking-tight mt-2">
              Ultra-Luxury Resorts & Hotels
            </h1>
            <p className="text-xs sm:text-sm text-zinc-400 mt-2 max-w-2xl">
              World-renowned iconic architectural hotels, penthouses, and palatial beachfront suites in Dubai.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {hotelList.map((item) => (
            <div
              key={item.id}
              className="p-6 sm:p-8 bg-[#0c0c0e] rounded-3xl border border-white/10 hover:border-accent/40 transition-all duration-300 flex flex-col justify-between space-y-6 group shadow-2xl"
            >
              <div className="space-y-5">
                <div className="relative aspect-[16/9] rounded-2xl overflow-hidden bg-white/[0.02]">
                  <Image
                    src={hotelImages[item.id] || 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=800&q=80'}
                    alt={item.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 rounded-full text-[10px] font-mono font-semibold bg-black/80 backdrop-blur-md text-white border border-white/10 shadow-lg">
                      5-Star Deluxe Licensed
                    </span>
                  </div>
                </div>

                <div className="flex items-start justify-between gap-3">
                  <div>
                    <h3 className="text-xl font-semibold text-white tracking-tight">{item.title}</h3>
                    <p className="text-xs text-zinc-400 flex items-center gap-1.5 mt-1 font-mono">
                      <MapPin className="h-3.5 w-3.5 text-accent shrink-0" />
                      <span className="truncate">{item.location}</span>
                    </p>
                  </div>
                  <SourceBadge provenance={item.provenance} showDetailButton={false} />
                </div>

                <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed">
                  {item.description}
                </p>

                {item.specs && (
                  <div className="p-4 bg-white/[0.02] rounded-2xl border border-white/10 text-xs space-y-2 font-mono">
                    {Object.entries(item.specs).map(([k, v]) => (
                      <div key={k} className="flex justify-between">
                        <span className="text-zinc-400">{k}:</span>
                        <span className="font-medium text-white text-right max-w-[240px]">{v}</span>
                      </div>
                    ))}
                  </div>
                )}

                <div className="pt-2">
                  <span className="text-[10px] font-mono uppercase tracking-widest text-zinc-400 block mb-1">Published Room Tariffs</span>
                  <span className="text-base font-semibold text-accent font-mono">{item.price_display}</span>
                </div>
              </div>

              {item.official_url && (
                <div className="pt-4 border-t border-white/10">
                  <a
                    href={item.official_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-3 px-4 rounded-xl border border-white/10 bg-white/[0.03] hover:bg-white hover:text-black text-xs font-semibold text-center transition-all flex items-center justify-center gap-2 cursor-pointer text-zinc-300"
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
