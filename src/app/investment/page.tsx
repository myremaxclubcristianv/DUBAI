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
    <div className="flex flex-col min-h-screen bg-[#08080a] text-[#f5f5f7]">
      
      {/* 1. EDITORIAL HEADER */}
      <section className="pt-16 pb-14 sm:pt-24 sm:pb-20 border-b border-white/10 bg-[#0d0d11]">
        <div className="w-full max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-16 space-y-6">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#c9a962]" />
            <Eyebrow>INVESTMENT RESEARCH &bull; CAPITAL UNDERWRITING ENGINE</Eyebrow>
          </div>
          
          <div className="max-w-3xl space-y-4">
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-light tracking-[-0.035em] leading-[1.02] text-[#f5f5f7]">
              UNDERWRITE<br />THE ACQUISITION.
            </h1>
            <p className="text-base sm:text-lg text-[#a1a1aa] font-light leading-relaxed">
              Deterministic financial memorandum for Dubai residential and prime freehold assets. Built on published Dubai Land Department tariffs, Central Bank mortgage caps, and natural person tax exemptions.
            </p>
          </div>
        </div>
      </section>

      {/* 2. STATUTORY PILLARS */}
      <section className="py-10 border-b border-white/10 bg-[#08080a]">
        <div className="w-full max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-16">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-5 rounded-xs bg-[#111116] border border-white/10 space-y-1.5">
              <span className="text-[10px] font-mono uppercase tracking-widest text-[#c9a962] block font-semibold">
                01 &bull; DLD TRANSFER FEE
              </span>
              <div className="text-xl font-light text-[#f5f5f7] font-mono">4.00% Combined</div>
              <p className="text-xs text-[#8e8e93] font-light">Law No. 7 of 2006 (Standard statutory 2% buyer / 2% seller allocation)</p>
            </div>

            <div className="p-5 rounded-xs bg-[#111116] border border-white/10 space-y-1.5">
              <span className="text-[10px] font-mono uppercase tracking-widest text-[#c9a962] block font-semibold">
                02 &bull; MORTGAGE CAP
              </span>
              <div className="text-xl font-light text-[#f5f5f7] font-mono">Up to 80% LTV</div>
              <p className="text-xs text-[#8e8e93] font-light">CBUAE maximum for first residential property under AED 5,000,000</p>
            </div>

            <div className="p-5 rounded-xs bg-[#111116] border border-white/10 space-y-1.5">
              <span className="text-[10px] font-mono uppercase tracking-widest text-[#c9a962] block font-semibold">
                03 &bull; TAX STATUS
              </span>
              <div className="text-xl font-light text-emerald-400 font-mono">0% Personal Tax</div>
              <p className="text-xs text-[#8e8e93] font-light">Individuals are not subject to personal income or capital gains tax.</p>
            </div>

            <div className="p-5 rounded-xs bg-[#111116] border border-white/10 space-y-1.5">
              <span className="text-[10px] font-mono uppercase tracking-widest text-[#c9a962] block font-semibold">
                04 &bull; MONETARY ANCHOR
              </span>
              <div className="text-xl font-light text-[#f5f5f7] font-mono">1 USD = 3.6725 AED</div>
              <p className="text-xs text-[#8e8e93] font-light">Central Bank of the UAE statutory currency peg</p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. CAPITAL INSTRUMENT */}
      <main className="w-full max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-16 py-14 sm:py-20 space-y-16 flex-1">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          
          {/* Left 6 cols: Input Controls */}
          <div className="lg:col-span-6 space-y-8">
            <div className="space-y-2">
              <Eyebrow>INSTRUMENT PARAMETERS</Eyebrow>
              <h2 className="text-2xl sm:text-3xl font-light text-[#f5f5f7]">
                Acquisition Assumptions
              </h2>
            </div>

            {/* Price Selector */}
            <div className="space-y-3 p-6 sm:p-7 rounded-sm bg-[#111116] border border-white/10">
              <div className="flex justify-between items-center text-xs font-mono">
                <span className="text-[#8e8e93] uppercase">Property Valuation</span>
                <SourceBadge sourceClass="USER PROVIDED" />
              </div>
              <div className="text-3xl sm:text-4xl font-light font-mono tabular-nums text-[#f5f5f7]">
                {formatCurrency(propertyPrice)}
              </div>
              <input
                type="range"
                min="2000000"
                max="50000000"
                step="500000"
                value={propertyPrice}
                onChange={(e) => setPropertyPrice(Number(e.target.value))}
                className="w-full"
              />
              <div className="flex justify-between text-[10px] font-mono text-[#71717a]">
                <span>AED 2,000,000</span>
                <span>AED 25,000,000</span>
                <span>AED 50,000,000</span>
              </div>
            </div>

            {/* Structure: Cash vs Financed */}
            <div className="space-y-4 p-6 sm:p-7 rounded-sm bg-[#111116] border border-white/10">
              <div className="flex justify-between items-center">
                <span className="text-xs font-mono uppercase text-[#8e8e93]">Capital Structure</span>
                <div className="flex gap-2">
                  <button
                    onClick={() => setFinancingMode('financed')}
                    className={`px-3.5 py-1.5 rounded-xs text-xs font-mono transition-colors cursor-pointer ${
                      financingMode === 'financed' ? 'bg-[#c9a962] text-[#08080a] font-semibold' : 'bg-[#181820] text-[#a1a1aa] border border-white/10'
                    }`}
                  >
                    Mortgage Debt
                  </button>
                  <button
                    onClick={() => setFinancingMode('cash')}
                    className={`px-3.5 py-1.5 rounded-xs text-xs font-mono transition-colors cursor-pointer ${
                      financingMode === 'cash' ? 'bg-[#c9a962] text-[#08080a] font-semibold' : 'bg-[#181820] text-[#a1a1aa] border border-white/10'
                    }`}
                  >
                    100% Equity
                  </button>
                </div>
              </div>

              {financingMode === 'financed' && (
                <div className="space-y-5 pt-4 border-t border-white/10">
                  <div className="space-y-2">
                    <div className="flex justify-between text-xs font-mono">
                      <span className="text-[#8e8e93]">Loan to Value (LTV)</span>
                      <span className="text-[#f5f5f7] font-semibold">{ltvPercent}% ({formatCurrency(loanAmount)})</span>
                    </div>
                    <input
                      type="range"
                      min="20"
                      max="80"
                      step="5"
                      value={ltvPercent}
                      onChange={(e) => setLtvPercent(Number(e.target.value))}
                      className="w-full"
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-1">
                      <label className="text-[10px] font-mono uppercase text-[#8e8e93]">MORTGAGE RATE (%)</label>
                      <input
                        type="number"
                        step="0.05"
                        value={interestRate}
                        onChange={(e) => setInterestRate(Number(e.target.value))}
                        className="w-full p-2.5 rounded-xs border border-white/10 bg-[#08080a] text-xs font-mono text-[#f5f5f7] focus:border-[#c9a962] outline-none"
                      />
                    </div>
                    <div className="space-y-1">
                      <label className="text-[10px] font-mono uppercase text-[#8e8e93]">TENOR (YEARS)</label>
                      <input
                        type="number"
                        value={loanTermYears}
                        onChange={(e) => setLoanTermYears(Number(e.target.value))}
                        className="w-full p-2.5 rounded-xs border border-white/10 bg-[#08080a] text-xs font-mono text-[#f5f5f7] focus:border-[#c9a962] outline-none"
                      />
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Operating Parameters */}
            <div className="space-y-4 p-6 sm:p-7 rounded-sm bg-[#111116] border border-white/10">
              <span className="text-xs font-mono uppercase text-[#8e8e93] block">Operating Yield Parameters</span>
              
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-1">
                  <label className="text-[10px] font-mono uppercase text-[#8e8e93]">EST. GROSS YIELD (%)</label>
                  <input
                    type="number"
                    step="0.1"
                    value={grossYieldPercent}
                    onChange={(e) => setGrossYieldPercent(Number(e.target.value))}
                    className="w-full p-2.5 rounded-xs border border-white/10 bg-[#08080a] text-xs font-mono text-[#f5f5f7] focus:border-[#c9a962] outline-none"
                  />
                </div>
                <div className="space-y-1">
                  <label className="text-[10px] font-mono uppercase text-[#8e8e93]">SERVICE CHARGE (AED/SQFT)</label>
                  <input
                    type="number"
                    value={serviceChargePerSqft}
                    onChange={(e) => setServiceChargePerSqft(Number(e.target.value))}
                    className="w-full p-2.5 rounded-xs border border-white/10 bg-[#08080a] text-xs font-mono text-[#f5f5f7] focus:border-[#c9a962] outline-none"
                  />
                </div>
              </div>
            </div>

          </div>

          {/* Right 6 cols: Institutional Financial Dossier */}
          <div className="lg:col-span-6 space-y-8 sticky top-28">
            <div className="p-6 sm:p-8 rounded-sm bg-[#111116] border border-white/15 space-y-6 shadow-[0_12px_40px_rgba(0,0,0,0.8)]">
              
              <div className="space-y-1 border-b border-white/10 pb-4">
                <Eyebrow>FINANCIAL MEMORANDUM</Eyebrow>
                <h3 className="text-xl font-light text-[#f5f5f7]">
                  Statutory Acquisition Ledger
                </h3>
              </div>

              {/* Breakdown Rows */}
              <div className="space-y-2.5">
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
              <div className="pt-4 border-t border-white/15 space-y-2">
                <div className="flex justify-between items-baseline">
                  <span className="text-xs font-mono uppercase tracking-widest font-semibold text-[#c9a962]">
                    TOTAL ACQUISITION OUTLAY
                  </span>
                  <span className="text-2xl sm:text-3xl font-light font-mono tabular-nums text-[#f5f5f7]">
                    {formatCurrency(totalAcquisitionOutlay)}
                  </span>
                </div>
                {financingMode === 'financed' && (
                  <div className="flex justify-between items-baseline text-xs font-mono text-[#8e8e93] pt-1">
                    <span>Initial Equity Required:</span>
                    <span className="font-semibold text-[#f5f5f7]">{formatCurrency(initialEquityRequired)}</span>
                  </div>
                )}
              </div>

              {/* Yield & Cash Flow Analysis */}
              <div className="pt-4 border-t border-white/10 space-y-4">
                <span className="text-xs font-mono uppercase text-[#8e8e93] block">
                  CASH FLOW &amp; YIELD PROJECTIONS
                </span>

                <div className="grid grid-cols-2 gap-4 text-xs font-mono">
                  <div className="p-3.5 rounded-xs bg-[#08080a] border border-white/10 space-y-1">
                    <span className="text-[#8e8e93] block text-[10px]">NET OPERATING INCOME</span>
                    <span className="text-base font-light text-emerald-400 block">{formatCurrency(netOperatingIncome)}</span>
                    <span className="text-[9px] text-[#71717a]">Per Annum</span>
                  </div>

                  <div className="p-3.5 rounded-xs bg-[#08080a] border border-white/10 space-y-1">
                    <span className="text-[#8e8e93] block text-[10px]">UNLEVERED NET YIELD</span>
                    <span className="text-base font-light text-emerald-400 block">{netYieldUnlevered.toFixed(2)}%</span>
                    <span className="text-[9px] text-[#71717a]">Net of service charges</span>
                  </div>
                </div>

                {financingMode === 'financed' && (
                  <div className="p-3.5 rounded-xs bg-[#08080a] border border-white/10 space-y-2 text-xs font-mono">
                    <div className="flex justify-between">
                      <span className="text-[#8e8e93]">Monthly Debt Service:</span>
                      <span className="font-medium text-[#f5f5f7]">{formatCurrency(monthlyMortgage)} / mo</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-[#8e8e93]">Cash-on-Cash Return:</span>
                      <span className="font-medium text-emerald-400">{cashOnCashYield.toFixed(2)}% / yr</span>
                    </div>
                  </div>
                )}
              </div>

              {/* Action */}
              <div className="pt-2">
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