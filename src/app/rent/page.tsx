'use client'

import * as React from 'react'
import { ContactModal } from '@/components/layout/contact-modal'
import {
  ShieldCheck,
  Building,
  Scale,
  FileCheck2,
  ArrowRight,
  PhoneCall,
  AlertCircle,
} from 'lucide-react'

export default function RentPage() {
  const [isContactModalOpen, setIsContactModalOpen] = React.useState(false)

  return (
    <div className="flex flex-col min-h-screen bg-white text-slate-950 selection:bg-slate-900 selection:text-white">
      {/* 1. EDITORIAL HEADER */}
      <section className="border-b border-slate-200 bg-slate-50/70 pt-16 pb-12 sm:pt-20 sm:pb-16">
        <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-10 lg:px-16 space-y-6">
          <div className="flex flex-wrap items-center gap-3 text-xs font-mono">
            <span className="px-3 py-1 bg-white border border-slate-200 text-slate-800 uppercase tracking-widest font-semibold flex items-center gap-1.5">
              <ShieldCheck className="h-3.5 w-3.5 text-emerald-700" />
              <span>Dubai Tenancy Framework &bull; Law No. 26/2007</span>
            </span>
            <span className="px-3 py-1 bg-slate-900 text-white uppercase tracking-widest font-semibold">
              Bespoke Leasing Mandates
            </span>
          </div>

          <div className="space-y-4 max-w-4xl">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-light tracking-tight text-slate-950 font-serif">
              Dubai Rental Advisory &amp; Prime Mandates
            </h1>
            <p className="text-base sm:text-lg text-slate-600 font-light leading-relaxed max-w-3xl">
              Confidential tenant representation for executive relocations, luxury waterfront leases, and corporate residences in prime Dubai districts. We operate on a verified mandate model — guaranteeing direct landlord title validation and mandatory Ejari statutory compliance.
            </p>
          </div>

          {/* Platform Integrity Disclosure Notice */}
          <div className="p-4 sm:p-5 bg-white border border-slate-200 text-xs text-slate-600 font-light leading-relaxed space-y-1 shadow-2xs">
            <div className="flex items-center gap-2 text-slate-900 font-mono text-[10px] uppercase tracking-wider font-bold">
              <AlertCircle className="h-3.5 w-3.5 text-amber-600" />
              <span>Platform Integrity Standard: Zero Unverified Rental Postings</span>
            </div>
            <p>
              In accordance with our strict data provenance architecture and Dubai Land Department regulations, this platform does not publish speculative, unverified, or syndicated rental advertisements without direct Landlord Title Deed verification and active Ejari clearance. All private leasing searches are conducted exclusively on bespoke client mandates (RERA Form I) matching verified prime inventory.
            </p>
          </div>
        </div>
      </section>

      {/* 2. STATUTORY LEASING ADVISORY OVERVIEW */}
      <main className="w-full max-w-[1440px] mx-auto px-4 sm:px-10 lg:px-16 py-14 sm:py-20 space-y-16 flex-1">
        
        {/* Core Tenancy Rules Grid */}
        <section className="space-y-8">
          <div className="space-y-2">
            <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-slate-500 font-semibold block">
              STATUTORY UNDERWRITING
            </span>
            <h2 className="text-2xl sm:text-3xl font-light text-slate-950 font-serif">
              Dubai Tenancy Law &amp; Tenant Protections
            </h2>
            <p className="text-sm text-slate-600 font-light max-w-2xl">
              Essential statutory guidelines established by the Dubai Land Department and the Rental Dispute Center (RDC).
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 bg-slate-50 border border-slate-200 space-y-3">
              <div className="flex items-center gap-2 text-xs font-mono font-semibold text-slate-900 uppercase">
                <Scale className="h-4 w-4 text-slate-900" />
                <span>RERA Rent Index (Decree 43/2013)</span>
              </div>
              <p className="text-xs text-slate-600 font-light leading-relaxed">
                Rent increases upon renewal are strictly governed by the official RERA Smart Rental Calculator. Landlords cannot arbitrarily raise rent; increases require 90 days statutory notice prior to contract expiry and must strictly conform to official community benchmark brackets.
              </p>
            </div>

            <div className="p-6 bg-slate-50 border border-slate-200 space-y-3">
              <div className="flex items-center gap-2 text-xs font-mono font-semibold text-slate-900 uppercase">
                <FileCheck2 className="h-4 w-4 text-slate-900" />
                <span>Mandatory Ejari Registration</span>
              </div>
              <p className="text-xs text-slate-600 font-light leading-relaxed">
                Under Law No. 26 of 2007, every residential lease contract must be registered in the official Ejari system. Ejari certification is legally required for DEWA utility connection, family residency visa sponsorship, and dispute standing before the Rental Dispute Center.
              </p>
            </div>

            <div className="p-6 bg-slate-50 border border-slate-200 space-y-3">
              <div className="flex items-center gap-2 text-xs font-mono font-semibold text-slate-900 uppercase">
                <Building className="h-4 w-4 text-slate-900" />
                <span>Security Deposit Standards</span>
              </div>
              <p className="text-xs text-slate-600 font-light leading-relaxed">
                Standard market security deposits are 5% of annual rent for unfurnished properties and 10% for fully furnished residences, held as security and refundable upon tenancy handover subject to formal check-out inspection.
              </p>
            </div>
          </div>
        </section>

        {/* Bespoke Private Rental Mandate Intake */}
        <section className="p-8 sm:p-12 bg-slate-950 text-white space-y-8 shadow-xl">
          <div className="max-w-3xl space-y-4">
            <span className="text-[10px] font-mono uppercase tracking-[0.24em] text-[#38bdf8] font-bold block">
              EXECUTIVE &bull; PRIVATE CLIENT DESK
            </span>
            <h2 className="text-3xl sm:text-4xl font-light font-serif">
              Retain a Dedicated Prime Leasing Mandate
            </h2>
            <p className="text-sm text-slate-300 font-light leading-relaxed">
              For corporate relocations, diplomats, high-net-worth individuals, and family offices seeking luxury residences (minimum annual rental threshold of AED 250,000 / year). We source, physically inspect, verify Landlord Title Deeds, negotiate terms, and complete Ejari registration.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 text-xs font-mono">
            <div className="p-4 bg-slate-900/80 border border-slate-800 space-y-1">
              <span className="text-slate-400 block text-[10px]">COVERED ENCLAVES</span>
              <span className="text-white font-semibold">Palm Jumeirah &bull; Downtown &bull; Emirates Hills</span>
            </div>
            <div className="p-4 bg-slate-900/80 border border-slate-800 space-y-1">
              <span className="text-slate-400 block text-[10px]">MINIMUM MANDATE</span>
              <span className="text-white font-semibold">AED 250,000 / Annual Lease</span>
            </div>
            <div className="p-4 bg-slate-900/80 border border-slate-800 space-y-1">
              <span className="text-slate-400 block text-[10px]">STATUTORY CHECK</span>
              <span className="text-white font-semibold">Title Deed &amp; Oqood Verification</span>
            </div>
            <div className="p-4 bg-slate-900/80 border border-slate-800 space-y-1">
              <span className="text-slate-400 block text-[10px]">CONCIERGE EXECUTION</span>
              <span className="text-white font-semibold">DEWA, Ejari, Chiller Setup</span>
            </div>
          </div>

          <div className="pt-4 flex flex-wrap items-center gap-4">
            <button
              onClick={() => setIsContactModalOpen(true)}
              className="px-6 py-3.5 bg-white text-slate-950 hover:bg-slate-100 text-xs font-mono uppercase tracking-widest font-semibold transition-all cursor-pointer flex items-center gap-2 shadow-sm"
            >
              <span>Initiate Leasing Mandate Brief</span>
              <ArrowRight className="h-3.5 w-3.5" />
            </button>

            <a
              href="https://wa.me/436509536345?text=Hello%20Cristian,%20I%20would%20like%20to%20discuss%20a%20luxury%20rental%20mandate%20in%20Dubai."
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3.5 bg-slate-900 hover:bg-slate-800 border border-slate-700 text-white text-xs font-mono uppercase tracking-widest font-semibold transition-all flex items-center gap-2"
            >
              <PhoneCall className="h-3.5 w-3.5 text-emerald-400" />
              <span>Direct WhatsApp Desk</span>
            </a>
          </div>
        </section>

        {/* Tenancy FAQ */}
        <section className="space-y-6 pt-6 border-t border-slate-200">
          <div className="space-y-1">
            <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-slate-500 font-semibold block">
              FREQUENTLY ASKED QUESTIONS
            </span>
            <h3 className="text-xl sm:text-2xl font-light text-slate-950 font-serif">
              Dubai Leasing Frequently Asked Questions
            </h3>
          </div>

          <div className="divide-y divide-slate-200 border border-slate-200 bg-white text-xs font-light">
            <div className="p-5 space-y-2">
              <span className="font-mono text-xs font-semibold text-slate-900 block">
                How many cheques are standard for Dubai residential rent payments?
              </span>
              <p className="text-slate-600 leading-relaxed">
                Historically, rents in Dubai are paid via post-dated UAE bank cheques (typically 1, 2, or 4 cheques per annual contract). In prime luxury properties, single or two-cheque arrangements frequently command preferential annual rental rates. Direct debit solutions via the CBUAE Direct Debit System (UAEDDS) and digital rent platforms are also increasingly accepted.
              </p>
            </div>

            <div className="p-5 space-y-2">
              <span className="font-mono text-xs font-semibold text-slate-900 block">
                What are the additional tenant onboarding costs besides rent?
              </span>
              <p className="text-slate-600 leading-relaxed">
                Standard tenant costs include: Security Deposit (5% unfurnished / 10% furnished, refundable); Agency Commission (5% of annual rent + 5% VAT); Ejari Registration Fee (approx. AED 220); DEWA utility security deposit (AED 2,000 for apartments / AED 4,000 for villas, refundable); and Dubai Municipality Housing Fee (5% of annual rent, billed monthly on DEWA electricity bills).
              </p>
            </div>

            <div className="p-5 space-y-2">
              <span className="font-mono text-xs font-semibold text-slate-900 block">
                Can a landlord evict a tenant during an active lease contract?
              </span>
              <p className="text-slate-600 leading-relaxed">
                Under Article 25 of Law No. 26 of 2007 (as amended by Law No. 33 of 2008), a landlord may only request eviction upon expiry of the tenancy contract for four specific statutory reasons: owner’s personal use or use by first-degree relatives; intended sale of the property; extensive demolition/reconstruction; or comprehensive renovation preventing occupation. In all four cases, the landlord must provide a minimum 12-month written notice sent through the Notary Public or registered mail.
              </p>
            </div>
          </div>
        </section>

      </main>

      <ContactModal isOpen={isContactModalOpen} onClose={() => setIsContactModalOpen(false)} />
    </div>
  )
}
