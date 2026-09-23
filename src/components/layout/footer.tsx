import Link from 'next/link'
import { ShieldCheck, ExternalLink, ArrowUpRight } from 'lucide-react'

export function Footer() {
  return (
    <footer className="border-t border-border bg-[#fafaf8] text-text-secondary text-xs">
      <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-10">
          {/* Col 1 & 2: Platform Overview & Brand Lockup */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center space-x-2">
              <span className="font-mono text-xs font-black tracking-widest text-text-primary px-1.5 py-0.5 rounded bg-white border border-border">
                CV
              </span>
              <span className="text-sm font-extrabold tracking-tight text-text-primary uppercase">
                Cristian Văduva / Dubai
              </span>
            </div>
            <p className="text-xs text-text-secondary leading-relaxed max-w-sm">
              Institutional Dubai real estate intelligence, statutory transaction provenance, and discreet private client advisory. Operating under the absolute mandate of zero synthetic or fabricated data.
            </p>
            <div className="space-y-2 pt-2 text-[11px]">
              <div className="flex items-center gap-1.5 text-text-primary font-semibold">
                <ShieldCheck className="h-4 w-4 text-accent shrink-0" />
                <span>Statutory Source Audited & Provenance Certified</span>
              </div>
              <p className="text-text-muted text-[10px] leading-normal">
                All statutory fee schedules, transfer tax models, and rental regulations cite current Dubai Land Department (DLD) and UAE Federal Decrees.
              </p>
            </div>
            <div className="pt-2">
              <a
                href="https://cristianvaduva.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white border border-border text-xs font-semibold text-text-primary hover:border-accent transition-colors shadow-2xs"
              >
                <span>cristianvaduva.com</span>
                <ArrowUpRight className="h-3 w-3 text-text-muted" />
              </a>
            </div>
          </div>

          {/* Col 3: DISCOVER */}
          <div className="space-y-3">
            <span className="text-[10px] font-bold uppercase tracking-widest text-text-primary block">
              1. Discover
            </span>
            <ul className="space-y-2 text-xs">
              <li>
                <Link href="/properties" className="hover:text-text-primary transition-colors">
                  Verified Properties
                </Link>
              </li>
              <li>
                <Link href="/projects" className="hover:text-text-primary transition-colors">
                  Master Projects
                </Link>
              </li>
              <li>
                <Link href="/developers" className="hover:text-text-primary transition-colors">
                  Developer Registry
                </Link>
              </li>
              <li>
                <Link href="/areas" className="hover:text-text-primary transition-colors">
                  Dubai Communities
                </Link>
              </li>
              <li>
                <Link href="/map" className="hover:text-text-primary transition-colors">
                  Geodetic Vector Map
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 4: UNDERSTAND */}
          <div className="space-y-3">
            <span className="text-[10px] font-bold uppercase tracking-widest text-text-primary block">
              2. Understand & Connect
            </span>
            <ul className="space-y-2 text-xs">
              <li>
                <Link href="/market" className="hover:text-text-primary transition-colors">
                  Market Pulse & DLD
                </Link>
              </li>
              <li>
                <Link href="/investment" className="hover:text-text-primary transition-colors">
                  Yield & Underwriting
                </Link>
              </li>
              <li>
                <Link href="/residency" className="hover:text-text-primary transition-colors">
                  Golden Visa & Residency
                </Link>
              </li>
              <li>
                <Link href="/network" className="hover:text-text-primary transition-colors font-semibold text-accent">
                  Business & Capital Network
                </Link>
              </li>
              <li>
                <Link href="/buying-guide" className="hover:text-text-primary transition-colors">
                  12-Stage Acquisition Journey
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 5: DECIDE & EXECUTE */}
          <div className="space-y-3">
            <span className="text-[10px] font-bold uppercase tracking-widest text-text-primary block">
              3. Decide & Execute
            </span>
            <ul className="space-y-2 text-xs">
              <li>
                <Link href="/client" className="hover:text-text-primary transition-colors">
                  Asset Comparison Desk
                </Link>
              </li>
              <li>
                <Link href="/client" className="hover:text-text-primary transition-colors">
                  Saved Properties
                </Link>
              </li>
              <li>
                <Link href="/private-client" className="hover:text-text-primary transition-colors font-bold text-accent">
                  Private Client Intake
                </Link>
              </li>
              <li>
                <Link href="/admin" className="hover:text-text-primary transition-colors text-text-muted">
                  Data Quality & Admin
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 6: EXPERIENCE */}
          <div className="space-y-3">
            <span className="text-[10px] font-bold uppercase tracking-widest text-text-primary block">
              4. Experience
            </span>
            <ul className="space-y-2 text-xs">
              <li>
                <Link href="/lifestyle/aviation" className="hover:text-text-primary transition-colors">
                  Private Aviation & FBO
                </Link>
              </li>
              <li>
                <Link href="/lifestyle/yachts" className="hover:text-text-primary transition-colors">
                  Superyacht Charters
                </Link>
              </li>
              <li>
                <Link href="/lifestyle/dining" className="hover:text-text-primary transition-colors">
                  Michelin Fine Dining
                </Link>
              </li>
              <li>
                <Link href="/lifestyle/hotels" className="hover:text-text-primary transition-colors">
                  Palace Hotels & Resorts
                </Link>
              </li>
              <li>
                <Link href="/lifestyle/safari" className="hover:text-text-primary transition-colors">
                  Desert Conservation
                </Link>
              </li>
              <li>
                <Link href="/lifestyle/cars" className="hover:text-text-primary transition-colors">
                  Exotic Automobiles
                </Link>
              </li>
              <li>
                <Link href="/lifestyle/concierge" className="hover:text-text-primary transition-colors">
                  Bespoke Concierge
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar & Statutory Disclaimer */}
        <div className="mt-14 pt-8 border-t border-border space-y-4">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 text-[11px] text-text-muted">
            <p>
              © {new Date().getFullYear()} Cristian Văduva / Dubai Real Estate & Private Client Desk. All rights reserved.
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href="https://dubailand.gov.ae/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-text-primary transition-colors flex items-center gap-1"
              >
                <span>Dubai Land Department (DLD)</span>
                <ExternalLink className="h-2.5 w-2.5" />
              </a>
              <a
                href="https://www.gdrfad.gov.ae/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-text-primary transition-colors flex items-center gap-1"
              >
                <span>GDRFA Dubai</span>
                <ExternalLink className="h-2.5 w-2.5" />
              </a>
              <a
                href="https://tax.gov.ae/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-text-primary transition-colors flex items-center gap-1"
              >
                <span>Federal Tax Authority (FTA)</span>
                <ExternalLink className="h-2.5 w-2.5" />
              </a>
            </div>
          </div>

          <p className="text-[10px] text-text-muted leading-relaxed">
            <strong>Statutory Disclosures & Provenance Notice:</strong> Real estate transfer fees (4% statutory / 2% standard customary buyer share per Resolution No. 30 of 2013), mortgage registration tariffs (0.25% plus document fees), registration trustee partner charges (AED 4,000 / AED 2,000 + 5% VAT), and corporate tax provisions (0% band up to AED 375,000 / 9% standard rate under Federal Decree-Law No. 47 of 2022) are cited directly from official UAE government sources. This platform provides mathematical evaluation and source-audited information; it does not constitute individual immigration, tax, or legal advice.
          </p>
        </div>
      </div>
    </footer>
  )
}