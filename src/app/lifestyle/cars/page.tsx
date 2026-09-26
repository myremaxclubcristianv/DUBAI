'use client'

import * as React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { SourceBadge } from '@/components/ui/source-badge'
import { PageIntro } from '@/components/layout/layout-primitives'
import { ArrowLeft } from 'lucide-react'

export default function LuxuryCarsPage() {
  return (
    <div className="bg-black text-white min-h-screen pb-24">
      {/* 1. CENTERED PAGE INTRO */}
      <PageIntro
        eyebrow="RTA Licensed Luxury Fleets"
        badge={<SourceBadge status="LICENSED OPERATOR" sourceName="RTA Commercial Register" />}
        title="EXOTIC SUPERCARS & MOBILITY"
        description="RTA-licensed luxury exotic fleet management, airport VIP transfers, and armored security escort protocols across Dubai."
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
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {/* Card 1: Supercars */}
          <div className="p-6 sm:p-8 bg-[#0c0c0e] rounded-3xl border border-white/10 hover:border-accent/40 transition-all duration-300 flex flex-col justify-between space-y-6 group shadow-2xl">
            <div className="space-y-5">
              <div className="relative aspect-[16/9] rounded-2xl overflow-hidden bg-white/[0.02]">
                <Image
                  src="https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1200&q=80"
                  alt="Supercar Marque Fleet"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 rounded-full text-[10px] font-mono font-semibold bg-black/80 backdrop-blur-md text-white border border-white/10 shadow-lg">
                    RTA Licensed Luxury Fleet
                  </span>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-white tracking-tight">Supercar & Exotic Marque Fleet</h3>
                <p className="text-xs text-zinc-400 mt-1 font-mono">
                  Ferrari, Lamborghini, Rolls-Royce, Bentley, Porsche
                </p>
              </div>

              <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed">
                Direct access to authenticated exotic marques with full comprehensive insurance, bespoke door-to-door delivery across Dubai, and private track access options.
              </p>

              <div className="p-4 bg-white/[0.02] rounded-2xl border border-white/10 text-xs space-y-1.5 font-mono">
                <span className="text-[10px] uppercase tracking-widest text-zinc-400 block">Tariff Structure</span>
                <span className="font-semibold text-accent block">
                  PRICE ON REQUEST (Daily / Weekly Rates via Licensed Partner Desk)
                </span>
              </div>
            </div>

            <div className="pt-4 border-t border-white/10">
              <Link
                href="/private-client"
                className="w-full py-3 px-4 rounded-xl border border-white/10 bg-white/[0.03] hover:bg-white hover:text-black text-xs font-semibold text-center transition-all flex items-center justify-center gap-2 cursor-pointer text-zinc-300"
              >
                <span>Request Fleet Manifest via Private Desk</span>
              </Link>
            </div>
          </div>

          {/* Card 2: Executive Chauffeur */}
          <div className="p-6 sm:p-8 bg-[#0c0c0e] rounded-3xl border border-white/10 hover:border-accent/40 transition-all duration-300 flex flex-col justify-between space-y-6 group shadow-2xl">
            <div className="space-y-5">
              <div className="relative aspect-[16/9] rounded-2xl overflow-hidden bg-white/[0.02]">
                <Image
                  src="https://images.unsplash.com/photo-1549399542-7e3f8b79c341?auto=format&fit=crop&w=1200&q=80"
                  alt="Executive Chauffeur"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 rounded-full text-[10px] font-mono font-semibold bg-black/80 backdrop-blur-md text-white border border-white/10 shadow-lg">
                    RTA Certified Chauffeur
                  </span>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-white tracking-tight">VIP Chauffeur & Executive Protection</h3>
                <p className="text-xs text-zinc-400 mt-1 font-mono">
                  Mercedes-Maybach, Cadillac Escalade ESV, Range Rover Autobiography
                </p>
              </div>

              <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed">
                Professional RTA-certified multi-lingual drivers with airport tarmac meet-and-greet protocol and continuous private inter-emirate executive mobility.
              </p>

              <div className="p-4 bg-white/[0.02] rounded-2xl border border-white/10 text-xs space-y-1.5 font-mono">
                <span className="text-[10px] uppercase tracking-widest text-zinc-400 block">Tariff Structure</span>
                <span className="font-semibold text-accent block">
                  PRICE ON REQUEST (Hourly / Daily Retainers)
                </span>
              </div>
            </div>

            <div className="pt-4 border-t border-white/10">
              <Link
                href="/private-client"
                className="w-full py-3 px-4 rounded-xl border border-white/10 bg-white/[0.03] hover:bg-white hover:text-black text-xs font-semibold text-center transition-all flex items-center justify-center gap-2 cursor-pointer text-zinc-300"
              >
                <span>Book Chauffeur Protocol via Private Desk</span>
              </Link>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}