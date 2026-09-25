'use client'

import * as React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { VERIFIED_PROPERTIES } from '@/lib/data/properties'
import { DUBAI_AREAS } from '@/lib/data/areas'
import { VERIFIED_LIFESTYLE } from '@/lib/data/lifestyle'
import { SourceBadge } from '@/components/ui/source-badge'
import {
  ArrowRight,
  ArrowUpRight,
  Calculator,
  CheckCircle2,
  ChevronRight
} from 'lucide-react'

export default function Home() {
  const dominantProperty = VERIFIED_PROPERTIES[0] // One at Palm Jumeirah
  const secondaryProperties = VERIFIED_PROPERTIES.slice(1, 3) // Bulgari Lighthouse & Il Primo
  const primaryArea = DUBAI_AREAS[0] // Palm Jumeirah
  const secondaryAreas = DUBAI_AREAS.slice(1, 7) // 6 indexed areas
  const lifestyleAviation = VERIFIED_LIFESTYLE.find((l) => l.category === 'aviation') || VERIFIED_LIFESTYLE[0]
  const lifestyleYachts = VERIFIED_LIFESTYLE.find((l) => l.category === 'yachts') || VERIFIED_LIFESTYLE[1]
  const lifestyleDining = VERIFIED_LIFESTYLE.find((l) => l.category === 'dining') || VERIFIED_LIFESTYLE[2]

  return (
    <div className="flex flex-col min-h-screen bg-white text-text-primary">
      {/* ========================================================================= */}
      {/* 1. HERO — EDITORIAL COMPOSITION (Left Typography + Right Architectural Visual) */}
      {/* ========================================================================= */}
      <section className="relative pt-12 pb-16 md:pt-20 md:pb-24 bg-white">
        <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            {/* Left: Typographic Anchor */}
            <div className="lg:col-span-6 space-y-8">
              <div className="space-y-4">
                <div className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-accent" />
                  <span className="text-[11px] font-mono font-bold tracking-widest text-accent uppercase">
                    DUBAI • PRIVATE CLIENT & INVESTMENT INTELLIGENCE
                  </span>
                </div>

                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-text-primary uppercase leading-[0.96]">
                  Property.
                  <br />
                  Capital.
                  <br />
                  Residency.
                  <br />
                  <span className="text-text-secondary font-light">Access.</span>
                </h1>

                <p className="text-base sm:text-lg text-text-secondary font-normal leading-relaxed pt-2 max-w-lg">
                  A private-client platform for navigating Dubai real estate, institutional investment underwriting, statutory residency frameworks, and lifestyle access.
                </p>
              </div>

              {/* Action CTAs */}
              <div className="flex flex-wrap items-center gap-3 sm:gap-4 pt-1">
                <Link
                  href="/properties"
                  className="px-6 py-3.5 bg-text-primary hover:bg-black text-white text-xs font-bold uppercase tracking-wider rounded-xl transition-all shadow-sm flex items-center gap-2"
                >
                  <span>Explore Verified Assets</span>
                  <ArrowRight className="h-4 w-4 text-accent" />
                </Link>
                <Link
                  href="/private-client"
                  className="px-6 py-3.5 bg-surface hover:bg-surface-elevated border border-border text-text-primary text-xs font-bold uppercase tracking-wider rounded-xl transition-colors flex items-center gap-2"
                >
                  <span>Private Advisory Desk</span>
                  <ArrowUpRight className="h-4 w-4 text-text-muted" />
                </Link>
              </div>
            </div>

            {/* Right: Architectural Feature Visual */}
            <div className="lg:col-span-6">
              <div className="relative aspect-[16/11] rounded-2xl overflow-hidden border border-border bg-surface-elevated shadow-sm group">
                <Image
                  src={dominantProperty.images[0] || 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1200&q=80'}
                  alt="Dubai Prime Architecture"
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover group-hover:scale-102 transition-transform duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent pointer-events-none" />
                <div className="absolute bottom-6 left-6 right-6 text-white space-y-1.5 pointer-events-auto">
                  <div className="flex items-center justify-between text-[11px] font-mono tracking-wider text-white/80">
                    <span>{dominantProperty.area_name}</span>
                    <span className="text-[#c9a962]">DLD REGISTERED TITLE DEED</span>
                  </div>
                  <h3 className="text-xl font-bold text-white tracking-tight">
                    {dominantProperty.title}
                  </h3>
                  <div className="flex items-center justify-between pt-2 border-t border-white/20 text-xs text-white/90 font-mono">
                    <span>{dominantProperty.developer_name}</span>
                    <span className="font-bold text-white">AED {dominantProperty.asking_price?.toLocaleString()}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 2. FIRST DATA RAIL — RESTRAINED INSTITUTIONAL HORIZONTAL METRIC STRIP     */}
      {/* ========================================================================= */}
      <section className="border-y border-border bg-[#fafaf8] py-8">
        <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Metric 01 */}
            <div className="space-y-1.5">
              <span className="text-[10px] font-mono uppercase tracking-widest text-text-muted font-bold block">
                DLD TRANSFER
              </span>
              <div className="text-3xl font-extrabold text-text-primary tracking-tight tabular-nums">
                4.00%
              </div>
              <p className="text-xs text-text-secondary leading-relaxed pt-1">
                Combined statutory transfer tariff (2% buyer + 2% seller standard schedule per Law No. 7 of 2006).
              </p>
            </div>

            {/* Metric 02 */}
            <div className="space-y-1.5">
              <span className="text-[10px] font-mono uppercase tracking-widest text-text-muted font-bold block">
                PERSONAL TAX
              </span>
              <div className="text-3xl font-extrabold text-text-primary tracking-tight">
                NO PERSONAL TAX
              </div>
              <p className="text-xs text-text-secondary leading-relaxed pt-1">
                No UAE personal income tax on qualifying individual investment income (Cabinet Decision No. 49 of 2023).
              </p>
            </div>

            {/* Metric 03 */}
            <div className="space-y-1.5">
              <span className="text-[10px] font-mono uppercase tracking-widest text-text-muted font-bold block">
                GOLDEN RESIDENCY
              </span>
              <div className="text-3xl font-extrabold text-text-primary tracking-tight tabular-nums">
                5 / 10 YEARS
              </div>
              <p className="text-xs text-text-secondary leading-relaxed pt-1">
                5-Yr UAE summary / 10-Yr official portals. Property value threshold: AED 2,000,000.
              </p>
            </div>

            {/* Metric 04 */}
            <div className="space-y-1.5">
              <span className="text-[10px] font-mono uppercase tracking-widest text-text-muted font-bold block">
                FOREIGN OWNERSHIP — DESIGNATED AREAS
              </span>
              <div className="text-3xl font-extrabold text-text-primary tracking-tight">
                100% TITLE
              </div>
              <p className="text-xs text-text-secondary leading-relaxed pt-1">
                Designated freehold zones per Regulation No. 3 of 2006 determining areas for foreign ownership.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 3. SECTION 01 — THE MARKET (Editorial Research Perspective)              */}
      {/* ========================================================================= */}
      <section className="py-16 md:py-24 bg-white border-b border-border">
        <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 border-b border-border">
            <div className="space-y-1.5 max-w-xl">
              <span className="text-[11px] font-mono font-bold uppercase tracking-widest text-accent">
                01 • THE MARKET
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-text-primary">
                Selected verified indicators.
              </h2>
            </div>
            <p className="text-xs sm:text-sm text-text-secondary max-w-md leading-relaxed">
              Institutional market research grounded in published statutory schedules and regulatory frameworks per Dubai Land Department and UAE Federal Tax Authority.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-xs text-text-secondary">
            <div className="space-y-2 border-l-2 border-accent pl-4">
              <h4 className="font-bold text-text-primary text-sm">Statutory Conveyancing</h4>
              <p className="leading-relaxed">
                Transactions are recorded on the centralized electronic land register. The 4% transfer fee is governed under Executive Council Resolution No. 30 of 2013 with standard 2% buyer and 2% seller customary apportionment.
              </p>
            </div>
            <div className="space-y-2 border-l-2 border-border pl-4">
              <h4 className="font-bold text-text-primary text-sm">Tenancy & RERA Index</h4>
              <p className="leading-relaxed">
                Rent increases are capped under Dubai Decree No. 43 of 2013 based on market variance tiers, ensuring predictable tenant retention models and clear landlord notice requirements.
              </p>
            </div>
            <div className="space-y-2 border-l-2 border-border pl-4">
              <h4 className="font-bold text-text-primary text-sm">Escrow Governance</h4>
              <p className="leading-relaxed">
                Off-plan acquisitions require audited project escrow accounts under Dubai Law No. 8 of 2007, tying developer fund releases directly to verified construction milestones.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 4. SECTION 02 — PROPERTY FEATURE (1 Large + 2 Secondary Stacked)         */}
      {/* ========================================================================= */}
      <section className="py-16 md:py-24 bg-surface-subtle border-b border-border">
        <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 pb-4 border-b border-border">
            <div>
              <span className="text-[11px] font-mono font-bold tracking-widest text-accent uppercase">
                02 • PROPERTY
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-text-primary mt-1">
                Selected Dubai opportunities.
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

          {/* Architectural Asymmetric Composition */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
            {/* Large Dominant Property (Col 7) */}
            <div className="lg:col-span-7 border border-border rounded-2xl overflow-hidden bg-white flex flex-col justify-between group">
              <div className="relative aspect-[16/10] bg-surface-elevated overflow-hidden">
                <Image
                  src={dominantProperty.images[0]}
                  alt={dominantProperty.title}
                  fill
                  sizes="(max-width: 1024px) 100vw, 60vw"
                  className="object-cover group-hover:scale-102 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 rounded-full text-xs font-bold bg-white/95 backdrop-blur-sm text-text-primary shadow-xs">
                    {dominantProperty.area_name}
                  </span>
                </div>
              </div>

              <div className="p-6 sm:p-8 space-y-4">
                <div className="flex items-center justify-between text-xs font-mono text-text-muted">
                  <span>{dominantProperty.developer_name} • {dominantProperty.project_name}</span>
                  <SourceBadge status="OFFICIAL SOURCE" sourceName="DLD Title Record" />
                </div>
                <div>
                  <h3 className="text-2xl font-extrabold text-text-primary group-hover:text-accent transition-colors">
                    {dominantProperty.title}
                  </h3>
                  <p className="text-xs text-text-secondary mt-1.5 line-clamp-2 leading-relaxed">
                    {dominantProperty.description}
                  </p>
                </div>
                <div className="flex items-center justify-between pt-4 border-t border-border text-xs">
                  <div className="text-text-muted font-mono">
                    {dominantProperty.bedrooms} BED • {dominantProperty.internal_area_sqft.toLocaleString()} SQFT
                  </div>
                  <div className="text-xl font-extrabold text-text-primary tabular-nums">
                    AED {dominantProperty.asking_price?.toLocaleString()}
                  </div>
                </div>
                <Link
                  href={`/properties/${dominantProperty.id}`}
                  className="w-full py-3 rounded-xl bg-text-primary text-white hover:bg-black text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 transition-colors"
                >
                  <span>Access Asset Dossier</span>
                  <ArrowRight className="h-4 w-4 text-accent" />
                </Link>
              </div>
            </div>

            {/* Asymmetrical Stacked Secondary Properties (Col 5) */}
            <div className="lg:col-span-5 flex flex-col justify-between gap-6">
              {secondaryProperties.map((prop) => (
                <div
                  key={prop.id}
                  className="p-5 rounded-2xl border border-border bg-white hover:border-accent transition-all flex flex-col justify-between group space-y-3"
                >
                  <div className="relative aspect-[16/9] rounded-xl overflow-hidden bg-surface-elevated">
                    <Image
                      src={prop.images[0]}
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

                  <div className="space-y-1">
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
                    className="py-2 px-3 rounded-lg border border-border bg-surface hover:bg-white text-xs font-bold text-center text-text-primary transition-colors flex items-center justify-center gap-1"
                  >
                    <span>View Dossier</span>
                    <ArrowRight className="h-3 w-3 text-accent" />
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 5. SECTION 03 — AREAS (Where Capital Meets Location)                     */}
      {/* ========================================================================= */}
      <section className="py-16 md:py-24 bg-white border-b border-border">
        <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 pb-4 border-b border-border">
            <div>
              <span className="text-[11px] font-mono font-bold tracking-widest text-accent uppercase">
                03 • AREAS
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-text-primary mt-1">
                Where capital meets location.
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

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Primary Geographic Feature (Col 7) */}
            <div className="lg:col-span-7 p-6 sm:p-8 rounded-2xl border border-border bg-surface-subtle space-y-6">
              <div className="space-y-3">
                <div className="flex items-center justify-between text-xs font-mono">
                  <span className="text-accent font-bold">PRIME FREEHOLD TERRITORY</span>
                  <span className="text-text-muted">{primaryArea.freehold_status}</span>
                </div>
                <h3 className="text-3xl font-black text-text-primary tracking-tight">
                  {primaryArea.name}
                </h3>
                <p className="text-xs sm:text-sm text-text-secondary leading-relaxed">
                  {primaryArea.description}
                </p>
              </div>

              <div className="p-4 rounded-xl bg-white border border-border space-y-1.5 text-xs">
                <div className="font-bold text-text-primary">Master Developer: {primaryArea.master_developer}</div>
                <div className="text-text-secondary leading-snug">{primaryArea.investment_profile}</div>
              </div>

              <Link
                href={`/areas/${primaryArea.slug}`}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-text-primary text-white hover:bg-black text-xs font-bold uppercase tracking-wider transition-colors"
              >
                <span>Explore {primaryArea.name} Atlas</span>
                <ArrowRight className="h-4 w-4 text-accent" />
              </Link>
            </div>

            {/* Concise Indexed Area List (Col 5) — Clean Hairline Rows */}
            <div className="lg:col-span-5 divide-y divide-border border-y border-border">
              {secondaryAreas.map((area, idx) => (
                <Link
                  key={area.id}
                  href={`/areas/${area.slug}`}
                  className="py-3.5 flex items-center justify-between group hover:bg-surface-subtle/60 px-2 transition-colors"
                >
                  <div className="flex items-baseline gap-3">
                    <span className="font-mono text-xs font-bold text-accent">0{idx + 2}</span>
                    <span className="text-sm font-bold text-text-primary group-hover:text-accent transition-colors">
                      {area.name}
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-[10px] font-mono text-text-muted">{area.master_developer}</span>
                    <ChevronRight className="h-3.5 w-3.5 text-text-muted group-hover:text-accent group-hover:translate-x-0.5 transition-all" />
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 6. SECTION 04 — INVESTMENT (Structured Analytical Framework)             */}
      {/* ========================================================================= */}
      <section className="py-16 md:py-24 bg-[#111111] text-white border-b border-border">
        <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 border-b border-white/10">
            <div className="space-y-2 max-w-xl">
              <span className="text-[11px] font-mono font-bold text-[#c9a962] uppercase tracking-widest">
                04 • INVESTMENT
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight uppercase">
                Underwriting framework.
              </h2>
              <p className="text-xs sm:text-sm text-white/70 leading-relaxed">
                Deterministic mathematical modeling separating statutory acquisition fees, debt covenants, and multi-year exit proceeds.
              </p>
            </div>
            <Link
              href="/investment"
              className="px-6 py-3 bg-white text-black hover:bg-white/90 text-xs font-bold uppercase tracking-wider rounded-xl transition-all shadow-md flex items-center gap-2 shrink-0"
            >
              <span>Open Underwriting Workspace</span>
              <Calculator className="h-4 w-4 text-accent" />
            </Link>
          </div>

          {/* Structured Analytical Grid: ACQUISITION, INCOME, FINANCING, HOLDING, EXIT */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                code: '01',
                title: 'ACQUISITION',
                subtitle: 'Statutory Capital Outlay',
                details: '4% total DLD transfer fee (statutory 2% buyer + 2% seller structure) + AED 4,000 trustee + 2% brokerage.',
              },
              {
                code: '02',
                title: 'INCOME',
                subtitle: 'Rental Economics',
                details: 'Gross rental yield vs Net Operating Income (NOI) after Mollak service charges.',
              },
              {
                code: '03',
                title: 'FINANCING',
                subtitle: 'Debt & Equity Structure',
                details: 'CBUAE mortgage LTV caps (up to 80% resident / 60-80% non-resident) and debt service.',
              },
              {
                code: '04',
                title: 'HOLDING',
                subtitle: 'Operating Costs',
                details: 'Annual service charges, property management, insurance, and sinking funds.',
              },
              {
                code: '05',
                title: 'EXIT',
                subtitle: 'Net Realization',
                details: 'Capital gain realization with no UAE personal capital gains tax for qualifying natural persons (Cabinet Dec. 49/2023).',
              },
              {
                code: '06',
                title: 'RESIDENCY VALUE',
                subtitle: 'Statutory Pathway',
                details: 'AED 2M property threshold qualifying for 5 or 10-year investor Golden Visa status.',
              },
            ].map((item) => (
              <div
                key={item.code}
                className="space-y-2 border-l border-white/20 pl-4 py-2 hover:border-[#c9a962] transition-colors"
              >
                <div className="flex items-center justify-between text-xs font-mono">
                  <span className="text-[#c9a962] font-bold">{item.code}</span>
                  <span className="text-white/40 text-[10px] uppercase">{item.subtitle}</span>
                </div>
                <h3 className="text-base font-bold text-white tracking-wide">{item.title}</h3>
                <p className="text-xs text-white/70 leading-relaxed">{item.details}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 7. SECTION 05 — RESIDENCY (Linear Process Roadmap)                        */}
      {/* ========================================================================= */}
      <section className="py-16 md:py-24 bg-white border-b border-border">
        <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 pb-4 border-b border-border">
            <div>
              <span className="text-[11px] font-mono font-bold tracking-widest text-accent uppercase">
                05 • RESIDENCY
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-text-primary mt-1">
                Golden Visa process.
              </h2>
            </div>
            <Link
              href="/residency"
              className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-text-secondary hover:text-accent transition-colors"
            >
              <span>View Full Residency Guidelines</span>
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          {/* Process Timeline: 01 to 06 with Hairline Connectors */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-6">
            {[
              {
                step: '01',
                name: 'THRESHOLD',
                desc: 'Property value threshold: AED 2,000,000.',
              },
              {
                step: '02',
                name: 'OWNERSHIP',
                desc: 'Freehold title deed registered with DLD.',
              },
              {
                step: '03',
                name: 'ELIGIBILITY',
                desc: 'Principal investor plus family sponsorship rights.',
              },
              {
                step: '04',
                name: 'APPLICATION',
                desc: 'Filing via DLD Cube or official GDRFA / ICP portals.',
              },
              {
                step: '05',
                name: 'REVIEW',
                desc: 'Medical fitness evaluation and biometric capture.',
              },
              {
                step: '06',
                name: 'ISSUANCE',
                desc: 'Residency permit issued (5 or 10 Years).',
              },
            ].map((item) => (
              <div
                key={item.step}
                className="space-y-2 border-t-2 border-accent pt-4"
              >
                <span className="text-xs font-mono font-bold text-accent">{item.step}</span>
                <h3 className="text-xs font-bold text-text-primary uppercase tracking-wider">{item.name}</h3>
                <p className="text-xs text-text-secondary leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>

          <div className="p-4 rounded-xl bg-surface border border-border text-xs text-text-muted flex flex-col sm:flex-row sm:items-center justify-between gap-2">
            <span>*Confirm current eligibility and duration (5 years UAE Govt summary / 10 years ICP & GDRFA) with the competent authority.</span>
            <Link href="/residency" className="font-bold text-accent hover:underline shrink-0">
              Statutory Details →
            </Link>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 8. SECTION 06 — LIFESTYLE (Editorial Magazine Feature)                   */}
      {/* ========================================================================= */}
      <section className="py-16 md:py-24 bg-surface-subtle border-b border-border">
        <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 pb-4 border-b border-border">
            <div>
              <span className="text-[11px] font-mono font-bold tracking-widest text-accent uppercase">
                06 • LIFESTYLE
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-text-primary mt-1">
                Aviation, yachts & gastronomy.
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

          {/* High-End Editorial Spread: 1 Large Feature + 2 Side Features */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
            {/* Dominant Feature: Private Aviation (Col 7) */}
            <div className="lg:col-span-7 border border-border rounded-2xl overflow-hidden bg-white flex flex-col justify-between group">
              <div className="relative aspect-[16/10] bg-surface-elevated overflow-hidden">
                <Image
                  src={lifestyleAviation.image || 'https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?auto=format&fit=crop&w=800&q=80'}
                  alt={lifestyleAviation.title}
                  fill
                  sizes="(max-width: 1024px) 100vw, 60vw"
                  className="object-cover group-hover:scale-102 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 rounded-full text-[11px] font-mono font-bold bg-white/95 text-text-primary shadow-xs uppercase">
                    Private Aviation & FBO
                  </span>
                </div>
              </div>
              <div className="p-6 sm:p-8 space-y-2">
                <h3 className="text-xl font-bold text-text-primary">{lifestyleAviation.title}</h3>
                <p className="text-xs text-text-secondary leading-relaxed line-clamp-3">{lifestyleAviation.description}</p>
                <div className="pt-3">
                  <Link
                    href="/lifestyle/aviation"
                    className="inline-flex items-center gap-1 text-xs font-bold text-accent hover:underline"
                  >
                    <span>View Aviation Directory & Tariffs →</span>
                  </Link>
                </div>
              </div>
            </div>

            {/* 2 Side Features: Yachts & Michelin Dining (Col 5) */}
            <div className="lg:col-span-5 flex flex-col justify-between gap-6">
              {/* Yachts */}
              <div className="p-5 rounded-2xl border border-border bg-white flex flex-col justify-between group space-y-3">
                <div className="relative aspect-[16/9] rounded-xl overflow-hidden bg-surface-elevated">
                  <Image
                    src={lifestyleYachts.image || 'https://images.unsplash.com/photo-1567899378494-47b22a2ae96a?auto=format&fit=crop&w=800&q=80'}
                    alt={lifestyleYachts.title}
                    fill
                    sizes="(max-width: 1024px) 100vw, 40vw"
                    className="object-cover group-hover:scale-102 transition-transform duration-500"
                  />
                  <div className="absolute top-2.5 left-2.5">
                    <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-white/95 text-text-primary shadow-xs uppercase">
                      Superyachts
                    </span>
                  </div>
                </div>
                <div className="space-y-1">
                  <h4 className="text-base font-bold text-text-primary">{lifestyleYachts.title}</h4>
                  <p className="text-xs text-text-secondary line-clamp-2">{lifestyleYachts.description}</p>
                </div>
                <Link
                  href="/lifestyle/yachts"
                  className="inline-flex items-center gap-1 text-xs font-bold text-accent hover:underline pt-1"
                >
                  <span>Yacht Charters →</span>
                </Link>
              </div>

              {/* Dining */}
              <div className="p-5 rounded-2xl border border-border bg-white flex flex-col justify-between group space-y-3">
                <div className="relative aspect-[16/9] rounded-xl overflow-hidden bg-surface-elevated">
                  <Image
                    src={lifestyleDining.image || 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=800&q=80'}
                    alt={lifestyleDining.title}
                    fill
                    sizes="(max-width: 1024px) 100vw, 40vw"
                    className="object-cover group-hover:scale-102 transition-transform duration-500"
                  />
                  <div className="absolute top-2.5 left-2.5">
                    <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-white/95 text-text-primary shadow-xs uppercase">
                      Michelin Dining
                    </span>
                  </div>
                </div>
                <div className="space-y-1">
                  <h4 className="text-base font-bold text-text-primary">{lifestyleDining.title}</h4>
                  <p className="text-xs text-text-secondary line-clamp-2">{lifestyleDining.description}</p>
                </div>
                <Link
                  href="/lifestyle/dining"
                  className="inline-flex items-center gap-1 text-xs font-bold text-accent hover:underline pt-1"
                >
                  <span>Dining Directory →</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 9. SECTION 07 — PRIVATE CLIENT (Quiet Luxury Private Office Moment)       */}
      {/* ========================================================================= */}
      <section className="py-20 md:py-28 bg-white">
        <div className="w-full max-w-4xl mx-auto px-4 sm:px-6 text-center space-y-8">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-surface border border-border text-xs font-semibold text-text-secondary">
            <span className="h-2 w-2 rounded-full bg-accent" />
            <span>DISCREET PRIVATE ADVISORY</span>
          </div>

          <h2 className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tight text-text-primary uppercase leading-[0.98]">
            Private Client Advisory
          </h2>

          <p className="text-base sm:text-lg text-text-secondary max-w-2xl mx-auto leading-relaxed">
            Direct advisory for principals, family offices, and investors acquiring prime Dubai real estate, structuring portfolios, and securing residency.
          </p>

          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 text-left max-w-2xl mx-auto pt-2">
            {[
              'Property acquisition',
              'Investment underwriting',
              'Residency structuring',
              'Conveyancing review',
              'Financing navigation',
              'Lifestyle access',
            ].map((srv, idx) => (
              <div key={idx} className="p-3 rounded-lg border border-border bg-surface-subtle text-xs font-medium text-text-primary flex items-center gap-2">
                <CheckCircle2 className="h-3.5 w-3.5 text-accent shrink-0" />
                <span>{srv}</span>
              </div>
            ))}
          </div>

          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/private-client"
              className="w-full sm:w-auto px-8 py-4 bg-text-primary hover:bg-black text-white text-xs font-bold uppercase tracking-widest rounded-xl transition-all shadow-md flex items-center justify-center gap-2"
            >
              <span>Submit Confidential Brief</span>
              <ArrowRight className="h-4 w-4 text-accent" />
            </Link>
            <Link
              href="/client"
              className="w-full sm:w-auto px-6 py-4 bg-surface hover:bg-surface-elevated border border-border text-text-primary text-xs font-bold uppercase tracking-wider rounded-xl transition-colors flex items-center justify-center gap-2"
            >
              <span>Client Workspace</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}