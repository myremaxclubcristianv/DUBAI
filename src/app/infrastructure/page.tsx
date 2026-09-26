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
        return <Plane className="h-5 w-5 text-[#b8860b]" />
      case 'MASS_TRANSIT':
        return <Train className="h-5 w-5 text-[#b8860b]" />
      case 'ISLAND_COASTAL':
        return <Waves className="h-5 w-5 text-[#b8860b]" />
      case 'CLEAN_ENERGY':
        return <Sun className="h-5 w-5 text-[#b8860b]" />
      default:
        return <Layers className="h-5 w-5 text-[#b8860b]" />
    }
  }

  return (
    <div className="bg-white text-[#1d1d1f] min-h-screen pb-32 selection:bg-[#0071e3]/10 selection:text-[#1d1d1f]">
      {/* 1. APPLE HERO INTRO */}
      <PageIntro
        eyebrow="National Megaprojects & Urban Engineering"
        badge={<SourceBadge status="VERIFIED" sourceName="Dubai Supreme Committee for Urban Planning & RTA" />}
        title="Sovereign Infrastructure."
        subtitle="Detailed dossiers on Dubai’s multi-billion dollar capital expenditure projects, including the Al Maktoum Airport expansion, Metro Blue Line, and Palm Jebel Ali."
      />

      <div className="w-full max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* 2. INFRASTRUCTURE DOSSIERS */}
        <div className="space-y-12">
          {VERIFIED_INFRASTRUCTURE_PROJECTS.map((project) => (
            <div
              key={project.id}
              className="bg-white rounded-[36px] p-8 md:p-12 border border-black/10 shadow-[0_2px_12px_rgba(0,0,0,0.03)] hover:shadow-lg transition-all"
            >
              <div className="flex flex-col lg:flex-row lg:items-center justify-between pb-6 border-b border-black/5 gap-4 mb-8">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-2xl bg-[#f5f5f7] border border-black/5 shrink-0">
                    {getCategoryIcon(project.category)}
                  </div>
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <span className="px-3 py-0.5 rounded-full text-[10px] font-bold uppercase bg-[#f5f5f7] text-[#1d1d1f] border border-black/5">
                        {project.category.replace(/_/g, ' ')}
                      </span>
                      <span className="text-xs font-semibold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-100">
                        {project.status.replace(/_/g, ' ')}
                      </span>
                    </div>
                    <h3 className="text-2xl sm:text-3xl font-bold text-[#1d1d1f]">
                      {project.name}
                    </h3>
                    <div className="text-xs font-arabic text-[#86868b]">
                      {project.arabicName}
                    </div>
                  </div>
                </div>

                <div className="flex flex-wrap lg:flex-col items-start lg:items-end gap-3 text-xs">
                  <div>
                    <span className="text-[10px] uppercase font-bold text-[#86868b] block">Capex Budget</span>
                    <span className="text-lg font-extrabold text-[#1d1d1f]">{project.estimatedCost}</span>
                  </div>
                  <div>
                    <span className="text-[10px] uppercase font-bold text-[#86868b] block">Completion Horizon</span>
                    <span className="font-semibold text-[#b8860b]">{project.completionHorizon}</span>
                  </div>
                </div>
              </div>

              {/* Strategic Impact */}
              <div className="mb-8">
                <span className="text-[11px] font-bold uppercase text-[#86868b] block mb-1.5">
                  Macroeconomic & Strategic Impact
                </span>
                <p className="text-xs font-medium text-[#1d1d1f] leading-relaxed">
                  {project.strategicImpact}
                </p>
              </div>

              {/* Scale Highlights Grid */}
              <div className="bg-[#f5f5f7] p-6 sm:p-8 rounded-3xl border border-black/5 mb-8">
                <span className="text-xs font-bold uppercase text-[#86868b] block mb-4">
                  Engineering Scale & Technical Specifications
                </span>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {project.scaleHighlights.map((highlight, idx) => (
                    <div key={idx} className="flex items-start gap-3 text-xs text-[#515154]">
                      <CheckCircle2 className="h-4 w-4 text-emerald-700 shrink-0 mt-0.5" />
                      <span>{highlight}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Developer & Coordinates */}
              <div className="pt-4 border-t border-black/5 flex flex-col sm:flex-row sm:items-center justify-between gap-4 text-xs text-[#6e6e73]">
                <div className="flex items-center gap-4">
                  <span>Executing Entity: <strong className="text-[#1d1d1f]">{project.developerOrEntity}</strong></span>
                  <span className="flex items-center gap-1 font-mono text-[11px] text-[#86868b]">
                    <MapPin className="h-3 w-3 text-[#b8860b]" />
                    {project.coordinates.lat.toFixed(4)}° N, {project.coordinates.lng.toFixed(4)}° E
                  </span>
                </div>

                <a
                  href={project.provenance.source_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 font-bold text-[#1d1d1f] hover:underline"
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
