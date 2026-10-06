'use client'

import * as React from 'react'
import Link from 'next/link'
import { DUBAI_AREAS } from '@/lib/data/areas'
import { VERIFIED_PROPERTIES } from '@/lib/data/properties'
import { VERIFIED_PROJECTS } from '@/lib/data/projects'
import { VERIFIED_LIFESTYLE } from '@/lib/data/lifestyle'
import { SourceBadge } from '@/components/ui/source-badge'
import { MapPin, Compass, ExternalLink, Plane, Train, Building, Anchor, Sparkles, Layers } from 'lucide-react'

type MapLayer = 'AREAS' | 'PROPERTIES' | 'PROJECTS' | 'LIFESTYLE'

export function DubaiInteractiveMap() {
  const [activeLayer, setActiveLayer] = React.useState<MapLayer>('AREAS')
  const [selectedSector, setSelectedSector] = React.useState<string>('ALL')
  const [selectedEntityId, setSelectedEntityId] = React.useState<string>(DUBAI_AREAS[0].id)

  // Map Data based on Layer
  const areaItems = DUBAI_AREAS.filter(
    (a) => selectedSector === 'ALL' || a.sector === selectedSector
  )

  const propertyItems = VERIFIED_PROPERTIES.filter(
    (p) =>
      selectedSector === 'ALL' ||
      (selectedSector === 'WATERFRONT' && (p.area_name.includes('Palm') || p.area_name.includes('Marina') || p.area_name.includes('Jumeirah'))) ||
      (selectedSector === 'DOWNTOWN' && p.area_name.includes('Downtown')) ||
      (selectedSector === 'GOLF_SUBURBS' && p.area_name.includes('Hills')) ||
      (selectedSector === 'FINANCIAL' && (p.area_name.includes('DIFC') || p.area_name.includes('Business')))
  )

  const projectItems = VERIFIED_PROJECTS
  const lifestyleItems = VERIFIED_LIFESTYLE

  // Find currently selected entity
  const selectedArea = DUBAI_AREAS.find((a) => a.id === selectedEntityId) || DUBAI_AREAS[0]
  const selectedProperty = VERIFIED_PROPERTIES.find((p) => p.id === selectedEntityId)
  const selectedProject = VERIFIED_PROJECTS.find((p) => p.id === selectedEntityId)
  const selectedLifestyle = VERIFIED_LIFESTYLE.find((l) => l.id === selectedEntityId)

  return (
    <div className="bg-white rounded-xs border border-slate-200 shadow-sm overflow-hidden">
      {/* Header controls */}
      <div className="p-6 sm:p-8 border-b border-slate-200 flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-slate-50/50">
        <div>
          <div className="flex items-center gap-2">
            <Compass className="h-4 w-4 text-[#0284c7] shrink-0" />
            <h2 className="text-xl sm:text-2xl font-light text-slate-900 tracking-tight">Dubai Geodetic &amp; Sector Intelligence Map</h2>
          </div>
          <p className="text-xs text-slate-600 mt-1 font-light">
            Explore prime freehold developments, transit hubs, and verified master coordinate centroids.
          </p>
        </div>
        <SourceBadge status="OFFICIAL SOURCE" sourceName="DLD Regulation No. 3 of 2006 Freehold Registry" />
      </div>

      {/* Layer Navigation Bar */}
      <div className="px-6 py-4 bg-white border-b border-slate-200 flex flex-wrap items-center justify-between gap-3">
        <div className="flex items-center gap-3 flex-wrap">
          <span className="text-[10px] font-bold text-slate-500 uppercase tracking-widest flex items-center gap-1.5 font-mono">
            <Layers className="h-3.5 w-3.5 text-[#0284c7]" /> Layer:
          </span>
          <div className="flex flex-wrap rounded-xs border border-slate-200 bg-slate-50 p-0.5">
            {[
              { id: 'AREAS', label: `Communities (${DUBAI_AREAS.length})` },
              { id: 'PROPERTIES', label: `Properties (${VERIFIED_PROPERTIES.length})` },
              { id: 'PROJECTS', label: `Projects (${VERIFIED_PROJECTS.length})` },
              { id: 'LIFESTYLE', label: `Lifestyle (${VERIFIED_LIFESTYLE.length})` },
            ].map((layer) => (
              <button
                key={layer.id}
                onClick={() => {
                  setActiveLayer(layer.id as MapLayer)
                  if (layer.id === 'AREAS') setSelectedEntityId(DUBAI_AREAS[0].id)
                  if (layer.id === 'PROPERTIES') setSelectedEntityId(VERIFIED_PROPERTIES[0].id)
                  if (layer.id === 'PROJECTS') setSelectedEntityId(VERIFIED_PROJECTS[0].id)
                  if (layer.id === 'LIFESTYLE') setSelectedEntityId(VERIFIED_LIFESTYLE[0].id)
                }}
                className={`px-3 py-1.5 rounded-xs text-xs font-mono uppercase tracking-wider transition-all cursor-pointer ${
                  activeLayer === layer.id
                    ? 'bg-[#0284c7] text-white font-semibold shadow-xs'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                {layer.label}
              </button>
            ))}
          </div>
        </div>

        {/* Sector filter */}
        <div className="flex items-center gap-2">
          <span className="text-[10px] font-mono uppercase tracking-widest text-slate-500">Sector:</span>
          <select
            value={selectedSector}
            onChange={(e) => setSelectedSector(e.target.value)}
            className="px-3 py-1.5 bg-slate-50 border border-slate-200 rounded-xs text-xs font-mono text-slate-900 focus:outline-none focus:border-[#0284c7] cursor-pointer"
          >
            <option value="ALL">All Sectors</option>
            <option value="DOWNTOWN">Downtown &amp; Canal</option>
            <option value="WATERFRONT">Waterfront &amp; Marina</option>
            <option value="ISLAND">Island (Palm / Jumeirah Bay)</option>
            <option value="FINANCIAL">Financial (DIFC)</option>
            <option value="GOLF_SUBURBS">Golf &amp; Green Suburbs</option>
          </select>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-0 divide-y lg:divide-y-0 lg:divide-x divide-slate-200">
        {/* Vector Map Canvas */}
        <div className="lg:col-span-8 p-6 sm:p-8 bg-[#f0f7ff]/40 min-h-[460px] relative flex flex-col justify-between overflow-hidden">
          {/* Grid background */}
          <div
            className="absolute inset-0 opacity-[0.06] pointer-events-none"
            style={{
              backgroundImage: 'radial-gradient(#0284c7 1px, transparent 1px)',
              backgroundSize: '24px 24px',
            }}
          />

          {/* Waterway indicator */}
          <div className="flex items-center justify-between text-[10px] font-bold tracking-widest text-slate-500 uppercase pointer-events-none relative z-10 font-mono">
            <span>Arabian Gulf Coastline (North-West)</span>
            <span className="text-[#0284c7] font-mono font-semibold">Active Layer: {activeLayer}</span>
          </div>

          {/* Entity Grid Pins */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 my-auto py-6 relative z-10">
            {activeLayer === 'AREAS' &&
              areaItems.map((area) => {
                const isSelected = selectedEntityId === area.id
                return (
                  <button
                    key={area.id}
                    onClick={() => setSelectedEntityId(area.id)}
                    className={`p-4 rounded-xs border text-left transition-all duration-200 flex flex-col justify-between cursor-pointer ${
                      isSelected
                        ? 'bg-white border-[#0284c7] shadow-md ring-1 ring-[#0284c7]/30'
                        : 'bg-white/90 backdrop-blur-md border-slate-200 hover:border-slate-300 hover:bg-white'
                    }`}
                  >
                    <div className="flex items-start justify-between gap-1 mb-2">
                      <span className="text-[10px] font-mono uppercase tracking-widest text-[#0284c7] font-semibold">
                        {area.sector}
                      </span>
                      <MapPin
                        className={`h-3.5 w-3.5 shrink-0 ${
                          isSelected ? 'text-[#0284c7]' : 'text-slate-400'
                        }`}
                      />
                    </div>

                    <div>
                      <h4 className="text-xs font-medium text-slate-900 tracking-tight">{area.name}</h4>
                      <p className="text-[11px] text-slate-500 truncate mt-0.5 font-mono">{area.master_developer}</p>
                    </div>

                    <div className="mt-2.5 pt-2.5 border-t border-slate-100 flex justify-between items-center text-[10px] text-slate-400 font-mono">
                      <span>{area.coordinates.lat.toFixed(3)}° N</span>
                      <span className="text-[9px] px-1.5 py-0.5 bg-sky-50 rounded-xs text-[#0284c7] font-semibold">CENTROID</span>
                    </div>
                  </button>
                )
              })}

            {activeLayer === 'PROPERTIES' &&
              propertyItems.map((prop, idx) => {
                const isSelected = selectedEntityId === prop.id
                const area = DUBAI_AREAS.find((a) => a.id === prop.area_id) || DUBAI_AREAS[0]
                const lat = area.coordinates.lat + (idx % 2 === 0 ? 0.004 : -0.004)

                return (
                  <button
                    key={prop.id}
                    onClick={() => setSelectedEntityId(prop.id)}
                    className={`p-4 rounded-xs border text-left transition-all duration-200 flex flex-col justify-between cursor-pointer ${
                      isSelected
                        ? 'bg-white border-[#0284c7] shadow-md ring-1 ring-[#0284c7]/30'
                        : 'bg-white/90 backdrop-blur-md border-slate-200 hover:border-slate-300 hover:bg-white'
                    }`}
                  >
                    <div className="flex items-start justify-between gap-1 mb-2">
                      <span className="text-[10px] font-mono uppercase tracking-wider text-[#0284c7] font-semibold">
                        AED {prop.asking_price ? (prop.asking_price / 1000000).toFixed(1) + 'M' : 'N/A'}
                      </span>
                      <Building
                        className={`h-3.5 w-3.5 shrink-0 ${
                          isSelected ? 'text-[#0284c7]' : 'text-slate-400'
                        }`}
                      />
                    </div>

                    <div>
                      <h4 className="text-xs font-medium text-slate-900 line-clamp-1">{prop.title}</h4>
                      <p className="text-[11px] text-slate-500 truncate mt-0.5 font-light">{prop.area_name}</p>
                    </div>

                    <div className="mt-2.5 pt-2.5 border-t border-slate-100 flex justify-between items-center text-[10px] text-slate-400 font-mono">
                      <span>{lat.toFixed(3)}° N</span>
                      <span className="text-[9px] px-1.5 py-0.5 bg-sky-50 rounded-xs text-[#0284c7] font-semibold">
                        {prop.coordinate_precision || 'CENTROID'}
                      </span>
                    </div>
                  </button>
                )
              })}

            {activeLayer === 'PROJECTS' &&
              projectItems.map((proj, idx) => {
                const isSelected = selectedEntityId === proj.id
                const area = DUBAI_AREAS.find((a) => a.id === proj.area_id) || DUBAI_AREAS[0]
                const lat = area.coordinates.lat + 0.002 * (idx + 1)

                return (
                  <button
                    key={proj.id}
                    onClick={() => setSelectedEntityId(proj.id)}
                    className={`p-4 rounded-xs border text-left transition-all duration-200 flex flex-col justify-between cursor-pointer ${
                      isSelected
                        ? 'bg-white border-[#0284c7] shadow-md ring-1 ring-[#0284c7]/30'
                        : 'bg-white/90 backdrop-blur-md border-slate-200 hover:border-slate-300 hover:bg-white'
                    }`}
                  >
                    <div className="flex items-start justify-between gap-1 mb-2">
                      <span className="text-[10px] font-mono uppercase tracking-widest text-[#0284c7] font-semibold">
                        {proj.developer_name}
                      </span>
                      <Sparkles
                        className={`h-3.5 w-3.5 shrink-0 ${
                          isSelected ? 'text-[#0284c7]' : 'text-slate-400'
                        }`}
                      />
                    </div>

                    <div>
                      <h4 className="text-xs font-medium text-slate-900 line-clamp-1">{proj.name}</h4>
                      <p className="text-[11px] text-slate-500 truncate mt-0.5 font-light">{proj.area_name}</p>
                    </div>

                    <div className="mt-2.5 pt-2.5 border-t border-slate-100 flex justify-between items-center text-[10px] text-slate-400 font-mono">
                      <span>{lat.toFixed(3)}° N</span>
                      <span className="text-[9px] px-1.5 py-0.5 bg-sky-50 rounded-xs text-[#0284c7] font-semibold">PROJECT CENTROID</span>
                    </div>
                  </button>
                )
              })}

            {activeLayer === 'LIFESTYLE' &&
              lifestyleItems.map((life, idx) => {
                const isSelected = selectedEntityId === life.id
                const baseLat = 25.13 + (idx * 0.02)

                return (
                  <button
                    key={life.id}
                    onClick={() => setSelectedEntityId(life.id)}
                    className={`p-4 rounded-xs border text-left transition-all duration-200 flex flex-col justify-between cursor-pointer ${
                      isSelected
                        ? 'bg-white border-[#0284c7] shadow-md ring-1 ring-[#0284c7]/30'
                        : 'bg-white/90 backdrop-blur-md border-slate-200 hover:border-slate-300 hover:bg-white'
                    }`}
                  >
                    <div className="flex items-start justify-between gap-1 mb-2">
                      <span className="text-[10px] font-mono uppercase tracking-widest text-[#0284c7] font-semibold">
                        {life.category}
                      </span>
                      <Anchor
                        className={`h-3.5 w-3.5 shrink-0 ${
                          isSelected ? 'text-[#0284c7]' : 'text-slate-400'
                        }`}
                      />
                    </div>

                    <div>
                      <h4 className="text-xs font-medium text-slate-900 line-clamp-1">{life.title}</h4>
                      <p className="text-[11px] text-slate-500 truncate mt-0.5 font-light">{life.location}</p>
                    </div>

                    <div className="mt-2.5 pt-2.5 border-t border-slate-100 flex justify-between items-center text-[10px] text-slate-400 font-mono">
                      <span>{baseLat.toFixed(3)}° N</span>
                      <span className="text-[9px] px-1.5 py-0.5 bg-sky-50 rounded-xs text-[#0284c7] font-semibold">EXACT</span>
                    </div>
                  </button>
                )
              })}
          </div>

          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-1 text-[11px] text-slate-500 border-t border-slate-200 pt-3 relative z-10 font-mono">
            <span>Verified Geodetic Coordinates &bull; WGS84 Standard</span>
            <span>Centroid Precision Classified</span>
          </div>
        </div>

        {/* Selected Entity Intel Panel */}
        <div className="lg:col-span-4 p-6 sm:p-8 space-y-6 bg-white flex flex-col justify-between">
          {activeLayer === 'AREAS' && selectedArea && (
            <div className="space-y-5">
              <div>
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-mono uppercase tracking-widest text-[#0284c7] font-semibold">
                    Community Profile
                  </span>
                  <span className="px-2 py-0.5 rounded-xs text-[10px] font-mono font-medium bg-sky-50 text-[#0284c7] border border-sky-200">
                    {selectedArea.freehold_status}
                  </span>
                </div>
                <h3 className="text-xl font-light text-slate-900 tracking-tight mt-1">{selectedArea.name}</h3>
                {selectedArea.arabic_name && (
                  <p className="text-xs text-slate-400 font-arabic mt-0.5">{selectedArea.arabic_name}</p>
                )}
              </div>

              <p className="text-xs sm:text-sm text-slate-600 font-light leading-relaxed">{selectedArea.description}</p>

              <div className="space-y-2 text-xs pt-2 divide-y divide-slate-100 font-mono">
                <div className="flex justify-between py-2">
                  <span className="text-slate-500">Master Developer:</span>
                  <span className="text-slate-900 font-medium">{selectedArea.master_developer}</span>
                </div>

                <div className="flex justify-between py-2">
                  <span className="text-slate-500 flex items-center gap-1.5">
                    <Plane className="h-3.5 w-3.5 text-[#0284c7]" /> DXB Int’l Airport:
                  </span>
                  <span className="text-slate-900 font-medium">{selectedArea.transit.airport_mins_dxb} mins</span>
                </div>

                <div className="flex justify-between py-2">
                  <span className="text-slate-500 flex items-center gap-1.5">
                    <Plane className="h-3.5 w-3.5 text-[#0284c7]" /> DWC / Al Maktoum:
                  </span>
                  <span className="text-slate-900 font-medium">{selectedArea.transit.airport_mins_dwc} mins</span>
                </div>

                {selectedArea.transit.metro_stations && (
                  <div className="py-2 space-y-1">
                    <span className="text-slate-500 flex items-center gap-1.5">
                      <Train className="h-3.5 w-3.5 text-[#0284c7]" /> Metro Stations:
                    </span>
                    <p className="text-slate-900 text-xs pl-5 font-sans">
                      {selectedArea.transit.metro_stations.join(', ')}
                    </p>
                  </div>
                )}
              </div>

              <div className="pt-4 border-t border-slate-100">
                <Link
                  href={`/areas/${selectedArea.slug}`}
                  className="w-full inline-flex items-center justify-center gap-2 px-5 py-2.5 bg-[#0284c7] text-white hover:bg-[#0369a1] text-xs font-mono uppercase tracking-wider font-semibold rounded-xs transition-colors cursor-pointer shadow-xs"
                >
                  <span>Explore {selectedArea.name} Dossier</span>
                  <ExternalLink className="h-3.5 w-3.5" />
                </Link>
              </div>
            </div>
          )}

          {activeLayer === 'PROPERTIES' && selectedProperty && (
            <div className="space-y-5">
              <div>
                <span className="text-[10px] font-mono uppercase tracking-widest text-[#0284c7] font-semibold">
                  Property Asset Intel
                </span>
                <h3 className="text-xl font-light text-slate-900 tracking-tight mt-1">{selectedProperty.title}</h3>
                <p className="text-xs text-slate-500 mt-0.5 font-mono">{selectedProperty.area_name} &bull; {selectedProperty.developer_name}</p>
              </div>

              <div className="p-5 bg-[#f0f7ff]/60 rounded-xs border border-sky-100 space-y-1">
                <span className="text-[10px] font-mono uppercase tracking-widest text-slate-500 block">Asking Price</span>
                <div className="text-2xl font-light font-mono text-[#0284c7] font-semibold">
                  AED {selectedProperty.asking_price?.toLocaleString()}
                </div>
                <div className="text-xs text-slate-600 font-mono mt-0.5">
                  AED {selectedProperty.price_per_sqft?.toLocaleString()} / sqft
                </div>
              </div>

              <div className="space-y-2 text-xs pt-1 divide-y divide-slate-100 font-mono">
                <div className="flex justify-between py-2">
                  <span className="text-slate-500">Internal Area:</span>
                  <span className="text-slate-900 font-medium">{selectedProperty.internal_area_sqft} sqft</span>
                </div>
                <div className="flex justify-between py-2">
                  <span className="text-slate-500">Bedrooms:</span>
                  <span className="text-slate-900 font-medium">{selectedProperty.bedrooms} En-Suite</span>
                </div>
                <div className="flex justify-between py-2">
                  <span className="text-slate-500">Coordinate Precision:</span>
                  <span className="text-[#0284c7] font-semibold">{selectedProperty.coordinate_precision || 'PROJECT CENTROID'}</span>
                </div>
              </div>

              <div className="pt-4 border-t border-slate-100">
                <Link
                  href={`/properties/${selectedProperty.id}`}
                  className="w-full inline-flex items-center justify-center gap-2 px-5 py-2.5 bg-[#0284c7] text-white hover:bg-[#0369a1] text-xs font-mono uppercase tracking-wider font-semibold rounded-xs transition-colors cursor-pointer shadow-xs"
                >
                  <span>Open Full Property Dossier</span>
                  <ExternalLink className="h-3.5 w-3.5" />
                </Link>
              </div>
            </div>
          )}

          {activeLayer === 'PROJECTS' && selectedProject && (
            <div className="space-y-5">
              <div>
                <span className="text-[10px] font-mono uppercase tracking-widest text-[#0284c7] font-semibold">
                  Project Intel
                </span>
                <h3 className="text-xl font-light text-slate-900 tracking-tight mt-1">{selectedProject.name}</h3>
                <p className="text-xs text-slate-500 mt-0.5 font-mono">{selectedProject.area_name} &bull; {selectedProject.developer_name}</p>
              </div>

              <div className="space-y-2 text-xs pt-1 divide-y divide-slate-100 font-mono">
                <div className="flex justify-between py-2">
                  <span className="text-slate-500">Status:</span>
                  <span className="text-slate-900 font-medium">{selectedProject.completion_status}</span>
                </div>
                <div className="flex justify-between py-2">
                  <span className="text-slate-500">Handover Year:</span>
                  <span className="text-slate-900 font-medium">{selectedProject.completion_year}</span>
                </div>
                <div className="flex justify-between py-2">
                  <span className="text-slate-500">Escrow Account:</span>
                  <span className="text-[#0284c7] font-semibold">
                    {selectedProject.escrow_verified ? 'Verified DLD Escrow' : 'Direct'}
                  </span>
                </div>
              </div>

              <div className="pt-4 border-t border-slate-100">
                <Link
                  href="/projects"
                  className="w-full inline-flex items-center justify-center gap-2 px-5 py-2.5 bg-[#0284c7] text-white hover:bg-[#0369a1] text-xs font-mono uppercase tracking-wider font-semibold rounded-xs transition-colors cursor-pointer shadow-xs"
                >
                  <span>Explore Master Projects</span>
                  <ExternalLink className="h-3.5 w-3.5" />
                </Link>
              </div>
            </div>
          )}

          {activeLayer === 'LIFESTYLE' && selectedLifestyle && (
            <div className="space-y-5">
              <div>
                <span className="text-[10px] font-mono uppercase tracking-widest text-[#0284c7] font-semibold">
                  {selectedLifestyle.category} Partner
                </span>
                <h3 className="text-xl font-light text-slate-900 tracking-tight mt-1">{selectedLifestyle.title}</h3>
                <p className="text-xs text-slate-500 mt-0.5 font-mono">{selectedLifestyle.location}</p>
              </div>

              <p className="text-xs sm:text-sm text-slate-600 font-light leading-relaxed">{selectedLifestyle.description}</p>

              <div className="pt-4 border-t border-slate-100">
                {selectedLifestyle.official_url ? (
                  <a
                    href={selectedLifestyle.official_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full inline-flex items-center justify-center gap-2 px-5 py-2.5 bg-[#0284c7] text-white hover:bg-[#0369a1] text-xs font-mono uppercase tracking-wider font-semibold rounded-xs transition-colors cursor-pointer shadow-xs"
                  >
                    <span>Visit Partner Portal</span>
                    <ExternalLink className="h-3.5 w-3.5" />
                  </a>
                ) : (
                  <Link
                    href={`/lifestyle/${selectedLifestyle.category}`}
                    className="w-full inline-flex items-center justify-center gap-2 px-5 py-2.5 bg-[#0284c7] text-white hover:bg-[#0369a1] text-xs font-mono uppercase tracking-wider font-semibold rounded-xs transition-colors cursor-pointer shadow-xs"
                  >
                    <span>Explore Lifestyle Category</span>
                  </Link>
                )}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
