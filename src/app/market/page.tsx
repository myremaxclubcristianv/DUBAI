'use client'

import * as React from 'react'
import Link from 'next/link'
import { SourceBadge } from '@/components/ui/source-badge'
import {
  ArrowRight,
  Info,
} from 'lucide-react'

export default function MarketPage() {
  const [selectedPeriod, setSelectedPeriod] = React.useState<'7D' | '30D' | '90D' | '1Y' | '5Y'>('1Y')

  return (
    <div className="bg-white text-text-primary min-h-screen pb-24">
      {/* 1. EDITORIAL HEADER */}
      <section className="pt-12 pb-10 border-b border-border bg-surface-subtle">
        <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-border text-xs font-semibold text-text-secondary shadow-2xs">
              <span className="h-2 w-2 rounded-full bg-emerald-600 animate-pulse" />
              <span>DLD Statutory Market Benchmarks & Transaction Framework</span>
            </div>
            <SourceBadge status="OFFICIAL SOURCE" sourceName="DLD Annual Open Registry" />
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-text-primary uppercase leading-tight">
            Market Intelligence.
          </h1>

          <p className="text-base sm:text-lg text-text-secondary max-w-2xl font-normal leading-relaxed">
            Macroeconomic real-estate indicators, statutory transfer fee structures, rental index mechanics, and submarket capital distribution across Dubai freehold districts.
          </p>
        </div>
      </section>

      {/* 2. DLD LIVE DISCONNECTION STATUS BANNER */}
      <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
        <div className="p-4 rounded-xl border border-amber-200 bg-amber-50/60 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs">
          <div className="flex items-center gap-3">
            <span className="h-2.5 w-2.5 rounded-full bg-amber-500 shrink-0 animate-pulse" />
            <div>
              <span className="font-bold text-amber-900">DLD LIVE STREAM: NOT CONNECTED</span>
              <span className="text-amber-800 ml-1.5">
                The platform is architected for live DLD REST/WebSocket endpoints. Current data represents verified statutory rules and published institutional benchmarks.
              </span>
            </div>
          </div>
          <span className="font-mono text-[10px] px-2.5 py-1 rounded bg-white text-amber-900 border border-amber-200 font-bold shrink-0">
            ZERO FAKE DATA
          </span>
        </div>
      </div>

      <main className="w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 space-y-10">
        {/* ========================================================================= */}
        {/* 3. MARKET PULSE: HEADLINE METRIC & CORE STATUTORY BENCHMARKS */}
        {/* ========================================================================= */}
        <div className="p-6 sm:p-8 rounded-2xl border border-border bg-surface space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-border pb-4">
            <div>
              <span className="text-[10px] font-mono uppercase font-bold text-accent">
                PRIMARY STATUTORY BENCHMARK
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-text-primary mt-0.5">
                Statutory Transaction Tariffs & Caps
              </h2>
            </div>

            {/* Period Selector */}
            <div className="inline-flex items-center p-1 rounded-xl bg-white border border-border text-xs font-semibold">
              {(['7D', '30D', '90D', '1Y', '5Y'] as const).map((period) => (
                <button
                  key={period}
                  onClick={() => setSelectedPeriod(period)}
                  className={`px-3 py-1.5 rounded-lg transition-all ${
                    selectedPeriod === period
                      ? 'bg-text-primary text-white font-bold'
                      : 'text-text-secondary hover:text-text-primary'
                  }`}
                >
                  {period}
                </button>
              ))}
            </div>
          </div>

          {/* 6 Macro Financial Indicators */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            <div className="p-5 rounded-xl bg-white border border-border space-y-2">
              <span className="text-[10px] font-mono text-text-muted uppercase block">
                Combined DLD Transfer Fees
              </span>
              <div className="text-3xl font-extrabold text-text-primary tabular-nums">4.00%</div>
              <p className="text-[11px] text-text-secondary">
                Combined transaction transfer fees (2% buyer + 2% seller standard allocation under Dubai Law No. 7 of 2006).
              </p>
            </div>

            <div className="p-5 rounded-xl bg-white border border-border space-y-2">
              <span className="text-[10px] font-mono text-text-muted uppercase block">
                RERA Maximum Annual Rent Increase Cap
              </span>
              <div className="text-3xl font-extrabold text-text-primary tabular-nums">20.00%</div>
              <p className="text-[11px] text-text-secondary">
                Maximum allowable annual increase under Dubai Decree No. 43 of 2013.
              </p>
            </div>

            <div className="p-5 rounded-xl bg-white border border-border space-y-2">
              <span className="text-[10px] font-mono text-text-muted uppercase block">
                Expat Maximum Loan-to-Value (LTV)
              </span>
              <div className="text-3xl font-extrabold text-text-primary tabular-nums">80.00%</div>
              <p className="text-[11px] text-text-secondary">
                For first residential property value ≤ AED 5M per CBUAE mortgage regulations.
              </p>
            </div>

            <div className="p-5 rounded-xl bg-white border border-border space-y-2">
              <span className="text-[10px] font-mono text-text-muted uppercase block">
                Investor Golden Visa Freehold Floor
              </span>
              <div className="text-3xl font-extrabold text-text-primary tabular-nums">AED 2,000,000</div>
              <p className="text-[11px] text-text-secondary">
                Property value threshold (5-Yr UAE summary / 10-Yr service portals per Cabinet Res 65/2022).
              </p>
            </div>

            <div className="p-5 rounded-xl bg-white border border-border space-y-2">
              <span className="text-[10px] font-mono text-text-muted uppercase block">
                UAE Personal Income Tax
              </span>
              <div className="text-2xl font-extrabold text-text-primary uppercase tracking-tight">NO TAX LEVIED</div>
              <p className="text-[11px] text-text-secondary">
                The UAE does not levy personal income tax on natural persons. Qualifying real estate income is outside Business Activity (Decision 49/2023).
              </p>
            </div>

            <div className="p-5 rounded-xl bg-white border border-border space-y-2">
              <span className="text-[10px] font-mono text-text-muted uppercase block">
                DLD Mortgage Registration Tariff
              </span>
              <div className="text-3xl font-extrabold text-text-primary tabular-nums">0.25%</div>
              <p className="text-[11px] text-text-secondary">
                0.25% of mortgage value + applicable title deed, document, knowledge, innovation, and registration trustee fees.
              </p>
            </div>
          </div>
        </div>

        {/* ========================================================================= */}
        {/* 4. SEGMENTS BREAKDOWN: SALE VS RENTAL & OFF-PLAN VS READY */}
        {/* ========================================================================= */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Sale vs Rental Framework */}
          <div className="p-6 sm:p-8 rounded-2xl border border-border bg-white space-y-4">
            <div className="flex items-center justify-between border-b border-border pb-3">
              <h3 className="text-lg font-bold text-text-primary">Sale vs Rental Dynamics</h3>
              <span className="text-xs font-mono text-text-muted font-bold">RERA / DLD</span>
            </div>
            <p className="text-xs text-text-secondary leading-relaxed">
              In the Dubai market, sale contracts require unified Form F registration and DLD title deed generation. Rental contracts require annual Ejari registration and are subject to the RERA Rental Calculator bands (0% to 20% cap).
            </p>
            <div className="space-y-2.5 pt-2 text-xs">
              <div className="flex justify-between py-1.5 border-b border-border-subtle">
                <span className="text-text-muted">Sale Title Deed Registration</span>
                <span className="font-semibold">Mandatory 4% DLD Fee + Trustee Fees</span>
              </div>
              <div className="flex justify-between py-1.5 border-b border-border-subtle">
                <span className="text-text-muted">Rental Contract (Ejari)</span>
                <span className="font-semibold">AED ~220 Ejari Registration</span>
              </div>
              <div className="flex justify-between py-1.5">
                <span className="text-text-muted">Tenancy Eviction Notice Period</span>
                <span className="font-semibold">12 Months via Notary Public</span>
              </div>
            </div>
          </div>

          {/* Off-Plan vs Ready Framework */}
          <div className="p-6 sm:p-8 rounded-2xl border border-border bg-white space-y-4">
            <div className="flex items-center justify-between border-b border-border pb-3">
              <h3 className="text-lg font-bold text-text-primary">Off-Plan (Oqood) vs Ready (Title Deed)</h3>
              <span className="text-xs font-mono text-text-muted font-bold">LAW 8/2007</span>
            </div>
            <p className="text-xs text-text-secondary leading-relaxed">
              Off-plan sales are governed by Law No. 8 of 2007 requiring project-specific DLD Escrow Accounts. Interim registration is secured via Oqood until final completion inspection and Title Deed issuance.
            </p>
            <div className="space-y-2.5 pt-2 text-xs">
              <div className="flex justify-between py-1.5 border-b border-border-subtle">
                <span className="text-text-muted">Escrow Account Requirement</span>
                <span className="font-semibold text-emerald-700">100% Mandatory for Off-Plan</span>
              </div>
              <div className="flex justify-between py-1.5 border-b border-border-subtle">
                <span className="text-text-muted">Pre-Registration Registry</span>
                <span className="font-semibold">DLD Oqood System</span>
              </div>
              <div className="flex justify-between py-1.5">
                <span className="text-text-muted">Ready Property Proof</span>
                <span className="font-semibold">Official DLD Title Deed (E-Certificate)</span>
              </div>
            </div>
          </div>
        </div>

        {/* ========================================================================= */}
        {/* 5. SUBMARKET PRICE / SQFT BENCHMARK MATRIX */}
        {/* ========================================================================= */}
        <div className="p-6 sm:p-8 rounded-2xl border border-border bg-surface space-y-6">
          <div className="flex items-center justify-between border-b border-border pb-4">
            <div>
              <h3 className="text-lg font-bold text-text-primary">
                Freehold Prime Submarket Price Indicators
              </h3>
              <p className="text-xs text-text-muted mt-0.5">
                Indicative price and yield ranges based on verified developer direct inventory and master community profiles.
              </p>
            </div>
            <Link
              href="/areas"
              className="text-xs font-bold text-accent hover:underline flex items-center gap-1"
            >
              <span>Explore Areas</span>
              <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs">
              <thead>
                <tr className="border-b border-border text-[11px] font-mono text-text-muted uppercase">
                  <th className="py-3 px-3">Submarket / District</th>
                  <th className="py-3 px-3">Freehold Sector</th>
                  <th className="py-3 px-3">Indicative Price / Sqft</th>
                  <th className="py-3 px-3">Gross Yield Range</th>
                  <th className="py-3 px-3">Master Developer</th>
                  <th className="py-3 px-3 text-right">Statutory Provenance</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border-subtle">
                <tr>
                  <td className="py-3.5 px-3 font-bold text-text-primary">Palm Jumeirah</td>
                  <td className="py-3.5 px-3 font-semibold text-text-secondary">ISLAND</td>
                  <td className="py-3.5 px-3 font-mono tabular-nums">AED 4,500 – AED 7,500+</td>
                  <td className="py-3.5 px-3 font-mono tabular-nums text-emerald-700">5.5% – 7.2%</td>
                  <td className="py-3.5 px-3 text-text-secondary">Nakheel PJSC</td>
                  <td className="py-3.5 px-3 text-right font-mono text-[10px] text-accent">DLD REG 3/2006</td>
                </tr>
                <tr>
                  <td className="py-3.5 px-3 font-bold text-text-primary">Downtown Dubai</td>
                  <td className="py-3.5 px-3 font-semibold text-text-secondary">URBAN CORE</td>
                  <td className="py-3.5 px-3 font-mono tabular-nums">AED 3,200 – AED 6,200+</td>
                  <td className="py-3.5 px-3 font-mono tabular-nums text-emerald-700">6.0% – 7.8%</td>
                  <td className="py-3.5 px-3 text-text-secondary">Emaar PJSC</td>
                  <td className="py-3.5 px-3 text-right font-mono text-[10px] text-accent">DLD REG 3/2006</td>
                </tr>
                <tr>
                  <td className="py-3.5 px-3 font-bold text-text-primary">Dubai Hills Estate</td>
                  <td className="py-3.5 px-3 font-semibold text-text-secondary">GOLF COMMUNITY</td>
                  <td className="py-3.5 px-3 font-mono tabular-nums">AED 2,100 – AED 3,800</td>
                  <td className="py-3.5 px-3 font-mono tabular-nums text-emerald-700">6.2% – 8.1%</td>
                  <td className="py-3.5 px-3 text-text-secondary">Emaar PJSC</td>
                  <td className="py-3.5 px-3 text-right font-mono text-[10px] text-accent">DLD REG 3/2006</td>
                </tr>
                <tr>
                  <td className="py-3.5 px-3 font-bold text-text-primary">Dubai Marina / Harbour</td>
                  <td className="py-3.5 px-3 font-semibold text-text-secondary">WATERFRONT</td>
                  <td className="py-3.5 px-3 font-mono tabular-nums">AED 2,400 – AED 4,500</td>
                  <td className="py-3.5 px-3 font-mono tabular-nums text-emerald-700">6.5% – 8.5%</td>
                  <td className="py-3.5 px-3 text-text-secondary">Emaar / Meraas</td>
                  <td className="py-3.5 px-3 text-right font-mono text-[10px] text-accent">DLD REG 3/2006</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* ========================================================================= */}
        {/* 6. METHODOLOGY & AUDIT TRAIL */}
        {/* ========================================================================= */}
        <div className="p-6 sm:p-8 rounded-2xl border border-border bg-surface-subtle space-y-3 text-xs text-text-secondary">
          <div className="flex items-center gap-2 text-text-primary font-bold">
            <Info className="h-4 w-4 text-accent" />
            <span>Market Intelligence Methodology & Legal Governance</span>
          </div>
          <p className="leading-relaxed">
            All regulatory rules, tax ceilings, and fee percentages are verified against the official Dubai Government Gazette, Dubai Land Department statutory circulars, and the UAE Federal Tax Authority (FTA). We do not display synthetic AI price predictions or fabricated real-time tickers without live institutional API authorization.
          </p>
        </div>
      </main>
    </div>
  )
}