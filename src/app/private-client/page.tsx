'use client'

import * as React from 'react'
import {
  Eyebrow,
  PrimaryLink,
} from '@/components/layout/layout-primitives'
import { ArrowRight, CheckCircle2, Lock } from 'lucide-react'

export default function PrivateClientPage() {
  const [step, setStep] = React.useState<1 | 2 | 3>(1)
  const [mandateType, setMandateType] = React.useState('ACQUISITION')
  const [allocationTier, setAllocationTier] = React.useState('10M_25M')
  const [fullName, setFullName] = React.useState('')
  const [email, setEmail] = React.useState('')
  const [phone, setPhone] = React.useState('')
  const [notes, setNotes] = React.useState('')
  const [isSubmitted, setIsSubmitted] = React.useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitted(true)
  }

  return (
    <div className="flex flex-col min-h-screen bg-[#ffffff] text-[#111111]">
      
      {/* 1. QUIET EDITORIAL HEADER */}
      <section className="pt-24 pb-20 sm:pt-36 sm:pb-28 border-b border-[#e5e5ea] bg-[#fafaf8]">
        <div className="w-full max-w-[880px] mx-auto px-6 sm:px-10 space-y-8 text-left sm:text-center">
          <Eyebrow className="text-left sm:text-center">PRIVATE CLIENT ADVISORY</Eyebrow>
          
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-light tracking-[-0.035em] leading-[1.02] text-[#111111]">
            A more discreet<br />way to acquire.
          </h1>

          <p className="text-lg sm:text-xl text-[#6b6b6b] font-light max-w-xl mx-auto leading-relaxed">
            Direct institutional advisory for family offices, sovereign principals, and private clients seeking off-market acquisitions and bespoke Golden Visa structuring in Dubai.
          </p>
        </div>
      </section>

      {/* 2. APPLE-GRADE PROGRESSIVE FORM DESK */}
      <main className="w-full max-w-[880px] mx-auto px-6 sm:px-10 py-20 sm:py-28 flex-1">
        
        {isSubmitted ? (
          <div className="py-16 text-center space-y-6 max-w-md mx-auto">
            <div className="w-16 h-16 rounded-full bg-emerald-50 border border-emerald-200 flex items-center justify-center mx-auto">
              <CheckCircle2 className="h-8 w-8 text-emerald-800" />
            </div>
            
            <div className="space-y-2">
              <h2 className="text-3xl font-light text-[#111111]">
                Mandate Registered
              </h2>
              <p className="text-sm text-[#6b6b6b] font-light leading-relaxed">
                Thank you, <strong>{fullName}</strong>. A senior private client advisor will initiate confidential correspondence to your designated contact within 24 hours.
              </p>
            </div>

            <div className="pt-4">
              <PrimaryLink href="/" className="px-8 py-3.5">
                Return to Dubai Home
              </PrimaryLink>
            </div>
          </div>
        ) : (
          <div className="space-y-12">
            
            {/* Step Indicators */}
            <div className="flex items-center justify-between border-b border-[#e5e5ea] pb-6 text-xs font-mono">
              <span className={step === 1 ? 'text-[#111111] font-semibold' : 'text-[#8e8e93]'}>
                01 &bull; Scope &amp; Allocation
              </span>
              <span className={step === 2 ? 'text-[#111111] font-semibold' : 'text-[#8e8e93]'}>
                02 &bull; Principal Details
              </span>
            </div>

            <form onSubmit={handleSubmit} className="space-y-10">
              
              {step === 1 && (
                <div className="space-y-10">
                  <div className="space-y-3">
                    <label className="text-lg sm:text-2xl font-light text-[#111111] block">
                      Select your primary mandate scope:
                    </label>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {[
                        { id: 'ACQUISITION', title: 'Property Acquisition', desc: 'Curated prime freehold and off-market penthouses' },
                        { id: 'UNDERWRITING', title: 'Investment Underwriting', desc: 'Deterministic financial modeling and yield audit' },
                        { id: 'GOLDEN_VISA', title: 'Golden Visa Conveyancing', desc: '10-Year residency and DLD Cube coordination' },
                        { id: 'COMPREHENSIVE', title: 'Family Office Mandate', desc: 'Holistic portfolio and legal advisory' },
                      ].map((item) => (
                        <button
                          type="button"
                          key={item.id}
                          onClick={() => setMandateType(item.id)}
                          className={`p-6 rounded-2xl text-left border transition-all cursor-pointer ${
                            mandateType === item.id
                              ? 'border-[#111111] bg-[#fafaf8]'
                              : 'border-[#e5e5ea] hover:border-[#111111]/40'
                          }`}
                        >
                          <span className="text-base font-medium text-[#111111] block">{item.title}</span>
                          <span className="text-xs text-[#6b6b6b] font-light block mt-1">{item.desc}</span>
                        </button>
                      ))}
                    </div>
                  </div>

                  <div className="space-y-3 pt-4 border-t border-[#e5e5ea]">
                    <label className="text-lg sm:text-2xl font-light text-[#111111] block">
                      Target capital allocation (AED):
                    </label>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                      {[
                        { id: 'SUB_10M', label: 'AED 2M – 10M' },
                        { id: '10M_25M', label: 'AED 10M – 25M' },
                        { id: 'ABOVE_25M', label: 'AED 25M+' },
                      ].map((item) => (
                        <button
                          type="button"
                          key={item.id}
                          onClick={() => setAllocationTier(item.id)}
                          className={`p-4 rounded-xl text-center border font-mono text-xs transition-all cursor-pointer ${
                            allocationTier === item.id
                              ? 'border-[#111111] bg-[#111111] text-[#fafaf8] font-bold'
                              : 'border-[#e5e5ea] text-[#6b6b6b] hover:border-[#111111]'
                          }`}
                        >
                          {item.label}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div className="pt-4 flex justify-end">
                    <button
                      type="button"
                      onClick={() => setStep(2)}
                      className="px-8 py-4 rounded-full bg-[#111111] text-[#fafaf8] text-xs font-medium tracking-tight flex items-center gap-2 hover:bg-[#242428] transition-colors cursor-pointer"
                    >
                      <span>Continue to Principal Details</span>
                      <ArrowRight className="h-3.5 w-3.5" />
                    </button>
                  </div>
                </div>
              )}

              {step === 2 && (
                <div className="space-y-8">
                  <div className="space-y-2">
                    <h2 className="text-2xl font-light text-[#111111]">
                      Principal Contact Credentials
                    </h2>
                    <p className="text-xs text-[#6b6b6b]">
                      Discreet direct communication line. Information is processed under confidential advisory protocol.
                    </p>
                  </div>

                  <div className="space-y-6">
                    <div className="space-y-1">
                      <label className="text-[10px] font-mono uppercase tracking-widest text-[#8e8e93] block">
                        Principal or Representative Name
                      </label>
                      <input
                        type="text"
                        required
                        value={fullName}
                        onChange={(e) => setFullName(e.target.value)}
                        placeholder="e.g. Lord Alexander Wright"
                        className="input-editorial-underline"
                      />
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                      <div className="space-y-1">
                        <label className="text-[10px] font-mono uppercase tracking-widest text-[#8e8e93] block">
                          Corporate or Private Email
                        </label>
                        <input
                          type="email"
                          required
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          placeholder="principal@familyoffice.com"
                          className="input-editorial-underline"
                        />
                      </div>

                      <div className="space-y-1">
                        <label className="text-[10px] font-mono uppercase tracking-widest text-[#8e8e93] block">
                          Telephone / WhatsApp
                        </label>
                        <input
                          type="tel"
                          required
                          value={phone}
                          onChange={(e) => setPhone(e.target.value)}
                          placeholder="+971 50 000 0000"
                          className="input-editorial-underline"
                        />
                      </div>
                    </div>

                    <div className="space-y-1 pt-2">
                      <label className="text-[10px] font-mono uppercase tracking-widest text-[#8e8e93] block">
                        Specific Mandate Directives (Optional)
                      </label>
                      <textarea
                        rows={2}
                        value={notes}
                        onChange={(e) => setNotes(e.target.value)}
                        placeholder="Preferred enclaves (Palm Jumeirah, Jumeirah Bay), timeline, or structuring requirements..."
                        className="input-editorial-underline resize-none"
                      />
                    </div>
                  </div>

                  <div className="pt-4 flex items-center justify-between">
                    <button
                      type="button"
                      onClick={() => setStep(1)}
                      className="text-xs font-mono text-[#6b6b6b] hover:text-[#111111] cursor-pointer"
                    >
                      &larr; Back to Scope
                    </button>

                    <button
                      type="submit"
                      className="px-9 py-4 rounded-full bg-[#111111] text-[#fafaf8] text-xs font-medium tracking-tight hover:bg-[#242428] transition-colors cursor-pointer"
                    >
                      Submit Private Client Brief &rarr;
                    </button>
                  </div>
                </div>
              )}

            </form>

            {/* Confidentiality & Storage Disclosure */}
            <div className="pt-10 border-t border-[#e5e5ea] flex items-center gap-3 text-xs text-[#8e8e93] font-light">
              <Lock className="h-4 w-4 text-[#9f8144] shrink-0" />
              <span>
                Data Transmission &amp; Privacy: Your information is submitted securely to our licensed private advisory desk and is not stored in public or unencrypted local client repositories.
              </span>
            </div>

          </div>
        )}

      </main>

    </div>
  )
}
