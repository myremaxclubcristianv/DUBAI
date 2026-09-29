'use client'

import * as React from 'react'
import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'

export function Footer() {
  return (
    <footer className="border-t border-black/[0.06] bg-[#ffffff] text-[#484848] text-xs">
      <div className="w-full max-w-[1280px] mx-auto px-6 sm:px-8 lg:px-12 py-20 sm:py-28 space-y-16">
        
        {/* Top Institutional Identity Strip */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 pb-12 border-b border-black/[0.06]">
          <div className="space-y-2">
            <div className="flex items-center gap-3">
              <span className="text-[17px] font-semibold tracking-[-0.02em] uppercase text-[#111111]">
                DUBAI
              </span>
              <span className="h-3.5 w-px bg-black/[0.1]" />
              <span className="text-[11px] font-mono tracking-widest text-[#8e8e93] uppercase font-medium">
                Property &bull; Capital &bull; Access
              </span>
            </div>
            <p className="text-xs text-[#8e8e93] max-w-lg font-light leading-relaxed">
              A private intelligence platform and research publication for principals, institutional investors, and family offices navigating the Emirate of Dubai.
            </p>
          </div>

          <div className="flex items-center gap-4">
            <div className="px-3.5 py-1.5 rounded-full bg-[#fafaf8] border border-black/[0.06] text-[10px] font-mono text-[#6b6b6b]">
              <span>USD Peg: 1 USD = 3.6725 AED</span>
            </div>
            <div className="px-3.5 py-1.5 rounded-full bg-emerald-50 border border-emerald-200 text-[10px] font-mono text-emerald-800 font-medium">
              <span>Tier-1 Statutory Provenance</span>
            </div>
          </div>
        </div>

        {/* Sitemap 4-Column Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10">
          {/* Column 1: Platform */}
          <div className="space-y-4">
            <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-[#111111] block">
              Platform
            </span>
            <ul className="space-y-2.5 text-xs">
              <li><Link href="/properties" className="text-[#6b6b6b] hover:text-[#111111] transition-colors">Curated Properties</Link></li>
              <li><Link href="/investment" className="text-[#6b6b6b] hover:text-[#111111] transition-colors">Capital &amp; Underwriting</Link></li>
              <li><Link href="/residency" className="text-[#6b6b6b] hover:text-[#111111] transition-colors">Golden Visa Residency</Link></li>
              <li><Link href="/districts" className="text-[#6b6b6b] hover:text-[#111111] transition-colors">Dubai Atlas &amp; Districts</Link></li>
              <li><Link href="/developers" className="text-[#6b6b6b] hover:text-[#111111] transition-colors">Developer Registry</Link></li>
              <li><Link href="/lifestyle" className="text-[#6b6b6b] hover:text-[#111111] transition-colors">Curated Lifestyle Access</Link></li>
            </ul>
          </div>

          {/* Column 2: Governance & Structure */}
          <div className="space-y-4">
            <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-[#111111] block">
              Governance &amp; Intelligence
            </span>
            <ul className="space-y-2.5 text-xs">
              <li><Link href="/legal" className="text-[#6b6b6b] hover:text-[#111111] transition-colors">Legal &amp; Regulatory Atlas</Link></li>
              <li><Link href="/government" className="text-[#6b6b6b] hover:text-[#111111] transition-colors">Government Authorities</Link></li>
              <li><Link href="/economy" className="text-[#6b6b6b] hover:text-[#111111] transition-colors">D33 Economic Agenda</Link></li>
              <li><Link href="/infrastructure" className="text-[#6b6b6b] hover:text-[#111111] transition-colors">Sovereign Megaprojects</Link></li>
              <li><Link href="/insurance" className="text-[#6b6b6b] hover:text-[#111111] transition-colors">Healthcare &amp; Insurance</Link></li>
            </ul>
          </div>

          {/* Column 3: Private Client */}
          <div className="space-y-4">
            <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-[#111111] block">
              Private Client
            </span>
            <ul className="space-y-2.5 text-xs">
              <li><Link href="/private-client" className="text-[#9f8144] hover:underline font-medium flex items-center gap-1">Advisory Mandates <ArrowUpRight className="h-3 w-3" /></Link></li>
              <li><Link href="/client" className="text-[#6b6b6b] hover:text-[#111111] transition-colors">Saved Portfolio Records</Link></li>
              <li><Link href="/buying-guide" className="text-[#6b6b6b] hover:text-[#111111] transition-colors">Conveyancing Map</Link></li>
              <li><Link href="/network" className="text-[#6b6b6b] hover:text-[#111111] transition-colors">Ecosystem Directory</Link></li>
            </ul>
          </div>

          {/* Column 4: Sources & Legal */}
          <div className="space-y-4">
            <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-[#111111] block">
              Sources &amp; Methodology
            </span>
            <ul className="space-y-2.5 text-xs">
              <li><Link href="/sources" className="text-[#6b6b6b] hover:text-[#111111] transition-colors">Data Provenance Charter</Link></li>
              <li><Link href="/terms" className="text-[#6b6b6b] hover:text-[#111111] transition-colors">Terms of Platform</Link></li>
              <li><Link href="/privacy" className="text-[#6b6b6b] hover:text-[#111111] transition-colors">Data Privacy Charter</Link></li>
              <li><Link href="/accessibility" className="text-[#6b6b6b] hover:text-[#111111] transition-colors">Accessibility (WCAG 2.1)</Link></li>
            </ul>
          </div>
        </div>

        {/* Regulatory & Provenance Legal Footnote */}
        <div className="pt-10 border-t border-black/[0.06] space-y-4 text-[#8e8e93] text-[11px] leading-relaxed font-light">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <p>
              &copy; {new Date().getFullYear()} DUBAI Platform. All data presented with explicit source provenance and statutory citations.
            </p>
            <div className="flex flex-wrap gap-4 font-mono text-[10px]">
              <a href="https://dubailand.gov.ae/" target="_blank" rel="noopener noreferrer" className="hover:text-[#111111] transition-colors underline">DLD Official</a>
              <a href="https://www.gdrfad.gov.ae/" target="_blank" rel="noopener noreferrer" className="hover:text-[#111111] transition-colors underline">GDRFA Dubai</a>
              <a href="https://tax.gov.ae/" target="_blank" rel="noopener noreferrer" className="hover:text-[#111111] transition-colors underline">Federal Tax Authority</a>
              <a href="https://www.difc.ae/" target="_blank" rel="noopener noreferrer" className="hover:text-[#111111] transition-colors underline">DIFC Authority</a>
            </div>
          </div>
          <p className="text-[10px] text-[#a1a1a6]">
            <strong>Regulatory Disclaimer:</strong> Statutory information references official UAE legislation including Law No. 7 of 2006 (Land Registration), Law No. 8 of 2007 (Escrow Accounts), Cabinet Resolution No. 65 of 2022 (Golden Visa Regulations), and Federal Decree-Law No. 47 of 2022 (Corporate Tax). Yield calculations are deterministic indicative models based on statutory schedules. This platform does not provide automated legal or financial advice without direct professional consultation.
          </p>
        </div>

      </div>
    </footer>
  )
}