'use client'

import * as React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { VERIFIED_PROPERTIES } from '@/lib/data/properties'
import { useClient } from '@/lib/context/client-context'
import { ProvenanceTag } from '@/components/layout/layout-primitives'
import {
  Search,
  RotateCcw,
  ArrowRight,
  Building,
  Table as TableIcon,
  LayoutGrid,
} from 'lucide-react'

export default function PropertiesPage() {
  const [searchQuery, setSearchQuery] = React.useState('')
  const [selectedArea, setSelectedArea] = React.useState('ALL')
  const [selectedType, setSelectedType] = React.useState('ALL')
  const [priceRange, setPriceRange] = React.useState('ALL')
  const [selectedDeveloper, setSelectedDeveloper] = React.useState('ALL')
  const [sortBy, setSortBy] = React.useState('DEFAULT')
  const [viewMode, setViewMode] = React.useState<'table' | 'grid'>('table')

  const { formatCurrency } = useClient()

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
          p.property_type.toLowerCase().includes(q)
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

  return (
    <div className="flex flex-col min-h-screen bg-[#ffffff] text-[#111111]">
      
      {/* 1. EDITORIAL HEADER */}
      <section className="pt-12 pb-10 sm:pt-16 sm:pb-12 border-b border-[#e5e5ea] bg-[#fafaf8]">
        <div className="w-full max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          <div className="flex items-center justify-between">
            <span className="text-[10px] font-mono font-bold uppercase tracking-[0.2em] text-[#9f8144]">
              PROPERTY REGISTER &bull; STATUTORY INVENTORY
            </span>
            <div className="text-[11px] font-mono text-[#6b6b6b]">
              Showing <span className="text-[#111111] font-semibold">{filteredProperties.length}</span> of {VERIFIED_PROPERTIES.length} verified records
            </div>
          </div>

          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div>
              <h1 className="text-3xl sm:text-4xl font-semibold tracking-tight text-[#111111]">
                Curated Property Portfolio
              </h1>
              <p className="text-sm text-[#484848] max-w-2xl mt-1 leading-relaxed">
                Direct statutory title deeds, developer inventory records, and prime freehold penthouses with verified pricing and provenance.
              </p>
            </div>

            {/* View Mode Toggle */}
            <div className="flex items-center border border-[#e5e5ea] rounded bg-[#ffffff] p-0.5">
              <button
                onClick={() => setViewMode('table')}
                className={`p-1.5 rounded text-xs flex items-center gap-1.5 transition-colors ${
                  viewMode === 'table'
                    ? 'bg-[#111111] text-[#fafaf8]'
                    : 'text-[#6b6b6b] hover:text-[#111111]'
                }`}
                title="Directory Table View"
              >
                <TableIcon className="h-3.5 w-3.5" />
                <span className="text-[10px] font-mono font-medium hidden sm:inline">Register</span>
              </button>
              <button
                onClick={() => setViewMode('grid')}
                className={`p-1.5 rounded text-xs flex items-center gap-1.5 transition-colors ${
                  viewMode === 'grid'
                    ? 'bg-[#111111] text-[#fafaf8]'
                    : 'text-[#6b6b6b] hover:text-[#111111]'
                }`}
                title="Dossier Cards View"
              >
                <LayoutGrid className="h-3.5 w-3.5" />
                <span className="text-[10px] font-mono font-medium hidden sm:inline">Cards</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 2. RESTRAINED INSTITUTIONAL FILTER BAR */}
      <section className="sticky top-16 z-30 bg-[#ffffff] border-b border-[#e5e5ea] py-3.5 px-4 sm:px-6 lg:px-8">
        <div className="w-full max-w-[1240px] mx-auto">
          <div className="flex flex-col lg:flex-row items-stretch lg:items-center justify-between gap-3">
            
            {/* Search Input */}
            <div className="relative w-full lg:w-72">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-3.5 w-3.5 text-[#6b6b6b]" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search asset, district, developer..."
                className="w-full pl-9 pr-3 py-1.5 bg-[#ffffff] rounded border border-[#e5e5ea] text-xs text-[#111111] placeholder:text-[#8e8e93] focus:outline-none focus:border-[#111111]"
              />
            </div>

            {/* Select Dropdowns */}
            <div className="grid grid-cols-2 sm:flex sm:items-center gap-2">
              <select
                value={selectedArea}
                onChange={(e) => setSelectedArea(e.target.value)}
                className="px-2.5 py-1.5 bg-[#ffffff] rounded border border-[#e5e5ea] text-xs text-[#111111] focus:outline-none focus:border-[#111111] cursor-pointer"
              >
                <option value="ALL">All Districts</option>
                {uniqueAreas.map((area) => (
                  <option key={area} value={area}>{area}</option>
                ))}
              </select>

              <select
                value={priceRange}
                onChange={(e) => setPriceRange(e.target.value)}
                className="px-2.5 py-1.5 bg-[#ffffff] rounded border border-[#e5e5ea] text-xs text-[#111111] focus:outline-none focus:border-[#111111] cursor-pointer"
              >
                <option value="ALL">All Price Ranges</option>
                <option value="UNDER_25M">&lt; AED 25M</option>
                <option value="25M_50M">AED 25M – 50M</option>
                <option value="50M_100M">AED 50M – 100M</option>
                <option value="ABOVE_100M">&gt; AED 100M</option>
              </select>

              <select
                value={selectedType}
                onChange={(e) => setSelectedType(e.target.value)}
                className="px-2.5 py-1.5 bg-[#ffffff] rounded border border-[#e5e5ea] text-xs text-[#111111] focus:outline-none focus:border-[#111111] cursor-pointer"
              >
                <option value="ALL">All Asset Types</option>
                {uniqueTypes.map((type) => (
                  <option key={type} value={type}>{type}</option>
                ))}
              </select>

              <select
                value={selectedDeveloper}
                onChange={(e) => setSelectedDeveloper(e.target.value)}
                className="px-2.5 py-1.5 bg-[#ffffff] rounded border border-[#e5e5ea] text-xs text-[#111111] focus:outline-none focus:border-[#111111] cursor-pointer"
              >
                <option value="ALL">All Developers</option>
                {uniqueDevelopers.map((dev) => (
                  <option key={dev} value={dev}>{dev}</option>
                ))}
              </select>

              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="col-span-2 sm:col-span-1 px-2.5 py-1.5 bg-[#ffffff] rounded border border-[#e5e5ea] text-xs text-[#111111] focus:outline-none focus:border-[#111111] cursor-pointer font-mono"
              >
                <option value="DEFAULT">Sort: Default</option>
                <option value="PRICE_DESC">Price: High to Low</option>
                <option value="PRICE_ASC">Price: Low to High</option>
                <option value="AREA_DESC">Size: Largest</option>
              </select>

              <button
                type="button"
                onClick={handleResetFilters}
                className="p-1.5 rounded border border-[#e5e5ea] text-[#6b6b6b] hover:text-[#111111] hover:bg-[#f5f5f3] transition-colors"
                title="Reset Filters"
              >
                <RotateCcw className="h-3.5 w-3.5" />
              </button>
            </div>

          </div>
        </div>
      </section>

      {/* 3. PROPERTY REGISTER DISPLAY (Table or Cards) */}
      <main className="w-full max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8 py-10 flex-1">
        {filteredProperties.length === 0 ? (
          <div className="text-center py-20 border border-[#e5e5ea] rounded bg-[#fafaf8] p-8 space-y-4">
            <Building className="h-10 w-10 text-[#8e8e93] mx-auto" />
            <h3 className="text-lg font-semibold text-[#111111]">No Assets Matching Criteria</h3>
            <p className="text-xs text-[#6b6b6b] max-w-sm mx-auto">
              Please adjust your filters or reset to review all verified statutory records.
            </p>
            <button
              type="button"
              onClick={handleResetFilters}
              className="px-4 py-2 rounded bg-[#111111] text-[#fafaf8] text-xs font-medium"
            >
              Reset Filters
            </button>
          </div>
        ) : viewMode === 'table' ? (
          /* DIRECTORY TABLE VIEW */
          <div className="border border-[#e5e5ea] rounded divide-y divide-[#e5e5ea] bg-[#ffffff]">
            {/* Header */}
            <div className="hidden md:grid grid-cols-12 gap-4 px-6 py-3 bg-[#fafaf8] text-[10px] font-mono text-[#6b6b6b] uppercase tracking-wider font-semibold">
              <div className="col-span-4">Property Asset / District</div>
              <div className="col-span-2">Type / Beds</div>
              <div className="col-span-2">Internal Area</div>
              <div className="col-span-2 text-right">Asking Price</div>
              <div className="col-span-2 text-right">Action</div>
            </div>

            {/* Rows */}
            {filteredProperties.map((prop) => (
              <div
                key={prop.id}
                className="grid grid-cols-1 md:grid-cols-12 gap-3 md:gap-4 p-5 md:px-6 md:py-4 items-center hover:bg-[#fafaf8] transition-colors"
              >
                <div className="col-span-1 md:col-span-4 flex items-center gap-3.5">
                  <div className="relative w-12 h-12 rounded overflow-hidden bg-[#f5f5f3] shrink-0 border border-[#e5e5ea]">
                    <Image
                      src={prop.images[0] || 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=200&q=80'}
                      alt={prop.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <Link href={`/properties/${prop.id}`} className="text-sm font-semibold text-[#111111] hover:text-[#9f8144] line-clamp-1">
                      {prop.title}
                    </Link>
                    <span className="text-xs text-[#6b6b6b] font-mono block">
                      {prop.area_name} &bull; {prop.developer_name}
                    </span>
                  </div>
                </div>

                <div className="col-span-1 md:col-span-2 text-xs text-[#484848]">
                  <span className="md:hidden text-[#6b6b6b] font-mono text-[10px] mr-2">TYPE:</span>
                  {prop.property_type} &bull; {prop.bedrooms} Bed
                </div>

                <div className="col-span-1 md:col-span-2 text-xs font-mono text-[#484848]">
                  <span className="md:hidden text-[#6b6b6b] text-[10px] mr-2">AREA:</span>
                  {prop.internal_area_sqft.toLocaleString()} SQFT
                </div>

                <div className="col-span-1 md:col-span-2 text-left md:text-right">
                  <span className="md:hidden text-[#6b6b6b] font-mono text-[10px] mr-2">ASKING:</span>
                  <span className="text-sm font-bold text-[#111111] tabular-nums">
                    {formatCurrency(prop.asking_price)}
                  </span>
                </div>

                <div className="col-span-1 md:col-span-2 flex md:justify-end pt-2 md:pt-0">
                  <Link
                    href={`/properties/${prop.id}`}
                    className="px-3 py-1.5 rounded border border-[#e5e5ea] hover:border-[#111111] text-xs font-medium text-[#111111] hover:bg-[#ffffff] transition-colors inline-flex items-center gap-1"
                  >
                    <span>View Dossier</span>
                    <ArrowRight className="h-3 w-3" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        ) : (
          /* DOSSIER CARD GRID VIEW */
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProperties.map((prop) => (
              <div
                key={prop.id}
                className="bg-[#ffffff] rounded border border-[#e5e5ea] overflow-hidden flex flex-col justify-between"
              >
                <div>
                  <div className="relative aspect-[16/10] w-full bg-[#f5f5f3] overflow-hidden border-b border-[#e5e5ea]">
                    <Image
                      src={prop.images[0] || 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=600&q=80'}
                      alt={prop.title}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute top-2.5 left-2.5">
                      <ProvenanceTag sourceClass="LICENSED OPERATOR" sourceName={prop.developer_name} />
                    </div>
                  </div>

                  <div className="p-5 space-y-2">
                    <div className="text-[10px] font-mono text-[#6b6b6b]">
                      {prop.area_name} &bull; {prop.property_type}
                    </div>
                    <h3 className="text-base font-semibold text-[#111111] line-clamp-1">
                      {prop.title}
                    </h3>
                    <div className="text-xs font-mono text-[#484848] pt-1">
                      {prop.bedrooms} Bed &bull; {prop.bathrooms} Bath &bull; {prop.internal_area_sqft.toLocaleString()} SQFT
                    </div>
                  </div>
                </div>

                <div className="p-5 pt-0 border-t border-[#f5f5f3] mt-2 flex items-center justify-between">
                  <div>
                    <span className="text-[10px] font-mono uppercase text-[#6b6b6b] block">Asking Price</span>
                    <span className="text-sm font-bold text-[#111111] tabular-nums">
                      {formatCurrency(prop.asking_price)}
                    </span>
                  </div>
                  <Link
                    href={`/properties/${prop.id}`}
                    className="px-3 py-1.5 rounded border border-[#e5e5ea] hover:border-[#111111] text-xs font-medium text-[#111111] inline-flex items-center gap-1"
                  >
                    <span>Dossier &rarr;</span>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        )}
      </main>

    </div>
  )
}