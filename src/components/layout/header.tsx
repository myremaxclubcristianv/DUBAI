'use client'

import * as React from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { 
  Search, 
  Bookmark, 
  Menu, 
  X, 
  ChevronRight
} from 'lucide-react'
import { GlobalSearchDialog } from '@/components/ui/global-search-dialog'
import { useClient } from '@/lib/context/client-context'

export function Header() {
  const pathname = usePathname()
  const { shortlistIds } = useClient()

  const [isSearchOpen, setIsSearchOpen] = React.useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false)

  const navLinks = [
    { label: 'Properties', href: '/properties' },
    { label: 'Investment', href: '/investment' },
    { label: 'Market', href: '/market' },
    { label: 'Residency', href: '/residency' },
    { label: 'Areas', href: '/areas' },
    { label: 'Lifestyle', href: '/lifestyle' },
  ]

  return (
    <>
      <header className="sticky top-0 z-50 w-full bg-white/80 backdrop-blur-2xl border-b border-black/10 transition-all">
        <div className="w-full max-w-[1240px] mx-auto flex h-14 sm:h-16 items-center justify-between px-4 sm:px-6 lg:px-8">
          {/* 1. LEFT: APPLE PRO BRAND MARK */}
          <div className="flex items-center gap-3 shrink-0">
            <Link href="/" className="group flex items-center gap-2 py-1">
              <span className="text-sm sm:text-base font-extrabold tracking-tight text-[#1d1d1f] uppercase group-hover:text-[#b8860b] transition-colors">
                DUBAI
              </span>
              <span className="h-3.5 w-px bg-black/15 hidden xs:block" />
              <span className="text-[10px] font-mono tracking-widest text-[#86868b] uppercase hidden xs:inline font-semibold">
                Private Client
              </span>
            </Link>
          </div>

          {/* 2. CENTER: APPLE STYLE COMPACT NAV LINKS (Desktop lg+) */}
          <nav className="hidden lg:flex items-center gap-8 text-[13px] font-medium tracking-tight">
            {navLinks.map((item) => {
              const isActive = pathname === item.href || (item.href !== '/' && pathname.startsWith(item.href))
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`transition-colors py-1 ${
                    isActive
                      ? 'text-[#1d1d1f] font-semibold'
                      : 'text-[#6e6e73] hover:text-[#1d1d1f]'
                  }`}
                >
                  {item.label}
                </Link>
              )
            })}
          </nav>

          {/* 3. RIGHT: APPLE GLASS UTILITIES + PRO PILL CTA */}
          <div className="flex items-center gap-2 sm:gap-3 shrink-0">
            {/* Search Trigger */}
            <button
              onClick={() => setIsSearchOpen(true)}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-black/10 bg-[#f5f5f7] hover:bg-[#ebebeb] text-xs text-[#6e6e73] hover:text-[#1d1d1f] transition-all cursor-pointer shadow-xs"
              title="Search (⌘K)"
              aria-label="Open Search"
            >
              <Search className="h-3.5 w-3.5 text-[#86868b]" />
              <span className="text-[11px] hidden sm:inline font-medium">Search</span>
              <kbd className="hidden md:inline-flex px-1.5 py-0.2 text-[9px] font-mono text-[#86868b] bg-white border border-black/10 rounded-full shadow-2xs">
                ⌘K
              </kbd>
            </button>

            {/* Saved Shortlist */}
            <Link
              href="/client"
              className="hidden sm:flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-black/10 bg-[#f5f5f7] hover:bg-[#ebebeb] text-xs font-medium text-[#6e6e73] hover:text-[#1d1d1f] transition-all shadow-xs"
              title="Saved Shortlist"
              aria-label="View Saved Shortlist"
            >
              <Bookmark className={`h-3.5 w-3.5 ${shortlistIds.length > 0 ? 'text-[#b8860b] fill-[#b8860b]' : 'text-[#86868b]'}`} />
              {shortlistIds.length > 0 && (
                <span className="px-1.5 py-0.2 rounded-full text-[9px] font-mono font-bold bg-[#1d1d1f] text-white">
                  {shortlistIds.length}
                </span>
              )}
            </Link>

            {/* Private Client Desk CTA (Apple Pill Button) */}
            <Link
              href="/private-client"
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-[#1d1d1f] hover:bg-[#000000] text-white text-[11px] sm:text-xs font-semibold tracking-tight transition-all shadow-sm hover:scale-[1.02] active:scale-[0.98] shrink-0"
            >
              <span>Private Client</span>
              <ChevronRight className="h-3 w-3 text-white/70" />
            </Link>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-1.5 rounded-full border border-black/10 bg-[#f5f5f7] text-[#1d1d1f] hover:bg-[#ebebeb] transition-colors lg:hidden cursor-pointer shrink-0"
              aria-label="Toggle Navigation Menu"
            >
              {isMobileMenuOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
            </button>
          </div>
        </div>

        {/* 4. MOBILE DRAWER */}
        {isMobileMenuOpen && (
          <div className="lg:hidden border-t border-black/10 bg-white/95 backdrop-blur-3xl px-4 py-6 space-y-4 animate-in slide-in-from-top-2 duration-150 shadow-xl">
            <div className="grid grid-cols-2 gap-2 pb-2">
              <button
                onClick={() => {
                  setIsMobileMenuOpen(false)
                  setIsSearchOpen(true)
                }}
                className="flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-xl border border-black/10 bg-[#f5f5f7] text-xs font-semibold text-[#1d1d1f]"
              >
                <Search className="h-3.5 w-3.5 text-[#86868b]" />
                <span>Search</span>
              </button>
              <Link
                href="/client"
                onClick={() => setIsMobileMenuOpen(false)}
                className="flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-xl border border-black/10 bg-[#f5f5f7] text-xs font-semibold text-[#1d1d1f]"
              >
                <Bookmark className={`h-3.5 w-3.5 ${shortlistIds.length > 0 ? 'text-[#b8860b] fill-[#b8860b]' : 'text-[#86868b]'}`} />
                <span>Saved ({shortlistIds.length})</span>
              </Link>
            </div>

            <nav className="flex flex-col space-y-1">
              {navLinks.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-sm font-semibold text-[#1d1d1f] hover:text-[#b8860b] py-2.5 px-3 rounded-xl hover:bg-[#f5f5f7] transition-colors"
                >
                  {item.label}
                </Link>
              ))}
            </nav>

            <div className="pt-2 border-t border-black/10 flex flex-col gap-2">
              <Link
                href="/private-client"
                onClick={() => setIsMobileMenuOpen(false)}
                className="w-full py-3 rounded-full bg-[#1d1d1f] text-white text-center text-xs font-semibold shadow-md"
              >
                Private Client Advisory Desk →
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