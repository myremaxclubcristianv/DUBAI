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
    <div className="bg-white rounded-3xl border border-black/10 overflow-hidden shadow-sm">
      <div className="p-6 sm:p-8 border-b border-black/10 flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-[#f5f5f7]">
        <div>
          <div className="flex items-center gap-2">
            <DollarSign className="h-4 w-4 text-accent" />
            <h2 className="text-xl sm:text-2xl font-extrabold text-[#1d1d1f] tracking-tight">UAE Mortgage & Amortization Engine</h2>
          </div>
          <p className="text-xs text-[#6e6e73] mt-1">
            Calculates monthly repayments, interest schedules, and upfront cash outlay adhering to Central Bank of the UAE LTV caps.
          </p>
        </div>
        <SourceBadge status="OFFICIAL SOURCE" sourceName="Central Bank of the UAE LTV Rules" />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-0 divide-y lg:divide-y-0 lg:divide-x divide-black/10">
        {/* Inputs */}
        <div className="lg:col-span-6 p-6 sm:p-8 space-y-6 bg-white">
          <div className="space-y-5">
            <div>
              <label className="block text-xs font-semibold text-[#1d1d1f] mb-1.5">
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
                className="w-full px-3.5 py-2.5 bg-[#f5f5f7] border border-black/10 rounded-xl text-xs text-[#1d1d1f] focus:outline-none focus:border-accent transition-colors font-medium cursor-pointer"
              >
                <option value="EXPAT_FIRST_HOME">Expatriate Resident (First Home — Max 80% LTV)</option>
                <option value="UAE_NATIONAL">UAE National (First Home — Max 85% LTV)</option>
                <option value="EXPAT_SUBSEQUENT">Expatriate / National (Second/Investment Property — Max 60-65% LTV)</option>
                <option value="NON_RESIDENT">Non-Resident International Buyer (Max 50-60% LTV)</option>
              </select>
            </div>

            <div>
              <div className="flex justify-between text-xs mb-2">
                <label className="font-semibold text-[#1d1d1f]">Property Purchase Price</label>
                <span className="font-mono text-accent font-bold">AED {purchasePrice.toLocaleString()}</span>
              </div>
              <input
                type="range"
                min={500000}
                max={30000000}
                step={50000}
                value={purchasePrice}
                onChange={(e) => setPurchasePrice(Number(e.target.value))}
                className="w-full accent-[#1d1d1f] bg-black/10 h-1.5 rounded-lg cursor-pointer appearance-none"
              />
            </div>

            <div className="grid grid-cols-3 gap-3">
              <div>
                <label className="block text-xs font-semibold text-[#1d1d1f] mb-1.5">
                  Down Payment (%)
                </label>
                <input
                  type="number"
                  min={15}
                  max={90}
                  value={downPaymentPct}
                  onChange={(e) => setDownPaymentPct(Number(e.target.value))}
                  className="w-full px-3.5 py-2.5 bg-[#f5f5f7] border border-black/10 rounded-xl text-xs text-[#1d1d1f] focus:outline-none focus:border-accent transition-colors font-mono"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-[#1d1d1f] mb-1.5">
                  Interest Rate (% p.a.)
                </label>
                <input
                  type="number"
                  step="0.05"
                  min={1}
                  max={15}
                  value={interestRate}
                  onChange={(e) => setInterestRate(Number(e.target.value))}
                  className="w-full px-3.5 py-2.5 bg-[#f5f5f7] border border-black/10 rounded-xl text-xs text-[#1d1d1f] focus:outline-none focus:border-accent transition-colors font-mono"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-[#1d1d1f] mb-1.5">
                  Tenure (Years)
                </label>
                <input
                  type="number"
                  min={1}
                  max={25}
                  value={tenureYears}
                  onChange={(e) => setTenureYears(Number(e.target.value))}
                  className="w-full px-3.5 py-2.5 bg-[#f5f5f7] border border-black/10 rounded-xl text-xs text-[#1d1d1f] focus:outline-none focus:border-accent transition-colors font-mono"
                />
              </div>
            </div>
          </div>

          <div className="p-4 bg-[#f5f5f7] rounded-2xl border border-black/5 text-xs text-[#6e6e73] space-y-1.5">
            <div className="flex items-center gap-1.5 font-semibold text-[#1d1d1f]">
              <ShieldCheck className="h-3.5 w-3.5 text-emerald-600" />
              <span>Central Bank Regulatory Ceiling:</span>
            </div>
            <p className="text-[11px] leading-relaxed">{result.ltv_ceiling_info}</p>
          </div>
        </div>

        {/* Outputs */}
        <div className="lg:col-span-6 p-6 sm:p-8 space-y-6 bg-[#f5f5f7]">
          <h3 className="text-[11px] font-bold uppercase tracking-widest text-[#6e6e73]">
            Repayment & Capital Breakdown
          </h3>

          <div className="p-6 bg-white rounded-2xl border border-black/10 space-y-1 shadow-sm">
            <span className="text-xs font-medium text-[#6e6e73]">Estimated Monthly Mortgage Payment</span>
            <div className="text-3xl sm:text-4xl font-extrabold text-[#1d1d1f] font-mono tracking-tight pt-1">
              AED {result.monthly_payment_aed.toLocaleString()} <span className="text-sm font-normal text-[#6e6e73] font-sans">/ month</span>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-3 text-xs">
            <div className="p-4 bg-white rounded-2xl border border-black/10 shadow-sm">
              <span className="text-[#6e6e73] block text-[11px]">Loan Principal:</span>
              <div className="font-mono font-bold text-[#1d1d1f] text-sm mt-1">
                AED {result.loan_amount.toLocaleString()}
              </div>
            </div>

            <div className="p-4 bg-white rounded-2xl border border-black/10 shadow-sm">
              <span className="text-[#6e6e73] block text-[11px]">Total Interest Payable:</span>
              <div className="font-mono font-bold text-[#1d1d1f] text-sm mt-1">
                AED {result.total_interest_payable.toLocaleString()}
              </div>
            </div>

            <div className="p-4 bg-white rounded-2xl border border-black/10 shadow-sm">
              <span className="text-[#6e6e73] block text-[11px]">Down Payment Amount:</span>
              <div className="font-mono font-bold text-[#1d1d1f] text-sm mt-1">
                AED {result.down_payment_aed.toLocaleString()}
              </div>
            </div>

            <div className="p-4 bg-white rounded-2xl border border-[#c9a962]/40 shadow-sm">
              <span className="text-accent font-bold block text-[11px]">Total Initial Cash Outlay:</span>
              <div className="font-mono font-bold text-accent text-sm mt-1">
                AED {result.initial_equity_outlay.toLocaleString()}
              </div>
              <span className="text-[10px] text-[#6e6e73] mt-1 block">Down payment + estimated fees</span>
            </div>
          </div>

          {/* Sample Amortization Timeline */}
          <div className="pt-2">
            <span className="text-[10px] font-bold uppercase tracking-widest text-[#6e6e73] block mb-3">
              Principal vs Balance Amortization Sample
            </span>
            <div className="overflow-x-auto bg-white rounded-2xl border border-black/10 p-3 shadow-sm">
              <table className="w-full text-left text-xs">
                <thead>
                  <tr className="border-b border-black/10 text-[#6e6e73]">
                    <th className="pb-2 font-medium">Year</th>
                    <th className="pb-2 font-medium">Principal Paid</th>
                    <th className="pb-2 font-medium">Interest Paid</th>
                    <th className="pb-2 font-medium">Ending Balance</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-black/5">
                  {result.amortization_schedule_sample.map((row) => (
                    <tr key={row.year} className="hover:bg-[#f5f5f7] transition-colors">
                      <td className="py-2 text-[#6e6e73] font-medium">Year {row.year}</td>
                      <td className="py-2 font-mono text-[#1d1d1f]">AED {row.principal_paid.toLocaleString()}</td>
                      <td className="py-2 font-mono text-[#1d1d1f]">AED {row.interest_paid.toLocaleString()}</td>
                      <td className="py-2 font-mono text-[#1d1d1f] font-bold">AED {row.remaining_balance.toLocaleString()}</td>
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
