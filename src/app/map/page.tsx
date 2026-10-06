'use client'

import * as React from 'react'
import { DubaiInteractiveMap } from '@/components/map/dubai-interactive-map'
import { SourceBadge } from '@/components/ui/source-badge'
import { PageIntro } from '@/components/layout/layout-primitives'

export default function MapPage() {
  return (
    <div className="bg-white text-slate-900 min-h-screen pb-24">
      {/* 1. EDITORIAL PAGE INTRO */}
      <PageIntro
        eyebrow="Geodetic & Sector Intelligence"
        badge={<SourceBadge status="OFFICIAL SOURCE" sourceName="DLD Freehold Coordinates Register" />}
        title={<>Sector Atlas<span className="text-[#0284c7]">.</span></>}
        description="Explore Dubai master developments, freehold zoning, airport proximity, and verified geodetic sector coordinates across all key investment submarkets."
      />

      <main className="w-full max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-16 pt-10 space-y-8">
        <DubaiInteractiveMap />
      </main>
    </div>
  )
}
