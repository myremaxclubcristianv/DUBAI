import Link from 'next/link'
import { ExternalLink } from 'lucide-react'

export function Footer() {
  return (
    <footer className="border-t border-border bg-white text-text-secondary text-xs">
      <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-12">
        {/* Top Row: Brand & Concise Navigation */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
          {/* Brand Lockup */}
          <div className="md:col-span-4 space-y-2">
            <div className="flex items-center space-x-2">
              <span className="font-mono text-xs font-black tracking-widest text-text-primary px-1.5 py-0.5 rounded bg-surface border border-border">
                DUBAI
              </span>
              <span className="text-sm font-extrabold tracking-tight text-text-primary uppercase">
                DUBAI
              </span>
            </div>
            <p className="text-xs text-text-muted leading-relaxed font-mono">
              Private Client & Investment Intelligence
            </p>
            <p className="text-xs text-text-secondary leading-relaxed pt-2">
              A private-client platform for navigating Dubai real estate, institutional underwriting, UAE residency frameworks, and lifestyle access.
            </p>
          </div>

          {/* Navigation Columns */}
          <div className="md:col-span-8 grid grid-cols-2 sm:grid-cols-4 gap-6">
            <div className="space-y-2.5">
              <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-text-primary block">
                Discover
              </span>
              <ul className="space-y-2 text-xs">
                <li><Link href="/properties" className="hover:text-text-primary transition-colors">Properties</Link></li>
                <li><Link href="/areas" className="hover:text-text-primary transition-colors">Areas</Link></li>
                <li><Link href="/developers" className="hover:text-text-primary transition-colors">Developers</Link></li>
                <li><Link href="/projects" className="hover:text-text-primary transition-colors">Projects</Link></li>
              </ul>
            </div>

            <div className="space-y-2.5">
              <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-text-primary block">
                Invest
              </span>
              <ul className="space-y-2 text-xs">
                <li><Link href="/investment" className="hover:text-text-primary transition-colors">Investment</Link></li>
                <li><Link href="/market" className="hover:text-text-primary transition-colors">Market</Link></li>
                <li><Link href="/buying-guide" className="hover:text-text-primary transition-colors">Buying Guide</Link></li>
              </ul>
            </div>

            <div className="space-y-2.5">
              <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-text-primary block">
                Residency
              </span>
              <ul className="space-y-2 text-xs">
                <li><Link href="/residency" className="hover:text-text-primary transition-colors">Golden Visa</Link></li>
                <li><Link href="/residency" className="hover:text-text-primary transition-colors">Eligibility</Link></li>
                <li><Link href="/residency" className="hover:text-text-primary transition-colors">Tax Framework</Link></li>
              </ul>
            </div>

            <div className="space-y-2.5">
              <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-text-primary block">
                Private
              </span>
              <ul className="space-y-2 text-xs">
                <li><Link href="/private-client" className="hover:text-text-primary transition-colors font-medium">Private Advisory</Link></li>
                <li><Link href="/client" className="hover:text-text-primary transition-colors">Client Workspace</Link></li>
                <li><Link href="/lifestyle" className="hover:text-text-primary transition-colors">Lifestyle</Link></li>
                <li><Link href="/network" className="hover:text-text-primary transition-colors">Ecosystem</Link></li>
              </ul>
            </div>
          </div>
        </div>

        {/* Hairline Divider & Bottom Citations */}
        <div className="pt-8 border-t border-border space-y-4 text-xs text-text-muted">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-[11px]">
            <p>
              © {new Date().getFullYear()} DUBAI • Private Client & Investment Intelligence.
            </p>
            <div className="flex flex-wrap gap-4 font-mono text-[10px]">
              <a
                href="https://dubailand.gov.ae/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-text-primary transition-colors flex items-center gap-1"
              >
                <span>DLD Registry</span>
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
                <span>Federal Tax Authority</span>
                <ExternalLink className="h-2.5 w-2.5" />
              </a>
            </div>
          </div>

          <p className="text-[10px] leading-relaxed text-text-muted">
            <strong>Statutory Notice:</strong> Data presented on this platform references official public registries and statutory schedules including Dubai Law No. 7 of 2006, Executive Council Resolution No. 30 of 2013, and Cabinet Resolution No. 65 of 2022. Deterministic calculations are indicative models based on user parameters and published legal tariffs.
          </p>
        </div>
      </div>
    </footer>
  )
}