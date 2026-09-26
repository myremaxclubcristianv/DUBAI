'use client'

import * as React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { DUBAI_AREAS } from '@/lib/data/areas'
import { PageIntro } from '@/components/layout/layout-primitives'
import { CadranDial, CadranQuadrant } from '@/components/ui/luxury-cadran'
import { Plane, ArrowRight, Compass, ShieldCheck, MapPin, Building } from 'lucide-react'

export default function AreasPage() {
  const [selectedSector, setSelectedSector] = React.useState('ALL')

  const filteredAreas = selectedSector === 'ALL'
    ? DUBAI_AREAS
    : DUBAI_AREAS.filter((a) => a.sector === selectedSector)

  const primaryArea = filteredAreas[0] || DUBAI_AREAS[0]
  const otherAreas = filteredAreas.slice(1)

  return (
    <div className="bg-black text-white min-h-screen pb-28 selection:bg-accent/30 selection:text-white">
      {/* 1. APPLE PRO HERO */}
      <PageIntro
        eyebrow="Statutory Freehold Zone Registry (Regulation No. 3/2006)"
        actions={
          <Link
            href="/map"
            className="px-6 py-3 bg-white text-black hover:bg-zinc-200 text-xs font-semibold rounded-full transition-all flex items-center gap-2 shadow-lg shrink-0"
          >
            <Compass className="h-4 w-4 text-accent" />
            <span>Interactive Geodetic Map</span>
          </Link>
        }
        title={<>Geography Atlas<span className="text-gradient-gold">.</span></>}
        description="The prime Dubai community atlas. Geographic directory of Dubai freehold communities, master developer covenants, airport transit matrices, and foreign title ownership rights."
      />

      <main className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 space-y-12">
        {/* 1B. ATLAS MACROECONOMIC CADRANS */}
        <div className="space-y-6">
          <div className="flex items-center justify-between border-b border-white/10 pb-4">
            <span className="text-[10px] font-mono font-bold uppercase tracking-[0.2em] text-accent">
              FREEHOLD ATLAS INSTRUMENTS
            </span>
            <span className="text-xs font-mono text-zinc-400">Regulation No. 3 of 2006</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <CadranDial
              label="FREEHOLD COMMUNITIES"
              sublabel="Official Gazette Designated"
              value="68 Zones"
              unit="100% FOREIGN OWNERSHIP"
              targetValue="Dubai Land Department"
              percentage={100}
              status="VERIFIED"
              statutoryRef="Dubai Law No. 7/2006"
              icon={MapPin}
            />
            <CadranDial
              label="MASTER DEVELOPERS"
              sublabel="Government & Semi-Gov"
              value="12 Major"
              unit="INSTITUTIONAL SPONSORS"
              targetValue="Emaar, Nakheel, Meraas"
              percentage={92}
              status="OPTIMAL"
              statutoryRef="RERA Developer Registry"
              icon={Building}
            />
            <CadranDial
              label="AIRPORT TRANSIT MAX"
              sublabel="Average Commute to DXB/DWC"
              value="22 Mins"
              unit="ARTERIAL ACCESS"
              targetValue="Sheikh Zayed / E311"
              percentage={84}
              status="OPTIMAL"
              statutoryRef="Dubai RTA Geodetic Matrix"
              icon={Plane}
            />
            <CadranDial
              label="FOREIGN BUYER TAX"
              sublabel="Statutory Surcharge"
              value="0.00%"
              unit="ZERO STAMP DUTY"
              targetValue="vs 15% Vancouver/London"
              percentage={100}
              status="OFFICIAL"
              statutoryRef="FTA Tax Schedule"
              icon={ShieldCheck}
            />
          </div>
        </div>

        {/* 1C. FREEHOLD TENURE QUADRANT */}
        <CadranQuadrant
          eyebrow="DUBAI FREEHOLD OWNERSHIP FRAMEWORK"
          title="Foreign Title Safeguards & Master Development Statutes"
          statutorySource="Dubai Land Department & Regulation No. 3 of 2006"
          quadrants={[
            {
              title: 'Perpetual Title Deed',
              value: '100% Freehold',
              subtext: 'Unrestricted absolute ownership rights for foreign nationals in designated freehold zones with direct DLD title deed.',
              delta: 'Dubai Law No. 7/2006',
              isPositive: true,
              statutoryRef: 'Article 4, Law No. 7 of 2006',
            },
            {
              title: 'Jointly Owned Property (JOP)',
              value: 'Mollak Regulated',
              subtext: 'Service charge budgets and common area management governed by RERA with statutory audit oversight.',
              delta: 'Law No. 6 of 2019',
              isPositive: true,
              statutoryRef: 'Law No. 6 of 2019 (JOP)',
            },
            {
              title: 'Escrow Account Protection',
              value: '100% Ring-Fenced',
              subtext: 'Off-plan development funds held in trust bank accounts and released only against certified construction milestones.',
              delta: 'Law No. 8 of 2007',
              isPositive: true,
              statutoryRef: 'Law No. 8 of 2007 (Escrow)',
            },
            {
              title: 'Inheritance Probate Registry',
              value: 'DIFC Wills Reg.',
              subtext: 'Common law probate court recognition for non-Muslim expatriates to bequeath Dubai freehold assets seamlessly.',
              delta: 'DIFC Court Practice Directives',
              isPositive: true,
              statutoryRef: 'DIFC Law No. 1 of 2015',
            },
          ]}
        />
        {/* 2. SECTOR FILTER PILLS (Centered) */}
        <div className="flex flex-wrap items-center justify-center gap-2 p-2.5 bg-[#0c0c0e] rounded-full border border-white/10 backdrop-blur-2xl max-w-4xl mx-auto shadow-xl">
          {['ALL', 'DOWNTOWN', 'WATERFRONT', 'ISLAND', 'FINANCIAL', 'GOLF_SUBURBS', 'INLAND'].map((sec) => (
            <button
              key={sec}
              onClick={() => setSelectedSector(sec)}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                selectedSector === sec
                  ? 'bg-white text-black shadow-lg'
                  : 'text-zinc-400 hover:text-white'
              }`}
            >
              {sec === 'ALL' ? 'All Freehold Sectors' : sec.replace('_', ' ')}
            </button>
          ))}
        </div>

        {/* 3. LARGE PRIMARY COMMUNITY FEATURE */}
        {primaryArea && (
          <div className="group border border-white/10 rounded-3xl overflow-hidden bg-zinc-950/80 hover:border-gold/40 transition-all duration-300 grid grid-cols-1 lg:grid-cols-12 shadow-2xl backdrop-blur-md">
            <div className="lg:col-span-7 relative aspect-[16/10] bg-zinc-900 overflow-hidden">
              <Image
                src={primaryArea.image || 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=1200&q=80'}
                alt={primaryArea.name}
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 60vw"
                className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />
              <div className="absolute top-4 left-4 flex items-center gap-2">
                <span className="px-3 py-1 rounded-full text-xs font-bold bg-black/70 backdrop-blur-md text-white border border-white/15">
                  {primaryArea.sector}
                </span>
                <span className="px-3 py-1 rounded-full text-xs font-mono font-bold bg-gold text-black">
                  {primaryArea.freehold_status}
                </span>
              </div>
            </div>

            <div className="lg:col-span-5 p-6 sm:p-10 flex flex-col justify-between space-y-6">
              <div className="space-y-3">
                <div className="text-xs font-mono text-zinc-400">
                  Master Developer: <strong className="text-white">{primaryArea.master_developer}</strong>
                </div>
                <h2 className="text-3xl sm:text-4xl font-bold text-white group-hover:text-gold transition-colors leading-tight">
                  {primaryArea.name}
                </h2>
                <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed line-clamp-3">
                  {primaryArea.description}
                </p>
              </div>

              <div className="space-y-4 pt-4 border-t border-white/10">
                <div className="p-4 bg-black rounded-2xl border border-white/10 text-xs space-y-1">
                  <div className="text-[10px] text-zinc-500 font-mono uppercase">Investment Context</div>
                  <div className="text-zinc-300 leading-snug">{primaryArea.investment_profile}</div>
                </div>

                <div className="grid grid-cols-2 gap-2 text-xs font-mono text-zinc-400">
                  <div className="flex items-center gap-2 p-2.5 rounded-xl bg-zinc-900 border border-white/10">
                    <Plane className="h-3.5 w-3.5 text-gold" />
                    <span>DXB: {primaryArea.transit.airport_mins_dxb}m</span>
                  </div>
                  <div className="flex items-center gap-2 p-2.5 rounded-xl bg-zinc-900 border border-white/10">
                    <Plane className="h-3.5 w-3.5 text-gold" />
                    <span>DWC: {primaryArea.transit.airport_mins_dwc}m</span>
                  </div>
                </div>

                <Link
                  href={`/areas/${primaryArea.slug}`}
                  className="w-full py-4 rounded-full bg-white text-black hover:bg-zinc-200 text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 transition-all shadow-lg"
                >
                  <span>Explore {primaryArea.name} Dossier</span>
                  <ArrowRight className="h-4 w-4 text-black" />
                </Link>
              </div>
            </div>
          </div>
        )}

        {/* 4. ASYMMETRIC COMMUNITY ATLAS CARDS */}
        <div className="space-y-6">
          <div className="flex items-center justify-between border-b border-white/10 pb-4">
            <span className="text-[11px] font-mono font-bold uppercase tracking-widest text-gold">
              COMMUNITY DIRECTORY ({filteredAreas.length})
            </span>
            <span className="text-xs text-zinc-500 font-mono">Regulation No. 3 of 2006</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {otherAreas.map((area) => (
              <Link
                key={area.id}
                href={`/areas/${area.slug}`}
                className="group bg-zinc-950/80 rounded-3xl border border-white/10 overflow-hidden flex flex-col justify-between hover:border-gold/40 transition-all duration-300 backdrop-blur-md shadow-2xl"
              >
                <div>
                  <div className="relative aspect-[16/10] bg-zinc-900 overflow-hidden">
                    <Image
                      src={area.image || 'https://images.unsplash.com/photo-1546412414-e1885259563a?auto=format&fit=crop&w=800&q=80'}
                      alt={area.name}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />
                    <div className="absolute top-3 left-3 flex items-center gap-1.5">
                      <span className="px-3 py-0.5 rounded-full text-[10px] font-bold bg-black/70 backdrop-blur-md text-white border border-white/10">
                        {area.sector}
                      </span>
                      <span className="px-3 py-0.5 rounded-full text-[10px] font-mono font-bold bg-gold text-black">
                        {area.freehold_status}
                      </span>
                    </div>
                  </div>

                  <div className="p-6 space-y-2">
                    <div>
                      <span className="text-[10px] font-mono text-zinc-500 uppercase">
                        Master Developer: {area.master_developer}
                      </span>
                      <h3 className="text-xl font-bold text-white group-hover:text-gold transition-colors mt-0.5">
                        {area.name}
                      </h3>
                    </div>
                    <p className="text-xs text-zinc-400 line-clamp-2 leading-relaxed">
                      {area.description}
                    </p>
                  </div>
                </div>

                <div className="p-6 pt-0 space-y-3">
                  <div className="pt-3 border-t border-white/10 flex items-center justify-between text-xs text-zinc-500 font-mono">
                    <span>DXB {area.transit.airport_mins_dxb}m</span>
                    <span>•</span>
                    <span>DWC {area.transit.airport_mins_dwc}m</span>
                    <span>•</span>
                    <span>Downtown {area.transit.downtown_mins}m</span>
                  </div>

                  <div className="w-full py-2.5 px-4 rounded-full border border-white/15 bg-zinc-900 group-hover:bg-white group-hover:text-black text-xs font-bold text-center transition-all flex items-center justify-center gap-1.5 text-zinc-300">
                    <span>View Area Dossier</span>
                    <ArrowRight className="h-3 w-3" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </main>
    </div>
  )
}
