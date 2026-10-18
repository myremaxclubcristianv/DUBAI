'use client'

import * as React from 'react'
import { X, ArrowUpRight, ShieldCheck, AlertTriangle, CreditCard } from 'lucide-react'
import { DevelopmentUnit } from '@/lib/data/developments'
import { UnitFloorPlan } from './unit-floor-plan'

interface UnitDetailModalProps {
  unit: DevelopmentUnit | null
  isOpen: boolean
  onClose: () => void
  onRequestInquiry: (unit: DevelopmentUnit) => void
}

export function UnitDetailModal({
  unit,
  isOpen,
  onClose,
  onRequestInquiry,
}: UnitDetailModalProps) {
  const [activeTab, setActiveTab] = React.useState<'specs' | 'floorplan'>('specs')

  // ESC key listener
  React.useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    }
    if (isOpen) {
      window.addEventListener('keydown', handleKeyDown)
    }
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [isOpen, onClose])

  if (!isOpen || !unit) return null

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto bg-slate-950/70 backdrop-blur-sm animate-in fade-in duration-200"
      role="dialog"
      aria-modal="true"
      aria-labelledby="unit-modal-title"
    >
      <div className="w-full max-w-4xl max-h-[92vh] flex flex-col bg-white border border-slate-200 shadow-2xl my-auto text-slate-900 rounded-xs overflow-hidden">
        {/* Header Bar */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-200 bg-gradient-to-r from-slate-900 via-slate-900 to-slate-800 text-white shrink-0">
          <div className="space-y-0.5">
            <div className="flex items-center gap-2">
              <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-[#b89648] font-bold">
                BRABUS ISLAND &bull; TOWER {unit.tower}
              </span>
              <span className="text-[9px] font-mono uppercase tracking-wider text-slate-300 bg-white/10 px-2 py-0.5 rounded-xs">
                {unit.unitType} &bull; Floor {unit.floor}
              </span>
            </div>
            <h2 id="unit-modal-title" className="text-xl sm:text-2xl font-semibold tracking-tight text-white font-sans">
              Residence {unit.unitNumber}
            </h2>
          </div>

          <button
            type="button"
            onClick={onClose}
            className="p-1.5 text-slate-400 hover:text-white hover:bg-white/10 rounded-xs transition-colors cursor-pointer"
            aria-label="Close unit modal"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* Tab Toggle Navigation */}
        <div className="flex items-center border-b border-slate-200 px-6 bg-slate-50 shrink-0">
          <button
            type="button"
            onClick={() => setActiveTab('specs')}
            className={`py-3 px-4 text-xs font-mono uppercase tracking-[0.12em] font-semibold transition-colors border-b-2 cursor-pointer ${
              activeTab === 'specs'
                ? 'border-[#0284c7] text-[#0284c7] bg-white'
                : 'border-transparent text-slate-600 hover:text-slate-950'
            }`}
          >
            Residence Specifications
          </button>
          <button
            type="button"
            onClick={() => setActiveTab('floorplan')}
            className={`py-3 px-4 text-xs font-mono uppercase tracking-[0.12em] font-semibold transition-colors border-b-2 cursor-pointer ${
              activeTab === 'floorplan'
                ? 'border-[#0284c7] text-[#0284c7] bg-white'
                : 'border-transparent text-slate-600 hover:text-slate-950'
            }`}
          >
            Architectural Floor Plan
          </button>
        </div>

        {/* Modal Scrollable Body */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-6">
          {activeTab === 'specs' ? (
            <div className="space-y-6">
              {/* Financial & Qualification Highlight */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="p-4 bg-slate-50 border border-slate-200 rounded-xs space-y-1.5">
                  <span className="text-[10px] font-mono uppercase tracking-[0.14em] text-slate-500 font-semibold block">
                    Investor Offer Price (AED)
                  </span>
                  <div className="flex items-baseline gap-2">
                    <span className="text-2xl sm:text-3xl font-semibold text-slate-950 font-sans tracking-tight">
                      AED {unit.investorPriceAedRounded.toLocaleString()}
                    </span>
                    <span className="text-[11px] font-mono text-slate-500">Rounded</span>
                  </div>
                  <div className="text-[11px] text-slate-600 font-mono pt-1">
                    Exact Workbook Price: AED {unit.investorPriceAed.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                  </div>
                  <div className="text-[10.5px] text-[#0284c7] font-mono pt-0.5">
                    Rate: ~AED {Math.round(unit.investorPriceAedRounded / unit.totalAreaSqFt).toLocaleString()} / sq ft
                  </div>
                </div>

                <div className="p-4 bg-slate-50 border border-slate-200 rounded-xs space-y-1.5">
                  <span className="text-[10px] font-mono uppercase tracking-[0.14em] text-slate-500 font-semibold block">
                    Orientation &amp; Outlook
                  </span>
                  <div className="text-lg font-semibold text-slate-950 font-sans">
                    {unit.view}
                  </div>
                  <div className="text-xs text-slate-600 leading-relaxed">
                    Tower {unit.tower} &bull; Level {unit.floor} &bull; {unit.subtype}
                  </div>
                  <div className="text-[10.5px] text-slate-500 font-mono pt-1">
                    Status: Listed on Investor Price Sheet
                  </div>
                </div>
              </div>

              {/* Discrepancy Callout if Unit A-1104 */}
              {unit.hasDiscrepancy && (
                <div className="p-4 bg-amber-50 border border-amber-200 rounded-xs flex items-start gap-3">
                  <AlertTriangle className="h-5 w-5 text-amber-700 shrink-0 mt-0.5" />
                  <div className="space-y-1">
                    <span className="text-xs font-mono uppercase tracking-wider font-bold text-amber-900 block">
                      Source Discrepancy Note (Preserved)
                    </span>
                    <p className="text-xs text-amber-800 leading-relaxed">
                      {unit.discrepancyNote}
                    </p>
                  </div>
                </div>
              )}

              {/* Area Metrics Table */}
              <div className="border border-slate-200 rounded-xs overflow-hidden">
                <div className="bg-slate-100 px-4 py-2.5 border-b border-slate-200">
                  <span className="font-mono text-[11px] uppercase tracking-wider font-semibold text-slate-700">
                    Dimensional Survey &amp; Area Breakdown
                  </span>
                </div>
                <table className="w-full text-left text-xs">
                  <thead className="bg-slate-50 text-slate-500 font-mono text-[10px] uppercase border-b border-slate-200">
                    <tr>
                      <th className="px-4 py-2.5">Zone</th>
                      <th className="px-4 py-2.5">Square Metres (m²)</th>
                      <th className="px-4 py-2.5">Square Feet (sq ft)</th>
                      <th className="px-4 py-2.5">Share of Total</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100 font-mono">
                    <tr>
                      <td className="px-4 py-2.5 font-sans font-medium text-slate-900">Internal Living Area</td>
                      <td className="px-4 py-2.5 font-semibold text-slate-900">{unit.internalAreaM2.toFixed(2)} m²</td>
                      <td className="px-4 py-2.5 text-slate-600">{unit.internalAreaSqFt.toFixed(2)} sq ft</td>
                      <td className="px-4 py-2.5 text-slate-500">
                        {Math.round((unit.internalAreaSqFt / unit.totalAreaSqFt) * 100)}%
                      </td>
                    </tr>
                    <tr>
                      <td className="px-4 py-2.5 font-sans font-medium text-slate-900">External Balcony / Terrace</td>
                      <td className="px-4 py-2.5 font-semibold text-slate-900">{unit.externalAreaM2.toFixed(2)} m²</td>
                      <td className="px-4 py-2.5 text-slate-600">{unit.externalAreaSqFt.toFixed(2)} sq ft</td>
                      <td className="px-4 py-2.5 text-slate-500">
                        {Math.round((unit.externalAreaSqFt / unit.totalAreaSqFt) * 100)}%
                      </td>
                    </tr>
                    <tr className="bg-slate-50/70 font-semibold">
                      <td className="px-4 py-2.5 font-sans text-slate-950">Total Gross Residence Area</td>
                      <td className="px-4 py-2.5 text-[#0284c7]">{unit.totalAreaM2.toFixed(2)} m²</td>
                      <td className="px-4 py-2.5 text-slate-900">{unit.totalAreaSqFt.toFixed(2)} sq ft</td>
                      <td className="px-4 py-2.5 text-slate-900">100%</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              {/* Investor Offer Terms & Guidelines */}
              <div className="p-4 bg-slate-50 border border-slate-200 rounded-xs space-y-2.5">
                <div className="flex items-center gap-2">
                  <CreditCard className="h-4 w-4 text-[#0284c7]" />
                  <span className="font-mono text-xs uppercase tracking-wider font-semibold text-slate-900">
                    Official Investor Terms &amp; Conditions
                  </span>
                </div>
                <ul className="text-xs text-slate-600 space-y-1.5 list-disc pl-5 leading-relaxed">
                  <li><strong>Investor offer only:</strong> Full payment required within 1 to 3 months.</li>
                  <li><strong>Price policy:</strong> NO 1% bulk discount / NO 1% for one-time payment.</li>
                  <li><strong>Assignment:</strong> NO flip or change of unit permitted under this offering.</li>
                  <li><strong>Parking:</strong> Parking price is AED 100,000 per allocated bay.</li>
                  <li><strong>Agency:</strong> Standard professional brokerage commission applies.</li>
                  <li><strong>Disclaimer:</strong> Prices and availability are subject to reconfirmation; not an unconditional public retail listing.</li>
                </ul>
              </div>

              {/* Quick Floor Plan Preview snippet */}
              <div className="border border-slate-200 rounded-xs p-4 bg-slate-50/50 space-y-3">
                <div className="flex items-center justify-between">
                  <div>
                    <span className="font-mono text-[10px] uppercase tracking-wider text-slate-500 font-semibold block">
                      Associated Layout
                    </span>
                    <span className="text-xs font-semibold text-slate-900 font-sans">
                      {unit.planLabel}
                    </span>
                  </div>
                  <button
                    type="button"
                    onClick={() => setActiveTab('floorplan')}
                    className="text-xs font-mono text-[#0284c7] hover:underline cursor-pointer"
                  >
                    View Architectural Schematic &rarr;
                  </button>
                </div>
              </div>
            </div>
          ) : (
            <div className="space-y-4">
              <UnitFloorPlan
                planId={unit.planId}
                unitNumber={unit.unitNumber}
                tower={unit.tower}
                floor={unit.floor}
                hasDiscrepancy={unit.hasDiscrepancy}
                discrepancyNote={unit.discrepancyNote}
                showLightboxButton={true}
              />
            </div>
          )}
        </div>

        {/* Modal Action Footer */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 px-6 py-4 border-t border-slate-200 bg-slate-50 shrink-0">
          <div className="flex items-center gap-2 text-xs text-slate-500 font-mono">
            <ShieldCheck className="h-4 w-4 text-[#0284c7]" />
            <span>Official Investor Intake &bull; Confidential Desk</span>
          </div>

          <div className="flex items-center gap-2 w-full sm:w-auto">
            <button
              type="button"
              onClick={onClose}
              className="w-1/2 sm:w-auto px-4 py-2 border border-slate-300 text-slate-700 hover:bg-slate-100 rounded-xs text-xs font-mono uppercase tracking-wider cursor-pointer"
            >
              Close
            </button>
            <button
              type="button"
              onClick={() => {
                onClose()
                onRequestInquiry(unit)
              }}
              className="w-1/2 sm:w-auto px-6 py-2 bg-[#0284c7] hover:bg-[#0369a1] text-white rounded-xs text-xs font-mono uppercase tracking-wider font-semibold cursor-pointer shadow-xs flex items-center justify-center gap-1.5"
            >
              <span>Inquire on Residence {unit.unitNumber}</span>
              <ArrowUpRight className="h-3.5 w-3.5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
