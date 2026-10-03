'use client'

import * as React from 'react'
import { useClient } from '@/lib/context/client-context'
import {
  Eyebrow,
  SourceBadge,
  DataRow,
  PrimaryLink,
} from '@/components/layout/layout-primitives'

export default function InvestmentPage() {
  const { formatCurrency } = useClient()

  // Capital Underwriting Assumptions
  const [propertyPrice, setPropertyPrice] = React.useState(10000000)
  const [financingMode, setFinancingMode] = React.useState<'cash' | 'financed'>('financed')
  const [ltvPercent, setLtvPercent] = React.useState(60)
  const [interestRate, setInterestRate] = React.useState(4.75)
  const [loanTermYears, setLoanTermYears] = React.useState(25)
  const [grossYieldPercent, setGrossYieldPercent] = React.useState(6.5)
  const [serviceChargePerSqft, setServiceChargePerSqft] = React.useState(22)
  const unitAreaSqft = 2500

  // Deterministic Statutory Fee Schedules
  const dldFee = propertyPrice * 0.04
  const dldAdminFee = 4200
  const registrationTrusteeFee = propertyPrice >= 500000 ? 4200 : 2100
  const legalConveyanceEst = 10500

  // Mortgage Calculations
  const loanAmount = financingMode === 'financed' ? propertyPrice * (ltvPercent / 100) : 0
  const mortgageRegFee = financingMode === 'financed' ? loanAmount * 0.0025 : 0
  const mortgageAdminFee = financingMode === 'financed' ? 290 : 0

  const totalStatutoryFees = dldFee + dldAdminFee + registrationTrusteeFee + legalConveyanceEst + mortgageRegFee + mortgageAdminFee
  const totalAcquisitionOutlay = propertyPrice + totalStatutoryFees
  const initialEquityRequired = (propertyPrice - loanAmount) + totalStatutoryFees

  // Income & Operating Outflows
  const annualGrossRent = propertyPrice * (grossYieldPercent / 100)
  const annualServiceCharge = serviceChargePerSqft * unitAreaSqft
  const annualMaintenanceReserve = annualGrossRent * 0.05
  const netOperatingIncome = Math.max(0, annualGrossRent - annualServiceCharge - annualMaintenanceReserve)
  const netYieldUnlevered = (netOperatingIncome / totalAcquisitionOutlay) * 100

  // Debt Service
  const monthlyRate = (interestRate / 100) / 12
  const totalMonths = loanTermYears * 12
  const monthlyMortgage = (financingMode === 'financed' && loanAmount > 0)
    ? (loanAmount * (monthlyRate * Math.pow(1 + monthlyRate, totalMonths))) / (Math.pow(1 + monthlyRate, totalMonths) - 1)
    : 0
  const annualDebtService = monthlyMortgage * 12
  const netCashFlowAfterDebt = netOperatingIncome - annualDebtService
  const cashOnCashYield = initialEquityRequired > 0 ? (netCashFlowAfterDebt / initialEquityRequired) * 100 : 0

  return (
    <div className="flex flex-col min-h-screen bg-[#ffffff] text-[#111111]">
      
      {/* 1. EDITORIAL HEADER */}
      <section className="pt-20 pb-16 sm:pt-28 sm:pb-24 border-b border-[#e5e5ea] bg-[#fafaf8]">
        <div className="w-full max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-16 space-y-6">
          <Eyebrow>INVESTMENT RESEARCH &bull; CAPITAL UNDERWRITING</Eyebrow>
          
          <div className="max-w-3xl space-y-4">
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-light tracking-[-0.035em] leading-[1.02] text-[#111111]">
              UNDERWRITE<br />THE ACQUISITION.
            </h1>
            <p className="text-lg sm:text-xl text-[#6b6b6b] font-light leading-relaxed">
              Deterministic financial memorandum for Dubai residential and prime freehold assets. Built on published Dubai Land Department tariffs, Central Bank mortgage caps, and natural person tax exemptions.
            </p>
          </div>
        </div>
      </section>

      {/* 2. STATUTORY PILLARS (Restrained Editorial Strip) */}
      <section className="py-12 border-b border-[#e5e5ea] bg-[#ffffff]">
        <div className="w-full max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-16">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="space-y-1.5">
              <span className="text-[10px] font-mono uppercase tracking-widest text-[#8e8e93] block">
                01 &bull; DLD TRANSFER FEE
              </span>
              <div className="text-xl font-light text-[#111111]">4.00% Combined</div>
              <p className="text-xs text-[#6b6b6b] font-light">Law No. 7 of 2006 (Standard statutory 2% buyer / 2% seller allocation)</p>
            </div>

            <div className="space-y-1.5">
              <span className="text-[10px] font-mono uppercase tracking-widest text-[#8e8e93] block">
                02 &bull; MORTGAGE CAP
              </span>
              <div className="text-xl font-light text-[#111111]">Up to 80% LTV</div>
              <p className="text-xs text-[#6b6b6b] font-light">CBUAE maximum for first residential property under AED 5,000,000</p>
            </div>

            <div className="space-y-1.5">
              <span className="text-[10px] font-mono uppercase tracking-widest text-[#8e8e93] block">
                03 &bull; TAX STATUS
              </span>
              <div className="text-xl font-light text-[#111111]">No UAE Personal Income Tax</div>
              <p className="text-xs text-[#6b6b6b] font-light">Individuals are not subject to personal income tax. Corporate Tax may apply where business activity thresholds are met.</p>
            </div>

            <div className="space-y-1.5">
              <span className="text-[10px] font-mono uppercase tracking-widest text-[#8e8e93] block">
                04 &bull; MONETARY ANCHOR
              </span>
              <div className="text-xl font-light text-[#111111]">1 USD = 3.6725 AED</div>
              <p className="text-xs text-[#6b6b6b] font-light">Central Bank of the UAE statutory currency peg</p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. CAPITAL INSTRUMENT (One Major Calculation at a Time) */}
      <main className="w-full max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-16 py-16 sm:py-24 space-y-16 flex-1">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left 6 cols: Input Controls (Apple Instrument Style) */}
          <div className="lg:col-span-6 space-y-10">
            <div className="space-y-2">
              <Eyebrow>INSTRUMENT PARAMETERS</Eyebrow>
              <h2 className="text-2xl sm:text-3xl font-light text-[#111111]">
                Acquisition Assumptions
              </h2>
            </div>

            {/* Price Selector */}
            <div className="space-y-3 p-6 sm:p-8 rounded-2xl bg-[#fafaf8] border border-[#e5e5ea]">
              <div className="flex justify-between items-center text-xs font-mono">
                <span className="text-[#6b6b6b] uppercase">Property Valuation</span>
                <SourceBadge sourceClass="USER PROVIDED" />
              </div>
              <div className="text-3xl sm:text-4xl font-light font-mono tabular-nums text-[#111111]">
                {formatCurrency(propertyPrice)}
              </div>
              <input
                type="range"
                min="2000000"
                max="50000000"
                step="500000"
                value={propertyPrice}
                onChange={(e) => setPropertyPrice(Number(e.target.value))}
                className="w-full accent-[#111111] cursor-pointer"
              />
              <div className="flex justify-between text-[10px] font-mono text-[#8e8e93]">
                <span>AED 2,000,000</span>
                <span>AED 25,000,000</span>
                <span>AED 50,000,000</span>
              </div>
            </div>

            {/* Structure: Cash vs Financed */}
            <div className="space-y-4 p-6 sm:p-8 rounded-2xl bg-[#fafaf8] border border-[#e5e5ea]">
              <div className="flex justify-between items-center">
                <span className="text-xs font-mono uppercase text-[#6b6b6b]">Capital Structure</span>
                <div className="flex gap-2">
                  <button
                    onClick={() => setFinancingMode('financed')}
                    className={`px-4 py-1.5 rounded-full text-xs font-mono transition-colors ${
                      financingMode === 'financed' ? 'bg-[#111111] text-[#fafaf8]' : 'bg-[#ffffff] text-[#6b6b6b] border border-[#e5e5ea]'
                    }`}
                  >
                    Mortgage Debt
                  </button>
                  <button
                    onClick={() => setFinancingMode('cash')}
                    className={`px-4 py-1.5 rounded-full text-xs font-mono transition-colors ${
                      financingMode === 'cash' ? 'bg-[#111111] text-[#fafaf8]' : 'bg-[#ffffff] text-[#6b6b6b] border border-[#e5e5ea]'
                    }`}
                  >
                    100% Equity
                  </button>
                </div>
              </div>

              {financingMode === 'financed' && (
                <div className="space-y-6 pt-4 border-t border-[#e5e5ea]">
                  <div className="space-y-2">
                    <div className="flex justify-between text-xs font-mono">
                      <span className="text-[#6b6b6b]">Loan to Value (LTV)</span>
                      <span className="text-[#111111] font-medium">{ltvPercent}% ({formatCurrency(loanAmount)})</span>
                    </div>
                    <input
                      type="range"
                      min="20"
                      max="80"
                      step="5"
                      value={ltvPercent}
                      onChange={(e) => setLtvPercent(Number(e.target.value))}
                      className="w-full accent-[#111111] cursor-pointer"
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-1">
                      <label className="text-[11px] font-mono text-[#8e8e93]">MORTGAGE RATE (%)</label>
                      <input
                        type="number"
                        step="0.05"
                        value={interestRate}
                        onChange={(e) => setInterestRate(Number(e.target.value))}
                        className="w-full p-2.5 rounded-lg border border-[#e5e5ea] bg-[#ffffff] text-xs font-mono"
                      />
                    </div>
                    <div className="space-y-1">
                      <label className="text-[11px] font-mono text-[#8e8e93]">TENOR (YEARS)</label>
                      <input
                        type="number"
                        value={loanTermYears}
                        onChange={(e) => setLoanTermYears(Number(e.target.value))}
                        className="w-full p-2.5 rounded-lg border border-[#e5e5ea] bg-[#ffffff] text-xs font-mono"
                      />
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Operating Parameters */}
            <div className="space-y-4 p-6 sm:p-8 rounded-2xl bg-[#fafaf8] border border-[#e5e5ea]">
              <span className="text-xs font-mono uppercase text-[#6b6b6b] block">Operating Yield Parameters</span>
              
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-1">
                  <label className="text-[11px] font-mono text-[#8e8e93]">EST. GROSS YIELD (%)</label>
                  <input
                    type="number"
                    step="0.1"
                    value={grossYieldPercent}
                    onChange={(e) => setGrossYieldPercent(Number(e.target.value))}
                    className="w-full p-2.5 rounded-lg border border-[#e5e5ea] bg-[#ffffff] text-xs font-mono"
                  />
                </div>
                <div className="space-y-1">
                  <label className="text-[11px] font-mono text-[#8e8e93]">SERVICE CHARGE (AED/SQFT)</label>
                  <input
                    type="number"
                    value={serviceChargePerSqft}
                    onChange={(e) => setServiceChargePerSqft(Number(e.target.value))}
                    className="w-full p-2.5 rounded-lg border border-[#e5e5ea] bg-[#ffffff] text-xs font-mono"
                  />
                </div>
              </div>
            </div>

          </div>

          {/* Right 6 cols: Institutional Financial Dossier */}
          <div className="lg:col-span-6 space-y-8 sticky top-28">
            <div className="p-8 sm:p-10 rounded-2xl bg-[#ffffff] border border-[#e5e5ea] space-y-8">
              
              <div className="space-y-2 border-b border-[#e5e5ea] pb-6">
                <Eyebrow>FINANCIAL MEMORANDUM</Eyebrow>
                <h3 className="text-2xl font-light text-[#111111]">
                  Statutory Acquisition Ledger
                </h3>
              </div>

              {/* Breakdown Rows */}
              <div className="space-y-3">
                <DataRow
                  label="Asset Agreed Value"
                  value={formatCurrency(propertyPrice)}
                  source={<SourceBadge sourceClass="USER PROVIDED" />}
                />
                <DataRow
                  label="DLD Sale Registration (4%)"
                  value={formatCurrency(dldFee)}
                  source={<SourceBadge sourceClass="OFFICIAL GOVERNMENT" sourceName="Law 7/2006" />}
                />
                <DataRow
                  label="DLD Admin & Map Tariff"
                  value={formatCurrency(dldAdminFee)}
                  source={<SourceBadge sourceClass="OFFICIAL GOVERNMENT" sourceName="DLD Tariff" />}
                />
                <DataRow
                  label="Registration Trustee Fee"
                  value={formatCurrency(registrationTrusteeFee)}
                  source={<SourceBadge sourceClass="OFFICIAL REGULATORY" sourceName="DLD Trustee" />}
                />
                {financingMode === 'financed' && (
                  <>
                    <DataRow
                      label="Mortgage Registration (0.25%)"
                      value={formatCurrency(mortgageRegFee)}
                      source={<SourceBadge sourceClass="OFFICIAL REGULATORY" sourceName="DLD Schedule" />}
                    />
                    <DataRow
                      label="Mortgage Admin Fee"
                      value={formatCurrency(mortgageAdminFee)}
                      source={<SourceBadge sourceClass="OFFICIAL REGULATORY" sourceName="DLD Schedule" />}
                    />
                  </>
                )}
                <DataRow
                  label="Statutory Legal & Conveyance Est."
                  value={formatCurrency(legalConveyanceEst)}
                  source={<SourceBadge sourceClass="CALCULATED" sourceName="Standard" />}
                />
              </div>

              {/* Total Outlay Highlight */}
              <div className="pt-6 border-t-2 border-[#111111] space-y-2">
                <div className="flex justify-between items-baseline">
                  <span className="text-xs font-mono uppercase tracking-widest font-semibold text-[#111111]">
                    TOTAL ACQUISITION OUTLAY
                  </span>
                  <span className="text-2xl sm:text-3xl font-light font-mono tabular-nums text-[#111111]">
                    {formatCurrency(totalAcquisitionOutlay)}
                  </span>
                </div>
                {financingMode === 'financed' && (
                  <div className="flex justify-between items-baseline text-xs font-mono text-[#6b6b6b] pt-1">
                    <span>Initial Equity Required:</span>
                    <span className="font-semibold text-[#111111]">{formatCurrency(initialEquityRequired)}</span>
                  </div>
                )}
              </div>

              {/* Yield & Cash Flow Analysis */}
              <div className="pt-6 border-t border-[#e5e5ea] space-y-4">
                <span className="text-xs font-mono uppercase text-[#8e8e93] block">
                  CASH FLOW &amp; YIELD PROJECTIONS
                </span>

                <div className="grid grid-cols-2 gap-4 text-xs font-mono">
                  <div className="p-4 rounded-xl bg-[#fafaf8] border border-[#e5e5ea] space-y-1">
                    <span className="text-[#8e8e93] block">NET OPERATING INCOME</span>
                    <span className="text-lg font-light text-emerald-800 block">{formatCurrency(netOperatingIncome)}</span>
                    <span className="text-[10px] text-[#8e8e93]">Per Annum</span>
                  </div>

                  <div className="p-4 rounded-xl bg-[#fafaf8] border border-[#e5e5ea] space-y-1">
                    <span className="text-[#8e8e93] block">UNLEVERED NET YIELD</span>
                    <span className="text-lg font-light text-emerald-800 block">{netYieldUnlevered.toFixed(2)}%</span>
                    <span className="text-[10px] text-[#8e8e93]">Net of service charges</span>
                  </div>
                </div>

                {financingMode === 'financed' && (
                  <div className="p-4 rounded-xl bg-[#fafaf8] border border-[#e5e5ea] space-y-2 text-xs font-mono">
                    <div className="flex justify-between">
                      <span className="text-[#6b6b6b]">Monthly Debt Service:</span>
                      <span className="font-medium text-[#111111]">{formatCurrency(monthlyMortgage)} / mo</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-[#6b6b6b]">Cash-on-Cash Return:</span>
                      <span className="font-medium text-emerald-800">{cashOnCashYield.toFixed(2)}% / yr</span>
                    </div>
                  </div>
                )}
              </div>

              {/* Action */}
              <div className="pt-4">
                <PrimaryLink href="/private-client" className="w-full justify-center">
                  Request Institutional Mandate
                </PrimaryLink>
              </div>

            </div>
          </div>

        </div>

      </main>

    </div>
  )
}