'use client'

import * as React from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Search, Menu, X, ArrowUpRight } from 'lucide-react'
import { GlobalSearchDialog } from '@/components/ui/global-search-dialog'
import { useClient, SupportedCurrency } from '@/lib/context/client-context'

const NAV_ITEMS = [
  { label: 'Properties', href: '/properties' },
  { label: 'Intelligence', href: '/market' },
  { label: 'Districts', href: '/districts' },
  { label: 'Developers', href: '/developers' },
  { label: 'Investment', href: '/investment' },
  { label: 'Residency', href: '/residency' },
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
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <>
      <header
        className={`sticky top-0 z-50 w-full transition-all duration-300 ${
          isScrolled
            ? 'bg-[#08080a]/95 backdrop-blur-md border-b border-white/10 shadow-[0_4px_24px_rgba(0,0,0,0.4)]'
            : 'bg-[#08080a] border-b border-white/5'
        }`}
      >
        <div className="w-full max-w-[1440px] mx-auto flex h-[72px] sm:h-[80px] items-center justify-between px-6 sm:px-10 lg:px-16">
          
          {/* LEFT: DUBAI Identity */}
          <div className="flex items-center gap-4 shrink-0">
            <Link href="/" className="group flex flex-col">
              <div className="flex items-center gap-2">
                <span className="text-[16px] sm:text-[17px] font-semibold tracking-[0.06em] text-[#f5f5f7] uppercase group-hover:text-[#c9a962] transition-colors">
                  DUBAI.CRISTIANVADUVA.COM
                </span>
              </div>
              <span className="text-[9px] font-mono tracking-[0.2em] text-[#8e8e93] uppercase hidden sm:block">
                REAL ESTATE INTELLIGENCE &bull; ADVISORY
              </span>
            </Link>
          </div>

          {/* CENTER: Editorial Navigation */}
          <nav className="hidden xl:flex items-center gap-7 text-[12px] font-normal">
            {NAV_ITEMS.map((item) => {
              const isActive = pathname === item.href || (item.href !== '/' && pathname.startsWith(item.href))
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`py-1 transition-all uppercase text-[11px] font-mono tracking-[0.14em] relative ${
                    isActive
                      ? 'text-[#c9a962] font-semibold'
                      : 'text-[#a1a1aa] hover:text-[#f5f5f7]'
                  }`}
                >
                  {item.label}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 right-0 h-[1.5px] bg-[#c9a962]" />
                  )}
                </Link>
              )
            })}
          </nav>

          {/* RIGHT: Currency, Search & Private Client Action */}
          <div className="flex items-center gap-4 sm:gap-6 shrink-0">
            {/* Currency Selector */}
            <div className="hidden lg:flex items-center gap-1.5 px-2.5 py-1 rounded-sm bg-[#131318] border border-white/10 text-[11px] font-mono text-[#8e8e93]">
              {(['AED', 'USD', 'EUR', 'GBP'] as const).map((curr) => (
                <button
                  key={curr}
                  onClick={() => setCurrency(curr as SupportedCurrency)}
                  className={`px-1.5 py-0.5 rounded-xs transition-colors cursor-pointer ${
                    currency === curr
                      ? 'text-[#08080a] bg-[#c9a962] font-bold'
                      : 'text-[#8e8e93] hover:text-[#f5f5f7]'
                  }`}
                >
                  {curr}
                </button>
              ))}
            </div>

            {/* Search Trigger */}
            <button
              onClick={() => setIsSearchOpen(true)}
              className="flex items-center gap-2 px-3 py-1.5 rounded-sm bg-[#131318] hover:bg-[#181820] border border-white/10 text-xs text-[#a1a1aa] hover:text-[#f5f5f7] transition-colors cursor-pointer"
              title="Search Directory (⌘K)"
              aria-label="Open Search"
            >
              <Search className="h-3.5 w-3.5 text-[#c9a962]" />
              <span className="text-[11px] font-mono hidden md:inline">Search</span>
              <kbd className="hidden sm:inline-block text-[9px] font-mono px-1 py-0.5 rounded bg-black/40 text-[#71717a] border border-white/5">⌘K</kbd>
            </button>

            {/* Primary Action Button */}
            <Link
              href="/private-client"
              className="hidden sm:inline-flex items-center gap-1.5 px-4 py-2 rounded-sm bg-[#c9a962] hover:bg-[#dbbe7a] text-[#08080a] text-[11px] font-mono uppercase tracking-[0.14em] font-semibold transition-all shadow-[0_0_15px_rgba(201,169,98,0.2)]"
            >
              <span>Explore Dubai</span>
              <ArrowUpRight className="h-3 w-3" />
            </Link>

            {/* Mobile Menu Trigger */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 text-[#f5f5f7] hover:text-[#c9a962] transition-colors xl:hidden cursor-pointer shrink-0 text-xs font-mono uppercase tracking-wider flex items-center gap-1.5"
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
          <div className="xl:hidden border-t border-white/10 bg-[#0d0d11] px-6 py-8 space-y-8 animate-in fade-in duration-200">
            {/* Currency Selector on Mobile */}
            <div className="flex items-center justify-between pb-4 border-b border-white/10 text-xs">
              <span className="font-mono uppercase text-[10px] text-[#8e8e93] tracking-widest">Base Currency</span>
              <div className="flex gap-2">
                {(['AED', 'USD', 'EUR', 'GBP'] as const).map((curr) => (
                  <button
                    key={curr}
                    onClick={() => setCurrency(curr as SupportedCurrency)}
                    className={`text-xs font-mono px-2.5 py-1 rounded-sm transition-colors ${
                      currency === curr
                        ? 'bg-[#c9a962] text-[#08080a] font-bold'
                        : 'bg-[#181820] text-[#a1a1aa]'
                    }`}
                  >
                    {curr}
                  </button>
                ))}
              </div>
            </div>

            {/* Navigation Links */}
            <div className="space-y-3">
              {NAV_ITEMS.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="flex items-center justify-between py-2.5 text-base font-light text-[#f5f5f7] hover:text-[#c9a962] border-b border-white/5"
                >
                  <span className="font-mono text-xs uppercase tracking-widest">{item.label}</span>
                  <ArrowUpRight className="h-3.5 w-3.5 text-[#71717a]" />
                </Link>
              ))}
              <Link
                href="/sources"
                onClick={() => setIsMobileMenuOpen(false)}
                className="flex items-center justify-between py-2.5 text-base font-light text-[#a1a1aa] hover:text-[#f5f5f7] border-b border-white/5"
              >
                <span className="font-mono text-xs uppercase tracking-widest">Sources &amp; Provenance</span>
                <ArrowUpRight className="h-3.5 w-3.5 text-[#71717a]" />
              </Link>
            </div>

            {/* Mobile Private Client CTA */}
            <div className="pt-2">
              <Link
                href="/private-client"
                onClick={() => setIsMobileMenuOpen(false)}
                className="w-full py-3.5 rounded-sm bg-[#c9a962] text-[#08080a] text-center text-xs font-mono uppercase tracking-[0.14em] font-semibold flex items-center justify-center gap-2"
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