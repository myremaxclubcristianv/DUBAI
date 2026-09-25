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
    <div className="bg-white text-text-primary min-h-screen pb-24">
      {/* 1. EDITORIAL PAGE INTRO */}
      <PageIntro
        eyebrow="DLD Law No. 8 of 2007 Escrow Registry"
        badge={<SourceBadge status="OFFICIAL SOURCE" sourceName="DLD Master Developments" />}
        title="Master Developments."
        description="Architectural landmark developments, branded residences, and prime residential towers with official Dubai Land Department escrow account registration and certified construction milestones."
      />

      <main className="w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 space-y-12">
        {/* 2. FILTER PILLS */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 p-2 bg-surface rounded-2xl border border-border">
          <div className="flex flex-wrap items-center gap-2">
            <div className="flex flex-wrap items-center gap-1.5 p-1 bg-white rounded-xl border border-border">
              {['ALL', 'Completed', 'Under Construction', 'Off-Plan'].map((st) => (
                <button
                  key={st}
                  onClick={() => setSelectedStatus(st)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                    selectedStatus === st
                      ? 'bg-text-primary text-white shadow-xs'
                      : 'text-text-secondary hover:text-text-primary hover:bg-surface'
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
              className="px-3 py-2 bg-white rounded-xl border border-border text-xs font-semibold text-text-primary focus:outline-none cursor-pointer"
            >
              <option value="ALL">All Communities</option>
              {uniqueAreas.map((area) => (
                <option key={area} value={area}>
                  {area}
                </option>
              ))}
            </select>
          </div>

          <div className="text-xs font-semibold text-text-secondary px-2">
            Showing <span className="font-bold text-text-primary">{filteredProjects.length}</span> Verified Developments
          </div>
        </div>

        {/* 3. LARGE PROJECT FEATURE MOMENT */}
        {primaryProject && (
          <div className="group border border-border rounded-3xl overflow-hidden bg-white hover:border-accent transition-all duration-300 grid grid-cols-1 lg:grid-cols-12 shadow-2xs">
            <div className="lg:col-span-7 relative aspect-[16/10] bg-surface-elevated overflow-hidden">
              <Image
                src={primaryProject.image || 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1200&q=80'}
                alt={primaryProject.name}
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 60vw"
                className="object-cover group-hover:scale-102 transition-transform duration-500"
              />
              <div className="absolute top-4 left-4 flex items-center gap-2">
                <span className="px-3 py-1 rounded-full text-xs font-bold bg-white/95 backdrop-blur-sm text-text-primary shadow-sm">
                  {primaryProject.area_name}
                </span>
                <span className="px-3 py-1 rounded-full text-xs font-mono font-bold bg-emerald-800 text-white backdrop-blur-sm">
                  DLD ESCROW VERIFIED
                </span>
              </div>
            </div>

            <div className="lg:col-span-5 p-6 sm:p-8 flex flex-col justify-between space-y-6">
              <div className="space-y-3">
                <div className="flex items-center justify-between text-xs font-mono text-text-muted">
                  <span className="text-accent font-bold">{primaryProject.developer_name}</span>
                  <span>{primaryProject.completion_status} ({primaryProject.completion_year})</span>
                </div>
                <h2 className="text-2xl sm:text-3xl font-black text-text-primary group-hover:text-accent transition-colors leading-tight">
                  {primaryProject.name}
                </h2>
                <p className="text-xs text-text-secondary leading-relaxed line-clamp-3">
                  {primaryProject.description}
                </p>
              </div>

              <div className="space-y-4 pt-4 border-t border-border">
                <div className="p-3 bg-surface rounded-xl border border-border text-xs space-y-1">
                  <div className="text-[10px] text-text-muted font-mono uppercase">Unit Inventory Configurations</div>
                  <div className="font-bold text-text-primary">{primaryProject.unit_types}</div>
                </div>

                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-[10px] text-text-muted font-mono uppercase">Starting Entry Tier</div>
                    <div className="text-xl font-black text-text-primary tabular-nums">
                      {primaryProject.starting_price ? `AED ${primaryProject.starting_price.toLocaleString()}` : 'Price on Request'}
                    </div>
                  </div>
                  <Link
                    href="/properties"
                    className="px-5 py-2.5 rounded-xl bg-text-primary text-white hover:bg-black text-xs font-bold transition-colors flex items-center gap-1.5"
                  >
                    <span>View Available Units</span>
                    <ArrowRight className="h-3.5 w-3.5 text-accent" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* 4. ARCHITECTURAL PROJECT INDEX LIST */}
        <div className="space-y-4">
          <div className="flex items-center justify-between border-b border-border pb-3">
            <span className="text-[11px] font-mono font-bold uppercase tracking-widest text-text-muted">
              MASTER PROJECT INDEX
            </span>
            <span className="text-xs text-text-muted font-mono">DLD Law No. 8 of 2007 Escrow Verified</span>
          </div>

          <div className="space-y-3">
            {otherProjects.map((project) => (
              <div
                key={project.id}
                className="p-5 sm:p-6 rounded-2xl border border-border bg-white hover:border-accent hover:shadow-xs transition-all flex flex-col md:flex-row items-start md:items-center justify-between gap-6 group"
              >
                <div className="flex items-start sm:items-center gap-4">
                  <div className="relative h-20 w-32 rounded-xl overflow-hidden bg-surface-elevated shrink-0">
                    <Image
                      src={project.image || 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=600&q=80'}
                      alt={project.name}
                      fill
                      sizes="150px"
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="space-y-1">
                    <div className="flex items-center gap-2 text-[10px] font-mono text-text-muted">
                      <span className="font-bold text-accent">{project.developer_name}</span>
                      <span>•</span>
                      <span>{project.area_name}</span>
                    </div>
                    <h3 className="text-lg font-bold text-text-primary group-hover:text-accent transition-colors">
                      {project.name}
                    </h3>
                    <div className="text-xs text-text-secondary">
                      {project.unit_types} • {project.completion_status} ({project.completion_year})
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-6 w-full md:w-auto justify-between md:justify-end pt-3 md:pt-0 border-t md:border-t-0 border-border-subtle shrink-0">
                  <div className="text-left md:text-right">
                    <div className="text-[10px] font-mono text-text-muted uppercase">Starting Tier</div>
                    <div className="text-base font-black text-text-primary tabular-nums">
                      {project.starting_price ? `AED ${project.starting_price.toLocaleString()}` : 'Price on Request'}
                    </div>
                  </div>
                  <Link
                    href="/properties"
                    className="px-4 py-2 rounded-xl bg-surface hover:bg-text-primary hover:text-white text-xs font-bold text-text-primary transition-all flex items-center gap-1"
                  >
                    <span>View Units</span>
                    <ArrowRight className="h-3 w-3" />
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