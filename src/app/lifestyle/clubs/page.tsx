'use client'

import * as React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { VERIFIED_LIFESTYLE } from '@/lib/data/lifestyle'
import { SourceBadge } from '@/components/ui/source-badge'
import { PageIntro } from '@/components/layout/layout-primitives'
import { ArrowLeft, ExternalLink, MapPin, Users } from 'lucide-react'

export default function PrivateClubsPage() {
  const clubsList = VERIFIED_LIFESTYLE.filter((l) => l.category === 'clubs')

  return (
    <div className="bg-white text-[#1d1d1f] min-h-screen pb-24 selection:bg-accent/20 selection:text-[#1d1d1f]">
      {/* 1. CENTERED PAGE INTRO */}
      <PageIntro
        eyebrow="DIFC & DET Registered Private Members Clubs"
        badge={<SourceBadge status="LICENSED OPERATOR" sourceName="DIFC Commercial Register" />}
        title={<>Private Member Clubs & Networking<span className="text-gradient-gold">.</span></>}
        description="Exclusive international private members clubs, sovereign wealth networking hubs, and bespoke cultural salons across Dubai."
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
          {clubsList.map((item) => (
            <div
              key={item.id}
              className="p-6 sm:p-7 bg-white rounded-3xl border border-black/10 hover:border-black/20 hover:shadow-xl transition-all duration-300 flex flex-col justify-between space-y-6 group shadow-sm"
            >
              <div className="space-y-5">
                <div className="relative aspect-[16/10] rounded-2xl overflow-hidden bg-[#f5f5f7]">
                  <Image
                    src={item.image || 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1200&q=80'}
                    alt={item.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 rounded-full text-[10px] font-mono font-bold bg-white/90 backdrop-blur-md text-[#1d1d1f] border border-black/10 shadow-sm flex items-center gap-1">
                      <Users className="h-3 w-3 text-accent" />
                      Private Members Club
                    </span>
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-extrabold text-[#1d1d1f] tracking-tight">{item.title}</h3>
                  <p className="text-xs text-[#6e6e73] mt-1 font-mono flex items-center gap-1.5">
                    <MapPin className="h-3.5 w-3.5 text-accent shrink-0" />
                    <span className="truncate">{item.location}</span>
                  </p>
                </div>

                <p className="text-xs sm:text-sm text-[#6e6e73] leading-relaxed">
                  {item.description}
                </p>

                {item.specs && (
                  <div className="p-4 bg-[#f5f5f7] rounded-2xl border border-black/5 text-xs space-y-1.5 font-mono">
                    {Object.entries(item.specs).map(([key, val]) => (
                      <div key={key} className="flex justify-between text-[11px]">
                        <span className="text-[#6e6e73]">{key}:</span>
                        <span className="text-[#1d1d1f] font-semibold text-right">{val}</span>
                      </div>
                    ))}
                  </div>
                )}

                <div className="p-4 bg-[#f5f5f7] rounded-2xl border border-black/5 text-xs space-y-1.5 font-mono">
                  <span className="text-[10px] uppercase tracking-widest text-[#6e6e73] font-semibold block">Membership Protocol</span>
                  <span className="font-bold text-accent block">
                    {item.price_display}
                  </span>
                </div>
              </div>

              <div className="pt-4 border-t border-black/10 flex items-center justify-between gap-3">
                {item.official_url && (
                  <a
                    href={item.official_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs text-[#6e6e73] hover:text-[#1d1d1f] flex items-center gap-1 font-mono transition-colors"
                  >
                    <span>Official Portal</span>
                    <ExternalLink className="h-3 w-3" />
                  </a>
                )}
                <Link
                  href="/private-client"
                  className="px-5 py-2.5 rounded-full bg-[#1d1d1f] text-white hover:bg-black text-xs font-semibold transition-all shadow-sm hover:shadow-md ml-auto"
                >
                  <span>Request Introduction</span>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  )
}
