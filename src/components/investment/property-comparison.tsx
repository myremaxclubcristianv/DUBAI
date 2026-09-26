'use client'

import * as React from 'react'
import { VERIFIED_PROPERTIES } from '@/lib/data/properties'
import { calculateAcquisitionCosts } from '@/lib/calculators/investment'
import { SourceBadge } from '@/components/ui/source-badge'
import { ArrowLeftRight, Check } from 'lucide-react'
import Link from 'next/link'

export function PropertyComparison() {
  const [selectedIds, setSelectedIds] = React.useState<string[]>([
    'prop-one-palm-01',
    'prop-il-primo-02',
    'prop-dubai-hills-mansion-03',
  ])

  const selectedProperties = VERIFIED_PROPERTIES.filter((p) => selectedIds.includes(p.id))

  const toggleProperty = (id: string) => {
    if (selectedIds.includes(id)) {
      if (selectedIds.length > 1) {
        setSelectedIds(selectedIds.filter((i) => i !== id))
      }
    } else {
      if (selectedIds.length < 3) {
        setSelectedIds([...selectedIds, id])
      }
    }
  }

  return (
    <div className="bg-[#0c0c0e] rounded-3xl border border-white/10 overflow-hidden shadow-2xl">
      <div className="p-6 sm:p-8 border-b border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-gradient-to-b from-white/[0.04] to-transparent">
        <div>
          <div className="flex items-center gap-2">
            <ArrowLeftRight className="h-4 w-4 text-accent" />
            <h2 className="text-xl sm:text-2xl font-semibold text-white tracking-tight">Institutional Property & Deal Matrix</h2>
          </div>
          <p className="text-xs text-zinc-400 mt-1">
            Side-by-side comparative analysis of verified properties, acquisition capital, and service charges.
          </p>
        </div>
        <SourceBadge status="OFFICIAL SOURCE" sourceName="Direct Verified Records Comparison" />
      </div>

      <div className="p-6 sm:p-8 space-y-6">
        {/* Selector pills */}
        <div>
          <span className="text-[10px] font-bold text-zinc-400 uppercase tracking-widest block mb-3">
            Select Properties to Compare (Max 3):
          </span>
          <div className="flex flex-wrap gap-2">
            {VERIFIED_PROPERTIES.map((p) => {
              const isSelected = selectedIds.includes(p.id)
              return (
                <button
                  key={p.id}
                  onClick={() => toggleProperty(p.id)}
                  className={`px-3.5 py-2 rounded-xl text-xs font-medium border transition-all flex items-center gap-2 cursor-pointer ${
                    isSelected
                      ? 'bg-white text-black border-white shadow-lg font-semibold'
                      : 'bg-white/[0.03] text-zinc-400 border-white/10 hover:bg-white/[0.08] hover:text-white'
                  }`}
                >
                  {isSelected && <Check className="h-3 w-3 text-black" />}
                  <span>{p.title}</span>
                </button>
              )
            })}
          </div>
        </div>

        {/* Comparison Table */}
        <div className="overflow-x-auto rounded-2xl border border-white/10">
          <table className="w-full text-left text-xs">
            <thead className="bg-white/[0.03] border-b border-white/10">
              <tr>
                <th className="py-4 px-5 font-semibold text-zinc-300 w-48">Metric / Characteristic</th>
                {selectedProperties.map((p) => (
                  <th key={p.id} className="py-4 px-5 font-semibold text-white min-w-[220px]">
                    <Link href={`/properties/${p.id}`} className="hover:text-accent transition-colors font-medium text-sm">
                      {p.title}
                    </Link>
                    <div className="text-[11px] font-normal text-zinc-400 mt-0.5 font-mono">
                      {p.area_name} • {p.developer_name}
                    </div>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="divide-y divide-white/5 bg-[#0c0c0e]">
              <tr className="hover:bg-white/[0.02] transition-colors">
                <td className="py-3.5 px-5 font-medium text-zinc-400 bg-white/[0.01]">Asking Price</td>
                {selectedProperties.map((p) => (
                  <td key={p.id} className="py-3.5 px-5 font-mono font-semibold text-accent text-sm tabular-nums">
                    AED {p.asking_price?.toLocaleString()}
                  </td>
                ))}
              </tr>

              <tr className="hover:bg-white/[0.02] transition-colors">
                <td className="py-3.5 px-5 font-medium text-zinc-400 bg-white/[0.01]">Price per Sq Ft</td>
                {selectedProperties.map((p) => (
                  <td key={p.id} className="py-3.5 px-5 font-mono text-zinc-200 tabular-nums">
                    AED {p.price_per_sqft?.toLocaleString()} / sqft
                  </td>
                ))}
              </tr>

              <tr className="hover:bg-white/[0.02] transition-colors">
                <td className="py-3.5 px-5 font-medium text-zinc-400 bg-white/[0.01]">Internal Area</td>
                {selectedProperties.map((p) => (
                  <td key={p.id} className="py-3.5 px-5 font-mono text-zinc-200 tabular-nums">
                    {p.internal_area_sqft.toLocaleString()} sqft
                  </td>
                ))}
              </tr>

              <tr className="hover:bg-white/[0.02] transition-colors">
                <td className="py-3.5 px-5 font-medium text-zinc-400 bg-white/[0.01]">Bedrooms & Baths</td>
                {selectedProperties.map((p) => (
                  <td key={p.id} className="py-3.5 px-5 text-white">
                    {p.bedrooms} Beds / {p.bathrooms} Baths
                  </td>
                ))}
              </tr>

              <tr className="hover:bg-white/[0.02] transition-colors">
                <td className="py-3.5 px-5 font-medium text-zinc-400 bg-white/[0.01]">Completion Status</td>
                {selectedProperties.map((p) => (
                  <td key={p.id} className="py-3.5 px-5">
                    <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono font-medium bg-white/[0.05] border border-white/10 text-zinc-300">
                      {p.completion_status}
                    </span>
                  </td>
                ))}
              </tr>

              <tr className="hover:bg-white/[0.02] transition-colors">
                <td className="py-3.5 px-5 font-medium text-zinc-400 bg-white/[0.01]">
                  Total Statutory Acquisition Costs
                </td>
                {selectedProperties.map((p) => {
                  const acq = calculateAcquisitionCosts(p.asking_price || 0, false)
                  return (
                    <td key={p.id} className="py-3.5 px-5 font-mono text-zinc-300 tabular-nums">
                      + AED {acq.total_statutory_fees.toLocaleString()}
                      <span className="block text-[10px] text-zinc-400 font-sans mt-0.5">
                        Total Capital: AED {acq.total_acquisition_cost.toLocaleString()}
                      </span>
                    </td>
                  )
                })}
              </tr>

              <tr className="hover:bg-white/[0.02] transition-colors">
                <td className="py-3.5 px-5 font-medium text-zinc-400 bg-white/[0.01]">
                  Annual Service Charge (Est.)
                </td>
                {selectedProperties.map((p) => {
                  const sc = (p.service_charge_per_sqft || 0) * p.internal_area_sqft
                  return (
                    <td key={p.id} className="py-3.5 px-5 font-mono text-zinc-300 tabular-nums">
                      AED {sc.toLocaleString()} / yr
                      <span className="block text-[10px] text-zinc-400 font-sans mt-0.5">
                        (AED {p.service_charge_per_sqft} / sqft)
                      </span>
                    </td>
                  )
                })}
              </tr>

              <tr className="hover:bg-white/[0.02] transition-colors">
                <td className="py-3.5 px-5 font-medium text-zinc-400 bg-white/[0.01]">Data Provenance</td>
                {selectedProperties.map((p) => (
                  <td key={p.id} className="py-3.5 px-5">
                    <SourceBadge provenance={p.provenance} />
                  </td>
                ))}
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}
