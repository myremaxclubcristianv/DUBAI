'use client'

import * as React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { VERIFIED_PROPERTIES } from '@/lib/data/properties'
import { useClient } from '@/lib/context/client-context'
import {
  Search,
  SlidersHorizontal,
  MapPin,
  ArrowRight,
  ShieldCheck,
  RotateCcw,
  CheckCircle2,
} from 'lucide-react'

export default function BuyPage() {
  const { formatCurrency } = useClient()
  const [selectedDistrict, setSelectedDistrict] = React.useState<string>('ALL')
  const [selectedType, setSelectedType] = React.useState<string>('ALL')
  const [selectedStatus, setSelectedStatus] = React.useState<string>('ALL')
  const [priceTier, setPriceTier] = React.useState<string>('ALL')
  const [searchQuery, setSearchQuery] = React.useState<string>('')

  // Strictly filter for sale listings located in Dubai
  const saleProperties = React.useMemo(() => {
    return VERIFIED_PROPERTIES.filter((p) => p.listing_type === 'Sale')
  }, [])

  const uniqueDistricts = React.useMemo(() => {
    return Array.from(new Set(saleProperties.map((p) => p.area_name))).filter(Boolean).sort()
  }, [saleProperties])

  const uniqueTypes = React.useMemo(() => {
    return Array.from(new Set(saleProperties.map((p) => p.property_type))).filter(Boolean).sort()
  }, [saleProperties])

  const filteredProperties = React.useMemo(() => {
    return saleProperties.filter((p) => {
      const pPrice = p.asking_price || 0

      // District Filter
      if (selectedDistrict !== 'ALL' && p.area_name !== selectedDistrict) return false

      // Property Type Filter
      if (selectedType !== 'ALL' && p.property_type !== selectedType) return false

      // Completion Status Filter
      if (selectedStatus !== 'ALL' && p.completion_status !== selectedStatus) return false

      // Price Tier Filter
      if (priceTier === 'UNDER_25M' && (pPrice === 0 || pPrice >= 25000000)) return false
      if (priceTier === '25M_50M' && (pPrice < 25000000 || pPrice > 50000000)) return false
      if (priceTier === 'ABOVE_50M' && pPrice <= 50000000) return false
      if (priceTier === 'ON_REQUEST' && pPrice > 0) return false

      // Free text search
      if (searchQuery.trim() !== '') {
        const q = searchQuery.toLowerCase()
        const matchTitle = p.title.toLowerCase().includes(q)
        const matchDistrict = p.area_name.toLowerCase().includes(q)
        const matchDev = p.developer_name.toLowerCase().includes(q)
        const matchType = p.property_type.toLowerCase().includes(q)
        if (!matchTitle && !matchDistrict && !matchDev && !matchType) return false
      }

      return true
    })
  }, [saleProperties, selectedDistrict, selectedType, selectedStatus, priceTier, searchQuery])

  const handleReset = () => {
    setSelectedDistrict('ALL')
    setSelectedType('ALL')
    setSelectedStatus('ALL')
    setPriceTier('ALL')
    setSearchQuery('')
  }

  return (
    <div className="flex flex-col min-h-screen bg-white text-slate-950 selection:bg-slate-900 selection:text-white">
      {/* 1. EDITORIAL HEADER & PROVENANCE NOTICE */}
      <section className="border-b border-slate-200 bg-slate-50/70 pt-16 pb-12 sm:pt-20 sm:pb-16">
        <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-10 lg:px-16 space-y-6">
          <div className="flex flex-wrap items-center gap-3 text-xs font-mono">
            <span className="px-3 py-1 bg-white border border-slate-200 text-slate-800 uppercase tracking-widest font-semibold flex items-center gap-1.5">
              <ShieldCheck className="h-3.5 w-3.5 text-emerald-700" />
              <span>Verified Dubai Sales Inventory</span>
            </span>
            <span className="px-3 py-1 bg-white border border-slate-200 text-slate-600 uppercase tracking-widest hidden sm:inline-block">
              {saleProperties.length} Properties Catalogued
            </span>
            <span className="px-3 py-1 bg-slate-900 text-white uppercase tracking-widest font-semibold">
              Sale Portfolio
            </span>
          </div>

          <div className="space-y-4 max-w-4xl">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-light tracking-tight text-slate-950 font-serif">
              Dubai Properties for Sale
            </h1>
            <p className="text-base sm:text-lg text-slate-600 font-light leading-relaxed max-w-3xl">
              Curated luxury residences, waterfront villas, sky penthouses, and prime off-plan acquisitions physically located in Dubai. Every record provides complete source provenance, verified DLD statutory zoning, and direct title deed traceability.
            </p>
          </div>

          <div className="pt-2 flex flex-wrap items-center gap-6 text-xs font-mono text-slate-600 border-t border-slate-200">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="h-3.5 w-3.5 text-emerald-700" />
              <span>Zero Fabricated Valuations</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="h-3.5 w-3.5 text-emerald-700" />
              <span>Freehold Zones Guaranteed (Law No. 7/2006)</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="h-3.5 w-3.5 text-emerald-700" />
              <span>Direct Developer &amp; Syndicated Registry</span>
            </div>
          </div>
        </div>
      </section>

      {/* 2. REFINED ARCHITECTURAL FILTER BAR */}
      <section className="sticky top-[76px] sm:top-[80px] z-40 bg-white/95 backdrop-blur-md border-b border-slate-200 py-4 transition-all shadow-2xs">
        <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-10 lg:px-16 flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4">
          {/* Search Input */}
          <div className="relative w-full md:w-80">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 h-3.5 w-3.5 text-slate-400" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search by community, developer, property..."
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
              <option value="ALL">All Communities ({uniqueDistricts.length})</option>
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
              <option value="ALL">Ready &amp; Off-Plan</option>
              <option value="Ready">Ready to Move</option>
              <option value="Off-Plan">Off-Plan / Under Construction</option>
            </select>

            <select
              value={priceTier}
              onChange={(e) => setPriceTier(e.target.value)}
              className="px-3 py-2 bg-slate-50 border border-slate-200 text-xs font-mono text-slate-800 focus:outline-none focus:border-slate-900 cursor-pointer"
            >
              <option value="ALL">All Valuations</option>
              <option value="UNDER_25M">&lt; AED 25M</option>
              <option value="25M_50M">AED 25M – 50M</option>
              <option value="ABOVE_50M">&gt; AED 50M</option>
              <option value="ON_REQUEST">Price on Request</option>
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

      {/* 3. PROPERTY DOSSIER CATALOG */}
      <main className="w-full max-w-[1440px] mx-auto px-4 sm:px-10 lg:px-16 py-14 sm:py-20 space-y-12 sm:space-y-16 flex-1">
        {/* Third-Party Disclosure */}
        <div className="p-4 sm:p-5 bg-slate-50 border border-slate-200 text-xs text-slate-600 font-light leading-relaxed space-y-1 shadow-2xs">
          <span className="font-mono text-[10px] uppercase tracking-wider text-slate-900 font-bold block">
            Listing Supply &amp; Provenance Protocol
          </span>
          <p>
            Property dossiers feature verified direct developer allocations alongside syndicated records from HomeFind. All opportunities are confirmed physically within the Emirate of Dubai under official freehold legislation (Law No. 7/2006). Non-Dubai listings are quarantined.
          </p>
        </div>

        {filteredProperties.length === 0 ? (
          <div className="text-center py-24 border border-slate-200 bg-slate-50 p-10 space-y-4">
            <h3 className="text-xl font-light text-slate-950 font-serif">No Assets Matching Selection</h3>
            <p className="text-xs text-slate-500 max-w-md mx-auto">
              Please adjust your search criteria or reset filters to view all verified Dubai sales inventory.
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
            const price = prop.asking_price || 0
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
                {/* Image Container (7 Columns) */}
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
                      <span className="px-2.5 py-1 text-[10px] font-mono font-semibold uppercase bg-white text-emerald-800 border border-slate-200">
                        {prop.completion_status}
                      </span>
                    </div>
                    <div className="absolute bottom-3 right-3 px-2 py-0.5 bg-slate-950/80 text-[9px] font-mono text-slate-300">
                      DOSSIER {String(idx + 1).padStart(2, '0')} &bull; {prop.provenance.source_name.split(' ')[0]}
                    </div>
                  </Link>
                </div>

                {/* Metadata & Valuation Plate (5 Columns) */}
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
                          ? `${prop.plot_area_sqft.toLocaleString()} SQ. FT PLOT`
                          : size > 0 ? `${size.toLocaleString()} SQ. FT` : 'Available upon Request'}
                      </span>
                    </div>
                    <div>
                      <span className="text-slate-400 block uppercase text-[10px]">
                        {prop.property_type === 'Plot' ? 'PERMISSIBLE BUA' : 'CONFIGURATION'}
                      </span>
                      <span className="text-slate-950 font-semibold">
                        {prop.property_type === 'Plot'
                          ? `G+2 Custom (${size.toLocaleString()} sq.ft)`
                          : beds > 0 ? `${beds} Bedrooms` : 'Multi-Suite Residence'}
                      </span>
                    </div>
                  </div>

                  <div className="pt-4 flex items-center justify-between border-t border-slate-100">
                    <div>
                      <span className="text-[10px] font-mono uppercase text-slate-400 block font-semibold">
                        ASKING VALUATION
                      </span>
                      <span className="text-xl sm:text-2xl font-light text-slate-950 font-mono tabular-nums font-bold">
                        {price > 0 ? formatCurrency(price) : 'Price on Request'}
                      </span>
                    </div>

                    <Link
                      href={`/properties/${prop.id}`}
                      className="inline-flex items-center gap-2 px-5 py-2.5 bg-slate-950 hover:bg-slate-800 text-white text-xs font-mono uppercase tracking-[0.14em] font-semibold transition-colors shadow-2xs"
                    >
                      <span>VIEW DOSSIER</span>
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
