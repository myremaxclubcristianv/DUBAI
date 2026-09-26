'use client'

import * as React from 'react'
import { calculateYieldAnalysis } from '@/lib/calculators/investment'
import { SourceBadge } from '@/components/ui/source-badge'
import { Percent, Info, RotateCcw } from 'lucide-react'

export function YieldCalculator() {
  const [purchasePrice, setPurchasePrice] = React.useState<number>(3500000)
  const [annualRent, setAnnualRent] = React.useState<number>(240000)
  const [areaSqft, setAreaSqft] = React.useState<number>(1450)
  const [serviceChargePerSqft, setServiceChargePerSqft] = React.useState<number>(18)
  const [maintenanceReservePct, setMaintenanceReservePct] = React.useState<number>(5)
  const [managementFeePct, setManagementFeePct] = React.useState<number>(5)

  const result = React.useMemo(() => {
    return calculateYieldAnalysis({
      purchasePrice,
      annualRent,
      areaSqft,
      serviceChargePerSqft,
      maintenanceReservePct,
      managementFeePct,
    })
  }, [purchasePrice, annualRent, areaSqft, serviceChargePerSqft, maintenanceReservePct, managementFeePct])

  return (
    <div className="bg-white rounded-3xl border border-black/10 overflow-hidden shadow-sm">
      <div className="p-6 sm:p-8 border-b border-black/10 flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-[#f5f5f7]">
        <div>
          <div className="flex items-center gap-2">
            <Percent className="h-4 w-4 text-accent" />
            <h2 className="text-xl sm:text-2xl font-extrabold text-[#1d1d1f] tracking-tight">Rental Yield & Net Income Engine</h2>
          </div>
          <p className="text-xs text-[#6e6e73] mt-1">
            Calculates Gross & Net Rental Yields including statutory DLD acquisition fees and operating expenses.
          </p>
        </div>
        <SourceBadge
          status="CALCULATED"
          sourceName="Statutory DLD Formula + User Inputs"
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-0 divide-y lg:divide-y-0 lg:divide-x divide-black/10">
        {/* Input Parameters */}
        <div className="lg:col-span-6 p-6 sm:p-8 space-y-6 bg-white">
          <div className="flex items-center justify-between">
            <h3 className="text-[11px] font-bold uppercase tracking-widest text-[#6e6e73]">
              Input Parameters (User Provided)
            </h3>
            <button
              onClick={() => {
                setPurchasePrice(3500000)
                setAnnualRent(240000)
                setAreaSqft(1450)
                setServiceChargePerSqft(18)
                setMaintenanceReservePct(5)
                setManagementFeePct(5)
              }}
              className="text-xs text-accent hover:text-[#1d1d1f] transition-colors flex items-center gap-1.5 cursor-pointer font-semibold"
            >
              <RotateCcw className="h-3 w-3" /> Reset
            </button>
          </div>

          <div className="space-y-5">
            <div>
              <div className="flex justify-between text-xs mb-2">
                <label className="font-semibold text-[#1d1d1f]">Property Purchase Price</label>
                <span className="font-mono text-accent font-bold">AED {purchasePrice.toLocaleString()}</span>
              </div>
              <input
                type="range"
                min={500000}
                max={50000000}
                step={50000}
                value={purchasePrice}
                onChange={(e) => setPurchasePrice(Number(e.target.value))}
                className="w-full accent-[#1d1d1f] bg-black/10 h-1.5 rounded-lg cursor-pointer appearance-none"
              />
              <div className="flex justify-between text-[10px] text-[#6e6e73] mt-1.5 font-mono">
                <span>AED 500k</span>
                <span>AED 25M</span>
                <span>AED 50M</span>
              </div>
            </div>

            <div>
              <div className="flex justify-between text-xs mb-2">
                <label className="font-semibold text-[#1d1d1f]">Expected Annual Gross Rent</label>
                <span className="font-mono text-accent font-bold">AED {annualRent.toLocaleString()}</span>
              </div>
              <input
                type="range"
                min={20000}
                max={3000000}
                step={5000}
                value={annualRent}
                onChange={(e) => setAnnualRent(Number(e.target.value))}
                className="w-full accent-[#1d1d1f] bg-black/10 h-1.5 rounded-lg cursor-pointer appearance-none"
              />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-semibold text-[#1d1d1f] mb-1.5">
                  Internal Area (Sq Ft)
                </label>
                <input
                  type="number"
                  value={areaSqft}
                  onChange={(e) => setAreaSqft(Math.max(100, Number(e.target.value)))}
                  className="w-full px-3.5 py-2.5 bg-[#f5f5f7] border border-black/10 rounded-xl text-xs text-[#1d1d1f] focus:outline-none focus:border-accent transition-colors font-mono"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-[#1d1d1f] mb-1.5">
                  Service Charge (AED/sqft/yr)
                </label>
                <input
                  type="number"
                  value={serviceChargePerSqft}
                  onChange={(e) => setServiceChargePerSqft(Math.max(0, Number(e.target.value)))}
                  className="w-full px-3.5 py-2.5 bg-[#f5f5f7] border border-black/10 rounded-xl text-xs text-[#1d1d1f] focus:outline-none focus:border-accent transition-colors font-mono"
                />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-semibold text-[#1d1d1f] mb-1.5">
                  Maintenance Reserve (%)
                </label>
                <input
                  type="number"
                  value={maintenanceReservePct}
                  onChange={(e) => setMaintenanceReservePct(Math.max(0, Number(e.target.value)))}
                  className="w-full px-3.5 py-2.5 bg-[#f5f5f7] border border-black/10 rounded-xl text-xs text-[#1d1d1f] focus:outline-none focus:border-accent transition-colors font-mono"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-[#1d1d1f] mb-1.5">
                  Management Agency Fee (%)
                </label>
                <input
                  type="number"
                  value={managementFeePct}
                  onChange={(e) => setManagementFeePct(Math.max(0, Number(e.target.value)))}
                  className="w-full px-3.5 py-2.5 bg-[#f5f5f7] border border-black/10 rounded-xl text-xs text-[#1d1d1f] focus:outline-none focus:border-accent transition-colors font-mono"
                />
              </div>
            </div>
          </div>

          <div className="p-4 bg-[#f5f5f7] rounded-2xl border border-black/5 text-xs text-[#6e6e73] space-y-1.5">
            <div className="flex items-center gap-1.5 font-semibold text-[#1d1d1f]">
              <Info className="h-3.5 w-3.5 text-accent" />
              <span>Transparent Statutory Inclusions:</span>
            </div>
            <p className="text-[11px] leading-relaxed">
              Acquisition cost includes statutory DLD buyer transfer fee (2%), scenario document tariffs (AED 250 title + AED 250 map + AED 20 fees = AED 520 for residential unit), AED 4,200 trustee partner fee, and customary 2.1% brokerage assumption (total AED {(result.total_acquisition_cost - purchasePrice).toLocaleString()}).
            </p>
          </div>
        </div>

        {/* Calculated Yield Outputs */}
        <div className="lg:col-span-6 p-6 sm:p-8 space-y-6 flex flex-col justify-between bg-[#f5f5f7]">
          <div className="space-y-6">
            <h3 className="text-[11px] font-bold uppercase tracking-widest text-[#6e6e73]">
              Calculated Returns & Cash Flow
            </h3>

            <div className="grid grid-cols-2 gap-4">
              <div className="p-5 bg-white rounded-2xl border border-black/10 space-y-1 shadow-sm">
                <span className="text-[10px] font-bold text-[#6e6e73] uppercase tracking-wider">Gross Rental Yield</span>
                <div className="text-3xl font-extrabold text-[#1d1d1f] font-mono tracking-tight pt-1">
                  {result.gross_rental_yield_pct.toFixed(2)}%
                </div>
                <span className="text-[10px] text-[#6e6e73] block">Gross Rent / Total Acquisition</span>
              </div>

              <div className="p-5 bg-white rounded-2xl border border-[#c9a962]/40 space-y-1 shadow-sm">
                <span className="text-[10px] font-bold text-accent uppercase tracking-wider">Net Rental Yield (NOI)</span>
                <div className="text-3xl font-extrabold text-accent font-mono tracking-tight pt-1">
                  {result.net_rental_yield_pct.toFixed(2)}%
                </div>
                <span className="text-[10px] text-[#6e6e73] block">After all expenses & service fees</span>
              </div>
            </div>

            <div className="space-y-2.5 pt-2 text-xs divide-y divide-black/5 bg-white p-5 rounded-2xl border border-black/10 shadow-sm">
              <div className="flex justify-between py-2">
                <span className="text-[#6e6e73]">Gross Annual Rent:</span>
                <span className="font-mono font-semibold text-[#1d1d1f]">
                  AED {result.annual_gross_rent.toLocaleString()}
                </span>
              </div>

              <div className="flex justify-between py-2">
                <span className="text-[#6e6e73]">Annual Service Charges:</span>
                <span className="font-mono text-[#6e6e73]">
                  - AED {result.service_charge_annual.toLocaleString()}
                </span>
              </div>

              <div className="flex justify-between py-2">
                <span className="text-[#6e6e73]">Maintenance Reserve ({maintenanceReservePct}%):</span>
                <span className="font-mono text-[#6e6e73]">
                  - AED {result.maintenance_reserve_annual.toLocaleString()}
                </span>
              </div>

              <div className="flex justify-between py-2">
                <span className="text-[#6e6e73]">Property Management ({managementFeePct}%):</span>
                <span className="font-mono text-[#6e6e73]">
                  - AED {result.property_management_annual.toLocaleString()}
                </span>
              </div>

              <div className="flex justify-between py-3 font-semibold text-sm border-t border-black/10">
                <span className="text-[#1d1d1f] font-bold">Net Operating Income (NOI / Year):</span>
                <span className="font-mono text-emerald-600 font-bold">
                  AED {result.net_operating_income.toLocaleString()}
                </span>
              </div>
            </div>
          </div>

          <div className="p-4 bg-white rounded-2xl border border-black/10 text-xs text-[#6e6e73] space-y-1.5 shadow-sm">
            <span className="font-bold text-[#1d1d1f] uppercase tracking-widest text-[10px] block">
              Mathematical Provenance
            </span>
            <p className="font-mono text-[11px] text-[#6e6e73]">{result.formula_inputs_exposed.net_yield_formula}</p>
          </div>
        </div>
      </div>
    </div>
  )
}
