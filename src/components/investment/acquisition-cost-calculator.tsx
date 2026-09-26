'use client'

import * as React from 'react'
import { calculateAcquisitionCosts, DldMapCategory, DLD_MAP_TARIFFS } from '@/lib/calculators/investment'
import { SourceBadge } from '@/components/ui/source-badge'
import { Scale, CheckCircle2 } from 'lucide-react'

export function AcquisitionCostCalculator() {
  const [purchasePrice, setPurchasePrice] = React.useState<number>(4500000)
  const [isMortgage, setIsMortgage] = React.useState<boolean>(false)
  const [mapCategory, setMapCategory] = React.useState<DldMapCategory>('VILLA_OR_APARTMENT')
  const [ltvPct] = React.useState<number>(75)

  const result = React.useMemo(() => {
    return calculateAcquisitionCosts(purchasePrice, isMortgage, ltvPct, 'apartment', 2.0, mapCategory)
  }, [purchasePrice, isMortgage, ltvPct, mapCategory])

  return (
    <div className="bg-[#0c0c0e] rounded-3xl border border-white/10 overflow-hidden shadow-2xl">
      <div className="p-6 sm:p-8 border-b border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-gradient-to-b from-white/[0.04] to-transparent">
        <div>
          <div className="flex items-center gap-2">
            <Scale className="h-4 w-4 text-accent" />
            <h2 className="text-xl sm:text-2xl font-semibold text-white tracking-tight">Statutory Acquisition Cost Center</h2>
          </div>
          <p className="text-xs text-zinc-400 mt-1">
            Itemized breakdown of Dubai Land Department transfer fees, map tariffs, trustee charges, VAT, and mortgage registration.
          </p>
        </div>
        <SourceBadge status="DLD OFFICIAL DATA" sourceName="Law No. 7 of 2006 & Resolution No. 30 of 2013" />
      </div>

      <div className="p-6 sm:p-8 space-y-6">
        {/* Controls: Price, Mortgage toggle, Map Category */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4 bg-white/[0.02] p-5 rounded-2xl border border-white/10">
          <div className="md:col-span-5">
            <div className="flex justify-between text-xs mb-2">
              <label className="font-medium text-zinc-300">Agreed Purchase Price</label>
              <span className="font-mono text-accent font-semibold">AED {purchasePrice.toLocaleString()}</span>
            </div>
            <input
              type="range"
              min={500000}
              max={40000000}
              step={50000}
              value={purchasePrice}
              onChange={(e) => setPurchasePrice(Number(e.target.value))}
              className="w-full accent-[#d4af37] bg-white/10 h-1.5 rounded-lg cursor-pointer appearance-none"
            />
          </div>

          <div className="md:col-span-4">
            <label className="block text-xs font-medium text-zinc-400 mb-2">
              DLD Site Plan / Map Tariff Category
            </label>
            <select
              value={mapCategory}
              onChange={(e) => setMapCategory(e.target.value as DldMapCategory)}
              className="w-full px-3.5 py-2 bg-white/[0.04] border border-white/10 rounded-xl text-xs text-white focus:outline-none focus:border-accent/60 transition-colors font-medium"
            >
              <option value="VILLA_OR_APARTMENT" className="bg-[#141418] text-white">{DLD_MAP_TARIFFS.VILLA_OR_APARTMENT.label}</option>
              <option value="UNIFIED_DUBAI_MUNICIPALITY" className="bg-[#141418] text-white">{DLD_MAP_TARIFFS.UNIFIED_DUBAI_MUNICIPALITY.label}</option>
              <option value="LAND_OUTSIDE_DUBAI_MUNICIPALITY" className="bg-[#141418] text-white">{DLD_MAP_TARIFFS.LAND_OUTSIDE_DUBAI_MUNICIPALITY.label}</option>
            </select>
          </div>

          <div className="md:col-span-3 flex flex-col justify-center space-y-2">
            <label className="text-xs font-medium text-zinc-400">Purchase Method</label>
            <div className="flex items-center gap-2">
              <button
                onClick={() => setIsMortgage(false)}
                className={`flex-1 px-3 py-2 text-xs font-medium rounded-xl border transition-all cursor-pointer ${
                  !isMortgage
                    ? 'bg-white text-black border-white font-semibold'
                    : 'bg-white/[0.04] text-zinc-400 border-white/10 hover:bg-white/[0.08] hover:text-white'
                }`}
              >
                Cash
              </button>
              <button
                onClick={() => setIsMortgage(true)}
                className={`flex-1 px-3 py-2 text-xs font-medium rounded-xl border transition-all cursor-pointer ${
                  isMortgage
                    ? 'bg-white text-black border-white font-semibold'
                    : 'bg-white/[0.04] text-zinc-400 border-white/10 hover:bg-white/[0.08] hover:text-white'
                }`}
              >
                Mortgage
              </button>
            </div>
          </div>
        </div>

        {/* Itemized Table */}
        <div className="overflow-x-auto rounded-2xl border border-white/10">
          <table className="w-full text-left text-xs">
            <thead className="bg-white/[0.03] border-b border-white/10">
              <tr>
                <th className="py-3 px-4 font-semibold text-zinc-300">Fee Component</th>
                <th className="py-3 px-4 font-semibold text-zinc-300">Authority / Category</th>
                <th className="py-3 px-4 font-semibold text-zinc-300">Statutory Legal Basis</th>
                <th className="py-3 px-4 font-semibold text-zinc-300 text-right">Amount (AED)</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/5 bg-[#0c0c0e]">
              {result.line_items.map((item, idx) => (
                <tr key={idx} className="hover:bg-white/[0.02] transition-colors">
                  <td className="py-3 px-4 font-medium text-white flex items-center gap-2">
                    <CheckCircle2 className="h-3.5 w-3.5 text-accent shrink-0" />
                    <span>{item.label}</span>
                  </td>
                  <td className="py-3 px-4">
                    <span className="px-2 py-0.5 rounded-full text-[10px] font-medium bg-white/[0.05] border border-white/10 text-zinc-300 font-mono">
                      {item.category}
                    </span>
                  </td>
                  <td className="py-3 px-4 text-zinc-400 text-[11px] max-w-xs">{item.legal_source}</td>
                  <td className="py-3 px-4 font-mono font-medium text-white text-right tabular-nums">
                    AED {item.amount.toLocaleString(undefined, { minimumFractionDigits: 0, maximumFractionDigits: 2 })}
                  </td>
                </tr>
              ))}
            </tbody>
            <tfoot className="bg-white/[0.02] font-semibold text-sm border-t border-white/10">
              <tr>
                <td colSpan={3} className="py-3 px-4 text-zinc-300">
                  Estimated Buyer Acquisition Fees:
                </td>
                <td className="py-3 px-4 font-mono text-right text-accent tabular-nums">
                  AED {result.total_statutory_fees.toLocaleString(undefined, { minimumFractionDigits: 0, maximumFractionDigits: 2 })}
                  <span className="text-[11px] text-zinc-400 block font-normal">
                    ({result.fees_as_percentage_of_price.toFixed(2)}% of purchase price)
                  </span>
                </td>
              </tr>
              <tr className="bg-accent/10 border-t border-accent/20">
                <td colSpan={3} className="py-4 px-4 text-base font-medium text-white">
                  Estimated Buyer Acquisition Costs (Price + Estimated Fees):
                </td>
                <td className="py-4 px-4 font-mono text-lg font-semibold text-right text-accent tabular-nums">
                  AED {result.total_acquisition_cost.toLocaleString(undefined, { minimumFractionDigits: 0, maximumFractionDigits: 2 })}
                </td>
              </tr>
            </tfoot>
          </table>
        </div>

        {/* Statutory & Customary Clarification Note */}
        <p className="text-[11px] text-zinc-400 leading-relaxed bg-white/[0.02] p-4 rounded-2xl border border-white/10">
          <strong className="text-zinc-200">Regulatory Transparency:</strong> Exact applicable fees depend on transaction type and DLD service scenario. DLD property sale registration charges are 2% of the sale value for the buyer and 2% for the seller, for a combined 4% transfer charge. Map/document tariffs vary by category: AED 100 for land outside Dubai Municipality, AED 225 for the Unified Map under Dubai Municipality, or AED 250 for villas and apartments. Knowledge and innovation fees are AED 10 each where applicable. DLD service-partner charges are AED 4,000 + VAT for sale values of AED 500,000 or more, or AED 2,000 + VAT below AED 500,000. Brokerage, where applicable, is a customary market assumption and is not a statutory DLD fee.
        </p>
      </div>
    </div>
  )
}
