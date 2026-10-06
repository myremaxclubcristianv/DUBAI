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
    <div className="flex flex-col min-h-screen bg-white text-slate-900">
      
      {/* 1. QUIET EDITORIAL HEADER */}
      <section className="pt-20 pb-16 sm:pt-28 sm:pb-24 border-b border-slate-200 bg-gradient-to-b from-[#f0f7ff] to-white">
        <div className="w-full max-w-[880px] mx-auto px-6 sm:px-10 space-y-6 text-left sm:text-center">
          <div className="flex items-center justify-start sm:justify-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#0284c7]" />
            <Eyebrow className="text-left sm:text-center">PRIVATE CLIENT ADVISORY &bull; DIRECT MANDATES</Eyebrow>
          </div>
          
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-light tracking-[-0.035em] leading-[1.02] text-slate-900 font-serif">
            A more discreet<br />way to acquire.
          </h1>

          <p className="text-base sm:text-lg text-slate-600 font-light max-w-xl mx-auto leading-relaxed">
            Direct institutional advisory for family offices, sovereign principals, and private clients seeking off-market acquisitions and bespoke Golden Visa structuring in Dubai.
          </p>
        </div>
      </section>

      {/* 2. PROGRESSIVE FORM DESK */}
      <main className="w-full max-w-[880px] mx-auto px-6 sm:px-10 py-16 sm:py-24 flex-1">
        
        {isSubmitted ? (
          <div className="py-16 text-center space-y-6 max-w-md mx-auto">
            <div className="w-16 h-16 rounded-full bg-sky-50 border border-sky-200 flex items-center justify-center mx-auto text-[#0284c7]">
              <CheckCircle2 className="h-8 w-8" />
            </div>
            
            <div className="space-y-2">
              <h2 className="text-3xl font-light text-slate-900 font-serif">
                Mandate Registered
              </h2>
              <p className="text-sm text-slate-600 font-light leading-relaxed">
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
            <div className="flex items-center justify-between border-b border-slate-200 pb-4 text-xs font-mono">
              <span className={step === 1 ? 'text-[#0284c7] font-semibold' : 'text-slate-400'}>
                01 &bull; Scope &amp; Allocation
              </span>
              <span className={step === 2 ? 'text-[#0284c7] font-semibold' : 'text-slate-400'}>
                02 &bull; Principal Details
              </span>
            </div>

            <form onSubmit={handleSubmit} className="space-y-10">
              
              {step === 1 && (
                <div className="space-y-10">
                  <div className="space-y-4">
                    <label className="text-lg sm:text-2xl font-light text-slate-900 block font-serif">
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
                              ? 'border-[#0284c7] bg-sky-50/60 shadow-xs'
                              : 'border-slate-200 bg-white hover:border-slate-300'
                          }`}
                        >
                          <span className="text-base font-medium text-slate-900 block">{item.title}</span>
                          <span className="text-xs text-slate-500 font-light block mt-1">{item.desc}</span>
                        </button>
                      ))}
                    </div>
                  </div>

                  <div className="space-y-4 pt-4 border-t border-slate-200">
                    <label className="text-lg sm:text-2xl font-light text-slate-900 block font-serif">
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
                              ? 'border-[#0284c7] bg-[#0284c7] text-white font-bold'
                              : 'border-slate-200 bg-white text-slate-700 hover:border-slate-300'
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
                      className="px-8 py-3.5 rounded-xs bg-[#0284c7] hover:bg-[#0369a1] text-white text-xs font-mono uppercase tracking-[0.14em] font-semibold flex items-center gap-2 transition-all cursor-pointer shadow-xs"
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
                    <h2 className="text-2xl font-light text-slate-900 font-serif">
                      Principal Contact Credentials
                    </h2>
                    <p className="text-xs text-slate-500">
                      Discreet direct communication line. Information is processed under confidential advisory protocol.
                    </p>
                  </div>

                  <div className="space-y-6">
                    <div className="space-y-1">
                      <label className="text-[10px] font-mono uppercase tracking-widest text-slate-500 block">
                        Principal or Representative Name
                      </label>
                      <input
                        type="text"
                        required
                        value={fullName}
                        onChange={(e) => setFullName(e.target.value)}
                        placeholder="e.g. Lord Alexander Wright"
                        className="w-full pb-2 pt-1 border-b border-slate-300 bg-transparent text-slate-900 text-lg focus:outline-none focus:border-[#0284c7] transition-colors placeholder:text-slate-400 font-serif"
                      />
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                      <div className="space-y-1">
                        <label className="text-[10px] font-mono uppercase tracking-widest text-slate-500 block">
                          Corporate or Private Email
                        </label>
                        <input
                          type="email"
                          required
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          placeholder="principal@familyoffice.com"
                          className="w-full pb-2 pt-1 border-b border-slate-300 bg-transparent text-slate-900 text-base focus:outline-none focus:border-[#0284c7] transition-colors placeholder:text-slate-400 font-mono"
                        />
                      </div>

                      <div className="space-y-1">
                        <label className="text-[10px] font-mono uppercase tracking-widest text-slate-500 block">
                          Telephone / WhatsApp
                        </label>
                        <input
                          type="tel"
                          required
                          value={phone}
                          onChange={(e) => setPhone(e.target.value)}
                          placeholder="+971 50 000 0000"
                          className="w-full pb-2 pt-1 border-b border-slate-300 bg-transparent text-slate-900 text-base focus:outline-none focus:border-[#0284c7] transition-colors placeholder:text-slate-400 font-mono"
                        />
                      </div>
                    </div>

                    <div className="space-y-1 pt-2">
                      <label className="text-[10px] font-mono uppercase tracking-widest text-slate-500 block">
                        Specific Mandate Directives (Optional)
                      </label>
                      <textarea
                        rows={2}
                        value={notes}
                        onChange={(e) => setNotes(e.target.value)}
                        placeholder="Preferred enclaves (Palm Jumeirah, Jumeirah Bay), timeline, or structuring requirements..."
                        className="w-full pb-2 pt-1 border-b border-slate-300 bg-transparent text-slate-900 text-sm focus:outline-none focus:border-[#0284c7] transition-colors placeholder:text-slate-400 resize-none font-sans"
                      />
                    </div>
                  </div>

                  <div className="pt-4 flex items-center justify-between">
                    <button
                      type="button"
                      onClick={() => setStep(1)}
                      className="text-xs font-mono text-slate-500 hover:text-slate-900 cursor-pointer"
                    >
                      &larr; Back to Scope
                    </button>

                    <button
                      type="submit"
                      className="px-8 py-3.5 rounded-xs bg-[#0284c7] hover:bg-[#0369a1] text-white text-xs font-mono uppercase tracking-[0.14em] font-semibold transition-all cursor-pointer shadow-xs"
                    >
                      Submit Private Client Brief &rarr;
                    </button>
                  </div>
                </div>
              )}

            </form>

            {/* Confidentiality & Storage Disclosure */}
            <div className="pt-8 border-t border-slate-200 flex items-center gap-3 text-xs text-slate-500 font-light">
              <Lock className="h-4 w-4 text-[#0284c7] shrink-0" />
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
