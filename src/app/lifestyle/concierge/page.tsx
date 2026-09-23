'use client'

import * as React from 'react'
import Link from 'next/link'
import { SourceBadge } from '@/components/ui/source-badge'
import { ArrowLeft } from 'lucide-react'

export default function ConciergePage() {
  return (
    <div className="bg-white text-text-primary min-h-screen pb-24">
      {/* 1. TOP BREADCRUMB */}
      <div className="border-b border-border bg-surface-subtle py-4">
        <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            href="/lifestyle"
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-text-secondary hover:text-text-primary transition-colors"
          >
            <ArrowLeft className="h-4 w-4" />
            <span>Back to Lifestyle Directory</span>
          </Link>
        </div>
      </div>

      <main className="w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 space-y-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-border pb-6">
          <div>
            <div className="flex items-center gap-2">
              <span className="text-[10px] font-bold uppercase tracking-wider text-accent font-mono">
                PRIVATE CLIENT PROTOCOL
              </span>
              <SourceBadge status="OFFICIAL SOURCE" sourceName="Cristian Văduva Private Client Desk" />
            </div>
            <h1 className="text-3xl sm:text-4xl font-extrabold text-text-primary tracking-tight mt-1">
              Private Client Concierge & Protocol
            </h1>
            <p className="text-xs sm:text-sm text-text-secondary mt-1">
              Lifestyle management, private dining reservations, luxury asset curation, and confidential executive coordination.
            </p>
          </div>
        </div>

        {/* Concierge Showcase Card */}
        <div className="p-8 sm:p-10 rounded-3xl border border-border bg-surface flex flex-col lg:flex-row items-center justify-between gap-8">
          <div className="space-y-4 max-w-xl">
            <span className="text-xs font-mono font-bold text-accent uppercase tracking-widest">
              PRIVATE CLIENT SERVICES
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-text-primary">
              Advisory & Lifestyle Execution
            </h2>
            <p className="text-xs sm:text-sm text-text-secondary leading-relaxed">
              Our private desk assists with arrangements for international clients acquiring Dubai real estate, including private aviation ground handling, superyacht moorings, reservation coordination at Michelin establishments, and family relocation support.
            </p>
            <div className="grid grid-cols-2 gap-3 pt-2 text-xs">
              <div className="p-3 bg-white rounded-xl border border-border">
                <span className="font-bold text-text-primary block">Private Aviation FBO</span>
                <span className="text-text-muted">Tarmac meet & greet</span>
              </div>
              <div className="p-3 bg-white rounded-xl border border-border">
                <span className="font-bold text-text-primary block">Michelin Dining</span>
                <span className="text-text-muted">Direct table reservations</span>
              </div>
              <div className="p-3 bg-white rounded-xl border border-border">
                <span className="font-bold text-text-primary block">Superyacht Berths</span>
                <span className="text-text-muted">Dubai Harbour & Marina</span>
              </div>
              <div className="p-3 bg-white rounded-xl border border-border">
                <span className="font-bold text-text-primary block">Investor Visa Filing</span>
                <span className="text-text-muted">DLD Cube investor track</span>
              </div>
            </div>
          </div>

          <div className="w-full lg:w-auto p-6 bg-white rounded-2xl border border-border shadow-sm space-y-4 shrink-0 text-center">
            <h3 className="text-sm font-bold text-text-primary">
              Request Private Concierge Consultation
            </h3>
            <p className="text-xs text-text-muted max-w-xs mx-auto">
              Available for registered private clients and prospective investors.
            </p>
            <Link
              href="/private-client"
              className="block w-full py-3 px-6 rounded-xl bg-text-primary hover:bg-black text-white text-xs font-bold uppercase tracking-wider transition-all shadow-xs"
            >
              Access Private Client Intake
            </Link>
          </div>
        </div>
      </main>
    </div>
  )
}
