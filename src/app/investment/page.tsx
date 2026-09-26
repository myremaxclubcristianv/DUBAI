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
  FileSpreadsheet,
} from 'lucide-react'

export default function InvestmentPage() {
  const [activeTab, setActiveTab] = React.useState<
    'SCENARIO' | 'YIELD' | 'MORTGAGE' | 'ACQUISITION' | 'CASH_FLOW' | 'PAYMENT_PLAN' | 'COMPARISON' | 'FRAMEWORK' | 'METHODOLOGY'
  >('SCENARIO')

  return (
    <div className="bg-black text-white min-h-screen pb-28 selection:bg-accent/30 selection:text-white">
      {/* 1. APPLE PRO HERO INTRO */}
      <PageIntro
        eyebrow="Institutional Underwriting Desk"
        badge={<SourceBadge status="CALCULATED" sourceName="DLD Tariffs & UAE Central Bank Regulations" />}
        title={<>Investment Intelligence<span className="text-gradient-gold">.</span></>}
        description="Multi-parameter underwriting, debt-service sensitivity, statutory DLD fee schedules, and multi-year cash flow modeling with verified mathematical provenance."
      />

      <main className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 space-y-8">
        {/* 2. APPLE PRO PILL TAB CONTROLS (Centered) */}
        <div className="flex flex-wrap items-center justify-center gap-2 p-2.5 bg-[#0c0c0e] rounded-full border border-white/10 backdrop-blur-2xl max-w-5xl mx-auto shadow-xl">
          <button
            onClick={() => setActiveTab('SCENARIO')}
            className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
              activeTab === 'SCENARIO'
                ? 'bg-white text-black shadow-lg'
                : 'text-zinc-400 hover:text-white'
            }`}
          >
            <Calculator className={`h-4 w-4 ${activeTab === 'SCENARIO' ? 'text-black' : 'text-gold'}`} />
            <span>Scenario Builder</span>
          </button>

          <button
            onClick={() => setActiveTab('YIELD')}
            className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
              activeTab === 'YIELD'
                ? 'bg-white text-black shadow-lg'
                : 'text-zinc-400 hover:text-white'
            }`}
          >
            <Percent className={`h-4 w-4 ${activeTab === 'YIELD' ? 'text-black' : 'text-gold'}`} />
            <span>Rental Yield Engine</span>
          </button>

          <button
            onClick={() => setActiveTab('MORTGAGE')}
            className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
              activeTab === 'MORTGAGE'
                ? 'bg-white text-black shadow-lg'
                : 'text-zinc-400 hover:text-white'
            }`}
          >
            <DollarSign className={`h-4 w-4 ${activeTab === 'MORTGAGE' ? 'text-black' : 'text-gold'}`} />
            <span>Mortgage & LTV</span>
          </button>

          <button
            onClick={() => setActiveTab('ACQUISITION')}
            className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
              activeTab === 'ACQUISITION'
                ? 'bg-white text-black shadow-lg'
                : 'text-zinc-400 hover:text-white'
            }`}
          >
            <Scale className={`h-4 w-4 ${activeTab === 'ACQUISITION' ? 'text-black' : 'text-gold'}`} />
            <span>Statutory Fees</span>
          </button>

          <button
            onClick={() => setActiveTab('CASH_FLOW')}
            className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
              activeTab === 'CASH_FLOW'
                ? 'bg-white text-black shadow-lg'
                : 'text-zinc-400 hover:text-white'
            }`}
          >
            <TrendingUp className={`h-4 w-4 ${activeTab === 'CASH_FLOW' ? 'text-black' : 'text-gold'}`} />
            <span>Cash Flow & NOI</span>
          </button>

          <button
            onClick={() => setActiveTab('PAYMENT_PLAN')}
            className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
              activeTab === 'PAYMENT_PLAN'
                ? 'bg-white text-black shadow-lg'
                : 'text-zinc-400 hover:text-white'
            }`}
          >
            <Clock className={`h-4 w-4 ${activeTab === 'PAYMENT_PLAN' ? 'text-black' : 'text-gold'}`} />
            <span>Payment Plans</span>
          </button>

          <button
            onClick={() => setActiveTab('COMPARISON')}
            className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
              activeTab === 'COMPARISON'
                ? 'bg-white text-black shadow-lg'
                : 'text-zinc-400 hover:text-white'
            }`}
          >
            <Layers className={`h-4 w-4 ${activeTab === 'COMPARISON' ? 'text-black' : 'text-gold'}`} />
            <span>Asset Matrix</span>
          </button>

          <button
            onClick={() => setActiveTab('FRAMEWORK')}
            className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
              activeTab === 'FRAMEWORK'
                ? 'bg-white text-black shadow-lg'
                : 'text-zinc-400 hover:text-white'
            }`}
          >
            <ShieldCheck className={`h-4 w-4 ${activeTab === 'FRAMEWORK' ? 'text-black' : 'text-gold'}`} />
            <span>Risk Framework</span>
          </button>

          <button
            onClick={() => setActiveTab('METHODOLOGY')}
            className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
              activeTab === 'METHODOLOGY'
                ? 'bg-white text-black shadow-lg'
                : 'text-zinc-400 hover:text-white'
            }`}
          >
            <BookOpen className={`h-4 w-4 ${activeTab === 'METHODOLOGY' ? 'text-black' : 'text-gold'}`} />
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
        <div className="p-6 sm:p-8 rounded-3xl border border-white/10 bg-zinc-950/80 text-xs text-zinc-400 space-y-2 backdrop-blur-md">
          <div className="flex items-center gap-2 font-bold text-white text-sm">
            <Info className="h-4 w-4 text-gold" />
            <span>Institutional Calculation Integrity & Provenance Standard</span>
          </div>
          <p className="leading-relaxed">
            Every analytical projection displayed in this workspace is labeled <span className="font-mono font-bold text-gold">CALCULATED</span>. Projections reflect mathematical formulas driven by explicit user inputs and statutory UAE schedules (Dubai Law No. 7 of 2006, Executive Council Resolution No. 30 of 2013, CBUAE Mortgage Regulations). Modelled from your assumptions — not an investment forecast.
          </p>
        </div>
      </main>
    </div>
  )
}

function InvestmentFrameworkSection() {
  return (
    <div className="space-y-8 bg-zinc-950/90 p-6 sm:p-10 rounded-3xl border border-white/10 backdrop-blur-md">
      <div className="space-y-2 border-b border-white/10 pb-6">
        <div className="flex items-center gap-2 text-[11px] font-mono font-bold text-gold uppercase tracking-wider">
          <ShieldCheck className="h-4 w-4" />
          <span>Institutional Underwriting Standard</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
          Comprehensive Real Estate Investment Framework
        </h2>
        <p className="text-xs sm:text-sm text-zinc-400 max-w-3xl">
          An institutional breakdown of capital requirements, holding costs, off-plan developer safeguards, and liquidity parameters governing Dubai prime property assets.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* PILLAR 1: ACQUISITION & TRANSFER */}
        <div className="p-6 rounded-2xl border border-white/10 bg-black flex flex-col justify-between h-full space-y-4 shadow-xl">
          <div className="space-y-2">
            <span className="text-[10px] font-mono uppercase font-bold text-gold tracking-wider">01 • ACQUISITION & TRANSFER</span>
            <h3 className="text-base font-bold text-white">Statutory Capital Outlay</h3>
            <ul className="text-xs text-zinc-400 space-y-2 leading-relaxed pt-2 border-t border-white/10">
              <li>• <strong className="text-white">DLD Transfer Fee:</strong> Combined 4% transaction fee (2% buyer + 2% seller standard breakdown per official DLD portal; contractually allocated).</li>
              <li>• <strong className="text-white">Title Deed Fee:</strong> AED 250 (plus applicable map tariff: AED 250 villa/apt, AED 225 DM unified map, or AED 100 land outside DM, and AED 20 Knowledge/Innovation fees).</li>
              <li>• <strong className="text-white">DLD Registration Trustee:</strong> AED 4,000 + 5% VAT (AED 4,200 for properties ≥ AED 500,000; AED 2,100 for &lt; AED 500k).</li>
              <li>• <strong className="text-white">Brokerage Commission:</strong> Customary 2% + 5% VAT.</li>
            </ul>
          </div>
        </div>

        {/* PILLAR 2: FINANCING & LEVERAGE */}
        <div className="p-6 rounded-2xl border border-white/10 bg-black flex flex-col justify-between h-full space-y-4 shadow-xl">
          <div className="space-y-2">
            <span className="text-[10px] font-mono uppercase font-bold text-gold tracking-wider">02 • FINANCING & DEBT</span>
            <h3 className="text-base font-bold text-white">CBUAE Mortgage Constraints</h3>
            <ul className="text-xs text-zinc-400 space-y-2 leading-relaxed pt-2 border-t border-white/10">
              <li>• <strong className="text-white">Expatriate First Home LTV:</strong> Max 80% (properties ≤ AED 5M); Max 70% (properties &gt; AED 5M).</li>
              <li>• <strong className="text-white">Second Property / Off-Plan:</strong> Max 60% LTV on completed secondary / 50% max on off-plan.</li>
              <li>• <strong className="text-white">Debt Burden Ratio (DBR):</strong> Max 50% of verified monthly income per CBUAE rules.</li>
              <li>• <strong className="text-white">Mortgage Registration Fee:</strong> 0.25% of mortgage value + AED 250 title deed + AED 10 knowledge + AED 10 innovation fees and applicable registration trustee partner fees (DLD Mortgage Registration Tariff).</li>
            </ul>
          </div>
        </div>

        {/* PILLAR 3: HOLDING COSTS */}
        <div className="p-6 rounded-2xl border border-white/10 bg-black flex flex-col justify-between h-full space-y-4 shadow-xl">
          <div className="space-y-2">
            <span className="text-[10px] font-mono uppercase font-bold text-gold tracking-wider">03 • HOLDING COSTS</span>
            <h3 className="text-base font-bold text-white">Mollak & Maintenance</h3>
            <ul className="text-xs text-zinc-400 space-y-2 leading-relaxed pt-2 border-t border-white/10">
              <li>• <strong className="text-white">Service Charges:</strong> Governed by RERA Mollak index (typically AED 12–35/sqft annually).</li>
              <li>• <strong className="text-white">Property Management:</strong> 5%–8% of gross annual rent for managed leasing.</li>
              <li>• <strong className="text-white">Sinking Fund:</strong> Reserve fund contribution mandated under Jointly Owned Property Law.</li>
              <li>• <strong className="text-white">No Annual Property Holding Tax:</strong> Dubai does not levy recurring annual municipal property taxes on residential freehold properties.</li>
            </ul>
          </div>
        </div>

        {/* PILLAR 4: OFF-PLAN SAFEGUARDS */}
        <div className="p-6 rounded-2xl border border-white/10 bg-black flex flex-col justify-between h-full space-y-4 shadow-xl">
          <div className="space-y-2">
            <span className="text-[10px] font-mono uppercase font-bold text-gold tracking-wider">04 • OFF-PLAN DUE DILIGENCE</span>
            <h3 className="text-base font-bold text-white">Law No. 8 of 2007 (Escrow)</h3>
            <ul className="text-xs text-zinc-400 space-y-2 leading-relaxed pt-2 border-t border-white/10">
              <li>• <strong className="text-white">Mandatory DLD Escrow:</strong> 100% of buyer off-plan payments must be deposited into a DLD-monitored project escrow account under Law No. 8 of 2007.</li>
              <li>• <strong className="text-white">Construction Milestones:</strong> Funds released to developer only against certified engineering progress.</li>
              <li>• <strong className="text-white">Oqood Registration:</strong> Interim title registration issued by DLD protecting pre-handover equity.</li>
              <li>• <strong className="text-white">1-Year Defect Liability:</strong> Statutory 1-year snagging and 10-year structural warranty mandated by UAE law.</li>
            </ul>
          </div>
        </div>

        {/* PILLAR 5: RENTAL & EJARI */}
        <div className="p-6 rounded-2xl border border-white/10 bg-black flex flex-col justify-between h-full space-y-4 shadow-xl">
          <div className="space-y-2">
            <span className="text-[10px] font-mono uppercase font-bold text-gold tracking-wider">05 • LEASING & EJARI</span>
            <h3 className="text-base font-bold text-white">Rental Increase Decree 43/2013</h3>
            <ul className="text-xs text-zinc-400 space-y-2 leading-relaxed pt-2 border-t border-white/10">
              <li>• <strong className="text-white">Mandatory Ejari:</strong> All lease agreements must be registered in DLD Ejari system.</li>
              <li>• <strong className="text-white">RERA Rent Index:</strong> Statutory cap on renewal increases linked to average market rents (0% to 20% max).</li>
              <li>• <strong className="text-white">Eviction Notice:</strong> 12-month notarized notice required for owner occupancy or major sale/renovation.</li>
              <li>• <strong className="text-white">Security Deposit:</strong> Customary 5% (unfurnished) or 10% (furnished) held as damage security.</li>
            </ul>
          </div>
        </div>

        {/* PILLAR 6: EXIT & LIQUIDITY */}
        <div className="p-6 rounded-2xl border border-white/10 bg-black flex flex-col justify-between h-full space-y-4 shadow-xl">
          <div className="space-y-2">
            <span className="text-[10px] font-mono uppercase font-bold text-gold tracking-wider">06 • EXIT & CAPITAL RECOVERY</span>
            <h3 className="text-base font-bold text-white">Liquidity & Transfer Velocity</h3>
            <ul className="text-xs text-zinc-400 space-y-2 leading-relaxed pt-2 border-t border-white/10">
              <li>• <strong className="text-white">Developer NOC Fee:</strong> AED 1,000–5,000 (No Objection Certificate required for resale).</li>
              <li>• <strong className="text-white">Capital Gains Treatment:</strong> No UAE personal income tax on capital gains from individual real estate disposals (Cabinet Decision No. 49 of 2023).</li>
              <li>• <strong className="text-white">Repatriation:</strong> Capital and dividend repatriation through CBUAE banking system without foreign exchange controls.</li>
              <li>• <strong className="text-white">Settlement Timelines:</strong> Cash transfers settle in 7–14 days; mortgaged transfers 20–35 days.</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

function InvestmentMethodologySection() {
  return (
    <div className="space-y-8 bg-zinc-950/90 p-6 sm:p-10 rounded-3xl border border-white/10 backdrop-blur-md">
      <div className="space-y-2 border-b border-white/10 pb-6">
        <div className="flex items-center gap-2 text-[11px] font-mono font-bold text-gold uppercase tracking-wider">
          <FileSpreadsheet className="h-4 w-4" />
          <span>Transparent Mathematical Standard</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
          Valuation & Yield Methodology
        </h2>
        <p className="text-xs sm:text-sm text-zinc-400 max-w-3xl">
          Clear distinction between pricing definitions, yield calculations, leverage implications, and calculated outputs across the platform.
        </p>
      </div>

      {/* DEFINITION MATRIX */}
      <div className="space-y-4">
        <h3 className="text-base font-bold text-white">01 • Pricing Classifications & Provenance</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="p-5 rounded-2xl border border-white/10 bg-black space-y-2">
            <div className="flex items-center justify-between">
              <span className="text-sm font-bold text-white">Asking Price</span>
              <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono bg-blue-500/10 text-blue-400 border border-blue-500/20 font-semibold">LISTED PRICE</span>
            </div>
            <p className="text-xs text-zinc-400 leading-relaxed">
              The listed offer price set by the property seller or developer. Does not represent an executed contract price until transacted.
            </p>
          </div>

          <div className="p-5 rounded-2xl border border-white/10 bg-black space-y-2">
            <div className="flex items-center justify-between">
              <span className="text-sm font-bold text-white">Achieved Transaction Price</span>
              <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 font-semibold">DLD OFFICIAL RECORD</span>
            </div>
            <p className="text-xs text-zinc-400 leading-relaxed">
              The exact executed transfer price recorded at the Dubai Land Department registration trustee upon title deed issuance.
            </p>
          </div>

          <div className="p-5 rounded-2xl border border-white/10 bg-black space-y-2">
            <div className="flex items-center justify-between">
              <span className="text-sm font-bold text-white">Estimated Market Value</span>
              <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono bg-amber-500/10 text-amber-400 border border-amber-500/20 font-semibold">ESTIMATE / MODEL</span>
            </div>
            <p className="text-xs text-zinc-400 leading-relaxed">
              A valuation derived from comparable sales and square footage metrics. Always designated as an estimate, never presented as achieved fact.
            </p>
          </div>

          <div className="p-5 rounded-2xl border border-white/10 bg-black space-y-2">
            <div className="flex items-center justify-between">
              <span className="text-sm font-bold text-white">Calculated Metric</span>
              <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono bg-gold/10 text-gold border border-gold/20 font-semibold">CALCULATED</span>
            </div>
            <p className="text-xs text-zinc-400 leading-relaxed">
              Deterministic mathematical output derived strictly from user inputs and published statutory schedules. Modelled from assumptions.
            </p>
          </div>
        </div>
      </div>

      {/* FORMULA EXPLANATION TABLE */}
      <div className="space-y-4 pt-4 border-t border-white/10">
        <h3 className="text-base font-bold text-white">02 • Mathematical Underwriting Formulas</h3>
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs border border-white/10 rounded-2xl overflow-hidden">
            <thead className="bg-zinc-900 text-zinc-400 font-mono uppercase text-[10px]">
              <tr>
                <th className="p-3.5 border-b border-white/10">Metric</th>
                <th className="p-3.5 border-b border-white/10">Exact Formula</th>
                <th className="p-3.5 border-b border-white/10">Inputs Required</th>
                <th className="p-3.5 border-b border-white/10">Significance</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/5 bg-black/60">
              <tr>
                <td className="p-3.5 font-bold text-white">Gross Rental Yield</td>
                <td className="p-3.5 font-mono text-gold">(Annual Rent ÷ Purchase Price) × 100</td>
                <td className="p-3.5 text-zinc-400">Gross rent, Asset price</td>
                <td className="p-3.5 text-zinc-400">Top-line income efficiency before operating fees.</td>
              </tr>
              <tr>
                <td className="p-3.5 font-bold text-white">Net Operating Income (NOI)</td>
                <td className="p-3.5 font-mono text-gold">Gross Rent - Vacancy - Service Charges - Maintenance - Management</td>
                <td className="p-3.5 text-zinc-400">Rent, vacancy rate, Mollak service charges, opex</td>
                <td className="p-3.5 text-zinc-400">True operating cash generated by property.</td>
              </tr>
              <tr>
                <td className="p-3.5 font-bold text-white">Net Yield (All-In)</td>
                <td className="p-3.5 font-mono text-gold">(Annual NOI ÷ Total Acquisition Cost) × 100</td>
                <td className="p-3.5 text-zinc-400">NOI, Total Capital Outlay (Price + Buyer DLD Transfer Fee + Trustee + Document Tariffs + Brokerage)</td>
                <td className="p-3.5 text-zinc-400">Institutional return benchmark on total deployed equity.</td>
              </tr>
              <tr>
                <td className="p-3.5 font-bold text-white">Cash-on-Cash Return</td>
                <td className="p-3.5 font-mono text-gold">(Annual Net Cash Flow ÷ Initial Total Cash Invested) × 100</td>
                <td className="p-3.5 text-zinc-400">Net cash after debt service, Down payment + Acquisition fees</td>
                <td className="p-3.5 text-zinc-400">Actual levered annual cash distribution percentage.</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}