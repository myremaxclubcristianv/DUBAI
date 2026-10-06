'use client'

import * as React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { VERIFIED_PROPERTIES } from '@/lib/data/properties'
import { useClient } from '@/lib/context/client-context'
import { ContactModal } from '@/components/layout/contact-modal'
import {
  ArrowRight,
  ShieldCheck,
  Building2,
  Compass,
  TrendingUp,
  Scale,
  Lock,
  Layers,
} from 'lucide-react'

export default function Home() {
  const { formatCurrency } = useClient()
  const [isContactModalOpen, setIsContactModalOpen] = React.useState(false)

  // Featured Palm Jumeirah property from verified registry
  const featuredProperty = VERIFIED_PROPERTIES.find(p => p.area_id === 'area-palm-jumeirah') || VERIFIED_PROPERTIES[0]

  // Atlas Districts with specific high-resolution imagery and editorial positioning
  const atlasDistricts = [
    {
      id: 'downtown',
      num: '01',
      name: 'DOWNTOWN',
      descriptor: "The city's central urban core.",
      image: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=1200&q=85',
      href: '/areas/downtown-dubai',
      tag: 'FINANCIAL & URBAN HUB',
    },
    {
      id: 'palm-jumeirah',
      num: '02',
      name: 'PALM JUMEIRAH',
      descriptor: 'Waterfront residential prestige.',
      image: 'https://images.unsplash.com/photo-1580674684081-7617fbf3d745?auto=format&fit=crop&w=1200&q=85',
      href: '/areas/palm-jumeirah',
      tag: 'BEACHFRONT ARCHIPELAGO',
    },
    {
      id: 'dubai-hills',
      num: '03',
      name: 'DUBAI HILLS',
      descriptor: 'Green master-planned living.',
      image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1200&q=85',
      href: '/areas/dubai-hills-estate',
      tag: 'GOLF ESTATE & PARKS',
    },
    {
      id: 'difc',
      num: '04',
      name: 'DIFC',
      descriptor: 'Finance, culture and centrality.',
      image: 'https://images.unsplash.com/photo-1577083552431-6e5fd01aa342?auto=format&fit=crop&w=1200&q=85',
      href: '/areas/difc',
      tag: 'FINANCIAL FREE ZONE',
    },
  ]

  // Decision Layer Framework Dimensions
  const decisionDimensions = [
    {
      label: 'LOCATION',
      icon: Compass,
      title: 'Infrastructure & Tenure Maturity',
      desc: 'Freehold designation under Law No. 7 of 2006, arterial transport connectivity, and master-plan infrastructure completion milestones.',
    },
    {
      label: 'LIQUIDITY',
      icon: TrendingUp,
      title: 'Secondary Market Velocity',
      desc: 'Historical transaction frequency, buyer profile depth, and registered resales within the official Dubai Land Department ledger.',
    },
    {
      label: 'ENTRY',
      icon: Scale,
      title: 'Valuation Baseline vs History',
      desc: 'Statutory transfer benchmarks, price per square foot differentials against district averages, and certified developer schedules.',
    },
    {
      label: 'YIELD',
      icon: Building2,
      title: 'Net Achieved Yield Curves',
      desc: 'Realised rental yields derived from active tenancy filings after accounting for certified RERA service charge indexes.',
    },
    {
      label: 'EXIT',
      icon: Layers,
      title: 'Capital Appreciation Horizons',
      desc: 'Macroeconomic catalysts, prime sector supply limits, and institutional institutional demand from foreign capital inflows.',
    },
    {
      label: 'RISK',
      icon: Lock,
      title: 'Escrow & Statutory Protection',
      desc: 'Project escrow ring-fencing under Law No. 8 of 2007, certified construction audit milestones, and title deed registration.',
    },
  ]

  return (
    <div className="flex flex-col min-h-screen bg-white text-slate-900 selection:bg-sky-500/20 selection:text-slate-900">
      
      {/* ========================================================================= */}
      {/* 02 — CINEMATIC BURJ KHALIFA HERO (85-95vh DESKTOP / 75-85vh MOBILE)      */}
      {/* ========================================================================= */}
      <section className="relative w-full min-h-[640px] max-h-[940px] h-[86vh] lg:h-[92vh] flex items-center border-b border-slate-200 overflow-hidden bg-slate-950">
        
        {/* Full-Width Cinematic Daytime Dubai Sky & Burj Khalifa Photography */}
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=2560&q=95"
            alt="Burj Khalifa soaring against clear daytime sky with glass skyscraper reflections"
            fill
            priority
            sizes="100vw"
            className="object-cover object-[center_35%] scale-[1.02]"
          />
          {/* Architectural publication overlay: deliberate gradient giving editorial breathing room */}
          <div className="absolute inset-0 bg-gradient-to-r from-white/95 via-white/85 to-transparent lg:from-white/95 lg:via-white/70 lg:to-slate-900/20" />
          <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-white/30 lg:hidden" />
        </div>

        {/* Hero Content on Architectural 12-Column Grid */}
        <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-10 lg:px-16 py-14 lg:py-24 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center justify-between">
            
            {/* Left Column (7 Cols): Editorial Serif Headline & Restrained Copy */}
            <div className="lg:col-span-7 space-y-6 sm:space-y-8 max-w-2xl">
              
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-xs bg-white/95 backdrop-blur-md border border-slate-200 text-slate-800 text-[10px] sm:text-[11px] font-mono tracking-[0.2em] uppercase font-semibold shadow-2xs">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#0284c7]" />
                    <span>DUBAI / REAL ESTATE INTELLIGENCE</span>
                  </div>
                  <span className="text-[10px] font-mono tracking-[0.2em] text-slate-500 uppercase hidden sm:inline-block">
                    MARKET / 2026
                  </span>
                </div>
                
                <h1 className="text-[44px] sm:text-[72px] lg:text-[88px] font-light tracking-[-0.04em] leading-[0.96] text-slate-900 font-serif">
                  Dubai,<br />
                  with better<br />
                  <span className="text-[#0284c7] font-serif italic font-normal">decisions.</span>
                </h1>
              </div>

              <p className="text-sm sm:text-base lg:text-lg text-slate-700 font-light leading-relaxed max-w-xl">
                Dubai is a collection of distinct markets, districts and investment profiles. We provide source-led intelligence and private advisory to help you identify the properties and areas genuinely worth attention.
              </p>

              {/* Text-based Editorial CTA */}
              <div className="flex flex-wrap items-center gap-6 pt-2">
                <Link
                  href="/properties"
                  className="inline-flex items-center gap-2.5 text-xs font-mono uppercase tracking-[0.18em] text-[#0284c7] hover:text-[#0369a1] font-semibold transition-colors group"
                >
                  <span className="border-b border-[#0284c7] pb-0.5 group-hover:border-[#0369a1]">EXPLORE PROPERTIES</span>
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>

                <Link
                  href="/market"
                  className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-[0.16em] text-slate-600 hover:text-slate-900 transition-colors"
                >
                  <span>MARKET INTELLIGENCE</span>
                </Link>
              </div>

              {/* Hero Micro-Details / Statutory Provenance */}
              <div className="pt-6 border-t border-slate-200/90 flex flex-wrap items-center gap-2 sm:gap-3 text-[10px] sm:text-[11px] font-mono text-slate-600">
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

            {/* Right Column (5 Cols): Floating White Architectural DLD Cadran */}
            <div className="lg:col-span-5 flex justify-start lg:justify-end w-full">
              <div className="w-full max-w-md bg-white rounded-xs border border-slate-200 p-5 sm:p-8 space-y-5 shadow-2xl relative">
                
                {/* Cadran Header */}
                <div className="flex items-center justify-between border-b border-slate-100 pb-3">
                  <div className="space-y-0.5">
                    <span className="text-[10px] sm:text-[11px] font-mono uppercase tracking-[0.2em] text-slate-900 font-bold block">
                      DLD MARKET BASELINE
                    </span>
                    <span className="text-[9px] font-mono text-slate-400 uppercase tracking-widest block">
                      2026 STATUTORY SCHEDULE
                    </span>
                  </div>
                  <span className="text-[9px] sm:text-[10px] font-mono text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-xs border border-emerald-200 uppercase font-semibold">
                    OFFICIAL UAE PEG
                  </span>
                </div>

                {/* Cadran Data Grid */}
                <div className="grid grid-cols-3 gap-2 sm:gap-4 font-mono">
                  <div className="space-y-1">
                    <span className="text-2xl sm:text-3xl font-light text-slate-900 block font-sans tracking-tight">04%</span>
                    <span className="text-[9px] sm:text-[10px] text-slate-500 uppercase tracking-wider font-semibold block">TRANSFER FEE</span>
                    <span className="text-[8px] text-slate-400 block">Law No. 7/2006</span>
                  </div>
                  <div className="space-y-1">
                    <span className="text-2xl sm:text-3xl font-light text-slate-900 block font-sans tracking-tight">AED 4K</span>
                    <span className="text-[9px] sm:text-[10px] text-slate-500 uppercase tracking-wider font-semibold block">REGISTRATION</span>
                    <span className="text-[8px] text-slate-400 block">Baseline per deal</span>
                  </div>
                  <div className="space-y-1">
                    <span className="text-2xl sm:text-3xl font-light text-[#0284c7] block font-sans tracking-tight">3.6725</span>
                    <span className="text-[9px] sm:text-[10px] text-slate-500 uppercase tracking-wider font-semibold block">AED / USD</span>
                    <span className="text-[8px] text-slate-400 block">Official UAE Peg</span>
                  </div>
                </div>

                {/* Cadran Footnote */}
                <div className="pt-3.5 border-t border-slate-100 flex items-center justify-between">
                  <Link
                    href="/sources"
                    className="text-[10px] sm:text-[11px] font-mono uppercase tracking-wider text-[#0284c7] hover:text-[#0369a1] font-semibold inline-flex items-center gap-1.5 transition-colors"
                  >
                    <span>VIEW STATUTORY BASELINE</span>
                    <ArrowRight className="h-3 w-3" />
                  </Link>
                  <span className="text-[9px] font-mono text-slate-400 uppercase tracking-wider">DLD &bull; UAE STATUTORY</span>
                </div>

              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 03 — EDITORIAL MARKET INTRODUCTION (GENEROUS ARCHITECTURAL WHITESPACE)    */}
      {/* ========================================================================= */}
      <section className="py-20 lg:py-28 bg-white border-b border-slate-200">
        <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-10 lg:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
            
            {/* Left 5 Columns: Eyebrow & Master Statement */}
            <div className="lg:col-span-5 space-y-4">
              <span className="text-[10px] font-mono tracking-[0.24em] uppercase text-[#0284c7] block font-semibold">
                THE DUBAI MARKET
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-[46px] font-light tracking-[-0.03em] leading-[1.08] text-slate-900 font-serif">
                Dubai is not one market.<br />
                <span className="text-slate-500 font-serif italic">It is an archipelago of distinct economic micro-climates.</span>
              </h2>
            </div>

            {/* Right 7 Columns: Analytical Philosophy */}
            <div className="lg:col-span-7 space-y-5 text-sm sm:text-base text-slate-600 font-light leading-relaxed pt-2">
              <p>
                From the high-density financial capital of DIFC to the private beachfront enclaves of Palm Jumeirah and the family golf domains of Dubai Hills, every submarket operates under distinct yield curves, foreign ownership tenures, buyer profiles, and statutory capital requirements.
              </p>
              <p>
                Averaged market data obscures critical local dynamics. Successful property allocation in Dubai requires underwriting individual district supply pipelines, escrow backing under Law No. 8 of 2007, and verifiable secondary market liquidity.
              </p>
              <div className="pt-2">
                <Link
                  href="/market"
                  className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-[0.16em] text-[#0284c7] hover:text-[#0369a1] font-semibold transition-colors"
                >
                  <span>READ MARKET THESIS &amp; STATUTORY INTELLIGENCE</span>
                  <ArrowRight className="h-3.5 w-3.5" />
                </Link>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 04 — FEATURED PROPERTY / PALM JUMEIRAH EDITORIAL SPREAD (30% / 70%)       */}
      {/* ========================================================================= */}
      <section className="py-20 lg:py-28 bg-slate-50 border-b border-slate-200">
        <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-10 lg:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
            
            {/* Left 30% (4 Cols): Editorial Dossier Intelligence */}
            <div className="lg:col-span-4 space-y-6">
              <div className="space-y-3">
                <div className="flex items-center gap-2">
                  <span className="text-[10px] font-mono tracking-[0.24em] uppercase text-[#0284c7] font-semibold">
                    THE BIG PICTURE
                  </span>
                  <span className="text-slate-300">&bull;</span>
                  <span className="text-[10px] font-mono uppercase text-slate-500">
                    DOSSIER / 01
                  </span>
                </div>
                
                <h3 className="text-2xl sm:text-3xl lg:text-4xl font-light text-slate-900 font-serif leading-tight">
                  Palm Jumeirah
                </h3>
                
                <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-xs bg-emerald-50 border border-emerald-200 text-emerald-800 text-[10px] font-mono font-semibold uppercase">
                  <ShieldCheck className="h-3.5 w-3.5 text-emerald-600" />
                  <span>DLD VERIFIED ASSET</span>
                </div>
              </div>

              <p className="text-sm text-slate-600 font-light leading-relaxed">
                Dubai&apos;s prime waterfront benchmark. Palm Jumeirah represents one of the world&apos;s most supply-constrained luxury enclaves, characterized by sustained institutional liquidity, ultra-high-net-worth private tenure, and verified title deed registration.
              </p>

              <div className="space-y-2 pt-2 border-t border-slate-200 font-mono text-xs">
                <div className="flex justify-between py-1 border-b border-slate-200/60">
                  <span className="text-slate-500 uppercase text-[10px]">District Class</span>
                  <span className="text-slate-900 font-medium">Prime Waterfront Freehold</span>
                </div>
                <div className="flex justify-between py-1 border-b border-slate-200/60">
                  <span className="text-slate-500 uppercase text-[10px]">Statutory Escrow</span>
                  <span className="text-emerald-700 font-medium">Law No. 8/2007 Ring-Fenced</span>
                </div>
                <div className="flex justify-between py-1">
                  <span className="text-slate-500 uppercase text-[10px]">Foreign Ownership</span>
                  <span className="text-[#0284c7] font-medium">100% Freehold Title Deed</span>
                </div>
              </div>

              <Link
                href="/areas/palm-jumeirah"
                className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-[0.16em] text-[#0284c7] hover:text-[#0369a1] font-semibold"
              >
                <span>EXPLORE PALM JUMEIRAH DOSSIER</span>
                <ArrowRight className="h-3.5 w-3.5" />
              </Link>
            </div>

            {/* Right 70% (8 Cols): Dominant Architectural Photograph + Attached Panel */}
            <div className="lg:col-span-8">
              <div className="border border-slate-200 bg-white rounded-xs overflow-hidden shadow-xl group">
                
                {/* Dominant Architectural Image */}
                <div className="relative aspect-[16/10] sm:aspect-[16/9] w-full overflow-hidden bg-slate-100">
                  <Image
                    src="https://images.unsplash.com/photo-1580674684081-7617fbf3d745?auto=format&fit=crop&w=1800&q=90"
                    alt="Palm Jumeirah luxury waterfront architectural villa"
                    fill
                    priority
                    sizes="(max-width: 1024px) 100vw, 65vw"
                    className="object-cover transition-transform duration-1000 group-hover:scale-105"
                  />
                  <div className="absolute top-4 left-4 flex gap-2">
                    <span className="px-3 py-1 rounded-xs text-[10px] font-mono font-semibold uppercase bg-white/95 backdrop-blur-md text-emerald-700 border border-emerald-200 shadow-xs">
                      DLD VERIFIED
                    </span>
                    <span className="px-3 py-1 rounded-xs text-[10px] font-mono font-semibold uppercase bg-white/95 backdrop-blur-md text-[#0284c7] border border-sky-200 shadow-xs">
                      PALM JUMEIRAH
                    </span>
                  </div>
                </div>

                {/* Attached Information Panel (Structurally Connected) */}
                <div className="p-6 sm:p-8 bg-white border-t border-slate-200 space-y-4">
                  <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-3">
                    <div>
                      <span className="text-[10px] font-mono uppercase tracking-widest text-slate-400 block font-semibold">
                        PALM JUMEIRAH &bull; PRIME WATERFRONT MARKET
                      </span>
                      <h4 className="text-xl sm:text-2xl font-light text-slate-900 group-hover:text-[#0284c7] transition-colors mt-0.5">
                        {featuredProperty.editorial_display_name || featuredProperty.title}
                      </h4>
                    </div>
                    <div className="font-mono text-2xl sm:text-3xl font-bold text-slate-900 tabular-nums">
                      {formatCurrency(featuredProperty.asking_price)}
                    </div>
                  </div>

                  <div className="grid grid-cols-3 gap-4 py-3 border-y border-slate-100 font-mono text-xs text-slate-600">
                    <div>
                      <span className="text-[10px] text-slate-400 block uppercase font-semibold">Bedrooms</span>
                      <span className="text-slate-900 font-medium text-sm">{featuredProperty.bedrooms} En-Suite</span>
                    </div>
                    <div>
                      <span className="text-[10px] text-slate-400 block uppercase font-semibold">Internal Area</span>
                      <span className="text-slate-900 font-medium text-sm">{featuredProperty.internal_area_sqft.toLocaleString()} sq ft</span>
                    </div>
                    <div>
                      <span className="text-[10px] text-slate-400 block uppercase font-semibold">Tenure</span>
                      <span className="text-slate-900 font-medium text-sm">Freehold Title</span>
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
                      <span>VIEW PROPERTY DOSSIER</span>
                      <ArrowRight className="h-3.5 w-3.5" />
                    </Link>
                  </div>
                </div>

              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 05 — FULL-WIDTH MARKET DATA RIBBON (ONE CONTINUOUS INSTITUTIONAL OBJECT)  */}
      {/* ========================================================================= */}
      <section className="border-b border-slate-200 bg-white py-10">
        <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-10 lg:px-16">
          <div className="grid grid-cols-2 lg:grid-cols-4 divide-y lg:divide-y-0 lg:divide-x divide-slate-200">
            
            <div className="py-4 lg:py-0 lg:px-8 first:pl-0 space-y-1">
              <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-slate-500 block font-semibold">
                18,642
              </span>
              <div className="text-2xl sm:text-3xl lg:text-4xl font-light font-mono text-slate-900 tabular-nums font-bold">
                18,642
              </div>
              <span className="text-xs text-slate-500 font-mono block uppercase">TRANSACTIONS</span>
            </div>

            <div className="py-4 lg:py-0 lg:px-8 space-y-1">
              <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-slate-500 block font-semibold">
                AED 1,680
              </span>
              <div className="text-2xl sm:text-3xl lg:text-4xl font-light font-mono text-[#0284c7] tabular-nums font-bold">
                AED 1,680
              </div>
              <span className="text-xs text-slate-500 font-mono block uppercase">AVG / SQFT</span>
            </div>

            <div className="py-4 lg:py-0 lg:px-8 space-y-1">
              <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-slate-500 block font-semibold">
                AED 52.1B
              </span>
              <div className="text-2xl sm:text-3xl lg:text-4xl font-light font-mono text-slate-900 tabular-nums font-bold">
                AED 52.1B
              </div>
              <span className="text-xs text-slate-500 font-mono block uppercase">TOTAL VALUE</span>
            </div>

            <div className="py-4 lg:py-0 lg:px-8 last:pr-0 space-y-1">
              <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-slate-500 block font-semibold">
                5.8%
              </span>
              <div className="text-2xl sm:text-3xl lg:text-4xl font-light font-mono text-emerald-700 tabular-nums font-bold">
                5.8%
              </div>
              <span className="text-xs text-slate-500 font-mono block uppercase">PRIME YIELD</span>
            </div>

          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 06 — DUBAI ATLAS (DEEP ARCHITECTURAL BLUE + 4 ASYMMETRICAL MODULES)       */}
      {/* ========================================================================= */}
      <section className="relative py-20 lg:py-28 border-b border-slate-200 overflow-hidden bg-slate-950 text-white">
        
        {/* Full-Bleed Aerial Dubai Coastline Background */}
        <div className="absolute inset-0 z-0 opacity-35">
          <Image
            src="https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=2560&q=90"
            alt="Dubai Aerial Coastline and Architecture"
            fill
            sizes="100vw"
            className="object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/85 to-slate-900/65" />
        </div>

        <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-10 lg:px-16 relative z-10 space-y-12">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 border-b border-white/15">
            <div className="space-y-2">
              <div className="inline-flex items-center gap-2 text-[10px] font-mono tracking-[0.22em] text-[#38bdf8] uppercase font-semibold">
                <span className="w-1.5 h-1.5 rounded-full bg-[#38bdf8]" />
                <span>THE DUBAI ATLAS</span>
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light tracking-[-0.03em] text-white font-serif">
                Explore the Emirates
              </h2>
              <p className="text-sm text-slate-300 font-light max-w-xl">
                Four markets. Four different investment logics.
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

          {/* Asymmetric Architectural District Composition (1 Dominant + 3 Supporting) */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
            
            {/* 1. Dominant Primary District (7 Cols) */}
            <div className="lg:col-span-7 flex flex-col">
              <Link
                href={atlasDistricts[0].href}
                className="p-6 sm:p-8 rounded-xs bg-slate-900/85 backdrop-blur-md border border-white/15 hover:border-[#38bdf8]/60 hover:bg-slate-900 transition-all group flex flex-col justify-between h-full shadow-2xl space-y-6"
              >
                <div className="space-y-5">
                  <div className="relative aspect-[16/10] sm:aspect-[16/9] w-full overflow-hidden rounded-xs bg-slate-800 border border-white/10">
                    <Image
                      src={atlasDistricts[0].image}
                      alt={atlasDistricts[0].name}
                      fill
                      sizes="(max-width: 1024px) 100vw, 60vw"
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute top-3 left-3 flex items-center gap-2">
                      <span className="px-2.5 py-1 rounded-xs text-[10px] font-mono font-semibold uppercase bg-slate-950/90 text-[#38bdf8] border border-[#38bdf8]/30">
                        {atlasDistricts[0].num}
                      </span>
                      <span className="px-2.5 py-1 rounded-xs text-[10px] font-mono font-medium uppercase bg-slate-950/90 text-white border border-white/20">
                        {atlasDistricts[0].tag}
                      </span>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <span className="text-[10px] font-mono text-[#38bdf8] uppercase tracking-[0.2em] block font-semibold">
                      PRIMARY FREEHOLD CORE &bull; REG. 3/2006
                    </span>
                    <h3 className="text-2xl sm:text-4xl font-light text-white group-hover:text-[#38bdf8] transition-colors font-serif">
                      {atlasDistricts[0].name}
                    </h3>
                    <p className="text-sm sm:text-base text-slate-300 font-light leading-relaxed max-w-xl">
                      {atlasDistricts[0].descriptor} Master-planned commercial, cultural, and ultra-prime residential epicenter anchored by the Burj Khalifa and Dubai Opera.
                    </p>
                  </div>
                </div>

                <div className="pt-4 border-t border-white/10 flex items-center justify-between text-xs font-mono">
                  <span className="text-slate-400 text-[11px] uppercase">STATUTORY DOSSIER</span>
                  <span className="text-[#38bdf8] font-semibold group-hover:translate-x-1.5 transition-transform flex items-center gap-2">
                    <span>Explore Downtown Dossier</span>
                    <ArrowRight className="h-3.5 w-3.5" />
                  </span>
                </div>
              </Link>
            </div>

            {/* 2. Three Supporting Districts (5 Cols Stack) */}
            <div className="lg:col-span-5 flex flex-col justify-between gap-4">
              {atlasDistricts.slice(1).map((district) => (
                <Link
                  key={district.id}
                  href={district.href}
                  className="p-4 sm:p-5 rounded-xs bg-slate-900/80 backdrop-blur-md border border-white/15 hover:border-[#38bdf8]/60 hover:bg-slate-900 transition-all group flex items-center gap-4 sm:gap-5 flex-1 shadow-md"
                >
                  <div className="relative aspect-[4/3] w-28 sm:w-36 shrink-0 overflow-hidden rounded-xs bg-slate-800 border border-white/10">
                    <Image
                      src={district.image}
                      alt={district.name}
                      fill
                      sizes="(max-width: 640px) 120px, 160px"
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute top-1.5 left-1.5 px-1.5 py-0.5 rounded-xs text-[8px] font-mono font-semibold uppercase bg-slate-950/90 text-[#38bdf8] border border-[#38bdf8]/30">
                      {district.num}
                    </div>
                  </div>

                  <div className="space-y-1 flex-1 min-w-0">
                    <span className="text-[9px] font-mono text-slate-400 uppercase tracking-widest block font-semibold truncate">
                      {district.tag}
                    </span>
                    <h3 className="text-base sm:text-lg font-light text-white group-hover:text-[#38bdf8] transition-colors truncate font-serif">
                      {district.name}
                    </h3>
                    <p className="text-xs text-slate-300 font-light line-clamp-1">
                      {district.descriptor}
                    </p>
                    <div className="pt-1 flex items-center gap-1 text-[11px] font-mono text-[#38bdf8] group-hover:translate-x-1 transition-transform">
                      <span>Dossier</span>
                      <ArrowRight className="h-3 w-3" />
                    </div>
                  </div>
                </Link>
              ))}
            </div>

          </div>

        </div>
      </section>

      {/* ========================================================================= */}
      {/* 07 — MARKET INTELLIGENCE / DECISION LAYER (EDITORIAL INVESTMENT FRAMEWORK) */}
      {/* ========================================================================= */}
      <section className="py-20 lg:py-28 bg-white border-b border-slate-200">
        <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-10 lg:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            
            {/* Left Column (5 Cols): Editorial Thesis */}
            <div className="lg:col-span-5 space-y-6">
              <div className="space-y-3">
                <span className="text-[10px] font-mono tracking-[0.24em] uppercase text-[#0284c7] block font-semibold">
                  DECISION INTELLIGENCE
                </span>
                <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-light tracking-[-0.03em] leading-[1.08] text-slate-900 font-serif">
                  The right property is not always the most expensive one.
                </h2>
              </div>

              <p className="text-sm sm:text-base text-slate-600 font-light leading-relaxed">
                Institutional property acquisition in Dubai requires evaluating assets across six structural dimensions—filtering out marketing noise to focus on statutory tenure, capital liquidity, and net yield durability.
              </p>

              <div className="p-5 rounded-xs bg-slate-50 border border-slate-200 space-y-2 font-mono text-xs">
                <span className="text-[10px] uppercase tracking-wider text-slate-400 font-semibold block">METHODOLOGY PILLAR</span>
                <p className="text-slate-700 font-sans text-xs leading-relaxed">
                  Every asset in the platform is underwritten against verified Dubai Land Department historical transfer records, RERA rental indices, and statutory escrow protection filings.
                </p>
              </div>

              <Link
                href="/methodology"
                className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-[0.16em] text-[#0284c7] hover:text-[#0369a1] font-semibold"
              >
                <span>VIEW UNDERWRITING METHODOLOGY</span>
                <ArrowRight className="h-3.5 w-3.5" />
              </Link>
            </div>

            {/* Right Column (7 Cols): Architectural Decision Matrix */}
            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {decisionDimensions.map((dim, idx) => {
                const Icon = dim.icon
                return (
                  <div
                    key={dim.label}
                    className="p-5 rounded-xs border border-slate-200 bg-white hover:border-[#0284c7]/50 hover:shadow-md transition-all space-y-3"
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <Icon className="h-4 w-4 text-[#0284c7]" />
                        <span className="text-[11px] font-mono font-bold tracking-[0.16em] text-slate-900 uppercase">
                          {dim.label}
                        </span>
                      </div>
                      <span className="text-[9px] font-mono text-slate-400">0{idx + 1}</span>
                    </div>

                    <h4 className="text-sm font-semibold text-slate-900">
                      {dim.title}
                    </h4>

                    <p className="text-xs text-slate-600 font-light leading-relaxed">
                      {dim.desc}
                    </p>
                  </div>
                )
              })}
            </div>

          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 08 — PRIVATE CLIENT (DISCREET ACQUISITION DESK)                            */}
      {/* ========================================================================= */}
      <section className="py-20 lg:py-28 bg-[#070e1c] text-white relative overflow-hidden border-b border-slate-900">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#0284c7]/15 rounded-full blur-3xl pointer-events-none" />
        
        <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-10 lg:px-16 relative z-10">
          <div className="p-8 sm:p-14 rounded-xs border border-white/10 bg-slate-900/60 shadow-2xl space-y-8">
            
            <div className="flex flex-wrap items-center justify-between gap-4 border-b border-white/10 pb-4">
              <div className="flex items-center gap-3 font-mono text-[10px] sm:text-[11px] text-[#38bdf8] uppercase tracking-[0.2em] font-semibold">
                <span>PRIVATE CLIENT</span>
                <span>/</span>
                <span>CONFIDENTIAL</span>
                <span>/</span>
                <span>DIRECT</span>
              </div>
              <span className="text-[10px] font-mono text-slate-400 uppercase tracking-widest">
                MANDATE DESK / 2026
              </span>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center justify-between">
              
              <div className="lg:col-span-8 space-y-4">
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light tracking-[-0.03em] font-serif leading-tight">
                  For acquisitions that require discretion, speed and precision.
                </h2>
                <p className="text-sm sm:text-base text-slate-300 font-light leading-relaxed max-w-2xl">
                  Private sourcing, property intelligence and direct acquisition support for clients requiring a more controlled process.
                </p>
              </div>

              <div className="lg:col-span-4 flex justify-start lg:justify-end">
                <button
                  type="button"
                  onClick={() => setIsContactModalOpen(true)}
                  className="w-full sm:w-auto px-8 py-4 rounded-xs bg-[#0284c7] hover:bg-[#0369a1] text-white text-xs font-mono uppercase tracking-[0.16em] font-semibold transition-all shadow-xl flex items-center justify-center gap-2.5 cursor-pointer"
                >
                  <span>REQUEST PRIVATE MANDATE</span>
                  <ArrowRight className="h-4 w-4" />
                </button>
              </div>

            </div>

            <div className="pt-4 border-t border-white/10 flex flex-wrap items-center gap-4 text-[10px] font-mono text-slate-400">
              <span>Direct Principal Representation</span>
              <span>&bull;</span>
              <span>Escrow Protected Conveyancing</span>
              <span>&bull;</span>
              <span>Statutory Compliance Oversight</span>
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