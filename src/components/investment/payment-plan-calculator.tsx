'use client'

import * as React from 'react'
import { SourceBadge } from '@/components/ui/source-badge'
import { Layers } from 'lucide-react'

export function PaymentPlanCalculator() {
  const [propertyPrice, setPropertyPrice] = React.useState<number>(5000000)
  const [reservationPct, setReservationPct] = React.useState<number>(20)
  const [constructionPct, setConstructionPct] = React.useState<number>(50)
  const [handoverPct, setHandoverPct] = React.useState<number>(30)
  const [postHandoverPct, setPostHandoverPct] = React.useState<number>(0)

  const totalPct = reservationPct + constructionPct + handoverPct + postHandoverPct

  const reservationAmount = (propertyPrice * reservationPct) / 100
  const constructionAmount = (propertyPrice * constructionPct) / 100
  const handoverAmount = (propertyPrice * handoverPct) / 100
  const postHandoverAmount = (propertyPrice * postHandoverPct) / 100

  // Statutory DLD transfer fee / Oqood registration (4% total transaction transfer fee or 2% buyer share subject to developer contract; standard modeling assumes 4% total registration outlay plus AED 520 document tariffs)
  const dldFee = propertyPrice * 0.04 + 520

  return (
    <div className="bg-white rounded-xl border border-border overflow-hidden">
      <div className="p-6 border-b border-border flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2">
            <Layers className="h-5 w-5 text-accent" />
            <h2 className="text-xl font-bold text-text-primary">Off-Plan Milestone & Cash Flow Engine</h2>
          </div>
          <p className="text-xs text-text-secondary mt-1">
            Calculates developer milestone payments, DLD Oqood registration fee, and post-handover schedules.
          </p>
        </div>
        <SourceBadge status="CALCULATED" sourceName="Developer Payment Plan Schedule" />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-0 divide-y lg:divide-y-0 lg:divide-x divide-border">
        {/* Input Parameters */}
        <div className="lg:col-span-6 p-6 space-y-4 bg-surface-subtle">
          <h3 className="text-xs font-bold uppercase tracking-wider text-text-muted">Payment Plan Structure</h3>

          <div>
            <div className="flex justify-between text-xs mb-1">
              <span className="font-semibold text-text-primary">Off-Plan Purchase Price (AED)</span>
              <span className="font-mono text-accent font-bold">AED {propertyPrice.toLocaleString()}</span>
            </div>
            <input
              type="range"
              min={1000000}
              max={30000000}
              step={100000}
              value={propertyPrice}
              onChange={(e) => setPropertyPrice(Number(e.target.value))}
              className="w-full accent-accent cursor-pointer"
            />
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="block text-xs font-semibold text-text-primary mb-1">Down Payment / Booking (%)</label>
              <input
                type="number"
                value={reservationPct}
                onChange={(e) => setReservationPct(Number(e.target.value))}
                className="w-full px-3 py-2 bg-white border border-border rounded-md text-xs text-text-primary"
              />
            </div>
            <div>
              <label className="block text-xs font-semibold text-text-primary mb-1">During Construction (%)</label>
              <input
                type="number"
                value={constructionPct}
                onChange={(e) => setConstructionPct(Number(e.target.value))}
                className="w-full px-3 py-2 bg-white border border-border rounded-md text-xs text-text-primary"
              />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="block text-xs font-semibold text-text-primary mb-1">On Handover (%)</label>
              <input
                type="number"
                value={handoverPct}
                onChange={(e) => setHandoverPct(Number(e.target.value))}
                className="w-full px-3 py-2 bg-white border border-border rounded-md text-xs text-text-primary"
              />
            </div>
            <div>
              <label className="block text-xs font-semibold text-text-primary mb-1">Post-Handover (%)</label>
              <input
                type="number"
                value={postHandoverPct}
                onChange={(e) => setPostHandoverPct(Number(e.target.value))}
                className="w-full px-3 py-2 bg-white border border-border rounded-md text-xs text-text-primary"
              />
            </div>
          </div>

          {totalPct !== 100 && (
            <div className="p-2.5 rounded bg-amber-50 border border-amber-200 text-amber-900 text-xs font-medium">
              Note: Sum of installments is currently {totalPct}% (must equal 100%).
            </div>
          )}
        </div>

        {/* Milestone Timeline */}
        <div className="lg:col-span-6 p-6 space-y-4">
          <h3 className="text-xs font-bold uppercase tracking-wider text-text-muted">Capital Outlay Timeline</h3>

          <div className="space-y-3">
            <div className="p-3 bg-surface rounded-lg border border-border flex items-center justify-between">
              <div>
                <span className="text-[11px] font-bold text-accent uppercase">Milestone 1: Booking & Oqood</span>
                <p className="text-xs text-text-secondary mt-0.5">{reservationPct}% Down Payment + DLD Oqood Transfer Fee</p>
              </div>
              <div className="text-right">
                <span className="font-mono font-bold text-text-primary text-sm">
                  AED {(reservationAmount + dldFee).toLocaleString()}
                </span>
                <span className="text-[10px] text-text-muted block">Includes AED {dldFee.toLocaleString()} DLD</span>
              </div>
            </div>

            <div className="p-3 bg-surface rounded-lg border border-border flex items-center justify-between">
              <div>
                <span className="text-[11px] font-bold text-text-primary uppercase">Milestone 2: Construction Phase</span>
                <p className="text-xs text-text-secondary mt-0.5">{constructionPct}% Linked to RERA Construction Milestones</p>
              </div>
              <div className="text-right">
                <span className="font-mono font-bold text-text-primary text-sm">
                  AED {constructionAmount.toLocaleString()}
                </span>
                <span className="text-[10px] text-text-muted block">Held in DLD Escrow</span>
              </div>
            </div>

            <div className="p-3 bg-surface rounded-lg border border-border flex items-center justify-between">
              <div>
                <span className="text-[11px] font-bold text-text-primary uppercase">Milestone 3: Key Handover</span>
                <p className="text-xs text-text-secondary mt-0.5">{handoverPct}% Upon Completion Certificate & Title Deed</p>
              </div>
              <div className="text-right">
                <span className="font-mono font-bold text-text-primary text-sm">
                  AED {handoverAmount.toLocaleString()}
                </span>
              </div>
            </div>

            {postHandoverPct > 0 && (
              <div className="p-3 bg-accent-subtle rounded-lg border border-accent-border flex items-center justify-between">
                <div>
                  <span className="text-[11px] font-bold text-accent uppercase">Milestone 4: Post-Handover</span>
                  <p className="text-xs text-text-secondary mt-0.5">{postHandoverPct}% Spread post-completion</p>
                </div>
                <div className="text-right">
                  <span className="font-mono font-bold text-accent text-sm">
                    AED {postHandoverAmount.toLocaleString()}
                  </span>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
