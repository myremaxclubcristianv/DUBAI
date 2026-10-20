'use client'

import * as React from 'react'
import { useParams } from 'next/navigation'
import Link from 'next/link'
import Image from 'next/image'
import { getRomaniaPropertyById, ROMANIA_PROPERTIES } from '@/lib/data/romania-properties'
import { ContactModal } from '@/components/layout/contact-modal'
import {
  ArrowLeft,
  ShieldCheck,
  Share2,
  MapPin,
  Check,
  CheckCircle2,
  Scale,
} from 'lucide-react'

export default function RomaniaPropertyDetailPage() {
  const params = useParams()
  const id = params?.id as string
  const property = getRomaniaPropertyById(id) || ROMANIA_PROPERTIES[0]

  const [activeImageIndex, setActiveImageIndex] = React.useState(0)
  const [copiedShare, setCopiedShare] = React.useState(false)
  const [isContactModalOpen, setIsContactModalOpen] = React.useState(false)
  const [currencyMode, setCurrencyMode] = React.useState<'EUR' | 'RON'>('EUR')

  const isRent = property.listing_type === 'Rent'
  const pEur = property.price_eur || 0
  const pRon = property.price_ron || Math.round(pEur * 4.9765)

  // Romanian Statutory Acquisition Costs Calculation (for Sales)
  const notaryFee = Math.round(pEur * 0.012) // ~1.2% notary scale
  const ancpiFee = Math.round(pEur * 0.0015) // 0.15% ANCPI registration for individuals
  const agencyCommission = Math.round(pEur * 0.02) // ~2% standard agency fee
  const totalAcquisitionEur = pEur + notaryFee + ancpiFee + agencyCommission

  const images = property.images && property.images.length > 0 ? property.images : [
    'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1600&q=85'
  ]

  const handleShare = async () => {
    if (typeof window !== 'undefined') {
      try {
        if (navigator.share) {
          await navigator.share({
            title: `${property.title} | Catalog România`,
            text: `Dosar imobiliar verificat pentru ${property.title} în ${property.city}.`,
            url: window.location.href,
          })
        } else {
          await navigator.clipboard.writeText(window.location.href)
          setCopiedShare(true)
          setTimeout(() => setCopiedShare(false), 2500)
        }
      } catch {
        await navigator.clipboard.writeText(window.location.href)
        setCopiedShare(true)
        setTimeout(() => setCopiedShare(false), 2500)
      }
    }
  }

  return (
    <div className="flex flex-col min-h-screen bg-white text-slate-950 selection:bg-slate-900 selection:text-white">
      
      {/* 1. TOP BREADCRUMB BAR */}
      <div className="border-b border-slate-200 bg-slate-50/70 py-3.5">
        <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-10 lg:px-16 flex items-center justify-between font-mono text-xs">
          <Link
            href="/romania"
            className="inline-flex items-center gap-2 uppercase tracking-wider text-slate-600 hover:text-slate-950 transition-colors"
          >
            <ArrowLeft className="h-3.5 w-3.5" />
            <span>Înapoi la Catalogul România</span>
          </Link>
          <div className="flex items-center gap-3">
            <span className="px-2.5 py-1 bg-white border border-slate-200 text-slate-900 font-semibold text-[10px] uppercase">
              {property.city} &bull; Jud. {property.county}
            </span>
            <span className="px-2.5 py-1 bg-slate-950 text-white font-semibold text-[10px] uppercase">
              {isRent ? 'Închiriere' : 'Vânzare'}
            </span>
          </div>
        </div>
      </div>

      {/* 2. PROPERTY HERO HEADER & VALUATION PLATE */}
      <section className="py-10 sm:py-14 bg-white border-b border-slate-200">
        <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-10 lg:px-16 space-y-8">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 pb-6 border-b border-slate-100">
            <div className="space-y-3 max-w-3xl">
              <div className="flex items-center gap-2.5 text-xs font-mono uppercase text-slate-600 font-semibold">
                <MapPin className="h-3.5 w-3.5 text-slate-900" />
                <span>{property.address || `${property.city}, Jud. ${property.county}`}</span>
                <span className="text-slate-300">&bull;</span>
                <span>{property.property_type}</span>
              </div>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-light text-slate-950 font-serif tracking-tight leading-tight">
                {property.title}
              </h1>
              <div className="flex items-center gap-4 pt-2">
                <button
                  onClick={handleShare}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 border border-slate-200 bg-white hover:bg-slate-50 text-slate-700 text-xs font-mono uppercase tracking-wider font-semibold transition-colors cursor-pointer"
                >
                  {copiedShare ? (
                    <>
                      <Check className="h-3.5 w-3.5 text-emerald-600" />
                      <span>Link Copiat</span>
                    </>
                  ) : (
                    <>
                      <Share2 className="h-3.5 w-3.5" />
                      <span>Distribuie Dosar</span>
                    </>
                  )}
                </button>

                <button
                  onClick={() => setIsContactModalOpen(true)}
                  className="inline-flex items-center gap-1.5 px-4 py-1.5 bg-slate-950 hover:bg-slate-800 text-white text-xs font-mono uppercase tracking-wider font-semibold transition-all cursor-pointer shadow-2xs"
                >
                  <span>Solicită Vizionare / Informații</span>
                </button>
              </div>
            </div>

            {/* Price Box with Currency Switcher */}
            <div className="text-left lg:text-right font-mono space-y-2 p-5 bg-slate-50 border border-slate-200 shadow-2xs shrink-0">
              <div className="flex items-center lg:justify-end gap-2">
                <span className="text-[10px] text-slate-500 uppercase tracking-wider font-semibold">
                  {isRent ? 'Chirie Lunară' : 'Preț Solicitat'}
                </span>
                <div className="flex items-center border border-slate-200 bg-white text-[10px]">
                  <button
                    onClick={() => setCurrencyMode('EUR')}
                    className={`px-2 py-0.5 ${currencyMode === 'EUR' ? 'bg-slate-900 text-white font-bold' : 'text-slate-600'}`}
                  >
                    EUR
                  </button>
                  <button
                    onClick={() => setCurrencyMode('RON')}
                    className={`px-2 py-0.5 border-l border-slate-200 ${currencyMode === 'RON' ? 'bg-slate-900 text-white font-bold' : 'text-slate-600'}`}
                  >
                    RON
                  </button>
                </div>
              </div>

              <div className="text-2xl sm:text-4xl font-light text-slate-950 tabular-nums font-bold">
                {pEur > 0 ? (
                  currencyMode === 'RON'
                    ? `${pRon.toLocaleString('ro-RO')} RON${isRent ? ' / lună' : ''}`
                    : `€${pEur.toLocaleString('ro-RO')}${isRent ? ' / lună' : ''}`
                ) : (
                  'Preț la cerere'
                )}
              </div>

              {pEur > 0 && (
                <div className="text-xs text-slate-600 font-semibold">
                  {currencyMode === 'RON'
                    ? `€${pEur.toLocaleString('ro-RO')} (echivalent BNR)`
                    : `${pRon.toLocaleString('ro-RO')} RON (1 EUR = 4.97 RON)`}
                </div>
              )}
            </div>
          </div>

          {/* Image Gallery */}
          <div className="space-y-3">
            <div className="relative aspect-[16/9] sm:aspect-[21/9] w-full overflow-hidden bg-slate-100 border border-slate-200 shadow-md">
              <Image
                src={images[activeImageIndex] || images[0]}
                alt={property.title}
                fill
                priority
                sizes="(max-width: 1440px) 100vw, 1440px"
                className="object-cover"
              />
              <div className="absolute bottom-3 right-3 px-2.5 py-1 bg-slate-950/80 text-[9px] font-mono text-slate-300">
                FOTO {activeImageIndex + 1} DIN {images.length}
              </div>
            </div>

            {images.length > 1 && (
              <div className="flex gap-3 overflow-x-auto pb-2">
                {images.map((img, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveImageIndex(idx)}
                    className={`relative aspect-[16/10] w-28 sm:w-36 shrink-0 overflow-hidden border transition-all cursor-pointer ${
                      activeImageIndex === idx
                        ? 'border-slate-950 ring-2 ring-slate-950'
                        : 'border-slate-200 opacity-65 hover:opacity-100'
                    }`}
                  >
                    <Image
                      src={img}
                      alt={`Foto ${idx + 1}`}
                      fill
                      sizes="144px"
                      className="object-cover"
                    />
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>
      </section>

      {/* 3. TECHNICAL SPECIFICATIONS & DESCRIPTION */}
      <section className="py-16 sm:py-20 bg-slate-50/60 border-b border-slate-200">
        <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-10 lg:px-16 grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Description & Features (7 cols) */}
          <div className="lg:col-span-7 space-y-8">
            <div className="space-y-3">
              <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-slate-500 font-semibold block">
                DESCRIEREA PROPRIETĂȚII
              </span>
              <h2 className="text-2xl sm:text-3xl font-light text-slate-950 font-serif">
                Prezentare Generală
              </h2>
              <div className="text-sm text-slate-700 font-light leading-relaxed whitespace-pre-line pt-2">
                {property.description}
              </div>
            </div>

            {/* Features list */}
            {property.features && property.features.length > 0 && (
              <div className="space-y-3 pt-4 border-t border-slate-200">
                <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-slate-500 font-semibold block">
                  CARACTERISTICI PRINCIPALE
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {property.features.map((feat, fIdx) => (
                    <div key={fIdx} className="flex items-center gap-2 p-3 bg-white border border-slate-200 text-xs font-mono text-slate-800">
                      <CheckCircle2 className="h-4 w-4 text-emerald-700 shrink-0" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Technical Specs (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-slate-500 font-semibold block">
              FIȘĂ TEHNICĂ IMOBILIARĂ
            </span>
            <div className="divide-y divide-slate-200 border border-slate-200 bg-white p-6 font-mono text-xs shadow-2xs">
              {property.property_type === 'Land' ? (
                <>
                  <div className="flex justify-between py-3">
                    <span className="text-slate-500 uppercase">Suprafață Teren</span>
                    <span className="text-slate-950 font-bold">
                      {property.surface_sqm >= 10000
                        ? `${(property.surface_sqm / 10000).toLocaleString('ro-RO')} HA (${property.surface_sqm.toLocaleString('ro-RO')} MP)`
                        : `${property.surface_sqm.toLocaleString('ro-RO')} MP (${property.surface_sqft.toLocaleString()} SQ. FT)`}
                    </span>
                  </div>
                  <div className="flex justify-between py-3">
                    <span className="text-slate-500 uppercase">Regim Urbanistic</span>
                    <span className="text-slate-950 font-bold">Teren Intravilan / Proiect Investiție</span>
                  </div>
                  <div className="flex justify-between py-3">
                    <span className="text-slate-500 uppercase">Documentație</span>
                    <span className="text-slate-950 font-bold">Cadastru &amp; Intabulare / CU / PUZ</span>
                  </div>
                </>
              ) : (
                <>
                  <div className="flex justify-between py-3">
                    <span className="text-slate-500 uppercase">Suprafață Utilă</span>
                    <span className="text-slate-950 font-bold">{property.surface_sqm} MP ({property.surface_sqft.toLocaleString()} SQ. FT)</span>
                  </div>
                  <div className="flex justify-between py-3">
                    <span className="text-slate-500 uppercase">Număr Camere</span>
                    <span className="text-slate-950 font-bold">{property.rooms} Camere</span>
                  </div>
                  <div className="flex justify-between py-3">
                    <span className="text-slate-500 uppercase">Dormitoare</span>
                    <span className="text-slate-950 font-bold">{property.bedrooms} Dormitoare</span>
                  </div>
                  <div className="flex justify-between py-3">
                    <span className="text-slate-500 uppercase">Băi</span>
                    <span className="text-slate-950 font-bold">{property.bathrooms} Băi</span>
                  </div>
                </>
              )}
              <div className="flex justify-between py-3">
                <span className="text-slate-500 uppercase">Tip Imobil</span>
                <span className="text-slate-950 font-bold">{property.property_type}</span>
              </div>
              <div className="flex justify-between py-3">
                <span className="text-slate-500 uppercase">Oraș &bull; Județ</span>
                <span className="text-slate-950 font-bold">{property.city}, Jud. {property.county}</span>
              </div>
              <div className="flex justify-between py-3">
                <span className="text-slate-500 uppercase">Regim Tranzacție</span>
                <span className="text-slate-950 font-bold">{isRent ? 'Închiriere' : 'Vânzare'}</span>
              </div>
            </div>

            {/* Provenance Box */}
            <div className="p-5 bg-white border border-slate-200 space-y-2 text-xs font-mono">
              <div className="flex items-center gap-2 text-slate-900 font-bold uppercase text-[10px]">
                <ShieldCheck className="h-4 w-4 text-emerald-700" />
                <span>Proveniență &amp; Autenticitate Date</span>
              </div>
              <p className="text-slate-600 text-[11px] leading-relaxed font-light">
                {property.provenance.notes}
              </p>
              <div className="pt-2 text-[10px] text-slate-400">
                Sursă: {property.provenance.source_name} &bull; Referință: {property.provenance.source_reference}
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* 4. STATUTORY CONVEYANCING SCHEDULE (ROMANIA) */}
      {!isRent && pEur > 0 && (
        <section className="py-16 sm:py-20 bg-white border-b border-slate-200">
          <div className="w-full max-w-[1120px] mx-auto px-4 sm:px-10 lg:px-16 space-y-8">
            <div className="space-y-2">
              <span className="text-[10px] font-mono uppercase tracking-[0.24em] text-slate-500 font-semibold block">
                CADRU FISCAL &bull; COSTURI ESTIMATE DE ACHIZIȚIE ÎN ROMÂNIA
              </span>
              <h2 className="text-2xl sm:text-3xl font-light text-slate-950 font-serif">
                Estimare Costuri Notariale &amp; Taxe de Intabulare
              </h2>
              <p className="text-sm text-slate-600 font-light max-w-2xl leading-relaxed">
                Calcul estimativ conform grilei notariale UNNPR și tarifelor Agenției Naționale de Cadastru și Publicitate Imobiliară (ANCPI).
              </p>
            </div>

            <div className="p-6 sm:p-10 bg-white border border-slate-200 space-y-8 shadow-sm">
              <div className="space-y-3 font-mono text-xs">
                <div className="flex items-center justify-between py-2 border-b border-slate-100">
                  <span className="text-slate-600">Preț Tranzacție</span>
                  <span className="text-slate-950 font-bold">€{pEur.toLocaleString('ro-RO')} ({pRon.toLocaleString('ro-RO')} RON)</span>
                </div>
                <div className="flex items-center justify-between py-2 border-b border-slate-100">
                  <span className="text-slate-600">Onorariu Notarial Estimativ (~1.2% + TVA)</span>
                  <span className="text-slate-950 font-bold">€{notaryFee.toLocaleString('ro-RO')}</span>
                </div>
                <div className="flex items-center justify-between py-2 border-b border-slate-100">
                  <span className="text-slate-600">Taxă Intabulare ANCPI (0.15% persoane fizice)</span>
                  <span className="text-slate-950 font-bold">€{ancpiFee.toLocaleString('ro-RO')}</span>
                </div>
                <div className="flex items-center justify-between py-2 border-b border-slate-100">
                  <span className="text-slate-600">Comision Intermediere Agenție (~2% + TVA)</span>
                  <span className="text-slate-950 font-bold">€{agencyCommission.toLocaleString('ro-RO')}</span>
                </div>
              </div>

              <div className="pt-6 border-t border-slate-200 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div className="space-y-1">
                  <span className="text-xs font-mono uppercase tracking-widest text-slate-950 font-bold">
                    TOTAL ESTIMAT ACHIZIȚIE
                  </span>
                  <p className="text-xs text-slate-500 font-light">
                    Costuri adiționale de tranzacționare în România: aprox. 3.35% din prețul imobilului.
                  </p>
                </div>
                <div className="text-2xl sm:text-4xl font-light text-slate-950 font-mono tabular-nums font-bold">
                  €{totalAcquisitionEur.toLocaleString('ro-RO')}
                </div>
              </div>

              <div className="pt-4 flex flex-wrap items-center gap-4">
                <Link
                  href="/investment/calculators#compare-markets"
                  className="px-5 py-2.5 bg-slate-950 hover:bg-slate-800 text-white text-xs font-mono uppercase tracking-wider font-semibold transition-colors flex items-center gap-2"
                >
                  <Scale className="h-3.5 w-3.5" />
                  <span>Compară Fiscalitatea cu Dubai (0% Tax)</span>
                </Link>
              </div>
            </div>
          </div>
        </section>
      )}

      <ContactModal isOpen={isContactModalOpen} onClose={() => setIsContactModalOpen(false)} />
    </div>
  )
}
