'use client'

import * as React from 'react'
import { SourceBadge } from '@/components/ui/source-badge'
import { Scale } from 'lucide-react'

import { calculateRomanianRentalTax } from '@/lib/calculators/investment'

export function DubaiVsRomaniaComparison() {
  // Dubai Inputs (in AED)
  const [dubaiPriceAed, setDubaiPriceAed] = React.useState<number>(3500000)
  const [dubaiAnnualRentAed, setDubaiAnnualRentAed] = React.useState<number>(240000)
  const [dubaiServiceChargeAed, setDubaiServiceChargeAed] = React.useState<number>(28000)
  const [dubaiVacancyPct, setDubaiVacancyPct] = React.useState<number>(5)

  // Romania Inputs (in EUR)
  const [roPriceEur, setRoPriceEur] = React.useState<number>(250000)
  const [roMonthlyRentEur, setRoMonthlyRentEur] = React.useState<number>(1400)
  const [roMaintenanceMonthlyEur, setRoMaintenanceMonthlyEur] = React.useState<number>(100)
  const [roVacancyPct, setRoVacancyPct] = React.useState<number>(8)

  const [fiscalYear, setFiscalYear] = React.useState<number>(2026)

  // Benchmark Conversion Rates
  const EUR_TO_RON = 4.9765

  // Dubai Computations
  const dubaiDldFee = dubaiPriceAed * 0.04
  const dubaiTrusteeFee = 4200
  const dubaiAdminFee = 520
  const dubaiAgencyFee = dubaiPriceAed * 0.02 * 1.05 // 2% + 5% VAT
  const dubaiTotalAcquisitionFees = dubaiDldFee + dubaiTrusteeFee + dubaiAdminFee + dubaiAgencyFee
  const dubaiTotalCashOutlayAed = dubaiPriceAed + dubaiTotalAcquisitionFees

  const dubaiGrossRent = dubaiAnnualRentAed
  const dubaiEffectiveRent = dubaiGrossRent * (1 - dubaiVacancyPct / 100)
  const dubaiNetOperatingIncome = Math.max(0, dubaiEffectiveRent - dubaiServiceChargeAed)
  const dubaiTaxOnRent = 0 // 0% Personal income tax in UAE
  const dubaiNetCashFlowAed = dubaiNetOperatingIncome - dubaiTaxOnRent

  const dubaiGrossYield = (dubaiGrossRent / dubaiPriceAed) * 100
  const dubaiNetYieldOnOutlay = (dubaiNetCashFlowAed / dubaiTotalCashOutlayAed) * 100

  // Romania Computations
  const roNotaryFeeEur = roPriceEur * 0.018 // ~1.8% average notary honorarium + 19% VAT
  const roAncpiFeeEur = roPriceEur * 0.0015 // 0.15% ANCPI registration fee for individuals
  const roAgencyFeeEur = roPriceEur * 0.02 * 1.19 // 2% agency + 19% VAT
  const roTotalAcquisitionFeesEur = roNotaryFeeEur + roAncpiFeeEur + roAgencyFeeEur
  const roTotalCashOutlayEur = roPriceEur + roTotalAcquisitionFeesEur

  const roAnnualGrossRentEur = roMonthlyRentEur * 12
  const roEffectiveRentEur = roAnnualGrossRentEur * (1 - roVacancyPct / 100)
  const roOperatingExpensesEur = roMaintenanceMonthlyEur * 12
  const roNetBeforeTaxEur = Math.max(0, roEffectiveRentEur - roOperatingExpensesEur)

  // Romanian Tax Law: Law 227/2015 amended by OUG 115/2023; FY 2026 baseline HG nr. 1506/2024
  const roTaxResult = calculateRomanianRentalTax(roEffectiveRentEur, EUR_TO_RON, fiscalYear)
  const roNetCashFlowEur = roNetBeforeTaxEur - roTaxResult.totalTaxEur

  const roGrossYield = (roAnnualGrossRentEur / roPriceEur) * 100
  const roNetYieldOnOutlay = (roNetCashFlowEur / roTotalCashOutlayEur) * 100

  return (
    <div className="bg-white rounded-3xl border border-black/10 overflow-hidden shadow-sm">
      <div className="p-6 sm:p-8 border-b border-black/10 flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-white">
        <div>
          <div className="flex items-center gap-2">
            <Scale className="h-4 w-4 text-accent" />
            <h2 className="text-xl sm:text-2xl font-extrabold text-[#1d1d1f] tracking-tight">
              Dubai vs Romania Cross-Jurisdictional Real Estate Underwriting
            </h2>
          </div>
          <p className="text-xs text-[#6e6e73] mt-1">
            Side-by-side comparison of acquisition taxes, rental yields, withholding rules, and sovereign currency risk.
          </p>
        </div>
        <SourceBadge status="VERIFIED" sourceName="DLD Law 7/2006 & Romanian Fiscal Code Law 227/2015" />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 divide-y lg:divide-y-0 lg:divide-x divide-black/10">
        
        {/* DUBAI SIDE */}
        <div className="p-6 sm:p-8 space-y-6 bg-white">
          <div className="flex items-center justify-between pb-3 border-b border-black/10">
            <div className="flex items-center gap-2">
              <span className="text-xl">🇦🇪</span>
              <div>
                <h3 className="text-base font-extrabold text-[#1d1d1f]">Dubai Freehold Asset</h3>
                <span className="text-[10px] font-mono text-[#6e6e73]">United Arab Emirates (AED / USD Peg)</span>
              </div>
            </div>
            <span className="px-2.5 py-1 rounded-full bg-emerald-100 text-emerald-800 text-[10px] font-mono font-bold">
              0% Tax Jurisdiction
            </span>
          </div>

          {/* Dubai Inputs */}
          <div className="space-y-4">
            <div>
              <div className="flex justify-between text-xs mb-1">
                <span className="text-[#6e6e73] font-medium">Purchase Price</span>
                <span className="font-mono text-[#1d1d1f] font-bold">AED {dubaiPriceAed.toLocaleString()} (~${Math.round(dubaiPriceAed / 3.6725).toLocaleString()})</span>
              </div>
              <input
                type="range"
                min={1000000}
                max={15000000}
                step={100000}
                value={dubaiPriceAed}
                onChange={(e) => setDubaiPriceAed(Number(e.target.value))}
                className="w-full accent-slate-900 bg-black/10 h-1.5 rounded-lg cursor-pointer"
              />
            </div>

            <div>
              <div className="flex justify-between text-xs mb-1">
                <span className="text-[#6e6e73] font-medium">Expected Annual Rent</span>
                <span className="font-mono text-[#1d1d1f] font-bold">AED {dubaiAnnualRentAed.toLocaleString()}</span>
              </div>
              <input
                type="range"
                min={80000}
                max={800000}
                step={5000}
                value={dubaiAnnualRentAed}
                onChange={(e) => setDubaiAnnualRentAed(Number(e.target.value))}
                className="w-full accent-slate-900 bg-black/10 h-1.5 rounded-lg cursor-pointer"
              />
            </div>

            <div className="grid grid-cols-2 gap-3 text-xs">
              <div>
                <label className="text-[#6e6e73] block mb-1">Annual Service Charge (AED)</label>
                <input
                  type="number"
                  value={dubaiServiceChargeAed}
                  onChange={(e) => setDubaiServiceChargeAed(Number(e.target.value))}
                  className="w-full p-2 bg-[#f5f5f7] border border-black/10 rounded font-mono text-xs"
                />
              </div>
              <div>
                <label className="text-[#6e6e73] block mb-1">Vacancy Allowance (%)</label>
                <input
                  type="number"
                  value={dubaiVacancyPct}
                  onChange={(e) => setDubaiVacancyPct(Number(e.target.value))}
                  className="w-full p-2 bg-[#f5f5f7] border border-black/10 rounded font-mono text-xs"
                />
              </div>
            </div>
          </div>

          {/* Dubai Results Card */}
          <div className="p-5 rounded-2xl bg-[#070e1c] text-white space-y-4">
            <div className="flex justify-between items-baseline">
              <span className="text-xs text-slate-300 uppercase tracking-widest font-mono">Net Unlevered Yield</span>
              <span className="text-3xl font-black font-mono text-emerald-400">{dubaiNetYieldOnOutlay.toFixed(2)}%</span>
            </div>

            <div className="space-y-2 text-xs font-mono pt-3 border-t border-white/10">
              <div className="flex justify-between text-slate-300">
                <span>Acquisition Fees (DLD 4% + Trustee):</span>
                <span className="text-white">AED {Math.round(dubaiTotalAcquisitionFees).toLocaleString()} ({(dubaiTotalAcquisitionFees / dubaiPriceAed * 100).toFixed(1)}%)</span>
              </div>
              <div className="flex justify-between text-slate-300">
                <span>Total Cash Required:</span>
                <span className="text-white">AED {Math.round(dubaiTotalCashOutlayAed).toLocaleString()}</span>
              </div>
              <div className="flex justify-between text-slate-300">
                <span>Gross Rental Yield:</span>
                <span className="text-white">{dubaiGrossYield.toFixed(2)}%</span>
              </div>
              <div className="flex justify-between text-slate-300">
                <span>Personal Income Tax on Rent:</span>
                <span className="text-emerald-400 font-bold">AED 0 (0% UAE Tax)</span>
              </div>
              <div className="flex justify-between text-slate-300">
                <span>Capital Gains Tax at Exit:</span>
                <span className="text-emerald-400 font-bold">0% Statutory</span>
              </div>
              <div className="flex justify-between text-slate-300">
                <span>Annual Net In-Hand Cash Flow:</span>
                <span className="text-emerald-400 font-bold">AED {Math.round(dubaiNetCashFlowAed).toLocaleString()}</span>
              </div>
            </div>
          </div>

          <div className="text-[11px] text-[#6e6e73] space-y-1">
            <div className="font-semibold text-[#1d1d1f]">Key Dubai Structural Pillars:</div>
            <p>• Zero personal income tax on natural person rental income (Federal Decree-Law No. 47/2022).</p>
            <p>• 1 USD = 3.6725 AED fixed peg protects against foreign exchange devaluation.</p>
            <p>• Straightforward exit with no capital gains withholding tax.</p>
          </div>
        </div>

        {/* ROMANIA SIDE */}
        <div className="p-6 sm:p-8 space-y-6 bg-[#fbfbfd]">
          <div className="flex items-center justify-between pb-3 border-b border-black/10">
            <div className="flex items-center gap-2">
              <span className="text-xl">🇷🇴</span>
              <div>
                <h3 className="text-base font-extrabold text-[#1d1d1f]">Romania Asset</h3>
                <span className="text-[10px] font-mono text-[#6e6e73]">European Union (EUR / RON Economy)</span>
              </div>
            </div>
            <span className="px-2.5 py-1 rounded-full bg-blue-100 text-blue-800 text-[10px] font-mono font-bold">
              EU Standard Jurisdiction
            </span>
          </div>

          {/* Romania Inputs */}
          <div className="space-y-4">
            <div>
              <div className="flex justify-between text-xs mb-1">
                <span className="text-[#6e6e73] font-medium">Purchase Price</span>
                <span className="font-mono text-[#1d1d1f] font-bold">€{roPriceEur.toLocaleString()} (~{Math.round(roPriceEur * EUR_TO_RON).toLocaleString()} RON)</span>
              </div>
              <input
                type="range"
                min={75000}
                max={1500000}
                step={10000}
                value={roPriceEur}
                onChange={(e) => setRoPriceEur(Number(e.target.value))}
                className="w-full accent-blue-900 bg-black/10 h-1.5 rounded-lg cursor-pointer"
              />
            </div>

            <div>
              <div className="flex justify-between text-xs mb-1">
                <span className="text-[#6e6e73] font-medium">Expected Monthly Rent</span>
                <span className="font-mono text-[#1d1d1f] font-bold">€{roMonthlyRentEur.toLocaleString()} / mo (€{(roMonthlyRentEur * 12).toLocaleString()} / yr)</span>
              </div>
              <input
                type="range"
                min={400}
                max={8000}
                step={50}
                value={roMonthlyRentEur}
                onChange={(e) => setRoMonthlyRentEur(Number(e.target.value))}
                className="w-full accent-blue-900 bg-black/10 h-1.5 rounded-lg cursor-pointer"
              />
            </div>

            <div className="grid grid-cols-2 gap-3 text-xs">
              <div>
                <label className="text-[#6e6e73] block mb-1">Monthly HOA / Admin (€)</label>
                <input
                  type="number"
                  value={roMaintenanceMonthlyEur}
                  onChange={(e) => setRoMaintenanceMonthlyEur(Number(e.target.value))}
                  className="w-full p-2 bg-white border border-black/10 rounded font-mono text-xs"
                />
              </div>
              <div>
                <label className="text-[#6e6e73] block mb-1">Vacancy Allowance (%)</label>
                <input
                  type="number"
                  value={roVacancyPct}
                  onChange={(e) => setRoVacancyPct(Number(e.target.value))}
                  className="w-full p-2 bg-white border border-black/10 rounded font-mono text-xs"
                />
              </div>
            </div>
            <div className="pt-2 border-t border-black/10">
              <div className="flex items-center justify-between text-xs mb-1.5">
                <span className="font-semibold text-[#1d1d1f]">An Fiscal de Referință (ANAF)</span>
                <span className="text-[10px] font-mono text-blue-900 bg-blue-50 px-2 py-0.5 rounded border border-blue-200">
                  Salariu Minim: {roTaxResult.minWageMonthlyRon.toLocaleString()} RON/lună
                </span>
              </div>
              <div className="grid grid-cols-2 gap-2 text-xs">
                <button
                  type="button"
                  onClick={() => setFiscalYear(2026)}
                  className={`py-1.5 px-3 rounded-lg border font-mono text-center cursor-pointer transition-colors ${
                    fiscalYear === 2026
                      ? 'bg-blue-950 text-white border-blue-950 font-bold shadow-xs'
                      : 'bg-white text-[#6e6e73] border-black/10 hover:text-[#1d1d1f]'
                  }`}
                >
                  2026 (4.050 RON · HG 1506/2024)
                </button>
                <button
                  type="button"
                  onClick={() => setFiscalYear(2024)}
                  className={`py-1.5 px-3 rounded-lg border font-mono text-center cursor-pointer transition-colors ${
                    fiscalYear === 2024
                      ? 'bg-blue-950 text-white border-blue-950 font-bold shadow-xs'
                      : 'bg-white text-[#6e6e73] border-black/10 hover:text-[#1d1d1f]'
                  }`}
                >
                  2024 Arhivă (3.700 RON · HG 598)
                </button>
              </div>
            </div>
          </div>

          {/* Romania Results Card */}
          <div className="p-5 rounded-2xl bg-white border border-black/10 space-y-4">
            <div className="flex justify-between items-baseline">
              <span className="text-xs text-[#6e6e73] uppercase tracking-widest font-mono">Net Unlevered Yield (Post-Tax)</span>
              <span className="text-3xl font-black font-mono text-blue-950">{roNetYieldOnOutlay.toFixed(2)}%</span>
            </div>

            <div className="space-y-2 text-xs font-mono pt-3 border-t border-black/10">
              <div className="flex justify-between text-[#6e6e73]">
                <span>Acquisition Fees (Notary + ANCPI + Agency):</span>
                <span className="text-[#1d1d1f]">€{Math.round(roTotalAcquisitionFeesEur).toLocaleString()} ({(roTotalAcquisitionFeesEur / roPriceEur * 100).toFixed(1)}%)</span>
              </div>
              <div className="flex justify-between text-[#6e6e73]">
                <span>Total Cash Required:</span>
                <span className="text-[#1d1d1f]">€{Math.round(roTotalCashOutlayEur).toLocaleString()}</span>
              </div>
              <div className="flex justify-between text-[#6e6e73]">
                <span>Gross Rental Yield:</span>
                <span className="text-[#1d1d1f]">{roGrossYield.toFixed(2)}%</span>
              </div>
              <div className="flex justify-between text-[#6e6e73]">
                <span>Total Fiscal Code Tax (Impozit + CASS):</span>
                <span className="text-amber-700 font-bold">€{Math.round(roTaxResult.totalTaxEur).toLocaleString()} / yr ({roTaxResult.effectiveTaxRatePct.toFixed(1)}% efectiv)</span>
              </div>
              <div className="p-3 bg-amber-50/70 border border-amber-200 rounded-xl space-y-1.5 text-[11px] font-mono text-amber-950">
                <div className="flex justify-between font-bold">
                  <span>Impozit pe venit (10% pe 80% din brut):</span>
                  <span>€{Math.round(roTaxResult.incomeTaxEur).toLocaleString()} ({Math.round(roTaxResult.incomeTaxRon).toLocaleString()} RON)</span>
                </div>
                <div className="flex justify-between font-bold">
                  <span>Contribuție Sănătate (CASS):</span>
                  <span>€{Math.round(roTaxResult.cassDueEur).toLocaleString()} ({Math.round(roTaxResult.cassDueRon).toLocaleString()} RON)</span>
                </div>
                <div className="text-[10px] text-amber-800 pt-1 border-t border-amber-200/60 leading-tight">
                  Încadrare: {roTaxResult.cassBracketInfo} (Baza netă: {Math.round(roTaxResult.taxableBaseRon).toLocaleString()} RON).
                </div>
              </div>
              <div className="flex justify-between text-[#6e6e73]">
                <span>Capital Gains Tax at Exit:</span>
                <span className="text-[#1d1d1f]">1% (&gt;3 yrs) or 3% (≤3 yrs)</span>
              </div>
              <div className="flex justify-between text-[#6e6e73]">
                <span>Annual Net In-Hand Cash Flow:</span>
                <span className="text-blue-950 font-bold">€{Math.round(roNetCashFlowEur).toLocaleString()}</span>
              </div>
            </div>
          </div>

          <div className="text-[11px] text-[#6e6e73] space-y-1.5 bg-slate-50 p-4 rounded-xl border border-slate-200">
            <div className="font-semibold text-[#1d1d1f]">Ipoteze Fiscale & Proveniență ANAF:</div>
            <p className="text-[10px] leading-relaxed">
              • <strong>Baza CASS:</strong> Art. 170 alin. (2) lit. d) Cod Fiscal — plafoanele de 6 ({roTaxResult.cassThreshold6Ron.toLocaleString()} RON), 12 ({roTaxResult.cassThreshold12Ron.toLocaleString()} RON) și 24 ({roTaxResult.cassThreshold24Ron.toLocaleString()} RON) salarii minime se raportează la venitul net (80% din brut).
            </p>
            <p className="text-[10px] leading-relaxed">
              • <strong>Regulă de cumul:</strong> {roTaxResult.incomeAggregationAssumption}
            </p>
            <div className="text-[9px] font-mono text-slate-400 pt-1">
              Surse: {roTaxResult.statutoryCitations.minWage}; {roTaxResult.statutoryCitations.incomeTax}. Verificare: {roTaxResult.sourceVerificationDate}.
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}
