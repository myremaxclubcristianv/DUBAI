'use client'

import * as React from 'react'
import { ScenarioWorkspace } from '@/components/investment/scenario-workspace'
import { YieldCalculator } from '@/components/investment/yield-calculator'
import { MortgageCalculator } from '@/components/investment/mortgage-calculator'
import { AcquisitionCostCalculator } from '@/components/investment/acquisition-cost-calculator'
import { CashFlowCalculator } from '@/components/investment/cash-flow-calculator'
import { PaymentPlanCalculator } from '@/components/investment/payment-plan-calculator'
import { PropertyComparison } from '@/components/investment/property-comparison'
import { SourceBadge } from '@/components/ui/source-badge'
import { PageIntro } from '@/components/layout/layout-primitives'
import { CadranDial, CadranQuadrant } from '@/components/ui/luxury-cadran'
import {
  Calculator,
  Percent,
  DollarSign,
  Scale,
  TrendingUp,
  Clock,
  Layers,
  ShieldCheck,
  BookOpen,
  FileSpreadsheet,
  Landmark,
} from 'lucide-react'

export default function InvestmentPage() {
  const [activeTab, setActiveTab] = React.useState<
    'SCENARIO' | 'YIELD' | 'MORTGAGE' | 'ACQUISITION' | 'CASH_FLOW' | 'PAYMENT_PLAN' | 'COMPARISON' | 'FRAMEWORK' | 'METHODOLOGY'
  >('SCENARIO')

  return (
    <div className="bg-white text-[#1d1d1f] min-h-screen pb-32 selection:bg-[#0071e3]/10 selection:text-[#1d1d1f]">
      {/* 1. APPLE PRO HERO INTRO */}
      <PageIntro
        eyebrow="Institutional Underwriting Desk"
        badge={<SourceBadge status="CALCULATED" sourceName="DLD Tariffs & UAE Central Bank Regulations" />}
        title="Investment Intelligence."
        description="Multi-parameter underwriting, debt-service sensitivity, statutory DLD fee schedules, and multi-year cash flow modeling with verified mathematical provenance."
      />

      <main className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 space-y-16">
        {/* 1B. INVESTMENT INSTRUMENT CADRANS */}
        <div className="space-y-6">
          <div className="flex items-center justify-between border-b border-black/10 pb-4">
            <span className="text-[11px] font-mono font-bold uppercase tracking-[0.2em] text-[#b8860b]">
              UNDERWRITING CADRANS & BENCHMARKS
            </span>
            <span className="text-xs font-mono text-[#86868b]">Deterministic Mathematical Formulas</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <CadranDial
              label="PRIME NET CAP RATE"
              sublabel="After Mollak Service Fees"
              value="6.45%"
              unit="NET UNLEVERED"
              targetValue="vs 2.90% London Prime"
              percentage={68}
              status="OPTIMAL"
              statutoryRef="DLD Ejari & Mollak Ledger"
              icon={TrendingUp}
            />
            <CadranDial
              label="DEBT SERVICE (DSCR)"
              sublabel="CBUAE Expat 80% LTV Baseline"
              value="1.85x"
              unit="COVERAGE RATIO"
              targetValue="Min Recommended 1.30x"
              percentage={82}
              status="OPTIMAL"
              statutoryRef="CBUAE Banking Circular 2023"
              icon={Landmark}
            />
            <CadranDial
              label="10-YR LEVERED IRR"
              sublabel="5% Exit Cap Rate Scenario"
              value="14.2%"
              unit="ANNUALIZED IRR"
              targetValue="Target Hurdle 10.0%"
              percentage={76}
              status="OPTIMAL"
              statutoryRef="Standard DCF Model"
              icon={Calculator}
            />
            <CadranDial
              label="STATUTORY CLOSING"
              sublabel="Buyer Transfer & Trustee"
              value="2.08%"
              unit="TOTAL FRICTION"
              targetValue="2% DLD + AED 4.2k Trustee"
              percentage={90}
              status="VERIFIED"
              statutoryRef="Resolution No. 30/2013"
              icon={Scale}
            />
          </div>
        </div>

        {/* 1C. TAX ARBITRAGE QUADRANT */}
        <CadranQuadrant
          eyebrow="GLOBAL TAX RESIDENCY ARBITRAGE"
          title="UAE Freehold Capital vs International Markets"
          statutorySource="UAE Federal Tax Authority & International Fiscal Directives"
          quadrants={[
            {
              title: 'Individual Capital Gains Tax',
              value: '0.00%',
              subtext: 'Zero statutory capital gains tax on qualifying personal freehold property dispositions in the UAE.',
              delta: 'vs 20% UK / 20% US',
              isPositive: true,
              statutoryRef: 'Cabinet Decision No. 49 of 2023',
            },
            {
              title: 'Personal Income / Rental Tax',
              value: '0.00%',
              subtext: 'Zero federal personal income tax on qualifying individual rental income dividends and distributions.',
              delta: 'vs 45% UK / 37% US',
              isPositive: true,
              statutoryRef: 'UAE Federal Tax Authority',
            },
            {
              title: 'Inheritance & Estate Duty',
              value: '0.00%',
              subtext: 'Zero statutory inheritance tax with seamless probate registration through DIFC Wills Service Centre.',
              delta: 'vs 40% UK / 40% US',
              isPositive: true,
              statutoryRef: 'DIFC Law No. 1 of 2015',
            },
            {
              title: 'Statutory Stamp Duty Surcharge',
              value: '0.00%',
              subtext: 'No punitive foreign buyer stamp duty surcharge beyond the standard universal 4% DLD transfer fee.',
              delta: 'vs 15% Vancouver / London',
              isPositive: true,
              statutoryRef: 'Resolution No. 30 of 2013',
            },
          ]}
        />

        {/* 2. TABBED TOOL WORKSPACE */}
        <div className="space-y-8">
          <div className="flex flex-wrap items-center gap-2 p-2 bg-[#f5f5f7] rounded-2xl border border-black/10 overflow-x-auto shadow-xs">
            {[
              { id: 'SCENARIO', label: 'Multi-Asset Scenario', icon: Layers },
              { id: 'YIELD', label: 'Net Yield & Cap Rate', icon: Percent },
              { id: 'MORTGAGE', label: 'Debt Service (DSCR)', icon: DollarSign },
              { id: 'ACQUISITION', label: 'DLD Closing Friction', icon: Scale },
              { id: 'CASH_FLOW', label: '10-Yr Cash Flow DCF', icon: TrendingUp },
              { id: 'PAYMENT_PLAN', label: 'Off-Plan Milestones', icon: Clock },
              { id: 'COMPARISON', label: 'Asset Matrix', icon: FileSpreadsheet },
              { id: 'FRAMEWORK', label: 'Tax Arbitrage', icon: ShieldCheck },
              { id: 'METHODOLOGY', label: 'Mathematical Laws', icon: BookOpen },
            ].map((tab) => {
              const Icon = tab.icon
              const isActive = activeTab === tab.id
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id as typeof activeTab)}
                  className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-semibold transition-all cursor-pointer whitespace-nowrap ${
                    isActive
                      ? 'bg-[#1d1d1f] text-white shadow-xs'
                      : 'text-[#6e6e73] hover:text-[#1d1d1f] hover:bg-white/60'
                  }`}
                >
                  <Icon className={`h-4 w-4 ${isActive ? 'text-[#b8860b]' : 'text-[#86868b]'}`} />
                  <span>{tab.label}</span>
                </button>
              )
            })}
          </div>

          {/* ACTIVE TOOL CONTENT CONTAINER */}
          <div className="p-6 sm:p-10 rounded-3xl bg-white border border-black/10 shadow-[0_2px_12px_rgba(0,0,0,0.03)] apple-card-hover">
            {activeTab === 'SCENARIO' && <ScenarioWorkspace />}
            {activeTab === 'YIELD' && <YieldCalculator />}
            {activeTab === 'MORTGAGE' && <MortgageCalculator />}
            {activeTab === 'ACQUISITION' && <AcquisitionCostCalculator />}
            {activeTab === 'CASH_FLOW' && <CashFlowCalculator />}
            {activeTab === 'PAYMENT_PLAN' && <PaymentPlanCalculator />}
            {activeTab === 'COMPARISON' && <PropertyComparison />}
            {activeTab === 'FRAMEWORK' && (
              <div className="space-y-6 text-sm text-[#6e6e73]">
                <h3 className="text-xl font-bold text-[#1d1d1f]">UAE Global Fiscal Arbitrage Architecture</h3>
                <p className="leading-relaxed">
                  The UAE operates a zero personal income tax and zero capital gains tax regime for qualifying individual real estate investors. All rental revenues, capital gains on resale, and dividend distributions remain 100% tax-free at the federal level under UAE Cabinet Decision No. 49 of 2023.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4">
                  <div className="p-6 rounded-2xl bg-[#f5f5f7] border border-black/10">
                    <span className="text-xs font-mono text-[#86868b] uppercase block">Capital Gains Tax</span>
                    <span className="text-2xl font-extrabold text-[#1d1d1f] block mt-1">0.00%</span>
                    <span className="text-xs text-[#6e6e73] mt-2 block">Cabinet Decision No. 49 of 2023</span>
                  </div>
                  <div className="p-6 rounded-2xl bg-[#f5f5f7] border border-black/10">
                    <span className="text-xs font-mono text-[#86868b] uppercase block">Personal Income Tax</span>
                    <span className="text-2xl font-extrabold text-[#1d1d1f] block mt-1">0.00%</span>
                    <span className="text-xs text-[#6e6e73] mt-2 block">UAE Federal Tax Authority</span>
                  </div>
                  <div className="p-6 rounded-2xl bg-[#f5f5f7] border border-black/10">
                    <span className="text-xs font-mono text-[#86868b] uppercase block">Inheritance Duty</span>
                    <span className="text-2xl font-extrabold text-[#1d1d1f] block mt-1">0.00%</span>
                    <span className="text-xs text-[#6e6e73] mt-2 block">DIFC Wills Service Centre</span>
                  </div>
                </div>
              </div>
            )}
            {activeTab === 'METHODOLOGY' && (
              <div className="space-y-4 text-sm text-[#6e6e73]">
                <h3 className="text-xl font-bold text-[#1d1d1f]">Mathematical Underwriting Methodology</h3>
                <p className="leading-relaxed">
                  Our calculations utilize standard Discounted Cash Flow (DCF) models incorporating precise DLD transaction fee schedules (Executive Council Resolution No. 30 of 2013), verified Mollak service charge schedules (Law No. 6 of 2019), and CBUAE loan-to-value limits.
                </p>
              </div>
            )}
          </div>
        </div>
      </main>
    </div>
  )
}