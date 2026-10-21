'use client'

import * as React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { VERIFIED_PROPERTIES } from '@/lib/data/properties'
import {
  Search,
  RotateCcw,
  MapPin,
  CheckCircle2,
  ShieldCheck,
  ArrowRight,
  SlidersHorizontal,
} from 'lucide-react'

export default function PropertiesPage() {
  const [searchQuery, setSearchQuery] = React.useState('')
  const [selectedDistrict, setSelectedDistrict] = React.useState('ALL')
  const [selectedType, setSelectedType] = React.useState('ALL')
  const [selectedStatus, setSelectedStatus] = React.useState('ALL')

  const uniqueDistricts = React.useMemo(() => {
    return Array.from(new Set(VERIFIED_PROPERTIES.map((p) => p.area_name))).filter(Boolean).sort()
  }, [])

  const uniqueTypes = React.useMemo(() => {
    return Array.from(new Set(VERIFIED_PROPERTIES.map((p) => p.property_type))).filter(Boolean).sort()
  }, [])

  const filteredProperties = React.useMemo(() => {
    return VERIFIED_PROPERTIES.filter((p) => {
      const pDistrict = p.area_name || ''
      const pType = p.property_type || ''
      const pTitle = p.title || ''
      const pDeveloper = p.developer_name || ''
      const pStatus = p.completion_status || ''

      if (searchQuery) {
        const q = searchQuery.toLowerCase().trim()
        const match =
          pTitle.toLowerCase().includes(q) ||
          pDistrict.toLowerCase().includes(q) ||
          pType.toLowerCase().includes(q) ||
          pDeveloper.toLowerCase().includes(q)
        if (!match) return false
      }

      if (selectedDistrict !== 'ALL' && pDistrict !== selectedDistrict) return false
      if (selectedType !== 'ALL' && pType !== selectedType) return false
      if (selectedStatus !== 'ALL' && pStatus !== selectedStatus) return false

      return true
    })
  }, [searchQuery, selectedDistrict, selectedType, selectedStatus])

  const handleReset = () => {
    setSearchQuery('')
    setSelectedDistrict('ALL')
    setSelectedType('ALL')
    setSelectedStatus('ALL')
  }

  return (
    <div className="flex flex-col min-h-screen bg-white text-slate-950 selection:bg-slate-900 selection:text-white">
      
      {/* 1. EDITORIAL HEADER WITH ARCHITECTURAL METADATA */}
      <section className="pt-16 pb-14 sm:pt-24 sm:pb-20 border-b border-slate-200 bg-white relative">
        <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-10 lg:px-16 space-y-6">
          
          <div className="flex flex-wrap items-center justify-between gap-4 font-mono text-xs">
            <div className="flex items-center gap-2">
              <span className="text-[10px] tracking-[0.24em] uppercase text-slate-500 font-semibold">
                PROPERTY DIRECTORY &bull; STATUTORY INVENTORY
              </span>
            </div>
            <div className="flex items-center gap-3 text-[11px] text-slate-500">
              <span className="text-slate-800 font-semibold flex items-center gap-1">
                <ShieldCheck className="h-3.5 w-3.5 text-slate-700" />
                Freehold Register Reference
              </span>
              <span>&bull;</span>
              <span>Designated Freehold Zones (Decree 3/2006)</span>
            </div>
          </div>
          
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 border-t border-slate-200/80 pt-6">
            <div className="space-y-3 max-w-2xl">
              <h1 className="text-4xl sm:text-6xl lg:text-7xl font-light tracking-[-0.035em] text-slate-950 font-serif">
                PROPERTIES
              </h1>
              <p className="text-base sm:text-lg text-slate-600 font-light leading-relaxed">
                Curated portfolio of prime Dubai penthouses, villas, and architectural residences with independent statutory underwriting and published acquisition schedules.
              </p>
            </div>

            <div className="p-4 bg-slate-50 border border-slate-200 font-mono text-xs text-slate-600 shadow-2xs space-y-1">
              <div className="flex items-center gap-2 text-slate-950 font-bold">
                <CheckCircle2 className="h-4 w-4 text-slate-900" />
                <span>{filteredProperties.length} Curated Listing Records</span>
              </div>
              <div className="text-[10px] text-slate-400">
                Law No. 7/2006 &bull; Escrow Ring-Fenced
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* 2. RESTRAINED MINIMAL FILTER ARCHITECTURE */}
      <section className="sticky top-[76px] sm:top-[80px] z-30 bg-white/95 backdrop-blur-md border-b border-slate-200 py-4 px-4 sm:px-10 lg:px-16 shadow-2xs">
        <div className="w-full max-w-[1440px] mx-auto flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4">
          
          {/* Search Input */}
          <div className="relative w-full md:w-80">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 h-3.5 w-3.5 text-slate-400" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search by name, district, developer..."
              className="w-full pl-9 pr-4 py-2 bg-slate-50 border border-slate-200 text-xs text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-slate-900 focus:bg-white transition-colors font-mono"
            />
          </div>

          {/* Filter Selectors */}
          <div className="flex flex-wrap items-center gap-2.5">
            <div className="flex items-center gap-1.5 text-[10px] font-mono text-slate-400 uppercase tracking-wider hidden lg:flex">
              <SlidersHorizontal className="h-3 w-3 text-slate-500" />
              <span>Filter:</span>
            </div>

            <select
              value={selectedDistrict}
              onChange={(e) => setSelectedDistrict(e.target.value)}
              className="px-3 py-2 bg-slate-50 border border-slate-200 text-xs font-mono text-slate-800 focus:outline-none focus:border-slate-900 cursor-pointer"
            >
              <option value="ALL">All Districts ({uniqueDistricts.length})</option>
              {uniqueDistricts.map((d) => (
                <option key={d} value={d}>{d}</option>
              ))}
            </select>

            <select
              value={selectedType}
              onChange={(e) => setSelectedType(e.target.value)}
              className="px-3 py-2 bg-slate-50 border border-slate-200 text-xs font-mono text-slate-800 focus:outline-none focus:border-slate-900 cursor-pointer"
            >
              <option value="ALL">All Asset Types</option>
              {uniqueTypes.map((t) => (
                <option key={t} value={t}>{t}</option>
              ))}
            </select>

            <select
              value={selectedStatus}
              onChange={(e) => setSelectedStatus(e.target.value)}
              className="px-3 py-2 bg-slate-50 border border-slate-200 text-xs font-mono text-slate-800 focus:outline-none focus:border-slate-900 cursor-pointer"
            >
              <option value="ALL">All Completion Statuses</option>
              <option value="Ready">Ready / Handed Over</option>
              <option value="Off-Plan">Off-Plan Under Construction</option>
            </select>

            <button
              onClick={handleReset}
              className="p-2 border border-slate-200 text-slate-500 hover:text-slate-900 hover:bg-slate-100 transition-colors cursor-pointer"
              title="Reset Filters"
            >
              <RotateCcw className="h-3.5 w-3.5" />
            </button>
          </div>

        </div>
      </section>

      {/* 3. ASYMMETRICAL EDITORIAL PROPERTY DOSSIER ROWS */}
      <main className="w-full max-w-[1440px] mx-auto px-4 sm:px-10 lg:px-16 py-14 sm:py-20 space-y-12 sm:space-y-16 flex-1">
        {/* Mandatory Independent Research & Representation Disclaimer */}
        <div className="p-4 sm:p-5 bg-slate-50 border border-slate-200 text-xs text-slate-600 font-light leading-relaxed space-y-2 shadow-2xs">
          <span className="font-mono text-[10px] uppercase tracking-wider text-slate-900 font-bold block">
            Independent Research Notice &bull; Notă de Conformitate &amp; Reprezentare
          </span>
          <p>
            DUBAI este o platformă independentă de cercetare și informare imobiliară. Publicarea unui proiect sau a unei proprietăți nu implică existența unui mandat de vânzare, a unei relații de reprezentare ori a unei verificări independente a fiecărei informații. Pentru tranzacții, vizionări și servicii reglementate, utilizatorii vor fi îndrumați către profesioniști și parteneri autorizați, după confirmarea disponibilității și a statutului acestora.
          </p>
          <p className="text-[11px] text-slate-500 pt-1 border-t border-slate-200">
            Property listings are research entries. Commercial pricing, availability, and specific inventory must be confirmed through official channels or authorized partner representation.
          </p>
        </div>
        {filteredProperties.length === 0 ? (
          <div className="text-center py-24 border border-slate-200 bg-slate-50 p-10 space-y-4">
            <h3 className="text-xl font-light text-slate-950 font-serif">No Assets Matching Selection</h3>
            <p className="text-xs text-slate-500 max-w-md mx-auto">
              Please adjust your search criteria or reset filters to view all research entries.
            </p>
            <button
              onClick={handleReset}
              className="px-6 py-2.5 bg-slate-950 text-white text-xs font-mono uppercase tracking-wider font-semibold cursor-pointer hover:bg-slate-800 transition-colors"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          filteredProperties.map((prop, idx) => {
            const district = prop.area_name || ''
            const type = prop.property_type || ''
            const developer = prop.developer_name || ''
            const size = prop.internal_area_sqft || 0
            const beds = prop.bedrooms || 0

            return (
              <article
                key={prop.id}
                className="group border-b border-slate-200 pb-12 sm:pb-16 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center"
              >
                {/* Architectural Imagery Container (7 Columns) */}
                <div className="lg:col-span-7">
                  <Link
                    href={`/properties/${prop.id}`}
                    className="block relative aspect-[16/10] w-full overflow-hidden bg-slate-100 border border-slate-200 group-hover:border-slate-400 transition-all shadow-xs group-hover:shadow-md"
                  >
                    <Image
                      src={
                        prop.images[0] ||
                        'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1400&q=85'
                      }
                      alt={prop.title}
                      fill
                      sizes="(max-width: 1024px) 100vw, 60vw"
                      className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                    />
                    <div className="absolute top-4 left-4 flex gap-2">
                      <span className="px-2.5 py-1 text-[10px] font-mono font-semibold uppercase bg-white/95 backdrop-blur-xs text-slate-950 border border-slate-200">
                        {developer}
                      </span>
                      <span className="px-2.5 py-1 text-[10px] font-mono font-semibold uppercase bg-white text-slate-700 border border-slate-200">
                        RESEARCH ENTRY
                      </span>
                    </div>
                    <div className="absolute bottom-3 right-3 px-2 py-0.5 bg-slate-950/80 text-[9px] font-mono text-slate-300">
                      DOSSIER {String(idx + 1).padStart(2, '0')}
                    </div>
                  </Link>
                </div>

                {/* Editorial Metadata & Valuation Plate (5 Columns) */}
                <div className="lg:col-span-5 space-y-5">
                  <div className="space-y-2">
                    <div className="flex items-center gap-2 text-xs font-mono uppercase text-slate-600 font-semibold">
                      <MapPin className="h-3.5 w-3.5 text-slate-900" />
                      <span className="text-slate-950">{district}</span>
                      <span className="text-slate-300">&bull;</span>
                      <span>{type}</span>
                    </div>

                    <h2 className="text-2xl sm:text-3xl font-light tracking-tight text-slate-950 group-hover:text-slate-600 transition-colors font-serif">
                      <Link href={`/properties/${prop.id}`}>
                        {prop.title}
                      </Link>
                    </h2>
                  </div>

                  <p className="text-sm text-slate-600 font-light leading-relaxed line-clamp-3">
                    {prop.unit_descriptor || prop.editorial_display_name}
                  </p>

                  <div className="pt-2 border-t border-slate-100 grid grid-cols-2 gap-4 text-xs font-mono">
                    <div>
                      <span className="text-slate-400 block uppercase text-[10px]">
                        {prop.property_type === 'Plot' ? 'PLOT AREA' : 'INTERNAL AREA'}
                      </span>
                      <span className="text-slate-950 font-semibold">
                        {prop.property_type === 'Plot' && prop.plot_area_sqft
                          ? `${prop.plot_area_sqft.toLocaleString()} SQ. FT`
                          : `${size.toLocaleString()} SQ. FT`}
                      </span>
                    </div>
                    <div>
                      <span className="text-slate-400 block uppercase text-[10px]">
                        {prop.property_type === 'Plot' ? 'PERMISSIBLE BUA' : 'CONFIGURATION'}
                      </span>
                      <span className="text-slate-950 font-semibold">
                        {prop.property_type === 'Plot'
                          ? `G+2 Custom (${size.toLocaleString()} sq.ft)`
                          : `${beds} Bedrooms`}
                      </span>
                    </div>
                  </div>

                  <div className="pt-4 flex items-center justify-between border-t border-slate-100">
                    <div>
                      <span className="text-[10px] font-mono uppercase text-slate-400 block font-semibold">
                        COMMERCIAL PRICING
                      </span>
                      <span className="text-base sm:text-lg font-light text-slate-950 font-mono tracking-wider font-bold">
                        REQUEST PRICE
                      </span>
                    </div>

                    <Link
                      href={`/properties/${prop.id}`}
                      className="inline-flex items-center gap-2 px-5 py-2.5 bg-slate-950 hover:bg-slate-800 text-white text-xs font-mono uppercase tracking-[0.14em] font-semibold transition-colors shadow-2xs"
                    >
                      <span>REQUEST INFORMATION</span>
                      <ArrowRight className="h-3.5 w-3.5" />
                    </Link>
                  </div>
                </div>
              </article>
            )
          })
        )}
      </main>

    </div>
  )
}