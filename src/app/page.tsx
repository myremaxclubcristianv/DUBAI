'use client'

import * as React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { VERIFIED_PROPERTIES } from '@/lib/data/properties'
import { DUBAI_AREAS } from '@/lib/data/areas'
import { CadranDial, CadranQuadrant } from '@/components/ui/luxury-cadran'
import {
  ArrowRight,
  ArrowUpRight,
  Calculator,
  ChevronRight,
  ShieldCheck,
  Building2,
  Landmark,
  Scale,
  TrendingUp,
  Compass,
} from 'lucide-react'

export default function Home() {
  const activeProperty = VERIFIED_PROPERTIES[0]
  const primeAreas = DUBAI_AREAS.slice(0, 6)

  return (
    <div className="flex flex-col min-h-screen bg-white text-[#1d1d1f] selection:bg-[#0071e3]/10 selection:text-[#1d1d1f]">
      {/* ========================================================================= */}
      {/* 01 — HERO: Apple Keynote White Product Reveal & Cinematic Showcase         */}
      {/* ========================================================================= */}
      <section className="relative pt-16 pb-24 sm:pt-28 sm:pb-36 overflow-hidden border-b border-black/10 bg-white">
        {/* Subtle Ambient Apple Light Glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-[1000px] h-[400px] bg-gradient-to-b from-[#f5f5f7] via-[#fbfbfd] to-transparent blur-[80px] pointer-events-none -z-10" />

        <div className="w-full max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center text-center space-y-6 max-w-4xl mx-auto">
            {/* Apple Pill Eyebrow */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-black/10 bg-[#f5f5f7] shadow-xs text-xs font-medium text-[#6e6e73]">
              <span className="h-1.5 w-1.5 rounded-full bg-[#b8860b] animate-pulse" />
              <span className="font-mono text-[11px] tracking-wider uppercase text-[#1d1d1f] font-bold">
                DUBAI PRIVATE CLIENT PLATFORM
              </span>
              <span className="text-black/20">•</span>
              <span className="text-[11px] text-[#6e6e73]">Statutory Intelligence</span>
            </div>

            {/* Apple Keynote Headline */}
            <h1 className="text-5xl sm:text-7xl lg:text-[88px] font-extrabold tracking-tight text-[#1d1d1f] leading-[0.98]">
              Property. Capital. <br />
              <span className="text-gradient-gold">Absolute Access.</span>
            </h1>

            {/* Restrained Subheadline */}
            <p className="text-lg sm:text-2xl text-[#6e6e73] font-normal leading-relaxed max-w-2xl pt-2">
              An institutional perspective on Dubai prime real estate, deterministic capital underwriting, official Golden Visa pathways, and bespoke lifestyle curation.
            </p>

            {/* Apple Dual Pill CTA Actions */}
            <div className="flex flex-col sm:flex-row items-center gap-3.5 pt-4 w-full sm:w-auto">
              <Link
                href="/properties"
                className="w-full sm:w-auto px-8 py-4 rounded-full bg-[#1d1d1f] text-white hover:bg-[#000000] text-sm font-semibold tracking-tight transition-all shadow-[0_4px_20px_rgba(0,0,0,0.15)] hover:scale-[1.02] active:scale-[0.98] flex items-center justify-center gap-2"
              >
                <span>Explore Properties</span>
                <ChevronRight className="h-4 w-4 text-white/70" />
              </Link>
              <Link
                href="/private-client"
                className="w-full sm:w-auto px-8 py-4 rounded-full bg-white hover:bg-[#f5f5f7] text-[#1d1d1f] text-sm font-semibold tracking-tight border border-black/10 transition-all flex items-center justify-center gap-2 shadow-xs hover:scale-[1.02] active:scale-[0.98]"
              >
                <span>Private Client Desk</span>
                <ArrowUpRight className="h-4 w-4 text-[#86868b]" />
              </Link>
            </div>
          </div>

          {/* Cinematic Media Showcase Frame */}
          <div className="mt-16 sm:mt-24 relative rounded-[2.5rem] overflow-hidden border border-black/10 shadow-[0_20px_60px_rgba(0,0,0,0.08)] bg-[#f5f5f7]">
            <div className="relative aspect-[16/9] sm:aspect-[21/9] w-full">
              <Image
                src={activeProperty.images[0] || 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=2000&q=85'}
                alt={activeProperty.title}
                fill
                priority
                sizes="(max-width: 1240px) 100vw, 1240px"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
            </div>

            {/* Floating Apple Glass Spec Bar */}
            <div className="absolute bottom-4 left-4 right-4 sm:bottom-6 sm:left-6 sm:right-6 p-4 sm:p-6 rounded-2xl bg-white/90 backdrop-blur-2xl border border-black/10 shadow-lg flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div className="space-y-1">
                <div className="flex items-center gap-2 text-xs font-mono text-[#6e6e73]">
                  <span className="text-[#b8860b] font-bold uppercase">{activeProperty.area_name}</span>
                  <span>•</span>
                  <span>{activeProperty.developer_name}</span>
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-[#1d1d1f] tracking-tight">
                  {activeProperty.title}
                </h3>
              </div>

              <div className="flex items-center gap-4 sm:gap-6 shrink-0">
                <div className="text-right">
                  <span className="text-[10px] font-mono uppercase tracking-wider text-[#86868b] block font-medium">Asking Price</span>
                  <span className="text-lg sm:text-2xl font-extrabold text-[#1d1d1f] tabular-nums">
                    AED {activeProperty.asking_price?.toLocaleString()}
                  </span>
                </div>
                <Link
                  href={`/properties/${activeProperty.id}`}
                  className="px-6 py-3 rounded-full bg-[#1d1d1f] text-white hover:bg-[#000000] text-xs font-semibold tracking-tight transition-all flex items-center gap-1.5 shrink-0 shadow-xs"
                >
                  <span>Dossier</span>
                  <ArrowRight className="h-3.5 w-3.5 text-white/70" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 02 — APPLE BENTO TECH SPECS (Factual Intelligence Strip)                  */}
      {/* ========================================================================= */}
      <section className="py-24 sm:py-32 border-b border-black/10 bg-[#f5f5f7]">
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          <div className="max-w-3xl mx-auto text-center space-y-3.5">
            <span className="text-[11px] font-mono font-bold uppercase tracking-[0.2em] text-[#b8860b] block">
              DUBAI, FRAMED DIFFERENTLY
            </span>
            <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-[#1d1d1f] leading-tight">
              Separating verified asset fundamentals from speculative marketing.
            </h2>
            <p className="text-base sm:text-lg text-[#6e6e73] leading-relaxed max-w-2xl mx-auto">
              We anchor every analysis in published statutory schedules, centralized electronic land records, and institutional underwriting models.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            <div className="p-8 sm:p-10 rounded-3xl bg-white border border-black/10 shadow-[0_2px_12px_rgba(0,0,0,0.03)] apple-card-hover flex flex-col justify-between space-y-6">
              <div className="space-y-3">
                <div className="h-10 w-10 rounded-2xl bg-[#f5f5f7] border border-black/10 flex items-center justify-center text-[#1d1d1f]">
                  <Scale className="h-5 w-5 text-[#b8860b]" />
                </div>
                <h3 className="text-xl font-bold text-[#1d1d1f]">Statutory Data Provenance</h3>
                <p className="text-sm text-[#6e6e73] leading-relaxed">
                  Every metric references official legislation: Law No. 7 of 2006 (Registration), Law No. 8 of 2007 (Escrow), and Resolution No. 30 of 2013 (Fee Schedules).
                </p>
              </div>
              <div className="pt-4 border-t border-black/10 text-xs font-mono text-[#86868b]">
                ZERO SYNTHETIC DATA
              </div>
            </div>

            <div className="p-8 sm:p-10 rounded-3xl bg-white border border-black/10 shadow-[0_2px_12px_rgba(0,0,0,0.03)] apple-card-hover flex flex-col justify-between space-y-6">
              <div className="space-y-3">
                <div className="h-10 w-10 rounded-2xl bg-[#f5f5f7] border border-black/10 flex items-center justify-center text-[#1d1d1f]">
                  <Calculator className="h-5 w-5 text-[#b8860b]" />
                </div>
                <h3 className="text-xl font-bold text-[#1d1d1f]">Deterministic Underwriting</h3>
                <p className="text-sm text-[#6e6e73] leading-relaxed">
                  Mathematical yields calculated from Mollak service charge schedules, 4% DLD transfer tariffs, and verifiable tenant demand indices.
                </p>
              </div>
              <div className="pt-4 border-t border-black/10 text-xs font-mono text-[#86868b]">
                AUDITED CASH FLOW MODELS
              </div>
            </div>

            <div className="p-8 sm:p-10 rounded-3xl bg-white border border-black/10 shadow-[0_2px_12px_rgba(0,0,0,0.03)] apple-card-hover flex flex-col justify-between space-y-6">
              <div className="space-y-3">
                <div className="h-10 w-10 rounded-2xl bg-[#f5f5f7] border border-black/10 flex items-center justify-center text-[#1d1d1f]">
                  <ShieldCheck className="h-5 w-5 text-[#b8860b]" />
                </div>
                <h3 className="text-xl font-bold text-[#1d1d1f]">Golden Visa Sovereignty</h3>
                <p className="text-sm text-[#6e6e73] leading-relaxed">
                  Direct statutory qualification pathways under Cabinet Resolution No. 65 of 2022 for property assets valued at AED 2,000,000 and above.
                </p>
              </div>
              <div className="pt-4 border-t border-black/10 text-xs font-mono text-[#86868b]">
                10-YEAR RESIDENCY FRAMEWORK
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 03 — INSTRUMENT GAUGES: MACROECONOMIC CADRANS                             */}
      {/* ========================================================================= */}
      <section className="py-24 sm:py-32 border-b border-black/10 bg-white">
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          <div className="max-w-3xl mx-auto text-center space-y-3.5">
            <span className="text-[11px] font-mono font-bold uppercase tracking-[0.2em] text-[#b8860b] block">
              MACROECONOMIC CAPITAL CADRANS
            </span>
            <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-[#1d1d1f]">
              Capital Allocation & Liquidity Pulse
            </h2>
            <p className="text-base sm:text-lg text-[#6e6e73] max-w-2xl mx-auto">
              Real-time mathematical meters tracking annual transaction velocity, median price appreciation, and escrow account integrity.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <CadranDial
              label="ANNUAL INFLOW VOLUME"
              sublabel="DLD Recorded Transactions"
              value="528.0B"
              unit="AED CAPITAL INFLOW"
              targetValue="+28.5% YoY Expansion"
              percentage={88}
              status="OPTIMAL"
              statutoryRef="Dubai Land Department Open Registry"
              icon={TrendingUp}
            />
            <CadranDial
              label="MEDIAN SQFT VALUE"
              sublabel="Prime Freehold Core Index"
              value="1,640"
              unit="AED / SQFT MEDIAN"
              targetValue="+14.2% YoY Appreciation"
              percentage={75}
              status="STABLE"
              statutoryRef="DLD Transaction Registry"
              icon={TrendingUp}
            />
            <CadranDial
              label="MORTGAGE LEVERAGE"
              sublabel="Financed Conveyance Share"
              value="142.5B"
              unit="AED FINANCED VOLUME"
              targetValue="~27% Total Market Value"
              percentage={65}
              status="STABLE"
              statutoryRef="CBUAE Tier-1 Banking Register"
              icon={Landmark}
            />
            <CadranDial
              label="OFF-PLAN ABSORPTION"
              sublabel="Oqood Construction Registry"
              value="62.4%"
              unit="PRIMARY MARKET SHARE"
              targetValue="Law No. 8/2007 Escrow"
              percentage={62}
              status="VERIFIED"
              statutoryRef="DLD Escrow Audit Ledger"
              icon={Building2}
            />
          </div>

          <CadranQuadrant
            eyebrow="CAPITAL ALLOCATION MECHANICS"
            title="Market Liquidity & Transaction Anatomy"
            statutorySource="Dubai Land Department & UAE Federal Tax Authority"
            quadrants={[
              {
                title: 'Off-Plan (Oqood) Primary Contracts',
                value: '62.4%',
                subtext: 'Mandatory 100% escrow account coverage under Law No. 8 of 2007 with milestone-linked drawdowns.',
                delta: 'PRIMARY VOLUME',
                isPositive: true,
                statutoryRef: 'Dubai Law No. 8 of 2007 (Escrow)',
              },
              {
                title: 'Ready Secondary Market Resales',
                value: '37.6%',
                subtext: 'Immediate conveyance at DLD Registration Trustee offices with direct electronic Title Deed transfer.',
                delta: 'CASH SETTLEMENT',
                isPositive: true,
                statutoryRef: 'Dubai Law No. 7 of 2006 (Registration)',
              },
              {
                title: 'Ultra-Prime (> AED 20M) Transactions',
                value: '2,400+',
                subtext: 'Record institutional demand for beachfront mansions, branded sky villas, and private island estates.',
                delta: '+34% YoY',
                isPositive: true,
                statutoryRef: 'DLD Prime Land Registry',
              },
              {
                title: 'Foreign Capital & Family Offices',
                value: '140+ NATIONS',
                subtext: 'Global wealth migration anchored by zero personal income tax, USD currency peg, and 10-Year Golden Visas.',
                delta: 'RECORD REGISTRATIONS',
                isPositive: true,
                statutoryRef: 'Cabinet Res. No. 65 of 2022',
              },
            ]}
          />
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 04 — ENCYCLOPEDIC SOVEREIGN ATLAS & DIRECTORIES                           */}
      {/* ========================================================================= */}
      <section className="py-24 sm:py-32 border-b border-black/10 bg-[#ffffff]">
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          <div className="max-w-3xl mx-auto text-center space-y-3.5">
            <span className="text-[11px] font-mono font-bold uppercase tracking-[0.2em] text-[#b8860b] block">
              SOVEREIGN ENCYCLOPEDIA &amp; PUBLIC INTELLIGENCE
            </span>
            <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-[#1d1d1f]">
              The Complete Dubai Operating Ecosystem
            </h2>
            <p className="text-base sm:text-lg text-[#6e6e73] max-w-2xl mx-auto">
              From macroeconomic agendas and corporate conglomerates to statutory decrees, judicial systems, and sovereign infrastructure.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Economy & D33 */}
            <Link
              href="/economy"
              className="group rounded-3xl p-8 bg-[#f5f5f7] hover:bg-white border border-black/5 hover:border-black/15 shadow-xs hover:shadow-lg transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-[10px] font-mono font-bold uppercase px-2.5 py-1 rounded-full bg-white border border-black/10 text-[#b8860b]">
                    D33 Agenda
                  </span>
                  <ArrowRight className="h-4 w-4 text-[#86868b] group-hover:text-[#1d1d1f] group-hover:translate-x-1 transition-all" />
                </div>
                <h3 className="text-2xl font-bold text-[#1d1d1f] mb-2">
                  Macro Economy &amp; D33
                </h3>
                <p className="text-xs text-[#6e6e73] leading-relaxed mb-6">
                  AED 429.7B GDP, demographic census dynamics, trade corridors, and the 10-year Royal charter to double economic output.
                </p>
              </div>
              <div className="pt-4 border-t border-black/5 flex items-center justify-between text-[11px] font-bold text-[#1d1d1f]">
                <span>Explore Economic Registry</span>
                <span className="text-[#b8860b]">8 Macro Indicators →</span>
              </div>
            </Link>

            {/* Companies */}
            <Link
              href="/companies"
              className="group rounded-3xl p-8 bg-[#f5f5f7] hover:bg-white border border-black/5 hover:border-black/15 shadow-xs hover:shadow-lg transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-[10px] font-mono font-bold uppercase px-2.5 py-1 rounded-full bg-white border border-black/10 text-[#b8860b]">
                    Corporates
                  </span>
                  <ArrowRight className="h-4 w-4 text-[#86868b] group-hover:text-[#1d1d1f] group-hover:translate-x-1 transition-all" />
                </div>
                <h3 className="text-2xl font-bold text-[#1d1d1f] mb-2">
                  Sovereign &amp; Enterprise Directory
                </h3>
                <p className="text-xs text-[#6e6e73] leading-relaxed mb-6">
                  Investment Corporation of Dubai (ICD), Dubai Holding, DP World, Emirates Group, Emirates NBD, and major free zones.
                </p>
              </div>
              <div className="pt-4 border-t border-black/5 flex items-center justify-between text-[11px] font-bold text-[#1d1d1f]">
                <span>Explore Enterprise Base</span>
                <span className="text-[#b8860b]">Major Conglomerates →</span>
              </div>
            </Link>

            {/* Government & Programs */}
            <Link
              href="/government"
              className="group rounded-3xl p-8 bg-[#f5f5f7] hover:bg-white border border-black/5 hover:border-black/15 shadow-xs hover:shadow-lg transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-[10px] font-mono font-bold uppercase px-2.5 py-1 rounded-full bg-white border border-black/10 text-[#b8860b]">
                    Governance
                  </span>
                  <ArrowRight className="h-4 w-4 text-[#86868b] group-hover:text-[#1d1d1f] group-hover:translate-x-1 transition-all" />
                </div>
                <h3 className="text-2xl font-bold text-[#1d1d1f] mb-2">
                  Government &amp; Authorities
                </h3>
                <p className="text-xs text-[#6e6e73] leading-relaxed mb-6">
                  The Executive Council, DLD, RERA, DEWA, RTA, Digital Dubai, and Dubai 2040 Urban Master Plan directives.
                </p>
              </div>
              <div className="pt-4 border-t border-black/5 flex items-center justify-between text-[11px] font-bold text-[#1d1d1f]">
                <span>Statutory Authority Profiles</span>
                <span className="text-[#b8860b]">Executive Councils →</span>
              </div>
            </Link>

            {/* Legal Atlas */}
            <Link
              href="/legal"
              className="group rounded-3xl p-8 bg-[#f5f5f7] hover:bg-white border border-black/5 hover:border-black/15 shadow-xs hover:shadow-lg transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-[10px] font-mono font-bold uppercase px-2.5 py-1 rounded-full bg-white border border-black/10 text-[#b8860b]">
                    Jurisprudence
                  </span>
                  <ArrowRight className="h-4 w-4 text-[#86868b] group-hover:text-[#1d1d1f] group-hover:translate-x-1 transition-all" />
                </div>
                <h3 className="text-2xl font-bold text-[#1d1d1f] mb-2">
                  Legal &amp; Regulatory Codes
                </h3>
                <p className="text-xs text-[#6e6e73] leading-relaxed mb-6">
                  Federal Corporate Tax Law No. 47, Law No. 8 Escrow regulations, Rental Cap decree, and DIFC Common Law courts.
                </p>
              </div>
              <div className="pt-4 border-t border-black/5 flex items-center justify-between text-[11px] font-bold text-[#1d1d1f]">
                <span>Inspect Decrees &amp; Courts</span>
                <span className="text-[#b8860b]">Gazette Codes →</span>
              </div>
            </Link>

            {/* Mega Infrastructure */}
            <Link
              href="/infrastructure"
              className="group rounded-3xl p-8 bg-[#f5f5f7] hover:bg-white border border-black/5 hover:border-black/15 shadow-xs hover:shadow-lg transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-[10px] font-mono font-bold uppercase px-2.5 py-1 rounded-full bg-white border border-black/10 text-[#b8860b]">
                    Megaprojects
                  </span>
                  <ArrowRight className="h-4 w-4 text-[#86868b] group-hover:text-[#1d1d1f] group-hover:translate-x-1 transition-all" />
                </div>
                <h3 className="text-2xl font-bold text-[#1d1d1f] mb-2">
                  Sovereign Infrastructure
                </h3>
                <p className="text-xs text-[#6e6e73] leading-relaxed mb-6">
                  AED 128B Al Maktoum Airport DWC, AED 18B Metro Blue Line, Palm Jebel Ali, and MBR 5,000 MW Solar Park.
                </p>
              </div>
              <div className="pt-4 border-t border-black/5 flex items-center justify-between text-[11px] font-bold text-[#1d1d1f]">
                <span>Capex &amp; Engineering Specs</span>
                <span className="text-[#b8860b]">Active Build Sites →</span>
              </div>
            </Link>

            {/* Insurance & Healthcare */}
            <Link
              href="/insurance"
              className="group rounded-3xl p-8 bg-[#f5f5f7] hover:bg-white border border-black/5 hover:border-black/15 shadow-xs hover:shadow-lg transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-[10px] font-mono font-bold uppercase px-2.5 py-1 rounded-full bg-white border border-black/10 text-[#b8860b]">
                    Protection
                  </span>
                  <ArrowRight className="h-4 w-4 text-[#86868b] group-hover:text-[#1d1d1f] group-hover:translate-x-1 transition-all" />
                </div>
                <h3 className="text-2xl font-bold text-[#1d1d1f] mb-2">
                  Insurance &amp; Healthcare
                </h3>
                <p className="text-xs text-[#6e6e73] leading-relaxed mb-6">
                  DHA mandatory health framework (ISAHD), Golden Visa medical compliance, property damage, and cross-border succession.
                </p>
              </div>
              <div className="pt-4 border-t border-black/5 flex items-center justify-between text-[11px] font-bold text-[#1d1d1f]">
                <span>Underwriting Standards</span>
                <span className="text-[#b8860b]">ISAHD &amp; Tariffs →</span>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 05 — CURATED TROPHY PORTFOLIO SHOWCASE                                     */}
      {/* ========================================================================= */}
      <section className="py-24 sm:py-32 border-b border-black/10 bg-[#f5f5f7]">
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 border-b border-black/10 pb-8">
            <div className="space-y-3">
              <span className="text-[11px] font-mono font-bold uppercase tracking-[0.2em] text-[#b8860b] block">
                CURATED INVENTORY
              </span>
              <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-[#1d1d1f]">
                Trophy Properties Portfolio
              </h2>
              <p className="text-base sm:text-lg text-[#6e6e73] max-w-xl">
                Direct statutory title records. Prime freehold penthouses, beachfront mansions, and branded sky villas.
              </p>
            </div>
            <Link
              href="/properties"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#1d1d1f] text-white hover:bg-[#000000] text-xs font-semibold shadow-xs shrink-0"
            >
              <span>View All Properties ({VERIFIED_PROPERTIES.length})</span>
              <ArrowRight className="h-3.5 w-3.5 text-white/70" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {VERIFIED_PROPERTIES.slice(0, 6).map((prop) => (
              <Link
                key={prop.id}
                href={`/properties/${prop.id}`}
                className="group rounded-3xl bg-white border border-black/10 shadow-[0_2px_12px_rgba(0,0,0,0.03)] apple-card-hover overflow-hidden flex flex-col justify-between"
              >
                <div>
                  <div className="relative aspect-[16/10] w-full overflow-hidden bg-[#f5f5f7]">
                    <Image
                      src={prop.images[0] || 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=800&q=80'}
                      alt={prop.title}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                    />
                    <div className="absolute top-4 left-4 flex gap-2">
                      <span className="px-3 py-1 rounded-full text-[10px] font-bold uppercase bg-white/90 backdrop-blur-md text-[#1d1d1f] border border-black/10">
                        {prop.completion_status}
                      </span>
                    </div>
                  </div>

                  <div className="p-6 space-y-3">
                    <div className="text-xs font-mono text-[#86868b] uppercase">
                      {prop.area_name} • {prop.developer_name}
                    </div>
                    <h3 className="text-lg font-bold text-[#1d1d1f] group-hover:text-[#b8860b] transition-colors line-clamp-1">
                      {prop.title}
                    </h3>
                    <div className="text-xs text-[#6e6e73]">
                      {prop.bedrooms} Bed • {prop.bathrooms} Bath • {prop.internal_area_sqft.toLocaleString()} sqft
                    </div>
                  </div>
                </div>

                <div className="p-6 pt-0 flex items-baseline justify-between border-t border-black/5 mt-4">
                  <div>
                    <span className="text-[10px] font-mono text-[#86868b] uppercase block">Asking Price</span>
                    <span className="text-lg font-extrabold text-[#1d1d1f] tabular-nums">
                      AED {prop.asking_price?.toLocaleString()}
                    </span>
                  </div>
                  <span className="text-xs font-bold text-[#b8860b] group-hover:translate-x-1 transition-transform inline-flex items-center gap-1">
                    Dossier →
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 05 — PRIME FREEHOLD COMMUNITIES ATLAS                                      */}
      {/* ========================================================================= */}
      <section className="py-24 sm:py-32 border-b border-black/10 bg-white">
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 border-b border-black/10 pb-8">
            <div className="space-y-3">
              <span className="text-[11px] font-mono font-bold uppercase tracking-[0.2em] text-[#b8860b] block">
                GEOGRAPHY ATLAS
              </span>
              <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-[#1d1d1f]">
                Prime Freehold Communities
              </h2>
              <p className="text-base sm:text-lg text-[#6e6e73] max-w-xl">
                Designated freehold zones under Regulation No. 3 of 2006 granting 100% foreign title ownership in perpetuity.
              </p>
            </div>
            <Link
              href="/areas"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#1d1d1f] text-white hover:bg-[#000000] text-xs font-semibold shadow-xs shrink-0"
            >
              <span>Explore Atlas ({DUBAI_AREAS.length} Areas)</span>
              <Compass className="h-3.5 w-3.5 text-white/70" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {primeAreas.map((area) => (
              <Link
                key={area.id}
                href={`/areas/${area.slug}`}
                className="group rounded-3xl bg-white border border-black/10 shadow-[0_2px_12px_rgba(0,0,0,0.03)] apple-card-hover overflow-hidden flex flex-col justify-between"
              >
                <div>
                  <div className="relative aspect-[16/10] w-full overflow-hidden bg-[#f5f5f7]">
                    <Image
                      src={area.image || 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=800&q=80'}
                      alt={area.name}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1 rounded-full text-[10px] font-bold uppercase bg-white/90 backdrop-blur-md text-[#1d1d1f] border border-black/10">
                        {area.sector}
                      </span>
                    </div>
                  </div>

                  <div className="p-6 space-y-2">
                    <div className="text-xs font-mono text-[#86868b]">
                      Master Dev: {area.master_developer}
                    </div>
                    <h3 className="text-xl font-bold text-[#1d1d1f] group-hover:text-[#b8860b] transition-colors">
                      {area.name}
                    </h3>
                    <p className="text-xs text-[#6e6e73] line-clamp-2 leading-relaxed">
                      {area.description}
                    </p>
                  </div>
                </div>

                <div className="p-6 pt-0 flex items-center justify-between text-xs font-mono text-[#6e6e73] border-t border-black/5 mt-4">
                  <span>DXB: {area.transit.airport_mins_dxb}m</span>
                  <span className="font-bold text-[#b8860b]">Dossier →</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 06 — BESPOKE LIFESTYLE & PRIVATE CLIENT DESK CTA                          */}
      {/* ========================================================================= */}
      <section className="py-24 sm:py-32 bg-[#f5f5f7]">
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="p-10 sm:p-16 rounded-[3rem] bg-white border border-black/10 shadow-[0_20px_60px_rgba(0,0,0,0.06)] text-center space-y-8 max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#f5f5f7] border border-black/10 text-xs font-mono font-bold text-[#b8860b] uppercase">
              <span>PRIVATE CLIENT MANDATE</span>
            </div>

            <h2 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-[#1d1d1f] leading-tight">
              Begin your confidential Dubai acquisition mandate.
            </h2>

            <p className="text-base sm:text-xl text-[#6e6e73] leading-relaxed max-w-2xl mx-auto">
              Direct advisory on freehold trophy acquisitions, sovereign Golden Visa structuring, and off-market architectural residences.
            </p>

            <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/private-client"
                className="w-full sm:w-auto px-8 py-4 rounded-full bg-[#1d1d1f] text-white hover:bg-[#000000] text-sm font-semibold tracking-tight shadow-md hover:scale-[1.02] active:scale-[0.98] transition-all"
              >
                Register Private Mandate
              </Link>
              <Link
                href="/lifestyle"
                className="w-full sm:w-auto px-8 py-4 rounded-full bg-[#f5f5f7] hover:bg-[#ebebeb] text-[#1d1d1f] text-sm font-semibold tracking-tight border border-black/10 shadow-xs hover:scale-[1.02] active:scale-[0.98] transition-all"
              >
                Explore Lifestyle Protocols
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}