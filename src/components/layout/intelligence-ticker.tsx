'use client'

import * as React from 'react'
import { TICKER_ITEMS } from '@/lib/data/ticker'

export function IntelligenceTicker() {
  return (
    <aside
      aria-label="Dubai intelligence ticker"
      className="w-full bg-[#ffffff] border-b border-[#e5e5ea] overflow-hidden select-none relative z-30 h-[32px] sm:h-[34px] flex items-center"
    >
      <div className="w-full flex items-center overflow-hidden">
        {/* Ticker Moving Track */}
        <div className="animate-ticker flex items-center">
          {/* First loop track */}
          <div className="flex items-center shrink-0">
            {TICKER_ITEMS.map((item, index) => (
              <div
                key={`primary-${item.label}-${index}`}
                className="flex items-center whitespace-nowrap text-[10px] sm:text-[11px] font-mono tracking-[0.1em] text-[#111111] px-5 sm:px-6 gap-2 sm:gap-2.5"
              >
                <span className="font-semibold text-[#111111] uppercase tracking-[0.14em]">
                  {item.label}
                </span>
                <span className="text-[#8e8e93]">/</span>
                <span className="text-[#484848] font-normal uppercase">
                  {item.value}
                </span>
                <span
                  className={`text-[9px] px-1.5 py-0.5 tracking-[0.08em] uppercase ${
                    item.status === 'VERIFIED'
                      ? 'text-[#9f8144] bg-[#9f8144]/10'
                      : 'text-[#8e8e93] bg-[#f5f5f3]'
                  }`}
                  title={`Source: ${item.source}`}
                >
                  {item.status}
                </span>
                <span className="text-[#d1d1d6] ml-3 sm:ml-4 select-none">·</span>
              </div>
            ))}
          </div>

          {/* Second identical loop track for seamless infinite scroll */}
          <div className="flex items-center shrink-0" aria-hidden="true">
            {TICKER_ITEMS.map((item, index) => (
              <div
                key={`clone-${item.label}-${index}`}
                className="flex items-center whitespace-nowrap text-[10px] sm:text-[11px] font-mono tracking-[0.1em] text-[#111111] px-5 sm:px-6 gap-2 sm:gap-2.5"
              >
                <span className="font-semibold text-[#111111] uppercase tracking-[0.14em]">
                  {item.label}
                </span>
                <span className="text-[#8e8e93]">/</span>
                <span className="text-[#484848] font-normal uppercase">
                  {item.value}
                </span>
                <span
                  className={`text-[9px] px-1.5 py-0.5 tracking-[0.08em] uppercase ${
                    item.status === 'VERIFIED'
                      ? 'text-[#9f8144] bg-[#9f8144]/10'
                      : 'text-[#8e8e93] bg-[#f5f5f3]'
                  }`}
                  title={`Source: ${item.source}`}
                >
                  {item.status}
                </span>
                <span className="text-[#d1d1d6] ml-3 sm:ml-4 select-none">·</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </aside>
  )
}
