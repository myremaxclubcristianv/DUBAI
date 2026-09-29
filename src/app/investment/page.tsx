'use client'

import * as React from 'react'
import { useClient } from '@/lib/context/client-context'
import { ProvenanceTag } from '@/components/layout/layout-primitives'

export default function InvestmentPage() {
  const { formatCurrency } = useClient()

  // Deterministic Calculator State
  const [purchasePrice, setPurchasePrice] = React.useState(10000000)
  const [isFinanced, setIsFinanced] = React.useState(true)
  const [ltvPercent, setLtvPercent] = React.useState(60)
  const [interestRate, setInterestRate] = React.useState(4.75)
  const [loanTermYears, setLoanTermYears] = React.useState(25)
  const [estGrossYield, setEstGrossYield] = React.useState(6.5)
  const [serviceChargePerSqft, setServiceChargePerSqft] = React.useState(22)
  const [propertyAreaSqft] = React.useState(2500)

  // Calculations
  const buyerDldFee = purchasePrice * 0.02
  const dldTrusteeAdmin = purchasePrice >= 500000 ? 4000 : 2000
  const titleDeedFee = 580
  
  const loanAmount = isFinanced ? (purchasePrice * (ltvPercent / 100)) : 0
  const mortgageRegFee = isFinanced ? (loanAmount * 0.0025) : 0
  const mortgageAdminFee = isFinanced ? 290 : 0
  
  const totalStatutoryClosingCosts = buyerDldFee + dldTrusteeAdmin + titleDeedFee + mortgageRegFee + mortgageAdminFee
  const totalInitialCapitalRequired = (purchasePrice - loanAmount) + totalStatutoryClosingCosts

  // Mortgage Payment (Monthly)
  const monthlyRate = (interestRate / 100) / 12
  const totalMonths = loanTermYears * 12
  const monthlyMortgagePayment = isFinanced && loanAmount > 0
    ? (loanAmount * (monthlyRate * Math.pow(1 + monthlyRate, totalMonths))) / (Math.pow(1 + monthlyRate, totalMonths) - 1)
    : 0
  const annualMortgagePayment = monthlyMortgagePayment * 12

  // Rental Income & Net Yield
  const annualGrossRent = purchasePrice * (estGrossYield / 100)
  const annualServiceCharge = serviceChargePerSqft * propertyAreaSqft
  const annualMaintenanceReserve = annualGrossRent * 0.05
  const netOperatingIncome = Math.max(0, annualGrossRent - annualServiceCharge - annualMaintenanceReserve)
  const unleveredNetYield = (netOperatingIncome / (purchasePrice + buyerDldFee + dldTrusteeAdmin)) * 100
  const netCashFlowAfterDebt = netOperatingIncome - annualMortgagePayment
  const cashOnCashReturn = totalInitialCapitalRequired > 0 ? (netCashFlowAfterDebt / totalInitialCapitalRequired) * 100 : 0

  return (
    <div className="bg-[#ffffff] text-[#111111] min-h-screen pb-24">
      
      {/* 1. EDITORIAL HEADER */}
      <section className="pt-20 pb-20 sm:pt-28 sm:pb-28 border-b border-black/[0.06] bg-[#fafaf8]">
        <div className="w-full max-w-[1120px] mx-auto px-6 sm:px-8 space-y-6">
          <div className="flex items-center justify-between">
            <span className="text-[11px] font-mono font-medium uppercase tracking-[0.2em] text-[#9f8144]">
              CAPITAL &bull; UNDERWRITING &bull; STATUTORY FRAMEWORK
            </span>
            <ProvenanceTag sourceClass="CALCULATED" sourceName="DLD &bull; CBUAE &bull; FTA Laws" />
          </div>

          <h1 className="text-[38px] sm:text-[54px] lg:text-[64px] font-light tracking-[-0.03em] leading-[1.04] text-[#111111]">
            Investment Underwriting &amp; Capital Framework
          </h1>
          
          <p className="text-base sm:text-xl text-[#6b6b6b] font-light max-w-2xl leading-relaxed">
            Institutional research on Dubai freehold acquisitions, statutory transaction schedules, mortgage leverage boundaries, and natural person tax exemptions.
          </p>
        </div>
      </section>

      {/* 2. STATUTORY CAPITAL FRAMEWORK (4 Pillars, Minimal Lines) */}
      <section className="py-24 sm:py-32 border-b border-black/[0.06] bg-[#ffffff]">
        <div className="w-full max-w-[1280px] mx-auto px-6 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
            
            <div className="space-y-2 border-t border-black/[0.08] pt-4">
              <span className="text-[10px] font-mono text-[#9f8144] font-medium uppercase">01 &bull; Statutory Fees</span>
              <h3 className="text-lg font-normal text-[#111111]">DLD Sale Registration</h3>
              <p className="text-xs text-[#6b6b6b] font-light leading-relaxed">
                4% combined statutory transfer fee (standard 2% buyer / 2% seller allocation under Dubai Law No. 7 of 2006).
              </p>
              <div className="pt-1 text-[10px] font-mono text-[#8e8e93]">Source: DLD Fee Schedule</div>
            </div>

            <div className="space-y-2 border-t border-black/[0.08] pt-4">
              <span className="text-[10px] font-mono text-[#9f8144] font-medium uppercase">02 &bull; Bank Financing</span>
              <h3 className="text-lg font-normal text-[#111111]">CBUAE Mortgage LTV</h3>
              <p className="text-xs text-[#6b6b6b] font-light leading-relaxed">
                Expat LTV limit up to 80% on first residential property (≤ AED 5M) under CBUAE regulations, with 0.25% mortgage registration.
              </p>
              <div className="pt-1 text-[10px] font-mono text-[#8e8e93]">Source: CBUAE Regulation</div>
            </div>

            <div className="space-y-2 border-t border-black/[0.08] pt-4">
              <span className="text-[10px] font-mono text-[#9f8144] font-medium uppercase">03 &bull; Tax Context</span>
              <h3 className="text-lg font-normal text-[#111111]">No UAE Personal Income Tax</h3>
              <p className="text-xs text-[#6b6b6b] font-light leading-relaxed">
                Natural persons are not subject to personal income or capital gains tax. Real estate investment income is excluded from Corporate Tax.
              </p>
              <div className="pt-1 text-[10px] font-mono text-[#8e8e93]">Source: FTA Cabinet Dec. 49/2023</div>
            </div>

            <div className="space-y-2 border-t border-black/[0.08] pt-4">
              <span className="text-[10px] font-mono text-[#9f8144] font-medium uppercase">04 &bull; Currency Security</span>
              <h3 className="text-lg font-normal text-[#111111]">Fixed USD Peg</h3>
              <p className="text-xs text-[#6b6b6b] font-light leading-relaxed">
                The UAE Dirham is formally pegged to the US Dollar at 1 USD = 3.6725 AED, eliminating FX risk for USD-denominated capital.
              </p>
              <div className="pt-1 text-[10px] font-mono text-[#8e8e93]">Source: Central Bank of the UAE</div>
            </div>

          </div>
        </div>
      </section>

      {/* 3. DETERMINISTIC UNDERWRITING CALCULATOR */}
      <section className="py-24 sm:py-36 border-b border-black/[0.06] bg-[#fafaf8]">
        <div className="w-full max-w-[1280px] mx-auto px-6 sm:px-8 lg:px-12 space-y-12">
          
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-black/[0.06] pb-6">
            <div className="space-y-1">
              <span className="text-[11px] font-mono font-medium uppercase tracking-[0.2em] text-[#9f8144] block">
                DETERMINISTIC ACQUISITION CALCULATOR
              </span>
              <h2 className="text-2xl sm:text-4xl font-light tracking-tight text-[#111111]">
                Interactive Underwriting Desk
              </h2>
            </div>
            <div className="flex items-center gap-2">
              <ProvenanceTag sourceClass="CALCULATED" sourceName="Audited Formulas" />
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            
            {/* Left 50%: Inputs Column */}
            <div className="lg:col-span-6 bg-[#ffffff] p-8 rounded-2xl border border-black/[0.06] space-y-8">
              <div className="flex items-center justify-between border-b border-black/[0.06] pb-4">
                <span className="text-xs font-mono font-medium uppercase text-[#111111]">1. Underwriting Assumptions</span>
                <span className="text-[11px] font-mono text-[#6b6b6b]">All Figures in AED</span>
              </div>

              {/* Purchase Price Input */}
              <div className="space-y-2">
                <div className="flex justify-between text-xs">
                  <label className="font-semibold text-[#111111]">Agreed Purchase Price</label>
                  <span className="font-mono font-bold text-[#111111]">{formatCurrency(purchasePrice)}</span>
                </div>
                <input
                  type="range"
                  min="1000000"
                  max="50000000"
                  step="500000"
                  value={purchasePrice}
                  onChange={(e) => setPurchasePrice(Number(e.target.value))}
                  className="w-full accent-[#111111] cursor-pointer"
                />
                <div className="flex justify-between text-[10px] font-mono text-[#6b6b6b]">
                  <span>AED 1M</span>
                  <span>AED 25M</span>
                  <span>AED 50M+</span>
                </div>
              </div>

              {/* Financing Toggle */}
              <div className="pt-2 border-t border-[#f5f5f3] space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-semibold text-[#111111]">Mortgage Debt Financing</span>
                  <div className="flex border border-[#e5e5ea] rounded overflow-hidden text-xs">
                    <button
                      onClick={() => setIsFinanced(true)}
                      className={`px-3 py-1 font-medium transition-colors ${
                        isFinanced ? 'bg-[#111111] text-[#fafaf8]' : 'text-[#6b6b6b]'
                      }`}
                    >
                      Financed
                    </button>
                    <button
                      onClick={() => setIsFinanced(false)}
                      className={`px-3 py-1 font-medium transition-colors ${
                        !isFinanced ? 'bg-[#111111] text-[#fafaf8]' : 'text-[#6b6b6b]'
                      }`}
                    >
                      100% Cash
                    </button>
                  </div>
                </div>

                {isFinanced && (
                  <div className="space-y-4 pt-2">
                    <div className="space-y-1">
                      <div className="flex justify-between text-xs">
                        <label className="text-[#484848]">Loan-to-Value (LTV %)</label>
                        <span className="font-mono font-semibold">{ltvPercent}% ({formatCurrency(loanAmount)})</span>
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

                    <div className="grid grid-cols-2 gap-3">
                      <div className="space-y-1">
                        <label className="text-[11px] text-[#484848]">Mortgage Rate (%)</label>
                        <input
                          type="number"
                          step="0.1"
                          value={interestRate}
                          onChange={(e) => setInterestRate(Number(e.target.value))}
                          className="w-full p-2 border border-[#e5e5ea] rounded text-xs font-mono"
                        />
                      </div>
                      <div className="space-y-1">
                        <label className="text-[11px] text-[#484848]">Term (Years)</label>
                        <input
                          type="number"
                          value={loanTermYears}
                          onChange={(e) => setLoanTermYears(Number(e.target.value))}
                          className="w-full p-2 border border-[#e5e5ea] rounded text-xs font-mono"
                        />
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* Yield & Property Specs */}
              <div className="pt-2 border-t border-[#f5f5f3] space-y-3">
                <div className="grid grid-cols-2 gap-3">
                  <div className="space-y-1">
                    <label className="text-[11px] text-[#484848]">Estimated Gross Yield (%)</label>
                    <input
                      type="number"
                      step="0.1"
                      value={estGrossYield}
                      onChange={(e) => setEstGrossYield(Number(e.target.value))}
                      className="w-full p-2 border border-[#e5e5ea] rounded text-xs font-mono"
                    />
                  </div>
                  <div className="space-y-1">
                    <label className="text-[11px] text-[#484848]">Service Charge (AED/sqft)</label>
                    <input
                      type="number"
                      value={serviceChargePerSqft}
                      onChange={(e) => setServiceChargePerSqft(Number(e.target.value))}
                      className="w-full p-2 border border-[#e5e5ea] rounded text-xs font-mono"
                    />
                  </div>
                </div>
              </div>

            </div>

            {/* Right 50%: Deterministic Statutory Outputs Column */}
            <div className="lg:col-span-6 space-y-6">
              
              {/* Closing Cost Memorandum */}
              <div className="bg-[#ffffff] p-6 sm:p-7 rounded border border-[#e5e5ea] space-y-4">
                <div className="flex items-center justify-between border-b border-[#e5e5ea] pb-3">
                  <span className="text-xs font-mono font-semibold uppercase text-[#111111]">2. Statutory Acquisition Cost</span>
                  <ProvenanceTag sourceClass="CALCULATED" sourceName="DLD Reg. Schedule" />
                </div>

                <div className="space-y-2.5 text-xs font-mono">
                  <div className="flex justify-between py-1 border-b border-[#f5f5f3]">
                    <span className="text-[#6b6b6b]">Buyer DLD Transfer Fee (2%)</span>
                    <span className="font-semibold text-[#111111]">{formatCurrency(buyerDldFee)}</span>
                  </div>
                  <div className="flex justify-between py-1 border-b border-[#f5f5f3]">
                    <span className="text-[#6b6b6b]">DLD Registration Trustee Fee</span>
                    <span className="font-semibold text-[#111111]">{formatCurrency(dldTrusteeAdmin)}</span>
                  </div>
                  <div className="flex justify-between py-1 border-b border-[#f5f5f3]">
                    <span className="text-[#6b6b6b]">Title Deed Certificate Issuance</span>
                    <span className="font-semibold text-[#111111]">{formatCurrency(titleDeedFee)}</span>
                  </div>
                  {isFinanced && (
                    <>
                      <div className="flex justify-between py-1 border-b border-[#f5f5f3]">
                        <span className="text-[#6b6b6b]">Mortgage Registration (0.25%)</span>
                        <span className="font-semibold text-[#111111]">{formatCurrency(mortgageRegFee)}</span>
                      </div>
                      <div className="flex justify-between py-1 border-b border-[#f5f5f3]">
                        <span className="text-[#6b6b6b]">Mortgage Admin Fee</span>
                        <span className="font-semibold text-[#111111]">{formatCurrency(mortgageAdminFee)}</span>
                      </div>
                    </>
                  )}
                  <div className="flex justify-between pt-2 text-sm font-bold border-t border-[#111111]">
                    <span>Total Initial Capital Outlay</span>
                    <span className="text-[#111111] tabular-nums">{formatCurrency(totalInitialCapitalRequired)}</span>
                  </div>
                </div>
              </div>

              {/* Yield & Cash Flow Summary */}
              <div className="bg-[#ffffff] p-6 sm:p-7 rounded border border-[#e5e5ea] space-y-4">
                <div className="flex items-center justify-between border-b border-[#e5e5ea] pb-3">
                  <span className="text-xs font-mono font-semibold uppercase text-[#111111]">3. Cash Flow &amp; Net Yield Model</span>
                  <ProvenanceTag sourceClass="CALCULATED" sourceName="Deterministic" />
                </div>

                <div className="grid grid-cols-2 gap-4 text-xs font-mono">
                  <div className="p-3 rounded bg-[#fafaf8] border border-[#e5e5ea]">
                    <span className="text-[10px] text-[#6b6b6b] block">ANNUAL GROSS RENT</span>
                    <span className="text-base font-bold text-[#111111]">{formatCurrency(annualGrossRent)}</span>
                  </div>
                  <div className="p-3 rounded bg-[#fafaf8] border border-[#e5e5ea]">
                    <span className="text-[10px] text-[#6b6b6b] block">ANNUAL SERVICE CHARGE</span>
                    <span className="text-base font-bold text-[#111111]">{formatCurrency(annualServiceCharge)}</span>
                  </div>
                  <div className="p-3 rounded bg-[#fafaf8] border border-[#e5e5ea]">
                    <span className="text-[10px] text-[#6b6b6b] block">NET OPERATING INCOME</span>
                    <span className="text-base font-bold text-emerald-800">{formatCurrency(netOperatingIncome)}</span>
                  </div>
                  <div className="p-3 rounded bg-[#fafaf8] border border-[#e5e5ea]">
                    <span className="text-[10px] text-[#6b6b6b] block">UNLEVERED NET YIELD</span>
                    <span className="text-base font-bold text-emerald-800">{unleveredNetYield.toFixed(2)}%</span>
                  </div>
                </div>

                {isFinanced && (
                  <div className="space-y-2 pt-2 border-t border-[#f5f5f3]">
                    <div className="p-3 rounded bg-[#fafaf8] border border-[#e5e5ea] text-xs font-mono flex items-center justify-between">
                      <span className="text-[#6b6b6b]">Est. Monthly Debt Service:</span>
                      <span className="font-bold text-[#111111]">{formatCurrency(monthlyMortgagePayment)} / month</span>
                    </div>
                    <div className="p-3 rounded bg-[#fafaf8] border border-[#e5e5ea] text-xs font-mono flex items-center justify-between">
                      <span className="text-[#6b6b6b]">Est. Cash-on-Cash Return:</span>
                      <span className="font-bold text-emerald-800">{cashOnCashReturn.toFixed(2)}% / yr</span>
                    </div>
                  </div>
                )}
              </div>

            </div>

          </div>

          <div className="p-4 rounded bg-[#ffffff] border border-[#e5e5ea] text-xs text-[#6b6b6b] leading-relaxed">
            <strong>Calculation Transparency:</strong> All statutory closing fees are computed strictly in accordance with published schedules from the Dubai Land Department (Law No. 7 of 2006, Resolution No. 30 of 2013) and the Central Bank of the UAE. Net rental calculations are indicative models based on user inputs and do not constitute guaranteed returns.
          </div>

        </div>
      </section>

    </div>
  )
}