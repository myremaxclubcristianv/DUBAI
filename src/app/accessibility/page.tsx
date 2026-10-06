'use client'

import * as React from 'react'
import { PageIntro } from '@/components/layout/layout-primitives'
import { SourceBadge } from '@/components/ui/source-badge'
import { CadranQuadrant } from '@/components/ui/luxury-cadran'
import {
  Eye,
  Keyboard,
  Monitor,
} from 'lucide-react'

export default function AccessibilityPage() {
  return (
    <div className="bg-white text-slate-900 min-h-screen pb-28">
      {/* 1. EDITORIAL PAGE INTRO */}
      <PageIntro
        eyebrow="Universal Design & WCAG 2.1 AA Standards"
        badge={<SourceBadge status="OFFICIAL SOURCE" sourceName="W3C Accessibility Guidelines" />}
        title={<>Accessibility<span className="text-[#0284c7]">.</span></>}
        description="Our commitment to digital inclusion, universal accessibility, and semantic web standards across all platform tools and intelligence dashboards."
      />

      <main className="w-full max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-16 pt-10 space-y-16">
        {/* 2. ACCESSIBILITY QUADRANT */}
        <CadranQuadrant
          eyebrow="WCAG 2.1 LEVEL AA PROTOCOLS"
          title="Digital Inclusion & Interface Accessibility"
          statutorySource="World Wide Web Consortium (W3C) Web Content Accessibility Guidelines"
          quadrants={[
            {
              title: 'High Contrast Editorial Light',
              value: '4.5:1+ RATIO',
              subtext: 'All typography and metric displays maintain minimum 4.5:1 text-to-background contrast ratios against the crisp white canvas for optimal clarity.',
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
              statutoryRef: 'WCAG 4.1.2 Name, Role, Value',
            },
            {
              title: 'Reduced Motion Preference',
              value: 'PREFERS-REDUCED',
              subtext: 'All animations and ticker transitions strictly honor system prefers-reduced-motion settings, preventing vestibular discomfort.',
              delta: 'MOTION SAFE',
              isPositive: true,
              statutoryRef: 'WCAG 2.3.3 Animation',
            },
          ]}
        />

        {/* 3. CORE PILLARS */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 sm:p-8 rounded-xs bg-white border border-slate-200/90 shadow-sm space-y-3">
            <Eye className="h-6 w-6 text-[#0284c7]" />
            <h3 className="text-lg font-light text-slate-900 tracking-tight">Visual Clarity</h3>
            <p className="text-xs text-slate-600 leading-relaxed font-light">
              Carefully chosen typography sizes, monospace numeric metrics, high contrast ratios, and generous whitespace ensure content is readable without eye strain.
            </p>
          </div>

          <div className="p-6 sm:p-8 rounded-xs bg-white border border-slate-200/90 shadow-sm space-y-3">
            <Keyboard className="h-6 w-6 text-[#0284c7]" />
            <h3 className="text-lg font-light text-slate-900 tracking-tight">Keyboard Operability</h3>
            <p className="text-xs text-slate-600 leading-relaxed font-light">
              Every interactive element features visible focus indicators and is operable through keyboard shortcuts without requiring pointing device precision.
            </p>
          </div>

          <div className="p-6 sm:p-8 rounded-xs bg-white border border-slate-200/90 shadow-sm space-y-3">
            <Monitor className="h-6 w-6 text-[#0284c7]" />
            <h3 className="text-lg font-light text-slate-900 tracking-tight">Cross-Device Support</h3>
            <p className="text-xs text-slate-600 leading-relaxed font-light">
              Responsive layouts scale fluidly from compact 375px mobile screens up to ultra-wide 4K workstations without content clipping or horizontal overflow.
            </p>
          </div>
        </div>
      </main>
    </div>
  )
}
