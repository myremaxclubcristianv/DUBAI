'use client'

import * as React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { VERIFIED_PROPERTIES } from '@/lib/data/properties'
import { DUBAI_AREAS } from '@/lib/data/areas'
import { VERIFIED_LIFESTYLE } from '@/lib/data/lifestyle'
import { VERIFIED_DEVELOPERS } from '@/lib/data/developers'
import { SourceBadge } from '@/components/ui/source-badge'
import {
  ArrowRight,
  ArrowUpRight,
  Calculator,
  ChevronRight
} from 'lucide-react'

export default function Home() {
  const dominantProperty = VERIFIED_PROPERTIES[0] // One at Palm Jumeirah
  const secondaryProperties = VERIFIED_PROPERTIES.slice(1, 3) // Bulgari Lighthouse & Il Primo
  const primeAreas = DUBAI_AREAS.slice(0, 6)
  const topDevelopers = VERIFIED_DEVELOPERS.slice(0, 5)
  const lifestyleAviation = VERIFIED_LIFESTYLE.find((l) => l.category === 'aviation') || VERIFIED_LIFESTYLE[0]
  const lifestyleYachts = VERIFIED_LIFESTYLE.find((l) => l.category === 'yachts') || VERIFIED_LIFESTYLE[1]
  const lifestyleDining = VERIFIED_LIFESTYLE.find((l) => l.category === 'dining') || VERIFIED_LIFESTYLE[2]

  return (
    <div className="flex flex-col min-h-screen bg-white text-text-primary">
      {/* ========================================================================= */}
      {/* 01 — HERO (Editorial Opening: Proportional Left Text + Right Hero Image)  */}
      {/* ========================================================================= */}
      <section className="relative pt-10 pb-14 sm:pt-14 sm:pb-20 lg:pt-16 lg:pb-24 bg-white border-b border-border">
        <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
            {/* Left: Typographic Narrative (~42% on desktop) */}
            <div className="lg:col-span-5 space-y-6 sm:space-y-8">
              <div className="space-y-4">
                <div className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                  <span className="text-[11px] font-mono font-bold tracking-widest text-accent uppercase">
                    DUBAI / PRIVATE CLIENT PLATFORM
                  </span>
                </div>

                <h1 className="text-4xl sm:text-5xl lg:text-[52px] font-black tracking-tight text-text-primary uppercase leading-[1.02]">
                  Property.
                  <br />
                  Capital.
                  <br />
                  <span className="text-text-secondary font-light">Access.</span>
                </h1>

                <p className="text-base sm:text-lg text-text-secondary font-normal leading-relaxed max-w-md pt-1">
                  A private-client view of Dubai real estate, investment underwriting, statutory residency frameworks, and curated lifestyle.
                </p>
              </div>

              {/* Two Restrained Actions */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-2">
                <Link
                  href="/properties"
                  className="px-6 py-3.5 bg-text-primary hover:bg-black text-white text-xs font-bold uppercase tracking-wider transition-colors shadow-2xs flex items-center justify-center gap-2"
                >
                  <span>Explore Properties</span>
                  <ArrowRight className="h-4 w-4 text-accent" />
                </Link>
                <Link
                  href="/private-client"
                  className="px-6 py-3.5 bg-surface hover:bg-surface-elevated border border-border text-text-primary text-xs font-bold uppercase tracking-wider transition-colors flex items-center justify-center gap-2"
                >
                  <span>Private Client Desk</span>
                  <ArrowUpRight className="h-4 w-4 text-text-muted" />
                </Link>
              </div>
            </div>

            {/* Right: Architectural Hero Visual (~58% on desktop) */}
            <div className="lg:col-span-7 space-y-3">
              <div className="relative aspect-[16/11] border border-border bg-surface-elevated overflow-hidden">
                <Image
                  src={dominantProperty.images[0] || 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1600&q=80'}
                  alt="Dubai Prime Architecture"
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 58vw"
                  className="object-cover"
                />
              </div>
              <div className="flex flex-wrap items-center justify-between gap-2 text-xs text-text-muted font-mono pt-1">
                <div className="flex items-center gap-2">
                  <span className="font-bold text-text-primary uppercase">{dominantProperty.area_name}</span>
                  <span>•</span>
                  <span className="line-clamp-1">{dominantProperty.title}</span>
                </div>
                <div className="flex items-center gap-3 shrink-0">
                  <span className="text-accent text-[10px] tracking-wider uppercase font-semibold">DLD REGISTERED</span>
                  <span className="font-bold text-text-primary">AED {dominantProperty.asking_price?.toLocaleString()}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 02 — MARKET / POSITIONING STATEMENT & FACTUAL STRIP                       */}
      {/* ========================================================================= */}
      <section className="bg-[#fafaf8] py-14 sm:py-18 border-b border-border">
        <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          <div className="max-w-3xl space-y-3">
            <span className="text-[11px] font-mono font-bold uppercase tracking-widest text-accent">
              DUBAI, FRAMED DIFFERENTLY
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-text-primary leading-tight">
              Separating verified asset fundamentals from speculative marketing.
            </h2>
            <p className="text-sm sm:text-base text-text-secondary leading-relaxed pt-1">
              We anchor every analysis in published statutory schedules, centralized electronic land records, and institutional underwriting models across four disciplined dimensions: Property, Capital, Residency, and Lifestyle.
            </p>
          </div>

          {/* 4 Editorial Columns Separated by Thin Vertical Rules */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 border-t border-border pt-8 gap-y-6 lg:gap-y-0 lg:divide-x lg:divide-border">
            <div className="lg:pr-6 space-y-1.5">
              <span className="text-[10px] font-mono uppercase tracking-widest text-text-muted font-bold block">
                DLD TRANSFER TARIFF
              </span>
              <div className="text-2xl sm:text-3xl font-extrabold text-text-primary tracking-tight tabular-nums">
                4.00%
              </div>
              <p className="text-xs text-text-secondary leading-relaxed pt-1">
                Statutory tariff schedule per Executive Council Resolution No. 30 of 2013.
              </p>
            </div>

            <div className="sm:border-t sm:border-border lg:border-t-0 sm:pt-6 lg:pt-0 sm:pr-6 lg:px-6 space-y-1.5">
              <span className="text-[10px] font-mono uppercase tracking-widest text-text-muted font-bold block">
                PERSONAL INCOME TAX
              </span>
              <div className="text-2xl sm:text-3xl font-extrabold text-text-primary tracking-tight">
                NO PERSONAL TAX
              </div>
              <p className="text-xs text-text-secondary leading-relaxed pt-1">
                Qualifying individual investment returns (Cabinet Decision No. 49 of 2023).
              </p>
            </div>

            <div className="border-t border-border sm:border-t-0 pt-6 sm:pt-0 lg:px-6 space-y-1.5">
              <span className="text-[10px] font-mono uppercase tracking-widest text-text-muted font-bold block">
                GOLDEN VISA THRESHOLD
              </span>
              <div className="text-2xl sm:text-3xl font-extrabold text-text-primary tracking-tight tabular-nums">
                AED 2,000,000
              </div>
              <p className="text-xs text-text-secondary leading-relaxed pt-1">
                Freehold title value qualifying for 5 / 10-year investor residency.
              </p>
            </div>

            <div className="border-t border-border sm:border-t-0 pt-6 sm:pt-0 lg:pl-6 space-y-1.5">
              <span className="text-[10px] font-mono uppercase tracking-widest text-text-muted font-bold block">
                FOREIGN OWNERSHIP
              </span>
              <div className="text-2xl sm:text-3xl font-extrabold text-text-primary tracking-tight">
                DESIGNATED AREAS
              </div>
              <p className="text-xs text-text-secondary leading-relaxed pt-1">
                Designated freehold areas for foreign nationals (Regulation No. 3 of 2006).
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 03 — THE MARKET (Selected Dubai Properties — Rebuilt Editorial Spread)   */}
      {/* ========================================================================= */}
      <section className="py-16 sm:py-24 bg-white border-b border-border">
        <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 pb-4 border-b border-border">
            <div>
              <span className="text-[11px] font-mono font-bold tracking-widest text-accent uppercase">
                THE MARKET
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-text-primary mt-1">
                Selected Dubai Properties.
              </h2>
            </div>
            <Link
              href="/properties"
              className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-text-secondary hover:text-accent transition-colors"
            >
              <span>View Full Property Catalogue ({VERIFIED_PROPERTIES.length})</span>
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          {/* Editorial Spread: 01 Primary Asset (~64%) + 02 & 03 Secondary Assets (~36%) */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Primary Asset (01) */}
            <div className="lg:col-span-7 border border-border bg-white flex flex-col">
              <div className="p-4 border-b border-border flex items-center justify-between text-xs font-mono">
                <span className="font-bold text-accent">01 / PRIMARY ASSET</span>
                <span className="text-text-muted uppercase">{dominantProperty.area_name}</span>
              </div>
              
              <div className="relative aspect-[16/10] bg-surface-elevated overflow-hidden">
                <Image
                  src={dominantProperty.images[0]}
                  alt={dominantProperty.title}
                  fill
                  sizes="(max-width: 1024px) 100vw, 58vw"
                  className="object-cover"
                />
              </div>

              <div className="p-6 sm:p-7 space-y-5">
                <div className="flex flex-wrap items-center justify-between gap-2 text-xs font-mono text-text-muted">
                  <span>{dominantProperty.developer_name} • {dominantProperty.project_name}</span>
                  <SourceBadge status="OFFICIAL SOURCE" sourceName="DLD Title Record" />
                </div>

                <div className="space-y-2">
                  <h3 className="text-xl sm:text-2xl font-extrabold text-text-primary tracking-tight">
                    {dominantProperty.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-text-secondary line-clamp-2 leading-relaxed">
                    {dominantProperty.description}
                  </p>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 py-3 border-y border-border text-xs">
                  <div>
                    <span className="text-[9px] font-mono text-text-muted uppercase block">BEDROOMS</span>
                    <span className="font-bold text-text-primary font-mono">{dominantProperty.bedrooms} Bed</span>
                  </div>
                  <div>
                    <span className="text-[9px] font-mono text-text-muted uppercase block">INTERNAL AREA</span>
                    <span className="font-bold text-text-primary font-mono">{dominantProperty.internal_area_sqft.toLocaleString()} SQFT</span>
                  </div>
                  <div>
                    <span className="text-[9px] font-mono text-text-muted uppercase block">PRICE / SQFT</span>
                    <span className="font-bold text-text-primary font-mono">AED {dominantProperty.price_per_sqft?.toLocaleString()}</span>
                  </div>
                  <div>
                    <span className="text-[9px] font-mono text-text-muted uppercase block">ASKING PRICE</span>
                    <span className="font-extrabold text-text-primary font-mono tabular-nums">
                      AED {dominantProperty.asking_price?.toLocaleString()}
                    </span>
                  </div>
                </div>

                <div>
                  <Link
                    href={`/properties/${dominantProperty.id}`}
                    className="w-full py-3.5 bg-text-primary hover:bg-black text-white text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 transition-colors"
                  >
                    <span>Access Asset Dossier</span>
                    <ArrowRight className="h-4 w-4 text-accent" />
                  </Link>
                </div>
              </div>
            </div>

            {/* Secondary Assets (02 & 03) */}
            <div className="lg:col-span-5 flex flex-col gap-6">
              {secondaryProperties.map((prop, idx) => (
                <div
                  key={prop.id}
                  className="border border-border bg-white flex flex-col"
                >
                  <div className="p-3.5 border-b border-border flex items-center justify-between text-xs font-mono">
                    <span className="font-bold text-accent">0{idx + 2} / CURATED ASSET</span>
                    <span className="text-text-muted uppercase">{prop.area_name}</span>
                  </div>

                  <div className="relative aspect-[16/9] bg-surface-elevated overflow-hidden">
                    <Image
                      src={prop.images[0]}
                      alt={prop.title}
                      fill
                      sizes="(max-width: 1024px) 100vw, 42vw"
                      className="object-cover"
                    />
                  </div>

                  <div className="p-5 space-y-3">
                    <div className="text-[10px] font-mono text-text-muted uppercase">
                      {prop.developer_name} • {prop.project_name}
                    </div>
                    <h4 className="text-base font-bold text-text-primary tracking-tight">
                      {prop.title}
                    </h4>
                    
                    <div className="flex items-center justify-between py-2 border-t border-border text-xs font-mono">
                      <span className="text-text-muted">{prop.bedrooms} Bed • {prop.internal_area_sqft.toLocaleString()} sqft</span>
                      <strong className="text-text-primary tabular-nums">AED {prop.asking_price?.toLocaleString()}</strong>
                    </div>

                    <Link
                      href={`/properties/${prop.id}`}
                      className="w-full py-2.5 border border-border bg-surface hover:bg-white text-xs font-bold uppercase tracking-wider text-center text-text-primary transition-colors flex items-center justify-center gap-1.5"
                    >
                      <span>View Dossier</span>
                      <ArrowRight className="h-3.5 w-3.5 text-accent" />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 04 — CAPITAL (Institutional Investment Memorandum)                        */}
      {/* ========================================================================= */}
      <section className="py-16 sm:py-24 bg-[#111111] text-white border-b border-border">
        <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
            {/* Left Statement */}
            <div className="lg:col-span-5 space-y-6">
              <span className="text-[11px] font-mono font-bold text-[#c9a962] uppercase tracking-widest block">
                CAPITAL UNDERWRITING
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight uppercase leading-tight text-white">
                Underwrite the acquisition, not the story.
              </h2>
              <p className="text-sm text-white/70 leading-relaxed">
                Deterministic mathematical modeling separating statutory conveyance tariffs, debt covenants, Mollak service charges, and multi-year exit proceeds.
              </p>
              <div className="pt-2">
                <Link
                  href="/investment"
                  className="inline-flex items-center gap-2 px-6 py-3.5 bg-white text-black hover:bg-white/90 text-xs font-bold uppercase tracking-wider transition-all shadow-md"
                >
                  <span>Open Underwriting Desk</span>
                  <Calculator className="h-4 w-4 text-accent" />
                </Link>
              </div>
            </div>

            {/* Right Numbered Memorandum Rows */}
            <div className="lg:col-span-7 divide-y divide-white/10 border-y border-white/10">
              {[
                {
                  code: '01',
                  title: 'ACQUISITION',
                  desc: '4% statutory DLD transfer tariff + AED 4,000 trustee registration fee + verified transaction costs.',
                },
                {
                  code: '02',
                  title: 'FINANCING',
                  desc: 'CBUAE mortgage regulatory loan-to-value caps (up to 80% resident / 60–80% non-resident) and debt service.',
                },
                {
                  code: '03',
                  title: 'INCOME',
                  desc: 'Gross rental yield modeling vs Net Operating Income (NOI) after approved Mollak service budgets.',
                },
                {
                  code: '04',
                  title: 'HOLDING',
                  desc: 'Statutory sinking funds, building management fees, property insurance, and tenant retention schedules.',
                },
                {
                  code: '05',
                  title: 'EXIT',
                  desc: 'Capital realization with no UAE personal capital gains tax on qualifying individual investment income.',
                },
              ].map((row) => (
                <div key={row.code} className="py-4.5 flex items-start gap-4">
                  <span className="text-sm font-mono font-bold text-[#c9a962] shrink-0 pt-0.5">
                    {row.code}
                  </span>
                  <div className="space-y-1">
                    <h4 className="text-sm font-bold text-white uppercase tracking-wide">
                      {row.title}
                    </h4>
                    <p className="text-xs text-white/70 leading-relaxed">
                      {row.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 05 — RESIDENCY (Institutional UAE Framework Roadmap)                      */}
      {/* ========================================================================= */}
      <section className="py-16 sm:py-24 bg-white border-b border-border">
        <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 pb-4 border-b border-border">
            <div>
              <span className="text-[11px] font-mono font-bold tracking-widest text-accent uppercase">
                RESIDENCY FRAMEWORK
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-text-primary mt-1">
                A route through the official UAE framework.
              </h2>
            </div>
            <Link
              href="/residency"
              className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-text-secondary hover:text-accent transition-colors"
            >
              <span>Review Statutory Guidelines</span>
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          {/* Golden Visa Threshold Callout & 6-Stage Process */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            <div className="lg:col-span-4 p-6 sm:p-8 bg-surface border border-border space-y-3">
              <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-accent">
                STATUTORY PROPERTY CRITERION
              </span>
              <div className="text-3xl sm:text-4xl font-extrabold text-text-primary tabular-nums">
                AED 2,000,000
              </div>
              <p className="text-xs text-text-secondary leading-relaxed">
                Official freehold title deed valuation qualifying natural person investors for 5 or 10-year Golden Residency status.
              </p>
            </div>

            {/* 6-Stage Informational Framework */}
            <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              {[
                { step: '01', title: 'Eligibility', desc: 'Qualifying freehold property investment registered with DLD.' },
                { step: '02', title: 'Property / Ownership', desc: 'Electronic Title Deed issuance under Law No. 7 of 2006.' },
                { step: '03', title: 'Documentation', desc: 'Attested certificates, passport verification, and financial proofs.' },
                { step: '04', title: 'Application', desc: 'Submission via DLD Cube or official GDRFA / ICP portals.' },
                { step: '05', title: 'Authority Review', desc: 'Medical fitness evaluation and biometric capture.' },
                { step: '06', title: 'Issuance', desc: 'Residency permit issued per Cabinet Resolution No. 65 of 2022.' },
              ].map((item) => (
                <div key={item.step} className="p-4 bg-surface border border-border space-y-1.5">
                  <span className="text-xs font-mono font-bold text-accent">{item.step}</span>
                  <h4 className="text-xs font-bold text-text-primary uppercase tracking-wider">{item.title}</h4>
                  <p className="text-xs text-text-secondary leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 06 — GEOGRAPHY (Prime Freehold Territories)                                */}
      {/* ========================================================================= */}
      <section className="py-16 sm:py-24 bg-[#fafaf8] border-b border-border">
        <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 pb-4 border-b border-border">
            <div>
              <span className="text-[11px] font-mono font-bold tracking-widest text-accent uppercase">
                GEOGRAPHY
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-text-primary mt-1">
                Prime Freehold Territories.
              </h2>
            </div>
            <Link
              href="/areas"
              className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-text-secondary hover:text-accent transition-colors"
            >
              <span>Explore Prime Atlas ({DUBAI_AREAS.length} Areas)</span>
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          {/* 6 Geographic Destinations */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {primeAreas.map((area) => (
              <Link
                key={area.id}
                href={`/areas/${area.slug}`}
                className="p-6 bg-white border border-border hover:border-accent transition-colors group flex flex-col justify-between space-y-4"
              >
                <div className="space-y-2">
                  <div className="flex items-center justify-between text-xs font-mono">
                    <span className="text-accent font-bold uppercase">{area.master_developer}</span>
                    <span className="text-[10px] text-text-muted">DESIGNATED AREA</span>
                  </div>
                  <h3 className="text-xl font-bold text-text-primary group-hover:text-accent transition-colors">
                    {area.name}
                  </h3>
                  <p className="text-xs text-text-secondary leading-relaxed line-clamp-3">
                    {area.description}
                  </p>
                </div>
                <div className="pt-3 border-t border-border-subtle flex items-center justify-between text-xs font-semibold text-text-secondary group-hover:text-accent">
                  <span>Explore Atlas</span>
                  <ChevronRight className="h-4 w-4 group-hover:translate-x-0.5 transition-transform" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 07 — DEVELOPERS (The Names Behind Dubai's Landmarks)                      */}
      {/* ========================================================================= */}
      <section className="py-16 sm:py-24 bg-white border-b border-border">
        <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 pb-4 border-b border-border">
            <div>
              <span className="text-[11px] font-mono font-bold tracking-widest text-accent uppercase">
                DEVELOPERS
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-text-primary mt-1">
                The names behind Dubai&apos;s most important developments.
              </h2>
            </div>
            <Link
              href="/developers"
              className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-text-secondary hover:text-accent transition-colors"
            >
              <span>View Developer Registry</span>
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          {/* Restrained Developer Directory List (5 Names) */}
          <div className="divide-y divide-border border-y border-border">
            {topDevelopers.map((dev) => (
              <div key={dev.id} className="py-5 flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div className="space-y-1 max-w-md">
                  <div className="flex items-center gap-2">
                    <h3 className="text-base font-bold text-text-primary uppercase">{dev.name}</h3>
                    <span className="text-[10px] font-mono px-2 py-0.5 bg-surface border border-border text-text-muted">
                      DLD #{dev.dld_developer_number}
                    </span>
                  </div>
                  <p className="text-xs text-text-secondary">{dev.portfolio_overview.substring(0, 120)}...</p>
                </div>
                <div className="flex items-center gap-4 text-xs font-mono text-text-muted shrink-0">
                  <span>Founded {dev.founded_year}</span>
                  <span className="text-accent">•</span>
                  <span>Listed in DLD approved developer registry</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 08 — THE ECOSYSTEM (Editorial Directory — No Card Wall)                    */}
      {/* ========================================================================= */}
      <section className="py-16 sm:py-24 bg-[#fafaf8] border-b border-border">
        <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 pb-4 border-b border-border">
            <div>
              <span className="text-[11px] font-mono font-bold tracking-widest text-accent uppercase">
                THE ECOSYSTEM
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-text-primary mt-1">
                Institutions &amp; service categories surrounding an acquisition.
              </h2>
            </div>
            <Link
              href="/network"
              className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-text-secondary hover:text-accent transition-colors"
            >
              <span>Explore Ecosystem Map</span>
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          {/* Typographic Multi-Column Directory */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 pt-4">
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
                title: 'JURISDICTIONS & STRUCTURING',
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
              <div key={eco.code} className="space-y-3">
                <span className="text-xs font-mono font-bold text-accent block">
                  {eco.code}
                </span>
                <h3 className="text-xs font-bold uppercase tracking-wider text-text-primary border-b border-border pb-2">
                  {eco.title}
                </h3>
                <ul className="space-y-2 text-xs text-text-secondary">
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
      {/* 09 — BEYOND THE ASSET (Curated Editorial Lifestyle)                       */}
      {/* ========================================================================= */}
      <section className="py-16 sm:py-24 bg-white border-b border-border">
        <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 pb-4 border-b border-border">
            <div>
              <span className="text-[11px] font-mono font-bold tracking-widest text-accent uppercase">
                BEYOND THE ASSET
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-text-primary mt-1">
                Aviation, superyachts &amp; gastronomy.
              </h2>
            </div>
            <Link
              href="/lifestyle"
              className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-text-secondary hover:text-accent transition-colors"
            >
              <span>Explore Lifestyle Directory</span>
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          {/* High-End Editorial Spread */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Dominant Feature: Aviation (~58%) */}
            <div className="lg:col-span-7 border border-border bg-white flex flex-col">
              <div className="p-3.5 border-b border-border flex items-center justify-between text-xs font-mono">
                <span className="font-bold text-accent uppercase">PRIVATE AVIATION &amp; FBO</span>
                <span className="text-text-muted">OMDW / DWC</span>
              </div>
              <div className="relative aspect-[16/10] bg-surface-elevated overflow-hidden">
                <Image
                  src={lifestyleAviation.image || 'https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?auto=format&fit=crop&w=1200&q=80'}
                  alt={lifestyleAviation.title}
                  fill
                  sizes="(max-width: 1024px) 100vw, 58vw"
                  className="object-cover"
                />
              </div>
              <div className="p-6 space-y-2">
                <h3 className="text-xl font-bold text-text-primary">{lifestyleAviation.title}</h3>
                <p className="text-xs sm:text-sm text-text-secondary leading-relaxed line-clamp-3">{lifestyleAviation.description}</p>
                <div className="pt-2">
                  <Link
                    href="/lifestyle/aviation"
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-accent hover:underline uppercase tracking-wider font-mono"
                  >
                    <span>View Aviation Directory &amp; Tariffs →</span>
                  </Link>
                </div>
              </div>
            </div>

            {/* 2 Stacked Editorial Features (~42%) */}
            <div className="lg:col-span-5 flex flex-col gap-6">
              <div className="border border-border bg-white flex flex-col">
                <div className="p-3 border-b border-border flex items-center justify-between text-xs font-mono">
                  <span className="font-bold text-accent uppercase">SUPERYACHTS</span>
                  <span className="text-text-muted">DMCA REGISTER</span>
                </div>
                <div className="relative aspect-[16/9] bg-surface-elevated overflow-hidden">
                  <Image
                    src={lifestyleYachts.image || 'https://images.unsplash.com/photo-1567899378494-47b22a2ae96a?auto=format&fit=crop&w=800&q=80'}
                    alt={lifestyleYachts.title}
                    fill
                    sizes="(max-width: 1024px) 100vw, 42vw"
                    className="object-cover"
                  />
                </div>
                <div className="p-4 space-y-1.5">
                  <h4 className="text-base font-bold text-text-primary">{lifestyleYachts.title}</h4>
                  <p className="text-xs text-text-secondary line-clamp-2">{lifestyleYachts.description}</p>
                  <Link
                    href="/lifestyle/yachts"
                    className="inline-flex items-center gap-1 text-xs font-bold text-accent hover:underline pt-1 font-mono uppercase tracking-wider"
                  >
                    <span>Yacht Charters &amp; Berthing →</span>
                  </Link>
                </div>
              </div>

              <div className="border border-border bg-white flex flex-col">
                <div className="p-3 border-b border-border flex items-center justify-between text-xs font-mono">
                  <span className="font-bold text-accent uppercase">MICHELIN GASTRONOMY</span>
                  <span className="text-text-muted">GUIDE 2026</span>
                </div>
                <div className="relative aspect-[16/9] bg-surface-elevated overflow-hidden">
                  <Image
                    src={lifestyleDining.image || 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=800&q=80'}
                    alt={lifestyleDining.title}
                    fill
                    sizes="(max-width: 1024px) 100vw, 42vw"
                    className="object-cover"
                  />
                </div>
                <div className="p-4 space-y-1.5">
                  <h4 className="text-base font-bold text-text-primary">{lifestyleDining.title}</h4>
                  <p className="text-xs text-text-secondary line-clamp-2">{lifestyleDining.description}</p>
                  <Link
                    href="/lifestyle/dining"
                    className="inline-flex items-center gap-1 text-xs font-bold text-accent hover:underline pt-1 font-mono uppercase tracking-wider"
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
      {/* 10 — PRIVATE CLIENT (Quiet Luxury Private Office Moment)                  */}
      {/* ========================================================================= */}
      <section className="py-20 sm:py-28 bg-white">
        <div className="w-full max-w-4xl mx-auto px-4 sm:px-6 text-center space-y-8">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-surface border border-border text-xs font-semibold text-text-secondary">
            <span className="h-1.5 w-1.5 rounded-full bg-accent" />
            <span className="font-mono uppercase tracking-wider text-[11px]">DISCREET PRIVATE ADVISORY</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-text-primary uppercase leading-tight">
            A more considered way to approach Dubai.
          </h2>

          <p className="text-base sm:text-lg text-text-secondary max-w-2xl mx-auto leading-relaxed">
            Private advisory for principals, investors and family offices acquiring prime real estate, underwriting capital structures, and securing statutory residency in Dubai.
          </p>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-left max-w-2xl mx-auto pt-2">
            {['Property', 'Capital', 'Residency', 'Lifestyle'].map((pillar, idx) => (
              <div key={idx} className="p-3.5 border border-border bg-surface text-center">
                <span className="text-xs font-bold text-text-primary uppercase tracking-wider block font-mono">{pillar}</span>
              </div>
            ))}
          </div>

          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/private-client"
              className="w-full sm:w-auto px-8 py-4 bg-text-primary hover:bg-black text-white text-xs font-bold uppercase tracking-widest transition-all shadow-md flex items-center justify-center gap-2"
            >
              <span>Start Private Client Brief</span>
              <ArrowRight className="h-4 w-4 text-accent" />
            </Link>
            <Link
              href="/client"
              className="w-full sm:w-auto px-6 py-4 bg-surface hover:bg-surface-elevated border border-border text-text-primary text-xs font-bold uppercase tracking-wider transition-colors flex items-center justify-center gap-2"
            >
              <span>Client Workspace</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}