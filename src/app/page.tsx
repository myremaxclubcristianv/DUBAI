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
  Landmark,
  Scale,
  BadgePercent,
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
    <div className="flex flex-col min-h-screen bg-[#08080a] text-[#f5f5f7]">
      
      {/* ========================================================================= */}
      {/* 01 — HERO: Cinematic Architectural Grandeur & Verified Statutory Data    */}
      {/* ========================================================================= */}
      <section className="relative min-h-[90vh] flex items-center pt-16 pb-20 sm:pt-24 sm:pb-28 border-b border-white/10 bg-[#08080a] overflow-hidden">
        {/* Background Atmospheric Glow */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#c9a962]/[0.035] rounded-full blur-[150px] pointer-events-none" />

        <div className="w-full max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-16 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            {/* Left 55%: Editorial Title & Statement */}
            <div className="lg:col-span-7 space-y-8">
              <div className="space-y-4">
                <div className="flex items-center gap-2.5">
                  <span className="w-2 h-2 rounded-full bg-[#c9a962]" />
                  <Eyebrow>DUBAI REAL ESTATE INTELLIGENCE &bull; INSTITUTIONAL DESK</Eyebrow>
                </div>
                
                <h1 className="text-[52px] sm:text-[76px] lg:text-[96px] font-light tracking-[-0.04em] leading-[0.94] text-[#f5f5f7]">
                  DUBAI,<br />
                  WITH BETTER<br />
                  <span className="text-[#c9a962] font-normal">DECISIONS.</span>
                </h1>
              </div>

              <p className="text-lg sm:text-xl text-[#a1a1aa] font-light leading-relaxed max-w-2xl">
                Property intelligence, verified market data, and private-client advisory for one of the world&apos;s most dynamic real-estate markets. Sourced directly from published statutory registers and certified developer filings.
              </p>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-4 pt-2">
                <PrimaryLink href="/properties">
                  Explore Properties
                </PrimaryLink>
                <SecondaryLink href="/market">
                  Dubai Intelligence
                </SecondaryLink>
                <button
                  type="button"
                  onClick={() => setIsContactModalOpen(true)}
                  className="inline-flex items-center gap-1.5 text-xs font-mono uppercase tracking-[0.14em] text-[#c9a962] hover:text-[#dbbe7a] transition-colors py-2 px-3.5 border border-[#c9a962]/30 hover:border-[#c9a962] rounded-xs cursor-pointer"
                >
                  <span>Private Client</span>
                  <ArrowUpRight className="h-3.5 w-3.5" />
                </button>
              </div>

              {/* Verified Provenance Footnote */}
              <div className="pt-4 border-t border-white/10 flex flex-wrap items-center gap-4 text-[11px] font-mono text-[#71717a]">
                <div className="flex items-center gap-1.5 text-emerald-400">
                  <ShieldCheck className="h-3.5 w-3.5" />
                  <span>DLD Statutory Registry</span>
                </div>
                <span>&bull;</span>
                <span>Law No. 7 (2006)</span>
                <span>&bull;</span>
                <span>Law No. 8 (2007) Escrow</span>
                <span>&bull;</span>
                <span className="text-[#c9a962]">100% Foreign Freehold</span>
              </div>
            </div>

            {/* Right 45%: Cinematic Architectural Composition & Integrated Institutional Card */}
            <div className="lg:col-span-5 relative">
              <div className="relative aspect-[4/3] sm:aspect-[5/4] w-full overflow-hidden rounded-sm border border-white/15 bg-[#111116] group shadow-[0_16px_48px_rgba(0,0,0,0.85)]">
                <Image
                  src="https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=2000&q=85"
                  alt="Dubai Architectural Environment"
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 45vw"
                  className="object-cover transition-transform duration-1000 ease-out group-hover:scale-105 brightness-90 group-hover:brightness-100"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#08080a] via-transparent to-transparent opacity-80" />

                {/* Floating Institutional Badge */}
                <div className="absolute top-4 right-4 px-3 py-1 bg-[#08080a]/90 backdrop-blur-md rounded-xs text-[10px] font-mono text-[#c9a962] border border-[#c9a962]/30 flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#c9a962] animate-pulse" />
                  <span>STATUTORY DATA VERIFIED</span>
                </div>

                {/* Seamless Integrated Institutional Module */}
                <div className="absolute bottom-4 left-4 right-4 p-4 sm:p-5 bg-[#0d0d11]/95 backdrop-blur-md rounded-xs border border-white/15 space-y-3">
                  <div className="flex items-center justify-between border-b border-white/10 pb-2">
                    <span className="text-[10px] font-mono uppercase tracking-[0.16em] text-[#8e8e93]">
                      DLD MARKET BASELINE
                    </span>
                    <span className="text-[10px] font-mono text-emerald-400 uppercase">
                      OFFICIAL 2026 REGISTER
                    </span>
                  </div>

                  <div className="grid grid-cols-2 gap-3 font-mono text-xs">
                    <div>
                      <span className="text-[9px] text-[#71717a] uppercase block">Transfer Fee</span>
                      <span className="text-[#f5f5f7] font-semibold">4.00% Combined</span>
                    </div>
                    <div>
                      <span className="text-[9px] text-[#71717a] uppercase block">Golden Visa Threshold</span>
                      <span className="text-[#c9a962] font-semibold">&ge; AED 2,000,000</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 02 — POSITIONING & 4 VALUE PILLARS: Open Architectural Layout             */}
      {/* ========================================================================= */}
      <Section spacing="room-160" surface="subtle" containerSize="wide">
        <div className="space-y-16">
          
          {/* Main Editorial Statement */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-end pb-12 border-b border-white/10">
            <div className="lg:col-span-7 space-y-4">
              <Eyebrow>01 &bull; POSITIONING &amp; INTELLIGENCE</Eyebrow>
              <h2 className="text-[34px] sm:text-[48px] lg:text-[56px] font-light tracking-[-0.03em] leading-[1.04] text-[#f5f5f7]">
                REAL ESTATE IS EASY TO FIND.<br />
                <span className="text-[#c9a962]">GOOD DECISIONS ARE NOT.</span>
              </h2>
            </div>
            <div className="lg:col-span-5">
              <p className="text-base text-[#a1a1aa] font-light leading-relaxed">
                We replace speculative marketing with published statutory codes, certified land registries, and direct institutional underwriting. Every property dossier reflects authentic developer filings and official conveyance schedules.
              </p>
            </div>
          </div>

          {/* 4 Open Architectural Pillars (Breathing Room - No Box Fatigue) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10">
            
            {/* Pillar 1 */}
            <div className="space-y-4 pt-6 border-t border-white/10 hover:border-[#c9a962] transition-colors group">
              <div className="flex items-center justify-between">
                <span className="text-3xl font-light font-mono text-[#c9a962]">01</span>
                <Building2 className="h-5 w-5 text-[#71717a] group-hover:text-[#c9a962] transition-colors" />
              </div>
              <div className="space-y-1">
                <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-[#8e8e93] block">
                  OPPORTUNITIES
                </span>
                <h3 className="text-xl font-light text-[#f5f5f7] group-hover:text-[#c9a962] transition-colors">
                  Verified Properties
                </h3>
              </div>
              <p className="text-xs text-[#a1a1aa] font-light leading-relaxed">
                Curated prime residential portfolios across Dubai&apos;s freehold zones with verified titles, developer licenses, and handover timelines.
              </p>
            </div>

            {/* Pillar 2 */}
            <div className="space-y-4 pt-6 border-t border-white/10 hover:border-[#c9a962] transition-colors group">
              <div className="flex items-center justify-between">
                <span className="text-3xl font-light font-mono text-[#c9a962]">02</span>
                <TrendingUp className="h-5 w-5 text-[#71717a] group-hover:text-[#c9a962] transition-colors" />
              </div>
              <div className="space-y-1">
                <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-[#8e8e93] block">
                  PROVENANCE
                </span>
                <h3 className="text-xl font-light text-[#f5f5f7] group-hover:text-[#c9a962] transition-colors">
                  Market Intelligence
                </h3>
              </div>
              <p className="text-xs text-[#a1a1aa] font-light leading-relaxed">
                Real transaction volumes, rental yield matrices, and legal decrees directly sourced from DLD, RERA, and official economic registers.
              </p>
            </div>

            {/* Pillar 3 */}
            <div className="space-y-4 pt-6 border-t border-white/10 hover:border-[#c9a962] transition-colors group">
              <div className="flex items-center justify-between">
                <span className="text-3xl font-light font-mono text-[#c9a962]">03</span>
                <Sliders className="h-5 w-5 text-[#71717a] group-hover:text-[#c9a962] transition-colors" />
              </div>
              <div className="space-y-1">
                <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-[#8e8e93] block">
                  UNDERWRITING
                </span>
                <h3 className="text-xl font-light text-[#f5f5f7] group-hover:text-[#c9a962] transition-colors">
                  Capital Modeling
                </h3>
              </div>
              <p className="text-xs text-[#a1a1aa] font-light leading-relaxed">
                Deterministic acquisition schedules factoring 4% DLD fees, trustee charges, conveyance costs, and unlevered net yield modeling.
              </p>
            </div>

            {/* Pillar 4 */}
            <div className="space-y-4 pt-6 border-t border-white/10 hover:border-[#c9a962] transition-colors group">
              <div className="flex items-center justify-between">
                <span className="text-3xl font-light font-mono text-[#c9a962]">04</span>
                <ShieldCheck className="h-5 w-5 text-[#71717a] group-hover:text-[#c9a962] transition-colors" />
              </div>
              <div className="space-y-1">
                <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-[#8e8e93] block">
                  EXECUTION
                </span>
                <h3 className="text-xl font-light text-[#f5f5f7] group-hover:text-[#c9a962] transition-colors">
                  Private Client Desk
                </h3>
              </div>
              <p className="text-xs text-[#a1a1aa] font-light leading-relaxed">
                Discreet search mandates, off-market allocations, conveyance coordination, and 10-Year Golden Visa residency facilitation.
              </p>
            </div>

          </div>

        </div>
      </Section>

      {/* ========================================================================= */}
      {/* 03 — FEATURED PROPERTIES: Asymmetric Luxury Editorial Grid                */}
      {/* ========================================================================= */}
      <Section spacing="room-160" surface="pure" containerSize="wide">
        <div className="space-y-12">
          
          {/* Section Header */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 border-b border-white/10">
            <div className="space-y-2">
              <Eyebrow>02 &bull; SELECTED OPPORTUNITIES</Eyebrow>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light tracking-[-0.03em] text-[#f5f5f7]">
                FEATURED PROPERTIES
              </h2>
              <p className="text-sm text-[#8e8e93] font-light">
                Selected prime opportunities across Dubai with verified developer filings.
              </p>
            </div>

            <Link
              href="/properties"
              className="inline-flex items-center gap-1.5 text-xs font-mono uppercase tracking-[0.14em] text-[#c9a962] hover:text-[#dbbe7a] transition-colors"
            >
              <span>View All Properties</span>
              <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          </div>

          {/* Asymmetric Grid: 1 Flagship Large + 2 Supporting Cards */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
            
            {/* Left 7 cols: Large Flagship Featured Property */}
            {featuredFlagship && (
              <div className="lg:col-span-7 flex flex-col justify-between p-6 sm:p-8 rounded-sm bg-[#111116] border border-white/10 hover:border-[#c9a962]/50 transition-all duration-300 group shadow-[0_8px_30px_rgba(0,0,0,0.6)]">
                <div className="space-y-6">
                  {/* Top Image Spread */}
                  <div className="relative aspect-[16/10] w-full overflow-hidden rounded-sm bg-[#08080a]">
                    <Image
                      src={featuredFlagship.images[0] || 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1600&q=85'}
                      alt={featuredFlagship.title}
                      fill
                      priority
                      sizes="(max-width: 1024px) 100vw, 60vw"
                      className="object-cover transition-transform duration-1000 group-hover:scale-105 brightness-90 group-hover:brightness-100"
                    />
                    <div className="absolute top-4 left-4 flex gap-2">
                      <span className="px-2.5 py-1 rounded-xs text-[9px] font-mono font-semibold uppercase bg-[#08080a]/90 backdrop-blur-md text-[#c9a962] border border-[#c9a962]/40">
                        FLAGSHIP ASSET
                      </span>
                      <span className="px-2.5 py-1 rounded-xs text-[9px] font-mono uppercase bg-[#08080a]/90 backdrop-blur-md text-[#f5f5f7] border border-white/10">
                        {featuredFlagship.completion_status}
                      </span>
                    </div>

                    <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between p-3 bg-[#08080a]/80 backdrop-blur-md rounded-xs border border-white/10 text-xs font-mono">
                      <span className="text-[#c9a962]">{featuredFlagship.area_name}</span>
                      <span className="text-[#a1a1aa]">{featuredFlagship.developer_name}</span>
                    </div>
                  </div>

                  {/* Flagship Body Content */}
                  <div className="space-y-4">
                    <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2">
                      <h3 className="text-2xl sm:text-3xl font-light text-[#f5f5f7] group-hover:text-[#c9a962] transition-colors">
                        {featuredFlagship.editorial_display_name || featuredFlagship.title}
                      </h3>
                      <div className="font-mono text-xl sm:text-2xl font-light text-[#f5f5f7] tabular-nums">
                        {formatCurrency(featuredFlagship.asking_price)}
                      </div>
                    </div>

                    <p className="text-sm text-[#a1a1aa] font-light leading-relaxed">
                      {featuredFlagship.unit_descriptor || 'Exemplary luxury residence with panoramic skyline views, private terrace, and full statutory title deed registration.'}
                    </p>

                    {/* Key Metrics */}
                    <div className="grid grid-cols-3 gap-4 py-4 border-y border-white/10 font-mono text-xs text-[#a1a1aa]">
                      <div>
                        <span className="text-[10px] text-[#71717a] block uppercase">Bedrooms</span>
                        <span className="text-[#f5f5f7]">{featuredFlagship.bedrooms} Beds</span>
                      </div>
                      <div>
                        <span className="text-[10px] text-[#71717a] block uppercase">Internal Area</span>
                        <span className="text-[#f5f5f7]">{featuredFlagship.internal_area_sqft.toLocaleString()} sqft</span>
                      </div>
                      <div>
                        <span className="text-[10px] text-[#71717a] block uppercase">Valuation / sqft</span>
                        <span className="text-[#c9a962]">AED {featuredFlagship.price_per_sqft?.toLocaleString()}</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Flagship Action */}
                <div className="pt-6 flex flex-wrap items-center justify-between gap-4">
                  <div className="flex items-center gap-2 text-xs font-mono text-emerald-400">
                    <ShieldCheck className="h-4 w-4" />
                    <span>Golden Visa Eligible (&ge; AED 2M)</span>
                  </div>
                  <Link
                    href={`/properties/${featuredFlagship.id}`}
                    className="inline-flex items-center gap-2 px-6 py-2.5 rounded-xs bg-[#c9a962] hover:bg-[#dbbe7a] text-[#08080a] text-xs font-mono uppercase tracking-[0.14em] font-semibold transition-all shadow-[0_0_15px_rgba(201,169,98,0.2)]"
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
      {/* 04 — DUBAI INTELLIGENCE: Hybrid Dashboard & Statutory Market Matrix       */}
      {/* ========================================================================= */}
      <Section spacing="room-160" surface="subtle" containerSize="wide">
        <div className="space-y-12">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 border-b border-white/10">
            <div className="space-y-2">
              <Eyebrow>03 &bull; STATUTORY FRAMEWORK &amp; MARKET METRICS</Eyebrow>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light tracking-[-0.03em] text-[#f5f5f7]">
                DUBAI INTELLIGENCE
              </h2>
              <p className="text-sm text-[#8e8e93] font-light">
                Official regulatory baseline and verified transaction parameters.
              </p>
            </div>

            <Link
              href="/market"
              className="inline-flex items-center gap-1.5 text-xs font-mono uppercase tracking-[0.14em] text-[#c9a962] hover:text-[#dbbe7a] transition-colors"
            >
              <span>Explore Market Intelligence</span>
              <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          </div>

          {/* Intelligence Dashboard Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            
            {/* Card 1: DLD Transfer Schedule */}
            <div className="p-6 rounded-sm bg-[#131318] border border-white/10 space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-[#c9a962]">
                  DLD SCHEDULE &bull; LAW 7 (2006)
                </span>
                <Scale className="h-4 w-4 text-[#71717a]" />
              </div>
              <div className="text-3xl font-light text-[#f5f5f7] font-mono">
                4.00%
              </div>
              <p className="text-xs text-[#a1a1aa] font-light leading-relaxed">
                Statutory combined land transfer fee payable to the Dubai Land Department upon title conveyance (Buyer 2% / Seller 2% statutory allocation).
              </p>
              <div className="pt-2 border-t border-white/10 flex justify-between text-[11px] font-mono text-[#71717a]">
                <span>Admin Fee: AED 4,200</span>
                <span>Trustee Fee: AED 4,200</span>
              </div>
            </div>

            {/* Card 2: Foreign Freehold Designation */}
            <div className="p-6 rounded-sm bg-[#131318] border border-white/10 space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-[#c9a962]">
                  FREEHOLD &bull; DECREE 3 (2006)
                </span>
                <Landmark className="h-4 w-4 text-[#71717a]" />
              </div>
              <div className="text-3xl font-light text-[#f5f5f7] font-mono">
                100%
              </div>
              <p className="text-xs text-[#a1a1aa] font-light leading-relaxed">
                Full unencumbered foreign freehold ownership across designated investment areas (Downtown, Palm Jumeirah, Dubai Marina, Dubai Hills).
              </p>
              <div className="pt-2 border-t border-white/10 flex justify-between text-[11px] font-mono text-[#71717a]">
                <span>Title Deed: Issued by DLD</span>
                <span>Perpetual Ownership</span>
              </div>
            </div>

            {/* Card 3: UAE Personal Taxation */}
            <div className="p-6 rounded-sm bg-[#131318] border border-white/10 space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-[#c9a962]">
                  TAXATION &bull; FTA STATUTORY
                </span>
                <BadgePercent className="h-4 w-4 text-[#71717a]" />
              </div>
              <div className="text-3xl font-light text-[#f5f5f7] font-mono">
                0.00%
              </div>
              <p className="text-xs text-[#a1a1aa] font-light leading-relaxed">
                Zero personal income tax, zero capital gains tax on property disposal, and zero worldwide wealth tax under UAE federal statutes.
              </p>
              <div className="pt-2 border-t border-white/10 flex justify-between text-[11px] font-mono text-[#71717a]">
                <span>Corporate Tax: 9% (&gt;AED 375k)</span>
                <span>Personal Capital: 0%</span>
              </div>
            </div>

          </div>

          {/* D33 Sovereign Economic Anchor */}
          <div className="p-6 sm:p-8 rounded-sm bg-[#08080a] border border-white/15 flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div className="space-y-2 max-w-2xl">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#c9a962]" />
                <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-[#c9a962] font-semibold">
                  DUBAI D33 ECONOMIC AGENDA
                </span>
              </div>
              <h3 className="text-xl sm:text-2xl font-light text-[#f5f5f7]">
                Doubling the foreign direct investment target to AED 650 Billion by 2033.
              </h3>
              <p className="text-xs text-[#8e8e93] font-light">
                Published by Dubai Executive Council &bull; Sourced from official governmental declarations.
              </p>
            </div>
            <Link
              href="/economy"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xs bg-[#181820] hover:bg-[#272733] border border-white/10 text-xs font-mono uppercase tracking-[0.14em] text-[#f5f5f7] hover:text-[#c9a962] transition-colors shrink-0"
            >
              <span>Inspect D33 Framework</span>
              <ArrowUpRight className="h-3.5 w-3.5" />
            </Link>
          </div>

        </div>
      </Section>

      {/* ========================================================================= */}
      {/* EDITORIAL PAUSE: Architectural & Geographic Rhythm                        */}
      {/* ========================================================================= */}
      <section className="py-20 sm:py-28 bg-[#050507] border-y border-white/10 relative overflow-hidden">
        <div className="w-full max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-16 text-center space-y-4">
          <span className="text-[10px] font-mono tracking-[0.3em] uppercase text-[#c9a962] block font-semibold">
            GEOGRAPHIC THESIS
          </span>
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-light tracking-[-0.035em] text-[#f5f5f7] max-w-4xl mx-auto leading-[1.1]">
            DUBAI IS NOT ONE MARKET.<br />
            <span className="text-[#a1a1aa] font-extralight italic">It is an archipelago of distinct economic micro-climates.</span>
          </h2>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 05 — DUBAI ATLAS: District Exploration Experience                         */}
      {/* ========================================================================= */}
      <Section spacing="room-160" surface="pure" containerSize="wide">
        <div className="space-y-12">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 border-b border-white/10">
            <div className="space-y-2">
              <Eyebrow>04 &bull; DUBAI ATLAS &bull; GEOGRAPHIC DOSSIERS</Eyebrow>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light tracking-[-0.03em] text-[#f5f5f7]">
                PRIME DISTRICTS
              </h2>
              <p className="text-sm text-[#8e8e93] font-light">
                Verified district profiles, zoning frameworks, and freehold boundaries.
              </p>
            </div>

            <Link
              href="/districts"
              className="inline-flex items-center gap-1.5 text-xs font-mono uppercase tracking-[0.14em] text-[#c9a962] hover:text-[#dbbe7a] transition-colors"
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
                    className={`w-full text-left p-4 sm:p-5 rounded-sm border transition-all flex items-center justify-between cursor-pointer ${
                      isSelected
                        ? 'bg-[#181820] border-[#c9a962] shadow-[0_0_20px_rgba(201,169,98,0.15)]'
                        : 'bg-[#111116] border-white/10 hover:border-white/25 text-[#a1a1aa]'
                    }`}
                  >
                    <div className="space-y-1">
                      <div className="flex items-center gap-3">
                        <span className={`text-base font-light ${isSelected ? 'text-[#c9a962] font-normal' : 'text-[#f5f5f7]'}`}>
                          {district.name}
                        </span>
                        <span className="text-[9px] font-mono uppercase px-1.5 py-0.5 rounded-xs bg-[#c9a962]/10 text-[#c9a962] border border-[#c9a962]/30">
                          {district.freehold_status}
                        </span>
                      </div>
                      <p className="text-xs text-[#71717a] font-mono">
                        {district.lifestyle_tags?.slice(0, 2).join(' &bull; ') || 'Freehold Residential'}
                      </p>
                    </div>
                    <ArrowRight className={`h-4 w-4 transition-transform ${isSelected ? 'text-[#c9a962] translate-x-1' : 'text-[#636366]'}`} />
                  </button>
                )
              })}
            </div>

            {/* Right 7 cols: Active District Dossier Card */}
            {activeDistrict && (
              <div className="lg:col-span-7 p-6 sm:p-8 rounded-sm bg-[#111116] border border-white/10 space-y-6">
                <div className="relative aspect-[16/9] w-full overflow-hidden rounded-sm bg-[#08080a]">
                  <Image
                    src={activeDistrict.image || 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=1200&q=85'}
                    alt={activeDistrict.name}
                    fill
                    sizes="(max-width: 1024px) 100vw, 55vw"
                    className="object-cover brightness-90"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 rounded-xs text-[10px] font-mono uppercase bg-[#08080a]/90 backdrop-blur-md text-[#c9a962] border border-[#c9a962]/30">
                      DESIGNATED FREEHOLD ZONE
                    </span>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="flex items-baseline justify-between border-b border-white/10 pb-4">
                    <div>
                      <h3 className="text-2xl sm:text-3xl font-light text-[#f5f5f7]">
                        {activeDistrict.name}
                      </h3>
                      <span className="text-xs font-mono text-[#8e8e93]">
                        Master Developer: {activeDistrict.master_developer || 'Multi-Developer'}
                      </span>
                    </div>
                    <Link
                      href={`/districts/${activeDistrict.slug}`}
                      className="inline-flex items-center gap-1.5 text-xs font-mono uppercase tracking-[0.14em] text-[#c9a962] hover:underline"
                    >
                      <span>Full Dossier</span>
                      <ArrowUpRight className="h-3.5 w-3.5" />
                    </Link>
                  </div>

                  <p className="text-sm text-[#a1a1aa] font-light leading-relaxed">
                    {activeDistrict.description || 'Statutory freehold master development with integrated infrastructure, coastal and skyline views, and established property title registration.'}
                  </p>

                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 pt-2 font-mono text-xs text-[#8e8e93]">
                    <div className="p-3 bg-[#08080a] border border-white/10 rounded-xs">
                      <span className="text-[9px] uppercase text-[#71717a] block">Sector</span>
                      <span className="text-[#f5f5f7] font-semibold">{activeDistrict.sector}</span>
                    </div>
                    <div className="p-3 bg-[#08080a] border border-white/10 rounded-xs">
                      <span className="text-[9px] uppercase text-[#71717a] block">Freehold Status</span>
                      <span className="text-[#f5f5f7] font-semibold">{activeDistrict.freehold_status}</span>
                    </div>
                    <div className="p-3 bg-[#08080a] border border-white/10 rounded-xs col-span-2 sm:col-span-1">
                      <span className="text-[9px] uppercase text-[#71717a] block">Statutory Basis</span>
                      <span className="text-[#c9a962] font-semibold">Regulation 3 (2006)</span>
                    </div>
                  </div>
                </div>
              </div>
            )}

          </div>

        </div>
      </Section>

      {/* ========================================================================= */}
      {/* 06 — DEVELOPERS REGISTRY: Institutional Verification Directory            */}
      {/* ========================================================================= */}
      <Section spacing="room-160" surface="subtle" containerSize="wide">
        <div className="space-y-12">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 border-b border-white/10">
            <div className="space-y-2">
              <Eyebrow>05 &bull; DEVELOPERS REGISTRY &bull; VERIFIED ENTITIES</Eyebrow>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light tracking-[-0.03em] text-[#f5f5f7]">
                MASTER DEVELOPERS
              </h2>
              <p className="text-sm text-[#8e8e93] font-light">
                Official statutory records and delivery track records for Dubai&apos;s leading developers.
              </p>
            </div>

            <Link
              href="/developers"
              className="inline-flex items-center gap-1.5 text-xs font-mono uppercase tracking-[0.14em] text-[#c9a962] hover:text-[#dbbe7a] transition-colors"
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
                className="p-6 rounded-sm bg-[#131318] border border-white/10 hover:border-[#c9a962]/50 transition-all space-y-4 group block"
              >
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-[#c9a962]">
                    FOUNDED {dev.founded_year || 'VERIFIED'}
                  </span>
                  <SourceBadge sourceClass="OFFICIAL CORPORATE" sourceName={dev.name} />
                </div>

                <div className="space-y-1">
                  <h3 className="text-xl font-light text-[#f5f5f7] group-hover:text-[#c9a962] transition-colors">
                    {dev.name}
                  </h3>
                  <p className="text-xs text-[#71717a] font-mono">
                    {dev.headquarters || 'Dubai, United Arab Emirates'}
                  </p>
                </div>

                <p className="text-xs text-[#a1a1aa] font-light line-clamp-2 leading-relaxed">
                  {dev.portfolio_overview || 'Master developer with certified delivery portfolio in prime designated freehold communities.'}
                </p>

                <div className="pt-2 border-t border-white/10 flex items-center justify-between text-xs font-mono text-[#8e8e93]">
                  <span>Tier 1 Master Developer</span>
                  <ArrowUpRight className="h-3.5 w-3.5 text-[#71717a] group-hover:text-[#c9a962] transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </div>
              </Link>
            ))}
          </div>

        </div>
      </Section>

      {/* ========================================================================= */}
      {/* 07 — INVESTMENT & UNDERWRITING ENGINE: Interactive Private Wealth UI      */}
      {/* ========================================================================= */}
      <Section spacing="room-160" surface="pure" containerSize="wide">
        <div className="space-y-12">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 border-b border-white/10">
            <div className="space-y-2">
              <Eyebrow>06 &bull; CAPITAL ALLOCATION &amp; STATUTORY SCHEDULE</Eyebrow>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light tracking-[-0.03em] text-[#f5f5f7]">
                UNDERWRITE THE OPPORTUNITY.
              </h2>
              <p className="text-sm text-[#8e8e93] font-light">
                Model deterministic conveyance fees, net unlevered yield, and cash flow schedules.
              </p>
            </div>

            <span className="text-[10px] font-mono uppercase tracking-[0.16em] px-3 py-1.5 rounded-xs bg-[#181820] text-[#c9a962] border border-[#c9a962]/30">
              MODELLED / ESTIMATE
            </span>
          </div>

          {/* Underwriting Terminal Interface */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start p-6 sm:p-10 rounded-sm bg-[#111116] border border-white/15 shadow-[0_12px_40px_rgba(0,0,0,0.8)]">
            
            {/* Left 6 cols: Sliders & Parameter Inputs */}
            <div className="lg:col-span-6 space-y-8">
              <div className="space-y-2">
                <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-[#c9a962]">
                  UNDERWRITING PARAMETERS
                </span>
                <h3 className="text-xl font-light text-[#f5f5f7]">
                  Asset Purchase &amp; Operational Inputs
                </h3>
              </div>

              {/* Slider 1: Purchase Price */}
              <div className="space-y-3">
                <div className="flex justify-between items-baseline font-mono">
                  <label className="text-xs uppercase text-[#8e8e93]">Purchase Price</label>
                  <span className="text-lg font-light text-[#f5f5f7]">{formatCurrency(propertyPriceAED)}</span>
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
                <div className="flex justify-between text-[10px] font-mono text-[#636366]">
                  <span>AED 2,000,000 (Golden Visa Baseline)</span>
                  <span>AED 50,000,000</span>
                </div>
              </div>

              {/* Slider 2: Gross Rental Yield */}
              <div className="space-y-3">
                <div className="flex justify-between items-baseline font-mono">
                  <label className="text-xs uppercase text-[#8e8e93]">Expected Gross Yield</label>
                  <span className="text-lg font-light text-[#c9a962]">{expectedGrossYield.toFixed(1)}%</span>
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
                <div className="flex justify-between text-[10px] font-mono text-[#636366]">
                  <span>4.0% (Prime Villa / Waterfront)</span>
                  <span>10.0% (Compact Apartment)</span>
                </div>
              </div>

              {/* Slider 3: Service Charges per sqft */}
              <div className="space-y-3">
                <div className="flex justify-between items-baseline font-mono">
                  <label className="text-xs uppercase text-[#8e8e93]">Service Charge per SqFt</label>
                  <span className="text-base font-light text-[#f5f5f7]">AED {annualServiceChargePerSqft} / sqft</span>
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
                <div className="flex justify-between text-[10px] font-mono text-[#636366]">
                  <span>AED 10 (Townhouses)</span>
                  <span>AED 45 (Ultra-Prime Towers)</span>
                </div>
              </div>
            </div>

            {/* Right 6 cols: Calculated Institutional Acquisition Schedule */}
            <div className="lg:col-span-6 p-6 sm:p-8 rounded-sm bg-[#08080a] border border-white/10 space-y-6">
              <div className="flex items-center justify-between border-b border-white/10 pb-4">
                <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-[#8e8e93]">
                  SCHEDULE OF ACQUISITION
                </span>
                <span className="text-[10px] font-mono text-emerald-400">
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

              <div className="pt-4 border-t border-white/15 space-y-4">
                <div className="flex justify-between items-baseline font-mono">
                  <span className="text-xs font-semibold text-[#f5f5f7] uppercase tracking-wider">Total Acquisition Outlay</span>
                  <span className="text-2xl font-light text-[#c9a962]">{formatCurrency(totalAcquisitionCost)}</span>
                </div>

                <div className="grid grid-cols-2 gap-4 pt-2 font-mono text-xs">
                  <div className="p-3 bg-[#131318] border border-white/10 rounded-xs">
                    <span className="text-[9px] text-[#71717a] uppercase block">Gross Annual Rent</span>
                    <span className="text-[#f5f5f7] font-semibold">{formatCurrency(grossAnnualRent)}</span>
                  </div>
                  <div className="p-3 bg-[#131318] border border-white/10 rounded-xs">
                    <span className="text-[9px] text-[#71717a] uppercase block">Net Unlevered Yield</span>
                    <span className="text-emerald-400 font-semibold">{netYieldUnlevered.toFixed(2)}%</span>
                  </div>
                </div>

                <div className="pt-2">
                  <Link
                    href="/investment"
                    className="w-full py-3 rounded-xs bg-[#181820] hover:bg-[#272733] border border-white/10 text-xs font-mono uppercase tracking-[0.14em] text-[#f5f5f7] hover:text-[#c9a962] text-center block transition-colors"
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
      {/* 08 — GOLDEN RESIDENCY: Statutory 10-Year Framework                        */}
      {/* ========================================================================= */}
      <Section spacing="room-160" surface="subtle" containerSize="wide">
        <div className="space-y-12">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 border-b border-white/10">
            <div className="space-y-2">
              <Eyebrow>07 &bull; SOVEREIGN IMMIGRATION &bull; FEDERAL DECREE</Eyebrow>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light tracking-[-0.03em] text-[#f5f5f7]">
                UAE 10-YEAR GOLDEN RESIDENCY
              </h2>
              <p className="text-sm text-[#8e8e93] font-light">
                Statutory criteria, investment thresholds, and processing flow under GDRFA.
              </p>
            </div>

            <Link
              href="/residency"
              className="inline-flex items-center gap-1.5 text-xs font-mono uppercase tracking-[0.14em] text-[#c9a962] hover:text-[#dbbe7a] transition-colors"
            >
              <span>Inspect Residency Portal</span>
              <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Left 5 cols: Criteria Highlights */}
            <div className="lg:col-span-5 p-6 sm:p-8 rounded-sm bg-[#111116] border border-white/10 space-y-6">
              <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-[#c9a962] block font-semibold">
                STATUTORY QUALIFICATION CRITERIA
              </span>

              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-[#c9a962] shrink-0 mt-0.5" />
                  <div className="space-y-1 text-xs">
                    <span className="font-mono uppercase text-[#f5f5f7] block font-semibold">AED 2,000,000 Minimum Value</span>
                    <p className="text-[#a1a1aa] font-light">
                      Property value must meet or exceed AED 2,000,000 on official title deed or certified Oqood contract.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-[#c9a962] shrink-0 mt-0.5" />
                  <div className="space-y-1 text-xs">
                    <span className="font-mono uppercase text-[#f5f5f7] block font-semibold">Off-Plan Eligibility (2024 Update)</span>
                    <p className="text-[#a1a1aa] font-light">
                      Off-plan properties from approved developers qualify with initial payments upon certified registration.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-[#c9a962] shrink-0 mt-0.5" />
                  <div className="space-y-1 text-xs">
                    <span className="font-mono uppercase text-[#f5f5f7] block font-semibold">Full Family Sponsorship</span>
                    <p className="text-[#a1a1aa] font-light">
                      Direct sponsorship for spouse, children of any age, and domestic staff with no residency renewal cap.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-[#c9a962] shrink-0 mt-0.5" />
                  <div className="space-y-1 text-xs">
                    <span className="font-mono uppercase text-[#f5f5f7] block font-semibold">No Stay Duration Limits</span>
                    <p className="text-[#a1a1aa] font-light">
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
      {/* 09 — CURATED LIFESTYLE: Editorial Magazine Layout                         */}
      {/* ========================================================================= */}
      <Section spacing="room-160" surface="pure" containerSize="wide">
        <div className="space-y-12">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 border-b border-white/10">
            <div className="space-y-2">
              <Eyebrow>08 &bull; PRIVATE LIVING &bull; CURATED DIRECTORY</Eyebrow>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light tracking-[-0.03em] text-[#f5f5f7]">
                CURATED LIFESTYLE
              </h2>
              <p className="text-sm text-[#8e8e93] font-light">
                Private aviation, superyacht marinas, Michelin gastronomy, and architectural landmarks.
              </p>
            </div>

            <Link
              href="/lifestyle"
              className="inline-flex items-center gap-1.5 text-xs font-mono uppercase tracking-[0.14em] text-[#c9a962] hover:text-[#dbbe7a] transition-colors"
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
                className="group relative aspect-[3/4] overflow-hidden rounded-sm bg-[#111116] border border-white/10 block hover:border-[#c9a962]/50 transition-all"
              >
                <Image
                  src={cat.image}
                  alt={cat.title}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-105 brightness-75 group-hover:brightness-90"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#08080a] via-[#08080a]/30 to-transparent" />

                <div className="absolute bottom-0 left-0 right-0 p-6 space-y-2">
                  <span className="text-[9px] font-mono uppercase tracking-[0.2em] text-[#c9a962] block font-semibold">
                    {cat.count} VERIFIED
                  </span>
                  <h3 className="text-xl font-light text-[#f5f5f7] group-hover:text-[#c9a962] transition-colors">
                    {cat.title}
                  </h3>
                  <p className="text-xs text-[#a1a1aa] font-light line-clamp-2">
                    {cat.description}
                  </p>
                </div>
              </Link>
            ))}
          </div>

        </div>
      </Section>

      {/* ========================================================================= */}
      {/* 10 — PRIVATE CLIENT: High-End Advisory & Exclusive Execution              */}
      {/* ========================================================================= */}
      <section className="py-24 sm:py-32 bg-[#050507] border-y border-white/10 relative overflow-hidden">
        {/* Subtle Gold Accent Radiance */}
        <div className="absolute top-1/2 right-0 -translate-y-1/2 w-[700px] h-[700px] bg-[#c9a962]/[0.045] rounded-full blur-[170px] pointer-events-none" />

        <div className="w-full max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-16 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            <div className="lg:col-span-6 space-y-6">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#c9a962]" />
                <Eyebrow>09 &bull; DISCREET ADVISORY &bull; PRIVATE MANDATES</Eyebrow>
              </div>

              <h2 className="text-[38px] sm:text-[54px] lg:text-[68px] font-light tracking-[-0.035em] leading-[1.0] text-[#f5f5f7]">
                PRIVATE CLIENT
              </h2>

              <p className="text-base sm:text-lg text-[#a1a1aa] font-light leading-relaxed max-w-xl">
                Access Dubai with a different level of precision. Discreet property intelligence, off-market asset sourcing, and independent advisory for family offices, institutional principals, and private wealth.
              </p>

              <div className="pt-4 flex flex-wrap items-center gap-4">
                <button
                  type="button"
                  onClick={() => setIsContactModalOpen(true)}
                  className="px-7 py-3.5 rounded-xs bg-[#c9a962] hover:bg-[#dbbe7a] text-[#08080a] text-xs font-mono uppercase tracking-[0.14em] font-semibold transition-all shadow-[0_0_24px_rgba(201,169,98,0.25)] cursor-pointer flex items-center gap-2"
                >
                  <span>Request Private Access</span>
                  <ArrowRight className="h-3.5 w-3.5" />
                </button>
                <Link
                  href="/private-client"
                  className="px-6 py-3.5 rounded-xs border border-white/20 hover:border-[#c9a962] text-[#f5f5f7] hover:text-[#c9a962] text-xs font-mono uppercase tracking-[0.14em] transition-colors inline-flex items-center gap-2"
                >
                  <span>Advisory Mandates</span>
                  <ArrowUpRight className="h-3.5 w-3.5" />
                </Link>
              </div>
            </div>

            {/* 4 Sleek Editorial Service Rows */}
            <div className="lg:col-span-6 divide-y divide-white/10 border-y border-white/10">
              <div className="py-5 space-y-1 group">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono text-[#c9a962] uppercase tracking-wider font-semibold">
                    01 &bull; SOURCING
                  </span>
                  <span className="text-[10px] font-mono text-[#71717a] uppercase">OFF-MARKET &bull; ULTRA-PRIME</span>
                </div>
                <h4 className="text-lg font-light text-[#f5f5f7] group-hover:text-[#c9a962] transition-colors">
                  Private Property Search
                </h4>
                <p className="text-xs text-[#8e8e93] font-light leading-relaxed">
                  Tailored acquisition briefs for trophy beachfront villas, penthouses, and full-floor developments.
                </p>
              </div>

              <div className="py-5 space-y-1 group">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono text-[#c9a962] uppercase tracking-wider font-semibold">
                    02 &bull; INTELLIGENCE
                  </span>
                  <span className="text-[10px] font-mono text-[#71717a] uppercase">DETERMINISTIC MODELING</span>
                </div>
                <h4 className="text-lg font-light text-[#f5f5f7] group-hover:text-[#c9a962] transition-colors">
                  Investment Underwriting
                </h4>
                <p className="text-xs text-[#8e8e93] font-light leading-relaxed">
                  Cash-flow modeling, rental yield stress-testing, and exit valuations based on statutory registers.
                </p>
              </div>

              <div className="py-5 space-y-1 group">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono text-[#c9a962] uppercase tracking-wider font-semibold">
                    03 &bull; ALLOCATIONS
                  </span>
                  <span className="text-[10px] font-mono text-[#71717a] uppercase">DIRECT ACCESS</span>
                </div>
                <h4 className="text-lg font-light text-[#f5f5f7] group-hover:text-[#c9a962] transition-colors">
                  Off-Market Developer Allocations
                </h4>
                <p className="text-xs text-[#8e8e93] font-light leading-relaxed">
                  Confidential allocations and pre-launch developer tranches before general public release.
                </p>
              </div>

              <div className="py-5 space-y-1 group">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono text-[#c9a962] uppercase tracking-wider font-semibold">
                    04 &bull; STRUCTURING
                  </span>
                  <span className="text-[10px] font-mono text-[#71717a] uppercase">CROSS-BORDER COMPLIANCE</span>
                </div>
                <h4 className="text-lg font-light text-[#f5f5f7] group-hover:text-[#c9a962] transition-colors">
                  Cross-Border Structuring &amp; Residency
                </h4>
                <p className="text-xs text-[#8e8e93] font-light leading-relaxed">
                  Coordination with DIFC foundations, 10-Year Golden Visa authorities, and licensed conveyancers.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 11 — SOURCES & PROVENANCE / TRUST: Institutional Methodology              */}
      {/* ========================================================================= */}
      <Section spacing="room-120" surface="subtle" containerSize="wide">
        <div className="space-y-8">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 border-b border-white/10">
            <div className="space-y-2">
              <Eyebrow>10 &bull; STATUTORY PROVENANCE &amp; SOURCES</Eyebrow>
              <h2 className="text-2xl sm:text-3xl font-light tracking-[-0.03em] text-[#f5f5f7]">
                DATA PROVENANCE REGISTRY
              </h2>
            </div>

            <Link
              href="/sources"
              className="inline-flex items-center gap-1.5 text-xs font-mono uppercase tracking-[0.14em] text-[#c9a962] hover:underline"
            >
              <span>View Methodology &amp; Sources</span>
              <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
            <div className="p-4 rounded-xs bg-[#0d0d11] border border-white/10 space-y-1 hover:border-[#c9a962]/40 transition-colors">
              <span className="text-[9px] font-mono text-[#c9a962] uppercase block font-semibold">REGULATOR</span>
              <span className="text-sm text-[#f5f5f7] block font-light">DLD / RERA</span>
              <span className="text-[10px] text-[#71717a] font-mono block">Land Registry</span>
            </div>

            <div className="p-4 rounded-xs bg-[#0d0d11] border border-white/10 space-y-1 hover:border-[#c9a962]/40 transition-colors">
              <span className="text-[9px] font-mono text-[#c9a962] uppercase block font-semibold">IMMIGRATION</span>
              <span className="text-sm text-[#f5f5f7] block font-light">GDRFA Dubai</span>
              <span className="text-[10px] text-[#71717a] font-mono block">Golden Residency</span>
            </div>

            <div className="p-4 rounded-xs bg-[#0d0d11] border border-white/10 space-y-1 hover:border-[#c9a962]/40 transition-colors">
              <span className="text-[9px] font-mono text-[#c9a962] uppercase block font-semibold">TAXATION</span>
              <span className="text-sm text-[#f5f5f7] block font-light">Federal Tax Auth</span>
              <span className="text-[10px] text-[#71717a] font-mono block">Statutory Baseline</span>
            </div>

            <div className="p-4 rounded-xs bg-[#0d0d11] border border-white/10 space-y-1 hover:border-[#c9a962]/40 transition-colors">
              <span className="text-[9px] font-mono text-[#c9a962] uppercase block font-semibold">FREE ZONE</span>
              <span className="text-sm text-[#f5f5f7] block font-light">DIFC Courts</span>
              <span className="text-[10px] text-[#71717a] font-mono block">Common Law</span>
            </div>

            <div className="p-4 rounded-xs bg-[#0d0d11] border border-white/10 space-y-1 hover:border-[#c9a962]/40 transition-colors">
              <span className="text-[9px] font-mono text-[#c9a962] uppercase block font-semibold">ECONOMIC</span>
              <span className="text-sm text-[#f5f5f7] block font-light">Dubai Economy</span>
              <span className="text-[10px] text-[#71717a] font-mono block">D33 Agenda</span>
            </div>

            <div className="p-4 rounded-xs bg-[#0d0d11] border border-white/10 space-y-1 hover:border-[#c9a962]/40 transition-colors">
              <span className="text-[9px] font-mono text-[#c9a962] uppercase block font-semibold">CORPORATE</span>
              <span className="text-sm text-[#f5f5f7] block font-light">Developers</span>
              <span className="text-[10px] text-[#71717a] font-mono block">Verified Filings</span>
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