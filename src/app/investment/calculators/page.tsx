'use client'

import * as React from 'react'
import Link from 'next/link'
import {
  ArrowLeft,
  ArrowRightLeft,
  Calculator,
  Calendar,
  CreditCard,
  Hotel,
  Layers,
  Percent,
  Scale,
  ShieldCheck,
  TrendingUp,
} from 'lucide-react'
import { YieldCalculator } from '@/components/investment/yield-calculator'
import { AcquisitionCostCalculator } from '@/components/investment/acquisition-cost-calculator'
import { MortgageCalculator } from '@/components/investment/mortgage-calculator'
import { CashFlowCalculator } from '@/components/investment/cash-flow-calculator'
import { PaymentPlanCalculator } from '@/components/investment/payment-plan-calculator'
import { ScenarioWorkspace } from '@/components/investment/scenario-workspace'
import { ShortTermVsLongTermCalculator } from '@/components/investment/short-term-vs-long-term'
import { MultiCurrencyConverter } from '@/components/investment/currency-converter'
import { DubaiVsRomaniaComparison } from '@/components/investment/dubai-vs-romania-comparison'

type CalculatorTab =
  | 'yield'
  | 'acquisition'
  | 'mortgage'
  | 'cashflow'
  | 'paymentplan'
  | 'scenario'
  | 'shortterm'
  | 'currency'
  | 'crossmarket'

interface TabConfig {
  id: CalculatorTab
  label: string
  shortLabel: string
  icon: React.ElementType
  category: 'Dubai Property' | 'Financing' | 'Cross-Border'
}

const TABS: TabConfig[] = [
  { id: 'yield', label: 'Rental Yield & NOI', shortLabel: 'Yield & NOI', icon: Percent, category: 'Dubai Property' },
  { id: 'acquisition', label: 'Statutory Acquisition Fees', shortLabel: 'Acquisition Fees', icon: CreditCard, category: 'Dubai Property' },
  { id: 'mortgage', label: 'Mortgage Debt Service', shortLabel: 'Mortgage', icon: Calculator, category: 'Financing' },
  { id: 'cashflow', label: 'Levered Cash Flow', shortLabel: 'Cash Flow', icon: TrendingUp, category: 'Financing' },
  { id: 'paymentplan', label: 'Off-Plan Milestones', shortLabel: 'Off-Plan', icon: Layers, category: 'Dubai Property' },
  { id: 'shortterm', label: 'Short vs Long-Term Rent', shortLabel: 'Holiday vs Ejari', icon: Hotel, category: 'Dubai Property' },
  { id: 'scenario', label: 'Multi-Year Holding & Exit ROI', shortLabel: 'Holding Period ROI', icon: Calendar, category: 'Financing' },
  { id: 'currency', label: 'Multi-Currency Matrix', shortLabel: 'AED / USD / EUR / RON', icon: ArrowRightLeft, category: 'Cross-Border' },
  { id: 'crossmarket', label: 'Dubai vs Romania Comparison', shortLabel: 'Dubai vs Romania', icon: Scale, category: 'Cross-Border' },
]

export default function InvestmentCalculatorsPage() {
  const [activeTab, setActiveTab] = React.useState<CalculatorTab>('yield')

  return (
    <div className="flex flex-col min-h-screen bg-white text-slate-950 selection:bg-slate-900 selection:text-white">
      
      {/* 1. EDITORIAL HEADER */}
      <section className="pt-16 pb-12 sm:pt-20 sm:pb-16 border-b border-slate-200 bg-white">
        <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-10 lg:px-16 space-y-6">
          
          <div className="flex flex-wrap items-center justify-between gap-4 font-mono text-xs">
            <Link
              href="/investment"
              className="inline-flex items-center gap-1.5 text-slate-500 hover:text-slate-950 transition-colors"
            >
              <ArrowLeft className="h-3.5 w-3.5" />
              <span>Back to Underwriting Desk</span>
            </Link>

            <div className="flex items-center gap-2 text-[11px] text-emerald-800 font-semibold">
              <ShieldCheck className="h-3.5 w-3.5 text-emerald-700" />
              <span>DLD Law 7/2006 &bull; CBUAE Regulations &bull; Romanian Fiscal Code</span>
            </div>
          </div>

          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 border-t border-slate-200/80 pt-6">
            <div className="space-y-3 max-w-3xl">
              <span className="text-[10px] font-mono tracking-[0.24em] uppercase text-slate-500 font-semibold block">
                INVESTMENT LAB &bull; INTERACTIVE FINANCIAL DESKS
              </span>
              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-light tracking-[-0.035em] leading-[1.05] text-slate-950 font-serif">
                FINANCIAL MODELING<br />SUITE.
              </h1>
              <p className="text-sm sm:text-base text-slate-600 font-light leading-relaxed">
                Institutional calculators for residential and commercial real estate acquisitions, statutory fee schedules, mortgage leverage, holiday home yields, and cross-border European portfolio comparisons.
              </p>
            </div>

            <div className="flex gap-2">
              <Link
                href="/romania"
                className="px-4 py-2.5 bg-slate-100 hover:bg-slate-200 text-slate-900 text-xs font-mono font-semibold transition-colors rounded-none border border-slate-300"
              >
                Romania Catalog &rarr;
              </Link>
              <Link
                href="/properties"
                className="px-4 py-2.5 bg-slate-950 text-white text-xs font-mono font-semibold transition-colors"
              >
                Explore Dubai Inventory &rarr;
              </Link>
            </div>
          </div>

        </div>
      </section>

      {/* 2. TAB NAVIGATION BAR */}
      <section className="sticky top-16 z-30 bg-white/95 backdrop-blur-md border-b border-slate-200">
        <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-10 lg:px-16">
          <div className="flex items-center gap-1 overflow-x-auto py-2.5 no-scrollbar">
            {TABS.map((tab) => {
              const Icon = tab.icon
              const isActive = activeTab === tab.id
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center gap-2 px-3.5 py-2 text-xs font-mono font-semibold whitespace-nowrap transition-all rounded-lg cursor-pointer ${
                    isActive
                      ? 'bg-slate-950 text-white shadow-xs'
                      : 'text-slate-600 hover:text-slate-950 hover:bg-slate-100'
                  }`}
                >
                  <Icon className={`h-3.5 w-3.5 ${isActive ? 'text-accent' : 'text-slate-500'}`} />
                  <span>{tab.shortLabel}</span>
                </button>
              )
            })}
          </div>
        </div>
      </section>

      {/* 3. ACTIVE CALCULATOR STAGE */}
      <main className="w-full max-w-[1440px] mx-auto px-4 sm:px-10 lg:px-16 py-10 sm:py-14 space-y-12 flex-1">
        
        {activeTab === 'yield' && (
          <div className="space-y-6">
            <YieldCalculator />
            <div className="p-4 bg-slate-50 border border-slate-200 text-xs text-slate-600 font-mono space-y-1">
              <div className="text-slate-900 font-bold">Yield Methodology:</div>
              <div>Gross Yield = (Annual Rent / Purchase Price) &times; 100</div>
              <div>Net Operating Yield = ((Gross Rent &minus; Service Charges &minus; Maintenance &minus; Mgmt) / Total Outlay) &times; 100</div>
              <div className="text-slate-500 text-[10px]">Statutory source: Dubai Land Department tenancy contract benchmarks and RERA service charge index.</div>
            </div>
          </div>
        )}

        {activeTab === 'acquisition' && (
          <div className="space-y-6">
            <AcquisitionCostCalculator />
            <div className="p-4 bg-slate-50 border border-slate-200 text-xs text-slate-600 font-mono space-y-1">
              <div className="text-slate-900 font-bold">Dubai Land Department Statutory Fee Schedule:</div>
              <div>• DLD Transfer Fee: 4% of purchase contract value (Law No. 7 of 2006).</div>
              <div>• Registration Trustee Fee: AED 4,000 + 5% VAT (AED 4,200) for assets &ge; AED 500k; AED 2,000 + 5% VAT (&lt; AED 500k).</div>
              <div>• Document Fees: AED 250 (Title Deed) + AED 250 (Map) + AED 20 (Knowledge &amp; Innovation fees).</div>
              <div>• Customary Agency Brokerage: 2% of price + 5% VAT.</div>
            </div>
          </div>
        )}

        {activeTab === 'mortgage' && (
          <div className="space-y-6">
            <MortgageCalculator />
            <div className="p-4 bg-slate-50 border border-slate-200 text-xs text-slate-600 font-mono space-y-1">
              <div className="text-slate-900 font-bold">Central Bank of the UAE (CBUAE) Mortgage Caps:</div>
              <div>• Expatriate First Residential Property &le; AED 5M: Maximum 80% LTV (20% minimum down payment).</div>
              <div>• Expatriate Second / Subsequent Property or &gt; AED 5M: Maximum 70% LTV (30% minimum down payment).</div>
              <div>• Off-Plan Property Maximum Financing: 50% LTV.</div>
              <div>• Maximum Loan Tenor: 25 years (up to age 65 for salaried expats, 70 for self-employed).</div>
            </div>
          </div>
        )}

        {activeTab === 'cashflow' && (
          <div className="space-y-6">
            <CashFlowCalculator />
          </div>
        )}

        {activeTab === 'paymentplan' && (
          <div className="space-y-6">
            <PaymentPlanCalculator />
            <div className="p-4 bg-slate-50 border border-slate-200 text-xs text-slate-600 font-mono space-y-1">
              <div className="text-slate-900 font-bold">Dubai Escrow Law (Law No. 8 of 2007):</div>
              <div>All developer milestone installments must be deposited into the project&apos;s project-specific DLD Escrow Trust Account. Funds are only released to the developer in tranches aligned with audited construction site progress certificates issued by Dubai Land Department engineers.</div>
            </div>
          </div>
        )}

        {activeTab === 'shortterm' && (
          <div className="space-y-6">
            <ShortTermVsLongTermCalculator />
          </div>
        )}

        {activeTab === 'scenario' && (
          <div className="space-y-6">
            <ScenarioWorkspace />
          </div>
        )}

        {activeTab === 'currency' && (
          <div className="space-y-6">
            <MultiCurrencyConverter />
          </div>
        )}

        {activeTab === 'crossmarket' && (
          <div className="space-y-6">
            <DubaiVsRomaniaComparison />
          </div>
        )}

      </main>

      {/* 4. FOOTER NOTE ON LEGAL & FINANCIAL ADVICE */}
      <section className="py-8 bg-slate-50 border-t border-slate-200 text-slate-500 font-mono text-[11px]">
        <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-10 lg:px-16 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p>
            Deterministic model outputs are provided for educational and pre-transactional analysis only. Calculations do not constitute formal lending pre-approvals or licensed tax advice.
          </p>
          <Link href="/sources" className="text-slate-900 font-bold underline whitespace-nowrap">
            View Official Data Provenance &rarr;
          </Link>
        </div>
      </section>

    </div>
  )
}
