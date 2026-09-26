'use client'

import * as React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { VERIFIED_PROJECTS } from '@/lib/data/projects'
import { SourceBadge } from '@/components/ui/source-badge'
import { PageIntro } from '@/components/layout/layout-primitives'
import { CadranDial, CadranQuadrant } from '@/components/ui/luxury-cadran'
import { ArrowRight, Building, CheckCircle2, ShieldCheck, Landmark } from 'lucide-react'

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
    <div className="bg-white text-[#1d1d1f] min-h-screen pb-32 selection:bg-[#0071e3]/10 selection:text-[#1d1d1f]">
      {/* 1. EDITORIAL PAGE INTRO */}
      <PageIntro
        eyebrow="DLD Law No. 8 of 2007 Escrow Registry"
        badge={<SourceBadge status="OFFICIAL SOURCE" sourceName="DLD Master Developments" />}
        title="Master Developments."
        description="Architectural landmark developments, branded residences, and prime residential towers with official Dubai Land Department escrow account registration and certified construction milestones."
      />

      <main className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 space-y-16">
        {/* 1B. MASTER PROJECT CADRANS */}
        <div className="space-y-6">
          <div className="flex items-center justify-between border-b border-black/10 pb-4">
            <span className="text-[11px] font-mono font-bold uppercase tracking-[0.2em] text-[#b8860b]">
              MASTER PROJECT GOVERNANCE INSTRUMENTS
            </span>
            <span className="text-xs font-mono text-[#86868b]">DLD Escrow Account Registry</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <CadranDial
              label="PROJECTS VERIFIED"
              sublabel="Active Master Developments"
              value={`${VERIFIED_PROJECTS.length} Landmarks`}
              unit="DLD AUDITED"
              targetValue="Escrow Certified"
              percentage={100}
              status="VERIFIED"
              statutoryRef="DLD Project Register"
              icon={Building}
            />
            <CadranDial
              label="ESCROW STATUTORY"
              sublabel="Law No. 8 of 2007"
              value="100.0%"
              unit="PROTECTED CAPITAL"
              targetValue="Direct Bank Trust Account"
              percentage={100}
              status="OFFICIAL"
              statutoryRef="Dubai Law No. 8/2007"
              icon={ShieldCheck}
            />
            <CadranDial
              label="OQOOD REGISTRATION"
              sublabel="Interim Title Guarantee"
              value="Mandatory"
              unit="PRE-HANDOVER TITLE"
              targetValue="Statutory Investor Protection"
              percentage={100}
              status="OPTIMAL"
              statutoryRef="Dubai Law No. 13/2008"
              icon={Landmark}
            />
            <CadranDial
              label="HANDOVER ASSURANCE"
              sublabel="10-Year Structural Guarantee"
              value="10 Years"
              unit="STATUTORY WARRANTY"
              targetValue="UAE Civil Code Art. 880"
              percentage={100}
              status="OPTIMAL"
              statutoryRef="UAE Decennial Liability"
              icon={CheckCircle2}
            />
          </div>
        </div>

        {/* 1C. MASTER DEVELOPMENT ESCROW QUADRANT */}
        <CadranQuadrant
          eyebrow="OFF-PLAN PROJECT GOVERNANCE MATRIX"
          title="Statutory Developer Escrow & Handover Milestones"
          statutorySource="Dubai Land Department & Real Estate Regulatory Agency (RERA)"
          quadrants={[
            {
              title: 'Mandatory Escrow Trust Account',
              value: '100% Escrow',
              subtext: 'Every off-plan project maintains a ring-fenced escrow account with DLD-approved financial institutions.',
              delta: 'Law No. 8 of 2007',
              isPositive: true,
              statutoryRef: 'Law No. 8 of 2007 (Escrow)',
            },
            {
              title: 'Certified Engineering Progress',
              value: 'Milestone Releases',
              subtext: 'Developer disbursements require on-site technical inspection and certification by DLD accredited engineers.',
              delta: 'RERA Technical Audits',
              isPositive: true,
              statutoryRef: 'RERA Engineering Directives',
            },
            {
              title: 'Statutory Snagging & MEP Warranty',
              value: '1-Year Warranty',
              subtext: 'Mandatory 12-month defect liability period on all mechanical, electrical, plumbing, and architectural finishes.',
              delta: 'Law No. 6 of 2019',
              isPositive: true,
              statutoryRef: 'Law No. 6 of 2019 (JOP)',
            },
            {
              title: 'Decennial Structural Liability',
              value: '10-Year Liability',
              subtext: 'Joint structural warranty by developer and supervising consultant covering total building integrity.',
              delta: 'Article 880, UAE Civil Code',
              isPositive: true,
              statutoryRef: 'Federal Law No. 5 of 1985',
            },
          ]}
        />

        {/* 2. FILTER PILLS */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 p-3.5 bg-[#f5f5f7] rounded-2xl border border-black/10 shadow-xs">
          <div className="flex flex-wrap items-center gap-2">
            <div className="flex flex-wrap items-center gap-1.5 p-1 bg-white rounded-xl border border-black/10 shadow-2xs">
              {['ALL', 'Completed', 'Under Construction', 'Off-Plan'].map((st) => (
                <button
                  key={st}
                  onClick={() => setSelectedStatus(st)}
                  className={`px-4 py-1.5 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
                    selectedStatus === st
                      ? 'bg-[#1d1d1f] text-white shadow-xs'
                      : 'text-[#6e6e73] hover:text-[#1d1d1f] hover:bg-[#f5f5f7]'
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
              className="px-4 py-2 bg-white rounded-xl border border-black/10 text-xs font-semibold text-[#1d1d1f] focus:outline-none focus:border-[#b8860b] cursor-pointer shadow-2xs"
            >
              <option value="ALL">All Communities</option>
              {uniqueAreas.map((area) => (
                <option key={area} value={area}>
                  {area}
                </option>
              ))}
            </select>
          </div>

          <div className="text-xs font-medium text-[#6e6e73] px-2 font-mono">
            Showing <span className="font-semibold text-[#1d1d1f]">{filteredProjects.length}</span> Verified Developments
          </div>
        </div>

        {/* 3. LARGE PROJECT FEATURE MOMENT */}
        {primaryProject && (
          <div className="group border border-black/10 rounded-3xl overflow-hidden bg-white shadow-[0_2px_12px_rgba(0,0,0,0.03)] apple-card-hover grid grid-cols-1 lg:grid-cols-12">
            <div className="lg:col-span-7 relative aspect-[16/10] bg-[#f5f5f7] overflow-hidden">
              <Image
                src={primaryProject.image || 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1200&q=80'}
                alt={primaryProject.name}
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 60vw"
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute top-4 left-4 flex items-center gap-2">
                <span className="px-3 py-1 rounded-full text-[10px] font-mono font-semibold bg-white/90 backdrop-blur-md text-[#1d1d1f] border border-black/10 shadow-xs">
                  {primaryProject.area_name}
                </span>
                <span className="px-3 py-1 rounded-full text-[10px] font-mono font-bold bg-emerald-50 text-emerald-700 border border-emerald-200">
                  DLD ESCROW VERIFIED
                </span>
              </div>
            </div>

            <div className="lg:col-span-5 p-6 sm:p-10 flex flex-col justify-between space-y-6">
              <div className="space-y-3">
                <div className="flex items-center justify-between text-xs font-mono text-[#86868b]">
                  <span className="text-[#b8860b] font-bold">{primaryProject.developer_name}</span>
                  <span>{primaryProject.completion_status} ({primaryProject.completion_year})</span>
                </div>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-[#1d1d1f] group-hover:text-[#b8860b] transition-colors tracking-tight leading-tight">
                  {primaryProject.name}
                </h2>
                <p className="text-xs sm:text-sm text-[#6e6e73] leading-relaxed line-clamp-3">
                  {primaryProject.description}
                </p>
              </div>

              <div className="space-y-4 pt-4 border-t border-black/10">
                <div className="p-4 bg-[#f5f5f7] rounded-2xl border border-black/10 text-xs space-y-1 font-mono">
                  <div className="text-[10px] text-[#86868b] font-mono uppercase tracking-widest font-semibold">Unit Configurations</div>
                  <div className="font-bold text-[#1d1d1f]">{primaryProject.unit_types}</div>
                </div>

                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-[10px] text-[#86868b] font-mono uppercase tracking-widest font-semibold">Starting Entry Tier</div>
                    <div className="text-xl font-extrabold text-[#1d1d1f] tabular-nums font-mono">
                      {primaryProject.starting_price ? `AED ${primaryProject.starting_price.toLocaleString()}` : 'Price on Request'}
                    </div>
                  </div>
                  <Link
                    href="/properties"
                    className="px-5 py-2.5 rounded-full bg-[#1d1d1f] text-white hover:bg-[#000000] text-xs font-bold transition-all flex items-center gap-1.5 shadow-xs"
                  >
                    <span>View Units</span>
                    <ArrowRight className="h-3.5 w-3.5 text-white/70" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* 4. ARCHITECTURAL PROJECT INDEX LIST */}
        <div className="space-y-4">
          <div className="flex items-center justify-between border-b border-black/10 pb-3">
            <span className="text-[11px] font-mono font-bold uppercase tracking-widest text-[#b8860b]">
              MASTER PROJECT INDEX
            </span>
            <span className="text-xs text-[#86868b] font-mono">DLD Law No. 8 of 2007 Escrow Verified</span>
          </div>

          <div className="space-y-4">
            {otherProjects.map((project) => (
              <div
                key={project.id}
                className="p-5 sm:p-6 rounded-3xl border border-black/10 bg-white hover:border-black/20 transition-all flex flex-col md:flex-row items-start md:items-center justify-between gap-6 group shadow-[0_2px_12px_rgba(0,0,0,0.03)] apple-card-hover"
              >
                <div className="flex items-start sm:items-center gap-5">
                  <div className="relative h-20 w-32 rounded-2xl overflow-hidden bg-[#f5f5f7] shrink-0">
                    <Image
                      src={project.image || 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=600&q=80'}
                      alt={project.name}
                      fill
                      sizes="150px"
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="space-y-1">
                    <div className="flex items-center gap-2 text-[10px] font-mono text-[#86868b]">
                      <span className="font-bold text-[#b8860b]">{project.developer_name}</span>
                      <span>•</span>
                      <span>{project.area_name}</span>
                    </div>
                    <h3 className="text-lg font-bold text-[#1d1d1f] group-hover:text-[#b8860b] transition-colors tracking-tight">
                      {project.name}
                    </h3>
                    <div className="text-xs text-[#6e6e73]">
                      {project.unit_types} • {project.completion_status} ({project.completion_year})
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-6 w-full md:w-auto justify-between md:justify-end pt-3 md:pt-0 border-t md:border-t-0 border-black/10 shrink-0">
                  <div className="text-left md:text-right">
                    <div className="text-[10px] font-mono text-[#86868b] uppercase tracking-widest font-semibold">Starting Tier</div>
                    <div className="text-base font-extrabold text-[#1d1d1f] tabular-nums font-mono">
                      {project.starting_price ? `AED ${project.starting_price.toLocaleString()}` : 'Price on Request'}
                    </div>
                  </div>
                  <Link
                    href="/properties"
                    className="px-5 py-2.5 rounded-full bg-[#f5f5f7] hover:bg-[#1d1d1f] hover:text-white text-xs font-bold text-[#1d1d1f] transition-all flex items-center gap-1.5 border border-black/10 shadow-2xs"
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