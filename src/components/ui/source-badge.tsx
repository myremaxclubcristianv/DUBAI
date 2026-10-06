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
        return 'bg-emerald-950/40 text-emerald-400 border-emerald-500/30 hover:border-emerald-500/50'
      case 'UAE GOVERNMENT':
      case 'FTA OFFICIAL':
      case 'DET OFFICIAL':
      case 'OFFICIAL SOURCE':
        return 'bg-slate-900/60 text-slate-300 border-slate-700 hover:border-slate-500'
      case 'DEVELOPER SOURCE':
      case 'LICENSED OPERATOR':
        return 'bg-[#181820] text-[#c9a962] border-[#c9a962]/30 hover:border-[#c9a962]/60'
      case 'CALCULATED':
        return 'bg-sky-950/40 text-sky-300 border-sky-500/30 hover:border-sky-500/50'
      case 'PRICE ON REQUEST':
        return 'bg-[#181820] text-[#a1a1aa] border-white/10'
      default:
        return 'bg-[#131318] text-[#8e8e93] border-white/10'
    }
  }

  return (
    <>
      <div
        className={cn(
          'inline-flex items-center gap-1.5 px-2 py-0.5 rounded-xs text-[10px] font-mono tracking-wider uppercase border transition-colors cursor-pointer select-none',
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
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-md p-4 animate-in fade-in duration-150"
          onClick={() => setIsOpen(false)}
        >
          <div
            className="bg-[#0d0d11] rounded-sm shadow-[0_10px_40px_rgba(0,0,0,0.8)] border border-white/15 max-w-lg w-full p-6 space-y-4 text-left relative"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-start justify-between border-b border-white/10 pb-3">
              <div>
                <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-[#c9a962] font-semibold">Data Provenance Record</span>
                <h3 className="text-base font-light text-[#f5f5f7] mt-0.5 flex items-center gap-2">
                  {effectiveSourceName}
                </h3>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="text-[#8e8e93] hover:text-[#f5f5f7] p-1 rounded-sm hover:bg-white/5 transition-colors cursor-pointer"
              >
                <X className="h-4 w-4" />
              </button>
            </div>

            <div className="space-y-3 text-xs text-[#a1a1aa]">
              <div className="flex justify-between items-center py-1 border-b border-white/10">
                <span className="font-mono text-[#8e8e93]">Verification Status:</span>
                <span className="font-mono text-[#c9a962] font-semibold">{effectiveStatus}</span>
              </div>

              {provenance?.legal_decree && (
                <div className="py-1 border-b border-white/10 space-y-1">
                  <div className="flex items-center gap-1 font-mono text-[#8e8e93]">
                    <Scale className="h-3.5 w-3.5 text-[#c9a962]" />
                    <span>Statutory / Legal Basis:</span>
                  </div>
                  <p className="text-[#f5f5f7] font-light pl-4">{provenance.legal_decree}</p>
                </div>
              )}

              {provenance?.verified_at && (
                <div className="flex justify-between items-center py-1 border-b border-white/10">
                  <span className="flex items-center gap-1 font-mono text-[#8e8e93]">
                    <Calendar className="h-3.5 w-3.5" />
                    <span>Last Verified:</span>
                  </span>
                  <span className="font-mono text-[#f5f5f7]">{provenance.verified_at}</span>
                </div>
              )}

              {provenance?.conditions && (
                <div className="py-1 border-b border-white/10 space-y-1">
                  <span className="font-mono text-[#8e8e93]">Applicable Conditions:</span>
                  <p className="text-[#c7c7cc] font-light">{provenance.conditions}</p>
                </div>
              )}

              {provenance?.notes && (
                <div className="py-1 border-b border-white/10 space-y-1">
                  <span className="font-mono text-[#8e8e93]">Methodology &amp; Notes:</span>
                  <p className="text-[#c7c7cc] font-light">{provenance.notes}</p>
                </div>
              )}

              {provenance?.source_url && (
                <div className="pt-2">
                  <a
                    href={provenance.source_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-[#c9a962] hover:underline font-mono text-xs"
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
                className="px-4 py-1.5 bg-[#181820] hover:bg-[#272733] text-[#f5f5f7] text-xs font-mono uppercase tracking-wider rounded-xs border border-white/10 transition-colors cursor-pointer"
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
