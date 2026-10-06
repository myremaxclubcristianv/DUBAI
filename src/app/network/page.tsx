'use client'

import * as React from 'react'
import {
  NETWORK_ECOSYSTEM_PILLARS,
  VERIFIED_DUBAI_CONFERENCES,
} from '@/lib/data/network'
import { SourceBadge } from '@/components/ui/source-badge'
import { PageIntro, MetricBand, Eyebrow } from '@/components/layout/layout-primitives'
import { useToast } from '@/components/ui/toast'
import { LocalStore } from '@/lib/storage/local-store'
import {
  Building2,
  Landmark,
  Briefcase,
  Scale,
  Plane,
  Calendar,
  ExternalLink,
  ShieldCheck,
  ArrowRight,
  Send,
  Sparkles,
  X,
} from 'lucide-react'

const PILLAR_ICONS: Record<string, React.ElementType> = {
  'pillar-real-estate': Building2,
  'pillar-capital': Landmark,
  'pillar-business-setup': Briefcase,
  'pillar-legal-tax': Scale,
  'pillar-lifestyle-access': Plane,
}

export default function NetworkPage() {
  const { addToast } = useToast()
  const [selectedPillar, setSelectedPillar] = React.useState<string>('ALL')
  const [introModalOpen, setIntroModalOpen] = React.useState(false)
  const [introTargetPillar, setIntroTargetPillar] = React.useState<string>('')
  
  const [formData, setFormData] = React.useState({
    fullName: '',
    email: '',
    phone: '',
    entityType: 'Private Investor',
    capitalTier: 'AED 10M - 25M',
    interestSummary: '',
  })
  const [isSubmitting, setIsSubmitting] = React.useState(false)

  const filteredPillars = React.useMemo(() => {
    if (selectedPillar === 'ALL') return NETWORK_ECOSYSTEM_PILLARS
    return NETWORK_ECOSYSTEM_PILLARS.filter((p) => p.id === selectedPillar)
  }, [selectedPillar])

  const handleOpenIntro = (pillarTitle?: string) => {
    setIntroTargetPillar(pillarTitle || 'General Dubai Ecosystem Introduction')
    setIntroModalOpen(true)
  }

  const handleSubmitIntro = (e: React.FormEvent) => {
    e.preventDefault()
    if (!formData.fullName || !formData.email || !formData.phone) {
      addToast({
        title: 'Required Information Missing',
        description: 'Please provide full name, email, and telephone number.',
        type: 'error',
      })
      return
    }

    setIsSubmitting(true)
    try {
      LocalStore.saveCrmLead({
        first_name: formData.fullName.split(' ')[0] || formData.fullName,
        last_name: formData.fullName.split(' ').slice(1).join(' ') || undefined,
        email: formData.email,
        phone: formData.phone,
        source: `NETWORK_DESK: ${introTargetPillar}`,
        notes: `Entity: ${formData.entityType} | Capital Tier: ${formData.capitalTier} | Objective: ${formData.interestSummary || 'Private ecosystem introduction'}`,
        status: 'NEW',
      })

      addToast({
        title: 'Introduction Request Prepared',
        description: 'Your private advisory intake has been recorded locally. An executive relationship advisor will contact you.',
        type: 'success',
      })

      setIntroModalOpen(false)
      setFormData({
        fullName: '',
        email: '',
        phone: '',
        entityType: 'Private Investor',
        capitalTier: 'AED 10M - 25M',
        interestSummary: '',
      })
    } catch {
      addToast({
        title: 'Submission Error',
        description: 'Unable to save intake locally. Please retry.',
        type: 'error',
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="bg-[#08080a] text-[#f5f5f7] min-h-screen pb-28 selection:bg-[#c9a962]/20 selection:text-[#f5f5f7]">
      {/* 1. EDITORIAL PAGE INTRO */}
      <PageIntro
        eyebrow="DIFC • DLD • DET • CBUAE Ecosystem Architecture"
        badge={<SourceBadge status="OFFICIAL SOURCE" sourceName="UAE Statutory Authorities" />}
        title={<>Sovereign Network<span className="text-[#c9a962]">.</span></>}
        description="Dubai private capital and business ecosystem. Facilitating direct institutional access across sovereign hubs, private banks, DIFC family office structures, and regulatory authorities."
      />

      {/* 2. ECOSYSTEM PILLARS DIRECTORY */}
      <main className="w-full max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-16 pt-8 space-y-16">
        {/* Quick Metrics Bar */}
        <MetricBand
          columns={4}
          items={[
            {
              label: 'Jurisdictions',
              value: 'Common & Civil',
              unit: 'DUAL LAW',
              subtext: 'DIFC common law courts + mainland UAE civil law',
              source: 'DIFC / UAE',
            },
            {
              label: 'Foreign Ownership',
              value: 'Designated Areas',
              unit: 'FREEHOLD ZONES',
              subtext: 'Designated areas for foreign ownership (Regulation No. 3/2006)',
              source: 'DLD LAW',
            },
            {
              label: 'Corporate Tax',
              value: '0% / 9%',
              unit: 'STATUTORY',
              subtext: '0% SME / 9% standard rate (Decree-Law 47/2022)',
              source: 'FTA OFFICIAL',
            },
            {
              label: 'Personal Income Tax',
              value: 'NO PERSONAL TAX',
              unit: 'QUALIFYING INDIVIDUALS',
              subtext: 'No UAE personal income tax on qualifying individual investment returns',
              source: 'FTA OFFICIAL',
            },
          ]}
        />

        {/* Navigation / Filter pills */}
        <section className="space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-white/[0.06] pb-6">
            <div>
              <Eyebrow>PILLARS OF ACCESS</Eyebrow>
              <h2 className="text-2xl sm:text-3xl font-light text-[#f5f5f7]">Ecosystem Verticals</h2>
            </div>

            <div className="flex flex-wrap gap-2">
              <button
                type="button"
                onClick={() => setSelectedPillar('ALL')}
                className={`px-3 py-1.5 rounded-xs text-xs font-mono uppercase tracking-wider transition-all cursor-pointer ${
                  selectedPillar === 'ALL'
                    ? 'bg-[#c9a962] text-[#08080a] font-semibold'
                    : 'bg-black/30 border border-white/10 text-[#a1a1aa] hover:text-[#f5f5f7] hover:border-white/20'
                }`}
              >
                All Verticals ({NETWORK_ECOSYSTEM_PILLARS.length})
              </button>
              {NETWORK_ECOSYSTEM_PILLARS.map((pillar) => (
                <button
                  type="button"
                  key={pillar.id}
                  onClick={() => setSelectedPillar(pillar.id)}
                  className={`px-3 py-1.5 rounded-xs text-xs font-mono uppercase tracking-wider transition-all cursor-pointer ${
                    selectedPillar === pillar.id
                      ? 'bg-[#c9a962] text-[#08080a] font-semibold'
                      : 'bg-black/30 border border-white/10 text-[#a1a1aa] hover:text-[#f5f5f7] hover:border-white/20'
                  }`}
                >
                  {pillar.title.split(' ')[0]} {pillar.title.split(' ')[1]}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-6">
            {filteredPillars.map((pillar, idx) => {
              const Icon = PILLAR_ICONS[pillar.id] || Briefcase
              const isPrimaryPillar = idx < 2
              return (
                <div
                  key={pillar.id}
                  className={`p-6 sm:p-7 rounded-xs bg-[#111116] border border-white/[0.08] flex flex-col justify-between hover:border-[#c9a962]/40 transition-all space-y-6 group ${
                    isPrimaryPillar ? 'lg:col-span-6' : 'lg:col-span-4'
                  }`}
                >
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div className="h-10 w-10 rounded-xs bg-white/5 border border-white/10 flex items-center justify-center text-[#c9a962]">
                        <Icon className="h-5 w-5" />
                      </div>
                      <span className="text-[10px] font-mono font-semibold uppercase tracking-wider px-2.5 py-1 rounded-xs bg-white/5 border border-white/10 text-[#71717a]">
                        {pillar.subtitle}
                      </span>
                    </div>

                    <div>
                      <h3 className="text-xl font-light text-[#f5f5f7] tracking-tight group-hover:text-[#c9a962] transition-colors">{pillar.title}</h3>
                      <p className="text-xs text-[#a1a1aa] mt-2 leading-relaxed font-light">
                        {pillar.description}
                      </p>
                    </div>

                    <div className="space-y-2 pt-3 border-t border-white/[0.06]">
                      <span className="text-[10px] font-mono uppercase tracking-wider text-[#71717a] block">
                        Entities Identified in Public Registry
                      </span>
                      <ul className="space-y-1.5 text-xs text-[#f5f5f7] font-light">
                        {pillar.verified_participants.slice(0, 3).map((item, pIdx) => (
                          <li key={pIdx} className="flex items-center gap-2">
                            <span className="h-1.5 w-1.5 rounded-full bg-[#c9a962]" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="space-y-2 pt-3 border-t border-white/[0.06]">
                      <span className="text-[10px] font-mono uppercase tracking-wider text-[#71717a] block">
                        Advisory Scope
                      </span>
                      <ul className="space-y-1 text-[11px] text-[#a1a1aa] font-light">
                        {pillar.advisory_focus.slice(0, 2).map((focus, fIdx) => (
                          <li key={fIdx} className="flex items-start gap-1.5">
                            <span className="text-[#c9a962] font-mono font-bold">›</span>
                            <span>{focus}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="pt-4 border-t border-white/[0.06] flex items-center justify-between">
                    <SourceBadge status={pillar.provenance.verification_status} sourceName={pillar.provenance.source_name} />
                    <button
                      type="button"
                      onClick={() => handleOpenIntro(pillar.title)}
                      className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xs bg-[#c9a962] text-[#08080a] hover:bg-[#dbbe7a] text-xs font-mono uppercase tracking-wider font-semibold transition-all cursor-pointer"
                    >
                      <span>Request Access</span>
                      <ArrowRight className="h-3.5 w-3.5" />
                    </button>
                  </div>
                </div>
              )
            })}
          </div>
        </section>

        {/* 3. VERIFIED GLOBAL SUMMITS & CONFERENCES */}
        <section className="space-y-6 pt-8 border-t border-white/[0.06]">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <Eyebrow>GLOBAL FORUMS &amp; GATHERINGS</Eyebrow>
              <h2 className="text-2xl sm:text-3xl font-light tracking-tight text-[#f5f5f7]">Verified Annual Dubai Summits</h2>
            </div>
            <p className="text-xs text-[#a1a1aa] font-light max-w-md">
              Official institutional and technology gatherings registered with the Dubai Department of Economy and Tourism (DET) and Dubai World Trade Centre.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {VERIFIED_DUBAI_CONFERENCES.map((conf) => (
              <div key={conf.id} className="p-5 rounded-xs bg-[#111116] border border-white/[0.08] hover:border-[#c9a962]/40 transition-all flex flex-col justify-between space-y-4">
                <div className="space-y-2.5">
                  <div className="flex items-center justify-between text-xs text-[#a1a1aa] font-mono">
                    <span className="flex items-center gap-1.5 text-[#c9a962]">
                      <Calendar className="h-3.5 w-3.5" />
                      <span>{conf.frequency}</span>
                    </span>
                    <span className="text-[10px] uppercase px-2 py-0.5 rounded-xs bg-white/5 border border-white/10 text-[#71717a]">
                      {conf.organizer.split(' ')[0]}
                    </span>
                  </div>

                  <h3 className="text-sm font-medium text-[#f5f5f7] leading-snug">{conf.name}</h3>
                  <p className="text-[11px] text-[#a1a1aa] font-light leading-relaxed line-clamp-3">
                    {conf.focus}
                  </p>
                  <p className="text-[11px] text-[#c9a962] font-mono pt-1">
                    📍 {conf.venue}
                  </p>
                </div>

                <div className="pt-3.5 border-t border-white/[0.06] flex items-center justify-between">
                  <span className="text-[10px] text-[#71717a] font-mono">Official Portal</span>
                  <a
                    href={conf.official_website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-mono text-[#c9a962] hover:underline transition-colors"
                  >
                    <span>Visit</span>
                    <ExternalLink className="h-3 w-3" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 4. PRIVATE INTRODUCTIONS WORKFLOW CTA */}
        <section className="p-8 sm:p-12 rounded-xs bg-[#111116] border border-white/[0.08] text-[#f5f5f7] space-y-6">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div className="space-y-2.5 max-w-2xl">
              <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-xs bg-[#c9a962]/10 border border-[#c9a962]/30 text-[#c9a962] text-xs font-mono">
                <Sparkles className="h-3.5 w-3.5" />
                <span>Private Client Advisory Desk</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-light tracking-tight">Direct Introductions Across Dubai Sovereign Networks</h2>
              <p className="text-xs sm:text-sm text-[#a1a1aa] font-light leading-relaxed">
                Whether structuring an off-market penthouse acquisition, establishing a DIFC foundation, or coordinating non-resident bank onboarding, our private client desk facilitates deterministic, protocol-compliant introductions.
              </p>
            </div>

            <button
              type="button"
              onClick={() => handleOpenIntro('Private Client Desk Consultation')}
              className="px-6 py-3.5 rounded-xs bg-[#c9a962] text-[#08080a] font-mono uppercase tracking-wider font-semibold text-xs hover:bg-[#dbbe7a] transition-all shrink-0 flex items-center justify-center gap-2 cursor-pointer"
            >
              <span>Initiate Private Introduction</span>
              <ArrowRight className="h-4 w-4" />
            </button>
          </div>
        </section>
      </main>

      {/* 5. PRIVATE INTRODUCTION INTAKE MODAL */}
      {introModalOpen && (
        <div className="fixed inset-0 z-50 bg-black/70 backdrop-blur-md flex items-center justify-center p-4">
          <div className="bg-[#111116] rounded-xs border border-white/10 shadow-2xl max-w-lg w-full p-6 sm:p-8 space-y-6 relative max-h-[90vh] overflow-y-auto text-[#f5f5f7]">
            <div className="flex items-start justify-between">
              <div>
                <span className="text-[10px] font-mono font-semibold uppercase tracking-widest text-[#c9a962] block mb-1">
                  Private Client Desk
                </span>
                <h3 className="text-xl font-light text-[#f5f5f7] tracking-tight">Ecosystem Introduction Intake</h3>
                <p className="text-xs text-[#a1a1aa] mt-1 font-mono">Target: {introTargetPillar}</p>
              </div>
              <button
                type="button"
                onClick={() => setIntroModalOpen(false)}
                className="text-[#71717a] hover:text-[#f5f5f7] p-1 cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <form onSubmit={handleSubmitIntro} className="space-y-4">
              <div className="space-y-1.5">
                <label className="text-xs font-mono uppercase tracking-wider text-[#a1a1aa] block">
                  Full Name *
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Lord Alistair Vance"
                  value={formData.fullName}
                  onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-xs bg-black/40 border border-white/10 text-sm text-[#f5f5f7] placeholder-[#71717a] focus:outline-none focus:border-[#c9a962]"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label className="text-xs font-mono uppercase tracking-wider text-[#a1a1aa] block">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="name@familyoffice.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xs bg-black/40 border border-white/10 text-sm text-[#f5f5f7] placeholder-[#71717a] focus:outline-none focus:border-[#c9a962]"
                  />
                </div>
                <div className="space-y-1.5">
                  <label className="text-xs font-mono uppercase tracking-wider text-[#a1a1aa] block">
                    Telephone (with code) *
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="+971 50 000 0000"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xs bg-black/40 border border-white/10 text-sm text-[#f5f5f7] placeholder-[#71717a] focus:outline-none focus:border-[#c9a962]"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label className="text-xs font-mono uppercase tracking-wider text-[#a1a1aa] block">
                    Entity / Profile
                  </label>
                  <select
                    value={formData.entityType}
                    onChange={(e) => setFormData({ ...formData, entityType: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xs bg-black/40 border border-white/10 text-sm text-[#f5f5f7] focus:outline-none focus:border-[#c9a962] cursor-pointer"
                  >
                    <option value="Private Investor">Private Investor</option>
                    <option value="Single Family Office">Single Family Office</option>
                    <option value="Corporate Executive">Corporate Executive</option>
                    <option value="Institutional Fund">Institutional Fund</option>
                    <option value="Advisory Partner">Advisory Partner</option>
                  </select>
                </div>
                <div className="space-y-1.5">
                  <label className="text-xs font-mono uppercase tracking-wider text-[#a1a1aa] block">
                    Allocation Tier (AED)
                  </label>
                  <select
                    value={formData.capitalTier}
                    onChange={(e) => setFormData({ ...formData, capitalTier: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xs bg-black/40 border border-white/10 text-sm text-[#f5f5f7] focus:outline-none focus:border-[#c9a962] cursor-pointer"
                  >
                    <option value="AED 5M - 10M">AED 5M - 10M</option>
                    <option value="AED 10M - 25M">AED 10M - 25M</option>
                    <option value="AED 25M - 50M">AED 25M - 50M</option>
                    <option value="AED 50M+">AED 50M+ (Ultra-Prime)</option>
                  </select>
                </div>
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-mono uppercase tracking-wider text-[#a1a1aa] block">
                  Strategic Objective / Desired Introduction
                </label>
                <textarea
                  rows={3}
                  placeholder="e.g. Seeking off-plan penthouse allocation in Downtown and introduction to DIFC foundation structuring team..."
                  value={formData.interestSummary}
                  onChange={(e) => setFormData({ ...formData, interestSummary: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-xs bg-black/40 border border-white/10 text-sm text-[#f5f5f7] placeholder-[#71717a] focus:outline-none focus:border-[#c9a962] resize-none"
                />
              </div>

              <div className="p-3.5 rounded-xs bg-black/40 border border-white/[0.06] flex items-start gap-2.5 text-[11px] text-[#a1a1aa]">
                <ShieldCheck className="h-4 w-4 text-[#c9a962] shrink-0 mt-0.5" />
                <span>
                  All inquiries are managed under strict client confidentiality. Data is retained on your local device during development mode.
                </span>
              </div>

              <div className="flex items-center justify-end gap-3 pt-2">
                <button
                  type="button"
                  onClick={() => setIntroModalOpen(false)}
                  className="px-4 py-2 rounded-xs border border-white/10 text-xs font-mono text-[#a1a1aa] hover:text-[#f5f5f7] cursor-pointer"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="px-6 py-2 rounded-xs bg-[#c9a962] text-[#08080a] text-xs font-mono uppercase tracking-wider font-semibold hover:bg-[#dbbe7a] transition-colors flex items-center gap-1.5 cursor-pointer"
                >
                  <Send className="h-3.5 w-3.5" />
                  <span>{isSubmitting ? 'Recording...' : 'Submit Request'}</span>
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  )
}
