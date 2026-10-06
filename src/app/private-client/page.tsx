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
    <div className="flex flex-col min-h-screen bg-[#08080a] text-[#f5f5f7]">
      
      {/* 1. QUIET EDITORIAL HEADER */}
      <section className="pt-20 pb-16 sm:pt-28 sm:pb-24 border-b border-white/10 bg-[#0d0d11]">
        <div className="w-full max-w-[880px] mx-auto px-6 sm:px-10 space-y-6 text-left sm:text-center">
          <div className="flex items-center justify-start sm:justify-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#c9a962]" />
            <Eyebrow className="text-left sm:text-center">PRIVATE CLIENT ADVISORY &bull; DIRECT MANDATES</Eyebrow>
          </div>
          
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-light tracking-[-0.035em] leading-[1.02] text-[#f5f5f7]">
            A more discreet<br />way to acquire.
          </h1>

          <p className="text-base sm:text-lg text-[#a1a1aa] font-light max-w-xl mx-auto leading-relaxed">
            Direct institutional advisory for family offices, sovereign principals, and private clients seeking off-market acquisitions and bespoke Golden Visa structuring in Dubai.
          </p>
        </div>
      </section>

      {/* 2. PROGRESSIVE FORM DESK */}
      <main className="w-full max-w-[880px] mx-auto px-6 sm:px-10 py-16 sm:py-24 flex-1">
        
        {isSubmitted ? (
          <div className="py-16 text-center space-y-6 max-w-md mx-auto">
            <div className="w-16 h-16 rounded-full bg-[#c9a962]/10 border border-[#c9a962]/40 flex items-center justify-center mx-auto text-[#c9a962]">
              <CheckCircle2 className="h-8 w-8" />
            </div>
            
            <div className="space-y-2">
              <h2 className="text-3xl font-light text-[#f5f5f7]">
                Mandate Registered
              </h2>
              <p className="text-sm text-[#a1a1aa] font-light leading-relaxed">
                Thank you, <strong>{fullName}</strong>. A senior private client advisor will initiate confidential correspondence to your designated contact within 24 hours.
              </p>
            </div>

            <div className="pt-4">
              <PrimaryLink href="/" className="px-8 py-3.5">
                Return to Dubai Platform
              </PrimaryLink>
            </div>
          </div>
        ) : (
          <div className="space-y-10">
            
            {/* Step Indicators */}
            <div className="flex items-center justify-between border-b border-white/10 pb-4 text-xs font-mono">
              <span className={step === 1 ? 'text-[#c9a962] font-semibold' : 'text-[#71717a]'}>
                01 &bull; Scope &amp; Allocation
              </span>
              <span className={step === 2 ? 'text-[#c9a962] font-semibold' : 'text-[#71717a]'}>
                02 &bull; Principal Details
              </span>
            </div>

            <form onSubmit={handleSubmit} className="space-y-10">
              
              {step === 1 && (
                <div className="space-y-10">
                  <div className="space-y-4">
                    <label className="text-lg sm:text-2xl font-light text-[#f5f5f7] block">
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
                          className={`p-6 rounded-sm text-left border transition-all cursor-pointer ${
                            mandateType === item.id
                              ? 'border-[#c9a962] bg-[#181820] shadow-[0_0_15px_rgba(201,169,98,0.15)]'
                              : 'border-white/10 bg-[#111116] hover:border-white/30'
                          }`}
                        >
                          <span className="text-base font-light text-[#f5f5f7] block">{item.title}</span>
                          <span className="text-xs text-[#8e8e93] font-light block mt-1">{item.desc}</span>
                        </button>
                      ))}
                    </div>
                  </div>

                  <div className="space-y-4 pt-4 border-t border-white/10">
                    <label className="text-lg sm:text-2xl font-light text-[#f5f5f7] block">
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
                          className={`p-4 rounded-xs text-center border font-mono text-xs transition-all cursor-pointer ${
                            allocationTier === item.id
                              ? 'border-[#c9a962] bg-[#c9a962] text-[#08080a] font-bold'
                              : 'border-white/10 bg-[#111116] text-[#a1a1aa] hover:border-white/30'
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
                      className="px-8 py-3.5 rounded-xs bg-[#c9a962] hover:bg-[#dbbe7a] text-[#08080a] text-xs font-mono uppercase tracking-[0.14em] font-semibold flex items-center gap-2 transition-all cursor-pointer shadow-[0_0_15px_rgba(201,169,98,0.2)]"
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
                    <h2 className="text-2xl font-light text-[#f5f5f7]">
                      Principal Contact Credentials
                    </h2>
                    <p className="text-xs text-[#8e8e93]">
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
                      className="text-xs font-mono text-[#8e8e93] hover:text-[#f5f5f7] cursor-pointer"
                    >
                      &larr; Back to Scope
                    </button>

                    <button
                      type="submit"
                      className="px-8 py-3.5 rounded-xs bg-[#c9a962] hover:bg-[#dbbe7a] text-[#08080a] text-xs font-mono uppercase tracking-[0.14em] font-semibold transition-all cursor-pointer shadow-[0_0_15px_rgba(201,169,98,0.2)]"
                    >
                      Submit Private Client Brief &rarr;
                    </button>
                  </div>
                </div>
              )}

            </form>

            {/* Confidentiality & Storage Disclosure */}
            <div className="pt-8 border-t border-white/10 flex items-center gap-3 text-xs text-[#71717a] font-light">
              <Lock className="h-4 w-4 text-[#c9a962] shrink-0" />
              <span>
                Data Transmission &amp; Privacy: Your information is submitted securely to our licensed private advisory desk and is not stored in unencrypted client repositories.
              </span>
            </div>

          </div>
        )}

      </main>

    </div>
  )
}
