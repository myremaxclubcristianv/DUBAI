'use client'

import * as React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { VERIFIED_PROPERTIES } from '@/lib/data/properties'
import { SourceBadge } from '@/components/ui/source-badge'
import { PageIntro } from '@/components/layout/layout-primitives'
import { useClient } from '@/lib/context/client-context'
import { useToast } from '@/components/ui/toast'
import {
  Search,
  Bookmark,
  RotateCcw,
  ArrowRight,
  Building,
} from 'lucide-react'

export default function PropertiesPage() {
  const [searchQuery, setSearchQuery] = React.useState('')
  const [selectedArea, setSelectedArea] = React.useState('ALL')
  const [selectedType, setSelectedType] = React.useState('ALL')
  const [priceRange, setPriceRange] = React.useState('ALL')
  const [selectedDeveloper, setSelectedDeveloper] = React.useState('ALL')
  const [sortBy, setSortBy] = React.useState('DEFAULT')

  const { saveSearch, shortlistIds, toggleShortlist } = useClient()
  const { addToast } = useToast()

  const uniqueAreas = React.useMemo(() => {
    return Array.from(new Set(VERIFIED_PROPERTIES.map((p) => p.area_name))).sort()
  }, [])

  const uniqueTypes = React.useMemo(() => {
    return Array.from(new Set(VERIFIED_PROPERTIES.map((p) => p.property_type))).sort()
  }, [])

  const uniqueDevelopers = React.useMemo(() => {
    return Array.from(new Set(VERIFIED_PROPERTIES.map((p) => p.developer_name))).sort()
  }, [])

  const filteredProperties = React.useMemo(() => {
    const list = VERIFIED_PROPERTIES.filter((p) => {
      // Search text
      if (searchQuery) {
        const q = searchQuery.toLowerCase().trim()
        const matches =
          p.title.toLowerCase().includes(q) ||
          p.area_name.toLowerCase().includes(q) ||
          p.developer_name.toLowerCase().includes(q) ||
          p.property_type.toLowerCase().includes(q) ||
          (p.project_name && p.project_name.toLowerCase().includes(q))
        if (!matches) return false
      }

      // Area filter
      if (selectedArea !== 'ALL' && p.area_name !== selectedArea) return false

      // Property type
      if (selectedType !== 'ALL' && p.property_type !== selectedType) return false

      // Developer
      if (selectedDeveloper !== 'ALL' && p.developer_name !== selectedDeveloper) return false

      // Price range
      if (priceRange !== 'ALL' && p.asking_price) {
        if (priceRange === 'UNDER_25M' && p.asking_price >= 25000000) return false
        if (priceRange === '25M_50M' && (p.asking_price < 25000000 || p.asking_price > 50000000)) return false
        if (priceRange === '50M_100M' && (p.asking_price < 50000000 || p.asking_price > 100000000)) return false
        if (priceRange === 'ABOVE_100M' && p.asking_price <= 100000000) return false
      }

      return true
    })

    // Sorting
    return list.sort((a, b) => {
      if (sortBy === 'PRICE_ASC') return (a.asking_price || 0) - (b.asking_price || 0)
      if (sortBy === 'PRICE_DESC') return (b.asking_price || 0) - (a.asking_price || 0)
      if (sortBy === 'AREA_DESC') return (b.internal_area_sqft || 0) - (a.internal_area_sqft || 0)
      if (sortBy === 'BEDS_DESC') return (b.bedrooms || 0) - (a.bedrooms || 0)
      return 0
    })
  }, [
    searchQuery,
    selectedArea,
    selectedType,
    selectedDeveloper,
    priceRange,
    sortBy,
  ])

  const handleResetFilters = () => {
    setSearchQuery('')
    setSelectedArea('ALL')
    setSelectedType('ALL')
    setPriceRange('ALL')
    setSelectedDeveloper('ALL')
    setSortBy('DEFAULT')
  }

  const handleSaveCurrentSearch = () => {
    const label = `Filter: ${selectedArea !== 'ALL' ? selectedArea : 'All Areas'} • ${selectedType !== 'ALL' ? selectedType : 'All Types'}`
    saveSearch(label, {
      query: searchQuery,
      area: selectedArea,
      type: selectedType,
      developer: selectedDeveloper,
      priceRange,
    })
    addToast('Search criteria logged to private client workspace', 'success')
  }

  return (
    <div className="flex flex-col min-h-screen bg-white text-[#1d1d1f] selection:bg-[#0071e3]/10 selection:text-[#1d1d1f]">
      {/* 1. APPLE KEYNOTE HERO HEADER */}
      <PageIntro
        eyebrow="Curated Trophy Portfolio"
        badge={
          <div className="text-xs font-mono text-[#6e6e73] bg-[#f5f5f7] px-3.5 py-1.5 rounded-full border border-black/10 shrink-0 font-medium">
            <span className="text-[#1d1d1f] font-bold">{filteredProperties.length}</span> of {VERIFIED_PROPERTIES.length} verified assets
          </div>
        }
        title="Properties."
        description="Direct statutory title records. Prime freehold penthouses, waterfront villas, and ultra-prime estates."
      />

      {/* 2. APPLE FROSTED GLASS CONTROL BAR */}
      <section className="sticky top-16 z-30 bg-white/85 backdrop-blur-2xl border-b border-black/10 py-3.5 px-4 sm:px-6 lg:px-8">
        <div className="w-full max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-3">
            {/* Search Input */}
            <div className="relative w-full lg:w-72">
              <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-[#86868b]" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search asset, area, developer..."
                className="w-full pl-10 pr-3.5 py-2 bg-[#f5f5f7] rounded-full border border-black/10 text-xs text-[#1d1d1f] placeholder:text-[#86868b] focus:outline-none focus:border-[#b8860b] focus:ring-1 focus:ring-[#b8860b] transition-all"
              />
            </div>

            {/* Restrained Filters: Area, Price, Property Type, Developer */}
            <div className="grid grid-cols-2 sm:flex sm:items-center gap-2 w-full lg:w-auto">
              <select
                value={selectedArea}
                onChange={(e) => setSelectedArea(e.target.value)}
                className="px-3.5 py-2 bg-[#f5f5f7] rounded-full border border-black/10 text-xs font-medium text-[#1d1d1f] focus:outline-none focus:border-black/30 w-full sm:w-auto cursor-pointer"
              >
                <option value="ALL">All Areas</option>
                {uniqueAreas.map((area) => (
                  <option key={area} value={area}>{area}</option>
                ))}
              </select>

              <select
                value={priceRange}
                onChange={(e) => setPriceRange(e.target.value)}
                className="px-3.5 py-2 bg-[#f5f5f7] rounded-full border border-black/10 text-xs font-medium text-[#1d1d1f] focus:outline-none focus:border-black/30 w-full sm:w-auto cursor-pointer"
              >
                <option value="ALL">All Prices</option>
                <option value="UNDER_25M">&lt; AED 25M</option>
                <option value="25M_50M">AED 25M – 50M</option>
                <option value="50M_100M">AED 50M – 100M</option>
                <option value="ABOVE_100M">&gt; AED 100M</option>
              </select>

              <select
                value={selectedType}
                onChange={(e) => setSelectedType(e.target.value)}
                className="px-3.5 py-2 bg-[#f5f5f7] rounded-full border border-black/10 text-xs font-medium text-[#1d1d1f] focus:outline-none focus:border-black/30 w-full sm:w-auto cursor-pointer"
              >
                <option value="ALL">All Types</option>
                {uniqueTypes.map((type) => (
                  <option key={type} value={type}>{type}</option>
                ))}
              </select>

              <select
                value={selectedDeveloper}
                onChange={(e) => setSelectedDeveloper(e.target.value)}
                className="px-3.5 py-2 bg-[#f5f5f7] rounded-full border border-black/10 text-xs font-medium text-[#1d1d1f] focus:outline-none focus:border-black/30 w-full sm:w-auto cursor-pointer"
              >
                <option value="ALL">All Developers</option>
                {uniqueDevelopers.map((dev) => (
                  <option key={dev} value={dev}>{dev}</option>
                ))}
              </select>

              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="col-span-2 sm:col-span-1 px-3.5 py-2 bg-[#f5f5f7] rounded-full border border-black/10 text-xs font-medium text-[#1d1d1f] focus:outline-none focus:border-black/30 w-full sm:w-auto cursor-pointer"
              >
                <option value="DEFAULT">Sort: Curated</option>
                <option value="PRICE_DESC">Price: High to Low</option>
                <option value="PRICE_ASC">Price: Low to High</option>
                <option value="AREA_DESC">Size: Largest</option>
              </select>
            </div>

            {/* Actions */}
            <div className="flex items-center gap-2 shrink-0 justify-end w-full lg:w-auto">
              <button
                type="button"
                onClick={handleResetFilters}
                className="p-2 rounded-full border border-black/10 bg-[#f5f5f7] hover:bg-[#ebebeb] text-[#6e6e73] hover:text-[#1d1d1f] text-xs flex items-center gap-1.5 transition-colors cursor-pointer"
                title="Reset Filters"
              >
                <RotateCcw className="h-3.5 w-3.5" />
                <span className="hidden sm:inline text-[11px] font-medium">Reset</span>
              </button>

              <button
                type="button"
                onClick={handleSaveCurrentSearch}
                className="px-4 py-2 rounded-full border border-black/10 bg-[#1d1d1f] hover:bg-[#000000] text-white text-xs font-semibold flex items-center gap-1.5 transition-colors cursor-pointer shadow-xs"
              >
                <Bookmark className="h-3.5 w-3.5 fill-white" />
                <span className="text-[11px]">Save Search</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 3. APPLE PRO BENTO GRID */}
      <main className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {filteredProperties.length === 0 ? (
          <div className="text-center py-24 border border-black/10 rounded-3xl bg-[#f5f5f7] p-8 space-y-4">
            <Building className="h-12 w-12 text-[#86868b] mx-auto" />
            <h3 className="text-xl font-bold text-[#1d1d1f]">No Properties Matching Filters</h3>
            <p className="text-sm text-[#6e6e73] max-w-sm mx-auto">
              Adjust your criteria or reset the filters to view all verified statutory records.
            </p>
            <button
              type="button"
              onClick={handleResetFilters}
              className="px-6 py-2.5 rounded-full bg-[#1d1d1f] text-white hover:bg-[#000000] text-xs font-bold uppercase tracking-wider transition-colors cursor-pointer"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {filteredProperties.map((prop) => (
              <div
                key={prop.id}
                className="border border-black/10 rounded-3xl overflow-hidden bg-white shadow-[0_2px_12px_rgba(0,0,0,0.03)] apple-card-hover flex flex-col justify-between group"
              >
                {/* Image Showcase */}
                <div className="relative aspect-[16/10] bg-[#f5f5f7] overflow-hidden">
                  <Image
                    src={prop.images[0] || 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1200&q=80'}
                    alt={prop.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
                  
                  {/* Top Badges */}
                  <div className="absolute top-4 left-4">
                    <span className="px-3.5 py-1 rounded-full text-xs font-bold bg-white/90 backdrop-blur-md text-[#1d1d1f] border border-black/10 shadow-xs">
                      {prop.area_name}
                    </span>
                  </div>
                  <button
                    type="button"
                    onClick={() => toggleShortlist(prop.id)}
                    className={`absolute top-4 right-4 p-2.5 rounded-full backdrop-blur-md transition-all cursor-pointer ${
                      shortlistIds.includes(prop.id)
                        ? 'bg-[#1d1d1f] text-white shadow-md'
                        : 'bg-white/90 text-[#1d1d1f] hover:bg-white border border-black/10 shadow-xs'
                    }`}
                    title="Save property"
                  >
                    <Bookmark className={`h-4 w-4 ${shortlistIds.includes(prop.id) ? 'fill-white' : ''}`} />
                  </button>

                  {/* Bottom Image Overlay Tag */}
                  <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-xs text-white">
                    <span className="font-mono bg-black/60 px-2.5 py-1 rounded-md backdrop-blur-sm border border-white/20">
                      {prop.developer_name}
                    </span>
                    <span className="font-mono bg-black/60 px-2.5 py-1 rounded-md backdrop-blur-sm border border-white/20">
                      {prop.property_type}
                    </span>
                  </div>
                </div>

                {/* Content Details */}
                <div className="p-6 sm:p-8 space-y-6 flex-1 flex flex-col justify-between">
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <SourceBadge status="OFFICIAL SOURCE" sourceName="DLD Title Record" />
                      <span className="text-xs font-mono text-[#86868b]">Ref: {prop.id}</span>
                    </div>

                    <h2 className="text-2xl font-extrabold text-[#1d1d1f] group-hover:text-[#b8860b] transition-colors leading-snug">
                      {prop.title}
                    </h2>

                    <p className="text-sm text-[#6e6e73] line-clamp-2 leading-relaxed">
                      {prop.description}
                    </p>
                  </div>

                  {/* Tech Specs Bar */}
                  <div className="space-y-4 pt-5 border-t border-black/10">
                    <div className="grid grid-cols-3 gap-2 bg-[#f5f5f7] p-3.5 rounded-2xl border border-black/5 text-center">
                      <div>
                        <div className="text-[10px] uppercase font-mono text-[#86868b] font-semibold">Bedrooms</div>
                        <div className="text-sm font-bold text-[#1d1d1f] mt-0.5">{prop.bedrooms} Bed</div>
                      </div>
                      <div>
                        <div className="text-[10px] uppercase font-mono text-[#86868b] font-semibold">Built-Up Area</div>
                        <div className="text-sm font-bold text-[#1d1d1f] mt-0.5">{prop.internal_area_sqft.toLocaleString()} sqft</div>
                      </div>
                      <div>
                        <div className="text-[10px] uppercase font-mono text-[#86868b] font-semibold">Tenure</div>
                        <div className="text-sm font-bold text-[#b8860b] mt-0.5">Freehold</div>
                      </div>
                    </div>

                    {/* Price & CTA */}
                    <div className="flex items-center justify-between pt-2">
                      <div>
                        <div className="text-[10px] text-[#86868b] font-mono uppercase tracking-wider font-semibold">Asking Price</div>
                        <div className="text-2xl sm:text-3xl font-extrabold text-[#1d1d1f] tabular-nums">
                          AED {prop.asking_price?.toLocaleString()}
                        </div>
                      </div>

                      <Link
                        href={`/properties/${prop.id}`}
                        className="px-6 py-3 rounded-full bg-[#1d1d1f] text-white hover:bg-[#000000] text-xs font-bold uppercase tracking-wider flex items-center gap-2 transition-all shadow-xs cursor-pointer"
                      >
                        <span>Dossier</span>
                        <ArrowRight className="h-3.5 w-3.5 text-white/70" />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </main>
    </div>
  )
}