'use client'

import * as React from 'react'
import { useRouter } from 'next/navigation'
import { Search, Building, MapPin, Calculator, Utensils, Plane, Anchor, ShieldCheck, ArrowRight } from 'lucide-react'
import { VERIFIED_PROPERTIES } from '@/lib/data/properties'
import { VERIFIED_PROJECTS } from '@/lib/data/projects'
import { DUBAI_AREAS } from '@/lib/data/areas'
import { VERIFIED_DEVELOPERS } from '@/lib/data/developers'
import { VERIFIED_LIFESTYLE } from '@/lib/data/lifestyle'
import { NETWORK_ECOSYSTEM_PILLARS, VERIFIED_DUBAI_CONFERENCES } from '@/lib/data/network'

interface GlobalSearchDialogProps {
  isOpen: boolean
  onClose: () => void
}

export function GlobalSearchDialog({ isOpen, onClose }: GlobalSearchDialogProps) {
  const [query, setQuery] = React.useState('')
  const router = useRouter()
  const inputRef = React.useRef<HTMLInputElement>(null)

  React.useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 50)
    }
  }, [isOpen])

  React.useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault()
        if (isOpen) onClose()
      }
      if (e.key === 'Escape' && isOpen) {
        onClose()
      }
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [isOpen, onClose])

  if (!isOpen) return null

  const q = query.toLowerCase().trim()

  const matchedProperties = q
    ? VERIFIED_PROPERTIES.filter(
        (p) =>
          p.title.toLowerCase().includes(q) ||
          p.area_name.toLowerCase().includes(q) ||
          p.developer_name.toLowerCase().includes(q) ||
          p.property_type.toLowerCase().includes(q)
      ).slice(0, 3)
    : []

  const matchedProjects = q
    ? VERIFIED_PROJECTS.filter(
        (proj) =>
          proj.name.toLowerCase().includes(q) ||
          proj.developer_name.toLowerCase().includes(q) ||
          proj.area_name.toLowerCase().includes(q)
      ).slice(0, 3)
    : []

  const matchedAreas = q
    ? DUBAI_AREAS.filter(
        (a) => a.name.toLowerCase().includes(q) || a.master_developer.toLowerCase().includes(q)
      ).slice(0, 3)
    : []

  const matchedDevelopers = q
    ? VERIFIED_DEVELOPERS.filter((d) => d.name.toLowerCase().includes(q)).slice(0, 3)
    : []

  const matchedNetwork = q
    ? [
        ...NETWORK_ECOSYSTEM_PILLARS.filter(
          (net) => net.title.toLowerCase().includes(q) || net.description.toLowerCase().includes(q)
        ).map((n) => ({ title: n.title, sub: n.subtitle, url: '/network' })),
        ...VERIFIED_DUBAI_CONFERENCES.filter(
          (c) => c.name.toLowerCase().includes(q) || c.focus.toLowerCase().includes(q)
        ).map((c) => ({ title: c.name, sub: `Summit • ${c.frequency}`, url: '/network' })),
      ].slice(0, 3)
    : []

  const matchedLifestyle = q
    ? VERIFIED_LIFESTYLE.filter(
        (l) => l.title.toLowerCase().includes(q) || l.operator_name.toLowerCase().includes(q)
      ).slice(0, 3)
    : []

  const handleSelect = (url: string) => {
    onClose()
    router.push(url)
  }

  const hasResults =
    matchedProperties.length > 0 ||
    matchedProjects.length > 0 ||
    matchedAreas.length > 0 ||
    matchedDevelopers.length > 0 ||
    matchedNetwork.length > 0 ||
    matchedLifestyle.length > 0

  return (
    <div
      className="fixed inset-0 z-50 flex items-start justify-center pt-20 px-4 bg-black/40 backdrop-blur-sm animate-in fade-in duration-150"
      onClick={onClose}
    >
      <div
        className="bg-white w-full max-w-2xl rounded-3xl shadow-2xl border border-black/10 overflow-hidden text-left"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center px-6 border-b border-black/10 bg-[#f5f5f7]">
          <Search className="h-5 w-5 text-[#6e6e73] shrink-0 mr-3" />
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search verified properties, areas, developers, calculators, lifestyle..."
            className="w-full py-4 text-base bg-transparent text-[#1d1d1f] placeholder-[#6e6e73] focus:outline-none font-medium"
          />
          <kbd className="hidden sm:inline-flex px-2 py-0.5 text-[10px] font-mono text-[#6e6e73] bg-white border border-black/10 rounded-md shadow-sm">
            ESC
          </kbd>
        </div>

        <div className="max-h-[60vh] overflow-y-auto p-4 space-y-4">
          {!query && (
            <div className="space-y-4 py-2">
              <div>
                <span className="text-[10px] font-bold uppercase tracking-wider text-[#6e6e73] px-2 font-mono">
                  Quick Intelligence Tools
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mt-2">
                  <button
                    onClick={() => handleSelect('/investment')}
                    className="flex items-center gap-3 p-3 rounded-2xl hover:bg-[#f5f5f7] text-left transition-colors border border-transparent hover:border-black/5 cursor-pointer"
                  >
                    <Calculator className="h-4 w-4 text-accent" />
                    <div>
                      <div className="text-xs font-bold text-[#1d1d1f]">Yield & ROI Calculator</div>
                      <div className="text-[11px] text-[#6e6e73]">Net yields & cash flow formulas</div>
                    </div>
                  </button>
                  <button
                    onClick={() => handleSelect('/residency')}
                    className="flex items-center gap-3 p-3 rounded-2xl hover:bg-[#f5f5f7] text-left transition-colors border border-transparent hover:border-black/5 cursor-pointer"
                  >
                    <ShieldCheck className="h-4 w-4 text-accent" />
                    <div>
                      <div className="text-xs font-bold text-[#1d1d1f]">Golden Visa & Residency</div>
                      <div className="text-[11px] text-[#6e6e73]">Official AED 2M criteria</div>
                    </div>
                  </button>
                  <button
                    onClick={() => handleSelect('/properties')}
                    className="flex items-center gap-3 p-3 rounded-2xl hover:bg-[#f5f5f7] text-left transition-colors border border-transparent hover:border-black/5 cursor-pointer"
                  >
                    <Building className="h-4 w-4 text-accent" />
                    <div>
                      <div className="text-xs font-bold text-[#1d1d1f]">Verified Properties</div>
                      <div className="text-[11px] text-[#6e6e73]">Direct provenance records</div>
                    </div>
                  </button>
                  <button
                    onClick={() => handleSelect('/private-client')}
                    className="flex items-center gap-3 p-3 rounded-2xl hover:bg-[#f5f5f7] text-left transition-colors border border-transparent hover:border-black/5 cursor-pointer"
                  >
                    <ArrowRight className="h-4 w-4 text-accent" />
                    <div>
                      <div className="text-xs font-bold text-[#1d1d1f]">Cristian Văduva Advisory</div>
                      <div className="text-[11px] text-[#6e6e73]">Private Client Desk</div>
                    </div>
                  </button>
                </div>
              </div>
            </div>
          )}

          {query && !hasResults && (
            <div className="text-center py-8 text-[#6e6e73] text-xs">
              No verified records matching &ldquo;{query}&rdquo;.
              <div className="mt-1 text-[11px]">
                This platform only returns authentic, verified database entities.
              </div>
            </div>
          )}

          {matchedProperties.length > 0 && (
            <div>
              <span className="text-[10px] font-bold uppercase tracking-wider text-[#6e6e73] px-2 font-mono">
                Properties ({matchedProperties.length})
              </span>
              <div className="mt-1 space-y-1">
                {matchedProperties.map((prop) => (
                  <button
                    key={prop.id}
                    onClick={() => handleSelect(`/properties/${prop.id}`)}
                    className="w-full flex items-center justify-between p-3 rounded-2xl hover:bg-[#f5f5f7] text-left transition-colors cursor-pointer"
                  >
                    <div className="flex items-center gap-3">
                      <Building className="h-4 w-4 text-[#6e6e73]" />
                      <div>
                        <div className="text-xs font-bold text-[#1d1d1f]">{prop.title}</div>
                        <div className="text-[11px] text-[#6e6e73]">
                          {prop.area_name} • {prop.bedrooms} Bed • {prop.internal_area_sqft.toLocaleString()} sqft
                        </div>
                      </div>
                    </div>
                    <div className="text-xs font-bold text-accent tabular-nums font-mono">
                      AED {prop.asking_price?.toLocaleString()}
                    </div>
                  </button>
                ))}
              </div>
            </div>
          )}

          {matchedProjects.length > 0 && (
            <div>
              <span className="text-[10px] font-bold uppercase tracking-wider text-[#6e6e73] px-2 font-mono">
                Projects ({matchedProjects.length})
              </span>
              <div className="mt-1 space-y-1">
                {matchedProjects.map((proj) => (
                  <button
                    key={proj.id}
                    onClick={() => handleSelect('/projects')}
                    className="w-full flex items-center justify-between p-3 rounded-2xl hover:bg-[#f5f5f7] text-left transition-colors cursor-pointer"
                  >
                    <div className="flex items-center gap-3">
                      <Building className="h-4 w-4 text-[#6e6e73]" />
                      <div>
                        <div className="text-xs font-bold text-[#1d1d1f]">{proj.name}</div>
                        <div className="text-[11px] text-[#6e6e73]">
                          {proj.developer_name} • {proj.area_name}
                        </div>
                      </div>
                    </div>
                    <span className="text-[11px] text-accent font-semibold">{proj.completion_status}</span>
                  </button>
                ))}
              </div>
            </div>
          )}

          {matchedAreas.length > 0 && (
            <div>
              <span className="text-[10px] font-bold uppercase tracking-wider text-[#6e6e73] px-2 font-mono">
                Dubai Communities ({matchedAreas.length})
              </span>
              <div className="mt-1 space-y-1">
                {matchedAreas.map((area) => (
                  <button
                    key={area.id}
                    onClick={() => handleSelect(`/areas/${area.slug}`)}
                    className="w-full flex items-center justify-between p-3 rounded-2xl hover:bg-[#f5f5f7] text-left transition-colors cursor-pointer"
                  >
                    <div className="flex items-center gap-3">
                      <MapPin className="h-4 w-4 text-[#6e6e73]" />
                      <div>
                        <div className="text-xs font-bold text-[#1d1d1f]">{area.name}</div>
                        <div className="text-[11px] text-[#6e6e73]">Master Developer: {area.master_developer}</div>
                      </div>
                    </div>
                    <span className="text-[11px] text-accent font-semibold">{area.freehold_status}</span>
                  </button>
                ))}
              </div>
            </div>
          )}

          {matchedNetwork.length > 0 && (
            <div>
              <span className="text-[10px] font-bold uppercase tracking-wider text-[#6e6e73] px-2 font-mono">
                Ecosystem & Network ({matchedNetwork.length})
              </span>
              <div className="mt-1 space-y-1">
                {matchedNetwork.map((net, idx) => (
                  <button
                    key={idx}
                    onClick={() => handleSelect(net.url)}
                    className="w-full flex items-center justify-between p-3 rounded-2xl hover:bg-[#f5f5f7] text-left transition-colors cursor-pointer"
                  >
                    <div className="flex items-center gap-3">
                      <ShieldCheck className="h-4 w-4 text-[#6e6e73]" />
                      <div>
                        <div className="text-xs font-bold text-[#1d1d1f]">{net.title}</div>
                        <div className="text-[11px] text-[#6e6e73]">{net.sub}</div>
                      </div>
                    </div>
                    <span className="text-[11px] text-accent font-semibold">Verified Pillar</span>
                  </button>
                ))}
              </div>
            </div>
          )}

          {matchedDevelopers.length > 0 && (
            <div>
              <span className="text-[10px] font-bold uppercase tracking-wider text-[#6e6e73] px-2 font-mono">
                Developers ({matchedDevelopers.length})
              </span>
              <div className="mt-1 space-y-1">
                {matchedDevelopers.map((dev) => (
                  <button
                    key={dev.id}
                    onClick={() => handleSelect('/developers')}
                    className="w-full flex items-center justify-between p-3 rounded-2xl hover:bg-[#f5f5f7] text-left transition-colors cursor-pointer"
                  >
                    <div className="flex items-center gap-3">
                      <Building className="h-4 w-4 text-[#6e6e73]" />
                      <div>
                        <div className="text-xs font-bold text-[#1d1d1f]">{dev.name}</div>
                        <div className="text-[11px] text-[#6e6e73]">{dev.headquarters}</div>
                      </div>
                    </div>
                    <span className="text-[11px] text-[#6e6e73] font-mono">DLD Registry #{dev.dld_developer_number}</span>
                  </button>
                ))}
              </div>
            </div>
          )}

          {matchedLifestyle.length > 0 && (
            <div>
              <span className="text-[10px] font-bold uppercase tracking-wider text-[#6e6e73] px-2 font-mono">
                Lifestyle & Services ({matchedLifestyle.length})
              </span>
              <div className="mt-1 space-y-1">
                {matchedLifestyle.map((life) => (
                  <button
                    key={life.id}
                    onClick={() => handleSelect(`/lifestyle/${life.category}`)}
                    className="w-full flex items-center justify-between p-3 rounded-2xl hover:bg-[#f5f5f7] text-left transition-colors cursor-pointer"
                  >
                    <div className="flex items-center gap-3">
                      {life.category === 'dining' && <Utensils className="h-4 w-4 text-[#6e6e73]" />}
                      {life.category === 'aviation' && <Plane className="h-4 w-4 text-[#6e6e73]" />}
                      {life.category === 'yachts' && <Anchor className="h-4 w-4 text-[#6e6e73]" />}
                      {life.category !== 'dining' && life.category !== 'aviation' && life.category !== 'yachts' && (
                        <Building className="h-4 w-4 text-[#6e6e73]" />
                      )}
                      <div>
                        <div className="text-xs font-bold text-[#1d1d1f]">{life.title}</div>
                        <div className="text-[11px] text-[#6e6e73]">{life.operator_name}</div>
                      </div>
                    </div>
                    <span className="text-[11px] text-[#1d1d1f] font-semibold">{life.price_display}</span>
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
