'use client'

import * as React from 'react'
import Link from 'next/link'
import { useToast } from '@/components/ui/toast'
import {
  CheckCircle2,
  Lock,
} from 'lucide-react'

export default function PrivateClientPage() {
  const { addToast } = useToast()

  const [fullName, setFullName] = React.useState('')
  const [email, setEmail] = React.useState('')
  const [phone, setPhone] = React.useState('')
  const [mandateScope, setMandateScope] = React.useState('ACQUISITION')
  const [capitalAllocation, setCapitalAllocation] = React.useState('10M_25M')
  const [notes, setNotes] = React.useState('')
  const [isSubmitted, setIsSubmitted] = React.useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    if (!fullName.trim() || !email.trim() || !phone.trim()) {
      addToast('Please complete all required fields.', 'error')
      return
    }

    setIsSubmitted(true)
    addToast('Private client consultation request registered successfully.', 'success')
  }

  return (
    <div className="bg-[#ffffff] text-[#111111] min-h-screen pb-24">
      
      {/* 1. EDITORIAL HEADER */}
      <section className="pt-12 pb-12 sm:pt-16 sm:pb-16 border-b border-[#e5e5ea] bg-[#fafaf8]">
        <div className="w-full max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          <div className="flex items-center justify-between">
            <span className="text-[10px] font-mono font-bold uppercase tracking-[0.2em] text-[#9f8144]">
              PRIVATE CLIENT ADVISORY &bull; CONFIDENTIAL DESK
            </span>
            <span className="text-[10px] font-mono text-[#6b6b6b] uppercase">Discreet Engagement</span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-[#111111]">
            Private Client Desk
          </h1>
          
          <p className="text-sm sm:text-base text-[#484848] max-w-2xl leading-relaxed">
            For principals, investors and family offices seeking a more structured, factual way to navigate Dubai real estate acquisitions, capital underwriting, and sovereign residency.
          </p>
        </div>
      </section>

      {/* 2. ADVISORY SCOPE & INTAKE COMPOSITION */}
      <main className="w-full max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left 50%: Structured Advisory Services */}
          <div className="lg:col-span-6 space-y-8">
            <div className="space-y-2">
              <span className="text-[10px] font-mono uppercase text-[#9f8144] font-semibold">
                OUR MANDATE PRACTICE
              </span>
              <h2 className="text-2xl font-semibold text-[#111111]">
                Structured Private Advisory
              </h2>
              <p className="text-xs sm:text-sm text-[#484848] leading-relaxed">
                We operate as a private client research and advisory platform. Our practice is anchored in published statutory records, DLD title verification, and transparent mathematical modeling.
              </p>
            </div>

            <div className="space-y-4">
              <div className="p-4 rounded border border-[#e5e5ea] bg-[#fafaf8] space-y-1.5">
                <div className="text-xs font-semibold text-[#111111] flex items-center gap-2">
                  <span className="text-[#9f8144] font-bold">01</span>
                  <span>Property Acquisition &amp; Dossier Curation</span>
                </div>
                <p className="text-xs text-[#484848] leading-relaxed pl-5">
                  Direct developer inventory verification, DLD title provenance audit, and physical viewing coordination for prime freehold assets.
                </p>
              </div>

              <div className="p-4 rounded border border-[#e5e5ea] bg-[#fafaf8] space-y-1.5">
                <div className="text-xs font-semibold text-[#111111] flex items-center gap-2">
                  <span className="text-[#9f8144] font-bold">02</span>
                  <span>Capital &amp; Statutory Underwriting</span>
                </div>
                <p className="text-xs text-[#484848] leading-relaxed pl-5">
                  Deterministic closing cost schedules (4% combined DLD sale registration + statutory admin), Mollak service charge audits, and debt-service sensitivity models.
                </p>
              </div>

              <div className="p-4 rounded border border-[#e5e5ea] bg-[#fafaf8] space-y-1.5">
                <div className="text-xs font-semibold text-[#111111] flex items-center gap-2">
                  <span className="text-[#9f8144] font-bold">03</span>
                  <span>Residency &amp; Golden Visa Conveyancing</span>
                </div>
                <p className="text-xs text-[#484848] leading-relaxed pl-5">
                  Statutory 10-year Golden Visa application filing via DLD Cube, DHA medical fitness scheduling, and family dependent attestation.
                </p>
              </div>

              <div className="p-4 rounded border border-[#e5e5ea] bg-[#fafaf8] space-y-1.5">
                <div className="text-xs font-semibold text-[#111111] flex items-center gap-2">
                  <span className="text-[#9f8144] font-bold">04</span>
                  <span>Transaction Coordination &amp; Escrow Verification</span>
                </div>
                <p className="text-xs text-[#484848] leading-relaxed pl-5">
                  Conveyancing coordination through accredited DLD Registration Trustee centers and Law No. 8 of 2007 escrow account validation.
                </p>
              </div>

              <div className="p-4 rounded border border-[#e5e5ea] bg-[#fafaf8] space-y-1.5">
                <div className="text-xs font-semibold text-[#111111] flex items-center gap-2">
                  <span className="text-[#9f8144] font-bold">05</span>
                  <span>Private Institutional Introductions</span>
                </div>
                <p className="text-xs text-[#484848] leading-relaxed pl-5">
                  Discreet connectivity to licensed Tier-1 UAE private banking desks, corporate structuring advisors, and DIFC legal counsels.
                </p>
              </div>
            </div>

            <div className="p-4 rounded bg-[#ffffff] border border-[#e5e5ea] text-xs font-mono text-[#6b6b6b] flex items-center gap-2">
              <Lock className="h-3.5 w-3.5 text-[#9f8144] shrink-0" />
              <span>Strict non-disclosure protocols apply to all principal mandates.</span>
            </div>
          </div>

          {/* Right 50%: Confidential Intake Form */}
          <div className="lg:col-span-6 bg-[#fafaf8] p-6 sm:p-8 rounded border border-[#e5e5ea]">
            {isSubmitted ? (
              <div className="py-12 text-center space-y-4">
                <CheckCircle2 className="h-12 w-12 text-emerald-700 mx-auto" />
                <h3 className="text-2xl font-semibold text-[#111111]">
                  Mandate Brief Received
                </h3>
                <p className="text-xs sm:text-sm text-[#484848] max-w-md mx-auto leading-relaxed">
                  Thank you, <strong>{fullName}</strong>. A senior private client director will review your parameters and initiate confidential correspondence within 24 hours.
                </p>
                <div className="pt-4">
                  <Link
                    href="/"
                    className="px-5 py-2.5 rounded bg-[#111111] text-[#fafaf8] text-xs font-medium inline-block"
                  >
                    Return to Platform Home
                  </Link>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="border-b border-[#e5e5ea] pb-3">
                  <h3 className="text-lg font-semibold text-[#111111]">
                    Start a Private Conversation
                  </h3>
                  <p className="text-xs text-[#6b6b6b]">
                    Provide your initial parameters to structure our preliminary memorandum.
                  </p>
                </div>

                {/* Primary Mandate Scope */}
                <div className="space-y-1.5">
                  <label className="text-xs font-semibold text-[#111111]">Primary Advisory Scope</label>
                  <select
                    value={mandateScope}
                    onChange={(e) => setMandateScope(e.target.value)}
                    className="w-full p-2.5 bg-[#ffffff] border border-[#e5e5ea] rounded text-xs text-[#111111] focus:outline-none focus:border-[#111111]"
                  >
                    <option value="ACQUISITION">Property Acquisition &amp; Title Verification</option>
                    <option value="UNDERWRITING">Investment Intelligence &amp; Capital Modeling</option>
                    <option value="GOLDEN_VISA">10-Year Golden Visa Residency Coordination</option>
                    <option value="DISPOSAL">Asset Divestment &amp; Transaction Conveyancing</option>
                    <option value="COMPREHENSIVE">Comprehensive Family Office Mandate</option>
                  </select>
                </div>

                {/* Capital Allocation */}
                <div className="space-y-1.5">
                  <label className="text-xs font-semibold text-[#111111]">Target Capital Allocation</label>
                  <select
                    value={capitalAllocation}
                    onChange={(e) => setCapitalAllocation(e.target.value)}
                    className="w-full p-2.5 bg-[#ffffff] border border-[#e5e5ea] rounded text-xs text-[#111111] focus:outline-none focus:border-[#111111]"
                  >
                    <option value="SUB_5M">AED 2,000,000 – 5,000,000 (Golden Visa Baseline)</option>
                    <option value="5M_10M">AED 5,000,000 – 10,000,000</option>
                    <option value="10M_25M">AED 10,000,000 – 25,000,000 (Prime Freehold)</option>
                    <option value="25M_50M">AED 25,000,000 – 50,000,000 (Trophy Residential)</option>
                    <option value="ABOVE_50M">AED 50,000,000+ (Ultra-Prime Estates &amp; Mansions)</option>
                  </select>
                </div>

                {/* Contact Fields */}
                <div className="space-y-3 pt-2 border-t border-[#e5e5ea]">
                  <div className="space-y-1">
                    <label className="text-xs font-semibold text-[#111111]">Principal / Representative Name *</label>
                    <input
                      type="text"
                      required
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
                      placeholder="e.g. Alexander Vance"
                      className="w-full p-2.5 bg-[#ffffff] border border-[#e5e5ea] rounded text-xs text-[#111111] focus:outline-none focus:border-[#111111]"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div className="space-y-1">
                      <label className="text-xs font-semibold text-[#111111]">Corporate / Private Email *</label>
                      <input
                        type="email"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="principal@familyoffice.com"
                        className="w-full p-2.5 bg-[#ffffff] border border-[#e5e5ea] rounded text-xs text-[#111111] focus:outline-none focus:border-[#111111]"
                      />
                    </div>
                    <div className="space-y-1">
                      <label className="text-xs font-semibold text-[#111111]">Telephone / WhatsApp *</label>
                      <input
                        type="tel"
                        required
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        placeholder="+971 50 000 0000"
                        className="w-full p-2.5 bg-[#ffffff] border border-[#e5e5ea] rounded text-xs text-[#111111] focus:outline-none focus:border-[#111111]"
                      />
                    </div>
                  </div>

                  <div className="space-y-1">
                    <label className="text-xs font-semibold text-[#111111]">Mandate Details / Specific Objectives</label>
                    <textarea
                      rows={3}
                      value={notes}
                      onChange={(e) => setNotes(e.target.value)}
                      placeholder="Specify preferred districts (e.g. Palm Jumeirah, Downtown), timeline, or corporate structuring requirements..."
                      className="w-full p-2.5 bg-[#ffffff] border border-[#e5e5ea] rounded text-xs text-[#111111] focus:outline-none focus:border-[#111111]"
                    />
                  </div>
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    className="w-full py-3 rounded bg-[#111111] hover:bg-[#2a2a2e] text-[#fafaf8] text-xs font-medium tracking-tight transition-colors cursor-pointer"
                  >
                    Register Advisory Mandate Brief &rarr;
                  </button>
                </div>
              </form>
            )}
          </div>

        </div>
      </main>

    </div>
  )
}
