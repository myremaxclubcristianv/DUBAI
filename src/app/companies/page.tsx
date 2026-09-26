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
    <div className="bg-white text-[#1d1d1f] min-h-screen pb-32 selection:bg-[#0071e3]/10 selection:text-[#1d1d1f]">
      {/* 1. APPLE HERO INTRO */}
      <PageIntro
        eyebrow="Corporate & Sovereign Registry"
        badge={<SourceBadge status="VERIFIED" sourceName="DED & DFM Public Disclosures" />}
        title="Institutional Enterprises."
        subtitle="Comprehensive directory of Dubai’s sovereign investment institutions, major commercial banks, premier insurance underwriters, and world-leading free zone authorities."
      />

      <div className="w-full max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* 2. SEARCH & FILTER BAR */}
        <div className="bg-[#f5f5f7] p-4 sm:p-6 rounded-3xl border border-black/5 flex flex-col md:flex-row gap-4 justify-between items-center">
          {/* Search Box */}
          <div className="relative w-full md:w-96">
            <Search className="h-4 w-4 text-[#86868b] absolute left-3.5 top-3.5" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search companies, sectors, or sovereign funds..."
              className="w-full pl-10 pr-4 py-2.5 bg-white border border-black/10 rounded-full text-xs text-[#1d1d1f] focus:outline-none focus:border-[#b8860b]"
            />
          </div>

          {/* Category Tabs */}
          <div className="flex flex-wrap gap-2 w-full md:w-auto">
            {categories.map((cat) => (
              <button
                key={cat.val}
                onClick={() => setSelectedCategory(cat.val)}
                className={`px-4 py-2 rounded-full text-xs font-semibold transition-all ${
                  selectedCategory === cat.val
                    ? 'bg-[#1d1d1f] text-white shadow-xs'
                    : 'bg-white border border-black/10 text-[#6e6e73] hover:text-[#1d1d1f] hover:border-black/20'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* 3. COMPANIES CARD GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredCompanies.map((company) => (
            <div
              key={company.id}
              className="bg-white rounded-3xl p-8 border border-black/10 shadow-[0_2px_12px_rgba(0,0,0,0.03)] hover:shadow-lg transition-all flex flex-col justify-between"
            >
              <div>
                {/* Header Tag */}
                <div className="flex items-center justify-between mb-4">
                  <span className="px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider bg-[#f5f5f7] text-[#1d1d1f] border border-black/5">
                    {company.ownership.replace(/_/g, ' ')}
                  </span>
                  <span className="text-[11px] font-mono font-semibold text-[#86868b]">
                    Est. {company.establishedYear}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-[#1d1d1f] mb-1">
                  {company.name}
                </h3>
                <div className="text-xs font-arabic text-[#86868b] mb-3">
                  {company.arabicName}
                </div>

                <p className="text-xs font-semibold text-[#b8860b] mb-4">
                  {company.sector}
                </p>

                <p className="text-xs text-[#515154] leading-relaxed mb-6">
                  {company.description}
                </p>

                {/* Metric Strip */}
                <div className="bg-[#f5f5f7] p-4 rounded-2xl border border-black/5 mb-6">
                  <span className="text-[10px] uppercase font-bold text-[#86868b] block">
                    {company.scaleLabel}
                  </span>
                  <span className="text-lg font-extrabold text-[#1d1d1f] mt-0.5 block">
                    {company.scaleMetric}
                  </span>
                </div>

                {/* Details List */}
                <div className="space-y-2 text-xs text-[#6e6e73] mb-6">
                  <div className="flex justify-between">
                    <span className="text-[#86868b]">Headquarters:</span>
                    <span className="font-medium text-[#1d1d1f] text-right truncate pl-2">{company.headquarters}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-[#86868b]">Leadership:</span>
                    <span className="font-medium text-[#1d1d1f] text-right truncate pl-2">{company.keyLeadership}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-[#86868b]">Regulator:</span>
                    <span className="font-medium text-[#1d1d1f] text-right truncate pl-2">{company.regulatoryAuthority}</span>
                  </div>
                </div>
              </div>

              {/* Action Button */}
              <div className="pt-4 border-t border-black/5 flex items-center justify-between">
                <div className="flex items-center gap-1.5 text-[11px] text-[#86868b]">
                  <ShieldCheck className="h-3.5 w-3.5 text-[#b8860b]" />
                  <span>Verified Registry</span>
                </div>

                <a
                  href={company.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-[#1d1d1f] text-white hover:bg-black text-xs font-semibold transition-colors"
                >
                  <span>Official Portal</span>
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
