'use client'

import * as React from 'react'
import { useParams } from 'next/navigation'
import Link from 'next/link'
import Image from 'next/image'
import { getPropertyById, VERIFIED_PROPERTIES } from '@/lib/data/properties'
import { useClient } from '@/lib/context/client-context'
import { ContactModal } from '@/components/layout/contact-modal'
import {
  ArrowLeft,
  ShieldCheck,
  Share2,
  Bookmark,
  Check,
  MapPin,
} from 'lucide-react'

export default function PropertyDetailPage() {
  const params = useParams()
  const id = params?.id as string
  const property = getPropertyById(id) || VERIFIED_PROPERTIES[0]

  const { isShortlisted, toggleShortlist } = useClient()
  const [copiedShare, setCopiedShare] = React.useState(false)
  const [activeImageIndex, setActiveImageIndex] = React.useState(0)
  const [isContactModalOpen, setIsContactModalOpen] = React.useState(false)

  const saved = isShortlisted(property.id)
  const price = property.asking_price || 0
  const district = property.area_name || ''
  const type = property.property_type || ''
  const developer = property.developer_name || ''
  const size = property.internal_area_sqft || 0
  const beds = property.bedrooms || 0
  const baths = property.bathrooms || 0
  const status = property.completion_status || 'Ready'
  const isGoldenVisaEligible = price >= 2000000

  const images = property.images && property.images.length > 0 ? property.images : [
    'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1600&q=85',
    'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1600&q=85',
    'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1600&q=85',
  ]

  const handleShare = async () => {
    if (typeof window !== 'undefined') {
      try {
        if (navigator.share) {
          await navigator.share({
            title: `${property.title} | Dubai Real Estate Dossier`,
            text: `Verified property brief for ${property.title} in ${district}.`,
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
      
      {/* 1. TOP STATUTORY BREADCRUMB BAR */}
      <div className="border-b border-slate-200 bg-slate-50/70 py-3.5">
        <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-10 lg:px-16 flex items-center justify-between font-mono text-xs">
          <Link
            href="/properties"
            className="inline-flex items-center gap-2 uppercase tracking-wider text-slate-600 hover:text-slate-950 transition-colors"
          >
            <ArrowLeft className="h-3.5 w-3.5" />
            <span>Back to Property Inventory</span>
          </Link>
          <div className="flex items-center gap-3">
            <span className="px-2.5 py-1 bg-white border border-slate-200 text-slate-900 font-semibold text-[10px] uppercase">
              {developer}
            </span>
            <span className="px-2.5 py-1 bg-white border border-slate-200 text-slate-800 font-semibold text-[10px] uppercase">
              CURATED ASSET DOSSIER
            </span>
          </div>
        </div>
      </div>

      {/* 2. OPENING DOSSIER HEADER */}
      <section className="pt-10 sm:pt-14 pb-8 border-b border-slate-200 bg-white">
        <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-10 lg:px-16 space-y-8">
          
          {/* Title & Valuation Row */}
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
            <div className="space-y-3 max-w-3xl">
              <div className="flex flex-wrap items-center gap-2.5 text-xs font-mono uppercase text-slate-600">
                <span className="flex items-center gap-1 font-semibold text-slate-950">
                  <MapPin className="h-3.5 w-3.5" />
                  <span>{district}</span>
                </span>
                <span className="text-slate-300">&bull;</span>
                <span>{type}</span>
                <span className="text-slate-300">&bull;</span>
                <span className="px-2 py-0.5 bg-slate-100 border border-slate-200 text-slate-900 font-semibold">
                  {status}
                </span>
              </div>
              
              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-light tracking-[-0.035em] text-slate-950 font-serif">
                {property.title}
              </h1>

              {/* Action Row */}
              <div className="flex flex-wrap items-center gap-3 pt-2">
                <button
                  onClick={handleShare}
                  className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-white hover:bg-slate-50 border border-slate-200 text-xs font-mono uppercase tracking-wider text-slate-800 transition-colors cursor-pointer shadow-2xs"
                  title="Share Property Listing Dossier"
                >
                  {copiedShare ? (
                    <>
                      <Check className="h-3.5 w-3.5 text-emerald-700" />
                      <span className="text-emerald-800 font-semibold">Dossier Link Copied</span>
                    </>
                  ) : (
                    <>
                      <Share2 className="h-3.5 w-3.5 text-slate-600" />
                      <span>Share Listing</span>
                    </>
                  )}
                </button>

                <button
                  onClick={() => toggleShortlist(property.id, property.title)}
                  className={`inline-flex items-center gap-2 px-3.5 py-1.5 border text-xs font-mono uppercase tracking-wider transition-colors cursor-pointer ${
                    saved
                      ? 'bg-slate-950 text-white border-slate-950'
                      : 'bg-white hover:bg-slate-50 text-slate-800 border-slate-200 shadow-2xs'
                  }`}
                >
                  <Bookmark className={`h-3.5 w-3.5 ${saved ? 'fill-current' : ''}`} />
                  <span>{saved ? 'Shortlisted' : 'Save Dossier'}</span>
                </button>

                <button
                  onClick={() => setIsContactModalOpen(true)}
                  className="inline-flex items-center gap-1.5 px-4 py-1.5 bg-slate-950 hover:bg-slate-800 text-white text-xs font-mono uppercase tracking-wider font-semibold transition-all cursor-pointer shadow-2xs"
                >
                  <span>Request Price &amp; Info</span>
                </button>
              </div>
            </div>

            {/* Commercial Pricing Box */}
            <div className="text-left lg:text-right font-mono space-y-1 p-5 bg-slate-50 border border-slate-200 shadow-2xs shrink-0">
              <span className="text-[10px] text-slate-500 uppercase tracking-wider block font-semibold">
                Commercial Pricing Status
              </span>
              <div className="text-2xl sm:text-3xl font-light text-slate-950 tracking-wider font-bold">
                REQUEST PRICE
              </div>
              <div className="text-xs text-slate-600 font-semibold">
                {size > 0 ? `${size.toLocaleString()} SQ. FT Research Dossier` : 'Price & Specification upon Request'}
              </div>
            </div>
          </div>

          {/* Dominant Architectural Gallery View */}
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
              {isGoldenVisaEligible && (
                <div className="absolute top-4 left-4">
                  <span className="px-3.5 py-1.5 text-[10px] font-mono uppercase bg-white/95 backdrop-blur-xs text-emerald-800 flex items-center gap-1.5 border border-slate-200 font-semibold shadow-2xs">
                    <ShieldCheck className="h-3.5 w-3.5 text-emerald-700" />
                    <span>Estimated Baseline: Cabinet Res. 65/2022 (Subject to GDRFA Approval)</span>
                  </span>
                </div>
              )}
              <div className="absolute bottom-3 right-3 px-2.5 py-1 bg-slate-950/80 text-[9px] font-mono text-slate-300">
                VIEW {activeImageIndex + 1} OF {images.length} &bull; REPRESENTATIVE IMAGERY
              </div>
            </div>

            {/* Thumbnail Strip */}
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
                      alt={`View ${idx + 1}`}
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

      {/* 3. PROPERTY SPECIFICATIONS & METRICS */}
      <section className="py-16 sm:py-20 bg-slate-50/60 border-b border-slate-200">
        <div className="w-full max-w-[1120px] mx-auto px-4 sm:px-10 lg:px-16 space-y-10">
          <div className="space-y-2">
            <span className="text-[10px] font-mono uppercase tracking-[0.24em] text-slate-500 font-semibold block">
              01 &bull; ASSET SPECIFICATION &amp; METRICS
            </span>
            <h2 className="text-2xl sm:text-3xl font-light text-slate-950 font-serif">
              {property.unit_descriptor || property.editorial_display_name}
            </h2>
          </div>

          <div className="divide-y divide-slate-200 border-t border-b border-slate-200 bg-white p-6 sm:p-8 border shadow-2xs font-mono text-xs">
            {property.property_type === 'Plot' ? (
              <>
                <div className="flex justify-between py-3">
                  <span className="text-slate-500 uppercase">Plot Area</span>
                  <span className="text-slate-950 font-bold">{property.plot_area_sqft?.toLocaleString() || size.toLocaleString()} SQ. FT</span>
                </div>
                <div className="flex justify-between py-3">
                  <span className="text-slate-500 uppercase">Max Permissible BUA</span>
                  <span className="text-slate-950 font-bold">{size.toLocaleString()} SQ. FT</span>
                </div>
                <div className="flex justify-between py-3">
                  <span className="text-slate-500 uppercase">Permitted Typology</span>
                  <span className="text-slate-950 font-bold">Bespoke Architectural Mansion (G+2 + Basement)</span>
                </div>
              </>
            ) : (
              <>
                <div className="flex justify-between py-3">
                  <span className="text-slate-500 uppercase">Internal Living Area</span>
                  <span className="text-slate-950 font-bold">{size > 0 ? `${size.toLocaleString()} SQ. FT` : 'Available on Request'}</span>
                </div>
                <div className="flex justify-between py-3">
                  <span className="text-slate-500 uppercase">Bedrooms / Suites</span>
                  <span className="text-slate-950 font-bold">{beds > 0 ? `${beds} Bedrooms` : 'Private Suite Specification'}</span>
                </div>
                <div className="flex justify-between py-3">
                  <span className="text-slate-500 uppercase">Bathrooms</span>
                  <span className="text-slate-950 font-bold">{baths > 0 ? `${baths} Bathrooms` : 'En-Suite Facilities'}</span>
                </div>
              </>
            )}
            <div className="flex justify-between py-3">
              <span className="text-slate-500 uppercase">Asset Type</span>
              <span className="text-slate-950 font-bold">{type}</span>
            </div>
            <div className="flex justify-between py-3">
              <span className="text-slate-500 uppercase">Master Developer</span>
              <span className="text-slate-950 font-bold">{developer}</span>
            </div>
            <div className="flex justify-between py-3">
              <span className="text-slate-500 uppercase">Zoning Status</span>
              <span className="text-slate-950 font-bold">Designated Foreign Freehold (Law 7/2006)</span>
            </div>
            <div className="flex justify-between py-3">
              <span className="text-slate-500 uppercase">Completion Schedule</span>
              <span className="text-slate-950 font-bold">{status}</span>
            </div>
          </div>
        </div>
      </section>

      {/* 4. STATUTORY CONVEYANCING SCHEDULE */}
      <section className="py-16 sm:py-24 bg-white border-b border-slate-200">
        <div className="w-full max-w-[1120px] mx-auto px-4 sm:px-10 lg:px-16 space-y-10">
          <div className="space-y-3">
            <span className="text-[10px] font-mono uppercase tracking-[0.24em] text-slate-500 font-semibold block">
              02 &bull; STATUTORY ACQUISITION FRAMEWORK
            </span>
            <h2 className="text-2xl sm:text-3xl font-light text-slate-950 font-serif">
              Statutory Transaction &amp; DLD Schedule
            </h2>
            <p className="text-sm text-slate-600 font-light max-w-2xl leading-relaxed">
              Official statutory transfer and registration schedules established pursuant to Executive Council Resolution No. 30 of 2013 and Dubai Land Department official tariffs.
            </p>
          </div>

          <div className="p-6 sm:p-10 bg-white border border-slate-200 space-y-8 shadow-sm">
            <div className="space-y-3 font-mono text-xs">
              <div className="flex items-center justify-between py-2 border-b border-slate-100">
                <span className="text-slate-600">Purchase Price Valuation</span>
                <span className="text-slate-950 font-bold">Price on Request (Contracted Between Parties)</span>
              </div>
              <div className="flex items-center justify-between py-2 border-b border-slate-100">
                <span className="text-slate-600">DLD Transfer Tariff (Exec. Council Res. 30/2013)</span>
                <span className="text-slate-950 font-bold">4.00% of Contracted Value</span>
              </div>
              <div className="flex items-center justify-between py-2 border-b border-slate-100">
                <span className="text-slate-600">DLD Knowledge &amp; Innovation Fee</span>
                <span className="text-slate-950 font-bold">AED 580 (Standard Title Deed issuance)</span>
              </div>
              <div className="flex items-center justify-between py-2 border-b border-slate-100">
                <span className="text-slate-600">Registration Trustee Fee (DLD Tariff)</span>
                <span className="text-slate-950 font-bold">AED 4,000 + 5% VAT (Valuation ≥ AED 500k)</span>
              </div>
              <div className="flex items-center justify-between py-2">
                <span className="text-slate-600">Independent Legal &amp; Conveyancing Fee</span>
                <span className="text-slate-950 font-bold">Variable (Arranged with Licensed Practitioner)</span>
              </div>
            </div>

            <div className="pt-6 border-t border-slate-200 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div className="space-y-1">
                <span className="text-xs font-mono uppercase tracking-widest text-slate-950 font-bold">
                  TOTAL STATUTORY OUTLAY FRAMEWORK
                </span>
                <p className="text-xs text-slate-500 font-light">
                  Inclusive of agreed purchase price + 4% DLD transfer fee + statutory trustee and registration fees.
                </p>
              </div>
              <div className="text-xl sm:text-2xl font-light text-slate-950 font-mono tracking-wider font-bold">
                CONTRACTED VALUATION + 4% DLD
              </div>
            </div>

            <div className="pt-4 flex flex-col sm:flex-row gap-4">
              <button
                onClick={() => setIsContactModalOpen(true)}
                className="w-full sm:w-auto px-6 py-3.5 bg-slate-950 hover:bg-slate-800 text-white text-xs font-mono uppercase tracking-[0.14em] font-semibold transition-all cursor-pointer text-center shadow-xs"
              >
                Request Property Information &amp; Price
              </button>
              <button
                onClick={() => setIsContactModalOpen(true)}
                className="w-full sm:w-auto px-6 py-3.5 border border-slate-300 hover:border-slate-950 text-xs font-mono uppercase tracking-wider text-slate-800 hover:text-slate-950 text-center transition-colors bg-white shadow-2xs"
              >
                Request Viewing via Authorized Partner
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 5. MANDATORY INDEPENDENT RESEARCH & REPRESENTATION DISCLAIMER */}
      <section className="py-12 bg-slate-50 border-t border-slate-200">
        <div className="w-full max-w-[960px] mx-auto px-4 sm:px-10 space-y-4 text-xs font-light text-slate-700">
          <div className="flex items-center gap-2">
            <ShieldCheck className="h-4 w-4 text-slate-800" />
            <span className="font-mono text-xs uppercase tracking-wider text-slate-950 font-bold">
              Independent Platform Disclaimer &bull; Declarație de Independență
            </span>
          </div>
          <p className="leading-relaxed bg-white p-4 border border-slate-200 text-slate-800">
            DUBAI este o platformă independentă de cercetare și informare imobiliară. Publicarea unui proiect sau a unei proprietăți nu implică existența unui mandat de vânzare, a unei relații de reprezentare ori a unei verificări independente a fiecărei informații. Pentru tranzacții, vizionări și servicii reglementate, utilizatorii vor fi îndrumați către profesioniști și parteneri autorizați, după confirmarea disponibilității și a statutului acestora.
          </p>
          <p className="text-[11px] text-slate-500 leading-relaxed">
            DUBAI is an independent real estate research and property intelligence platform. Publication of any project or property does not imply a sales mandate, agency representation, or independent verification of every piece of data. For transactions, viewings, and regulated services, users are referred to authorized, licensed professionals and partners upon confirmation of availability and credentials.
          </p>
          <p className="text-[10px] font-mono text-slate-400 pt-2 border-t border-slate-200">
            Official legal references: Law No. 7 of 2006 (Land Registration), Law No. 8 of 2007 (Escrow Accounts), Regulation No. 3 of 2006 (Designated Freehold Areas), and Executive Council Resolution No. 30 of 2013 (DLD Transfer Fees).
          </p>
        </div>
      </section>

      {/* Contact Modal */}
      <ContactModal
        isOpen={isContactModalOpen}
        onClose={() => setIsContactModalOpen(false)}
        initialInterest="PROPERTY"
      />

    </div>
  )
}
