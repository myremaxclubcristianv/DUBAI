'use client'

import * as React from 'react'
import { calculateCashFlow } from '@/lib/calculators/investment'
import { SourceBadge } from '@/components/ui/source-badge'
import { TrendingUp } from 'lucide-react'

export function CashFlowCalculator() {
  const [purchasePrice, setPurchasePrice] = React.useState<number>(3000000)
  const [downPaymentPct, setDownPaymentPct] = React.useState<number>(20)
  const [interestRate, setInterestRate] = React.useState<number>(4.5)
  const [tenureYears] = React.useState<number>(25)
  const [annualRent, setAnnualRent] = React.useState<number>(220000)
  const [serviceChargeAnnual, setServiceChargeAnnual] = React.useState<number>(25000)

  const result = React.useMemo(() => {
    return calculateCashFlow({
      purchasePrice,
      downPaymentPct,
      annualInterestRatePct: interestRate,
      tenureYears,
      annualRent,
      serviceChargeAnnual,
    })
  }, [purchasePrice, downPaymentPct, interestRate, tenureYears, annualRent, serviceChargeAnnual])

  return (
    <div className="bg-[#0c0c0e] rounded-3xl border border-white/10 overflow-hidden shadow-2xl">
      <div className="p-6 sm:p-8 border-b border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-gradient-to-b from-white/[0.04] to-transparent">
        <div>
          <div className="flex items-center gap-2">
            <TrendingUp className="h-4 w-4 text-accent" />
            <h2 className="text-xl sm:text-2xl font-semibold text-white tracking-tight">Leveraged Cash Flow & Cash-on-Cash Return</h2>
          </div>
          <p className="text-xs text-zinc-400 mt-1">
            Calculates net cash flow after debt service, return on actual equity invested, and break-even horizon.
          </p>
        </div>
        <SourceBadge status="CALCULATED" sourceName="Financial Cash Flow Modeling" />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-0 divide-y lg:divide-y-0 lg:divide-x divide-white/10">
        <div className="lg:col-span-6 p-6 sm:p-8 space-y-6 bg-white/[0.01]">
          <h3 className="text-[11px] font-bold uppercase tracking-widest text-zinc-400">Assumptions & Inputs</h3>

          <div className="space-y-5">
            <div>
              <div className="flex justify-between text-xs mb-2">
                <span className="font-medium text-zinc-300">Property Price</span>
                <span className="font-mono text-accent font-semibold">AED {purchasePrice.toLocaleString()}</span>
              </div>
              <input
                type="range"
                min={500000}
                max={20000000}
                step={50000}
                value={purchasePrice}
                onChange={(e) => setPurchasePrice(Number(e.target.value))}
                className="w-full accent-[#d4af37] bg-white/10 h-1.5 rounded-lg cursor-pointer appearance-none"
              />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-medium text-zinc-400 mb-1.5">Down Payment (%)</label>
                <input
                  type="number"
                  value={downPaymentPct}
                  onChange={(e) => setDownPaymentPct(Number(e.target.value))}
                  className="w-full px-3.5 py-2.5 bg-white/[0.04] border border-white/10 rounded-xl text-xs text-white placeholder-zinc-400 focus:outline-none focus:border-accent/60 transition-colors font-mono"
                />
              </div>
              <div>
                <label className="block text-xs font-medium text-zinc-400 mb-1.5">Mortgage Rate (%)</label>
                <input
                  type="number"
                  step="0.1"
                  value={interestRate}
                  onChange={(e) => setInterestRate(Number(e.target.value))}
                  className="w-full px-3.5 py-2.5 bg-white/[0.04] border border-white/10 rounded-xl text-xs text-white placeholder-zinc-400 focus:outline-none focus:border-accent/60 transition-colors font-mono"
                />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-medium text-zinc-400 mb-1.5">Annual Rent (AED)</label>
                <input
                  type="number"
                  value={annualRent}
                  onChange={(e) => setAnnualRent(Number(e.target.value))}
                  className="w-full px-3.5 py-2.5 bg-white/[0.04] border border-white/10 rounded-xl text-xs text-white placeholder-zinc-400 focus:outline-none focus:border-accent/60 transition-colors font-mono"
                />
              </div>
              <div>
                <label className="block text-xs font-medium text-zinc-400 mb-1.5">Annual Service Charge (AED)</label>
                <input
                  type="number"
                  value={serviceChargeAnnual}
                  onChange={(e) => setServiceChargeAnnual(Number(e.target.value))}
                  className="w-full px-3.5 py-2.5 bg-white/[0.04] border border-white/10 rounded-xl text-xs text-white placeholder-zinc-400 focus:outline-none focus:border-accent/60 transition-colors font-mono"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="lg:col-span-6 p-6 sm:p-8 space-y-6 bg-black/40">
          <h3 className="text-[11px] font-bold uppercase tracking-widest text-zinc-400">Return on Invested Capital</h3>

          <div className="grid grid-cols-2 gap-4">
            <div className="p-5 bg-white/[0.03] rounded-2xl border border-white/10 space-y-1">
              <span className="text-[10px] font-bold text-zinc-400 uppercase tracking-wider">Cash-on-Cash Return</span>
              <div className="text-3xl font-light text-white font-mono tracking-tight pt-1">
                {result.cash_on_cash_return_pct.toFixed(2)}%
              </div>
              <span className="text-[10px] text-zinc-400 block">Net Cash Flow / Initial Outlay</span>
            </div>

            <div className="p-5 bg-accent/10 rounded-2xl border border-accent/20 space-y-1">
              <span className="text-[10px] font-bold text-accent uppercase tracking-wider">Net Monthly Cash Flow</span>
              <div className="text-3xl font-light text-accent font-mono tracking-tight pt-1">
                AED {Math.round(result.monthly_net_cash_flow).toLocaleString()}
              </div>
              <span className="text-[10px] text-zinc-400 block">After debt service & expenses</span>
            </div>
          </div>

          <div className="space-y-2.5 pt-2 text-xs divide-y divide-white/5">
            <div className="flex justify-between py-2">
              <span className="text-zinc-400">Net Operating Income (before debt):</span>
              <span className="font-mono font-medium text-white">
                AED {result.net_operating_income.toLocaleString()} / yr
              </span>
            </div>
            <div className="flex justify-between py-2">
              <span className="text-zinc-400">Annual Mortgage Debt Service:</span>
              <span className="font-mono text-rose-400 font-medium">
                - AED {result.annual_debt_service.toLocaleString()} / yr
              </span>
            </div>
            <div className="flex justify-between py-2">
              <span className="text-zinc-400">Net Annual Cash Flow:</span>
              <span className="font-mono font-semibold text-emerald-400">
                AED {result.net_annual_cash_flow.toLocaleString()} / yr
              </span>
            </div>
            <div className="flex justify-between py-3 border-t border-white/10">
              <span className="text-white font-medium">Total Initial Equity Outlay:</span>
              <span className="font-mono font-medium text-white">
                AED {result.initial_equity_outlay.toLocaleString()}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
