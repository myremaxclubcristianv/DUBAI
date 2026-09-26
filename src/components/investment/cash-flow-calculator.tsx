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
    <div className="bg-white rounded-3xl border border-black/10 overflow-hidden shadow-sm">
      <div className="p-6 sm:p-8 border-b border-black/10 flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-[#f5f5f7]">
        <div>
          <div className="flex items-center gap-2">
            <TrendingUp className="h-4 w-4 text-accent" />
            <h2 className="text-xl sm:text-2xl font-extrabold text-[#1d1d1f] tracking-tight">Leveraged Cash Flow & Cash-on-Cash Return</h2>
          </div>
          <p className="text-xs text-[#6e6e73] mt-1">
            Calculates net cash flow after debt service, return on actual equity invested, and break-even horizon.
          </p>
        </div>
        <SourceBadge status="CALCULATED" sourceName="Financial Cash Flow Modeling" />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-0 divide-y lg:divide-y-0 lg:divide-x divide-black/10">
        <div className="lg:col-span-6 p-6 sm:p-8 space-y-6 bg-white">
          <h3 className="text-[11px] font-bold uppercase tracking-widest text-[#6e6e73]">Assumptions & Inputs</h3>

          <div className="space-y-5">
            <div>
              <div className="flex justify-between text-xs mb-2">
                <span className="font-semibold text-[#1d1d1f]">Property Price</span>
                <span className="font-mono text-accent font-bold">AED {purchasePrice.toLocaleString()}</span>
              </div>
              <input
                type="range"
                min={500000}
                max={20000000}
                step={50000}
                value={purchasePrice}
                onChange={(e) => setPurchasePrice(Number(e.target.value))}
                className="w-full accent-[#1d1d1f] bg-black/10 h-1.5 rounded-lg cursor-pointer appearance-none"
              />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-semibold text-[#1d1d1f] mb-1.5">Down Payment (%)</label>
                <input
                  type="number"
                  value={downPaymentPct}
                  onChange={(e) => setDownPaymentPct(Number(e.target.value))}
                  className="w-full px-3.5 py-2.5 bg-[#f5f5f7] border border-black/10 rounded-xl text-xs text-[#1d1d1f] focus:outline-none focus:border-accent transition-colors font-mono"
                />
              </div>
              <div>
                <label className="block text-xs font-semibold text-[#1d1d1f] mb-1.5">Mortgage Rate (%)</label>
                <input
                  type="number"
                  step="0.1"
                  value={interestRate}
                  onChange={(e) => setInterestRate(Number(e.target.value))}
                  className="w-full px-3.5 py-2.5 bg-[#f5f5f7] border border-black/10 rounded-xl text-xs text-[#1d1d1f] focus:outline-none focus:border-accent transition-colors font-mono"
                />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-semibold text-[#1d1d1f] mb-1.5">Annual Rent (AED)</label>
                <input
                  type="number"
                  value={annualRent}
                  onChange={(e) => setAnnualRent(Number(e.target.value))}
                  className="w-full px-3.5 py-2.5 bg-[#f5f5f7] border border-black/10 rounded-xl text-xs text-[#1d1d1f] focus:outline-none focus:border-accent transition-colors font-mono"
                />
              </div>
              <div>
                <label className="block text-xs font-semibold text-[#1d1d1f] mb-1.5">Annual Service Charge (AED)</label>
                <input
                  type="number"
                  value={serviceChargeAnnual}
                  onChange={(e) => setServiceChargeAnnual(Number(e.target.value))}
                  className="w-full px-3.5 py-2.5 bg-[#f5f5f7] border border-black/10 rounded-xl text-xs text-[#1d1d1f] focus:outline-none focus:border-accent transition-colors font-mono"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="lg:col-span-6 p-6 sm:p-8 space-y-6 bg-[#f5f5f7]">
          <h3 className="text-[11px] font-bold uppercase tracking-widest text-[#6e6e73]">Return on Invested Capital</h3>

          <div className="grid grid-cols-2 gap-4">
            <div className="p-5 bg-white rounded-2xl border border-black/10 space-y-1 shadow-sm">
              <span className="text-[10px] font-bold text-[#6e6e73] uppercase tracking-wider">Cash-on-Cash Return</span>
              <div className="text-3xl font-extrabold text-[#1d1d1f] font-mono tracking-tight pt-1">
                {result.cash_on_cash_return_pct.toFixed(2)}%
              </div>
              <span className="text-[10px] text-[#6e6e73] block">Net Cash Flow / Initial Outlay</span>
            </div>

            <div className="p-5 bg-white rounded-2xl border border-[#c9a962]/40 space-y-1 shadow-sm">
              <span className="text-[10px] font-bold text-accent uppercase tracking-wider">Net Monthly Cash Flow</span>
              <div className="text-3xl font-extrabold text-accent font-mono tracking-tight pt-1">
                AED {Math.round(result.monthly_net_cash_flow).toLocaleString()}
              </div>
              <span className="text-[10px] text-[#6e6e73] block">After debt service & expenses</span>
            </div>
          </div>

          <div className="space-y-2.5 pt-2 text-xs divide-y divide-black/5 bg-white p-5 rounded-2xl border border-black/10 shadow-sm">
            <div className="flex justify-between py-2">
              <span className="text-[#6e6e73]">Net Operating Income (before debt):</span>
              <span className="font-mono font-semibold text-[#1d1d1f]">
                AED {result.net_operating_income.toLocaleString()} / yr
              </span>
            </div>
            <div className="flex justify-between py-2">
              <span className="text-[#6e6e73]">Annual Mortgage Debt Service:</span>
              <span className="font-mono text-rose-600 font-semibold">
                - AED {result.annual_debt_service.toLocaleString()} / yr
              </span>
            </div>
            <div className="flex justify-between py-2">
              <span className="text-[#6e6e73]">Net Annual Cash Flow:</span>
              <span className="font-mono font-bold text-emerald-600">
                AED {result.net_annual_cash_flow.toLocaleString()} / yr
              </span>
            </div>
            <div className="flex justify-between py-3 border-t border-black/10">
              <span className="text-[#1d1d1f] font-bold">Total Initial Equity Outlay:</span>
              <span className="font-mono font-bold text-[#1d1d1f]">
                AED {result.initial_equity_outlay.toLocaleString()}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
