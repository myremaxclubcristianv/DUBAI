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

  // Statutory DLD transfer fee / Oqood registration
  const dldFee = propertyPrice * 0.04 + 520

  return (
    <div className="bg-white rounded-3xl border border-black/10 overflow-hidden shadow-sm">
      <div className="p-6 sm:p-8 border-b border-black/10 flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-[#f5f5f7]">
        <div>
          <div className="flex items-center gap-2">
            <Layers className="h-4 w-4 text-accent" />
            <h2 className="text-xl sm:text-2xl font-extrabold text-[#1d1d1f] tracking-tight">Off-Plan Milestone & Cash Flow Engine</h2>
          </div>
          <p className="text-xs text-[#6e6e73] mt-1">
            Calculates developer milestone payments, DLD Oqood registration fee, and post-handover schedules.
          </p>
        </div>
        <SourceBadge status="CALCULATED" sourceName="Developer Payment Plan Schedule" />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-0 divide-y lg:divide-y-0 lg:divide-x divide-black/10">
        {/* Input Parameters */}
        <div className="lg:col-span-6 p-6 sm:p-8 space-y-6 bg-white">
          <h3 className="text-[11px] font-bold uppercase tracking-widest text-[#6e6e73]">Payment Plan Structure</h3>

          <div className="space-y-5">
            <div>
              <div className="flex justify-between text-xs mb-2">
                <span className="font-semibold text-[#1d1d1f]">Off-Plan Purchase Price</span>
                <span className="font-mono text-accent font-bold">AED {propertyPrice.toLocaleString()}</span>
              </div>
              <input
                type="range"
                min={1000000}
                max={30000000}
                step={100000}
                value={propertyPrice}
                onChange={(e) => setPropertyPrice(Number(e.target.value))}
                className="w-full accent-[#1d1d1f] bg-black/10 h-1.5 rounded-lg cursor-pointer appearance-none"
              />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-semibold text-[#1d1d1f] mb-1.5">Down Payment / Booking (%)</label>
                <input
                  type="number"
                  value={reservationPct}
                  onChange={(e) => setReservationPct(Number(e.target.value))}
                  className="w-full px-3.5 py-2.5 bg-[#f5f5f7] border border-black/10 rounded-xl text-xs text-[#1d1d1f] focus:outline-none focus:border-accent transition-colors font-mono"
                />
              </div>
              <div>
                <label className="block text-xs font-semibold text-[#1d1d1f] mb-1.5">During Construction (%)</label>
                <input
                  type="number"
                  value={constructionPct}
                  onChange={(e) => setConstructionPct(Number(e.target.value))}
                  className="w-full px-3.5 py-2.5 bg-[#f5f5f7] border border-black/10 rounded-xl text-xs text-[#1d1d1f] focus:outline-none focus:border-accent transition-colors font-mono"
                />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-semibold text-[#1d1d1f] mb-1.5">On Handover (%)</label>
                <input
                  type="number"
                  value={handoverPct}
                  onChange={(e) => setHandoverPct(Number(e.target.value))}
                  className="w-full px-3.5 py-2.5 bg-[#f5f5f7] border border-black/10 rounded-xl text-xs text-[#1d1d1f] focus:outline-none focus:border-accent transition-colors font-mono"
                />
              </div>
              <div>
                <label className="block text-xs font-semibold text-[#1d1d1f] mb-1.5">Post-Handover (%)</label>
                <input
                  type="number"
                  value={postHandoverPct}
                  onChange={(e) => setPostHandoverPct(Number(e.target.value))}
                  className="w-full px-3.5 py-2.5 bg-[#f5f5f7] border border-black/10 rounded-xl text-xs text-[#1d1d1f] focus:outline-none focus:border-accent transition-colors font-mono"
                />
              </div>
            </div>

            {totalPct !== 100 && (
              <div className="p-3 rounded-2xl bg-amber-50 border border-amber-200 text-amber-800 text-xs font-medium">
                Note: Sum of installments is currently {totalPct}% (must equal 100%).
              </div>
            )}
          </div>
        </div>

        {/* Milestone Timeline */}
        <div className="lg:col-span-6 p-6 sm:p-8 space-y-4 bg-[#f5f5f7]">
          <h3 className="text-[11px] font-bold uppercase tracking-widest text-[#6e6e73]">Capital Outlay Timeline</h3>

          <div className="space-y-3">
            <div className="p-4 bg-white rounded-2xl border border-black/10 flex items-center justify-between shadow-sm">
              <div>
                <span className="text-[10px] font-bold text-accent uppercase tracking-widest">Milestone 1: Booking & Oqood</span>
                <p className="text-xs text-[#6e6e73] mt-1">{reservationPct}% Down Payment + DLD Oqood Transfer Fee</p>
              </div>
              <div className="text-right">
                <span className="font-mono font-bold text-[#1d1d1f] text-base">
                  AED {(reservationAmount + dldFee).toLocaleString()}
                </span>
                <span className="text-[10px] text-[#6e6e73] block">Includes AED {dldFee.toLocaleString()} DLD</span>
              </div>
            </div>

            <div className="p-4 bg-white rounded-2xl border border-black/10 flex items-center justify-between shadow-sm">
              <div>
                <span className="text-[10px] font-bold text-[#1d1d1f] uppercase tracking-widest">Milestone 2: Construction Phase</span>
                <p className="text-xs text-[#6e6e73] mt-1">{constructionPct}% Linked to RERA Construction Milestones</p>
              </div>
              <div className="text-right">
                <span className="font-mono font-semibold text-[#1d1d1f] text-base">
                  AED {constructionAmount.toLocaleString()}
                </span>
                <span className="text-[10px] text-[#6e6e73] block">Held in DLD Escrow</span>
              </div>
            </div>

            <div className="p-4 bg-white rounded-2xl border border-black/10 flex items-center justify-between shadow-sm">
              <div>
                <span className="text-[10px] font-bold text-[#1d1d1f] uppercase tracking-widest">Milestone 3: Key Handover</span>
                <p className="text-xs text-[#6e6e73] mt-1">{handoverPct}% Upon Completion Certificate & Title Deed</p>
              </div>
              <div className="text-right">
                <span className="font-mono font-semibold text-[#1d1d1f] text-base">
                  AED {handoverAmount.toLocaleString()}
                </span>
              </div>
            </div>

            {postHandoverPct > 0 && (
              <div className="p-4 bg-white rounded-2xl border border-[#c9a962]/40 flex items-center justify-between shadow-sm">
                <div>
                  <span className="text-[10px] font-bold text-accent uppercase tracking-widest">Milestone 4: Post-Handover</span>
                  <p className="text-xs text-[#6e6e73] mt-1">{postHandoverPct}% Spread post-completion</p>
                </div>
                <div className="text-right">
                  <span className="font-mono font-bold text-accent text-base">
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
