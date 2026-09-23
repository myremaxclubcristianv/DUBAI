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
  Info,
  FileSpreadsheet
} from 'lucide-react'

export default function InvestmentPage() {
  const [activeTab, setActiveTab] = React.useState<
    'SCENARIO' | 'YIELD' | 'MORTGAGE' | 'ACQUISITION' | 'CASH_FLOW' | 'PAYMENT_PLAN' | 'COMPARISON' | 'FRAMEWORK' | 'METHODOLOGY'
  >('SCENARIO')

  return (
    <div className="bg-white text-text-primary min-h-screen pb-24">
      {/* 1. EDITORIAL HEADER */}
      <section className="pt-12 pb-10 border-b border-border bg-surface-subtle">
        <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-border text-xs font-semibold text-text-secondary shadow-2xs">
              <span className="h-2 w-2 rounded-full bg-accent animate-pulse" />
              <span>Institutional Underwriting & Due Diligence Architecture</span>
            </div>
            <SourceBadge status="CALCULATED" sourceName="DLD Tariffs & UAE Central Bank Regulations" />
          </div>

          <h1 className="text-2xl sm:text-4xl md:text-6xl font-extrabold tracking-tight text-text-primary uppercase leading-tight break-words">
            Investment Intelligence.
          </h1>

          <p className="text-base sm:text-lg text-text-secondary max-w-2xl font-normal leading-relaxed">
            Institutional property underwriting, debt-service sensitivity, statutory DLD fee schedules, and multi-year holding cash-flow modeling with verified mathematical provenance.
          </p>
        </div>
      </section>

      <main className="w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 space-y-8">
        {/* 2. TAB CONTROLS */}
        <div className="flex flex-wrap gap-2 p-1.5 bg-surface rounded-2xl border border-border">
          <button
            onClick={() => setActiveTab('SCENARIO')}
            className={`flex items-center gap-1.5 px-4 py-2.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
              activeTab === 'SCENARIO'
                ? 'bg-white text-text-primary shadow-xs border border-border'
                : 'text-text-secondary hover:text-text-primary'
            }`}
          >
            <Calculator className="h-4 w-4 text-accent" />
            <span>Scenario Builder</span>
          </button>

          <button
            onClick={() => setActiveTab('YIELD')}
            className={`flex items-center gap-1.5 px-4 py-2.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
              activeTab === 'YIELD'
                ? 'bg-white text-text-primary shadow-xs border border-border'
                : 'text-text-secondary hover:text-text-primary'
            }`}
          >
            <Percent className="h-4 w-4 text-accent" />
            <span>Rental Yield Engine</span>
          </button>

          <button
            onClick={() => setActiveTab('MORTGAGE')}
            className={`flex items-center gap-1.5 px-4 py-2.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
              activeTab === 'MORTGAGE'
                ? 'bg-white text-text-primary shadow-xs border border-border'
                : 'text-text-secondary hover:text-text-primary'
            }`}
          >
            <DollarSign className="h-4 w-4 text-accent" />
            <span>Mortgage & LTV</span>
          </button>

          <button
            onClick={() => setActiveTab('ACQUISITION')}
            className={`flex items-center gap-1.5 px-4 py-2.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
              activeTab === 'ACQUISITION'
                ? 'bg-white text-text-primary shadow-xs border border-border'
                : 'text-text-secondary hover:text-text-primary'
            }`}
          >
            <Scale className="h-4 w-4 text-accent" />
            <span>Statutory Fees</span>
          </button>

          <button
            onClick={() => setActiveTab('CASH_FLOW')}
            className={`flex items-center gap-1.5 px-4 py-2.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
              activeTab === 'CASH_FLOW'
                ? 'bg-white text-text-primary shadow-xs border border-border'
                : 'text-text-secondary hover:text-text-primary'
            }`}
          >
            <TrendingUp className="h-4 w-4 text-accent" />
            <span>Cash Flow & NOI</span>
          </button>

          <button
            onClick={() => setActiveTab('PAYMENT_PLAN')}
            className={`flex items-center gap-1.5 px-4 py-2.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
              activeTab === 'PAYMENT_PLAN'
                ? 'bg-white text-text-primary shadow-xs border border-border'
                : 'text-text-secondary hover:text-text-primary'
            }`}
          >
            <Clock className="h-4 w-4 text-accent" />
            <span>Payment Plans</span>
          </button>

          <button
            onClick={() => setActiveTab('COMPARISON')}
            className={`flex items-center gap-1.5 px-4 py-2.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
              activeTab === 'COMPARISON'
                ? 'bg-white text-text-primary shadow-xs border border-border'
                : 'text-text-secondary hover:text-text-primary'
            }`}
          >
            <Layers className="h-4 w-4 text-accent" />
            <span>Asset Matrix</span>
          </button>

          <button
            onClick={() => setActiveTab('FRAMEWORK')}
            className={`flex items-center gap-1.5 px-4 py-2.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
              activeTab === 'FRAMEWORK'
                ? 'bg-white text-text-primary shadow-xs border border-border'
                : 'text-text-secondary hover:text-text-primary'
            }`}
          >
            <ShieldCheck className="h-4 w-4 text-accent" />
            <span>Risk Framework</span>
          </button>

          <button
            onClick={() => setActiveTab('METHODOLOGY')}
            className={`flex items-center gap-1.5 px-4 py-2.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
              activeTab === 'METHODOLOGY'
                ? 'bg-white text-text-primary shadow-xs border border-border'
                : 'text-text-secondary hover:text-text-primary'
            }`}
          >
            <BookOpen className="h-4 w-4 text-accent" />
            <span>Valuation Methodology</span>
          </button>
        </div>

        {/* 3. ACTIVE CALCULATOR WORKSPACE */}
        <div className="pt-2">
          {activeTab === 'SCENARIO' && <ScenarioWorkspace />}
          {activeTab === 'YIELD' && <YieldCalculator />}
          {activeTab === 'MORTGAGE' && <MortgageCalculator />}
          {activeTab === 'ACQUISITION' && <AcquisitionCostCalculator />}
          {activeTab === 'CASH_FLOW' && <CashFlowCalculator />}
          {activeTab === 'PAYMENT_PLAN' && <PaymentPlanCalculator />}
          {activeTab === 'COMPARISON' && <PropertyComparison />}
          {activeTab === 'FRAMEWORK' && <InvestmentFrameworkSection />}
          {activeTab === 'METHODOLOGY' && <InvestmentMethodologySection />}
        </div>

        {/* 4. METHODOLOGY NOTE */}
        <div className="p-6 rounded-2xl border border-border bg-surface text-xs text-text-secondary space-y-2">
          <div className="flex items-center gap-2 font-bold text-text-primary">
            <Info className="h-4 w-4 text-accent" />
            <span>Institutional Calculation Integrity & Provenance Standard</span>
          </div>
          <p className="leading-relaxed">
            Every analytical projection displayed in this workspace is labeled <span className="font-mono font-bold text-accent">CALCULATED</span>. Projections reflect mathematical formulas driven by explicit user inputs and statutory UAE schedules (Dubai Law No. 7 of 2006, Executive Council Resolution No. 30 of 2013, CBUAE Mortgage Regulations). Modelled from your assumptions — not an investment forecast.
          </p>
        </div>
      </main>
    </div>
  )
}

function InvestmentFrameworkSection() {
  return (
    <div className="space-y-8 bg-white p-6 sm:p-8 rounded-2xl border border-border">
      <div className="space-y-2 border-b border-border pb-6">
        <div className="flex items-center gap-2 text-[11px] font-mono font-bold text-accent uppercase tracking-wider">
          <ShieldCheck className="h-4 w-4" />
          <span>Institutional Underwriting Standard</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-text-primary tracking-tight">
          Comprehensive Real Estate Investment Framework
        </h2>
        <p className="text-xs sm:text-sm text-text-secondary max-w-3xl">
          An institutional breakdown of capital requirements, holding costs, off-plan developer safeguards, and liquidity parameters governing Dubai prime property assets.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* PILLAR 1: ACQUISITION & TRANSFER */}
        <div className="p-5 rounded-xl border border-border bg-surface-subtle space-y-3">
          <span className="text-[10px] font-mono uppercase font-bold text-accent">01 • ACQUISITION & TRANSFER</span>
          <h3 className="text-base font-bold text-text-primary">Statutory Capital Outlay</h3>
          <ul className="text-xs text-text-secondary space-y-1.5 leading-relaxed">
            <li>• <strong>DLD Transfer Fee:</strong> Combined 4% transaction fee (2% buyer + 2% seller standard breakdown per official DLD portal; contractually allocated).</li>
            <li>• <strong>Title Deed Fee:</strong> AED 250 (plus applicable map tariff: AED 250 villa/apt, AED 225 DM unified map, or AED 100 land outside DM, and AED 20 Knowledge/Innovation fees).</li>
            <li>• <strong>DLD Registration Trustee:</strong> AED 4,000 + 5% VAT (AED 4,200 for properties ≥ AED 500,000; AED 2,100 for &lt; AED 500k).</li>
            <li>• <strong>Brokerage Commission:</strong> Customary 2% + 5% VAT.</li>
          </ul>
        </div>

        {/* PILLAR 2: FINANCING & LEVERAGE */}
        <div className="p-5 rounded-xl border border-border bg-surface-subtle space-y-3">
          <span className="text-[10px] font-mono uppercase font-bold text-accent">02 • FINANCING & DEBT</span>
          <h3 className="text-base font-bold text-text-primary">CBUAE Mortgage Constraints</h3>
          <ul className="text-xs text-text-secondary space-y-1.5 leading-relaxed">
            <li>• <strong>Expatriate First Home LTV:</strong> Max 80% (properties ≤ AED 5M); Max 70% (properties &gt; AED 5M).</li>
            <li>• <strong>Second Property / Off-Plan:</strong> Max 60% LTV on completed secondary / 50% max on off-plan.</li>
            <li>• <strong>Debt Burden Ratio (DBR):</strong> Max 50% of verified monthly income per CBUAE rules.</li>
            <li>• <strong>Mortgage Registration Fee:</strong> 0.25% of mortgage value + AED 250 title deed + AED 10 knowledge + AED 10 innovation fees and applicable registration trustee partner fees (DLD Mortgage Registration Tariff).</li>
          </ul>
        </div>

        {/* PILLAR 3: HOLDING COSTS */}
        <div className="p-5 rounded-xl border border-border bg-surface-subtle space-y-3">
          <span className="text-[10px] font-mono uppercase font-bold text-accent">03 • HOLDING COSTS</span>
          <h3 className="text-base font-bold text-text-primary">Mollak & Maintenance</h3>
          <ul className="text-xs text-text-secondary space-y-1.5 leading-relaxed">
            <li>• <strong>Service Charges:</strong> Governed by RERA Mollak index (typically AED 12–35/sqft annually).</li>
            <li>• <strong>Property Management:</strong> 5%–8% of gross annual rent for managed leasing.</li>
            <li>• <strong>Sinking Fund:</strong> Reserve fund contribution mandated under Jointly Owned Property Law.</li>
            <li>• <strong>No Annual Property Holding Tax:</strong> Dubai does not levy recurring annual municipal property taxes on residential freehold properties.</li>
          </ul>
        </div>

        {/* PILLAR 4: OFF-PLAN SAFEGUARDS */}
        <div className="p-5 rounded-xl border border-border bg-surface-subtle space-y-3">
          <span className="text-[10px] font-mono uppercase font-bold text-accent">04 • OFF-PLAN DUE DILIGENCE</span>
          <h3 className="text-base font-bold text-text-primary">Law No. 8 of 2007 (Escrow)</h3>
          <ul className="text-xs text-text-secondary space-y-1.5 leading-relaxed">
            <li>• <strong>Mandatory DLD Escrow:</strong> 100% of buyer off-plan payments must be deposited into a DLD-monitored project escrow account under Law No. 8 of 2007.</li>
            <li>• <strong>Construction Milestones:</strong> Funds released to developer only against certified engineering progress.</li>
            <li>• <strong>Oqood Registration:</strong> Interim title registration issued by DLD protecting pre-handover equity.</li>
            <li>• <strong>1-Year Defect Liability:</strong> Statutory 1-year snagging and 10-year structural warranty mandated by UAE law.</li>
          </ul>
        </div>

        {/* PILLAR 5: RENTAL & EJARI */}
        <div className="p-5 rounded-xl border border-border bg-surface-subtle space-y-3">
          <span className="text-[10px] font-mono uppercase font-bold text-accent">05 • LEASING & EJARI</span>
          <h3 className="text-base font-bold text-text-primary">Rental Increase Decree 43/2013</h3>
          <ul className="text-xs text-text-secondary space-y-1.5 leading-relaxed">
            <li>• <strong>Mandatory Ejari:</strong> All lease agreements must be registered in DLD Ejari system.</li>
            <li>• <strong>RERA Rent Index:</strong> Statutory cap on renewal increases linked to average market rents (0% to 20% max).</li>
            <li>• <strong>Eviction Notice:</strong> 12-month notarized notice required for owner occupancy or major sale/renovation.</li>
            <li>• <strong>Security Deposit:</strong> Customary 5% (unfurnished) or 10% (furnished) held as damage security.</li>
          </ul>
        </div>

        {/* PILLAR 6: EXIT & LIQUIDITY */}
        <div className="p-5 rounded-xl border border-border bg-surface-subtle space-y-3">
          <span className="text-[10px] font-mono uppercase font-bold text-accent">06 • EXIT & CAPITAL RECOVERY</span>
          <h3 className="text-base font-bold text-text-primary">Liquidity & Transfer Velocity</h3>
          <ul className="text-xs text-text-secondary space-y-1.5 leading-relaxed">
            <li>• <strong>Developer NOC Fee:</strong> AED 1,000–5,000 (No Objection Certificate required for resale).</li>
            <li>• <strong>Capital Gains Treatment:</strong> No UAE personal income tax on capital gains from individual real estate disposals (Cabinet Decision No. 49 of 2023).</li>
            <li>• <strong>Repatriation:</strong> 100% unrestricted capital and dividend repatriation through CBUAE banking system.</li>
            <li>• <strong>Settlement Timelines:</strong> Cash transfers settle in 7–14 days; mortgaged transfers 20–35 days.</li>
          </ul>
        </div>
      </div>
    </div>
  )
}

function InvestmentMethodologySection() {
  return (
    <div className="space-y-8 bg-white p-6 sm:p-8 rounded-2xl border border-border">
      <div className="space-y-2 border-b border-border pb-6">
        <div className="flex items-center gap-2 text-[11px] font-mono font-bold text-accent uppercase tracking-wider">
          <FileSpreadsheet className="h-4 w-4" />
          <span>Transparent Mathematical Standard</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-text-primary tracking-tight">
          Valuation & Yield Methodology
        </h2>
        <p className="text-xs sm:text-sm text-text-secondary max-w-3xl">
          Clear distinction between pricing definitions, yield calculations, leverage implications, and calculated outputs across the platform.
        </p>
      </div>

      {/* DEFINITION MATRIX */}
      <div className="space-y-4">
        <h3 className="text-base font-bold text-text-primary">01 • Pricing Classifications & Provenance</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="p-4 rounded-xl border border-border bg-surface-subtle space-y-1">
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold text-text-primary">Asking Price</span>
              <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-blue-50 text-blue-800 font-semibold">LISTED PRICE</span>
            </div>
            <p className="text-xs text-text-secondary">
              The listed offer price set by the property seller or developer. Does not represent an executed contract price until transacted.
            </p>
          </div>

          <div className="p-4 rounded-xl border border-border bg-surface-subtle space-y-1">
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold text-text-primary">Achieved Transaction Price</span>
              <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-emerald-50 text-emerald-800 font-semibold">DLD OFFICIAL RECORD</span>
            </div>
            <p className="text-xs text-text-secondary">
              The exact executed transfer price recorded at the Dubai Land Department registration trustee upon title deed issuance.
            </p>
          </div>

          <div className="p-4 rounded-xl border border-border bg-surface-subtle space-y-1">
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold text-text-primary">Estimated Market Value</span>
              <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-amber-50 text-amber-800 font-semibold">ESTIMATE / MODEL</span>
            </div>
            <p className="text-xs text-text-secondary">
              A valuation derived from comparable sales and square footage metrics. Always designated as an estimate, never presented as achieved fact.
            </p>
          </div>

          <div className="p-4 rounded-xl border border-border bg-surface-subtle space-y-1">
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold text-text-primary">Calculated Metric</span>
              <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-accent/10 text-accent font-semibold">CALCULATED</span>
            </div>
            <p className="text-xs text-text-secondary">
              Deterministic mathematical output derived strictly from user inputs and published statutory schedules. Modelled from assumptions.
            </p>
          </div>
        </div>
      </div>

      {/* FORMULA EXPLANATION TABLE */}
      <div className="space-y-4 pt-4 border-t border-border">
        <h3 className="text-base font-bold text-text-primary">02 • Mathematical Underwriting Formulas</h3>
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs border border-border rounded-xl overflow-hidden">
            <thead className="bg-surface-subtle text-text-muted font-mono uppercase text-[10px]">
              <tr>
                <th className="p-3 border-b border-border">Metric</th>
                <th className="p-3 border-b border-border">Exact Formula</th>
                <th className="p-3 border-b border-border">Inputs Required</th>
                <th className="p-3 border-b border-border">Significance</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border">
              <tr>
                <td className="p-3 font-bold text-text-primary">Gross Rental Yield</td>
                <td className="p-3 font-mono text-accent">(Annual Rent ÷ Purchase Price) × 100</td>
                <td className="p-3 text-text-secondary">Gross rent, Asset price</td>
                <td className="p-3 text-text-secondary">Top-line income efficiency before operating fees.</td>
              </tr>
              <tr>
                <td className="p-3 font-bold text-text-primary">Net Operating Income (NOI)</td>
                <td className="p-3 font-mono text-accent">Gross Rent - Vacancy - Service Charges - Maintenance - Management</td>
                <td className="p-3 text-text-secondary">Rent, vacancy rate, Mollak service charges, opex</td>
                <td className="p-3 text-text-secondary">True operating cash generated by property.</td>
              </tr>
              <tr>
                <td className="p-3 font-bold text-text-primary">Net Yield (All-In)</td>
                <td className="p-3 font-mono text-accent">(Annual NOI ÷ Total Acquisition Cost) × 100</td>
                <td className="p-3 text-text-secondary">NOI, Total Capital Outlay (Price + Buyer DLD Transfer Fee + Trustee + Document Tariffs + Brokerage)</td>
                <td className="p-3 text-text-secondary">Institutional return benchmark on total deployed equity.</td>
              </tr>
              <tr>
                <td className="p-3 font-bold text-text-primary">Cash-on-Cash Return</td>
                <td className="p-3 font-mono text-accent">(Annual Net Cash Flow ÷ Initial Total Cash Invested) × 100</td>
                <td className="p-3 text-text-secondary">Net cash after debt service, Down payment + Acquisition fees</td>
                <td className="p-3 text-text-secondary">Actual levered annual cash distribution percentage.</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}