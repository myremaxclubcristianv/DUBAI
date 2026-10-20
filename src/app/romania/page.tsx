'use client'

import * as React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { ROMANIA_PROPERTIES } from '@/lib/data/romania-properties'
import {
  Search,
  SlidersHorizontal,
  MapPin,
  ArrowRight,
  ShieldCheck,
  RotateCcw,
  CheckCircle2,
  Scale,
} from 'lucide-react'

export default function RomaniaCatalogPage() {
  const [selectedCity, setSelectedCity] = React.useState<string>('ALL')
  const [selectedListingType, setSelectedListingType] = React.useState<string>('ALL')
  const [selectedPropertyType, setSelectedPropertyType] = React.useState<string>('ALL')
  const [priceTier, setPriceTier] = React.useState<string>('ALL')
  const [currencyMode, setCurrencyMode] = React.useState<'EUR' | 'RON'>('EUR')
  const [searchQuery, setSearchQuery] = React.useState<string>('')

  const uniqueCities = React.useMemo(() => {
    return Array.from(new Set(ROMANIA_PROPERTIES.map((p) => p.city))).filter(Boolean).sort()
  }, [])

  const uniqueTypes = React.useMemo(() => {
    return Array.from(new Set(ROMANIA_PROPERTIES.map((p) => p.property_type))).filter(Boolean).sort()
  }, [])

  const filteredProperties = React.useMemo(() => {
    return ROMANIA_PROPERTIES.filter((p) => {
      // City filter
      if (selectedCity !== 'ALL' && p.city !== selectedCity) return false

      // Listing type filter (Sale vs Rent)
      if (selectedListingType !== 'ALL' && p.listing_type !== selectedListingType) return false

      // Property type filter
      if (selectedPropertyType !== 'ALL' && p.property_type !== selectedPropertyType) return false

      // Price tier filter (in EUR)
      const pEur = p.price_eur || 0
      if (priceTier === 'UNDER_200K' && (pEur === 0 || pEur >= 200000)) return false
      if (priceTier === '200K_500K' && (pEur < 200000 || pEur > 500000)) return false
      if (priceTier === 'ABOVE_500K' && pEur <= 500000) return false
      if (priceTier === 'ON_REQUEST' && pEur > 0) return false

      // Free text search
      if (searchQuery.trim() !== '') {
        const q = searchQuery.toLowerCase()
        const matchTitle = p.title.toLowerCase().includes(q)
        const matchCity = p.city.toLowerCase().includes(q)
        const matchCounty = p.county.toLowerCase().includes(q)
        const matchType = p.property_type.toLowerCase().includes(q)
        if (!matchTitle && !matchCity && !matchCounty && !matchType) return false
      }

      return true
    })
  }, [selectedCity, selectedListingType, selectedPropertyType, priceTier, searchQuery])

  const handleReset = () => {
    setSelectedCity('ALL')
    setSelectedListingType('ALL')
    setSelectedPropertyType('ALL')
    setPriceTier('ALL')
    setSearchQuery('')
  }

  const formatPrice = (pEur?: number, pRon?: number, isRent?: boolean) => {
    if (!pEur && !pRon) return 'Preț la cerere'
    if (currencyMode === 'RON' && pRon) {
      return isRent ? `${pRon.toLocaleString('ro-RO')} RON / lună` : `${pRon.toLocaleString('ro-RO')} RON`
    }
    return isRent ? `€${pEur?.toLocaleString('ro-RO')} / lună` : `€${pEur?.toLocaleString('ro-RO')}`
  }

  return (
    <div className="flex flex-col min-h-screen bg-white text-slate-950 selection:bg-slate-900 selection:text-white">
      {/* 1. EDITORIAL HEADER */}
      <section className="border-b border-slate-200 bg-slate-50/70 pt-16 pb-12 sm:pt-20 sm:pb-16">
        <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-10 lg:px-16 space-y-6">
          <div className="flex flex-wrap items-center gap-3 text-xs font-mono">
            <span className="px-3 py-1 bg-white border border-slate-200 text-slate-800 uppercase tracking-widest font-semibold flex items-center gap-1.5">
              <ShieldCheck className="h-3.5 w-3.5 text-emerald-700" />
              <span>Catalog Imobiliar România</span>
            </span>
            <span className="px-3 py-1 bg-white border border-slate-200 text-slate-600 uppercase tracking-widest hidden sm:inline-block">
              {ROMANIA_PROPERTIES.length} Proprietăți Autentice
            </span>
            <span className="px-3 py-1 bg-slate-900 text-white uppercase tracking-widest font-semibold">
              HomeFind Syndicate
            </span>
            <Link
              href="/investment/calculators#compare-markets"
              className="px-3 py-1 bg-amber-50 border border-amber-200 text-amber-900 uppercase tracking-widest font-semibold hover:bg-amber-100 transition-colors flex items-center gap-1"
            >
              <Scale className="h-3 w-3 text-amber-700" />
              <span>Comparație Dubai vs. România</span>
            </Link>
          </div>

          <div className="space-y-4 max-w-4xl">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-light tracking-tight text-slate-950 font-serif">
              Proprietăți Premium în România
            </h1>
            <p className="text-base sm:text-lg text-slate-600 font-light leading-relaxed max-w-3xl">
              Portofoliu imobiliar selectat în București (Floreasca, Primăverii, Herăstrău), Ilfov (Voluntari, Pipera, Corbeanca), Brașov și litoralul Mării Negre. Catalog complet izolat de portofoliul Dubai, cu prețuri exprimate în EUR și RON.
            </p>
          </div>

          <div className="pt-2 flex flex-wrap items-center gap-6 text-xs font-mono text-slate-600 border-t border-slate-200">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="h-3.5 w-3.5 text-emerald-700" />
              <span>Intabulare &amp; Cadastru Verificate</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="h-3.5 w-3.5 text-emerald-700" />
              <span>Proveniență Certificată HomeFind</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="h-3.5 w-3.5 text-emerald-700" />
              <span>Date Fiscale ANCPI &amp; Curs BNR</span>
            </div>
          </div>
        </div>
      </section>

      {/* 2. REFINED FILTER BAR */}
      <section className="sticky top-[76px] sm:top-[80px] z-40 bg-white/95 backdrop-blur-md border-b border-slate-200 py-4 transition-all shadow-2xs">
        <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-10 lg:px-16 flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4">
          
          {/* Search Input */}
          <div className="relative w-full md:w-80">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 h-3.5 w-3.5 text-slate-400" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Căutare după oraș, zonă, titlu..."
              className="w-full pl-9 pr-4 py-2 bg-slate-50 border border-slate-200 text-xs text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-slate-900 focus:bg-white transition-colors font-mono"
            />
          </div>

          {/* Filter Selectors & Currency Toggle */}
          <div className="flex flex-wrap items-center gap-2.5">
            <div className="flex items-center gap-1.5 text-[10px] font-mono text-slate-400 uppercase tracking-wider hidden lg:flex">
              <SlidersHorizontal className="h-3 w-3 text-slate-500" />
              <span>Filtrează:</span>
            </div>

            {/* City */}
            <select
              value={selectedCity}
              onChange={(e) => setSelectedCity(e.target.value)}
              className="px-3 py-2 bg-slate-50 border border-slate-200 text-xs font-mono text-slate-800 focus:outline-none focus:border-slate-900 cursor-pointer"
            >
              <option value="ALL">Toate Orașele ({uniqueCities.length})</option>
              {uniqueCities.map((c) => (
                <option key={c} value={c}>{c}</option>
              ))}
            </select>

            {/* Sale vs Rent */}
            <select
              value={selectedListingType}
              onChange={(e) => setSelectedListingType(e.target.value)}
              className="px-3 py-2 bg-slate-50 border border-slate-200 text-xs font-mono text-slate-800 focus:outline-none focus:border-slate-900 cursor-pointer"
            >
              <option value="ALL">Vânzare &amp; Închiriere</option>
              <option value="Sale">Vânzare (46)</option>
              <option value="Rent">Închiriere (9)</option>
            </select>

            {/* Property Type */}
            <select
              value={selectedPropertyType}
              onChange={(e) => setSelectedPropertyType(e.target.value)}
              className="px-3 py-2 bg-slate-50 border border-slate-200 text-xs font-mono text-slate-800 focus:outline-none focus:border-slate-900 cursor-pointer"
            >
              <option value="ALL">Toate Tipologiile</option>
              {uniqueTypes.map((t) => (
                <option key={t} value={t}>{t}</option>
              ))}
            </select>

            {/* Price Tier */}
            <select
              value={priceTier}
              onChange={(e) => setPriceTier(e.target.value)}
              className="px-3 py-2 bg-slate-50 border border-slate-200 text-xs font-mono text-slate-800 focus:outline-none focus:border-slate-900 cursor-pointer"
            >
              <option value="ALL">Toate Prețurile</option>
              <option value="UNDER_200K">&lt; €200.000</option>
              <option value="200K_500K">€200.000 – €500.000</option>
              <option value="ABOVE_500K">&gt; €500.000</option>
              <option value="ON_REQUEST">Preț la cerere</option>
            </select>

            {/* Currency Mode Switcher */}
            <div className="flex items-center border border-slate-200 bg-slate-50 text-xs font-mono">
              <button
                onClick={() => setCurrencyMode('EUR')}
                className={`px-2.5 py-1.5 transition-colors cursor-pointer ${
                  currencyMode === 'EUR' ? 'bg-slate-900 text-white font-bold' : 'text-slate-600 hover:text-slate-950'
                }`}
              >
                EUR (€)
              </button>
              <button
                onClick={() => setCurrencyMode('RON')}
                className={`px-2.5 py-1.5 border-l border-slate-200 transition-colors cursor-pointer ${
                  currencyMode === 'RON' ? 'bg-slate-900 text-white font-bold' : 'text-slate-600 hover:text-slate-950'
                }`}
              >
                RON (lei)
              </button>
            </div>

            <button
              onClick={handleReset}
              className="p-2 border border-slate-200 text-slate-500 hover:text-slate-900 hover:bg-slate-100 transition-colors cursor-pointer"
              title="Resetează Filtrele"
            >
              <RotateCcw className="h-3.5 w-3.5" />
            </button>
          </div>
        </div>
      </section>

      {/* 3. PROPERTY DOSSIER GRID */}
      <main className="w-full max-w-[1440px] mx-auto px-4 sm:px-10 lg:px-16 py-14 sm:py-20 space-y-12 sm:space-y-16 flex-1">
        
        {/* Isolation Disclosure */}
        <div className="p-4 sm:p-5 bg-slate-50 border border-slate-200 text-xs text-slate-600 font-light leading-relaxed space-y-1 shadow-2xs">
          <span className="font-mono text-[10px] uppercase tracking-wider text-slate-900 font-bold block">
            Secțiune Teritorială Autonomă &bull; România
          </span>
          <p>
            Acest catalog conține exclusiv proprietăți imobiliare situate pe teritoriul României, sincronizate direct din platforma HomeFind. Pentru achiziții imobiliare în Dubai și analiză fiscală comparativă (TVA, impozit pe venit, randamente), accesați secțiunea principală a platformei.
          </p>
        </div>

        {filteredProperties.length === 0 ? (
          <div className="text-center py-24 border border-slate-200 bg-slate-50 p-10 space-y-4">
            <h3 className="text-xl font-light text-slate-950 font-serif">Nicio proprietate nu corespunde selecției</h3>
            <p className="text-xs text-slate-500 max-w-md mx-auto">
              Vă rugăm să ajustați criteriile de căutare sau să resetați filtrele pentru a vizualiza întregul portofoliu din România.
            </p>
            <button
              onClick={handleReset}
              className="px-6 py-2.5 bg-slate-950 text-white text-xs font-mono uppercase tracking-wider font-semibold cursor-pointer hover:bg-slate-800 transition-colors"
            >
              Resetează Filtrele
            </button>
          </div>
        ) : (
          filteredProperties.map((prop, idx) => {
            const isRent = prop.listing_type === 'Rent'
            const displayPrice = formatPrice(prop.price_eur, prop.price_ron, isRent)

            return (
              <article
                key={prop.id}
                className="group border-b border-slate-200 pb-12 sm:pb-16 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center"
              >
                {/* Image Container (7 Columns) */}
                <div className="lg:col-span-7">
                  <Link
                    href={`/romania/properties/${prop.id}`}
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
                        {prop.city} &bull; Jud. {prop.county}
                      </span>
                      <span className={`px-2.5 py-1 text-[10px] font-mono font-semibold uppercase border ${
                        isRent ? 'bg-blue-50 text-blue-900 border-blue-200' : 'bg-white text-emerald-800 border-slate-200'
                      }`}>
                        {isRent ? 'Închiriere' : 'Vânzare'}
                      </span>
                    </div>
                    <div className="absolute bottom-3 right-3 px-2 py-0.5 bg-slate-950/80 text-[9px] font-mono text-slate-300">
                      DOSAR RO-{String(idx + 1).padStart(2, '0')}
                    </div>
                  </Link>
                </div>

                {/* Metadata & Valuation Plate (5 Columns) */}
                <div className="lg:col-span-5 space-y-5">
                  <div className="space-y-2">
                    <div className="flex items-center gap-2 text-xs font-mono uppercase text-slate-600 font-semibold">
                      <MapPin className="h-3.5 w-3.5 text-slate-900" />
                      <span className="text-slate-950">{prop.city}</span>
                      <span className="text-slate-300">&bull;</span>
                      <span>{prop.property_type}</span>
                    </div>

                    <h2 className="text-2xl sm:text-3xl font-light tracking-tight text-slate-950 group-hover:text-slate-600 transition-colors font-serif">
                      <Link href={`/romania/properties/${prop.id}`}>
                        {prop.title}
                      </Link>
                    </h2>
                  </div>

                  <p className="text-sm text-slate-600 font-light leading-relaxed line-clamp-3">
                    {prop.description}
                  </p>

                  <div className="pt-2 border-t border-slate-100 grid grid-cols-2 gap-4 text-xs font-mono">
                    <div>
                      <span className="text-slate-400 block uppercase text-[10px]">SUPRAFAȚĂ UTILĂ</span>
                      <span className="text-slate-950 font-semibold">{prop.surface_sqm} MP ({prop.surface_sqft.toLocaleString()} SQ. FT)</span>
                    </div>
                    <div>
                      <span className="text-slate-400 block uppercase text-[10px]">COMPARTIMENTARE</span>
                      <span className="text-slate-950 font-semibold">{prop.rooms} Camere &bull; {prop.bedrooms} Dormitoare</span>
                    </div>
                  </div>

                  <div className="pt-4 flex items-center justify-between border-t border-slate-100">
                    <div>
                      <span className="text-[10px] font-mono uppercase text-slate-400 block font-semibold">
                        {isRent ? 'CHIRIE SOLICITATĂ' : 'PREȚ SOLICITAT'}
                      </span>
                      <span className="text-xl sm:text-2xl font-light text-slate-950 font-mono tabular-nums font-bold">
                        {displayPrice}
                      </span>
                    </div>

                    <Link
                      href={`/romania/properties/${prop.id}`}
                      className="inline-flex items-center gap-2 px-5 py-2.5 bg-slate-950 hover:bg-slate-800 text-white text-xs font-mono uppercase tracking-[0.14em] font-semibold transition-colors shadow-2xs"
                    >
                      <span>VEZI DOSAR</span>
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
