'use client'

import * as React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { VERIFIED_PROPERTIES } from '@/lib/data/properties'
import { DUBAI_AREAS } from '@/lib/data/areas'
import { VERIFIED_DEVELOPERS } from '@/lib/data/developers'
import { LIFESTYLE_CATEGORIES } from '@/lib/data/lifestyle'
import { useClient } from '@/lib/context/client-context'
import {
  Section,
  Eyebrow,
  SourceBadge,
  DataRow,
  TimelineStep,
  PrimaryLink,
  SecondaryLink,
} from '@/components/layout/layout-primitives'
import { PropertyCard } from '@/components/property/property-card'
import { ContactModal } from '@/components/layout/contact-modal'
import {
  ArrowRight,
  ArrowUpRight,
  ShieldCheck,
  Building2,
  TrendingUp,
  CheckCircle2,
  Sliders,
} from 'lucide-react'

export default function Home() {
  const { formatCurrency } = useClient()
  const [isContactModalOpen, setIsContactModalOpen] = React.useState(false)

  // Featured Properties from Verified Data
  const featuredFlagship = VERIFIED_PROPERTIES[0]
  const supportingProperties = VERIFIED_PROPERTIES.slice(1, 3)

  // Atlas Districts
  const atlasDistricts = DUBAI_AREAS.slice(0, 6)
  const [activeDistrictIndex, setActiveDistrictIndex] = React.useState(0)
  const activeDistrict = atlasDistricts[activeDistrictIndex] || atlasDistricts[0]

  // Key Developers
  const keyDevelopers = VERIFIED_DEVELOPERS.slice(0, 6)

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
      {/* 01 — HERO: Towering Burj Khalifa & Dubai Architectural Glass Blue         */}
      {/* ========================================================================= */}
      <section className="relative min-h-[92vh] flex items-center pt-12 pb-16 sm:pt-20 sm:pb-24 border-b border-slate-200/80 bg-gradient-to-b from-[#f0f7ff] via-white to-white overflow-hidden">
        {/* Subtle Architectural Grid Lines */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#0284c708_1px,transparent_1px),linear-gradient(to_bottom,#0284c708_1px,transparent_1px)] bg-[size:4rem_4rem] pointer-events-none" />
        
        {/* Atmospheric Blue Sky Tint Glow */}
        <div className="absolute top-0 right-1/4 w-[700px] h-[700px] bg-sky-200/25 rounded-full blur-[140px] pointer-events-none" />

        <div className="w-full max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-16 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            
            {/* Left 55%: Editorial Title, Value Proposition & Actions */}
            <div className="lg:col-span-7 space-y-7">
              <div className="space-y-4">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#0284c7] animate-pulse" />
                  <Eyebrow accent={true}>DUBAI REAL ESTATE INTELLIGENCE &bull; INSTITUTIONAL DESK</Eyebrow>
                </div>
                
                <h1 className="text-[48px] sm:text-[72px] lg:text-[88px] font-light tracking-[-0.04em] leading-[0.96] text-slate-900">
                  DUBAI,<br />
                  WITH BETTER<br />
                  <span className="text-[#0284c7] font-normal">DECISIONS.</span>
                </h1>
              </div>

              <p className="text-lg sm:text-xl text-slate-600 font-light leading-relaxed max-w-2xl">
                Source-led property intelligence, verified market data, and private-client advisory for one of the world&apos;s most dynamic real-estate markets. Sourced directly from published statutory registers and certified developer filings.
              </p>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-4 pt-1">
                <PrimaryLink href="/properties">
                  Explore Properties
                </PrimaryLink>
                <SecondaryLink href="/market">
                  Dubai Intelligence
                </SecondaryLink>
                <button
                  type="button"
                  onClick={() => setIsContactModalOpen(true)}
                  className="inline-flex items-center gap-1.5 text-xs font-mono uppercase tracking-[0.14em] text-[#0284c7] hover:text-[#0369a1] transition-colors py-2 px-3.5 border border-sky-300 hover:border-[#0284c7] rounded-xs bg-sky-50/50 cursor-pointer shadow-2xs font-semibold"
                >
                  <span>Private Client</span>
                  <ArrowUpRight className="h-3.5 w-3.5" />
                </button>
              </div>

              {/* Verified Provenance Footnote */}
              <div className="pt-4 border-t border-slate-200 flex flex-wrap items-center gap-3.5 text-[11px] font-mono text-slate-500">
                <div className="flex items-center gap-1.5 text-emerald-700 font-medium">
                  <ShieldCheck className="h-3.5 w-3.5 text-emerald-600" />
                  <span>DLD Statutory Registry</span>
                </div>
                <span>&bull;</span>
                <span>Law No. 7 (2006)</span>
                <span>&bull;</span>
                <span>Law No. 8 (2007) Escrow</span>
                <span>&bull;</span>
                <span className="text-[#0284c7] font-medium">100% Foreign Freehold</span>
              </div>
            </div>

            {/* Right 45%: Dominant Burj Khalifa Glass Photograph & Floating DLD Cadran */}
            <div className="lg:col-span-5 relative">
              <div className="relative aspect-[4/5] sm:aspect-[4/5] w-full overflow-hidden rounded-xs border border-slate-200/90 bg-slate-100 group shadow-[0_16px_40px_rgba(2,132,199,0.12)]">
                {/* Towering Burj Khalifa with Blue Glass Sky */}
                <Image
                  src="https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=2000&q=90"
                  alt="Burj Khalifa and Dubai Architectural Glass Skyline"
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 45vw"
                  className="object-cover transition-transform duration-1000 ease-out group-hover:scale-105"
                />
                
                {/* Subtle bottom gradient to ensure cadran contrast */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent opacity-60" />

                {/* Floating Institutional Badge */}
                <div className="absolute top-4 right-4 px-3 py-1 bg-white/95 backdrop-blur-md rounded-xs text-[10px] font-mono text-[#0284c7] border border-sky-200 flex items-center gap-1.5 shadow-xs font-semibold">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#0284c7] animate-pulse" />
                  <span>DLD STATUTORY REGISTER</span>
                </div>

                {/* Floating Architectural DLD Cadran */}
                <div className="absolute bottom-4 left-4 right-4 p-4 sm:p-5 bg-white/95 backdrop-blur-md rounded-xs border border-slate-200/90 space-y-3 shadow-lg">
                  <div className="flex items-center justify-between border-b border-slate-100 pb-2">
                    <span className="text-[10px] font-mono uppercase tracking-[0.16em] text-slate-500 font-semibold">
                      DLD MARKET BASELINE 2026
                    </span>
                    <span className="text-[10px] font-mono text-emerald-700 uppercase font-semibold">
                      OFFICIAL UAE PEG
                    </span>
                  </div>

                  <div className="grid grid-cols-3 gap-3 font-mono text-xs">
                    <div>
                      <span className="text-[9px] text-slate-400 uppercase block">Transfer Fee</span>
                      <span className="text-slate-900 font-semibold">4.00%</span>
                      <span className="text-[9px] text-slate-400 block">Combined</span>
                    </div>
                    <div>
                      <span className="text-[9px] text-slate-400 uppercase block">Admin Tariff</span>
                      <span className="text-slate-900 font-semibold">AED 4,200</span>
                      <span className="text-[9px] text-slate-400 block">Per Title</span>
                    </div>
                    <div>
                      <span className="text-[9px] text-slate-400 uppercase block">USD / AED</span>
                      <span className="text-[#0284c7] font-semibold">3.6725</span>
                      <span className="text-[9px] text-slate-400 block">Fixed Peg</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 02 — FULL-WIDTH MARKET DATA STRIP: Institutional Financial Architecture    */}
      {/* ========================================================================= */}
      <section className="border-b border-slate-200 bg-white py-6">
        <div className="w-full max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-16">
          <div className="grid grid-cols-2 lg:grid-cols-4 divide-y lg:divide-y-0 lg:divide-x divide-slate-200">
            
            <div className="py-3 lg:py-0 lg:px-6 first:pl-0 space-y-1">
              <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-slate-500 block font-semibold">
                DUBAI RESIDENTIAL SALES
              </span>
              <div className="text-2xl sm:text-3xl font-light font-mono text-slate-900 tabular-nums">
                18,642
              </div>
              <span className="text-xs text-slate-500 font-mono block">Quarterly Transactions</span>
            </div>

            <div className="py-3 lg:py-0 lg:px-6 space-y-1">
              <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-slate-500 block font-semibold">
                AVERAGE PRICE / SQFT
              </span>
              <div className="text-2xl sm:text-3xl font-light font-mono text-[#0284c7] tabular-nums">
                AED 1,680
              </div>
              <span className="text-xs text-slate-500 font-mono block">Prime Freehold Baseline</span>
            </div>

            <div className="py-3 lg:py-0 lg:px-6 space-y-1">
              <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-slate-500 block font-semibold">
                TOTAL TRANSACTION VALUE
              </span>
              <div className="text-2xl sm:text-3xl font-light font-mono text-slate-900 tabular-nums">
                AED 52.1B
              </div>
              <span className="text-xs text-slate-500 font-mono block">DLD Recorded Volume</span>
            </div>

            <div className="py-3 lg:py-0 lg:px-6 last:pr-0 space-y-1">
              <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-slate-500 block font-semibold">
                PRIME RESIDENTIAL YIELD
              </span>
              <div className="text-2xl sm:text-3xl font-light font-mono text-emerald-700 tabular-nums">
                5.80%
              </div>
              <span className="text-xs text-slate-500 font-mono block">Median Unlevered Yield</span>
            </div>

          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 03 — EDITORIAL STATEMENT & 4 ARCHITECTURAL PILLARS                        */}
      {/* ========================================================================= */}
      <Section spacing="room-160" surface="pure" containerSize="wide">
        <div className="space-y-14">
          
          {/* Main Editorial Statement */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end pb-10 border-b border-slate-200">
            <div className="lg:col-span-7 space-y-3">
              <Eyebrow>01 &bull; POSITIONING &amp; INTELLIGENCE</Eyebrow>
              <h2 className="text-[32px] sm:text-[44px] lg:text-[52px] font-light tracking-[-0.03em] leading-[1.06] text-slate-900">
                REAL ESTATE IS EASY TO FIND.<br />
                <span className="text-[#0284c7]">GOOD DECISIONS ARE NOT.</span>
              </h2>
            </div>
            <div className="lg:col-span-5">
              <p className="text-base text-slate-600 font-light leading-relaxed">
                We replace speculative marketing with published statutory codes, certified land registries, and direct institutional underwriting. Every property dossier reflects authentic developer filings and official conveyance schedules.
              </p>
            </div>
          </div>

          {/* 4 Open Architectural Pillars (Crisp White / Subtle Hairlines) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            
            {/* Pillar 1 */}
            <div className="space-y-3 pt-5 border-t-2 border-slate-200 hover:border-[#0284c7] transition-colors group">
              <div className="flex items-center justify-between">
                <span className="text-2xl font-light font-mono text-[#0284c7]">01</span>
                <Building2 className="h-5 w-5 text-slate-400 group-hover:text-[#0284c7] transition-colors" />
              </div>
              <div className="space-y-1">
                <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-slate-500 block font-semibold">
                  OPPORTUNITIES
                </span>
                <h3 className="text-lg font-light text-slate-900 group-hover:text-[#0284c7] transition-colors">
                  Verified Properties
                </h3>
              </div>
              <p className="text-xs text-slate-600 font-light leading-relaxed">
                Curated prime residential portfolios across Dubai&apos;s freehold zones with verified titles, developer licenses, and handover timelines.
              </p>
            </div>

            {/* Pillar 2 */}
            <div className="space-y-3 pt-5 border-t-2 border-slate-200 hover:border-[#0284c7] transition-colors group">
              <div className="flex items-center justify-between">
                <span className="text-2xl font-light font-mono text-[#0284c7]">02</span>
                <TrendingUp className="h-5 w-5 text-slate-400 group-hover:text-[#0284c7] transition-colors" />
              </div>
              <div className="space-y-1">
                <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-slate-500 block font-semibold">
                  PROVENANCE
                </span>
                <h3 className="text-lg font-light text-slate-900 group-hover:text-[#0284c7] transition-colors">
                  Market Intelligence
                </h3>
              </div>
              <p className="text-xs text-slate-600 font-light leading-relaxed">
                Real transaction volumes, rental yield matrices, and legal decrees directly sourced from DLD, RERA, and official economic registers.
              </p>
            </div>

            {/* Pillar 3 */}
            <div className="space-y-3 pt-5 border-t-2 border-slate-200 hover:border-[#0284c7] transition-colors group">
              <div className="flex items-center justify-between">
                <span className="text-2xl font-light font-mono text-[#0284c7]">03</span>
                <Sliders className="h-5 w-5 text-slate-400 group-hover:text-[#0284c7] transition-colors" />
              </div>
              <div className="space-y-1">
                <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-slate-500 block font-semibold">
                  UNDERWRITING
                </span>
                <h3 className="text-lg font-light text-slate-900 group-hover:text-[#0284c7] transition-colors">
                  Capital Modeling
                </h3>
              </div>
              <p className="text-xs text-slate-600 font-light leading-relaxed">
                Deterministic acquisition schedules factoring 4% DLD fees, trustee charges, conveyance costs, and unlevered net yield modeling.
              </p>
            </div>

            {/* Pillar 4 */}
            <div className="space-y-3 pt-5 border-t-2 border-slate-200 hover:border-[#0284c7] transition-colors group">
              <div className="flex items-center justify-between">
                <span className="text-2xl font-light font-mono text-[#0284c7]">04</span>
                <ShieldCheck className="h-5 w-5 text-slate-400 group-hover:text-[#0284c7] transition-colors" />
              </div>
              <div className="space-y-1">
                <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-slate-500 block font-semibold">
                  EXECUTION
                </span>
                <h3 className="text-lg font-light text-slate-900 group-hover:text-[#0284c7] transition-colors">
                  Private Client Desk
                </h3>
              </div>
              <p className="text-xs text-slate-600 font-light leading-relaxed">
                Discreet search mandates, off-market allocations, conveyance coordination, and 10-Year Golden Visa residency facilitation.
              </p>
            </div>

          </div>

        </div>
      </Section>

      {/* ========================================================================= */}
      {/* 04 — EDITORIAL PAUSE: Architectural & Geographic Rhythm                   */}
      {/* ========================================================================= */}
      <section className="py-16 sm:py-24 bg-[#f0f7ff] border-y border-sky-200/70 relative overflow-hidden">
        <div className="w-full max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-16 text-center space-y-3">
          <span className="text-[10px] font-mono tracking-[0.3em] uppercase text-[#0284c7] block font-semibold">
            THE BIG PICTURE
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light tracking-[-0.035em] text-slate-900 max-w-4xl mx-auto leading-[1.12]">
            Dubai is not one market.<br />
            <span className="text-slate-500 font-extralight italic">It is an archipelago of distinct economic micro-climates.</span>
          </h2>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 05 — FEATURED PROPERTIES: Luxury Magazine Spread                          */}
      {/* ========================================================================= */}
      <Section spacing="room-160" surface="pure" containerSize="wide">
        <div className="space-y-12">
          
          {/* Section Header */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 border-b border-slate-200">
            <div className="space-y-2">
              <Eyebrow>02 &bull; SELECTED OPPORTUNITIES</Eyebrow>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light tracking-[-0.03em] text-slate-900">
                FEATURED PROPERTIES
              </h2>
              <p className="text-sm text-slate-600 font-light">
                Selected prime opportunities across Dubai with verified developer filings.
              </p>
            </div>

            <Link
              href="/properties"
              className="inline-flex items-center gap-1.5 text-xs font-mono uppercase tracking-[0.14em] text-[#0284c7] hover:text-[#0369a1] transition-colors font-semibold"
            >
              <span>View All Properties</span>
              <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          </div>

          {/* Asymmetric Grid: 1 Flagship Large + 2 Supporting Cards */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
            
            {/* Left 7 cols: Large Flagship Featured Property */}
            {featuredFlagship && (
              <div className="lg:col-span-7 flex flex-col justify-between p-6 sm:p-8 rounded-xs bg-white border border-slate-200 hover:border-[#0284c7]/60 transition-all duration-300 group shadow-[0_4px_20px_rgba(15,23,42,0.06)]">
                <div className="space-y-6">
                  {/* Top Image Spread */}
                  <div className="relative aspect-[16/10] w-full overflow-hidden rounded-xs bg-slate-100">
                    <Image
                      src={featuredFlagship.images[0] || 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1600&q=85'}
                      alt={featuredFlagship.title}
                      fill
                      priority
                      sizes="(max-width: 1024px) 100vw, 60vw"
                      className="object-cover transition-transform duration-1000 group-hover:scale-105"
                    />
                    <div className="absolute top-4 left-4 flex gap-2">
                      <span className="px-2.5 py-1 rounded-xs text-[9px] font-mono font-semibold uppercase bg-white/95 backdrop-blur-md text-[#0284c7] border border-sky-200 shadow-2xs">
                        FLAGSHIP ASSET
                      </span>
                      <span className="px-2.5 py-1 rounded-xs text-[9px] font-mono uppercase bg-white/95 backdrop-blur-md text-slate-800 border border-slate-200 shadow-2xs font-medium">
                        {featuredFlagship.completion_status}
                      </span>
                    </div>

                    <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between p-3 bg-white/95 backdrop-blur-md rounded-xs border border-slate-200 text-xs font-mono shadow-md">
                      <span className="text-[#0284c7] font-semibold">{featuredFlagship.area_name}</span>
                      <span className="text-slate-600">{featuredFlagship.developer_name}</span>
                    </div>
                  </div>

                  {/* Flagship Body Content */}
                  <div className="space-y-4">
                    <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2">
                      <h3 className="text-2xl sm:text-3xl font-light text-slate-900 group-hover:text-[#0284c7] transition-colors">
                        {featuredFlagship.editorial_display_name || featuredFlagship.title}
                      </h3>
                      <div className="font-mono text-xl sm:text-2xl font-light text-slate-900 tabular-nums font-semibold">
                        {formatCurrency(featuredFlagship.asking_price)}
                      </div>
                    </div>

                    <p className="text-sm text-slate-600 font-light leading-relaxed">
                      {featuredFlagship.unit_descriptor || 'Exemplary luxury residence with panoramic skyline views, private terrace, and full statutory title deed registration.'}
                    </p>

                    {/* Key Metrics */}
                    <div className="grid grid-cols-3 gap-4 py-4 border-y border-slate-100 font-mono text-xs text-slate-600">
                      <div>
                        <span className="text-[10px] text-slate-400 block uppercase">Bedrooms</span>
                        <span className="text-slate-900 font-medium">{featuredFlagship.bedrooms} Beds</span>
                      </div>
                      <div>
                        <span className="text-[10px] text-slate-400 block uppercase">Internal Area</span>
                        <span className="text-slate-900 font-medium">{featuredFlagship.internal_area_sqft.toLocaleString()} sqft</span>
                      </div>
                      <div>
                        <span className="text-[10px] text-slate-400 block uppercase">Valuation / sqft</span>
                        <span className="text-[#0284c7] font-semibold">AED {featuredFlagship.price_per_sqft?.toLocaleString()}</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Flagship Action */}
                <div className="pt-6 flex flex-wrap items-center justify-between gap-4">
                  <div className="flex items-center gap-2 text-xs font-mono text-emerald-700 font-medium">
                    <ShieldCheck className="h-4 w-4 text-emerald-600" />
                    <span>Golden Visa Eligible (&ge; AED 2M)</span>
                  </div>
                  <Link
                    href={`/properties/${featuredFlagship.id}`}
                    className="inline-flex items-center gap-2 px-6 py-2.5 rounded-xs bg-[#0284c7] hover:bg-[#0369a1] text-white text-xs font-mono uppercase tracking-[0.14em] font-semibold transition-all shadow-[0_2px_10px_rgba(2,132,199,0.3)]"
                  >
                    <span>Inspect Full Dossier</span>
                    <ArrowRight className="h-3.5 w-3.5" />
                  </Link>
                </div>
              </div>
            )}

            {/* Right 5 cols: 2 Supporting Cards */}
            <div className="lg:col-span-5 flex flex-col gap-6">
              {supportingProperties.map((prop) => (
                <PropertyCard key={prop.id} property={prop} />
              ))}
            </div>

          </div>

        </div>
      </Section>

      {/* ========================================================================= */}
      {/* 06 — DUBAI ATLAS: Explore the Emirates & Prime Districts                  */}
      {/* ========================================================================= */}
      <Section spacing="room-160" surface="subtle" containerSize="wide">
        <div className="space-y-12">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 border-b border-slate-200">
            <div className="space-y-2">
              <Eyebrow>03 &bull; DUBAI ATLAS &bull; GEOGRAPHIC DOSSIERS</Eyebrow>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light tracking-[-0.03em] text-slate-900">
                EXPLORE THE EMIRATES
              </h2>
              <p className="text-sm text-slate-600 font-light">
                Verified district profiles, zoning frameworks, and freehold boundaries.
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

          {/* Interactive District Explorer */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Left 5 cols: District Selection List */}
            <div className="lg:col-span-5 space-y-2">
              {atlasDistricts.map((district, idx) => {
                const isSelected = idx === activeDistrictIndex
                return (
                  <button
                    key={district.id}
                    onClick={() => setActiveDistrictIndex(idx)}
                    className={`w-full text-left p-4 sm:p-5 rounded-xs border transition-all flex items-center justify-between cursor-pointer ${
                      isSelected
                        ? 'bg-white border-[#0284c7] shadow-[0_4px_16px_rgba(2,132,199,0.12)]'
                        : 'bg-white/60 border-slate-200 hover:border-slate-300 text-slate-600'
                    }`}
                  >
                    <div className="space-y-1">
                      <div className="flex items-center gap-3">
                        <span className={`text-base font-light ${isSelected ? 'text-[#0284c7] font-semibold' : 'text-slate-900'}`}>
                          {district.name}
                        </span>
                        <span className="text-[9px] font-mono uppercase px-1.5 py-0.5 rounded-xs bg-sky-50 text-[#0284c7] border border-sky-200">
                          {district.freehold_status}
                        </span>
                      </div>
                      <p className="text-xs text-slate-500 font-mono">
                        {district.lifestyle_tags?.slice(0, 2).join(' &bull; ') || 'Freehold Residential'}
                      </p>
                    </div>
                    <ArrowRight className={`h-4 w-4 transition-transform ${isSelected ? 'text-[#0284c7] translate-x-1' : 'text-slate-400'}`} />
                  </button>
                )
              })}
            </div>

            {/* Right 7 cols: Active District Dossier Card */}
            {activeDistrict && (
              <div className="lg:col-span-7 p-6 sm:p-8 rounded-xs bg-white border border-slate-200 space-y-6 shadow-[0_4px_20px_rgba(15,23,42,0.06)]">
                <div className="relative aspect-[16/9] w-full overflow-hidden rounded-xs bg-slate-100">
                  <Image
                    src={activeDistrict.image || 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=1200&q=85'}
                    alt={activeDistrict.name}
                    fill
                    sizes="(max-width: 1024px) 100vw, 55vw"
                    className="object-cover"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 rounded-xs text-[10px] font-mono uppercase bg-white/95 backdrop-blur-md text-[#0284c7] border border-sky-200 font-semibold shadow-xs">
                      DESIGNATED FREEHOLD ZONE
                    </span>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="flex items-baseline justify-between border-b border-slate-100 pb-4">
                    <div>
                      <h3 className="text-2xl sm:text-3xl font-light text-slate-900">
                        {activeDistrict.name}
                      </h3>
                      <span className="text-xs font-mono text-slate-500">
                        Master Developer: {activeDistrict.master_developer || 'Multi-Developer'}
                      </span>
                    </div>
                    <Link
                      href={`/districts/${activeDistrict.slug}`}
                      className="inline-flex items-center gap-1.5 text-xs font-mono uppercase tracking-[0.14em] text-[#0284c7] hover:underline font-semibold"
                    >
                      <span>Full Dossier</span>
                      <ArrowUpRight className="h-3.5 w-3.5" />
                    </Link>
                  </div>

                  <p className="text-sm text-slate-600 font-light leading-relaxed">
                    {activeDistrict.description || 'Statutory freehold master development with integrated infrastructure, coastal and skyline views, and established property title registration.'}
                  </p>

                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 pt-2 font-mono text-xs text-slate-600">
                    <div className="p-3 bg-slate-50 border border-slate-200 rounded-xs">
                      <span className="text-[9px] uppercase text-slate-400 block">Sector</span>
                      <span className="text-slate-900 font-semibold">{activeDistrict.sector}</span>
                    </div>
                    <div className="p-3 bg-slate-50 border border-slate-200 rounded-xs">
                      <span className="text-[9px] uppercase text-slate-400 block">Freehold Status</span>
                      <span className="text-slate-900 font-semibold">{activeDistrict.freehold_status}</span>
                    </div>
                    <div className="p-3 bg-slate-50 border border-slate-200 rounded-xs col-span-2 sm:col-span-1">
                      <span className="text-[9px] uppercase text-slate-400 block">Statutory Basis</span>
                      <span className="text-[#0284c7] font-semibold">Regulation 3 (2006)</span>
                    </div>
                  </div>
                </div>
              </div>
            )}

          </div>

        </div>
      </Section>

      {/* ========================================================================= */}
      {/* 07 — DEVELOPERS REGISTRY: Institutional Verification Directory            */}
      {/* ========================================================================= */}
      <Section spacing="room-160" surface="pure" containerSize="wide">
        <div className="space-y-12">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 border-b border-slate-200">
            <div className="space-y-2">
              <Eyebrow>04 &bull; DEVELOPERS REGISTRY &bull; VERIFIED ENTITIES</Eyebrow>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light tracking-[-0.03em] text-slate-900">
                MASTER DEVELOPERS
              </h2>
              <p className="text-sm text-slate-600 font-light">
                Official statutory records and delivery track records for Dubai&apos;s leading developers.
              </p>
            </div>

            <Link
              href="/developers"
              className="inline-flex items-center gap-1.5 text-xs font-mono uppercase tracking-[0.14em] text-[#0284c7] hover:text-[#0369a1] transition-colors font-semibold"
            >
              <span>View Full Registry</span>
              <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {keyDevelopers.map((dev) => (
              <Link
                key={dev.id}
                href={`/developers/${dev.slug}`}
                className="p-6 rounded-xs bg-white border border-slate-200 hover:border-[#0284c7]/60 transition-all space-y-4 group block shadow-[0_2px_10px_rgba(15,23,42,0.04)] hover:shadow-[0_8px_24px_rgba(2,132,199,0.08)]"
              >
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-[#0284c7] font-semibold">
                    FOUNDED {dev.founded_year || 'VERIFIED'}
                  </span>
                  <SourceBadge sourceClass="OFFICIAL CORPORATE" sourceName={dev.name} />
                </div>

                <div className="space-y-1">
                  <h3 className="text-xl font-light text-slate-900 group-hover:text-[#0284c7] transition-colors">
                    {dev.name}
                  </h3>
                  <p className="text-xs text-slate-500 font-mono">
                    {dev.headquarters || 'Dubai, United Arab Emirates'}
                  </p>
                </div>

                <p className="text-xs text-slate-600 font-light line-clamp-2 leading-relaxed">
                  {dev.portfolio_overview || 'Master developer with certified delivery portfolio in prime designated freehold communities.'}
                </p>

                <div className="pt-2 border-t border-slate-100 flex items-center justify-between text-xs font-mono text-slate-500">
                  <span>Tier 1 Master Developer</span>
                  <ArrowUpRight className="h-3.5 w-3.5 text-slate-400 group-hover:text-[#0284c7] transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </div>
              </Link>
            ))}
          </div>

        </div>
      </Section>

      {/* ========================================================================= */}
      {/* 08 — INVESTMENT MEMORANDUM & UNDERWRITING ENGINE                          */}
      {/* ========================================================================= */}
      <Section spacing="room-160" surface="subtle" containerSize="wide">
        <div className="space-y-12">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 border-b border-slate-200">
            <div className="space-y-2">
              <Eyebrow>05 &bull; CAPITAL ALLOCATION &amp; STATUTORY SCHEDULE</Eyebrow>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light tracking-[-0.03em] text-slate-900">
                UNDERWRITE THE ACQUISITION.
              </h2>
              <p className="text-sm text-slate-600 font-light">
                Model deterministic conveyance fees, net unlevered yield, and cash flow schedules.
              </p>
            </div>

            <span className="text-[10px] font-mono uppercase tracking-[0.16em] px-3 py-1.5 rounded-xs bg-sky-50 text-[#0284c7] border border-sky-200 font-semibold">
              MODELLED / ESTIMATE
            </span>
          </div>

          {/* Underwriting Terminal Interface */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start p-6 sm:p-10 rounded-xs bg-white border border-slate-200 shadow-[0_8px_30px_rgba(15,23,42,0.06)]">
            
            {/* Left 6 cols: Sliders & Parameter Inputs */}
            <div className="lg:col-span-6 space-y-8">
              <div className="space-y-2">
                <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-[#0284c7] font-semibold">
                  UNDERWRITING PARAMETERS
                </span>
                <h3 className="text-xl font-light text-slate-900">
                  Asset Purchase &amp; Operational Inputs
                </h3>
              </div>

              {/* Slider 1: Purchase Price */}
              <div className="space-y-3">
                <div className="flex justify-between items-baseline font-mono">
                  <label className="text-xs uppercase text-slate-500 font-semibold">Purchase Price</label>
                  <span className="text-lg font-semibold text-slate-900">{formatCurrency(propertyPriceAED)}</span>
                </div>
                <input
                  type="range"
                  min="2000000"
                  max="50000000"
                  step="500000"
                  value={propertyPriceAED}
                  onChange={(e) => setPropertyPriceAED(Number(e.target.value))}
                  className="w-full"
                />
                <div className="flex justify-between text-[10px] font-mono text-slate-400">
                  <span>AED 2,000,000 (Golden Visa)</span>
                  <span>AED 50,000,000</span>
                </div>
              </div>

              {/* Slider 2: Gross Rental Yield */}
              <div className="space-y-3">
                <div className="flex justify-between items-baseline font-mono">
                  <label className="text-xs uppercase text-slate-500 font-semibold">Expected Gross Yield</label>
                  <span className="text-lg font-semibold text-[#0284c7]">{expectedGrossYield.toFixed(1)}%</span>
                </div>
                <input
                  type="range"
                  min="4.0"
                  max="10.0"
                  step="0.1"
                  value={expectedGrossYield}
                  onChange={(e) => setExpectedGrossYield(Number(e.target.value))}
                  className="w-full"
                />
                <div className="flex justify-between text-[10px] font-mono text-slate-400">
                  <span>4.0% (Prime Villa / Waterfront)</span>
                  <span>10.0% (Compact Apartment)</span>
                </div>
              </div>

              {/* Slider 3: Service Charges per sqft */}
              <div className="space-y-3">
                <div className="flex justify-between items-baseline font-mono">
                  <label className="text-xs uppercase text-slate-500 font-semibold">Service Charge per SqFt</label>
                  <span className="text-base font-semibold text-slate-900">AED {annualServiceChargePerSqft} / sqft</span>
                </div>
                <input
                  type="range"
                  min="10"
                  max="45"
                  step="1"
                  value={annualServiceChargePerSqft}
                  onChange={(e) => setAnnualServiceChargePerSqft(Number(e.target.value))}
                  className="w-full"
                />
                <div className="flex justify-between text-[10px] font-mono text-slate-400">
                  <span>AED 10 (Townhouses)</span>
                  <span>AED 45 (Ultra-Prime Towers)</span>
                </div>
              </div>
            </div>

            {/* Right 6 cols: Calculated Institutional Acquisition Schedule */}
            <div className="lg:col-span-6 p-6 sm:p-8 rounded-xs bg-[#f8fafc] border border-slate-200 space-y-6">
              <div className="flex items-center justify-between border-b border-slate-200 pb-4">
                <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-slate-500 font-semibold">
                  SCHEDULE OF ACQUISITION
                </span>
                <span className="text-[10px] font-mono text-emerald-700 font-semibold">
                  STATUTORY DLD CODES
                </span>
              </div>

              <div className="space-y-3">
                <DataRow label="Base Purchase Price" value={formatCurrency(propertyPriceAED)} />
                <DataRow label="DLD Transfer Fee (4.00%)" value={formatCurrency(dldFee)} subvalue="Law No. 7 / 2006" />
                <DataRow label="DLD Admin Fee" value="AED 4,200" subvalue="Official" />
                <DataRow label="Registration Trustee Fee" value={formatCurrency(trusteeFee)} subvalue="Authorized Office" />
                <DataRow label="Conveyance & Legal Est." value={formatCurrency(conveyanceEstimate)} subvalue="Advisory" />
              </div>

              <div className="pt-4 border-t border-slate-200 space-y-4">
                <div className="flex justify-between items-baseline font-mono">
                  <span className="text-xs font-semibold text-slate-900 uppercase tracking-wider">Total Acquisition Outlay</span>
                  <span className="text-2xl font-bold text-[#0284c7]">{formatCurrency(totalAcquisitionCost)}</span>
                </div>

                <div className="grid grid-cols-2 gap-4 pt-2 font-mono text-xs">
                  <div className="p-3 bg-white border border-slate-200 rounded-xs">
                    <span className="text-[9px] text-slate-400 uppercase block">Gross Annual Rent</span>
                    <span className="text-slate-900 font-semibold">{formatCurrency(grossAnnualRent)}</span>
                  </div>
                  <div className="p-3 bg-white border border-slate-200 rounded-xs">
                    <span className="text-[9px] text-slate-400 uppercase block">Net Unlevered Yield</span>
                    <span className="text-emerald-700 font-semibold">{netYieldUnlevered.toFixed(2)}%</span>
                  </div>
                </div>

                <div className="pt-2">
                  <Link
                    href="/investment"
                    className="w-full py-3 rounded-xs bg-[#0284c7] hover:bg-[#0369a1] text-white text-xs font-mono uppercase tracking-[0.14em] font-semibold text-center block transition-colors shadow-xs"
                  >
                    Launch Full Scenario Workspace
                  </Link>
                </div>
              </div>
            </div>

          </div>

        </div>
      </Section>

      {/* ========================================================================= */}
      {/* 09 — GOLDEN RESIDENCY: Statutory 10-Year Framework                        */}
      {/* ========================================================================= */}
      <Section spacing="room-160" surface="pure" containerSize="wide">
        <div className="space-y-12">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 border-b border-slate-200">
            <div className="space-y-2">
              <Eyebrow>06 &bull; SOVEREIGN IMMIGRATION &bull; FEDERAL DECREE</Eyebrow>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light tracking-[-0.03em] text-slate-900">
                UAE 10-YEAR GOLDEN RESIDENCY
              </h2>
              <p className="text-sm text-slate-600 font-light">
                Statutory criteria, investment thresholds, and processing flow under GDRFA.
              </p>
            </div>

            <Link
              href="/residency"
              className="inline-flex items-center gap-1.5 text-xs font-mono uppercase tracking-[0.14em] text-[#0284c7] hover:text-[#0369a1] transition-colors font-semibold"
            >
              <span>Inspect Residency Portal</span>
              <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Left 5 cols: Criteria Highlights */}
            <div className="lg:col-span-5 p-6 sm:p-8 rounded-xs bg-white border border-slate-200 space-y-6 shadow-[0_4px_20px_rgba(15,23,42,0.05)]">
              <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-[#0284c7] block font-semibold">
                STATUTORY QUALIFICATION CRITERIA
              </span>

              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-[#0284c7] shrink-0 mt-0.5" />
                  <div className="space-y-1 text-xs">
                    <span className="font-mono uppercase text-slate-900 block font-semibold">AED 2,000,000 Minimum Value</span>
                    <p className="text-slate-600 font-light">
                      Property value must meet or exceed AED 2,000,000 on official title deed or certified Oqood contract.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-[#0284c7] shrink-0 mt-0.5" />
                  <div className="space-y-1 text-xs">
                    <span className="font-mono uppercase text-slate-900 block font-semibold">Off-Plan Eligibility (2024 Update)</span>
                    <p className="text-slate-600 font-light">
                      Off-plan properties from approved developers qualify with initial payments upon certified registration.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-[#0284c7] shrink-0 mt-0.5" />
                  <div className="space-y-1 text-xs">
                    <span className="font-mono uppercase text-slate-900 block font-semibold">Full Family Sponsorship</span>
                    <p className="text-slate-600 font-light">
                      Direct sponsorship for spouse, children of any age, and domestic staff with no renewal caps.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-[#0284c7] shrink-0 mt-0.5" />
                  <div className="space-y-1 text-xs">
                    <span className="font-mono uppercase text-slate-900 block font-semibold">No Stay Duration Limits</span>
                    <p className="text-slate-600 font-light">
                      Permitted to stay outside the UAE for unlimited periods without invalidating the 10-year residency visa.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right 7 cols: Timeline Steps */}
            <div className="lg:col-span-7 space-y-2">
              <TimelineStep
                number="01"
                title="Title Deed / Oqood Verification"
                description="Submission of property deed certified by the Dubai Land Department validating the AED 2M+ freehold threshold."
                source="DLD &bull; GDRFA"
              />
              <TimelineStep
                number="02"
                title="Medical Fitness &amp; Emirates ID Biometrics"
                description="Standard statutory health screening and biometric capture for UAE national identification registry."
                source="DHA &bull; ICP"
              />
              <TimelineStep
                number="03"
                title="10-Year Golden Visa Issuance"
                description="Digital issuance of the 10-year residency certificate and physical Emirates ID delivery."
                source="GDRFA Dubai"
              />
            </div>

          </div>

        </div>
      </Section>

      {/* ========================================================================= */}
      {/* 10 — CURATED LIFESTYLE: Editorial Magazine Layout                         */}
      {/* ========================================================================= */}
      <Section spacing="room-160" surface="subtle" containerSize="wide">
        <div className="space-y-12">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 border-b border-slate-200">
            <div className="space-y-2">
              <Eyebrow>07 &bull; PRIVATE LIVING &bull; CURATED DIRECTORY</Eyebrow>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light tracking-[-0.03em] text-slate-900">
                CURATED LIFESTYLE
              </h2>
              <p className="text-sm text-slate-600 font-light">
                Private aviation, superyacht marinas, Michelin gastronomy, and architectural landmarks.
              </p>
            </div>

            <Link
              href="/lifestyle"
              className="inline-flex items-center gap-1.5 text-xs font-mono uppercase tracking-[0.14em] text-[#0284c7] hover:text-[#0369a1] transition-colors font-semibold"
            >
              <span>Explore Lifestyle Directory</span>
              <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {LIFESTYLE_CATEGORIES.slice(0, 4).map((cat) => (
              <Link
                key={cat.id}
                href={cat.href}
                className="group relative aspect-[3/4] overflow-hidden rounded-xs bg-slate-100 border border-slate-200 block hover:border-[#0284c7]/60 transition-all shadow-[0_2px_10px_rgba(15,23,42,0.05)]"
              >
                <Image
                  src={cat.image}
                  alt={cat.title}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/30 to-transparent" />

                <div className="absolute bottom-0 left-0 right-0 p-5 space-y-1.5">
                  <span className="text-[9px] font-mono uppercase tracking-[0.2em] text-[#38bdf8] block font-semibold">
                    {cat.count} VERIFIED
                  </span>
                  <h3 className="text-xl font-light text-white group-hover:text-[#38bdf8] transition-colors">
                    {cat.title}
                  </h3>
                  <p className="text-xs text-slate-300 font-light line-clamp-2">
                    {cat.description}
                  </p>
                </div>
              </Link>
            ))}
          </div>

        </div>
      </Section>

      {/* ========================================================================= */}
      {/* 11 — PRIVATE CLIENT: Discreet Advisory & Execution                        */}
      {/* ========================================================================= */}
      <section className="py-20 sm:py-28 bg-[#0b1528] text-white border-y border-slate-800 relative overflow-hidden">
        {/* Subtle Blue Glass Radiance */}
        <div className="absolute top-1/2 right-0 -translate-y-1/2 w-[600px] h-[600px] bg-sky-500/10 rounded-full blur-[150px] pointer-events-none" />

        <div className="w-full max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-16 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            <div className="lg:col-span-6 space-y-6">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#38bdf8]" />
                <span className="text-[10px] font-mono tracking-[0.2em] uppercase text-[#38bdf8] font-semibold">
                  08 &bull; DISCREET ADVISORY &bull; PRIVATE MANDATES
                </span>
              </div>

              <h2 className="text-[36px] sm:text-[52px] lg:text-[64px] font-light tracking-[-0.035em] leading-[1.0] text-white">
                PRIVATE CLIENT
              </h2>

              <p className="text-base sm:text-lg text-slate-300 font-light leading-relaxed max-w-xl">
                For acquisitions that require discretion, speed, and precision. Independent representation with direct access to developer leadership and verified legal conveyancing.
              </p>

              <div className="pt-3 flex flex-wrap items-center gap-4">
                <button
                  type="button"
                  onClick={() => setIsContactModalOpen(true)}
                  className="px-7 py-3.5 rounded-xs bg-[#0284c7] hover:bg-[#0369a1] text-white text-xs font-mono uppercase tracking-[0.14em] font-semibold transition-all shadow-[0_2px_12px_rgba(2,132,199,0.4)] cursor-pointer flex items-center gap-2"
                >
                  <span>Request Private Mandate</span>
                  <ArrowRight className="h-3.5 w-3.5" />
                </button>
                <Link
                  href="/private-client"
                  className="px-6 py-3.5 rounded-xs border border-slate-700 hover:border-[#38bdf8] text-slate-200 hover:text-[#38bdf8] text-xs font-mono uppercase tracking-[0.14em] transition-colors inline-flex items-center gap-2"
                >
                  <span>Advisory Mandates</span>
                  <ArrowUpRight className="h-3.5 w-3.5" />
                </Link>
              </div>
            </div>

            {/* 4 Sleek Editorial Service Rows */}
            <div className="lg:col-span-6 divide-y divide-slate-800 border-y border-slate-800">
              <div className="py-4 space-y-1 group">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono text-[#38bdf8] uppercase tracking-wider font-semibold">
                    01 &bull; SOURCING
                  </span>
                  <span className="text-[10px] font-mono text-slate-400 uppercase">OFF-MARKET &bull; ULTRA-PRIME</span>
                </div>
                <h4 className="text-lg font-light text-white group-hover:text-[#38bdf8] transition-colors">
                  Private Property Search
                </h4>
                <p className="text-xs text-slate-400 font-light leading-relaxed">
                  Tailored acquisition briefs for trophy beachfront villas, penthouses, and full-floor developments.
                </p>
              </div>

              <div className="py-4 space-y-1 group">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono text-[#38bdf8] uppercase tracking-wider font-semibold">
                    02 &bull; INTELLIGENCE
                  </span>
                  <span className="text-[10px] font-mono text-slate-400 uppercase">DETERMINISTIC MODELING</span>
                </div>
                <h4 className="text-lg font-light text-white group-hover:text-[#38bdf8] transition-colors">
                  Investment Underwriting
                </h4>
                <p className="text-xs text-slate-400 font-light leading-relaxed">
                  Cash-flow modeling, rental yield stress-testing, and exit valuations based on statutory registers.
                </p>
              </div>

              <div className="py-4 space-y-1 group">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono text-[#38bdf8] uppercase tracking-wider font-semibold">
                    03 &bull; ALLOCATIONS
                  </span>
                  <span className="text-[10px] font-mono text-slate-400 uppercase">DIRECT ACCESS</span>
                </div>
                <h4 className="text-lg font-light text-white group-hover:text-[#38bdf8] transition-colors">
                  Off-Market Developer Allocations
                </h4>
                <p className="text-xs text-slate-400 font-light leading-relaxed">
                  Confidential allocations and pre-launch developer tranches before general public release.
                </p>
              </div>

              <div className="py-4 space-y-1 group">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono text-[#38bdf8] uppercase tracking-wider font-semibold">
                    04 &bull; STRUCTURING
                  </span>
                  <span className="text-[10px] font-mono text-slate-400 uppercase">CROSS-BORDER COMPLIANCE</span>
                </div>
                <h4 className="text-lg font-light text-white group-hover:text-[#38bdf8] transition-colors">
                  Cross-Border Structuring &amp; Residency
                </h4>
                <p className="text-xs text-slate-400 font-light leading-relaxed">
                  Coordination with DIFC foundations, 10-Year Golden Visa authorities, and licensed conveyancers.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 12 — SOURCES & PROVENANCE / TRUST: Institutional Methodology              */}
      {/* ========================================================================= */}
      <Section spacing="room-120" surface="pure" containerSize="wide">
        <div className="space-y-8">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 border-b border-slate-200">
            <div className="space-y-2">
              <Eyebrow>09 &bull; STATUTORY PROVENANCE &amp; SOURCES</Eyebrow>
              <h2 className="text-2xl sm:text-3xl font-light tracking-[-0.03em] text-slate-900">
                DATA PROVENANCE REGISTRY
              </h2>
            </div>

            <Link
              href="/sources"
              className="inline-flex items-center gap-1.5 text-xs font-mono uppercase tracking-[0.14em] text-[#0284c7] hover:underline font-semibold"
            >
              <span>View Methodology &amp; Sources</span>
              <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
            <div className="p-4 rounded-xs bg-slate-50 border border-slate-200 space-y-1 hover:border-[#0284c7]/50 transition-colors">
              <span className="text-[9px] font-mono text-[#0284c7] uppercase block font-semibold">REGULATOR</span>
              <span className="text-sm text-slate-900 block font-light">DLD / RERA</span>
              <span className="text-[10px] text-slate-500 font-mono block">Land Registry</span>
            </div>

            <div className="p-4 rounded-xs bg-slate-50 border border-slate-200 space-y-1 hover:border-[#0284c7]/50 transition-colors">
              <span className="text-[9px] font-mono text-[#0284c7] uppercase block font-semibold">IMMIGRATION</span>
              <span className="text-sm text-slate-900 block font-light">GDRFA Dubai</span>
              <span className="text-[10px] text-slate-500 font-mono block">Golden Residency</span>
            </div>

            <div className="p-4 rounded-xs bg-slate-50 border border-slate-200 space-y-1 hover:border-[#0284c7]/50 transition-colors">
              <span className="text-[9px] font-mono text-[#0284c7] uppercase block font-semibold">TAXATION</span>
              <span className="text-sm text-slate-900 block font-light">Federal Tax Auth</span>
              <span className="text-[10px] text-slate-500 font-mono block">Statutory Baseline</span>
            </div>

            <div className="p-4 rounded-xs bg-slate-50 border border-slate-200 space-y-1 hover:border-[#0284c7]/50 transition-colors">
              <span className="text-[9px] font-mono text-[#0284c7] uppercase block font-semibold">FREE ZONE</span>
              <span className="text-sm text-slate-900 block font-light">DIFC Courts</span>
              <span className="text-[10px] text-slate-500 font-mono block">Common Law</span>
            </div>

            <div className="p-4 rounded-xs bg-slate-50 border border-slate-200 space-y-1 hover:border-[#0284c7]/50 transition-colors">
              <span className="text-[9px] font-mono text-[#0284c7] uppercase block font-semibold">ECONOMIC</span>
              <span className="text-sm text-slate-900 block font-light">Dubai Economy</span>
              <span className="text-[10px] text-slate-500 font-mono block">D33 Agenda</span>
            </div>

            <div className="p-4 rounded-xs bg-slate-50 border border-slate-200 space-y-1 hover:border-[#0284c7]/50 transition-colors">
              <span className="text-[9px] font-mono text-[#0284c7] uppercase block font-semibold">CORPORATE</span>
              <span className="text-sm text-slate-900 block font-light">Developers</span>
              <span className="text-[10px] text-slate-500 font-mono block">Verified Filings</span>
            </div>
          </div>

        </div>
      </Section>

      {/* Advisory Modal Sheet */}
      <ContactModal
        isOpen={isContactModalOpen}
        onClose={() => setIsContactModalOpen(false)}
        initialInterest="PRIVATE CLIENT"
      />

    </div>
  )
}