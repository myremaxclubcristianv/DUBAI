'use client'

import * as React from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import Image from 'next/image'
import { VERIFIED_PROPERTIES } from '@/lib/data/properties'
import { calculateAcquisitionCosts } from '@/lib/calculators/investment'
import { SourceBadge } from '@/components/ui/source-badge'
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
    <div className="bg-white text-text-primary min-h-screen pb-24">
      {/* 1. EDITORIAL HEADER */}
      <section className="pt-12 pb-10 border-b border-border bg-surface-subtle">
        <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-border text-xs font-semibold text-text-secondary shadow-2xs">
              <span className="h-2 w-2 rounded-full bg-accent animate-pulse" />
              <span>Private Client Workspace & Analytical Dossier Desk</span>
            </div>
            <SourceBadge status="OFFICIAL SOURCE" sourceName="Client Session & Saved Criteria" />
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-text-primary uppercase leading-tight">
            Client Workspace.
          </h1>

          <p className="text-base sm:text-lg text-text-secondary max-w-2xl font-normal leading-relaxed">
            Side-by-side asset comparison matrix, saved property shortlists, custom acquisition filters, and underwriting worksheets.
          </p>
        </div>
      </section>

      {/* 2. LOCAL BROWSER STORAGE NOTICE */}
      <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-6">
        <div className="p-4 rounded-xl border border-border bg-surface-subtle flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs">
          <div className="flex items-center gap-2.5">
            <span className="h-2 w-2 rounded-full bg-accent shrink-0" />
            <div>
              <span className="font-bold text-text-primary">Storage Mode:</span>
              <span className="text-text-secondary ml-1">
                LOCAL BROWSER PERSISTENCE ACTIVE — Resilient client-side storage managing shortlists, comparison matrices, and search criteria.
              </span>
            </div>
          </div>
          <span className="font-mono text-[10px] px-2.5 py-0.5 rounded bg-white border border-border text-text-muted font-bold shrink-0">
            LOCAL ENGINE
          </span>
        </div>
      </div>

      <main className="w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 space-y-14">
        {/* 3. SAVED PROPERTY SHORTLIST (PRIMARY FOCUS) */}
        <div className="space-y-6">
          <div className="flex items-center justify-between border-b border-border pb-4">
            <div>
              <div className="flex items-center gap-2">
                <Bookmark className="h-5 w-5 text-accent shrink-0" />
                <h2 className="text-2xl font-black text-text-primary">
                  Saved Property Shortlist ({shortlistedProperties.length})
                </h2>
              </div>
              <p className="text-xs text-text-muted mt-0.5 font-mono">
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
                className="px-3 py-1.5 rounded-xl border border-border bg-surface hover:bg-surface-elevated text-xs font-semibold text-text-secondary hover:text-red-700 transition-colors flex items-center gap-1 cursor-pointer"
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
                  className="p-5 rounded-2xl border border-border bg-white hover:border-accent hover:shadow-xs transition-all flex flex-col md:flex-row items-start md:items-center justify-between gap-4 group"
                >
                  <div className="flex items-center gap-4">
                    <div className="relative h-16 w-24 rounded-xl overflow-hidden bg-surface-elevated shrink-0">
                      <Image
                        src={prop.images[0] || 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=400&q=80'}
                        alt={prop.title}
                        fill
                        sizes="100px"
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <div className="text-[10px] font-mono text-text-muted">{prop.developer_name} • {prop.area_name}</div>
                      <h4 className="text-base font-bold text-text-primary group-hover:text-accent transition-colors">
                        {prop.title}
                      </h4>
                      <div className="text-xs text-text-secondary">
                        {prop.bedrooms} Bed • {prop.bathrooms} Bath • {prop.internal_area_sqft.toLocaleString()} sqft
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center gap-4 w-full md:w-auto justify-between md:justify-end pt-3 md:pt-0 border-t md:border-t-0 border-border-subtle">
                    <div className="text-left md:text-right">
                      <div className="text-[10px] font-mono text-text-muted uppercase">Asking Price</div>
                      <div className="text-base font-black text-text-primary tabular-nums">
                        AED {prop.asking_price?.toLocaleString()}
                      </div>
                    </div>
                    <Link
                      href={`/properties/${prop.id}`}
                      className="px-4 py-2 rounded-xl bg-text-primary text-white hover:bg-black text-xs font-bold transition-colors flex items-center gap-1.5"
                    >
                      <span>Open Dossier</span>
                      <ArrowRight className="h-3.5 w-3.5 text-accent" />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="p-8 rounded-2xl border border-dashed border-border bg-surface-subtle text-center space-y-2">
              <Bookmark className="h-8 w-8 text-text-muted mx-auto" />
              <div className="text-xs font-bold text-text-primary">No Properties Saved Yet</div>
              <p className="text-[11px] text-text-secondary max-w-sm mx-auto">
                Bookmark verified properties from the property index to assemble your private acquisition shortlist.
              </p>
              <Link
                href="/properties"
                className="inline-flex items-center gap-1 text-xs font-bold text-accent hover:underline pt-2"
              >
                <span>Browse Verified Properties →</span>
              </Link>
            </div>
          )}
        </div>

        {/* 4. SIDE-BY-SIDE ASSET COMPARISON MATRIX */}
        <div className="space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-border pb-4">
            <div>
              <div className="flex items-center gap-2">
                <Table className="h-5 w-5 text-accent shrink-0" />
                <h2 className="text-2xl font-black text-text-primary">
                  Asset Comparison Desk ({comparedProperties.length} / 4 Assets)
                </h2>
              </div>
              <p className="text-xs text-text-muted mt-0.5 font-mono">
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
                className="px-3 py-1.5 rounded-xl border border-border bg-surface hover:bg-surface-elevated text-xs font-semibold text-text-secondary hover:text-red-700 transition-colors flex items-center gap-1 cursor-pointer w-fit"
              >
                <RotateCcw className="h-3.5 w-3.5" />
                <span>Reset Matrix</span>
              </button>
            )}
          </div>

          {comparedProperties.length > 0 ? (
            <div className="rounded-2xl border border-border bg-white overflow-hidden shadow-2xs">
              <div className="overflow-x-auto">
                <table className="w-full text-left text-xs border-collapse">
                  <thead>
                    <tr className="border-b border-border bg-surface">
                      <th className="p-4 font-mono uppercase text-[11px] text-text-muted font-bold min-w-[170px] sticky left-0 bg-surface z-10 border-r border-border-subtle">
                        Field / Metric
                      </th>
                      {comparedProperties.map((prop) => (
                        <th key={prop.id} className="p-4 min-w-[220px] max-w-[280px]">
                          <div className="space-y-2">
                            <div className="flex items-center justify-between">
                              <span className="font-mono text-[10px] text-accent font-bold">
                                {prop.completion_status}
                              </span>
                              <button
                                type="button"
                                onClick={() => removeFromComparison(prop.id)}
                                className="text-text-muted hover:text-red-600 transition-colors p-1 cursor-pointer"
                                title="Remove from comparison"
                              >
                                <Trash2 className="h-3.5 w-3.5" />
                              </button>
                            </div>
                            <Link href={`/properties/${prop.id}`} className="font-bold text-sm text-text-primary hover:text-accent transition-colors block line-clamp-1">
                              {prop.title}
                            </Link>
                          </div>
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-border">
                    <tr>
                      <td className="p-4 font-mono font-bold text-text-muted uppercase text-[10px] sticky left-0 bg-white border-r border-border-subtle">
                        Asking Price
                      </td>
                      {comparedProperties.map((p) => (
                        <td key={p.id} className="p-4 font-black text-text-primary text-sm tabular-nums">
                          AED {p.asking_price?.toLocaleString()}
                        </td>
                      ))}
                    </tr>
                    <tr>
                      <td className="p-4 font-mono font-bold text-text-muted uppercase text-[10px] sticky left-0 bg-white border-r border-border-subtle">
                        Community
                      </td>
                      {comparedProperties.map((p) => (
                        <td key={p.id} className="p-4 font-medium text-text-primary">
                          {p.area_name}
                        </td>
                      ))}
                    </tr>
                    <tr>
                      <td className="p-4 font-mono font-bold text-text-muted uppercase text-[10px] sticky left-0 bg-white border-r border-border-subtle">
                        Internal Area
                      </td>
                      {comparedProperties.map((p) => (
                        <td key={p.id} className="p-4 text-text-secondary">
                          {p.internal_area_sqft.toLocaleString()} sqft ({(p.internal_area_sqft * 0.092903).toFixed(1)} m²)
                        </td>
                      ))}
                    </tr>
                    <tr>
                      <td className="p-4 font-mono font-bold text-text-muted uppercase text-[10px] sticky left-0 bg-white border-r border-border-subtle">
                        Bedrooms / Baths
                      </td>
                      {comparedProperties.map((p) => (
                        <td key={p.id} className="p-4 text-text-secondary">
                          {p.bedrooms} Bed • {p.bathrooms} Bath
                        </td>
                      ))}
                    </tr>
                    <tr>
                      <td className="p-4 font-mono font-bold text-text-muted uppercase text-[10px] sticky left-0 bg-white border-r border-border-subtle">
                        Developer / Project
                      </td>
                      {comparedProperties.map((p) => (
                        <td key={p.id} className="p-4 text-text-secondary">
                          {p.developer_name} • {p.project_name || 'Individual'}
                        </td>
                      ))}
                    </tr>
                    <tr>
                      <td className="p-4 font-mono font-bold text-text-muted uppercase text-[10px] sticky left-0 bg-white border-r border-border-subtle">
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
            <div className="p-8 rounded-2xl border border-dashed border-border bg-surface-subtle text-center space-y-2">
              <Table className="h-8 w-8 text-text-muted mx-auto" />
              <div className="text-xs font-bold text-text-primary">No Assets Selected in Comparison Desk</div>
              <p className="text-[11px] text-text-secondary max-w-sm mx-auto">
                Select &ldquo;Compare Asset&rdquo; on any property dossier to generate an institutional side-by-side financial metric worksheet.
              </p>
            </div>
          )}
        </div>

        {/* 5. SAVED SEARCHES */}
        <div className="space-y-6">
          <div className="border-b border-border pb-4">
            <h2 className="text-2xl font-black text-text-primary">
              Saved Acquisition Criteria ({savedSearches.length})
            </h2>
            <p className="text-xs text-text-muted mt-0.5 font-mono">
              Custom filter presets saved in your private client desk.
            </p>
          </div>

          {savedSearches.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {savedSearches.map((search) => (
                <div
                  key={search.id}
                  className="p-5 rounded-2xl border border-border bg-white space-y-3 flex flex-col justify-between"
                >
                  <div className="space-y-1">
                    <div className="flex items-center justify-between">
                      <span className="text-[10px] font-mono font-bold text-accent uppercase">SAVED FILTER</span>
                      <button
                        type="button"
                        onClick={() => removeSavedSearch(search.id)}
                        className="text-text-muted hover:text-red-600 p-1"
                      >
                        <Trash2 className="h-3.5 w-3.5" />
                      </button>
                    </div>
                    <div className="text-sm font-bold text-text-primary">{search.name}</div>
                  </div>

                  <button
                    type="button"
                    onClick={() => handleApplySavedSearch(search.filters)}
                    className="w-full py-2 rounded-xl bg-surface hover:bg-text-primary hover:text-white text-xs font-bold text-text-primary transition-all flex items-center justify-center gap-1"
                  >
                    <span>Apply Filters</span>
                    <ArrowRight className="h-3 w-3" />
                  </button>
                </div>
              ))}
            </div>
          ) : (
            <div className="p-8 rounded-2xl border border-dashed border-border bg-surface-subtle text-center space-y-2">
              <SlidersHorizontal className="h-8 w-8 text-text-muted mx-auto" />
              <div className="text-xs font-bold text-text-primary">No Search Presets Saved</div>
              <p className="text-[11px] text-text-secondary max-w-sm mx-auto">
                Filter properties by community, price tier, or typology and save your configuration for quick access.
              </p>
            </div>
          )}
        </div>
      </main>
    </div>
  )
}
