'use client'

import * as React from 'react'
import Link from 'next/link'
import {
  ArrowRight,
  CheckCircle2,
  Lock,
  ShieldCheck,
  Building,
  Scale,
  Award,
  Globe,
} from 'lucide-react'

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
    <div className="flex flex-col min-h-screen bg-[#070e1c] text-white selection:bg-[#0284c7]/30 selection:text-white">
      
      {/* 1. QUIET EDITORIAL DARK HEADER (PRIVATE ACQUISITION OFFICE) */}
      <section className="pt-20 pb-16 sm:pt-28 sm:pb-24 border-b border-white/10 relative overflow-hidden">
        <div className="absolute top-0 right-1/4 w-[600px] h-[400px] bg-[#0284c7]/10 rounded-full blur-3xl pointer-events-none" />
        
        <div className="w-full max-w-[960px] mx-auto px-4 sm:px-10 space-y-6 relative z-10 text-left sm:text-center">
          <div className="flex items-center justify-start sm:justify-center gap-2 font-mono text-xs text-[#38bdf8]">
            <span className="w-2 h-2 bg-[#38bdf8]" />
            <span className="tracking-[0.24em] uppercase font-semibold">
              PRIVATE CLIENT ADVISORY &bull; DIRECT MANDATES
            </span>
          </div>
          
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-light tracking-[-0.035em] leading-[1.02] text-white font-serif">
            A more discreet<br />way to acquire.
          </h1>

          <p className="text-base sm:text-lg text-slate-300 font-light max-w-2xl mx-auto leading-relaxed">
            Direct institutional advisory for family offices, sovereign principals, and private clients seeking off-market acquisitions and bespoke Golden Visa structuring in Dubai.
          </p>

          <div className="pt-4 flex flex-wrap items-center justify-start sm:justify-center gap-3 font-mono text-[11px] text-slate-400">
            <span className="flex items-center gap-1.5 text-emerald-400">
              <ShieldCheck className="h-3.5 w-3.5" />
              Direct Principal Representation
            </span>
            <span>&bull;</span>
            <span>Escrow Ring-Fenced (Law 8/2007)</span>
            <span>&bull;</span>
            <span>Strict NDA Protocol</span>
          </div>
        </div>
      </section>

      {/* 2. PROGRESSIVE FORM DESK IN LUXURY DARK COMPOSITION */}
      <main className="w-full max-w-[960px] mx-auto px-4 sm:px-10 py-16 sm:py-24 flex-1">
        
        {isSubmitted ? (
          <div className="py-16 text-center space-y-6 max-w-lg mx-auto bg-slate-900/90 border border-white/15 p-8 sm:p-12 shadow-2xl">
            <div className="w-16 h-16 bg-slate-950 border border-[#38bdf8]/40 flex items-center justify-center mx-auto text-[#38bdf8]">
              <CheckCircle2 className="h-8 w-8" />
            </div>
            
            <div className="space-y-2">
              <span className="text-[10px] font-mono text-[#38bdf8] uppercase tracking-widest font-semibold block">
                CONFIDENTIAL MANDATE REGISTERED
              </span>
              <h2 className="text-3xl font-light text-white font-serif">
                Direct Intake Initialized
              </h2>
              <p className="text-sm text-slate-300 font-light leading-relaxed pt-2">
                Thank you, <strong>{fullName}</strong>. A senior private client advisor will initiate encrypted correspondence to your designated contact within 24 hours.
              </p>
            </div>

            <div className="pt-4">
              <Link
                href="/"
                className="inline-flex items-center gap-2 px-8 py-3.5 bg-[#0284c7] hover:bg-[#0369a1] text-white text-xs font-mono uppercase tracking-[0.14em] font-semibold transition-colors shadow-xs"
              >
                <span>Return to Dubai Platform</span>
                <ArrowRight className="h-3.5 w-3.5" />
              </Link>
            </div>
          </div>
        ) : (
          <div className="bg-slate-900/80 backdrop-blur-md border border-white/15 p-6 sm:p-12 shadow-2xl space-y-10">
            
            {/* Step Indicators */}
            <div className="flex items-center justify-between border-b border-white/10 pb-4 text-xs font-mono">
              <span className={step === 1 ? 'text-[#38bdf8] font-semibold' : 'text-slate-500'}>
                01 &bull; Scope &amp; Allocation
              </span>
              <span className={step === 2 ? 'text-[#38bdf8] font-semibold' : 'text-slate-500'}>
                02 &bull; Principal Credentials
              </span>
            </div>

            <form onSubmit={handleSubmit} className="space-y-10">
              
              {step === 1 && (
                <div className="space-y-10">
                  <div className="space-y-4">
                    <label className="text-lg sm:text-2xl font-light text-white block font-serif">
                      Select your primary mandate scope:
                    </label>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {[
                        {
                          id: 'ACQUISITION',
                          icon: Building,
                          title: 'Property Acquisition',
                          desc: 'Curated prime freehold and off-market penthouses with verified title deeds.',
                        },
                        {
                          id: 'UNDERWRITING',
                          icon: Scale,
                          title: 'Investment Underwriting',
                          desc: 'Deterministic financial modeling and net yield verification.',
                        },
                        {
                          id: 'GOLDEN_VISA',
                          icon: Award,
                          title: 'Golden Visa Conveyancing',
                          desc: '10-Year residency and DLD Cube coordination under Cabinet Res. 65/2022.',
                        },
                        {
                          id: 'COMPREHENSIVE',
                          icon: Globe,
                          title: 'Family Office Mandate',
                          desc: 'Holistic portfolio allocation, corporate structuring, and conveyancing.',
                        },
                      ].map((item) => {
                        const Icon = item.icon
                        return (
                          <button
                            type="button"
                            key={item.id}
                            onClick={() => setMandateType(item.id)}
                            className={`p-6 text-left border transition-all cursor-pointer space-y-2 ${
                              mandateType === item.id
                                ? 'border-[#38bdf8] bg-slate-950 shadow-md'
                                : 'border-white/10 bg-slate-900/60 hover:border-white/30'
                            }`}
                          >
                            <div className="flex items-center justify-between">
                              <span className="text-base font-medium text-white block font-sans">
                                {item.title}
                              </span>
                              <Icon className={`h-4 w-4 ${mandateType === item.id ? 'text-[#38bdf8]' : 'text-slate-400'}`} />
                            </div>
                            <span className="text-xs text-slate-400 font-light block leading-relaxed">
                              {item.desc}
                            </span>
                          </button>
                        )
                      })}
                    </div>
                  </div>

                  <div className="space-y-4 pt-4 border-t border-white/10">
                    <label className="text-lg sm:text-2xl font-light text-white block font-serif">
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
                          className={`p-4 text-center border font-mono text-xs transition-all cursor-pointer ${
                            allocationTier === item.id
                              ? 'border-[#38bdf8] bg-[#0284c7] text-white font-bold'
                              : 'border-white/10 bg-slate-950/60 text-slate-300 hover:border-white/30'
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
                      className="px-8 py-4 bg-[#0284c7] hover:bg-[#0369a1] text-white text-xs font-mono uppercase tracking-[0.14em] font-semibold flex items-center gap-2 transition-all cursor-pointer shadow-md"
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
                    <h2 className="text-2xl font-light text-white font-serif">
                      Principal Contact Credentials
                    </h2>
                    <p className="text-xs text-slate-400 font-light">
                      Discreet direct communication line. Information is processed under confidential advisory protocol.
                    </p>
                  </div>

                  <div className="space-y-6">
                    <div className="space-y-1">
                      <label className="text-[10px] font-mono uppercase tracking-widest text-slate-400 block">
                        Principal or Representative Name
                      </label>
                      <input
                        type="text"
                        required
                        value={fullName}
                        onChange={(e) => setFullName(e.target.value)}
                        placeholder="e.g. Lord Alexander Wright"
                        className="w-full pb-2 pt-1 border-b border-white/20 bg-transparent text-white text-lg focus:outline-none focus:border-[#38bdf8] transition-colors placeholder:text-slate-600 font-serif"
                      />
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                      <div className="space-y-1">
                        <label className="text-[10px] font-mono uppercase tracking-widest text-slate-400 block">
                          Corporate or Private Email
                        </label>
                        <input
                          type="email"
                          required
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          placeholder="principal@familyoffice.com"
                          className="w-full pb-2 pt-1 border-b border-white/20 bg-transparent text-white text-base focus:outline-none focus:border-[#38bdf8] transition-colors placeholder:text-slate-600 font-mono"
                        />
                      </div>

                      <div className="space-y-1">
                        <label className="text-[10px] font-mono uppercase tracking-widest text-slate-400 block">
                          Telephone / WhatsApp
                        </label>
                        <input
                          type="tel"
                          required
                          value={phone}
                          onChange={(e) => setPhone(e.target.value)}
                          placeholder="+971 50 000 0000"
                          className="w-full pb-2 pt-1 border-b border-white/20 bg-transparent text-white text-base focus:outline-none focus:border-[#38bdf8] transition-colors placeholder:text-slate-600 font-mono"
                        />
                      </div>
                    </div>

                    <div className="space-y-1 pt-2">
                      <label className="text-[10px] font-mono uppercase tracking-widest text-slate-400 block">
                        Specific Mandate Directives (Optional)
                      </label>
                      <textarea
                        rows={2}
                        value={notes}
                        onChange={(e) => setNotes(e.target.value)}
                        placeholder="Preferred enclaves (Palm Jumeirah, Jumeirah Bay), timeline, or structuring requirements..."
                        className="w-full pb-2 pt-1 border-b border-white/20 bg-transparent text-white text-sm focus:outline-none focus:border-[#38bdf8] transition-colors placeholder:text-slate-600 resize-none font-sans"
                      />
                    </div>
                  </div>

                  <div className="pt-4 flex items-center justify-between">
                    <button
                      type="button"
                      onClick={() => setStep(1)}
                      className="text-xs font-mono text-slate-400 hover:text-white cursor-pointer"
                    >
                      &larr; Back to Scope
                    </button>

                    <button
                      type="submit"
                      className="px-8 py-4 bg-[#0284c7] hover:bg-[#0369a1] text-white text-xs font-mono uppercase tracking-[0.14em] font-semibold transition-all cursor-pointer shadow-md"
                    >
                      Submit Private Client Brief &rarr;
                    </button>
                  </div>
                </div>
              )}

            </form>

            {/* Confidentiality & Storage Disclosure */}
            <div className="pt-8 border-t border-white/10 flex items-center gap-3 text-xs text-slate-400 font-light">
              <Lock className="h-4 w-4 text-[#38bdf8] shrink-0" />
              <span>
                Data Transmission &amp; Privacy: Your brief is encrypted and transmitted directly to our licensed private advisory desk. Zero public exposure.
              </span>
            </div>

          </div>
        )}

      </main>

    </div>
  )
}
