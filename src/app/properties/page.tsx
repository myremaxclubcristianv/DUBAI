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
    <div className="flex flex-col min-h-screen bg-black text-white">
      {/* 1. APPLE KEYNOTE HERO HEADER */}
      <PageIntro
        eyebrow="Curated Trophy Portfolio"
        badge={
          <div className="text-xs font-mono text-zinc-400 bg-white/[0.04] px-3.5 py-1.5 rounded-full border border-white/10 shrink-0">
            <span className="text-white font-semibold">{filteredProperties.length}</span> of {VERIFIED_PROPERTIES.length} verified assets
          </div>
        }
        title={<>Properties<span className="text-gradient-gold">.</span></>}
        description="Direct statutory title records. Prime freehold penthouses, waterfront villas, and ultra-prime estates."
      />

      {/* 2. APPLE FROSTED GLASS CONTROL BAR */}
      <section className="sticky top-16 z-30 bg-black/80 backdrop-blur-2xl border-b border-white/10 py-3.5 px-4 sm:px-6 lg:px-8">
        <div className="w-full max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-3">
            {/* Search Input */}
            <div className="relative w-full lg:w-72">
              <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-zinc-400" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search asset, area, developer..."
                className="w-full pl-10 pr-3.5 py-2 bg-zinc-900/90 rounded-full border border-white/10 text-xs text-white placeholder:text-zinc-500 focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold transition-all"
              />
            </div>

            {/* Restrained Filters: Area, Price, Property Type, Developer */}
            <div className="grid grid-cols-2 sm:flex sm:items-center gap-2 w-full lg:w-auto">
              <select
                value={selectedArea}
                onChange={(e) => setSelectedArea(e.target.value)}
                className="px-3 py-2 bg-zinc-900 rounded-full border border-white/10 text-xs font-medium text-zinc-300 focus:outline-none focus:border-white/30 w-full sm:w-auto cursor-pointer"
              >
                <option value="ALL">All Areas</option>
                {uniqueAreas.map((area) => (
                  <option key={area} value={area}>{area}</option>
                ))}
              </select>

              <select
                value={priceRange}
                onChange={(e) => setPriceRange(e.target.value)}
                className="px-3 py-2 bg-zinc-900 rounded-full border border-white/10 text-xs font-medium text-zinc-300 focus:outline-none focus:border-white/30 w-full sm:w-auto cursor-pointer"
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
                className="px-3 py-2 bg-zinc-900 rounded-full border border-white/10 text-xs font-medium text-zinc-300 focus:outline-none focus:border-white/30 w-full sm:w-auto cursor-pointer"
              >
                <option value="ALL">All Types</option>
                {uniqueTypes.map((type) => (
                  <option key={type} value={type}>{type}</option>
                ))}
              </select>

              <select
                value={selectedDeveloper}
                onChange={(e) => setSelectedDeveloper(e.target.value)}
                className="px-3 py-2 bg-zinc-900 rounded-full border border-white/10 text-xs font-medium text-zinc-300 focus:outline-none focus:border-white/30 w-full sm:w-auto cursor-pointer"
              >
                <option value="ALL">All Developers</option>
                {uniqueDevelopers.map((dev) => (
                  <option key={dev} value={dev}>{dev}</option>
                ))}
              </select>

              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="col-span-2 sm:col-span-1 px-3 py-2 bg-zinc-900 rounded-full border border-white/10 text-xs font-medium text-zinc-300 focus:outline-none focus:border-white/30 w-full sm:w-auto cursor-pointer"
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
                className="p-2 rounded-full border border-white/10 bg-zinc-900 hover:bg-zinc-800 text-zinc-400 hover:text-white text-xs flex items-center gap-1.5 transition-colors cursor-pointer"
                title="Reset Filters"
              >
                <RotateCcw className="h-3.5 w-3.5" />
                <span className="hidden sm:inline text-[11px]">Reset</span>
              </button>

              <button
                type="button"
                onClick={handleSaveCurrentSearch}
                className="px-3.5 py-2 rounded-full border border-gold/30 bg-gold/10 hover:bg-gold/20 text-gold text-xs font-semibold flex items-center gap-1.5 transition-colors cursor-pointer"
              >
                <Bookmark className="h-3.5 w-3.5 fill-gold" />
                <span className="text-[11px]">Save Search</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 3. APPLE PRO BENTO GRID */}
      <main className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {filteredProperties.length === 0 ? (
          <div className="text-center py-20 border border-white/10 rounded-3xl bg-zinc-950/60 p-8 space-y-4">
            <Building className="h-12 w-12 text-zinc-600 mx-auto" />
            <h3 className="text-xl font-bold text-white">No Properties Matching Filters</h3>
            <p className="text-sm text-zinc-400 max-w-sm mx-auto">
              Adjust your criteria or reset the filters to view all verified statutory records.
            </p>
            <button
              type="button"
              onClick={handleResetFilters}
              className="px-6 py-2.5 rounded-full bg-white text-black hover:bg-zinc-200 text-xs font-bold uppercase tracking-wider transition-colors cursor-pointer"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {filteredProperties.map((prop) => (
              <div
                key={prop.id}
                className="border border-white/10 rounded-3xl overflow-hidden bg-zinc-950/70 hover:border-gold/40 transition-all duration-300 flex flex-col justify-between group shadow-2xl backdrop-blur-md"
              >
                {/* Image Showcase */}
                <div className="relative aspect-[16/10] bg-zinc-900 overflow-hidden">
                  <Image
                    src={prop.images[0] || 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1200&q=80'}
                    alt={prop.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />
                  
                  {/* Top Badges */}
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 rounded-full text-xs font-bold bg-black/70 backdrop-blur-md text-white border border-white/15">
                      {prop.area_name}
                    </span>
                  </div>
                  <button
                    type="button"
                    onClick={() => toggleShortlist(prop.id)}
                    className={`absolute top-4 right-4 p-2.5 rounded-full backdrop-blur-md transition-all cursor-pointer ${
                      shortlistIds.includes(prop.id)
                        ? 'bg-gold text-black shadow-lg shadow-gold/20'
                        : 'bg-black/60 text-zinc-300 hover:text-white border border-white/15'
                    }`}
                    title="Save property"
                  >
                    <Bookmark className={`h-4 w-4 ${shortlistIds.includes(prop.id) ? 'fill-black' : ''}`} />
                  </button>

                  {/* Bottom Image Overlay Tag */}
                  <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-xs text-zinc-300">
                    <span className="font-mono text-zinc-400 bg-black/60 px-2.5 py-1 rounded-md backdrop-blur-sm border border-white/10">
                      {prop.developer_name}
                    </span>
                    <span className="font-mono text-zinc-400 bg-black/60 px-2.5 py-1 rounded-md backdrop-blur-sm border border-white/10">
                      {prop.property_type}
                    </span>
                  </div>
                </div>

                {/* Content Details */}
                <div className="p-6 sm:p-8 space-y-6 flex-1 flex flex-col justify-between">
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <SourceBadge status="OFFICIAL SOURCE" sourceName="DLD Title Record" />
                      <span className="text-xs font-mono text-zinc-500">Ref: {prop.id}</span>
                    </div>

                    <h2 className="text-2xl font-bold text-white group-hover:text-gold transition-colors leading-snug">
                      {prop.title}
                    </h2>

                    <p className="text-sm text-zinc-400 line-clamp-2 leading-relaxed">
                      {prop.description}
                    </p>
                  </div>

                  {/* Tech Specs Bar */}
                  <div className="space-y-4 pt-5 border-t border-white/10">
                    <div className="grid grid-cols-3 gap-2 bg-zinc-900/60 p-3 rounded-2xl border border-white/5 text-center">
                      <div>
                        <div className="text-[10px] uppercase font-mono text-zinc-400">Bedrooms</div>
                        <div className="text-sm font-bold text-white mt-0.5">{prop.bedrooms} Bed</div>
                      </div>
                      <div>
                        <div className="text-[10px] uppercase font-mono text-zinc-400">Built-Up Area</div>
                        <div className="text-sm font-bold text-white mt-0.5">{prop.internal_area_sqft.toLocaleString()} sqft</div>
                      </div>
                      <div>
                        <div className="text-[10px] uppercase font-mono text-zinc-400">Tenure</div>
                        <div className="text-sm font-bold text-gold mt-0.5">Freehold</div>
                      </div>
                    </div>

                    {/* Price & CTA */}
                    <div className="flex items-center justify-between pt-2">
                      <div>
                        <div className="text-[10px] text-zinc-400 font-mono uppercase tracking-wider">Official Asking Price</div>
                        <div className="text-2xl sm:text-3xl font-bold text-white tabular-nums">
                          AED {prop.asking_price?.toLocaleString()}
                        </div>
                      </div>

                      <Link
                        href={`/properties/${prop.id}`}
                        className="px-5 py-3 rounded-full bg-white text-black hover:bg-zinc-200 text-xs font-bold uppercase tracking-wider flex items-center gap-2 transition-all shadow-lg hover:shadow-white/10 cursor-pointer"
                      >
                        <span>Dossier</span>
                        <ArrowRight className="h-3.5 w-3.5 text-black" />
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