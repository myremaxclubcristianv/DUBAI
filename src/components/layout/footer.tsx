'use client'

import * as React from 'react'
import Link from 'next/link'
import { ArrowUpRight, ShieldCheck } from 'lucide-react'

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#050507] text-[#a1a1aa]">
      <div className="w-full max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-16 py-16 sm:py-24 space-y-16">
        
        {/* Top Brand & Institutional Provenance Identity */}
        <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-10 pb-12 border-b border-white/10">
          <div className="space-y-4 max-w-xl">
            <div className="space-y-1">
              <span className="text-[18px] sm:text-[20px] font-semibold tracking-[0.06em] uppercase text-[#f5f5f7] block">
                DUBAI.CRISTIANVADUVA.COM
              </span>
              <span className="text-[10px] font-mono tracking-[0.2em] text-[#c9a962] uppercase block">
                STATUTORY PROPERTY &bull; INVESTMENT INTELLIGENCE
              </span>
            </div>
            <p className="text-sm text-[#8e8e93] font-light leading-relaxed">
              Source-led intelligence for Dubai property, capital underwriting, golden residency, and private client advisory. Sourced directly from published statutory registers, federal decree-laws, and verified master developer records.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3 font-mono text-[11px] text-[#8e8e93]">
            <span className="px-3 py-1.5 bg-[#131318] border border-white/10 rounded-xs text-[#c7c7cc]">
              USD Peg: 1 USD = 3.6725 AED
            </span>
            <span className="px-3 py-1.5 bg-emerald-950/40 border border-emerald-500/30 rounded-xs text-emerald-400 flex items-center gap-1.5">
              <ShieldCheck className="h-3.5 w-3.5" />
              <span>Statutory Data Provenance</span>
            </span>
          </div>
        </div>

        {/* Navigation Columns */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-10 sm:gap-12">
          {/* Column 1: Core Platform */}
          <div className="space-y-4">
            <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-[#c9a962] block font-semibold">
              Platform
            </span>
            <ul className="space-y-2.5 text-xs font-light">
              <li><Link href="/properties" className="text-[#a1a1aa] hover:text-[#f5f5f7] transition-colors">Properties Directory</Link></li>
              <li><Link href="/market" className="text-[#a1a1aa] hover:text-[#f5f5f7] transition-colors">Dubai Intelligence</Link></li>
              <li><Link href="/investment" className="text-[#a1a1aa] hover:text-[#f5f5f7] transition-colors">Capital &amp; Underwriting</Link></li>
              <li><Link href="/residency" className="text-[#a1a1aa] hover:text-[#f5f5f7] transition-colors">Golden Residency</Link></li>
              <li><Link href="/districts" className="text-[#a1a1aa] hover:text-[#f5f5f7] transition-colors">Dubai Atlas</Link></li>
              <li><Link href="/developers" className="text-[#a1a1aa] hover:text-[#f5f5f7] transition-colors">Developers Registry</Link></li>
            </ul>
          </div>

          {/* Column 2: Governance & Macro */}
          <div className="space-y-4">
            <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-[#c9a962] block font-semibold">
              Governance
            </span>
            <ul className="space-y-2.5 text-xs font-light">
              <li><Link href="/legal" className="text-[#a1a1aa] hover:text-[#f5f5f7] transition-colors">Statutory Framework</Link></li>
              <li><Link href="/government" className="text-[#a1a1aa] hover:text-[#f5f5f7] transition-colors">Official Authorities</Link></li>
              <li><Link href="/economy" className="text-[#a1a1aa] hover:text-[#f5f5f7] transition-colors">D33 Economic Agenda</Link></li>
              <li><Link href="/infrastructure" className="text-[#a1a1aa] hover:text-[#f5f5f7] transition-colors">Sovereign Infrastructure</Link></li>
              <li><Link href="/regulatory" className="text-[#a1a1aa] hover:text-[#f5f5f7] transition-colors">RERA Compliance</Link></li>
              <li><Link href="/insurance" className="text-[#a1a1aa] hover:text-[#f5f5f7] transition-colors">Healthcare &amp; Insurance</Link></li>
            </ul>
          </div>

          {/* Column 3: Private Client */}
          <div className="space-y-4">
            <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-[#c9a962] block font-semibold">
              Private Client
            </span>
            <ul className="space-y-2.5 text-xs font-light">
              <li>
                <Link href="/private-client" className="text-[#c9a962] hover:text-[#dbbe7a] flex items-center gap-1 font-medium">
                  Private Mandates <ArrowUpRight className="h-3 w-3" />
                </Link>
              </li>
              <li><Link href="/client" className="text-[#a1a1aa] hover:text-[#f5f5f7] transition-colors">Client Portfolio</Link></li>
              <li><Link href="/buying-guide" className="text-[#a1a1aa] hover:text-[#f5f5f7] transition-colors">Conveyancing Flow</Link></li>
              <li><Link href="/lifestyle" className="text-[#a1a1aa] hover:text-[#f5f5f7] transition-colors">Curated Lifestyle</Link></li>
              <li><Link href="/network" className="text-[#a1a1aa] hover:text-[#f5f5f7] transition-colors">Advisory Network</Link></li>
            </ul>
          </div>

          {/* Column 4: Ecosystem */}
          <div className="space-y-4">
            <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-[#c9a962] block font-semibold">
              Ecosystem
            </span>
            <ul className="space-y-2.5 text-xs font-light">
              <li>
                <a href="https://cristianvaduva.com" target="_blank" rel="noopener noreferrer" className="text-[#a1a1aa] hover:text-[#f5f5f7] flex items-center gap-1 transition-colors">
                  CristianVaduva.com <ArrowUpRight className="h-3 w-3 opacity-50" />
                </a>
              </li>
              <li>
                <a href="https://homefind.cristianvaduva.com" target="_blank" rel="noopener noreferrer" className="text-[#a1a1aa] hover:text-[#f5f5f7] flex items-center gap-1 transition-colors">
                  HomeFind <ArrowUpRight className="h-3 w-3 opacity-50" />
                </a>
              </li>
              <li>
                <a href="https://insurance.cristianvaduva.com" target="_blank" rel="noopener noreferrer" className="text-[#a1a1aa] hover:text-[#f5f5f7] flex items-center gap-1 transition-colors">
                  Insurance <ArrowUpRight className="h-3 w-3 opacity-50" />
                </a>
              </li>
              <li>
                <a href="https://credite.cristianvaduva.com" target="_blank" rel="noopener noreferrer" className="text-[#a1a1aa] hover:text-[#f5f5f7] flex items-center gap-1 transition-colors">
                  Credite <ArrowUpRight className="h-3 w-3 opacity-50" />
                </a>
              </li>
              <li>
                <a href="https://fly.cristianvaduva.com" target="_blank" rel="noopener noreferrer" className="text-[#a1a1aa] hover:text-[#f5f5f7] flex items-center gap-1 transition-colors">
                  Fly &bull; Aviation <ArrowUpRight className="h-3 w-3 opacity-50" />
                </a>
              </li>
              <li>
                <a href="https://constructions.cristianvaduva.com" target="_blank" rel="noopener noreferrer" className="text-[#a1a1aa] hover:text-[#f5f5f7] flex items-center gap-1 transition-colors">
                  Constructions <ArrowUpRight className="h-3 w-3 opacity-50" />
                </a>
              </li>
            </ul>
          </div>

          {/* Column 5: Integrity & Sources */}
          <div className="space-y-4">
            <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-[#c9a962] block font-semibold">
              Integrity
            </span>
            <ul className="space-y-2.5 text-xs font-light">
              <li><Link href="/sources" className="text-[#a1a1aa] hover:text-[#f5f5f7] transition-colors">Sources &amp; Provenance</Link></li>
              <li><Link href="/methodology" className="text-[#a1a1aa] hover:text-[#f5f5f7] transition-colors">Underwriting Methodology</Link></li>
              <li><Link href="/terms" className="text-[#a1a1aa] hover:text-[#f5f5f7] transition-colors">Terms of Platform</Link></li>
              <li><Link href="/privacy" className="text-[#a1a1aa] hover:text-[#f5f5f7] transition-colors">Data Privacy</Link></li>
              <li><Link href="/accessibility" className="text-[#a1a1aa] hover:text-[#f5f5f7] transition-colors">Accessibility</Link></li>
            </ul>
          </div>
        </div>

        {/* Minimal Bottom Bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-[11px] text-[#71717a] font-light">
          <p>
            &copy; {new Date().getFullYear()} DUBAI.CRISTIANVADUVA.COM. All statutory rights reserved. Sourced from official UAE registries.
          </p>
          <div className="flex flex-wrap gap-4 font-mono text-[10px]">
            <a href="https://dubailand.gov.ae/" target="_blank" rel="noopener noreferrer" className="hover:text-[#c9a962] transition-colors underline">DLD</a>
            <a href="https://www.gdrfad.gov.ae/" target="_blank" rel="noopener noreferrer" className="hover:text-[#c9a962] transition-colors underline">GDRFA</a>
            <a href="https://tax.gov.ae/" target="_blank" rel="noopener noreferrer" className="hover:text-[#c9a962] transition-colors underline">FTA</a>
            <a href="https://www.difc.ae/" target="_blank" rel="noopener noreferrer" className="hover:text-[#c9a962] transition-colors underline">DIFC</a>
            <a href="https://u.ae/" target="_blank" rel="noopener noreferrer" className="hover:text-[#c9a962] transition-colors underline">U.AE</a>
          </div>
        </div>

      </div>
    </footer>
  )
}