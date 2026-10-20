import Link from 'next/link'
import { ArrowUpRight, ShieldCheck, MapPin, Calculator, UserCheck } from 'lucide-react'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'About the Platform | Dubai Real Estate & Investment Intelligence',
  description: 'Independent Dubai real estate intelligence, statutory investment underwriting, and private client advisory with complete data provenance.',
}

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen bg-white text-slate-900">
      {/* 1. HERO HEADER */}
      <section className="pt-16 pb-14 sm:pt-24 sm:pb-20 border-b border-slate-200 bg-gradient-to-b from-[#f0f7ff] to-white">
        <div className="w-full max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-16 space-y-6">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#0284c7]" />
            <span className="font-mono text-xs uppercase tracking-widest text-[#0369a1] font-semibold">
              ABOUT THE PLATFORM &bull; INDEPENDENT ADVISORY &bull; DATA PROVENANCE
            </span>
          </div>

          <div className="space-y-4 max-w-4xl">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-serif text-slate-950 tracking-tight leading-tight">
              Dubai Real Estate &amp; Investment Intelligence
            </h1>
            <p className="text-base sm:text-lg text-slate-700 font-light leading-relaxed">
              An institutional-grade real estate research and private client advisory platform founded by Cristian Văduva. 
              Engineered with radical data provenance, zero speculative data, and deterministic mathematical underwriting 
              anchored in official UAE statutory decrees.
            </p>
          </div>

          {/* Quick Metrics */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-6 border-t border-slate-200">
            <div className="p-4 bg-white border border-slate-200">
              <span className="block font-mono text-xs uppercase tracking-wider text-slate-500">Dubai Inventory</span>
              <span className="text-2xl font-serif text-slate-950 font-bold mt-1 block">20 Verified</span>
              <span className="text-[11px] text-slate-500 font-mono mt-0.5 block">100% Physical Dubai Freehold</span>
            </div>
            <div className="p-4 bg-white border border-slate-200">
              <span className="block font-mono text-xs uppercase tracking-wider text-slate-500">Romania Syndicate</span>
              <span className="text-2xl font-serif text-slate-950 font-bold mt-1 block">55 Verified</span>
              <span className="text-[11px] text-slate-500 font-mono mt-0.5 block">Includes 6 Land &amp; Plots</span>
            </div>
            <div className="p-4 bg-white border border-slate-200">
              <span className="block font-mono text-xs uppercase tracking-wider text-slate-500">Calculators Lab</span>
              <span className="text-2xl font-serif text-slate-950 font-bold mt-1 block">9 Engines</span>
              <span className="text-[11px] text-slate-500 font-mono mt-0.5 block">Statutory LTV, DLD &amp; Yields</span>
            </div>
            <div className="p-4 bg-white border border-slate-200">
              <span className="block font-mono text-xs uppercase tracking-wider text-slate-500">Advisory Mandate</span>
              <span className="text-2xl font-serif text-slate-950 font-bold mt-1 block">Direct Desk</span>
              <span className="text-[11px] text-slate-500 font-mono mt-0.5 block">Confidential Principal Desk</span>
            </div>
          </div>
        </div>
      </section>

      {/* 2. CORE ARCHITECTURAL PILLARS */}
      <section className="py-16 sm:py-20 border-b border-slate-200 bg-slate-50/50">
        <div className="w-full max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-16 space-y-12">
          <div className="space-y-2">
            <span className="font-mono text-xs uppercase tracking-widest text-slate-500 font-semibold block">
              FOUNDATIONAL DOCTRINE
            </span>
            <h2 className="text-2xl sm:text-3xl font-serif text-slate-950">
              Four Non-Negotiable Standards of Operation
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Pillar 1 */}
            <div className="p-8 bg-white border border-slate-200 space-y-4 shadow-xs">
              <div className="w-10 h-10 rounded-sm bg-blue-50 border border-blue-200 flex items-center justify-center text-blue-700">
                <ShieldCheck className="h-5 w-5" />
              </div>
              <h3 className="text-lg font-serif font-bold text-slate-950">
                1. Zero Fake Data &amp; Absolute Provenance
              </h3>
              <p className="text-sm text-slate-600 font-light leading-relaxed">
                The platform does not publish speculative prices, invented transaction histories, or artificial listings. 
                Every property record is attributed to official master developer registries, verified DLD freehold titles, 
                or verified HomeFind syndicate listings with complete timestamped provenance.
              </p>
            </div>

            {/* Pillar 2 */}
            <div className="p-8 bg-white border border-slate-200 space-y-4 shadow-xs">
              <div className="w-10 h-10 rounded-sm bg-amber-50 border border-amber-200 flex items-center justify-center text-amber-700">
                <MapPin className="h-5 w-5" />
              </div>
              <h3 className="text-lg font-serif font-bold text-slate-950">
                2. Strict Geographic Isolation
              </h3>
              <p className="text-sm text-slate-600 font-light leading-relaxed">
                Properties published in the Dubai catalog are strictly verified to exist within the physical boundaries of the Emirate of Dubai. 
                Non-Dubai UAE assets (e.g., Al Raha Beach in Abu Dhabi, Mina Al Arab in Ras Al Khaimah) and European holdings (e.g., Spain, Romania) 
                are quarantined or maintained in strictly isolated regional sections.
              </p>
            </div>

            {/* Pillar 3 */}
            <div className="p-8 bg-white border border-slate-200 space-y-4 shadow-xs">
              <div className="w-10 h-10 rounded-sm bg-emerald-50 border border-emerald-200 flex items-center justify-center text-emerald-700">
                <Calculator className="h-5 w-5" />
              </div>
              <h3 className="text-lg font-serif font-bold text-slate-950">
                3. Deterministic Statutory Underwriting
              </h3>
              <p className="text-sm text-slate-600 font-light leading-relaxed">
                Financial modeling across all 9 investment engines adheres precisely to official regulatory frameworks: 
                UAE Central Bank mortgage LTV limits (Notice No. 3871/2023), mandatory Law No. 8/2007 escrow protections, 
                Law No. 7/2006 freehold zones, and Romanian 2026 ANAF statutory thresholds.
              </p>
            </div>

            {/* Pillar 4 */}
            <div className="p-8 bg-white border border-slate-200 space-y-4 shadow-xs">
              <div className="w-10 h-10 rounded-sm bg-purple-50 border border-purple-200 flex items-center justify-center text-purple-700">
                <UserCheck className="h-5 w-5" />
              </div>
              <h3 className="text-lg font-serif font-bold text-slate-950">
                4. Private Client Representation
              </h3>
              <p className="text-sm text-slate-600 font-light leading-relaxed">
                For ultra-high-net-worth individuals, institutional investors, and family offices, the platform operates a direct 
                private advisory desk governed by strict non-disclosure covenants, independent conveyancing oversight, and direct principal representation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. PLATFORM SECTIONS & DIRECTORY */}
      <section className="py-16 sm:py-20 border-b border-slate-200 bg-white">
        <div className="w-full max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-16 space-y-10">
          <div className="space-y-2">
            <span className="font-mono text-xs uppercase tracking-widest text-slate-500 font-semibold block">
              PLATFORM SITEMAP
            </span>
            <h2 className="text-2xl sm:text-3xl font-serif text-slate-950">
              Explore Available Services &amp; Catalogs
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <Link
              href="/properties"
              className="p-6 border border-slate-200 hover:border-slate-900 transition-colors group block"
            >
              <span className="font-mono text-[11px] uppercase tracking-wider text-slate-400 block font-semibold">01 &bull; PORTFOLIO</span>
              <h3 className="text-lg font-serif text-slate-950 group-hover:text-blue-600 mt-2 flex items-center justify-between">
                <span>Dubai Properties</span>
                <ArrowUpRight className="h-4 w-4" />
              </h3>
              <p className="text-xs text-slate-600 font-light mt-2 leading-relaxed">
                20 verified Dubai freehold listings including luxury waterfront villas, penthouses, and development plots.
              </p>
            </Link>

            <Link
              href="/romania"
              className="p-6 border border-slate-200 hover:border-slate-900 transition-colors group block"
            >
              <span className="font-mono text-[11px] uppercase tracking-wider text-slate-400 block font-semibold">02 &bull; SYNDICATE</span>
              <h3 className="text-lg font-serif text-slate-950 group-hover:text-blue-600 mt-2 flex items-center justify-between">
                <span>Romania Catalog</span>
                <ArrowUpRight className="h-4 w-4" />
              </h3>
              <p className="text-xs text-slate-600 font-light mt-2 leading-relaxed">
                55 authentic listings across Bucharest, Pipera, Coast, Mountains, and 6 verified land &amp; development plots.
              </p>
            </Link>

            <Link
              href="/investment/calculators"
              className="p-6 border border-slate-200 hover:border-slate-900 transition-colors group block"
            >
              <span className="font-mono text-[11px] uppercase tracking-wider text-slate-400 block font-semibold">03 &bull; UNDERWRITING</span>
              <h3 className="text-lg font-serif text-slate-950 group-hover:text-blue-600 mt-2 flex items-center justify-between">
                <span>Calculators Lab</span>
                <ArrowUpRight className="h-4 w-4" />
              </h3>
              <p className="text-xs text-slate-600 font-light mt-2 leading-relaxed">
                9 interactive financial modeling engines covering mortgage LTV, rental yields, off-plan payment plans, and taxes.
              </p>
            </Link>

            <Link
              href="/residency"
              className="p-6 border border-slate-200 hover:border-slate-900 transition-colors group block"
            >
              <span className="font-mono text-[11px] uppercase tracking-wider text-slate-400 block font-semibold">04 &bull; SOVEREIGN</span>
              <h3 className="text-lg font-serif text-slate-950 group-hover:text-blue-600 mt-2 flex items-center justify-between">
                <span>10-Year Golden Visa</span>
                <ArrowUpRight className="h-4 w-4" />
              </h3>
              <p className="text-xs text-slate-600 font-light mt-2 leading-relaxed">
                Comprehensive statutory roadmap for UAE property-backed residency under Federal Decree Law No. 29 of 2021.
              </p>
            </Link>

            <Link
              href="/developers"
              className="p-6 border border-slate-200 hover:border-slate-900 transition-colors group block"
            >
              <span className="font-mono text-[11px] uppercase tracking-wider text-slate-400 block font-semibold">05 &bull; REGISTRY</span>
              <h3 className="text-lg font-serif text-slate-950 group-hover:text-blue-600 mt-2 flex items-center justify-between">
                <span>Master Developers</span>
                <ArrowUpRight className="h-4 w-4" />
              </h3>
              <p className="text-xs text-slate-600 font-light mt-2 leading-relaxed">
                Official directory of DLD-registered master developers including Emaar, Nakheel, Omniyat, Meraas, and Sobha.
              </p>
            </Link>

            <Link
              href="/sources"
              className="p-6 border border-slate-200 hover:border-slate-900 transition-colors group block"
            >
              <span className="font-mono text-[11px] uppercase tracking-wider text-slate-400 block font-semibold">06 &bull; PROVENANCE</span>
              <h3 className="text-lg font-serif text-slate-950 group-hover:text-blue-600 mt-2 flex items-center justify-between">
                <span>Sources &amp; Methodology</span>
                <ArrowUpRight className="h-4 w-4" />
              </h3>
              <p className="text-xs text-slate-600 font-light mt-2 leading-relaxed">
                Exhaustive provenance ledger detailing official government decrees, regulatory bodies, and verification rules.
              </p>
            </Link>
          </div>
        </div>
      </section>

      {/* 4. CONTACT & ADVISORY DESK CTA */}
      <section className="py-16 sm:py-20 bg-slate-950 text-white">
        <div className="w-full max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-16 text-center space-y-6">
          <span className="font-mono text-xs uppercase tracking-[0.2em] text-slate-400 font-semibold block">
            CONFIDENTIAL CLIENT DESK
          </span>
          <h2 className="text-3xl sm:text-4xl font-serif text-white max-w-2xl mx-auto">
            Direct Principal Advisory &amp; Portfolio Intake
          </h2>
          <p className="text-sm sm:text-base text-slate-300 font-light max-w-xl mx-auto leading-relaxed">
            For bespoke acquisition briefs, off-market opportunities, or private conveyancing consultations, 
            contact the advisory desk directly.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
            <Link
              href="/private-client"
              className="px-6 py-3 bg-white text-slate-950 hover:bg-slate-200 font-mono text-xs uppercase tracking-widest font-bold transition-colors inline-flex items-center gap-2"
            >
              <span>Private Client Desk</span>
              <ArrowUpRight className="h-4 w-4" />
            </Link>
            <a
              href="mailto:cristianvaduva@duck.com"
              className="px-6 py-3 border border-white/30 text-white hover:bg-white/10 font-mono text-xs uppercase tracking-widest transition-colors"
            >
              Email Advisory
            </a>
            <a
              href="https://wa.me/436509536345"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 border border-emerald-500/50 text-emerald-400 hover:bg-emerald-500/10 font-mono text-xs uppercase tracking-widest transition-colors"
            >
              WhatsApp Desk
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
