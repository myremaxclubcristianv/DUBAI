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
  const [isSubmitting, setIsSubmitting] = React.useState(false)
  const [errorMessage, setErrorMessage] = React.useState<string | null>(null)
  const [isSubmitted, setIsSubmitted] = React.useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setErrorMessage(null)

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: fullName,
          email,
          phone,
          interest: 'PRIVATE CLIENT',
          budget: allocationTier,
          message: `Mandate: ${mandateType} | Allocation: ${allocationTier} | Directives: ${notes || 'Direct principal intake'}`,
          consent: true,
          source: 'PRIVATE_CLIENT_PAGE',
          page: '/private-client',
        }),
      })
      const data = await res.json()
      if (res.ok && data.success) {
        setIsSubmitted(true)
      } else {
        setErrorMessage(data.message || data.error || 'Failed to transmit brief. Please contact via WhatsApp or email directly.')
      }
    } catch {
      setErrorMessage('Network connection error. Please contact via WhatsApp or email directly.')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="flex flex-col min-h-screen bg-[#070e1c] text-white selection:bg-[#0284c7]/30 selection:text-white">
      
      {/* 1. QUIET EDITORIAL DARK HEADER (PRIVATE INQUIRY DESK) */}
      <section className="pt-20 pb-16 sm:pt-28 sm:pb-24 border-b border-white/10 relative overflow-hidden">
        <div className="absolute top-0 right-1/4 w-[600px] h-[400px] bg-[#0284c7]/10 rounded-full blur-3xl pointer-events-none" />
        
        <div className="w-full max-w-[960px] mx-auto px-4 sm:px-10 space-y-6 relative z-10 text-left sm:text-center">
          <div className="flex items-center justify-start sm:justify-center gap-2 font-mono text-xs text-[#38bdf8]">
            <span className="w-2 h-2 bg-[#38bdf8]" />
            <span className="tracking-[0.24em] uppercase font-semibold">
              PRIVATE INQUIRY DESK &bull; DIRECT CLIENT INTAKE
            </span>
          </div>
          
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-light tracking-[-0.035em] leading-[1.02] text-white font-serif">
            A more discreet<br />way to acquire.
          </h1>

          <p className="text-base sm:text-lg text-slate-300 font-light max-w-2xl mx-auto leading-relaxed">
            Dedicated property intelligence, customized research briefs, and authorized local partner coordination for private investors acquiring freehold assets in Dubai.
          </p>

          <div className="pt-4 flex flex-wrap items-center justify-start sm:justify-center gap-3 font-mono text-[11px] text-slate-400">
            <span className="flex items-center gap-1.5 text-emerald-400">
              <ShieldCheck className="h-3.5 w-3.5" />
              Independent Property Intelligence
            </span>
            <span>&bull;</span>
            <span>Escrow Protected (Law 8/2007)</span>
            <span>&bull;</span>
            <span>Strict Privacy Protocol</span>
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
                CONFIDENTIAL INQUIRY REGISTERED
              </span>
              <h2 className="text-3xl font-light text-white font-serif">
                Brief Successfully Transmitted
              </h2>
              <p className="text-sm text-slate-300 font-light leading-relaxed pt-2">
                Thank you, <strong>{fullName}</strong>. Our research desk will review your requirements and coordinate with authorized local partners within 24 hours.
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
                02 &bull; Contact Details
              </span>
            </div>

            <form onSubmit={handleSubmit} className="space-y-10">
              
              {step === 1 && (
                <div className="space-y-10">
                  <div className="space-y-4">
                    <label className="text-lg sm:text-2xl font-light text-white block font-serif">
                      Select your primary research scope:
                    </label>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {[
                        {
                          id: 'ACQUISITION',
                          icon: Building,
                          title: 'Property Acquisition Research',
                          desc: 'Curated prime freehold and off-market opportunities with verified title registries.',
                        },
                        {
                          id: 'UNDERWRITING',
                          icon: Scale,
                          title: 'Financial Underwriting',
                          desc: 'Deterministic analytical modeling, gross-to-net yield verification, and DLD fee schedules.',
                        },
                        {
                          id: 'GOLDEN_VISA',
                          icon: Award,
                          title: 'Golden Visa Eligibility',
                          desc: 'Residency eligibility roadmap and DLD Cube coordination under Cabinet Res. 65/2022.',
                        },
                        {
                          id: 'COMPREHENSIVE',
                          icon: Globe,
                          title: 'Multi-Asset Research',
                          desc: 'Custom cross-border portfolio comparison, Romania vs Dubai economics, and market monitors.',
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
                      Contact Details &amp; Requirements
                    </h2>
                    <p className="text-xs text-slate-400 font-light">
                      Direct communication line. All information is processed under strict privacy and data protection protocols.
                    </p>
                  </div>

                  <div className="space-y-6">
                    <div className="space-y-1">
                      <label className="text-[10px] font-mono uppercase tracking-widest text-slate-400 block">
                        Full Name / Representative
                      </label>
                      <input
                        type="text"
                        required
                        value={fullName}
                        onChange={(e) => setFullName(e.target.value)}
                        placeholder="e.g. Andrei Ionescu"
                        className="w-full pb-2 pt-1 border-b border-white/20 bg-transparent text-white text-lg focus:outline-none focus:border-[#38bdf8] transition-colors placeholder:text-slate-600 font-serif"
                      />
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                      <div className="space-y-1">
                        <label className="text-[10px] font-mono uppercase tracking-widest text-slate-400 block">
                          Email Address
                        </label>
                        <input
                          type="email"
                          required
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          placeholder="client@example.com"
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
                          placeholder="+40 700 000 000 / +971 50 000 0000"
                          className="w-full pb-2 pt-1 border-b border-white/20 bg-transparent text-white text-base focus:outline-none focus:border-[#38bdf8] transition-colors placeholder:text-slate-600 font-mono"
                        />
                      </div>
                    </div>

                    <div className="space-y-1 pt-2">
                      <label className="text-[10px] font-mono uppercase tracking-widest text-slate-400 block">
                        Research Directives &amp; Preferences (Optional)
                      </label>
                      <textarea
                        rows={2}
                        value={notes}
                        onChange={(e) => setNotes(e.target.value)}
                        placeholder="Preferred enclaves (Palm Jumeirah, Dubai Marina, Downtown), timeline, or structuring requirements..."
                        className="w-full pb-2 pt-1 border-b border-white/20 bg-transparent text-white text-sm focus:outline-none focus:border-[#38bdf8] transition-colors placeholder:text-slate-600 resize-none font-sans"
                      />
                    </div>
                  </div>

                  {errorMessage && (
                    <div className="p-3 bg-red-950/80 border border-red-500/50 text-red-200 text-xs rounded-xs font-mono">
                      {errorMessage}
                    </div>
                  )}

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
                      disabled={isSubmitting}
                      className="px-8 py-4 bg-[#0284c7] hover:bg-[#0369a1] disabled:opacity-50 disabled:cursor-not-allowed text-white text-xs font-mono uppercase tracking-[0.14em] font-semibold transition-all cursor-pointer shadow-md"
                    >
                      {isSubmitting ? 'Transmitting…' : 'Submit Property Research Brief →'}
                    </button>
                  </div>
                </div>
              )}

            </form>

            {/* Confidentiality & Storage Disclosure */}
            <div className="pt-8 border-t border-white/10 flex items-center gap-3 text-xs text-slate-400 font-light">
              <Lock className="h-4 w-4 text-[#38bdf8] shrink-0" />
              <span>
                Data Transmission &amp; Privacy: Your inquiry is encrypted and transmitted directly to our research desk. Consultations and transactions are conducted through authorized licensed partners.
              </span>
            </div>

          </div>
        )}

      </main>

      {/* 3. MANDATORY PLATFORM DISCLAIMER */}
      <section className="border-t border-white/10 bg-black/40 py-10 px-4 sm:px-10 text-slate-400 text-xs leading-relaxed font-sans">
        <div className="w-full max-w-[960px] mx-auto space-y-4">
          <div className="flex items-center gap-2 font-mono text-[11px] text-[#38bdf8] font-bold uppercase tracking-wider">
            <span>DECLINARE DE RESPONSABILITATE &bull; REGULATORY &amp; LEGAL DISCLAIMER</span>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-[11px] leading-relaxed">
            <p>
              Platforma DUBAI (dubai.cristianvaduva.com) funcționează exclusiv ca serviciu independent de cercetare imobiliară, analiză de piață și agregare de date deschise (open data). Platforma nu este agenție imobiliară licențiată RERA/DED în Dubai și nu oferă consultanță financiară, juridică sau fiscală reglementată. Tranzacțiile imobiliare, contractele oficiale (Form F / Unified Sale Contract) și transferurile de titlu sunt intermediate exclusiv prin brokeri și agenții partenere autorizate și licențiate conform legislației Emiratelor Arabe Unite.
            </p>
            <p>
              DUBAI (dubai.cristianvaduva.com) operates strictly as an independent real estate research, market intelligence, and open data aggregation platform. The platform is not a RERA/DED licensed real estate brokerage in Dubai and does not provide regulated financial, legal, or tax advisory services. All property transactions, official Unified Sale Contracts (Form F), and title conveyancing are facilitated exclusively through authorized, licensed local partners.
            </p>
          </div>
        </div>
      </section>

    </div>
  )
}
