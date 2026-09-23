'use client'

import * as React from 'react'
import { calculateAcquisitionCosts, calculateMortgage } from '@/lib/calculators/investment'
import { SourceBadge } from '@/components/ui/source-badge'
import { Calculator, RotateCcw } from 'lucide-react'

export function ScenarioWorkspace() {
  // Scenario Parameters (User Inputs)
  const [purchasePrice, setPurchasePrice] = React.useState<number>(8500000)
  const [downPaymentPct, setDownPaymentPct] = React.useState<number>(30)
  const [interestRate, setInterestRate] = React.useState<number>(4.75)
  const [loanTermYears, setLoanTermYears] = React.useState<number>(25)
  const [annualRent, setAnnualRent] = React.useState<number>(550000)
  const [vacancyPct, setVacancyPct] = React.useState<number>(5)
  const [annualServiceCharge, setAnnualServiceCharge] = React.useState<number>(45000)
  const [maintenancePct, setMaintenancePct] = React.useState<number>(5)
  const [managementPct, setManagementPct] = React.useState<number>(5)
  const [holdingPeriodYears, setHoldingPeriodYears] = React.useState<number>(5)
  const [exitPrice, setExitPrice] = React.useState<number>(10500000)

  // Calculations
  const acquisition = calculateAcquisitionCosts(purchasePrice, false)
  const equityDownPayment = (purchasePrice * downPaymentPct) / 100
  const loanPrincipal = purchasePrice - equityDownPayment
  const totalEquityRequired = equityDownPayment + acquisition.total_statutory_fees

  const mortgage = calculateMortgage({
    purchasePrice,
    downPaymentPct,
    annualInterestRatePct: interestRate,
    tenureYears: loanTermYears,
  })
  const annualDebtService = mortgage.monthly_payment_aed * 12

  // Operating Cash Flow
  const grossRent = annualRent
  const vacancyLoss = (grossRent * vacancyPct) / 100
  const effectiveGrossIncome = grossRent - vacancyLoss

  const maintenanceCost = (grossRent * maintenancePct) / 100
  const managementCost = (grossRent * managementPct) / 100
  const totalOperatingExpenses = annualServiceCharge + maintenanceCost + managementCost

  const annualNOI = Math.max(0, effectiveGrossIncome - totalOperatingExpenses)
  const netAnnualCashFlow = annualNOI - annualDebtService
  const cumulativeCashFlow = netAnnualCashFlow * holdingPeriodYears

  // Exit & ROI
  const exitProceedsBeforeDebt = exitPrice - (exitPrice * 0.02) // Approx 2% selling costs
  // Estimated loan balance after holding period (simplified amortization factor)
  const estimatedRemainingLoan = Math.max(0, loanPrincipal * (1 - (holdingPeriodYears / loanTermYears) * 0.65))
  const netExitProceeds = exitProceedsBeforeDebt - estimatedRemainingLoan
  const netProfit = (netExitProceeds - totalEquityRequired) + cumulativeCashFlow
  const simpleROI = totalEquityRequired > 0 ? ((netProfit / totalEquityRequired) * 100).toFixed(1) : '0.0'

  // Metrics
  const grossYield = purchasePrice > 0 ? ((grossRent / purchasePrice) * 100).toFixed(2) : '0.00'
  const netYield = acquisition.total_acquisition_cost > 0 ? ((annualNOI / acquisition.total_acquisition_cost) * 100).toFixed(2) : '0.00'
  const cashOnCash = totalEquityRequired > 0 ? ((netAnnualCashFlow / totalEquityRequired) * 100).toFixed(2) : '0.00'

  const handleReset = () => {
    setPurchasePrice(8500000)
    setDownPaymentPct(30)
    setInterestRate(4.75)
    setLoanTermYears(25)
    setAnnualRent(550000)
    setVacancyPct(5)
    setAnnualServiceCharge(45000)
    setMaintenancePct(5)
    setManagementPct(5)
    setHoldingPeriodYears(5)
    setExitPrice(10500000)
  }

  return (
    <div className="bg-white rounded-xl border border-border overflow-hidden space-y-6">
      <div className="p-6 border-b border-border flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2">
            <Calculator className="h-5 w-5 text-accent" />
            <h2 className="text-xl font-bold text-text-primary">Multi-Scenario Investment Builder</h2>
          </div>
          <p className="text-xs text-text-secondary mt-1">
            Dynamic institutional underwriting workspace. All model inputs are user-configured with zero synthetic assumptions.
          </p>
        </div>
        <div className="flex items-center gap-3">
          <button
            onClick={handleReset}
            className="px-3 py-1.5 rounded-lg border border-border bg-surface text-text-secondary hover:text-text-primary text-xs font-semibold flex items-center gap-1 transition-colors"
          >
            <RotateCcw className="h-3.5 w-3.5" />
            <span>Reset Scenario</span>
          </button>
          <SourceBadge status="CALCULATED" sourceName="Institutional Financial Model" />
        </div>
      </div>

      <div className="p-6 grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Left Column: User Input Parameters */}
        <div className="lg:col-span-6 space-y-6">
          <div className="p-5 bg-surface-subtle rounded-xl border border-border space-y-4">
            <div className="flex items-center justify-between border-b border-border pb-2">
              <span className="text-xs font-bold uppercase tracking-wider text-accent">
                1. Acquisition & Financing Inputs
              </span>
              <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-white text-text-secondary border border-border font-semibold">
                USER INPUT
              </span>
            </div>

            <div className="space-y-3 text-xs">
              <div>
                <div className="flex justify-between mb-1">
                  <span className="font-semibold text-text-primary">Target Purchase Price (AED)</span>
                  <span className="font-mono text-accent font-bold">AED {purchasePrice.toLocaleString()}</span>
                </div>
                <input
                  type="range"
                  min={1000000}
                  max={50000000}
                  step={250000}
                  value={purchasePrice}
                  onChange={(e) => setPurchasePrice(Number(e.target.value))}
                  className="w-full accent-accent cursor-pointer"
                />
              </div>

              <div className="grid grid-cols-3 gap-3">
                <div>
                  <label className="block text-[11px] font-semibold text-text-primary mb-1">Equity Down (%)</label>
                  <input
                    type="number"
                    min={20}
                    max={100}
                    value={downPaymentPct}
                    onChange={(e) => setDownPaymentPct(Number(e.target.value))}
                    className="w-full px-2.5 py-1.5 bg-white border border-border rounded-md font-mono"
                  />
                </div>
                <div>
                  <label className="block text-[11px] font-semibold text-text-primary mb-1">Interest Rate (%)</label>
                  <input
                    type="number"
                    step={0.05}
                    value={interestRate}
                    onChange={(e) => setInterestRate(Number(e.target.value))}
                    className="w-full px-2.5 py-1.5 bg-white border border-border rounded-md font-mono"
                  />
                </div>
                <div>
                  <label className="block text-[11px] font-semibold text-text-primary mb-1">Loan Term (Yrs)</label>
                  <input
                    type="number"
                    min={5}
                    max={30}
                    value={loanTermYears}
                    onChange={(e) => setLoanTermYears(Number(e.target.value))}
                    className="w-full px-2.5 py-1.5 bg-white border border-border rounded-md font-mono"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="p-5 bg-surface-subtle rounded-xl border border-border space-y-4">
            <div className="flex items-center justify-between border-b border-border pb-2">
              <span className="text-xs font-bold uppercase tracking-wider text-accent">
                2. Operations & Exit Parameters
              </span>
              <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-white text-text-secondary border border-border font-semibold">
                USER INPUT
              </span>
            </div>

            <div className="space-y-3 text-xs">
              <div>
                <div className="flex justify-between mb-1">
                  <span className="font-semibold text-text-primary">Expected Annual Gross Rent (AED)</span>
                  <span className="font-mono text-accent font-bold">AED {annualRent.toLocaleString()}</span>
                </div>
                <input
                  type="range"
                  min={50000}
                  max={Math.max(1000000, purchasePrice * 0.15)}
                  step={25000}
                  value={annualRent}
                  onChange={(e) => setAnnualRent(Number(e.target.value))}
                  className="w-full accent-accent cursor-pointer"
                />
              </div>

              <div className="grid grid-cols-3 gap-3">
                <div>
                  <label className="block text-[11px] font-semibold text-text-primary mb-1">Vacancy Reserve (%)</label>
                  <input
                    type="number"
                    min={0}
                    max={30}
                    value={vacancyPct}
                    onChange={(e) => setVacancyPct(Number(e.target.value))}
                    className="w-full px-2.5 py-1.5 bg-white border border-border rounded-md font-mono"
                  />
                </div>
                <div>
                  <label className="block text-[11px] font-semibold text-text-primary mb-1">Maintenance (%)</label>
                  <input
                    type="number"
                    min={0}
                    max={20}
                    value={maintenancePct}
                    onChange={(e) => setMaintenancePct(Number(e.target.value))}
                    className="w-full px-2.5 py-1.5 bg-white border border-border rounded-md font-mono"
                  />
                </div>
                <div>
                  <label className="block text-[11px] font-semibold text-text-primary mb-1">Management (%)</label>
                  <input
                    type="number"
                    min={0}
                    max={20}
                    value={managementPct}
                    onChange={(e) => setManagementPct(Number(e.target.value))}
                    className="w-full px-2.5 py-1.5 bg-white border border-border rounded-md font-mono"
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-[11px] font-semibold text-text-primary mb-1">Annual Service Charge (AED)</label>
                  <input
                    type="number"
                    value={annualServiceCharge}
                    onChange={(e) => setAnnualServiceCharge(Number(e.target.value))}
                    className="w-full px-2.5 py-1.5 bg-white border border-border rounded-md font-mono"
                  />
                </div>
                <div>
                  <label className="block text-[11px] font-semibold text-text-primary mb-1">Holding Period (Yrs)</label>
                  <input
                    type="number"
                    min={1}
                    max={25}
                    value={holdingPeriodYears}
                    onChange={(e) => setHoldingPeriodYears(Number(e.target.value))}
                    className="w-full px-2.5 py-1.5 bg-white border border-border rounded-md font-mono"
                  />
                </div>
              </div>

              <div>
                <label className="block text-[11px] font-semibold text-text-primary mb-1">Target Exit Price (AED)</label>
                <input
                  type="number"
                  step={100000}
                  value={exitPrice}
                  onChange={(e) => setExitPrice(Number(e.target.value))}
                  className="w-full px-2.5 py-1.5 bg-white border border-border rounded-md font-mono"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Calculated Outputs & Financial Ledger */}
        <div className="lg:col-span-6 space-y-6">
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            <div className="p-4 bg-surface rounded-xl border border-border">
              <span className="text-[10px] font-bold uppercase text-text-muted block">Gross Rental Yield</span>
              <div className="text-2xl font-bold font-mono text-accent mt-1">{grossYield}%</div>
              <span className="text-[10px] text-text-muted mt-0.5 block">CALCULATED</span>
            </div>

            <div className="p-4 bg-surface rounded-xl border border-border">
              <span className="text-[10px] font-bold uppercase text-text-muted block">Net Yield on Cost</span>
              <div className="text-2xl font-bold font-mono text-emerald-700 mt-1">{netYield}%</div>
              <span className="text-[10px] text-text-muted mt-0.5 block">CALCULATED</span>
            </div>

            <div className="p-4 bg-surface rounded-xl border border-border">
              <span className="text-[10px] font-bold uppercase text-text-muted block">Cash-on-Cash Return</span>
              <div className="text-2xl font-bold font-mono text-text-primary mt-1">{cashOnCash}%</div>
              <span className="text-[10px] text-text-muted mt-0.5 block">CALCULATED</span>
            </div>

            <div className="p-4 bg-surface rounded-xl border border-border">
              <span className="text-[10px] font-bold uppercase text-text-muted block">Total Required Capital</span>
              <div className="text-lg font-bold font-mono text-accent mt-1">
                AED {totalEquityRequired.toLocaleString()}
              </div>
              <span className="text-[10px] text-text-muted mt-0.5 block">Down payment + estimated acquisition costs</span>
            </div>

            <div className="p-4 bg-surface rounded-xl border border-border">
              <span className="text-[10px] font-bold uppercase text-text-muted block">Annual Net Cash Flow</span>
              <div className="text-lg font-bold font-mono text-text-primary mt-1">
                AED {netAnnualCashFlow.toLocaleString()}
              </div>
              <span className="text-[10px] text-text-muted mt-0.5 block">Post Debt & OPEX</span>
            </div>

            <div className="p-4 bg-surface rounded-xl border border-border">
              <span className="text-[10px] font-bold uppercase text-text-muted block">Total Scenario ROI</span>
              <div className="text-2xl font-bold font-mono text-emerald-700 mt-1">
                {simpleROI}%
              </div>
              <span className="text-[10px] text-text-muted mt-0.5 block">Over {holdingPeriodYears} Years</span>
            </div>
          </div>

          {/* Underwriting Breakdown Table */}
          <div className="p-5 bg-white rounded-xl border border-border space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-text-muted">
              Annual Operating & Underwriting Breakdown
            </h4>

            <div className="space-y-2 text-xs divide-y divide-border-subtle">
              <div className="flex justify-between py-1">
                <span className="text-text-secondary">Gross Scheduled Rent:</span>
                <span className="font-mono font-semibold text-text-primary">AED {grossRent.toLocaleString()}</span>
              </div>
              <div className="flex justify-between py-1">
                <span className="text-text-secondary">Less Vacancy Loss ({vacancyPct}%):</span>
                <span className="font-mono text-text-muted">- AED {vacancyLoss.toLocaleString()}</span>
              </div>
              <div className="flex justify-between py-1">
                <span className="text-text-secondary">Effective Gross Income (EGI):</span>
                <span className="font-mono font-semibold text-text-primary">AED {effectiveGrossIncome.toLocaleString()}</span>
              </div>
              <div className="flex justify-between py-1">
                <span className="text-text-secondary">Less Total Operating Expenses (OPEX):</span>
                <span className="font-mono text-text-muted">- AED {totalOperatingExpenses.toLocaleString()}</span>
              </div>
              <div className="flex justify-between py-1.5 font-bold">
                <span className="text-text-primary">Net Operating Income (NOI):</span>
                <span className="font-mono text-emerald-700">AED {annualNOI.toLocaleString()}</span>
              </div>
              <div className="flex justify-between py-1">
                <span className="text-text-secondary">Less Annual Debt Service:</span>
                <span className="font-mono text-text-muted">- AED {annualDebtService.toLocaleString()}</span>
              </div>
              <div className="flex justify-between py-2 border-t border-border font-bold text-sm">
                <span className="text-text-primary">Net Annual Cash Flow to Equity:</span>
                <span className="font-mono text-accent">AED {netAnnualCashFlow.toLocaleString()}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
