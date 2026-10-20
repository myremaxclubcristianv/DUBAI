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

  // Statutory DLD Oqood Registration under Dubai Law No. 13 of 2008:
  // 4% Registration Fee + AED 1,000 Oqood Certificate Fee + AED 10 Knowledge Fee + AED 10 Innovation Fee = 4% + AED 1,020
  const oqoodStatutoryFee = propertyPrice * 0.04
  const oqoodAdminTariffs = 1020
  const totalDldOqood = oqoodStatutoryFee + oqoodAdminTariffs

  const handleReconcile = () => {
    const remaining = Math.max(0, 100 - (reservationPct + constructionPct + postHandoverPct))
    setHandoverPct(remaining)
  }

  return (
    <div className="bg-white rounded-3xl border border-black/10 overflow-hidden shadow-sm">
      <div className="p-6 sm:p-8 border-b border-black/10 flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-white">
        <div>
          <div className="flex items-center gap-2">
            <Layers className="h-4 w-4 text-accent" />
            <h2 className="text-xl sm:text-2xl font-extrabold text-[#1d1d1f] tracking-tight">Off-Plan Milestone &amp; Cash Flow Engine</h2>
          </div>
          <p className="text-xs text-[#6e6e73] mt-1">
            Calculates developer milestone payments, DLD Oqood registration (Law 13/2008), and Escrow disbursements (Law 8/2007).
          </p>
        </div>
        <SourceBadge status="OFFICIAL SOURCE" sourceName="Dubai Law No. 13/2008 (Oqood Interim Register)" />
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
                  min={5}
                  max={50}
                  value={reservationPct}
                  onChange={(e) => setReservationPct(Number(e.target.value))}
                  className="w-full px-3.5 py-2.5 bg-white border border-black/10 rounded-xl text-xs text-[#1d1d1f] focus:outline-none focus:border-accent transition-colors font-mono"
                />
              </div>
              <div>
                <label className="block text-xs font-semibold text-[#1d1d1f] mb-1.5">During Construction (%)</label>
                <input
                  type="number"
                  min={0}
                  max={80}
                  value={constructionPct}
                  onChange={(e) => setConstructionPct(Number(e.target.value))}
                  className="w-full px-3.5 py-2.5 bg-white border border-black/10 rounded-xl text-xs text-[#1d1d1f] focus:outline-none focus:border-accent transition-colors font-mono"
                />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-semibold text-[#1d1d1f] mb-1.5">On Handover (%)</label>
                <input
                  type="number"
                  min={0}
                  max={80}
                  value={handoverPct}
                  onChange={(e) => setHandoverPct(Number(e.target.value))}
                  className="w-full px-3.5 py-2.5 bg-white border border-black/10 rounded-xl text-xs text-[#1d1d1f] focus:outline-none focus:border-accent transition-colors font-mono"
                />
              </div>
              <div>
                <label className="block text-xs font-semibold text-[#1d1d1f] mb-1.5">Post-Handover (%)</label>
                <input
                  type="number"
                  min={0}
                  max={60}
                  value={postHandoverPct}
                  onChange={(e) => setPostHandoverPct(Number(e.target.value))}
                  className="w-full px-3.5 py-2.5 bg-white border border-black/10 rounded-xl text-xs text-[#1d1d1f] focus:outline-none focus:border-accent transition-colors font-mono"
                />
              </div>
            </div>

            {totalPct !== 100 ? (
              <div className="p-3.5 rounded-2xl bg-amber-50 border border-amber-200 text-amber-900 text-xs flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                <span>
                  Sum of installments is <strong>{totalPct}%</strong> (must reconcile to 100%).
                </span>
                <button
                  type="button"
                  onClick={handleReconcile}
                  className="px-3 py-1 bg-amber-900 text-white rounded-lg text-[11px] font-mono font-bold whitespace-nowrap cursor-pointer hover:bg-amber-800"
                >
                  Reconcile Handover to {Math.max(0, 100 - (reservationPct + constructionPct + postHandoverPct))}%
                </button>
              </div>
            ) : (
              <div className="p-3 rounded-2xl bg-emerald-50 border border-emerald-200 text-emerald-900 text-xs font-mono flex items-center gap-1.5">
                <span>✓ Payment schedule reconciled: exactly 100% of purchase price.</span>
              </div>
            )}

            <div className="p-3.5 rounded-2xl bg-slate-50 border border-black/5 text-[11px] text-slate-600 space-y-1">
              <span className="font-bold text-slate-900 block">DLD Oqood Statutory Tariff Schedule:</span>
              <p>
                Dubai Law No. 13/2008 &amp; EC Res 30/2013: 4% statutory initial registration (AED {oqoodStatutoryFee.toLocaleString()}) + AED 1,000 Oqood certificate + AED 10 Knowledge Fee + AED 10 Innovation Fee (AED {oqoodAdminTariffs.toLocaleString()} total administrative tariffs).
              </p>
            </div>
          </div>
        </div>

        {/* Milestone Timeline */}
        <div className="lg:col-span-6 p-6 sm:p-8 space-y-4 bg-white">
          <h3 className="text-[11px] font-bold uppercase tracking-widest text-[#6e6e73]">Capital Outlay Timeline</h3>

          <div className="space-y-3">
            <div className="p-4 bg-white rounded-2xl border border-black/10 flex items-center justify-between shadow-sm">
              <div>
                <span className="text-[10px] font-bold text-accent uppercase tracking-widest">Milestone 1: Booking &amp; Oqood</span>
                <p className="text-xs text-[#6e6e73] mt-1">{reservationPct}% Down Payment + DLD Oqood Fee (Law 13/2008)</p>
              </div>
              <div className="text-right">
                <span className="font-mono font-bold text-[#1d1d1f] text-base">
                  AED {(reservationAmount + totalDldOqood).toLocaleString()}
                </span>
                <span className="text-[10px] text-[#6e6e73] block">Includes AED {totalDldOqood.toLocaleString()} Oqood</span>
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
                <span className="text-[10px] text-[#6e6e73] block">Held in DLD Escrow (Law 8/2007)</span>
              </div>
            </div>

            <div className="p-4 bg-white rounded-2xl border border-black/10 flex items-center justify-between shadow-sm">
              <div>
                <span className="text-[10px] font-bold text-[#1d1d1f] uppercase tracking-widest">Milestone 3: Key Handover</span>
                <p className="text-xs text-[#6e6e73] mt-1">{handoverPct}% Upon Completion Certificate &amp; Title Deed</p>
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
