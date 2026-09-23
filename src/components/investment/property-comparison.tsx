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
    <div className="bg-white rounded-xl border border-border overflow-hidden">
      <div className="p-6 border-b border-border flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2">
            <ArrowLeftRight className="h-5 w-5 text-accent" />
            <h2 className="text-xl font-bold text-text-primary">Institutional Property & Deal Matrix</h2>
          </div>
          <p className="text-xs text-text-secondary mt-1">
            Side-by-side comparative analysis of verified properties, acquisition capital, and service charges.
          </p>
        </div>
        <SourceBadge status="OFFICIAL SOURCE" sourceName="Direct Verified Records Comparison" />
      </div>

      <div className="p-6 space-y-6">
        {/* Selector pills */}
        <div>
          <span className="text-xs font-semibold text-text-muted uppercase tracking-wider block mb-2">
            Select Properties to Compare (Max 3):
          </span>
          <div className="flex flex-wrap gap-2">
            {VERIFIED_PROPERTIES.map((p) => {
              const isSelected = selectedIds.includes(p.id)
              return (
                <button
                  key={p.id}
                  onClick={() => toggleProperty(p.id)}
                  className={`px-3 py-1.5 rounded text-xs font-medium border transition-colors flex items-center gap-1.5 ${
                    isSelected
                      ? 'bg-text-primary text-white border-text-primary'
                      : 'bg-surface text-text-secondary border-border hover:bg-surface-elevated'
                  }`}
                >
                  {isSelected && <Check className="h-3 w-3" />}
                  <span>{p.title}</span>
                </button>
              )
            })}
          </div>
        </div>

        {/* Comparison Table */}
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs border border-border rounded-lg overflow-hidden">
            <thead className="bg-surface border-b border-border">
              <tr>
                <th className="py-3 px-4 font-semibold text-text-primary w-48">Metric / Characteristic</th>
                {selectedProperties.map((p) => (
                  <th key={p.id} className="py-3 px-4 font-bold text-text-primary min-w-[220px]">
                    <Link href={`/properties/${p.id}`} className="hover:text-accent transition-colors">
                      {p.title}
                    </Link>
                    <div className="text-[11px] font-normal text-text-muted mt-0.5">
                      {p.area_name} • {p.developer_name}
                    </div>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="divide-y divide-border">
              <tr>
                <td className="py-3 px-4 font-semibold text-text-secondary bg-surface-subtle">Asking Price</td>
                {selectedProperties.map((p) => (
                  <td key={p.id} className="py-3 px-4 font-mono font-bold text-accent text-sm tabular-nums">
                    AED {p.asking_price?.toLocaleString()}
                  </td>
                ))}
              </tr>

              <tr>
                <td className="py-3 px-4 font-semibold text-text-secondary bg-surface-subtle">Price per Sq Ft</td>
                {selectedProperties.map((p) => (
                  <td key={p.id} className="py-3 px-4 font-mono font-semibold text-text-primary tabular-nums">
                    AED {p.price_per_sqft?.toLocaleString()} / sqft
                  </td>
                ))}
              </tr>

              <tr>
                <td className="py-3 px-4 font-semibold text-text-secondary bg-surface-subtle">Internal Area</td>
                {selectedProperties.map((p) => (
                  <td key={p.id} className="py-3 px-4 font-mono text-text-primary tabular-nums">
                    {p.internal_area_sqft.toLocaleString()} sqft
                  </td>
                ))}
              </tr>

              <tr>
                <td className="py-3 px-4 font-semibold text-text-secondary bg-surface-subtle">Bedrooms & Baths</td>
                {selectedProperties.map((p) => (
                  <td key={p.id} className="py-3 px-4 text-text-primary">
                    {p.bedrooms} Beds / {p.bathrooms} Baths
                  </td>
                ))}
              </tr>

              <tr>
                <td className="py-3 px-4 font-semibold text-text-secondary bg-surface-subtle">Completion Status</td>
                {selectedProperties.map((p) => (
                  <td key={p.id} className="py-3 px-4">
                    <span className="px-2 py-0.5 rounded text-[10px] font-semibold bg-surface-elevated border border-border text-text-secondary">
                      {p.completion_status}
                    </span>
                  </td>
                ))}
              </tr>

              <tr>
                <td className="py-3 px-4 font-semibold text-text-secondary bg-surface-subtle">
                  Total Statutory Acquisition Costs
                </td>
                {selectedProperties.map((p) => {
                  const acq = calculateAcquisitionCosts(p.asking_price || 0, false)
                  return (
                    <td key={p.id} className="py-3 px-4 font-mono text-text-secondary tabular-nums">
                      + AED {acq.total_statutory_fees.toLocaleString()}
                      <span className="block text-[10px] text-text-muted">
                        Total Capital: AED {acq.total_acquisition_cost.toLocaleString()}
                      </span>
                    </td>
                  )
                })}
              </tr>

              <tr>
                <td className="py-3 px-4 font-semibold text-text-secondary bg-surface-subtle">
                  Annual Service Charge (Est.)
                </td>
                {selectedProperties.map((p) => {
                  const sc = (p.service_charge_per_sqft || 0) * p.internal_area_sqft
                  return (
                    <td key={p.id} className="py-3 px-4 font-mono text-text-secondary tabular-nums">
                      AED {sc.toLocaleString()} / yr
                      <span className="block text-[10px] text-text-muted">
                        (AED {p.service_charge_per_sqft} / sqft)
                      </span>
                    </td>
                  )
                })}
              </tr>

              <tr>
                <td className="py-3 px-4 font-semibold text-text-secondary bg-surface-subtle">Data Provenance</td>
                {selectedProperties.map((p) => (
                  <td key={p.id} className="py-3 px-4">
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
