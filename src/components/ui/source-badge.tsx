'use client'

import * as React from 'react'
import { ProvenanceMetadata, SourceStatus } from '@/types/provenance'
import { ShieldCheck, Info, ExternalLink, Calendar, Scale, X } from 'lucide-react'
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
        return 'bg-emerald-50 text-emerald-700 border-emerald-200 hover:border-emerald-300'
      case 'UAE GOVERNMENT':
      case 'FTA OFFICIAL':
      case 'DET OFFICIAL':
      case 'OFFICIAL SOURCE':
        return 'bg-sky-50 text-[#0284c7] border-sky-200 hover:border-sky-300'
      case 'DEVELOPER SOURCE':
      case 'LICENSED OPERATOR':
        return 'bg-slate-50 text-slate-800 border-slate-200 hover:border-slate-300'
      case 'CALCULATED':
        return 'bg-sky-50 text-[#0369a1] border-sky-200 hover:border-sky-300'
      case 'PRICE ON REQUEST':
        return 'bg-slate-50 text-slate-600 border-slate-200'
      default:
        return 'bg-slate-50 text-slate-500 border-slate-200'
    }
  }

  return (
    <>
      <div
        className={cn(
          'inline-flex items-center gap-1.5 px-2 py-0.5 rounded-xs text-[10px] font-mono tracking-wider uppercase border transition-colors cursor-pointer select-none font-semibold',
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
          className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/60 backdrop-blur-sm p-4 animate-in fade-in duration-150"
          onClick={() => setIsOpen(false)}
        >
          <div
            className="bg-white rounded-xs shadow-2xl border border-slate-200 max-w-lg w-full p-6 space-y-4 text-left relative"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-start justify-between border-b border-slate-100 pb-3">
              <div>
                <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-[#0284c7] font-semibold">Data Provenance Record</span>
                <h3 className="text-base font-light text-slate-900 mt-0.5 flex items-center gap-2">
                  {effectiveSourceName}
                </h3>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="text-slate-400 hover:text-slate-900 p-1 rounded-xs hover:bg-slate-100 transition-colors cursor-pointer"
              >
                <X className="h-4 w-4" />
              </button>
            </div>

            <div className="space-y-3 text-xs text-slate-600">
              <div className="flex justify-between items-center py-1 border-b border-slate-100">
                <span className="font-mono text-slate-500">Verification Status:</span>
                <span className="font-mono text-[#0284c7] font-semibold">{effectiveStatus}</span>
              </div>

              {provenance?.legal_decree && (
                <div className="py-1 border-b border-slate-100 space-y-1">
                  <div className="flex items-center gap-1 font-mono text-slate-500">
                    <Scale className="h-3.5 w-3.5 text-[#0284c7]" />
                    <span>Statutory / Legal Basis:</span>
                  </div>
                  <p className="text-slate-900 font-light pl-4">{provenance.legal_decree}</p>
                </div>
              )}

              {provenance?.verified_at && (
                <div className="flex justify-between items-center py-1 border-b border-slate-100">
                  <span className="flex items-center gap-1 font-mono text-slate-500">
                    <Calendar className="h-3.5 w-3.5" />
                    <span>Last Verified:</span>
                  </span>
                  <span className="font-mono text-slate-900">{provenance.verified_at}</span>
                </div>
              )}

              {provenance?.conditions && (
                <div className="py-1 border-b border-slate-100 space-y-1">
                  <span className="font-mono text-slate-500">Applicable Conditions:</span>
                  <p className="text-slate-700 font-light">{provenance.conditions}</p>
                </div>
              )}

              {provenance?.notes && (
                <div className="py-1 border-b border-slate-100 space-y-1">
                  <span className="font-mono text-slate-500">Methodology &amp; Notes:</span>
                  <p className="text-slate-700 font-light">{provenance.notes}</p>
                </div>
              )}

              {provenance?.source_url && (
                <div className="pt-2">
                  <a
                    href={provenance.source_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-[#0284c7] hover:underline font-mono text-xs font-semibold"
                  >
                    <span>View Official Government / Authority Registry</span>
                    <ExternalLink className="h-3 w-3" />
                  </a>
                </div>
              )}
            </div>

            <div className="pt-2 flex justify-end">
              <button
                onClick={() => setIsOpen(false)}
                className="px-4 py-1.5 bg-slate-900 hover:bg-slate-800 text-white text-xs font-mono uppercase tracking-wider rounded-xs transition-colors cursor-pointer shadow-xs"
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
