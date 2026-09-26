'use client'

import * as React from 'react'
import Link from 'next/link'
import { SourceBadge } from '@/components/ui/source-badge'
import { PageIntro } from '@/components/layout/layout-primitives'
import { ArrowLeft } from 'lucide-react'

export default function ConciergePage() {
  return (
    <div className="bg-white text-[#1d1d1f] min-h-screen pb-24 selection:bg-accent/20 selection:text-[#1d1d1f]">
      {/* 1. CENTERED PAGE INTRO */}
      <PageIntro
        eyebrow="Private Client Protocol Desk"
        badge={<SourceBadge status="OFFICIAL SOURCE" sourceName="Cristian Văduva Private Client Desk" />}
        title={<>Private Concierge<span className="text-gradient-gold">.</span></>}
        description="Lifestyle management, private dining reservations, luxury asset curation, and confidential executive coordination across Dubai."
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
        {/* Concierge Showcase Card */}
        <div className="p-8 sm:p-12 rounded-3xl border border-black/10 bg-white flex flex-col lg:flex-row items-center justify-between gap-10 shadow-sm">
          <div className="space-y-6 max-w-xl">
            <span className="text-[10px] font-mono font-bold text-accent uppercase tracking-widest">
              PRIVATE CLIENT SERVICES
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#1d1d1f] tracking-tight">
              Advisory & Lifestyle Execution
            </h2>
            <p className="text-xs sm:text-sm text-[#6e6e73] leading-relaxed">
              Our private desk assists with arrangements for international clients acquiring Dubai real estate, including private aviation ground handling, superyacht moorings, reservation coordination at Michelin establishments, and family relocation support.
            </p>
            <div className="grid grid-cols-2 gap-3 pt-2 text-xs font-mono">
              <div className="p-4 bg-[#f5f5f7] rounded-2xl border border-black/5">
                <span className="font-semibold text-[#1d1d1f] block">Private Aviation FBO</span>
                <span className="text-[#6e6e73] text-[11px] font-sans">Tarmac meet & greet</span>
              </div>
              <div className="p-4 bg-[#f5f5f7] rounded-2xl border border-black/5">
                <span className="font-semibold text-[#1d1d1f] block">Michelin Dining</span>
                <span className="text-[#6e6e73] text-[11px] font-sans">Direct table reservations</span>
              </div>
              <div className="p-4 bg-[#f5f5f7] rounded-2xl border border-black/5">
                <span className="font-semibold text-[#1d1d1f] block">Superyacht Berths</span>
                <span className="text-[#6e6e73] text-[11px] font-sans">Dubai Harbour & Marina</span>
              </div>
              <div className="p-4 bg-[#f5f5f7] rounded-2xl border border-black/5">
                <span className="font-semibold text-[#1d1d1f] block">Investor Visa Filing</span>
                <span className="text-[#6e6e73] text-[11px] font-sans">DLD Cube investor track</span>
              </div>
            </div>
          </div>

          <div className="w-full lg:w-96 p-8 bg-[#f5f5f7] rounded-3xl border border-black/5 shadow-sm space-y-5 shrink-0 text-center">
            <h3 className="text-base font-bold text-[#1d1d1f] tracking-tight">
              Request Private Concierge Consultation
            </h3>
            <p className="text-xs text-[#6e6e73] max-w-xs mx-auto leading-relaxed">
              Available for registered private clients and prospective investors.
            </p>
            <Link
              href="/private-client"
              className="block w-full py-3.5 px-6 rounded-full bg-[#1d1d1f] hover:bg-black text-white text-xs font-semibold uppercase tracking-wider transition-all shadow-sm hover:shadow-md cursor-pointer"
            >
              Access Private Client Intake
            </Link>
          </div>
        </div>
      </main>
    </div>
  )
}
