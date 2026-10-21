'use client'

import * as React from 'react'
import Link from 'next/link'

interface TickerItem {
  id: string
  label: string
  value: string
  tag?: string
  href: string
}

const TICKER_ITEMS: TickerItem[] = [
  {
    id: 'usd-aed',
    label: 'USD / AED',
    value: '3.6725',
    tag: 'PEGGED',
    href: '/investment',
  },
  {
    id: 'dld-volume',
    label: 'DLD ANNUAL LEDGER',
    value: 'OFFICIAL OPEN DATA',
    tag: 'DLD METRICS',
    href: '/market',
  },
  {
    id: 'prime-yield',
    label: 'RERA RENTAL BENCHMARK',
    value: 'EJARI LEASE INDEX',
    tag: 'DECREE 43/2013',
    href: '/investment/calculators',
  },
  {
    id: 'golden-visa',
    label: 'UAE GOLDEN VISA',
    value: '≥ AED 2,000,000',
    tag: 'CABINET RES. 65/2022',
    href: '/ghiduri/golden-visa-uae',
  },
  {
    id: 'corporate-tax',
    label: 'CORPORATE TAX',
    value: '0% QFZP / 9% STD',
    tag: 'LAW 47/2022',
    href: '/tax',
  },
  {
    id: 'escrow',
    label: 'OFF-PLAN ESCROW',
    value: 'STATUTORY TRUST',
    tag: 'LAW 8/2007',
    href: '/ghiduri/riscuri-off-plan-dubai',
  },
  {
    id: 'romania-treaty',
    label: 'ROMANIA–UAE TREATY',
    value: 'LAW 74/1993',
    tag: 'SIGNED 11 APR 1993',
    href: '/ghiduri/impozitare-romania-dubai',
  },
  {
    id: 'provenance',
    label: 'DATA INTEGRITY',
    value: 'SOURCE REFERENCED',
    tag: 'RESEARCH PLATFORM',
    href: '/sources',
  },
]

export function MarketTicker() {
  return (
    <aside
      aria-label="Dubai Real Estate Market Research Ticker"
      className="w-full bg-[#050a14] border-b border-white/10 text-slate-300 overflow-hidden select-none relative z-40 h-[28px] flex items-center"
    >
      {/* Live Badge Pillar */}
      <div className="flex items-center gap-1.5 px-3 h-full bg-[#070e1c] border-r border-white/10 shrink-0 z-10 text-[9px] font-mono uppercase tracking-[0.16em] text-[#c9a962] font-semibold">
        <span className="relative flex h-1.5 w-1.5">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
          <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-emerald-500" />
        </span>
        <span className="hidden sm:inline">LIVE INTEL</span>
        <span className="sm:hidden">INTEL</span>
      </div>

      {/* Marquee Track */}
      <div className="flex-1 overflow-hidden relative flex items-center">
        <div className="animate-ticker-marquee flex items-center shrink-0">
          {[...TICKER_ITEMS, ...TICKER_ITEMS].map((item, idx) => (
            <Link
              key={`${item.id}-${idx}`}
              href={item.href}
              prefetch={false}
              className="inline-flex items-center gap-2 px-4 hover:text-white transition-colors group whitespace-nowrap"
            >
              <span className="text-[9.5px] font-mono text-slate-400 tracking-wider uppercase group-hover:text-slate-300">
                {item.label}
              </span>
              <span className="text-[10px] font-mono text-white font-semibold tabular-nums">
                {item.value}
              </span>
              {item.tag && (
                <span className="text-[8.5px] font-mono font-semibold px-1 py-0.2 rounded-xs bg-white/5 border border-white/10 text-[#c9a962]">
                  {item.tag}
                </span>
              )}
              <span className="text-slate-700 mx-1 text-xs">•</span>
            </Link>
          ))}
        </div>
      </div>
    </aside>
  )
}
