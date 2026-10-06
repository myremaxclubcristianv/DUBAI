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
        return <Plane className="h-5 w-5 text-[#0284c7]" />
      case 'MASS_TRANSIT':
        return <Train className="h-5 w-5 text-[#0284c7]" />
      case 'ISLAND_COASTAL':
        return <Waves className="h-5 w-5 text-[#0284c7]" />
      case 'CLEAN_ENERGY':
        return <Sun className="h-5 w-5 text-[#0284c7]" />
      default:
        return <Layers className="h-5 w-5 text-[#0284c7]" />
    }
  }

  return (
    <div className="bg-white text-slate-900 min-h-screen pb-32">
      {/* 1. EDITORIAL HERO INTRO */}
      <PageIntro
        eyebrow="National Megaprojects & Urban Engineering"
        badge={<SourceBadge status="VERIFIED" sourceName="Dubai Supreme Committee for Urban Planning & RTA" />}
        title={<>Sovereign Infrastructure<span className="text-[#0284c7]">.</span></>}
        description="Detailed dossiers on Dubai’s multi-billion dollar capital expenditure projects, including the Al Maktoum Airport expansion, Metro Blue Line, and Palm Jebel Ali."
      />

      <div className="w-full max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-16 space-y-12 pt-8">
        {/* 2. INFRASTRUCTURE DOSSIERS */}
        <div className="space-y-8">
          {VERIFIED_INFRASTRUCTURE_PROJECTS.map((project) => (
            <div
              key={project.id}
              className="bg-white rounded-xs p-8 md:p-12 border border-slate-200 hover:border-[#0284c7]/40 transition-all shadow-xs hover:shadow-md"
            >
              <div className="flex flex-col lg:flex-row lg:items-center justify-between pb-6 border-b border-slate-200 gap-4 mb-8">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-xs bg-sky-50 border border-sky-100 shrink-0">
                    {getCategoryIcon(project.category)}
                  </div>
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <span className="px-2.5 py-0.5 rounded-xs text-[10px] font-mono uppercase bg-sky-50 text-[#0284c7] border border-sky-200 font-semibold">
                        {project.category.replace(/_/g, ' ')}
                      </span>
                      <span className="text-xs font-mono font-medium text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-xs border border-emerald-200">
                        {project.status.replace(/_/g, ' ')}
                      </span>
                    </div>
                    <h3 className="text-2xl sm:text-3xl font-light text-slate-900 font-serif">
                      {project.name}
                    </h3>
                    <div className="text-xs font-arabic text-slate-400 mt-1">
                      {project.arabicName}
                    </div>
                  </div>
                </div>

                <div className="flex flex-wrap lg:flex-col items-start lg:items-end gap-3 text-xs font-mono">
                  <div>
                    <span className="text-[10px] uppercase text-slate-400 block font-semibold">Capex Budget</span>
                    <span className="text-lg font-semibold text-slate-900">{project.estimatedCost}</span>
                  </div>
                  <div>
                    <span className="text-[10px] uppercase text-slate-400 block font-semibold">Completion Horizon</span>
                    <span className="text-slate-700">{project.completionHorizon}</span>
                  </div>
                </div>
              </div>

              {/* Strategic Impact */}
              <div className="mb-8">
                <span className="text-[11px] font-mono uppercase text-slate-400 block mb-1.5 font-semibold">
                  Macroeconomic &amp; Strategic Impact
                </span>
                <p className="text-xs font-light text-slate-600 leading-relaxed">
                  {project.strategicImpact}
                </p>
              </div>

              {/* Scale Highlights Grid */}
              <div className="bg-slate-50 p-6 sm:p-8 rounded-xs border border-slate-200 mb-8">
                <span className="text-xs font-mono uppercase text-[#0284c7] block mb-4 font-semibold">
                  Engineering Scale &amp; Technical Specifications
                </span>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {project.scaleHighlights.map((highlight, idx) => (
                    <div key={idx} className="flex items-start gap-3 text-xs text-slate-700 font-light">
                      <CheckCircle2 className="h-4 w-4 text-[#0284c7] shrink-0 mt-0.5" />
                      <span>{highlight}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Developer & Coordinates */}
              <div className="pt-4 border-t border-slate-100 flex flex-col sm:flex-row sm:items-center justify-between gap-4 text-xs text-slate-500">
                <div className="flex items-center gap-4">
                  <span>Executing Entity: <strong className="text-slate-900 font-medium">{project.developerOrEntity}</strong></span>
                  <span className="flex items-center gap-1 font-mono text-[11px] text-[#0284c7]">
                    <MapPin className="h-3 w-3 text-[#0284c7]" />
                    {project.coordinates.lat.toFixed(4)}° N, {project.coordinates.lng.toFixed(4)}° E
                  </span>
                </div>

                <a
                  href={project.provenance.source_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 font-mono text-[#0284c7] hover:underline font-medium"
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
