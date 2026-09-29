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



  return (
    <>
      <header className="sticky top-0 z-50 w-full bg-[#ffffff]/90 backdrop-blur-md border-b border-black/[0.06] transition-all">
        <div className="w-full max-w-[1280px] mx-auto flex h-[74px] items-center justify-between px-6 sm:px-8 lg:px-12">
          
          {/* 1. BRAND LOCKUP */}
          <div className="flex items-center gap-5 shrink-0">
            <Link href="/" className="group flex items-center gap-3">
              <span className="text-[17px] font-semibold tracking-[-0.02em] text-[#111111] uppercase hover:text-[#9f8144] transition-colors">
                DUBAI
              </span>
              <span className="h-3.5 w-px bg-black/[0.1] hidden sm:block" />
              <span className="text-[11px] font-mono tracking-widest text-[#8e8e93] uppercase hidden sm:inline font-medium">
                Private Intelligence Platform
              </span>
            </Link>
          </div>

          {/* 2. PRIMARY EDITORIAL NAVIGATION */}
          <nav className="hidden lg:flex items-center gap-8 text-[13px] font-normal tracking-[-0.01em]">
            {NAV_ITEMS.map((item) => {
              const isActive = pathname === item.href || (item.href !== '/' && pathname.startsWith(item.href))
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`py-1 transition-colors relative ${
                    isActive
                      ? 'text-[#111111] font-medium after:absolute after:bottom-0 after:left-0 after:right-0 after:h-[1.5px] after:bg-[#111111]'
                      : 'text-[#6b6b6b] hover:text-[#111111]'
                  }`}
                >
                  {item.label}
                </Link>
              )
            })}
          </nav>

          {/* 3. UTILITIES & PRIVATE CLIENT ACTION */}
          <div className="flex items-center gap-4 shrink-0">
            {/* Currency Selector (Minimal) */}
            <div className="hidden sm:flex items-center gap-0.5 border border-black/[0.08] rounded-full px-1.5 py-0.5 text-[10px] font-mono bg-[#ffffff]">
              {(['AED', 'USD', 'EUR', 'GBP'] as const).map((curr) => (
                <button
                  key={curr}
                  onClick={() => setCurrency(curr as SupportedCurrency)}
                  className={`px-2 py-0.5 rounded-full transition-all ${
                    currency === curr
                      ? 'bg-[#111111] text-[#fafaf8] font-bold'
                      : 'text-[#6b6b6b] hover:text-[#111111]'
                  }`}
                >
                  {curr}
                </button>
              ))}
            </div>

            {/* Search Trigger */}
            <button
              onClick={() => setIsSearchOpen(true)}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-black/[0.08] hover:border-[#111111] text-xs text-[#6b6b6b] hover:text-[#111111] transition-colors cursor-pointer bg-[#ffffff]"
              title="Search Directory (⌘K)"
              aria-label="Open Search"
            >
              <Search className="h-3.5 w-3.5 text-[#6b6b6b]" />
              <span className="text-[11px] hidden md:inline font-mono">Search</span>
              <kbd className="hidden md:inline-flex px-1 text-[9px] font-mono text-[#8e8e93] bg-[#f5f5f3] rounded border border-black/[0.06]">
                ⌘K
              </kbd>
            </button>

            {/* Private Client Quiet Text Link */}
            <Link
              href="/private-client"
              className="hidden sm:inline-flex items-center gap-1 text-[13px] font-medium text-[#111111] hover:text-[#9f8144] transition-colors"
            >
              <span>Private Client</span>
              <ArrowUpRight className="h-3.5 w-3.5 opacity-60" />
            </Link>

            {/* Mobile Drawer Trigger */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-1.5 rounded-lg border border-black/[0.08] text-[#111111] hover:bg-[#f5f5f3] transition-colors lg:hidden cursor-pointer shrink-0"
              aria-label="Toggle Navigation Menu"
            >
              {isMobileMenuOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
            </button>
          </div>
        </div>

        {/* MOBILE DRAWER */}
        {isMobileMenuOpen && (
          <div className="lg:hidden border-t border-[#e5e5ea] bg-[#ffffff] px-4 py-6 space-y-6">
            {/* Currency Selector on Mobile */}
            <div className="flex items-center justify-between pb-4 border-b border-[#e5e5ea] text-xs">
              <span className="font-mono uppercase text-[10px] text-[#6b6b6b]">Currency:</span>
              <div className="flex gap-1">
                {(['AED', 'USD', 'EUR', 'GBP'] as const).map((curr) => (
                  <button
                    key={curr}
                    onClick={() => setCurrency(curr as SupportedCurrency)}
                    className={`px-2 py-0.5 rounded text-[11px] font-mono ${
                      currency === curr
                        ? 'bg-[#111111] text-[#fafaf8] font-bold'
                        : 'text-[#6b6b6b] border border-[#e5e5ea]'
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
                  className="flex items-center justify-between py-2.5 text-sm font-medium text-[#111111] hover:text-[#9f8144] border-b border-[#f5f5f3]"
                >
                  <span>{item.label}</span>
                  <ArrowUpRight className="h-3.5 w-3.5 text-[#8e8e93]" />
                </Link>
              ))}
              <Link
                href="/sources"
                onClick={() => setIsMobileMenuOpen(false)}
                className="flex items-center justify-between py-2.5 text-sm font-medium text-[#6b6b6b] hover:text-[#111111] border-b border-[#f5f5f3]"
              >
                <span>Sources &amp; Methodology</span>
                <ArrowUpRight className="h-3.5 w-3.5 text-[#8e8e93]" />
              </Link>
            </div>

            {/* Mobile Private Client CTA */}
            <div className="pt-2">
              <Link
                href="/private-client"
                onClick={() => setIsMobileMenuOpen(false)}
                className="w-full py-3 rounded bg-[#111111] text-[#fafaf8] text-center text-xs font-medium tracking-tight flex items-center justify-center gap-2"
              >
                <span>Request Private Consultation</span>
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