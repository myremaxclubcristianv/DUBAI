'use client'

import * as React from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Search, Menu, X, ArrowUpRight } from 'lucide-react'
import { GlobalSearchDialog } from '@/components/ui/global-search-dialog'
import { useClient, SupportedCurrency } from '@/lib/context/client-context'

const NAV_ITEMS = [
  { label: 'Properties', href: '/properties' },
  { label: 'Areas', href: '/areas' },
  { label: 'Market', href: '/market' },
  { label: 'Private Client', href: '/private-client' },
]

export function Header() {
  const pathname = usePathname()
  const { currency, setCurrency } = useClient()
  const [isSearchOpen, setIsSearchOpen] = React.useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false)
  const [isScrolled, setIsScrolled] = React.useState(false)

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 15)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <>
      <header
        className={`sticky top-0 z-50 w-full transition-all duration-300 ${
          isScrolled
            ? 'bg-white/95 backdrop-blur-md border-b border-slate-200/90 shadow-[0_4px_20px_rgba(15,23,42,0.06)]'
            : 'bg-white/90 backdrop-blur-sm border-b border-slate-200/60'
        }`}
      >
        <div className="w-full max-w-[1440px] mx-auto flex h-[72px] sm:h-[76px] items-center justify-between px-6 sm:px-10 lg:px-16">
          
          {/* LEFT: Dubai Platform Wordmark */}
          <div className="flex items-center gap-4 shrink-0">
            <Link href="/" className="group flex flex-col">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#0284c7]" />
                <span className="text-[17px] sm:text-[18px] font-semibold tracking-[0.08em] text-slate-900 uppercase group-hover:text-[#0284c7] transition-colors">
                  DUBAI
                </span>
              </div>
              <span className="text-[9px] font-mono tracking-[0.2em] text-slate-500 uppercase hidden sm:block">
                CRISTIANVADUVA.COM
              </span>
            </Link>
          </div>

          {/* CENTER: Clean Architectural Navigation */}
          <nav className="hidden md:flex items-center gap-8 text-[12px] font-normal">
            {NAV_ITEMS.map((item) => {
              const isActive = pathname === item.href || (item.href !== '/' && pathname.startsWith(item.href))
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`py-1 transition-all uppercase text-[11px] font-mono tracking-[0.16em] relative ${
                    isActive
                      ? 'text-[#0284c7] font-semibold'
                      : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  {item.label}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 right-0 h-[1.5px] bg-[#0284c7]" />
                  )}
                </Link>
              )
            })}
          </nav>

          {/* RIGHT: AED Currency Selector, Search & Private Client Desk */}
          <div className="flex items-center gap-3 sm:gap-4 shrink-0">
            {/* AED Currency Selector */}
            <div className="flex items-center gap-1 px-2 py-1 rounded-xs bg-slate-100 border border-slate-200 text-[11px] font-mono text-slate-600">
              {(['AED', 'USD', 'EUR', 'GBP'] as const).map((curr) => (
                <button
                  key={curr}
                  onClick={() => setCurrency(curr as SupportedCurrency)}
                  className={`px-1.5 py-0.5 rounded-xs transition-colors cursor-pointer ${
                    currency === curr
                      ? 'text-white bg-[#0284c7] font-bold shadow-xs'
                      : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  {curr}
                </button>
              ))}
            </div>

            {/* Search Trigger */}
            <button
              onClick={() => setIsSearchOpen(true)}
              className="flex items-center gap-2 px-3 py-1.5 rounded-xs bg-slate-100 hover:bg-slate-200/80 border border-slate-200 text-xs text-slate-600 hover:text-slate-900 transition-colors cursor-pointer"
              title="Search Directory (⌘K)"
              aria-label="Open Search"
            >
              <Search className="h-3.5 w-3.5 text-[#0284c7]" />
              <span className="text-[11px] font-mono hidden lg:inline">Search</span>
              <kbd className="hidden sm:inline-block text-[9px] font-mono px-1 py-0.5 rounded bg-white text-slate-500 border border-slate-200 shadow-2xs">⌘K</kbd>
            </button>

            {/* Private Client Desk Button */}
            <Link
              href="/private-client"
              className="hidden sm:inline-flex items-center gap-1.5 px-4 py-2 rounded-xs bg-[#0284c7] hover:bg-[#0369a1] text-white text-[11px] font-mono uppercase tracking-[0.14em] font-semibold transition-all shadow-[0_2px_8px_rgba(2,132,199,0.25)]"
            >
              <span>Private Client Desk</span>
              <ArrowUpRight className="h-3 w-3" />
            </Link>

            {/* Mobile Menu Trigger */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 text-slate-800 hover:text-[#0284c7] transition-colors md:hidden cursor-pointer shrink-0 text-xs font-mono uppercase tracking-wider flex items-center gap-1.5"
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
                    className={`text-xs font-mono px-2.5 py-1 rounded-xs transition-colors ${
                      currency === curr
                        ? 'bg-[#0284c7] text-white font-bold'
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
                  className="flex items-center justify-between py-3 text-base font-light text-slate-800 hover:text-[#0284c7] border-b border-slate-100"
                >
                  <span className="font-mono text-xs uppercase tracking-widest">{item.label}</span>
                  <ArrowUpRight className="h-3.5 w-3.5 text-slate-400" />
                </Link>
              ))}
              <Link
                href="/sources"
                onClick={() => setIsMobileMenuOpen(false)}
                className="flex items-center justify-between py-3 text-base font-light text-slate-600 hover:text-[#0284c7] border-b border-slate-100"
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
                className="w-full py-3.5 rounded-xs bg-[#0284c7] text-white text-center text-xs font-mono uppercase tracking-[0.14em] font-semibold flex items-center justify-center gap-2 shadow-sm"
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