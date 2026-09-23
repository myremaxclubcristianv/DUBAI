'use client'

import * as React from 'react'
import { useToast } from '@/components/ui/toast'
import {
  ShieldCheck,
  ArrowRight,
  ArrowLeft,
  Building2,
  Scale,
  CreditCard,
  Lock,
  Compass,
  Check,
} from 'lucide-react'

export default function PrivateClientPage() {
  const { addToast } = useToast()

  // 10-Step Inquiry Wizard State
  const [step, setStep] = React.useState<number>(1)
  
  // Step 1: Category
  const [service, setService] = React.useState<string>('REAL_ESTATE')
  // Step 2: Budget
  const [budget, setBudget] = React.useState<string>('15M_30M')
  // Step 3: Purpose
  const [purpose, setPurpose] = React.useState<string>('RESIDENCE')
  // Step 4: Timeline
  const [timeline, setTimeline] = React.useState<string>('1_3_MONTHS')
  // Step 5: Areas
  const [areas, setAreas] = React.useState<string[]>(['Palm Jumeirah', 'Downtown Dubai'])
  // Step 6: Property Type
  const [propertyType, setPropertyType] = React.useState<string>('PENTHOUSE')
  // Step 7: Financing
  const [financing, setFinancing] = React.useState<string>('CASH')
  // Step 8: Lifestyle Requirements
  const [lifestyleReqs, setLifestyleReqs] = React.useState<string[]>(['Private Aviation / FBO', 'Concierge'])
  // Step 9: Residency Interest
  const [residencyInterest, setResidencyInterest] = React.useState<string>('GOLDEN_VISA_2M')
  // Step 10: Contact Details
  const [fullName, setFullName] = React.useState<string>('')
  const [email, setEmail] = React.useState<string>('')
  const [phone, setPhone] = React.useState<string>('')
  const [taxCountry, setTaxCountry] = React.useState<string>('United Arab Emirates')
  const [notes, setNotes] = React.useState<string>('')
  const [isSubmitted, setIsSubmitted] = React.useState<boolean>(false)

  const stepsList = [
    'Service',
    'Capital',
    'Purpose',
    'Timeline',
    'Preferred Areas',
    'Property Type',
    'Financing',
    'Lifestyle',
    'Residency',
    'Contact & Brief'
  ]

  const toggleArea = (area: string) => {
    setAreas((prev) => 
      prev.includes(area) ? prev.filter((a) => a !== area) : [...prev, area]
    )
  }

  const toggleLifestyle = (item: string) => {
    setLifestyleReqs((prev) => 
      prev.includes(item) ? prev.filter((l) => l !== item) : [...prev, item]
    )
  }

  const handleNext = () => {
    if (step === 10) {
      if (!fullName.trim() || !email.trim() || !phone.trim()) {
        addToast('Please complete all required contact fields', 'error')
        return
      }
    }
    setStep((prev) => Math.min(prev + 1, 10))
  }

  const handleBack = () => {
    setStep((prev) => Math.max(prev - 1, 1))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    if (!fullName.trim() || !email.trim() || !phone.trim()) {
      addToast('Please complete all contact details', 'error')
      return
    }

    const inquiryRecord = {
      id: `inquiry-${Date.now()}`,
      service_category: service,
      budget_tier: budget,
      purpose,
      timeline,
      preferred_areas: areas,
      property_type: propertyType,
      financing_structure: financing,
      lifestyle_requirements: lifestyleReqs,
      residency_interest: residencyInterest,
      client_name: fullName,
      client_email: email,
      client_phone: phone,
      tax_residency: taxCountry,
      notes,
      created_at: new Date().toISOString(),
      status: 'CONFIDENTIAL_QUEUE',
    }

    try {
      const existing = JSON.parse(localStorage.getItem('dubai_crm_leads') || '[]')
      localStorage.setItem('dubai_crm_leads', JSON.stringify([inquiryRecord, ...existing]))
    } catch {}

    setIsSubmitted(true)
    addToast('Private advisory mandate logged in confidential client queue', 'success')
  }

  const handleReset = () => {
    setStep(1)
    setIsSubmitted(false)
    setFullName('')
    setEmail('')
    setPhone('')
    setNotes('')
  }

  return (
    <div className="bg-white text-text-primary min-h-screen pb-24">
      {/* 1. QUIET LUXURY EDITORIAL HERO */}
      <section className="pt-16 pb-20 border-b border-border bg-gradient-to-b from-surface-subtle via-white to-surface">
        <div className="w-full max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-border text-xs font-semibold text-text-secondary shadow-2xs">
            <span className="h-2 w-2 rounded-full bg-accent" />
            <span>CRISTIAN VĂDUVA PRIVATE CLIENT ADVISORY</span>
          </div>

          <div className="space-y-3">
            <span className="text-xs font-mono font-bold tracking-widest text-accent uppercase block">
              PRIVATE ADVISORY DESK
            </span>
            <h1 className="text-5xl sm:text-6xl md:text-7xl font-black tracking-tight text-text-primary uppercase leading-[0.95]">
              A more considered way to approach Dubai.
            </h1>
          </div>

          <p className="text-lg sm:text-xl text-text-secondary max-w-2xl mx-auto font-light leading-relaxed">
            Property · Capital · Residency · Lifestyle · Private advisory for principals, investors and family offices.
          </p>

          <div className="pt-2 flex flex-wrap items-center justify-center gap-6 text-xs text-text-muted font-mono">
            <span>DLD Title Deed Registry</span>
            <span>•</span>
            <span>Statutory Conveyance</span>
            <span>•</span>
            <span>Strict Client Discretion</span>
          </div>
        </div>
      </section>

      <main className="w-full max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 space-y-16">
        {/* 2. SIX PILLARS OF PRIVATE PRACTICE */}
        <div className="space-y-6">
          <div className="text-center space-y-2 max-w-2xl mx-auto">
            <span className="text-[11px] font-mono uppercase font-bold text-accent tracking-widest">
              DISCIPLINED ADVISORY PILLARS
            </span>
            <h2 className="text-3xl font-extrabold tracking-tight text-text-primary">
              Six Practice Disciplines
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="p-6 rounded-2xl border border-border bg-white space-y-3 hover:border-accent transition-colors">
              <div className="h-10 w-10 rounded-xl bg-surface border border-border flex items-center justify-center text-accent">
                <Building2 className="h-5 w-5" />
              </div>
              <h3 className="text-base font-bold text-text-primary">Real Estate Acquisition</h3>
              <p className="text-xs text-text-secondary leading-relaxed">
                Off-market sourcing, branded penthouses, beachfront estates, and direct developer allocation negotiations.
              </p>
            </div>

            <div className="p-6 rounded-2xl border border-border bg-white space-y-3 hover:border-accent transition-colors">
              <div className="h-10 w-10 rounded-xl bg-surface border border-border flex items-center justify-center text-accent">
                <Scale className="h-5 w-5" />
              </div>
              <h3 className="text-base font-bold text-text-primary">Investment Structuring</h3>
              <p className="text-xs text-text-secondary leading-relaxed">
                Yield underwriting, statutory conveyance audits, multi-asset portfolio rebalancing, and exit horizons.
              </p>
            </div>

            <div className="p-6 rounded-2xl border border-border bg-white space-y-3 hover:border-accent transition-colors">
              <div className="h-10 w-10 rounded-xl bg-surface border border-border flex items-center justify-center text-accent">
                <CreditCard className="h-5 w-5" />
              </div>
              <h3 className="text-base font-bold text-text-primary">Mortgage & Leverage</h3>
              <p className="text-xs text-text-secondary leading-relaxed">
                Resident and non-resident mortgage pre-approvals via licensed UAE Tier-1 banking partners.
              </p>
            </div>

            <div className="p-6 rounded-2xl border border-border bg-white space-y-3 hover:border-accent transition-colors">
              <div className="h-10 w-10 rounded-xl bg-surface border border-border flex items-center justify-center text-accent">
                <ShieldCheck className="h-5 w-5" />
              </div>
              <h3 className="text-base font-bold text-text-primary">Title & Asset Protection</h3>
              <p className="text-xs text-text-secondary leading-relaxed">
                Comprehensive property structural indemnity, landlord insurance, and high-value asset protection.
              </p>
            </div>

            <div className="p-6 rounded-2xl border border-border bg-white space-y-3 hover:border-accent transition-colors">
              <div className="h-10 w-10 rounded-xl bg-surface border border-border flex items-center justify-center text-accent">
                <Compass className="h-5 w-5" />
              </div>
              <h3 className="text-base font-bold text-text-primary">Lifestyle & Protocol</h3>
              <p className="text-xs text-text-secondary leading-relaxed">
                Private jet FBO handling, yacht berth allocations, Michelin access, and bespoke relocation logistics.
              </p>
            </div>

            <div className="p-6 rounded-2xl border border-border bg-white space-y-3 hover:border-accent transition-colors">
              <div className="h-10 w-10 rounded-xl bg-surface border border-border flex items-center justify-center text-accent">
                <Lock className="h-5 w-5" />
              </div>
              <h3 className="text-base font-bold text-text-primary">Residency & Corporate</h3>
              <p className="text-xs text-text-secondary leading-relaxed">
                5-Year Real Estate Investor Residency processing and DIFC / ADGM holding structure coordination.
              </p>
            </div>
          </div>
        </div>

        {/* 3. DARK EDITORIAL MANDATE STRIP */}
        <div className="p-8 sm:p-12 rounded-3xl bg-[#111111] text-white space-y-4">
          <span className="text-xs font-mono font-bold text-[#c9a962] uppercase tracking-widest">
            THE PRIVATE CLIENT COMMITMENT
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
            Institutional Rigor. Zero Intermediary Friction.
          </h2>
          <p className="text-xs sm:text-sm text-white/70 max-w-2xl leading-relaxed">
            Every transaction is executed with direct developer pricing, verified land registry title records, and transparent statutory fee calculations. No inflated valuations or fabricated availability.
          </p>
        </div>

        {/* 4. FUNCTIONAL 10-STEP INTAKE WIZARD */}
        <div className="p-8 sm:p-10 rounded-3xl border border-border bg-surface space-y-8">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-border pb-6">
            <div>
              <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-accent">
                CONFIDENTIAL MANDATE INTAKE
              </span>
              <h2 className="text-2xl font-extrabold text-text-primary mt-0.5">
                Private Client Advisory Flow
              </h2>
            </div>
            {!isSubmitted && (
              <div className="flex items-center gap-1.5 text-xs font-mono text-text-muted">
                <span>Step {step} of 10:</span>
                <span className="font-bold text-text-primary">{stepsList[step - 1]}</span>
              </div>
            )}
          </div>

          {/* Progress Bar */}
          {!isSubmitted && (
            <div className="w-full bg-border h-1.5 rounded-full overflow-hidden">
              <div 
                className="bg-accent h-full transition-all duration-300"
                style={{ width: `${(step / 10) * 100}%` }}
              />
            </div>
          )}

          {isSubmitted ? (
            <div className="py-12 text-center space-y-4">
              <div className="h-14 w-14 rounded-full bg-emerald-100 text-emerald-800 flex items-center justify-center mx-auto">
                <Check className="h-7 w-7" />
              </div>
              <h3 className="text-2xl font-extrabold text-text-primary">
                Mandate Logged in Confidential Desk Queue
              </h3>
              <p className="text-xs sm:text-sm text-text-secondary max-w-md mx-auto leading-relaxed">
                Thank you, <strong className="text-text-primary">{fullName}</strong>. Your mandate details have been securely stored in the local registry queue. Cristian Văduva’s advisory desk will review your specifications discreetly.
              </p>
              <div className="pt-4">
                <button
                  onClick={handleReset}
                  className="px-6 py-2.5 rounded-xl border border-border bg-white text-xs font-bold text-text-primary hover:bg-surface transition-colors cursor-pointer"
                >
                  Submit Another Advisory Mandate
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-8">
              {/* STEP 01: SERVICE CATEGORY */}
              {step === 1 && (
                <div className="space-y-4">
                  <h3 className="text-sm font-bold text-text-primary">Step 01: What are you looking for?</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {[
                      { id: 'REAL_ESTATE', label: 'Prime Real Estate Acquisition', desc: 'Penthouse, waterfront villa, or full-floor residential' },
                      { id: 'INVESTMENT', label: 'Portfolio Structuring & Yield', desc: 'Multi-unit investment analysis & NOI optimization' },
                      { id: 'MORTGAGE', label: 'Mortgage & Debt Advisory', desc: 'Resident & non-resident leverage structuring' },
                      { id: 'RESIDENCY', label: '5-Year Golden Visa & Residency', desc: 'Investor visa filing under Cabinet Res. 65/2022' },
                      { id: 'LIFESTYLE', label: 'Private Aviation & Marine Concierge', desc: 'FBO, superyachts & Michelin priority' },
                    ].map((item) => (
                      <button
                        type="button"
                        key={item.id}
                        onClick={() => setService(item.id)}
                        className={`p-4 rounded-xl border text-left transition-all cursor-pointer ${
                          service === item.id
                            ? 'border-accent bg-white shadow-xs ring-1 ring-accent'
                            : 'border-border bg-surface-subtle hover:bg-white'
                        }`}
                      >
                        <span className="font-bold text-xs text-text-primary block">{item.label}</span>
                        <span className="text-[11px] text-text-muted mt-0.5 block">{item.desc}</span>
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* STEP 02: CAPITAL / BUDGET */}
              {step === 2 && (
                <div className="space-y-4">
                  <h3 className="text-sm font-bold text-text-primary">Step 02: Capital & Budget Allocation:</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                    {[
                      { id: '2M_5M', label: 'AED 2,000,000 – 5,000,000', desc: 'Prime 1-2BR / Golden Visa threshold' },
                      { id: '5M_15M', label: 'AED 5,000,000 – 15,000,000', desc: 'Luxury residences & duplexes' },
                      { id: '15M_30M', label: 'AED 15,000,000 – 30,000,000', desc: 'Branded penthouses & waterfront villas' },
                      { id: '30M_75M', label: 'AED 30,000,000 – 75,000,000', desc: 'Trophy beachfront mansions' },
                      { id: '75M_PLUS', label: 'AED 75,000,000+', desc: 'Ultra-prime architectural estates' },
                      { id: 'COMMERCIAL', label: 'Institutional / Commercial', desc: 'Full buildings & mixed-use plots' },
                    ].map((item) => (
                      <button
                        type="button"
                        key={item.id}
                        onClick={() => setBudget(item.id)}
                        className={`p-4 rounded-xl border text-left transition-all cursor-pointer ${
                          budget === item.id
                            ? 'border-accent bg-white shadow-xs ring-1 ring-accent'
                            : 'border-border bg-surface-subtle hover:bg-white'
                        }`}
                      >
                        <span className="font-bold text-xs text-text-primary block">{item.label}</span>
                        <span className="text-[11px] text-text-muted mt-0.5 block">{item.desc}</span>
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* STEP 03: PURPOSE */}
              {step === 3 && (
                <div className="space-y-4">
                  <h3 className="text-sm font-bold text-text-primary">Step 03: Strategic Purpose of Acquisition:</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                    {[
                      { id: 'RESIDENCE', label: 'Primary Family Residence', desc: 'Immediate luxury living & school zoning' },
                      { id: 'INVESTMENT', label: 'Rental Yield & Cash Flow', desc: 'Maximum NOI & tenant management' },
                      { id: 'SECOND_HOME', label: 'Holiday / Second Home', desc: 'Seasonal Dubai residence & lifestyle' },
                      { id: 'BUSINESS', label: 'Corporate Office / Business', desc: 'Headquarters & commercial footprint' },
                      { id: 'DIVERSIFICATION', label: 'Capital Preservation & FX Hedge', desc: 'USD-pegged hard asset diversification' },
                    ].map((item) => (
                      <button
                        type="button"
                        key={item.id}
                        onClick={() => setPurpose(item.id)}
                        className={`p-4 rounded-xl border text-left transition-all cursor-pointer ${
                          purpose === item.id
                            ? 'border-accent bg-white shadow-xs ring-1 ring-accent'
                            : 'border-border bg-surface-subtle hover:bg-white'
                        }`}
                      >
                        <span className="font-bold text-xs text-text-primary block">{item.label}</span>
                        <span className="text-[11px] text-text-muted mt-0.5 block">{item.desc}</span>
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* STEP 04: TIMELINE */}
              {step === 4 && (
                <div className="space-y-4">
                  <h3 className="text-sm font-bold text-text-primary">Step 04: Execution Timeline:</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
                    {[
                      { id: 'IMMEDIATE', label: 'Immediate (< 30 Days)', desc: 'Funds ready for immediate deployment' },
                      { id: '1_3_MONTHS', label: '1 to 3 Months', desc: 'Active search & due diligence phase' },
                      { id: '3_6_MONTHS', label: '3 to 6 Months', desc: 'Market analysis & upcoming launches' },
                      { id: 'DISCRETIONARY', label: 'Discretionary Horizon', desc: 'Monitoring specific off-market assets' },
                    ].map((item) => (
                      <button
                        type="button"
                        key={item.id}
                        onClick={() => setTimeline(item.id)}
                        className={`p-4 rounded-xl border text-left transition-all cursor-pointer ${
                          timeline === item.id
                            ? 'border-accent bg-white shadow-xs ring-1 ring-accent'
                            : 'border-border bg-surface-subtle hover:bg-white'
                        }`}
                      >
                        <span className="font-bold text-xs text-text-primary block">{item.label}</span>
                        <span className="text-[11px] text-text-muted mt-0.5 block">{item.desc}</span>
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* STEP 05: PREFERRED AREAS */}
              {step === 5 && (
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <h3 className="text-sm font-bold text-text-primary">Step 05: Preferred Dubai Communities:</h3>
                    <span className="text-xs text-text-muted">Select all relevant locations</span>
                  </div>
                  <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
                    {[
                      'Palm Jumeirah',
                      'Downtown Dubai',
                      'DIFC',
                      'Dubai Hills Estate',
                      'Emirates Hills',
                      'Business Bay',
                      'Jumeirah Bay Island',
                      'Dubai Marina',
                      'Bluewaters Island',
                      'Al Barari',
                      'District One (MBR City)',
                      'Flexible / Advisory Recommended'
                    ].map((area) => {
                      const isSelected = areas.includes(area)
                      return (
                        <button
                          type="button"
                          key={area}
                          onClick={() => toggleArea(area)}
                          className={`p-3 rounded-xl border text-left text-xs font-semibold transition-all cursor-pointer ${
                            isSelected
                              ? 'border-accent bg-white text-text-primary shadow-xs ring-1 ring-accent'
                              : 'border-border bg-surface-subtle text-text-secondary hover:bg-white'
                          }`}
                        >
                          <div className="flex items-center justify-between">
                            <span>{area}</span>
                            {isSelected && <Check className="h-3.5 w-3.5 text-accent" />}
                          </div>
                        </button>
                      )
                    })}
                  </div>
                </div>
              )}

              {/* STEP 06: PROPERTY TYPE */}
              {step === 6 && (
                <div className="space-y-4">
                  <h3 className="text-sm font-bold text-text-primary">Step 06: Preferred Property Typology:</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                    {[
                      { id: 'PENTHOUSE', label: 'Branded Penthouse / Sky Villa', desc: 'Panoramic city or sea skyline' },
                      { id: 'WATERFRONT_VILLA', label: 'Waterfront / Beach Villa', desc: 'Direct sea access & private plots' },
                      { id: 'GOLF_VILLA', label: 'Golf Course Villa / Mansion', desc: 'Greenery & championship courses' },
                      { id: 'FULL_FLOOR', label: 'Full Floor Residential', desc: 'Maximum privacy & bespoke fit-outs' },
                      { id: 'LUXURY_APARTMENT', label: 'Prime 2–4 Bedroom Residence', desc: 'High-amenity residential tower' },
                      { id: 'OFF_PLAN_PORTFOLIO', label: 'Off-Plan Development Allocation', desc: 'Early launch phase pricing' },
                    ].map((item) => (
                      <button
                        type="button"
                        key={item.id}
                        onClick={() => setPropertyType(item.id)}
                        className={`p-4 rounded-xl border text-left transition-all cursor-pointer ${
                          propertyType === item.id
                            ? 'border-accent bg-white shadow-xs ring-1 ring-accent'
                            : 'border-border bg-surface-subtle hover:bg-white'
                        }`}
                      >
                        <span className="font-bold text-xs text-text-primary block">{item.label}</span>
                        <span className="text-[11px] text-text-muted mt-0.5 block">{item.desc}</span>
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* STEP 07: FINANCING */}
              {step === 7 && (
                <div className="space-y-4">
                  <h3 className="text-sm font-bold text-text-primary">Step 07: Financing & Settlement Structure:</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {[
                      { id: 'CASH', label: '100% Cash Settlement', desc: 'Fast trustee transfer via bank manager cheques' },
                      { id: 'UAE_MORTGAGE', label: 'UAE Bank Mortgage', desc: 'Up to 80% LTV for residents / 60% non-residents' },
                      { id: 'INTERNATIONAL_PRIVATE_BANK', label: 'International / Private Bank Facility', desc: 'Cross-border credit or Lombard facility' },
                      { id: 'DEVELOPER_PAYMENT_PLAN', label: 'Developer Installment Plan', desc: 'Direct construction-linked or post-handover plan' },
                    ].map((item) => (
                      <button
                        type="button"
                        key={item.id}
                        onClick={() => setFinancing(item.id)}
                        className={`p-4 rounded-xl border text-left transition-all cursor-pointer ${
                          financing === item.id
                            ? 'border-accent bg-white shadow-xs ring-1 ring-accent'
                            : 'border-border bg-surface-subtle hover:bg-white'
                        }`}
                      >
                        <span className="font-bold text-xs text-text-primary block">{item.label}</span>
                        <span className="text-[11px] text-text-muted mt-0.5 block">{item.desc}</span>
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* STEP 08: LIFESTYLE REQUIREMENTS */}
              {step === 8 && (
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <h3 className="text-sm font-bold text-text-primary">Step 08: Complementary Lifestyle Protocols:</h3>
                    <span className="text-xs text-text-muted">Select all applicable services</span>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                    {[
                      'Private Aviation / FBO Handling',
                      'Superyacht Berth Allocation',
                      'Executive & Family Protection',
                      'Tier-1 Schooling & Tutoring Placement',
                      'Fine Art Advisory & Custody',
                      'Michelin & Hospitality Concierge'
                    ].map((item) => {
                      const isSelected = lifestyleReqs.includes(item)
                      return (
                        <button
                          type="button"
                          key={item}
                          onClick={() => toggleLifestyle(item)}
                          className={`p-4 rounded-xl border text-left transition-all cursor-pointer ${
                            isSelected
                              ? 'border-accent bg-white shadow-xs ring-1 ring-accent'
                              : 'border-border bg-surface-subtle hover:bg-white'
                          }`}
                        >
                          <div className="flex items-center justify-between">
                            <span className="text-xs font-bold text-text-primary">{item}</span>
                            {isSelected && <Check className="h-3.5 w-3.5 text-accent" />}
                          </div>
                        </button>
                      )
                    })}
                  </div>
                </div>
              )}

              {/* STEP 09: RESIDENCY INTEREST */}
              {step === 9 && (
                <div className="space-y-4">
                  <h3 className="text-sm font-bold text-text-primary">Step 09: UAE Residency & Visa Strategy:</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {[
                      { id: 'GOLDEN_VISA_2M', label: '5-Year Real Estate Golden Visa (≥ AED 2M)', desc: 'Full family sponsorship through DLD Cube' },
                      { id: 'CORPORATE_FREEZONE', label: 'Free Zone / Mainland Business Setup Visa', desc: 'Commercial holding entity & tax certificate' },
                      { id: 'ALREADY_RESIDENT', label: 'Already UAE Resident / Citizen', desc: 'Standard freehold acquisition conveyance' },
                      { id: 'NOT_REQUIRED', label: 'Residency Not Required (Pure Investment)', desc: 'Remote foreign ownership & dividend repatriation' },
                    ].map((item) => (
                      <button
                        type="button"
                        key={item.id}
                        onClick={() => setResidencyInterest(item.id)}
                        className={`p-4 rounded-xl border text-left transition-all cursor-pointer ${
                          residencyInterest === item.id
                            ? 'border-accent bg-white shadow-xs ring-1 ring-accent'
                            : 'border-border bg-surface-subtle hover:bg-white'
                        }`}
                      >
                        <span className="font-bold text-xs text-text-primary block">{item.label}</span>
                        <span className="text-[11px] text-text-muted mt-0.5 block">{item.desc}</span>
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* STEP 10: CONTACT & BRIEF */}
              {step === 10 && (
                <div className="space-y-6">
                  <h3 className="text-sm font-bold text-text-primary">Step 10: Principal Contact & Confidential Brief:</h3>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label className="text-xs font-bold text-text-primary">Principal Full Name *</label>
                      <input
                        type="text"
                        required
                        value={fullName}
                        onChange={(e) => setFullName(e.target.value)}
                        placeholder="Lord / Lady / Dr. / Mr. Cristian Văduva"
                        className="w-full px-4 py-3 rounded-xl border border-border bg-white text-xs text-text-primary focus:outline-none focus:border-accent"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-xs font-bold text-text-primary">Confidential Direct Email *</label>
                      <input
                        type="email"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="principal@familyoffice.com"
                        className="w-full px-4 py-3 rounded-xl border border-border bg-white text-xs text-text-primary focus:outline-none focus:border-accent"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-xs font-bold text-text-primary">Direct Phone / WhatsApp *</label>
                      <input
                        type="tel"
                        required
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        placeholder="+971 50 000 0000"
                        className="w-full px-4 py-3 rounded-xl border border-border bg-white text-xs text-text-primary focus:outline-none focus:border-accent"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-xs font-bold text-text-primary">Tax Residency / Domicile Country</label>
                      <input
                        type="text"
                        value={taxCountry}
                        onChange={(e) => setTaxCountry(e.target.value)}
                        placeholder="United Kingdom / Switzerland / Monaco / UAE"
                        className="w-full px-4 py-3 rounded-xl border border-border bg-white text-xs text-text-primary focus:outline-none focus:border-accent"
                      />
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-text-primary">Mandate Notes & Specific Criteria (Optional)</label>
                    <textarea
                      rows={3}
                      value={notes}
                      onChange={(e) => setNotes(e.target.value)}
                      placeholder="Specify preferred tower, floor height, specific view requirements, or privacy constraints..."
                      className="w-full px-4 py-3 rounded-xl border border-border bg-white text-xs text-text-primary focus:outline-none focus:border-accent resize-none"
                    />
                  </div>
                </div>
              )}

              {/* NAVIGATION BUTTONS */}
              <div className="flex items-center justify-between pt-6 border-t border-border">
                {step > 1 ? (
                  <button
                    type="button"
                    onClick={handleBack}
                    className="flex items-center gap-2 px-5 py-2.5 rounded-xl border border-border bg-white text-xs font-bold text-text-secondary hover:text-text-primary transition-colors cursor-pointer"
                  >
                    <ArrowLeft className="h-4 w-4" />
                    <span>Back</span>
                  </button>
                ) : <div />}

                {step < 10 ? (
                  <button
                    type="button"
                    onClick={handleNext}
                    className="flex items-center gap-2 px-6 py-2.5 rounded-xl bg-text-primary text-white hover:bg-black text-xs font-bold transition-colors cursor-pointer"
                  >
                    <span>Continue to Step {step + 1}</span>
                    <ArrowRight className="h-4 w-4 text-accent" />
                  </button>
                ) : (
                  <button
                    type="submit"
                    className="flex items-center gap-2 px-8 py-3 rounded-xl bg-text-primary text-white hover:bg-black text-xs font-bold transition-colors cursor-pointer shadow-md"
                  >
                    <span>Submit Confidential Mandate</span>
                    <ArrowRight className="h-4 w-4 text-accent" />
                  </button>
                )}
              </div>
            </form>
          )}
        </div>
      </main>
    </div>
  )
}
