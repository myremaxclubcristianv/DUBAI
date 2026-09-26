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
    <div className="bg-black text-white min-h-screen pb-24 selection:bg-accent/30 selection:text-white">
      {/* 1. CENTERED PAGE INTRO */}
      <PageIntro
        eyebrow="DIFC & DET Registered Private Members Clubs"
        badge={<SourceBadge status="LICENSED OPERATOR" sourceName="DIFC Commercial Register" />}
        title="PRIVATE MEMBER CLUBS & NETWORKING"
        description="Exclusive international private members clubs, sovereign wealth networking hubs, and bespoke cultural salons across Dubai."
      />

      <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-4">
        <Link
          href="/lifestyle"
          className="inline-flex items-center gap-2 text-xs font-medium text-zinc-400 hover:text-white transition-colors"
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
              className="p-6 sm:p-7 bg-[#0c0c0e] rounded-3xl border border-white/10 hover:border-accent/40 transition-all duration-300 flex flex-col justify-between space-y-6 group shadow-2xl"
            >
              <div className="space-y-5">
                <div className="relative aspect-[16/10] rounded-2xl overflow-hidden bg-white/[0.02]">
                  <Image
                    src={item.image || 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1200&q=80'}
                    alt={item.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 rounded-full text-[10px] font-mono font-semibold bg-black/80 backdrop-blur-md text-white border border-white/10 shadow-lg flex items-center gap-1">
                      <Users className="h-3 w-3 text-gold" />
                      Private Members Club
                    </span>
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-white tracking-tight">{item.title}</h3>
                  <p className="text-xs text-zinc-400 mt-1 font-mono flex items-center gap-1.5">
                    <MapPin className="h-3.5 w-3.5 text-accent shrink-0" />
                    <span className="truncate">{item.location}</span>
                  </p>
                </div>

                <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed">
                  {item.description}
                </p>

                {item.specs && (
                  <div className="p-4 bg-white/[0.02] rounded-2xl border border-white/10 text-xs space-y-1.5 font-mono">
                    {Object.entries(item.specs).map(([key, val]) => (
                      <div key={key} className="flex justify-between text-[11px]">
                        <span className="text-zinc-500">{key}:</span>
                        <span className="text-zinc-300 font-semibold text-right">{val}</span>
                      </div>
                    ))}
                  </div>
                )}

                <div className="p-4 bg-white/[0.02] rounded-2xl border border-white/10 text-xs space-y-1.5 font-mono">
                  <span className="text-[10px] uppercase tracking-widest text-zinc-400 block">Membership Protocol</span>
                  <span className="font-semibold text-accent block">
                    {item.price_display}
                  </span>
                </div>
              </div>

              <div className="pt-4 border-t border-white/10 flex items-center justify-between gap-3">
                {item.official_url && (
                  <a
                    href={item.official_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs text-zinc-400 hover:text-white flex items-center gap-1 font-mono transition-colors"
                  >
                    <span>Official Portal</span>
                    <ExternalLink className="h-3 w-3" />
                  </a>
                )}
                <Link
                  href="/private-client"
                  className="px-4 py-2.5 rounded-xl bg-white text-black hover:bg-zinc-200 text-xs font-semibold transition-all shadow-md ml-auto"
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
