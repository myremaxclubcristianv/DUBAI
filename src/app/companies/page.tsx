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
    <div className="bg-[#08080a] text-[#f5f5f7] min-h-screen pb-32 selection:bg-[#c9a962]/20 selection:text-[#f5f5f7]">
      {/* 1. EDITORIAL HERO INTRO */}
      <PageIntro
        eyebrow="Corporate & Sovereign Registry"
        badge={<SourceBadge status="VERIFIED" sourceName="DED & DFM Public Disclosures" />}
        title={<>Institutional Enterprises<span className="text-[#c9a962]">.</span></>}
        description="Comprehensive directory of Dubai’s sovereign investment institutions, major commercial banks, premier insurance underwriters, and world-leading free zone authorities."
      />

      <div className="w-full max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-16 space-y-12">
        {/* 2. SEARCH & FILTER BAR */}
        <div className="bg-[#111116] p-4 sm:p-6 rounded-xs border border-white/[0.08] flex flex-col md:flex-row gap-4 justify-between items-center">
          {/* Search Box */}
          <div className="relative w-full md:w-96">
            <Search className="h-4 w-4 text-[#71717a] absolute left-3.5 top-3.5" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search companies, sectors, or sovereign funds..."
              className="w-full pl-10 pr-4 py-2.5 bg-black/40 border border-white/10 rounded-xs text-xs text-[#f5f5f7] placeholder-[#71717a] focus:outline-none focus:border-[#c9a962]"
            />
          </div>

          {/* Category Tabs */}
          <div className="flex flex-wrap gap-2 w-full md:w-auto">
            {categories.map((cat) => (
              <button
                key={cat.val}
                onClick={() => setSelectedCategory(cat.val)}
                className={`px-3 py-1.5 rounded-xs text-xs font-mono uppercase tracking-wider transition-all ${
                  selectedCategory === cat.val
                    ? 'bg-[#c9a962] text-[#08080a] font-semibold'
                    : 'bg-black/30 border border-white/10 text-[#a1a1aa] hover:text-[#f5f5f7] hover:border-white/20'
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
              className="bg-[#111116] rounded-xs p-8 border border-white/[0.08] hover:border-[#c9a962]/40 transition-all flex flex-col justify-between group"
            >
              <div>
                {/* Header Tag */}
                <div className="flex items-center justify-between mb-4">
                  <span className="px-2.5 py-0.5 rounded-xs text-[10px] font-mono uppercase tracking-wider bg-white/5 text-[#c9a962] border border-white/10">
                    {company.ownership.replace(/_/g, ' ')}
                  </span>
                  <span className="text-[11px] font-mono text-[#71717a]">
                    Est. {company.establishedYear}
                  </span>
                </div>

                <h3 className="text-xl font-light text-[#f5f5f7] mb-1 group-hover:text-[#c9a962] transition-colors">
                  {company.name}
                </h3>
                <div className="text-xs font-arabic text-[#71717a] mb-3">
                  {company.arabicName}
                </div>

                <p className="text-xs font-mono uppercase text-[#c9a962] mb-4">
                  {company.sector}
                </p>

                <p className="text-xs text-[#a1a1aa] leading-relaxed mb-6 font-light">
                  {company.description}
                </p>

                {/* Metric Strip */}
                <div className="bg-black/40 p-4 rounded-xs border border-white/[0.06] mb-6">
                  <span className="text-[10px] uppercase font-mono tracking-wider text-[#71717a] block">
                    {company.scaleLabel}
                  </span>
                  <span className="text-lg font-mono font-medium text-[#f5f5f7] mt-0.5 block">
                    {company.scaleMetric}
                  </span>
                </div>

                {/* Details List */}
                <div className="space-y-2 text-xs text-[#a1a1aa] mb-6 border-t border-white/[0.06] pt-4">
                  <div className="flex justify-between">
                    <span className="text-[#71717a]">Headquarters:</span>
                    <span className="font-mono text-[#f5f5f7] text-right truncate pl-2">{company.headquarters}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-[#71717a]">Leadership:</span>
                    <span className="font-mono text-[#f5f5f7] text-right truncate pl-2">{company.keyLeadership}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-[#71717a]">Regulator:</span>
                    <span className="font-mono text-[#c9a962] text-right truncate pl-2">{company.regulatoryAuthority}</span>
                  </div>
                </div>
              </div>

              {/* Action Button */}
              <div className="pt-4 border-t border-white/[0.06] flex items-center justify-between">
                <div className="flex items-center gap-1.5 text-[11px] font-mono text-[#71717a]">
                  <ShieldCheck className="h-3.5 w-3.5 text-[#c9a962]" />
                  <span>Verified Registry</span>
                </div>

                <a
                  href={company.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xs bg-white/5 hover:bg-[#c9a962] hover:text-[#08080a] text-xs font-mono text-[#f5f5f7] transition-all border border-white/10"
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
