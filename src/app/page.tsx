'use client'

import * as React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { VERIFIED_PROPERTIES } from '@/lib/data/properties'
import { DUBAI_AREAS } from '@/lib/data/areas'
import { useClient } from '@/lib/context/client-context'
import { ContactModal } from '@/components/layout/contact-modal'
import {
  ArrowRight,
  ShieldCheck,
  Sparkles,
} from 'lucide-react'

export default function Home() {
  const { formatCurrency } = useClient()
  const [isContactModalOpen, setIsContactModalOpen] = React.useState(false)

  // Featured Property from Verified Database
  const featuredProperty = VERIFIED_PROPERTIES[0]

  // Atlas Districts from Verified Data
  const atlasDistricts = DUBAI_AREAS.slice(0, 4)

  return (
    <div className="flex flex-col min-h-screen bg-white text-slate-900 selection:bg-sky-500/20 selection:text-slate-900">
      
      {/* ========================================================================= */}
      {/* 01 — FULL-WIDTH CINEMATIC BURJ KHALIFA HERO (1:1 REFERENCE COMPOSITION)  */}
      {/* ========================================================================= */}
      <section className="relative w-full min-h-[90vh] lg:min-h-[94vh] flex items-center border-b border-slate-200 overflow-hidden bg-slate-900">
        
        {/* Full-Bleed Cinematic Daylight Burj Khalifa Background */}
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=2560&q=95"
            alt="Burj Khalifa and Dubai Architectural Glass Skyline"
            fill
            priority
            sizes="100vw"
            className="object-cover object-center scale-[1.02]"
          />
          {/* Subtle architectural gradient for text readability while keeping daylight Burj Khalifa prominent */}
          <div className="absolute inset-0 bg-gradient-to-r from-white/95 via-white/80 to-transparent lg:from-white/95 lg:via-white/70 lg:to-slate-900/30" />
          <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-white/40 lg:hidden" />
        </div>

        {/* Content Overlay */}
        <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-10 lg:px-16 py-12 sm:py-16 lg:py-24 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-8 items-center justify-between">
            
            {/* Left Column: Editorial Headline & Actions */}
            <div className="lg:col-span-7 space-y-6 sm:space-y-7 max-w-2xl">
              <div className="space-y-3 sm:space-y-4">
                <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-xs bg-white/90 backdrop-blur-md border border-sky-200 text-[#0284c7] text-[10px] sm:text-[11px] font-mono tracking-[0.16em] sm:tracking-[0.22em] uppercase font-semibold shadow-xs">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#0284c7] shrink-0" />
                  <span className="truncate">DUBAI PROPERTY &bull; PRIVATE WEALTH</span>
                </div>
                
                <h1 className="text-[40px] sm:text-[72px] lg:text-[90px] font-light tracking-[-0.04em] leading-[0.95] text-slate-900 font-serif">
                  Dubai,<br />
                  with better<br />
                  <span className="text-[#0284c7] font-serif italic">decisions.</span>
                </h1>
              </div>

              <p className="text-sm sm:text-base lg:text-lg text-slate-700 font-light leading-relaxed max-w-xl">
                Source-led property intelligence, verified market data, and private-client advisory for one of the world&apos;s most dynamic real-estate markets. Sourced directly from published statutory registers and certified developer filings.
              </p>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-3 sm:gap-4 pt-1">
                <Link
                  href="/properties"
                  className="inline-flex items-center gap-2 px-5 sm:px-7 py-3 sm:py-3.5 rounded-xs bg-[#0284c7] hover:bg-[#0369a1] text-white text-xs font-mono uppercase tracking-[0.16em] font-semibold transition-all shadow-md shadow-sky-600/25"
                >
                  <span>EXPLORE PROPERTIES</span>
                  <ArrowRight className="h-4 w-4" />
                </Link>
                <Link
                  href="/market"
                  className="inline-flex items-center gap-1.5 px-4 sm:px-6 py-3 sm:py-3.5 rounded-xs bg-white/90 hover:bg-white text-slate-900 text-xs font-mono uppercase tracking-[0.16em] font-semibold transition-all border border-slate-300 backdrop-blur-md shadow-xs"
                >
                  <span>MARKET INTELLIGENCE</span>
                </Link>
              </div>

              {/* Verified Statutory Footnote */}
              <div className="pt-4 border-t border-slate-300/80 flex flex-wrap items-center gap-2 sm:gap-3 text-[10px] sm:text-[11px] font-mono text-slate-600">
                <div className="flex items-center gap-1.5 text-emerald-800 font-semibold">
                  <ShieldCheck className="h-3.5 w-3.5 text-emerald-600" />
                  <span>DLD Statutory Registry</span>
                </div>
                <span>&bull;</span>
                <span>Law No. 7 (2006)</span>
                <span>&bull;</span>
                <span>Law No. 8 (2007) Escrow</span>
                <span>&bull;</span>
                <span className="text-[#0284c7] font-semibold">100% Foreign Freehold</span>
              </div>
            </div>

            {/* Right Column: Floating White DLD Information Cadran */}
            <div className="lg:col-span-5 flex justify-start lg:justify-end w-full">
              <div className="w-full max-w-md p-4 sm:p-7 bg-white/95 backdrop-blur-md rounded-xs border border-slate-200/90 space-y-3.5 sm:space-y-5 shadow-2xl">
                <div className="flex items-center justify-between border-b border-slate-100 pb-2.5 sm:pb-3">
                  <span className="text-[10px] sm:text-[11px] font-mono uppercase tracking-[0.14em] sm:tracking-[0.2em] text-slate-900 font-bold">
                    DLD MARKET BASELINE 2026
                  </span>
                  <span className="text-[9px] sm:text-[10px] font-mono text-emerald-700 uppercase font-semibold">
                    OFFICIAL UAE PEG
                  </span>
                </div>

                <div className="grid grid-cols-3 gap-1.5 sm:gap-3 font-mono text-xs">
                  <div className="space-y-0.5 sm:space-y-1">
                    <span className="text-lg sm:text-2xl font-bold text-slate-900 block">4%</span>
                    <span className="text-[9px] sm:text-[10px] text-slate-500 uppercase tracking-wider font-semibold block">TRANSFER FEE</span>
                    <span className="text-[8px] sm:text-[9px] text-slate-400 block">Law 7/2006</span>
                  </div>
                  <div className="space-y-0.5 sm:space-y-1">
                    <span className="text-lg sm:text-2xl font-bold text-slate-900 block">AED 4k</span>
                    <span className="text-[9px] sm:text-[10px] text-slate-500 uppercase tracking-wider font-semibold block">REGISTRATION</span>
                    <span className="text-[8px] sm:text-[9px] text-slate-400 block">per deal</span>
                  </div>
                  <div className="space-y-0.5 sm:space-y-1">
                    <span className="text-lg sm:text-2xl font-bold text-[#0284c7] block">3.6725</span>
                    <span className="text-[9px] sm:text-[10px] text-slate-500 uppercase tracking-wider font-semibold block">USD / AED</span>
                    <span className="text-[8px] sm:text-[9px] text-slate-400 block">Official Peg</span>
                  </div>
                </div>

                <div className="pt-2.5 sm:pt-3 border-t border-slate-100 flex items-center justify-between">
                  <Link
                    href="/sources"
                    className="text-[10px] sm:text-[11px] font-mono uppercase tracking-wider text-[#0284c7] hover:text-[#0369a1] font-semibold inline-flex items-center gap-1.5 transition-colors"
                  >
                    <span>VIEW STATUTORY DETAILS</span>
                    <ArrowRight className="h-3 w-3" />
                  </Link>
                  <span className="text-[9px] sm:text-[10px] font-mono text-slate-400 font-medium">DLD &bull; RERA</span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 02 — WHITE EDITORIAL / FEATURED PROPERTY SPREAD (70% / 30% SPREAD)        */}
      {/* ========================================================================= */}
      <section className="py-20 lg:py-28 bg-white border-b border-slate-200">
        <div className="w-full max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            {/* Left 5 Cols: The Big Picture Editorial Statement */}
            <div className="lg:col-span-5 space-y-6">
              <div className="space-y-3">
                <span className="text-[10px] font-mono tracking-[0.24em] uppercase text-[#0284c7] block font-semibold">
                  THE BIG PICTURE
                </span>
                <h2 className="text-3xl sm:text-4xl lg:text-[46px] font-light tracking-[-0.03em] leading-[1.06] text-slate-900 font-serif">
                  Dubai is not one market.<br />
                  <span className="text-slate-500 font-serif italic">It is an archipelago of distinct economic micro-climates.</span>
                </h2>
              </div>

              <p className="text-sm sm:text-base text-slate-600 font-light leading-relaxed">
                From the high-density financial capital of DIFC to the private beachfront enclaves of Palm Jumeirah and the family golf domains of Dubai Hills, every submarket operates under distinct yield curves, foreign ownership tenures, and statutory capital requirements.
              </p>

              <div className="pt-2">
                <Link
                  href="/districts"
                  className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-[0.16em] text-[#0284c7] hover:text-[#0369a1] font-semibold"
                >
                  <span>EXPLORE THE DUBAI ATLAS</span>
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>

            {/* Right 7 Cols: Magazine Featured Property Spread */}
            <div className="lg:col-span-7">
              {featuredProperty && (
                <div className="rounded-xs border border-slate-200 bg-white shadow-xl overflow-hidden group">
                  {/* Large 70% Architectural Property Photograph */}
                  <div className="relative aspect-[16/10] sm:aspect-[16/9] w-full overflow-hidden bg-slate-100">
                    <Image
                      src={featuredProperty.images[0] || 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1600&q=85'}
                      alt={featuredProperty.title}
                      fill
                      priority
                      sizes="(max-width: 1024px) 100vw, 55vw"
                      className="object-cover transition-transform duration-1000 group-hover:scale-105"
                    />
                    
                    <div className="absolute top-4 left-4 flex gap-2">
                      <span className="px-3 py-1 rounded-xs text-[10px] font-mono font-semibold uppercase bg-white/95 backdrop-blur-md text-emerald-700 border border-emerald-200 shadow-xs">
                        DLD VERIFIED
                      </span>
                      <span className="px-3 py-1 rounded-xs text-[10px] font-mono font-semibold uppercase bg-white/95 backdrop-blur-md text-[#0284c7] border border-sky-200 shadow-xs">
                        {featuredProperty.area_name}
                      </span>
                    </div>
                  </div>

                  {/* Attached 30% Architectural Information Panel */}
                  <div className="p-6 sm:p-8 bg-white space-y-5">
                    <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-3">
                      <div>
                        <span className="text-[10px] font-mono uppercase tracking-widest text-slate-400 block font-semibold">
                          {featuredProperty.area_name} &bull; {featuredProperty.property_type}
                        </span>
                        <h3 className="text-2xl sm:text-3xl font-light text-slate-900 group-hover:text-[#0284c7] transition-colors mt-0.5">
                          {featuredProperty.editorial_display_name || featuredProperty.title}
                        </h3>
                      </div>
                      <div className="font-mono text-2xl sm:text-3xl font-bold text-slate-900 tabular-nums">
                        {formatCurrency(featuredProperty.asking_price)}
                      </div>
                    </div>

                    <div className="grid grid-cols-3 gap-4 py-3.5 border-y border-slate-100 font-mono text-xs text-slate-600">
                      <div>
                        <span className="text-[10px] text-slate-400 block uppercase font-semibold">Bedrooms</span>
                        <span className="text-slate-900 font-medium text-sm">{featuredProperty.bedrooms} En-Suite</span>
                      </div>
                      <div>
                        <span className="text-[10px] text-slate-400 block uppercase font-semibold">Bathrooms</span>
                        <span className="text-slate-900 font-medium text-sm">{featuredProperty.bathrooms || 5} Baths</span>
                      </div>
                      <div>
                        <span className="text-[10px] text-slate-400 block uppercase font-semibold">Internal Area</span>
                        <span className="text-slate-900 font-medium text-sm">{featuredProperty.internal_area_sqft.toLocaleString()} sq ft</span>
                      </div>
                    </div>

                    <div className="flex items-center justify-between pt-1">
                      <span className="text-[11px] font-mono text-emerald-700 font-medium flex items-center gap-1.5">
                        <ShieldCheck className="h-3.5 w-3.5" />
                        <span>Law No. 8/2007 Escrow Protected</span>
                      </span>
                      <Link
                        href={`/properties/${featuredProperty.id}`}
                        className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xs bg-[#0284c7] hover:bg-[#0369a1] text-white text-xs font-mono uppercase tracking-[0.14em] font-semibold transition-colors shadow-xs"
                      >
                        <span>VIEW DETAILS</span>
                        <ArrowRight className="h-3.5 w-3.5" />
                      </Link>
                    </div>
                  </div>
                </div>
              )}
            </div>

          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 03 — FULL-WIDTH MARKET DATA STRIP (CONTINUOUS ARCHITECTURAL INSTRUMENT)   */}
      {/* ========================================================================= */}
      <section className="border-b border-slate-200 bg-white py-8">
        <div className="w-full max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-16">
          <div className="grid grid-cols-2 lg:grid-cols-4 divide-y lg:divide-y-0 lg:divide-x divide-slate-200">
            
            <div className="py-4 lg:py-0 lg:px-8 first:pl-0 space-y-1.5">
              <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-slate-500 block font-semibold">
                DUBAI RESIDENTIAL SALES
              </span>
              <div className="text-3xl sm:text-4xl font-light font-mono text-slate-900 tabular-nums font-bold">
                18,642
              </div>
              <span className="text-xs text-slate-500 font-mono block uppercase">TRANSACTIONS</span>
            </div>

            <div className="py-4 lg:py-0 lg:px-8 space-y-1.5">
              <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-slate-500 block font-semibold">
                AVERAGE PRICE / SQFT
              </span>
              <div className="text-3xl sm:text-4xl font-light font-mono text-[#0284c7] tabular-nums font-bold">
                AED 1,680
              </div>
              <span className="text-xs text-slate-500 font-mono block uppercase">AVG / SQFT</span>
            </div>

            <div className="py-4 lg:py-0 lg:px-8 space-y-1.5">
              <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-slate-500 block font-semibold">
                TOTAL TRANSACTION VALUE
              </span>
              <div className="text-3xl sm:text-4xl font-light font-mono text-slate-900 tabular-nums font-bold">
                AED 52.1B
              </div>
              <span className="text-xs text-slate-500 font-mono block uppercase">TRANSACTION VALUE</span>
            </div>

            <div className="py-4 lg:py-0 lg:px-8 last:pr-0 space-y-1.5">
              <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-slate-500 block font-semibold">
                PRIME YIELD
              </span>
              <div className="text-3xl sm:text-4xl font-light font-mono text-emerald-700 tabular-nums font-bold">
                5.8%
              </div>
              <span className="text-xs text-slate-500 font-mono block uppercase">PRIME YIELD</span>
            </div>

          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 04 — BLUE DUBAI ATLAS (LARGE AERIAL BACKDROP & GEOGRAPHIC MODULES)        */}
      {/* ========================================================================= */}
      <section className="relative py-20 lg:py-28 border-b border-slate-200 overflow-hidden bg-slate-900 text-white">
        
        {/* Full-Bleed Aerial Dubai Coastline Background */}
        <div className="absolute inset-0 z-0 opacity-40">
          <Image
            src="https://images.unsplash.com/photo-1580674684081-7617fbf3d745?auto=format&fit=crop&w=2560&q=90"
            alt="Dubai Coastline and Archipelago Atlas"
            fill
            sizes="100vw"
            className="object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/80 to-slate-900/60" />
        </div>

        <div className="w-full max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-16 relative z-10 space-y-12">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 border-b border-white/15">
            <div className="space-y-2">
              <div className="inline-flex items-center gap-2 text-[10px] font-mono tracking-[0.22em] text-[#38bdf8] uppercase font-semibold">
                <span className="w-1.5 h-1.5 rounded-full bg-[#38bdf8]" />
                <span>DUBAI ATLAS &bull; GEOGRAPHIC DOSSIERS</span>
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light tracking-[-0.03em] text-white font-serif">
                Explore the Emirates
              </h2>
              <p className="text-sm text-slate-300 font-light max-w-2xl">
                Geographic dossiers, master developer footprints, and transaction density across Dubai&apos;s core freehold sectors.
              </p>
            </div>

            <Link
              href="/districts"
              className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-[0.16em] text-[#38bdf8] hover:text-white transition-colors font-semibold"
            >
              <span>EXPLORE ALL DISTRICTS</span>
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          {/* District Atlas Modules */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {atlasDistricts.map((district) => (
              <Link
                key={district.id}
                href={`/areas/${district.slug}`}
                className="p-5 rounded-xs bg-slate-900/80 backdrop-blur-md border border-white/15 hover:border-[#38bdf8]/60 hover:bg-slate-900 transition-all space-y-4 group flex flex-col justify-between"
              >
                <div className="space-y-3">
                  <div className="relative aspect-[16/10] w-full overflow-hidden rounded-xs bg-slate-800">
                    <Image
                      src={district.image || 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=800&q=80'}
                      alt={district.name}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute top-2.5 left-2.5 px-2.5 py-0.5 rounded-xs text-[9px] font-mono font-semibold uppercase bg-slate-900/90 text-[#38bdf8] border border-[#38bdf8]/30">
                      {district.sector}
                    </div>
                  </div>

                  <div>
                    <h3 className="text-lg font-light text-white group-hover:text-[#38bdf8] transition-colors">
                      {district.name}
                    </h3>
                    <p className="text-xs text-slate-400 font-light mt-1 line-clamp-2 leading-relaxed">
                      {district.description}
                    </p>
                  </div>
                </div>

                <div className="pt-3 border-t border-white/10 flex items-center justify-between text-xs font-mono">
                  <span className="text-slate-400 font-semibold">{district.master_developer}</span>
                  <span className="text-[#38bdf8] font-semibold group-hover:translate-x-0.5 transition-transform flex items-center gap-1">
                    <span>Atlas</span>
                    <ArrowRight className="h-3 w-3" />
                  </span>
                </div>
              </Link>
            ))}
          </div>

        </div>
      </section>

      {/* ========================================================================= */}
      {/* 05 — PRIVATE CLIENT (DISCREET ACQUISITION OFFICE)                          */}
      {/* ========================================================================= */}
      <section className="py-20 lg:py-28 bg-[#0a1526] text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#0284c7]/20 rounded-full blur-3xl pointer-events-none" />
        
        <div className="w-full max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-16 relative z-10">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-8 p-8 sm:p-12 rounded-xs border border-white/10 bg-slate-900/50 shadow-2xl">
            <div className="space-y-3 max-w-2xl">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-xs bg-[#0284c7]/20 border border-[#0284c7]/40 text-[#38bdf8] text-xs font-mono">
                <Sparkles className="h-3.5 w-3.5" />
                <span>PRIVATE CLIENT DESK</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-light tracking-tight font-serif">
                PRIVATE CLIENT
              </h2>
              <p className="text-base sm:text-lg text-slate-300 font-light leading-relaxed">
                For acquisitions that require discretion, speed and precision.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 shrink-0">
              <button
                type="button"
                onClick={() => setIsContactModalOpen(true)}
                className="px-8 py-4 rounded-xs bg-[#0284c7] hover:bg-[#0369a1] text-white text-xs font-mono uppercase tracking-[0.16em] font-semibold transition-all shadow-xl flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>REQUEST PRIVATE MANDATE</span>
                <ArrowRight className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Modal */}
      <ContactModal
        isOpen={isContactModalOpen}
        onClose={() => setIsContactModalOpen(false)}
        initialInterest="PRIVATE CLIENT"
      />

    </div>
  )
}