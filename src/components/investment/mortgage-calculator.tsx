'use client'

import * as React from 'react'
import { calculateMortgage } from '@/lib/calculators/investment'
import { SourceBadge } from '@/components/ui/source-badge'
import { DollarSign, ShieldCheck } from 'lucide-react'

export function MortgageCalculator() {
  const [purchasePrice, setPurchasePrice] = React.useState<number>(4000000)
  const [downPaymentPct, setDownPaymentPct] = React.useState<number>(20)
  const [interestRate, setInterestRate] = React.useState<number>(4.45)
  const [tenureYears, setTenureYears] = React.useState<number>(25)
  const [buyerType, setBuyerType] = React.useState<'EXPAT_FIRST_HOME' | 'EXPAT_SUBSEQUENT' | 'UAE_NATIONAL' | 'NON_RESIDENT'>('EXPAT_FIRST_HOME')

  const result = React.useMemo(() => {
    return calculateMortgage({
      purchasePrice,
      downPaymentPct,
      annualInterestRatePct: interestRate,
      tenureYears,
      buyerType,
    })
  }, [purchasePrice, downPaymentPct, interestRate, tenureYears, buyerType])

  return (
    <div className="bg-white rounded-xl border border-border overflow-hidden">
      <div className="p-6 border-b border-border flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2">
            <DollarSign className="h-5 w-5 text-accent" />
            <h2 className="text-xl font-bold text-text-primary">UAE Mortgage & Amortization Engine</h2>
          </div>
          <p className="text-xs text-text-secondary mt-1">
            Calculates monthly repayments, interest schedules, and upfront cash outlay adhering to Central Bank of the UAE LTV caps.
          </p>
        </div>
        <SourceBadge status="OFFICIAL SOURCE" sourceName="Central Bank of the UAE LTV Rules" />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-0 divide-y lg:divide-y-0 lg:divide-x divide-border">
        {/* Inputs */}
        <div className="lg:col-span-6 p-6 space-y-5 bg-surface-subtle">
          <div className="space-y-4">
            <div>
              <label className="block text-xs font-semibold text-text-primary mb-1">
                Buyer Legal Classification (UAE Central Bank LTV Ceiling)
              </label>
              <select
                value={buyerType}
                onChange={(e: React.ChangeEvent<HTMLSelectElement>) => {
                  const val = e.target.value as 'EXPAT_FIRST_HOME' | 'EXPAT_SUBSEQUENT' | 'UAE_NATIONAL' | 'NON_RESIDENT'
                  setBuyerType(val)
                  if (val === 'NON_RESIDENT') setDownPaymentPct(40)
                  else if (val === 'EXPAT_SUBSEQUENT') setDownPaymentPct(35)
                  else setDownPaymentPct(20)
                }}
                className="w-full px-3 py-2 bg-white border border-border rounded-md text-xs text-text-primary focus:outline-none focus:border-accent font-medium"
              >
                <option value="EXPAT_FIRST_HOME">Expatriate Resident (First Home — Max 80% LTV)</option>
                <option value="UAE_NATIONAL">UAE National (First Home — Max 85% LTV)</option>
                <option value="EXPAT_SUBSEQUENT">Expatriate / National (Second/Investment Property — Max 60-65% LTV)</option>
                <option value="NON_RESIDENT">Non-Resident International Buyer (Max 50-60% LTV)</option>
              </select>
            </div>

            <div>
              <div className="flex justify-between text-xs mb-1.5">
                <label className="font-semibold text-text-primary">Property Purchase Price (AED)</label>
                <span className="font-mono text-accent font-bold">AED {purchasePrice.toLocaleString()}</span>
              </div>
              <input
                type="range"
                min={500000}
                max={30000000}
                step={50000}
                value={purchasePrice}
                onChange={(e) => setPurchasePrice(Number(e.target.value))}
                className="w-full accent-accent cursor-pointer"
              />
            </div>

            <div className="grid grid-cols-3 gap-3">
              <div>
                <label className="block text-xs font-semibold text-text-primary mb-1">
                  Down Payment (%)
                </label>
                <input
                  type="number"
                  min={15}
                  max={90}
                  value={downPaymentPct}
                  onChange={(e) => setDownPaymentPct(Number(e.target.value))}
                  className="w-full px-3 py-2 bg-white border border-border rounded-md text-xs text-text-primary focus:outline-none focus:border-accent"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-text-primary mb-1">
                  Interest Rate (% p.a.)
                </label>
                <input
                  type="number"
                  step="0.05"
                  min={1}
                  max={15}
                  value={interestRate}
                  onChange={(e) => setInterestRate(Number(e.target.value))}
                  className="w-full px-3 py-2 bg-white border border-border rounded-md text-xs text-text-primary focus:outline-none focus:border-accent"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-text-primary mb-1">
                  Tenure (Years)
                </label>
                <input
                  type="number"
                  min={1}
                  max={25}
                  value={tenureYears}
                  onChange={(e) => setTenureYears(Number(e.target.value))}
                  className="w-full px-3 py-2 bg-white border border-border rounded-md text-xs text-text-primary focus:outline-none focus:border-accent"
                />
              </div>
            </div>
          </div>

          <div className="p-3 bg-white rounded-lg border border-border text-[11px] text-text-secondary space-y-1">
            <div className="flex items-center gap-1.5 font-semibold text-text-primary">
              <ShieldCheck className="h-3.5 w-3.5 text-emerald-700" />
              <span>Central Bank Regulatory Ceiling:</span>
            </div>
            <p>{result.ltv_ceiling_info}</p>
          </div>
        </div>

        {/* Outputs */}
        <div className="lg:col-span-6 p-6 space-y-5">
          <h3 className="text-xs font-bold uppercase tracking-wider text-text-muted">
            Repayment & Capital Breakdown
          </h3>

          <div className="p-5 bg-surface rounded-lg border border-border">
            <span className="text-xs font-medium text-text-secondary">Estimated Monthly Mortgage Payment</span>
            <div className="text-3xl font-bold text-text-primary font-mono mt-1">
              AED {result.monthly_payment_aed.toLocaleString()} <span className="text-sm font-normal text-text-muted">/ month</span>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-3 text-xs">
            <div className="p-3 bg-surface-elevated rounded-lg border border-border">
              <span className="text-text-muted">Loan Principal:</span>
              <div className="font-mono font-bold text-text-primary text-sm mt-0.5">
                AED {result.loan_amount.toLocaleString()}
              </div>
            </div>

            <div className="p-3 bg-surface-elevated rounded-lg border border-border">
              <span className="text-text-muted">Total Interest Payable:</span>
              <div className="font-mono font-bold text-text-primary text-sm mt-0.5">
                AED {result.total_interest_payable.toLocaleString()}
              </div>
            </div>

            <div className="p-3 bg-surface-elevated rounded-lg border border-border">
              <span className="text-text-muted">Down Payment Amount:</span>
              <div className="font-mono font-bold text-text-primary text-sm mt-0.5">
                AED {result.down_payment_aed.toLocaleString()}
              </div>
            </div>

            <div className="p-3 bg-accent-subtle rounded-lg border border-accent-border">
              <span className="text-accent font-semibold">Total Initial Cash Outlay:</span>
              <div className="font-mono font-bold text-accent text-sm mt-0.5">
                AED {result.initial_equity_outlay.toLocaleString()}
              </div>
              <span className="text-[10px] text-text-muted">Down payment + estimated acquisition and mortgage fees</span>
            </div>
          </div>

          {/* Sample Amortization Timeline */}
          <div>
            <span className="text-[11px] font-bold uppercase tracking-wider text-text-muted block mb-2">
              Principal vs Balance Amortization Sample
            </span>
            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs">
                <thead>
                  <tr className="border-b border-border text-text-muted">
                    <th className="pb-1 font-semibold">Year</th>
                    <th className="pb-1 font-semibold">Principal Paid</th>
                    <th className="pb-1 font-semibold">Interest Paid</th>
                    <th className="pb-1 font-semibold">Ending Balance</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border-subtle">
                  {result.amortization_schedule_sample.map((row) => (
                    <tr key={row.year} className="hover:bg-surface-elevated">
                      <td className="py-1 text-text-secondary font-medium">Year {row.year}</td>
                      <td className="py-1 font-mono text-text-primary">AED {row.principal_paid.toLocaleString()}</td>
                      <td className="py-1 font-mono text-text-primary">AED {row.interest_paid.toLocaleString()}</td>
                      <td className="py-1 font-mono text-text-primary">AED {row.remaining_balance.toLocaleString()}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
