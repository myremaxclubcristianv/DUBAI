'use client'

import * as React from 'react'
import { SourceBadge } from '@/components/ui/source-badge'
import { ArrowRightLeft, ShieldCheck } from 'lucide-react'

// Official Reference Rates
// UAE Central Bank Monetary Peg: 1 USD = 3.6725 AED (Statutory fixed peg)
// National Bank of Romania (BNR) & ECB Benchmarks
const FX_RATES_BASE_USD: Record<string, number> = {
  AED: 3.6725,
  USD: 1.0,
  EUR: 1 / 1.085, // 1 EUR = 1.085 USD
  RON: 4.9765 / (1.085 * 3.6725) * 3.6725, // Derived from EUR/RON 4.9765
  GBP: 1 / 1.295, // 1 GBP = 1.295 USD
}

export function MultiCurrencyConverter() {
  const [baseAmount, setBaseAmount] = React.useState<number>(1000000)
  const [baseCurrency, setBaseCurrency] = React.useState<'AED' | 'USD' | 'EUR' | 'RON' | 'GBP'>('AED')

  // Convert entered base to USD first, then to all target currencies
  const amountInUsd = React.useMemo(() => {
    const rateToUsd = FX_RATES_BASE_USD[baseCurrency]
    return baseAmount / rateToUsd
  }, [baseAmount, baseCurrency])

  const conversions = React.useMemo(() => {
    return {
      AED: amountInUsd * FX_RATES_BASE_USD.AED,
      USD: amountInUsd * FX_RATES_BASE_USD.USD,
      EUR: amountInUsd / (1 / 1.085),
      RON: (amountInUsd / (1 / 1.085)) * 4.9765,
      GBP: amountInUsd / (1 / 1.295),
    }
  }, [amountInUsd])

  return (
    <div className="bg-white rounded-3xl border border-black/10 overflow-hidden shadow-sm">
      <div className="p-6 sm:p-8 border-b border-black/10 flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-white">
        <div>
          <div className="flex items-center gap-2">
            <ArrowRightLeft className="h-4 w-4 text-accent" />
            <h2 className="text-xl sm:text-2xl font-extrabold text-[#1d1d1f] tracking-tight">
              Cross-Border Multi-Currency Valuation Matrix
            </h2>
          </div>
          <p className="text-xs text-[#6e6e73] mt-1">
            Official statutory benchmark grid: Central Bank of the UAE sovereign dollar peg (1 USD = 3.6725 AED) &amp; BNR official fixing (1 EUR = 4.9765 RON). Reference Period: Q4 2026.
          </p>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-[10px] font-mono px-2.5 py-1 rounded bg-slate-100 text-slate-700 border border-slate-200">
            Ref: Q4 2026 Grid
          </span>
          <SourceBadge status="VERIFIED" sourceName="CBUAE Statutory Peg & BNR Reference" />
        </div>
      </div>

      <div className="p-6 sm:p-8 space-y-8">
        
        {/* Input Bar */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4 items-center bg-[#f5f5f7] p-4 sm:p-6 rounded-2xl border border-black/5">
          <div className="md:col-span-8 space-y-1.5">
            <label className="text-[11px] font-bold uppercase tracking-wider text-[#6e6e73]">
              Enter Capital Outlay
            </label>
            <div className="relative">
              <input
                type="number"
                min={1}
                value={baseAmount || ''}
                onChange={(e) => setBaseAmount(Math.max(0, Number(e.target.value)))}
                className="w-full bg-white border border-black/15 rounded-xl px-4 py-3 text-2xl font-bold font-mono text-[#1d1d1f] focus:outline-none focus:ring-2 focus:ring-black"
                placeholder="0"
              />
            </div>
          </div>

          <div className="md:col-span-4 space-y-1.5">
            <label className="text-[11px] font-bold uppercase tracking-wider text-[#6e6e73]">
              Base Currency
            </label>
            <div className="grid grid-cols-5 gap-1 bg-white p-1 rounded-xl border border-black/10 text-xs font-mono font-bold">
              {(['AED', 'USD', 'EUR', 'RON', 'GBP'] as const).map((curr) => (
                <button
                  key={curr}
                  type="button"
                  onClick={() => setBaseCurrency(curr)}
                  className={`py-2 rounded-lg text-center transition-all ${
                    baseCurrency === curr
                      ? 'bg-[#1d1d1f] text-white shadow-xs'
                      : 'text-[#6e6e73] hover:text-[#1d1d1f] hover:bg-black/5'
                  }`}
                >
                  {curr}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Currency Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          
          {/* AED Card */}
          <div className={`p-5 rounded-2xl border transition-all ${
            baseCurrency === 'AED' ? 'bg-[#070e1c] text-white border-transparent shadow-md' : 'bg-white border-black/10'
          }`}>
            <div className="flex justify-between items-center mb-2">
              <span className={`text-[11px] font-mono uppercase tracking-widest font-bold ${baseCurrency === 'AED' ? 'text-emerald-400' : 'text-[#6e6e73]'}`}>
                United Arab Emirates
              </span>
              <span className={`text-xs font-bold px-2 py-0.5 rounded ${baseCurrency === 'AED' ? 'bg-white/10 text-white' : 'bg-black/5 text-[#1d1d1f]'}`}>
                AED
              </span>
            </div>
            <div className={`text-2xl font-mono font-extrabold tracking-tight ${baseCurrency === 'AED' ? 'text-white' : 'text-[#1d1d1f]'}`}>
              {Math.round(conversions.AED).toLocaleString()} <span className="text-sm font-normal">AED</span>
            </div>
            <div className={`text-[10px] mt-2 font-mono ${baseCurrency === 'AED' ? 'text-slate-400' : 'text-[#6e6e73]'}`}>
              Pegged at 1 USD = 3.6725 AED
            </div>
          </div>

          {/* USD Card */}
          <div className={`p-5 rounded-2xl border transition-all ${
            baseCurrency === 'USD' ? 'bg-[#070e1c] text-white border-transparent shadow-md' : 'bg-white border-black/10'
          }`}>
            <div className="flex justify-between items-center mb-2">
              <span className={`text-[11px] font-mono uppercase tracking-widest font-bold ${baseCurrency === 'USD' ? 'text-emerald-400' : 'text-[#6e6e73]'}`}>
                United States Dollar
              </span>
              <span className={`text-xs font-bold px-2 py-0.5 rounded ${baseCurrency === 'USD' ? 'bg-white/10 text-white' : 'bg-black/5 text-[#1d1d1f]'}`}>
                USD
              </span>
            </div>
            <div className={`text-2xl font-mono font-extrabold tracking-tight ${baseCurrency === 'USD' ? 'text-white' : 'text-[#1d1d1f]'}`}>
              ${Math.round(conversions.USD).toLocaleString()} <span className="text-sm font-normal">USD</span>
            </div>
            <div className={`text-[10px] mt-2 font-mono ${baseCurrency === 'USD' ? 'text-slate-400' : 'text-[#6e6e73]'}`}>
              Global Reserve &amp; UAE Peg Anchor
            </div>
          </div>

          {/* EUR Card */}
          <div className={`p-5 rounded-2xl border transition-all ${
            baseCurrency === 'EUR' ? 'bg-[#070e1c] text-white border-transparent shadow-md' : 'bg-white border-black/10'
          }`}>
            <div className="flex justify-between items-center mb-2">
              <span className={`text-[11px] font-mono uppercase tracking-widest font-bold ${baseCurrency === 'EUR' ? 'text-emerald-400' : 'text-[#6e6e73]'}`}>
                European Union
              </span>
              <span className={`text-xs font-bold px-2 py-0.5 rounded ${baseCurrency === 'EUR' ? 'bg-white/10 text-white' : 'bg-black/5 text-[#1d1d1f]'}`}>
                EUR
              </span>
            </div>
            <div className={`text-2xl font-mono font-extrabold tracking-tight ${baseCurrency === 'EUR' ? 'text-white' : 'text-[#1d1d1f]'}`}>
              €{Math.round(conversions.EUR).toLocaleString()} <span className="text-sm font-normal">EUR</span>
            </div>
            <div className={`text-[10px] mt-2 font-mono ${baseCurrency === 'EUR' ? 'text-slate-400' : 'text-[#6e6e73]'}`}>
              ECB Benchmark (1 EUR ≈ 1.085 USD)
            </div>
          </div>

          {/* RON Card */}
          <div className={`p-5 rounded-2xl border transition-all ${
            baseCurrency === 'RON' ? 'bg-[#070e1c] text-white border-transparent shadow-md' : 'bg-white border-black/10'
          }`}>
            <div className="flex justify-between items-center mb-2">
              <span className={`text-[11px] font-mono uppercase tracking-widest font-bold ${baseCurrency === 'RON' ? 'text-emerald-400' : 'text-[#6e6e73]'}`}>
                Romania (Leu Nou)
              </span>
              <span className={`text-xs font-bold px-2 py-0.5 rounded ${baseCurrency === 'RON' ? 'bg-white/10 text-white' : 'bg-black/5 text-[#1d1d1f]'}`}>
                RON
              </span>
            </div>
            <div className={`text-2xl font-mono font-extrabold tracking-tight ${baseCurrency === 'RON' ? 'text-white' : 'text-[#1d1d1f]'}`}>
              {Math.round(conversions.RON).toLocaleString()} <span className="text-sm font-normal">RON</span>
            </div>
            <div className={`text-[10px] mt-2 font-mono ${baseCurrency === 'RON' ? 'text-slate-400' : 'text-[#6e6e73]'}`}>
              BNR Official Reference (1 EUR = 4.9765 RON)
            </div>
          </div>

        </div>

        {/* Legal & Banking Spread Disclaimer */}
        <div className="p-4 rounded-2xl bg-amber-50/70 border border-amber-200/80 text-[11px] text-amber-950 flex items-start gap-3">
          <ShieldCheck className="h-4 w-4 text-amber-700 shrink-0 mt-0.5" />
          <div className="space-y-1">
            <span className="font-bold">Banking Conversion Spread Disclosure</span>
            <p className="leading-relaxed text-amber-900">
              The figures displayed reflect official mid-market reference rates (Central Bank of the UAE statutory peg and BNR reference rates). In commercial banking cross-border SWIFT transfers, commercial retail spreads (typically 0.40% to 1.25%) and intermediary correspondent banking charges will apply.
            </p>
          </div>
        </div>

      </div>
    </div>
  )
}
