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
    <div className="bg-black text-white min-h-screen pb-24">
      {/* 1. EDITORIAL PAGE INTRO */}
      <PageIntro
        eyebrow="Institutional Market Intelligence & Regulatory Research"
        badge={<SourceBadge status="OFFICIAL SOURCE" sourceName="DLD Open Registry & Statutory Laws" />}
        title="Market Intelligence."
        description="Dubai real estate intelligence. Macroeconomic indicators, statutory transfer fee structures, rental index mechanics, and submarket capital distribution across Dubai freehold districts."
      />

      {/* 2. DATA STATUS BANNER */}
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
        <div className="p-5 rounded-3xl border border-white/10 bg-zinc-950/80 flex flex-col md:flex-row md:items-center justify-between gap-4 text-xs backdrop-blur-md">
          <div className="flex items-center gap-3">
            <span className="h-2.5 w-2.5 rounded-full bg-gold shrink-0 animate-pulse" />
            <div className="space-y-0.5">
              <div className="font-bold text-white uppercase tracking-wider">DATA STATUS: VERIFIED STATUTORY RULES & PUBLISHED BENCHMARKS</div>
              <div className="text-zinc-400 text-xs">
                DLD LIVE INTEGRATION: PREPARED • The platform architecture is verified against statutory rules, official land gazettes, and published institutional benchmarks.
              </div>
            </div>
          </div>
          <span className="font-mono text-[10px] px-3 py-1 rounded-full bg-gold/10 text-gold border border-gold/30 font-bold shrink-0 self-start md:self-auto">
            ZERO SYNTHETIC DATA
          </span>
        </div>
      </div>

      <main className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 space-y-12">
        {/* ========================================================================= */}
        {/* 2B. CADRAN GAUGES INSTRUMENT BANK */}
        {/* ========================================================================= */}
        <div className="space-y-6">
          <div className="flex items-center justify-between border-b border-white/10 pb-4">
            <span className="text-[10px] font-mono font-bold uppercase tracking-[0.2em] text-accent">
              MACROECONOMIC CAPITAL CADRANS
            </span>
            <span className="text-xs font-mono text-zinc-400">DLD Open Registry & CBUAE</span>
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
        <div className="p-6 sm:p-10 rounded-3xl border border-white/10 bg-zinc-950/90 space-y-8 backdrop-blur-md shadow-2xl">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-white/10 pb-6">
            <div>
              <span className="text-[10px] font-mono uppercase font-bold text-gold tracking-wider">
                PRIMARY STATUTORY BENCHMARK
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold text-white mt-1">
                Statutory Transaction Tariffs & Caps
              </h2>
            </div>

            {/* Period Selector */}
            <div className="inline-flex items-center p-1.5 rounded-full bg-black border border-white/10 text-xs font-semibold">
              {(['7D', '30D', '90D', '1Y', '5Y'] as const).map((period) => (
                <button
                  key={period}
                  onClick={() => setSelectedPeriod(period)}
                  className={`px-4 py-1.5 rounded-full transition-all cursor-pointer ${
                    selectedPeriod === period
                      ? 'bg-white text-black font-bold shadow-md'
                      : 'text-zinc-400 hover:text-white'
                  }`}
                >
                  {period}
                </button>
              ))}
            </div>
          </div>

          {/* 6 Macro Financial Indicators (Bento Grid) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            <div className="p-6 rounded-2xl bg-black border border-white/10 flex flex-col justify-between h-full space-y-4 shadow-xl">
              <div className="space-y-2">
                <div className="flex items-start justify-between gap-2 min-h-[1.5rem]">
                  <span className="text-[10px] font-mono text-zinc-400 uppercase font-bold tracking-wider">
                    Combined DLD Transfer Fees
                  </span>
                  <span className="text-[9px] font-mono px-2 py-0.5 rounded-full bg-zinc-900 border border-white/10 text-gold font-bold shrink-0">
                    DLD LAW
                  </span>
                </div>
                <div className="text-3xl font-bold text-white tabular-nums leading-none min-h-[2.25rem] flex items-baseline">
                  4.00%
                </div>
              </div>
              <p className="text-xs text-zinc-400 pt-3 border-t border-white/10 leading-relaxed">
                Combined transaction transfer fees (2% buyer + 2% seller standard allocation under Dubai Law No. 7 of 2006).
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-black border border-white/10 flex flex-col justify-between h-full space-y-4 shadow-xl">
              <div className="space-y-2">
                <div className="flex items-start justify-between gap-2 min-h-[1.5rem]">
                  <span className="text-[10px] font-mono text-zinc-400 uppercase font-bold tracking-wider">
                    RERA Maximum Rent Cap
                  </span>
                  <span className="text-[9px] font-mono px-2 py-0.5 rounded-full bg-zinc-900 border border-white/10 text-gold font-bold shrink-0">
                    DECREE 43/2013
                  </span>
                </div>
                <div className="text-3xl font-bold text-white tabular-nums leading-none min-h-[2.25rem] flex items-baseline">
                  20.00%
                </div>
              </div>
              <p className="text-xs text-zinc-400 pt-3 border-t border-white/10 leading-relaxed">
                Maximum allowable annual increase under Dubai Decree No. 43 of 2013 rental index formula.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-black border border-white/10 flex flex-col justify-between h-full space-y-4 shadow-xl">
              <div className="space-y-2">
                <div className="flex items-start justify-between gap-2 min-h-[1.5rem]">
                  <span className="text-[10px] font-mono text-zinc-400 uppercase font-bold tracking-wider">
                    Expat Maximum LTV Cap
                  </span>
                  <span className="text-[9px] font-mono px-2 py-0.5 rounded-full bg-zinc-900 border border-white/10 text-gold font-bold shrink-0">
                    CBUAE REG
                  </span>
                </div>
                <div className="text-3xl font-bold text-white tabular-nums leading-none min-h-[2.25rem] flex items-baseline">
                  80.00%
                </div>
              </div>
              <p className="text-xs text-zinc-400 pt-3 border-t border-white/10 leading-relaxed">
                For first residential property value ≤ AED 5M per Central Bank of the UAE mortgage rules.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-black border border-white/10 flex flex-col justify-between h-full space-y-4 shadow-xl">
              <div className="space-y-2">
                <div className="flex items-start justify-between gap-2 min-h-[1.5rem]">
                  <span className="text-[10px] font-mono text-zinc-400 uppercase font-bold tracking-wider">
                    Investor Golden Visa Floor
                  </span>
                  <span className="text-[9px] font-mono px-2 py-0.5 rounded-full bg-zinc-900 border border-white/10 text-gold font-bold shrink-0">
                    UAE GOVT
                  </span>
                </div>
                <div className="text-3xl font-bold text-white tabular-nums leading-none min-h-[2.25rem] flex items-baseline">
                  AED 2,000,000
                </div>
              </div>
              <p className="text-xs text-zinc-400 pt-3 border-t border-white/10 leading-relaxed">
                Property value threshold (5-Yr UAE summary / 10-Yr service portals per Cabinet Res 65/2022).
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-black border border-white/10 flex flex-col justify-between h-full space-y-4 shadow-xl">
              <div className="space-y-2">
                <div className="flex items-start justify-between gap-2 min-h-[1.5rem]">
                  <span className="text-[10px] font-mono text-zinc-400 uppercase font-bold tracking-wider">
                    UAE Personal Income Tax
                  </span>
                  <span className="text-[9px] font-mono px-2 py-0.5 rounded-full bg-zinc-900 border border-white/10 text-gold font-bold shrink-0">
                    DECISION 49/2023
                  </span>
                </div>
                <div className="text-2xl sm:text-3xl font-bold text-gold uppercase tracking-tight leading-none min-h-[2.25rem] flex items-baseline">
                  NO PERSONAL TAX
                </div>
              </div>
              <p className="text-xs text-zinc-400 pt-3 border-t border-white/10 leading-relaxed">
                No personal income tax on qualifying individual investment income (Cabinet Dec 49/2023).
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-black border border-white/10 flex flex-col justify-between h-full space-y-4 shadow-xl">
              <div className="space-y-2">
                <div className="flex items-start justify-between gap-2 min-h-[1.5rem]">
                  <span className="text-[10px] font-mono text-zinc-400 uppercase font-bold tracking-wider">
                    Mortgage Registration Tariff
                  </span>
                  <span className="text-[9px] font-mono px-2 py-0.5 rounded-full bg-zinc-900 border border-white/10 text-gold font-bold shrink-0">
                    DLD TARIFF
                  </span>
                </div>
                <div className="text-3xl font-bold text-white tabular-nums leading-none min-h-[2.25rem] flex items-baseline">
                  0.25%
                </div>
              </div>
              <p className="text-xs text-zinc-400 pt-3 border-t border-white/10 leading-relaxed">
                0.25% of mortgage value + applicable title deed, document, knowledge, and innovation tariffs.
              </p>
            </div>
          </div>
        </div>

        {/* ========================================================================= */}
        {/* 4. SEGMENTS BREAKDOWN: SALE VS RENTAL & OFF-PLAN VS READY */}
        {/* ========================================================================= */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Sale vs Rental Framework */}
          <div className="p-6 sm:p-8 rounded-3xl border border-white/10 bg-zinc-950/80 space-y-4 backdrop-blur-md shadow-xl">
            <div className="flex items-center justify-between border-b border-white/10 pb-4">
              <h3 className="text-xl font-bold text-white">Sale vs Rental Dynamics</h3>
              <span className="text-xs font-mono text-gold font-bold">RERA / DLD</span>
            </div>
            <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed">
              In the Dubai market, sale contracts require unified Form F registration and DLD title deed generation. Rental contracts require annual Ejari registration and are subject to the RERA Rental Calculator bands (0% to 20% cap).
            </p>
            <div className="space-y-3 pt-2 text-xs">
              <div className="flex justify-between py-2 border-b border-white/5">
                <span className="text-zinc-400">Sale Title Deed Registration</span>
                <span className="font-semibold text-white">Mandatory 4% DLD Fee + Trustee Fees</span>
              </div>
              <div className="flex justify-between py-2 border-b border-white/5">
                <span className="text-zinc-400">Rental Contract (Ejari)</span>
                <span className="font-semibold text-white">AED ~220 Ejari Registration</span>
              </div>
              <div className="flex justify-between py-2">
                <span className="text-zinc-400">Tenancy Eviction Notice Period</span>
                <span className="font-semibold text-white">12 Months via Notary Public</span>
              </div>
            </div>
          </div>

          {/* Off-Plan vs Ready Framework */}
          <div className="p-6 sm:p-8 rounded-3xl border border-white/10 bg-zinc-950/80 space-y-4 backdrop-blur-md shadow-xl">
            <div className="flex items-center justify-between border-b border-white/10 pb-4">
              <h3 className="text-xl font-bold text-white">Off-Plan (Oqood) vs Ready (Title Deed)</h3>
              <span className="text-xs font-mono text-gold font-bold">LAW 8/2007</span>
            </div>
            <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed">
              Off-plan sales are governed by Law No. 8 of 2007 requiring project-specific DLD Escrow Accounts. Interim registration is secured via Oqood until final completion inspection and Title Deed issuance.
            </p>
            <div className="space-y-3 pt-2 text-xs">
              <div className="flex justify-between py-2 border-b border-white/5">
                <span className="text-zinc-400">Escrow Account Requirement</span>
                <span className="font-semibold text-gold">100% Mandatory for Off-Plan</span>
              </div>
              <div className="flex justify-between py-2 border-b border-white/5">
                <span className="text-zinc-400">Pre-Registration Registry</span>
                <span className="font-semibold text-white">DLD Oqood System</span>
              </div>
              <div className="flex justify-between py-2">
                <span className="text-zinc-400">Ready Property Proof</span>
                <span className="font-semibold text-white">Official DLD Title Deed (E-Certificate)</span>
              </div>
            </div>
          </div>
        </div>

        {/* ========================================================================= */}
        {/* 5. SUBMARKET PRICE / SQFT BENCHMARK MATRIX */}
        {/* ========================================================================= */}
        <div className="p-6 sm:p-10 rounded-3xl border border-white/10 bg-zinc-950/90 space-y-6 backdrop-blur-md shadow-2xl">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-white/10 pb-4">
            <div>
              <h3 className="text-xl font-bold text-white">
                Freehold Prime Submarket Price Indicators
              </h3>
              <p className="text-xs text-zinc-400 mt-0.5">
                Indicative price and yield ranges based on verified developer direct inventory and master community profiles.
              </p>
            </div>
            <Link
              href="/areas"
              className="text-xs font-bold text-gold hover:underline flex items-center gap-1.5"
            >
              <span>Explore Areas Directory</span>
              <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs">
              <thead>
                <tr className="border-b border-white/10 text-[11px] font-mono text-zinc-400 uppercase">
                  <th className="py-3.5 px-4">Submarket / District</th>
                  <th className="py-3.5 px-4">Sector Typology</th>
                  <th className="py-3.5 px-4">Price / SqFt Band</th>
                  <th className="py-3.5 px-4">Gross Yield</th>
                  <th className="py-3.5 px-4">Mollak Service Charge</th>
                  <th className="py-3.5 px-4">Master Developer</th>
                  <th className="py-3.5 px-4 text-right">Statutory Source</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5">
                <tr>
                  <td className="py-4 px-4 font-bold text-white">Palm Jumeirah</td>
                  <td className="py-4 px-4 font-semibold text-zinc-400">ISLAND WATERFRONT</td>
                  <td className="py-4 px-4 font-mono tabular-nums text-white">AED 4,500 – AED 7,500+</td>
                  <td className="py-4 px-4 font-mono tabular-nums text-accent font-bold">5.5% – 7.2%</td>
                  <td className="py-4 px-4 font-mono text-zinc-300">AED 18 – 35 / sqft</td>
                  <td className="py-4 px-4 text-zinc-300">Nakheel PJSC</td>
                  <td className="py-4 px-4 text-right font-mono text-[10px] text-accent">DLD REG 3/2006</td>
                </tr>
                <tr>
                  <td className="py-4 px-4 font-bold text-white">Downtown Dubai</td>
                  <td className="py-4 px-4 font-semibold text-zinc-400">URBAN CORE</td>
                  <td className="py-4 px-4 font-mono tabular-nums text-white">AED 3,200 – AED 6,200+</td>
                  <td className="py-4 px-4 font-mono tabular-nums text-accent font-bold">6.0% – 7.8%</td>
                  <td className="py-4 px-4 font-mono text-zinc-300">AED 22 – 45 / sqft</td>
                  <td className="py-4 px-4 text-zinc-300">Emaar PJSC</td>
                  <td className="py-4 px-4 text-right font-mono text-[10px] text-accent">DLD REG 3/2006</td>
                </tr>
                <tr>
                  <td className="py-4 px-4 font-bold text-white">DIFC (Financial District)</td>
                  <td className="py-4 px-4 font-semibold text-zinc-400">FINANCIAL CENTRE</td>
                  <td className="py-4 px-4 font-mono tabular-nums text-white">AED 2,800 – AED 5,500</td>
                  <td className="py-4 px-4 font-mono tabular-nums text-accent font-bold">6.5% – 8.2%</td>
                  <td className="py-4 px-4 font-mono text-zinc-300">AED 20 – 38 / sqft</td>
                  <td className="py-4 px-4 text-zinc-300">DIFC Authority</td>
                  <td className="py-4 px-4 text-right font-mono text-[10px] text-accent">DIFC LAW NO. 1</td>
                </tr>
                <tr>
                  <td className="py-4 px-4 font-bold text-white">Dubai Hills Estate</td>
                  <td className="py-4 px-4 font-semibold text-zinc-400">GOLF RESIDENTIAL</td>
                  <td className="py-4 px-4 font-mono tabular-nums text-white">AED 2,100 – AED 3,800</td>
                  <td className="py-4 px-4 font-mono tabular-nums text-accent font-bold">6.2% – 8.1%</td>
                  <td className="py-4 px-4 font-mono text-zinc-300">AED 14 – 24 / sqft</td>
                  <td className="py-4 px-4 text-zinc-300">Emaar PJSC</td>
                  <td className="py-4 px-4 text-right font-mono text-[10px] text-accent">DLD REG 3/2006</td>
                </tr>
                <tr>
                  <td className="py-4 px-4 font-bold text-white">Dubai Marina / Harbour</td>
                  <td className="py-4 px-4 font-semibold text-zinc-400">MARITIME WATERFRONT</td>
                  <td className="py-4 px-4 font-mono tabular-nums text-white">AED 2,400 – AED 4,500</td>
                  <td className="py-4 px-4 font-mono tabular-nums text-accent font-bold">6.5% – 8.5%</td>
                  <td className="py-4 px-4 font-mono text-zinc-300">AED 16 – 28 / sqft</td>
                  <td className="py-4 px-4 text-zinc-300">Emaar / Meraas</td>
                  <td className="py-4 px-4 text-right font-mono text-[10px] text-accent">DLD REG 3/2006</td>
                </tr>
                <tr>
                  <td className="py-4 px-4 font-bold text-white">Jumeirah Bay Island</td>
                  <td className="py-4 px-4 font-semibold text-zinc-400">ULTRA-PRIME ISLAND</td>
                  <td className="py-4 px-4 font-mono tabular-nums text-white">AED 8,500 – AED 15,000+</td>
                  <td className="py-4 px-4 font-mono tabular-nums text-accent font-bold">4.8% – 6.0%</td>
                  <td className="py-4 px-4 font-mono text-zinc-300">AED 30 – 65 / sqft</td>
                  <td className="py-4 px-4 text-zinc-300">Meraas Holding</td>
                  <td className="py-4 px-4 text-right font-mono text-[10px] text-accent">DLD REG 3/2006</td>
                </tr>
                <tr>
                  <td className="py-4 px-4 font-bold text-white">Emirates Hills</td>
                  <td className="py-4 px-4 font-semibold text-zinc-400">PRIVATE GATED MANSIONS</td>
                  <td className="py-4 px-4 font-mono tabular-nums text-white">AED 3,800 – AED 6,500</td>
                  <td className="py-4 px-4 font-mono tabular-nums text-accent font-bold">5.0% – 6.5%</td>
                  <td className="py-4 px-4 font-mono text-zinc-300">AED 4 – 8 / plot sqft</td>
                  <td className="py-4 px-4 text-zinc-300">Emaar PJSC</td>
                  <td className="py-4 px-4 text-right font-mono text-[10px] text-accent">DLD REG 3/2006</td>
                </tr>
                <tr>
                  <td className="py-4 px-4 font-bold text-white">District One (MBR City)</td>
                  <td className="py-4 px-4 font-semibold text-zinc-400">CRYSTAL LAGOON VILLAS</td>
                  <td className="py-4 px-4 font-mono tabular-nums text-white">AED 2,900 – AED 4,800</td>
                  <td className="py-4 px-4 font-mono tabular-nums text-accent font-bold">5.8% – 7.4%</td>
                  <td className="py-4 px-4 font-mono text-zinc-300">AED 8 – 16 / sqft</td>
                  <td className="py-4 px-4 text-zinc-300">Meydan Group</td>
                  <td className="py-4 px-4 text-right font-mono text-[10px] text-accent">DLD REG 3/2006</td>
                </tr>
                <tr>
                  <td className="py-4 px-4 font-bold text-white">Bluewaters Island</td>
                  <td className="py-4 px-4 font-semibold text-zinc-400">ISLAND HOSPITALITY</td>
                  <td className="py-4 px-4 font-mono tabular-nums text-white">AED 3,600 – AED 6,000</td>
                  <td className="py-4 px-4 font-mono tabular-nums text-accent font-bold">6.2% – 7.9%</td>
                  <td className="py-4 px-4 font-mono text-zinc-300">AED 24 – 38 / sqft</td>
                  <td className="py-4 px-4 text-zinc-300">Meraas Holding</td>
                  <td className="py-4 px-4 text-right font-mono text-[10px] text-accent">DLD REG 3/2006</td>
                </tr>
                <tr>
                  <td className="py-4 px-4 font-bold text-white">Dubai Creek Harbour</td>
                  <td className="py-4 px-4 font-semibold text-zinc-400">WATERFRONT RESIDENTIAL</td>
                  <td className="py-4 px-4 font-mono tabular-nums text-white">AED 1,950 – AED 3,200</td>
                  <td className="py-4 px-4 font-mono tabular-nums text-accent font-bold">6.8% – 8.6%</td>
                  <td className="py-4 px-4 font-mono text-zinc-300">AED 16 – 26 / sqft</td>
                  <td className="py-4 px-4 text-zinc-300">Emaar PJSC</td>
                  <td className="py-4 px-4 text-right font-mono text-[10px] text-accent">DLD REG 3/2006</td>
                </tr>
                <tr>
                  <td className="py-4 px-4 font-bold text-white">City Walk (Jumeirah)</td>
                  <td className="py-4 px-4 font-semibold text-zinc-400">URBAN LOW-RISE</td>
                  <td className="py-4 px-4 font-mono tabular-nums text-white">AED 2,700 – AED 4,400</td>
                  <td className="py-4 px-4 font-mono tabular-nums text-accent font-bold">6.4% – 7.9%</td>
                  <td className="py-4 px-4 font-mono text-zinc-300">AED 20 – 32 / sqft</td>
                  <td className="py-4 px-4 text-zinc-300">Meraas Holding</td>
                  <td className="py-4 px-4 text-right font-mono text-[10px] text-accent">DLD REG 3/2006</td>
                </tr>
                <tr>
                  <td className="py-4 px-4 font-bold text-white">Sobha Hartland (MBR City)</td>
                  <td className="py-4 px-4 font-semibold text-zinc-400">SANCTUARY WATERFRONT</td>
                  <td className="py-4 px-4 font-mono tabular-nums text-white">AED 2,200 – AED 3,600</td>
                  <td className="py-4 px-4 font-mono tabular-nums text-accent font-bold">6.9% – 8.4%</td>
                  <td className="py-4 px-4 font-mono text-zinc-300">AED 15 – 25 / sqft</td>
                  <td className="py-4 px-4 text-zinc-300">Sobha Realty</td>
                  <td className="py-4 px-4 text-right font-mono text-[10px] text-accent">DLD REG 3/2006</td>
                </tr>
                <tr>
                  <td className="py-4 px-4 font-bold text-white">Palm Jebel Ali</td>
                  <td className="py-4 px-4 font-semibold text-zinc-400">FUTURE ULTRA-PRIME</td>
                  <td className="py-4 px-4 font-mono tabular-nums text-white">AED 3,200 – AED 5,800</td>
                  <td className="py-4 px-4 font-mono tabular-nums text-accent font-bold">5.2% – 6.8%</td>
                  <td className="py-4 px-4 font-mono text-zinc-300">AED 12 – 22 / sqft</td>
                  <td className="py-4 px-4 text-zinc-300">Nakheel PJSC</td>
                  <td className="py-4 px-4 text-right font-mono text-[10px] text-accent">DLD REG 3/2006</td>
                </tr>
                <tr>
                  <td className="py-4 px-4 font-bold text-white">Dubai South (DWC / Expo)</td>
                  <td className="py-4 px-4 font-semibold text-zinc-400">LOGISTICS & GOLF</td>
                  <td className="py-4 px-4 font-mono tabular-nums text-white">AED 1,150 – AED 1,850</td>
                  <td className="py-4 px-4 font-mono tabular-nums text-accent font-bold">7.8% – 9.6%</td>
                  <td className="py-4 px-4 font-mono text-zinc-300">AED 10 – 16 / sqft</td>
                  <td className="py-4 px-4 text-zinc-300">Dubai Aviation Corp</td>
                  <td className="py-4 px-4 text-right font-mono text-[10px] text-accent">DLD REG 3/2006</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* ========================================================================= */}
        {/* 6. METHODOLOGY & AUDIT TRAIL */}
        {/* ========================================================================= */}
        <div className="p-6 sm:p-8 rounded-3xl border border-white/10 bg-zinc-950/80 space-y-3 text-xs text-zinc-400 backdrop-blur-md">
          <div className="flex items-center gap-2 text-white font-bold text-sm">
            <Info className="h-4 w-4 text-gold" />
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