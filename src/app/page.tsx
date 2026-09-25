'use client'

import * as React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { VERIFIED_PROPERTIES } from '@/lib/data/properties'
import { DUBAI_AREAS } from '@/lib/data/areas'
import { VERIFIED_DEVELOPERS } from '@/lib/data/developers'
import { VERIFIED_LIFESTYLE } from '@/lib/data/lifestyle'
import { NETWORK_ECOSYSTEM_PILLARS } from '@/lib/data/network'
import { SourceBadge } from '@/components/ui/source-badge'
import { MetricBand } from '@/components/layout/layout-primitives'
import {
  ArrowRight,
  ArrowUpRight,
  Calculator
} from 'lucide-react'

export default function Home() {
  const featuredMainProp = VERIFIED_PROPERTIES[0] // One at Palm Jumeirah
  const featuredSideProps = VERIFIED_PROPERTIES.slice(1, 3) // Bulgari Lighthouse, Il Primo
  const remainingProps = VERIFIED_PROPERTIES.slice(3) // Emirates Hills, Atlantis, Lana

  const primaryArea = DUBAI_AREAS[0] // Palm Jumeirah
  const secondaryAreas = DUBAI_AREAS.slice(1, 6) // Downtown, DIFC, Dubai Hills, Emirates Hills, Business Bay

  const aviationLifestyle = VERIFIED_LIFESTYLE.find((l) => l.category === 'aviation') || VERIFIED_LIFESTYLE[0]
  const yachtLifestyle = VERIFIED_LIFESTYLE.find((l) => l.category === 'yachts') || VERIFIED_LIFESTYLE[1]

  return (
    <div className="flex flex-col min-h-screen bg-white text-text-primary">
      {/* ========================================================================= */}
      {/* SECTION 01 — HERO (Apple × FT Architectural Full-Viewport Atmosphere) */}
      {/* ========================================================================= */}
      <section className="relative min-h-[82vh] flex flex-col justify-between pt-10 pb-8 px-4 sm:px-6 lg:px-8 border-b border-border overflow-hidden bg-white">
        <div className="w-full max-w-6xl mx-auto relative z-10 my-auto pt-2 space-y-6">
          <div className="space-y-5 max-w-4xl">
            {/* Display Typography */}
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-surface border border-border text-xs font-semibold text-text-secondary">
                <span className="h-2 w-2 rounded-full bg-emerald-600 animate-pulse" />
                <span className="text-[11px] sm:text-xs">DLD Title Deed Provenance & Institutional Intelligence</span>
              </div>

              <h1 className="text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-black tracking-tighter text-text-primary uppercase leading-[0.9]">
                DUBAI
              </h1>
              
              <p className="text-2xl sm:text-4xl md:text-5xl font-light text-text-secondary tracking-tight max-w-3xl leading-[1.1]">
                Where property, capital and access converge.
              </p>
            </div>

            {/* Statement */}
            <p className="text-sm sm:text-base text-text-secondary max-w-2xl font-normal leading-relaxed">
              Institutional real estate intelligence, statutory underwriting, UAE residency frameworks, and direct navigation of the Dubai capital ecosystem.
            </p>

            {/* CTAs */}
            <div className="pt-2 flex flex-wrap items-center gap-3 sm:gap-4">
              <Link
                href="/properties"
                className="px-6 sm:px-8 py-3.5 sm:py-4 bg-text-primary hover:bg-black text-white text-xs font-bold uppercase tracking-wider rounded-xl transition-all shadow-sm flex items-center gap-2"
              >
                <span>Explore the Market</span>
                <ArrowRight className="h-4 w-4 text-accent" />
              </Link>
              <Link
                href="/private-client"
                className="px-6 sm:px-8 py-3.5 sm:py-4 bg-surface hover:bg-surface-elevated border border-border text-text-primary text-xs font-bold uppercase tracking-wider rounded-xl transition-colors flex items-center gap-2"
              >
                <span>Private Client Desk</span>
                <ArrowUpRight className="h-4 w-4 text-text-muted" />
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom Horizontal Pillar Navigation Rail */}
        <div className="w-full max-w-6xl mx-auto pt-6 border-t border-border mt-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3">
            {[
              { label: '01 • REAL ESTATE', desc: 'Verified Freehold Inventory', href: '/properties' },
              { label: '02 • INVESTMENT', desc: 'Underwriting & Yield Engine', href: '/investment' },
              { label: '03 • RESIDENCY', desc: 'AED 2M Golden Visa Framework', href: '/residency' },
              { label: '04 • NETWORK', desc: 'Capital & Business Ecosystem', href: '/network' },
              { label: '05 • LIFESTYLE', desc: 'Aviation, Yachts & Concierge', href: '/lifestyle' },
            ].map((rail, idx) => (
              <Link
                key={idx}
                href={rail.href}
                className="p-3 rounded-xl border border-border bg-surface-subtle hover:bg-white hover:border-accent transition-all group block"
              >
                <div className="text-[10px] font-mono font-bold text-accent uppercase tracking-wider">
                  {rail.label}
                </div>
                <div className="text-xs font-bold text-text-primary group-hover:text-accent transition-colors mt-0.5 truncate">
                  {rail.desc}
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* SECTION 02 — THE CITY (Editorial Split + Verified Data Rail) */}
      {/* ========================================================================= */}
      <section className="py-20 md:py-28 bg-surface-subtle border-b border-border">
        <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            <div className="lg:col-span-4">
              <span className="text-[11px] font-mono font-bold uppercase tracking-widest text-accent block">
                INSTITUTIONAL CITY PERSPECTIVE
              </span>
              <h2 className="text-4xl sm:text-5xl font-black tracking-tight text-text-primary uppercase mt-1">
                DUBAI
              </h2>
            </div>
            <div className="lg:col-span-8 space-y-4">
              <p className="text-lg sm:text-xl text-text-primary font-normal leading-relaxed">
                Dubai has transformed from a regional trade hub into a premier global wealth management sanctuary, characterized by no UAE personal income tax for qualifying individuals, progressive legal jurisprudence, and world-class physical infrastructure.
              </p>
              <p className="text-xs sm:text-sm text-text-secondary leading-relaxed">
                Navigating this territory requires separating speculative marketing claims from audited title deed records, verified developer escrow accounts, and statutory conveyance tariffs.
              </p>
            </div>
          </div>

          {/* Horizontal Verified Data Rail */}
          <MetricBand
            columns={4}
            items={[
              {
                label: 'Combined Transfer Fees',
                value: '4.00%',
                subtext: 'Combined DLD transfer fees (2% buyer + 2% seller standard breakdown)',
                source: 'DLD OFFICIAL',
              },
              {
                label: 'Personal Taxation',
                value: 'NO PERSONAL TAX',
                unit: 'QUALIFYING INDIVIDUALS',
                subtext: 'No UAE personal income tax on qualifying individual investment income (Cabinet Dec 49/2023)',
                source: 'FTA OFFICIAL',
              },
              {
                label: 'Investor Golden Visa',
                value: '5 or 10',
                unit: 'Years',
                subtext: '5-Yr UAE Govt summary / 10-Yr official service portals (Property value threshold: AED 2,000,000)',
                source: 'UAE GOVT / ICP',
              },
              {
                label: 'Foreign Ownership',
                value: 'Designated Areas',
                unit: 'FREEHOLD ZONES',
                subtext: 'Designated areas for foreign ownership per Regulation No. 3 of 2006',
                source: 'DLD REGULATION',
              },
            ]}
          />
        </div>
      </section>

      {/* ========================================================================= */}
      {/* SECTION 03 — PROPERTY EDITORIAL (1 Large Feature + 2 Side + Horizontal Rail) */}
      {/* ========================================================================= */}
      <section className="py-20 md:py-28 bg-white border-b border-border">
        <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div>
              <span className="text-[11px] font-mono font-bold tracking-widest text-accent uppercase">
                01 • PROPERTY
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-text-primary mt-1">
                The Market, properly framed.
              </h2>
            </div>
            <Link
              href="/properties"
              className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-text-secondary hover:text-accent transition-colors"
            >
              <span>View All Properties ({VERIFIED_PROPERTIES.length})</span>
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          {/* 1 Large + 2 Side Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            {/* Large Featured Property (Col 7) */}
            <div className="lg:col-span-7 group flex flex-col justify-between border border-border rounded-3xl overflow-hidden bg-surface-subtle hover:border-accent transition-all duration-300">
              <div className="relative aspect-[16/10] bg-surface-elevated overflow-hidden">
                <Image
                  src={featuredMainProp.images[0] || 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1200&q=80'}
                  alt={featuredMainProp.title}
                  fill
                  sizes="(max-width: 1024px) 100vw, 60vw"
                  className="object-cover group-hover:scale-102 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 rounded-full text-xs font-bold bg-white/95 backdrop-blur-sm text-text-primary shadow-sm">
                    {featuredMainProp.area_name}
                  </span>
                </div>
              </div>

              <div className="p-6 sm:p-8 space-y-4">
                <div className="flex items-center justify-between text-xs font-mono text-text-muted">
                  <span>{featuredMainProp.developer_name} • {featuredMainProp.project_name}</span>
                  <SourceBadge status="OFFICIAL SOURCE" sourceName="DLD Title Record" />
                </div>
                <div>
                  <h3 className="text-2xl font-black text-text-primary group-hover:text-accent transition-colors">
                    {featuredMainProp.title}
                  </h3>
                  <p className="text-xs text-text-secondary mt-1 line-clamp-2 leading-relaxed">
                    {featuredMainProp.description}
                  </p>
                </div>
                <div className="flex items-center justify-between pt-4 border-t border-border">
                  <div className="text-xs text-text-muted font-mono">
                    {featuredMainProp.bedrooms} BED • {featuredMainProp.internal_area_sqft.toLocaleString()} SQFT
                  </div>
                  <div className="text-xl font-black text-text-primary tabular-nums">
                    AED {featuredMainProp.asking_price?.toLocaleString()}
                  </div>
                </div>
                <Link
                  href={`/properties/${featuredMainProp.id}`}
                  className="w-full py-3 rounded-xl bg-text-primary text-white hover:bg-black text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 transition-colors"
                >
                  <span>Access Property Dossier</span>
                  <ArrowRight className="h-4 w-4 text-accent" />
                </Link>
              </div>
            </div>

            {/* 2 Side Properties (Col 5) */}
            <div className="lg:col-span-5 space-y-6 flex flex-col justify-between">
              {featuredSideProps.map((prop) => (
                <div
                  key={prop.id}
                  className="p-5 rounded-2xl border border-border bg-surface-subtle hover:border-accent transition-all duration-300 flex flex-col justify-between group space-y-4"
                >
                  <div className="relative aspect-[16/9] rounded-xl overflow-hidden bg-surface-elevated">
                    <Image
                      src={prop.images[0] || 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=800&q=80'}
                      alt={prop.title}
                      fill
                      sizes="(max-width: 1024px) 100vw, 40vw"
                      className="object-cover group-hover:scale-102 transition-transform duration-500"
                    />
                    <div className="absolute top-2.5 left-2.5">
                      <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-white/95 text-text-primary shadow-xs">
                        {prop.area_name}
                      </span>
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <div className="text-[10px] font-mono text-text-muted">{prop.developer_name}</div>
                    <h4 className="text-base font-bold text-text-primary group-hover:text-accent transition-colors">
                      {prop.title}
                    </h4>
                    <div className="flex items-center justify-between pt-2 border-t border-border-subtle text-xs">
                      <span className="text-text-muted font-mono">{prop.bedrooms} Bed • {prop.internal_area_sqft.toLocaleString()} sqft</span>
                      <strong className="text-text-primary tabular-nums">AED {prop.asking_price?.toLocaleString()}</strong>
                    </div>
                  </div>

                  <Link
                    href={`/properties/${prop.id}`}
                    className="py-2 px-3 rounded-lg border border-border bg-white hover:bg-surface text-xs font-bold text-center text-text-primary transition-colors flex items-center justify-center gap-1"
                  >
                    <span>View Dossier</span>
                    <ArrowRight className="h-3 w-3 text-accent" />
                  </Link>
                </div>
              ))}
            </div>
          </div>

          {/* Horizontal Property Rail */}
          <div className="pt-6 border-t border-border">
            <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-text-muted block mb-4">
              ADDITIONAL AUDITED ASSETS IN REGISTRY
            </span>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {remainingProps.map((prop) => (
                <Link
                  key={prop.id}
                  href={`/properties/${prop.id}`}
                  className="p-4 rounded-xl border border-border bg-white hover:border-accent hover:shadow-xs transition-all group flex items-center justify-between"
                >
                  <div className="space-y-0.5">
                    <div className="text-xs font-bold text-text-primary group-hover:text-accent transition-colors">
                      {prop.title}
                    </div>
                    <div className="text-[11px] text-text-muted">
                      {prop.area_name} • {prop.bedrooms} Bed • {prop.internal_area_sqft.toLocaleString()} sqft
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-xs font-bold text-text-primary tabular-nums">
                      AED {prop.asking_price?.toLocaleString()}
                    </div>
                    <span className="text-[10px] text-accent font-mono">Dossier →</span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* SECTION 04 — INVESTMENT (Dark Financial Publication Band) */}
      {/* ========================================================================= */}
      <section className="py-20 md:py-28 bg-[#111111] text-white border-b border-border">
        <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="max-w-3xl space-y-4">
            <span className="text-[11px] font-mono font-bold text-accent uppercase tracking-widest">
              02 • CAPITAL
            </span>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tight uppercase leading-[0.98]">
              Underwrite the acquisition,
              <br />
              <span className="text-[#c9a962]">not the story.</span>
            </h2>
            <p className="text-sm sm:text-base text-white/70 max-w-2xl leading-relaxed">
              True real estate underwriting models statutory conveyance charges, debt service covenants, Mollak service charges, and multi-year exit proceeds — separating asking assumptions from achieved performance.
            </p>
          </div>

          {/* Horizontal Methodology Sequence */}
          <div className="grid grid-cols-1 sm:grid-cols-5 gap-3">
            {[
              { step: '01', name: 'ACQUISITION', desc: '4% DLD + Trustee + 2% Brokerage' },
              { step: '02', name: 'INCOME', desc: 'Mollak index & gross rental yield' },
              { step: '03', name: 'FINANCING', desc: 'CBUAE LTV caps & debt service' },
              { step: '04', name: 'HOLDING', desc: 'Operating expenses & Net NOI' },
              { step: '05', name: 'EXIT', desc: 'No personal capital tax & net IRR' },
            ].map((item) => (
              <div
                key={item.step}
                className="p-5 rounded-2xl bg-white/5 border border-white/10 space-y-2"
              >
                <span className="text-xs font-mono font-bold text-[#c9a962]">{item.step}</span>
                <h3 className="text-sm font-bold text-white tracking-wide">{item.name}</h3>
                <p className="text-xs text-white/60 leading-snug">{item.desc}</p>
              </div>
            ))}
          </div>

          {/* Action CTAs */}
          <div className="pt-4 flex flex-wrap items-center gap-4">
            <Link
              href="/investment"
              className="px-8 py-4 bg-white text-black hover:bg-white/90 text-xs font-bold uppercase tracking-wider rounded-xl transition-all shadow-md flex items-center gap-2"
            >
              <span>Open Underwriting Desk</span>
              <Calculator className="h-4 w-4 text-accent" />
            </Link>
            <Link
              href="/investment"
              className="px-8 py-4 bg-white/10 hover:bg-white/15 border border-white/20 text-white text-xs font-bold uppercase tracking-wider rounded-xl transition-colors flex items-center gap-2"
            >
              <span>Underwrite Scenario</span>
              <ArrowRight className="h-4 w-4 text-[#c9a962]" />
            </Link>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* SECTION 05 — RESIDENCY (Timeline & Decision Gateway) */}
      {/* ========================================================================= */}
      <section className="py-20 md:py-28 bg-white border-b border-border">
        <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="max-w-3xl space-y-2">
            <span className="text-[11px] font-mono font-bold tracking-widest text-accent uppercase">
              03 • RESIDENCY
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-text-primary">
              Residency, by the rules.
            </h2>
            <p className="text-sm sm:text-base text-text-secondary leading-relaxed">
              Direct statutory pathways connecting qualifying freehold property acquisitions to the UAE Real Estate Investor Golden Visa (5-Yr UAE summary / 10-Yr service portals) under Cabinet Resolution No. 65 of 2022.
            </p>
          </div>

          {/* Clean Vertical / Grid Timeline */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="p-6 rounded-2xl border border-border bg-surface-subtle space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-mono font-bold text-accent uppercase">01 • STATUTORY THRESHOLD</span>
                <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-emerald-50 text-emerald-800">AED 2,000,000</span>
              </div>
              <h3 className="text-base font-bold text-text-primary">Property Value Threshold</h3>
              <p className="text-xs text-text-secondary leading-relaxed">
                Property value threshold: AED 2,000,000. Ownership, financing, property eligibility and residency requirements are subject to the competent authority&apos;s current rules.
              </p>
            </div>

            <div className="p-6 rounded-2xl border border-border bg-surface-subtle space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-mono font-bold text-accent uppercase">02 • OFFICIAL APPLICATION</span>
                <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-emerald-50 text-emerald-800">5 OR 10 YEARS</span>
              </div>
              <h3 className="text-base font-bold text-text-primary">Official Authority Channel</h3>
              <p className="text-xs text-text-secondary leading-relaxed">
                Investor application via official authority portals (DLD Cube / GDRFA / ICP) encompassing medical examination and biometric Emirates ID capture.
              </p>
            </div>

            <div className="p-6 rounded-2xl border border-border bg-surface-subtle space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-mono font-bold text-accent uppercase">03 • FAMILY SPONSORSHIP</span>
                <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-emerald-50 text-emerald-800">UNRESTRICTED</span>
              </div>
              <h3 className="text-base font-bold text-text-primary">Comprehensive Dependent Rights</h3>
              <p className="text-xs text-text-secondary leading-relaxed">
                Sponsor spouse, unmarried children of any age, and domestic staff. Zero minimum physical presence required to retain residency.
              </p>
            </div>
          </div>

          <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4 p-6 rounded-2xl border border-border bg-surface">
            <div className="space-y-0.5">
              <div className="text-xs font-bold text-text-primary">Interactive Residency Decision Tree</div>
              <div className="text-[11px] text-text-secondary">Determine your potentially relevant official visa pathway in 60 seconds.</div>
            </div>
            <Link
              href="/residency"
              className="px-6 py-2.5 rounded-xl bg-text-primary text-white hover:bg-black text-xs font-bold uppercase tracking-wider transition-colors shrink-0 flex items-center gap-2"
            >
              <span>Explore Decision Flow</span>
              <ArrowRight className="h-4 w-4 text-accent" />
            </Link>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* SECTION 06 — AREAS (Editorial Map & List Composition) */}
      {/* ========================================================================= */}
      <section className="py-20 md:py-28 bg-surface-subtle border-b border-border">
        <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div>
              <span className="text-[11px] font-mono font-bold tracking-widest text-accent uppercase">
                04 • GEOGRAPHY
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-text-primary mt-1">
                A map of the market.
              </h2>
            </div>
            <Link
              href="/areas"
              className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-text-secondary hover:text-accent transition-colors"
            >
              <span>Explore All {DUBAI_AREAS.length} Communities</span>
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            {/* Large Primary Area (Col 7) */}
            <div className="lg:col-span-7 p-6 sm:p-8 rounded-3xl border border-border bg-white flex flex-col justify-between space-y-6">
              <div className="space-y-3">
                <div className="flex items-center justify-between text-xs font-mono">
                  <span className="text-accent font-bold">PRIMARY TERRITORY</span>
                  <span className="text-text-muted">{primaryArea.freehold_status}</span>
                </div>
                <h3 className="text-3xl sm:text-4xl font-black text-text-primary tracking-tight">
                  {primaryArea.name}
                </h3>
                <p className="text-xs sm:text-sm text-text-secondary leading-relaxed">
                  {primaryArea.description}
                </p>
              </div>

              <div className="p-4 rounded-xl bg-surface-subtle border border-border space-y-2 text-xs">
                <div className="font-bold text-text-primary">Master Governance: {primaryArea.master_developer}</div>
                <div className="text-text-secondary leading-snug">{primaryArea.investment_profile}</div>
              </div>

              <Link
                href={`/areas/${primaryArea.slug}`}
                className="w-full py-3 rounded-xl bg-text-primary text-white hover:bg-black text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 transition-colors"
              >
                <span>Explore {primaryArea.name} Dossier</span>
                <ArrowRight className="h-4 w-4 text-accent" />
              </Link>
            </div>

            {/* Typographic Area List (Col 5) */}
            <div className="lg:col-span-5 space-y-3">
              {secondaryAreas.map((area) => (
                <Link
                  key={area.id}
                  href={`/areas/${area.slug}`}
                  className="p-4 rounded-2xl border border-border bg-white hover:border-accent hover:shadow-xs transition-all flex items-center justify-between group block"
                >
                  <div className="space-y-0.5">
                    <div className="text-sm font-bold text-text-primary group-hover:text-accent transition-colors">
                      {area.name}
                    </div>
                    <div className="text-[11px] text-text-muted">Master Developer: {area.master_developer}</div>
                  </div>
                  <div className="text-right">
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-surface border border-border text-text-secondary">
                      {area.freehold_status}
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* SECTION 07 — DEVELOPERS (Typographic Index) */}
      {/* ========================================================================= */}
      <section className="py-20 md:py-28 bg-white border-b border-border">
        <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div>
              <span className="text-[11px] font-mono font-bold tracking-widest text-accent uppercase">
                05 • DEVELOPERS
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-text-primary mt-1">
                A verified registry.
              </h2>
            </div>
            <Link
              href="/developers"
              className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-text-secondary hover:text-accent transition-colors"
            >
              <span>View Full Registry</span>
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          {/* Typographic Index Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {VERIFIED_DEVELOPERS.map((dev, idx) => (
              <Link
                key={dev.id}
                href="/developers"
                className="p-6 rounded-2xl border border-border bg-surface-subtle hover:bg-white hover:border-accent hover:shadow-xs transition-all flex flex-col justify-between space-y-4 group"
              >
                <div className="flex items-center justify-between">
                  <span className="text-xl font-black font-mono text-accent">0{idx + 1}</span>
                  <span className="text-[10px] font-mono text-text-muted">DLD #{dev.dld_developer_number}</span>
                </div>
                <div>
                  <h3 className="text-xl font-black text-text-primary group-hover:text-accent transition-colors">
                    {dev.name}
                  </h3>
                  <p className="text-xs text-text-secondary mt-1">{dev.headquarters}</p>
                </div>
                <div className="pt-2 border-t border-border-subtle text-[11px] text-text-muted font-mono flex items-center justify-between">
                  <span>Audited Developer</span>
                  <ArrowRight className="h-3 w-3 text-text-muted group-hover:text-accent group-hover:translate-x-1 transition-all" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* SECTION 08 — NETWORK (Dark Editorial Ecosystem & Summits) */}
      {/* ========================================================================= */}
      <section className="py-20 md:py-28 bg-[#111111] text-white border-b border-border">
        <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div className="space-y-2">
              <span className="text-[11px] font-mono font-bold text-accent uppercase tracking-widest">
                06 • ACCESS
              </span>
              <h2 className="text-3xl sm:text-5xl font-black tracking-tight uppercase">
                The ecosystem around the asset.
              </h2>
              <p className="text-xs sm:text-sm text-white/70 max-w-2xl">
                Connecting sovereign wealth hubs, family office networks, and private client advisory desks.
              </p>
            </div>
            <Link
              href="/network"
              className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#c9a962] hover:underline"
            >
              <span>Explore Network ({NETWORK_ECOSYSTEM_PILLARS.length} Pillars)</span>
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          {/* 5 Gateways */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3">
            {NETWORK_ECOSYSTEM_PILLARS.map((pillar) => (
              <div
                key={pillar.id}
                className="p-5 rounded-2xl bg-white/5 border border-white/10 hover:border-[#c9a962] transition-colors space-y-3 flex flex-col justify-between"
              >
                <div className="space-y-1">
                  <div className="text-[10px] font-mono text-[#c9a962] font-bold uppercase">{pillar.title}</div>
                  <h3 className="text-xs font-bold text-white">{pillar.subtitle}</h3>
                  <p className="text-[11px] text-white/60 line-clamp-3 leading-snug">{pillar.description}</p>
                </div>
                <div className="pt-2 border-t border-white/10 text-[10px] font-mono text-white/50">
                  {pillar.verified_participants.length} Verified Participants
                </div>
              </div>
            ))}
          </div>

          {/* Verified Flagship Summits */}
          <div className="p-6 rounded-2xl bg-white/5 border border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="space-y-1 text-center md:text-left">
              <div className="text-[10px] font-mono font-bold text-[#c9a962] uppercase tracking-wider">
                VERIFIED ANNUAL CONFERENCES & SUMMITS
              </div>
              <div className="text-sm font-bold text-white">
                GITEX Global • Dubai FinTech Summit • International Property Show • Arabian Travel Market
              </div>
            </div>
            <Link
              href="/network"
              className="px-6 py-2.5 rounded-xl bg-white text-black hover:bg-white/90 text-xs font-bold uppercase tracking-wider transition-colors shrink-0 flex items-center gap-2"
            >
              <span>Request Private Access</span>
              <ArrowRight className="h-3.5 w-3.5 text-accent" />
            </Link>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* SECTION 09 — LIFESTYLE (Cinematic Editorial Mosaic) */}
      {/* ========================================================================= */}
      <section className="py-20 md:py-28 bg-white border-b border-border">
        <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div>
              <span className="text-[11px] font-mono font-bold tracking-widest text-accent uppercase">
                07 • LIFESTYLE
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-text-primary mt-1">
                The city beyond the transaction.
              </h2>
            </div>
            <Link
              href="/lifestyle"
              className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-text-secondary hover:text-accent transition-colors"
            >
              <span>Explore All Sectors</span>
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          {/* Mosaic: 1 Large Aviation + 1 Large Yacht + Mosaic Row */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Aviation */}
            <div className="p-6 sm:p-8 rounded-3xl border border-border bg-surface-subtle space-y-4 group">
              <div className="relative aspect-[16/9] rounded-2xl overflow-hidden bg-surface-elevated">
                <Image
                  src={aviationLifestyle.image || 'https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?auto=format&fit=crop&w=1200&q=80'}
                  alt={aviationLifestyle.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover group-hover:scale-102 transition-transform duration-500"
                />
                <div className="absolute top-3 left-3">
                  <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase bg-white/95 text-text-primary shadow-xs">
                    Private Aviation
                  </span>
                </div>
              </div>
              <div className="space-y-1">
                <div className="text-[10px] font-mono text-text-muted">{aviationLifestyle.operator_name}</div>
                <h3 className="text-xl font-bold text-text-primary">{aviationLifestyle.title}</h3>
                <p className="text-xs text-text-secondary">{aviationLifestyle.description}</p>
              </div>
              <Link
                href="/lifestyle/aviation"
                className="inline-flex items-center gap-1 text-xs font-bold text-accent hover:underline pt-2"
              >
                <span>Aviation Directory & Tariffs</span>
                <ArrowRight className="h-3.5 w-3.5" />
              </Link>
            </div>

            {/* Yachts */}
            <div className="p-6 sm:p-8 rounded-3xl border border-border bg-surface-subtle space-y-4 group">
              <div className="relative aspect-[16/9] rounded-2xl overflow-hidden bg-surface-elevated">
                <Image
                  src={yachtLifestyle.image || 'https://images.unsplash.com/photo-1567899378494-47b22a2ae96a?auto=format&fit=crop&w=1200&q=80'}
                  alt={yachtLifestyle.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover group-hover:scale-102 transition-transform duration-500"
                />
                <div className="absolute top-3 left-3">
                  <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase bg-white/95 text-text-primary shadow-xs">
                    Superyachts
                  </span>
                </div>
              </div>
              <div className="space-y-1">
                <div className="text-[10px] font-mono text-text-muted">{yachtLifestyle.operator_name}</div>
                <h3 className="text-xl font-bold text-text-primary">{yachtLifestyle.title}</h3>
                <p className="text-xs text-text-secondary">{yachtLifestyle.description}</p>
              </div>
              <Link
                href="/lifestyle/yachts"
                className="inline-flex items-center gap-1 text-xs font-bold text-accent hover:underline pt-2"
              >
                <span>Superyacht Charters & Fleets</span>
                <ArrowRight className="h-3.5 w-3.5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* SECTION 10 — PRIVATE CLIENT (Powerful Restrained White Moment) */}
      {/* ========================================================================= */}
      <section className="py-24 md:py-32 bg-surface-subtle">
        <div className="w-full max-w-4xl mx-auto px-4 sm:px-6 text-center space-y-8">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-border text-xs font-semibold text-text-secondary shadow-2xs">
            <span className="h-2 w-2 rounded-full bg-accent" />
            <span>CRISTIAN VĂDUVA PRIVATE CLIENT DESK</span>
          </div>

          <h2 className="text-4xl sm:text-6xl md:text-7xl font-black tracking-tight text-text-primary uppercase leading-[0.95]">
            A more considered way
            <br />
            <span className="text-text-secondary font-light">to approach Dubai.</span>
          </h2>

          <p className="text-base sm:text-lg text-text-secondary max-w-2xl mx-auto leading-relaxed">
            Property · Capital · Residency · Lifestyle · Private advisory for principals, investors and family offices acquiring prime real estate in Dubai.
          </p>

          <div className="pt-6 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/private-client"
              className="w-full sm:w-auto px-8 py-4 bg-text-primary hover:bg-black text-white text-xs font-bold uppercase tracking-widest rounded-xl transition-all shadow-md flex items-center justify-center gap-2"
            >
              <span>Start Confidential Brief</span>
              <ArrowRight className="h-4 w-4 text-accent" />
            </Link>
            <Link
              href="/client"
              className="w-full sm:w-auto px-6 py-4 bg-white hover:bg-surface border border-border text-text-primary text-xs font-bold uppercase tracking-wider rounded-xl transition-colors flex items-center justify-center gap-2"
            >
              <span>Access Client Workspace</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}