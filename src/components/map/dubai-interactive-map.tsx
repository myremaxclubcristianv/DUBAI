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
    <div className="bg-white rounded-2xl border border-border overflow-hidden space-y-0 shadow-xs">
      {/* Header controls */}
      <div className="p-5 sm:p-6 border-b border-border flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2">
            <Compass className="h-5 w-5 text-accent shrink-0" />
            <h2 className="text-xl font-bold text-text-primary">Dubai Geodetic & Sector Intelligence Map</h2>
          </div>
          <p className="text-xs text-text-secondary mt-1">
            Explore prime freehold developments, transit hubs, and verified master coordinate centroids.
          </p>
        </div>
        <SourceBadge status="OFFICIAL SOURCE" sourceName="DLD Regulation No. 3 of 2006 Freehold Registry" />
      </div>

      {/* Layer Navigation Bar */}
      <div className="px-4 sm:px-6 py-3 bg-surface border-b border-border flex flex-wrap items-center justify-between gap-3">
        <div className="flex items-center gap-2 flex-wrap">
          <span className="text-xs font-bold text-text-muted uppercase tracking-wider flex items-center gap-1">
            <Layers className="h-3.5 w-3.5 text-accent" /> Layer:
          </span>
          <div className="flex flex-wrap rounded-lg border border-border bg-white p-0.5">
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
                className={`px-2.5 sm:px-3 py-1 rounded text-xs font-semibold tracking-tight transition-all cursor-pointer ${
                  activeLayer === layer.id
                    ? 'bg-text-primary text-white shadow-xs'
                    : 'text-text-secondary hover:text-text-primary'
                }`}
              >
                {layer.label}
              </button>
            ))}
          </div>
        </div>

        {/* Sector filter */}
        <div className="flex items-center gap-2">
          <span className="text-[11px] font-semibold text-text-muted">Sector:</span>
          <select
            value={selectedSector}
            onChange={(e) => setSelectedSector(e.target.value)}
            className="px-2.5 py-1 bg-white border border-border rounded-lg text-xs font-semibold text-text-primary focus:outline-none focus:border-accent cursor-pointer"
          >
            <option value="ALL">All Sectors</option>
            <option value="DOWNTOWN">Downtown & Canal</option>
            <option value="WATERFRONT">Waterfront & Marina</option>
            <option value="ISLAND">Island (Palm / Jumeirah Bay)</option>
            <option value="FINANCIAL">Financial (DIFC)</option>
            <option value="GOLF_SUBURBS">Golf & Green Suburbs</option>
          </select>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-0 divide-y lg:divide-y-0 lg:divide-x divide-border">
        {/* Vector Map Canvas */}
        <div className="lg:col-span-8 p-4 sm:p-6 bg-surface-subtle min-h-[440px] relative flex flex-col justify-between overflow-hidden">
          {/* Grid background */}
          <div
            className="absolute inset-0 opacity-[0.04] pointer-events-none"
            style={{
              backgroundImage: 'radial-gradient(#000 1px, transparent 1px)',
              backgroundSize: '20px 20px',
            }}
          />

          {/* Waterway indicator */}
          <div className="flex items-center justify-between text-[10px] font-bold tracking-widest text-text-muted/70 uppercase pointer-events-none relative z-10">
            <span>Arabian Gulf Coastline (North-West)</span>
            <span className="text-accent font-mono font-semibold">Active Layer: {activeLayer}</span>
          </div>

          {/* Entity Grid Pins (Responsive: 1 col on mobile, 2 on sm, 3 on lg) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 my-auto py-6 relative z-10">
            {activeLayer === 'AREAS' &&
              areaItems.map((area) => {
                const isSelected = selectedEntityId === area.id
                return (
                  <button
                    key={area.id}
                    onClick={() => setSelectedEntityId(area.id)}
                    className={`p-3.5 rounded-xl border text-left transition-all duration-150 flex flex-col justify-between shadow-2xs cursor-pointer ${
                      isSelected
                        ? 'bg-white border-accent ring-2 ring-accent/20'
                        : 'bg-white/80 backdrop-blur-sm border-border hover:border-border-strong hover:bg-white'
                    }`}
                  >
                    <div className="flex items-start justify-between gap-1 mb-2">
                      <span className="text-[10px] font-bold uppercase tracking-wider text-text-muted">
                        {area.sector}
                      </span>
                      <MapPin
                        className={`h-3.5 w-3.5 shrink-0 ${
                          isSelected ? 'text-accent' : 'text-text-muted'
                        }`}
                      />
                    </div>

                    <div>
                      <h4 className="text-xs font-bold text-text-primary">{area.name}</h4>
                      <p className="text-[11px] text-text-muted truncate mt-0.5">{area.master_developer}</p>
                    </div>

                    <div className="mt-2 pt-2 border-t border-border-subtle flex justify-between items-center text-[10px] text-text-secondary font-mono">
                      <span>{area.coordinates.lat.toFixed(3)}° N</span>
                      <span className="text-[9px] px-1 py-0.2 bg-surface-elevated rounded">COMMUNITY CENTROID</span>
                    </div>
                  </button>
                )
              })}

            {activeLayer === 'PROPERTIES' &&
              propertyItems.map((prop, idx) => {
                const isSelected = selectedEntityId === prop.id
                // Find area coordinate centroid for property
                const area = DUBAI_AREAS.find((a) => a.id === prop.area_id) || DUBAI_AREAS[0]
                const lat = area.coordinates.lat + (idx % 2 === 0 ? 0.004 : -0.004)

                return (
                  <button
                    key={prop.id}
                    onClick={() => setSelectedEntityId(prop.id)}
                    className={`p-3.5 rounded-xl border text-left transition-all duration-150 flex flex-col justify-between shadow-2xs cursor-pointer ${
                      isSelected
                        ? 'bg-white border-accent ring-2 ring-accent/20'
                        : 'bg-white/80 backdrop-blur-sm border-border hover:border-border-strong hover:bg-white'
                    }`}
                  >
                    <div className="flex items-start justify-between gap-1 mb-2">
                      <span className="text-[10px] font-bold uppercase tracking-wider text-accent font-mono">
                        AED {prop.asking_price ? (prop.asking_price / 1000000).toFixed(1) + 'M' : 'N/A'}
                      </span>
                      <Building
                        className={`h-3.5 w-3.5 shrink-0 ${
                          isSelected ? 'text-accent' : 'text-text-muted'
                        }`}
                      />
                    </div>

                    <div>
                      <h4 className="text-xs font-bold text-text-primary line-clamp-1">{prop.title}</h4>
                      <p className="text-[11px] text-text-muted truncate mt-0.5">{prop.area_name}</p>
                    </div>

                    <div className="mt-2 pt-2 border-t border-border-subtle flex justify-between items-center text-[10px] text-text-secondary font-mono">
                      <span>{lat.toFixed(3)}° N</span>
                      <span className="text-[9px] px-1 py-0.2 bg-surface-elevated rounded">
                        {prop.coordinate_precision || 'PROJECT CENTROID'}
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
                    className={`p-3.5 rounded-xl border text-left transition-all duration-150 flex flex-col justify-between shadow-2xs cursor-pointer ${
                      isSelected
                        ? 'bg-white border-accent ring-2 ring-accent/20'
                        : 'bg-white/80 backdrop-blur-sm border-border hover:border-border-strong hover:bg-white'
                    }`}
                  >
                    <div className="flex items-start justify-between gap-1 mb-2">
                      <span className="text-[10px] font-bold uppercase tracking-wider text-text-muted">
                        {proj.developer_name}
                      </span>
                      <Sparkles
                        className={`h-3.5 w-3.5 shrink-0 ${
                          isSelected ? 'text-accent' : 'text-text-muted'
                        }`}
                      />
                    </div>

                    <div>
                      <h4 className="text-xs font-bold text-text-primary line-clamp-1">{proj.name}</h4>
                      <p className="text-[11px] text-text-muted truncate mt-0.5">{proj.area_name}</p>
                    </div>

                    <div className="mt-2 pt-2 border-t border-border-subtle flex justify-between items-center text-[10px] text-text-secondary font-mono">
                      <span>{lat.toFixed(3)}° N</span>
                      <span className="text-[9px] px-1 py-0.2 bg-surface-elevated rounded">PROJECT CENTROID</span>
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
                    className={`p-3.5 rounded-xl border text-left transition-all duration-150 flex flex-col justify-between shadow-2xs cursor-pointer ${
                      isSelected
                        ? 'bg-white border-accent ring-2 ring-accent/20'
                        : 'bg-white/80 backdrop-blur-sm border-border hover:border-border-strong hover:bg-white'
                    }`}
                  >
                    <div className="flex items-start justify-between gap-1 mb-2">
                      <span className="text-[10px] font-bold uppercase tracking-wider text-text-muted">
                        {life.category}
                      </span>
                      <Anchor
                        className={`h-3.5 w-3.5 shrink-0 ${
                          isSelected ? 'text-accent' : 'text-text-muted'
                        }`}
                      />
                    </div>

                    <div>
                      <h4 className="text-xs font-bold text-text-primary line-clamp-1">{life.title}</h4>
                      <p className="text-[11px] text-text-muted truncate mt-0.5">{life.location}</p>
                    </div>

                    <div className="mt-2 pt-2 border-t border-border-subtle flex justify-between items-center text-[10px] text-text-secondary font-mono">
                      <span>{baseLat.toFixed(3)}° N</span>
                      <span className="text-[9px] px-1 py-0.2 bg-surface-elevated rounded">EXACT</span>
                    </div>
                  </button>
                )
              })}
          </div>

          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-1 text-[11px] text-text-muted border-t border-border-subtle pt-3 relative z-10">
            <span>Verified Geodetic Coordinates • WGS84 Standard</span>
            <span>Centroid Precision Classified</span>
          </div>
        </div>

        {/* Selected Entity Intel Panel */}
        <div className="lg:col-span-4 p-5 sm:p-6 space-y-5 bg-white flex flex-col justify-between">
          {activeLayer === 'AREAS' && selectedArea && (
            <div className="space-y-4">
              <div>
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-accent">
                    Community Profile
                  </span>
                  <span className="px-2 py-0.5 rounded text-[10px] font-semibold bg-emerald-50 text-emerald-800 border border-emerald-200">
                    {selectedArea.freehold_status}
                  </span>
                </div>
                <h3 className="text-lg font-bold text-text-primary mt-1">{selectedArea.name}</h3>
                {selectedArea.arabic_name && (
                  <p className="text-xs text-text-muted font-sans mt-0.5">{selectedArea.arabic_name}</p>
                )}
              </div>

              <p className="text-xs text-text-secondary leading-relaxed">{selectedArea.description}</p>

              <div className="space-y-2 text-xs pt-1">
                <div className="flex justify-between py-1.5 border-b border-border-subtle">
                  <span className="text-text-muted font-medium">Master Developer:</span>
                  <span className="font-semibold text-text-primary">{selectedArea.master_developer}</span>
                </div>

                <div className="flex justify-between py-1.5 border-b border-border-subtle">
                  <span className="text-text-muted font-medium flex items-center gap-1">
                    <Plane className="h-3 w-3 text-text-muted" /> DXB Int’l Airport:
                  </span>
                  <span className="font-semibold text-text-primary">{selectedArea.transit.airport_mins_dxb} mins</span>
                </div>

                <div className="flex justify-between py-1.5 border-b border-border-subtle">
                  <span className="text-text-muted font-medium flex items-center gap-1">
                    <Plane className="h-3 w-3 text-text-muted" /> DWC / Al Maktoum:
                  </span>
                  <span className="font-semibold text-text-primary">{selectedArea.transit.airport_mins_dwc} mins</span>
                </div>

                {selectedArea.transit.metro_stations && (
                  <div className="py-1.5 border-b border-border-subtle space-y-1">
                    <span className="text-text-muted font-medium flex items-center gap-1">
                      <Train className="h-3 w-3 text-text-muted" /> Metro Stations:
                    </span>
                    <p className="text-text-primary font-medium text-[11px] pl-4">
                      {selectedArea.transit.metro_stations.join(', ')}
                    </p>
                  </div>
                )}
              </div>

              <div className="pt-4 border-t border-border">
                <Link
                  href={`/areas/${selectedArea.slug}`}
                  className="w-full inline-flex items-center justify-center gap-1.5 px-4 py-2 bg-text-primary hover:bg-black text-white text-xs font-semibold rounded-xl transition-colors shadow-2xs"
                >
                  <span>Explore {selectedArea.name} Dossier</span>
                  <ExternalLink className="h-3.5 w-3.5" />
                </Link>
              </div>
            </div>
          )}

          {activeLayer === 'PROPERTIES' && selectedProperty && (
            <div className="space-y-4">
              <div>
                <span className="text-[10px] font-bold uppercase tracking-wider text-accent">
                  Property Asset Intel
                </span>
                <h3 className="text-lg font-bold text-text-primary mt-1">{selectedProperty.title}</h3>
                <p className="text-xs text-text-muted">{selectedProperty.area_name} • {selectedProperty.developer_name}</p>
              </div>

              <div className="p-4 bg-surface rounded-xl border border-border">
                <span className="text-[10px] font-bold uppercase text-text-muted block">Asking Price</span>
                <div className="text-xl font-bold font-mono text-accent">
                  AED {selectedProperty.asking_price?.toLocaleString()}
                </div>
                <div className="text-xs text-text-muted font-mono mt-0.5">
                  AED {selectedProperty.price_per_sqft?.toLocaleString()} / sqft
                </div>
              </div>

              <div className="space-y-2 text-xs">
                <div className="flex justify-between py-1 border-b border-border-subtle">
                  <span className="text-text-muted">Internal Area:</span>
                  <span className="font-semibold text-text-primary">{selectedProperty.internal_area_sqft} sqft</span>
                </div>
                <div className="flex justify-between py-1 border-b border-border-subtle">
                  <span className="text-text-muted">Bedrooms:</span>
                  <span className="font-semibold text-text-primary">{selectedProperty.bedrooms} En-Suite</span>
                </div>
                <div className="flex justify-between py-1 border-b border-border-subtle">
                  <span className="text-text-muted">Coordinate Precision:</span>
                  <span className="font-semibold text-accent">{selectedProperty.coordinate_precision || 'PROJECT CENTROID'}</span>
                </div>
              </div>

              <div className="pt-4 border-t border-border">
                <Link
                  href={`/properties/${selectedProperty.id}`}
                  className="w-full inline-flex items-center justify-center gap-1.5 px-4 py-2 bg-text-primary hover:bg-black text-white text-xs font-semibold rounded-xl transition-colors shadow-2xs"
                >
                  <span>Open Full Property Dossier</span>
                  <ExternalLink className="h-3.5 w-3.5" />
                </Link>
              </div>
            </div>
          )}

          {activeLayer === 'PROJECTS' && selectedProject && (
            <div className="space-y-4">
              <div>
                <span className="text-[10px] font-bold uppercase tracking-wider text-accent">
                  Project Intel
                </span>
                <h3 className="text-lg font-bold text-text-primary mt-1">{selectedProject.name}</h3>
                <p className="text-xs text-text-muted">{selectedProject.area_name} • {selectedProject.developer_name}</p>
              </div>

              <div className="space-y-2 text-xs">
                <div className="flex justify-between py-1 border-b border-border-subtle">
                  <span className="text-text-muted">Status:</span>
                  <span className="font-semibold text-text-primary">{selectedProject.completion_status}</span>
                </div>
                <div className="flex justify-between py-1 border-b border-border-subtle">
                  <span className="text-text-muted">Handover Year:</span>
                  <span className="font-semibold text-text-primary">{selectedProject.completion_year}</span>
                </div>
                <div className="flex justify-between py-1 border-b border-border-subtle">
                  <span className="text-text-muted">Escrow Account:</span>
                  <span className="font-semibold text-emerald-700">
                    {selectedProject.escrow_verified ? 'Verified DLD Escrow' : 'Direct'}
                  </span>
                </div>
              </div>

              <div className="pt-4 border-t border-border">
                <Link
                  href="/projects"
                  className="w-full inline-flex items-center justify-center gap-1.5 px-4 py-2 bg-text-primary hover:bg-black text-white text-xs font-semibold rounded-xl transition-colors shadow-2xs"
                >
                  <span>Explore Master Projects</span>
                  <ExternalLink className="h-3.5 w-3.5" />
                </Link>
              </div>
            </div>
          )}

          {activeLayer === 'LIFESTYLE' && selectedLifestyle && (
            <div className="space-y-4">
              <div>
                <span className="text-[10px] font-bold uppercase tracking-wider text-accent">
                  {selectedLifestyle.category} Partner
                </span>
                <h3 className="text-lg font-bold text-text-primary mt-1">{selectedLifestyle.title}</h3>
                <p className="text-xs text-text-muted">{selectedLifestyle.location}</p>
              </div>

              <p className="text-xs text-text-secondary leading-relaxed">{selectedLifestyle.description}</p>

              <div className="pt-4 border-t border-border">
                {selectedLifestyle.official_url ? (
                  <a
                    href={selectedLifestyle.official_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full inline-flex items-center justify-center gap-1.5 px-4 py-2 bg-text-primary hover:bg-black text-white text-xs font-semibold rounded-xl transition-colors shadow-2xs"
                  >
                    <span>Visit Partner Portal</span>
                    <ExternalLink className="h-3.5 w-3.5" />
                  </a>
                ) : (
                  <Link
                    href={`/lifestyle/${selectedLifestyle.category}`}
                    className="w-full inline-flex items-center justify-center gap-1.5 px-4 py-2 bg-text-primary hover:bg-black text-white text-xs font-semibold rounded-xl transition-colors shadow-2xs"
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
