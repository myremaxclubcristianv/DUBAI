'use client'

import * as React from 'react'
import Link from 'next/link'
import { SourceBadge } from '@/components/ui/source-badge'
import { PageIntro, Eyebrow } from '@/components/layout/layout-primitives'
import { ArrowLeft, Key } from 'lucide-react'

export default function ConciergePage() {
  return (
    <div className="bg-white text-slate-900 min-h-screen pb-24">
      {/* 1. EDITORIAL PAGE INTRO */}
      <PageIntro
        eyebrow="Private Client Protocol Desk"
        badge={<SourceBadge status="OFFICIAL SOURCE" sourceName="Cristian Văduva Private Client Desk" />}
        title={<>Private Concierge<span className="text-[#0284c7]">.</span></>}
        description="Lifestyle management, private dining reservations, luxury asset curation, and confidential executive coordination across Dubai."
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
        {/* Concierge Showcase Card */}
        <div className="p-8 sm:p-12 rounded-xs border border-slate-200 bg-white flex flex-col lg:flex-row items-center justify-between gap-10 shadow-xs">
          <div className="space-y-6 max-w-2xl">
            <Eyebrow>PRIVATE CLIENT SERVICES</Eyebrow>
            <h2 className="text-2xl sm:text-4xl font-light text-slate-900 tracking-tight font-serif">
              Advisory &amp; Lifestyle Execution
            </h2>
            <p className="text-sm text-slate-600 font-light leading-relaxed">
              Our private desk assists with arrangements for international clients acquiring Dubai real estate, including private aviation ground handling, superyacht moorings, reservation coordination at Michelin establishments, and family relocation support.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2 text-xs font-mono">
              <div className="p-4 bg-slate-50 rounded-xs border border-slate-200">
                <span className="font-semibold text-[#0284c7] block">Private Aviation FBO</span>
                <span className="text-slate-500 text-[11px] font-sans">Tarmac meet &amp; greet protocols</span>
              </div>
              <div className="p-4 bg-slate-50 rounded-xs border border-slate-200">
                <span className="font-semibold text-[#0284c7] block">Michelin Dining</span>
                <span className="text-slate-500 text-[11px] font-sans">Direct table reservations</span>
              </div>
              <div className="p-4 bg-slate-50 rounded-xs border border-slate-200">
                <span className="font-semibold text-[#0284c7] block">Superyacht Berths</span>
                <span className="text-slate-500 text-[11px] font-sans">Dubai Harbour &amp; Marina</span>
              </div>
              <div className="p-4 bg-slate-50 rounded-xs border border-slate-200">
                <span className="font-semibold text-[#0284c7] block">Investor Visa Filing</span>
                <span className="text-slate-500 text-[11px] font-sans">DLD Cube investor track</span>
              </div>
            </div>
          </div>

          <div className="w-full lg:w-96 p-8 bg-[#f0f7ff] rounded-xs border border-sky-100 space-y-5 shrink-0 text-center shadow-sm">
            <div className="w-10 h-10 rounded-full bg-white border border-sky-200 flex items-center justify-center mx-auto text-[#0284c7]">
              <Key className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-light text-slate-900 tracking-tight font-serif">
              Request Private Concierge Consultation
            </h3>
            <p className="text-xs text-slate-600 max-w-xs mx-auto leading-relaxed font-light">
              Available for registered private clients and prospective investors.
            </p>
            <Link
              href="/private-client"
              className="block w-full py-3 px-6 rounded-xs bg-[#0284c7] hover:bg-[#0369a1] text-white text-xs font-mono uppercase tracking-wider font-semibold transition-all cursor-pointer shadow-xs"
            >
              Access Private Client Intake
            </Link>
          </div>
        </div>
      </main>
    </div>
  )
}
