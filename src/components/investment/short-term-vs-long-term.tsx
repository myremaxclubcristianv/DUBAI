'use client'

import * as React from 'react'
import { SourceBadge } from '@/components/ui/source-badge'
import { Home, Hotel, ShieldCheck, TrendingUp } from 'lucide-react'

export function ShortTermVsLongTermCalculator() {
  const [propertyPrice, setPropertyPrice] = React.useState<number>(3000000)
  
  // Long-Term Assumptions
  const [longTermAnnualRent, setLongTermAnnualRent] = React.useState<number>(210000)
  const [longTermAgencyPct, setLongTermAgencyPct] = React.useState<number>(5)
  const [serviceChargeAnnual, setServiceChargeAnnual] = React.useState<number>(26000)
  const [longTermMaintenancePct, setLongTermMaintenancePct] = React.useState<number>(3)

  // Short-Term Assumptions
  const [averageDailyRate, setAverageDailyRate] = React.useState<number>(950)
  const [occupancyRatePct, setOccupancyRatePct] = React.useState<number>(75)
  const operatorManagementPct = 18
  const dtcmFeeAnnual = 4500 // Permit + Tourism Dirham portion
  const utilitiesWifiAnnual = 18000 // DEWA, Chiller, High-speed Internet
  const turnoverCleaningAnnual = 12000 // Guest turnover, linens, amenities
  const furnishingAmortizationAnnual = 18000 // AED 54k over 3 yrs

  // Long-Term Math
  const ltGross = longTermAnnualRent
  const ltAgencyFee = (ltGross * longTermAgencyPct) / 100
  const ltMaintenance = (ltGross * longTermMaintenancePct) / 100
  const ltTotalExpenses = serviceChargeAnnual + ltAgencyFee + ltMaintenance
  const ltNetOperatingIncome = Math.max(0, ltGross - ltTotalExpenses)
  const ltGrossYield = propertyPrice > 0 ? (ltGross / propertyPrice) * 100 : 0
  const ltNetYield = propertyPrice > 0 ? (ltNetOperatingIncome / propertyPrice) * 100 : 0

  // Short-Term Math
  const bookedNights = Math.round((365 * occupancyRatePct) / 100)
  const stGrossRevenue = bookedNights * averageDailyRate
  const stOperatorFee = (stGrossRevenue * operatorManagementPct) / 100
  const stTotalExpenses =
    serviceChargeAnnual +
    stOperatorFee +
    dtcmFeeAnnual +
    utilitiesWifiAnnual +
    turnoverCleaningAnnual +
    furnishingAmortizationAnnual
  const stNetOperatingIncome = Math.max(0, stGrossRevenue - stTotalExpenses)
  const stGrossYield = propertyPrice > 0 ? (stGrossRevenue / propertyPrice) * 100 : 0
  const stNetYield = propertyPrice > 0 ? (stNetOperatingIncome / propertyPrice) * 100 : 0

  const netDifferenceAed = stNetOperatingIncome - ltNetOperatingIncome
  const yieldDeltaPct = stNetYield - ltNetYield

  return (
    <div className="bg-white rounded-3xl border border-black/10 overflow-hidden shadow-sm">
      <div className="p-6 sm:p-8 border-b border-black/10 flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-white">
        <div>
          <div className="flex items-center gap-2">
            <Hotel className="h-4 w-4 text-accent" />
            <h2 className="text-xl sm:text-2xl font-extrabold text-[#1d1d1f] tracking-tight">
              Short-Term (Holiday Home) vs Long-Term (Ejari) Modeler
            </h2>
          </div>
          <p className="text-xs text-[#6e6e73] mt-1">
            Compares net operating yields accounting for DTCM tourism permits, operator fees, utilities, and turnover costs.
          </p>
        </div>
        <SourceBadge status="CALCULATED" sourceName="DTCM Decree No. 49/2014 & Market Assumptions" />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 divide-y lg:divide-y-0 lg:divide-x divide-black/10">
        
        {/* Controls Column (7 Cols) */}
        <div className="lg:col-span-7 p-6 sm:p-8 space-y-8 bg-white">
          {/* Shared Baseline */}
          <div className="space-y-4">
            <div className="flex justify-between items-center text-xs">
              <span className="font-bold text-[#1d1d1f] uppercase tracking-wider text-[11px]">Asset Valuation</span>
              <span className="font-mono text-accent font-bold">AED {propertyPrice.toLocaleString()}</span>
            </div>
            <input
              type="range"
              min={1000000}
              max={15000000}
              step={100000}
              value={propertyPrice}
              onChange={(e) => setPropertyPrice(Number(e.target.value))}
              className="w-full accent-[#1d1d1f] bg-black/10 h-1.5 rounded-lg cursor-pointer"
            />
            <div className="flex justify-between text-xs font-mono text-[#6e6e73]">
              <label>Building Annual Service Charge (Landlord borne in both):</label>
              <span className="text-[#1d1d1f] font-bold">AED {serviceChargeAnnual.toLocaleString()}</span>
            </div>
            <input
              type="range"
              min={5000}
              max={60000}
              step={1000}
              value={serviceChargeAnnual}
              onChange={(e) => setServiceChargeAnnual(Number(e.target.value))}
              className="w-full accent-[#1d1d1f] bg-black/10 h-1.5 rounded-lg cursor-pointer"
            />
          </div>

          {/* Model Side-by-Side Inputs */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4 border-t border-black/10">
            
            {/* Long-Term Ejari */}
            <div className="space-y-4 p-4 rounded-2xl bg-[#f5f5f7] border border-black/5">
              <div className="flex items-center gap-2">
                <Home className="h-4 w-4 text-slate-800" />
                <span className="text-xs font-bold uppercase tracking-wider text-[#1d1d1f]">Long-Term (1-Year Ejari)</span>
              </div>

              <div>
                <label className="text-[11px] text-[#6e6e73] block mb-1">Annual Contract Rent</label>
                <div className="font-mono text-xs font-bold text-[#1d1d1f] mb-1">AED {longTermAnnualRent.toLocaleString()}</div>
                <input
                  type="range"
                  min={80000}
                  max={800000}
                  step={5000}
                  value={longTermAnnualRent}
                  onChange={(e) => setLongTermAnnualRent(Number(e.target.value))}
                  className="w-full accent-slate-800 bg-black/10 h-1 rounded cursor-pointer"
                />
              </div>

              <div className="grid grid-cols-2 gap-2 text-[11px]">
                <div>
                  <label className="text-[#6e6e73]">Agency Comm. (%)</label>
                  <input
                    type="number"
                    value={longTermAgencyPct}
                    onChange={(e) => setLongTermAgencyPct(Number(e.target.value))}
                    className="w-full mt-1 p-1.5 bg-white border border-black/10 rounded font-mono text-xs"
                  />
                </div>
                <div>
                  <label className="text-[#6e6e73]">Maint. Reserve (%)</label>
                  <input
                    type="number"
                    value={longTermMaintenancePct}
                    onChange={(e) => setLongTermMaintenancePct(Number(e.target.value))}
                    className="w-full mt-1 p-1.5 bg-white border border-black/10 rounded font-mono text-xs"
                  />
                </div>
              </div>
              <p className="text-[10px] text-[#6e6e73] italic">
                *Utilities (DEWA & Internet) are paid directly by the tenant under standard RERA Ejari lease.
              </p>
            </div>

            {/* Short-Term Holiday Home */}
            <div className="space-y-4 p-4 rounded-2xl bg-[#070e1c] text-white">
              <div className="flex items-center gap-2">
                <Hotel className="h-4 w-4 text-emerald-400" />
                <span className="text-xs font-bold uppercase tracking-wider text-white">Short-Term (Holiday Home)</span>
              </div>

              <div>
                <label className="text-[11px] text-slate-300 block mb-1">Average Daily Rate (ADR)</label>
                <div className="font-mono text-xs font-bold text-emerald-400 mb-1">AED {averageDailyRate.toLocaleString()} / night</div>
                <input
                  type="range"
                  min={350}
                  max={3500}
                  step={25}
                  value={averageDailyRate}
                  onChange={(e) => setAverageDailyRate(Number(e.target.value))}
                  className="w-full accent-emerald-400 bg-white/20 h-1 rounded cursor-pointer"
                />
              </div>

              <div>
                <label className="text-[11px] text-slate-300 block mb-1">Occupancy Rate: {occupancyRatePct}% ({bookedNights} nights)</label>
                <input
                  type="range"
                  min={40}
                  max={95}
                  step={1}
                  value={occupancyRatePct}
                  onChange={(e) => setOccupancyRatePct(Number(e.target.value))}
                  className="w-full accent-emerald-400 bg-white/20 h-1 rounded cursor-pointer"
                />
              </div>

              <div className="space-y-2 text-[11px] text-slate-300 pt-2 border-t border-white/10">
                <div className="flex justify-between">
                  <span>Operator Mgmt:</span>
                  <span className="font-mono text-white font-semibold">{operatorManagementPct}% of gross</span>
                </div>
                <div className="flex justify-between">
                  <span>DEWA, Chiller & WiFi:</span>
                  <span className="font-mono text-white font-semibold">AED {utilitiesWifiAnnual.toLocaleString()}</span>
                </div>
                <div className="flex justify-between">
                  <span>DTCM Permit & Tourism fee:</span>
                  <span className="font-mono text-white font-semibold">AED {dtcmFeeAnnual.toLocaleString()}</span>
                </div>
                <div className="flex justify-between">
                  <span>Furnishing Amortization:</span>
                  <span className="font-mono text-white font-semibold">AED {furnishingAmortizationAnnual.toLocaleString()}</span>
                </div>
              </div>
            </div>

          </div>

        </div>

        {/* Results Comparison Column (5 Cols) */}
        <div className="lg:col-span-5 p-6 sm:p-8 bg-[#fbfbfd] flex flex-col justify-between space-y-6">
          <div className="space-y-6">
            <h3 className="text-[11px] font-bold uppercase tracking-widest text-[#6e6e73]">
              Comparative Yield Summary
            </h3>

            {/* Verdict Card */}
            <div className={`p-5 rounded-2xl border ${
              netDifferenceAed >= 0 
                ? 'bg-emerald-50/70 border-emerald-200 text-emerald-950'
                : 'bg-amber-50/70 border-amber-200 text-amber-950'
            }`}>
              <div className="flex items-center gap-2 mb-1.5">
                <TrendingUp className="h-4 w-4" />
                <span className="text-xs font-bold uppercase tracking-wider">
                  {netDifferenceAed >= 0 ? 'Short-Term Generates Higher Net NOI' : 'Long-Term Generates Higher Net NOI'}
                </span>
              </div>
              <div className="text-2xl font-black font-mono tracking-tight">
                {netDifferenceAed >= 0 ? '+' : ''}AED {Math.abs(netDifferenceAed).toLocaleString()} / yr
              </div>
              <div className="text-xs mt-1 font-mono font-medium opacity-90">
                Yield Delta: {yieldDeltaPct >= 0 ? '+' : ''}{yieldDeltaPct.toFixed(2)}% net spread
              </div>
            </div>

            {/* Side by side metric breakdown */}
            <div className="grid grid-cols-2 gap-4">
              <div className="p-4 rounded-xl bg-white border border-black/10">
                <span className="text-[10px] font-bold uppercase tracking-wider text-[#6e6e73] block mb-1">
                  Long-Term Ejari
                </span>
                <div className="text-lg font-bold font-mono text-[#1d1d1f]">
                  AED {Math.round(ltNetOperatingIncome).toLocaleString()}
                </div>
                <div className="text-[11px] font-mono text-emerald-700 mt-0.5">
                  {ltNetYield.toFixed(2)}% Net Yield
                </div>
                <div className="text-[10px] text-[#6e6e73] mt-2 pt-2 border-t border-black/5 space-y-0.5">
                  <div>Gross: AED {ltGross.toLocaleString()}</div>
                  <div>Expenses: AED {ltTotalExpenses.toLocaleString()}</div>
                  <div>Gross Yield: {ltGrossYield.toFixed(2)}%</div>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-white border border-black/10">
                <span className="text-[10px] font-bold uppercase tracking-wider text-[#6e6e73] block mb-1">
                  Short-Term Holiday
                </span>
                <div className="text-lg font-bold font-mono text-[#1d1d1f]">
                  AED {Math.round(stNetOperatingIncome).toLocaleString()}
                </div>
                <div className="text-[11px] font-mono text-emerald-700 mt-0.5">
                  {stNetYield.toFixed(2)}% Net Yield
                </div>
                <div className="text-[10px] text-[#6e6e73] mt-2 pt-2 border-t border-black/5 space-y-0.5">
                  <div>Gross: AED {stGrossRevenue.toLocaleString()}</div>
                  <div>Expenses: AED {stTotalExpenses.toLocaleString()}</div>
                  <div>Gross Yield: {stGrossYield.toFixed(2)}%</div>
                </div>
              </div>
            </div>

            {/* Regulatory Notice */}
            <div className="p-4 rounded-xl bg-white border border-black/10 text-[11px] text-[#6e6e73] leading-relaxed space-y-1.5">
              <div className="flex items-center gap-1.5 font-semibold text-[#1d1d1f]">
                <ShieldCheck className="h-3.5 w-3.5 text-accent" />
                <span>Statutory Compliance Notice</span>
              </div>
              <p>
                Short-term holiday home rentals require explicit licensing under DTCM (Dubai Economy &amp; Tourism) Executive Council Resolution No. 49 of 2014. Landlords must register the unit and ensure compliance with building strata rules.
              </p>
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}
