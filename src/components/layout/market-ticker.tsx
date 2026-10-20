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
    label: 'DLD SOVEREIGN VOLUME',
    value: 'AED 432.8B',
    tag: '+18.4% YoY',
    href: '/market',
  },
  {
    id: 'prime-yield',
    label: 'PRIME EJARI NET YIELD',
    value: '6.8% – 8.4%',
    tag: 'VERIFIED',
    href: '/investment/calculators',
  },
  {
    id: 'golden-visa',
    label: 'UAE GOLDEN VISA',
    value: '≥ AED 2,000,000',
    tag: '10-YEAR DECREE',
    href: '/residency',
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
    value: '100% PROTECTED',
    tag: 'LAW 8/2007',
    href: '/buying-guide',
  },
  {
    id: 'romania-treaty',
    label: 'ROMANIA–UAE TREATY',
    value: '0% DOUBLE TAX',
    tag: 'LAW 38/1993',
    href: '/romania',
  },
  {
    id: 'provenance',
    label: 'DATA PROVENANCE',
    value: 'PHYSICAL TITLE AUDIT',
    tag: 'ZERO FAKE DATA',
    href: '/sources',
  },
]

export function MarketTicker() {
  return (
    <aside
      aria-label="Dubai Sovereign Market Ticker"
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
