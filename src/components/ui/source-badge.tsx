'use client'

import * as React from 'react'
import { ProvenanceMetadata, SourceStatus } from '@/types/provenance'
import { ShieldCheck, Info, ExternalLink, Calendar, Scale } from 'lucide-react'
import { cn } from '@/lib/utils'

interface SourceBadgeProps {
  provenance?: ProvenanceMetadata
  status?: SourceStatus
  sourceName?: string
  showDetailButton?: boolean
  className?: string
}

export function SourceBadge({
  provenance,
  status,
  sourceName,
  showDetailButton = true,
  className,
}: SourceBadgeProps) {
  const [isOpen, setIsOpen] = React.useState(false)

  const effectiveStatus: SourceStatus = status || provenance?.verification_status || 'NOT VERIFIED'
  const effectiveSourceName = sourceName || provenance?.source_name || 'Official Registry'

  const getStatusStyles = (st: SourceStatus) => {
    switch (st) {
      case 'DLD OFFICIAL DATA':
        return 'bg-emerald-50 text-emerald-800 border-emerald-200 hover:bg-emerald-100'
      case 'UAE GOVERNMENT':
      case 'FTA OFFICIAL':
      case 'DET OFFICIAL':
      case 'OFFICIAL SOURCE':
        return 'bg-slate-100 text-slate-800 border-slate-300 hover:bg-slate-200'
      case 'DEVELOPER SOURCE':
      case 'LICENSED OPERATOR':
        return 'bg-amber-50 text-amber-900 border-amber-200 hover:bg-amber-100'
      case 'CALCULATED':
        return 'bg-blue-50 text-blue-800 border-blue-200 hover:bg-blue-100'
      case 'PRICE ON REQUEST':
        return 'bg-neutral-100 text-neutral-700 border-neutral-300'
      default:
        return 'bg-zinc-100 text-zinc-700 border-zinc-200'
    }
  }

  return (
    <>
      <div
        className={cn(
          'inline-flex items-center gap-1.5 px-2 py-0.5 rounded text-[11px] font-medium tracking-tight border transition-colors cursor-pointer select-none',
          getStatusStyles(effectiveStatus),
          className
        )}
        onClick={() => {
          if (showDetailButton) setIsOpen(true)
        }}
        title="Click to view verified provenance and legal authority"
      >
        <ShieldCheck className="h-3 w-3 shrink-0" />
        <span className="truncate max-w-[180px]">{effectiveStatus}</span>
        {showDetailButton && <Info className="h-2.5 w-2.5 opacity-60 ml-0.5" />}
      </div>

      {isOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm p-4 animate-in fade-in duration-150"
          onClick={() => setIsOpen(false)}
        >
          <div
            className="bg-white rounded-xl shadow-2xl border border-border max-w-lg w-full p-6 space-y-4 text-left relative"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-start justify-between border-b border-border-subtle pb-3">
              <div>
                <span className="text-[10px] uppercase font-bold tracking-wider text-accent">Data Provenance Record</span>
                <h3 className="text-base font-semibold text-text-primary mt-0.5 flex items-center gap-2">
                  {effectiveSourceName}
                </h3>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="text-text-muted hover:text-text-primary text-sm p-1 rounded-md hover:bg-surface-elevated transition-colors"
              >
                ✕
              </button>
            </div>

            <div className="space-y-3 text-xs text-text-secondary">
              <div className="flex justify-between items-center py-1 border-b border-border-subtle">
                <span className="text-text-muted font-medium">Verification Status:</span>
                <span className="font-semibold text-text-primary">{effectiveStatus}</span>
              </div>

              {provenance?.legal_decree && (
                <div className="py-1 border-b border-border-subtle space-y-1">
                  <div className="flex items-center gap-1 text-text-muted font-medium">
                    <Scale className="h-3.5 w-3.5" />
                    <span>Statutory / Legal Basis:</span>
                  </div>
                  <p className="text-text-primary font-medium pl-4">{provenance.legal_decree}</p>
                </div>
              )}

              {provenance?.verified_at && (
                <div className="flex justify-between items-center py-1 border-b border-border-subtle">
                  <span className="flex items-center gap-1 text-text-muted font-medium">
                    <Calendar className="h-3.5 w-3.5" />
                    <span>Last Verified:</span>
                  </span>
                  <span className="text-text-primary">{provenance.verified_at}</span>
                </div>
              )}

              {provenance?.conditions && (
                <div className="py-1 border-b border-border-subtle space-y-1">
                  <span className="text-text-muted font-medium">Applicable Conditions:</span>
                  <p className="text-text-primary">{provenance.conditions}</p>
                </div>
              )}

              {provenance?.notes && (
                <div className="py-1 border-b border-border-subtle space-y-1">
                  <span className="text-text-muted font-medium">Methodology & Notes:</span>
                  <p className="text-text-primary">{provenance.notes}</p>
                </div>
              )}

              {provenance?.source_url && (
                <div className="pt-2">
                  <a
                    href={provenance.source_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-accent hover:underline font-medium text-xs"
                  >
                    <span>View Official Government / Authority Source</span>
                    <ExternalLink className="h-3 w-3" />
                  </a>
                </div>
              )}
            </div>

            <div className="pt-2 flex justify-end">
              <button
                onClick={() => setIsOpen(false)}
                className="px-4 py-1.5 bg-surface-elevated hover:bg-surface text-text-primary text-xs font-medium rounded-md border border-border transition-colors"
              >
                Close Record
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
