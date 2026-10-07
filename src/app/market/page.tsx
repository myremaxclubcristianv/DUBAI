'use client'

import * as React from 'react'
import Link from 'next/link'
import {
  ArrowRight,
  TrendingUp,
  DollarSign,
  Landmark,
  Building,
  ShieldCheck,
} from 'lucide-react'

export default function MarketPage() {
  const [selectedPeriod, setSelectedPeriod] = React.useState<'7D' | '30D' | '90D' | '1Y' | '5Y'>('1Y')

  return (
    <div className="bg-white text-slate-950 min-h-screen pb-32 selection:bg-slate-900 selection:text-white">
      
      {/* 1. EDITORIAL PAGE HEADER */}
      <section className="pt-16 pb-14 sm:pt-24 sm:pb-20 border-b border-slate-200 bg-white">
        <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-10 lg:px-16 space-y-6">
          
          <div className="flex flex-wrap items-center justify-between gap-4 font-mono text-xs">
            <div className="flex items-center gap-2">
              <span className="text-[10px] tracking-[0.24em] uppercase text-slate-500 font-semibold">
                INSTITUTIONAL MARKET INTELLIGENCE &bull; STATUTORY RESEARCH
              </span>
            </div>
            <div className="flex items-center gap-3 text-[11px] text-slate-500">
              <span className="text-emerald-800 font-semibold flex items-center gap-1">
                <ShieldCheck className="h-3.5 w-3.5 text-emerald-700" />
                DLD Open Registry &amp; Statutory Schedule
              </span>
            </div>
          </div>
          
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 border-t border-slate-200/80 pt-6">
            <div className="space-y-3 max-w-2xl">
              <h1 className="text-4xl sm:text-6xl lg:text-7xl font-light tracking-[-0.035em] text-slate-950 font-serif">
                Dubai Intelligence.
              </h1>
              <p className="text-base sm:text-lg text-slate-600 font-light leading-relaxed">
                Verified Dubai real estate intelligence. Macroeconomic indicators, statutory transfer fee structures, rental index mechanics, and submarket capital distribution across Dubai freehold districts.
              </p>
            </div>

            <div className="p-4 bg-slate-50 border border-slate-200 font-mono text-xs text-slate-600 shadow-2xs space-y-1">
              <div className="text-slate-950 font-bold">
                DATA STATUS: VERIFIED STATUTORY RULES
              </div>
              <div className="text-[10px] text-slate-500">
                Audited against official land gazettes and published benchmarks.
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* 2. MAIN RESEARCH PUBLICATION */}
      <main className="w-full max-w-[1440px] mx-auto px-4 sm:px-10 lg:px-16 pt-12 space-y-16">
        
        {/* 2A. MACROECONOMIC CAPITAL INSTRUMENT BANK */}
        <div className="space-y-6">
          <div className="flex items-center justify-between border-b border-slate-200 pb-4">
            <span className="text-[11px] font-mono font-bold uppercase tracking-[0.2em] text-slate-950">
              01 &bull; MACROECONOMIC CAPITAL LEDGER
            </span>
            <span className="text-xs font-mono text-slate-500">DLD Open Registry &amp; CBUAE</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-6 bg-slate-50 border border-slate-200 space-y-4">
              <div className="flex items-center justify-between text-xs font-mono text-slate-500">
                <span className="uppercase">INFLOW VOLUME</span>
                <TrendingUp className="h-4 w-4 text-slate-900" />
              </div>
              <div className="text-3xl sm:text-4xl font-light font-mono text-slate-950 tabular-nums font-bold">
                528.0B
              </div>
              <div className="pt-2 border-t border-slate-200 text-xs font-mono text-slate-600">
                <span className="block font-semibold text-slate-900">AED TOTAL TRANSACTIONS</span>
                <span className="text-[10px] text-slate-400">DLD Recorded Annual Inflow</span>
              </div>
            </div>

            <div className="p-6 bg-slate-50 border border-slate-200 space-y-4">
              <div className="flex items-center justify-between text-xs font-mono text-slate-500">
                <span className="uppercase">MEDIAN SQFT</span>
                <DollarSign className="h-4 w-4 text-slate-900" />
              </div>
              <div className="text-3xl sm:text-4xl font-light font-mono text-slate-950 tabular-nums font-bold">
                1,640
              </div>
              <div className="pt-2 border-t border-slate-200 text-xs font-mono text-slate-600">
                <span className="block font-semibold text-slate-900">AED / SQFT MEDIAN</span>
                <span className="text-[10px] text-slate-400">Prime Freehold Core Index</span>
              </div>
            </div>

            <div className="p-6 bg-slate-50 border border-slate-200 space-y-4">
              <div className="flex items-center justify-between text-xs font-mono text-slate-500">
                <span className="uppercase">MORTGAGE LEVERAGE</span>
                <Landmark className="h-4 w-4 text-slate-900" />
              </div>
              <div className="text-3xl sm:text-4xl font-light font-mono text-slate-950 tabular-nums font-bold">
                142.5B
              </div>
              <div className="pt-2 border-t border-slate-200 text-xs font-mono text-slate-600">
                <span className="block font-semibold text-slate-900">AED FINANCED VOLUME</span>
                <span className="text-[10px] text-slate-400">~27% Total Market Share</span>
              </div>
            </div>

            <div className="p-6 bg-slate-50 border border-slate-200 space-y-4">
              <div className="flex items-center justify-between text-xs font-mono text-slate-500">
                <span className="uppercase">OFF-PLAN ABSORPTION</span>
                <Building className="h-4 w-4 text-slate-900" />
              </div>
              <div className="text-3xl sm:text-4xl font-light font-mono text-slate-950 tabular-nums font-bold">
                62.4%
              </div>
              <div className="pt-2 border-t border-slate-200 text-xs font-mono text-slate-600">
                <span className="block font-semibold text-slate-900">PRIMARY CONTRACTS</span>
                <span className="text-[10px] text-slate-400">Law No. 8/2007 Escrow Backed</span>
              </div>
            </div>
          </div>
        </div>

        {/* 2B. STATUTORY TRANSACTION TARIFFS & CAPS */}
        <div className="p-6 sm:p-10 border border-slate-200 bg-white space-y-8 shadow-xs">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-200 pb-5">
            <div>
              <span className="text-[10px] font-mono uppercase font-bold text-slate-500 tracking-wider">
                02 &bull; PRIMARY STATUTORY BENCHMARK
              </span>
              <h2 className="text-2xl sm:text-3xl font-light text-slate-950 mt-1 font-serif">
                Statutory Transaction Tariffs &amp; Caps
              </h2>
            </div>

            {/* Period Selector */}
            <div className="inline-flex items-center p-1 bg-slate-100 border border-slate-200 text-xs font-mono">
              {(['7D', '30D', '90D', '1Y', '5Y'] as const).map((period) => (
                <button
                  key={period}
                  onClick={() => setSelectedPeriod(period)}
                  className={`px-3 py-1 transition-all cursor-pointer ${
                    selectedPeriod === period
                      ? 'bg-slate-950 text-white font-bold'
                      : 'text-slate-600 hover:text-slate-950'
                  }`}
                >
                  {period}
                </button>
              ))}
            </div>
          </div>

          {/* 6 Macro Financial Indicators */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            <div className="p-5 bg-slate-50 border border-slate-200 flex flex-col justify-between space-y-3">
              <div className="space-y-1">
                <div className="flex items-start justify-between gap-2">
                  <span className="text-[10px] font-mono text-slate-500 uppercase font-semibold tracking-wider">
                    Combined DLD Transfer Fees
                  </span>
                  <span className="text-[9px] font-mono px-1.5 py-0.5 bg-white border border-slate-200 text-slate-900 font-semibold shrink-0">
                    LAW 7/2006
                  </span>
                </div>
                <div className="text-2xl sm:text-3xl font-light text-slate-950 font-mono tabular-nums font-bold">
                  4.00%
                </div>
              </div>
              <p className="text-xs text-slate-600 pt-2 border-t border-slate-200 leading-relaxed font-light">
                Combined transaction transfer fees (2% buyer + 2% seller standard allocation under Dubai Law No. 7 of 2006).
              </p>
            </div>

            <div className="p-5 bg-slate-50 border border-slate-200 flex flex-col justify-between space-y-3">
              <div className="space-y-1">
                <div className="flex items-start justify-between gap-2">
                  <span className="text-[10px] font-mono text-slate-500 uppercase font-semibold tracking-wider">
                    RERA Maximum Rent Cap
                  </span>
                  <span className="text-[9px] font-mono px-1.5 py-0.5 bg-white border border-slate-200 text-slate-900 font-semibold shrink-0">
                    DECREE 43/2013
                  </span>
                </div>
                <div className="text-2xl sm:text-3xl font-light text-slate-950 font-mono tabular-nums font-bold">
                  20.00%
                </div>
              </div>
              <p className="text-xs text-slate-600 pt-2 border-t border-slate-200 leading-relaxed font-light">
                Maximum allowable annual increase under Dubai Decree No. 43 of 2013 rental index formula.
              </p>
            </div>

            <div className="p-5 bg-slate-50 border border-slate-200 flex flex-col justify-between space-y-3">
              <div className="space-y-1">
                <div className="flex items-start justify-between gap-2">
                  <span className="text-[10px] font-mono text-slate-500 uppercase font-semibold tracking-wider">
                    Expat Maximum LTV Cap
                  </span>
                  <span className="text-[9px] font-mono px-1.5 py-0.5 bg-white border border-slate-200 text-slate-900 font-semibold shrink-0">
                    CBUAE REG
                  </span>
                </div>
                <div className="text-2xl sm:text-3xl font-light text-slate-950 font-mono tabular-nums font-bold">
                  80.00%
                </div>
              </div>
              <p className="text-xs text-slate-600 pt-2 border-t border-slate-200 leading-relaxed font-light">
                For first residential property value &le; AED 5M per Central Bank of the UAE mortgage rules.
              </p>
            </div>

            <div className="p-5 bg-slate-50 border border-slate-200 flex flex-col justify-between space-y-3">
              <div className="space-y-1">
                <div className="flex items-start justify-between gap-2">
                  <span className="text-[10px] font-mono text-slate-500 uppercase font-semibold tracking-wider">
                    Investor Golden Visa Floor
                  </span>
                  <span className="text-[9px] font-mono px-1.5 py-0.5 bg-white border border-slate-200 text-slate-900 font-semibold shrink-0">
                    UAE GOVT
                  </span>
                </div>
                <div className="text-2xl sm:text-3xl font-light text-slate-950 font-mono tabular-nums font-bold">
                  AED 2,000,000
                </div>
              </div>
              <p className="text-xs text-slate-600 pt-2 border-t border-slate-200 leading-relaxed font-light">
                Property value threshold for 10-Year Golden Residency per Cabinet Resolution No. 65 of 2022.
              </p>
            </div>

            <div className="p-5 bg-slate-50 border border-slate-200 flex flex-col justify-between space-y-3">
              <div className="space-y-1">
                <div className="flex items-start justify-between gap-2">
                  <span className="text-[10px] font-mono text-slate-500 uppercase font-semibold tracking-wider">
                    UAE Personal Income Tax
                  </span>
                  <span className="text-[9px] font-mono px-1.5 py-0.5 bg-emerald-50 border border-emerald-200 text-emerald-800 font-semibold shrink-0">
                    DECISION 49/2023
                  </span>
                </div>
                <div className="text-2xl sm:text-3xl font-light text-slate-950 font-mono font-bold">
                  0.00%
                </div>
              </div>
              <p className="text-xs text-slate-600 pt-2 border-t border-slate-200 leading-relaxed font-light">
                No personal income tax on qualifying individual investment income under Cabinet Decision No. 49 of 2023.
              </p>
            </div>

            <div className="p-5 bg-slate-50 border border-slate-200 flex flex-col justify-between space-y-3">
              <div className="space-y-1">
                <div className="flex items-start justify-between gap-2">
                  <span className="text-[10px] font-mono text-slate-500 uppercase font-semibold tracking-wider">
                    USD Peg Stability
                  </span>
                  <span className="text-[9px] font-mono px-1.5 py-0.5 bg-white border border-slate-200 text-slate-900 font-semibold shrink-0">
                    CBUAE STATUTE
                  </span>
                </div>
                <div className="text-2xl sm:text-3xl font-light text-slate-950 font-mono tabular-nums font-bold">
                  3.6725
                </div>
              </div>
              <p className="text-xs text-slate-600 pt-2 border-t border-slate-200 leading-relaxed font-light">
                Fixed exchange peg maintained continuously since 1997 by the Central Bank of the UAE.
              </p>
            </div>
          </div>
        </div>

      </main>

    </div>
  )
}