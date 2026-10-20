'use client'

import * as React from 'react'
import Link from 'next/link'
import { ArrowUpRight, ShieldCheck, Mail, Phone, MessageSquare, AlertCircle } from 'lucide-react'

export function Footer() {
  return (
    <footer className="border-t border-slate-800 bg-[#070e1c] text-slate-400">
      <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-10 lg:px-16 py-16 lg:py-24 space-y-14">
        
        {/* Top Brand & Institutional Provenance Identity */}
        <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-8 pb-10 border-b border-slate-800/80">
          <div className="space-y-3 max-w-xl">
            <div className="flex items-center gap-3.5">
              <span className="text-[20px] sm:text-[22px] font-semibold tracking-[0.16em] uppercase text-white block font-sans">
                DUBAI
              </span>
              <span className="h-4 w-[1px] bg-slate-700 hidden sm:block" aria-hidden="true" />
              <span className="text-[10px] font-mono tracking-[0.2em] text-slate-400 uppercase hidden sm:block font-medium">
                INDEPENDENT PROPERTY &bull; INVESTMENT INTELLIGENCE
              </span>
            </div>
            <p className="text-sm text-slate-300 font-light leading-relaxed">
              Source-led intelligence for Dubai property assets, statutory investment underwriting, and private client advisory. All statutory references cited from public UAE federal legislation, official Land Department tariff schedules, and master developer declarations.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3 font-mono text-[11px] text-slate-300">
            <span className="px-3.5 py-1.5 bg-slate-900/90 border border-slate-800 text-slate-300">
              USD Peg: 1 USD = 3.6725 AED (CBUAE Policy)
            </span>
            <span className="px-3.5 py-1.5 bg-slate-900/90 border border-slate-800 text-slate-300 flex items-center gap-1.5">
              <ShieldCheck className="h-3.5 w-3.5 text-emerald-400" />
              <span>Independent Research Standard</span>
            </span>
          </div>
        </div>

        {/* Direct Advisory Desk & Contact Strip */}
        <div className="p-6 sm:p-8 bg-slate-900/60 border border-slate-800/90 rounded-xs flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="space-y-1">
            <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-[#38bdf8] block font-semibold">
              DIRECT CLIENT ADVISORY DESK
            </span>
            <p className="text-xs sm:text-sm text-slate-300 font-light">
              For confidential mandate discussions, off-market asset underwriting, and private principal appointments:
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-3 sm:gap-4 font-mono text-xs">
            <a
              href="mailto:cristianvaduva@duck.com"
              className="px-4 py-2 bg-slate-950 hover:bg-slate-800 border border-slate-700 text-slate-200 hover:text-white transition-colors flex items-center gap-2"
            >
              <Mail className="h-3.5 w-3.5 text-[#38bdf8]" />
              <span>cristianvaduva@duck.com</span>
            </a>
            <a
              href="https://wa.me/436509536345"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 bg-slate-950 hover:bg-slate-800 border border-slate-700 text-slate-200 hover:text-white transition-colors flex items-center gap-2"
            >
              <MessageSquare className="h-3.5 w-3.5 text-emerald-400" />
              <span>WhatsApp: +43 650 953 6345</span>
            </a>
            <a
              href="tel:+436509536345"
              className="px-4 py-2 bg-slate-950 hover:bg-slate-800 border border-slate-700 text-slate-200 hover:text-white transition-colors flex items-center gap-2"
            >
              <Phone className="h-3.5 w-3.5 text-slate-400" />
              <span>+43 650 953 6345</span>
            </a>
          </div>
        </div>

        {/* Navigation & Research Columns */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 sm:gap-10">
          {/* Column 1: Platform */}
          <div className="space-y-3.5">
            <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-white block font-bold">
              Platform
            </span>
            <ul className="space-y-2.5 text-xs font-light">
              <li><Link href="/properties" className="text-slate-400 hover:text-white transition-colors">Properties Directory</Link></li>
              <li><Link href="/developments" className="text-slate-400 hover:text-white transition-colors">Signature Developments</Link></li>
              <li><Link href="/market" className="text-slate-400 hover:text-white transition-colors">Dubai Market Intelligence</Link></li>
              <li><Link href="/investment" className="text-slate-400 hover:text-white transition-colors">Capital &amp; Underwriting</Link></li>
              <li><Link href="/residency" className="text-slate-400 hover:text-white transition-colors">Golden Residency Framework</Link></li>
              <li><Link href="/areas" className="text-slate-400 hover:text-white transition-colors">Dubai Atlas (Districts)</Link></li>
              <li><Link href="/developers" className="text-slate-400 hover:text-white transition-colors">Developers Registry</Link></li>
            </ul>
          </div>

          {/* Column 2: Governance & Macro */}
          <div className="space-y-3.5">
            <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-white block font-bold">
              Governance
            </span>
            <ul className="space-y-2.5 text-xs font-light">
              <li><Link href="/legal" className="text-slate-400 hover:text-white transition-colors">Statutory Framework</Link></li>
              <li><Link href="/government" className="text-slate-400 hover:text-white transition-colors">Official Authorities</Link></li>
              <li><Link href="/economy" className="text-slate-400 hover:text-white transition-colors">D33 Economic Agenda</Link></li>
              <li><Link href="/infrastructure" className="text-slate-400 hover:text-white transition-colors">Sovereign Infrastructure</Link></li>
              <li><Link href="/regulatory" className="text-slate-400 hover:text-white transition-colors">RERA Compliance</Link></li>
              <li><Link href="/insurance" className="text-slate-400 hover:text-white transition-colors">Healthcare &amp; Insurance</Link></li>
            </ul>
          </div>

          {/* Column 3: Private Client */}
          <div className="space-y-3.5">
            <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-white block font-bold">
              Private Client
            </span>
            <ul className="space-y-2.5 text-xs font-light">
              <li>
                <Link href="/private-client" className="text-white hover:text-slate-200 flex items-center gap-1 font-semibold">
                  Private Mandates <ArrowUpRight className="h-3 w-3" />
                </Link>
              </li>
              <li><Link href="/client" className="text-slate-400 hover:text-white transition-colors">Client Portfolio</Link></li>
              <li><Link href="/buying-guide" className="text-slate-400 hover:text-white transition-colors">Conveyancing Flow</Link></li>
              <li><Link href="/lifestyle" className="text-slate-400 hover:text-white transition-colors">Curated Lifestyle</Link></li>
              <li><Link href="/network" className="text-slate-400 hover:text-white transition-colors">Advisory Network</Link></li>
            </ul>
          </div>

          {/* Column 4: Integrity & Disclaimers */}
          <div className="space-y-3.5">
            <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-white block font-bold">
              Integrity &amp; Legal
            </span>
            <ul className="space-y-2.5 text-xs font-light">
              <li><Link href="/sources" className="text-slate-400 hover:text-white transition-colors">Sources &amp; Provenance</Link></li>
              <li><Link href="/methodology" className="text-slate-400 hover:text-white transition-colors">Underwriting Methodology</Link></li>
              <li>
                <Link href="/investment-disclaimer" className="text-amber-300 hover:text-white font-medium flex items-center gap-1 transition-colors">
                  Investment Risk Disclaimer <ArrowUpRight className="h-3 w-3 opacity-60" />
                </Link>
              </li>
              <li><Link href="/terms" className="text-slate-400 hover:text-white transition-colors">Terms of Platform</Link></li>
              <li><Link href="/privacy" className="text-slate-400 hover:text-white transition-colors">Data Privacy</Link></li>
              <li><Link href="/accessibility" className="text-slate-400 hover:text-white transition-colors">Accessibility Statement</Link></li>
            </ul>
          </div>

          {/* Column 5: Ecosystem Grouping */}
          <div className="col-span-2 sm:col-span-1 space-y-3.5">
            <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-white block font-bold">
              Ecosystem
            </span>
            <div className="space-y-2 text-xs font-light">
              <a href="https://cristianvaduva.com" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-white flex items-center gap-1 transition-colors">
                Cristian Văduva <ArrowUpRight className="h-3 w-3 opacity-50" />
              </a>
              <a href="https://executive.cristianvaduva.com" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-white flex items-center gap-1 transition-colors">
                Executive Advisory <ArrowUpRight className="h-3 w-3 opacity-50" />
              </a>
              <a href="https://aixluxury.com" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-white flex items-center gap-1 transition-colors">
                AiXLuxury <ArrowUpRight className="h-3 w-3 opacity-50" />
              </a>
              <a href="https://credite.cristianvaduva.com" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-white flex items-center gap-1 transition-colors">
                CV Finance <ArrowUpRight className="h-3 w-3 opacity-50" />
              </a>
              <a href="https://os.cristianvaduva.com" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-white flex items-center gap-1 transition-colors">
                OS Platform <ArrowUpRight className="h-3 w-3 opacity-50" />
              </a>
            </div>
          </div>
        </div>

        {/* Detailed Ecosystem Directory Strip (All 11 Destinations) */}
        <div className="pt-8 border-t border-slate-800/80 space-y-4">
          <div className="flex items-center justify-between">
            <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-slate-400 font-bold">
              CRISTIAN VĂDUVA DIGITAL ECOSYSTEM
            </span>
            <span className="text-[10px] font-mono text-slate-300">
              VERIFIED DESTINATIONS
            </span>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 text-xs font-light">
            <a href="https://aixluxury.com" target="_blank" rel="noopener noreferrer" className="p-2.5 bg-slate-900/50 hover:bg-slate-800 border border-slate-800 text-slate-300 hover:text-white transition-colors flex items-center justify-between">
              <span>AiXLuxury</span>
              <ArrowUpRight className="h-3 w-3 text-slate-300" />
            </a>
            <a href="https://cristianvaduva.com" target="_blank" rel="noopener noreferrer" className="p-2.5 bg-slate-900/50 hover:bg-slate-800 border border-slate-800 text-slate-300 hover:text-white transition-colors flex items-center justify-between">
              <span>Cristian Văduva</span>
              <ArrowUpRight className="h-3 w-3 text-slate-300" />
            </a>
            <a href="https://executive.cristianvaduva.com" target="_blank" rel="noopener noreferrer" className="p-2.5 bg-slate-900/50 hover:bg-slate-800 border border-slate-800 text-slate-300 hover:text-white transition-colors flex items-center justify-between">
              <span>Executive</span>
              <ArrowUpRight className="h-3 w-3 text-slate-300" />
            </a>
            <a href="https://os.cristianvaduva.com" target="_blank" rel="noopener noreferrer" className="p-2.5 bg-slate-900/50 hover:bg-slate-800 border border-slate-800 text-slate-300 hover:text-white transition-colors flex items-center justify-between">
              <span>OS Systems</span>
              <ArrowUpRight className="h-3 w-3 text-slate-300" />
            </a>
            <a href="https://aixmedia.cristianvaduva.com" target="_blank" rel="noopener noreferrer" className="p-2.5 bg-slate-900/50 hover:bg-slate-800 border border-slate-800 text-slate-300 hover:text-white transition-colors flex items-center justify-between">
              <span>AiX Media</span>
              <ArrowUpRight className="h-3 w-3 text-slate-300" />
            </a>
            <a href="https://subventii.cristianvaduva.com" target="_blank" rel="noopener noreferrer" className="p-2.5 bg-slate-900/50 hover:bg-slate-800 border border-slate-800 text-slate-300 hover:text-white transition-colors flex items-center justify-between">
              <span>Subvenții</span>
              <ArrowUpRight className="h-3 w-3 text-slate-300" />
            </a>
            <a href="https://fly.cristianvaduva.com" target="_blank" rel="noopener noreferrer" className="p-2.5 bg-slate-900/50 hover:bg-slate-800 border border-slate-800 text-slate-300 hover:text-white transition-colors flex items-center justify-between">
              <span>Fly &bull; Aviation</span>
              <ArrowUpRight className="h-3 w-3 text-slate-300" />
            </a>
            <a href="https://homefind.cristianvaduva.com" target="_blank" rel="noopener noreferrer" className="p-2.5 bg-slate-900/50 hover:bg-slate-800 border border-slate-800 text-slate-300 hover:text-white transition-colors flex items-center justify-between">
              <span>HomeFind</span>
              <ArrowUpRight className="h-3 w-3 text-slate-300" />
            </a>
            <a href="https://insurance.cristianvaduva.com" target="_blank" rel="noopener noreferrer" className="p-2.5 bg-slate-900/50 hover:bg-slate-800 border border-slate-800 text-slate-300 hover:text-white transition-colors flex items-center justify-between">
              <span>Insurance</span>
              <ArrowUpRight className="h-3 w-3 text-slate-300" />
            </a>
            <a href="https://credite.cristianvaduva.com" target="_blank" rel="noopener noreferrer" className="p-2.5 bg-slate-900/50 hover:bg-slate-800 border border-slate-800 text-slate-300 hover:text-white transition-colors flex items-center justify-between">
              <span>CV Finance</span>
              <ArrowUpRight className="h-3 w-3 text-slate-300" />
            </a>
            <a href="https://constructions.cristianvaduva.com" target="_blank" rel="noopener noreferrer" className="p-2.5 bg-slate-900/50 hover:bg-slate-800 border border-slate-800 text-slate-300 hover:text-white transition-colors flex items-center justify-between">
              <span>Constructions</span>
              <ArrowUpRight className="h-3 w-3 text-slate-300" />
            </a>
          </div>
        </div>

        {/* Independent Status Statutory Notice */}
        <div className="p-5 bg-slate-950/80 border border-slate-800 text-xs font-light text-slate-400 space-y-2 leading-relaxed">
          <div className="flex items-center gap-2 text-slate-300 font-mono text-[10px] uppercase tracking-wider font-semibold">
            <AlertCircle className="h-3.5 w-3.5 text-amber-400" />
            <span>Independent Platform Notice &amp; Legal Attribution</span>
          </div>
          <p>
            Dubai is an independent real estate research and advisory platform. It is not affiliated with, endorsed by, sponsored by, or operated by the Dubai Land Department, GDRFA, the Federal Tax Authority, DIFC, or any other government authority mentioned on this website. Property listings and opportunities may be supplied or presented by independent local real estate agencies, developers, owners, or other third parties.
          </p>
        </div>

        {/* Minimal Bottom Bar */}
        <div className="pt-6 border-t border-slate-800/80 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 text-[11px] text-slate-400 font-light">
          <p>
            &copy; {new Date().getFullYear()} DUBAI.CRISTIANVADUVA.COM. All rights reserved. Sourced from public official registries.
          </p>
          <div className="flex flex-wrap items-center gap-3 font-mono text-[10px]">
            <span className="text-slate-400 font-medium">Independent Reference Sources:</span>
            <a href="https://dubailand.gov.ae/" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-white transition-colors underline">DLD</a>
            <span className="text-slate-400">&bull;</span>
            <a href="https://www.gdrfad.gov.ae/" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-white transition-colors underline">GDRFA</a>
            <span className="text-slate-400">&bull;</span>
            <a href="https://tax.gov.ae/" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-white transition-colors underline">FTA</a>
            <span className="text-slate-400">&bull;</span>
            <a href="https://www.difc.ae/" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-white transition-colors underline">DIFC</a>
            <span className="text-slate-400">&bull;</span>
            <a href="https://u.ae/" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-white transition-colors underline">U.AE</a>
          </div>
        </div>

      </div>
    </footer>
  )
}