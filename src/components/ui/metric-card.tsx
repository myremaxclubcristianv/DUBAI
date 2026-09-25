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
        'p-5 sm:p-6 bg-white rounded-2xl border border-border flex flex-col justify-between h-full space-y-4 transition-all hover:border-border-strong shadow-2xs',
        className
      )}
    >
      <div className="space-y-2">
        <div className="flex items-start justify-between gap-2 min-h-[1.5rem]">
          <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-text-muted">
            {label}
          </span>
          {(provenance || status) && (
            <SourceBadge provenance={provenance} status={status} />
          )}
        </div>

        <div className="flex items-baseline gap-1.5 pt-1 min-h-[2.25rem]">
          <span className="text-2xl sm:text-3xl font-extrabold tracking-tight text-text-primary tabular-nums leading-none">
            {value}
          </span>
          {unit && <span className="text-xs font-semibold text-text-secondary tracking-tight">{unit}</span>}
        </div>
      </div>

      {subtext && (
        <p className="text-[11px] text-text-secondary pt-3 border-t border-border-subtle leading-relaxed">
          {subtext}
        </p>
      )}
    </div>
  )
}
