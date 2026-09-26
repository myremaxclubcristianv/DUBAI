'use client'

import * as React from 'react'
import Link from 'next/link'
import { PageIntro, SectionHeader } from '@/components/layout/layout-primitives'
import { SourceBadge } from '@/components/ui/source-badge'
import { CadranQuadrant } from '@/components/ui/luxury-cadran'
import {
  Eye,
  Keyboard,
  Monitor,
  Sparkles,
  ArrowRight,
} from 'lucide-react'

export default function AccessibilityPage() {
  return (
    <div className="bg-black text-white min-h-screen pb-28 selection:bg-accent/30 selection:text-white">
      {/* 1. EDITORIAL PAGE INTRO */}
      <PageIntro
        eyebrow="Universal Design & WCAG 2.1 AA Standards"
        badge={<SourceBadge status="OFFICIAL SOURCE" sourceName="W3C Accessibility Guidelines" />}
        title="ACCESSIBILITY"
        description="Our commitment to digital inclusion, universal accessibility, and semantic web standards across all platform tools and intelligence dashboards."
      />

      <main className="w-full max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 space-y-16">
        {/* 2. ACCESSIBILITY QUADRANT */}
        <CadranQuadrant
          eyebrow="WCAG 2.1 LEVEL AA PROTOCOLS"
          title="Digital Inclusion & Interface Accessibility"
          statutorySource="World Wide Web Consortium (W3C) Web Content Accessibility Guidelines"
          quadrants={[
            {
              title: 'High Contrast Dark Titanium',
              value: '4.5:1 RATIO',
              subtext: 'All typography and metric displays maintain minimum 4.5:1 text-to-background contrast ratios for optimal visual clarity.',
              delta: 'WCAG AA',
              isPositive: true,
              statutoryRef: 'WCAG 1.4.3 Contrast',
            },
            {
              title: 'Full Keyboard Navigation',
              value: '100% OPERABLE',
              subtext: 'All interactive calculators, filter tabs, modal dialogs, and navigation drawers are fully navigable via standard Tab and Enter keys.',
              delta: 'KEYBOARD READY',
              isPositive: true,
              statutoryRef: 'WCAG 2.1.1 Keyboard',
            },
            {
              title: 'Semantic ARIA Landmarks',
              value: 'SCREEN READERS',
              subtext: 'Pages are built with HTML5 semantic elements (header, main, nav, section) and descriptive ARIA labels for assistive technologies.',
              delta: 'COMPLIANT',
              isPositive: true,
              statutoryRef: 'WCAG 4.1.2 Name, Role, Value',
            },
            {
              title: 'Reduced Motion Preference',
              value: 'PREFERS-REDUCED',
              subtext: 'Supports OS-level prefers-reduced-motion settings, disabling animated transitions for users sensitive to motion.',
              delta: 'ADAPTIVE',
              isPositive: true,
              statutoryRef: 'WCAG 2.3.3 Animation',
            },
          ]}
        />

        {/* 3. ACCESSIBILITY COMMITMENT */}
        <div className="space-y-10">
          <SectionHeader
            align="center"
            eyebrow="Inclusion Standards"
            title="Design Standards & Technical Features"
            description="Specific engineering practices implemented to ensure effortless accessibility for all clients."
          />

          <div className="space-y-6 text-xs text-zinc-300 leading-relaxed">
            <div className="p-6 sm:p-8 rounded-3xl bg-[#0c0c0e] border border-white/10 space-y-3">
              <div className="flex items-center gap-2 text-white font-bold text-sm">
                <Eye className="h-4 w-4 text-accent" />
                <h3>1. Visual Hierarchy & Typography Scaling</h3>
              </div>
              <p className="text-zinc-400">
                The platform utilizes a structured typographic scale with generous line-heights and high-contrast color pairings. All text elements scale cleanly with browser zoom levels up to 200% without breaking page layouts or clipping content.
              </p>
            </div>

            <div className="p-6 sm:p-8 rounded-3xl bg-[#0c0c0e] border border-white/10 space-y-3">
              <div className="flex items-center gap-2 text-white font-bold text-sm">
                <Keyboard className="h-4 w-4 text-accent" />
                <h3>2. Focus Rings & Form Usability</h3>
              </div>
              <p className="text-zinc-400">
                Interactive inputs, buttons, and filter selectors provide prominent focus states (accent gold rings) when navigating via keyboard. Forms include explicit label associations, descriptive error messaging, and autocomplete tags for ease of use.
              </p>
            </div>

            <div className="p-6 sm:p-8 rounded-3xl bg-[#0c0c0e] border border-white/10 space-y-3">
              <div className="flex items-center gap-2 text-white font-bold text-sm">
                <Monitor className="h-4 w-4 text-accent" />
                <h3>3. Assistive Technology Compatibility</h3>
              </div>
              <p className="text-zinc-400">
                Our interface is regularly tested across major modern browsers and screen readers (VoiceOver, NVDA, JAWS). Tables and financial comparison sheets feature row and column header tags for accurate tabular data readout.
              </p>
            </div>

            <div className="p-6 sm:p-8 rounded-3xl bg-[#0c0c0e] border border-white/10 space-y-3">
              <div className="flex items-center gap-2 text-white font-bold text-sm">
                <Sparkles className="h-4 w-4 text-accent" />
                <h3>4. Feedback & Continuous Improvement</h3>
              </div>
              <p className="text-zinc-400">
                We are continually refining our accessibility implementation. If you encounter any accessibility barriers while using our intelligence tools, please inform our technical desk at: <strong className="text-white">accessibility@cristianvaduva.com</strong>.
              </p>
            </div>
          </div>
        </div>

        {/* 4. FOOTER LINK */}
        <div className="p-8 rounded-3xl border border-white/10 bg-[#0c0c0e] flex flex-col sm:flex-row sm:items-center justify-between gap-6 shadow-2xl">
          <div className="space-y-1">
            <h3 className="text-base font-bold text-white">Need accessibility assistance with a dossier?</h3>
            <p className="text-xs text-zinc-400">
              Our private desk can prepare large-print or accessible PDF briefs upon request.
            </p>
          </div>
          <Link
            href="/private-client"
            className="px-6 py-3 rounded-full bg-white text-black hover:bg-zinc-200 text-xs font-bold transition-colors flex items-center gap-2 shrink-0 cursor-pointer"
          >
            <span>Contact Private Desk</span>
            <ArrowRight className="h-3.5 w-3.5" />
          </Link>
        </div>
      </main>
    </div>
  )
}
