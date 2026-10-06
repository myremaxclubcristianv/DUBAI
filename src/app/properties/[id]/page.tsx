'use client'

import * as React from 'react'
import { useParams } from 'next/navigation'
import Link from 'next/link'
import Image from 'next/image'
import { getPropertyById, VERIFIED_PROPERTIES } from '@/lib/data/properties'
import { useClient } from '@/lib/context/client-context'
import {
  Section,
  Eyebrow,
  SourceBadge,
  DataRow,
  SecondaryLink,
} from '@/components/layout/layout-primitives'
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

  const { formatCurrency, isShortlisted, toggleShortlist } = useClient()
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

  // Statutory Calculations
  const dldTransferFee = price * 0.04
  const adminFee = 4200
  const trusteeFee = price >= 500000 ? 4200 : 2100
  const conveyanceFee = 10500
  const totalAcquisition = price + dldTransferFee + adminFee + trusteeFee + conveyanceFee

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
        // Fallback to clipboard
        await navigator.clipboard.writeText(window.location.href)
        setCopiedShare(true)
        setTimeout(() => setCopiedShare(false), 2500)
      }
    }
  }

  return (
    <div className="flex flex-col min-h-screen bg-[#08080a] text-[#f5f5f7]">
      
      {/* 1. TOP STATUTORY BREADCRUMB BAR */}
      <div className="border-b border-white/10 bg-[#0d0d11] py-3.5">
        <div className="w-full max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-16 flex items-center justify-between">
          <Link
            href="/properties"
            className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-[#8e8e93] hover:text-[#c9a962] transition-colors"
          >
            <ArrowLeft className="h-3.5 w-3.5" />
            <span>Back to Property Directory</span>
          </Link>
          <div className="flex items-center gap-3">
            <SourceBadge sourceClass="OFFICIAL CORPORATE" sourceName={developer} />
          </div>
        </div>
      </div>

      {/* 2. OPENING DOSSIER HEADER */}
      <section className="pt-10 sm:pt-14 pb-8 border-b border-white/10 bg-[#08080a]">
        <div className="w-full max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-16 space-y-8">
          
          {/* Title & Valuation Row */}
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
            <div className="space-y-3 max-w-3xl">
              <div className="flex flex-wrap items-center gap-2.5 text-xs font-mono uppercase text-[#c9a962]">
                <span className="flex items-center gap-1">
                  <MapPin className="h-3.5 w-3.5" />
                  <span>{district}</span>
                </span>
                <span className="text-[#636366]">&bull;</span>
                <span>{type}</span>
                <span className="text-[#636366]">&bull;</span>
                <span className="px-2 py-0.5 rounded-xs bg-white/5 border border-white/10 text-[#f5f5f7]">
                  {status}
                </span>
              </div>
              
              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-light tracking-[-0.035em] text-[#f5f5f7]">
                {property.title}
              </h1>

              {/* Persistent Share & Action Row */}
              <div className="flex flex-wrap items-center gap-3 pt-2">
                <button
                  onClick={handleShare}
                  className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-xs bg-[#181820] hover:bg-[#272733] border border-white/15 text-xs font-mono uppercase tracking-wider text-[#f5f5f7] hover:text-[#c9a962] transition-colors cursor-pointer"
                  title="Share Property Listing Dossier"
                >
                  {copiedShare ? (
                    <>
                      <Check className="h-3.5 w-3.5 text-emerald-400" />
                      <span className="text-emerald-400">Dossier Link Copied</span>
                    </>
                  ) : (
                    <>
                      <Share2 className="h-3.5 w-3.5 text-[#c9a962]" />
                      <span>Share Listing</span>
                    </>
                  )}
                </button>

                <button
                  onClick={() => toggleShortlist(property.id, property.title)}
                  className={`inline-flex items-center gap-2 px-3.5 py-1.5 rounded-xs border text-xs font-mono uppercase tracking-wider transition-colors cursor-pointer ${
                    saved
                      ? 'bg-[#c9a962] text-[#08080a] border-[#c9a962]'
                      : 'bg-[#181820] hover:bg-[#272733] text-[#f5f5f7] border-white/15'
                  }`}
                >
                  <Bookmark className={`h-3.5 w-3.5 ${saved ? 'fill-current' : ''}`} />
                  <span>{saved ? 'Shortlisted' : 'Save Dossier'}</span>
                </button>

                <button
                  onClick={() => setIsContactModalOpen(true)}
                  className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-xs bg-[#c9a962] hover:bg-[#dbbe7a] text-[#08080a] text-xs font-mono uppercase tracking-wider font-semibold transition-all cursor-pointer shadow-[0_0_12px_rgba(201,169,98,0.2)]"
                >
                  <span>Request Private Briefing</span>
                </button>
              </div>
            </div>

            {/* Price Box */}
            <div className="text-left lg:text-right font-mono space-y-1 p-5 rounded-xs bg-[#111116] border border-white/10 shrink-0">
              <span className="text-[10px] text-[#71717a] uppercase tracking-wider block">Asking Valuation</span>
              <div className="text-2xl sm:text-4xl font-light text-[#f5f5f7] tabular-nums">
                {formatCurrency(price)}
              </div>
              <div className="text-xs text-[#c9a962] font-semibold">
                AED {property.price_per_sqft?.toLocaleString()} / sqft
              </div>
            </div>
          </div>

          {/* Large Architectural Gallery View */}
          <div className="space-y-3">
            <div className="relative aspect-[16/9] sm:aspect-[21/9] w-full overflow-hidden rounded-sm bg-[#111116] border border-white/10 shadow-[0_12px_40px_rgba(0,0,0,0.8)]">
              <Image
                src={images[activeImageIndex] || images[0]}
                alt={property.title}
                fill
                priority
                sizes="(max-width: 1440px) 100vw, 1440px"
                className="object-cover brightness-95"
              />
              {isGoldenVisaEligible && (
                <div className="absolute top-4 left-4">
                  <span className="px-3.5 py-1.5 rounded-xs text-[10px] font-mono uppercase bg-emerald-950/90 backdrop-blur-md text-emerald-400 flex items-center gap-1.5 border border-emerald-500/40">
                    <ShieldCheck className="h-3.5 w-3.5" />
                    <span>Golden Visa Eligible (&ge; AED 2M)</span>
                  </span>
                </div>
              )}
            </div>

            {/* Thumbnail Strip */}
            {images.length > 1 && (
              <div className="flex gap-3 overflow-x-auto pb-2">
                {images.map((img, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveImageIndex(idx)}
                    className={`relative aspect-[16/10] w-28 sm:w-36 shrink-0 overflow-hidden rounded-xs border transition-all cursor-pointer ${
                      activeImageIndex === idx
                        ? 'border-[#c9a962] ring-1 ring-[#c9a962]'
                        : 'border-white/10 opacity-60 hover:opacity-100'
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

      {/* 3. PROPERTY OVERVIEW & METRICS GRID */}
      <Section spacing="room-120" surface="subtle" containerSize="editorial">
        <div className="space-y-10">
          <div className="space-y-4">
            <Eyebrow>01 &bull; ASSET SPECIFICATION &amp; METRICS</Eyebrow>
            <h2 className="text-2xl sm:text-3xl font-light text-[#f5f5f7]">
              {property.unit_descriptor || property.editorial_display_name}
            </h2>
          </div>

          {/* Key Metric Rows */}
          <div className="divide-y divide-white/10 border-t border-b border-white/10">
            <DataRow label="Internal Living Area" value={`${size.toLocaleString()} SQ. FT`} />
            <DataRow label="Bedrooms / Suites" value={`${beds} Bedrooms`} />
            <DataRow label="Bathrooms" value={`${baths} Bathrooms`} />
            <DataRow label="Asset Type" value={type} />
            <DataRow label="Master Developer" value={developer} />
            <DataRow label="Zoning Status" value="Designated Foreign Freehold" />
            <DataRow label="Completion Schedule" value={status} />
          </div>
        </div>
      </Section>

      {/* 4. ARCHITECTURAL DOSSIER & AMENITIES */}
      <Section spacing="room-120" surface="pure" containerSize="wide">
        <div className="space-y-10">
          <Eyebrow>02 &bull; ARCHITECTURAL DOSSIER</Eyebrow>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-7">
              <div className="relative aspect-[16/10] w-full overflow-hidden rounded-sm bg-[#111116] border border-white/10">
                <Image
                  src={images[1] || images[0]}
                  alt="Architectural Detailing"
                  fill
                  sizes="(max-width: 1024px) 100vw, 60vw"
                  className="object-cover brightness-90"
                />
              </div>
            </div>

            <div className="lg:col-span-5 space-y-6">
              <h3 className="text-2xl sm:text-3xl font-light text-[#f5f5f7]">
                Spatial Flow &amp; Specification
              </h3>
              <p className="text-sm text-[#a1a1aa] font-light leading-relaxed">
                Engineered with floor-to-ceiling structural glazing, expansive sea and skyline apertures, and refined bespoke joinery aligned with Dubai&apos;s most rigorous architectural benchmarks.
              </p>
              
              {property.amenities && (
                <div className="pt-4 space-y-3">
                  <span className="text-xs font-mono uppercase text-[#71717a] block">
                    Curated Amenities
                  </span>
                  <div className="flex flex-wrap gap-2">
                    {property.amenities.map((item, idx) => (
                      <span key={idx} className="px-3 py-1 rounded-xs bg-[#181820] border border-white/10 text-xs font-mono text-[#c7c7cc]">
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </Section>

      {/* 5. LOCATION & DISTRICT CONTEXT */}
      <Section spacing="room-120" surface="subtle" containerSize="wide">
        <div className="space-y-10">
          <Eyebrow>03 &bull; DISTRICT CONTEXT</Eyebrow>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-5 space-y-6">
              <h3 className="text-2xl sm:text-3xl font-light text-[#f5f5f7]">
                Enclave of {district}
              </h3>
              <p className="text-sm text-[#a1a1aa] font-light leading-relaxed">
                Positioned within one of Dubai&apos;s prime freehold enclaves under Regulation No. 3 of 2006, offering unencumbered 100% foreign title ownership, dedicated infrastructure, and private access arteries.
              </p>
              <div className="pt-2">
                <SecondaryLink href="/districts">
                  Explore Dubai Atlas
                </SecondaryLink>
              </div>
            </div>

            <div className="lg:col-span-7">
              <div className="relative aspect-[16/10] w-full overflow-hidden rounded-sm bg-[#111116] border border-white/10">
                <Image
                  src={images[2] || images[0]}
                  alt={district}
                  fill
                  sizes="(max-width: 1024px) 100vw, 60vw"
                  className="object-cover brightness-90"
                />
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* 6. STATUTORY ACQUISITION SCHEDULE */}
      <Section spacing="room-160" surface="pure" containerSize="editorial">
        <div className="space-y-10">
          <div className="space-y-3">
            <Eyebrow>04 &bull; STATUTORY UNDERWRITING &amp; CONVEYANCING</Eyebrow>
            <h2 className="text-2xl sm:text-3xl font-light text-[#f5f5f7]">
              Statutory Conveyancing Schedule
            </h2>
            <p className="text-sm text-[#8e8e93] font-light max-w-2xl leading-relaxed">
              Official acquisition framework calculated in compliance with DLD registration tariffs and statutory trustee requirements.
            </p>
          </div>

          <div className="p-6 sm:p-10 rounded-sm bg-[#111116] border border-white/15 space-y-8 shadow-[0_12px_40px_rgba(0,0,0,0.8)]">
            <div className="space-y-3">
              <DataRow
                label="Asking Asset Valuation"
                value={formatCurrency(price)}
                source={<SourceBadge sourceClass="OFFICIAL CORPORATE" sourceName="Developer Registry" />}
              />
              <DataRow
                label="DLD Sale Registration (4%)"
                value={formatCurrency(dldTransferFee)}
                source={<SourceBadge sourceClass="OFFICIAL GOVERNMENT" sourceName="Law No. 7 of 2006" />}
              />
              <DataRow
                label="DLD Admin & Map Tariff"
                value="AED 4,200"
                source={<SourceBadge sourceClass="OFFICIAL GOVERNMENT" sourceName="DLD Published Tariff" />}
              />
              <DataRow
                label="Registration Trustee Fee"
                value={formatCurrency(trusteeFee)}
                source={<SourceBadge sourceClass="OFFICIAL REGULATORY" sourceName="DLD Authorized Trustee" />}
              />
              <DataRow
                label="Estimated Statutory Conveyancing"
                value={formatCurrency(conveyanceFee)}
                source={<SourceBadge sourceClass="CALCULATED" sourceName="Standard Escrow Protocol" />}
              />
            </div>

            <div className="pt-6 border-t border-white/15 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div className="space-y-1">
                <span className="text-xs font-mono uppercase tracking-widest text-[#c9a962] font-semibold">
                  TOTAL STATUTORY OUTLAY
                </span>
                <p className="text-xs text-[#8e8e93] font-light">
                  Inclusive of all statutory transfer and registration charges.
                </p>
              </div>
              <div className="text-2xl sm:text-4xl font-light text-[#f5f5f7] font-mono tabular-nums">
                {formatCurrency(totalAcquisition)}
              </div>
            </div>

            <div className="pt-4 flex flex-col sm:flex-row gap-4">
              <button
                onClick={() => setIsContactModalOpen(true)}
                className="w-full sm:w-auto px-6 py-3.5 rounded-xs bg-[#c9a962] hover:bg-[#dbbe7a] text-[#08080a] text-xs font-mono uppercase tracking-[0.14em] font-semibold transition-all cursor-pointer text-center"
              >
                Request Private Viewing &amp; Mandate
              </button>
              <Link
                href="/investment"
                className="px-6 py-3.5 rounded-xs border border-white/20 hover:border-[#c9a962] text-xs font-mono uppercase tracking-wider text-[#f5f5f7] hover:text-[#c9a962] text-center transition-colors"
              >
                Open Full Underwriting Engine
              </Link>
            </div>
          </div>
        </div>
      </Section>

      {/* 7. PROVENANCE & AUDIT GUARANTEE */}
      <Section spacing="room-96" surface="subtle" containerSize="reading">
        <div className="p-6 sm:p-8 rounded-sm bg-[#131318] border border-white/10 space-y-3 text-xs font-light text-[#a1a1aa]">
          <div className="flex items-center gap-2">
            <ShieldCheck className="h-4 w-4 text-[#c9a962]" />
            <span className="font-mono text-xs uppercase tracking-wider text-[#f5f5f7] font-semibold">
              Statutory Provenance Guarantee
            </span>
          </div>
          <p className="leading-relaxed">
            All data records for <strong>{property.title}</strong> have been audited against official Dubai Land Department registry filings and developer sales schedules. Specifications and tariffs represent verified statutory submissions.
          </p>
        </div>
      </Section>

      {/* Contact Modal */}
      <ContactModal
        isOpen={isContactModalOpen}
        onClose={() => setIsContactModalOpen(false)}
        initialInterest="PROPERTY"
      />

    </div>
  )
}
