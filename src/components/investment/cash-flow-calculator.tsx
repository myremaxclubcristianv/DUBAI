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
    <div className="bg-white rounded-xl border border-border overflow-hidden">
      <div className="p-6 border-b border-border flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2">
            <TrendingUp className="h-5 w-5 text-accent" />
            <h2 className="text-xl font-bold text-text-primary">Leveraged Cash Flow & Cash-on-Cash Return</h2>
          </div>
          <p className="text-xs text-text-secondary mt-1">
            Calculates net cash flow after debt service, return on actual equity invested, and break-even horizon.
          </p>
        </div>
        <SourceBadge status="CALCULATED" sourceName="Financial Cash Flow Modeling" />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-0 divide-y lg:divide-y-0 lg:divide-x divide-border">
        <div className="lg:col-span-6 p-6 space-y-4 bg-surface-subtle">
          <h3 className="text-xs font-bold uppercase tracking-wider text-text-muted">Assumptions & Inputs</h3>

          <div className="space-y-3">
            <div>
              <div className="flex justify-between text-xs mb-1">
                <span className="font-semibold text-text-primary">Property Price (AED)</span>
                <span className="font-mono text-accent font-bold">AED {purchasePrice.toLocaleString()}</span>
              </div>
              <input
                type="range"
                min={500000}
                max={20000000}
                step={50000}
                value={purchasePrice}
                onChange={(e) => setPurchasePrice(Number(e.target.value))}
                className="w-full accent-accent cursor-pointer"
              />
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="block text-xs font-semibold text-text-primary mb-1">Down Payment (%)</label>
                <input
                  type="number"
                  value={downPaymentPct}
                  onChange={(e) => setDownPaymentPct(Number(e.target.value))}
                  className="w-full px-3 py-2 bg-white border border-border rounded-md text-xs text-text-primary"
                />
              </div>
              <div>
                <label className="block text-xs font-semibold text-text-primary mb-1">Mortgage Rate (%)</label>
                <input
                  type="number"
                  step="0.1"
                  value={interestRate}
                  onChange={(e) => setInterestRate(Number(e.target.value))}
                  className="w-full px-3 py-2 bg-white border border-border rounded-md text-xs text-text-primary"
                />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="block text-xs font-semibold text-text-primary mb-1">Annual Rent (AED)</label>
                <input
                  type="number"
                  value={annualRent}
                  onChange={(e) => setAnnualRent(Number(e.target.value))}
                  className="w-full px-3 py-2 bg-white border border-border rounded-md text-xs text-text-primary"
                />
              </div>
              <div>
                <label className="block text-xs font-semibold text-text-primary mb-1">Annual Service Charge (AED)</label>
                <input
                  type="number"
                  value={serviceChargeAnnual}
                  onChange={(e) => setServiceChargeAnnual(Number(e.target.value))}
                  className="w-full px-3 py-2 bg-white border border-border rounded-md text-xs text-text-primary"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="lg:col-span-6 p-6 space-y-5">
          <h3 className="text-xs font-bold uppercase tracking-wider text-text-muted">Return on Invested Capital</h3>

          <div className="grid grid-cols-2 gap-4">
            <div className="p-4 bg-surface rounded-lg border border-border">
              <span className="text-[11px] font-semibold text-text-muted uppercase">Cash-on-Cash Return</span>
              <div className="text-2xl font-bold text-text-primary font-mono mt-1">
                {result.cash_on_cash_return_pct.toFixed(2)}%
              </div>
              <span className="text-[10px] text-text-muted">Net Cash Flow / Initial Outlay</span>
            </div>

            <div className="p-4 bg-accent-subtle rounded-lg border border-accent-border">
              <span className="text-[11px] font-semibold text-accent uppercase">Net Monthly Cash Flow</span>
              <div className="text-2xl font-bold text-accent font-mono mt-1">
                AED {Math.round(result.monthly_net_cash_flow).toLocaleString()}
              </div>
              <span className="text-[10px] text-text-muted">After debt service & expenses</span>
            </div>
          </div>

          <div className="space-y-2 text-xs">
            <div className="flex justify-between py-1.5 border-b border-border-subtle">
              <span className="text-text-secondary">Net Operating Income (before debt):</span>
              <span className="font-mono font-semibold text-text-primary">
                AED {result.net_operating_income.toLocaleString()} / yr
              </span>
            </div>
            <div className="flex justify-between py-1.5 border-b border-border-subtle">
              <span className="text-text-secondary">Annual Mortgage Debt Service:</span>
              <span className="font-mono text-error font-semibold">
                - AED {result.annual_debt_service.toLocaleString()} / yr
              </span>
            </div>
            <div className="flex justify-between py-1.5 border-b border-border-subtle">
              <span className="text-text-secondary">Net Annual Cash Flow:</span>
              <span className="font-mono font-bold text-emerald-700">
                AED {result.net_annual_cash_flow.toLocaleString()} / yr
              </span>
            </div>
            <div className="flex justify-between py-1.5 border-b border-border-subtle">
              <span className="text-text-secondary">Total Initial Equity Outlay:</span>
              <span className="font-mono text-text-primary">
                AED {result.initial_equity_outlay.toLocaleString()}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
