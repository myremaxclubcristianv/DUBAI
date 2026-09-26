'use client'

import * as React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { VERIFIED_PROPERTIES } from '@/lib/data/properties'
import { DUBAI_AREAS } from '@/lib/data/areas'
import { VERIFIED_LIFESTYLE } from '@/lib/data/lifestyle'
import { VERIFIED_DEVELOPERS } from '@/lib/data/developers'
import { SourceBadge } from '@/components/ui/source-badge'
import { CadranDial, CadranQuadrant } from '@/components/ui/luxury-cadran'
import {
  ArrowRight,
  ArrowUpRight,
  Calculator,
  ChevronRight,
  ShieldCheck,
  Building2,
  Sparkles,
  Plane,
  Anchor,
  Utensils,
  Landmark,
  Scale,
  TrendingUp,
  Compass,
} from 'lucide-react'

export default function Home() {
  const [selectedPropertyIndex, setSelectedPropertyIndex] = React.useState(0)
  const activeProperty = VERIFIED_PROPERTIES[selectedPropertyIndex] || VERIFIED_PROPERTIES[0]
  
  const primeAreas = DUBAI_AREAS.slice(0, 6)
  const topDevelopers = VERIFIED_DEVELOPERS.slice(0, 5)
  const lifestyleAviation = VERIFIED_LIFESTYLE.find((l) => l.category === 'aviation') || VERIFIED_LIFESTYLE[0]
  const lifestyleYachts = VERIFIED_LIFESTYLE.find((l) => l.category === 'yachts') || VERIFIED_LIFESTYLE[1]
  const lifestyleDining = VERIFIED_LIFESTYLE.find((l) => l.category === 'dining') || VERIFIED_LIFESTYLE[2]

  return (
    <div className="flex flex-col min-h-screen bg-black text-[#f5f5f7] selection:bg-accent/30 selection:text-white">
      {/* ========================================================================= */}
      {/* 01 — HERO: Apple Keynote Product Reveal & Cinematic Showcase              */}
      {/* ========================================================================= */}
      <section className="relative pt-12 pb-20 sm:pt-20 sm:pb-32 overflow-hidden border-b border-white/10">
        {/* Subtle Ambient Apple Light Glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-[600px] h-[300px] sm:h-[400px] bg-radial from-white/10 via-accent/5 to-transparent blur-3xl pointer-events-none -z-10" />

        <div className="w-full max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center text-center space-y-6 max-w-4xl mx-auto">
            {/* Apple Pill Eyebrow */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-white/15 bg-white/5 backdrop-blur-md shadow-inner text-xs font-medium text-[#a1a1a6]">
              <span className="h-1.5 w-1.5 rounded-full bg-accent animate-pulse" />
              <span className="font-mono text-[11px] tracking-wider uppercase text-white font-semibold">
                DUBAI PRIVATE CLIENT PLATFORM
              </span>
              <span className="text-white/20">•</span>
              <span className="text-[11px]">Statutory Intelligence</span>
            </div>

            {/* Apple Keynote Gradient Headline */}
            <h1 className="text-5xl sm:text-7xl lg:text-[80px] font-extrabold tracking-tight text-gradient-silver leading-[0.96]">
              Property. Capital. <br />
              <span className="text-gradient-gold">Absolute Access.</span>
            </h1>

            {/* Restrained Subheadline */}
            <p className="text-lg sm:text-xl text-[#a1a1a6] font-normal leading-relaxed max-w-2xl pt-2">
              An institutional perspective on Dubai prime real estate, deterministic capital underwriting, official Golden Visa pathways, and bespoke lifestyle curation.
            </p>

            {/* Apple Dual Pill CTA Actions */}
            <div className="flex flex-col sm:flex-row items-center gap-3.5 pt-4 w-full sm:w-auto">
              <Link
                href="/properties"
                className="w-full sm:w-auto px-8 py-3.5 rounded-full bg-white text-black hover:bg-white/90 text-xs sm:text-sm font-semibold tracking-tight transition-all shadow-[0_0_30px_rgba(255,255,255,0.2)] hover:scale-[1.02] active:scale-[0.98] flex items-center justify-center gap-2"
              >
                <span>Explore Properties</span>
                <ChevronRight className="h-4 w-4 text-black/60" />
              </Link>
              <Link
                href="/private-client"
                className="w-full sm:w-auto px-8 py-3.5 rounded-full apple-glass hover:bg-white/10 text-white text-xs sm:text-sm font-semibold tracking-tight transition-all flex items-center justify-center gap-2 hover:scale-[1.02] active:scale-[0.98]"
              >
                <span>Private Client Desk</span>
                <ArrowUpRight className="h-4 w-4 text-[#a1a1a6]" />
              </Link>
            </div>
          </div>

          {/* Cinematic Media Showcase Frame */}
          <div className="mt-14 sm:mt-20 relative rounded-[2rem] overflow-hidden border border-white/15 shadow-2xl bg-[#0c0c10]">
            <div className="relative aspect-[16/9] sm:aspect-[21/9] w-full">
              <Image
                src={activeProperty.images[0] || 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=2000&q=85'}
                alt={activeProperty.title}
                fill
                priority
                sizes="(max-width: 1240px) 100vw, 1240px"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
            </div>

            {/* Floating Apple Glass Spec Bar */}
            <div className="absolute bottom-4 left-4 right-4 sm:bottom-6 sm:left-6 sm:right-6 p-4 sm:p-6 rounded-2xl apple-glass flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div className="space-y-1">
                <div className="flex items-center gap-2 text-xs font-mono text-[#a1a1a6]">
                  <span className="text-accent font-bold uppercase">{activeProperty.area_name}</span>
                  <span>•</span>
                  <span>{activeProperty.developer_name}</span>
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-white tracking-tight">
                  {activeProperty.title}
                </h3>
              </div>

              <div className="flex items-center gap-4 sm:gap-6 shrink-0">
                <div className="text-right">
                  <span className="text-[10px] font-mono uppercase tracking-wider text-[#86868b] block">Asking Price</span>
                  <span className="text-lg sm:text-xl font-extrabold text-white tabular-nums">
                    AED {activeProperty.asking_price?.toLocaleString()}
                  </span>
                </div>
                <Link
                  href={`/properties/${activeProperty.id}`}
                  className="px-5 py-2.5 rounded-full bg-white text-black hover:bg-white/90 text-xs font-semibold tracking-tight transition-all flex items-center gap-1.5 shrink-0"
                >
                  <span>Dossier</span>
                  <ArrowRight className="h-3.5 w-3.5 text-black/60" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 02 — APPLE BENTO TECH SPECS (Factual Intelligence Strip)                  */}
      {/* ========================================================================= */}
      <section className="py-20 sm:py-28 border-b border-white/10 bg-[#060608]">
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="max-w-3xl mx-auto text-center space-y-3">
            <span className="text-[10px] font-mono font-semibold uppercase tracking-[0.2em] text-accent block">
              DUBAI, FRAMED DIFFERENTLY
            </span>
            <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white leading-tight">
              Separating verified asset fundamentals from speculative marketing.
            </h2>
            <p className="text-sm sm:text-base text-zinc-400 leading-relaxed max-w-2xl mx-auto">
              We anchor every analysis in published statutory schedules, centralized electronic land records, and institutional underwriting models.
            </p>
          </div>

          {/* 4 Apple Glass Bento Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            <div className="p-7 rounded-3xl apple-glass-card space-y-4 flex flex-col justify-between text-center sm:text-left hover:border-white/20 transition-all">
              <span className="text-[10px] font-mono uppercase tracking-wider text-zinc-400 font-semibold">
                DLD TRANSFER TARIFF
              </span>
              <div className="text-4xl font-extrabold text-white tracking-tight text-gradient-silver tabular-nums">
                4.00%
              </div>
              <p className="text-xs text-zinc-400 leading-relaxed pt-2 border-t border-white/10">
                Statutory tariff schedule per Executive Council Resolution No. 30 of 2013.
              </p>
            </div>

            <div className="p-7 rounded-3xl apple-glass-card space-y-4 flex flex-col justify-between text-center sm:text-left hover:border-white/20 transition-all">
              <span className="text-[10px] font-mono uppercase tracking-wider text-zinc-400 font-semibold">
                PERSONAL INCOME TAX
              </span>
              <div className="text-3xl font-extrabold text-white tracking-tight text-gradient-silver">
                NO PERSONAL TAX
              </div>
              <p className="text-xs text-zinc-400 leading-relaxed pt-2 border-t border-white/10">
                Qualifying individual investment returns (Cabinet Decision No. 49 of 2023).
              </p>
            </div>

            <div className="p-7 rounded-3xl apple-glass-card space-y-4 flex flex-col justify-between text-center sm:text-left hover:border-white/20 transition-all">
              <span className="text-[10px] font-mono uppercase tracking-wider text-zinc-400 font-semibold">
                GOLDEN VISA THRESHOLD
              </span>
              <div className="text-3xl font-extrabold text-white tracking-tight text-gradient-gold tabular-nums">
                AED 2,000,000
              </div>
              <p className="text-xs text-zinc-400 leading-relaxed pt-2 border-t border-white/10">
                Freehold title deed value qualifying natural person investors for long-term residency.
              </p>
            </div>

            <div className="p-7 rounded-3xl apple-glass-card space-y-4 flex flex-col justify-between text-center sm:text-left hover:border-white/20 transition-all">
              <span className="text-[10px] font-mono uppercase tracking-wider text-zinc-400 font-semibold">
                FOREIGN OWNERSHIP
              </span>
              <div className="text-3xl font-extrabold text-white tracking-tight text-gradient-silver">
                DESIGNATED AREAS
              </div>
              <p className="text-xs text-zinc-400 leading-relaxed pt-2 border-t border-white/10">
                Designated freehold areas for foreign nationals (Regulation No. 3 of 2006).
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 02B — LUXURY CADRAN INSTRUMENTS & SOVEREIGN MASTER PLAN                   */}
      {/* ========================================================================= */}
      <section className="py-20 sm:py-28 border-b border-white/10 bg-black">
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          <div className="max-w-3xl mx-auto text-center space-y-3">
            <span className="text-[10px] font-mono font-semibold uppercase tracking-[0.2em] text-accent block">
              PRECISION FINANCIAL INSTRUMENTS
            </span>
            <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white leading-tight">
              Macroeconomic Dials & Sovereign Vectors.
            </h2>
            <p className="text-sm sm:text-base text-zinc-400 leading-relaxed max-w-2xl mx-auto">
              Real-time statutory parameters, currency peg resilience, and long-range infrastructure milestones anchoring Dubai&apos;s capital premium.
            </p>
          </div>

          {/* 4 Cadran Radial Gauges Bank */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <CadranDial
              label="PRIME GROSS YIELD"
              sublabel="Mollak System Achieved Yield"
              value="7.20%"
              unit="ANNUAL CAP RATE"
              targetValue="4.10% (London) / 3.80% (NYC)"
              percentage={72}
              status="OPTIMAL"
              statutoryRef="DLD Mollak Rental Service Index"
              icon={TrendingUp}
            />
            <CadranDial
              label="USD CURRENCY PEG"
              sublabel="CBUAE Statutory Exchange Rate"
              value="3.6725"
              unit="AED / USD FIXED"
              targetValue="Zero FX Variance since 1997"
              percentage={100}
              status="OPTIMAL"
              statutoryRef="Central Bank Monetary Decree"
              icon={Landmark}
            />
            <CadranDial
              label="FREEHOLD JURISDICTION"
              sublabel="Designated Foreign Territories"
              value="68+"
              unit="FREEHOLD ZONES"
              targetValue="Perpetual Foreign Title"
              percentage={88}
              status="VERIFIED"
              statutoryRef="Regulation No. 3 of 2006"
              icon={Scale}
            />
            <CadranDial
              label="TRANSFER FRICTION"
              sublabel="Statutory Closing Tariff"
              value="4.00%"
              unit="COMBINED DLD FEE"
              targetValue="Split 2% Buyer / 2% Seller"
              percentage={80}
              status="STABLE"
              statutoryRef="Executive Council Res. 30/2013"
              icon={Compass}
            />
          </div>

          {/* Dubai 2040 Urban Master Plan Quadrant Matrix */}
          <CadranQuadrant
            eyebrow="SOVEREIGN INFRASTRUCTURE CATALYSTS"
            title="Dubai 2040 Urban Master Plan Milestones"
            statutorySource="Government of Dubai & RTA Official Decrees"
            quadrants={[
              {
                title: 'Metro Blue Line Network',
                value: '30 KM',
                subtext: 'Direct rapid transit connection linking Dubai Creek Harbour, Academic City, and MBR City by 2029.',
                delta: 'UNDERWAY (2029)',
                isPositive: true,
                statutoryRef: 'RTA Executive Board Resolution 2023',
              },
              {
                title: 'Al Maktoum Int Airport (DWC)',
                value: '260M PAX',
                subtext: 'AED 128 Billion sovereign terminal expansion establishing the world\'s largest aviation gateway.',
                delta: 'AED 128B ALLOCATION',
                isPositive: true,
                statutoryRef: 'Dubai Aviation City Corporation Decree',
              },
              {
                title: 'Palm Jebel Ali Waterfront',
                value: '110 KM',
                subtext: 'Doubles Dubai beachfront perimeter, incorporating 80+ palatial resorts and ultra-prime island estates.',
                delta: 'ACTIVE RECLAIM',
                isPositive: true,
                statutoryRef: 'DLD Freehold Master Plan No. 4/2023',
              },
              {
                title: 'Environmental Sanctuaries',
                value: '60% AREA',
                subtext: 'Statutory protection reserving 60% of Dubai total land area for natural sanctuaries and green corridors.',
                delta: 'MANDATED',
                isPositive: true,
                statutoryRef: 'Dubai 2040 Urban Master Plan Law',
              },
            ]}
          />
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 03 — "EXPLORE THE LINEUP" — Apple Flagship Asset Showcase                 */}
      {/* ========================================================================= */}
      <section className="py-20 sm:py-32 border-b border-white/10 bg-black">
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          {/* Section Header */}
          <div className="max-w-3xl mx-auto text-center space-y-3">
            <span className="text-[10px] font-mono font-semibold tracking-[0.2em] text-accent uppercase block">
              SELECTED DUBAI PROPERTIES
            </span>
            <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white">
              Explore the collection.
            </h2>
            <p className="text-sm sm:text-base text-zinc-400 max-w-xl mx-auto leading-relaxed">
              Curated freehold trophy penthouses and beachfront mansions carrying verified title registration.
            </p>
          </div>

          {/* Apple Style Asset Tab Bar Switcher */}
          <div className="flex items-center justify-center gap-2 overflow-x-auto pb-2 scrollbar-none">
            {VERIFIED_PROPERTIES.slice(0, 4).map((prop, idx) => (
              <button
                key={prop.id}
                onClick={() => setSelectedPropertyIndex(idx)}
                className={`px-5 py-2.5 rounded-full text-xs font-semibold whitespace-nowrap transition-all cursor-pointer ${
                  selectedPropertyIndex === idx
                    ? 'bg-white text-black shadow-lg scale-[1.02]'
                    : 'bg-white/5 text-zinc-400 hover:text-white hover:bg-white/10 border border-white/10'
                }`}
              >
                <span>{prop.title.split('—')[0].split(',')[0]}</span>
              </button>
            ))}
          </div>

          {/* Active Featured Property Spread */}
          <div className="rounded-[32px] border border-white/15 bg-[#0a0a0e] overflow-hidden grid grid-cols-1 lg:grid-cols-12 items-stretch shadow-2xl">
            {/* Left Media (7 Cols) */}
            <div className="lg:col-span-7 relative min-h-[380px] sm:min-h-[480px]">
              <Image
                src={activeProperty.images[0]}
                alt={activeProperty.title}
                fill
                sizes="(max-width: 1024px) 100vw, 58vw"
                className="object-cover"
              />
              <div className="absolute top-5 left-5">
                <span className="px-3.5 py-1 rounded-full text-[10px] font-mono font-bold bg-black/70 backdrop-blur-md border border-white/20 text-accent">
                  0{selectedPropertyIndex + 1} / PRIMARY ASSET
                </span>
              </div>
            </div>

            {/* Right Data Sheet (5 Cols) */}
            <div className="lg:col-span-5 p-6 sm:p-10 flex flex-col justify-between space-y-8 bg-gradient-to-b from-[#121218] to-[#0a0a0c]">
              <div className="space-y-4">
                <div className="flex items-center justify-between gap-2">
                  <span className="text-xs font-mono uppercase tracking-wider text-accent font-semibold">
                    {activeProperty.area_name}
                  </span>
                  <SourceBadge status="OFFICIAL SOURCE" sourceName="DLD Title Record" />
                </div>

                <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight leading-snug">
                  {activeProperty.title}
                </h3>

                <p className="text-xs sm:text-sm text-[#a1a1a6] leading-relaxed">
                  {activeProperty.description}
                </p>
              </div>

              <div className="space-y-6 pt-6 border-t border-white/10">
                <div className="grid grid-cols-2 gap-4 text-xs font-mono">
                  <div className="p-3 rounded-xl bg-white/5 border border-white/5">
                    <span className="text-[10px] text-[#86868b] uppercase block">Bedrooms</span>
                    <span className="text-sm font-bold text-white">{activeProperty.bedrooms} Bed</span>
                  </div>
                  <div className="p-3 rounded-xl bg-white/5 border border-white/5">
                    <span className="text-[10px] text-[#86868b] uppercase block">Internal Area</span>
                    <span className="text-sm font-bold text-white">{activeProperty.internal_area_sqft.toLocaleString()} SQFT</span>
                  </div>
                  <div className="p-3 rounded-xl bg-white/5 border border-white/5">
                    <span className="text-[10px] text-[#86868b] uppercase block">Price / SQFT</span>
                    <span className="text-sm font-bold text-white">AED {activeProperty.price_per_sqft?.toLocaleString()}</span>
                  </div>
                  <div className="p-3 rounded-xl bg-white/5 border border-white/5">
                    <span className="text-[10px] text-[#86868b] uppercase block">Asking Price</span>
                    <span className="text-sm font-extrabold text-accent tabular-nums">
                      AED {activeProperty.asking_price?.toLocaleString()}
                    </span>
                  </div>
                </div>

                <Link
                  href={`/properties/${activeProperty.id}`}
                  className="w-full py-3.5 rounded-full bg-white hover:bg-white/90 text-black text-xs font-semibold tracking-tight transition-all flex items-center justify-center gap-2 shadow-lg"
                >
                  <span>Access Asset Dossier</span>
                  <ArrowRight className="h-4 w-4 text-black/60" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 04 — "ENGINEERED FOR CAPITAL" — Apple Style Underwriting Memorandum      */}
      {/* ========================================================================= */}
      <section className="py-20 sm:py-32 border-b border-white/10 bg-[#08080a]">
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          {/* Centered Keynote Header */}
          <div className="max-w-3xl mx-auto text-center space-y-3">
            <span className="text-[10px] font-mono font-semibold text-accent uppercase tracking-[0.2em] block">
              CAPITAL UNDERWRITING
            </span>
            <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white leading-tight">
              Underwrite the acquisition.
            </h2>
            <p className="text-sm sm:text-base text-zinc-400 max-w-2xl mx-auto leading-relaxed">
              Deterministic mathematical modeling separating statutory conveyance tariffs, debt covenants, Mollak service charges, and multi-year exit proceeds.
            </p>
            <div className="pt-2 flex justify-center">
              <Link
                href="/investment"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-white text-black hover:bg-zinc-200 text-xs font-semibold tracking-tight transition-all shadow-lg"
              >
                <Calculator className="h-4 w-4 text-accent" />
                <span>Open Underwriting Desk</span>
              </Link>
            </div>
          </div>

          {/* Research Rows */}
          <div className="max-w-4xl mx-auto divide-y divide-white/10 border-y border-white/10">
            {[
              {
                code: '01',
                title: 'ACQUISITION TARIFFS & COSTS',
                items: [
                  'DLD TRANSFER: 4% combined statutory transfer tariff (2% buyer + 2% seller under Executive Council Resolution No. 30 of 2013 schedule).',
                  'TRANSACTION COSTS: AED 4,000 (+VAT) trustee registration fee, title deed issuance, and agreed commercial brokerage where applicable.'
                ]
              },
              {
                code: '02',
                title: 'FINANCING & LEVERAGE',
                items: [
                  'CBUAE mortgage regulatory loan-to-value caps (up to 80% resident / 60–80% non-resident).',
                  'Deterministic debt service modeling across fixed and variable margin terms.'
                ]
              },
              {
                code: '03',
                title: 'INCOME & NET OPERATING INCOME',
                items: [
                  'Gross rental yield modeling vs Net Operating Income (NOI).',
                  'Deduction of approved Mollak statutory service charge budgets and property management.'
                ]
              },
              {
                code: '04',
                title: 'HOLDING & PRESERVATION',
                items: [
                  'Statutory reserve sinking funds, building maintenance allocations, and property insurance.',
                  'Tenancy retention schedules and statutory rental index escalation caps.'
                ]
              },
              {
                code: '05',
                title: 'CAPITAL REALIZATION & EXIT',
                items: [
                  'Capital realization modeling with no UAE personal capital gains tax on qualifying individual investment income.',
                  'Statutory compliance and escrow release verification upon transfer.'
                ]
              },
            ].map((row) => (
              <div key={row.code} className="py-6 flex items-start gap-5">
                <span className="text-xs font-mono font-bold text-accent shrink-0 pt-0.5">
                  {row.code}
                </span>
                <div className="space-y-1.5">
                  <h4 className="text-sm font-bold text-white uppercase tracking-wider">
                    {row.title}
                  </h4>
                  <div className="space-y-1 text-xs text-zinc-400 leading-relaxed">
                    {row.items.map((item, i) => (
                      <p key={i}>{item}</p>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 05 — RESIDENCY (Apple Step-by-Step Interactive Workflow)                   */}
      {/* ========================================================================= */}
      <section className="py-20 sm:py-32 border-b border-white/10 bg-black">
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          {/* Centered Section Header */}
          <div className="max-w-3xl mx-auto text-center space-y-3">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/[0.04] border border-white/10">
              <span className="text-[10px] font-mono font-semibold tracking-[0.2em] text-accent uppercase">
                GOLDEN RESIDENCY FRAMEWORK
              </span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white">
              The official UAE framework.
            </h2>
            <p className="text-sm sm:text-base text-zinc-400 max-w-xl mx-auto leading-relaxed">
              Statutory long-term residency pathways pursuant to Cabinet Resolution No. 65 of 2022.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Criterion Card */}
            <div className="lg:col-span-4 p-8 rounded-3xl apple-glass-card space-y-4 text-center sm:text-left">
              <span className="text-[10px] font-mono font-semibold uppercase tracking-wider text-accent block">
                STATUTORY PROPERTY CRITERION
              </span>
              <div className="text-4xl font-extrabold text-white text-gradient-gold tabular-nums">
                AED 2,000,000
              </div>
              <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed">
                Official freehold title deed valuation qualifying natural person investors for long-term Golden Residency status.
              </p>
              
              <div className="pt-4 border-t border-white/10 space-y-2 text-[11px] text-zinc-400 leading-relaxed font-mono">
                <div className="flex items-start gap-1.5 justify-center sm:justify-start">
                  <ShieldCheck className="h-4 w-4 text-accent shrink-0 mt-0.5" />
                  <span><strong>Statutory Reference:</strong> Cabinet Resolution No. 65 of 2022.</span>
                </div>
                <p className="text-[10px] text-zinc-500">
                  *Operational paths and duration confirmed with the competent authority (GDRFA / ICP / DLD Cube).
                </p>
              </div>
            </div>

            {/* 6 Step Interactive Timeline */}
            <div className="lg:col-span-8 space-y-3">
              <div className="text-xs font-mono text-zinc-400 pb-2 uppercase tracking-wider">
                ILLUSTRATIVE OPERATIONAL STAGES:
              </div>
              <div className="divide-y divide-white/10 border-y border-white/10">
                {[
                  { step: '01', title: 'ELIGIBILITY ASSESSMENT', desc: 'Verify qualifying freehold property investment title registered with DLD.' },
                  { step: '02', title: 'TITLE DEED ISSUANCE', desc: 'Electronic Title Deed issued under Law No. 7 of 2006 meeting statutory threshold.' },
                  { step: '03', title: 'DOCUMENTATION', desc: 'Attested certificates, passport verification, and financial proofs.' },
                  { step: '04', title: 'PORTAL SUBMISSION', desc: 'Filing through DLD Cube or official GDRFA / ICP federal channels.' },
                  { step: '05', title: 'AUTHORITY CLEARANCE', desc: 'Medical fitness assessment and Emirates ID biometric registration.' },
                  { step: '06', title: 'PERMIT ISSUANCE', desc: 'Residency permit issued per prevailing statutory regulations.' },
                ].map((item) => (
                  <div key={item.step} className="py-4 flex flex-col sm:flex-row sm:items-baseline gap-2 sm:gap-6 group hover:bg-white/5 px-3 rounded-2xl transition-colors">
                    <div className="flex items-center gap-3 shrink-0 sm:w-56">
                      <span className="text-xs font-mono font-bold text-accent">{item.step}</span>
                      <h4 className="text-xs font-bold text-white uppercase tracking-wider">{item.title}</h4>
                    </div>
                    <p className="text-xs text-zinc-400 leading-relaxed">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 06 — "EXPLORE TERRITORIES" — Geography Atlas (Apple Maps Style)           */}
      {/* ========================================================================= */}
      <section className="py-20 sm:py-32 border-b border-white/10 bg-[#08080a]">
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          {/* Centered Section Header */}
          <div className="max-w-3xl mx-auto text-center space-y-3">
            <span className="text-[10px] font-mono font-semibold tracking-[0.2em] text-accent uppercase block">
              DUBAI GEOGRAPHY ATLAS
            </span>
            <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white">
              Prime Freehold Territories.
            </h2>
            <p className="text-sm sm:text-base text-zinc-400 max-w-xl mx-auto leading-relaxed">
              Spatial boundaries and master developments designated for international ownership under Regulation No. 3 of 2006.
            </p>
          </div>

          {/* Atlas Bento Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {primeAreas.map((area) => (
              <Link
                key={area.id}
                href={`/areas/${area.slug}`}
                className="p-7 rounded-3xl apple-glass-card hover:border-white/20 transition-all group flex flex-col justify-between space-y-6 hover:scale-[1.01]"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between text-xs font-mono">
                    <span className="text-accent font-bold uppercase">{area.master_developer}</span>
                    <span className="text-[10px] text-zinc-400 px-2 py-0.5 rounded-full bg-white/5">FREEHOLD</span>
                  </div>
                  <h3 className="text-xl font-bold text-white group-hover:text-accent transition-colors">
                    {area.name}
                  </h3>
                  <p className="text-xs text-zinc-400 leading-relaxed line-clamp-3">
                    {area.description}
                  </p>
                </div>
                <div className="pt-4 border-t border-white/10 flex items-center justify-between text-xs font-semibold text-zinc-400 group-hover:text-white">
                  <span>Explore Territory</span>
                  <ChevronRight className="h-4 w-4 text-accent group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 07 — DEVELOPERS (Registry Table Directory)                                */}
      {/* ========================================================================= */}
      <section className="py-20 sm:py-28 border-b border-white/10 bg-black">
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          {/* Centered Section Header */}
          <div className="max-w-3xl mx-auto text-center space-y-3">
            <span className="text-[10px] font-mono font-semibold tracking-[0.2em] text-accent uppercase block">
              DEVELOPERS REGISTRY
            </span>
            <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white">
              The names behind Dubai&apos;s landmarks.
            </h2>
            <p className="text-sm sm:text-base text-zinc-400 max-w-xl mx-auto leading-relaxed">
              Tier-1 master developers registered with the Dubai Land Department and RERA.
            </p>
          </div>

          <div className="max-w-4xl mx-auto divide-y divide-white/10 border-y border-white/10">
            {topDevelopers.map((dev) => (
              <div key={dev.id} className="py-6 flex flex-col md:flex-row md:items-center justify-between gap-4 group hover:bg-white/5 px-4 rounded-2xl transition-colors">
                <div className="space-y-1.5 max-w-lg">
                  <div className="flex items-center gap-3">
                    <h3 className="text-base font-bold text-white uppercase tracking-wide">{dev.name}</h3>
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-white/10 text-accent font-semibold">
                      DLD #{dev.dld_developer_number}
                    </span>
                  </div>
                  <p className="text-xs text-zinc-400 leading-relaxed">{dev.portfolio_overview.substring(0, 130)}...</p>
                </div>
                <div className="flex flex-wrap items-center gap-3 sm:gap-5 text-xs font-mono text-zinc-400 shrink-0">
                  <span>Founded {dev.founded_year}</span>
                  <span className="text-accent">•</span>
                  <span>DLD Approved Registry</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 08 — THE ECOSYSTEM (Institutional Multi-Column Directory)                 */}
      {/* ========================================================================= */}
      <section className="py-20 sm:py-28 border-b border-white/10 bg-[#08080a]">
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          {/* Centered Section Header */}
          <div className="max-w-3xl mx-auto text-center space-y-3">
            <span className="text-[10px] font-mono font-semibold tracking-[0.2em] text-accent uppercase block">
              THE ECOSYSTEM
            </span>
            <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white">
              Institutions &amp; service categories.
            </h2>
            <p className="text-sm sm:text-base text-zinc-400 max-w-xl mx-auto leading-relaxed">
              Navigating statutory regulators, civil &amp; common law courts, and licensed operators.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 pt-2">
            {[
              {
                code: '01',
                title: 'REAL ESTATE',
                items: ['Dubai Land Department (DLD)', 'Real Estate Regulatory Agency (RERA)', 'Electronic Land Registry', 'Mollak Service Charge System']
              },
              {
                code: '02',
                title: 'PRIVATE WEALTH',
                items: ['Central Bank of the UAE (CBUAE)', 'Licensed Private Banks', 'Custody Infrastructure', 'Mortgage Regulations']
              },
              {
                code: '03',
                title: 'JURISDICTIONS',
                items: ['DIFC Common Law Courts', 'ADGM Wealth Structuring', 'Mainland Commercial Registers', 'SPV & Foundation Vehicles']
              },
              {
                code: '04',
                title: 'LEGAL & TAX',
                items: ['Federal Tax Authority (FTA)', 'Conveyancing Legal Counsels', 'Public Notary Desks', 'Double Tax Treaties (DTT)']
              },
              {
                code: '05',
                title: 'MARITIME & AVIATION',
                items: ['Dubai Civil Aviation Authority', 'DMCA Luxury Maritime Registries', 'Department of Economy & Tourism', 'Executive FBO Terminals']
              },
            ].map((eco) => (
              <div key={eco.code} className="space-y-3 p-6 rounded-3xl apple-glass-card">
                <span className="text-xs font-mono font-bold text-accent block">
                  {eco.code}
                </span>
                <h3 className="text-xs font-bold uppercase tracking-wider text-white border-b border-white/10 pb-2">
                  {eco.title}
                </h3>
                <ul className="space-y-2 text-xs text-zinc-400">
                  {eco.items.map((item, i) => (
                    <li key={i} className="leading-snug">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 09 — BEYOND THE ASSET (Apple TV+ Style Curated Lifestyle Spread)           */}
      {/* ========================================================================= */}
      <section className="py-20 sm:py-32 border-b border-white/10 bg-black">
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          {/* Centered Section Header */}
          <div className="max-w-3xl mx-auto text-center space-y-3">
            <span className="text-[10px] font-mono font-semibold tracking-[0.2em] text-accent uppercase block">
              BEYOND THE ASSET
            </span>
            <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white">
              Aviation, superyachts &amp; gastronomy.
            </h2>
            <p className="text-sm sm:text-base text-zinc-400 max-w-xl mx-auto leading-relaxed">
              Curated private aviation charters, superyacht berths, and Michelin-starred dining.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
            {/* Dominant Feature: Aviation (7 Cols) */}
            <div className="lg:col-span-7 rounded-3xl overflow-hidden border border-white/15 apple-glass-card flex flex-col justify-between">
              <div className="relative aspect-[16/10] w-full">
                <Image
                  src={lifestyleAviation.image || 'https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?auto=format&fit=crop&w=1200&q=80'}
                  alt={lifestyleAviation.title}
                  fill
                  sizes="(max-width: 1024px) 100vw, 58vw"
                  className="object-cover"
                />
                <div className="absolute top-5 left-5">
                  <span className="px-3 py-1 rounded-full text-[10px] font-mono font-bold bg-black/70 backdrop-blur-md border border-white/20 text-accent flex items-center gap-1">
                    <Plane className="h-3 w-3" />
                    <span>PRIVATE AVIATION</span>
                  </span>
                </div>
              </div>
              <div className="p-8 space-y-3">
                <h3 className="text-2xl font-bold text-white">{lifestyleAviation.title}</h3>
                <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed line-clamp-3">{lifestyleAviation.description}</p>
                <div className="pt-2">
                  <Link
                    href="/lifestyle/aviation"
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-accent hover:underline uppercase tracking-wider font-mono"
                  >
                    <span>View Aviation Directory &amp; Tariffs →</span>
                  </Link>
                </div>
              </div>
            </div>

            {/* 2 Stacked Media Cards (5 Cols) */}
            <div className="lg:col-span-5 flex flex-col gap-8">
              <div className="rounded-3xl overflow-hidden border border-white/15 apple-glass-card flex flex-col">
                <div className="relative aspect-[16/9] w-full">
                  <Image
                    src={lifestyleYachts.image || 'https://images.unsplash.com/photo-1567899378494-47b22a2ae96a?auto=format&fit=crop&w=800&q=80'}
                    alt={lifestyleYachts.title}
                    fill
                    sizes="(max-width: 1024px) 100vw, 42vw"
                    className="object-cover"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="px-2.5 py-0.5 rounded-full text-[9px] font-mono font-bold bg-black/70 backdrop-blur-md border border-white/20 text-accent flex items-center gap-1">
                      <Anchor className="h-2.5 w-2.5" />
                      <span>SUPERYACHTS</span>
                    </span>
                  </div>
                </div>
                <div className="p-6 space-y-2">
                  <h4 className="text-base font-bold text-white">{lifestyleYachts.title}</h4>
                  <p className="text-xs text-zinc-400 line-clamp-2 leading-relaxed">{lifestyleYachts.description}</p>
                  <Link
                    href="/lifestyle/yachts"
                    className="inline-flex items-center gap-1 text-xs font-semibold text-accent hover:underline pt-1 font-mono uppercase tracking-wider"
                  >
                    <span>Yacht Charters &amp; Berthing →</span>
                  </Link>
                </div>
              </div>

              <div className="rounded-3xl overflow-hidden border border-white/15 apple-glass-card flex flex-col">
                <div className="relative aspect-[16/9] w-full">
                  <Image
                    src={lifestyleDining.image || 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=800&q=80'}
                    alt={lifestyleDining.title}
                    fill
                    sizes="(max-width: 1024px) 100vw, 42vw"
                    className="object-cover"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="px-2.5 py-0.5 rounded-full text-[9px] font-mono font-bold bg-black/70 backdrop-blur-md border border-white/20 text-accent flex items-center gap-1">
                      <Utensils className="h-2.5 w-2.5" />
                      <span>MICHELIN GASTRONOMY</span>
                    </span>
                  </div>
                </div>
                <div className="p-6 space-y-2">
                  <h4 className="text-base font-bold text-white">{lifestyleDining.title}</h4>
                  <p className="text-xs text-zinc-400 line-clamp-2 leading-relaxed">{lifestyleDining.description}</p>
                  <Link
                    href="/lifestyle/dining"
                    className="inline-flex items-center gap-1 text-xs font-semibold text-accent hover:underline pt-1 font-mono uppercase tracking-wider"
                  >
                    <span>Dining Directory &amp; Tables →</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 10 — PRIVATE CLIENT (Apple Pro Bespoke Invitation)                        */}
      {/* ========================================================================= */}
      <section className="py-24 sm:py-36 bg-radial from-[#181820] via-black to-black text-center relative overflow-hidden">
        <div className="w-full max-w-4xl mx-auto px-4 sm:px-6 space-y-8">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full apple-glass text-xs font-semibold text-[#a1a1a6]">
            <span className="h-1.5 w-1.5 rounded-full bg-accent animate-pulse" />
            <span className="font-mono uppercase tracking-wider text-[11px] text-white">DISCREET PRIVATE ADVISORY</span>
          </div>

          <h2 className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-gradient-silver leading-tight">
            A more considered way to approach Dubai.
          </h2>

          <p className="text-base sm:text-lg text-[#a1a1a6] max-w-2xl mx-auto leading-relaxed">
            Private advisory for principals, investors and family offices acquiring prime real estate, underwriting capital structures, and securing statutory residency in Dubai.
          </p>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-left max-w-2xl mx-auto pt-2">
            {[
              { name: 'Property', icon: Building2 },
              { name: 'Capital', icon: Calculator },
              { name: 'Residency', icon: ShieldCheck },
              { name: 'Lifestyle', icon: Sparkles }
            ].map((pillar, idx) => {
              const Icon = pillar.icon
              return (
                <div key={idx} className="p-4 rounded-2xl apple-glass-card text-center space-y-1">
                  <Icon className="h-4 w-4 text-accent mx-auto" />
                  <span className="text-xs font-semibold text-white uppercase tracking-wider block font-mono">{pillar.name}</span>
                </div>
              )
            })}
          </div>

          <div className="pt-6 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/private-client"
              className="w-full sm:w-auto px-10 py-4 rounded-full bg-white hover:bg-white/90 text-black text-xs sm:text-sm font-semibold tracking-tight transition-all shadow-[0_0_40px_rgba(255,255,255,0.2)] hover:scale-[1.02] active:scale-[0.98] flex items-center justify-center gap-2"
            >
              <span>Start Private Client Brief</span>
              <ChevronRight className="h-4 w-4 text-black/60" />
            </Link>
            <Link
              href="/client"
              className="w-full sm:w-auto px-8 py-4 rounded-full apple-glass hover:bg-white/10 text-white text-xs sm:text-sm font-semibold tracking-tight transition-all flex items-center justify-center gap-2 hover:scale-[1.02] active:scale-[0.98]"
            >
              <span>Client Workspace</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}