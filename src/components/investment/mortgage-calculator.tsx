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
    <div className="bg-[#0c0c0e] rounded-3xl border border-white/10 overflow-hidden shadow-2xl">
      <div className="p-6 sm:p-8 border-b border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-gradient-to-b from-white/[0.04] to-transparent">
        <div>
          <div className="flex items-center gap-2">
            <DollarSign className="h-4 w-4 text-accent" />
            <h2 className="text-xl sm:text-2xl font-semibold text-white tracking-tight">UAE Mortgage & Amortization Engine</h2>
          </div>
          <p className="text-xs text-zinc-400 mt-1">
            Calculates monthly repayments, interest schedules, and upfront cash outlay adhering to Central Bank of the UAE LTV caps.
          </p>
        </div>
        <SourceBadge status="OFFICIAL SOURCE" sourceName="Central Bank of the UAE LTV Rules" />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-0 divide-y lg:divide-y-0 lg:divide-x divide-white/10">
        {/* Inputs */}
        <div className="lg:col-span-6 p-6 sm:p-8 space-y-6 bg-white/[0.01]">
          <div className="space-y-5">
            <div>
              <label className="block text-xs font-medium text-zinc-400 mb-1.5">
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
                className="w-full px-3.5 py-2.5 bg-white/[0.04] border border-white/10 rounded-xl text-xs text-white focus:outline-none focus:border-accent/60 transition-colors font-medium"
              >
                <option value="EXPAT_FIRST_HOME" className="bg-[#141418] text-white">Expatriate Resident (First Home — Max 80% LTV)</option>
                <option value="UAE_NATIONAL" className="bg-[#141418] text-white">UAE National (First Home — Max 85% LTV)</option>
                <option value="EXPAT_SUBSEQUENT" className="bg-[#141418] text-white">Expatriate / National (Second/Investment Property — Max 60-65% LTV)</option>
                <option value="NON_RESIDENT" className="bg-[#141418] text-white">Non-Resident International Buyer (Max 50-60% LTV)</option>
              </select>
            </div>

            <div>
              <div className="flex justify-between text-xs mb-2">
                <label className="font-medium text-zinc-300">Property Purchase Price</label>
                <span className="font-mono text-accent font-semibold">AED {purchasePrice.toLocaleString()}</span>
              </div>
              <input
                type="range"
                min={500000}
                max={30000000}
                step={50000}
                value={purchasePrice}
                onChange={(e) => setPurchasePrice(Number(e.target.value))}
                className="w-full accent-[#d4af37] bg-white/10 h-1.5 rounded-lg cursor-pointer appearance-none"
              />
            </div>

            <div className="grid grid-cols-3 gap-3">
              <div>
                <label className="block text-xs font-medium text-zinc-400 mb-1.5">
                  Down Payment (%)
                </label>
                <input
                  type="number"
                  min={15}
                  max={90}
                  value={downPaymentPct}
                  onChange={(e) => setDownPaymentPct(Number(e.target.value))}
                  className="w-full px-3.5 py-2.5 bg-white/[0.04] border border-white/10 rounded-xl text-xs text-white placeholder-zinc-400 focus:outline-none focus:border-accent/60 transition-colors font-mono"
                />
              </div>

              <div>
                <label className="block text-xs font-medium text-zinc-400 mb-1.5">
                  Interest Rate (% p.a.)
                </label>
                <input
                  type="number"
                  step="0.05"
                  min={1}
                  max={15}
                  value={interestRate}
                  onChange={(e) => setInterestRate(Number(e.target.value))}
                  className="w-full px-3.5 py-2.5 bg-white/[0.04] border border-white/10 rounded-xl text-xs text-white placeholder-zinc-400 focus:outline-none focus:border-accent/60 transition-colors font-mono"
                />
              </div>

              <div>
                <label className="block text-xs font-medium text-zinc-400 mb-1.5">
                  Tenure (Years)
                </label>
                <input
                  type="number"
                  min={1}
                  max={25}
                  value={tenureYears}
                  onChange={(e) => setTenureYears(Number(e.target.value))}
                  className="w-full px-3.5 py-2.5 bg-white/[0.04] border border-white/10 rounded-xl text-xs text-white placeholder-zinc-400 focus:outline-none focus:border-accent/60 transition-colors font-mono"
                />
              </div>
            </div>
          </div>

          <div className="p-4 bg-white/[0.02] rounded-2xl border border-white/10 text-xs text-zinc-400 space-y-1.5">
            <div className="flex items-center gap-1.5 font-semibold text-zinc-300">
              <ShieldCheck className="h-3.5 w-3.5 text-emerald-400" />
              <span>Central Bank Regulatory Ceiling:</span>
            </div>
            <p className="text-[11px] leading-relaxed">{result.ltv_ceiling_info}</p>
          </div>
        </div>

        {/* Outputs */}
        <div className="lg:col-span-6 p-6 sm:p-8 space-y-6 bg-black/40">
          <h3 className="text-[11px] font-bold uppercase tracking-widest text-zinc-400">
            Repayment & Capital Breakdown
          </h3>

          <div className="p-6 bg-white/[0.03] rounded-2xl border border-white/10 space-y-1">
            <span className="text-xs font-medium text-zinc-400">Estimated Monthly Mortgage Payment</span>
            <div className="text-3xl sm:text-4xl font-light text-white font-mono tracking-tight pt-1">
              AED {result.monthly_payment_aed.toLocaleString()} <span className="text-sm font-normal text-zinc-400 font-sans">/ month</span>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-3 text-xs">
            <div className="p-4 bg-white/[0.02] rounded-2xl border border-white/10">
              <span className="text-zinc-400 block text-[11px]">Loan Principal:</span>
              <div className="font-mono font-medium text-white text-sm mt-1">
                AED {result.loan_amount.toLocaleString()}
              </div>
            </div>

            <div className="p-4 bg-white/[0.02] rounded-2xl border border-white/10">
              <span className="text-zinc-400 block text-[11px]">Total Interest Payable:</span>
              <div className="font-mono font-medium text-white text-sm mt-1">
                AED {result.total_interest_payable.toLocaleString()}
              </div>
            </div>

            <div className="p-4 bg-white/[0.02] rounded-2xl border border-white/10">
              <span className="text-zinc-400 block text-[11px]">Down Payment Amount:</span>
              <div className="font-mono font-medium text-white text-sm mt-1">
                AED {result.down_payment_aed.toLocaleString()}
              </div>
            </div>

            <div className="p-4 bg-accent/10 rounded-2xl border border-accent/20">
              <span className="text-accent font-semibold block text-[11px]">Total Initial Cash Outlay:</span>
              <div className="font-mono font-semibold text-accent text-sm mt-1">
                AED {result.initial_equity_outlay.toLocaleString()}
              </div>
              <span className="text-[10px] text-zinc-400 mt-1 block">Down payment + estimated fees</span>
            </div>
          </div>

          {/* Sample Amortization Timeline */}
          <div className="pt-2">
            <span className="text-[10px] font-bold uppercase tracking-widest text-zinc-400 block mb-3">
              Principal vs Balance Amortization Sample
            </span>
            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs">
                <thead>
                  <tr className="border-b border-white/10 text-zinc-400">
                    <th className="pb-2 font-medium">Year</th>
                    <th className="pb-2 font-medium">Principal Paid</th>
                    <th className="pb-2 font-medium">Interest Paid</th>
                    <th className="pb-2 font-medium">Ending Balance</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/5">
                  {result.amortization_schedule_sample.map((row) => (
                    <tr key={row.year} className="hover:bg-white/[0.02] transition-colors">
                      <td className="py-2 text-zinc-400 font-medium">Year {row.year}</td>
                      <td className="py-2 font-mono text-zinc-200">AED {row.principal_paid.toLocaleString()}</td>
                      <td className="py-2 font-mono text-zinc-200">AED {row.interest_paid.toLocaleString()}</td>
                      <td className="py-2 font-mono text-white font-medium">AED {row.remaining_balance.toLocaleString()}</td>
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
