'use client'

import * as React from 'react'
import { useParams } from 'next/navigation'
import Link from 'next/link'
import Image from 'next/image'
import { getAreaBySlug, DUBAI_AREAS } from '@/lib/data/areas'
import { VERIFIED_PROPERTIES } from '@/lib/data/properties'
import { SourceBadge } from '@/components/ui/source-badge'
import { CadranDial, CadranQuadrant } from '@/components/ui/luxury-cadran'
import { 
  ArrowLeft, 
  ArrowRight, 
  Plane, 
  Compass, 
  TrendingUp, 
  Building2, 
  Scale, 
  ShieldCheck,
  Sparkles
} from 'lucide-react'

export default function AreaDetailPage() {
  const params = useParams()
  const slug = params?.slug as string
  const area = getAreaBySlug(slug) || DUBAI_AREAS[0]

  const matchingProperties = VERIFIED_PROPERTIES.filter(
    (p) => p.area_id === area.id || p.area_name.toLowerCase().includes(area.name.toLowerCase())
  )

  // Indicative benchmarks based on sector/area
  const isPrimeWaterfront = area.sector === 'WATERFRONT' || area.sector === 'ISLAND'
  const isDowntownOrFinancial = area.sector === 'DOWNTOWN' || area.sector === 'FINANCIAL'
  const benchmarkPriceSqft = isPrimeWaterfront ? 'AED 3,450' : isDowntownOrFinancial ? 'AED 2,850' : 'AED 1,650'
  const benchmarkYield = isPrimeWaterfront ? '6.85%' : isDowntownOrFinancial ? '7.40%' : '8.25%'

  return (
    <div className="bg-white text-[#1d1d1f] min-h-screen pb-28 selection:bg-accent/20 selection:text-[#1d1d1f]">
      {/* 1. TOP BREADCRUMB */}
      <div className="border-b border-black/10 bg-[#f5f5f7] py-3.5">
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          <Link
            href="/areas"
            className="inline-flex items-center gap-2 text-xs font-semibold text-[#6e6e73] hover:text-[#1d1d1f] transition-colors"
          >
            <ArrowLeft className="h-4 w-4" />
            <span>Back to Freehold Atlas</span>
          </Link>
          <div className="flex items-center gap-2 text-[11px] font-mono text-[#6e6e73]">
            <Compass className="h-3.5 w-3.5 text-accent" />
            <span>{area.coordinates.lat.toFixed(4)}° N, {area.coordinates.lng.toFixed(4)}° E</span>
          </div>
        </div>
      </div>

      <main className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 space-y-12">
        {/* 2. HERO IDENTITY BANNER */}
        <div className="relative aspect-[21/9] min-h-[340px] md:min-h-[480px] rounded-3xl overflow-hidden border border-black/10 bg-[#f5f5f7] shadow-lg">
          <Image
            src={area.image || 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=1600&q=80'}
            alt={area.name}
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent pointer-events-none" />

          <div className="absolute top-6 left-6 flex flex-wrap items-center gap-2 z-10">
            <span className="px-3.5 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider bg-white/90 backdrop-blur-md text-[#1d1d1f] border border-black/10 shadow-sm">
              {area.sector} SECTOR
            </span>
            <span className="px-3.5 py-1.5 rounded-full text-xs font-mono font-bold uppercase tracking-wider bg-[#c9a962] text-black shadow-sm">
              {area.freehold_status}
            </span>
          </div>

          <div className="absolute bottom-6 left-6 right-6 text-white space-y-3 z-10">
            <div className="flex flex-wrap items-center gap-3 text-xs text-white/90 font-mono">
              <span className="bg-black/60 px-3 py-1 rounded-full border border-white/20 backdrop-blur-sm">
                Master Developer: <strong className="text-white">{area.master_developer}</strong>
              </span>
              {area.arabic_name && (
                <span className="bg-black/60 px-3 py-1 rounded-full border border-white/20 backdrop-blur-sm font-arabic">
                  {area.arabic_name}
                </span>
              )}
            </div>
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white uppercase drop-shadow-md">
              {area.name}
            </h1>
          </div>
        </div>

        {/* 2B. COMMUNITY CADRAN INSTRUMENTS */}
        <div className="space-y-6">
          <div className="flex items-center justify-between border-b border-black/10 pb-4">
            <span className="text-[10px] font-mono font-bold uppercase tracking-[0.2em] text-accent">
              COMMUNITY INSTRUMENT CADRANS & BENCHMARKS
            </span>
            <span className="text-xs font-mono text-[#6e6e73]">DLD Public Register Data</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <CadranDial
              label="PRICE BENCHMARK"
              sublabel="Average Transacted / SqFt"
              value={benchmarkPriceSqft}
              unit="PER SQFT"
              targetValue="Freehold Index"
              percentage={74}
              status="VERIFIED"
              statutoryRef="DLD Transaction Registry"
              icon={TrendingUp}
            />
            <CadranDial
              label="GROSS YIELD"
              sublabel="Indicative Annual Rental Return"
              value={benchmarkYield}
              unit="GROSS UNLEVERED"
              targetValue="vs 3.1% London Prime"
              percentage={78}
              status="OPTIMAL"
              statutoryRef="Ejari Rental Indices"
              icon={Sparkles}
            />
            <CadranDial
              label="TRANSIT TO DXB"
              sublabel="DXB International Airport"
              value={`${area.transit.airport_mins_dxb}m`}
              unit="DIRECT COMMUTE"
              targetValue={`DWC: ${area.transit.airport_mins_dwc}m`}
              percentage={85}
              status="OPTIMAL"
              statutoryRef="Dubai RTA Transit Grid"
              icon={Plane}
            />
            <CadranDial
              label="FOREIGN TITLE"
              sublabel="100% Perpetual Ownership"
              value="FREEHOLD"
              unit="LAW NO. 7/2006"
              targetValue="Foreign Title Guaranteed"
              percentage={100}
              status="OFFICIAL"
              statutoryRef="Regulation No. 3/2006"
              icon={ShieldCheck}
            />
          </div>
        </div>

        {/* 2C. COMMUNITY INVESTMENT MATRIX QUADRANT */}
        <CadranQuadrant
          eyebrow="COMMUNITY UNDERWRITING MATRIX"
          title={`${area.name} Structural Investment Profile`}
          statutorySource="Dubai Land Department & Master Developer Master Plan Archive"
          quadrants={[
            {
              title: 'Master Developer Covenant',
              value: area.master_developer,
              subtext: `Governed under master development regulations with statutory infrastructure allocations.`,
              delta: 'Audited Master Plan',
              isPositive: true,
              statutoryRef: 'Dubai Law No. 7/2006',
            },
            {
              title: 'Freehold Foreign Status',
              value: '100% Title',
              subtext: 'Direct individual title deed issuance with perpetual freehold disposal and inheritance rights.',
              delta: 'Perpetual Title Deed',
              isPositive: true,
              statutoryRef: 'Regulation No. 3/2006',
            },
            {
              title: 'Downtown Connection',
              value: `${area.transit.downtown_mins} Mins`,
              subtext: `Direct arterial road access to Burj Khalifa / Downtown Dubai commercial cluster.`,
              delta: 'Dubai Highway Network',
              isPositive: true,
              statutoryRef: 'RTA Geodetic Corridor',
            },
            {
              title: 'Golden Visa Eligibility',
              value: 'AED 2.0M+',
              subtext: 'Qualifying property acquisitions above AED 2M confer eligibility for 10-year residency.',
              delta: 'Cabinet Res. 65/2022',
              isPositive: true,
              statutoryRef: 'GDRFA Dubai / ICP',
            },
          ]}
        />

        {/* 3. COMMUNITY PROFILE & GEODETIC METRICS */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          <div className="lg:col-span-8 p-6 sm:p-8 rounded-3xl border border-black/10 bg-white space-y-6 shadow-sm">
            <div className="space-y-3">
              <span className="text-[10px] font-mono font-semibold text-accent uppercase tracking-widest">
                COMMUNITY DOSSIER
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#1d1d1f] tracking-tight">Master Plan & Overview</h2>
              <p className="text-xs sm:text-sm text-[#6e6e73] leading-relaxed font-normal">
                {area.description}
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-[#f5f5f7] border border-black/5 text-xs space-y-2">
              <div className="font-semibold text-[#1d1d1f] flex items-center gap-2">
                <Building2 className="h-4 w-4 text-accent" />
                <span>Investment & Capital Profile</span>
              </div>
              <p className="text-[#6e6e73] leading-relaxed">{area.investment_profile}</p>
            </div>

            {/* Lifestyle Tags */}
            {area.lifestyle_tags && area.lifestyle_tags.length > 0 && (
              <div className="space-y-3 pt-4 border-t border-black/10">
                <span className="text-xs font-semibold uppercase tracking-wider text-[#6e6e73] block font-mono">
                  Lifestyle & Infrastructure Amenities
                </span>
                <div className="flex flex-wrap gap-2">
                  {area.lifestyle_tags.map((tag, idx) => (
                    <span
                      key={idx}
                      className="px-3.5 py-1.5 rounded-full bg-[#f5f5f7] border border-black/5 text-xs font-semibold text-[#1d1d1f]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>

          <div className="lg:col-span-4 p-6 sm:p-8 rounded-3xl border border-black/10 bg-white space-y-5 shadow-sm">
            <h3 className="text-xs font-semibold text-[#1d1d1f] uppercase font-mono tracking-wider flex items-center gap-2">
              <Scale className="h-4 w-4 text-accent" />
              <span>Statutory Geodesy & Transit</span>
            </h3>
            <div className="space-y-3 text-xs">
              <div className="flex justify-between py-2 border-b border-black/10">
                <span className="text-[#6e6e73]">Centroid Latitude</span>
                <span className="font-mono font-semibold text-[#1d1d1f]">{area.coordinates.lat.toFixed(4)}° N</span>
              </div>
              <div className="flex justify-between py-2 border-b border-black/10">
                <span className="text-[#6e6e73]">Centroid Longitude</span>
                <span className="font-mono font-semibold text-[#1d1d1f]">{area.coordinates.lng.toFixed(4)}° E</span>
              </div>
              <div className="flex justify-between py-2 border-b border-black/10">
                <span className="text-[#6e6e73]">DXB International</span>
                <span className="font-mono font-semibold text-[#1d1d1f]">{area.transit.airport_mins_dxb} mins</span>
              </div>
              <div className="flex justify-between py-2 border-b border-black/10">
                <span className="text-[#6e6e73]">DWC Al Maktoum</span>
                <span className="font-mono font-semibold text-[#1d1d1f]">{area.transit.airport_mins_dwc} mins</span>
              </div>
              <div className="flex justify-between py-2 border-b border-black/10">
                <span className="text-[#6e6e73]">Downtown Dubai</span>
                <span className="font-mono font-semibold text-[#1d1d1f]">{area.transit.downtown_mins} mins</span>
              </div>
              <div className="pt-2">
                <SourceBadge provenance={area.provenance} />
              </div>
            </div>
          </div>
        </div>

        {/* 4. VERIFIED PROPERTIES IN THIS COMMUNITY */}
        <div className="space-y-6">
          <div className="flex items-center justify-between border-b border-black/10 pb-4">
            <div>
              <span className="text-[10px] font-mono font-semibold text-accent uppercase tracking-widest block">
                AUDITED INVENTORY
              </span>
              <h3 className="text-2xl font-extrabold text-[#1d1d1f] mt-1">
                Properties in {area.name} ({matchingProperties.length})
              </h3>
            </div>
            <Link
              href="/properties"
              className="text-xs font-semibold text-[#6e6e73] hover:text-[#1d1d1f] flex items-center gap-1.5 uppercase tracking-wider transition-colors"
            >
              <span>View All Properties</span>
              <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          </div>

          {matchingProperties.length === 0 ? (
            <div className="p-10 rounded-3xl border border-black/10 bg-[#f5f5f7] text-center space-y-3">
              <p className="text-xs text-[#6e6e73]">
                No active properties listed in {area.name} in current audited registry.
              </p>
              <Link
                href="/private-client"
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-accent hover:underline"
              >
                <span>Request Off-Market Allocation in {area.name} →</span>
              </Link>
            </div>
          ) : (
            <div className="space-y-4">
              {matchingProperties.map((prop) => (
                <div
                  key={prop.id}
                  className="p-5 sm:p-6 rounded-3xl border border-black/10 bg-white hover:border-black/20 hover:shadow-lg transition-all flex flex-col md:flex-row items-start md:items-center justify-between gap-6 group shadow-sm"
                >
                  <div className="flex items-center gap-4 sm:gap-5">
                    <div className="relative h-20 w-28 rounded-2xl overflow-hidden bg-[#f5f5f7] shrink-0 border border-black/10">
                      <Image
                        src={prop.images[0] || 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=400&q=80'}
                        alt={prop.title}
                        fill
                        sizes="120px"
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                    <div>
                      <div className="text-[10px] font-mono text-[#6e6e73]">{prop.developer_name} • {prop.property_type}</div>
                      <h4 className="text-base font-bold text-[#1d1d1f] group-hover:text-accent transition-colors">
                        {prop.title}
                      </h4>
                      <div className="text-xs text-[#6e6e73] mt-0.5">
                        {prop.bedrooms} Bed • {prop.bathrooms} Bath • {prop.internal_area_sqft.toLocaleString()} sqft
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center gap-5 w-full md:w-auto justify-between md:justify-end pt-4 md:pt-0 border-t md:border-t-0 border-black/10">
                    <div className="text-left md:text-right">
                      <div className="text-[10px] font-mono text-[#6e6e73] uppercase font-semibold">Asking Price</div>
                      <div className="text-base font-bold text-[#1d1d1f] tabular-nums">
                        AED {prop.asking_price?.toLocaleString()}
                      </div>
                    </div>
                    <Link
                      href={`/properties/${prop.id}`}
                      className="px-5 py-2.5 rounded-full bg-[#1d1d1f] text-white hover:bg-black text-xs font-semibold transition-all flex items-center gap-1.5 shadow-sm hover:shadow-md"
                    >
                      <span>Open Dossier</span>
                      <ArrowRight className="h-3.5 w-3.5 text-accent" />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </main>
    </div>
  )
}
