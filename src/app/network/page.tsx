'use client'

import * as React from 'react'
import {
  NETWORK_ECOSYSTEM_PILLARS,
  VERIFIED_DUBAI_CONFERENCES,
} from '@/lib/data/network'
import { SourceBadge } from '@/components/ui/source-badge'
import { PageIntro, MetricBand } from '@/components/layout/layout-primitives'
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
    <div className="bg-white text-[#1d1d1f] min-h-screen pb-28 selection:bg-accent/20 selection:text-[#1d1d1f]">
      {/* 1. EDITORIAL PAGE INTRO */}
      <PageIntro
        eyebrow="DIFC • DLD • DET • CBUAE Ecosystem Architecture"
        badge={<SourceBadge status="OFFICIAL SOURCE" sourceName="UAE Statutory Authorities" />}
        title={<>Network<span className="text-gradient-gold">.</span></>}
        description="Dubai private capital and business ecosystem. Facilitating direct institutional access across sovereign hubs, private banks, DIFC family office structures, and regulatory authorities."
      />

      {/* 2. ECOSYSTEM PILLARS DIRECTORY */}
      <main className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 space-y-16">
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
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <span className="text-[10px] font-mono font-semibold uppercase tracking-widest text-accent block mb-1">
                Pillars of Access
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-[#1d1d1f]">Ecosystem Verticals</h2>
            </div>

            <div className="flex flex-wrap gap-2">
              <button
                type="button"
                onClick={() => setSelectedPillar('ALL')}
                className={`px-4 py-2 rounded-full text-xs font-semibold transition-all cursor-pointer ${
                  selectedPillar === 'ALL'
                    ? 'bg-[#1d1d1f] text-white shadow-sm'
                    : 'bg-[#f5f5f7] border border-black/5 text-[#6e6e73] hover:text-[#1d1d1f]'
                }`}
              >
                All Verticals ({NETWORK_ECOSYSTEM_PILLARS.length})
              </button>
              {NETWORK_ECOSYSTEM_PILLARS.map((pillar) => (
                <button
                  type="button"
                  key={pillar.id}
                  onClick={() => setSelectedPillar(pillar.id)}
                  className={`px-4 py-2 rounded-full text-xs font-semibold transition-all cursor-pointer ${
                    selectedPillar === pillar.id
                      ? 'bg-[#1d1d1f] text-white shadow-sm'
                      : 'bg-[#f5f5f7] border border-black/5 text-[#6e6e73] hover:text-[#1d1d1f]'
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
                  className={`p-6 sm:p-7 rounded-3xl bg-white border border-black/10 flex flex-col justify-between hover:border-black/20 hover:shadow-xl transition-all space-y-6 shadow-sm ${
                    isPrimaryPillar ? 'lg:col-span-6' : 'lg:col-span-4'
                  }`}
                >
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div className="h-10 w-10 rounded-2xl bg-[#f5f5f7] border border-black/5 flex items-center justify-center text-[#1d1d1f]">
                        <Icon className="h-5 w-5 text-accent" />
                      </div>
                      <span className="text-[10px] font-mono font-semibold uppercase tracking-wider px-2.5 py-1 rounded-full bg-[#f5f5f7] border border-black/5 text-[#6e6e73]">
                        {pillar.subtitle}
                      </span>
                    </div>

                    <div>
                      <h3 className="text-xl font-extrabold text-[#1d1d1f] tracking-tight">{pillar.title}</h3>
                      <p className="text-xs text-[#6e6e73] mt-2 leading-relaxed">
                        {pillar.description}
                      </p>
                    </div>

                    <div className="space-y-2 pt-3 border-t border-black/10">
                      <span className="text-[10px] font-mono font-semibold uppercase tracking-wider text-[#6e6e73] block">
                        Entities Identified in Public Registry
                      </span>
                      <ul className="space-y-1.5 text-xs text-[#1d1d1f]">
                        {pillar.verified_participants.slice(0, 3).map((item, pIdx) => (
                          <li key={pIdx} className="flex items-center gap-2">
                            <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="space-y-2 pt-3 border-t border-black/10">
                      <span className="text-[10px] font-mono font-semibold uppercase tracking-wider text-[#6e6e73] block">
                        Advisory Scope
                      </span>
                      <ul className="space-y-1 text-[11px] text-[#6e6e73]">
                        {pillar.advisory_focus.slice(0, 2).map((focus, fIdx) => (
                          <li key={fIdx} className="flex items-start gap-1.5">
                            <span className="text-accent font-bold">›</span>
                            <span>{focus}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="pt-4 border-t border-black/10 flex items-center justify-between">
                    <SourceBadge status={pillar.provenance.verification_status} sourceName={pillar.provenance.source_name} />
                    <button
                      type="button"
                      onClick={() => handleOpenIntro(pillar.title)}
                      className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-[#1d1d1f] text-white hover:bg-black text-xs font-semibold transition-all cursor-pointer shadow-sm hover:shadow-md"
                    >
                      <span>Request Access</span>
                      <ArrowRight className="h-3.5 w-3.5 text-accent" />
                    </button>
                  </div>
                </div>
              )
            })}
          </div>
        </section>

        {/* 3. VERIFIED GLOBAL SUMMITS & CONFERENCES */}
        <section className="space-y-6 pt-8 border-t border-black/10">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <span className="text-[10px] font-mono font-semibold uppercase tracking-widest text-accent block mb-1">
                Global Forums & Gatherings
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-[#1d1d1f]">Verified Annual Dubai Summits</h2>
            </div>
            <p className="text-xs text-[#6e6e73] max-w-md">
              Official institutional and technology gatherings registered with the Dubai Department of Economy and Tourism (DET) and Dubai World Trade Centre.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {VERIFIED_DUBAI_CONFERENCES.map((conf) => (
              <div key={conf.id} className="p-5 rounded-3xl bg-white border border-black/10 flex flex-col justify-between space-y-4 shadow-sm">
                <div className="space-y-2.5">
                  <div className="flex items-center justify-between text-xs text-[#6e6e73]">
                    <span className="flex items-center gap-1.5 font-medium text-[#1d1d1f]">
                      <Calendar className="h-3.5 w-3.5 text-accent" />
                      <span>{conf.frequency}</span>
                    </span>
                    <span className="text-[10px] uppercase font-mono px-2 py-0.5 rounded-full bg-[#f5f5f7] border border-black/5">
                      {conf.organizer.split(' ')[0]}
                    </span>
                  </div>

                  <h3 className="text-sm font-bold text-[#1d1d1f] leading-snug">{conf.name}</h3>
                  <p className="text-[11px] text-[#6e6e73] leading-relaxed line-clamp-3">
                    {conf.focus}
                  </p>
                  <p className="text-[11px] text-[#1d1d1f] font-medium pt-1">
                    📍 {conf.venue}
                  </p>
                </div>

                <div className="pt-3.5 border-t border-black/10 flex items-center justify-between">
                  <span className="text-[10px] text-[#6e6e73] font-mono">Official Portal</span>
                  <a
                    href={conf.official_website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-accent hover:underline transition-colors"
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
        <section className="p-8 sm:p-12 rounded-3xl bg-[#f5f5f7] border border-black/10 text-[#1d1d1f] space-y-6 shadow-sm">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div className="space-y-2.5 max-w-2xl">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white border border-black/10 text-accent text-xs font-semibold shadow-sm">
                <Sparkles className="h-3.5 w-3.5" />
                <span>Private Client Advisory Desk</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight">Direct Introductions Across Dubai Sovereign Networks</h2>
              <p className="text-xs sm:text-sm text-[#6e6e73] leading-relaxed">
                Whether structuring an off-market penthouse acquisition, establishing a DIFC foundation, or coordinating non-resident bank onboarding, our private client desk facilitates deterministic, protocol-compliant introductions.
              </p>
            </div>

            <button
              type="button"
              onClick={() => handleOpenIntro('Private Client Desk Consultation')}
              className="px-7 py-4 rounded-full bg-[#1d1d1f] text-white font-semibold text-xs uppercase tracking-wider hover:bg-black transition-all shrink-0 flex items-center justify-center gap-2 cursor-pointer shadow-sm hover:shadow-md"
            >
              <span>Initiate Private Introduction</span>
              <ArrowRight className="h-4 w-4" />
            </button>
          </div>
        </section>
      </main>

      {/* 5. PRIVATE INTRODUCTION INTAKE MODAL */}
      {introModalOpen && (
        <div className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl border border-black/10 shadow-2xl max-w-lg w-full p-6 sm:p-8 space-y-6 relative max-h-[90vh] overflow-y-auto text-[#1d1d1f]">
            <div className="flex items-start justify-between">
              <div>
                <span className="text-[10px] font-mono font-semibold uppercase tracking-widest text-accent block mb-1">
                  Private Client Desk
                </span>
                <h3 className="text-xl font-bold text-[#1d1d1f] tracking-tight">Ecosystem Introduction Intake</h3>
                <p className="text-xs text-[#6e6e73] mt-1">Target: {introTargetPillar}</p>
              </div>
              <button
                type="button"
                onClick={() => setIntroModalOpen(false)}
                className="text-[#6e6e73] hover:text-[#1d1d1f] text-lg font-bold p-1 cursor-pointer"
              >
                ✕
              </button>
            </div>

            <form onSubmit={handleSubmitIntro} className="space-y-4">
              <div className="space-y-1.5">
                <label className="text-xs font-semibold uppercase tracking-wider text-[#1d1d1f] block">
                  Full Name *
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Lord Alistair Vance"
                  value={formData.fullName}
                  onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-[#f5f5f7] border border-black/10 text-sm text-[#1d1d1f] placeholder-[#6e6e73] focus:outline-none focus:border-accent"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label className="text-xs font-semibold uppercase tracking-wider text-[#1d1d1f] block">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="name@familyoffice.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-[#f5f5f7] border border-black/10 text-sm text-[#1d1d1f] placeholder-[#6e6e73] focus:outline-none focus:border-accent"
                  />
                </div>
                <div className="space-y-1.5">
                  <label className="text-xs font-semibold uppercase tracking-wider text-[#1d1d1f] block">
                    Telephone (with code) *
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="+971 50 000 0000"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-[#f5f5f7] border border-black/10 text-sm text-[#1d1d1f] placeholder-[#6e6e73] focus:outline-none focus:border-accent"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label className="text-xs font-semibold uppercase tracking-wider text-[#1d1d1f] block">
                    Entity / Profile
                  </label>
                  <select
                    value={formData.entityType}
                    onChange={(e) => setFormData({ ...formData, entityType: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-[#f5f5f7] border border-black/10 text-sm text-[#1d1d1f] focus:outline-none focus:border-accent cursor-pointer"
                  >
                    <option value="Private Investor">Private Investor</option>
                    <option value="Single Family Office">Single Family Office</option>
                    <option value="Corporate Executive">Corporate Executive</option>
                    <option value="Institutional Fund">Institutional Fund</option>
                    <option value="Advisory Partner">Advisory Partner</option>
                  </select>
                </div>
                <div className="space-y-1.5">
                  <label className="text-xs font-semibold uppercase tracking-wider text-[#1d1d1f] block">
                    Allocation Tier (AED)
                  </label>
                  <select
                    value={formData.capitalTier}
                    onChange={(e) => setFormData({ ...formData, capitalTier: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-[#f5f5f7] border border-black/10 text-sm text-[#1d1d1f] focus:outline-none focus:border-accent cursor-pointer"
                  >
                    <option value="AED 5M - 10M">AED 5M - 10M</option>
                    <option value="AED 10M - 25M">AED 10M - 25M</option>
                    <option value="AED 25M - 50M">AED 25M - 50M</option>
                    <option value="AED 50M+">AED 50M+ (Ultra-Prime)</option>
                  </select>
                </div>
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-semibold uppercase tracking-wider text-[#1d1d1f] block">
                  Strategic Objective / Desired Introduction
                </label>
                <textarea
                  rows={3}
                  placeholder="e.g. Seeking off-plan penthouse allocation in Downtown and introduction to DIFC foundation structuring team..."
                  value={formData.interestSummary}
                  onChange={(e) => setFormData({ ...formData, interestSummary: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-[#f5f5f7] border border-black/10 text-sm text-[#1d1d1f] placeholder-[#6e6e73] focus:outline-none focus:border-accent resize-none"
                />
              </div>

              <div className="p-3.5 rounded-2xl bg-[#f5f5f7] border border-black/5 flex items-start gap-2.5 text-[11px] text-[#6e6e73]">
                <ShieldCheck className="h-4 w-4 text-emerald-600 shrink-0 mt-0.5" />
                <span>
                  All inquiries are managed under strict client confidentiality. Data is retained on your local device during development mode.
                </span>
              </div>

              <div className="flex items-center justify-end gap-3 pt-2">
                <button
                  type="button"
                  onClick={() => setIntroModalOpen(false)}
                  className="px-4 py-2.5 rounded-full border border-black/10 text-xs font-semibold text-[#6e6e73] hover:text-[#1d1d1f] cursor-pointer"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="px-6 py-2.5 rounded-full bg-[#1d1d1f] text-white text-xs font-semibold uppercase tracking-wider hover:bg-black transition-colors flex items-center gap-1.5 cursor-pointer shadow-sm hover:shadow-md"
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
