'use client'

import * as React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { VERIFIED_PROPERTIES } from '@/lib/data/properties'
import { DUBAI_AREAS } from '@/lib/data/areas'
import { VERIFIED_DEVELOPERS } from '@/lib/data/developers'
import { useClient } from '@/lib/context/client-context'
import { ArrowRight, ArrowUpRight } from 'lucide-react'

export default function Home() {
  const { formatCurrency } = useClient()

  // Flagship Property
  const featureProperty = VERIFIED_PROPERTIES[0]
  // Curated Register Assets
  const secondaryProperties = VERIFIED_PROPERTIES.slice(1, 6)
  // Geographic Atlas Districts
  const atlasDistricts = DUBAI_AREAS.slice(0, 6)
  // Registered Master Developers
  const keyDevelopers = VERIFIED_DEVELOPERS.slice(0, 6)

  return (
    <div className="flex flex-col min-h-screen bg-[#ffffff] text-[#111111]">
      
      {/* ========================================================================= */}
      {/* 01 — HERO: Architectural Statement & Panoramic Visual Presence           */}
      {/* ========================================================================= */}
      <section className="relative pt-20 pb-20 sm:pt-28 sm:pb-28 border-b border-black/[0.06] bg-[#ffffff] overflow-hidden">
        <div className="w-full max-w-[1280px] mx-auto px-6 sm:px-8 lg:px-12 space-y-12">
          
          {/* Main Hero Statement */}
          <div className="max-w-4xl space-y-6">
            <div className="inline-flex items-center gap-2">
              <span className="text-[11px] font-mono tracking-[0.2em] uppercase text-[#9f8144] font-medium">
                DUBAI &bull; PROPERTY &bull; CAPITAL &bull; ACCESS
              </span>
            </div>
            
            <h1 className="text-[52px] sm:text-[76px] lg:text-[100px] font-normal tracking-[-0.035em] leading-[0.96] text-[#111111]">
              PROPERTY.<br />
              CAPITAL.<br />
              ACCESS.
            </h1>

            <p className="text-lg sm:text-2xl text-[#6b6b6b] font-light max-w-2xl leading-relaxed pt-2">
              An institutional research platform and private-client advisory for Dubai real estate acquisitions, statutory conveyancing, deterministic underwriting, and sovereign Golden Visa structuring.
            </p>

            {/* Quiet Action Row */}
            <div className="pt-4 flex flex-wrap items-center gap-6">
              <Link
                href="/properties"
                className="px-6 py-3 rounded-full bg-[#111111] hover:bg-[#2a2a2e] text-[#fafaf8] text-xs font-medium tracking-tight transition-all inline-flex items-center gap-2"
              >
                <span>Explore Curated Properties</span>
                <ArrowRight className="h-3.5 w-3.5 opacity-70" />
              </Link>
              <Link
                href="/private-client"
                className="text-xs font-medium text-[#111111] hover:text-[#9f8144] tracking-tight transition-colors inline-flex items-center gap-1.5"
              >
                <span>Private Client Mandate</span>
                <ArrowUpRight className="h-3.5 w-3.5 opacity-60" />
              </Link>
            </div>
          </div>

          {/* Grand Architectural Photographic Spread */}
          <div className="pt-6">
            <div className="relative aspect-[16/9] sm:aspect-[21/10] w-full overflow-hidden rounded-2xl bg-[#f5f5f3] border border-black/[0.06]">
              <Image
                src="https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=2000&q=85"
                alt="Dubai Architectural Skyline"
                fill
                priority
                sizes="(max-width: 1440px) 100vw, 1440px"
                className="object-cover transition-transform duration-1000 ease-out hover:scale-[1.015]"
              />
              <div className="absolute bottom-4 left-4 px-3 py-1 rounded-full bg-[#ffffff]/90 backdrop-blur-md border border-black/[0.06] text-[10px] font-mono text-[#484848]">
                <span>Downtown Core &bull; Photographic Reference</span>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* ========================================================================= */}
      {/* 02 — MARKET POSITION: Narrow Editorial Thesis & Minimal Data Band         */}
      {/* ========================================================================= */}
      <section className="py-28 sm:py-40 border-b border-black/[0.06] bg-[#fafaf8]">
        <div className="w-full max-w-[1040px] mx-auto px-6 sm:px-8 space-y-16">
          
          <div className="space-y-6">
            <span className="text-[11px] font-mono font-medium uppercase tracking-[0.2em] text-[#9f8144] block">
              02 &bull; MARKET POSITION
            </span>
            <h2 className="text-[36px] sm:text-[54px] lg:text-[62px] font-light tracking-[-0.03em] leading-[1.06] text-[#111111]">
              Dubai, through the lens of property, capital and access.
            </h2>
            <p className="text-base sm:text-xl text-[#6b6b6b] font-light max-w-2xl leading-relaxed">
              We replace speculative marketing with published statutory codes, certified land registries, and direct institutional underwriting. Every property dossier reflects authentic developer records and official conveyance schedules.
            </p>
          </div>

          {/* Minimal 4-Pillar Factual Data Band (No boxes) */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 pt-6 border-t border-black/[0.08]">
            <div className="space-y-2">
              <span className="text-[10px] font-mono uppercase tracking-wider text-[#8e8e93] block">FOREIGN OWNERSHIP</span>
              <div className="text-xl sm:text-2xl font-normal text-[#111111] tracking-tight">Designated Areas</div>
              <p className="text-xs text-[#6b6b6b] font-light">Freehold zones under Reg. No. 3/2006</p>
            </div>

            <div className="space-y-2">
              <span className="text-[10px] font-mono uppercase tracking-wider text-[#8e8e93] block">DLD SALE REGISTRATION</span>
              <div className="text-xl sm:text-2xl font-normal text-[#111111] tracking-tight">2% + 2% Share</div>
              <p className="text-xs text-[#6b6b6b] font-light">4% combined statutory transfer fee</p>
            </div>

            <div className="space-y-2">
              <span className="text-[10px] font-mono uppercase tracking-wider text-[#8e8e93] block">ESCROW AUDIT</span>
              <div className="text-xl sm:text-2xl font-normal text-[#111111] tracking-tight">Law No. 8 of 2007</div>
              <p className="text-xs text-[#6b6b6b] font-light">100% project-linked trust accounts</p>
            </div>

            <div className="space-y-2">
              <span className="text-[10px] font-mono uppercase tracking-wider text-[#8e8e93] block">RESIDENCY THRESHOLD</span>
              <div className="text-xl sm:text-2xl font-normal text-[#111111] tracking-tight">≥ AED 2,000,000</div>
              <p className="text-xs text-[#6b6b6b] font-light">10-Year Golden Visa eligibility</p>
            </div>
          </div>

        </div>
      </section>

      {/* ========================================================================= */}
      {/* 03 — FLAGSHIP FEATURE PROPERTY: Full-Scale Gallery Spread (NO 3-card grid)*/}
      {/* ========================================================================= */}
      <section className="py-28 sm:py-40 border-b border-black/[0.06] bg-[#ffffff]">
        <div className="w-full max-w-[1280px] mx-auto px-6 sm:px-8 lg:px-12 space-y-10">
          
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div className="space-y-2">
              <span className="text-[11px] font-mono font-medium uppercase tracking-[0.2em] text-[#9f8144] block">
                03 &bull; FLAGSHIP PROPERTY DOSSIER
              </span>
              <h2 className="text-3xl sm:text-5xl font-light tracking-tight text-[#111111]">
                {featureProperty.title}
              </h2>
            </div>
            <div className="text-left sm:text-right">
              <span className="text-[10px] font-mono uppercase text-[#8e8e93] block">ASKING PRICE DIRECT</span>
              <span className="text-2xl sm:text-3xl font-normal text-[#111111] tabular-nums font-mono">
                {formatCurrency(featureProperty.asking_price)}
              </span>
            </div>
          </div>

          {/* Expansive Architectural Gallery Visual */}
          <div className="relative aspect-[16/9] sm:aspect-[21/9] w-full overflow-hidden rounded-2xl bg-[#f5f5f3] border border-black/[0.06]">
            <Image
              src={featureProperty.images[0]}
              alt={featureProperty.title}
              fill
              priority
              sizes="(max-width: 1440px) 100vw, 1280px"
              className="object-cover transition-transform duration-700 hover:scale-[1.01]"
            />
            <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-[#ffffff]/90 backdrop-blur-md text-[10px] font-mono text-[#111111] border border-black/[0.06]">
              <span>Dorchester Collection &bull; Ready Title</span>
            </div>
          </div>

          {/* Minimal Horizontal Metadata Bar & Action */}
          <div className="pt-2 flex flex-col md:flex-row md:items-center justify-between gap-6 border-b border-black/[0.06] pb-8 text-xs font-mono text-[#6b6b6b]">
            <div className="flex flex-wrap items-center gap-6 text-[#111111]">
              <span>{featureProperty.area_name}</span>
              <span>&bull;</span>
              <span>{featureProperty.bedrooms} Bedrooms</span>
              <span>&bull;</span>
              <span>{featureProperty.internal_area_sqft.toLocaleString()} SQFT</span>
              <span>&bull;</span>
              <span>Developer: {featureProperty.developer_name}</span>
            </div>
            <Link
              href={`/properties/${featureProperty.id}`}
              className="inline-flex items-center gap-1.5 text-xs font-medium text-[#111111] hover:text-[#9f8144] transition-colors shrink-0"
            >
              <span>View Complete Property Dossier</span>
              <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          </div>

        </div>
      </section>

      {/* ========================================================================= */}
      {/* 04 — SECONDARY PROPERTY REGISTER: Clean Financial Directory Table         */}
      {/* ========================================================================= */}
      <section className="py-24 sm:py-32 border-b border-black/[0.06] bg-[#fafaf8]">
        <div className="w-full max-w-[1120px] mx-auto px-6 sm:px-8 space-y-10">
          
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div className="space-y-1">
              <span className="text-[11px] font-mono font-medium uppercase tracking-[0.2em] text-[#9f8144] block">
                04 &bull; PROPERTY REGISTER
              </span>
              <h2 className="text-2xl sm:text-4xl font-light tracking-tight text-[#111111]">
                Curated Inventory
              </h2>
            </div>
            <Link
              href="/properties"
              className="text-xs font-medium text-[#111111] hover:text-[#9f8144] inline-flex items-center gap-1 transition-colors"
            >
              <span>Explore All Verified Assets ({VERIFIED_PROPERTIES.length})</span>
              <ArrowUpRight className="h-3.5 w-3.5" />
            </Link>
          </div>

          {/* Minimal Directory List Rows */}
          <div className="divide-y divide-black/[0.06]">
            {secondaryProperties.map((prop) => (
              <div
                key={prop.id}
                className="py-6 flex flex-col md:flex-row md:items-center justify-between gap-4 group hover:bg-[#ffffff] px-4 rounded-xl transition-all"
              >
                <div className="flex items-center gap-4">
                  <div className="relative w-14 h-14 rounded-lg overflow-hidden bg-[#f5f5f3] shrink-0 border border-black/[0.06]">
                    <Image
                      src={prop.images[0]}
                      alt={prop.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <Link
                      href={`/properties/${prop.id}`}
                      className="text-base font-normal text-[#111111] group-hover:text-[#9f8144] transition-colors block"
                    >
                      {prop.title}
                    </Link>
                    <span className="text-xs text-[#8e8e93] font-mono">
                      {prop.area_name} &bull; {prop.bedrooms} Bed &bull; {prop.internal_area_sqft.toLocaleString()} SQFT
                    </span>
                  </div>
                </div>

                <div className="flex items-center justify-between md:justify-end gap-6 text-right">
                  <span className="text-base font-normal text-[#111111] font-mono tabular-nums">
                    {formatCurrency(prop.asking_price)}
                  </span>
                  <Link
                    href={`/properties/${prop.id}`}
                    className="text-xs font-medium text-[#111111] hover:text-[#9f8144] inline-flex items-center gap-1"
                  >
                    <span>Dossier</span>
                    <ArrowRight className="h-3 w-3 opacity-60" />
                  </Link>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ========================================================================= */}
      {/* 05 — CAPITAL UNDERWRITING: Dark Architectural Chapter                      */}
      {/* ========================================================================= */}
      <section className="py-32 sm:py-44 border-b border-white/[0.06] bg-[#0c0c0e] text-[#fafaf8]">
        <div className="w-full max-w-[1120px] mx-auto px-6 sm:px-8 space-y-16">
          
          <div className="max-w-3xl space-y-6">
            <span className="text-[11px] font-mono tracking-[0.2em] uppercase text-[#9f8144] font-medium block">
              05 &bull; CAPITAL UNDERWRITING
            </span>
            <h2 className="text-[36px] sm:text-[54px] lg:text-[64px] font-light tracking-[-0.03em] leading-[1.04] text-[#fafaf8]">
              Underwrite the acquisition.
            </h2>
            <p className="text-base sm:text-xl text-[#a1a1a6] font-light leading-relaxed">
              Real estate conveyance in Dubai operates under a deterministic statutory fee schedule governed by the Dubai Land Department and the Central Bank of the UAE.
            </p>
          </div>

          {/* Minimal 3-Column Capital Breakdown */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 pt-6 border-t border-white/[0.1]">
            <div className="space-y-2">
              <span className="text-[10px] font-mono text-[#9f8144] uppercase block">01 &bull; DLD SALE REGISTRATION</span>
              <div className="text-2xl font-light text-[#fafaf8]">4% Combined Fee</div>
              <p className="text-xs text-[#8e8e93] font-light leading-relaxed">
                Standard allocation: 2% Purchaser / 2% Vendor under Dubai Law No. 7 of 2006.
              </p>
            </div>

            <div className="space-y-2">
              <span className="text-[10px] font-mono text-[#9f8144] uppercase block">02 &bull; MORTGAGE REGISTRATION</span>
              <div className="text-2xl font-light text-[#fafaf8]">0.25% of Mortgage</div>
              <p className="text-xs text-[#8e8e93] font-light leading-relaxed">
                Statutory tariff on financed principal debt under Central Bank and DLD schedules.
              </p>
            </div>

            <div className="space-y-2">
              <span className="text-[10px] font-mono text-[#9f8144] uppercase block">03 &bull; TAX EXCLUSION</span>
              <div className="text-2xl font-light text-[#fafaf8]">No Personal Income Tax</div>
              <p className="text-xs text-[#8e8e93] font-light leading-relaxed">
                Real estate investment income for natural persons is excluded from Corporate Tax (Cabinet Dec. 49/2023).
              </p>
            </div>
          </div>

          <div className="pt-4">
            <Link
              href="/investment"
              className="px-6 py-3 rounded-full bg-[#fafaf8] hover:bg-[#ffffff] text-[#0c0c0e] text-xs font-medium tracking-tight transition-all inline-flex items-center gap-2"
            >
              <span>Open Underwriting Desk</span>
              <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          </div>

        </div>
      </section>

      {/* ========================================================================= */}
      {/* 06 — SOVEREIGN RESIDENCY: Vertical Editorial Roadmap                      */}
      {/* ========================================================================= */}
      <section className="py-28 sm:py-40 border-b border-black/[0.06] bg-[#ffffff]">
        <div className="w-full max-w-[1040px] mx-auto px-6 sm:px-8 space-y-16">
          
          <div className="space-y-4">
            <span className="text-[11px] font-mono font-medium uppercase tracking-[0.2em] text-[#9f8144] block">
              06 &bull; SOVEREIGN RESIDENCY
            </span>
            <h2 className="text-[36px] sm:text-[52px] font-light tracking-[-0.03em] text-[#111111]">
              A property-based pathway to UAE residency.
            </h2>
            <p className="text-base sm:text-lg text-[#6b6b6b] font-light max-w-2xl leading-relaxed">
              Statutory qualification criteria under Cabinet Resolution No. 65 of 2022. Foreign property investors holding freehold title deeds valued at AED 2,000,000 or greater qualify for a renewable 10-year Golden Visa.
            </p>
          </div>

          {/* Clean 6-Stage Timeline (Minimal Grid) */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 pt-4">
            {[
              { step: '01', title: 'Eligibility', desc: 'Title deed audit' },
              { step: '02', title: 'Value Audit', desc: '≥ AED 2,000,000' },
              { step: '03', title: 'Dossier', desc: 'Passport & health policy' },
              { step: '04', title: 'Filing', desc: 'DLD Cube submission' },
              { step: '05', title: 'Biometrics', desc: 'DHA medical exam' },
              { step: '06', title: 'Issuance', desc: '10-Year Golden Visa' },
            ].map((st) => (
              <div key={st.step} className="space-y-1.5 border-t border-black/[0.08] pt-4">
                <span className="text-[10px] font-mono font-bold text-[#9f8144] block">{st.step}</span>
                <div className="text-sm font-medium text-[#111111]">{st.title}</div>
                <div className="text-xs text-[#8e8e93] font-light">{st.desc}</div>
              </div>
            ))}
          </div>

          <div className="pt-2">
            <Link
              href="/residency"
              className="text-xs font-medium text-[#111111] hover:text-[#9f8144] inline-flex items-center gap-1.5 transition-colors"
            >
              <span>Explore Sovereign Residency Dossier</span>
              <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          </div>

        </div>
      </section>

      {/* ========================================================================= */}
      {/* 07 — DUBAI GEOGRAPHIC ATLAS: Architectural Directory                      */}
      {/* ========================================================================= */}
      <section className="py-28 sm:py-40 border-b border-black/[0.06] bg-[#fafaf8]">
        <div className="w-full max-w-[1280px] mx-auto px-6 sm:px-8 lg:px-12 space-y-12">
          
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div className="space-y-1">
              <span className="text-[11px] font-mono font-medium uppercase tracking-[0.2em] text-[#9f8144] block">
                07 &bull; DUBAI ATLAS
              </span>
              <h2 className="text-3xl sm:text-5xl font-light tracking-tight text-[#111111]">
                Prime Freehold Districts
              </h2>
            </div>
            <Link
              href="/districts"
              className="text-xs font-medium text-[#111111] hover:text-[#9f8144] inline-flex items-center gap-1 transition-colors"
            >
              <span>Complete Geographic Atlas ({DUBAI_AREAS.length} Districts)</span>
              <ArrowUpRight className="h-3.5 w-3.5" />
            </Link>
          </div>

          {/* Asymmetric 2-Column Gallery / Directory Split */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left 55%: Featured District Image */}
            <div className="lg:col-span-7">
              <div className="relative aspect-[16/10] w-full overflow-hidden rounded-2xl bg-[#f5f5f3] border border-black/[0.06]">
                <Image
                  src={atlasDistricts[0].image || 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=1200&q=80'}
                  alt={atlasDistricts[0].name}
                  fill
                  className="object-cover"
                />
                <div className="absolute bottom-4 left-4 px-3 py-1 rounded-full bg-[#ffffff]/90 backdrop-blur-md text-[10px] font-mono text-[#111111] border border-black/[0.06]">
                  <span>{atlasDistricts[0].name} &bull; {atlasDistricts[0].sector}</span>
                </div>
              </div>
            </div>

            {/* Right 45%: Clean District Directory List */}
            <div className="lg:col-span-5 divide-y divide-black/[0.06]">
              {atlasDistricts.map((dist) => (
                <div key={dist.id} className="py-4 flex items-center justify-between group">
                  <div>
                    <Link
                      href={`/areas/${dist.slug}`}
                      className="text-lg font-normal text-[#111111] group-hover:text-[#9f8144] transition-colors"
                    >
                      {dist.name}
                    </Link>
                    <span className="text-xs text-[#8e8e93] font-mono block">
                      Dev: {dist.master_developer} &bull; DXB: {dist.transit.airport_mins_dxb}m
                    </span>
                  </div>
                  <Link
                    href={`/areas/${dist.slug}`}
                    className="text-xs font-mono text-[#8e8e93] group-hover:text-[#111111] transition-colors"
                  >
                    Explore &rarr;
                  </Link>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* ========================================================================= */}
      {/* 08 — DEVELOPERS: Minimal Registry Directory Table                         */}
      {/* ========================================================================= */}
      <section className="py-28 sm:py-40 border-b border-black/[0.06] bg-[#ffffff]">
        <div className="w-full max-w-[1120px] mx-auto px-6 sm:px-8 space-y-10">
          
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div className="space-y-1">
              <span className="text-[11px] font-mono font-medium uppercase tracking-[0.2em] text-[#9f8144] block">
                08 &bull; DEVELOPER REGISTRY
              </span>
              <h2 className="text-3xl sm:text-5xl font-light tracking-tight text-[#111111]">
                DLD Master Developers
              </h2>
            </div>
            <Link
              href="/developers"
              className="text-xs font-medium text-[#111111] hover:text-[#9f8144] inline-flex items-center gap-1 transition-colors"
            >
              <span>View Full Registry</span>
              <ArrowUpRight className="h-3.5 w-3.5" />
            </Link>
          </div>

          <div className="divide-y divide-black/[0.06]">
            {keyDevelopers.map((dev) => (
              <div
                key={dev.id}
                className="py-5 flex flex-col md:flex-row md:items-center justify-between gap-3 group"
              >
                <div>
                  <div className="text-base font-normal text-[#111111] group-hover:text-[#9f8144] transition-colors">
                    {dev.name}
                  </div>
                  <span className="text-xs text-[#8e8e93] font-mono">
                    DLD Reg. No. {dev.dld_developer_number} &bull; Founded {dev.founded_year} &bull; {dev.headquarters}
                  </span>
                </div>
                <div className="text-xs font-mono text-[#6b6b6b]">
                  {dev.notable_communities.slice(0, 2).join(', ')}
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ========================================================================= */}
      {/* 09 — CURATED LIFESTYLE: Asymmetric Editorial Spread                       */}
      {/* ========================================================================= */}
      <section className="py-28 sm:py-40 border-b border-black/[0.06] bg-[#fafaf8]">
        <div className="w-full max-w-[1280px] mx-auto px-6 sm:px-8 lg:px-12 space-y-12">
          
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div className="space-y-1">
              <span className="text-[11px] font-mono font-medium uppercase tracking-[0.2em] text-[#9f8144] block">
                09 &bull; CURATED ACCESS
              </span>
              <h2 className="text-3xl sm:text-5xl font-light tracking-tight text-[#111111]">
                Lifestyle Infrastructure &amp; Protocols
              </h2>
            </div>
            <Link
              href="/lifestyle"
              className="text-xs font-medium text-[#111111] hover:text-[#9f8144] inline-flex items-center gap-1 transition-colors"
            >
              <span>Lifestyle Protocols</span>
              <ArrowUpRight className="h-3.5 w-3.5" />
            </Link>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            <div className="lg:col-span-8 space-y-3">
              <div className="relative aspect-[16/10] w-full overflow-hidden rounded-2xl bg-[#f5f5f3] border border-black/[0.06]">
                <Image
                  src="https://images.unsplash.com/photo-1550966871-3ed3cdb5ed0c?auto=format&fit=crop&w=1400&q=80"
                  alt="Michelin Culinary Dubai"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="flex justify-between text-xs font-mono text-[#8e8e93] pt-1">
                <span>Ossiano &bull; Atlantis The Palm</span>
                <span>Michelin Inspection Record</span>
              </div>
            </div>

            <div className="lg:col-span-4 space-y-6">
              <div className="relative aspect-[4/3] w-full overflow-hidden rounded-xl bg-[#f5f5f3] border border-black/[0.06]">
                <Image
                  src="https://images.unsplash.com/photo-1567899378494-47b22a2ae96a?auto=format&fit=crop&w=800&q=80"
                  alt="Superyacht Harbours"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="space-y-2">
                <h3 className="text-xl font-light text-[#111111]">Marine &amp; Aviation</h3>
                <p className="text-xs text-[#6b6b6b] leading-relaxed">
                  Direct connectivity to VIP Jet Terminals at Al Maktoum International Airport (DWC) and superyacht berths across Dubai Harbour.
                </p>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* ========================================================================= */}
      {/* 10 — PRIVATE CLIENT: Quiet Editorial Close                                */}
      {/* ========================================================================= */}
      <section className="py-36 sm:py-48 bg-[#ffffff]">
        <div className="w-full max-w-[880px] mx-auto px-6 sm:px-8 text-center space-y-8">
          
          <div className="space-y-4">
            <span className="text-[11px] font-mono font-medium uppercase tracking-[0.2em] text-[#9f8144] block">
              10 &bull; PRIVATE CLIENT DESK
            </span>
            <h2 className="text-4xl sm:text-6xl lg:text-[68px] font-light tracking-[-0.035em] text-[#111111]">
              A more discreet way to acquire.
            </h2>
            <p className="text-base sm:text-xl text-[#6b6b6b] font-light max-w-xl mx-auto leading-relaxed pt-2">
              For principals, institutional investors, and family offices seeking a structured, factual approach to navigating Dubai acquisitions and Golden Visa residency.
            </p>
          </div>

          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/private-client"
              className="px-8 py-3.5 rounded-full bg-[#111111] hover:bg-[#2a2a2e] text-[#fafaf8] text-xs font-medium tracking-tight transition-all"
            >
              Request Private Advisory Mandate &rarr;
            </Link>
          </div>

        </div>
      </section>

    </div>
  )
}