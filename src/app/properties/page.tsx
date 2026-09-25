'use client'

import * as React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { VERIFIED_PROPERTIES } from '@/lib/data/properties'
import { SourceBadge } from '@/components/ui/source-badge'
import { useClient } from '@/lib/context/client-context'
import { useToast } from '@/components/ui/toast'
import {
  Search,
  Bookmark,
  RotateCcw,
  ArrowRight,
  Building
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
    <div className="flex flex-col min-h-screen bg-white text-text-primary">
      {/* 1. EDITORIAL HEADER */}
      <section className="pt-12 pb-8 border-b border-border bg-white">
        <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-3">
          <div className="flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-accent" />
            <span className="text-[11px] font-mono font-bold tracking-widest text-accent uppercase">
              VERIFIED INVENTORY
            </span>
          </div>

          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div>
              <h1 className="text-4xl sm:text-5xl font-black tracking-tight text-text-primary uppercase">
                PROPERTIES
              </h1>
              <p className="text-base sm:text-lg text-text-secondary mt-1">
                Selected Dubai opportunities.
              </p>
            </div>
            <div className="text-xs font-mono text-text-muted">
              Showing {filteredProperties.length} of {VERIFIED_PROPERTIES.length} verified assets
            </div>
          </div>
        </div>
      </section>

      {/* 2. RESTRAINED CONTROL BAR */}
      <section className="sticky top-16 z-30 bg-white/95 backdrop-blur-md border-b border-border py-3 px-4 sm:px-6 lg:px-8">
        <div className="w-full max-w-6xl mx-auto">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-3">
            {/* Search Input */}
            <div className="relative w-full lg:w-64">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-3.5 w-3.5 text-text-muted" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search..."
                className="w-full pl-9 pr-3 py-1.5 bg-surface rounded-lg border border-border text-xs text-text-primary placeholder:text-text-muted focus:outline-none focus:border-accent"
              />
            </div>

            {/* Restrained Filters: Area, Price, Property Type, Developer */}
            <div className="grid grid-cols-2 sm:flex sm:items-center gap-2 w-full lg:w-auto">
              <select
                value={selectedArea}
                onChange={(e) => setSelectedArea(e.target.value)}
                className="px-2.5 py-1.5 bg-surface rounded-lg border border-border text-xs font-medium text-text-secondary focus:outline-none w-full sm:w-auto"
              >
                <option value="ALL">All Areas</option>
                {uniqueAreas.map((area) => (
                  <option key={area} value={area}>{area}</option>
                ))}
              </select>

              <select
                value={priceRange}
                onChange={(e) => setPriceRange(e.target.value)}
                className="px-2.5 py-1.5 bg-surface rounded-lg border border-border text-xs font-medium text-text-secondary focus:outline-none w-full sm:w-auto"
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
                className="px-2.5 py-1.5 bg-surface rounded-lg border border-border text-xs font-medium text-text-secondary focus:outline-none w-full sm:w-auto"
              >
                <option value="ALL">All Types</option>
                {uniqueTypes.map((type) => (
                  <option key={type} value={type}>{type}</option>
                ))}
              </select>

              <select
                value={selectedDeveloper}
                onChange={(e) => setSelectedDeveloper(e.target.value)}
                className="px-2.5 py-1.5 bg-surface rounded-lg border border-border text-xs font-medium text-text-secondary focus:outline-none w-full sm:w-auto"
              >
                <option value="ALL">All Developers</option>
                {uniqueDevelopers.map((dev) => (
                  <option key={dev} value={dev}>{dev}</option>
                ))}
              </select>

              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="col-span-2 sm:col-span-1 px-2.5 py-1.5 bg-surface rounded-lg border border-border text-xs font-medium text-text-secondary focus:outline-none w-full sm:w-auto"
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
                className="p-1.5 rounded-lg border border-border bg-surface hover:bg-surface-elevated text-text-muted hover:text-text-primary text-xs flex items-center gap-1 transition-colors cursor-pointer"
                title="Reset Filters"
              >
                <RotateCcw className="h-3 w-3" />
                <span className="hidden sm:inline text-[11px]">Reset</span>
              </button>

              <button
                type="button"
                onClick={handleSaveCurrentSearch}
                className="px-2.5 py-1.5 rounded-lg border border-border bg-surface hover:bg-surface-elevated text-text-primary text-xs font-semibold flex items-center gap-1 transition-colors cursor-pointer"
              >
                <Bookmark className="h-3 w-3 text-accent" />
                <span className="text-[11px]">Save</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 3. 2-COLUMN EDITORIAL DESKTOP GRID */}
      <main className="w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        {filteredProperties.length === 0 ? (
          <div className="text-center py-16 border border-border rounded-2xl bg-surface space-y-3">
            <Building className="h-10 w-10 text-text-muted mx-auto" />
            <h3 className="text-lg font-bold text-text-primary">No Properties Matching Filters</h3>
            <p className="text-xs text-text-secondary max-w-sm mx-auto">
              Adjust your criteria to view available verified records.
            </p>
            <button
              type="button"
              onClick={handleResetFilters}
              className="px-5 py-2 rounded-lg bg-text-primary text-white text-xs font-bold uppercase tracking-wider hover:bg-black transition-colors"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {filteredProperties.map((prop) => (
              <div
                key={prop.id}
                className="border border-border rounded-2xl overflow-hidden bg-white hover:border-accent transition-all duration-300 flex flex-col justify-between group"
              >
                {/* Image */}
                <div className="relative aspect-[16/10] bg-surface-elevated overflow-hidden">
                  <Image
                    src={prop.images[0] || 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1200&q=80'}
                    alt={prop.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover group-hover:scale-102 transition-transform duration-500"
                  />
                  <div className="absolute top-3 left-3">
                    <span className="px-2.5 py-0.5 rounded-md text-[11px] font-bold bg-white/95 text-text-primary shadow-xs">
                      {prop.area_name}
                    </span>
                  </div>
                  <button
                    type="button"
                    onClick={() => toggleShortlist(prop.id)}
                    className={`absolute top-3 right-3 p-2 rounded-md transition-colors ${
                      shortlistIds.includes(prop.id)
                        ? 'bg-accent text-white'
                        : 'bg-white/90 text-text-secondary hover:text-text-primary'
                    }`}
                    title="Save property"
                  >
                    <Bookmark className="h-3.5 w-3.5" />
                  </button>
                </div>

                {/* Content */}
                <div className="p-6 space-y-4 flex-1 flex flex-col justify-between">
                  <div className="space-y-2">
                    <div className="flex items-center justify-between text-[11px] font-mono text-text-muted">
                      <span>{prop.developer_name}</span>
                      <SourceBadge status="OFFICIAL SOURCE" sourceName="DLD Title Record" />
                    </div>

                    <h2 className="text-xl font-bold text-text-primary group-hover:text-accent transition-colors leading-snug">
                      {prop.title}
                    </h2>

                    <p className="text-xs text-text-secondary line-clamp-2 leading-relaxed">
                      {prop.description}
                    </p>
                  </div>

                  <div className="space-y-3 pt-4 border-t border-border">
                    {/* Concise Specifications */}
                    <div className="flex items-center justify-between text-xs text-text-muted font-mono">
                      <span>{prop.bedrooms} Bed • {prop.internal_area_sqft.toLocaleString()} sqft</span>
                      <span>{prop.property_type}</span>
                    </div>

                    {/* Price & CTA */}
                    <div className="flex items-center justify-between pt-1">
                      <div>
                        <div className="text-[10px] text-text-muted font-mono uppercase">Asking Price</div>
                        <div className="text-xl font-black text-text-primary tabular-nums">
                          AED {prop.asking_price?.toLocaleString()}
                        </div>
                      </div>

                      <Link
                        href={`/properties/${prop.id}`}
                        className="px-4 py-2 rounded-lg bg-text-primary text-white hover:bg-black text-xs font-bold uppercase tracking-wider flex items-center gap-1.5 transition-colors"
                      >
                        <span>Dossier</span>
                        <ArrowRight className="h-3.5 w-3.5 text-accent" />
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