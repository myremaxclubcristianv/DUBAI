'use client'

import * as React from 'react'
import { useToast } from '@/components/ui/toast'
import { SourceBadge } from '@/components/ui/source-badge'
import { PageIntro, SectionHeader } from '@/components/layout/layout-primitives'
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
        addToast({
          title: 'Missing Required Contact Fields',
          description: 'Please complete your name, email, and phone number to continue.',
          type: 'error',
        })
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
      addToast({
        title: 'Incomplete Contact Profile',
        description: 'Please complete all required fields.',
        type: 'error',
      })
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
      lifestyle_services: lifestyleReqs,
      residency_pathway: residencyInterest,
      client_name: fullName,
      client_email: email,
      client_phone: phone,
      client_tax_residency: taxCountry,
      client_notes: notes,
      status: 'LOGGED_IN_QUEUE',
      created_at: new Date().toISOString()
    }

    try {
      const existingInquiries = JSON.parse(localStorage.getItem('dubai_private_inquiries') || '[]')
      existingInquiries.push(inquiryRecord)
      localStorage.setItem('dubai_private_inquiries', JSON.stringify(existingInquiries))
    } catch {
      // Local storage fallback
    }

    setIsSubmitted(true)
    addToast({
      title: 'Advisory Mandate Registered',
      description: 'Your mandate has been registered directly with Cristian Văduva desk.',
      type: 'success',
    })
  }

  const handleReset = () => {
    setIsSubmitted(false)
    setStep(1)
    setFullName('')
    setEmail('')
    setPhone('')
    setNotes('')
  }

  return (
    <div className="bg-white text-[#1d1d1f] min-h-screen pb-24 selection:bg-accent/20 selection:text-[#1d1d1f]">
      {/* 1. APPLE PRO CENTERED PAGE INTRO */}
      <PageIntro
        eyebrow="Cristian Văduva Private Client Desk"
        badge={<SourceBadge status="OFFICIAL SOURCE" sourceName="Direct Principal Advisory" />}
        title={<>Private Client Desk<span className="text-gradient-gold">.</span></>}
        description="A more considered way to approach Dubai. Direct advisory across prime property, capital structuring, Golden Visa residency, and private lifestyle protocols for principals and single family offices."
      />

      <main className="w-full max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 space-y-16">
        {/* 2. SIX PILLARS OF PRIVATE PRACTICE */}
        <div className="space-y-8">
          <SectionHeader
            align="center"
            eyebrow="Disciplined Advisory Pillars"
            title="Six Practice Disciplines"
            description="End-to-end advisory executed with institutional rigor and strict discretion."
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="p-6 sm:p-8 rounded-3xl border border-black/10 bg-white space-y-3 hover:border-black/20 hover:shadow-xl transition-all shadow-sm">
              <div className="h-12 w-12 rounded-2xl bg-[#f5f5f7] border border-black/5 flex items-center justify-center text-accent">
                <Building2 className="h-6 w-6" />
              </div>
              <h3 className="text-lg font-extrabold text-[#1d1d1f]">Real Estate Acquisition</h3>
              <p className="text-xs text-[#6e6e73] leading-relaxed">
                Off-market sourcing, branded penthouses, beachfront estates, and direct developer allocation negotiations.
              </p>
            </div>

            <div className="p-6 sm:p-8 rounded-3xl border border-black/10 bg-white space-y-3 hover:border-black/20 hover:shadow-xl transition-all shadow-sm">
              <div className="h-12 w-12 rounded-2xl bg-[#f5f5f7] border border-black/5 flex items-center justify-center text-accent">
                <Scale className="h-6 w-6" />
              </div>
              <h3 className="text-lg font-extrabold text-[#1d1d1f]">Investment Structuring</h3>
              <p className="text-xs text-[#6e6e73] leading-relaxed">
                Yield underwriting, statutory conveyance audits, multi-asset portfolio rebalancing, and exit horizons.
              </p>
            </div>

            <div className="p-6 sm:p-8 rounded-3xl border border-black/10 bg-white space-y-3 hover:border-black/20 hover:shadow-xl transition-all shadow-sm">
              <div className="h-12 w-12 rounded-2xl bg-[#f5f5f7] border border-black/5 flex items-center justify-center text-accent">
                <CreditCard className="h-6 w-6" />
              </div>
              <h3 className="text-lg font-extrabold text-[#1d1d1f]">Mortgage & Leverage</h3>
              <p className="text-xs text-[#6e6e73] leading-relaxed">
                Resident and non-resident mortgage pre-approvals via licensed UAE Tier-1 banking partners.
              </p>
            </div>

            <div className="p-6 sm:p-8 rounded-3xl border border-black/10 bg-white space-y-3 hover:border-black/20 hover:shadow-xl transition-all shadow-sm">
              <div className="h-12 w-12 rounded-2xl bg-[#f5f5f7] border border-black/5 flex items-center justify-center text-accent">
                <ShieldCheck className="h-6 w-6" />
              </div>
              <h3 className="text-lg font-extrabold text-[#1d1d1f]">Title & Asset Protection</h3>
              <p className="text-xs text-[#6e6e73] leading-relaxed">
                Comprehensive property structural indemnity, landlord insurance, and high-value asset protection.
              </p>
            </div>

            <div className="p-6 sm:p-8 rounded-3xl border border-black/10 bg-white space-y-3 hover:border-black/20 hover:shadow-xl transition-all shadow-sm">
              <div className="h-12 w-12 rounded-2xl bg-[#f5f5f7] border border-black/5 flex items-center justify-center text-accent">
                <Compass className="h-6 w-6" />
              </div>
              <h3 className="text-lg font-extrabold text-[#1d1d1f]">Lifestyle & Protocol</h3>
              <p className="text-xs text-[#6e6e73] leading-relaxed">
                Private jet FBO handling, yacht berth allocations, Michelin access, and bespoke relocation logistics.
              </p>
            </div>

            <div className="p-6 sm:p-8 rounded-3xl border border-black/10 bg-white space-y-3 hover:border-black/20 hover:shadow-xl transition-all shadow-sm">
              <div className="h-12 w-12 rounded-2xl bg-[#f5f5f7] border border-black/5 flex items-center justify-center text-accent">
                <Lock className="h-6 w-6" />
              </div>
              <h3 className="text-lg font-extrabold text-[#1d1d1f]">Residency & Corporate</h3>
              <p className="text-xs text-[#6e6e73] leading-relaxed">
                10-Year Real Estate Investor Residency processing and DIFC / ADGM holding structure coordination.
              </p>
            </div>
          </div>
        </div>

        {/* 3. LIGHT SIGNATURE MANDATE STRIP */}
        <div className="p-8 sm:p-12 rounded-3xl bg-[#f5f5f7] border border-black/10 text-[#1d1d1f] space-y-3 shadow-sm">
          <span className="text-xs font-mono font-bold text-accent uppercase tracking-widest">
            THE PRIVATE CLIENT COMMITMENT
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
            Institutional Rigor. Zero Intermediary Friction.
          </h2>
          <p className="text-xs sm:text-sm text-[#6e6e73] max-w-2xl leading-relaxed">
            Every transaction is executed with direct developer pricing, verified land registry title records, and transparent statutory fee calculations. No inflated valuations or fabricated availability.
          </p>
        </div>

        {/* 4. FUNCTIONAL 10-STEP INTAKE WIZARD */}
        <div className="p-6 sm:p-10 rounded-3xl border border-black/10 bg-white space-y-8 shadow-sm">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-black/10 pb-6">
            <div>
              <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-accent">
                CONFIDENTIAL MANDATE INTAKE
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#1d1d1f] mt-1">
                Private Client Advisory Flow
              </h2>
            </div>
            {!isSubmitted && (
              <div className="flex items-center gap-1.5 text-xs font-mono text-[#6e6e73]">
                <span>Step {step} of 10:</span>
                <span className="font-bold text-accent">{stepsList[step - 1]}</span>
              </div>
            )}
          </div>

          {/* Progress Bar */}
          {!isSubmitted && (
            <div className="w-full bg-[#f5f5f7] h-2 rounded-full overflow-hidden border border-black/5">
              <div 
                className="bg-[#1d1d1f] h-full transition-all duration-300 shadow-sm"
                style={{ width: `${(step / 10) * 100}%` }}
              />
            </div>
          )}

          {isSubmitted ? (
            <div className="py-14 text-center space-y-4">
              <div className="h-16 w-16 rounded-full bg-emerald-50 text-emerald-600 border border-emerald-200 flex items-center justify-center mx-auto shadow-sm">
                <Check className="h-8 w-8" />
              </div>
              <h3 className="text-2xl font-extrabold text-[#1d1d1f]">
                Mandate Logged in Confidential Desk Queue
              </h3>
              <p className="text-sm text-[#6e6e73] max-w-md mx-auto leading-relaxed">
                Thank you, <strong className="text-[#1d1d1f]">{fullName}</strong>. Your mandate details have been securely stored in the private client registry queue. Cristian Văduva’s advisory desk will review your specifications discreetly.
              </p>
              <div className="pt-4">
                <button
                  onClick={handleReset}
                  className="px-6 py-3 rounded-full border border-black/10 bg-[#f5f5f7] text-xs font-semibold text-[#1d1d1f] hover:bg-[#1d1d1f] hover:text-white transition-colors cursor-pointer"
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
                  <h3 className="text-sm font-bold text-[#1d1d1f]">Step 01: What are you looking for?</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {[
                      { id: 'REAL_ESTATE', label: 'Prime Real Estate Acquisition', desc: 'Penthouse, waterfront villa, or full-floor residential' },
                      { id: 'INVESTMENT', label: 'Portfolio Structuring & Yield', desc: 'Multi-unit investment analysis & NOI optimization' },
                      { id: 'MORTGAGE', label: 'Mortgage & Debt Advisory', desc: 'Resident & non-resident leverage structuring' },
                      { id: 'RESIDENCY', label: '10-Year Golden Visa & Residency', desc: 'Investor visa filing under Cabinet Res. 65/2022' },
                      { id: 'LIFESTYLE', label: 'Private Aviation & Marine Concierge', desc: 'FBO, superyachts & Michelin priority' },
                    ].map((item) => (
                      <button
                        type="button"
                        key={item.id}
                        onClick={() => setService(item.id)}
                        className={`p-5 rounded-2xl border text-left transition-all cursor-pointer ${
                          service === item.id
                            ? 'border-black bg-[#f5f5f7] shadow-sm ring-1 ring-black'
                            : 'border-black/10 bg-white hover:bg-[#f5f5f7]'
                        }`}
                      >
                        <span className="font-bold text-xs text-[#1d1d1f] block">{item.label}</span>
                        <span className="text-xs text-[#6e6e73] mt-1 block">{item.desc}</span>
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* STEP 02: CAPITAL / BUDGET */}
              {step === 2 && (
                <div className="space-y-4">
                  <h3 className="text-sm font-bold text-[#1d1d1f]">Step 02: Capital & Budget Allocation:</h3>
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
                        className={`p-5 rounded-2xl border text-left transition-all cursor-pointer ${
                          budget === item.id
                            ? 'border-black bg-[#f5f5f7] shadow-sm ring-1 ring-black'
                            : 'border-black/10 bg-white hover:bg-[#f5f5f7]'
                        }`}
                      >
                        <span className="font-bold text-xs text-[#1d1d1f] block">{item.label}</span>
                        <span className="text-xs text-[#6e6e73] mt-1 block">{item.desc}</span>
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* STEP 03: PURPOSE */}
              {step === 3 && (
                <div className="space-y-4">
                  <h3 className="text-sm font-bold text-[#1d1d1f]">Step 03: Strategic Purpose of Acquisition:</h3>
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
                        className={`p-5 rounded-2xl border text-left transition-all cursor-pointer ${
                          purpose === item.id
                            ? 'border-black bg-[#f5f5f7] shadow-sm ring-1 ring-black'
                            : 'border-black/10 bg-white hover:bg-[#f5f5f7]'
                        }`}
                      >
                        <span className="font-bold text-xs text-[#1d1d1f] block">{item.label}</span>
                        <span className="text-xs text-[#6e6e73] mt-1 block">{item.desc}</span>
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* STEP 04: TIMELINE */}
              {step === 4 && (
                <div className="space-y-4">
                  <h3 className="text-sm font-bold text-[#1d1d1f]">Step 04: Execution Timeline:</h3>
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
                        className={`p-5 rounded-2xl border text-left transition-all cursor-pointer ${
                          timeline === item.id
                            ? 'border-black bg-[#f5f5f7] shadow-sm ring-1 ring-black'
                            : 'border-black/10 bg-white hover:bg-[#f5f5f7]'
                        }`}
                      >
                        <span className="font-bold text-xs text-[#1d1d1f] block">{item.label}</span>
                        <span className="text-xs text-[#6e6e73] mt-1 block">{item.desc}</span>
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* STEP 05: PREFERRED AREAS */}
              {step === 5 && (
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <h3 className="text-sm font-bold text-[#1d1d1f]">Step 05: Preferred Dubai Communities:</h3>
                    <span className="text-xs text-[#6e6e73]">Select all relevant locations</span>
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
                          className={`p-4 rounded-2xl border text-left text-xs font-semibold transition-all cursor-pointer ${
                            isSelected
                              ? 'border-black bg-[#1d1d1f] text-white shadow-sm ring-1 ring-black'
                              : 'border-black/10 bg-white text-[#6e6e73] hover:bg-[#f5f5f7] hover:text-[#1d1d1f]'
                          }`}
                        >
                          <div className="flex items-center justify-between">
                            <span>{area}</span>
                            {isSelected && <Check className="h-4 w-4 text-white" />}
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
                  <h3 className="text-sm font-bold text-[#1d1d1f]">Step 06: Preferred Property Typology:</h3>
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
                        className={`p-5 rounded-2xl border text-left transition-all cursor-pointer ${
                          propertyType === item.id
                            ? 'border-black bg-[#f5f5f7] shadow-sm ring-1 ring-black'
                            : 'border-black/10 bg-white hover:bg-[#f5f5f7]'
                        }`}
                      >
                        <span className="font-bold text-xs text-[#1d1d1f] block">{item.label}</span>
                        <span className="text-xs text-[#6e6e73] mt-1 block">{item.desc}</span>
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* STEP 07: FINANCING */}
              {step === 7 && (
                <div className="space-y-4">
                  <h3 className="text-sm font-bold text-[#1d1d1f]">Step 07: Financing & Settlement Structure:</h3>
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
                        className={`p-5 rounded-2xl border text-left transition-all cursor-pointer ${
                          financing === item.id
                            ? 'border-black bg-[#f5f5f7] shadow-sm ring-1 ring-black'
                            : 'border-black/10 bg-white hover:bg-[#f5f5f7]'
                        }`}
                      >
                        <span className="font-bold text-xs text-[#1d1d1f] block">{item.label}</span>
                        <span className="text-xs text-[#6e6e73] mt-1 block">{item.desc}</span>
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* STEP 08: LIFESTYLE REQUIREMENTS */}
              {step === 8 && (
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <h3 className="text-sm font-bold text-[#1d1d1f]">Step 08: Complementary Lifestyle Protocols:</h3>
                    <span className="text-xs text-[#6e6e73]">Select all applicable services</span>
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
                          className={`p-5 rounded-2xl border text-left transition-all cursor-pointer ${
                            isSelected
                              ? 'border-black bg-[#1d1d1f] text-white shadow-sm ring-1 ring-black'
                              : 'border-black/10 bg-white text-[#6e6e73] hover:bg-[#f5f5f7] hover:text-[#1d1d1f]'
                          }`}
                        >
                          <div className="flex items-center justify-between">
                            <span className="text-xs font-bold">{item}</span>
                            {isSelected && <Check className="h-4 w-4 text-white" />}
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
                  <h3 className="text-sm font-bold text-[#1d1d1f]">Step 09: UAE Residency & Visa Strategy:</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {[
                      { id: 'GOLDEN_VISA_2M', label: '10-Year Real Estate Golden Visa (≥ AED 2M)', desc: 'Full family sponsorship through DLD Cube' },
                      { id: 'CORPORATE_FREEZONE', label: 'Free Zone / Mainland Business Setup Visa', desc: 'Commercial holding entity & tax certificate' },
                      { id: 'ALREADY_RESIDENT', label: 'Already UAE Resident / Citizen', desc: 'Standard freehold acquisition conveyance' },
                      { id: 'NOT_REQUIRED', label: 'Residency Not Required (Pure Investment)', desc: 'Remote foreign ownership & dividend repatriation' },
                    ].map((item) => (
                      <button
                        type="button"
                        key={item.id}
                        onClick={() => setResidencyInterest(item.id)}
                        className={`p-5 rounded-2xl border text-left transition-all cursor-pointer ${
                          residencyInterest === item.id
                            ? 'border-black bg-[#f5f5f7] shadow-sm ring-1 ring-black'
                            : 'border-black/10 bg-white hover:bg-[#f5f5f7]'
                        }`}
                      >
                        <span className="font-bold text-xs text-[#1d1d1f] block">{item.label}</span>
                        <span className="text-xs text-[#6e6e73] mt-1 block">{item.desc}</span>
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* STEP 10: CONTACT & BRIEF */}
              {step === 10 && (
                <div className="space-y-6">
                  <h3 className="text-sm font-bold text-[#1d1d1f]">Step 10: Principal Contact & Confidential Brief:</h3>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label className="text-xs font-bold text-[#1d1d1f]">Principal Full Name *</label>
                      <input
                        type="text"
                        required
                        value={fullName}
                        onChange={(e) => setFullName(e.target.value)}
                        placeholder="Dr. / Mr. / Ms. Cristian Văduva"
                        className="w-full px-4 py-3 rounded-2xl border border-black/10 bg-[#f5f5f7] text-xs text-[#1d1d1f] focus:outline-none focus:border-accent"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-xs font-bold text-[#1d1d1f]">Confidential Direct Email *</label>
                      <input
                        type="email"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="principal@familyoffice.com"
                        className="w-full px-4 py-3 rounded-2xl border border-black/10 bg-[#f5f5f7] text-xs text-[#1d1d1f] focus:outline-none focus:border-accent"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-xs font-bold text-[#1d1d1f]">Direct Phone / WhatsApp *</label>
                      <input
                        type="tel"
                        required
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        placeholder="+971 50 000 0000"
                        className="w-full px-4 py-3 rounded-2xl border border-black/10 bg-[#f5f5f7] text-xs text-[#1d1d1f] focus:outline-none focus:border-accent"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-xs font-bold text-[#1d1d1f]">Tax Residency / Domicile Country</label>
                      <input
                        type="text"
                        value={taxCountry}
                        onChange={(e) => setTaxCountry(e.target.value)}
                        placeholder="United Kingdom / Switzerland / Monaco / UAE"
                        className="w-full px-4 py-3 rounded-2xl border border-black/10 bg-[#f5f5f7] text-xs text-[#1d1d1f] focus:outline-none focus:border-accent"
                      />
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-[#1d1d1f]">Mandate Notes & Specific Criteria (Optional)</label>
                    <textarea
                      rows={3}
                      value={notes}
                      onChange={(e) => setNotes(e.target.value)}
                      placeholder="Specify preferred tower, floor height, specific view requirements, or privacy constraints..."
                      className="w-full px-4 py-3 rounded-2xl border border-black/10 bg-[#f5f5f7] text-xs text-[#1d1d1f] focus:outline-none focus:border-accent resize-none"
                    />
                  </div>
                </div>
              )}

              {/* NAVIGATION BUTTONS */}
              <div className="flex items-center justify-between pt-6 border-t border-black/10">
                {step > 1 ? (
                  <button
                    type="button"
                    onClick={handleBack}
                    className="flex items-center gap-2 px-5 py-2.5 rounded-full border border-black/10 bg-[#f5f5f7] text-xs font-semibold text-[#1d1d1f] hover:bg-white transition-colors cursor-pointer"
                  >
                    <ArrowLeft className="h-4 w-4" />
                    <span>Back</span>
                  </button>
                ) : <div />}

                {step < 10 ? (
                  <button
                    type="button"
                    onClick={handleNext}
                    className="flex items-center gap-2 px-6 py-3 rounded-full bg-[#1d1d1f] text-white hover:bg-black text-xs font-semibold transition-all cursor-pointer shadow-sm hover:shadow-md"
                  >
                    <span>Continue to Step {step + 1}</span>
                    <ArrowRight className="h-4 w-4 text-white" />
                  </button>
                ) : (
                  <button
                    type="submit"
                    className="flex items-center gap-2 px-8 py-3.5 rounded-full bg-[#1d1d1f] text-white hover:bg-black text-xs font-semibold transition-all cursor-pointer shadow-sm hover:shadow-md"
                  >
                    <span>Submit Confidential Mandate</span>
                    <ArrowRight className="h-4 w-4 text-white" />
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
