'use client'

import * as React from 'react'
import { DubaiInteractiveMap } from '@/components/map/dubai-interactive-map'
import { SourceBadge } from '@/components/ui/source-badge'

export default function MapPage() {
  return (
    <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-8 bg-white text-text-primary min-h-screen">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-border pb-6">
        <div>
          <div className="flex items-center gap-2">
            <span className="text-[10px] font-bold uppercase tracking-wider text-accent">
              Geodetic & Sector Intelligence
            </span>
            <SourceBadge status="OFFICIAL SOURCE" sourceName="DLD Freehold Coordinates Register" />
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-text-primary tracking-tight mt-1">
            Dubai Prime Sector Map
          </h1>
          <p className="text-xs sm:text-sm text-text-secondary mt-1">
            Explore Dubai master developments, freehold zoning, airport proximity, and sector coordinates.
          </p>
        </div>
      </div>

      <DubaiInteractiveMap />
    </div>
  )
}
