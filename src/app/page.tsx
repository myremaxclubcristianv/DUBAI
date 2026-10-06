'use client'

import * as React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { VERIFIED_PROPERTIES } from '@/lib/data/properties'
import { DUBAI_AREAS } from '@/lib/data/areas'
import { useClient } from '@/lib/context/client-context'
import {
  Section,
  Eyebrow,
} from '@/components/layout/layout-primitives'
import { ContactModal } from '@/components/layout/contact-modal'
import {
  ArrowRight,
  ArrowUpRight,
  ShieldCheck,
  Sparkles,
} from 'lucide-react'

export default function Home() {
  const { formatCurrency } = useClient()
  const [isContactModalOpen, setIsContactModalOpen] = React.useState(false)

  // Featured Properties from Verified Data
  const featuredFlagship = VERIFIED_PROPERTIES[0]

  // Atlas Districts
  const atlasDistricts = DUBAI_AREAS.slice(0, 6)

  // Underwriting Engine Interactive State
  const [propertyPriceAED, setPropertyPriceAED] = React.useState(12000000)
  const [expectedGrossYield, setExpectedGrossYield] = React.useState(6.8)
  const [annualServiceChargePerSqft, setAnnualServiceChargePerSqft] = React.useState(22)
  const estimatedAreaSqft = Math.round(propertyPriceAED / 3200)

  // Statutory Calculations
  const dldFee = propertyPriceAED * 0.04
  const adminFee = 4200
  const trusteeFee = propertyPriceAED >= 500000 ? 4200 : 2100
  const conveyanceEstimate = 10500
  const totalStatutoryFees = dldFee + adminFee + trusteeFee + conveyanceEstimate
  const totalAcquisitionCost = propertyPriceAED + totalStatutoryFees

  // Yield & Cashflow Calculations
  const grossAnnualRent = propertyPriceAED * (expectedGrossYield / 100)
  const totalAnnualServiceCharge = annualServiceChargePerSqft * estimatedAreaSqft
  const maintenanceReserve = grossAnnualRent * 0.05
  const netOperatingIncome = Math.max(0, grossAnnualRent - totalAnnualServiceCharge - maintenanceReserve)
  const netYieldUnlevered = totalAcquisitionCost > 0 ? (netOperatingIncome / totalAcquisitionCost) * 100 : 0

  return (
    <div className="flex flex-col min-h-screen bg-white text-slate-900">
      
      {/* ========================================================================= */}
      {/* 01 — HERO: EXACT BLUE GLASS ARCHITECTURE WITH TOWERING BURJ KHALIFA      */}
      {/* ========================================================================= */}
      <section className="relative min-h-[88vh] lg:min-h-[92vh] flex items-center pt-8 pb-14 sm:pt-14 sm:pb-20 border-b border-slate-200/90 bg-gradient-to-b from-[#f0f7ff] via-white to-white overflow-hidden">
        {/* Subtle Architectural Grid Lines */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#0284c708_1px,transparent_1px),linear-gradient(to_bottom,#0284c708_1px,transparent_1px)] bg-[size:4rem_4rem] pointer-events-none" />
        
        {/* Sky Blue Atmospheric Glow */}
        <div className="absolute top-0 right-1/4 w-[650px] h-[650px] bg-sky-200/25 rounded-full blur-[130px] pointer-events-none" />

        <div className="w-full max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-16 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            
            {/* Left 55%: Editorial Copy & Primary CTA */}
            <div className="lg:col-span-7 space-y-7">
              <div className="space-y-4">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#0284c7] animate-pulse" />
                  <span className="text-[10px] sm:text-[11px] font-mono tracking-[0.22em] text-[#0284c7] uppercase font-semibold">
                    DUBAI REAL ESTATE INTELLIGENCE &amp; PRIVATE WEALTH
                  </span>
                </div>
                
                <h1 className="text-[46px] sm:text-[68px] lg:text-[84px] font-light tracking-[-0.04em] leading-[0.96] text-slate-900 font-serif">
                  Dubai,<br />
                  with better<br />
                  <span className="text-[#0284c7] font-serif italic">decisions.</span>
                </h1>
              </div>

              <p className="text-base sm:text-lg text-slate-600 font-light leading-relaxed max-w-2xl">
                Source-led property intelligence, verified market data, and private-client advisory for one of the world&apos;s most dynamic real-estate markets. Sourced directly from published statutory registers and certified developer filings.
              </p>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-4 pt-1">
                <Link
                  href="/properties"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xs bg-[#0284c7] hover:bg-[#0369a1] text-white text-xs font-mono uppercase tracking-[0.14em] font-semibold transition-all shadow-md shadow-sky-500/20"
                >
                  <span>Explore Properties</span>
                  <ArrowRight className="h-4 w-4" />
                </Link>
                <Link
                  href="/market"
                  className="inline-flex items-center gap-1.5 px-5 py-3 rounded-xs bg-white hover:bg-slate-50 text-slate-800 text-xs font-mono uppercase tracking-[0.14em] font-medium transition-colors border border-slate-200"
                >
                  <span>Market Intelligence</span>
                </Link>
                <button
                  type="button"
                  onClick={() => setIsContactModalOpen(true)}
                  className="inline-flex items-center gap-1.5 text-xs font-mono uppercase tracking-[0.14em] text-[#0284c7] hover:text-[#0369a1] transition-colors py-2.5 px-3.5 border border-sky-300 hover:border-[#0284c7] rounded-xs bg-sky-50/60 cursor-pointer font-semibold shadow-2xs"
                >
                  <span>Private Client</span>
                  <ArrowUpRight className="h-3.5 w-3.5" />
                </button>
              </div>

              {/* Verified Provenance Footnote */}
              <div className="pt-4 border-t border-slate-200 flex flex-wrap items-center gap-3 text-[11px] font-mono text-slate-500">
                <div className="flex items-center gap-1.5 text-emerald-700 font-semibold">
                  <ShieldCheck className="h-3.5 w-3.5 text-emerald-600" />
                  <span>DLD Statutory Registry</span>
                </div>
                <span>&bull;</span>
                <span>Law No. 7 (2006)</span>
                <span>&bull;</span>
                <span>Law No. 8 (2007) Escrow</span>
                <span>&bull;</span>
                <span className="text-[#0284c7] font-semibold">100% Foreign Freehold</span>
              </div>
            </div>

            {/* Right 45%: Burj Khalifa Architectural Daylight Photograph & Floating DLD Cadran */}
            <div className="lg:col-span-5 relative">
              <div className="relative aspect-[4/5] w-full overflow-hidden rounded-xs border border-slate-200 bg-slate-100 group shadow-[0_16px_40px_rgba(2,132,199,0.12)]">
                {/* Towering Burj Khalifa with Blue Sky & Glass Reflections */}
                <Image
                  src="https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=2000&q=90"
                  alt="Burj Khalifa and Dubai Architectural Glass Skyline"
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 45vw"
                  className="object-cover transition-transform duration-1000 ease-out group-hover:scale-105"
                />
                
                {/* Subtle gradient overlay to enhance cadran contrast */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/65 via-transparent to-transparent" />

                {/* Floating Architectural Badge */}
                <div className="absolute top-4 right-4 px-3 py-1 bg-white/95 backdrop-blur-md rounded-xs text-[10px] font-mono text-[#0284c7] border border-sky-200 flex items-center gap-1.5 shadow-xs font-semibold">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#0284c7] animate-pulse" />
                  <span>DLD STATUTORY REGISTER</span>
                </div>

                {/* Floating Architectural DLD Information Cadran */}
                <div className="absolute bottom-4 left-4 right-4 p-4 sm:p-5 bg-white/95 backdrop-blur-md rounded-xs border border-slate-200/95 space-y-3 shadow-xl">
                  <div className="flex items-center justify-between border-b border-slate-100 pb-2">
                    <span className="text-[10px] font-mono uppercase tracking-[0.16em] text-slate-600 font-semibold">
                      DLD MARKET BASELINE 2026
                    </span>
                    <span className="text-[10px] font-mono text-emerald-700 uppercase font-semibold">
                      OFFICIAL UAE PEG
                    </span>
                  </div>

                  <div className="grid grid-cols-3 gap-3 font-mono text-xs">
                    <div>
                      <span className="text-[9px] text-slate-400 uppercase block">Transfer Fee</span>
                      <span className="text-slate-900 font-bold text-sm">4.00%</span>
                      <span className="text-[9px] text-slate-500 block">Law No. 7/2006</span>
                    </div>
                    <div>
                      <span className="text-[9px] text-slate-400 uppercase block">Registration</span>
                      <span className="text-slate-900 font-bold text-sm">AED 4,000</span>
                      <span className="text-[9px] text-slate-500 block">per transaction</span>
                    </div>
                    <div>
                      <span className="text-[9px] text-slate-400 uppercase block">USD / AED</span>
                      <span className="text-[#0284c7] font-bold text-sm">3.6725</span>
                      <span className="text-[9px] text-slate-500 block">Official UAE Peg</span>
                    </div>
                  </div>

                  <div className="pt-2 border-t border-slate-100 flex items-center justify-between">
                    <Link
                      href="/sources"
                      className="text-[10px] font-mono uppercase tracking-wider text-[#0284c7] hover:text-[#0369a1] font-semibold inline-flex items-center gap-1"
                    >
                      <span>View Full Statutory Details</span>
                      <ArrowRight className="h-3 w-3" />
                    </Link>
                    <span className="text-[9px] font-mono text-slate-400">DLD &bull; RERA</span>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 02 — THE BIG PICTURE: White Editorial Space & Featured Property Spread     */}
      {/* ========================================================================= */}
      <section className="py-16 sm:py-24 bg-white border-b border-slate-200">
        <div className="w-full max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            
            {/* Left Column: The Big Picture Editorial Statement */}
            <div className="lg:col-span-5 space-y-6">
              <div className="space-y-3">
                <span className="text-[10px] font-mono tracking-[0.24em] uppercase text-[#0284c7] block font-semibold">
                  THE BIG PICTURE
                </span>
                <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-light tracking-[-0.03em] leading-[1.08] text-slate-900 font-serif">
                  Dubai is not one market.<br />
                  <span className="text-slate-500 font-serif italic">It is an archipelago of distinct economic micro-climates.</span>
                </h2>
              </div>

              <p className="text-sm sm:text-base text-slate-600 font-light leading-relaxed">
                From the high-density financial capital of DIFC to the private beachfront enclaves of Palm Jumeirah and the family golf domains of Dubai Hills, every submarket operates under distinct yield curves, foreign ownership tenures, and statutory capital requirements.
              </p>

              <div className="pt-2">
                <Link
                  href="/districts"
                  className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-[0.14em] text-[#0284c7] hover:text-[#0369a1] font-semibold"
                >
                  <span>Explore the Dubai Atlas</span>
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>

            {/* Right Column: Featured Property Spread (16:11 Architectural Spread + Attached Cadran) */}
            <div className="lg:col-span-7">
              {featuredFlagship && (
                <div className="relative rounded-xs border border-slate-200 bg-white shadow-lg overflow-hidden group">
                  <div className="relative aspect-[16/10] sm:aspect-[16/9] w-full overflow-hidden bg-slate-100">
                    <Image
                      src={featuredFlagship.images[0] || 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1600&q=85'}
                      alt={featuredFlagship.title}
                      fill
                      priority
                      sizes="(max-width: 1024px) 100vw, 55vw"
                      className="object-cover transition-transform duration-1000 group-hover:scale-105"
                    />
                    
                    <div className="absolute top-4 left-4 flex gap-2">
                      <span className="px-2.5 py-1 rounded-xs text-[9px] font-mono font-semibold uppercase bg-white/95 backdrop-blur-md text-emerald-700 border border-emerald-200 shadow-xs">
                        DLD VERIFIED
                      </span>
                      <span className="px-2.5 py-1 rounded-xs text-[9px] font-mono font-semibold uppercase bg-white/95 backdrop-blur-md text-[#0284c7] border border-sky-200 shadow-xs">
                        {featuredFlagship.area_name}
                      </span>
                    </div>
                  </div>

                  {/* Attached Architectural Property Cadran */}
                  <div className="p-6 sm:p-7 bg-white space-y-4">
                    <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2">
                      <div>
                        <span className="text-[10px] font-mono uppercase tracking-widest text-slate-400 block">
                          {featuredFlagship.area_name} &bull; {featuredFlagship.property_type}
                        </span>
                        <h3 className="text-xl sm:text-2xl font-light text-slate-900 group-hover:text-[#0284c7] transition-colors mt-0.5">
                          {featuredFlagship.editorial_display_name || featuredFlagship.title}
                        </h3>
                      </div>
                      <div className="font-mono text-xl sm:text-2xl font-semibold text-slate-900 tabular-nums">
                        {formatCurrency(featuredFlagship.asking_price)}
                      </div>
                    </div>

                    <div className="grid grid-cols-3 gap-4 py-3 border-y border-slate-100 font-mono text-xs text-slate-600">
                      <div>
                        <span className="text-[10px] text-slate-400 block uppercase">Bedrooms</span>
                        <span className="text-slate-900 font-medium">{featuredFlagship.bedrooms} En-Suite</span>
                      </div>
                      <div>
                        <span className="text-[10px] text-slate-400 block uppercase">Bathrooms</span>
                        <span className="text-slate-900 font-medium">{featuredFlagship.bathrooms || 5} Baths</span>
                      </div>
                      <div>
                        <span className="text-[10px] text-slate-400 block uppercase">Internal Area</span>
                        <span className="text-slate-900 font-medium">{featuredFlagship.internal_area_sqft.toLocaleString()} sq ft</span>
                      </div>
                    </div>

                    <div className="flex items-center justify-between pt-1">
                      <span className="text-[11px] font-mono text-emerald-700 font-medium flex items-center gap-1.5">
                        <ShieldCheck className="h-3.5 w-3.5" />
                        <span>Law No. 8/2007 Escrow Protected</span>
                      </span>
                      <Link
                        href={`/properties/${featuredFlagship.id}`}
                        className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xs bg-[#0284c7] hover:bg-[#0369a1] text-white text-xs font-mono uppercase tracking-wider font-semibold transition-colors shadow-xs"
                      >
                        <span>View Details</span>
                        <ArrowRight className="h-3.5 w-3.5" />
                      </Link>
                    </div>
                  </div>
                </div>
              )}
            </div>

          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 03 — MARKET DATA STRIP: Full-Width Institutional Information Architecture */}
      {/* ========================================================================= */}
      <section className="border-b border-slate-200 bg-white py-7">
        <div className="w-full max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-16">
          <div className="grid grid-cols-2 lg:grid-cols-4 divide-y lg:divide-y-0 lg:divide-x divide-slate-200">
            
            <div className="py-3 lg:py-0 lg:px-6 first:pl-0 space-y-1">
              <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-slate-500 block font-semibold">
                DUBAI RESIDENTIAL SALES
              </span>
              <div className="text-2xl sm:text-3xl font-light font-mono text-slate-900 tabular-nums font-semibold">
                18,642
              </div>
              <span className="text-xs text-slate-500 font-mono block">TRANSACTIONS</span>
            </div>

            <div className="py-3 lg:py-0 lg:px-6 space-y-1">
              <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-slate-500 block font-semibold">
                AVERAGE PRICE / SQFT
              </span>
              <div className="text-2xl sm:text-3xl font-light font-mono text-[#0284c7] tabular-nums font-semibold">
                AED 1,680
              </div>
              <span className="text-xs text-slate-500 font-mono block">AVG / SQFT</span>
            </div>

            <div className="py-3 lg:py-0 lg:px-6 space-y-1">
              <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-slate-500 block font-semibold">
                TOTAL TRANSACTION VALUE
              </span>
              <div className="text-2xl sm:text-3xl font-light font-mono text-slate-900 tabular-nums font-semibold">
                AED 52.1B
              </div>
              <span className="text-xs text-slate-500 font-mono block">TRANSACTION VALUE</span>
            </div>

            <div className="py-3 lg:py-0 lg:px-6 last:pr-0 space-y-1">
              <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-slate-500 block font-semibold">
                PRIME YIELD
              </span>
              <div className="text-2xl sm:text-3xl font-light font-mono text-emerald-700 tabular-nums font-semibold">
                5.8%
              </div>
              <span className="text-xs text-slate-500 font-mono block">PRIME YIELD</span>
            </div>

          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 04 — DUBAI ATLAS: Explore the Emirates (Blue Aerial Backdrop + Modules)   */}
      {/* ========================================================================= */}
      <section className="py-16 sm:py-24 bg-gradient-to-b from-[#f0f7ff] via-white to-slate-50 border-b border-slate-200 relative overflow-hidden">
        {/* Background Architectural Watermark */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-sky-200/20 rounded-full blur-3xl pointer-events-none" />

        <div className="w-full max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-16 relative z-10 space-y-12">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 border-b border-slate-200">
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#0284c7]" />
                <Eyebrow accent={true}>DUBAI ATLAS &bull; GEOGRAPHIC DOSSIERS</Eyebrow>
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light tracking-[-0.03em] text-slate-900 font-serif">
                Explore the Emirates
              </h2>
              <p className="text-sm text-slate-600 font-light max-w-2xl">
                Geographic dossiers, master developer footprints, and transaction density across Dubai&apos;s core freehold sectors.
              </p>
            </div>

            <Link
              href="/districts"
              className="inline-flex items-center gap-1.5 text-xs font-mono uppercase tracking-[0.14em] text-[#0284c7] hover:text-[#0369a1] transition-colors font-semibold"
            >
              <span>Explore All Districts</span>
              <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          </div>

          {/* District Atlas Modules Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {atlasDistricts.slice(0, 4).map((district) => (
              <Link
                key={district.id}
                href={`/areas/${district.slug}`}
                className="p-5 rounded-xs bg-white border border-slate-200 hover:border-[#0284c7]/60 hover:shadow-md transition-all space-y-4 group flex flex-col justify-between"
              >
                <div className="space-y-3">
                  <div className="relative aspect-[16/10] w-full overflow-hidden rounded-xs bg-slate-100">
                    <Image
                      src={district.image || 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=800&q=80'}
                      alt={district.name}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute top-2.5 left-2.5 px-2 py-0.5 rounded-xs text-[9px] font-mono font-semibold uppercase bg-white/95 text-[#0284c7] border border-sky-100">
                      {district.sector}
                    </div>
                  </div>

                  <div>
                    <h3 className="text-lg font-light text-slate-900 group-hover:text-[#0284c7] transition-colors">
                      {district.name}
                    </h3>
                    <p className="text-xs text-slate-500 font-light mt-1 line-clamp-2 leading-relaxed">
                      {district.description}
                    </p>
                  </div>
                </div>

                <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs font-mono">
                  <span className="text-slate-400 font-semibold">{district.master_developer}</span>
                  <span className="text-[#0284c7] font-semibold group-hover:translate-x-0.5 transition-transform flex items-center gap-1">
                    <span>Atlas</span>
                    <ArrowRight className="h-3 w-3" />
                  </span>
                </div>
              </Link>
            ))}
          </div>

        </div>
      </section>

      {/* ========================================================================= */}
      {/* 05 — UNDERWRITING ENGINE: Private Investment Memorandum                   */}
      {/* ========================================================================= */}
      <Section spacing="room-160" surface="pure" containerSize="wide">
        <div className="space-y-12">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 border-b border-slate-200">
            <div className="space-y-2">
              <Eyebrow>04 &bull; FINANCIAL ARCHITECTURE &bull; STATUTORY LEDGER</Eyebrow>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light tracking-[-0.03em] text-slate-900 font-serif">
                Underwriting Engine
              </h2>
              <p className="text-sm text-slate-600 font-light">
                Institutional due-diligence calculator factoring 4% DLD tariffs, title trustee charges, and net cashflow.
              </p>
            </div>

            <Link
              href="/investment"
              className="inline-flex items-center gap-1.5 text-xs font-mono uppercase tracking-[0.14em] text-[#0284c7] hover:text-[#0369a1] transition-colors font-semibold"
            >
              <span>Full Underwriting Desk</span>
              <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Left 6 cols: Inputs */}
            <div className="lg:col-span-6 p-6 sm:p-8 rounded-xs bg-slate-50 border border-slate-200 space-y-6">
              <div className="space-y-2">
                <div className="flex justify-between items-baseline font-mono">
                  <label className="text-xs uppercase text-slate-500 font-semibold">Target Asset Price (AED)</label>
                  <span className="text-base text-slate-900 font-bold">{formatCurrency(propertyPriceAED)}</span>
                </div>
                <input
                  type="range"
                  min="2000000"
                  max="50000000"
                  step="500000"
                  value={propertyPriceAED}
                  onChange={(e) => setPropertyPriceAED(Number(e.target.value))}
                  className="w-full h-1.5 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-[#0284c7]"
                />
              </div>

              <div className="space-y-2">
                <div className="flex justify-between items-baseline font-mono">
                  <label className="text-xs uppercase text-slate-500 font-semibold">Target Gross Rental Yield</label>
                  <span className="text-base text-[#0284c7] font-bold">{expectedGrossYield}%</span>
                </div>
                <input
                  type="range"
                  min="4.0"
                  max="10.0"
                  step="0.1"
                  value={expectedGrossYield}
                  onChange={(e) => setExpectedGrossYield(Number(e.target.value))}
                  className="w-full h-1.5 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-[#0284c7]"
                />
              </div>

              <div className="space-y-2">
                <div className="flex justify-between items-baseline font-mono">
                  <label className="text-xs uppercase text-slate-500 font-semibold">Service Charges (AED / sqft / yr)</label>
                  <span className="text-base text-slate-900 font-bold">AED {annualServiceChargePerSqft}</span>
                </div>
                <input
                  type="range"
                  min="12"
                  max="45"
                  step="1"
                  value={annualServiceChargePerSqft}
                  onChange={(e) => setAnnualServiceChargePerSqft(Number(e.target.value))}
                  className="w-full h-1.5 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-[#0284c7]"
                />
              </div>

              <div className="p-4 rounded-xs bg-sky-50/70 border border-sky-200 text-xs text-slate-600 space-y-1">
                <span className="font-mono font-semibold text-[#0284c7] block">STATUTORY CONVEYANCING SCHEDULE</span>
                <p>Governed by Executive Council Resolution No. 30 of 2013 and Law No. 7 of 2006.</p>
              </div>
            </div>

            {/* Right 6 cols: Calculated Memorandum Result */}
            <div className="lg:col-span-6 p-6 sm:p-8 rounded-xs bg-white border border-slate-200 shadow-md space-y-6">
              <div className="border-b border-slate-100 pb-4 flex items-center justify-between">
                <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-[#0284c7] font-semibold">
                  INVESTMENT MEMORANDUM SUMMARY
                </span>
                <span className="text-xs font-mono text-emerald-700 font-bold">
                  {propertyPriceAED >= 2000000 ? 'GOLDEN VISA ELIGIBLE' : 'STANDARD'}
                </span>
              </div>

              <div className="space-y-3 font-mono text-xs divide-y divide-slate-100">
                <div className="flex justify-between py-1.5">
                  <span className="text-slate-500">Asset Purchase Price:</span>
                  <span className="text-slate-900 font-medium">{formatCurrency(propertyPriceAED)}</span>
                </div>
                <div className="flex justify-between py-1.5">
                  <span className="text-slate-500">DLD Transfer Fee (4.0%):</span>
                  <span className="text-slate-900 font-medium">{formatCurrency(dldFee)}</span>
                </div>
                <div className="flex justify-between py-1.5">
                  <span className="text-slate-500">Trustee &amp; Admin Conveyance:</span>
                  <span className="text-slate-900 font-medium">{formatCurrency(adminFee + trusteeFee + conveyanceEstimate)}</span>
                </div>
                <div className="flex justify-between py-2 border-t-2 border-slate-200">
                  <span className="text-slate-900 font-bold">Total Acquisition Outlay:</span>
                  <span className="text-slate-900 font-bold text-sm">{formatCurrency(totalAcquisitionCost)}</span>
                </div>
                <div className="flex justify-between py-1.5">
                  <span className="text-slate-500">Gross Annual Rent:</span>
                  <span className="text-[#0284c7] font-semibold">{formatCurrency(grossAnnualRent)}</span>
                </div>
                <div className="flex justify-between py-1.5">
                  <span className="text-slate-500">Annual Net Operating Income:</span>
                  <span className="text-emerald-700 font-bold">{formatCurrency(netOperatingIncome)}</span>
                </div>
              </div>

              <div className="p-4 rounded-xs bg-slate-900 text-white flex items-center justify-between">
                <div>
                  <span className="text-[10px] font-mono text-slate-400 uppercase block tracking-wider">Unlevered Net Yield</span>
                  <span className="text-2xl font-mono font-bold text-[#38bdf8]">{netYieldUnlevered.toFixed(2)}%</span>
                </div>
                <Link
                  href="/investment"
                  className="px-4 py-2 bg-[#0284c7] hover:bg-[#0369a1] text-white text-xs font-mono uppercase tracking-wider rounded-xs font-semibold"
                >
                  Deep Model
                </Link>
              </div>
            </div>
          </div>

        </div>
      </Section>

      {/* ========================================================================= */}
      {/* 06 — PRIVATE CLIENT: Discreet Acquisition Office CTA                      */}
      {/* ========================================================================= */}
      <section className="py-16 sm:py-24 bg-slate-900 text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#0284c7]/15 rounded-full blur-3xl pointer-events-none" />
        
        <div className="w-full max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-16 relative z-10">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-8 p-8 sm:p-12 rounded-xs border border-slate-800 bg-slate-950/60 shadow-2xl">
            <div className="space-y-3 max-w-2xl">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-xs bg-[#0284c7]/20 border border-[#0284c7]/40 text-[#38bdf8] text-xs font-mono">
                <Sparkles className="h-3.5 w-3.5" />
                <span>Private Client Desk</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-light tracking-tight font-serif">
                Private Client Mandates
              </h2>
              <p className="text-sm sm:text-base text-slate-300 font-light leading-relaxed">
                For acquisitions that require discretion, speed and precision. Dedicated off-market search mandates, title conveyance coordination, and Golden Visa private facilitation.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 shrink-0">
              <button
                type="button"
                onClick={() => setIsContactModalOpen(true)}
                className="px-6 py-3.5 rounded-xs bg-[#0284c7] hover:bg-[#0369a1] text-white text-xs font-mono uppercase tracking-[0.14em] font-semibold transition-all shadow-lg flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>Request Private Mandate</span>
                <ArrowRight className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Modal */}
      <ContactModal
        isOpen={isContactModalOpen}
        onClose={() => setIsContactModalOpen(false)}
        initialInterest="PRIVATE CLIENT"
      />

    </div>
  )
}