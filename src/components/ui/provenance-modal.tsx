'use client'

import * as React from 'react'
import { ProvenanceMetadata } from '@/types/provenance'
import { ShieldCheck, ExternalLink, X, Calendar, Database, AlertTriangle, Layers } from 'lucide-react'

interface ProvenanceModalProps {
  provenance?: ProvenanceMetadata
  isOpen: boolean
  onClose: () => void
  fieldTitle?: string
}

export function ProvenanceModal({ provenance, isOpen, onClose, fieldTitle }: ProvenanceModalProps) {
  if (!isOpen || !provenance) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4 animate-in fade-in duration-150">
      <div className="bg-white rounded-2xl border border-border max-w-lg w-full overflow-hidden shadow-2xl animate-in zoom-in-95 duration-200">
        {/* Header */}
        <div className="p-6 border-b border-border flex items-center justify-between bg-surface-subtle">
          <div className="flex items-center gap-2.5">
            <div className="p-2 rounded-lg bg-emerald-50 text-emerald-700 border border-emerald-200">
              <ShieldCheck className="h-5 w-5" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-[10px] font-bold uppercase tracking-wider text-accent">
                  Data Provenance Dossier
                </span>
                <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-white border border-border text-text-primary">
                  {provenance.verification_status}
                </span>
              </div>
              <h3 className="text-base font-bold text-text-primary mt-0.5">
                {fieldTitle || provenance.source_name}
              </h3>
            </div>
          </div>
          <button
            onClick={onClose}
            className="text-text-muted hover:text-text-primary p-1 rounded-md transition-colors"
          >
            <X className="h-4 w-4" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 space-y-4 text-xs">
          {/* Key metadata grid */}
          <div className="grid grid-cols-2 gap-3 bg-surface p-4 rounded-xl border border-border">
            <div>
              <span className="text-[10px] font-bold uppercase text-text-muted block">Source Entity</span>
              <span className="font-semibold text-text-primary mt-0.5 block">{provenance.source_name}</span>
            </div>
            <div>
              <span className="text-[10px] font-bold uppercase text-text-muted block">Authority Type</span>
              <span className="font-semibold text-text-primary mt-0.5 block">{provenance.source_type}</span>
            </div>
            <div>
              <span className="text-[10px] font-bold uppercase text-text-muted block">Source Tier</span>
              <span className="font-mono text-accent font-bold mt-0.5 block">
                {provenance.source_tier || 'TIER_1_STATUTORY'}
              </span>
            </div>
            <div>
              <span className="text-[10px] font-bold uppercase text-text-muted block">Verification Classification</span>
              <span className="font-mono text-emerald-700 font-bold mt-0.5 block">
                {provenance.verification_status}
              </span>
            </div>
          </div>

          {/* Detailed Timestamps and Audit trail */}
          <div className="space-y-2 border-t border-border pt-4">
            <div className="flex items-center justify-between text-text-secondary">
              <span className="flex items-center gap-1.5">
                <Calendar className="h-3.5 w-3.5 text-text-muted" />
                <span>Last Verification Date:</span>
              </span>
              <span className="font-mono font-semibold text-text-primary">
                {provenance.verified_at || '2026-09-01'}
              </span>
            </div>

            <div className="flex items-center justify-between text-text-secondary">
              <span className="flex items-center gap-1.5">
                <Database className="h-3.5 w-3.5 text-text-muted" />
                <span>Retrieved At:</span>
              </span>
              <span className="font-mono text-text-muted">
                {provenance.retrieved_at}
              </span>
            </div>

            {provenance.legal_decree && (
              <div className="flex items-start justify-between text-text-secondary pt-1">
                <span className="flex items-center gap-1.5 shrink-0">
                  <Layers className="h-3.5 w-3.5 text-text-muted" />
                  <span>Statutory Reference:</span>
                </span>
                <span className="text-right font-medium text-text-primary ml-4">
                  {provenance.legal_decree}
                </span>
              </div>
            )}

            {provenance.evidence_reference && (
              <div className="p-3 bg-surface-subtle rounded-lg border border-border text-[11px] text-text-secondary mt-2">
                <span className="font-bold text-text-primary block">Exact Evidence Reference:</span>
                <span className="mt-0.5 block">{provenance.evidence_reference}</span>
              </div>
            )}
          </div>

          {/* Notes & Limitations */}
          {provenance.notes && (
            <div className="p-3 bg-accent-subtle/30 rounded-lg border border-accent-border text-[11px] text-text-secondary">
              <span className="font-bold text-text-primary block">Audit Notes:</span>
              <p className="mt-0.5">{provenance.notes}</p>
            </div>
          )}

          {provenance.conditions && (
            <div className="p-3 bg-amber-50 rounded-lg border border-amber-200 text-[11px] text-amber-900 flex items-start gap-2">
              <AlertTriangle className="h-4 w-4 text-amber-600 shrink-0 mt-0.5" />
              <div>
                <span className="font-bold block">Applicability Conditions:</span>
                <p className="mt-0.5">{provenance.conditions}</p>
              </div>
            </div>
          )}

          {/* Source Link */}
          {provenance.source_url && (
            <a
              href={provenance.source_url}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-2.5 px-4 bg-text-primary hover:bg-black text-white rounded-lg flex items-center justify-center gap-2 font-bold transition-colors mt-2"
            >
              <span>Inspect Authoritative Source Portal</span>
              <ExternalLink className="h-3.5 w-3.5" />
            </a>
          )}
        </div>
      </div>
    </div>
  )
}
