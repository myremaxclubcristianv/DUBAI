'use client'

import * as React from 'react'
import { calculateAcquisitionCosts, DldMapCategory, DLD_MAP_TARIFFS } from '@/lib/calculators/investment'
import { SourceBadge } from '@/components/ui/source-badge'
import { Scale, CheckCircle2 } from 'lucide-react'

export function AcquisitionCostCalculator() {
  const [purchasePrice, setPurchasePrice] = React.useState<number>(4500000)
  const [transactionType, setTransactionType] = React.useState<'ready' | 'off_plan'>('ready')
  const [isMortgage, setIsMortgage] = React.useState<boolean>(false)
  const [mapCategory, setMapCategory] = React.useState<DldMapCategory>('VILLA_OR_APARTMENT')
  const [ltvPct] = React.useState<number>(75)

  const result = React.useMemo(() => {
    return calculateAcquisitionCosts(purchasePrice, isMortgage, ltvPct, 'apartment', 2.0, mapCategory, transactionType)
  }, [purchasePrice, isMortgage, ltvPct, mapCategory, transactionType])

  return (
    <div className="bg-white rounded-3xl border border-black/10 overflow-hidden shadow-sm">
      <div className="p-6 sm:p-8 border-b border-black/10 flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-white">
        <div>
          <div className="flex items-center gap-2">
            <Scale className="h-4 w-4 text-accent" />
            <h2 className="text-xl sm:text-2xl font-extrabold text-[#1d1d1f] tracking-tight">Statutory Acquisition Cost Center</h2>
          </div>
          <p className="text-xs text-[#6e6e73] mt-1">
            Itemized breakdown of Dubai Land Department transfer fees, map tariffs, trustee charges, VAT, and mortgage registration.
          </p>
        </div>
        <SourceBadge
          status="DLD OFFICIAL DATA"
          sourceName={transactionType === 'off_plan' ? 'Dubai Law No. 13 of 2008 (Oqood)' : 'Law No. 7/2006 & Res. 30/2013'}
        />
      </div>

      <div className="p-6 sm:p-8 space-y-6">
        {/* Controls: Price, Transaction Type, Mortgage toggle, Map Category */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4 bg-white p-5 rounded-2xl border border-black/5">
          <div className="md:col-span-4">
            <div className="flex justify-between text-xs mb-2">
              <label className="font-semibold text-[#1d1d1f]">Agreed Purchase Price</label>
              <span className="font-mono text-accent font-bold">AED {purchasePrice.toLocaleString()}</span>
            </div>
            <input
              type="range"
              min={500000}
              max={40000000}
              step={50000}
              value={purchasePrice}
              onChange={(e) => setPurchasePrice(Number(e.target.value))}
              className="w-full accent-[#1d1d1f] bg-black/10 h-1.5 rounded-lg cursor-pointer appearance-none"
            />
          </div>

          <div className="md:col-span-3">
            <label className="block text-xs font-semibold text-[#1d1d1f] mb-2">Transaction Type</label>
            <div className="flex items-center gap-1.5">
              <button
                type="button"
                onClick={() => setTransactionType('ready')}
                className={`flex-1 px-2.5 py-2 text-xs font-semibold rounded-xl border transition-all cursor-pointer ${
                  transactionType === 'ready'
                    ? 'bg-[#1d1d1f] text-white border-black shadow-xs'
                    : 'bg-white text-[#6e6e73] border-black/10 hover:text-[#1d1d1f]'
                }`}
              >
                Ready Resale
              </button>
              <button
                type="button"
                onClick={() => setTransactionType('off_plan')}
                className={`flex-1 px-2.5 py-2 text-xs font-semibold rounded-xl border transition-all cursor-pointer ${
                  transactionType === 'off_plan'
                    ? 'bg-[#1d1d1f] text-white border-black shadow-xs'
                    : 'bg-white text-[#6e6e73] border-black/10 hover:text-[#1d1d1f]'
                }`}
              >
                Off-Plan (Oqood)
              </button>
            </div>
          </div>

          <div className="md:col-span-3">
            <label className="block text-xs font-semibold text-[#1d1d1f] mb-2">
              DLD Site Plan / Map Tariff
            </label>
            {transactionType === 'off_plan' ? (
              <div className="px-3 py-2 bg-slate-50 border border-black/5 rounded-xl text-[11px] text-[#6e6e73] italic">
                N/A (Covered by Oqood certificate)
              </div>
            ) : (
              <select
                value={mapCategory}
                onChange={(e) => setMapCategory(e.target.value as DldMapCategory)}
                className="w-full px-3.5 py-2 bg-white border border-black/10 rounded-xl text-xs text-[#1d1d1f] focus:outline-none focus:border-accent transition-colors font-medium cursor-pointer"
              >
                <option value="VILLA_OR_APARTMENT">{DLD_MAP_TARIFFS.VILLA_OR_APARTMENT.label}</option>
                <option value="UNIFIED_DUBAI_MUNICIPALITY">{DLD_MAP_TARIFFS.UNIFIED_DUBAI_MUNICIPALITY.label}</option>
                <option value="LAND_OUTSIDE_DUBAI_MUNICIPALITY">{DLD_MAP_TARIFFS.LAND_OUTSIDE_DUBAI_MUNICIPALITY.label}</option>
              </select>
            )}
          </div>

          <div className="md:col-span-2 flex flex-col justify-center space-y-2">
            <label className="text-xs font-semibold text-[#1d1d1f]">Funding</label>
            <div className="flex items-center gap-1.5">
              <button
                type="button"
                onClick={() => setIsMortgage(false)}
                className={`flex-1 px-2.5 py-2 text-xs font-semibold rounded-xl border transition-all cursor-pointer ${
                  !isMortgage
                    ? 'bg-[#1d1d1f] text-white border-black shadow-xs'
                    : 'bg-white text-[#6e6e73] border-black/10 hover:text-[#1d1d1f]'
                }`}
              >
                Cash
              </button>
              <button
                type="button"
                onClick={() => setIsMortgage(true)}
                className={`flex-1 px-2.5 py-2 text-xs font-semibold rounded-xl border transition-all cursor-pointer ${
                  isMortgage
                    ? 'bg-[#1d1d1f] text-white border-black shadow-xs'
                    : 'bg-white text-[#6e6e73] border-black/10 hover:text-[#1d1d1f]'
                }`}
              >
                Mortgage
              </button>
            </div>
          </div>
        </div>

        {/* Summary Metric Cards: Distinguishing Statutory from Commercial & VAT */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 text-xs">
          <div className="p-4 bg-emerald-50/60 border border-emerald-200 rounded-2xl space-y-1">
            <span className="text-[10px] font-mono uppercase tracking-wider text-emerald-800 font-bold block">
              1. Mandatory DLD Tariffs
            </span>
            <div className="text-xl font-bold font-mono text-emerald-950">
              AED {result.statutory_government_dld_total.toLocaleString()}
            </div>
            <p className="text-[10px] text-emerald-800 leading-snug">
              Law No. 7/2006. Exempt from UAE VAT under Federal Decree-Law No. 8/2017.
            </p>
          </div>

          <div className="p-4 bg-blue-50/60 border border-blue-200 rounded-2xl space-y-1">
            <span className="text-[10px] font-mono uppercase tracking-wider text-blue-800 font-bold block">
              2. Regulated Trustee Partner
            </span>
            <div className="text-xl font-bold font-mono text-blue-950">
              AED {result.regulated_trustee_total.toLocaleString()}
            </div>
            <p className="text-[10px] text-blue-800 leading-snug">
              AED {result.trustee_fee_base.toLocaleString()} base + AED {result.trustee_vat.toLocaleString()} (5% VAT).
            </p>
          </div>

          <div className="p-4 bg-purple-50/60 border border-purple-200 rounded-2xl space-y-1">
            <span className="text-[10px] font-mono uppercase tracking-wider text-purple-800 font-bold block">
              3. Commercial Market Practice
            </span>
            <div className="text-xl font-bold font-mono text-purple-950">
              AED {result.commercial_third_party_total.toLocaleString()}
            </div>
            <p className="text-[10px] text-purple-800 leading-snug">
              Brokerage (2% + VAT) &amp; Bank fees. Negotiable commercial costs, not taxes.
            </p>
          </div>

          <div className="p-4 bg-amber-50/60 border border-amber-200 rounded-2xl space-y-1">
            <span className="text-[10px] font-mono uppercase tracking-wider text-amber-800 font-bold block">
              4. Total Itemized 5% VAT
            </span>
            <div className="text-xl font-bold font-mono text-amber-950">
              AED {result.total_vat_component.toLocaleString()}
            </div>
            <p className="text-[10px] text-amber-800 leading-snug">
              Applicable strictly to trustee, agency &amp; banking services (0% on DLD).
            </p>
          </div>
        </div>

        {/* Itemized Table */}
        <div className="overflow-x-auto rounded-2xl border border-black/10 shadow-sm">
          <table className="w-full text-left text-xs">
            <thead className="bg-white border-b border-black/10">
              <tr>
                <th className="py-3 px-4 font-semibold text-[#1d1d1f]">Fee Component &amp; Assumptions</th>
                <th className="py-3 px-4 font-semibold text-[#1d1d1f]">Regulatory Classification</th>
                <th className="py-3 px-4 font-semibold text-[#1d1d1f]">Official Statutory Citation</th>
                <th className="py-3 px-4 font-semibold text-[#1d1d1f] text-right">Amount (AED)</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-black/5 bg-white">
              {result.line_items.map((item, idx) => (
                <tr key={idx} className="hover:bg-slate-50/50 transition-colors">
                  <td className="py-3 px-4 text-[#1d1d1f] space-y-0.5">
                    <div className="font-semibold flex items-center gap-1.5">
                      <CheckCircle2 className="h-3.5 w-3.5 text-emerald-600 shrink-0" />
                      <span>{item.label}</span>
                    </div>
                    {item.assumptions && (
                      <p className="text-[10px] text-[#6e6e73] font-sans pl-5 leading-snug">
                        {item.assumptions}
                      </p>
                    )}
                  </td>
                  <td className="py-3 px-4 whitespace-nowrap">
                    <span
                      className={`px-2 py-0.5 rounded-full text-[10px] font-mono font-bold ${
                        item.regulatory_tier === 'MANDATORY_STATUTORY'
                          ? 'bg-emerald-50 text-emerald-800 border border-emerald-200'
                          : item.regulatory_tier === 'REGULATED_PARTNER'
                          ? 'bg-blue-50 text-blue-800 border border-blue-200'
                          : 'bg-purple-50 text-purple-800 border border-purple-200'
                      }`}
                    >
                      {item.regulatory_tier === 'MANDATORY_STATUTORY'
                        ? 'Mandatory Statutory'
                        : item.regulatory_tier === 'REGULATED_PARTNER'
                        ? 'Regulated Partner'
                        : 'Commercial Practice'}
                    </span>
                    {item.vat_amount > 0 && (
                      <span className="block text-[9px] font-mono text-amber-800 mt-0.5">
                        Includes AED {item.vat_amount.toLocaleString()} VAT
                      </span>
                    )}
                  </td>
                  <td className="py-3 px-4 text-[#6e6e73] text-[11px] max-w-xs">{item.legal_source}</td>
                  <td className="py-3 px-4 font-mono font-bold text-[#1d1d1f] text-right tabular-nums">
                    AED {item.amount.toLocaleString(undefined, { minimumFractionDigits: 0, maximumFractionDigits: 2 })}
                  </td>
                </tr>
              ))}
            </tbody>
            <tfoot className="bg-white font-semibold text-sm border-t border-black/10">
              <tr>
                <td colSpan={3} className="py-3 px-4 text-[#6e6e73]">
                  Total Estimated Acquisition Outlay (Statutory Fees + Commercial Costs):
                </td>
                <td className="py-3 px-4 font-mono text-right text-accent tabular-nums font-bold">
                  AED {result.total_statutory_fees.toLocaleString(undefined, { minimumFractionDigits: 0, maximumFractionDigits: 2 })}
                  <span className="text-[11px] text-[#6e6e73] block font-normal">
                    ({result.fees_as_percentage_of_price.toFixed(2)}% of purchase price)
                  </span>
                </td>
              </tr>
              <tr className="bg-white border-t border-black/10">
                <td colSpan={3} className="py-4 px-4 text-base font-extrabold text-[#1d1d1f]">
                  Total Estimated Capital Outlay (Agreed Price + All Acquisition Costs):
                </td>
                <td className="py-4 px-4 font-mono text-lg font-extrabold text-right text-[#1d1d1f] tabular-nums">
                  AED {result.total_acquisition_cost.toLocaleString(undefined, { minimumFractionDigits: 0, maximumFractionDigits: 2 })}
                </td>
              </tr>
            </tfoot>
          </table>
        </div>

        {/* Statutory & Customary Clarification Note */}
        <p className="text-[11px] text-[#6e6e73] leading-relaxed bg-white p-4 rounded-2xl border border-black/5">
          <strong className="text-[#1d1d1f]">Regulatory Transparency:</strong> Exact applicable fees depend on transaction type, contract covenants, and DLD service scenario. The statutory DLD property sale registration charge is 4% of transaction value; while the statutory default assumes an equal 2% buyer / 2% seller split unless agreed otherwise, actual allocation is governed contractually in the sales agreement (Form F / MOU) — frequently borne 100% by the buyer in secondary market transactions, or absorbed via developer promotions in off-plan purchases. Map/document tariffs vary by category: AED 100 for land outside Dubai Municipality, AED 225 for the Unified Map under Dubai Municipality, or AED 250 for villas and apartments. Knowledge and innovation fees are AED 10 each where applicable. DLD service-partner charges are AED 4,000 + VAT for sale values of AED 500,000 or more, or AED 2,000 + VAT below AED 500,000. Brokerage, where applicable, is a customary market negotiation and is not a statutory DLD fee.
        </p>
      </div>
    </div>
  )
}
