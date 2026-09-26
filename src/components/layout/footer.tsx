import Link from 'next/link'
import { ExternalLink } from 'lucide-react'

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#0c0c0e] text-[#86868b] text-xs">
      <div className="w-full max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-12">
        {/* Top Row: Brand & Concise Navigation */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
          {/* Brand Lockup */}
          <div className="md:col-span-4 space-y-3">
            <div className="flex flex-col">
              <span className="text-base font-extrabold tracking-tight text-white uppercase">
                DUBAI
              </span>
              <span className="text-[10px] font-mono tracking-widest text-accent uppercase mt-0.5 font-semibold">
                Private Client &amp; Investment Platform
              </span>
            </div>
            <p className="text-xs text-[#a1a1a6] leading-relaxed pt-1 max-w-sm">
              An institutional platform engineered for navigating Dubai prime real estate, statutory underwriting, UAE Golden Visa pathways, and bespoke lifestyle assets.
            </p>
          </div>

          {/* Navigation Columns */}
          <div className="md:col-span-8 grid grid-cols-2 sm:grid-cols-5 gap-6">
            <div className="space-y-3">
              <span className="text-[11px] font-mono font-semibold uppercase tracking-wider text-white block">
                Discover
              </span>
              <ul className="space-y-2 text-xs">
                <li><Link href="/properties" className="text-[#a1a1a6] hover:text-white transition-colors">Properties</Link></li>
                <li><Link href="/areas" className="text-[#a1a1a6] hover:text-white transition-colors">Areas</Link></li>
                <li><Link href="/developers" className="text-[#a1a1a6] hover:text-white transition-colors">Developers</Link></li>
                <li><Link href="/projects" className="text-[#a1a1a6] hover:text-white transition-colors">Projects</Link></li>
              </ul>
            </div>

            <div className="space-y-3">
              <span className="text-[11px] font-mono font-semibold uppercase tracking-wider text-white block">
                Investment
              </span>
              <ul className="space-y-2 text-xs">
                <li><Link href="/investment" className="text-[#a1a1a6] hover:text-white transition-colors">Underwriting Desk</Link></li>
                <li><Link href="/market" className="text-[#a1a1a6] hover:text-white transition-colors">Market Intelligence</Link></li>
                <li><Link href="/buying-guide" className="text-[#a1a1a6] hover:text-white transition-colors">Buying Guide</Link></li>
                <li><Link href="/map" className="text-[#a1a1a6] hover:text-white transition-colors">Master Map</Link></li>
              </ul>
            </div>

            <div className="space-y-3">
              <span className="text-[11px] font-mono font-semibold uppercase tracking-wider text-white block">
                Residency
              </span>
              <ul className="space-y-2 text-xs">
                <li><Link href="/residency" className="text-[#a1a1a6] hover:text-white transition-colors">Golden Visa</Link></li>
                <li><Link href="/residency#statutory-criteria" className="text-[#a1a1a6] hover:text-white transition-colors">AED 2M Criteria</Link></li>
                <li><Link href="/residency#tax-arbitrage" className="text-[#a1a1a6] hover:text-white transition-colors">0% Tax Framework</Link></li>
                <li><Link href="/lifestyle" className="text-[#a1a1a6] hover:text-white transition-colors">Lifestyle Assets</Link></li>
              </ul>
            </div>

            <div className="space-y-3">
              <span className="text-[11px] font-mono font-semibold uppercase tracking-wider text-white block">
                Private Client
              </span>
              <ul className="space-y-2 text-xs">
                <li><Link href="/private-client" className="text-accent hover:underline transition-colors font-medium">Advisory Mandate →</Link></li>
                <li><Link href="/client" className="text-[#a1a1a6] hover:text-white transition-colors">Client Workspace</Link></li>
                <li><Link href="/network" className="text-[#a1a1a6] hover:text-white transition-colors">The Ecosystem</Link></li>
              </ul>
            </div>

            <div className="space-y-3">
              <span className="text-[11px] font-mono font-semibold uppercase tracking-wider text-white block">
                Legal &amp; Trust
              </span>
              <ul className="space-y-2 text-xs">
                <li><Link href="/regulatory" className="text-[#a1a1a6] hover:text-white transition-colors">Statutory Register</Link></li>
                <li><Link href="/privacy" className="text-[#a1a1a6] hover:text-white transition-colors">Privacy Policy</Link></li>
                <li><Link href="/terms" className="text-[#a1a1a6] hover:text-white transition-colors">Terms of Service</Link></li>
                <li><Link href="/accessibility" className="text-[#a1a1a6] hover:text-white transition-colors">Accessibility (WCAG)</Link></li>
              </ul>
            </div>
          </div>
        </div>

        {/* Hairline Divider & Bottom Citations */}
        <div className="pt-8 border-t border-white/10 space-y-4 text-xs text-[#86868b]">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-[11px]">
            <p>
              © {new Date().getFullYear()} DUBAI Platform. All verified data sourced directly from public registries.
            </p>
            <div className="flex flex-wrap gap-4 font-mono text-[10px]">
              <a
                href="https://dubailand.gov.ae/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition-colors flex items-center gap-1 text-[#a1a1a6]"
              >
                <span>DLD Registry</span>
                <ExternalLink className="h-2.5 w-2.5" />
              </a>
              <a
                href="https://www.gdrfad.gov.ae/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition-colors flex items-center gap-1 text-[#a1a1a6]"
              >
                <span>GDRFA Dubai</span>
                <ExternalLink className="h-2.5 w-2.5" />
              </a>
              <a
                href="https://tax.gov.ae/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition-colors flex items-center gap-1 text-[#a1a1a6]"
              >
                <span>Federal Tax Authority</span>
                <ExternalLink className="h-2.5 w-2.5" />
              </a>
            </div>
          </div>

          <p className="text-[10px] leading-relaxed text-[#6e6e73]">
            <strong>Statutory Notice:</strong> Data presented on this platform references official public registries and statutory schedules including Dubai Law No. 7 of 2006, Executive Council Resolution No. 30 of 2013, and Cabinet Resolution No. 65 of 2022. Deterministic calculations are indicative models based on user parameters and published legal tariffs.
          </p>
        </div>
      </div>
    </footer>
  )
}