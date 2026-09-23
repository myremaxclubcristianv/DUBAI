'use client'

import * as React from 'react'
import { Search, RotateCcw, LayoutGrid, List, BookmarkPlus, SlidersHorizontal } from 'lucide-react'

interface PropertyFiltersProps {
  searchQuery: string
  onSearchChange: (q: string) => void
  selectedArea: string
  onAreaChange: (area: string) => void
  selectedType: string
  onTypeChange: (type: string) => void
  selectedStatus: string
  onStatusChange: (status: string) => void
  priceRange: string
  onPriceRangeChange: (range: string) => void
  selectedBedrooms: string
  onBedroomsChange: (beds: string) => void
  selectedDeveloper: string
  onDeveloperChange: (dev: string) => void
  sortBy: string
  onSortByChange: (sort: string) => void
  viewMode: 'grid' | 'list'
  onViewModeChange: (mode: 'grid' | 'list') => void
  onSaveSearch: () => void
  onReset: () => void
  areas: string[]
  types: string[]
  developers: string[]
}

export function PropertyFilters({
  searchQuery,
  onSearchChange,
  selectedArea,
  onAreaChange,
  selectedType,
  onTypeChange,
  selectedStatus,
  onStatusChange,
  priceRange,
  onPriceRangeChange,
  selectedBedrooms,
  onBedroomsChange,
  selectedDeveloper,
  onDeveloperChange,
  sortBy,
  onSortByChange,
  viewMode,
  onViewModeChange,
  onSaveSearch,
  onReset,
  areas,
  types,
  developers,
}: PropertyFiltersProps) {
  const [isAdvancedOpen, setIsAdvancedOpen] = React.useState(false)

  return (
    <div className="bg-white rounded-xl border border-border p-4 space-y-3">
      {/* Primary Bar: Search, Key Filters & View Controls */}
      <div className="flex flex-col lg:flex-row gap-3">
        {/* Search input */}
        <div className="flex-1 relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-text-muted" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => onSearchChange(e.target.value)}
            placeholder="Search by title, project, community, developer..."
            className="w-full pl-9 pr-4 py-2 bg-surface border border-border rounded-lg text-xs text-text-primary placeholder:text-text-muted focus:outline-none focus:border-accent"
          />
        </div>

        {/* Quick Filters */}
        <div className="flex flex-wrap items-center gap-2">
          <select
            value={selectedArea}
            onChange={(e) => onAreaChange(e.target.value)}
            className="px-3 py-2 bg-surface border border-border rounded-lg text-xs text-text-primary focus:outline-none focus:border-accent font-medium"
          >
            <option value="ALL">All Communities</option>
            {areas.map((a) => (
              <option key={a} value={a}>
                {a}
              </option>
            ))}
          </select>

          <select
            value={selectedType}
            onChange={(e) => onTypeChange(e.target.value)}
            className="px-3 py-2 bg-surface border border-border rounded-lg text-xs text-text-primary focus:outline-none focus:border-accent font-medium"
          >
            <option value="ALL">All Property Types</option>
            {types.map((t) => (
              <option key={t} value={t}>
                {t}
              </option>
            ))}
          </select>

          <select
            value={priceRange}
            onChange={(e) => onPriceRangeChange(e.target.value)}
            className="px-3 py-2 bg-surface border border-border rounded-lg text-xs text-text-primary focus:outline-none focus:border-accent font-medium"
          >
            <option value="ALL">All Price Tiers</option>
            <option value="UNDER_5M">Under AED 5M</option>
            <option value="5M_15M">AED 5M - AED 15M</option>
            <option value="15M_30M">AED 15M - AED 30M</option>
            <option value="ABOVE_30M">AED 30M+ (Ultra-Prime)</option>
          </select>

          <select
            value={sortBy}
            onChange={(e) => onSortByChange(e.target.value)}
            className="px-3 py-2 bg-surface border border-border rounded-lg text-xs text-text-primary focus:outline-none focus:border-accent font-medium"
          >
            <option value="DEFAULT">Sort: Default</option>
            <option value="PRICE_ASC">Price: Low to High</option>
            <option value="PRICE_DESC">Price: High to Low</option>
            <option value="AREA_DESC">Size: Largest First</option>
            <option value="BEDS_DESC">Bedrooms: Most First</option>
          </select>

          <button
            onClick={() => setIsAdvancedOpen(!isAdvancedOpen)}
            className={`px-3 py-2 rounded-lg text-xs font-semibold border flex items-center gap-1.5 transition-colors ${
              isAdvancedOpen
                ? 'bg-text-primary text-white border-text-primary'
                : 'bg-surface text-text-secondary border-border hover:bg-surface-elevated'
            }`}
          >
            <SlidersHorizontal className="h-3.5 w-3.5" />
            <span className="hidden sm:inline">More Filters</span>
          </button>

          {/* Grid / List switcher */}
          <div className="flex items-center rounded-lg border border-border bg-surface p-0.5">
            <button
              onClick={() => onViewModeChange('grid')}
              title="Grid View"
              className={`p-1.5 rounded-md transition-colors ${
                viewMode === 'grid'
                  ? 'bg-white text-text-primary shadow-sm'
                  : 'text-text-muted hover:text-text-primary'
              }`}
            >
              <LayoutGrid className="h-3.5 w-3.5" />
            </button>
            <button
              onClick={() => onViewModeChange('list')}
              title="List View"
              className={`p-1.5 rounded-md transition-colors ${
                viewMode === 'list'
                  ? 'bg-white text-text-primary shadow-sm'
                  : 'text-text-muted hover:text-text-primary'
              }`}
            >
              <List className="h-3.5 w-3.5" />
            </button>
          </div>

          <button
            onClick={onReset}
            title="Reset all filters"
            className="px-3 py-2 bg-surface-elevated hover:bg-surface border border-border rounded-lg text-xs text-text-muted hover:text-text-primary flex items-center gap-1 transition-colors"
          >
            <RotateCcw className="h-3 w-3" />
            <span className="hidden sm:inline">Reset</span>
          </button>
        </div>
      </div>

      {/* Advanced Filter Drawer */}
      {isAdvancedOpen && (
        <div className="pt-3 border-t border-border grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3">
          <div>
            <label className="block text-[11px] font-bold text-text-muted uppercase mb-1">
              Bedrooms
            </label>
            <select
              value={selectedBedrooms}
              onChange={(e) => onBedroomsChange(e.target.value)}
              className="w-full px-3 py-2 bg-surface border border-border rounded-lg text-xs text-text-primary focus:outline-none focus:border-accent font-medium"
            >
              <option value="ALL">Any Bedrooms</option>
              <option value="1">1+ Bedroom</option>
              <option value="2">2+ Bedrooms</option>
              <option value="3">3+ Bedrooms</option>
              <option value="4">4+ Bedrooms</option>
              <option value="5">5+ Bedrooms</option>
            </select>
          </div>

          <div>
            <label className="block text-[11px] font-bold text-text-muted uppercase mb-1">
              Completion Status
            </label>
            <select
              value={selectedStatus}
              onChange={(e) => onStatusChange(e.target.value)}
              className="w-full px-3 py-2 bg-surface border border-border rounded-lg text-xs text-text-primary focus:outline-none focus:border-accent font-medium"
            >
              <option value="ALL">All Statuses</option>
              <option value="Ready">Ready to Move</option>
              <option value="Off-Plan">Off-Plan / Under Construction</option>
            </select>
          </div>

          <div>
            <label className="block text-[11px] font-bold text-text-muted uppercase mb-1">
              Developer
            </label>
            <select
              value={selectedDeveloper}
              onChange={(e) => onDeveloperChange(e.target.value)}
              className="w-full px-3 py-2 bg-surface border border-border rounded-lg text-xs text-text-primary focus:outline-none focus:border-accent font-medium"
            >
              <option value="ALL">All Developers</option>
              {developers.map((d) => (
                <option key={d} value={d}>
                  {d}
                </option>
              ))}
            </select>
          </div>

          <div className="flex items-end">
            <button
              onClick={onSaveSearch}
              className="w-full px-3 py-2 bg-accent text-white hover:bg-accent-hover rounded-lg text-xs font-semibold flex items-center justify-center gap-1.5 transition-colors shadow-sm"
            >
              <BookmarkPlus className="h-3.5 w-3.5" />
              <span>Save Current Search</span>
            </button>
          </div>
        </div>
      )}
    </div>
  )
}
