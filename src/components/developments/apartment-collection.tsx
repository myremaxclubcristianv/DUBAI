'use client'

import * as React from 'react'
import {
  LayoutGrid,
  Table as TableIcon,
  ArrowUpRight,
  Info,
  RotateCcw,
} from 'lucide-react'
import {
  DevelopmentUnit,
  BRABUS_ISLAND_UNITS,
  UnitFilters,
  UnitSortKey,
  filterAndSortUnits,
} from '@/lib/data/developments'
import { UnitDetailModal } from './unit-detail-modal'
import { ContactModal } from '@/components/layout/contact-modal'

export function ApartmentCollection() {
  const [filters, setFilters] = React.useState<UnitFilters>({
    bedrooms: 'ALL',
    tower: 'ALL',
    floor: 'ALL',
    view: 'ALL',
  })
  const [sortKey, setSortKey] = React.useState<UnitSortKey>('unit-asc')
  const [viewMode, setViewMode] = React.useState<'grid' | 'table'>('grid')
  const [selectedUnit, setSelectedUnit] = React.useState<DevelopmentUnit | null>(null)
  const [isDetailModalOpen, setIsDetailModalOpen] = React.useState(false)

  // Contact Modal State
  const [isContactModalOpen, setIsContactModalOpen] = React.useState(false)
  const [contactUnit, setContactUnit] = React.useState<DevelopmentUnit | null>(null)

  const filteredUnits = React.useMemo(() => {
    return filterAndSortUnits(BRABUS_ISLAND_UNITS, filters, sortKey)
  }, [filters, sortKey])

  const handleOpenDetail = (unit: DevelopmentUnit) => {
    setSelectedUnit(unit)
    setIsDetailModalOpen(true)
  }

  const handleOpenInquiry = (unit: DevelopmentUnit) => {
    setContactUnit(unit)
    setIsContactModalOpen(true)
  }

  const handleResetFilters = () => {
    setFilters({
      bedrooms: 'ALL',
      tower: 'ALL',
      floor: 'ALL',
      view: 'ALL',
    })
    setSortKey('unit-asc')
  }

  const contactMessage = contactUnit
    ? `Project: BRABUS ISLAND
Unit Number: ${contactUnit.unitNumber}
Tower: ${contactUnit.tower} | Floor: ${contactUnit.floor} | Type: ${contactUnit.subtype}
Internal Area: ${contactUnit.internalAreaM2.toFixed(2)} m² (${contactUnit.internalAreaSqFt.toFixed(2)} sq ft)
Total Area: ${contactUnit.totalAreaM2.toFixed(2)} m² (${contactUnit.totalAreaSqFt.toFixed(2)} sq ft)
View: ${contactUnit.view}
Investor Price: AED ${contactUnit.investorPriceAedRounded.toLocaleString()} (Subject to developer confirmation)

I am requesting official investor availability, payment schedule, and current registration status for this residence.`
    : 'Project: BRABUS ISLAND. I am requesting official investor availability and pricing confirmation for residences.'

  const contactBudget = contactUnit
    ? `AED ${contactUnit.investorPriceAedRounded.toLocaleString()}`
    : 'AED 3,000,000+'

  return (
    <div id="residences" className="space-y-8 scroll-mt-24">
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-slate-200 pb-6">
        <div className="space-y-1.5">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#0284c7]" />
            <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-[#0284c7] font-semibold">
              Investor Price Sheet Inventory
            </span>
          </div>
          <h3 className="text-2xl sm:text-3xl font-semibold text-slate-950 font-sans tracking-tight">
            Apartment Collection
          </h3>
          <p className="text-sm text-slate-600 max-w-2xl font-light">
            21 residences listed in the supplied investor price schedule across Towers A, B and C. Complete area conversions in square metres and square feet with verified architectural typical floor plans.
          </p>
        </div>

        {/* View Switch & Results Count */}
        <div className="flex items-center gap-3">
          <span className="text-xs font-mono text-slate-500">
            Showing <strong className="text-slate-900">{filteredUnits.length}</strong> of {BRABUS_ISLAND_UNITS.length} units
          </span>
          <div className="flex items-center border border-slate-200 rounded-xs p-0.5 bg-slate-50">
            <button
              type="button"
              onClick={() => setViewMode('grid')}
              aria-label="Grid view"
              className={`p-1.5 rounded-xs transition-colors cursor-pointer ${
                viewMode === 'grid' ? 'bg-white shadow-xs text-slate-950' : 'text-slate-400 hover:text-slate-700'
              }`}
            >
              <LayoutGrid className="h-4 w-4" />
            </button>
            <button
              type="button"
              onClick={() => setViewMode('table')}
              aria-label="Table view"
              className={`p-1.5 rounded-xs transition-colors cursor-pointer ${
                viewMode === 'table' ? 'bg-white shadow-xs text-slate-950' : 'text-slate-400 hover:text-slate-700'
              }`}
            >
              <TableIcon className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>

      {/* Filter and Sort Toolbar */}
      <div className="bg-slate-50/80 border border-slate-200 rounded-xs p-4 sm:p-5 space-y-4">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
          {/* Bedrooms Filter */}
          <div className="space-y-1">
            <label className="text-[10px] font-mono uppercase tracking-wider text-slate-500 font-semibold block">
              Bedrooms
            </label>
            <select
              value={filters.bedrooms}
              onChange={(e) =>
                setFilters((prev) => ({
                  ...prev,
                  bedrooms: e.target.value === 'ALL' ? 'ALL' : (Number(e.target.value) as 2 | 3),
                }))
              }
              className="w-full bg-white border border-slate-200 px-2.5 py-1.5 text-xs text-slate-900 rounded-xs focus:border-[#0284c7] outline-none"
            >
              <option value="ALL">All Bedrooms</option>
              <option value="2">2 Bedrooms (18)</option>
              <option value="3">3 Bedrooms (3)</option>
            </select>
          </div>

          {/* Tower Filter */}
          <div className="space-y-1">
            <label className="text-[10px] font-mono uppercase tracking-wider text-slate-500 font-semibold block">
              Tower
            </label>
            <select
              value={filters.tower}
              onChange={(e) =>
                setFilters((prev) => ({
                  ...prev,
                  tower: e.target.value as 'ALL' | 'A' | 'B' | 'C',
                }))
              }
              className="w-full bg-white border border-slate-200 px-2.5 py-1.5 text-xs text-slate-900 rounded-xs focus:border-[#0284c7] outline-none"
            >
              <option value="ALL">All Towers</option>
              <option value="A">Tower A (12)</option>
              <option value="B">Tower B (6)</option>
              <option value="C">Tower C (3)</option>
            </select>
          </div>

          {/* Floor Filter */}
          <div className="space-y-1">
            <label className="text-[10px] font-mono uppercase tracking-wider text-slate-500 font-semibold block">
              Floor
            </label>
            <select
              value={filters.floor}
              onChange={(e) =>
                setFilters((prev) => ({
                  ...prev,
                  floor: e.target.value === 'ALL' ? 'ALL' : Number(e.target.value),
                }))
              }
              className="w-full bg-white border border-slate-200 px-2.5 py-1.5 text-xs text-slate-900 rounded-xs focus:border-[#0284c7] outline-none"
            >
              <option value="ALL">All Floors</option>
              {[1, 2, 3, 4, 5, 6, 7, 8, 9, 11].map((f) => (
                <option key={f} value={f}>
                  Level {f}
                </option>
              ))}
            </select>
          </div>

          {/* View Filter */}
          <div className="space-y-1">
            <label className="text-[10px] font-mono uppercase tracking-wider text-slate-500 font-semibold block">
              View Orientation
            </label>
            <select
              value={filters.view}
              onChange={(e) =>
                setFilters((prev) => ({
                  ...prev,
                  view: e.target.value as 'ALL' | 'Sea View' | 'Partial Sea View',
                }))
              }
              className="w-full bg-white border border-slate-200 px-2.5 py-1.5 text-xs text-slate-900 rounded-xs focus:border-[#0284c7] outline-none"
            >
              <option value="ALL">All Views</option>
              <option value="Sea View">Sea View (20)</option>
              <option value="Partial Sea View">Partial Sea View (1)</option>
            </select>
          </div>

          {/* Sort By */}
          <div className="space-y-1 lg:col-span-2">
            <label className="text-[10px] font-mono uppercase tracking-wider text-slate-500 font-semibold block">
              Sort Sequence
            </label>
            <select
              value={sortKey}
              onChange={(e) => setSortKey(e.target.value as UnitSortKey)}
              className="w-full bg-white border border-slate-200 px-2.5 py-1.5 text-xs text-slate-900 rounded-xs focus:border-[#0284c7] outline-none"
            >
              <option value="unit-asc">Unit Number (Ascending)</option>
              <option value="price-asc">Investor Price: Low to High</option>
              <option value="price-desc">Investor Price: High to Low</option>
              <option value="interior-asc">Interior Area: Smallest First</option>
              <option value="interior-desc">Interior Area: Largest First</option>
              <option value="total-asc">Total Area: Smallest First</option>
              <option value="total-desc">Total Area: Largest First</option>
              <option value="floor-asc">Floor: Level 1 to 11</option>
              <option value="floor-desc">Floor: Level 11 to 1</option>
            </select>
          </div>
        </div>

        {/* Reset Filters Option if any active */}
        {(filters.bedrooms !== 'ALL' ||
          filters.tower !== 'ALL' ||
          filters.floor !== 'ALL' ||
          filters.view !== 'ALL' ||
          sortKey !== 'unit-asc') && (
          <div className="flex items-center justify-between pt-2 border-t border-slate-200/60">
            <span className="text-[11px] font-mono text-slate-500">
              Filtered subset: {filteredUnits.length} of {BRABUS_ISLAND_UNITS.length} units
            </span>
            <button
              type="button"
              onClick={handleResetFilters}
              className="flex items-center gap-1 text-[11px] font-mono text-[#0284c7] hover:underline cursor-pointer"
            >
              <RotateCcw className="h-3 w-3" />
              <span>Reset all filters</span>
            </button>
          </div>
        )}
      </div>

      {/* Main Content Area: Cards or Table */}
      {filteredUnits.length === 0 ? (
        <div className="p-12 text-center border border-dashed border-slate-300 rounded-xs space-y-3">
          <p className="text-sm font-light text-slate-600">
            No investor units match the selected criteria.
          </p>
          <button
            type="button"
            onClick={handleResetFilters}
            className="px-4 py-2 bg-slate-900 text-white rounded-xs text-xs font-mono uppercase tracking-wider"
          >
            Clear Filter Selection
          </button>
        </div>
      ) : viewMode === 'grid' ? (
        /* GRID CARDS VIEW */
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredUnits.map((unit) => (
            <div
              key={unit.id}
              className="group bg-white border border-slate-200 hover:border-slate-400 rounded-xs shadow-xs hover:shadow-md transition-all flex flex-col justify-between overflow-hidden"
            >
              {/* Card Header */}
              <div className="p-5 border-b border-slate-100 space-y-3">
                <div className="flex items-start justify-between">
                  <div>
                    <div className="flex items-center gap-1.5">
                      <span className="font-mono text-[10px] uppercase tracking-wider text-slate-400">
                        Tower {unit.tower} &bull; Floor {unit.floor}
                      </span>
                      {unit.hasDiscrepancy && (
                        <span className="text-[9px] font-mono uppercase px-1.5 py-0.2 bg-amber-100 text-amber-800 rounded-2xs font-semibold">
                          Flagged Note
                        </span>
                      )}
                    </div>
                    <h4 className="text-xl font-semibold text-slate-950 font-sans tracking-tight">
                      Unit {unit.unitNumber}
                    </h4>
                  </div>
                  <span className="font-mono text-[11px] px-2 py-0.5 bg-slate-100 text-slate-800 rounded-xs font-semibold">
                    {unit.unitType}
                  </span>
                </div>

                <div className="flex items-center justify-between text-xs text-slate-600 font-light">
                  <span>{unit.subtype}</span>
                  <span className="font-mono text-[11px] text-slate-500">{unit.view}</span>
                </div>
              </div>

              {/* Dimensional Metrics */}
              <div className="p-5 bg-slate-50/50 space-y-2.5 text-xs font-mono border-b border-slate-100">
                <div className="flex justify-between items-center text-slate-600">
                  <span className="text-[11px] font-sans">Interior Living Area</span>
                  <span className="font-semibold text-slate-900">
                    {unit.internalAreaM2.toFixed(2)} m²{' '}
                    <span className="text-slate-400 font-normal">({unit.internalAreaSqFt.toFixed(1)} sq ft)</span>
                  </span>
                </div>
                <div className="flex justify-between items-center text-slate-600">
                  <span className="text-[11px] font-sans">Terrace / Balcony</span>
                  <span className="font-semibold text-slate-900">
                    {unit.externalAreaM2.toFixed(2)} m²{' '}
                    <span className="text-slate-400 font-normal">({unit.externalAreaSqFt.toFixed(1)} sq ft)</span>
                  </span>
                </div>
                <div className="flex justify-between items-center pt-1 border-t border-slate-200/60 font-semibold">
                  <span className="text-[11px] font-sans text-slate-950">Total Gross Area</span>
                  <span className="text-[#0284c7]">
                    {unit.totalAreaM2.toFixed(2)} m²{' '}
                    <span className="text-slate-500 font-normal">({unit.totalAreaSqFt.toFixed(1)} sq ft)</span>
                  </span>
                </div>
              </div>

              {/* Pricing & Actions */}
              <div className="p-5 space-y-4">
                <div className="space-y-0.5">
                  <span className="font-mono text-[10px] uppercase tracking-wider text-slate-400 font-semibold block">
                    Investor Price (AED)
                  </span>
                  <div className="flex items-baseline justify-between">
                    <span className="text-xl font-semibold text-slate-950 font-sans tracking-tight">
                      AED {unit.investorPriceAedRounded.toLocaleString()}
                    </span>
                    <span className="text-[10px] font-mono text-slate-500">Subject to confirm.</span>
                  </div>
                  <span className="text-[10px] font-mono text-slate-400 block">
                    Source Price: AED {unit.investorPriceAed.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                  </span>
                </div>

                <div className="grid grid-cols-2 gap-2 pt-1">
                  <button
                    type="button"
                    onClick={() => handleOpenDetail(unit)}
                    className="w-full py-2 px-3 border border-slate-300 hover:border-slate-900 text-slate-800 hover:text-slate-950 text-xs font-mono uppercase tracking-wider rounded-xs transition-colors cursor-pointer text-center"
                  >
                    Inspect Plan
                  </button>
                  <button
                    type="button"
                    onClick={() => handleOpenInquiry(unit)}
                    className="w-full py-2 px-3 bg-[#0284c7] hover:bg-[#0369a1] text-white text-xs font-mono uppercase tracking-wider font-semibold rounded-xs transition-colors cursor-pointer text-center shadow-xs flex items-center justify-center gap-1"
                  >
                    <span>Inquire</span>
                    <ArrowUpRight className="h-3 w-3" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        /* TABLE VIEW */
        <div className="border border-slate-200 rounded-xs overflow-hidden shadow-xs">
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs">
              <thead className="bg-slate-100 text-slate-700 font-mono text-[10.5px] uppercase border-b border-slate-200">
                <tr>
                  <th className="px-4 py-3">Unit</th>
                  <th className="px-3 py-3">Tower</th>
                  <th className="px-3 py-3">Floor</th>
                  <th className="px-3 py-3">Type</th>
                  <th className="px-4 py-3">Sub-Type</th>
                  <th className="px-4 py-3">View</th>
                  <th className="px-4 py-3">Interior m² (sq ft)</th>
                  <th className="px-4 py-3">Exterior m² (sq ft)</th>
                  <th className="px-4 py-3">Total m² (sq ft)</th>
                  <th className="px-4 py-3 text-right">Investor Price (AED)</th>
                  <th className="px-4 py-3 text-center">Action</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 font-mono text-slate-800 bg-white">
                {filteredUnits.map((unit) => (
                  <tr
                    key={unit.id}
                    className="hover:bg-sky-50/50 transition-colors cursor-pointer group"
                    onClick={() => handleOpenDetail(unit)}
                  >
                    <td className="px-4 py-3 font-sans font-semibold text-slate-950 flex items-center gap-1.5">
                      <span>{unit.unitNumber}</span>
                      {unit.hasDiscrepancy && (
                        <span className="text-[9px] px-1 bg-amber-100 text-amber-800 rounded-2xs font-mono">
                          Note
                        </span>
                      )}
                    </td>
                    <td className="px-3 py-3">{unit.tower}</td>
                    <td className="px-3 py-3">{unit.floor}</td>
                    <td className="px-3 py-3 font-semibold">{unit.unitType}</td>
                    <td className="px-4 py-3 font-sans text-slate-600">{unit.subtype}</td>
                    <td className="px-4 py-3 text-slate-600">{unit.view}</td>
                    <td className="px-4 py-3">
                      {unit.internalAreaM2.toFixed(2)} m²{' '}
                      <span className="text-slate-400 text-[10px]">({unit.internalAreaSqFt.toFixed(1)})</span>
                    </td>
                    <td className="px-4 py-3">
                      {unit.externalAreaM2.toFixed(2)} m²{' '}
                      <span className="text-slate-400 text-[10px]">({unit.externalAreaSqFt.toFixed(1)})</span>
                    </td>
                    <td className="px-4 py-3 font-semibold text-[#0284c7]">
                      {unit.totalAreaM2.toFixed(2)} m²{' '}
                      <span className="text-slate-400 font-normal text-[10px]">({unit.totalAreaSqFt.toFixed(1)})</span>
                    </td>
                    <td className="px-4 py-3 text-right font-sans font-semibold text-slate-950">
                      AED {unit.investorPriceAedRounded.toLocaleString()}
                    </td>
                    <td className="px-4 py-3 text-center" onClick={(e) => e.stopPropagation()}>
                      <button
                        type="button"
                        onClick={() => handleOpenInquiry(unit)}
                        className="px-2.5 py-1 bg-[#0284c7] hover:bg-[#0369a1] text-white text-[10px] font-mono uppercase tracking-wider rounded-xs transition-colors cursor-pointer inline-flex items-center gap-1"
                      >
                        <span>Inquire</span>
                        <ArrowUpRight className="h-3 w-3" />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* Qualification Bar */}
      <div className="p-4 bg-slate-50 border border-slate-200/80 rounded-xs flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs text-slate-600">
        <div className="flex items-center gap-2">
          <Info className="h-4 w-4 text-[#0284c7] shrink-0" />
          <span className="leading-relaxed">
            <strong>Investor Sheet Terms:</strong> Full payment within 1–3 months &bull; Parking price AED 100,000 &bull; No flip or change of unit &bull; Normal brokerage commission applies.
          </span>
        </div>
        <span className="text-[10px] font-mono text-slate-400 shrink-0">
          Source: Investor Price Sheet (Summer 2025)
        </span>
      </div>

      {/* Unit Detail Modal */}
      <UnitDetailModal
        unit={selectedUnit}
        isOpen={isDetailModalOpen}
        onClose={() => setIsDetailModalOpen(false)}
        onRequestInquiry={(unit) => handleOpenInquiry(unit)}
      />

      {/* Contact Inquiry Modal */}
      <ContactModal
        isOpen={isContactModalOpen}
        onClose={() => setIsContactModalOpen(false)}
        initialInterest="PROPERTY"
        initialMessage={contactMessage}
        initialBudget={contactBudget}
        title={contactUnit ? `Inquire: Residence ${contactUnit.unitNumber}` : 'Inquire: BRABUS ISLAND'}
        eyebrow="BRABUS ISLAND Private Client Desk"
      />
    </div>
  )
}
