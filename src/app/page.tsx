import * as React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { VERIFIED_PROPERTIES } from '@/lib/data/properties'
import { HomeConsultationCta } from '@/components/home/home-consultation-cta'
import { FeaturedPriceTag } from '@/components/home/featured-price-tag'
import {
  ArrowRight,
  ArrowUpRight,
  ShieldCheck,
} from 'lucide-react'

export default function Home() {
  // Featured Palm Jumeirah property from verified registry
  const featuredProperty =
    VERIFIED_PROPERTIES.find((p) => p.area_id === 'area-palm-jumeirah') ||
    VERIFIED_PROPERTIES[0]

  // Atlas Districts with specific high-resolution imagery and distinct dimensions
  const atlasDistricts = [
    {
      id: 'downtown',
      num: '01',
      name: 'Downtown Dubai',
      tag: 'FINANCIAL & URBAN CORE',
      descriptor:
        'Master-planned commercial, cultural, and ultra-prime residential epicenter anchored by the Burj Khalifa, Dubai Opera, and sovereign corporate headquarters under Law No. 7 of 2006.',
      image:
        'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=1000&q=80',
      href: '/areas/downtown-dubai',
      coordinates: '25.1972° N • 55.2744° E',
      statutoryRef: 'Freehold Sector 01 • Decree No. 3/2006',
    },
    {
      id: 'palm-jumeirah',
      num: '02',
      name: 'Palm Jumeirah',
      tag: 'BEACHFRONT ARCHIPELAGO',
      descriptor: 'World-renowned private waterfront fronds and shoreline penthouses with strict supply constraints.',
      image:
        'https://images.unsplash.com/photo-1580674684081-7617fbf3d745?auto=format&fit=crop&w=600&q=80',
      href: '/areas/palm-jumeirah',
      coordinates: '25.1124° N • 55.1390° E',
    },
    {
      id: 'dubai-hills',
      num: '03',
      name: 'Dubai Hills Estate',
      tag: 'GOLF ESTATE & PARKS',
      descriptor: 'Expansive green master-planned family domains, championship 18-hole golf, and elite education hubs.',
      image:
        'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=600&q=80',
      href: '/areas/dubai-hills-estate',
      coordinates: '25.1097° N • 55.2536° E',
    },
    {
      id: 'difc',
      num: '04',
      name: 'DIFC',
      tag: 'FINANCIAL FREE ZONE',
      descriptor: 'Independent common-law jurisdiction, sovereign capital institutions, fine art galleries, and Michelin dining.',
      image:
        'https://images.unsplash.com/photo-1577083552431-6e5fd01aa342?auto=format&fit=crop&w=600&q=80',
      href: '/areas/difc',
      coordinates: '25.2048° N • 55.2708° E',
    },
  ]

  // Six-part Decision Intelligence Framework
  const decisionDimensions = [
    {
      num: '01',
      code: 'LOC',
      label: 'LOCATION',
      title: 'Infrastructure & Tenure Maturity',
      desc: 'Designated Freehold zone under Law No. 7 of 2006, arterial highway and metro connectivity, and sovereign infrastructure milestones.',
      statutoryRef: 'Law No. 7/2006 Freehold',
    },
    {
      num: '02',
      code: 'LIQ',
      label: 'LIQUIDITY',
      title: 'Secondary Market Velocity',
      desc: 'Historical transaction frequency, buyer profile depth, and certified resale velocity recorded within the official DLD ledger.',
      statutoryRef: 'DLD Secondary Velocity',
    },
    {
      num: '03',
      code: 'ENT',
      label: 'ENTRY',
      title: 'Valuation Baseline vs History',
      desc: 'Statutory transfer benchmarks, price per square foot differentials against district historical medians, and audited payment plans.',
      statutoryRef: 'District Median PSF Index',
    },
    {
      num: '04',
      code: 'YLD',
      label: 'YIELD',
      title: 'Net Achieved Yield Curves',
      desc: 'Realised net rental yields calculated from verified Ejari lease filings after deducting official RERA service charge indexes.',
      statutoryRef: 'Ejari Realised Net Curves',
    },
    {
      num: '05',
      code: 'EXT',
      label: 'EXIT',
      title: 'Capital Appreciation Horizons',
      desc: 'Macroeconomic catalysts, prime sector supply limits, and institutional capital inflows aligned with the Dubai Economic Agenda (D33).',
      statutoryRef: 'D33 Economic Growth Vectors',
    },
    {
      num: '06',
      code: 'RSK',
      label: 'RISK',
      title: 'Escrow & Statutory Protection',
      desc: 'Mandatory project escrow ring-fencing under Law No. 8 of 2007, certified construction audit milestones, and title deed registration.',
      statutoryRef: 'Law No. 8/2007 Escrow',
    },
  ]

  return (
    <div className="flex flex-col min-h-screen bg-white text-slate-950 selection:bg-slate-900 selection:text-white">
      
      {/* ========================================================================= */}
      {/* SECTION B: CINEMATIC HERO (DAYTIME DUBAI SKYLINE & BURJ KHALIFA)          */}
      {/* ========================================================================= */}
      <section className="relative w-full min-h-[640px] lg:min-h-[840px] lg:h-[90vh] flex items-center border-b border-slate-200 overflow-hidden bg-slate-100 py-12 lg:py-0">
        
        {/* Full Visual Field: Daytime Burj Khalifa Photography */}
        <div className="absolute inset-0 z-0">
          <picture className="w-full h-full block">
            <source
              media="(max-width: 640px)"
              type="image/webp"
              srcSet="/images/hero-burj-mobile.webp"
              width={640}
              height={427}
            />
            <source
              media="(min-width: 641px)"
              type="image/webp"
              srcSet="/images/hero-burj-desktop.webp"
              width={1440}
              height={960}
            />
            <img
              src="/images/hero-burj-mobile.webp"
              alt="Burj Khalifa and Dubai Downtown skyline in daytime light"
              fetchPriority="high"
              decoding="async"
              width={640}
              height={427}
              className="w-full h-full object-cover object-[center_34%]"
            />
          </picture>
          {/* Architectural Light Gradient for High Legibility */}
          <div className="absolute inset-0 bg-gradient-to-r from-white via-white/95 to-transparent lg:via-white/80 lg:to-slate-950/20" />
          <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-white/40 lg:hidden" />
          
          {/* Subtle Architectural Grid Lines */}
          <div className="absolute inset-0 pointer-events-none hidden lg:block opacity-15">
            <div className="w-full max-w-[1440px] mx-auto h-full px-16 grid grid-cols-12 gap-8">
              <div className="border-r border-slate-400 h-full col-span-7" />
              <div className="border-r border-slate-400 h-full col-span-5" />
            </div>
          </div>
        </div>

        {/* Hero Content on 12-Column Grid */}
        <div className="w-full max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-16 py-10 lg:py-24 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center justify-between">
            
            {/* Left 7 Columns: Editorial Headline, Controlled Paragraph, Spaced Actions */}
            <div className="lg:col-span-7 space-y-7 max-w-2xl">
              
              <div className="space-y-4">
                <div className="flex flex-wrap items-center gap-3">
                  <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/95 backdrop-blur-md border border-slate-200 text-slate-900 text-[10px] sm:text-[11px] font-mono tracking-[0.22em] uppercase font-semibold shadow-2xs">
                    <span>DUBAI / REAL ESTATE INTELLIGENCE</span>
                  </div>
                  <span className="text-[10px] font-mono tracking-[0.2em] text-slate-500 uppercase hidden sm:inline-block">
                    25.1972° N • 55.2744° E
                  </span>
                </div>
                
                <h1 className="text-[42px] sm:text-7xl lg:text-[84px] font-light tracking-[-0.035em] leading-[0.96] text-slate-950 font-serif">
                  Dubai,<br />
                  with better<br />
                  <span className="font-serif italic font-normal text-slate-900">decisions.</span>
                </h1>
              </div>

              <p className="text-base sm:text-lg text-slate-700 font-light leading-[1.75] max-w-xl">
                Dubai is not a singular market—it is an archipelago of distinct economic micro-climates. We provide source-led intelligence, statutory due diligence, and private advisory to underwrite acquisitions with institutional precision.
              </p>

              {/* Clearly Separated Primary and Secondary Actions */}
              <div className="flex flex-wrap items-center gap-5 pt-3">
                <Link
                  href="/properties"
                  className="inline-flex items-center gap-2.5 px-6 py-3.5 bg-slate-950 hover:bg-slate-800 text-white text-xs font-mono uppercase tracking-[0.16em] font-semibold transition-all shadow-md group"
                >
                  <span>EXPLORE PROPERTIES</span>
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>

                <Link
                  href="/market"
                  className="inline-flex items-center gap-2 px-6 py-3.5 border border-slate-300 bg-white/90 hover:bg-white text-slate-900 text-xs font-mono uppercase tracking-[0.16em] font-semibold transition-all shadow-2xs hover:border-slate-400 group"
                >
                  <span>MARKET INTELLIGENCE</span>
                  <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </Link>
              </div>

              {/* Discreet Regulatory / Source Line */}
              <div className="pt-8 border-t border-slate-300/80 flex flex-wrap items-center gap-2 sm:gap-3 text-[10px] sm:text-[11px] font-mono text-slate-600">
                <div className="flex items-center gap-1.5 text-slate-950 font-semibold">
                  <ShieldCheck className="h-3.5 w-3.5 text-emerald-700" />
                  <span>DLD Regulatory Reference</span>
                </div>
                <span className="text-slate-300">•</span>
                <span>Law No. 7 (2006) Freehold</span>
                <span className="text-slate-300">•</span>
                <span>Law No. 8 (2007) Escrow</span>
                <span className="text-slate-300">•</span>
                <span className="text-slate-900 font-semibold">Designated Freehold Zones (Decree 3/2006)</span>
              </div>

            </div>

            {/* Right 5 Columns: Architecturally Framed DLD Market Baseline Panel */}
            <div className="lg:col-span-5 flex justify-start lg:justify-end w-full">
              <div className="w-full max-w-md bg-white/95 backdrop-blur-md border border-slate-300 shadow-2xl p-7 sm:p-8 space-y-6">
                
                {/* Panel Header */}
                <div className="flex items-center justify-between border-b border-slate-200 pb-4">
                  <div className="space-y-0.5">
                    <span className="text-[11px] font-mono uppercase tracking-[0.2em] text-slate-950 font-bold block">
                      DLD MARKET BASELINE
                    </span>
                    <span className="text-[9px] font-mono text-slate-500 uppercase tracking-widest block">
                      2026 STATUTORY SCHEDULE
                    </span>
                  </div>
                  <span className="text-[9px] sm:text-[10px] font-mono text-slate-900 bg-slate-100 px-2.5 py-1 border border-slate-200 uppercase font-semibold tracking-wider">
                    OFFICIAL UAE PEG
                  </span>
                </div>

                {/* Panel Data Grid with Internal Dividers */}
                <div className="grid grid-cols-3 divide-x divide-slate-200 font-mono">
                  <div className="pr-4 space-y-1">
                    <span className="text-2xl sm:text-3xl font-light text-slate-950 block font-sans tracking-tight font-semibold">
                      4.00%
                    </span>
                    <span className="text-[9px] sm:text-[10px] text-slate-600 uppercase tracking-wider font-semibold block">
                      TRANSFER TARIFF
                    </span>
                    <span className="text-[8px] text-slate-500 block">Res. No. 30/2013</span>
                  </div>
                  <div className="px-4 space-y-1">
                    <span className="text-2xl sm:text-3xl font-light text-slate-950 block font-sans tracking-tight font-semibold">
                      AED 4K
                    </span>
                    <span className="text-[9px] sm:text-[10px] text-slate-600 uppercase tracking-wider font-semibold block">
                      REGISTRATION
                    </span>
                    <span className="text-[8px] text-slate-500 block">Trustee (≥AED 500k)</span>
                  </div>
                  <div className="pl-4 space-y-1">
                    <span className="text-2xl sm:text-3xl font-light text-slate-950 block font-sans tracking-tight font-semibold">
                      3.6725
                    </span>
                    <span className="text-[9px] sm:text-[10px] text-slate-600 uppercase tracking-wider font-semibold block">
                      AED / USD
                    </span>
                    <span className="text-[8px] text-slate-500 block">CBUAE Fixed Peg</span>
                  </div>
                </div>

                {/* Panel Footer & Provenance Link */}
                <div className="pt-4 border-t border-slate-200 flex items-center justify-between">
                  <Link
                    href="/sources"
                    className="text-[10px] sm:text-[11px] font-mono uppercase tracking-wider text-slate-950 hover:text-slate-600 font-semibold inline-flex items-center gap-1.5 transition-colors group"
                  >
                    <span className="border-b border-slate-950 group-hover:border-slate-600 pb-0.5">VIEW STATUTORY BASELINE</span>
                    <ArrowRight className="h-3 w-3 transition-transform group-hover:translate-x-0.5" />
                  </Link>
                  <span className="text-[9px] font-mono text-slate-500 uppercase tracking-wider">
                    DLD PUBLIC REFERENCE TARIFF
                  </span>
                </div>

              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* SECTION C: EDITORIAL MARKET INTRODUCTION (MAGAZINE SPREAD COMPOSITION)    */}
      {/* ========================================================================= */}
      <section className="py-24 lg:py-32 bg-white border-b border-slate-200">
        <div className="w-full max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
            
            {/* Zone 1 (Cols 1-3): Section Marker & Short Description */}
            <div className="lg:col-span-3 space-y-6 lg:border-r lg:border-slate-200 lg:pr-8">
              <div className="flex items-center gap-3">
                <span className="text-sm font-mono font-bold text-slate-950 tracking-widest">01</span>
                <div className="h-[1px] w-8 bg-slate-950" />
                <span className="text-[10px] font-mono tracking-[0.24em] uppercase text-slate-500 font-semibold">
                  MARKET THESIS
                </span>
              </div>

              <div className="space-y-3 font-mono text-xs">
                <div className="text-[10px] text-slate-600 uppercase tracking-wider font-semibold">
                  STATUTORY MONOGRAPH
                </div>
                <p className="text-slate-700 font-sans text-xs leading-relaxed">
                  Published analysis on foreign freehold tenures, RERA rental indices, and project escrow protection under federal UAE law.
                </p>
                <div className="pt-3 border-t border-slate-200 text-[10px] text-slate-950 font-semibold flex items-center gap-1.5">
                  <span>24 FREEHOLD DISTRICTS</span>
                  <span>•</span>
                  <span>LAW NO. 7/2006</span>
                </div>
              </div>
            </div>

            {/* Zone 2 (Cols 4-8): Large Serif Editorial Statement */}
            <div className="lg:col-span-5 space-y-6 lg:border-r lg:border-slate-200 lg:px-8">
              <span className="text-[10px] font-mono tracking-[0.2em] text-slate-600 uppercase block font-semibold">
                EDITORIAL PERSPECTIVE
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-light tracking-[-0.03em] leading-[1.12] text-slate-950 font-serif">
                Dubai is not one market.<br />
                <span className="text-slate-500 font-serif italic font-normal">
                  It is an archipelago of distinct economic micro-climates.
                </span>
              </h2>
            </div>

            {/* Zone 3 (Cols 9-12): Supporting Analytical Text in a Separate Column */}
            <div className="lg:col-span-4 space-y-6 lg:pl-8">
              <span className="text-[10px] font-mono tracking-[0.2em] text-slate-600 uppercase block font-semibold">
                SECTOR BIFURCATION
              </span>
              
              <div className="space-y-4 text-sm text-slate-600 font-light leading-relaxed">
                <p>
                  From the high-density financial capital of DIFC to the private beachfront enclaves of Palm Jumeirah and the family golf domains of Dubai Hills, every submarket operates under distinct yield curves, foreign ownership tenures, buyer profiles, and statutory capital requirements.
                </p>
                <p>
                  Averaged city-wide figures obscure critical local dynamics. Successful property allocation in Dubai requires underwriting individual district supply pipelines, escrow backing under Law No. 8 of 2007, and verifiable secondary market liquidity.
                </p>
              </div>

              <div className="pt-2">
                <Link
                  href="/market"
                  className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-[0.16em] text-slate-950 hover:text-slate-600 font-semibold transition-colors group"
                >
                  <span className="border-b border-slate-950 pb-0.5 group-hover:border-slate-600">
                    READ MARKET THESIS
                  </span>
                  <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* SECTION D: PALM JUMEIRAH FEATURED ACQUISITION (ASYMMETRICAL 30/70 SPREAD) */}
      {/* ========================================================================= */}
      <section className="py-24 lg:py-32 bg-[#fafafa] border-b border-slate-200">
        <div className="w-full max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-16">
          
          {/* Section Header Strip */}
          <div className="flex flex-wrap items-center justify-between gap-4 pb-8 mb-10 border-b border-slate-200 font-mono text-xs">
            <div className="flex items-center gap-3">
              <span className="text-slate-950 font-bold">02</span>
              <span className="text-slate-300">/</span>
              <span className="uppercase tracking-[0.2em] text-slate-900 font-semibold">
                FEATURED ACQUISITION DOSSIER
              </span>
            </div>
            <div className="flex items-center gap-2 text-[11px] text-slate-500">
              <span>PALM JUMEIRAH</span>
              <span>•</span>
              <span className="text-slate-900 font-semibold">PRIME WATERFRONT SECTOR</span>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            
            {/* Left 30% (4 Columns): Carefully Structured Acquisition Dossier */}
            <div className="lg:col-span-4 bg-white border border-slate-200 p-8 space-y-7 shadow-sm">
              
              {/* Group 1: Location & Asset Identity */}
              <div className="space-y-2">
                <span className="text-[10px] font-mono tracking-[0.24em] uppercase text-slate-500 font-semibold block">
                  DISTRICT BENCHMARK
                </span>
                <h3 className="text-2xl sm:text-3xl font-light text-slate-950 font-serif leading-tight">
                  {featuredProperty.editorial_display_name || featuredProperty.title}
                </h3>
                <span className="text-xs font-mono text-slate-600 block">
                  Palm Jumeirah • West Crescent • {featuredProperty.developer_name || 'OMNIYAT'}
                </span>
              </div>

              <div className="h-[1px] bg-slate-200" />

              {/* Group 2: Property Attributes */}
              <div className="space-y-3 font-mono text-xs">
                <span className="text-[10px] uppercase tracking-wider text-slate-400 font-semibold block">
                  ASSET ATTRIBUTES
                </span>
                <div className="grid grid-cols-2 gap-3 pt-1">
                  <div className="p-2.5 bg-slate-50 border border-slate-200/80">
                    <span className="text-[9px] text-slate-400 uppercase block">Bedrooms</span>
                    <span className="text-slate-950 font-semibold text-xs">{featuredProperty.bedrooms} En-Suite</span>
                  </div>
                  <div className="p-2.5 bg-slate-50 border border-slate-200/80">
                    <span className="text-[9px] text-slate-400 uppercase block">Internal Area</span>
                    <span className="text-slate-950 font-semibold text-xs">{featuredProperty.internal_area_sqft.toLocaleString()} sq ft</span>
                  </div>
                  <div className="p-2.5 bg-slate-50 border border-slate-200/80">
                    <span className="text-[9px] text-slate-400 uppercase block">Tenure</span>
                    <span className="text-slate-950 font-semibold text-xs">Freehold Title</span>
                  </div>
                  <div className="p-2.5 bg-slate-50 border border-slate-200/80">
                    <span className="text-[9px] text-slate-400 uppercase block">Orientation</span>
                    <span className="text-slate-950 font-semibold text-xs">Arabian Gulf</span>
                  </div>
                </div>
              </div>

              <div className="h-[1px] bg-slate-200" />

              {/* Group 3: Price */}
              <div className="space-y-1">
                <span className="text-[10px] font-mono uppercase tracking-wider text-slate-400 font-semibold block">
                  ASKING PRICE (SUBJECT TO CONFIRMATION)
                </span>
                <div className="font-mono text-3xl font-bold text-slate-950 tabular-nums">
                  <FeaturedPriceTag priceAed={featuredProperty.asking_price} />
                </div>
                <span className="text-[10px] font-mono text-slate-500 block">
                  Approx. AED {(featuredProperty.asking_price ? Math.round(featuredProperty.asking_price / featuredProperty.internal_area_sqft) : 5828).toLocaleString()} / sq ft
                </span>
              </div>

              <div className="h-[1px] bg-slate-200" />

              {/* Group 4: Dossier Action */}
              <div className="space-y-3">
                <Link
                  href={`/properties/${featuredProperty.id}`}
                  className="w-full inline-flex items-center justify-center gap-2.5 px-6 py-3.5 bg-slate-950 hover:bg-slate-800 text-white text-xs font-mono uppercase tracking-[0.16em] font-semibold transition-all shadow-sm group"
                >
                  <span>ACCESS FULL ASSET DOSSIER</span>
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
                <p className="text-[10px] text-slate-500 font-mono leading-relaxed">
                  Listing details supplied by listing party and subject to confirmation.
                </p>
              </div>

            </div>

            {/* Right 70% (8 Columns): Dominant High-Quality Palm Jumeirah Aerial / Waterfront Image */}
            <div className="lg:col-span-8">
              <div className="border border-slate-300 bg-white shadow-xl overflow-hidden group">
                <div className="relative aspect-[16/10] sm:aspect-[16/9] w-full overflow-hidden bg-slate-100">
                  <picture className="w-full h-full block">
                    <source
                      media="(max-width: 640px)"
                      type="image/webp"
                      srcSet="/images/palm-jumeirah-mobile.webp"
                    />
                    <source
                      media="(min-width: 641px)"
                      type="image/webp"
                      srcSet="/images/palm-jumeirah-desktop.webp"
                    />
                    <img
                      src="/images/palm-jumeirah-desktop.webp"
                      alt="Palm Jumeirah aerial archipelago and waterfront architecture (illustrative area photography)"
                      loading="lazy"
                      decoding="async"
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-102"
                    />
                  </picture>
                  <div className="absolute top-4 left-4 flex gap-2">
                    <span className="px-3 py-1 text-[10px] font-mono font-semibold uppercase bg-slate-950 text-white shadow-sm">
                      PALM JUMEIRAH
                    </span>
                    <span className="px-3 py-1 text-[10px] font-mono font-semibold uppercase bg-white/95 backdrop-blur-md text-slate-900 border border-slate-200 shadow-sm">
                      CURATED PORTFOLIO ASSET
                    </span>
                  </div>
                  <div className="absolute bottom-3 right-3 px-3 py-1 bg-slate-950/85 backdrop-blur-xs text-[9px] font-mono text-slate-300 uppercase tracking-wider">
                    FIG 02.1 • ILLUSTRATIVE AREA PHOTOGRAPHY — PALM JUMEIRAH
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* SECTION E: CONTINUOUS MARKET DATA RIBBON (ONE HORIZONTAL STRIP)            */}
      {/* ========================================================================= */}
      <section className="bg-white border-b border-slate-200 py-16 lg:py-20">
        <div className="w-full max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-16 space-y-6">
          
          <div className="flex items-center justify-between pb-3 border-b border-slate-100 text-[10px] font-mono text-slate-400 uppercase tracking-[0.2em]">
            <span>STATUTORY BENCHMARKS • OFFICIAL UAE LEGISLATIVE LEDGER</span>
            <span className="hidden sm:inline">CENTRAL BANK • DLD STATUTORY DECREES</span>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 divide-y lg:divide-y-0 lg:divide-x divide-slate-200">
            
            {/* Metric 1: DLD Transfer Tariff */}
            <div className="py-6 lg:py-0 lg:px-8 first:pl-0 space-y-1.5">
              <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-slate-500 block font-semibold">
                DLD TRANSFER TARIFF
              </span>
              <div className="text-4xl sm:text-5xl font-light font-mono text-slate-950 tabular-nums font-semibold tracking-tight">
                4.00%
              </div>
              <p className="text-xs text-slate-600 font-mono leading-relaxed">
                Statutory tariff schedule per Executive Council Res. No. 30 of 2013. Checked October 2026.
              </p>
            </div>

            {/* Metric 2: Golden Visa Threshold */}
            <div className="py-6 lg:py-0 lg:px-8 space-y-1.5">
              <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-slate-500 block font-semibold">
                GOLDEN VISA THRESHOLD
              </span>
              <div className="text-4xl sm:text-5xl font-light font-mono text-slate-950 tabular-nums font-semibold tracking-tight">
                AED 2.0M
              </div>
              <p className="text-xs text-slate-600 font-mono leading-relaxed">
                Statutory baseline under Cabinet Res. 65/2022. Eligibility subject to GDRFA case-by-case review (last checked October 2026).
              </p>
            </div>

            {/* Metric 3: AED / USD Fixed Peg */}
            <div className="py-6 lg:py-0 lg:px-8 space-y-1.5">
              <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-slate-500 block font-semibold">
                AED / USD FIXED PEG
              </span>
              <div className="text-4xl sm:text-5xl font-light font-mono text-slate-950 tabular-nums font-semibold tracking-tight">
                3.6725
              </div>
              <p className="text-xs text-slate-600 font-mono leading-relaxed">
                Official Central Bank of the UAE fixed parity rate established November 1997. Source: CBUAE.
              </p>
            </div>

            {/* Metric 4: Foreign Freehold */}
            <div className="py-6 lg:py-0 lg:px-8 last:pr-0 space-y-1.5">
              <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-slate-500 block font-semibold">
                FOREIGN FREEHOLD
              </span>
              <div className="text-4xl sm:text-5xl font-light font-mono text-emerald-800 tabular-nums font-semibold tracking-tight">
                DESIGNATED
              </div>
              <p className="text-xs text-slate-600 font-mono leading-relaxed">
                Permitted across designated investment sectors pursuant to Law No. 7/2006 &amp; Decree No. 3/2006.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* SECTION F: DUBAI ATLAS (DEEP NAVY GEOGRAPHIC EDITORIAL COMPOSITION)        */}
      {/* ========================================================================= */}
      <section className="relative py-24 lg:py-32 border-b border-slate-900 overflow-hidden bg-[#070e1c] text-white">
        
        {/* Subtle Aerial Backdrop Texture */}
        <div className="absolute inset-0 z-0 opacity-20 pointer-events-none">
          <Image
            src="https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=1200&q=70"
            alt="Dubai Coastline Aerial Atlas"
            fill
            sizes="100vw"
            className="object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#070e1c] via-[#070e1c]/95 to-[#070e1c]/80" />
        </div>

        <div className="w-full max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-16 relative z-10 space-y-12">
          
          {/* Atlas Section Header */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-8 border-b border-white/15">
            <div className="space-y-3 max-w-2xl">
              <div className="inline-flex items-center gap-2 text-[10px] font-mono tracking-[0.24em] text-slate-400 uppercase font-semibold">
                <span>03 / THE DUBAI ATLAS</span>
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light tracking-[-0.03em] text-white font-serif">
                An Atlas of Sovereign Districts.
              </h2>
              <p className="text-sm sm:text-base text-slate-300 font-light leading-relaxed">
                Dubai is structured into distinct master-planned territories, each operating under specific freehold decrees, sovereign master developers, and lifestyle infrastructure.
              </p>
            </div>

            <Link
              href="/areas"
              className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-[0.16em] text-white hover:text-slate-300 transition-colors font-semibold group shrink-0"
            >
              <span className="border-b border-white pb-0.5 group-hover:border-slate-300">EXPLORE ATLAS DIRECTORY</span>
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>

          {/* Asymmetric Atlas Composition: 1 Dominant (7 cols) + 3 Supporting Panels (5 cols) */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
            
            {/* Dominant District: 01 Downtown Dubai (7 Columns) */}
            <div className="lg:col-span-7 flex flex-col">
              <Link
                href={atlasDistricts[0].href}
                className="p-7 sm:p-9 bg-slate-900/80 backdrop-blur-md border border-white/15 hover:border-white/40 hover:bg-slate-900 transition-all group flex flex-col justify-between h-full shadow-2xl space-y-6"
              >
                <div className="space-y-5">
                  <div className="relative aspect-[16/10] sm:aspect-[16/9] w-full overflow-hidden bg-slate-800 border border-white/10">
                    <Image
                      src={atlasDistricts[0].image}
                      alt={atlasDistricts[0].name}
                      fill
                      sizes="(max-width: 1024px) 100vw, 60vw"
                      className="object-cover transition-transform duration-700 group-hover:scale-104"
                    />
                    <div className="absolute top-3 left-3 flex items-center gap-2">
                      <span className="px-2.5 py-1 text-[10px] font-mono font-semibold uppercase bg-slate-950 text-white border border-white/20">
                        {atlasDistricts[0].num}
                      </span>
                      <span className="px-2.5 py-1 text-[10px] font-mono font-medium uppercase bg-slate-950/90 text-slate-200 border border-white/20">
                        {atlasDistricts[0].tag}
                      </span>
                    </div>
                    <div className="absolute bottom-3 right-3 px-2.5 py-1 bg-slate-950/90 font-mono text-[9px] text-slate-400">
                      {atlasDistricts[0].coordinates}
                    </div>
                  </div>

                  <div className="space-y-2">
                    <span className="text-[10px] font-mono text-slate-400 uppercase tracking-[0.2em] block font-semibold">
                      {atlasDistricts[0].statutoryRef}
                    </span>
                    <h3 className="text-2xl sm:text-3xl font-light text-white group-hover:text-slate-200 transition-colors font-serif">
                      {atlasDistricts[0].name}
                    </h3>
                    <p className="text-sm text-slate-300 font-light leading-relaxed max-w-xl">
                      {atlasDistricts[0].descriptor}
                    </p>
                  </div>
                </div>

                <div className="pt-4 border-t border-white/10 flex items-center justify-between text-xs font-mono">
                  <span className="text-slate-400 text-[11px] uppercase">STATUTORY DOSSIER</span>
                  <span className="text-white font-semibold group-hover:translate-x-1.5 transition-transform flex items-center gap-2">
                    <span>Explore Downtown Dossier</span>
                    <ArrowRight className="h-3.5 w-3.5" />
                  </span>
                </div>
              </Link>
            </div>

            {/* 3 Supporting Distinctly Sized Panels (5 Columns) */}
            <div className="lg:col-span-5 flex flex-col justify-between gap-4">
              {atlasDistricts.slice(1).map((district) => (
                <Link
                  key={district.id}
                  href={district.href}
                  className="p-5 sm:p-6 bg-slate-900/80 backdrop-blur-md border border-white/15 hover:border-white/40 hover:bg-slate-900 transition-all group flex items-center gap-5 flex-1 shadow-md"
                >
                  <div className="relative aspect-[4/3] w-28 sm:w-36 shrink-0 overflow-hidden bg-slate-800 border border-white/10">
                    <Image
                      src={district.image}
                      alt={district.name}
                      fill
                      sizes="(max-width: 640px) 120px, 160px"
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute top-1.5 left-1.5 px-2 py-0.5 text-[8px] font-mono font-semibold uppercase bg-slate-950 text-white border border-white/20">
                      {district.num}
                    </div>
                  </div>

                  <div className="space-y-1.5 flex-1 min-w-0">
                    <span className="text-[9px] font-mono text-slate-400 uppercase tracking-widest block font-semibold truncate">
                      {district.tag}
                    </span>
                    <h3 className="text-base sm:text-lg font-light text-white group-hover:text-slate-200 transition-colors truncate font-serif">
                      {district.name}
                    </h3>
                    <p className="text-xs text-slate-300 font-light line-clamp-2 leading-relaxed">
                      {district.descriptor}
                    </p>
                    <div className="pt-1 flex items-center gap-1.5 text-[11px] font-mono text-slate-200 group-hover:translate-x-1 transition-transform">
                      <span>View Dossier</span>
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
      {/* SECTION G: DECISION INTELLIGENCE (SIX-PART METHODOLOGY MATRIX)             */}
      {/* ========================================================================= */}
      <section className="py-24 lg:py-32 bg-white border-b border-slate-200">
        <div className="w-full max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            
            {/* Left 5 Columns: Editorial Heading & Framework Thesis */}
            <div className="lg:col-span-5 space-y-6">
              <div className="space-y-3">
                <div className="flex items-center gap-2">
                  <span className="text-xs font-mono font-bold text-slate-950">04</span>
                  <span className="text-slate-300">/</span>
                  <span className="text-[10px] font-mono tracking-[0.24em] uppercase text-slate-500 font-semibold">
                    DECISION INTELLIGENCE
                  </span>
                </div>
                
                <h2 className="text-3xl sm:text-4xl lg:text-[46px] font-light tracking-[-0.03em] leading-[1.08] text-slate-950 font-serif">
                  The right property is not always the most expensive one.
                </h2>
              </div>

              <p className="text-sm sm:text-base text-slate-600 font-light leading-relaxed">
                Institutional property acquisition in Dubai requires evaluating assets across six structural dimensions—filtering out marketing noise to focus on statutory tenure, capital liquidity, and net yield durability.
              </p>

              <div className="p-6 bg-slate-50 border border-slate-200 space-y-2 font-mono text-xs">
                <span className="text-[10px] uppercase tracking-wider text-slate-500 font-semibold block">
                  UNDERWRITING PRINCIPLE
                </span>
                <p className="text-slate-700 font-sans text-xs leading-relaxed">
                  Every asset is underwritten against verified Dubai Land Department historical transfer records, RERA rental indices, and statutory escrow protection filings under UAE law.
                </p>
              </div>

              <div className="pt-2">
                <Link
                  href="/methodology"
                  className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-[0.16em] text-slate-950 hover:text-slate-600 font-semibold transition-colors group"
                >
                  <span className="border-b border-slate-950 pb-0.5 group-hover:border-slate-600">VIEW UNDERWRITING METHODOLOGY</span>
                  <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </div>

            {/* Right 7 Columns: Structured Six-Part Methodology Grid */}
            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {decisionDimensions.map((dim) => (
                <div
                  key={dim.label}
                  className="p-6 border border-slate-200 bg-white hover:border-slate-400 hover:shadow-md transition-all space-y-3"
                >
                  <div className="flex items-center justify-between border-b border-slate-100 pb-3">
                    <span className="text-[11px] font-mono font-bold tracking-[0.18em] text-slate-950 uppercase">
                      {dim.num} • {dim.label}
                    </span>
                    <span className="text-[9px] font-mono text-slate-600 tracking-wider uppercase">{dim.code}</span>
                  </div>

                  <h3 className="text-sm font-semibold text-slate-950 leading-snug">
                    {dim.title}
                  </h3>

                  <p className="text-xs text-slate-600 font-light leading-relaxed">
                    {dim.desc}
                  </p>

                  <div className="pt-2.5 border-t border-slate-100 text-[10px] font-mono text-slate-800 font-medium">
                    {dim.statutoryRef}
                  </div>
                </div>
              ))}
            </div>

          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* SECTION H: PRIVATE CLIENT (CINEMATIC DEEP NAVY ACQUISITION OFFICE)        */}
      {/* ========================================================================= */}
      <section className="py-24 lg:py-32 bg-[#060c18] text-white relative overflow-hidden border-b border-slate-900">
        
        {/* Subtle Luxury Architectural Image Treatment */}
        <div className="absolute inset-0 z-0 opacity-15 pointer-events-none">
          <Image
            src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=70"
            alt="Private Client Office Architectural Interior"
            fill
            sizes="100vw"
            className="object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#060c18] via-[#060c18]/90 to-[#060c18]/70" />
        </div>

        <div className="w-full max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-16 relative z-10 space-y-12">
          
          {/* Header Eyebrow Strip */}
          <div className="flex flex-wrap items-center justify-between gap-4 border-b border-white/10 pb-4 font-mono text-[10px] sm:text-[11px] text-slate-400 uppercase tracking-[0.2em]">
            <div className="flex items-center gap-3">
              <span className="text-white font-bold">05</span>
              <span>/</span>
              <span>PRIVATE CLIENT</span>
              <span>/</span>
              <span>CONFIDENTIAL</span>
              <span>/</span>
              <span>DIRECT MANDATE</span>
            </div>
            <span className="text-slate-500">MANDATE DESK • 2026</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            
            {/* Left 7 Columns: Serif Headline, Advisory Thesis & Clear Action */}
            <div className="lg:col-span-7 space-y-7">
              <span className="text-[10px] font-mono tracking-[0.24em] text-slate-400 uppercase font-semibold block">
                INDEPENDENT MANDATE ADVISORY
              </span>

              <h2 className="text-3xl sm:text-5xl lg:text-[54px] font-light tracking-[-0.03em] font-serif leading-[1.08] text-white">
                For acquisitions that require discretion, speed and precision.
              </h2>

              <p className="text-sm sm:text-base text-slate-300 font-light leading-relaxed max-w-xl">
                We advise family offices, institutional investors, and private principals acquiring prime residential assets and off-market opportunities across Dubai with absolute discretion and rigorous analytical discipline.
              </p>

              <div className="pt-2">
                <HomeConsultationCta />
              </div>
            </div>

            {/* Right 5 Columns: Restrained Service Parameter Column */}
            <div className="lg:col-span-5 bg-white/[0.03] backdrop-blur-md border border-white/15 p-8 sm:p-9 space-y-6">
              <div className="border-b border-white/10 pb-3">
                <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-slate-400 font-semibold block">
                  SERVICE PARAMETERS
                </span>
              </div>

              <div className="space-y-4 font-mono text-xs">
                <div className="space-y-1">
                  <span className="text-[10px] text-slate-400 uppercase tracking-wider block font-semibold">
                    MANDATE THRESHOLD
                  </span>
                  <p className="text-slate-200 font-sans text-xs leading-relaxed">
                    Single-asset acquisitions from AED 15M+ and curated multi-unit residential or commercial portfolios.
                  </p>
                </div>

                <div className="h-[1px] bg-white/10" />

                <div className="space-y-1">
                  <span className="text-[10px] text-slate-400 uppercase tracking-wider block font-semibold">
                    STATUTORY DILIGENCE
                  </span>
                  <p className="text-slate-200 font-sans text-xs leading-relaxed">
                    Direct title deed verification, escrow account audit checks under Law No. 8/2007, and RERA compliance.
                  </p>
                </div>

                <div className="h-[1px] bg-white/10" />

                <div className="space-y-1">
                  <span className="text-[10px] text-slate-400 uppercase tracking-wider block font-semibold">
                    TRANSACTION GOVERNANCE
                  </span>
                  <p className="text-slate-200 font-sans text-xs leading-relaxed">
                    Escrow-backed conveyancing, GDRFA Golden Visa structuring, and custodian bank coordination.
                  </p>
                </div>

                <div className="h-[1px] bg-white/10" />

                <div className="space-y-1">
                  <span className="text-[10px] text-slate-400 uppercase tracking-wider block font-semibold">
                    STRICT CONFIDENTIALITY
                  </span>
                  <p className="text-slate-200 font-sans text-xs leading-relaxed">
                    Direct principal representation governed by binding non-disclosure covenants.
                  </p>
                </div>
              </div>

            </div>

          </div>

          {/* Discreet Bottom Parameter Strip */}
          <div className="pt-6 border-t border-white/10 flex flex-wrap items-center gap-4 text-[10px] font-mono text-slate-400">
            <span>Direct Principal Representation</span>
            <span>•</span>
            <span>Escrow Protected Conveyancing</span>
            <span>•</span>
            <span>GDRFA Golden Visa Structuring</span>
            <span>•</span>
            <span>Statutory Compliance Oversight</span>
          </div>

        </div>
      </section>

    </div>
  )
}