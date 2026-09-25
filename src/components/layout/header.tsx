'use client'

import * as React from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { 
  Search, 
  Bookmark, 
  Menu, 
  X, 
  ArrowRight
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
      <header className="sticky top-0 z-40 w-full bg-white/95 backdrop-blur-md border-b border-border transition-all">
        <div className="w-full max-w-6xl mx-auto flex h-16 items-center justify-between px-4 sm:px-6 lg:px-8">
          {/* 1. LEFT: DUBAI BRAND LOCKUP */}
          <div className="flex items-center gap-3 shrink-0">
            <Link href="/" className="group flex flex-col sm:flex-row sm:items-baseline sm:gap-2">
              <span className="text-sm font-black tracking-tight text-text-primary uppercase group-hover:text-accent transition-colors">
                DUBAI
              </span>
              <span className="text-[10px] font-mono tracking-wider text-text-muted uppercase hidden sm:inline">
                Private Client & Investment
              </span>
            </Link>
          </div>

          {/* 2. CENTER: CLEAN EDITORIAL NAVIGATION (Desktop lg+) */}
          <nav className="hidden lg:flex items-center gap-7 text-xs font-semibold">
            {navLinks.map((item) => {
              const isActive = pathname === item.href || (item.href !== '/' && pathname.startsWith(item.href))
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`tracking-wide text-xs transition-colors py-1 ${
                    isActive
                      ? 'text-text-primary font-bold border-b-2 border-accent'
                      : 'text-text-secondary hover:text-text-primary'
                  }`}
                >
                  {item.label}
                </Link>
              )
            })}
          </nav>

          {/* 3. RIGHT: SEARCH, SHORTLIST, PRIVATE CLIENT DESK */}
          <div className="flex items-center gap-2 sm:gap-3 shrink-0">
            {/* Search Trigger */}
            <button
              onClick={() => setIsSearchOpen(true)}
              className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg border border-border bg-surface hover:bg-surface-elevated text-xs text-text-secondary hover:text-text-primary transition-colors cursor-pointer"
              title="Global Search (Cmd+K)"
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
              className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg border border-border bg-surface hover:bg-surface-elevated text-xs font-semibold text-text-secondary hover:text-text-primary transition-colors"
              title="Saved Shortlist"
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
              className="hidden sm:inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-text-primary hover:bg-black text-white text-[11px] font-bold uppercase tracking-wider transition-colors shadow-2xs"
            >
              <span>Private Client</span>
              <ArrowRight className="h-3 w-3 text-accent" />
            </Link>

            {/* Mobile / Tablet Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 rounded-lg border border-border bg-surface text-text-primary hover:bg-surface-elevated transition-colors lg:hidden cursor-pointer"
              aria-label="Toggle Navigation Menu"
            >
              {isMobileMenuOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
            </button>
          </div>
        </div>

        {/* 4. MOBILE DRAWER */}
        {isMobileMenuOpen && (
          <div className="lg:hidden border-t border-border bg-white px-4 py-6 space-y-4 animate-in slide-in-from-top-2 duration-150">
            <nav className="flex flex-col space-y-3">
              {navLinks.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-sm font-semibold text-text-primary hover:text-accent py-1.5 border-b border-border-subtle"
                >
                  {item.label}
                </Link>
              ))}
              <Link
                href="/network"
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-sm font-semibold text-text-primary hover:text-accent py-1.5 border-b border-border-subtle"
              >
                The Ecosystem
              </Link>
              <Link
                href="/developers"
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-sm font-semibold text-text-primary hover:text-accent py-1.5 border-b border-border-subtle"
              >
                Developers Registry
              </Link>
            </nav>

            <div className="pt-3 space-y-2">
              <Link
                href="/private-client"
                onClick={() => setIsMobileMenuOpen(false)}
                className="w-full py-3 px-4 rounded-xl bg-text-primary text-white text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 shadow-md"
              >
                <span>Private Client Desk</span>
                <ArrowRight className="h-4 w-4 text-accent" />
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