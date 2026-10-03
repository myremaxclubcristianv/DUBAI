'use client'

import * as React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { VERIFIED_PROPERTIES } from '@/lib/data/properties'
import { DUBAI_AREAS } from '@/lib/data/areas'
import { VERIFIED_DEVELOPERS } from '@/lib/data/developers'
import { useClient } from '@/lib/context/client-context'
import {
  Section,
  Eyebrow,
  SourceBadge,
  DirectoryRow,
  DataRow,
  TimelineStep,
  PrimaryLink,
  SecondaryLink,
} from '@/components/layout/layout-primitives'
import { ArrowRight, ArrowUpRight, ShieldCheck } from 'lucide-react'

export default function Home() {
  const { formatCurrency } = useClient()

  // Flagship Property
  const featureProperty = VERIFIED_PROPERTIES[0]
  // Atlas Districts
  const atlasDistricts = DUBAI_AREAS.slice(0, 6)
  // Key Developers
  const keyDevelopers = VERIFIED_DEVELOPERS.slice(0, 5)

  // Interactive Atlas Selected District State
  const [activeDistrictIndex, setActiveDistrictIndex] = React.useState(0)
  const activeDistrict = atlasDistricts[activeDistrictIndex] || atlasDistricts[0]

  // Capital Underwriting Interactive Calculator State
  const [propertyPriceAED, setPropertyPriceAED] = React.useState(10000000)
  const dldFee = propertyPriceAED * 0.04
  const adminFee = 4200
  const trusteeFee = propertyPriceAED >= 500000 ? 4200 : 2100
  const conveyanceEstimate = 10500
  const totalAcquisitionCost = propertyPriceAED + dldFee + adminFee + trusteeFee + conveyanceEstimate

  return (
    <div className="flex flex-col min-h-screen bg-[#ffffff] text-[#111111]">
      
      {/* ========================================================================= */}
      {/* 01 — HERO: Cinematic Opening (80-90vh, Light Typography, Asymmetric Art)  */}
      {/* ========================================================================= */}
      <section className="relative min-h-[85vh] flex items-center pt-16 pb-20 sm:pt-24 sm:pb-28 border-b border-[#e5e5ea] bg-[#ffffff] overflow-hidden">
        <div className="w-full max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            {/* Left 45%: Editorial Heading & Statement */}
            <div className="lg:col-span-6 space-y-8">
              <div className="space-y-4">
                <Eyebrow>DUBAI &bull; PROPERTY &bull; CAPITAL &bull; ACCESS</Eyebrow>
                
                <h1 className="text-[52px] sm:text-[76px] lg:text-[98px] font-light tracking-[-0.04em] leading-[0.95] text-[#111111]">
                  PROPERTY.<br />
                  CAPITAL.<br />
                  ACCESS.
                </h1>
              </div>

              <p className="text-lg sm:text-2xl text-[#484848] font-light leading-relaxed max-w-xl">
                Independent private-client intelligence for Dubai property, capital, residency and access. Sourced directly from published statutory registers and certified developer filings.
              </p>

              {/* Quiet Action Row */}
              <div className="flex flex-wrap items-center gap-6 pt-2">
                <PrimaryLink href="/properties">
                  Explore Curated Properties
                </PrimaryLink>
                <SecondaryLink href="/private-client">
                  Private Client Mandate
                </SecondaryLink>
              </div>

              {/* Provenance Footnote in Hero */}
              <div className="pt-4 border-t border-[#e5e5ea]/60 flex items-center gap-3 text-[11px] font-mono text-[#8e8e93]">
                <ShieldCheck className="h-3.5 w-3.5 text-[#9f8144]" />
                <span>Source-Led Intelligence &bull; Verified Statutory Sources</span>
              </div>
            </div>

            {/* Right 55%: Grand Architectural Environment (Escaping Card Container) */}
            <div className="lg:col-span-6 relative">
              <div className="relative aspect-[4/3] sm:aspect-[16/11] w-full overflow-hidden rounded-2xl bg-[#f5f5f3]">
                <Image
                  src="https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=2000&q=85"
                  alt="Dubai Architectural Environment"
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 55vw"
                  className="object-cover transition-transform duration-1000 ease-out hover:scale-[1.02]"
                />
                <div className="absolute bottom-4 left-4 px-3 py-1 bg-[#ffffff]/90 backdrop-blur-md rounded-full text-[10px] font-mono text-[#484848] border border-[#e5e5ea]">
                  <span>Downtown Core &bull; Architectural Reference</span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 02 — POSITIONING & STATUTORY MACRO FOUNDATION: Asymmetric Split           */}
      {/* ========================================================================= */}
      <Section spacing="room-200" surface="subtle" containerSize="wide" borderBottom={false}>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left 5 cols: Editorial Thesis */}
          <div className="lg:col-span-5 space-y-6">
            <Eyebrow>02 &bull; POSITIONING STATEMENT</Eyebrow>
            
            <h2 className="text-[36px] sm:text-[48px] lg:text-[54px] font-light tracking-[-0.03em] leading-[1.06] text-[#111111]">
              A clearer way to navigate Dubai property, capital, residency and access.
            </h2>

            <p className="text-base sm:text-lg text-[#6b6b6b] font-light leading-relaxed">
              We replace speculative marketing with published statutory codes, certified land registries, and direct institutional underwriting. Every property dossier reflects authentic developer filings and official conveyance schedules.
            </p>

            <div className="pt-2 flex items-center gap-3 text-xs font-mono text-[#8e8e93]">
              <ShieldCheck className="h-4 w-4 text-[#9f8144]" />
              <span>Statutory Basis: Law No. 7 (2006) &bull; Law No. 8 (2007)</span>
            </div>
          </div>

          {/* Right 7 cols: Verified Sovereign Pillars */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="p-7 rounded-2xl bg-[#ffffff] border border-[#e5e5ea] space-y-2">
              <span className="text-[10px] font-mono uppercase tracking-widest text-[#8e8e93] block">
                01 &bull; DLD TRANSFER FEE
              </span>
              <div className="text-2xl sm:text-3xl font-light text-[#111111]">4.00% Combined</div>
              <div className="text-xs font-mono text-[#9f8144]">Buyer 2% &bull; Seller 2%</div>
              <p className="text-xs text-[#6b6b6b] font-light leading-relaxed">
                Combined statutory transfer fee under Law No. 7 of 2006 (standard statutory allocation between buyer and seller).
              </p>
            </div>

            <div className="p-7 rounded-2xl bg-[#ffffff] border border-[#e5e5ea] space-y-2">
              <span className="text-[10px] font-mono uppercase tracking-widest text-[#8e8e93] block">
                02 &bull; TAXATION FRAMEWORK
              </span>
              <div className="text-xl sm:text-2xl font-light text-[#111111]">No UAE Personal Income Tax</div>
              <p className="text-xs text-[#6b6b6b] font-light leading-relaxed">
                UAE individuals are not subject to personal income tax. Corporate Tax may apply to natural persons conducting a Business or Business Activity where the applicable conditions and thresholds are met.
              </p>
            </div>

            <div className="p-7 rounded-2xl bg-[#ffffff] border border-[#e5e5ea] space-y-2">
              <span className="text-[10px] font-mono uppercase tracking-widest text-[#8e8e93] block">
                03 &bull; MONETARY ANCHOR
              </span>
              <div className="text-2xl sm:text-3xl font-light text-[#111111]">1 USD = 3.6725 AED</div>
              <p className="text-xs text-[#6b6b6b] font-light leading-relaxed">
                Central Bank of the UAE statutory currency peg eliminating dollar exchange volatility.
              </p>
            </div>

            <div className="p-7 rounded-2xl bg-[#ffffff] border border-[#e5e5ea] space-y-2">
              <span className="text-[10px] font-mono uppercase tracking-widest text-[#8e8e93] block">
                04 &bull; PROPERTY RESIDENCY
              </span>
              <div className="text-2xl sm:text-3xl font-light text-[#111111]">&ge; AED 2,000,000</div>
              <p className="text-xs text-[#6b6b6b] font-light leading-relaxed">
                Property investment threshold for residency route consideration. Golden Residency eligibility is subject to the applicable current authority rules.
              </p>
            </div>
          </div>

        </div>
      </Section>

      {/* ========================================================================= */}
      {/* 03 — FEATURED PROPERTY: Grand Editorial Highlight (NO CARD GRID)          */}
      {/* ========================================================================= */}
      <Section spacing="room-200" surface="white" containerSize="wide" borderBottom={false}>
        <div className="space-y-10">
          
          {/* Header row */}
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div className="space-y-2">
              <Eyebrow>03 &bull; FEATURED PROPERTY DOSSIER</Eyebrow>
              <h2 className="text-3xl sm:text-5xl lg:text-6xl font-light tracking-[-0.03em] text-[#111111]">
                {featureProperty.title}
              </h2>
            </div>
            <div className="text-left sm:text-right font-mono">
              <span className="text-[11px] text-[#8e8e93] uppercase block">Certified Asking Price</span>
              <span className="text-2xl sm:text-3xl font-light text-[#111111]">
                {formatCurrency(featureProperty.asking_price || 0)}
              </span>
            </div>
          </div>

          {/* Large Cinematic Image (Escaping Card Container) */}
          <div className="relative aspect-[16/9] sm:aspect-[21/9] w-full overflow-hidden rounded-2xl bg-[#f5f5f3]">
            <Image
              src={featureProperty.images[0] || 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=2000&q=85'}
              alt={featureProperty.title}
              fill
              sizes="(max-width: 1440px) 100vw, 1440px"
              className="object-cover transition-transform duration-700 ease-out hover:scale-[1.01]"
            />
            <div className="absolute top-6 left-6">
              <SourceBadge sourceClass="OFFICIAL CORPORATE" sourceName={featureProperty.developer_name} />
            </div>
          </div>

          {/* Metadata Row & Editorial Summary: Balanced Horizontal Architecture */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center pt-6 border-t border-[#e5e5ea]/80">
            <div className="lg:col-span-8 space-y-3">
              <div className="flex flex-wrap items-center gap-4 sm:gap-6 text-xs font-mono uppercase text-[#6b6b6b]">
                <span className="text-[#111111] font-medium">{featureProperty.area_name}</span>
                <span>&bull;</span>
                <span>{featureProperty.property_type}</span>
                <span>&bull;</span>
                <span>{featureProperty.bedrooms} Bedrooms</span>
                <span>&bull;</span>
                <span>{featureProperty.internal_area_sqft.toLocaleString()} SQ. FT</span>
                <span>&bull;</span>
                <span className="text-[#9f8144]">{featureProperty.completion_status}</span>
              </div>
              <p className="text-sm sm:text-base text-[#484848] font-light leading-relaxed max-w-3xl">
                {featureProperty.unit_descriptor || featureProperty.editorial_display_name}
              </p>
            </div>

            <div className="lg:col-span-4 flex justify-start lg:justify-end">
              <PrimaryLink href={`/properties/${featureProperty.id}`}>
                View Complete Dossier
              </PrimaryLink>
            </div>
          </div>

        </div>
      </Section>

      {/* ========================================================================= */}
      {/* 04 — CAPITAL / UNDERWRITING: Financial Research Publication Feel          */}
      {/* ========================================================================= */}
      <Section spacing="room-200" surface="subtle" containerSize="editorial" borderBottom={false}>
        <div className="space-y-14">
          
          <div className="space-y-3">
            <Eyebrow>04 &bull; CAPITAL / UNDERWRITING</Eyebrow>
            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-light tracking-[-0.03em] leading-tight text-[#111111]">
              UNDERWRITE<br />THE ACQUISITION.
            </h2>
            <p className="text-base sm:text-lg text-[#6b6b6b] font-light max-w-2xl leading-relaxed">
              Deterministic financial modeling based on published Dubai Land Department transfer schedules, trustee fees, and statutory registration codes.
            </p>
          </div>

          {/* Interactive Instrument */}
          <div className="p-8 sm:p-12 rounded-2xl bg-[#ffffff] border border-[#e5e5ea] space-y-10">
            
            {/* Value Selector */}
            <div className="space-y-4">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                <span className="text-xs font-mono uppercase tracking-wider text-[#6b6b6b]">
                  Property Acquisition Value (AED)
                </span>
                <SourceBadge sourceClass="USER PROVIDED" />
              </div>
              
              <div className="flex items-center gap-4">
                <input
                  type="range"
                  min="2000000"
                  max="50000000"
                  step="500000"
                  value={propertyPriceAED}
                  onChange={(e) => setPropertyPriceAED(Number(e.target.value))}
                  className="w-full accent-[#111111] cursor-pointer"
                />
              </div>

              <div className="text-3xl sm:text-4xl font-light text-[#111111] font-mono tabular-nums">
                {formatCurrency(propertyPriceAED)}
              </div>
            </div>

            {/* Deterministic Breakdown Rows */}
            <div className="space-y-3 pt-6 border-t border-[#e5e5ea]/80">
              <DataRow
                label="DLD Sale Registration (4.00%)"
                value={formatCurrency(dldFee)}
                source={<SourceBadge sourceClass="OFFICIAL GOVERNMENT" sourceName="Law No. 7 (2006)" />}
              />
              <DataRow
                label="DLD Admin & Map Fee"
                value={formatCurrency(adminFee)}
                source={<SourceBadge sourceClass="OFFICIAL GOVERNMENT" sourceName="DLD Tariff" />}
              />
              <DataRow
                label="Registration Trustee Fee"
                value={formatCurrency(trusteeFee)}
                source={<SourceBadge sourceClass="OFFICIAL REGULATORY" sourceName="Authorized Trustee" />}
              />
              <DataRow
                label="Statutory Conveyance & Legal Estimate"
                value={formatCurrency(conveyanceEstimate)}
                source={<SourceBadge sourceClass="CALCULATED" sourceName="Standard Protocol" />}
              />
            </div>

            {/* Total Acquisition Output */}
            <div className="pt-6 border-t-2 border-[#111111] flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div className="space-y-1">
                <span className="text-xs font-mono uppercase tracking-widest text-[#111111] font-semibold">
                  TOTAL ACQUISITION OUTLAY
                </span>
                <p className="text-xs text-[#6b6b6b] font-light">
                  Inclusive of all statutory transfer fees and registration charges.
                </p>
              </div>
              <div className="text-3xl sm:text-4xl font-light text-[#111111] font-mono tabular-nums">
                {formatCurrency(totalAcquisitionCost)}
              </div>
            </div>

            <div className="flex items-center justify-between pt-2">
              <Link
                href="/investment"
                className="text-xs font-mono uppercase tracking-wider text-[#9f8144] hover:underline flex items-center gap-1.5"
              >
                <span>Open Complete Institutional Underwriting Engine</span>
                <ArrowRight className="h-3 w-3" />
              </Link>
            </div>

          </div>

        </div>
      </Section>

      {/* ========================================================================= */}
      {/* 05 — RESIDENCY: Property-Based Residency in the UAE (Vertical Sequence)   */}
      {/* ========================================================================= */}
      <Section spacing="room-200" surface="white" containerSize="editorial" borderBottom={false}>
        <div className="space-y-14">
          
          <div className="space-y-3">
            <Eyebrow>05 &bull; RESIDENCY</Eyebrow>
            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-light tracking-[-0.03em] text-[#111111]">
              PROPERTY-BASED<br />RESIDENCY IN THE UAE.
            </h2>
            <p className="text-base sm:text-lg text-[#6b6b6b] font-light max-w-2xl leading-relaxed">
              Statutory progression under Cabinet Resolution No. 65 of 2022 for the 10-Year Renewable Golden Visa.
            </p>
          </div>

          {/* Sequential 6-Stage Timeline */}
          <div className="divide-y divide-[#e5e5ea]/80 border-t border-b border-[#e5e5ea]/80">
            <TimelineStep
              number="01"
              title="Eligibility & Freehold Zoning"
              description="Real estate asset must be situated within designated foreign freehold zones established pursuant to Regulation No. 3 of 2006."
              source="Dubai Land Department (DLD)"
            />
            <TimelineStep
              number="02"
              title="Ownership & Qualifying Threshold"
              description="Total property gross valuation must equal or exceed AED 2,000,000. Off-plan properties qualify if verified on the DLD Oqood registry with approved payment milestones."
              source="Cabinet Resolution No. 65 of 2022"
            />
            <TimelineStep
              number="03"
              title="Statutory Documentation"
              description="Submission of official Title Deed / Oqood registration, valid passport, UAE health insurance policy, and certified title clearance certificate."
              source="GDRFA Dubai & DLD Cube"
            />
            <TimelineStep
              number="04"
              title="Application Lodgement"
              description="Direct electronic lodgement via the DLD Cube or GDRFA investor services portal without commercial intermediary friction."
              source="DLD Cube Investor Portal"
            />
            <TimelineStep
              number="05"
              title="Authority Review & Medical Clearance"
              description="Statutory background clearance, biometric capture, and sovereign medical fitness examination."
              source="Dubai Health Authority (DHA) / GDRFA"
            />
            <TimelineStep
              number="06"
              title="Golden Visa & Emirates ID Issuance"
              description="Issuance of the 10-Year renewable self-sponsored residency visa and digital/physical Emirates ID card."
              source="Federal Authority for Identity and Citizenship (ICP)"
            />
          </div>

          <div className="pt-2 flex items-center justify-between">
            <PrimaryLink href="/residency">
              Explore Golden Visa Framework
            </PrimaryLink>
          </div>

        </div>
      </Section>

      {/* ========================================================================= */}
      {/* 06 — DUBAI ATLAS: Geographic Visual & Luxury District Directory            */}
      {/* ========================================================================= */}
      <Section spacing="room-200" surface="subtle" containerSize="wide" borderBottom={false}>
        <div className="space-y-14">
          
          <div className="space-y-3">
            <Eyebrow>06 &bull; DUBAI ATLAS</Eyebrow>
            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-light tracking-[-0.03em] text-[#111111]">
              GEOGRAPHIC ATLAS.
            </h2>
            <p className="text-base sm:text-lg text-[#6b6b6b] font-light max-w-2xl leading-relaxed">
              Cartographic and zoning intelligence across the principal designated freehold enclaves of the Emirate.
            </p>
          </div>

          {/* Asymmetric 5/7 Split: Interactive District Visual + Luxury Directory */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 sm:gap-14 items-start">
            
            {/* Left 5 cols: Active District Visual Dossier */}
            <div className="lg:col-span-5 space-y-6 lg:sticky lg:top-28">
              <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl bg-[#f5f5f3] border border-[#e5e5ea]">
                <Image
                  src={activeDistrict.image || 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=1200&q=80'}
                  alt={activeDistrict.name}
                  fill
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  className="object-cover transition-all duration-700"
                />
                <div className="absolute top-4 left-4">
                  <SourceBadge sourceClass="OFFICIAL GOVERNMENT" sourceName="DLD Zone" />
                </div>
              </div>

              <div className="space-y-3">
                <span className="text-xs font-mono uppercase tracking-widest text-[#9f8144]">
                  ACTIVE DISTRICT PREVIEW
                </span>
                <h3 className="text-2xl font-light text-[#111111]">
                  {activeDistrict.name}
                </h3>
                <p className="text-sm text-[#484848] font-light leading-relaxed">
                  {activeDistrict.description}
                </p>
                <div className="pt-2">
                  <SecondaryLink href={`/districts/${activeDistrict.slug}`}>
                    Explore {activeDistrict.name} Dossier
                  </SecondaryLink>
                </div>
              </div>
            </div>

            {/* Right 7 cols: District Directory Rows */}
            <div className="lg:col-span-7 divide-y divide-[#e5e5ea] border-t border-b border-[#e5e5ea]">
              {atlasDistricts.map((district, idx) => (
                <div
                  key={district.slug}
                  onMouseEnter={() => setActiveDistrictIndex(idx)}
                  className={`group flex items-center justify-between py-6 px-4 transition-colors cursor-pointer ${
                    activeDistrictIndex === idx ? 'bg-[#ffffff]' : 'hover:bg-[#ffffff]/50'
                  }`}
                >
                  <div className="space-y-1">
                    <div className="flex items-center gap-3">
                      <span className="text-xs font-mono text-[#8e8e93] w-8">
                        0{idx + 1}
                      </span>
                      <span className="text-xl sm:text-2xl font-light text-[#111111] group-hover:text-[#9f8144] transition-colors">
                        {district.name}
                      </span>
                    </div>
                    <span className="text-xs font-mono text-[#6b6b6b] pl-11 block">
                      {district.sector} &bull; Freehold Zone
                    </span>
                  </div>

                  <div className="flex items-center gap-4">
                    <Link
                      href={`/districts/${district.slug}`}
                      className="p-2 rounded-full border border-[#e5e5ea] group-hover:border-[#111111] transition-colors"
                    >
                      <ArrowUpRight className="h-4 w-4 text-[#8e8e93] group-hover:text-[#111111]" />
                    </Link>
                  </div>
                </div>
              ))}
            </div>

          </div>

        </div>
      </Section>

      {/* ========================================================================= */}
      {/* 07 — DEVELOPERS: Developer Registry (Clean Vertical Directory)             */}
      {/* ========================================================================= */}
      <Section spacing="room-200" surface="white" containerSize="editorial" borderBottom={false}>
        <div className="space-y-14">
          
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div className="space-y-3">
              <Eyebrow>07 &bull; DEVELOPER REGISTRY</Eyebrow>
              <h2 className="text-3xl sm:text-5xl lg:text-6xl font-light tracking-[-0.03em] text-[#111111]">
                MASTER DEVELOPERS.
              </h2>
            </div>
            <Link
              href="/developers"
              className="text-xs font-mono uppercase tracking-wider text-[#6b6b6b] hover:text-[#111111] flex items-center gap-1.5"
            >
              <span>View Full Registry</span>
              <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          </div>

          {/* Directory Rows */}
          <div className="divide-y divide-[#e5e5ea] border-t border-b border-[#e5e5ea]">
            {keyDevelopers.map((dev) => (
              <DirectoryRow
                key={dev.id}
                href={`/developers/${dev.slug}`}
                leftLabel={`Est. ${dev.founded_year || 'Verified'}`}
                title={dev.name}
                subtitle={`${dev.headquarters || 'Dubai, UAE'} &bull; ${(dev.notable_communities || []).slice(0, 2).join(', ') || 'Major Master Developments'}`}
                badge={<SourceBadge sourceClass="OFFICIAL CORPORATE" sourceName="Licensed Developer" />}
                rightValue="DLD Verified"
              />
            ))}
          </div>

        </div>
      </Section>

      {/* ========================================================================= */}
      {/* 08 — LIFESTYLE: Magazine Layout (Full Bleed, Asymmetric Imagery, Disciplines)*/}
      {/* ========================================================================= */}
      <Section spacing="room-200" surface="subtle" containerSize="wide" borderBottom={false}>
        <div className="space-y-16">
          
          <div className="space-y-3 max-w-2xl">
            <Eyebrow>08 &bull; CURATED LIFESTYLE</Eyebrow>
            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-light tracking-[-0.03em] text-[#111111]">
              AN EXPANDED HORIZON.
            </h2>
            <p className="text-base sm:text-lg text-[#6b6b6b] font-light leading-relaxed">
              Curated intelligence covering private aviation, maritime berths, Michelin-starred culinary venues, and bespoke desert sanctuaries.
            </p>
          </div>

          {/* Asymmetric Magazine Image Pair */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 sm:gap-12 items-center">
            <div className="md:col-span-7">
              <div className="relative aspect-[16/10] w-full overflow-hidden rounded-2xl bg-[#f5f5f3]">
                <Image
                  src="https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=1600&q=85"
                  alt="Dubai Maritime & Yachting"
                  fill
                  sizes="(max-width: 1024px) 100vw, 60vw"
                  className="object-cover"
                />
                <div className="absolute bottom-4 left-4 px-3 py-1 bg-[#ffffff]/90 rounded-full text-[10px] font-mono text-[#484848]">
                  <span>Dubai Harbour &bull; Maritime Access</span>
                </div>
              </div>
            </div>

            <div className="md:col-span-5 space-y-6">
              <div className="relative aspect-square w-full overflow-hidden rounded-2xl bg-[#f5f5f3]">
                <Image
                  src="https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1200&q=85"
                  alt="Dubai High Hospitality"
                  fill
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  className="object-cover"
                />
              </div>
              <div className="space-y-2">
                <span className="text-xs font-mono uppercase text-[#9f8144] tracking-widest">
                  CURATED DIRECTORY
                </span>
                <p className="text-sm text-[#484848] font-light leading-relaxed">
                  Verified editorial selections across Michelin gastronomy, Al Maktoum private aviation, and private equestrian clubs.
                </p>
              </div>
            </div>
          </div>

          {/* Lifestyle Disciplines Strip */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6 pt-10 border-t border-[#e5e5ea]">
            {[
              { label: 'YACHTS & BERTHS', href: '/lifestyle/yachts' },
              { label: 'PRIVATE AVIATION', href: '/lifestyle/aviation' },
              { label: 'MICHELIN DINING', href: '/lifestyle/dining' },
              { label: 'DESERT RETREATS', href: '/lifestyle/safari' },
              { label: 'CULTURE & ARTS', href: '/lifestyle/clubs' },
              { label: 'CONCIERGE MANDATES', href: '/lifestyle/concierge' },
            ].map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="group py-3 space-y-1 block hover:border-b border-[#111111]"
              >
                <span className="text-[11px] font-mono uppercase text-[#111111] group-hover:text-[#9f8144] transition-colors block">
                  {item.label}
                </span>
                <span className="text-[10px] font-mono text-[#8e8e93] block">Explore Access &rarr;</span>
              </Link>
            ))}
          </div>

        </div>
      </Section>

      {/* ========================================================================= */}
      {/* 09 — PRIVATE CLIENT: Quiet Final Emotional Section                        */}
      {/* ========================================================================= */}
      <Section spacing="room-240" surface="white" containerSize="reading" borderBottom={false}>
        <div className="space-y-10 text-left sm:text-center mx-auto">
          <Eyebrow className="text-left sm:text-center">09 &bull; PRIVATE CLIENT</Eyebrow>
          
          <h2 className="text-[40px] sm:text-[60px] lg:text-[72px] font-light tracking-[-0.035em] leading-[1.02] text-[#111111]">
            A more discreet<br />way to acquire.
          </h2>

          <p className="text-lg sm:text-xl text-[#6b6b6b] font-light leading-relaxed max-w-xl mx-auto">
            Direct advisory mandates for family offices, sovereign entities, and private investors seeking off-market acquisitions and bespoke conveyancing structuring in Dubai.
          </p>

          <div className="pt-4 flex items-center justify-start sm:justify-center">
            <PrimaryLink href="/private-client" className="px-9 py-4 text-sm">
              Private Client Enquiry
            </PrimaryLink>
          </div>

          <div className="pt-6 text-[11px] font-mono text-[#8e8e93]">
            <span>Confidentiality Protected &bull; Licensed Advisory Mandate</span>
          </div>
        </div>
      </Section>

    </div>
  )
}