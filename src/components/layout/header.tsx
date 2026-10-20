'use client'

import * as React from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import {
  Search,
  Menu,
  X,
  ArrowUpRight,
  ChevronDown,
} from 'lucide-react'
import { GlobalSearchDialog } from '@/components/ui/global-search-dialog'
import { useClient, SupportedCurrency } from '@/lib/context/client-context'

interface NavSubItem {
  label: string
  href: string
  description?: string
  badge?: string
}

interface NavSection {
  title: string
  description?: string
  items: NavSubItem[]
}

interface NavCategory {
  id: string
  label: string
  href: string
  sections?: NavSection[]
}

const NAVIGATION_CATEGORIES: NavCategory[] = [
  {
    id: 'properties',
    label: 'Properties',
    href: '/properties',
    sections: [
      {
        title: 'Market Inventory',
        description: 'Verified physical Dubai listings with complete data provenance.',
        items: [
          { label: 'Buy Property', href: '/buy', description: 'Curated prime Dubai residential sales inventory', badge: '19 Live' },
          { label: 'Rent Property', href: '/rent', description: 'Bespoke corporate & executive leasing mandates', badge: 'Advisory' },
          { label: 'Off-Plan Projects', href: '/projects', description: 'Verified escrow-backed developments' },
          { label: 'All Property Dossiers', href: '/properties', description: 'Comprehensive search, filters & maps' },
        ],
      },
      {
        title: 'Signature Portfolios',
        description: 'Direct master developer and private opportunities.',
        items: [
          { label: 'Palm Jumeirah Villas', href: '/properties?district=Palm+Jumeirah', description: 'Waterfront archipelago residences' },
          { label: 'Downtown Penthouses', href: '/properties?district=Downtown+Dubai', description: 'Burj Khalifa & Opera district suites' },
          { label: 'Emirates Hills Mansions', href: '/properties?district=Emirates+Hills', description: 'Private championship golf estates' },
        ],
      },
    ],
  },
  {
    id: 'areas',
    label: 'Areas',
    href: '/areas',
    sections: [
      {
        title: 'Dubai Atlas',
        description: 'Official master-planned freehold enclaves (Law No. 7/2006).',
        items: [
          { label: 'All Dubai Districts', href: '/areas', description: 'Explore all 16 master-planned freehold zones' },
          { label: 'Downtown Dubai', href: '/areas/downtown-dubai', description: 'Burj Khalifa, Dubai Mall & Opera District' },
          { label: 'Palm Jumeirah', href: '/areas/palm-jumeirah', description: 'Global benchmark for private island living' },
          { label: 'Dubai Marina & Harbour', href: '/areas/dubai-marina', description: 'Prime waterfront yacht basin towers' },
          { label: 'DIFC & Downtown', href: '/areas/difc', description: 'Financial center high-density residential' },
          { label: 'Dubai Hills Estate', href: '/areas/dubai-hills-estate', description: 'Championship golf & suburban master-plan' },
        ],
      },
      {
        title: 'Interactive Tools',
        description: 'Geospatial zoning and transit connectivity.',
        items: [
          { label: 'Interactive Dubai Map', href: '/map', description: 'Explore zoning, amenities, and metro radius' },
        ],
      },
    ],
  },
  {
    id: 'investment',
    label: 'Investment',
    href: '/investment',
    sections: [
      {
        title: 'Financial Underwriting',
        description: 'Transparent acquisition economics & statutory fee schedules.',
        items: [
          { label: 'Investment Overview', href: '/investment', description: 'Statutory framework, yields & capital mechanics' },
          { label: 'Calculators Lab (9 Engines)', href: '/investment/calculators', description: 'Interactive financial modeling desks', badge: '9 Tools' },
          { label: 'Short vs Long-Term Rent', href: '/investment/calculators', description: 'Holiday home vs annual Ejari yield spread' },
          { label: 'Market Intelligence', href: '/market', description: 'Historical transactions, volumes & rental trends' },
        ],
      },
      {
        title: 'Sovereign Framework',
        description: 'Direct institutional data and infrastructure.',
        items: [
          { label: 'D33 Economic Agenda', href: '/economy', description: 'Dubai sovereign growth roadmap to 2033' },
          { label: 'Sovereign Infrastructure', href: '/infrastructure', description: 'Metro Blue Line, Al Maktoum Airport & power' },
          { label: 'Government Authorities', href: '/government', description: 'DLD, RERA, FTA, DIFC & federal bodies' },
        ],
      },
    ],
  },
  {
    id: 'business',
    label: 'Business',
    href: '/business',
    sections: [
      {
        title: 'Business Setup Hub',
        description: 'Commercial incorporation and regulatory licensing navigator.',
        items: [
          { label: 'Business Hub Overview', href: '/business', description: 'Founders guide to launching in Dubai' },
          { label: 'Company Setup Navigator', href: '/business#navigator', description: 'Interactive 4-step jurisdiction finder', badge: 'Interactive' },
          { label: 'Mainland vs Free Zone', href: '/business#mainland-freezone', description: 'Commercial differences and licensing powers' },
          { label: 'Free Zone Directory', href: '/business#freezones', description: 'DIFC, DMCC, Meydan, IFZA, Dubai South' },
        ],
      },
      {
        title: 'Statutory Compliance & Fiscal',
        description: 'Corporate taxation, VAT, and recurring governance.',
        items: [
          { label: 'Business Cost Calculator', href: '/business#calculator', description: 'First-year vs annual renewal expenditure' },
          { label: 'Compliance Calendar', href: '/business#calendar', description: 'Statutory filing deadlines & licensing renewals' },
          { label: 'UAE Tax & QFZP Guide', href: '/tax', description: 'Law 47/2022 Corporate Tax, VAT & Double Tax Treaties', badge: 'Statutory' },
        ],
      },
    ],
  },
  {
    id: 'residency',
    label: 'Residency',
    href: '/residency',
    sections: [
      {
        title: 'Golden Visa Program',
        description: '10-Year self-sponsored UAE residency through real estate.',
        items: [
          { label: 'Golden Visa Overview', href: '/residency', description: 'Statutory framework under Federal Decree 29/2021' },
          { label: 'Investment Threshold (≥ AED 2M)', href: '/residency#eligibility', description: 'Title deed valuation and mortgage criteria' },
          { label: 'Required Documentation', href: '/residency#documentation', description: 'DLD clearance, health insurance, passport' },
          { label: 'Application Workflow', href: '/residency#process', description: 'Step-by-step sovereign filing process' },
          { label: 'Residency FAQ', href: '/residency#faq', description: 'Family sponsorship, validity & travel rules' },
        ],
      },
      {
        title: 'Essential Services',
        description: 'Healthcare and private operational support.',
        items: [
          { label: 'Mandatory Health Insurance', href: '/insurance', description: 'Statutory health coverage rules in Dubai' },
        ],
      },
    ],
  },
  {
    id: 'developers',
    label: 'Developers',
    href: '/developers',
    sections: [
      {
        title: 'Master Developers',
        description: 'Official DLD registered real estate development entities.',
        items: [
          { label: 'Developer Registry', href: '/developers', description: 'Licensed developers with verified track records' },
          { label: 'Signature Developments', href: '/developments', description: 'Iconic architectural landmarks across Dubai' },
          { label: 'Brabus Island', href: '/developments/brabus-island', description: 'Ultra-prime branded waterfront showcase' },
          { label: 'Off-Plan Projects', href: '/projects', description: 'Escrow-protected development launches' },
        ],
      },
    ],
  },
  {
    id: 'romania',
    label: 'Romania',
    href: '/romania',
    sections: [
      {
        title: 'Romania Real Estate Catalog',
        description: 'Curated premium Romanian properties from HomeFind with EUR/RON pricing.',
        items: [
          { label: 'Romania Property Catalog', href: '/romania', description: 'Explore all 55 verified Romanian listings', badge: '55 Live' },
          { label: 'Bucharest Luxury Properties', href: '/romania?city=București', description: 'Primăverii, Floreasca, Herăstrău & Kiseleff' },
          { label: 'Ilfov / Voluntari Estates', href: '/romania?city=Voluntari', description: 'Piperă & Northern Bucharest suburban villas' },
          { label: 'Constanța & Black Sea Coast', href: '/romania?city=Constanța', description: 'Mamaia waterfront luxury apartments' },
          { label: 'Brașov Mountain Chalets', href: '/romania?city=Brașov', description: 'Transylvanian alpine retreats & villas' },
        ],
      },
      {
        title: 'Cross-Border Economics',
        description: 'Bilateral legal treaties and portfolio comparison.',
        items: [
          { label: 'Dubai vs Romania Comparison', href: '/investment/calculators', description: 'Side-by-side purchase fees, yields & taxes', badge: 'Modeler' },
          { label: 'Romania-UAE Double Tax Treaty', href: '/tax', description: 'Law 38/1993 bilateral fiscal avoidance treaty' },
          { label: 'Multi-Currency Matrix', href: '/investment/calculators', description: 'EUR, RON, USD & AED conversion benchmarks' },
        ],
      },
    ],
  },
  {
    id: 'advisory',
    label: 'Advisory',
    href: '/private-client',
    sections: [
      {
        title: 'Bespoke Advisory & Lifestyle',
        description: 'Confidential client representation and asset management.',
        items: [
          { label: 'Private Client Desk', href: '/private-client', description: 'Discreet acquisition & divestment advisory' },
          { label: 'Client Workspace', href: '/client', description: 'Saved portfolios, comparison & underwriting notes' },
          { label: 'Curated Lifestyle Directory', href: '/lifestyle', description: 'Yachts, private aviation, clubs & dining' },
          { label: 'Advisory Network', href: '/network', description: 'Conveyancers, tax advisors & family office partners' },
        ],
      },
      {
        title: 'Platform Transparency & Legal',
        description: 'Statutory citations and research methodology.',
        items: [
          { label: 'Property Buying Guide', href: '/buying-guide', description: 'MOU Form F, NOC, trustee conveyancing flow' },
          { label: 'Sources & Provenance Registry', href: '/sources', description: 'Verified registries, official decrees & APIs' },
          { label: 'Statutory Legal Framework', href: '/legal', description: 'Law No. 7/2006, Escrow Law No. 8/2007' },
          { label: 'Platform Methodology', href: '/methodology', description: 'Standards of independence and analytical rigor' },
        ],
      },
    ],
  },
]

export function Header() {
  const pathname = usePathname()
  const { currency, setCurrency } = useClient()
  const [isSearchOpen, setIsSearchOpen] = React.useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false)
  const [activeDesktopCategory, setActiveDesktopCategory] = React.useState<string | null>(null)
  const [openMobileAccordion, setOpenMobileAccordion] = React.useState<string | null>(null)
  const headerRef = React.useRef<HTMLElement>(null)

  const [prevPathname, setPrevPathname] = React.useState(pathname)
  if (pathname !== prevPathname) {
    setPrevPathname(pathname)
    setActiveDesktopCategory(null)
    setIsMobileMenuOpen(false)
  }

  // Close desktop menu on Escape key or outside click
  React.useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setActiveDesktopCategory(null)
        setIsMobileMenuOpen(false)
      }
    }

    const handleClickOutside = (e: MouseEvent) => {
      if (headerRef.current && !headerRef.current.contains(e.target as Node)) {
        setActiveDesktopCategory(null)
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      window.removeEventListener('keydown', handleKeyDown)
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [])

  const toggleMobileAccordion = (id: string) => {
    setOpenMobileAccordion((prev) => (prev === id ? null : id))
  }

  const activeCategoryData = NAVIGATION_CATEGORIES.find((cat) => cat.id === activeDesktopCategory)

  return (
    <>
      <header
        ref={headerRef}
        className="sticky top-0 z-50 w-full bg-white border-b border-slate-200 transition-colors"
      >
        <div className="w-full max-w-[1440px] mx-auto flex h-[76px] sm:h-[80px] items-center justify-between px-4 sm:px-8 lg:px-12">
          
          {/* LEFT: Wordmark + Separator + Descriptor */}
          <div className="flex items-center gap-3.5 shrink-0">
            <Link href="/" className="flex items-center gap-3 group">
              <span className="text-[18px] sm:text-[19px] font-semibold tracking-[0.16em] text-slate-950 uppercase group-hover:text-slate-600 transition-colors font-sans">
                DUBAI
              </span>
              <span className="h-4 w-[1px] bg-slate-300 hidden sm:block" aria-hidden="true" />
              <span className="text-[10px] font-mono tracking-[0.2em] text-slate-500 uppercase hidden xl:inline-block font-medium">
                REAL ESTATE INTELLIGENCE
              </span>
            </Link>
          </div>

          {/* CENTER: 8 Desktop Mega-Menu Categories */}
          <nav
            aria-label="Main Navigation"
            className="hidden lg:flex items-center gap-4 xl:gap-6 text-[11px] font-mono uppercase tracking-[0.14em]"
          >
            {NAVIGATION_CATEGORIES.map((cat) => {
              const isSelected = activeDesktopCategory === cat.id
              const isCurrentRoute =
                pathname === cat.href || (cat.href !== '/' && pathname.startsWith(cat.href))

              return (
                <div key={cat.id} className="relative">
                  <button
                    onClick={() => setActiveDesktopCategory(isSelected ? null : cat.id)}
                    onMouseEnter={() => setActiveDesktopCategory(cat.id)}
                    aria-expanded={isSelected}
                    aria-haspopup="true"
                    className={`flex items-center gap-1 py-2 px-1 transition-colors cursor-pointer ${
                      isSelected || isCurrentRoute
                        ? 'text-slate-950 font-bold'
                        : 'text-slate-600 hover:text-slate-950 font-medium'
                    }`}
                  >
                    <span>{cat.label}</span>
                    <ChevronDown
                      className={`h-3 w-3 text-slate-400 transition-transform duration-200 ${
                        isSelected ? 'rotate-180 text-slate-900' : ''
                      }`}
                    />
                  </button>
                  {isCurrentRoute && !isSelected && (
                    <span className="absolute -bottom-1 left-0 right-0 h-[1.5px] bg-slate-950" />
                  )}
                </div>
              )
            })}
          </nav>

          {/* RIGHT: Currency Selector, Search & Private Client Action */}
          <div className="flex items-center gap-2.5 sm:gap-4 shrink-0">
            {/* Currency Selector */}
            <div className="flex items-center border border-slate-200 bg-slate-50/80 text-[11px] font-mono">
              {(['AED', 'USD', 'EUR', 'RON'] as const).map((curr, idx) => (
                <button
                  key={curr}
                  onClick={() => setCurrency(curr as SupportedCurrency)}
                  className={`px-2 sm:px-2.5 py-1 transition-colors cursor-pointer ${
                    idx > 0 ? 'border-l border-slate-200' : ''
                  } ${
                    currency === curr
                      ? 'text-white bg-slate-950 font-semibold'
                      : 'text-slate-600 hover:text-slate-950 hover:bg-slate-100'
                  } ${curr === 'EUR' || curr === 'RON' ? 'hidden sm:inline-block' : ''}`}
                >
                  {curr}
                </button>
              ))}
            </div>

            {/* Search Trigger */}
            <button
              onClick={() => setIsSearchOpen(true)}
              className="flex items-center gap-1.5 sm:gap-2 px-2.5 sm:px-3 py-1 bg-white hover:bg-slate-50 border border-slate-200 text-xs text-slate-700 hover:text-slate-950 transition-colors cursor-pointer"
              title="Search Directory (⌘K)"
              aria-label="Search directory"
            >
              <Search className="h-3.5 w-3.5 text-slate-600" />
              <span className="text-[11px] font-mono hidden xl:inline tracking-wider uppercase">Search</span>
              <kbd className="hidden sm:inline-block text-[9px] font-mono px-1 py-0.5 bg-slate-100 text-slate-700 border border-slate-300">⌘K</kbd>
            </button>

            {/* Desktop Private Client Desk Action Button */}
            <Link
              href="/private-client"
              className="hidden md:inline-flex items-center gap-1.5 px-3 py-1.5 border border-slate-950 bg-slate-950 hover:bg-slate-800 text-white text-[10px] font-mono uppercase tracking-[0.16em] font-semibold transition-all shadow-xs"
            >
              <span>Private Client</span>
              <ArrowUpRight className="h-3 w-3" />
            </Link>

            {/* Mobile Menu Trigger */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-1.5 text-slate-900 hover:text-slate-600 transition-colors lg:hidden cursor-pointer shrink-0 text-xs font-mono uppercase tracking-wider flex items-center gap-1.5"
              aria-label="Toggle Navigation Menu"
              aria-expanded={isMobileMenuOpen}
            >
              {isMobileMenuOpen ? (
                <>
                  <X className="h-5 w-5" />
                  <span className="hidden sm:inline text-[11px]">Close</span>
                </>
              ) : (
                <>
                  <Menu className="h-5 w-5" />
                  <span className="hidden sm:inline text-[11px]">Menu</span>
                </>
              )}
            </button>
          </div>
        </div>

        {/* DESKTOP MEGA-MENU PANEL */}
        {activeDesktopCategory && activeCategoryData?.sections && (
          <div
            onMouseLeave={() => setActiveDesktopCategory(null)}
            className="hidden lg:block border-t border-slate-200 bg-white/98 backdrop-blur-md shadow-xl animate-in fade-in slide-in-from-top-1 duration-150"
          >
            <div className="w-full max-w-[1440px] mx-auto px-8 lg:px-12 py-8">
              <div className="grid grid-cols-12 gap-8 items-start">
                
                {/* Category Header & Descriptor (3 cols) */}
                <div className="col-span-3 space-y-3 pr-4 border-r border-slate-100">
                  <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-slate-400 block font-semibold">
                    DISCOVERY &bull; {activeCategoryData.label}
                  </span>
                  <h3 className="text-2xl font-serif font-light text-slate-950">
                    {activeCategoryData.label} Intelligence
                  </h3>
                  <p className="text-xs text-slate-600 font-light leading-relaxed">
                    Source-verified records, statutory requirements, and analytical tools.
                  </p>
                  <div className="pt-2">
                    <Link
                      href={activeCategoryData.href}
                      onClick={() => setActiveDesktopCategory(null)}
                      className="inline-flex items-center gap-1.5 text-xs font-mono uppercase tracking-wider text-slate-900 font-bold hover:text-slate-600 transition-colors"
                    >
                      <span>Explore Overview</span>
                      <ArrowUpRight className="h-3.5 w-3.5" />
                    </Link>
                  </div>
                </div>

                {/* Subsections Grid (9 cols) */}
                <div className="col-span-9 grid grid-cols-2 md:grid-cols-3 gap-6">
                  {activeCategoryData.sections.map((sec, secIdx) => (
                    <div key={secIdx} className="space-y-3">
                      <div className="space-y-1 pb-2 border-b border-slate-100">
                        <span className="text-[10px] font-mono uppercase tracking-wider text-slate-900 font-bold block">
                          {sec.title}
                        </span>
                        {sec.description && (
                          <p className="text-[11px] text-slate-400 font-light leading-snug">
                            {sec.description}
                          </p>
                        )}
                      </div>

                      <ul className="space-y-1.5">
                        {sec.items.map((subItem, itemIdx) => (
                          <li key={itemIdx}>
                            <Link
                              href={subItem.href}
                              onClick={() => setActiveDesktopCategory(null)}
                              className="group block p-2 rounded-xs hover:bg-slate-50 transition-colors"
                            >
                              <div className="flex items-center justify-between gap-2">
                                <span className="text-xs font-mono font-medium text-slate-800 group-hover:text-slate-950 transition-colors">
                                  {subItem.label}
                                </span>
                                {subItem.badge && (
                                  <span className="px-1.5 py-0.5 text-[9px] font-mono bg-slate-950 text-white rounded-xs">
                                    {subItem.badge}
                                  </span>
                                )}
                              </div>
                              {subItem.description && (
                                <p className="text-[11px] text-slate-500 font-light leading-tight mt-0.5 line-clamp-1">
                                  {subItem.description}
                                </p>
                              )}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>

              </div>
            </div>
          </div>
        )}

        {/* MOBILE ACCORDION DRAWER */}
        {isMobileMenuOpen && (
          <div className="lg:hidden border-t border-slate-200 bg-white max-h-[calc(100vh-80px)] overflow-y-auto px-4 sm:px-6 py-6 space-y-6 shadow-2xl animate-in fade-in duration-200">
            
            {/* Mobile Currency Bar */}
            <div className="flex items-center justify-between pb-4 border-b border-slate-200 text-xs">
              <span className="font-mono uppercase text-[10px] text-slate-500 tracking-widest font-semibold">
                Valuation Currency
              </span>
              <div className="flex gap-1.5">
                {(['AED', 'USD', 'EUR', 'GBP'] as const).map((curr) => (
                  <button
                    key={curr}
                    onClick={() => setCurrency(curr as SupportedCurrency)}
                    className={`text-xs font-mono px-2.5 py-1 transition-colors ${
                      currency === curr
                        ? 'bg-slate-900 text-white font-bold'
                        : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                    }`}
                  >
                    {curr}
                  </button>
                ))}
              </div>
            </div>

            {/* Quick Priority Entry Points: Buy & Rent */}
            <div className="grid grid-cols-2 gap-3">
              <Link
                href="/buy"
                onClick={() => setIsMobileMenuOpen(false)}
                className="p-3 bg-slate-950 text-white text-center rounded-xs shadow-xs hover:bg-slate-800 transition-colors"
              >
                <span className="block font-mono text-xs uppercase tracking-widest font-bold">Buy Property</span>
                <span className="block text-[10px] text-slate-300 font-light mt-0.5">19 Verified Sales</span>
              </Link>
              <Link
                href="/rent"
                onClick={() => setIsMobileMenuOpen(false)}
                className="p-3 bg-slate-50 border border-slate-200 text-slate-900 text-center rounded-xs hover:bg-slate-100 transition-colors"
              >
                <span className="block font-mono text-xs uppercase tracking-widest font-bold">Rent Advisory</span>
                <span className="block text-[10px] text-slate-500 font-light mt-0.5">Bespoke Mandates</span>
              </Link>
            </div>

            {/* Mobile Categories Accordion */}
            <div className="space-y-1 divide-y divide-slate-100 border-t border-b border-slate-100">
              {NAVIGATION_CATEGORIES.map((cat) => {
                const isOpen = openMobileAccordion === cat.id
                return (
                  <div key={cat.id} className="py-2">
                    <div className="flex items-center justify-between">
                      <Link
                        href={cat.href}
                        onClick={() => setIsMobileMenuOpen(false)}
                        className="py-1 text-sm font-mono font-semibold text-slate-900 hover:text-slate-600 uppercase tracking-wider"
                      >
                        {cat.label}
                      </Link>

                      {cat.sections && (
                        <button
                          onClick={() => toggleMobileAccordion(cat.id)}
                          aria-label={`Toggle ${cat.label} submenu`}
                          aria-expanded={isOpen}
                          className="p-2 text-slate-400 hover:text-slate-900 transition-colors cursor-pointer"
                        >
                          <ChevronDown
                            className={`h-4 w-4 transition-transform duration-200 ${
                              isOpen ? 'rotate-180 text-slate-900' : ''
                            }`}
                          />
                        </button>
                      )}
                    </div>

                    {/* Accordion Content */}
                    {isOpen && cat.sections && (
                      <div className="pl-3 pr-1 pt-2 pb-3 space-y-3 bg-slate-50/70 border-l-2 border-slate-900 my-1 animate-in fade-in duration-150">
                        {cat.sections.map((sec, sIdx) => (
                          <div key={sIdx} className="space-y-2">
                            <span className="text-[10px] font-mono uppercase tracking-wider text-slate-500 font-bold block">
                              {sec.title}
                            </span>
                            <div className="space-y-1.5 pl-1">
                              {sec.items.map((sub, subIdx) => (
                                <Link
                                  key={subIdx}
                                  href={sub.href}
                                  onClick={() => setIsMobileMenuOpen(false)}
                                  className="flex items-center justify-between py-1.5 text-xs font-mono text-slate-700 hover:text-slate-950"
                                >
                                  <span>{sub.label}</span>
                                  {sub.badge ? (
                                    <span className="px-1.5 py-0.2 bg-slate-900 text-[9px] text-white">
                                      {sub.badge}
                                    </span>
                                  ) : (
                                    <ArrowUpRight className="h-3 w-3 text-slate-400" />
                                  )}
                                </Link>
                              ))}
                            </div>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                )
              })}
            </div>

            {/* Direct Mobile Contact Desk */}
            <div className="pt-2 space-y-2.5">
              <Link
                href="/private-client"
                onClick={() => setIsMobileMenuOpen(false)}
                className="w-full py-3.5 bg-slate-950 text-white text-center text-xs font-mono uppercase tracking-[0.14em] font-semibold flex items-center justify-center gap-2 shadow-sm"
              >
                <span>Private Client Advisory Desk</span>
                <ArrowUpRight className="h-3.5 w-3.5" />
              </Link>
              <div className="grid grid-cols-2 gap-2 text-center text-xs font-mono">
                <a
                  href="mailto:cristianvaduva@duck.com"
                  className="py-2.5 bg-slate-100 hover:bg-slate-200 text-slate-800 transition-colors"
                >
                  Email Advisory
                </a>
                <a
                  href="https://wa.me/436509536345"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="py-2.5 bg-slate-100 hover:bg-slate-200 text-emerald-800 font-semibold transition-colors"
                >
                  WhatsApp Desk
                </a>
              </div>
            </div>

          </div>
        )}
      </header>

      {/* Global Search Dialog Modal */}
      <GlobalSearchDialog isOpen={isSearchOpen} onClose={() => setIsSearchOpen(false)} />
    </>
  )
}