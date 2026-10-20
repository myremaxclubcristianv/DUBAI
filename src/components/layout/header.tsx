'use client'

import * as React from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Search, Menu, X, ArrowUpRight } from 'lucide-react'
import { GlobalSearchDialog } from '@/components/ui/global-search-dialog'
import { useClient, SupportedCurrency } from '@/lib/context/client-context'

const NAV_ITEMS = [
  { label: 'Properties', href: '/properties' },
  { label: 'Developments', href: '/developments' },
  { label: 'Areas', href: '/areas' },
  { label: 'Market', href: '/market' },
  { label: 'Private Client', href: '/private-client' },
]

export function Header() {
  const pathname = usePathname()
  const { currency, setCurrency } = useClient()
  const [isSearchOpen, setIsSearchOpen] = React.useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false)

  return (
    <>
      <header className="sticky top-0 z-50 w-full bg-white border-b border-slate-200 transition-colors">
        <div className="w-full max-w-[1440px] mx-auto flex h-[76px] sm:h-[80px] items-center justify-between px-4 sm:px-10 lg:px-16">
          
          {/* LEFT: Architectural Dubai Wordmark + Restrained Vertical Separator + Platform Descriptor */}
          <div className="flex items-center gap-4 shrink-0">
            <Link href="/" className="flex items-center gap-3.5 group">
              <span className="text-[18px] sm:text-[19px] font-semibold tracking-[0.16em] text-slate-950 uppercase group-hover:text-slate-600 transition-colors font-sans">
                DUBAI
              </span>
              <span className="h-4 w-[1px] bg-slate-300 hidden sm:block" aria-hidden="true" />
              <span className="text-[10px] font-mono tracking-[0.2em] text-slate-500 uppercase hidden sm:inline-block font-medium">
                REAL ESTATE INTELLIGENCE
              </span>
            </Link>
          </div>

          {/* CENTER: Clean Architectural Navigation */}
          <nav className="hidden md:flex items-center gap-7 lg:gap-9 text-[12px] font-normal ml-8 lg:ml-14">
            {NAV_ITEMS.map((item) => {
              const isActive = pathname === item.href || (item.href !== '/' && pathname.startsWith(item.href))
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`py-1 transition-all uppercase text-[11px] font-mono tracking-[0.18em] relative ${
                    isActive
                      ? 'text-slate-950 font-bold'
                      : 'text-slate-600 hover:text-slate-950'
                  }`}
                >
                  {item.label}
                  {isActive && (
                    <span className="absolute -bottom-1.5 left-0 right-0 h-[1.5px] bg-slate-950" />
                  )}
                </Link>
              )
            })}
          </nav>

          {/* RIGHT: Currency Selector, Search & Refined Private Client Desk Action */}
          <div className="flex items-center gap-3.5 sm:gap-5 shrink-0">
            {/* Segmented Architectural Currency Selector */}
            <div className="flex items-center border border-slate-200 bg-slate-50/80 text-[11px] font-mono">
              {(['AED', 'USD', 'EUR', 'GBP'] as const).map((curr, idx) => (
                <button
                  key={curr}
                  onClick={() => setCurrency(curr as SupportedCurrency)}
                  className={`px-2 sm:px-2.5 py-1 transition-colors cursor-pointer ${
                    idx > 0 ? 'border-l border-slate-200' : ''
                  } ${
                    currency === curr
                      ? 'text-white bg-slate-950 font-semibold'
                      : 'text-slate-600 hover:text-slate-950 hover:bg-slate-100'
                  } ${curr === 'EUR' || curr === 'GBP' ? 'hidden sm:inline-block' : ''}`}
                >
                  {curr}
                </button>
              ))}
            </div>

            {/* Search Trigger */}
            <button
              onClick={() => setIsSearchOpen(true)}
              className="flex items-center gap-2 px-2.5 sm:px-3 py-1 bg-white hover:bg-slate-50 border border-slate-200 text-xs text-slate-700 hover:text-slate-950 transition-colors cursor-pointer"
              title="Search Directory (⌘K)"
              aria-label="Search"
            >
              <Search className="h-3.5 w-3.5 text-slate-600" />
              <span className="text-[11px] font-mono hidden lg:inline tracking-wider uppercase">Search</span>
              <kbd className="hidden sm:inline-block text-[9px] font-mono px-1 py-0.5 bg-slate-100 text-slate-700 border border-slate-300">⌘K</kbd>
            </button>

            {/* Private Client Desk Action Button */}
            <Link
              href="/private-client"
              className="hidden sm:inline-flex items-center gap-2 px-3.5 py-1.5 border border-slate-950 bg-slate-950 hover:bg-slate-800 text-white text-[11px] font-mono uppercase tracking-[0.16em] font-semibold transition-all shadow-xs"
            >
              <span>Private Client Desk</span>
              <ArrowUpRight className="h-3.5 w-3.5" />
            </Link>

            {/* Mobile Menu Trigger */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-1.5 text-slate-900 hover:text-slate-600 transition-colors md:hidden cursor-pointer shrink-0 text-xs font-mono uppercase tracking-wider flex items-center gap-1.5"
              aria-label="Toggle Navigation Menu"
            >
              {isMobileMenuOpen ? (
                <>
                  <X className="h-5 w-5" />
                  <span className="hidden sm:inline">Close</span>
                </>
              ) : (
                <>
                  <Menu className="h-5 w-5" />
                  <span className="hidden sm:inline">Menu</span>
                </>
              )}
            </button>
          </div>
        </div>

        {/* MOBILE DRAWER */}
        {isMobileMenuOpen && (
          <div className="md:hidden border-t border-slate-200 bg-white px-6 py-8 space-y-6 shadow-xl animate-in fade-in duration-200">
            {/* Currency Selector on Mobile */}
            <div className="flex items-center justify-between pb-4 border-b border-slate-200 text-xs">
              <span className="font-mono uppercase text-[10px] text-slate-500 tracking-widest">Base Currency</span>
              <div className="flex gap-2">
                {(['AED', 'USD', 'EUR', 'GBP'] as const).map((curr) => (
                  <button
                    key={curr}
                    onClick={() => setCurrency(curr as SupportedCurrency)}
                    className={`text-xs font-mono px-2.5 py-1 transition-colors ${
                      currency === curr
                        ? 'bg-slate-900 text-white font-bold'
                        : 'bg-slate-100 text-slate-700'
                    }`}
                  >
                    {curr}
                  </button>
                ))}
              </div>
            </div>

            {/* Navigation Links */}
            <div className="space-y-1">
              {NAV_ITEMS.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="flex items-center justify-between py-3 text-base font-light text-slate-900 hover:text-slate-600 border-b border-slate-100"
                >
                  <span className="font-mono text-xs uppercase tracking-widest">{item.label}</span>
                  <ArrowUpRight className="h-3.5 w-3.5 text-slate-400" />
                </Link>
              ))}
              <Link
                href="/sources"
                onClick={() => setIsMobileMenuOpen(false)}
                className="flex items-center justify-between py-3 text-base font-light text-slate-600 hover:text-slate-900 border-b border-slate-100"
              >
                <span className="font-mono text-xs uppercase tracking-widest">Sources &amp; Provenance</span>
                <ArrowUpRight className="h-3.5 w-3.5 text-slate-400" />
              </Link>
            </div>

            {/* Mobile Private Client CTA */}
            <div className="pt-2">
              <Link
                href="/private-client"
                onClick={() => setIsMobileMenuOpen(false)}
                className="w-full py-3.5 bg-slate-900 text-white text-center text-xs font-mono uppercase tracking-[0.14em] font-semibold flex items-center justify-center gap-2 shadow-sm"
              >
                <span>Private Client Advisory</span>
                <ArrowUpRight className="h-3.5 w-3.5" />
              </Link>
            </div>
          </div>
        )}
      </header>

      {/* Global Search Dialog Modal */}
      <GlobalSearchDialog isOpen={isSearchOpen} onClose={() => setIsSearchOpen(false)} />
    </>
  )
}