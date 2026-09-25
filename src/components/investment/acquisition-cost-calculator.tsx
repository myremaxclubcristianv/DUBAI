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
    <div className="bg-white rounded-xl border border-border overflow-hidden">
      <div className="p-6 border-b border-border flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2">
            <Scale className="h-5 w-5 text-accent" />
            <h2 className="text-xl font-bold text-text-primary">Statutory Acquisition Cost Center</h2>
          </div>
          <p className="text-xs text-text-secondary mt-1">
            Itemized breakdown of Dubai Land Department transfer fees, map tariffs, trustee charges, VAT, and mortgage registration.
          </p>
        </div>
        <SourceBadge status="DLD OFFICIAL DATA" sourceName="Law No. 7 of 2006 & Resolution No. 30 of 2013" />
      </div>

      <div className="p-6 space-y-6">
        {/* Controls: Price, Mortgage toggle, Map Category */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4 bg-surface-subtle p-4 rounded-lg border border-border">
          <div className="md:col-span-5">
            <div className="flex justify-between text-xs mb-1.5">
              <label className="font-semibold text-text-primary">Agreed Purchase Price (AED)</label>
              <span className="font-mono text-accent font-bold">AED {purchasePrice.toLocaleString()}</span>
            </div>
            <input
              type="range"
              min={500000}
              max={40000000}
              step={50000}
              value={purchasePrice}
              onChange={(e) => setPurchasePrice(Number(e.target.value))}
              className="w-full accent-accent cursor-pointer"
            />
          </div>

          <div className="md:col-span-4">
            <label className="block text-xs font-semibold text-text-primary mb-1.5">
              DLD Site Plan / Map Tariff Category
            </label>
            <select
              value={mapCategory}
              onChange={(e) => setMapCategory(e.target.value as DldMapCategory)}
              className="w-full px-2.5 py-1.5 bg-white border border-border rounded-md text-xs text-text-primary focus:outline-none focus:border-accent"
            >
              <option value="VILLA_OR_APARTMENT">{DLD_MAP_TARIFFS.VILLA_OR_APARTMENT.label}</option>
              <option value="UNIFIED_DUBAI_MUNICIPALITY">{DLD_MAP_TARIFFS.UNIFIED_DUBAI_MUNICIPALITY.label}</option>
              <option value="LAND_OUTSIDE_DUBAI_MUNICIPALITY">{DLD_MAP_TARIFFS.LAND_OUTSIDE_DUBAI_MUNICIPALITY.label}</option>
            </select>
          </div>

          <div className="md:col-span-3 flex flex-col justify-center space-y-1.5">
            <label className="text-xs font-semibold text-text-primary">Purchase Method</label>
            <div className="flex items-center gap-2">
              <button
                onClick={() => setIsMortgage(false)}
                className={`flex-1 px-2.5 py-1.5 text-xs font-medium rounded border transition-colors ${
                  !isMortgage
                    ? 'bg-text-primary text-white border-text-primary'
                    : 'bg-white text-text-secondary border-border hover:bg-surface'
                }`}
              >
                Cash
              </button>
              <button
                onClick={() => setIsMortgage(true)}
                className={`flex-1 px-2.5 py-1.5 text-xs font-medium rounded border transition-colors ${
                  isMortgage
                    ? 'bg-text-primary text-white border-text-primary'
                    : 'bg-white text-text-secondary border-border hover:bg-surface'
                }`}
              >
                Mortgage
              </button>
            </div>
          </div>
        </div>

        {/* Itemized Table */}
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs border border-border rounded-lg overflow-hidden">
            <thead className="bg-surface border-b border-border">
              <tr>
                <th className="py-3 px-4 font-semibold text-text-primary">Fee Component</th>
                <th className="py-3 px-4 font-semibold text-text-primary">Authority / Category</th>
                <th className="py-3 px-4 font-semibold text-text-primary">Statutory Legal Basis</th>
                <th className="py-3 px-4 font-semibold text-text-primary text-right">Amount (AED)</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border">
              {result.line_items.map((item, idx) => (
                <tr key={idx} className="hover:bg-surface-elevated/50">
                  <td className="py-3 px-4 font-medium text-text-primary flex items-center gap-2">
                    <CheckCircle2 className="h-3.5 w-3.5 text-emerald-600 shrink-0" />
                    <span>{item.label}</span>
                  </td>
                  <td className="py-3 px-4">
                    <span className="px-2 py-0.5 rounded text-[10px] font-semibold bg-surface-elevated border border-border text-text-secondary">
                      {item.category}
                    </span>
                  </td>
                  <td className="py-3 px-4 text-text-muted text-[11px] max-w-xs">{item.legal_source}</td>
                  <td className="py-3 px-4 font-mono font-semibold text-text-primary text-right tabular-nums">
                    AED {item.amount.toLocaleString(undefined, { minimumFractionDigits: 0, maximumFractionDigits: 2 })}
                  </td>
                </tr>
              ))}
            </tbody>
            <tfoot className="bg-surface font-semibold text-sm border-t border-border">
              <tr>
                <td colSpan={3} className="py-3 px-4 text-text-primary">
                  Estimated Buyer Acquisition Fees:
                </td>
                <td className="py-3 px-4 font-mono text-right text-accent tabular-nums">
                  AED {result.total_statutory_fees.toLocaleString(undefined, { minimumFractionDigits: 0, maximumFractionDigits: 2 })}
                  <span className="text-[11px] text-text-muted block font-normal">
                    ({result.fees_as_percentage_of_price.toFixed(2)}% of purchase price)
                  </span>
                </td>
              </tr>
              <tr className="bg-accent-subtle/40 border-t border-accent-border">
                <td colSpan={3} className="py-4 px-4 text-base font-bold text-text-primary">
                  Estimated Buyer Acquisition Costs (Price + Estimated Fees):
                </td>
                <td className="py-4 px-4 font-mono text-base font-bold text-right text-text-primary tabular-nums">
                  AED {result.total_acquisition_cost.toLocaleString(undefined, { minimumFractionDigits: 0, maximumFractionDigits: 2 })}
                </td>
              </tr>
            </tfoot>
          </table>
        </div>

        {/* Statutory & Customary Clarification Note */}
        <p className="text-[11px] text-text-muted leading-relaxed bg-surface-subtle p-3 rounded-lg border border-border">
          <strong>Regulatory Transparency:</strong> Exact applicable fees depend on transaction type and DLD service scenario. DLD property sale registration charges are 2% of the sale value for the buyer and 2% for the seller, for a combined 4% transfer charge. Map/document tariffs vary by category: AED 100 for land outside Dubai Municipality, AED 225 for the Unified Map under Dubai Municipality, or AED 250 for villas and apartments. Knowledge and innovation fees are AED 10 each where applicable. DLD service-partner charges are AED 4,000 + VAT for sale values of AED 500,000 or more, or AED 2,000 + VAT below AED 500,000. Brokerage, where applicable, is a customary market assumption and is not a statutory DLD fee.
        </p>
      </div>
    </div>
  )
}
