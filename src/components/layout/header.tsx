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
  'real-estate': {
    pillar: 'REAL ESTATE',
    href: '/properties',
    description: 'Verified freehold acquisitions, master developer allocations, and architectural dossiers.',
    items: [
      { title: 'Verified Properties', subtitle: 'Authenticated freehold inventory', href: '/properties', icon: Building },
      { title: 'Master Projects', subtitle: 'Escrow-verified developments', href: '/projects', icon: Layers },
      { title: 'Developer Registry', subtitle: 'DLD registered developers', href: '/developers', icon: ShieldCheck },
      { title: 'Dubai Communities', subtitle: 'Prime freehold atlas & covenants', href: '/areas', icon: MapPin },
      { title: 'Vector Map', subtitle: 'Centroid classified atlas', href: '/map', icon: Compass },
      { title: 'Market Pulse', subtitle: 'Historical benchmark intelligence', href: '/market', icon: TrendingUp },
    ],
    highlight: {
      title: 'DLD Title Deed Provenance',
      subtitle: 'Every property mapped directly to Dubai Land Department title deed records with zero synthetic listings.',
      cta: 'Explore Verified Properties',
      href: '/properties',
    }
  },
  'investment': {
    pillar: 'INVESTMENT',
    href: '/investment',
    description: 'Institutional property underwriting, debt-service sensitivity, and statutory fee modeling.',
    items: [
      { title: 'Scenario Workspace', subtitle: 'Full multi-parameter underwriting', href: '/investment', icon: Calculator },
      { title: 'Rental Yield Engine', subtitle: 'Gross, NOI & Net All-In yields', href: '/investment', icon: TrendingUp },
      { title: 'Statutory Fee Tariffs', subtitle: 'DLD 4% and trustee schedules', href: '/investment', icon: Scale },
      { title: 'Risk Framework', subtitle: 'Acquisition to exit parameters', href: '/investment', icon: ShieldCheck },
      { title: 'Valuation Methodology', subtitle: 'Asking vs achieved transaction prices', href: '/investment', icon: Layers },
      { title: '12-Stage Buying Journey', subtitle: 'Conveyancing roadmap', href: '/buying-guide', icon: Compass },
    ],
    highlight: {
      title: 'Modelled From Your Assumptions',
      subtitle: 'Transparent deterministic formulas stamped with CALCULATED. No invented market forecasts.',
      cta: 'Launch Underwriting Desk',
      href: '/investment',
    }
  },
  'residency': {
    pillar: 'RESIDENCY',
    href: '/residency',
    description: 'Statutory UAE Golden Visa criteria, DLD Cube processes, and tax neutrality provisions.',
    items: [
      { title: 'Decision Intelligence', subtitle: 'Interactive pathway selector', href: '/residency', icon: Compass },
      { title: 'Golden Residency', subtitle: 'Official AED 2M property route', href: '/residency', icon: ShieldCheck },
      { title: 'DLD Cube Procedure', subtitle: 'Investor residency journey', href: '/residency', icon: Building },
      { title: 'Document Checklists', subtitle: 'MoFA & Police clearance standards', href: '/residency', icon: Layers },
      { title: 'Personal & Corporate Tax', subtitle: 'Personal tax rules & corporate framework', href: '/residency', icon: Scale },
    ],
    highlight: {
      title: 'Cabinet Resolution No. 65 of 2022',
      subtitle: 'Direct filing at Dubai Land Department Headquarters with full family and domestic staff sponsorship.',
      cta: 'Review Statutory Criteria',
      href: '/residency',
    }
  },
  'network': {
    pillar: 'NETWORK',
    href: '/network',
    description: 'The Dubai business and capital ecosystem: sovereign hubs, private banks, and family offices.',
    items: [
      { title: 'Ecosystem Architecture', subtitle: '5 Verified Institutional Pillars', href: '/network', icon: Users },
      { title: 'Capital & Family Offices', subtitle: 'DIFC & private banking hubs', href: '/network', icon: Building },
      { title: 'Corporate Setup', subtitle: 'Free Zone & mainland licensing', href: '/network', icon: Layers },
      { title: 'Annual Summits', subtitle: 'GITEX, FinTech & IPS calendars', href: '/network', icon: Compass },
      { title: 'Private Introductions', subtitle: 'Discreet intake review', href: '/network', icon: ArrowRight },
    ],
    highlight: {
      title: 'Direct Ecosystem Gateways',
      subtitle: 'Connect with verified institutional participants across real estate, finance, legal, and lifestyle.',
      cta: 'Request Private Introduction',
      href: '/network',
    }
  },
  'lifestyle': {
    pillar: 'LIFESTYLE',
    href: '/lifestyle',
    description: 'Curated directory of licensed operators spanning private aviation, superyachts, and gastronomy.',
    items: [
      { title: 'Private Aviation & FBO', subtitle: 'ExecuJet, Jetex private handling', href: '/lifestyle/aviation', icon: Plane },
      { title: 'Superyacht Charters', subtitle: 'DMCA licensed luxury fleets', href: '/lifestyle/yachts', icon: Anchor },
      { title: 'Michelin Fine Dining', subtitle: 'Michelin Guide verified tables', href: '/lifestyle/dining', icon: Utensils },
      { title: 'Palace Hotels', subtitle: 'Ultra-luxury hotel residences', href: '/lifestyle/hotels', icon: Building },
      { title: 'Exotic Automobiles', subtitle: 'Supercar & executive fleets', href: '/lifestyle/cars', icon: Compass },
      { title: 'Bespoke Concierge', subtitle: 'Relocation & private protocol', href: '/lifestyle/concierge', icon: ShieldCheck },
    ],
    highlight: {
      title: 'Licensed Luxury Operators',
      subtitle: 'Direct pricing and booking protocols for Dubai South FBOs, Dubai Harbour berths, and Michelin venues.',
      cta: 'Explore Lifestyle Directory',
      href: '/lifestyle',
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
        <div className="w-full max-w-7xl mx-auto flex h-16 items-center justify-between px-4 sm:px-6 lg:px-8">
          {/* 1. LEFT: CRISTIAN VĂDUVA / DUBAI */}
          <div className="flex items-center space-x-3 shrink-0">
            <Link href="/" className="group flex items-center space-x-2.5">
              <span className="font-mono text-xs font-black tracking-widest text-text-primary px-1.5 py-0.5 rounded bg-surface border border-border group-hover:border-accent transition-colors">
                CV
              </span>
              <div className="flex items-baseline space-x-1.5">
                <span className="text-xs sm:text-sm font-extrabold tracking-tight text-text-primary uppercase">
                  Cristian Văduva
                </span>
                <span className="text-xs font-light text-text-muted">/</span>
                <span className="text-xs font-semibold tracking-wider text-accent uppercase">
                  Dubai
                </span>
              </div>
            </Link>
          </div>

          {/* 2. CENTER: 5 PILLARS MEGA-NAVIGATION (Desktop lg+) */}
          <nav className="hidden lg:flex items-center space-x-1 text-xs font-semibold">
            {[
              { id: 'real-estate', label: 'REAL ESTATE', href: '/properties' },
              { id: 'investment', label: 'INVESTMENT', href: '/investment' },
              { id: 'residency', label: 'RESIDENCY', href: '/residency' },
              { id: 'network', label: 'NETWORK', href: '/network' },
              { id: 'lifestyle', label: 'LIFESTYLE', href: '/lifestyle' },
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
            <div className="w-full max-w-6xl mx-auto px-8 py-8">
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