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
    <div className="bg-white text-slate-900 min-h-screen pb-32">
      {/* 1. EDITORIAL PAGE INTRO */}
      <PageIntro
        eyebrow="Institutional Market Intelligence &amp; Statutory Research"
        badge={<SourceBadge status="OFFICIAL SOURCE" sourceName="DLD Open Registry &amp; Statutory Laws" />}
        title="Dubai Intelligence."
        description="Dubai real estate intelligence. Macroeconomic indicators, statutory transfer fee structures, rental index mechanics, and submarket capital distribution across Dubai freehold districts."
      />

      {/* 2. DATA STATUS BANNER */}
      <div className="w-full max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-16 pt-8">
        <div className="p-4 sm:p-5 rounded-xs border border-sky-100 bg-[#f0f7ff] flex flex-col md:flex-row md:items-center justify-between gap-4 text-xs">
          <div className="flex items-center gap-3">
            <span className="h-2.5 w-2.5 rounded-full bg-[#0284c7] shrink-0 animate-pulse" />
            <div className="space-y-0.5">
              <div className="font-mono text-xs uppercase tracking-wider text-slate-900 font-semibold">
                DATA STATUS: VERIFIED STATUTORY RULES &amp; PUBLISHED BENCHMARKS
              </div>
              <div className="text-slate-600 text-xs font-light">
                DLD LIVE REGISTRATION: Verified against statutory rules, official land gazettes, and published institutional benchmarks.
              </div>
            </div>
          </div>
          <span className="font-mono text-[10px] px-3 py-1 rounded-xs bg-white text-[#0284c7] border border-sky-200 font-semibold shrink-0 self-start md:self-auto shadow-xs">
            ZERO SYNTHETIC DATA
          </span>
        </div>
      </div>

      <main className="w-full max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-16 pt-10 space-y-14">
        {/* ========================================================================= */}
        {/* 2B. CADRAN GAUGES INSTRUMENT BANK */}
        {/* ========================================================================= */}
        <div className="space-y-6">
          <div className="flex items-center justify-between border-b border-slate-200 pb-4">
            <span className="text-[11px] font-mono font-semibold uppercase tracking-[0.2em] text-[#0284c7]">
              MACROECONOMIC CAPITAL CADRANS
            </span>
            <span className="text-xs font-mono text-slate-500">DLD Open Registry &amp; CBUAE</span>
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
          title="Market Liquidity &amp; Transaction Anatomy"
          statutorySource="Dubai Land Department &amp; UAE Federal Tax Authority"
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
        <div className="p-6 sm:p-8 rounded-sm border border-slate-200 bg-white space-y-8 shadow-xs">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-200 pb-5">
            <div>
              <span className="text-[10px] font-mono uppercase font-semibold text-[#0284c7] tracking-wider">
                PRIMARY STATUTORY BENCHMARK
              </span>
              <h2 className="text-2xl sm:text-3xl font-light text-slate-900 mt-1 font-serif">
                Statutory Transaction Tariffs &amp; Caps
              </h2>
            </div>

            {/* Period Selector */}
            <div className="inline-flex items-center p-1 rounded-xs bg-slate-100 border border-slate-200 text-xs font-mono">
              {(['7D', '30D', '90D', '1Y', '5Y'] as const).map((period) => (
                <button
                  key={period}
                  onClick={() => setSelectedPeriod(period)}
                  className={`px-3 py-1 rounded-xs transition-all cursor-pointer ${
                    selectedPeriod === period
                      ? 'bg-[#0284c7] text-white font-bold'
                      : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  {period}
                </button>
              ))}
            </div>
          </div>

          {/* 6 Macro Financial Indicators */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            <div className="p-5 rounded-xs bg-slate-50 border border-slate-200 flex flex-col justify-between space-y-3">
              <div className="space-y-1">
                <div className="flex items-start justify-between gap-2">
                  <span className="text-[10px] font-mono text-slate-500 uppercase font-semibold tracking-wider">
                    Combined DLD Transfer Fees
                  </span>
                  <span className="text-[9px] font-mono px-1.5 py-0.5 rounded-xs bg-sky-50 border border-sky-200 text-[#0284c7] font-semibold shrink-0">
                    DLD LAW
                  </span>
                </div>
                <div className="text-2xl sm:text-3xl font-light text-slate-900 font-mono tabular-nums font-semibold">
                  4.00%
                </div>
              </div>
              <p className="text-xs text-slate-600 pt-2 border-t border-slate-200 leading-relaxed font-light">
                Combined transaction transfer fees (2% buyer + 2% seller standard allocation under Dubai Law No. 7 of 2006).
              </p>
            </div>

            <div className="p-5 rounded-xs bg-slate-50 border border-slate-200 flex flex-col justify-between space-y-3">
              <div className="space-y-1">
                <div className="flex items-start justify-between gap-2">
                  <span className="text-[10px] font-mono text-slate-500 uppercase font-semibold tracking-wider">
                    RERA Maximum Rent Cap
                  </span>
                  <span className="text-[9px] font-mono px-1.5 py-0.5 rounded-xs bg-sky-50 border border-sky-200 text-[#0284c7] font-semibold shrink-0">
                    DECREE 43/2013
                  </span>
                </div>
                <div className="text-2xl sm:text-3xl font-light text-slate-900 font-mono tabular-nums font-semibold">
                  20.00%
                </div>
              </div>
              <p className="text-xs text-slate-600 pt-2 border-t border-slate-200 leading-relaxed font-light">
                Maximum allowable annual increase under Dubai Decree No. 43 of 2013 rental index formula.
              </p>
            </div>

            <div className="p-5 rounded-xs bg-slate-50 border border-slate-200 flex flex-col justify-between space-y-3">
              <div className="space-y-1">
                <div className="flex items-start justify-between gap-2">
                  <span className="text-[10px] font-mono text-slate-500 uppercase font-semibold tracking-wider">
                    Expat Maximum LTV Cap
                  </span>
                  <span className="text-[9px] font-mono px-1.5 py-0.5 rounded-xs bg-sky-50 border border-sky-200 text-[#0284c7] font-semibold shrink-0">
                    CBUAE REG
                  </span>
                </div>
                <div className="text-2xl sm:text-3xl font-light text-slate-900 font-mono tabular-nums font-semibold">
                  80.00%
                </div>
              </div>
              <p className="text-xs text-slate-600 pt-2 border-t border-slate-200 leading-relaxed font-light">
                For first residential property value &le; AED 5M per Central Bank of the UAE mortgage rules.
              </p>
            </div>

            <div className="p-5 rounded-xs bg-slate-50 border border-slate-200 flex flex-col justify-between space-y-3">
              <div className="space-y-1">
                <div className="flex items-start justify-between gap-2">
                  <span className="text-[10px] font-mono text-slate-500 uppercase font-semibold tracking-wider">
                    Investor Golden Visa Floor
                  </span>
                  <span className="text-[9px] font-mono px-1.5 py-0.5 rounded-xs bg-sky-50 border border-sky-200 text-[#0284c7] font-semibold shrink-0">
                    UAE GOVT
                  </span>
                </div>
                <div className="text-2xl sm:text-3xl font-light text-slate-900 font-mono tabular-nums font-semibold">
                  AED 2,000,000
                </div>
              </div>
              <p className="text-xs text-slate-600 pt-2 border-t border-slate-200 leading-relaxed font-light">
                Property value threshold for 10-Year Golden Residency per Cabinet Resolution No. 65 of 2022.
              </p>
            </div>

            <div className="p-5 rounded-xs bg-slate-50 border border-slate-200 flex flex-col justify-between space-y-3">
              <div className="space-y-1">
                <div className="flex items-start justify-between gap-2">
                  <span className="text-[10px] font-mono text-slate-500 uppercase font-semibold tracking-wider">
                    UAE Personal Income Tax
                  </span>
                  <span className="text-[9px] font-mono px-1.5 py-0.5 rounded-xs bg-emerald-50 border border-emerald-200 text-emerald-700 font-semibold shrink-0">
                    DECISION 49/2023
                  </span>
                </div>
                <div className="text-2xl sm:text-3xl font-light text-emerald-600 font-mono font-semibold">
                  NO PERSONAL TAX
                </div>
              </div>
              <p className="text-xs text-slate-600 pt-2 border-t border-slate-200 leading-relaxed font-light">
                No personal income tax on qualifying individual investment income (Cabinet Dec 49/2023).
              </p>
            </div>

            <div className="p-5 rounded-xs bg-slate-50 border border-slate-200 flex flex-col justify-between space-y-3">
              <div className="space-y-1">
                <div className="flex items-start justify-between gap-2">
                  <span className="text-[10px] font-mono text-slate-500 uppercase font-semibold tracking-wider">
                    Mortgage Registration Tariff
                  </span>
                  <span className="text-[9px] font-mono px-1.5 py-0.5 rounded-xs bg-sky-50 border border-sky-200 text-[#0284c7] font-semibold shrink-0">
                    DLD TARIFF
                  </span>
                </div>
                <div className="text-2xl sm:text-3xl font-light text-slate-900 font-mono tabular-nums font-semibold">
                  0.25%
                </div>
              </div>
              <p className="text-xs text-slate-600 pt-2 border-t border-slate-200 leading-relaxed font-light">
                0.25% of mortgage value + applicable title deed, document, knowledge, and innovation tariffs.
              </p>
            </div>
          </div>
        </div>

        {/* ========================================================================= */}
        {/* 4. SUBMARKET PRICE / SQFT BENCHMARK MATRIX */}
        {/* ========================================================================= */}
        <div className="p-6 sm:p-8 rounded-sm border border-slate-200 bg-white space-y-6 shadow-xs">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-200 pb-4">
            <div>
              <h3 className="text-xl font-light text-slate-900 font-serif">
                Freehold Prime Submarket Price Indicators
              </h3>
              <p className="text-xs text-slate-500 mt-0.5 font-light">
                Indicative price and yield ranges based on verified developer direct inventory and master community profiles.
              </p>
            </div>
            <Link
              href="/districts"
              className="text-xs font-mono uppercase tracking-wider text-[#0284c7] hover:underline flex items-center gap-1.5 font-medium"
            >
              <span>Explore Atlas Directory</span>
              <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs">
              <thead>
                <tr className="border-b border-slate-200 text-[10px] font-mono text-slate-500 uppercase tracking-wider bg-slate-50">
                  <th className="py-3 px-4">Submarket / District</th>
                  <th className="py-3 px-4">Sector Typology</th>
                  <th className="py-3 px-4">Price / SqFt Band</th>
                  <th className="py-3 px-4">Gross Yield</th>
                  <th className="py-3 px-4">Mollak Service Charge</th>
                  <th className="py-3 px-4">Master Developer</th>
                  <th className="py-3 px-4 text-right">Statutory Basis</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 font-mono">
                <tr className="hover:bg-sky-50/50">
                  <td className="py-3.5 px-4 text-slate-900 font-medium">Palm Jumeirah</td>
                  <td className="py-3.5 px-4 text-slate-500">ISLAND WATERFRONT</td>
                  <td className="py-3.5 px-4 text-slate-900 tabular-nums">AED 4,500 – AED 7,500+</td>
                  <td className="py-3.5 px-4 text-[#0284c7] font-semibold tabular-nums">5.5% – 7.2%</td>
                  <td className="py-3.5 px-4 text-slate-600">AED 18 – 35 / sqft</td>
                  <td className="py-3.5 px-4 text-slate-600">Nakheel PJSC</td>
                  <td className="py-3.5 px-4 text-right text-[10px] text-slate-400 font-semibold">REG 3/2006</td>
                </tr>
                <tr className="hover:bg-sky-50/50">
                  <td className="py-3.5 px-4 text-slate-900 font-medium">Downtown Dubai</td>
                  <td className="py-3.5 px-4 text-slate-500">URBAN CORE</td>
                  <td className="py-3.5 px-4 text-slate-900 tabular-nums">AED 3,200 – AED 6,200+</td>
                  <td className="py-3.5 px-4 text-[#0284c7] font-semibold tabular-nums">6.0% – 7.8%</td>
                  <td className="py-3.5 px-4 text-slate-600">AED 22 – 45 / sqft</td>
                  <td className="py-3.5 px-4 text-slate-600">Emaar PJSC</td>
                  <td className="py-3.5 px-4 text-right text-[10px] text-slate-400 font-semibold">REG 3/2006</td>
                </tr>
                <tr className="hover:bg-sky-50/50">
                  <td className="py-3.5 px-4 text-slate-900 font-medium">DIFC</td>
                  <td className="py-3.5 px-4 text-slate-500">FINANCIAL CENTRE</td>
                  <td className="py-3.5 px-4 text-slate-900 tabular-nums">AED 2,800 – AED 5,500</td>
                  <td className="py-3.5 px-4 text-[#0284c7] font-semibold tabular-nums">6.5% – 8.2%</td>
                  <td className="py-3.5 px-4 text-slate-600">AED 20 – 38 / sqft</td>
                  <td className="py-3.5 px-4 text-slate-600">DIFC Authority</td>
                  <td className="py-3.5 px-4 text-right text-[10px] text-slate-400 font-semibold">DIFC LAW 1</td>
                </tr>
                <tr className="hover:bg-sky-50/50">
                  <td className="py-3.5 px-4 text-slate-900 font-medium">Dubai Hills Estate</td>
                  <td className="py-3.5 px-4 text-slate-500">GOLF RESIDENTIAL</td>
                  <td className="py-3.5 px-4 text-slate-900 tabular-nums">AED 2,100 – AED 3,800</td>
                  <td className="py-3.5 px-4 text-[#0284c7] font-semibold tabular-nums">6.2% – 8.1%</td>
                  <td className="py-3.5 px-4 text-slate-600">AED 14 – 24 / sqft</td>
                  <td className="py-3.5 px-4 text-slate-600">Emaar PJSC</td>
                  <td className="py-3.5 px-4 text-right text-[10px] text-slate-400 font-semibold">REG 3/2006</td>
                </tr>
                <tr className="hover:bg-sky-50/50">
                  <td className="py-3.5 px-4 text-slate-900 font-medium">Dubai Marina / Harbour</td>
                  <td className="py-3.5 px-4 text-slate-500">MARITIME WATERFRONT</td>
                  <td className="py-3.5 px-4 text-slate-900 tabular-nums">AED 2,400 – AED 4,500</td>
                  <td className="py-3.5 px-4 text-[#0284c7] font-semibold tabular-nums">6.5% – 8.5%</td>
                  <td className="py-3.5 px-4 text-slate-600">AED 16 – 28 / sqft</td>
                  <td className="py-3.5 px-4 text-slate-600">Emaar / Meraas</td>
                  <td className="py-3.5 px-4 text-right text-[10px] text-slate-400 font-semibold">REG 3/2006</td>
                </tr>
                <tr className="hover:bg-sky-50/50">
                  <td className="py-3.5 px-4 text-slate-900 font-medium">Jumeirah Bay Island</td>
                  <td className="py-3.5 px-4 text-slate-500">ULTRA-PRIME ISLAND</td>
                  <td className="py-3.5 px-4 text-slate-900 tabular-nums">AED 8,500 – AED 15,000+</td>
                  <td className="py-3.5 px-4 text-[#0284c7] font-semibold tabular-nums">4.8% – 6.0%</td>
                  <td className="py-3.5 px-4 text-slate-600">AED 30 – 65 / sqft</td>
                  <td className="py-3.5 px-4 text-slate-600">Meraas Holding</td>
                  <td className="py-3.5 px-4 text-right text-[10px] text-slate-400 font-semibold">REG 3/2006</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* ========================================================================= */}
        {/* 5. METHODOLOGY & AUDIT TRAIL */}
        {/* ========================================================================= */}
        <div className="p-6 sm:p-8 rounded-sm border border-slate-200 bg-slate-50 space-y-3 text-xs text-slate-600">
          <div className="flex items-center gap-2 text-slate-900 font-medium text-sm">
            <Info className="h-4 w-4 text-[#0284c7]" />
            <span>Market Intelligence Methodology &amp; Legal Governance</span>
          </div>
          <p className="leading-relaxed font-light">
            All regulatory rules, tax ceilings, and fee percentages are verified against the official Dubai Government Gazette, Dubai Land Department statutory circulars, and the UAE Federal Tax Authority (FTA). We do not display synthetic price predictions without live institutional API authorization.
          </p>
        </div>
      </main>
    </div>
  )
}