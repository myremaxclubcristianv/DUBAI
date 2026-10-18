'use client'

import * as React from 'react'
import Link from 'next/link'
import {
  ShieldCheck,
  ArrowUpRight,
  CheckCircle2,
  Info,
  ChevronRight,
  MapPin,
} from 'lucide-react'
import {
  BRABUS_ISLAND_PROJECT,
  BRABUS_FLOOR_PLANS,
} from '@/lib/data/developments'
import { ApartmentCollection } from '@/components/developments/apartment-collection'
import { UnitFloorPlan } from '@/components/developments/unit-floor-plan'
import { ContactModal } from '@/components/layout/contact-modal'

export default function BrabusIslandPage() {
  const [isContactOpen, setIsContactOpen] = React.useState(false)
  const [selectedPlanTab, setSelectedPlanTab] = React.useState<string>('type-03-corner')

  const project = BRABUS_ISLAND_PROJECT

  return (
    <div className="flex flex-col min-h-screen bg-white text-slate-900 selection:bg-[#0284c7]/10 selection:text-[#0284c7]">
      {/* ========================================================================= */}
      {/* A. HERO SECTION — REFINED BRABUS EDITORIAL TREATMENT                      */}
      {/* ========================================================================= */}
      <section className="relative w-full bg-gradient-to-b from-[#080d1a] via-[#0c1428] to-[#121c35] text-white pt-20 pb-20 sm:pt-28 sm:pb-28 border-b border-slate-800 overflow-hidden">
        {/* Subtle architectural elevation vector background */}
        <div
          className="absolute inset-0 opacity-10 pointer-events-none"
          style={{
            backgroundImage:
              'radial-gradient(circle at 1px 1px, rgba(255,255,255,0.4) 1px, transparent 0)',
            backgroundSize: '32px 32px',
          }}
        />

        <div className="relative z-10 w-full max-w-[1440px] mx-auto px-4 sm:px-10 lg:px-16 space-y-8">
          {/* Top Breadcrumb & Metadata Badges */}
          <div className="flex flex-wrap items-center gap-3">
            <Link
              href="/developments"
              className="text-xs font-mono uppercase tracking-wider text-slate-400 hover:text-white transition-colors flex items-center gap-1"
            >
              <span>Signature Developments</span>
              <ChevronRight className="h-3 w-3" />
            </Link>
            <span className="text-slate-600">&bull;</span>
            <span className="px-2.5 py-0.5 bg-[#b89648]/20 border border-[#b89648]/40 text-[#e6ca85] text-[10px] font-mono uppercase tracking-[0.2em] font-semibold rounded-xs">
              Al Raha &bull; Abu Dhabi
            </span>
            <span className="text-slate-600">&bull;</span>
            <span className="text-xs font-mono text-slate-400">
              Not Dubai &bull; Capital Emirate Coastline
            </span>
          </div>

          {/* Hero Headline & Editorial Stance */}
          <div className="max-w-4xl space-y-4">
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-semibold tracking-tight text-white font-sans">
              BRABUS ISLAND
            </h1>
            <p className="text-lg sm:text-2xl font-light text-[#e6ca85] font-serif tracking-wide">
              Tailor-Made Waterfront Architecture on the Arabian Gulf.
            </p>
            <p className="text-sm sm:text-base text-slate-300 font-light max-w-2xl leading-relaxed">
              An exclusive branded master enclave in the Al Seef District of Al Raha, Abu Dhabi. Curated with the engineering precision of Bottrop, Germany, featuring four contemporary residential towers and 96 private coastal villas.
            </p>
          </div>

          {/* Quick Metrics & Call to Actions */}
          <div className="pt-6 border-t border-white/10 flex flex-col lg:flex-row lg:items-center justify-between gap-6">
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-8 text-xs font-mono">
              <div>
                <span className="text-[10px] text-slate-400 uppercase block">Scale</span>
                <span className="text-white font-semibold text-sm">4 Towers &bull; 13 Floors</span>
              </div>
              <div>
                <span className="text-[10px] text-slate-400 uppercase block">Residences</span>
                <span className="text-white font-semibold text-sm">352 Apts &bull; 96 Villas</span>
              </div>
              <div>
                <span className="text-[10px] text-slate-400 uppercase block">Investor Inventory</span>
                <span className="text-[#e6ca85] font-semibold text-sm">21 Units Listed</span>
              </div>
              <div>
                <span className="text-[10px] text-slate-400 uppercase block">Indicative Completion</span>
                <span className="text-white font-semibold text-sm">Q1 2029 (Indicative)</span>
              </div>
            </div>

            <div className="flex items-center gap-3 shrink-0">
              <a
                href="#residences"
                className="px-6 py-3 bg-[#0284c7] hover:bg-[#0369a1] text-white rounded-xs text-xs font-mono uppercase tracking-[0.14em] font-semibold transition-colors shadow-xs"
              >
                Explore Residences
              </a>
              <button
                type="button"
                onClick={() => setIsContactOpen(true)}
                className="px-6 py-3 bg-white/10 hover:bg-white/20 text-white border border-white/20 rounded-xs text-xs font-mono uppercase tracking-[0.14em] font-semibold transition-colors cursor-pointer"
              >
                Request Details
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* B. PROJECT OVERVIEW & GOVERNANCE                                          */}
      {/* ========================================================================= */}
      <section className="py-14 sm:py-20 border-b border-slate-200 bg-white">
        <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-10 lg:px-16 space-y-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
            {/* Left Narrative */}
            <div className="lg:col-span-7 space-y-6">
              <div className="space-y-1.5">
                <span className="text-[10px] font-mono uppercase tracking-[0.18em] text-[#0284c7] font-semibold block">
                  Official Project Dossier
                </span>
                <h2 className="text-2xl sm:text-3xl font-semibold text-slate-950 font-sans tracking-tight">
                  Waterfront Living Re-engineered: The BRABUS Philosophy
                </h2>
              </div>
              <p className="text-sm text-slate-700 font-light leading-relaxed">
                BRABUS ISLAND translates the high-performance design DNA of BRABUS GmbH into architectural form within Abu Dhabi&apos;s prestigious Al Raha waterfront. Rising across four luxury buildings—each consisting of 13 residential levels plus basement—the community commands unobstructed views across the Arabian Gulf, Masdar City, and Yas Island.
              </p>
              <p className="text-sm text-slate-700 font-light leading-relaxed">
                The master project comprises a total of <strong>352 apartments</strong> (256 two-bedroom, 80 three-bedroom, and 16 four-bedroom penthouses) alongside <strong>96 private waterfront villas</strong>. The residences featured on this platform represent a discrete, verified investor price sheet of 21 units across Towers A, B and C.
              </p>

              <div className="p-4 bg-slate-50 border border-slate-200 rounded-xs flex items-start gap-3">
                <Info className="h-4 w-4 text-[#0284c7] shrink-0 mt-0.5" />
                <div className="text-xs text-slate-600 leading-relaxed space-y-1">
                  <p>
                    <strong>Indicative Completion:</strong> Stated as <strong>Q1 2029</strong> in official project material (beginning Summer 2025). Subject to developer milestones and statutory authority confirmation.
                  </p>
                  <p className="text-[11px] text-slate-500">
                    <strong>Inventory Distinction:</strong> The 21 investor entries presented on this page are a limited investor release, not the complete 352-unit project inventory and not an unconditional retail offer.
                  </p>
                </div>
              </div>
            </div>

            {/* Right Fact Card */}
            <div className="lg:col-span-5 bg-slate-50/70 border border-slate-200 rounded-xs p-6 sm:p-8 space-y-6">
              <div className="border-b border-slate-200 pb-3 flex items-center justify-between">
                <span className="font-mono text-xs uppercase tracking-wider text-slate-900 font-semibold">
                  Verified Project Specifications
                </span>
                <span className="font-mono text-[10px] text-slate-400">Abu Dhabi, UAE</span>
              </div>

              <div className="divide-y divide-slate-200/80 text-xs">
                <div className="py-2.5 flex justify-between items-center">
                  <span className="text-slate-500 font-sans">Project Name</span>
                  <span className="font-semibold text-slate-900 font-mono">BRABUS ISLAND</span>
                </div>
                <div className="py-2.5 flex justify-between items-center">
                  <span className="text-slate-500 font-sans">Location</span>
                  <span className="font-semibold text-slate-900 font-mono">Al Seef District, Al Raha</span>
                </div>
                <div className="py-2.5 flex justify-between items-center">
                  <span className="text-slate-500 font-sans">Emirate</span>
                  <span className="font-semibold text-slate-900 font-mono">Abu Dhabi, UAE</span>
                </div>
                <div className="py-2.5 flex justify-between items-center">
                  <span className="text-slate-500 font-sans">Towers Count</span>
                  <span className="font-semibold text-slate-900 font-mono">4 Towers (13 Floors + Basement)</span>
                </div>
                <div className="py-2.5 flex justify-between items-center">
                  <span className="text-slate-500 font-sans">Total Apartments</span>
                  <span className="font-semibold text-slate-900 font-mono">352 (256 2BR, 80 3BR, 16 4BR)</span>
                </div>
                <div className="py-2.5 flex justify-between items-center">
                  <span className="text-slate-500 font-sans">Waterfront Villas</span>
                  <span className="font-semibold text-slate-900 font-mono">96 Villas</span>
                </div>
                <div className="py-2.5 flex justify-between items-center">
                  <span className="text-slate-500 font-sans">Brand Partner</span>
                  <span className="font-semibold text-slate-900 font-mono">BRABUS GmbH (Bottrop, Germany)</span>
                </div>
                <div className="py-2.5 flex justify-between items-center">
                  <span className="text-slate-500 font-sans">Developer &amp; JV</span>
                  <span className="font-semibold text-slate-900 font-mono">Reportage Properties / Cosmo Dev.</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* C. VISUAL GALLERY & REFINED ARCHITECTURAL SHOWCASE                        */}
      {/* ========================================================================= */}
      <section className="py-14 sm:py-20 border-b border-slate-200 bg-slate-50/50">
        <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-10 lg:px-16 space-y-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-slate-200 pb-4">
            <div className="space-y-1">
              <span className="text-[10px] font-mono uppercase tracking-[0.18em] text-[#0284c7] font-semibold block">
                Visual Curation &bull; Architectural Expression
              </span>
              <h3 className="text-2xl font-semibold text-slate-950 font-sans">
                Architectural Identity &amp; Maritime Setting
              </h3>
            </div>
            <span className="text-xs font-mono text-slate-400">
              Rights Gate: Local Curation Mode
            </span>
          </div>

          {/* Architectural Cards Gallery */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white border border-slate-200 rounded-xs p-6 space-y-4 shadow-xs">
              <div className="h-44 bg-gradient-to-br from-slate-900 to-slate-800 rounded-xs flex flex-col justify-between p-5 text-white">
                <span className="text-[10px] font-mono text-[#e6ca85] uppercase tracking-wider">
                  Towers A &amp; B Facade
                </span>
                <div>
                  <h4 className="text-base font-semibold font-sans">
                    Geometric Monoliths
                  </h4>
                  <p className="text-xs text-slate-300 font-light">
                    13-story waterfront towers with floor-to-ceiling panoramic glass
                  </p>
                </div>
              </div>
              <p className="text-xs text-slate-600 font-light leading-relaxed">
                Engineered with aerodynamic balcony lines and deep terrace cantilevers that provide natural shading while maximizing direct vistas of the Arabian Gulf.
              </p>
            </div>

            <div className="bg-white border border-slate-200 rounded-xs p-6 space-y-4 shadow-xs">
              <div className="h-44 bg-gradient-to-br from-[#0c182b] to-[#14294b] rounded-xs flex flex-col justify-between p-5 text-white">
                <span className="text-[10px] font-mono text-sky-400 uppercase tracking-wider">
                  Al Seef Marine Frontage
                </span>
                <div>
                  <h4 className="text-base font-semibold font-sans">
                    Private Island Shoreline
                  </h4>
                  <p className="text-xs text-slate-300 font-light">
                    Direct maritime canal and open sea access at Al Raha Beach
                  </p>
                </div>
              </div>
              <p className="text-xs text-slate-600 font-light leading-relaxed">
                Positioned in Abu Dhabi&apos;s premier waterfront district, ensuring fast arterial connectivity to both downtown Abu Dhabi and the main transit corridor to Dubai.
              </p>
            </div>

            <div className="bg-white border border-slate-200 rounded-xs p-6 space-y-4 shadow-xs">
              <div className="h-44 bg-gradient-to-br from-[#1a1c23] to-[#272b38] rounded-xs flex flex-col justify-between p-5 text-white">
                <span className="text-[10px] font-mono text-[#b89648] uppercase tracking-wider">
                  Interior Curation
                </span>
                <div>
                  <h4 className="text-base font-semibold font-sans">
                    Bottrop Craftsmanship
                  </h4>
                  <p className="text-xs text-slate-300 font-light">
                    Three bespoke colorways inspired by tailor-made supercars
                  </p>
                </div>
              </div>
              <p className="text-xs text-slate-600 font-light leading-relaxed">
                Featuring Black &amp; Bold, White Bliss, and Gray Haven design palettes with premium European fixtures, built-in wardrobes, and full-tile bathrooms.
              </p>
            </div>
          </div>

          {/* Confidentiality & Reproduction Notice as mandated by prompt */}
          <div className="p-4 bg-white border border-slate-200/90 rounded-xs flex items-start gap-3 text-xs text-slate-500">
            <ShieldCheck className="h-4 w-4 text-[#0284c7] shrink-0 mt-0.5" />
            <p className="leading-relaxed text-[11px]">
              <strong>Official Rights Notice:</strong> The official brochure and engineering drawings contain confidentiality and reproduction restrictions by Reportage Properties. Raw confidential PDFs remain strictly outside public web directories. Public publication of promotional photography and renders is subject to formal written authorization.
            </p>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* D. APARTMENT COLLECTION (21 INVESTOR UNITS)                                */}
      {/* ========================================================================= */}
      <section className="py-14 sm:py-20 border-b border-slate-200 bg-white">
        <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-10 lg:px-16">
          <ApartmentCollection />
        </div>
      </section>

      {/* ========================================================================= */}
      {/* F. ARCHITECTURAL FLOOR PLANS SET R02                                      */}
      {/* ========================================================================= */}
      <section className="py-14 sm:py-20 border-b border-slate-200 bg-slate-50/40">
        <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-10 lg:px-16 space-y-8">
          <div className="space-y-1.5 border-b border-slate-200 pb-4">
            <span className="text-[10px] font-mono uppercase tracking-[0.18em] text-[#0284c7] font-semibold block">
              Architectural Layout Archive &bull; Set R02
            </span>
            <h3 className="text-2xl sm:text-3xl font-semibold text-slate-950 font-sans tracking-tight">
              Floor Plan Typologies
            </h3>
            <p className="text-sm text-slate-600 font-light max-w-2xl">
              Inspect verified typical floor plan layouts across the four towers. Every layout is mathematically reconciled with the investor workbook areas and floor plan drawings.
            </p>
          </div>

          {/* Plan Typology Selector Tabs */}
          <div className="flex flex-wrap gap-2 border-b border-slate-200 pb-3">
            {BRABUS_FLOOR_PLANS.map((plan) => (
              <button
                key={plan.id}
                type="button"
                onClick={() => setSelectedPlanTab(plan.id)}
                className={`px-4 py-2 text-xs font-mono uppercase tracking-wider rounded-xs transition-colors cursor-pointer border ${
                  selectedPlanTab === plan.id
                    ? 'bg-slate-900 text-white border-slate-900 font-semibold'
                    : 'bg-white text-slate-700 border-slate-200 hover:border-slate-400'
                }`}
              >
                {plan.name}
              </button>
            ))}
          </div>

          {/* Selected Plan Display */}
          <div className="bg-white border border-slate-200 rounded-xs p-6 sm:p-8">
            <UnitFloorPlan
              planId={selectedPlanTab as 'type-01-corner' | 'type-02-middle' | 'type-03-corner' | 'type-06-middle'}
              showLightboxButton={true}
              hasDiscrepancy={selectedPlanTab === 'type-06-middle'}
              discrepancyNote={
                selectedPlanTab === 'type-06-middle'
                  ? 'Known discrepancy to preserve: Workbook unit A-1104 gives an interior area of 1,162.50 sq ft (~108.00 m²), while the Type 06 floor-plan label is approximately 110.50–110.51 m². Workbook investor price value is preserved internally; reconfirm before reservation.'
                  : undefined
              }
            />
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* G. DESIGN OPTIONS & SPECIFICATIONS                                        */}
      {/* ========================================================================= */}
      <section className="py-14 sm:py-20 border-b border-slate-200 bg-white">
        <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-10 lg:px-16 space-y-12">
          {/* Section Header */}
          <div className="space-y-1.5 border-b border-slate-200 pb-4">
            <span className="text-[10px] font-mono uppercase tracking-[0.18em] text-[#0284c7] font-semibold block">
              Modular Interior Design Architecture
            </span>
            <h3 className="text-2xl sm:text-3xl font-semibold text-slate-950 font-sans tracking-tight">
              Three Curated Design Colorways
            </h3>
            <p className="text-sm text-slate-600 font-light max-w-2xl">
              As described in the supplied official brochure, each residence can be personalized through a modular interior design approach starting from three distinct interpretations of the BRABUS aesthetic.
            </p>
          </div>

          {/* Design Themes Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {project.designConcepts.map((concept) => (
              <div
                key={concept.id}
                className="bg-slate-50/70 border border-slate-200 rounded-xs p-6 sm:p-8 space-y-5 flex flex-col justify-between"
              >
                <div className="space-y-4">
                  {/* Swatch Bar */}
                  <div className="flex items-center gap-1.5 pb-2">
                    {concept.palette.map((color, idx) => (
                      <span
                        key={idx}
                        className="w-6 h-6 rounded-2xs border border-slate-300/80 shadow-2xs"
                        style={{ backgroundColor: color }}
                        title={color}
                      />
                    ))}
                  </div>

                  <div className="space-y-1">
                    <h4 className="text-lg font-semibold text-slate-950 font-sans">
                      {concept.name}
                    </h4>
                    <p className="text-xs font-mono text-[#0284c7]">
                      {concept.headline}
                    </p>
                  </div>

                  <p className="text-xs text-slate-600 font-light leading-relaxed">
                    {concept.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-200 space-y-2">
                  <span className="text-[10px] font-mono text-slate-400 uppercase tracking-wider block">
                    Key Materials &amp; Finishes
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {concept.materials.map((mat, idx) => (
                      <span
                        key={idx}
                        className="text-[10px] font-mono bg-white border border-slate-200 text-slate-700 px-2 py-0.5 rounded-2xs"
                      >
                        {mat}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* 10 Brochure Unit Features */}
          <div className="space-y-6 pt-6 border-t border-slate-200">
            <div className="space-y-1">
              <span className="text-[10px] font-mono uppercase tracking-[0.16em] text-slate-500 font-semibold block">
                Standard Inclusions &bull; Official Brochure Specifications
              </span>
              <h4 className="text-lg font-semibold text-slate-900 font-sans">
                Residence Specifications &amp; Inclusions
              </h4>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3">
              {project.features.map((feat, idx) => (
                <div
                  key={idx}
                  className="p-3.5 bg-slate-50 border border-slate-200/80 rounded-xs flex items-start gap-2.5 text-xs text-slate-700"
                >
                  <CheckCircle2 className="h-4 w-4 text-[#0284c7] shrink-0 mt-0.5" />
                  <span className="text-[11px] leading-snug">{feat}</span>
                </div>
              ))}
            </div>

            <div className="p-3.5 bg-slate-100/70 border border-slate-200 rounded-xs text-[11px] text-slate-500 leading-relaxed">
              <strong>Illustrative Disclaimer:</strong> Loose furniture, electronic appliances, bespoke art, and automotive decor shown in promotional renderings are for illustrative styling only and do not form part of standard developer unit delivery.
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* H. LOCATION & PROXIMITY                                                   */}
      {/* ========================================================================= */}
      <section className="py-14 sm:py-20 border-b border-slate-200 bg-slate-50/50">
        <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-10 lg:px-16 space-y-10">
          <div className="space-y-1.5 border-b border-slate-200 pb-4">
            <span className="text-[10px] font-mono uppercase tracking-[0.18em] text-[#0284c7] font-semibold block">
              Strategic Coastal Position &bull; Abu Dhabi
            </span>
            <h3 className="text-2xl sm:text-3xl font-semibold text-slate-950 font-sans tracking-tight">
              Al Seef District, Al Raha Beach
            </h3>
            <p className="text-sm text-slate-600 font-light max-w-2xl">
              Strategically positioned along the Arabian Gulf&apos;s eastern coast in Abu Dhabi, ensuring rapid access to both the Abu Dhabi capital core and the arterial highway to Dubai.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            {/* Location Overview */}
            <div className="lg:col-span-5 bg-white border border-slate-200 rounded-xs p-6 sm:p-8 space-y-4">
              <div className="flex items-center gap-2 text-slate-900 font-semibold font-sans">
                <MapPin className="h-5 w-5 text-[#0284c7]" />
                <span>Al Raha Waterfront Enclave</span>
              </div>
              <p className="text-xs text-slate-600 font-light leading-relaxed">
                Al Raha Beach is one of Abu Dhabi&apos;s most prestigious mixed-use maritime developments. Residents benefit from direct waterfront promenades, private marina berths, and immediate proximity to Yas Island entertainment, cultural institutions on Saadiyat Island, and Abu Dhabi International Airport.
              </p>
              <div className="pt-4 border-t border-slate-100 space-y-2 text-xs font-mono">
                <div className="flex justify-between text-slate-600">
                  <span>District</span>
                  <span className="font-semibold text-slate-900">Al Seef District</span>
                </div>
                <div className="flex justify-between text-slate-600">
                  <span>Emirate</span>
                  <span className="font-semibold text-slate-900">Abu Dhabi, UAE</span>
                </div>
                <div className="flex justify-between text-slate-600">
                  <span>Direct Highway Access</span>
                  <span className="font-semibold text-slate-900">E10 / Sheikh Zayed Bin Sultan St</span>
                </div>
              </div>
            </div>

            {/* Travel Times Grid (Brochure Qualified) */}
            <div className="lg:col-span-7 bg-white border border-slate-200 rounded-xs p-6 sm:p-8 space-y-4">
              <div className="flex items-center justify-between border-b border-slate-100 pb-3">
                <span className="font-mono text-xs uppercase tracking-wider text-slate-900 font-semibold">
                  Brochure-Stated Travel Times
                </span>
                <span className="font-mono text-[10px] text-slate-400">
                  Driving Approximations
                </span>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {project.travelTimes.map((item, idx) => (
                  <div
                    key={idx}
                    className="p-3 bg-slate-50 border border-slate-200/80 rounded-xs space-y-1"
                  >
                    <div className="flex items-baseline justify-between">
                      <span className="text-lg font-semibold text-slate-950 font-mono">
                        {item.minutes < 10 ? `0${item.minutes}` : item.minutes}
                      </span>
                      <span className="text-[10px] font-mono text-slate-400">mins</span>
                    </div>
                    <span className="text-xs font-sans text-slate-700 font-medium block">
                      {item.destination}
                    </span>
                  </div>
                ))}
              </div>

              <div className="p-2.5 bg-slate-50 border border-slate-200/60 rounded-xs text-[10.5px] text-slate-500 leading-snug">
                <strong>Source Qualification:</strong> Travel times are approximate figures stated directly in the supplied official project brochure. They do not constitute live GPS navigation estimates and vary by traffic conditions.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* I. MANDATE INTAKE & INQUIRY CONVERSION                                   */}
      {/* ========================================================================= */}
      <section className="py-14 sm:py-20 border-b border-slate-200 bg-white">
        <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-10 lg:px-16">
          <div className="bg-gradient-to-r from-slate-900 via-slate-900 to-slate-800 text-white rounded-xs p-8 sm:p-12 lg:p-16 relative overflow-hidden shadow-lg">
            <div className="relative z-10 max-w-3xl space-y-6">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#0284c7]" />
                <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-[#e6ca85] font-semibold">
                  Confidential Advisory Intake
                </span>
              </div>

              <h3 className="text-2xl sm:text-4xl font-semibold tracking-tight text-white font-sans">
                Inquire on BRABUS ISLAND Residences
              </h3>

              <p className="text-sm text-slate-300 font-light leading-relaxed">
                Connect directly with our private client team for investor price confirmations, official unit registration statuses, payment schedules, and comprehensive floor plan sets. All inquiries are handled confidentially without brokerage spam.
              </p>

              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-2">
                <button
                  type="button"
                  onClick={() => setIsContactOpen(true)}
                  className="px-8 py-3.5 bg-[#0284c7] hover:bg-[#0369a1] text-white rounded-xs text-xs font-mono uppercase tracking-[0.16em] font-semibold transition-colors cursor-pointer shadow-xs flex items-center justify-center gap-2"
                >
                  <span>Transmit Private Mandate</span>
                  <ArrowUpRight className="h-4 w-4" />
                </button>
                <a
                  href="#residences"
                  className="px-6 py-3.5 bg-white/10 hover:bg-white/20 text-white border border-white/20 rounded-xs text-xs font-mono uppercase tracking-[0.14em] font-semibold transition-colors text-center"
                >
                  Review 21 Units List
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* J. COMPREHENSIVE STATUTORY DISCLAIMERS                                   */}
      {/* ========================================================================= */}
      <section className="py-12 bg-slate-100 text-slate-600 text-xs border-t border-slate-200">
        <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-10 lg:px-16 space-y-4">
          <div className="flex items-center gap-2 font-mono text-[11px] uppercase tracking-wider text-slate-800 font-semibold">
            <Info className="h-4 w-4 text-[#0284c7]" />
            <span>Important Statutory Disclaimers &amp; Information Governance</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 text-[11px] leading-relaxed text-slate-600">
            {project.disclaimers.map((disc, idx) => (
              <div key={idx} className="p-3 bg-white border border-slate-200 rounded-xs">
                {disc}
              </div>
            ))}
          </div>

          <div className="pt-2 text-[10.5px] font-mono text-slate-500 border-t border-slate-200">
            BRABUS ISLAND &bull; Independent Brokerage Intelligence Presentation &bull; Abu Dhabi, UAE &bull; Sources: BRABUS Official Brochure, Architectural Floor Plans R02, Investor Price Schedule (Summer 2025).
          </div>
        </div>
      </section>

      {/* Global Inquiries Modal */}
      <ContactModal
        isOpen={isContactOpen}
        onClose={() => setIsContactOpen(false)}
        initialInterest="PROPERTY"
        initialMessage="Project: BRABUS ISLAND. Location: Al Seef District, Al Raha, Abu Dhabi. I am requesting official investor unit pricing, current reservation status, and payment schedules for the four residential towers."
        initialBudget="AED 2,500,000+"
        title="Inquire: BRABUS ISLAND"
        eyebrow="BRABUS ISLAND Private Client Desk"
      />
    </div>
  )
}
