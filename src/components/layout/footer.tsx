import Link from 'next/link'
import { ExternalLink } from 'lucide-react'

export function Footer() {
  return (
    <footer className="border-t border-black/10 bg-[#f5f5f7] text-[#6e6e73] text-xs">
      <div className="w-full max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 space-y-12">
        {/* Top Row: Brand & Concise Navigation */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
          {/* Brand Lockup */}
          <div className="md:col-span-4 space-y-3.5">
            <div className="flex flex-col">
              <span className="text-base font-extrabold tracking-tight text-[#1d1d1f] uppercase">
                DUBAI
              </span>
              <span className="text-[10px] font-mono tracking-widest text-[#b8860b] uppercase mt-0.5 font-bold">
                Private Client &amp; Investment Platform
              </span>
            </div>
            <p className="text-xs text-[#6e6e73] leading-relaxed pt-1 max-w-sm">
              An institutional platform engineered for navigating Dubai prime real estate, statutory underwriting, UAE Golden Visa pathways, and bespoke lifestyle assets.
            </p>
          </div>

          {/* Navigation Columns */}
          <div className="md:col-span-8 grid grid-cols-2 sm:grid-cols-5 gap-6">
            <div className="space-y-3">
              <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-[#1d1d1f] block">
                Real Estate
              </span>
              <ul className="space-y-2 text-xs">
                <li><Link href="/properties" className="text-[#6e6e73] hover:text-[#1d1d1f] transition-colors">Verified Properties</Link></li>
                <li><Link href="/areas" className="text-[#6e6e73] hover:text-[#1d1d1f] transition-colors">Geodetic Areas</Link></li>
                <li><Link href="/developers" className="text-[#6e6e73] hover:text-[#1d1d1f] transition-colors">Developer Registry</Link></li>
                <li><Link href="/projects" className="text-[#6e6e73] hover:text-[#1d1d1f] transition-colors">Master Projects</Link></li>
                <li><Link href="/infrastructure" className="text-[#6e6e73] hover:text-[#1d1d1f] transition-colors">Megaprojects</Link></li>
              </ul>
            </div>

            <div className="space-y-3">
              <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-[#1d1d1f] block">
                Economy &amp; Finance
              </span>
              <ul className="space-y-2 text-xs">
                <li><Link href="/economy" className="text-[#6e6e73] hover:text-[#1d1d1f] transition-colors">D33 Economic Agenda</Link></li>
                <li><Link href="/companies" className="text-[#6e6e73] hover:text-[#1d1d1f] transition-colors">Corporate Directory</Link></li>
                <li><Link href="/investment" className="text-[#6e6e73] hover:text-[#1d1d1f] transition-colors">Underwriting Desk</Link></li>
                <li><Link href="/market" className="text-[#6e6e73] hover:text-[#1d1d1f] transition-colors">Market Intelligence</Link></li>
                <li><Link href="/insurance" className="text-[#6e6e73] hover:text-[#1d1d1f] transition-colors">Insurance &amp; Health</Link></li>
              </ul>
            </div>

            <div className="space-y-3">
              <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-[#1d1d1f] block">
                Governance &amp; Law
              </span>
              <ul className="space-y-2 text-xs">
                <li><Link href="/government" className="text-[#6e6e73] hover:text-[#1d1d1f] transition-colors">Government Entities</Link></li>
                <li><Link href="/legal" className="text-[#6e6e73] hover:text-[#1d1d1f] transition-colors">Statutory Legal Codes</Link></li>
                <li><Link href="/residency" className="text-[#6e6e73] hover:text-[#1d1d1f] transition-colors">Golden Visa Law</Link></li>
                <li><Link href="/regulatory" className="text-[#6e6e73] hover:text-[#1d1d1f] transition-colors">Gazette Archive</Link></li>
              </ul>
            </div>

            <div className="space-y-3">
              <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-[#1d1d1f] block">
                Lifestyle &amp; Network
              </span>
              <ul className="space-y-2 text-xs">
                <li><Link href="/lifestyle/dining" className="text-[#6e6e73] hover:text-[#1d1d1f] transition-colors">Michelin Dining</Link></li>
                <li><Link href="/lifestyle/yachts" className="text-[#6e6e73] hover:text-[#1d1d1f] transition-colors">Superyacht Fleet</Link></li>
                <li><Link href="/lifestyle/aviation" className="text-[#6e6e73] hover:text-[#1d1d1f] transition-colors">Private Jet FBOs</Link></li>
                <li><Link href="/lifestyle/hotels" className="text-[#6e6e73] hover:text-[#1d1d1f] transition-colors">5-Star Hospitality</Link></li>
                <li><Link href="/network" className="text-[#6e6e73] hover:text-[#1d1d1f] transition-colors">Sovereign Summits</Link></li>
              </ul>
            </div>

            <div className="space-y-3">
              <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-[#1d1d1f] block">
                Private Advisory
              </span>
              <ul className="space-y-2 text-xs">
                <li><Link href="/private-client" className="text-[#b8860b] hover:underline transition-colors font-semibold">Advisory Mandate →</Link></li>
                <li><Link href="/client" className="text-[#6e6e73] hover:text-[#1d1d1f] transition-colors">Client Workspace</Link></li>
                <li><Link href="/privacy" className="text-[#6e6e73] hover:text-[#1d1d1f] transition-colors">Privacy Governance</Link></li>
                <li><Link href="/terms" className="text-[#6e6e73] hover:text-[#1d1d1f] transition-colors">Terms of Service</Link></li>
                <li><Link href="/accessibility" className="text-[#6e6e73] hover:text-[#1d1d1f] transition-colors">Accessibility (WCAG)</Link></li>
              </ul>
            </div>
          </div>
        </div>

        {/* Hairline Divider & Bottom Citations */}
        <div className="pt-8 border-t border-black/10 space-y-4 text-xs text-[#86868b]">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-[11px]">
            <p>
              © {new Date().getFullYear()} DUBAI Platform. All verified data sourced directly from public registries.
            </p>
            <div className="flex flex-wrap gap-4 font-mono text-[10px]">
              <a
                href="https://dubailand.gov.ae/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#1d1d1f] transition-colors flex items-center gap-1 text-[#6e6e73]"
              >
                <span>DLD Registry</span>
                <ExternalLink className="h-2.5 w-2.5" />
              </a>
              <a
                href="https://www.gdrfad.gov.ae/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#1d1d1f] transition-colors flex items-center gap-1 text-[#6e6e73]"
              >
                <span>GDRFA Dubai</span>
                <ExternalLink className="h-2.5 w-2.5" />
              </a>
              <a
                href="https://tax.gov.ae/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#1d1d1f] transition-colors flex items-center gap-1 text-[#6e6e73]"
              >
                <span>Federal Tax Authority</span>
                <ExternalLink className="h-2.5 w-2.5" />
              </a>
            </div>
          </div>

          <p className="text-[10px] leading-relaxed text-[#86868b]">
            <strong>Statutory Notice:</strong> Data presented on this platform references official public registries and statutory schedules including Dubai Law No. 7 of 2006, Executive Council Resolution No. 30 of 2013, and Cabinet Resolution No. 65 of 2022. Deterministic calculations are indicative models based on user parameters and published legal tariffs.
          </p>
        </div>
      </div>
    </footer>
  )
}