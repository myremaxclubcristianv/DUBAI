'use client'

import * as React from 'react'
import Link from 'next/link'
import { useClient } from '@/lib/context/client-context'
import {
  ShieldCheck,
  ArrowRight,
} from 'lucide-react'

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
    <div className="flex flex-col min-h-screen bg-white text-slate-950 selection:bg-slate-900 selection:text-white">
      
      {/* 1. EDITORIAL HEADER */}
      <section className="pt-16 pb-14 sm:pt-24 sm:pb-20 border-b border-slate-200 bg-white relative">
        <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-10 lg:px-16 space-y-6">
          
          <div className="flex flex-wrap items-center justify-between gap-4 font-mono text-xs">
            <div className="flex items-center gap-2">
              <span className="text-[10px] tracking-[0.24em] uppercase text-slate-500 font-semibold">
                INVESTMENT RESEARCH &bull; CAPITAL UNDERWRITING ENGINE
              </span>
            </div>
            <div className="flex items-center gap-3 text-[11px] text-slate-500">
              <span className="text-emerald-800 font-semibold flex items-center gap-1">
                <ShieldCheck className="h-3.5 w-3.5 text-emerald-700" />
                DLD &amp; CBUAE Statutory Benchmarks
              </span>
            </div>
          </div>
          
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 border-t border-slate-200/80 pt-6">
            <div className="space-y-3 max-w-3xl">
              <h1 className="text-4xl sm:text-6xl lg:text-7xl font-light tracking-[-0.035em] leading-[1.02] text-slate-950 font-serif">
                UNDERWRITE<br />THE ACQUISITION.
              </h1>
              <p className="text-base sm:text-lg text-slate-600 font-light leading-relaxed">
                Deterministic financial memorandum for Dubai residential and prime freehold assets. Built on published Dubai Land Department tariffs, Central Bank mortgage caps, and natural person tax exemptions.
              </p>
            </div>

            <div className="p-4 bg-slate-50 border border-slate-200 font-mono text-xs text-slate-600 shadow-2xs space-y-1">
              <div className="text-slate-950 font-bold">
                1 USD = 3.6725 AED
              </div>
              <div className="text-[10px] text-slate-500">
                Official UAE Monetary Peg
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* 2. STATUTORY PILLARS */}
      <section className="py-10 border-b border-slate-200 bg-white">
        <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-10 lg:px-16">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-5 bg-slate-50 border border-slate-200 space-y-1.5 shadow-xs">
              <span className="text-[10px] font-mono uppercase tracking-widest text-slate-500 block font-bold">
                01 &bull; DLD TRANSFER FEE
              </span>
              <div className="text-xl font-bold text-slate-950 font-mono">4.00% Combined</div>
              <p className="text-xs text-slate-500 font-light">Law No. 7 of 2006 (Standard statutory 2% buyer / 2% seller)</p>
            </div>

            <div className="p-5 bg-slate-50 border border-slate-200 space-y-1.5 shadow-xs">
              <span className="text-[10px] font-mono uppercase tracking-widest text-slate-500 block font-bold">
                02 &bull; MORTGAGE CAP
              </span>
              <div className="text-xl font-bold text-slate-950 font-mono">Up to 80% LTV</div>
              <p className="text-xs text-slate-500 font-light">CBUAE maximum for first residential property under AED 5,000,000</p>
            </div>

            <div className="p-5 bg-slate-50 border border-slate-200 space-y-1.5 shadow-xs">
              <span className="text-[10px] font-mono uppercase tracking-widest text-slate-500 block font-bold">
                03 &bull; TAX STATUS
              </span>
              <div className="text-xl font-bold text-slate-950 font-mono">0% Personal Tax</div>
              <p className="text-xs text-slate-500 font-light">Individuals are not subject to personal income or capital gains tax.</p>
            </div>

            <div className="p-5 bg-slate-50 border border-slate-200 space-y-1.5 shadow-xs">
              <span className="text-[10px] font-mono uppercase tracking-widest text-slate-500 block font-bold">
                04 &bull; MONETARY ANCHOR
              </span>
              <div className="text-xl font-bold text-slate-950 font-mono">1 USD = 3.6725 AED</div>
              <p className="text-xs text-slate-500 font-light">Central Bank of the UAE statutory currency peg</p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. CAPITAL INSTRUMENT */}
      <main className="w-full max-w-[1440px] mx-auto px-4 sm:px-10 lg:px-16 py-14 sm:py-20 space-y-16 flex-1">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          
          {/* Left 6 cols: Input Controls */}
          <div className="lg:col-span-6 space-y-8">
            <div className="space-y-2">
              <span className="text-[10px] font-mono uppercase tracking-[0.24em] text-slate-500 font-semibold block">
                INSTRUMENT PARAMETERS
              </span>
              <h2 className="text-2xl sm:text-3xl font-light text-slate-950 font-serif">
                Acquisition Assumptions
              </h2>
            </div>

            {/* Price Selector */}
            <div className="space-y-3 p-6 sm:p-7 bg-white border border-slate-200 shadow-xs">
              <div className="flex justify-between items-center text-xs font-mono">
                <span className="text-slate-500 uppercase font-semibold">Property Valuation</span>
                <span className="text-[10px] text-slate-400">ASSUMPTION</span>
              </div>
              <div className="text-3xl sm:text-4xl font-light font-mono tabular-nums text-slate-950 font-bold">
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
              <div className="flex justify-between text-[10px] font-mono text-slate-400">
                <span>AED 2,000,000</span>
                <span>AED 25,000,000</span>
                <span>AED 50,000,000</span>
              </div>
            </div>

            {/* Structure: Cash vs Financed */}
            <div className="space-y-4 p-6 sm:p-7 bg-white border border-slate-200 shadow-xs">
              <div className="flex justify-between items-center">
                <span className="text-xs font-mono uppercase text-slate-500 font-semibold">Capital Structure</span>
                <div className="flex gap-2 font-mono text-xs">
                  <button
                    onClick={() => setFinancingMode('financed')}
                    className={`px-3.5 py-1.5 transition-colors cursor-pointer ${
                      financingMode === 'financed' ? 'bg-slate-950 text-white font-bold' : 'bg-slate-100 text-slate-700 border border-slate-200'
                    }`}
                  >
                    Mortgage Debt
                  </button>
                  <button
                    onClick={() => setFinancingMode('cash')}
                    className={`px-3.5 py-1.5 transition-colors cursor-pointer ${
                      financingMode === 'cash' ? 'bg-slate-950 text-white font-bold' : 'bg-slate-100 text-slate-700 border border-slate-200'
                    }`}
                  >
                    100% Equity
                  </button>
                </div>
              </div>

              {financingMode === 'financed' && (
                <div className="space-y-5 pt-4 border-t border-slate-100">
                  <div className="space-y-2">
                    <div className="flex justify-between text-xs font-mono">
                      <span className="text-slate-600">Loan to Value (LTV)</span>
                      <span className="text-slate-950 font-bold">{ltvPercent}% ({formatCurrency(loanAmount)})</span>
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

                  <div className="grid grid-cols-2 gap-4 font-mono text-xs">
                    <div className="space-y-1">
                      <label className="text-[10px] uppercase text-slate-500 font-semibold block">MORTGAGE RATE (%)</label>
                      <input
                        type="number"
                        step="0.05"
                        value={interestRate}
                        onChange={(e) => setInterestRate(Number(e.target.value))}
                        className="w-full p-2.5 border border-slate-200 bg-slate-50 text-xs font-mono text-slate-900 focus:border-slate-900 focus:bg-white outline-none"
                      />
                    </div>
                    <div className="space-y-1">
                      <label className="text-[10px] uppercase text-slate-500 font-semibold block">TENOR (YEARS)</label>
                      <input
                        type="number"
                        value={loanTermYears}
                        onChange={(e) => setLoanTermYears(Number(e.target.value))}
                        className="w-full p-2.5 border border-slate-200 bg-slate-50 text-xs font-mono text-slate-900 focus:border-slate-900 focus:bg-white outline-none"
                      />
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Operating Parameters */}
            <div className="space-y-4 p-6 sm:p-7 bg-white border border-slate-200 shadow-xs font-mono text-xs">
              <span className="uppercase text-slate-500 font-semibold block">Operating Yield Parameters</span>
              
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-1">
                  <label className="text-[10px] uppercase text-slate-500 font-semibold block">EST. GROSS YIELD (%)</label>
                  <input
                    type="number"
                    step="0.1"
                    value={grossYieldPercent}
                    onChange={(e) => setGrossYieldPercent(Number(e.target.value))}
                    className="w-full p-2.5 border border-slate-200 bg-slate-50 text-xs font-mono text-slate-900 focus:border-slate-900 focus:bg-white outline-none"
                  />
                </div>
                <div className="space-y-1">
                  <label className="text-[10px] uppercase text-slate-500 font-semibold block">SERVICE CHARGE (AED/SQFT)</label>
                  <input
                    type="number"
                    value={serviceChargePerSqft}
                    onChange={(e) => setServiceChargePerSqft(Number(e.target.value))}
                    className="w-full p-2.5 border border-slate-200 bg-slate-50 text-xs font-mono text-slate-900 focus:border-slate-900 focus:bg-white outline-none"
                  />
                </div>
              </div>
            </div>

          </div>

          {/* Right 6 cols: Institutional Financial Dossier */}
          <div className="lg:col-span-6 space-y-8 sticky top-28">
            <div className="p-6 sm:p-8 bg-white border border-slate-200 space-y-6 shadow-md font-mono text-xs">
              
              <div className="space-y-1 border-b border-slate-200 pb-4">
                <span className="text-[10px] font-mono uppercase tracking-widest text-slate-500 font-bold block">
                  FINANCIAL MEMORANDUM
                </span>
                <h3 className="text-xl font-light text-slate-950 font-serif">
                  Statutory Acquisition Ledger
                </h3>
              </div>

              {/* Breakdown Rows */}
              <div className="space-y-2.5">
                <div className="flex justify-between py-1.5 border-b border-slate-100">
                  <span className="text-slate-600">Asset Agreed Value</span>
                  <span className="text-slate-950 font-bold">{formatCurrency(propertyPrice)}</span>
                </div>
                <div className="flex justify-between py-1.5 border-b border-slate-100">
                  <span className="text-slate-600">DLD Sale Registration (4%)</span>
                  <span className="text-slate-950 font-bold">{formatCurrency(dldFee)}</span>
                </div>
                <div className="flex justify-between py-1.5 border-b border-slate-100">
                  <span className="text-slate-600">DLD Admin &amp; Map Tariff</span>
                  <span className="text-slate-950 font-bold">{formatCurrency(dldAdminFee)}</span>
                </div>
                <div className="flex justify-between py-1.5 border-b border-slate-100">
                  <span className="text-slate-600">Registration Trustee Fee</span>
                  <span className="text-slate-950 font-bold">{formatCurrency(registrationTrusteeFee)}</span>
                </div>
                {financingMode === 'financed' && (
                  <>
                    <div className="flex justify-between py-1.5 border-b border-slate-100">
                      <span className="text-slate-600">Mortgage Registration (0.25%)</span>
                      <span className="text-slate-950 font-bold">{formatCurrency(mortgageRegFee)}</span>
                    </div>
                    <div className="flex justify-between py-1.5 border-b border-slate-100">
                      <span className="text-slate-600">Mortgage Admin Fee</span>
                      <span className="text-slate-950 font-bold">{formatCurrency(mortgageAdminFee)}</span>
                    </div>
                  </>
                )}
                <div className="flex justify-between py-1.5">
                  <span className="text-slate-600">Statutory Legal &amp; Conveyance Est.</span>
                  <span className="text-slate-950 font-bold">{formatCurrency(legalConveyanceEst)}</span>
                </div>
              </div>

              {/* Total Outlay Highlight */}
              <div className="pt-4 border-t border-slate-200 space-y-2">
                <div className="flex justify-between items-baseline">
                  <span className="text-xs uppercase tracking-widest font-bold text-slate-950">
                    TOTAL ACQUISITION OUTLAY
                  </span>
                  <span className="text-2xl sm:text-3xl font-light tabular-nums text-slate-950 font-bold">
                    {formatCurrency(totalAcquisitionOutlay)}
                  </span>
                </div>
                {financingMode === 'financed' && (
                  <div className="flex justify-between items-baseline text-xs text-slate-500 pt-1">
                    <span>Initial Equity Required:</span>
                    <span className="font-bold text-slate-950">{formatCurrency(initialEquityRequired)}</span>
                  </div>
                )}
              </div>

              {/* Yield & Cash Flow Analysis */}
              <div className="pt-4 border-t border-slate-200 space-y-4">
                <span className="text-xs uppercase text-slate-500 font-bold block">
                  CASH FLOW &amp; YIELD PROJECTIONS
                </span>

                <div className="grid grid-cols-2 gap-4">
                  <div className="p-3.5 bg-slate-50 border border-slate-200 space-y-1">
                    <span className="text-slate-500 block text-[10px]">NET OPERATING INCOME</span>
                    <span className="text-base font-bold text-slate-950 block">{formatCurrency(netOperatingIncome)}</span>
                    <span className="text-[9px] text-slate-400">Per Annum</span>
                  </div>

                  <div className="p-3.5 bg-slate-50 border border-slate-200 space-y-1">
                    <span className="text-slate-500 block text-[10px]">UNLEVERED NET YIELD</span>
                    <span className="text-base font-bold text-slate-950 block">{netYieldUnlevered.toFixed(2)}%</span>
                    <span className="text-[9px] text-slate-400">Net of service charges</span>
                  </div>
                </div>

                {financingMode === 'financed' && (
                  <div className="p-3.5 bg-slate-50 border border-slate-200 space-y-2">
                    <div className="flex justify-between">
                      <span className="text-slate-600">Monthly Debt Service:</span>
                      <span className="font-bold text-slate-950">{formatCurrency(monthlyMortgage)} / mo</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-600">Cash-on-Cash Return:</span>
                      <span className="font-bold text-slate-950">{cashOnCashYield.toFixed(2)}% / yr</span>
                    </div>
                  </div>
                )}
              </div>

              {/* Action */}
              <div className="pt-2">
                <Link
                  href="/private-client"
                  className="w-full py-3.5 bg-slate-950 hover:bg-slate-800 text-white text-xs font-mono uppercase tracking-[0.14em] font-bold flex items-center justify-center gap-2 shadow-xs transition-colors"
                >
                  <span>Request Institutional Mandate</span>
                  <ArrowRight className="h-3.5 w-3.5" />
                </Link>
              </div>

            </div>
          </div>

        </div>

      </main>

    </div>
  )
}