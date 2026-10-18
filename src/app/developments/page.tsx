'use client'

import * as React from 'react'
import Link from 'next/link'
import {
  ArrowRight,
  ShieldCheck,
  Sparkles,
} from 'lucide-react'
import {
  PageIntro,
} from '@/components/layout/layout-primitives'
import { SourceBadge } from '@/components/ui/source-badge'
import { ContactModal } from '@/components/layout/contact-modal'

export default function DevelopmentsIndexPage() {
  const [isContactOpen, setIsContactOpen] = React.useState(false)

  return (
    <div className="flex flex-col min-h-screen bg-white text-slate-900 selection:bg-[#0284c7]/10 selection:text-[#0284c7]">
      {/* 1. EDITORIAL PAGE INTRO */}
      <PageIntro
        eyebrow="UAE SIGNATURE MASTER DEVELOPMENTS &bull; ARCHITECTURAL DOSSIER"
        badge={<SourceBadge status="OFFICIAL SOURCE" sourceName="Official Master Releases" />}
        title="Signature Developments."
        description="Curated large-scale residential master communities, branded waterfront enclaves, and prime architectural releases across the United Arab Emirates. Backed by verified developer documentation and statutory escrow governance."
      />

      {/* 2. MAIN CONTENT AREA */}
      <main className="w-full max-w-[1440px] mx-auto px-4 sm:px-10 lg:px-16 py-12 sm:py-16 space-y-16">
        {/* FEATURED DEVELOPMENT: BRABUS ISLAND */}
        <section className="space-y-6">
          <div className="flex items-center justify-between border-b border-slate-200 pb-4">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-[#b89648] animate-pulse" />
              <span className="font-mono text-xs uppercase tracking-[0.16em] text-slate-900 font-semibold">
                Featured Branded Community
              </span>
            </div>
            <span className="font-mono text-xs text-slate-500">
              Abu Dhabi &bull; Al Raha
            </span>
          </div>

          <div className="relative border border-slate-200 bg-white rounded-xs shadow-xs hover:shadow-md transition-all overflow-hidden grid grid-cols-1 lg:grid-cols-12">
            {/* Visual & Architectural Elevation Column */}
            <div className="lg:col-span-5 bg-gradient-to-br from-[#0b1329] via-[#0e1b38] to-[#152347] text-white p-8 sm:p-10 flex flex-col justify-between relative overflow-hidden">
              {/* Subtle architectural grid backdrop */}
              <div
                className="absolute inset-0 opacity-10 pointer-events-none"
                style={{
                  backgroundImage:
                    'radial-gradient(circle at 1px 1px, rgba(255,255,255,0.4) 1px, transparent 0)',
                  backgroundSize: '24px 24px',
                }}
              />

              <div className="relative z-10 space-y-4">
                <div className="flex items-center gap-2">
                  <span className="px-2.5 py-1 bg-[#b89648]/20 border border-[#b89648]/50 text-[#e6ca85] text-[10px] font-mono uppercase tracking-[0.2em] font-semibold rounded-xs">
                    Branded Waterfront Island
                  </span>
                  <span className="px-2 py-1 bg-white/10 text-slate-300 text-[10px] font-mono uppercase tracking-wider rounded-xs">
                    Al Seef District
                  </span>
                </div>

                <div className="space-y-1 pt-2">
                  <h2 className="text-2xl sm:text-4xl font-semibold tracking-tight text-white font-sans">
                    BRABUS ISLAND
                  </h2>
                  <p className="text-xs sm:text-sm font-mono text-[#e6ca85] tracking-wider uppercase">
                    Al Raha &bull; Abu Dhabi, UAE
                  </p>
                </div>

                <p className="text-xs sm:text-sm text-slate-300 font-light leading-relaxed pt-2">
                  Four contemporary residential towers rising 13 floors above the Arabian Gulf, featuring 352 bespoke residences and 96 luxury waterfront villas curated with the high-performance design DNA of Bottrop, Germany.
                </p>
              </div>

              {/* Architectural quick specs */}
              <div className="relative z-10 pt-8 border-t border-white/10 grid grid-cols-2 gap-4 text-xs font-mono">
                <div>
                  <span className="text-[10px] text-slate-400 block uppercase">Project Scale</span>
                  <span className="text-white font-semibold text-sm">4 Towers &bull; 13 Floors</span>
                </div>
                <div>
                  <span className="text-[10px] text-slate-400 block uppercase">Indicative Handover</span>
                  <span className="text-white font-semibold text-sm">Q1 2029 (Indicative)</span>
                </div>
              </div>
            </div>

            {/* Editorial Content & Data Breakdown Column */}
            <div className="lg:col-span-7 p-6 sm:p-10 flex flex-col justify-between space-y-8 bg-slate-50/40">
              <div className="space-y-6">
                <div className="space-y-2">
                  <span className="text-[10px] font-mono uppercase tracking-[0.18em] text-[#0284c7] font-semibold block">
                    Master Concept &bull; Reportage Properties &amp; BRABUS GmbH
                  </span>
                  <h3 className="text-lg sm:text-xl font-semibold text-slate-900 font-sans">
                    Uncompromising Waterfront Architecture for the Arabian Gulf
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 font-light leading-relaxed">
                    Positioned along the eastern coastline of Al Raha Beach in Abu Dhabi, BRABUS ISLAND introduces a bespoke living experience characterized by bold geometric silhouettes, full-height maritime glazing, and modular interior concepts (Black &amp; Bold, White Bliss, Gray Haven).
                  </p>
                </div>

                {/* Key Metrics Grid */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2">
                  <div className="p-3 bg-white border border-slate-200 rounded-xs space-y-1">
                    <span className="text-[10px] font-mono text-slate-400 uppercase block">Total Residences</span>
                    <span className="text-lg font-semibold text-slate-950 font-sans">352 Units</span>
                    <span className="text-[10px] font-mono text-slate-500 block">2BR, 3BR, 4BR</span>
                  </div>

                  <div className="p-3 bg-white border border-slate-200 rounded-xs space-y-1">
                    <span className="text-[10px] font-mono text-slate-400 uppercase block">Waterfront Villas</span>
                    <span className="text-lg font-semibold text-slate-950 font-sans">96 Villas</span>
                    <span className="text-[10px] font-mono text-slate-500 block">Private Coastal</span>
                  </div>

                  <div className="p-3 bg-white border border-slate-200 rounded-xs space-y-1">
                    <span className="text-[10px] font-mono text-slate-400 uppercase block">Investor Inventory</span>
                    <span className="text-lg font-semibold text-[#0284c7] font-sans">21 Units</span>
                    <span className="text-[10px] font-mono text-slate-500 block">Towers A, B &amp; C</span>
                  </div>

                  <div className="p-3 bg-white border border-slate-200 rounded-xs space-y-1">
                    <span className="text-[10px] font-mono text-slate-400 uppercase block">Entry Investor Price</span>
                    <span className="text-lg font-semibold text-slate-950 font-sans">AED 2.47M</span>
                    <span className="text-[10px] font-mono text-slate-500 block">Residence A-105</span>
                  </div>
                </div>

                {/* Statutory & Disclosure Notice */}
                <div className="p-3.5 bg-white border border-slate-200/80 rounded-xs flex items-start gap-2.5 text-xs text-slate-600">
                  <ShieldCheck className="h-4 w-4 text-[#0284c7] shrink-0 mt-0.5" />
                  <p className="text-[11px] leading-relaxed">
                    <strong>Investor Allocation:</strong> Current pricing and availability are based on the supplied official investor schedule. Subject to developer confirmation, payment window (1–3 months), and verified allocation.
                  </p>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-4 border-t border-slate-200">
                <Link
                  href="/developments/brabus-island"
                  className="px-6 py-3 bg-slate-950 hover:bg-slate-800 text-white rounded-xs text-xs font-mono uppercase tracking-[0.14em] font-semibold transition-colors flex items-center justify-center gap-2 shadow-xs group"
                >
                  <span>Explore BRABUS ISLAND Dossier</span>
                  <ArrowRight className="h-3.5 w-3.5 group-hover:translate-x-0.5 transition-transform" />
                </Link>

                <button
                  type="button"
                  onClick={() => setIsContactOpen(true)}
                  className="px-5 py-3 border border-slate-300 hover:border-slate-900 text-slate-800 hover:text-slate-950 rounded-xs text-xs font-mono uppercase tracking-[0.14em] font-semibold transition-colors cursor-pointer text-center"
                >
                  Request Master Brochure
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* REUSABLE FUTURE DEVELOPMENTS SECTION */}
        <section className="space-y-6 pt-6">
          <div className="border-b border-slate-200 pb-3">
            <span className="font-mono text-xs uppercase tracking-[0.16em] text-slate-500 font-semibold block">
              UAE Signature Developments Pipeline
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Active Card: BRABUS ISLAND */}
            <div className="p-6 border border-slate-200 bg-white rounded-xs space-y-4 hover:border-slate-400 transition-colors">
              <div className="flex items-center justify-between">
                <span className="font-mono text-[10px] uppercase text-[#b89648] font-bold tracking-wider">
                  Abu Dhabi &bull; Active
                </span>
                <span className="text-[10px] font-mono bg-sky-50 text-[#0284c7] px-2 py-0.5 rounded-xs font-semibold">
                  21 Investor Units
                </span>
              </div>
              <div className="space-y-1">
                <h4 className="text-lg font-semibold text-slate-950 font-sans">
                  BRABUS ISLAND
                </h4>
                <p className="text-xs text-slate-600 line-clamp-2 font-light">
                  Al Seef District, Al Raha Beach. Four towers, 352 bespoke residences, and 96 waterfront villas.
                </p>
              </div>
              <div className="pt-2 border-t border-slate-100 flex items-center justify-between">
                <span className="text-xs font-mono text-slate-500">From AED 2,470,561</span>
                <Link
                  href="/developments/brabus-island"
                  className="text-xs font-mono text-[#0284c7] hover:underline flex items-center gap-1 font-semibold"
                >
                  <span>View Project</span>
                  <ArrowRight className="h-3 w-3" />
                </Link>
              </div>
            </div>

            {/* Subtle Editorial Pipeline Notice (Requirement 6: No fake second project) */}
            <div className="p-6 border border-dashed border-slate-300 bg-slate-50/50 rounded-xs space-y-3 flex flex-col justify-center">
              <div className="flex items-center gap-2 text-slate-400">
                <Sparkles className="h-4 w-4 text-[#0284c7]" />
                <span className="font-mono text-[10px] uppercase tracking-wider font-semibold text-slate-500">
                  Pipeline &bull; Under Review
                </span>
              </div>
              <h4 className="text-sm font-semibold text-slate-900 font-sans">
                More Master Developments Coming Soon
              </h4>
              <p className="text-xs text-slate-500 font-light leading-relaxed">
                Future sovereign master communities, luxury branded towers, and private island releases are undergoing our statutory escrow and developer verification protocols before public indexing.
              </p>
            </div>
          </div>
        </section>
      </main>

      {/* Global Inquiries Modal */}
      <ContactModal
        isOpen={isContactOpen}
        onClose={() => setIsContactOpen(false)}
        initialInterest="PROPERTY"
        initialMessage="Project: BRABUS ISLAND, Al Raha, Abu Dhabi. I am requesting official master project documentation, investor price schedule, and current developer availability."
        initialBudget="AED 2,500,000+"
        title="Inquire: Signature Developments"
        eyebrow="UAE Master Developments Desk"
      />
    </div>
  )
}
