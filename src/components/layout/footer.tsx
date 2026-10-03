'use client'

import * as React from 'react'
import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'

export function Footer() {
  return (
    <footer className="border-t border-[#e5e5ea] bg-[#fafaf8] text-[#484848]">
      <div className="w-full max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-16 py-20 sm:py-28 space-y-16">
        
        {/* Top Minimal Brand & Institutional Identity */}
        <div className="flex flex-col md:flex-row md:items-start justify-between gap-8 pb-12 border-b border-[#e5e5ea]">
          <div className="space-y-3 max-w-xl">
            <span className="text-[17px] font-medium tracking-[0.04em] uppercase text-[#111111] block">
              DUBAI
            </span>
            <p className="text-sm text-[#6b6b6b] font-light leading-relaxed">
              Source-led intelligence for Dubai property, capital, residency and access. Sourced from published statutory registers, legislation, and verified developer records. Independent private-client intelligence.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 font-mono text-[11px] text-[#6b6b6b]">
            <span className="px-3 py-1 bg-[#ffffff] border border-[#e5e5ea] rounded-full">
              USD Peg: 1 USD = 3.6725 AED
            </span>
            <span className="px-3 py-1 bg-[#ffffff] border border-[#e5e5ea] rounded-full text-emerald-800">
              Statutory Provenance
            </span>
          </div>
        </div>

        {/* Quiet Navigation Columns */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 sm:gap-12">
          {/* Column 1: Core Platform */}
          <div className="space-y-4">
            <span className="text-[10px] font-mono uppercase tracking-[0.18em] text-[#8e8e93] block">
              Platform
            </span>
            <ul className="space-y-2.5 text-xs font-light">
              <li><Link href="/properties" className="text-[#484848] hover:text-[#111111] transition-colors">Properties</Link></li>
              <li><Link href="/investment" className="text-[#484848] hover:text-[#111111] transition-colors">Capital &amp; Underwriting</Link></li>
              <li><Link href="/residency" className="text-[#484848] hover:text-[#111111] transition-colors">Residency &amp; Golden Visa</Link></li>
              <li><Link href="/districts" className="text-[#484848] hover:text-[#111111] transition-colors">Dubai Atlas</Link></li>
              <li><Link href="/developers" className="text-[#484848] hover:text-[#111111] transition-colors">Developers Registry</Link></li>
              <li><Link href="/lifestyle" className="text-[#484848] hover:text-[#111111] transition-colors">Curated Lifestyle</Link></li>
            </ul>
          </div>

          {/* Column 2: Governance */}
          <div className="space-y-4">
            <span className="text-[10px] font-mono uppercase tracking-[0.18em] text-[#8e8e93] block">
              Governance
            </span>
            <ul className="space-y-2.5 text-xs font-light">
              <li><Link href="/legal" className="text-[#484848] hover:text-[#111111] transition-colors">Statutory Framework</Link></li>
              <li><Link href="/government" className="text-[#484848] hover:text-[#111111] transition-colors">Official Authorities</Link></li>
              <li><Link href="/economy" className="text-[#484848] hover:text-[#111111] transition-colors">D33 Economic Agenda</Link></li>
              <li><Link href="/infrastructure" className="text-[#484848] hover:text-[#111111] transition-colors">Sovereign Infrastructure</Link></li>
              <li><Link href="/insurance" className="text-[#484848] hover:text-[#111111] transition-colors">Healthcare &amp; Insurance</Link></li>
            </ul>
          </div>

          {/* Column 3: Private Client */}
          <div className="space-y-4">
            <span className="text-[10px] font-mono uppercase tracking-[0.18em] text-[#8e8e93] block">
              Private Client
            </span>
            <ul className="space-y-2.5 text-xs font-light">
              <li>
                <Link href="/private-client" className="text-[#9f8144] hover:underline flex items-center gap-1 font-medium">
                  Private Mandates <ArrowUpRight className="h-3 w-3" />
                </Link>
              </li>
              <li><Link href="/client" className="text-[#484848] hover:text-[#111111] transition-colors">Client Portfolio</Link></li>
              <li><Link href="/buying-guide" className="text-[#484848] hover:text-[#111111] transition-colors">Conveyancing Flow</Link></li>
              <li><Link href="/network" className="text-[#484848] hover:text-[#111111] transition-colors">Advisory Network</Link></li>
            </ul>
          </div>

          {/* Column 4: Sources & Legal */}
          <div className="space-y-4">
            <span className="text-[10px] font-mono uppercase tracking-[0.18em] text-[#8e8e93] block">
              Integrity
            </span>
            <ul className="space-y-2.5 text-xs font-light">
              <li><Link href="/sources" className="text-[#484848] hover:text-[#111111] transition-colors">Sources &amp; Provenance</Link></li>
              <li><Link href="/methodology" className="text-[#484848] hover:text-[#111111] transition-colors">Underwriting Methodology</Link></li>
              <li><Link href="/terms" className="text-[#484848] hover:text-[#111111] transition-colors">Terms of Platform</Link></li>
              <li><Link href="/privacy" className="text-[#484848] hover:text-[#111111] transition-colors">Data Privacy</Link></li>
            </ul>
          </div>
        </div>

        {/* Minimal Bottom Bar */}
        <div className="pt-8 border-t border-[#e5e5ea] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-[11px] text-[#8e8e93] font-light">
          <p>
            &copy; {new Date().getFullYear()} DUBAI Intelligence. All rights reserved.
          </p>
          <div className="flex flex-wrap gap-4 font-mono text-[10px]">
            <a href="https://dubailand.gov.ae/" target="_blank" rel="noopener noreferrer" className="hover:text-[#111111] transition-colors underline">DLD</a>
            <a href="https://www.gdrfad.gov.ae/" target="_blank" rel="noopener noreferrer" className="hover:text-[#111111] transition-colors underline">GDRFA</a>
            <a href="https://tax.gov.ae/" target="_blank" rel="noopener noreferrer" className="hover:text-[#111111] transition-colors underline">FTA</a>
            <a href="https://www.difc.ae/" target="_blank" rel="noopener noreferrer" className="hover:text-[#111111] transition-colors underline">DIFC</a>
          </div>
        </div>

      </div>
    </footer>
  )
}