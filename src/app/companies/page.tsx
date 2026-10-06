'use client'

import * as React from 'react'
import { VERIFIED_COMPANIES } from '@/lib/data/companies'
import { PageIntro } from '@/components/layout/layout-primitives'
import { SourceBadge } from '@/components/ui/source-badge'
import {
  ExternalLink,
  ShieldCheck,
  Search,
} from 'lucide-react'

export default function CompaniesPage() {
  const [selectedCategory, setSelectedCategory] = React.useState<string>('ALL')
  const [searchQuery, setSearchQuery] = React.useState<string>('')

  const categories: { label: string; val: string }[] = [
    { label: 'All Entities', val: 'ALL' },
    { label: 'Sovereign Holdings', val: 'SOVEREIGN_HOLDING' },
    { label: 'Banking & Finance', val: 'BANKING_FINANCE' },
    { label: 'Insurance & Takaful', val: 'INSURANCE_TAKAFUL' },
    { label: 'Aviation & Logistics', val: 'AVIATION_LOGISTICS' },
    { label: 'Energy & Utilities', val: 'ENERGY_UTILITIES' },
    { label: 'Free Zones', val: 'FREE_ZONE_AUTHORITY' },
  ]

  const filteredCompanies = VERIFIED_COMPANIES.filter((company) => {
    const matchesCat = selectedCategory === 'ALL' || company.category === selectedCategory
    const matchesSearch =
      company.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      company.sector.toLowerCase().includes(searchQuery.toLowerCase()) ||
      company.description.toLowerCase().includes(searchQuery.toLowerCase())
    return matchesCat && matchesSearch
  })

  return (
    <div className="bg-white text-slate-900 min-h-screen pb-32">
      {/* 1. EDITORIAL HERO INTRO */}
      <PageIntro
        eyebrow="Corporate & Sovereign Registry"
        badge={<SourceBadge status="VERIFIED" sourceName="DED & DFM Public Disclosures" />}
        title={<>Institutional Enterprises<span className="text-[#0284c7]">.</span></>}
        description="Comprehensive directory of Dubai’s sovereign investment institutions, major commercial banks, premier insurance underwriters, and world-leading free zone authorities."
      />

      <div className="w-full max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-16 space-y-12 pt-8">
        {/* 2. SEARCH & FILTER BAR */}
        <div className="bg-slate-50 p-4 sm:p-6 rounded-xs border border-slate-200 flex flex-col md:flex-row gap-4 justify-between items-center shadow-xs">
          {/* Search Box */}
          <div className="relative w-full md:w-96">
            <Search className="h-4 w-4 text-slate-400 absolute left-3.5 top-3.5" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search companies, sectors, or sovereign funds..."
              className="w-full pl-10 pr-4 py-2.5 bg-white border border-slate-200 rounded-xs text-xs text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-[#0284c7]"
            />
          </div>

          {/* Category Tabs */}
          <div className="flex flex-wrap gap-2 w-full md:w-auto">
            {categories.map((cat) => (
              <button
                key={cat.val}
                onClick={() => setSelectedCategory(cat.val)}
                className={`px-3 py-1.5 rounded-xs text-xs font-mono uppercase tracking-wider transition-all cursor-pointer ${
                  selectedCategory === cat.val
                    ? 'bg-[#0284c7] text-white font-semibold'
                    : 'bg-white border border-slate-200 text-slate-700 hover:text-slate-900 hover:bg-slate-100'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* 3. COMPANIES CARD GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCompanies.map((company) => (
            <div
              key={company.id}
              className="bg-white rounded-xs p-8 border border-slate-200 hover:border-[#0284c7]/40 transition-all flex flex-col justify-between group shadow-xs hover:shadow-md"
            >
              <div>
                {/* Header Tag */}
                <div className="flex items-center justify-between mb-4">
                  <span className="px-2.5 py-0.5 rounded-xs text-[10px] font-mono uppercase tracking-wider bg-sky-50 text-[#0284c7] border border-sky-200 font-semibold">
                    {company.ownership.replace(/_/g, ' ')}
                  </span>
                  <span className="text-[11px] font-mono text-slate-400">
                    Est. {company.establishedYear}
                  </span>
                </div>

                <h3 className="text-xl font-light text-slate-900 mb-1 group-hover:text-[#0284c7] transition-colors font-serif">
                  {company.name}
                </h3>
                <div className="text-xs font-arabic text-slate-400 mb-3">
                  {company.arabicName}
                </div>

                <p className="text-xs font-mono uppercase text-[#0284c7] mb-4 font-semibold">
                  {company.sector}
                </p>

                <p className="text-xs text-slate-600 leading-relaxed mb-6 font-light">
                  {company.description}
                </p>

                {/* Metric Strip */}
                <div className="bg-slate-50 p-4 rounded-xs border border-slate-200 mb-6 font-mono">
                  <span className="text-[10px] uppercase tracking-wider text-slate-400 block font-semibold">
                    {company.scaleLabel}
                  </span>
                  <span className="text-lg font-medium text-slate-900 mt-0.5 block font-semibold">
                    {company.scaleMetric}
                  </span>
                </div>

                {/* Details List */}
                <div className="space-y-2 text-xs text-slate-600 mb-6 border-t border-slate-100 pt-4">
                  <div className="flex justify-between">
                    <span className="text-slate-400">Headquarters:</span>
                    <span className="font-mono text-slate-900 text-right truncate pl-2 font-medium">{company.headquarters}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-400">Leadership:</span>
                    <span className="font-mono text-slate-900 text-right truncate pl-2 font-medium">{company.keyLeadership}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-400">Regulator:</span>
                    <span className="font-mono text-[#0284c7] text-right truncate pl-2 font-semibold">{company.regulatoryAuthority}</span>
                  </div>
                </div>
              </div>

              {/* Action Button */}
              <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                <div className="flex items-center gap-1.5 text-[11px] font-mono text-slate-400">
                  <ShieldCheck className="h-3.5 w-3.5 text-[#0284c7]" />
                  <span>Verified Registry</span>
                </div>

                <a
                  href={company.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xs bg-slate-50 hover:bg-[#0284c7] hover:text-white text-xs font-mono text-slate-700 transition-all border border-slate-200 font-medium"
                >
                  <span>Portal</span>
                  <ExternalLink className="h-3 w-3" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
