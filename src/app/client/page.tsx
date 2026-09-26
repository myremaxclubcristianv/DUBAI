'use client'

import * as React from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import Image from 'next/image'
import { VERIFIED_PROPERTIES } from '@/lib/data/properties'
import { calculateAcquisitionCosts } from '@/lib/calculators/investment'
import { SourceBadge } from '@/components/ui/source-badge'
import { PageIntro } from '@/components/layout/layout-primitives'
import { useClient } from '@/lib/context/client-context'
import { useToast } from '@/components/ui/toast'
import {
  Bookmark,
  ArrowRight,
  Trash2,
  Table,
  RotateCcw,
  SlidersHorizontal
} from 'lucide-react'

export default function ClientPortalPage() {
  const router = useRouter()
  const {
    shortlistIds,
    clearShortlist,
    comparisonIds,
    removeFromComparison,
    clearComparison,
    savedSearches,
    removeSavedSearch,
  } = useClient()

  const { addToast } = useToast()

  const shortlistedProperties = VERIFIED_PROPERTIES.filter((p) => shortlistIds.includes(p.id))
  const comparedProperties = VERIFIED_PROPERTIES.filter((p) => comparisonIds.includes(p.id))

  const handleApplySavedSearch = (filters: Record<string, string | number | boolean | undefined>) => {
    const params = new URLSearchParams()
    if (filters.query) params.set('q', String(filters.query))
    if (filters.area && filters.area !== 'ALL') params.set('area', String(filters.area))
    if (filters.type && filters.type !== 'ALL') params.set('type', String(filters.type))
    if (filters.developer && filters.developer !== 'ALL') params.set('developer', String(filters.developer))

    router.push(`/properties?${params.toString()}`)
  }

  return (
    <div className="bg-black text-white min-h-screen pb-24">
      {/* 1. EDITORIAL PAGE INTRO */}
      <PageIntro
        eyebrow="Private Client Workspace & Analytical Dossier Desk"
        badge={<SourceBadge status="OFFICIAL SOURCE" sourceName="Client Session & Saved Criteria" />}
        title="CLIENT WORKSPACE"
        description="Draft stored locally in this browser. Side-by-side asset comparison matrix, saved property shortlists, custom acquisition filters, and underwriting worksheets."
      />

      {/* 2. LOCAL BROWSER STORAGE NOTICE */}
      <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-6">
        <div className="p-4 rounded-2xl border border-white/10 bg-[#0c0c0e] flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs shadow-xl">
          <div className="flex items-center gap-2.5">
            <span className="h-2 w-2 rounded-full bg-accent shrink-0 animate-pulse" />
            <div>
              <span className="font-semibold text-white">Storage Mode:</span>
              <span className="text-zinc-400 ml-1.5 leading-relaxed">
                Draft stored locally in this browser — Client-side storage managing shortlists, comparison matrices, and search criteria without server tracking.
              </span>
            </div>
          </div>
          <span className="font-mono text-[10px] px-3 py-1 rounded-full bg-white/[0.05] border border-white/10 text-zinc-300 font-semibold shrink-0">
            LOCAL ENGINE
          </span>
        </div>
      </div>

      <main className="w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 space-y-16">
        {/* 3. SAVED PROPERTY SHORTLIST (PRIMARY FOCUS) */}
        <div className="space-y-6">
          <div className="flex items-center justify-between border-b border-white/10 pb-5">
            <div>
              <div className="flex items-center gap-2">
                <Bookmark className="h-5 w-5 text-accent shrink-0" />
                <h2 className="text-2xl font-semibold text-white tracking-tight">
                  Saved Property Shortlist ({shortlistedProperties.length})
                </h2>
              </div>
              <p className="text-xs text-zinc-400 mt-1 font-mono">
                Curated portfolio assets saved during this session.
              </p>
            </div>

            {shortlistedProperties.length > 0 && (
              <button
                type="button"
                onClick={() => {
                  clearShortlist()
                  addToast('Cleared saved shortlist', 'info')
                }}
                className="px-3.5 py-1.5 rounded-xl border border-white/10 bg-white/[0.04] hover:bg-red-500/10 hover:border-red-500/30 text-xs font-semibold text-zinc-400 hover:text-red-400 transition-colors flex items-center gap-1.5 cursor-pointer"
              >
                <Trash2 className="h-3.5 w-3.5" />
                <span>Clear Shortlist</span>
              </button>
            )}
          </div>

          {shortlistedProperties.length > 0 ? (
            <div className="space-y-3">
              {shortlistedProperties.map((prop) => (
                <div
                  key={prop.id}
                  className="p-5 rounded-3xl border border-white/10 bg-[#0c0c0e] hover:border-accent/40 transition-all flex flex-col md:flex-row items-start md:items-center justify-between gap-4 group shadow-xl"
                >
                  <div className="flex items-center gap-4">
                    <div className="relative h-16 w-24 rounded-2xl overflow-hidden bg-white/[0.02] shrink-0">
                      <Image
                        src={prop.images[0] || 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=400&q=80'}
                        alt={prop.title}
                        fill
                        sizes="100px"
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                    <div>
                      <div className="text-[10px] font-mono text-zinc-400">{prop.developer_name} • {prop.area_name}</div>
                      <h4 className="text-base font-semibold text-white group-hover:text-accent transition-colors tracking-tight">
                        {prop.title}
                      </h4>
                      <div className="text-xs text-zinc-400">
                        {prop.bedrooms} Bed • {prop.bathrooms} Bath • {prop.internal_area_sqft.toLocaleString()} sqft
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center gap-4 w-full md:w-auto justify-between md:justify-end pt-3 md:pt-0 border-t md:border-t-0 border-white/10">
                    <div className="text-left md:text-right">
                      <div className="text-[10px] font-mono text-zinc-400 uppercase tracking-widest">Asking Price</div>
                      <div className="text-base font-semibold text-accent tabular-nums font-mono">
                        AED {prop.asking_price?.toLocaleString()}
                      </div>
                    </div>
                    <Link
                      href={`/properties/${prop.id}`}
                      className="px-4 py-2.5 rounded-xl bg-white text-black hover:bg-zinc-200 text-xs font-semibold transition-colors flex items-center gap-1.5 cursor-pointer shadow-md"
                    >
                      <span>Open Dossier</span>
                      <ArrowRight className="h-3.5 w-3.5" />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="p-10 rounded-3xl border border-dashed border-white/10 bg-[#0c0c0e] text-center space-y-3">
              <Bookmark className="h-8 w-8 text-zinc-600 mx-auto" />
              <div className="text-sm font-semibold text-white">No Properties Saved Yet</div>
              <p className="text-xs text-zinc-400 max-w-sm mx-auto leading-relaxed">
                Bookmark verified properties from the property index to assemble your private acquisition shortlist.
              </p>
              <Link
                href="/properties"
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-accent hover:underline pt-2 cursor-pointer"
              >
                <span>Browse Verified Properties →</span>
              </Link>
            </div>
          )}
        </div>

        {/* 4. SIDE-BY-SIDE ASSET COMPARISON MATRIX */}
        <div className="space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-white/10 pb-5">
            <div>
              <div className="flex items-center gap-2">
                <Table className="h-5 w-5 text-accent shrink-0" />
                <h2 className="text-2xl font-semibold text-white tracking-tight">
                  Asset Comparison Desk ({comparedProperties.length} / 4 Assets)
                </h2>
              </div>
              <p className="text-xs text-zinc-400 mt-1 font-mono">
                Structured side-by-side financial metric and specification matrix.
              </p>
            </div>

            {comparedProperties.length > 0 && (
              <button
                type="button"
                onClick={() => {
                  clearComparison()
                  addToast('Cleared comparison matrix', 'info')
                }}
                className="px-3.5 py-1.5 rounded-xl border border-white/10 bg-white/[0.04] hover:bg-red-500/10 hover:border-red-500/30 text-xs font-semibold text-zinc-400 hover:text-red-400 transition-colors flex items-center gap-1.5 cursor-pointer w-fit"
              >
                <RotateCcw className="h-3.5 w-3.5" />
                <span>Reset Matrix</span>
              </button>
            )}
          </div>

          {comparedProperties.length > 0 ? (
            <div className="rounded-3xl border border-white/10 bg-[#0c0c0e] overflow-hidden shadow-2xl">
              <div className="overflow-x-auto">
                <table className="w-full text-left text-xs border-collapse">
                  <thead>
                    <tr className="border-b border-white/10 bg-white/[0.02]">
                      <th className="p-4 font-mono uppercase text-[10px] text-zinc-400 tracking-widest font-semibold min-w-[170px] sticky left-0 bg-[#0c0c0e] z-10 border-r border-white/10">
                        Field / Metric
                      </th>
                      {comparedProperties.map((prop) => (
                        <th key={prop.id} className="p-4 min-w-[220px] max-w-[280px]">
                          <div className="space-y-2">
                            <div className="flex items-center justify-between">
                              <span className="font-mono text-[10px] text-accent font-semibold">
                                {prop.completion_status}
                              </span>
                              <button
                                type="button"
                                onClick={() => removeFromComparison(prop.id)}
                                className="text-zinc-500 hover:text-rose-400 transition-colors p-1 cursor-pointer"
                                title="Remove from comparison"
                              >
                                <Trash2 className="h-3.5 w-3.5" />
                              </button>
                            </div>
                            <Link href={`/properties/${prop.id}`} className="font-semibold text-sm text-white hover:text-accent transition-colors block line-clamp-1">
                              {prop.title}
                            </Link>
                          </div>
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-white/5 bg-[#0c0c0e]">
                    <tr>
                      <td className="p-4 font-mono font-medium text-zinc-400 uppercase text-[10px] tracking-widest sticky left-0 bg-[#0c0c0e] border-r border-white/10">
                        Asking Price
                      </td>
                      {comparedProperties.map((p) => (
                        <td key={p.id} className="p-4 font-semibold text-accent text-sm tabular-nums font-mono">
                          AED {p.asking_price?.toLocaleString()}
                        </td>
                      ))}
                    </tr>
                    <tr>
                      <td className="p-4 font-mono font-medium text-zinc-400 uppercase text-[10px] tracking-widest sticky left-0 bg-[#0c0c0e] border-r border-white/10">
                        Community
                      </td>
                      {comparedProperties.map((p) => (
                        <td key={p.id} className="p-4 font-medium text-white">
                          {p.area_name}
                        </td>
                      ))}
                    </tr>
                    <tr>
                      <td className="p-4 font-mono font-medium text-zinc-400 uppercase text-[10px] tracking-widest sticky left-0 bg-[#0c0c0e] border-r border-white/10">
                        Internal Area
                      </td>
                      {comparedProperties.map((p) => (
                        <td key={p.id} className="p-4 text-zinc-300 font-mono">
                          {p.internal_area_sqft.toLocaleString()} sqft ({(p.internal_area_sqft * 0.092903).toFixed(1)} m²)
                        </td>
                      ))}
                    </tr>
                    <tr>
                      <td className="p-4 font-mono font-medium text-zinc-400 uppercase text-[10px] tracking-widest sticky left-0 bg-[#0c0c0e] border-r border-white/10">
                        Bedrooms / Baths
                      </td>
                      {comparedProperties.map((p) => (
                        <td key={p.id} className="p-4 text-zinc-300">
                          {p.bedrooms} Bed • {p.bathrooms} Bath
                        </td>
                      ))}
                    </tr>
                    <tr>
                      <td className="p-4 font-mono font-medium text-zinc-400 uppercase text-[10px] tracking-widest sticky left-0 bg-[#0c0c0e] border-r border-white/10">
                        Developer / Project
                      </td>
                      {comparedProperties.map((p) => (
                        <td key={p.id} className="p-4 text-zinc-300">
                          {p.developer_name} • {p.project_name || 'Individual'}
                        </td>
                      ))}
                    </tr>
                    <tr>
                      <td className="p-4 font-mono font-medium text-zinc-400 uppercase text-[10px] tracking-widest sticky left-0 bg-[#0c0c0e] border-r border-white/10">
                        Statutory 4% DLD
                      </td>
                      {comparedProperties.map((p) => {
                        const acq = calculateAcquisitionCosts(p.asking_price || 0, false)
                        return (
                          <td key={p.id} className="p-4 font-mono text-accent">
                            AED {acq.dld_transfer_fee.toLocaleString()}
                          </td>
                        )
                      })}
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          ) : (
            <div className="p-10 rounded-3xl border border-dashed border-white/10 bg-[#0c0c0e] text-center space-y-3">
              <Table className="h-8 w-8 text-zinc-600 mx-auto" />
              <div className="text-sm font-semibold text-white">No Assets Selected in Comparison Desk</div>
              <p className="text-xs text-zinc-400 max-w-sm mx-auto leading-relaxed">
                Select &ldquo;Compare Asset&rdquo; on any property dossier to generate an institutional side-by-side financial metric worksheet.
              </p>
            </div>
          )}
        </div>

        {/* 5. SAVED SEARCHES */}
        <div className="space-y-6">
          <div className="border-b border-white/10 pb-5">
            <h2 className="text-2xl font-semibold text-white tracking-tight">
              Saved Acquisition Criteria ({savedSearches.length})
            </h2>
            <p className="text-xs text-zinc-400 mt-1 font-mono">
              Custom filter presets saved in your private client desk.
            </p>
          </div>

          {savedSearches.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {savedSearches.map((search) => (
                <div
                  key={search.id}
                  className="p-6 rounded-3xl border border-white/10 bg-[#0c0c0e] space-y-4 flex flex-col justify-between shadow-xl"
                >
                  <div className="space-y-1.5">
                    <div className="flex items-center justify-between">
                      <span className="text-[10px] font-mono font-semibold text-accent uppercase tracking-widest">SAVED FILTER</span>
                      <button
                        type="button"
                        onClick={() => removeSavedSearch(search.id)}
                        className="text-zinc-500 hover:text-rose-400 p-1 cursor-pointer"
                      >
                        <Trash2 className="h-3.5 w-3.5" />
                      </button>
                    </div>
                    <div className="text-sm font-semibold text-white tracking-tight">{search.name}</div>
                  </div>

                  <button
                    type="button"
                    onClick={() => handleApplySavedSearch(search.filters)}
                    className="w-full py-2.5 rounded-xl bg-white/[0.04] hover:bg-white hover:text-black text-xs font-semibold text-zinc-300 transition-all flex items-center justify-center gap-1.5 cursor-pointer border border-white/10"
                  >
                    <span>Apply Filters</span>
                    <ArrowRight className="h-3 w-3" />
                  </button>
                </div>
              ))}
            </div>
          ) : (
            <div className="p-10 rounded-3xl border border-dashed border-white/10 bg-[#0c0c0e] text-center space-y-3">
              <SlidersHorizontal className="h-8 w-8 text-zinc-600 mx-auto" />
              <div className="text-sm font-semibold text-white">No Search Presets Saved</div>
              <p className="text-xs text-zinc-400 max-w-sm mx-auto leading-relaxed">
                Filter properties by community, price tier, or typology and save your configuration for quick access.
              </p>
            </div>
          )}
        </div>
      </main>
    </div>
  )
}
