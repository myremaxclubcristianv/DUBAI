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

        {/* Research & Property Inquiry Desk Strip */}
        <div className="p-6 sm:p-8 bg-slate-900/60 border border-slate-800/90 rounded-xs flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="space-y-1">
            <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-[#38bdf8] block font-semibold">
              RESEARCH &amp; PROPERTY INQUIRY DESK
            </span>
            <p className="text-xs sm:text-sm text-slate-300 font-light">
              Pentru solicitări de cercetare imobiliară, documentație sau redirecționare către parteneri licențiați:
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

        {/* STRUCTURED 8-COLUMN INFORMATION ARCHITECTURE */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-8 sm:gap-6">
          
          {/* Column 1: Dubai Properties */}
          <div className="space-y-3.5">
            <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-white block font-bold">
              Dubai Properties
            </span>
            <ul className="space-y-2 text-xs font-light">
              <li><Link href="/buy" className="text-slate-300 hover:text-white transition-colors font-medium">Buy Dubai</Link></li>
              <li><Link href="/rent" className="text-slate-300 hover:text-white transition-colors font-medium">Rent Inquiries</Link></li>
              <li><Link href="/properties" className="text-slate-400 hover:text-white transition-colors">All Properties</Link></li>
              <li><Link href="/projects" className="text-slate-400 hover:text-white transition-colors">Off-Plan Escrow</Link></li>
              <li><Link href="/developments/brabus-island" className="text-slate-400 hover:text-white transition-colors">Brabus Island</Link></li>
            </ul>
          </div>

          {/* Column 2: Ghiduri Investiții RO */}
          <div className="space-y-3.5">
            <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-white block font-bold">
              Ghiduri RO
            </span>
            <ul className="space-y-2 text-xs font-light">
              <li><Link href="/ghiduri" className="text-emerald-400 hover:text-white transition-colors font-medium">Hub Investiții RO</Link></li>
              <li><Link href="/ghiduri/cum-cumperi-proprietate-dubai" className="text-slate-300 hover:text-white transition-colors">Ghid Pas cu Pas</Link></li>
              <li><Link href="/ghiduri/costuri-achizitie-dubai" className="text-slate-400 hover:text-white transition-colors">Costuri Cumpărare</Link></li>
              <li><Link href="/ghiduri/golden-visa-uae" className="text-slate-400 hover:text-white transition-colors">Golden Visa UAE</Link></li>
              <li><Link href="/ghiduri/impozitare-romania-dubai" className="text-slate-400 hover:text-white transition-colors">Impozitare RO-UAE</Link></li>
              <li><Link href="/ghiduri/dubai-vs-bucuresti" className="text-slate-400 hover:text-white transition-colors">Dubai vs București</Link></li>
              <li><Link href="/ghiduri/riscuri-off-plan-dubai" className="text-slate-400 hover:text-white transition-colors">Riscuri Off-Plan</Link></li>
              <li><Link href="/ghiduri/verificare-broker-anunt-dubai" className="text-slate-400 hover:text-white transition-colors">Verificare Broker</Link></li>
            </ul>
          </div>

          {/* Column 3: Areas & Atlas */}
          <div className="space-y-3.5">
            <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-white block font-bold">
              Areas &amp; Atlas
            </span>
            <ul className="space-y-2 text-xs font-light">
              <li><Link href="/areas" className="text-slate-400 hover:text-white transition-colors">Dubai Atlas</Link></li>
              <li><Link href="/areas/downtown-dubai" className="text-slate-400 hover:text-white transition-colors">Downtown Dubai</Link></li>
              <li><Link href="/areas/palm-jumeirah" className="text-slate-400 hover:text-white transition-colors">Palm Jumeirah</Link></li>
              <li><Link href="/areas/dubai-marina" className="text-slate-400 hover:text-white transition-colors">Dubai Marina</Link></li>
              <li><Link href="/map" className="text-slate-400 hover:text-white transition-colors">Interactive Map</Link></li>
            </ul>
          </div>

          {/* Column 4: Investment Lab */}
          <div className="space-y-3.5">
            <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-white block font-bold">
              Investment Lab
            </span>
            <ul className="space-y-2 text-xs font-light">
              <li><Link href="/raport-trimestrial" className="text-[#c9a962] hover:text-white transition-colors font-medium">Raport Trimestrial</Link></li>
              <li><Link href="/investment" className="text-slate-400 hover:text-white transition-colors">Research Framework</Link></li>
              <li><Link href="/investment/calculators" className="text-slate-300 hover:text-white font-medium transition-colors">Calculators (9 Engines)</Link></li>
              <li><Link href="/investment/calculators" className="text-slate-400 hover:text-white transition-colors">Short vs Long Rent</Link></li>
              <li><Link href="/market" className="text-slate-400 hover:text-white transition-colors">Market Intelligence</Link></li>
            </ul>
          </div>

          {/* Column 5: Business Hub */}
          <div className="space-y-3.5">
            <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-white block font-bold">
              Business Hub
            </span>
            <ul className="space-y-2 text-xs font-light">
              <li><Link href="/business" className="text-slate-300 hover:text-white transition-colors font-medium">Business Hub</Link></li>
              <li><Link href="/business#navigator" className="text-slate-400 hover:text-white transition-colors">Setup Navigator</Link></li>
              <li><Link href="/business#mainland-freezone" className="text-slate-400 hover:text-white transition-colors">Mainland vs Free Zone</Link></li>
              <li><Link href="/business#freezones" className="text-slate-400 hover:text-white transition-colors">Free Zone Directory</Link></li>
              <li><Link href="/tax" className="text-emerald-400 hover:text-white transition-colors font-medium">UAE Tax &amp; QFZP</Link></li>
            </ul>
          </div>

          {/* Column 6: Residency & Living */}
          <div className="space-y-3.5">
            <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-white block font-bold">
              Residency &amp; Living
            </span>
            <ul className="space-y-2 text-xs font-light">
              <li><Link href="/residency" className="text-slate-400 hover:text-white transition-colors">Golden Visa</Link></li>
              <li><Link href="/residency#eligibility" className="text-slate-400 hover:text-white transition-colors">AED 2M Threshold</Link></li>
              <li><Link href="/insurance" className="text-slate-400 hover:text-white transition-colors">Health Insurance</Link></li>
              <li><Link href="/lifestyle" className="text-slate-400 hover:text-white transition-colors">Curated Lifestyle</Link></li>
              <li><Link href="/lifestyle/yachts" className="text-slate-400 hover:text-white transition-colors">Yachts &amp; Aviation</Link></li>
            </ul>
          </div>

          {/* Column 7: Private Client */}
          <div className="space-y-3.5">
            <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-white block font-bold">
              Inquiry &amp; Partners
            </span>
            <ul className="space-y-2 text-xs font-light">
              <li>
                <Link href="/vizionari" className="text-white hover:text-slate-200 flex items-center gap-1 font-semibold">
                  Solicită Vizionare <ArrowUpRight className="h-3 w-3" />
                </Link>
              </li>
              <li><Link href="/studii-de-caz" className="text-slate-400 hover:text-white transition-colors">Studii de Caz</Link></li>
              <li><Link href="/client" className="text-slate-400 hover:text-white transition-colors">Client Workspace</Link></li>
              <li><Link href="/buying-guide" className="text-slate-400 hover:text-white transition-colors">Buying Guide</Link></li>
              <li><Link href="/developers" className="text-slate-400 hover:text-white transition-colors">Developer Registry</Link></li>
            </ul>
          </div>

          {/* Column 8: About & Trust */}
          <div className="space-y-3.5">
            <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-white block font-bold">
              About &amp; Trust
            </span>
            <ul className="space-y-2 text-xs font-light">
              <li><Link href="/newsletter" className="text-emerald-400 hover:text-white transition-colors font-medium">Newsletter RO</Link></li>
              <li><Link href="/sources" className="text-slate-400 hover:text-white transition-colors">Sources Registry</Link></li>
              <li><Link href="/methodology" className="text-slate-400 hover:text-white transition-colors">Methodology</Link></li>
              <li>
                <Link href="/investment-disclaimer" className="text-amber-300 hover:text-white font-medium flex items-center gap-1 transition-colors">
                  Risk Disclaimer <ArrowUpRight className="h-3 w-3 opacity-60" />
                </Link>
              </li>
              <li><Link href="/terms" className="text-slate-400 hover:text-white transition-colors">Terms of Service</Link></li>
              <li><Link href="/privacy" className="text-slate-400 hover:text-white transition-colors">Privacy Policy</Link></li>
            </ul>
          </div>

        </div>

        {/* Detailed Ecosystem Directory Strip (All 11 Verified Destinations) */}
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

        {/* Independent Status Statutory Notice & Mandatory Platform Disclaimer */}
        <div className="p-6 bg-slate-950 border border-slate-800/90 text-xs font-light text-slate-300 space-y-3 leading-relaxed">
          <div className="flex items-center gap-2 text-slate-200 font-mono text-[10px] uppercase tracking-wider font-semibold">
            <AlertCircle className="h-4 w-4 text-[#c9a962]" />
            <span>AVIZ DE CONFORMITATE &bull; STATUT EDITORIAL INDEPENDENT</span>
          </div>
          <p className="text-slate-300 font-sans text-xs leading-relaxed">
            DUBAI este o platformă independentă de cercetare și informare imobiliară. Publicarea unui proiect sau a unei proprietăți nu implică existența unui mandat de vânzare, a unei relații de reprezentare ori a unei verificări independente a fiecărei informații. Pentru tranzacții, vizionări și servicii reglementate, utilizatorii vor fi îndrumați către profesioniști și parteneri autorizați, după confirmarea disponibilității și a statutului acestora.
          </p>
          <p className="text-slate-400 font-sans text-[11px] leading-relaxed pt-1 border-t border-slate-800/60">
            DUBAI is an independent real estate research and market intelligence platform. It is not affiliated with, endorsed by, sponsored by, or operated by the Dubai Land Department, GDRFA, the Federal Tax Authority, DIFC, or any other government authority. Property listings and project data are referenced from official registries, verified source documents, and public developer filings.
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