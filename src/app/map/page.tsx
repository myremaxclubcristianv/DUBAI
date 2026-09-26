'use client'

import * as React from 'react'
import { DubaiInteractiveMap } from '@/components/map/dubai-interactive-map'
import { SourceBadge } from '@/components/ui/source-badge'
import { PageIntro } from '@/components/layout/layout-primitives'

export default function MapPage() {
  return (
    <div className="bg-white text-[#1d1d1f] min-h-screen pb-24 selection:bg-accent/20 selection:text-[#1d1d1f]">
      {/* 1. EDITORIAL PAGE INTRO */}
      <PageIntro
        eyebrow="Geodetic & Sector Intelligence"
        badge={<SourceBadge status="OFFICIAL SOURCE" sourceName="DLD Freehold Coordinates Register" />}
        title={<>Sector Atlas<span className="text-gradient-gold">.</span></>}
        description="Explore Dubai master developments, freehold zoning, airport proximity, and verified geodetic sector coordinates across all key investment submarkets."
      />

      <main className="w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 space-y-8">
        <DubaiInteractiveMap />
      </main>
    </div>
  )
}
