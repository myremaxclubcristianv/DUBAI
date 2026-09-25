'use client'

import * as React from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { 
  Search, 
  Bookmark, 
  Menu, 
  X, 
  ArrowRight, 
  ChevronDown, 
  Building, 
  Calculator, 
  ShieldCheck, 
  Users, 
  Compass, 
  Layers, 
  MapPin, 
  Scale, 
  TrendingUp,
  Plane,
  Anchor,
  Utensils
} from 'lucide-react'
import { GlobalSearchDialog } from '@/components/ui/global-search-dialog'
import { useClient } from '@/lib/context/client-context'

interface MegaMenuItem {
  title: string
  subtitle: string
  href: string
  icon: React.ComponentType<{ className?: string }>
}

interface MegaMenuSection {
  pillar: string
  href: string
  description: string
  items: MegaMenuItem[]
  highlight?: {
    title: string
    subtitle: string
    cta: string
    href: string
  }
}

const MEGA_MENUS: Record<string, MegaMenuSection> = {
  'discover': {
    pillar: 'DISCOVER',
    href: '/properties',
    description: 'Verified freehold acquisitions, prime community atlas, master developments, and licensed developer registry.',
    items: [
      { title: 'Properties', subtitle: 'Authenticated freehold property inventory', href: '/properties', icon: Building },
      { title: 'Areas', subtitle: 'Prime freehold community atlas & covenants', href: '/areas', icon: MapPin },
      { title: 'Developers', subtitle: 'DLD registered developer directory', href: '/developers', icon: ShieldCheck },
      { title: 'Projects', subtitle: 'Escrow-verified master projects', href: '/projects', icon: Layers },
      { title: 'Vector Map', subtitle: 'Geographic coordinate atlas', href: '/map', icon: Compass },
    ],
    highlight: {
      title: 'Title Deed Provenance',
      subtitle: 'Every asset mapped to official Dubai Land Department title records with zero synthetic listings.',
      cta: 'Browse Verified Inventory',
      href: '/properties',
    }
  },
  'invest': {
    pillar: 'INVEST',
    href: '/investment',
    description: 'Institutional acquisition economics, debt underwriting, benchmark intelligence, and conveyancing roadmaps.',
    items: [
      { title: 'Investment', subtitle: 'Acquisition economics & underwriting workspace', href: '/investment', icon: Calculator },
      { title: 'Market', subtitle: 'Institutional benchmarks & regulatory context', href: '/market', icon: TrendingUp },
      { title: 'Buying Guide', subtitle: '12-Stage acquisition & conveyancing roadmap', href: '/buying-guide', icon: Compass },
    ],
    highlight: {
      title: 'Deterministic Underwriting',
      subtitle: 'Transparent calculations based on user inputs and verified statutory fees. No invented forecasts.',
      cta: 'Launch Underwriting Workspace',
      href: '/investment',
    }
  },
  'residency': {
    pillar: 'RESIDENCY',
    href: '/residency',
    description: 'Statutory UAE Golden Visa framework, DLD Cube application journey, and tax neutrality provisions.',
    items: [
      { title: 'Golden Visa', subtitle: 'Official AED 2,000,000 property investment route', href: '/residency', icon: ShieldCheck },
      { title: 'Eligibility & Journey', subtitle: 'Criteria, MoFA verification & application steps', href: '/residency', icon: Layers },
      { title: 'Tax Framework', subtitle: 'No personal income tax & corporate tax rules', href: '/residency', icon: Scale },
    ],
    highlight: {
      title: 'Cabinet Resolution No. 65 of 2022',
      subtitle: 'Direct filing at Dubai Land Department Headquarters with family and domestic sponsorship eligibility.',
      cta: 'Review Residency Framework',
      href: '/residency',
    }
  },
  'lifestyle': {
    pillar: 'LIFESTYLE',
    href: '/lifestyle',
    description: 'Curated editorial directory of licensed private aviation, superyachts, gastronomy, and business ecosystems.',
    items: [
      { title: 'Lifestyle', subtitle: 'Private aviation, yachts, dining & hospitality', href: '/lifestyle', icon: Plane },
      { title: 'Network', subtitle: 'Sovereign hubs, DIFC wealth & capital ecosystem', href: '/network', icon: Users },
      { title: 'Aviation & FBO', subtitle: 'Private handling at Al Maktoum & DXB', href: '/lifestyle/aviation', icon: Plane },
      { title: 'Superyacht Charters', subtitle: 'DMCA licensed luxury maritime fleets', href: '/lifestyle/yachts', icon: Anchor },
      { title: 'Michelin Dining', subtitle: 'Culinary establishments & private tables', href: '/lifestyle/dining', icon: Utensils },
    ],
    highlight: {
      title: 'Curated Private Access',
      subtitle: 'Direct protocols for private aviation FBOs, yacht berths, and institutional ecosystem partners.',
      cta: 'Explore Lifestyle Directory',
      href: '/lifestyle',
    }
  },
  'private': {
    pillar: 'PRIVATE',
    href: '/private-client',
    description: 'Discreet private client advisory, bespoke acquisition briefs, and confidential client workspace.',
    items: [
      { title: 'Private Client', subtitle: 'Discreet advisory for high-value acquisitions', href: '/private-client', icon: ShieldCheck },
      { title: 'Client Workspace', subtitle: 'Locally stored shortlist & comparison matrix', href: '/client', icon: Bookmark },
    ],
    highlight: {
      title: 'Private Advisory Desk',
      subtitle: 'Direct consultation on portfolio allocation, off-market acquisitions, and conveyancing.',
      cta: 'Contact Private Office',
      href: '/private-client',
    }
  }
}

export function Header() {
  const pathname = usePathname()
  const { shortlistIds } = useClient()

  const [isSearchOpen, setIsSearchOpen] = React.useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false)
  const [activeMegaMenu, setActiveMegaMenu] = React.useState<string | null>(null)
  const navTimeoutRef = React.useRef<NodeJS.Timeout | null>(null)

  const handleMouseEnter = (key: string) => {
    if (navTimeoutRef.current) clearTimeout(navTimeoutRef.current)
    setActiveMegaMenu(key)
  }

  const handleMouseLeave = () => {
    navTimeoutRef.current = setTimeout(() => {
      setActiveMegaMenu(null)
    }, 180)
  }

  return (
    <>
      <header 
        className="sticky top-0 z-40 w-full bg-white/95 backdrop-blur-md border-b border-border transition-all"
        onMouseLeave={handleMouseLeave}
      >
        <div className="w-full max-w-6xl mx-auto flex h-16 items-center justify-between px-4 sm:px-6 lg:px-8">
          {/* 1. LEFT: DUBAI / PRIVATE CLIENT & INVESTMENT */}
          <div className="flex items-center space-x-3 shrink-0">
            <Link href="/" className="group flex flex-col sm:flex-row sm:items-baseline sm:space-x-2">
              <span className="text-sm font-black tracking-tight text-text-primary uppercase group-hover:text-accent transition-colors">
                DUBAI
              </span>
              <span className="text-[9px] font-mono tracking-wider text-text-muted uppercase">
                Private Client & Investment
              </span>
            </Link>
          </div>

          {/* 2. CENTER: NAVIGATION GROUPS (Desktop lg+) */}
          <nav className="hidden lg:flex items-center space-x-1 text-xs font-semibold">
            {[
              { id: 'discover', label: 'DISCOVER', href: '/properties' },
              { id: 'invest', label: 'INVEST', href: '/investment' },
              { id: 'residency', label: 'RESIDENCY', href: '/residency' },
              { id: 'lifestyle', label: 'LIFESTYLE', href: '/lifestyle' },
              { id: 'private', label: 'PRIVATE', href: '/private-client' },
            ].map((pillar) => {
              const isActive = pathname === pillar.href || (pillar.href !== '/' && pathname.startsWith(pillar.href))
              const isOpen = activeMegaMenu === pillar.id
              return (
                <div 
                  key={pillar.id}
                  className="relative"
                  onMouseEnter={() => handleMouseEnter(pillar.id)}
                >
                  <Link
                    href={pillar.href}
                    className={`inline-flex items-center gap-1 px-3 py-2 rounded-lg tracking-wider text-[11px] font-bold transition-all ${
                      isActive || isOpen
                        ? 'text-text-primary bg-surface border border-border shadow-2xs'
                        : 'text-text-secondary hover:text-text-primary hover:bg-surface-subtle'
                    }`}
                  >
                    <span>{pillar.label}</span>
                    <ChevronDown className={`h-3 w-3 text-text-muted transition-transform duration-200 ${isOpen ? 'rotate-180 text-accent' : ''}`} />
                  </Link>
                </div>
              )
            })}
          </nav>

          {/* 3. RIGHT: SEARCH, SHORTLIST, PRIVATE CLIENT DESK */}
          <div className="flex items-center gap-1.5 sm:gap-2.5 shrink-0">
            {/* Search Trigger */}
            <button
              onClick={() => setIsSearchOpen(true)}
              className="flex items-center gap-1.5 px-2 sm:px-2.5 py-1.5 rounded-lg border border-border bg-surface hover:bg-surface-elevated text-xs text-text-secondary hover:text-text-primary transition-colors cursor-pointer"
              title="Global Universal Search (Cmd+K)"
              aria-label="Open Search"
            >
              <Search className="h-3.5 w-3.5 text-text-muted" />
              <span className="hidden sm:inline font-medium text-[11px]">Search</span>
              <kbd className="hidden md:inline-flex px-1.5 py-0.2 text-[9px] font-mono text-text-muted bg-white border border-border rounded">
                ⌘K
              </kbd>
            </button>

            {/* Saved Properties */}
            <Link
              href="/client"
              className="flex items-center gap-1.5 px-2 sm:px-2.5 py-1.5 rounded-lg border border-border bg-surface hover:bg-surface-elevated text-xs font-semibold text-text-secondary hover:text-text-primary transition-colors"
              title="Saved Properties & Comparison Matrix"
              aria-label="View Saved Shortlist"
            >
              <Bookmark className={`h-3.5 w-3.5 ${shortlistIds.length > 0 ? 'text-accent fill-accent' : 'text-text-muted'}`} />
              <span className="hidden sm:inline text-[11px]">Saved</span>
              {shortlistIds.length > 0 && (
                <span className="px-1.5 py-0.2 rounded-full text-[9px] font-mono font-bold bg-accent text-white">
                  {shortlistIds.length}
                </span>
              )}
            </Link>

            {/* Private Client Desk CTA */}
            <Link
              href="/private-client"
              className="hidden md:inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-text-primary hover:bg-black text-white text-[11px] font-bold uppercase tracking-wider transition-colors shadow-2xs"
            >
              <span>Private Client Desk</span>
              <ArrowRight className="h-3 w-3 text-accent" />
            </Link>

            {/* Mobile / Tablet Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-1.5 sm:p-2 rounded-lg border border-border bg-surface text-text-primary hover:bg-surface-elevated transition-colors lg:hidden cursor-pointer"
              aria-label="Toggle Navigation Menu"
            >
              {isMobileMenuOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
            </button>
          </div>
        </div>

        {/* 4. DESKTOP MEGA-NAVIGATION FLYOUT */}
        {activeMegaMenu && MEGA_MENUS[activeMegaMenu] && (
          <div 
            className="hidden lg:block border-t border-border bg-white shadow-xl animate-in fade-in slide-in-from-top-1 duration-150"
            onMouseEnter={() => handleMouseEnter(activeMegaMenu)}
          >
            <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
              <div className="grid grid-cols-12 gap-8">
                {/* Left: Section Summary & Highlight */}
                <div className="col-span-4 pr-6 border-r border-border space-y-4 flex flex-col justify-between">
                  <div className="space-y-2">
                    <span className="text-[10px] font-mono font-bold text-accent uppercase tracking-widest">
                      PILLAR DIRECTORY
                    </span>
                    <h3 className="text-xl font-extrabold text-text-primary tracking-tight">
                      {MEGA_MENUS[activeMegaMenu].pillar}
                    </h3>
                    <p className="text-xs text-text-secondary leading-relaxed">
                      {MEGA_MENUS[activeMegaMenu].description}
                    </p>
                  </div>

                  {MEGA_MENUS[activeMegaMenu].highlight && (
                    <div className="p-4 rounded-xl bg-surface-subtle border border-border space-y-2">
                      <div className="text-[11px] font-bold text-text-primary">
                        {MEGA_MENUS[activeMegaMenu].highlight?.title}
                      </div>
                      <p className="text-[11px] text-text-secondary leading-snug">
                        {MEGA_MENUS[activeMegaMenu].highlight?.subtitle}
                      </p>
                      <Link
                        href={MEGA_MENUS[activeMegaMenu].highlight?.href || '#'}
                        onClick={() => setActiveMegaMenu(null)}
                        className="inline-flex items-center gap-1 text-[11px] font-bold text-accent hover:underline pt-1"
                      >
                        <span>{MEGA_MENUS[activeMegaMenu].highlight?.cta}</span>
                        <ArrowRight className="h-3 w-3" />
                      </Link>
                    </div>
                  )}
                </div>

                {/* Right: Sub-Routes Grid */}
                <div className="col-span-8 grid grid-cols-2 gap-3 content-start">
                  {MEGA_MENUS[activeMegaMenu].items.map((item, idx) => {
                    const IconComponent = item.icon
                    return (
                      <Link
                        key={idx}
                        href={item.href}
                        onClick={() => setActiveMegaMenu(null)}
                        className="p-3.5 rounded-xl border border-transparent hover:border-border hover:bg-surface transition-all flex items-start gap-3 group"
                      >
                        <div className="p-2 rounded-lg bg-surface border border-border group-hover:border-accent text-accent shrink-0 mt-0.5">
                          <IconComponent className="h-4 w-4" />
                        </div>
                        <div>
                          <div className="text-xs font-bold text-text-primary group-hover:text-accent transition-colors flex items-center gap-1">
                            <span>{item.title}</span>
                            <ArrowRight className="h-3 w-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                          </div>
                          <p className="text-[11px] text-text-secondary mt-0.5 leading-snug">
                            {item.subtitle}
                          </p>
                        </div>
                      </Link>
                    )
                  })}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* 5. MOBILE FULL-BLEED DRAWER */}
        {isMobileMenuOpen && (
          <div className="lg:hidden border-t border-border bg-white px-4 py-6 space-y-6 animate-in slide-in-from-top-2 duration-150 max-h-[85vh] overflow-y-auto">
            {/* 6 Core Pillars Accordion List */}
            <div className="space-y-4">
              {Object.entries(MEGA_MENUS).map(([key, section]) => (
                <div key={key} className="space-y-2 border-b border-border-subtle pb-4">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-mono font-bold text-accent uppercase tracking-wider">
                      {section.pillar}
                    </span>
                    <Link
                      href={section.href}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="text-[10px] font-bold text-text-muted hover:text-text-primary uppercase"
                    >
                      View All
                    </Link>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {section.items.map((item, idx) => (
                      <Link
                        key={idx}
                        href={item.href}
                        onClick={() => setIsMobileMenuOpen(false)}
                        className="p-2.5 rounded-lg bg-surface hover:bg-surface-elevated border border-border flex items-center justify-between text-xs"
                      >
                        <div>
                          <div className="font-bold text-text-primary">{item.title}</div>
                          <div className="text-[10px] text-text-secondary">{item.subtitle}</div>
                        </div>
                        <ArrowRight className="h-3 w-3 text-text-muted shrink-0" />
                      </Link>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* Bottom Actions */}
            <div className="pt-2 space-y-2">
              <Link
                href="/private-client"
                onClick={() => setIsMobileMenuOpen(false)}
                className="w-full py-3 px-4 rounded-xl bg-text-primary text-white text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 shadow-md"
              >
                <span>Access Private Client Desk</span>
                <ArrowRight className="h-4 w-4 text-accent" />
              </Link>
              <Link
                href="/client"
                onClick={() => setIsMobileMenuOpen(false)}
                className="w-full py-2.5 px-4 rounded-xl bg-surface border border-border text-xs font-bold text-text-primary flex items-center justify-center gap-2"
              >
                <Bookmark className="h-3.5 w-3.5 text-accent" />
                <span>My Saved Properties & Shortlist ({shortlistIds.length})</span>
              </Link>
            </div>
          </div>
        )}
      </header>

      {/* Global Search Command Dialog */}
      <GlobalSearchDialog isOpen={isSearchOpen} onClose={() => setIsSearchOpen(false)} />
    </>
  )
}