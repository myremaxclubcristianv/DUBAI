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
    <div className="bg-[#0c0c0e] rounded-3xl border border-white/10 overflow-hidden shadow-2xl">
      <div className="p-6 sm:p-8 border-b border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-gradient-to-b from-white/[0.04] to-transparent">
        <div>
          <div className="flex items-center gap-2">
            <Layers className="h-4 w-4 text-accent" />
            <h2 className="text-xl sm:text-2xl font-semibold text-white tracking-tight">Off-Plan Milestone & Cash Flow Engine</h2>
          </div>
          <p className="text-xs text-zinc-400 mt-1">
            Calculates developer milestone payments, DLD Oqood registration fee, and post-handover schedules.
          </p>
        </div>
        <SourceBadge status="CALCULATED" sourceName="Developer Payment Plan Schedule" />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-0 divide-y lg:divide-y-0 lg:divide-x divide-white/10">
        {/* Input Parameters */}
        <div className="lg:col-span-6 p-6 sm:p-8 space-y-6 bg-white/[0.01]">
          <h3 className="text-[11px] font-bold uppercase tracking-widest text-zinc-400">Payment Plan Structure</h3>

          <div className="space-y-5">
            <div>
              <div className="flex justify-between text-xs mb-2">
                <span className="font-medium text-zinc-300">Off-Plan Purchase Price</span>
                <span className="font-mono text-accent font-semibold">AED {propertyPrice.toLocaleString()}</span>
              </div>
              <input
                type="range"
                min={1000000}
                max={30000000}
                step={100000}
                value={propertyPrice}
                onChange={(e) => setPropertyPrice(Number(e.target.value))}
                className="w-full accent-[#d4af37] bg-white/10 h-1.5 rounded-lg cursor-pointer appearance-none"
              />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-medium text-zinc-400 mb-1.5">Down Payment / Booking (%)</label>
                <input
                  type="number"
                  value={reservationPct}
                  onChange={(e) => setReservationPct(Number(e.target.value))}
                  className="w-full px-3.5 py-2.5 bg-white/[0.04] border border-white/10 rounded-xl text-xs text-white placeholder-zinc-400 focus:outline-none focus:border-accent/60 transition-colors font-mono"
                />
              </div>
              <div>
                <label className="block text-xs font-medium text-zinc-400 mb-1.5">During Construction (%)</label>
                <input
                  type="number"
                  value={constructionPct}
                  onChange={(e) => setConstructionPct(Number(e.target.value))}
                  className="w-full px-3.5 py-2.5 bg-white/[0.04] border border-white/10 rounded-xl text-xs text-white placeholder-zinc-400 focus:outline-none focus:border-accent/60 transition-colors font-mono"
                />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-medium text-zinc-400 mb-1.5">On Handover (%)</label>
                <input
                  type="number"
                  value={handoverPct}
                  onChange={(e) => setHandoverPct(Number(e.target.value))}
                  className="w-full px-3.5 py-2.5 bg-white/[0.04] border border-white/10 rounded-xl text-xs text-white placeholder-zinc-400 focus:outline-none focus:border-accent/60 transition-colors font-mono"
                />
              </div>
              <div>
                <label className="block text-xs font-medium text-zinc-400 mb-1.5">Post-Handover (%)</label>
                <input
                  type="number"
                  value={postHandoverPct}
                  onChange={(e) => setPostHandoverPct(Number(e.target.value))}
                  className="w-full px-3.5 py-2.5 bg-white/[0.04] border border-white/10 rounded-xl text-xs text-white placeholder-zinc-400 focus:outline-none focus:border-accent/60 transition-colors font-mono"
                />
              </div>
            </div>

            {totalPct !== 100 && (
              <div className="p-3 rounded-2xl bg-amber-500/10 border border-amber-500/20 text-amber-300 text-xs font-medium">
                Note: Sum of installments is currently {totalPct}% (must equal 100%).
              </div>
            )}
          </div>
        </div>

        {/* Milestone Timeline */}
        <div className="lg:col-span-6 p-6 sm:p-8 space-y-4 bg-black/40">
          <h3 className="text-[11px] font-bold uppercase tracking-widest text-zinc-400">Capital Outlay Timeline</h3>

          <div className="space-y-3">
            <div className="p-4 bg-white/[0.03] rounded-2xl border border-white/10 flex items-center justify-between">
              <div>
                <span className="text-[10px] font-bold text-accent uppercase tracking-widest">Milestone 1: Booking & Oqood</span>
                <p className="text-xs text-zinc-400 mt-1">{reservationPct}% Down Payment + DLD Oqood Transfer Fee</p>
              </div>
              <div className="text-right">
                <span className="font-mono font-semibold text-white text-base">
                  AED {(reservationAmount + dldFee).toLocaleString()}
                </span>
                <span className="text-[10px] text-zinc-400 block">Includes AED {dldFee.toLocaleString()} DLD</span>
              </div>
            </div>

            <div className="p-4 bg-white/[0.02] rounded-2xl border border-white/10 flex items-center justify-between">
              <div>
                <span className="text-[10px] font-bold text-zinc-300 uppercase tracking-widest">Milestone 2: Construction Phase</span>
                <p className="text-xs text-zinc-400 mt-1">{constructionPct}% Linked to RERA Construction Milestones</p>
              </div>
              <div className="text-right">
                <span className="font-mono font-medium text-white text-base">
                  AED {constructionAmount.toLocaleString()}
                </span>
                <span className="text-[10px] text-zinc-400 block">Held in DLD Escrow</span>
              </div>
            </div>

            <div className="p-4 bg-white/[0.02] rounded-2xl border border-white/10 flex items-center justify-between">
              <div>
                <span className="text-[10px] font-bold text-zinc-300 uppercase tracking-widest">Milestone 3: Key Handover</span>
                <p className="text-xs text-zinc-400 mt-1">{handoverPct}% Upon Completion Certificate & Title Deed</p>
              </div>
              <div className="text-right">
                <span className="font-mono font-medium text-white text-base">
                  AED {handoverAmount.toLocaleString()}
                </span>
              </div>
            </div>

            {postHandoverPct > 0 && (
              <div className="p-4 bg-accent/10 rounded-2xl border border-accent/20 flex items-center justify-between">
                <div>
                  <span className="text-[10px] font-bold text-accent uppercase tracking-widest">Milestone 4: Post-Handover</span>
                  <p className="text-xs text-zinc-400 mt-1">{postHandoverPct}% Spread post-completion</p>
                </div>
                <div className="text-right">
                  <span className="font-mono font-semibold text-accent text-base">
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
