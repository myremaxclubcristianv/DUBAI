'use client'

import * as React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { VERIFIED_PROJECTS } from '@/lib/data/projects'
import { SourceBadge } from '@/components/ui/source-badge'
import { PageIntro } from '@/components/layout/layout-primitives'
import { ArrowRight } from 'lucide-react'

export default function ProjectsPage() {
  const [selectedStatus, setSelectedStatus] = React.useState('ALL')
  const [selectedArea, setSelectedArea] = React.useState('ALL')

  const uniqueAreas = React.useMemo(() => {
    return Array.from(new Set(VERIFIED_PROJECTS.map((p) => p.area_name))).sort()
  }, [])

  const filteredProjects = VERIFIED_PROJECTS.filter((p) => {
    if (selectedStatus !== 'ALL' && p.completion_status !== selectedStatus) return false
    if (selectedArea !== 'ALL' && p.area_name !== selectedArea) return false
    return true
  })

  const primaryProject = filteredProjects[0] || VERIFIED_PROJECTS[0]
  const otherProjects = filteredProjects.slice(1)

  return (
    <div className="bg-black text-white min-h-screen pb-24">
      {/* 1. EDITORIAL PAGE INTRO */}
      <PageIntro
        eyebrow="DLD Law No. 8 of 2007 Escrow Registry"
        badge={<SourceBadge status="OFFICIAL SOURCE" sourceName="DLD Master Developments" />}
        title="MASTER DEVELOPMENTS"
        description="Architectural landmark developments, branded residences, and prime residential towers with official Dubai Land Department escrow account registration and certified construction milestones."
      />

      <main className="w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 space-y-12">
        {/* 2. FILTER PILLS */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 p-3 bg-[#0c0c0e] rounded-2xl border border-white/10 shadow-xl">
          <div className="flex flex-wrap items-center gap-2">
            <div className="flex flex-wrap items-center gap-1.5 p-1 bg-white/[0.04] rounded-xl border border-white/10">
              {['ALL', 'Completed', 'Under Construction', 'Off-Plan'].map((st) => (
                <button
                  key={st}
                  onClick={() => setSelectedStatus(st)}
                  className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
                    selectedStatus === st
                      ? 'bg-white text-black shadow-lg'
                      : 'text-zinc-400 hover:text-white hover:bg-white/[0.05]'
                  }`}
                >
                  {st === 'ALL' ? 'All Stages' : st}
                </button>
              ))}
            </div>

            <select
              value={selectedArea}
              onChange={(e) => setSelectedArea(e.target.value)}
              aria-label="Filter by area"
              className="px-3.5 py-2 bg-white/[0.04] rounded-xl border border-white/10 text-xs font-semibold text-white focus:outline-none focus:border-accent/60 cursor-pointer"
            >
              <option value="ALL" className="bg-[#141418] text-white">All Communities</option>
              {uniqueAreas.map((area) => (
                <option key={area} value={area} className="bg-[#141418] text-white">
                  {area}
                </option>
              ))}
            </select>
          </div>

          <div className="text-xs font-medium text-zinc-400 px-2 font-mono">
            Showing <span className="font-semibold text-white">{filteredProjects.length}</span> Verified Developments
          </div>
        </div>

        {/* 3. LARGE PROJECT FEATURE MOMENT */}
        {primaryProject && (
          <div className="group border border-white/10 rounded-3xl overflow-hidden bg-[#0c0c0e] hover:border-accent/40 transition-all duration-300 grid grid-cols-1 lg:grid-cols-12 shadow-2xl">
            <div className="lg:col-span-7 relative aspect-[16/10] bg-white/[0.02] overflow-hidden">
              <Image
                src={primaryProject.image || 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1200&q=80'}
                alt={primaryProject.name}
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 60vw"
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute top-4 left-4 flex items-center gap-2">
                <span className="px-3 py-1 rounded-full text-[10px] font-mono font-semibold bg-black/80 backdrop-blur-md text-white border border-white/10 shadow-lg">
                  {primaryProject.area_name}
                </span>
                <span className="px-3 py-1 rounded-full text-[10px] font-mono font-semibold bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 backdrop-blur-md">
                  DLD ESCROW VERIFIED
                </span>
              </div>
            </div>

            <div className="lg:col-span-5 p-6 sm:p-8 flex flex-col justify-between space-y-6">
              <div className="space-y-3">
                <div className="flex items-center justify-between text-xs font-mono text-zinc-400">
                  <span className="text-accent font-semibold">{primaryProject.developer_name}</span>
                  <span>{primaryProject.completion_status} ({primaryProject.completion_year})</span>
                </div>
                <h2 className="text-2xl sm:text-3xl font-semibold text-white group-hover:text-accent transition-colors tracking-tight leading-tight">
                  {primaryProject.name}
                </h2>
                <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed line-clamp-3">
                  {primaryProject.description}
                </p>
              </div>

              <div className="space-y-4 pt-4 border-t border-white/10">
                <div className="p-4 bg-white/[0.02] rounded-2xl border border-white/10 text-xs space-y-1 font-mono">
                  <div className="text-[10px] text-zinc-400 font-mono uppercase tracking-widest">Unit Inventory Configurations</div>
                  <div className="font-medium text-white">{primaryProject.unit_types}</div>
                </div>

                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-[10px] text-zinc-400 font-mono uppercase tracking-widest">Starting Entry Tier</div>
                    <div className="text-xl font-semibold text-white tabular-nums font-mono">
                      {primaryProject.starting_price ? `AED ${primaryProject.starting_price.toLocaleString()}` : 'Price on Request'}
                    </div>
                  </div>
                  <Link
                    href="/properties"
                    className="px-5 py-2.5 rounded-xl bg-white text-black hover:bg-zinc-200 text-xs font-semibold transition-colors flex items-center gap-1.5 cursor-pointer shadow-md"
                  >
                    <span>View Units</span>
                    <ArrowRight className="h-3.5 w-3.5" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* 4. ARCHITECTURAL PROJECT INDEX LIST */}
        <div className="space-y-4">
          <div className="flex items-center justify-between border-b border-white/10 pb-3">
            <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-zinc-400">
              MASTER PROJECT INDEX
            </span>
            <span className="text-xs text-zinc-400 font-mono">DLD Law No. 8 of 2007 Escrow Verified</span>
          </div>

          <div className="space-y-3">
            {otherProjects.map((project) => (
              <div
                key={project.id}
                className="p-5 sm:p-6 rounded-3xl border border-white/10 bg-[#0c0c0e] hover:border-accent/40 transition-all flex flex-col md:flex-row items-start md:items-center justify-between gap-6 group shadow-xl"
              >
                <div className="flex items-start sm:items-center gap-4">
                  <div className="relative h-20 w-32 rounded-2xl overflow-hidden bg-white/[0.02] shrink-0">
                    <Image
                      src={project.image || 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=600&q=80'}
                      alt={project.name}
                      fill
                      sizes="150px"
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="space-y-1">
                    <div className="flex items-center gap-2 text-[10px] font-mono text-zinc-400">
                      <span className="font-semibold text-accent">{project.developer_name}</span>
                      <span>•</span>
                      <span>{project.area_name}</span>
                    </div>
                    <h3 className="text-lg font-semibold text-white group-hover:text-accent transition-colors tracking-tight">
                      {project.name}
                    </h3>
                    <div className="text-xs text-zinc-400">
                      {project.unit_types} • {project.completion_status} ({project.completion_year})
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-6 w-full md:w-auto justify-between md:justify-end pt-3 md:pt-0 border-t md:border-t-0 border-white/10 shrink-0">
                  <div className="text-left md:text-right">
                    <div className="text-[10px] font-mono text-zinc-400 uppercase tracking-widest">Starting Tier</div>
                    <div className="text-base font-semibold text-white tabular-nums font-mono">
                      {project.starting_price ? `AED ${project.starting_price.toLocaleString()}` : 'Price on Request'}
                    </div>
                  </div>
                  <Link
                    href="/properties"
                    className="px-4 py-2.5 rounded-xl bg-white/[0.04] hover:bg-white hover:text-black text-xs font-semibold text-zinc-300 transition-all flex items-center gap-1.5 cursor-pointer border border-white/10"
                  >
                    <span>View Units</span>
                    <ArrowRight className="h-3.5 w-3.5" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  )
}