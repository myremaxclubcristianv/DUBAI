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
    <div className="bg-white rounded-xl border border-border overflow-hidden">
      <div className="p-6 border-b border-border flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2">
            <Percent className="h-5 w-5 text-accent" />
            <h2 className="text-xl font-bold text-text-primary">Rental Yield & Net Income Engine</h2>
          </div>
          <p className="text-xs text-text-secondary mt-1">
            Calculates Gross & Net Rental Yields including statutory DLD acquisition fees and operating expenses.
          </p>
        </div>
        <SourceBadge
          status="CALCULATED"
          sourceName="Statutory DLD Formula + User Inputs"
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-0 divide-y lg:divide-y-0 lg:divide-x divide-border">
        {/* Input Parameters */}
        <div className="lg:col-span-6 p-6 space-y-5 bg-surface-subtle">
          <div className="flex items-center justify-between">
            <h3 className="text-xs font-bold uppercase tracking-wider text-text-muted">
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
              className="text-[11px] text-accent hover:underline flex items-center gap-1"
            >
              <RotateCcw className="h-3 w-3" /> Reset
            </button>
          </div>

          <div className="space-y-4">
            <div>
              <div className="flex justify-between text-xs mb-1.5">
                <label className="font-semibold text-text-primary">Property Purchase Price (AED)</label>
                <span className="font-mono text-accent font-bold">AED {purchasePrice.toLocaleString()}</span>
              </div>
              <input
                type="range"
                min={500000}
                max={50000000}
                step={50000}
                value={purchasePrice}
                onChange={(e) => setPurchasePrice(Number(e.target.value))}
                className="w-full accent-accent cursor-pointer"
              />
              <div className="flex justify-between text-[10px] text-text-muted mt-1">
                <span>AED 500k</span>
                <span>AED 25M</span>
                <span>AED 50M</span>
              </div>
            </div>

            <div>
              <div className="flex justify-between text-xs mb-1.5">
                <label className="font-semibold text-text-primary">Expected Annual Gross Rent (AED)</label>
                <span className="font-mono text-accent font-bold">AED {annualRent.toLocaleString()}</span>
              </div>
              <input
                type="range"
                min={20000}
                max={3000000}
                step={5000}
                value={annualRent}
                onChange={(e) => setAnnualRent(Number(e.target.value))}
                className="w-full accent-accent cursor-pointer"
              />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-semibold text-text-primary mb-1">
                  Internal Area (Sq Ft)
                </label>
                <input
                  type="number"
                  value={areaSqft}
                  onChange={(e) => setAreaSqft(Math.max(100, Number(e.target.value)))}
                  className="w-full px-3 py-2 bg-white border border-border rounded-md text-xs text-text-primary focus:outline-none focus:border-accent"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-text-primary mb-1">
                  Service Charge (AED/sqft/yr)
                </label>
                <input
                  type="number"
                  value={serviceChargePerSqft}
                  onChange={(e) => setServiceChargePerSqft(Math.max(0, Number(e.target.value)))}
                  className="w-full px-3 py-2 bg-white border border-border rounded-md text-xs text-text-primary focus:outline-none focus:border-accent"
                />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-semibold text-text-primary mb-1">
                  Maintenance Reserve (%)
                </label>
                <input
                  type="number"
                  value={maintenanceReservePct}
                  onChange={(e) => setMaintenanceReservePct(Math.max(0, Number(e.target.value)))}
                  className="w-full px-3 py-2 bg-white border border-border rounded-md text-xs text-text-primary focus:outline-none focus:border-accent"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-text-primary mb-1">
                  Management Agency Fee (%)
                </label>
                <input
                  type="number"
                  value={managementFeePct}
                  onChange={(e) => setManagementFeePct(Math.max(0, Number(e.target.value)))}
                  className="w-full px-3 py-2 bg-white border border-border rounded-md text-xs text-text-primary focus:outline-none focus:border-accent"
                />
              </div>
            </div>
          </div>

          <div className="p-3 bg-white rounded-lg border border-border text-[11px] text-text-secondary space-y-1">
            <div className="flex items-center gap-1.5 font-semibold text-text-primary">
              <Info className="h-3.5 w-3.5 text-accent" />
              <span>Transparent Statutory Inclusions:</span>
            </div>
            <p>
              Acquisition cost includes statutory DLD buyer transfer fee (2%), scenario document tariffs (AED 250 title + AED 250 map + AED 20 fees = AED 520 for residential unit), AED 4,200 trustee partner fee, and customary 2.1% brokerage assumption (total AED {(result.total_acquisition_cost - purchasePrice).toLocaleString()}).
            </p>
          </div>
        </div>

        {/* Calculated Yield Outputs */}
        <div className="lg:col-span-6 p-6 space-y-6 flex flex-col justify-between">
          <div className="space-y-4">
            <h3 className="text-xs font-bold uppercase tracking-wider text-text-muted">
              Calculated Returns & Cash Flow
            </h3>

            <div className="grid grid-cols-2 gap-4">
              <div className="p-4 bg-surface rounded-lg border border-border">
                <span className="text-[11px] font-semibold text-text-muted uppercase">Gross Rental Yield</span>
                <div className="text-2xl font-bold text-text-primary font-mono mt-1">
                  {result.gross_rental_yield_pct.toFixed(2)}%
                </div>
                <span className="text-[10px] text-text-muted">Gross Rent / Total Acquisition</span>
              </div>

              <div className="p-4 bg-accent-subtle rounded-lg border border-accent-border">
                <span className="text-[11px] font-semibold text-accent uppercase">Net Rental Yield (NOI)</span>
                <div className="text-2xl font-bold text-accent font-mono mt-1">
                  {result.net_rental_yield_pct.toFixed(2)}%
                </div>
                <span className="text-[10px] text-text-muted">After all expenses & service fees</span>
              </div>
            </div>

            <div className="space-y-2 pt-2 text-xs">
              <div className="flex justify-between py-1.5 border-b border-border-subtle">
                <span className="text-text-secondary">Gross Annual Rent:</span>
                <span className="font-mono font-semibold text-text-primary">
                  AED {result.annual_gross_rent.toLocaleString()}
                </span>
              </div>

              <div className="flex justify-between py-1.5 border-b border-border-subtle">
                <span className="text-text-secondary">Annual Service Charges:</span>
                <span className="font-mono text-text-primary">
                  - AED {result.service_charge_annual.toLocaleString()}
                </span>
              </div>

              <div className="flex justify-between py-1.5 border-b border-border-subtle">
                <span className="text-text-secondary">Maintenance Reserve ({maintenanceReservePct}%):</span>
                <span className="font-mono text-text-primary">
                  - AED {result.maintenance_reserve_annual.toLocaleString()}
                </span>
              </div>

              <div className="flex justify-between py-1.5 border-b border-border-subtle">
                <span className="text-text-secondary">Property Management ({managementFeePct}%):</span>
                <span className="font-mono text-text-primary">
                  - AED {result.property_management_annual.toLocaleString()}
                </span>
              </div>

              <div className="flex justify-between py-2 border-t border-border font-semibold text-sm">
                <span className="text-text-primary">Net Operating Income (NOI / Year):</span>
                <span className="font-mono text-emerald-700">
                  AED {result.net_operating_income.toLocaleString()}
                </span>
              </div>
            </div>
          </div>

          <div className="p-3 bg-surface-elevated rounded-lg border border-border text-[11px] text-text-muted space-y-1">
            <span className="font-bold text-text-primary uppercase tracking-wider text-[10px]">
              Mathematical Provenance:
            </span>
            <p className="font-mono">{result.formula_inputs_exposed.net_yield_formula}</p>
          </div>
        </div>
      </div>
    </div>
  )
}
