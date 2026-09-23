import * as React from 'react'
import { SourceBadge } from './source-badge'
import { ProvenanceMetadata, SourceStatus } from '@/types/provenance'
import { cn } from '@/lib/utils'

interface MetricCardProps {
  label: string
  value: string | number | React.ReactNode
  unit?: string
  subtext?: string
  provenance?: ProvenanceMetadata
  status?: SourceStatus
  className?: string
}

export function MetricCard({
  label,
  value,
  unit,
  subtext,
  provenance,
  status,
  className,
}: MetricCardProps) {
  return (
    <div
      className={cn(
        'p-5 bg-white rounded-lg border border-border flex flex-col justify-between transition-all hover:border-border-strong',
        className
      )}
    >
      <div className="flex items-start justify-between gap-2 mb-3">
        <span className="text-[11px] font-semibold uppercase tracking-wider text-text-muted">
          {label}
        </span>
        {(provenance || status) && (
          <SourceBadge provenance={provenance} status={status} />
        )}
      </div>

      <div>
        <div className="flex items-baseline gap-1.5">
          <span className="text-2xl md:text-3xl font-bold tracking-tight text-text-primary tabular-nums">
            {value}
          </span>
          {unit && <span className="text-sm font-medium text-text-secondary">{unit}</span>}
        </div>

        {subtext && <p className="text-xs text-text-muted mt-1.5">{subtext}</p>}
      </div>
    </div>
  )
}
