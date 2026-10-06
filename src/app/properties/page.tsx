'use client'

import * as React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { VERIFIED_PROPERTIES } from '@/lib/data/properties'
import { useClient } from '@/lib/context/client-context'
import {
  Eyebrow,
  SourceBadge,
  PrimaryLink,
} from '@/components/layout/layout-primitives'
import { Search, RotateCcw, MapPin } from 'lucide-react'

export default function PropertiesPage() {
  const [searchQuery, setSearchQuery] = React.useState('')
  const [selectedDistrict, setSelectedDistrict] = React.useState('ALL')
  const [selectedType, setSelectedType] = React.useState('ALL')
  const [priceTier, setPriceTier] = React.useState('ALL')
  const { formatCurrency } = useClient()

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
      const pPrice = p.asking_price || 0
      const pTitle = p.title || ''
      const pDeveloper = p.developer_name || ''

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

      if (priceTier === 'UNDER_25M' && pPrice >= 25000000) return false
      if (priceTier === '25M_50M' && (pPrice < 25000000 || pPrice > 50000000)) return false
      if (priceTier === 'ABOVE_50M' && pPrice <= 50000000) return false

      return true
    })
  }, [searchQuery, selectedDistrict, selectedType, priceTier])

  const handleReset = () => {
    setSearchQuery('')
    setSelectedDistrict('ALL')
    setSelectedType('ALL')
    setPriceTier('ALL')
  }

  return (
    <div className="flex flex-col min-h-screen bg-[#08080a] text-[#f5f5f7]">
      
      {/* 1. EDITORIAL HEADER */}
      <section className="pt-16 pb-14 sm:pt-24 sm:pb-20 border-b border-white/10 bg-[#0d0d11]">
        <div className="w-full max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-16 space-y-6">
          <Eyebrow>PROPERTY DIRECTORY &bull; STATUTORY INVENTORY</Eyebrow>
          
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
            <div className="space-y-3">
              <h1 className="text-4xl sm:text-6xl lg:text-7xl font-light tracking-[-0.035em] text-[#f5f5f7]">
                PROPERTIES
              </h1>
              <p className="text-base sm:text-lg text-[#a1a1aa] font-light max-w-2xl leading-relaxed">
                Curated portfolio of prime Dubai penthouses, villas, and architectural residences with verified title deeds and published acquisition schedules.
              </p>
            </div>

            <div className="text-xs font-mono text-[#8e8e93] pb-1">
              Showing <span className="text-[#c9a962] font-semibold">{filteredProperties.length}</span> verified asset records
            </div>
          </div>
        </div>
      </section>

      {/* 2. RESTRAINED MINIMAL FILTER BAR */}
      <section className="sticky top-[72px] sm:top-[80px] z-30 bg-[#08080a]/95 backdrop-blur-md border-b border-white/10 py-3.5 px-6 sm:px-10 lg:px-16">
        <div className="w-full max-w-[1440px] mx-auto flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4">
          
          {/* Search */}
          <div className="relative w-full md:w-80">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 h-3.5 w-3.5 text-[#c9a962]" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search by development, district, developer..."
              className="w-full pl-9 pr-4 py-2 bg-[#131318] rounded-xs border border-white/10 text-xs text-[#f5f5f7] placeholder:text-[#636366] focus:outline-none focus:border-[#c9a962] transition-colors font-mono"
            />
          </div>

          {/* Filter dropdowns */}
          <div className="flex flex-wrap items-center gap-3">
            <select
              value={selectedDistrict}
              onChange={(e) => setSelectedDistrict(e.target.value)}
              className="px-3.5 py-2 bg-[#131318] rounded-xs border border-white/10 text-xs font-mono text-[#f5f5f7] focus:outline-none focus:border-[#c9a962] cursor-pointer"
            >
              <option value="ALL">All Districts</option>
              {uniqueDistricts.map((d) => (
                <option key={d} value={d}>{d}</option>
              ))}
            </select>

            <select
              value={selectedType}
              onChange={(e) => setSelectedType(e.target.value)}
              className="px-3.5 py-2 bg-[#131318] rounded-xs border border-white/10 text-xs font-mono text-[#f5f5f7] focus:outline-none focus:border-[#c9a962] cursor-pointer"
            >
              <option value="ALL">All Types</option>
              {uniqueTypes.map((t) => (
                <option key={t} value={t}>{t}</option>
              ))}
            </select>

            <select
              value={priceTier}
              onChange={(e) => setPriceTier(e.target.value)}
              className="px-3.5 py-2 bg-[#131318] rounded-xs border border-white/10 text-xs font-mono text-[#f5f5f7] focus:outline-none focus:border-[#c9a962] cursor-pointer"
            >
              <option value="ALL">All Price Tiers</option>
              <option value="UNDER_25M">&lt; AED 25M</option>
              <option value="25M_50M">AED 25M – 50M</option>
              <option value="ABOVE_50M">&gt; AED 50M</option>
            </select>

            <button
              onClick={handleReset}
              className="p-2 rounded-xs border border-white/10 text-[#8e8e93] hover:text-[#f5f5f7] hover:bg-white/5 transition-colors cursor-pointer"
              title="Reset Filters"
            >
              <RotateCcw className="h-3.5 w-3.5" />
            </button>
          </div>

        </div>
      </section>

      {/* 3. LARGE EDITORIAL PROPERTY ROWS */}
      <main className="w-full max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-16 py-14 sm:py-20 space-y-12 sm:space-y-16 flex-1">
        {filteredProperties.length === 0 ? (
          <div className="text-center py-24 border border-white/10 rounded-sm bg-[#0d0d11] p-10 space-y-4">
            <h3 className="text-xl font-light text-[#f5f5f7]">No Assets Matching Selection</h3>
            <p className="text-xs text-[#8e8e93] max-w-md mx-auto">
              Please adjust your filters or reset to view all verified statutory properties.
            </p>
            <button
              onClick={handleReset}
              className="px-6 py-2.5 rounded-xs bg-[#c9a962] text-[#08080a] text-xs font-mono uppercase tracking-wider font-semibold cursor-pointer"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          filteredProperties.map((prop) => {
            const price = prop.asking_price || 0
            const district = prop.area_name || ''
            const type = prop.property_type || ''
            const developer = prop.developer_name || ''
            const size = prop.internal_area_sqft || 0
            const beds = prop.bedrooms || 0

            return (
              <article
                key={prop.id}
                className="group border-b border-white/10 pb-12 sm:pb-16 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center"
              >
                {/* Architectural Image */}
                <div className="lg:col-span-7">
                  <Link href={`/properties/${prop.id}`} className="block relative aspect-[16/10] w-full overflow-hidden rounded-sm bg-[#111116] border border-white/10 group-hover:border-[#c9a962]/50 transition-all">
                    <Image
                      src={prop.images[0] || 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1400&q=85'}
                      alt={prop.title}
                      fill
                      sizes="(max-width: 1024px) 100vw, 60vw"
                      className="object-cover transition-transform duration-700 ease-out group-hover:scale-105 brightness-90 group-hover:brightness-100"
                    />
                    <div className="absolute top-4 left-4">
                      <SourceBadge sourceClass="OFFICIAL CORPORATE" sourceName={developer} />
                    </div>
                  </Link>
                </div>

                {/* Editorial Metadata & Context */}
                <div className="lg:col-span-5 space-y-5">
                  <div className="space-y-2">
                    <div className="flex items-center gap-2 text-xs font-mono uppercase text-[#c9a962]">
                      <MapPin className="h-3.5 w-3.5" />
                      <span>{district}</span>
                      <span className="text-[#636366]">&bull;</span>
                      <span>{type}</span>
                    </div>

                    <h2 className="text-2xl sm:text-3xl font-light tracking-tight text-[#f5f5f7] group-hover:text-[#c9a962] transition-colors">
                      <Link href={`/properties/${prop.id}`}>
                        {prop.title}
                      </Link>
                    </h2>
                  </div>

                  <p className="text-sm text-[#a1a1aa] font-light leading-relaxed line-clamp-3">
                    {prop.unit_descriptor || prop.editorial_display_name}
                  </p>

                  <div className="pt-2 border-t border-white/10 grid grid-cols-2 gap-4 text-xs font-mono">
                    <div>
                      <span className="text-[#71717a] block uppercase text-[10px]">INTERNAL AREA</span>
                      <span className="text-[#f5f5f7] font-light">{size.toLocaleString()} SQ. FT</span>
                    </div>
                    <div>
                      <span className="text-[#71717a] block uppercase text-[10px]">CONFIGURATION</span>
                      <span className="text-[#f5f5f7] font-light">{beds} Bedrooms</span>
                    </div>
                  </div>

                  <div className="pt-4 flex items-center justify-between">
                    <div>
                      <span className="text-[10px] font-mono uppercase text-[#71717a] block">ASKING VALUATION</span>
                      <span className="text-xl sm:text-2xl font-light text-[#f5f5f7] font-mono tabular-nums">
                        {formatCurrency(price)}
                      </span>
                    </div>

                    <PrimaryLink href={`/properties/${prop.id}`}>
                      View Dossier
                    </PrimaryLink>
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