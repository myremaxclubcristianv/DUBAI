'use client'

import * as React from 'react'
import { VERIFIED_INFRASTRUCTURE_PROJECTS } from '@/lib/data/infrastructure'
import { PageIntro } from '@/components/layout/layout-primitives'
import { SourceBadge } from '@/components/ui/source-badge'
import {
  Plane,
  Train,
  Waves,
  Sun,
  CheckCircle2,
  ExternalLink,
  MapPin,
  Layers,
} from 'lucide-react'

export default function InfrastructurePage() {
  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'AVIATION':
        return <Plane className="h-5 w-5 text-[#c9a962]" />
      case 'MASS_TRANSIT':
        return <Train className="h-5 w-5 text-[#c9a962]" />
      case 'ISLAND_COASTAL':
        return <Waves className="h-5 w-5 text-[#c9a962]" />
      case 'CLEAN_ENERGY':
        return <Sun className="h-5 w-5 text-[#c9a962]" />
      default:
        return <Layers className="h-5 w-5 text-[#c9a962]" />
    }
  }

  return (
    <div className="bg-[#08080a] text-[#f5f5f7] min-h-screen pb-32 selection:bg-[#c9a962]/20 selection:text-[#f5f5f7]">
      {/* 1. EDITORIAL HERO INTRO */}
      <PageIntro
        eyebrow="National Megaprojects & Urban Engineering"
        badge={<SourceBadge status="VERIFIED" sourceName="Dubai Supreme Committee for Urban Planning & RTA" />}
        title={<>Sovereign Infrastructure<span className="text-[#c9a962]">.</span></>}
        description="Detailed dossiers on Dubai’s multi-billion dollar capital expenditure projects, including the Al Maktoum Airport expansion, Metro Blue Line, and Palm Jebel Ali."
      />

      <div className="w-full max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-16 space-y-12">
        {/* 2. INFRASTRUCTURE DOSSIERS */}
        <div className="space-y-8">
          {VERIFIED_INFRASTRUCTURE_PROJECTS.map((project) => (
            <div
              key={project.id}
              className="bg-[#111116] rounded-xs p-8 md:p-12 border border-white/[0.08] hover:border-[#c9a962]/40 transition-all"
            >
              <div className="flex flex-col lg:flex-row lg:items-center justify-between pb-6 border-b border-white/[0.06] gap-4 mb-8">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-xs bg-white/5 border border-white/10 shrink-0">
                    {getCategoryIcon(project.category)}
                  </div>
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <span className="px-2.5 py-0.5 rounded-xs text-[10px] font-mono uppercase bg-white/5 text-[#c9a962] border border-white/10">
                        {project.category.replace(/_/g, ' ')}
                      </span>
                      <span className="text-xs font-mono font-medium text-emerald-400 bg-emerald-950/40 px-2 py-0.5 rounded-xs border border-emerald-500/30">
                        {project.status.replace(/_/g, ' ')}
                      </span>
                    </div>
                    <h3 className="text-2xl sm:text-3xl font-light text-[#f5f5f7]">
                      {project.name}
                    </h3>
                    <div className="text-xs font-arabic text-[#71717a] mt-1">
                      {project.arabicName}
                    </div>
                  </div>
                </div>

                <div className="flex flex-wrap lg:flex-col items-start lg:items-end gap-3 text-xs font-mono">
                  <div>
                    <span className="text-[10px] uppercase text-[#71717a] block">Capex Budget</span>
                    <span className="text-lg font-medium text-[#c9a962]">{project.estimatedCost}</span>
                  </div>
                  <div>
                    <span className="text-[10px] uppercase text-[#71717a] block">Completion Horizon</span>
                    <span className="text-[#f5f5f7]">{project.completionHorizon}</span>
                  </div>
                </div>
              </div>

              {/* Strategic Impact */}
              <div className="mb-8">
                <span className="text-[11px] font-mono uppercase text-[#71717a] block mb-1.5">
                  Macroeconomic &amp; Strategic Impact
                </span>
                <p className="text-xs font-light text-[#a1a1aa] leading-relaxed">
                  {project.strategicImpact}
                </p>
              </div>

              {/* Scale Highlights Grid */}
              <div className="bg-black/40 p-6 sm:p-8 rounded-xs border border-white/[0.06] mb-8">
                <span className="text-xs font-mono uppercase text-[#c9a962] block mb-4">
                  Engineering Scale &amp; Technical Specifications
                </span>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {project.scaleHighlights.map((highlight, idx) => (
                    <div key={idx} className="flex items-start gap-3 text-xs text-[#a1a1aa] font-light">
                      <CheckCircle2 className="h-4 w-4 text-[#c9a962] shrink-0 mt-0.5" />
                      <span>{highlight}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Developer & Coordinates */}
              <div className="pt-4 border-t border-white/[0.06] flex flex-col sm:flex-row sm:items-center justify-between gap-4 text-xs text-[#71717a]">
                <div className="flex items-center gap-4">
                  <span>Executing Entity: <strong className="text-[#f5f5f7] font-medium">{project.developerOrEntity}</strong></span>
                  <span className="flex items-center gap-1 font-mono text-[11px] text-[#c9a962]">
                    <MapPin className="h-3 w-3 text-[#c9a962]" />
                    {project.coordinates.lat.toFixed(4)}° N, {project.coordinates.lng.toFixed(4)}° E
                  </span>
                </div>

                <a
                  href={project.provenance.source_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 font-mono text-[#c9a962] hover:underline"
                >
                  <span>Official Project Release</span>
                  <ExternalLink className="h-3.5 w-3.5" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
