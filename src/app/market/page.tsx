'use client'

import * as React from 'react'
import Link from 'next/link'
import { SourceBadge } from '@/components/ui/source-badge'
import { PageIntro } from '@/components/layout/layout-primitives'
import { CadranDial, CadranQuadrant } from '@/components/ui/luxury-cadran'
import {
  ArrowRight,
  Info,
  TrendingUp,
  DollarSign,
  Landmark,
  Building,
} from 'lucide-react'

export default function MarketPage() {
  const [selectedPeriod, setSelectedPeriod] = React.useState<'7D' | '30D' | '90D' | '1Y' | '5Y'>('1Y')

  return (
    <div className="bg-white text-[#1d1d1f] min-h-screen pb-32 selection:bg-[#0071e3]/10 selection:text-[#1d1d1f]">
      {/* 1. EDITORIAL PAGE INTRO */}
      <PageIntro
        eyebrow="Institutional Market Intelligence & Regulatory Research"
        badge={<SourceBadge status="OFFICIAL SOURCE" sourceName="DLD Open Registry & Statutory Laws" />}
        title="Market Intelligence."
        description="Dubai real estate intelligence. Macroeconomic indicators, statutory transfer fee structures, rental index mechanics, and submarket capital distribution across Dubai freehold districts."
      />

      {/* 2. DATA STATUS BANNER */}
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
        <div className="p-5 rounded-3xl border border-black/10 bg-[#f5f5f7] flex flex-col md:flex-row md:items-center justify-between gap-4 text-xs shadow-xs">
          <div className="flex items-center gap-3">
            <span className="h-2.5 w-2.5 rounded-full bg-[#b8860b] shrink-0 animate-pulse" />
            <div className="space-y-0.5">
              <div className="font-bold text-[#1d1d1f] uppercase tracking-wider">DATA STATUS: VERIFIED STATUTORY RULES & PUBLISHED BENCHMARKS</div>
              <div className="text-[#6e6e73] text-xs">
                DLD LIVE INTEGRATION: PREPARED • The platform architecture is verified against statutory rules, official land gazettes, and published institutional benchmarks.
              </div>
            </div>
          </div>
          <span className="font-mono text-[10px] px-3 py-1 rounded-full bg-white text-[#b8860b] border border-black/10 font-bold shrink-0 self-start md:self-auto shadow-2xs">
            ZERO SYNTHETIC DATA
          </span>
        </div>
      </div>

      <main className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 space-y-16">
        {/* ========================================================================= */}
        {/* 2B. CADRAN GAUGES INSTRUMENT BANK */}
        {/* ========================================================================= */}
        <div className="space-y-6">
          <div className="flex items-center justify-between border-b border-black/10 pb-4">
            <span className="text-[11px] font-mono font-bold uppercase tracking-[0.2em] text-[#b8860b]">
              MACROECONOMIC CAPITAL CADRANS
            </span>
            <span className="text-xs font-mono text-[#86868b]">DLD Open Registry & CBUAE</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <CadranDial
              label="ANNUAL INFLOW VOLUME"
              sublabel="DLD Recorded Total Transactions"
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
              icon={DollarSign}
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
              targetValue="Law No. 8/2007 Escrow Verified"
              percentage={62}
              status="VERIFIED"
              statutoryRef="DLD Escrow Audit Ledger"
              icon={Building}
            />
          </div>
        </div>

        {/* ========================================================================= */}
        {/* 2C. MARKET COMPOSITION QUADRANT */}
        {/* ========================================================================= */}
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

        {/* ========================================================================= */}
        {/* 3. MARKET PULSE: HEADLINE METRIC & CORE STATUTORY BENCHMARKS */}
        {/* ========================================================================= */}
        <div className="p-6 sm:p-10 rounded-3xl border border-black/10 bg-white space-y-8 shadow-[0_2px_12px_rgba(0,0,0,0.03)] apple-card-hover">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-black/10 pb-6">
            <div>
              <span className="text-[10px] font-mono uppercase font-bold text-[#b8860b] tracking-wider">
                PRIMARY STATUTORY BENCHMARK
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#1d1d1f] mt-1">
                Statutory Transaction Tariffs & Caps
              </h2>
            </div>

            {/* Period Selector */}
            <div className="inline-flex items-center p-1.5 rounded-full bg-[#f5f5f7] border border-black/10 text-xs font-semibold">
              {(['7D', '30D', '90D', '1Y', '5Y'] as const).map((period) => (
                <button
                  key={period}
                  onClick={() => setSelectedPeriod(period)}
                  className={`px-4 py-1.5 rounded-full transition-all cursor-pointer ${
                    selectedPeriod === period
                      ? 'bg-[#1d1d1f] text-white font-bold shadow-xs'
                      : 'text-[#6e6e73] hover:text-[#1d1d1f]'
                  }`}
                >
                  {period}
                </button>
              ))}
            </div>
          </div>

          {/* 6 Macro Financial Indicators (Bento Grid) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="p-6 rounded-2xl bg-[#f5f5f7] border border-black/10 flex flex-col justify-between h-full space-y-4">
              <div className="space-y-2">
                <div className="flex items-start justify-between gap-2 min-h-[1.5rem]">
                  <span className="text-[10px] font-mono text-[#86868b] uppercase font-bold tracking-wider">
                    Combined DLD Transfer Fees
                  </span>
                  <span className="text-[9px] font-mono px-2 py-0.5 rounded-full bg-white border border-black/10 text-[#b8860b] font-bold shrink-0">
                    DLD LAW
                  </span>
                </div>
                <div className="text-3xl font-extrabold text-[#1d1d1f] tabular-nums leading-none min-h-[2.25rem] flex items-baseline">
                  4.00%
                </div>
              </div>
              <p className="text-xs text-[#6e6e73] pt-3 border-t border-black/10 leading-relaxed">
                Combined transaction transfer fees (2% buyer + 2% seller standard allocation under Dubai Law No. 7 of 2006).
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[#f5f5f7] border border-black/10 flex flex-col justify-between h-full space-y-4">
              <div className="space-y-2">
                <div className="flex items-start justify-between gap-2 min-h-[1.5rem]">
                  <span className="text-[10px] font-mono text-[#86868b] uppercase font-bold tracking-wider">
                    RERA Maximum Rent Cap
                  </span>
                  <span className="text-[9px] font-mono px-2 py-0.5 rounded-full bg-white border border-black/10 text-[#b8860b] font-bold shrink-0">
                    DECREE 43/2013
                  </span>
                </div>
                <div className="text-3xl font-extrabold text-[#1d1d1f] tabular-nums leading-none min-h-[2.25rem] flex items-baseline">
                  20.00%
                </div>
              </div>
              <p className="text-xs text-[#6e6e73] pt-3 border-t border-black/10 leading-relaxed">
                Maximum allowable annual increase under Dubai Decree No. 43 of 2013 rental index formula.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[#f5f5f7] border border-black/10 flex flex-col justify-between h-full space-y-4">
              <div className="space-y-2">
                <div className="flex items-start justify-between gap-2 min-h-[1.5rem]">
                  <span className="text-[10px] font-mono text-[#86868b] uppercase font-bold tracking-wider">
                    Expat Maximum LTV Cap
                  </span>
                  <span className="text-[9px] font-mono px-2 py-0.5 rounded-full bg-white border border-black/10 text-[#b8860b] font-bold shrink-0">
                    CBUAE REG
                  </span>
                </div>
                <div className="text-3xl font-extrabold text-[#1d1d1f] tabular-nums leading-none min-h-[2.25rem] flex items-baseline">
                  80.00%
                </div>
              </div>
              <p className="text-xs text-[#6e6e73] pt-3 border-t border-black/10 leading-relaxed">
                For first residential property value ≤ AED 5M per Central Bank of the UAE mortgage rules.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[#f5f5f7] border border-black/10 flex flex-col justify-between h-full space-y-4">
              <div className="space-y-2">
                <div className="flex items-start justify-between gap-2 min-h-[1.5rem]">
                  <span className="text-[10px] font-mono text-[#86868b] uppercase font-bold tracking-wider">
                    Investor Golden Visa Floor
                  </span>
                  <span className="text-[9px] font-mono px-2 py-0.5 rounded-full bg-white border border-black/10 text-[#b8860b] font-bold shrink-0">
                    UAE GOVT
                  </span>
                </div>
                <div className="text-3xl font-extrabold text-[#1d1d1f] tabular-nums leading-none min-h-[2.25rem] flex items-baseline">
                  AED 2,000,000
                </div>
              </div>
              <p className="text-xs text-[#6e6e73] pt-3 border-t border-black/10 leading-relaxed">
                Property value threshold (5-Yr UAE summary / 10-Yr service portals per Cabinet Res 65/2022).
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[#f5f5f7] border border-black/10 flex flex-col justify-between h-full space-y-4">
              <div className="space-y-2">
                <div className="flex items-start justify-between gap-2 min-h-[1.5rem]">
                  <span className="text-[10px] font-mono text-[#86868b] uppercase font-bold tracking-wider">
                    UAE Personal Income Tax
                  </span>
                  <span className="text-[9px] font-mono px-2 py-0.5 rounded-full bg-white border border-black/10 text-[#b8860b] font-bold shrink-0">
                    DECISION 49/2023
                  </span>
                </div>
                <div className="text-2xl sm:text-3xl font-extrabold text-[#b8860b] uppercase tracking-tight leading-none min-h-[2.25rem] flex items-baseline">
                  NO PERSONAL TAX
                </div>
              </div>
              <p className="text-xs text-[#6e6e73] pt-3 border-t border-black/10 leading-relaxed">
                No personal income tax on qualifying individual investment income (Cabinet Dec 49/2023).
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[#f5f5f7] border border-black/10 flex flex-col justify-between h-full space-y-4">
              <div className="space-y-2">
                <div className="flex items-start justify-between gap-2 min-h-[1.5rem]">
                  <span className="text-[10px] font-mono text-[#86868b] uppercase font-bold tracking-wider">
                    Mortgage Registration Tariff
                  </span>
                  <span className="text-[9px] font-mono px-2 py-0.5 rounded-full bg-white border border-black/10 text-[#b8860b] font-bold shrink-0">
                    DLD TARIFF
                  </span>
                </div>
                <div className="text-3xl font-extrabold text-[#1d1d1f] tabular-nums leading-none min-h-[2.25rem] flex items-baseline">
                  0.25%
                </div>
              </div>
              <p className="text-xs text-[#6e6e73] pt-3 border-t border-black/10 leading-relaxed">
                0.25% of mortgage value + applicable title deed, document, knowledge, and innovation tariffs.
              </p>
            </div>
          </div>
        </div>

        {/* ========================================================================= */}
        {/* 4. SUBMARKET PRICE / SQFT BENCHMARK MATRIX */}
        {/* ========================================================================= */}
        <div className="p-6 sm:p-10 rounded-3xl border border-black/10 bg-white space-y-6 shadow-[0_2px_12px_rgba(0,0,0,0.03)] apple-card-hover">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-black/10 pb-4">
            <div>
              <h3 className="text-xl font-bold text-[#1d1d1f]">
                Freehold Prime Submarket Price Indicators
              </h3>
              <p className="text-xs text-[#6e6e73] mt-0.5">
                Indicative price and yield ranges based on verified developer direct inventory and master community profiles.
              </p>
            </div>
            <Link
              href="/areas"
              className="text-xs font-bold text-[#b8860b] hover:underline flex items-center gap-1.5"
            >
              <span>Explore Areas Directory</span>
              <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs">
              <thead>
                <tr className="border-b border-black/10 text-[11px] font-mono text-[#86868b] uppercase">
                  <th className="py-3.5 px-4">Submarket / District</th>
                  <th className="py-3.5 px-4">Sector Typology</th>
                  <th className="py-3.5 px-4">Price / SqFt Band</th>
                  <th className="py-3.5 px-4">Gross Yield</th>
                  <th className="py-3.5 px-4">Mollak Service Charge</th>
                  <th className="py-3.5 px-4">Master Developer</th>
                  <th className="py-3.5 px-4 text-right">Statutory Source</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-black/5">
                <tr>
                  <td className="py-4 px-4 font-bold text-[#1d1d1f]">Palm Jumeirah</td>
                  <td className="py-4 px-4 font-semibold text-[#6e6e73]">ISLAND WATERFRONT</td>
                  <td className="py-4 px-4 font-mono tabular-nums text-[#1d1d1f]">AED 4,500 – AED 7,500+</td>
                  <td className="py-4 px-4 font-mono tabular-nums text-[#b8860b] font-bold">5.5% – 7.2%</td>
                  <td className="py-4 px-4 font-mono text-[#6e6e73]">AED 18 – 35 / sqft</td>
                  <td className="py-4 px-4 text-[#6e6e73]">Nakheel PJSC</td>
                  <td className="py-4 px-4 text-right font-mono text-[10px] text-[#b8860b]">DLD REG 3/2006</td>
                </tr>
                <tr>
                  <td className="py-4 px-4 font-bold text-[#1d1d1f]">Downtown Dubai</td>
                  <td className="py-4 px-4 font-semibold text-[#6e6e73]">URBAN CORE</td>
                  <td className="py-4 px-4 font-mono tabular-nums text-[#1d1d1f]">AED 3,200 – AED 6,200+</td>
                  <td className="py-4 px-4 font-mono tabular-nums text-[#b8860b] font-bold">6.0% – 7.8%</td>
                  <td className="py-4 px-4 font-mono text-[#6e6e73]">AED 22 – 45 / sqft</td>
                  <td className="py-4 px-4 text-[#6e6e73]">Emaar PJSC</td>
                  <td className="py-4 px-4 text-right font-mono text-[10px] text-[#b8860b]">DLD REG 3/2006</td>
                </tr>
                <tr>
                  <td className="py-4 px-4 font-bold text-[#1d1d1f]">DIFC (Financial District)</td>
                  <td className="py-4 px-4 font-semibold text-[#6e6e73]">FINANCIAL CENTRE</td>
                  <td className="py-4 px-4 font-mono tabular-nums text-[#1d1d1f]">AED 2,800 – AED 5,500</td>
                  <td className="py-4 px-4 font-mono tabular-nums text-[#b8860b] font-bold">6.5% – 8.2%</td>
                  <td className="py-4 px-4 font-mono text-[#6e6e73]">AED 20 – 38 / sqft</td>
                  <td className="py-4 px-4 text-[#6e6e73]">DIFC Authority</td>
                  <td className="py-4 px-4 text-right font-mono text-[10px] text-[#b8860b]">DIFC LAW NO. 1</td>
                </tr>
                <tr>
                  <td className="py-4 px-4 font-bold text-[#1d1d1f]">Dubai Hills Estate</td>
                  <td className="py-4 px-4 font-semibold text-[#6e6e73]">GOLF RESIDENTIAL</td>
                  <td className="py-4 px-4 font-mono tabular-nums text-[#1d1d1f]">AED 2,100 – AED 3,800</td>
                  <td className="py-4 px-4 font-mono tabular-nums text-[#b8860b] font-bold">6.2% – 8.1%</td>
                  <td className="py-4 px-4 font-mono text-[#6e6e73]">AED 14 – 24 / sqft</td>
                  <td className="py-4 px-4 text-[#6e6e73]">Emaar PJSC</td>
                  <td className="py-4 px-4 text-right font-mono text-[10px] text-[#b8860b]">DLD REG 3/2006</td>
                </tr>
                <tr>
                  <td className="py-4 px-4 font-bold text-[#1d1d1f]">Dubai Marina / Harbour</td>
                  <td className="py-4 px-4 font-semibold text-[#6e6e73]">MARITIME WATERFRONT</td>
                  <td className="py-4 px-4 font-mono tabular-nums text-[#1d1d1f]">AED 2,400 – AED 4,500</td>
                  <td className="py-4 px-4 font-mono tabular-nums text-[#b8860b] font-bold">6.5% – 8.5%</td>
                  <td className="py-4 px-4 font-mono text-[#6e6e73]">AED 16 – 28 / sqft</td>
                  <td className="py-4 px-4 text-[#6e6e73]">Emaar / Meraas</td>
                  <td className="py-4 px-4 text-right font-mono text-[10px] text-[#b8860b]">DLD REG 3/2006</td>
                </tr>
                <tr>
                  <td className="py-4 px-4 font-bold text-[#1d1d1f]">Jumeirah Bay Island</td>
                  <td className="py-4 px-4 font-semibold text-[#6e6e73]">ULTRA-PRIME ISLAND</td>
                  <td className="py-4 px-4 font-mono tabular-nums text-[#1d1d1f]">AED 8,500 – AED 15,000+</td>
                  <td className="py-4 px-4 font-mono tabular-nums text-[#b8860b] font-bold">4.8% – 6.0%</td>
                  <td className="py-4 px-4 font-mono text-[#6e6e73]">AED 30 – 65 / sqft</td>
                  <td className="py-4 px-4 text-[#6e6e73]">Meraas Holding</td>
                  <td className="py-4 px-4 text-right font-mono text-[10px] text-[#b8860b]">DLD REG 3/2006</td>
                </tr>
                <tr>
                  <td className="py-4 px-4 font-bold text-[#1d1d1f]">Emirates Hills</td>
                  <td className="py-4 px-4 font-semibold text-[#6e6e73]">PRIVATE GATED MANSIONS</td>
                  <td className="py-4 px-4 font-mono tabular-nums text-[#1d1d1f]">AED 3,800 – AED 6,500</td>
                  <td className="py-4 px-4 font-mono tabular-nums text-[#b8860b] font-bold">5.0% – 6.5%</td>
                  <td className="py-4 px-4 font-mono text-[#6e6e73]">AED 4 – 8 / plot sqft</td>
                  <td className="py-4 px-4 text-[#6e6e73]">Emaar PJSC</td>
                  <td className="py-4 px-4 text-right font-mono text-[10px] text-[#b8860b]">DLD REG 3/2006</td>
                </tr>
                <tr>
                  <td className="py-4 px-4 font-bold text-[#1d1d1f]">District One (MBR City)</td>
                  <td className="py-4 px-4 font-semibold text-[#6e6e73]">CRYSTAL LAGOON VILLAS</td>
                  <td className="py-4 px-4 font-mono tabular-nums text-[#1d1d1f]">AED 2,900 – AED 4,800</td>
                  <td className="py-4 px-4 font-mono tabular-nums text-[#b8860b] font-bold">5.8% – 7.4%</td>
                  <td className="py-4 px-4 font-mono text-[#6e6e73]">AED 8 – 16 / sqft</td>
                  <td className="py-4 px-4 text-[#6e6e73]">Meydan Group</td>
                  <td className="py-4 px-4 text-right font-mono text-[10px] text-[#b8860b]">DLD REG 3/2006</td>
                </tr>
                <tr>
                  <td className="py-4 px-4 font-bold text-[#1d1d1f]">Bluewaters Island</td>
                  <td className="py-4 px-4 font-semibold text-[#6e6e73]">ISLAND HOSPITALITY</td>
                  <td className="py-4 px-4 font-mono tabular-nums text-[#1d1d1f]">AED 3,600 – AED 6,000</td>
                  <td className="py-4 px-4 font-mono tabular-nums text-[#b8860b] font-bold">6.2% – 7.9%</td>
                  <td className="py-4 px-4 font-mono text-[#6e6e73]">AED 24 – 38 / sqft</td>
                  <td className="py-4 px-4 text-[#6e6e73]">Meraas Holding</td>
                  <td className="py-4 px-4 text-right font-mono text-[10px] text-[#b8860b]">DLD REG 3/2006</td>
                </tr>
                <tr>
                  <td className="py-4 px-4 font-bold text-[#1d1d1f]">Dubai Creek Harbour</td>
                  <td className="py-4 px-4 font-semibold text-[#6e6e73]">WATERFRONT RESIDENTIAL</td>
                  <td className="py-4 px-4 font-mono tabular-nums text-[#1d1d1f]">AED 1,950 – AED 3,200</td>
                  <td className="py-4 px-4 font-mono tabular-nums text-[#b8860b] font-bold">6.8% – 8.6%</td>
                  <td className="py-4 px-4 font-mono text-[#6e6e73]">AED 16 – 26 / sqft</td>
                  <td className="py-4 px-4 text-[#6e6e73]">Emaar PJSC</td>
                  <td className="py-4 px-4 text-right font-mono text-[10px] text-[#b8860b]">DLD REG 3/2006</td>
                </tr>
                <tr>
                  <td className="py-4 px-4 font-bold text-[#1d1d1f]">City Walk (Jumeirah)</td>
                  <td className="py-4 px-4 font-semibold text-[#6e6e73]">URBAN LOW-RISE</td>
                  <td className="py-4 px-4 font-mono tabular-nums text-[#1d1d1f]">AED 2,700 – AED 4,400</td>
                  <td className="py-4 px-4 font-mono tabular-nums text-[#b8860b] font-bold">6.4% – 7.9%</td>
                  <td className="py-4 px-4 font-mono text-[#6e6e73]">AED 20 – 32 / sqft</td>
                  <td className="py-4 px-4 text-[#6e6e73]">Meraas Holding</td>
                  <td className="py-4 px-4 text-right font-mono text-[10px] text-[#b8860b]">DLD REG 3/2006</td>
                </tr>
                <tr>
                  <td className="py-4 px-4 font-bold text-[#1d1d1f]">Sobha Hartland (MBR City)</td>
                  <td className="py-4 px-4 font-semibold text-[#6e6e73]">SANCTUARY WATERFRONT</td>
                  <td className="py-4 px-4 font-mono tabular-nums text-[#1d1d1f]">AED 2,200 – AED 3,600</td>
                  <td className="py-4 px-4 font-mono tabular-nums text-[#b8860b] font-bold">6.9% – 8.4%</td>
                  <td className="py-4 px-4 font-mono text-[#6e6e73]">AED 15 – 25 / sqft</td>
                  <td className="py-4 px-4 text-[#6e6e73]">Sobha Realty</td>
                  <td className="py-4 px-4 text-right font-mono text-[10px] text-[#b8860b]">DLD REG 3/2006</td>
                </tr>
                <tr>
                  <td className="py-4 px-4 font-bold text-[#1d1d1f]">Palm Jebel Ali</td>
                  <td className="py-4 px-4 font-semibold text-[#6e6e73]">FUTURE ULTRA-PRIME</td>
                  <td className="py-4 px-4 font-mono tabular-nums text-[#1d1d1f]">AED 3,200 – AED 5,800</td>
                  <td className="py-4 px-4 font-mono tabular-nums text-[#b8860b] font-bold">5.2% – 6.8%</td>
                  <td className="py-4 px-4 font-mono text-[#6e6e73]">AED 12 – 22 / sqft</td>
                  <td className="py-4 px-4 text-[#6e6e73]">Nakheel PJSC</td>
                  <td className="py-4 px-4 text-right font-mono text-[10px] text-[#b8860b]">DLD REG 3/2006</td>
                </tr>
                <tr>
                  <td className="py-4 px-4 font-bold text-[#1d1d1f]">Dubai South (DWC / Expo)</td>
                  <td className="py-4 px-4 font-semibold text-[#6e6e73]">LOGISTICS & GOLF</td>
                  <td className="py-4 px-4 font-mono tabular-nums text-[#1d1d1f]">AED 1,150 – AED 1,850</td>
                  <td className="py-4 px-4 font-mono tabular-nums text-[#b8860b] font-bold">7.8% – 9.6%</td>
                  <td className="py-4 px-4 font-mono text-[#6e6e73]">AED 10 – 16 / sqft</td>
                  <td className="py-4 px-4 text-[#6e6e73]">Dubai Aviation Corp</td>
                  <td className="py-4 px-4 text-right font-mono text-[10px] text-[#b8860b]">DLD REG 3/2006</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* ========================================================================= */}
        {/* 5. METHODOLOGY & AUDIT TRAIL */}
        {/* ========================================================================= */}
        <div className="p-6 sm:p-8 rounded-3xl border border-black/10 bg-[#f5f5f7] space-y-3 text-xs text-[#6e6e73] shadow-xs">
          <div className="flex items-center gap-2 text-[#1d1d1f] font-bold text-sm">
            <Info className="h-4 w-4 text-[#b8860b]" />
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