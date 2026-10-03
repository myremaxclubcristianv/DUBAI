'use client'

import * as React from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Search, Menu, X, ArrowUpRight } from 'lucide-react'
import { GlobalSearchDialog } from '@/components/ui/global-search-dialog'
import { useClient, SupportedCurrency } from '@/lib/context/client-context'

const NAV_ITEMS = [
  { label: 'Properties', href: '/properties' },
  { label: 'Investment', href: '/investment' },
  { label: 'Residency', href: '/residency' },
  { label: 'Districts', href: '/districts' },
  { label: 'Developers', href: '/developers' },
  { label: 'Lifestyle', href: '/lifestyle' },
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
            ? 'bg-[#ffffff]/95 backdrop-blur-md border-b border-[#e5e5ea]'
            : 'bg-[#ffffff] border-b border-[#e5e5ea]/50'
        }`}
      >
        <div className="w-full max-w-[1440px] mx-auto flex h-[80px] sm:h-[84px] items-center justify-between px-6 sm:px-10 lg:px-16">
          
          {/* LEFT: DUBAI Identity */}
          <div className="flex items-center gap-4 shrink-0">
            <Link href="/" className="group flex items-center">
              <span className="text-[17px] font-medium tracking-[0.04em] text-[#111111] uppercase hover:text-[#9f8144] transition-colors">
                DUBAI
              </span>
            </Link>
          </div>

          {/* CENTER: Clean Editorial Navigation */}
          <nav className="hidden lg:flex items-center gap-9 text-[13px] font-normal tracking-[0.01em]">
            {NAV_ITEMS.map((item) => {
              const isActive = pathname === item.href || (item.href !== '/' && pathname.startsWith(item.href))
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`py-1 transition-colors uppercase text-[11px] font-mono tracking-[0.14em] ${
                    isActive
                      ? 'text-[#111111] font-medium'
                      : 'text-[#6b6b6b] hover:text-[#111111]'
                  }`}
                >
                  {item.label}
                </Link>
              )
            })}
          </nav>

          {/* RIGHT: Search, Currency & Private Client Action */}
          <div className="flex items-center gap-6 shrink-0">
            {/* Currency Selector (Restrained minimal text) */}
            <div className="hidden xl:flex items-center gap-2 text-[11px] font-mono text-[#8e8e93]">
              {(['AED', 'USD', 'EUR', 'GBP'] as const).map((curr) => (
                <button
                  key={curr}
                  onClick={() => setCurrency(curr as SupportedCurrency)}
                  className={`transition-colors ${
                    currency === curr
                      ? 'text-[#111111] font-medium'
                      : 'text-[#8e8e93] hover:text-[#111111]'
                  }`}
                >
                  {curr}
                </button>
              ))}
            </div>

            {/* Search Trigger (Subtle) */}
            <button
              onClick={() => setIsSearchOpen(true)}
              className="flex items-center gap-2 text-xs text-[#6b6b6b] hover:text-[#111111] transition-colors cursor-pointer py-1.5"
              title="Search Directory (⌘K)"
              aria-label="Open Search"
            >
              <Search className="h-3.5 w-3.5 text-[#6b6b6b]" />
              <span className="text-[11px] font-mono hidden md:inline">Search</span>
            </button>

            {/* Private Client Link */}
            <Link
              href="/private-client"
              className="hidden sm:inline-flex items-center gap-1 text-[11px] font-mono uppercase tracking-[0.12em] text-[#111111] hover:text-[#9f8144] transition-colors"
            >
              <span>Private Client</span>
              <ArrowUpRight className="h-3 w-3 opacity-60" />
            </Link>

            {/* Mobile Menu Trigger */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 text-[#111111] hover:text-[#9f8144] transition-colors lg:hidden cursor-pointer shrink-0 text-xs font-mono uppercase tracking-wider flex items-center gap-1.5"
              aria-label="Toggle Navigation Menu"
            >
              {isMobileMenuOpen ? (
                <>
                  <X className="h-4 w-4" />
                  <span>Close</span>
                </>
              ) : (
                <>
                  <Menu className="h-4 w-4" />
                  <span>Menu</span>
                </>
              )}
            </button>
          </div>
        </div>

        {/* MOBILE DRAWER */}
        {isMobileMenuOpen && (
          <div className="lg:hidden border-t border-[#e5e5ea] bg-[#ffffff] px-6 py-8 space-y-8 animate-in fade-in duration-200">
            {/* Currency Selector on Mobile */}
            <div className="flex items-center justify-between pb-4 border-b border-[#e5e5ea] text-xs">
              <span className="font-mono uppercase text-[10px] text-[#8e8e93] tracking-widest">Base Currency</span>
              <div className="flex gap-3">
                {(['AED', 'USD', 'EUR', 'GBP'] as const).map((curr) => (
                  <button
                    key={curr}
                    onClick={() => setCurrency(curr as SupportedCurrency)}
                    className={`text-xs font-mono transition-colors ${
                      currency === curr
                        ? 'text-[#111111] font-bold underline'
                        : 'text-[#8e8e93]'
                    }`}
                  >
                    {curr}
                  </button>
                ))}
              </div>
            </div>

            {/* Navigation Links */}
            <div className="space-y-4">
              {NAV_ITEMS.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="flex items-center justify-between py-2 text-base font-light text-[#111111] hover:text-[#9f8144] border-b border-[#f5f5f3]"
                >
                  <span className="font-mono text-xs uppercase tracking-widest">{item.label}</span>
                  <ArrowUpRight className="h-3.5 w-3.5 text-[#8e8e93]" />
                </Link>
              ))}
              <Link
                href="/sources"
                onClick={() => setIsMobileMenuOpen(false)}
                className="flex items-center justify-between py-2 text-base font-light text-[#6b6b6b] hover:text-[#111111] border-b border-[#f5f5f3]"
              >
                <span className="font-mono text-xs uppercase tracking-widest">Sources &amp; Provenance</span>
                <ArrowUpRight className="h-3.5 w-3.5 text-[#8e8e93]" />
              </Link>
            </div>

            {/* Mobile Private Client CTA */}
            <div className="pt-2">
              <Link
                href="/private-client"
                onClick={() => setIsMobileMenuOpen(false)}
                className="w-full py-4 rounded-full bg-[#111111] text-[#fafaf8] text-center text-xs font-medium tracking-tight flex items-center justify-center gap-2"
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