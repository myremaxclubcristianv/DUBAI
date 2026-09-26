'use client'

import * as React from 'react'
import Link from 'next/link'
import { PageIntro, SectionHeader } from '@/components/layout/layout-primitives'
import { SourceBadge } from '@/components/ui/source-badge'
import { CadranQuadrant } from '@/components/ui/luxury-cadran'
import {
  Scale,
  ShieldCheck,
  Building,
  FileCheck,
  AlertTriangle,
  ArrowRight,
} from 'lucide-react'

export default function TermsPage() {
  return (
    <div className="bg-white text-[#1d1d1f] min-h-screen pb-28 selection:bg-accent/20 selection:text-[#1d1d1f]">
      {/* 1. EDITORIAL PAGE INTRO */}
      <PageIntro
        eyebrow="Statutory Mandate & Professional Practice Terms"
        badge={<SourceBadge status="OFFICIAL SOURCE" sourceName="DLD & RERA Code of Ethics" />}
        title={<>Terms of Service<span className="text-gradient-gold">.</span></>}
        description="Statutory terms of use, data provenance verification rules, and private client advisory protocols governing the Cristian Văduva Real Estate Intelligence platform."
      />

      <main className="w-full max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 space-y-16">
        {/* 2. STATUTORY TERMS QUADRANT */}
        <CadranQuadrant
          eyebrow="RERA CODE OF ETHICS & LEGAL STANDARDS"
          title="Platform Governance & Advisory Mandate Principles"
          statutorySource="Dubai Law No. 85 of 2006 & DLD Regulations"
          quadrants={[
            {
              title: 'Zero Synthetic Data Guarantee',
              value: '100% FACTUAL',
              subtext: 'All property specifications, developer numbers, and pricing thresholds are linked to official DLD land registry records without synthetic projections.',
              delta: 'PROVENANCE',
              isPositive: true,
              statutoryRef: 'DLD Data Governance Policy',
            },
            {
              title: 'Unified RERA Brokerage Standard',
              value: 'FORM F / FORM A',
              subtext: 'Property purchase agreements are executed strictly via unified RERA Form F contracts generated on the official Dubai REST government portal.',
              delta: 'MANDATORY',
              isPositive: true,
              statutoryRef: 'Dubai Law No. 85 of 2006',
            },
            {
              title: 'DLD Escrow Account Protection',
              value: 'LAW 8/2007',
              subtext: 'All off-plan projects featured on the platform must possess active, authenticated DLD escrow bank accounts with audited construction milestones.',
              delta: 'ESCROW VERIFIED',
              isPositive: true,
              statutoryRef: 'Dubai Law No. 8 of 2007',
            },
            {
              title: 'Independent Professional Counsel',
              value: 'FIDUCIARY DUTY',
              subtext: 'Market analysis and financial modeling tools are provided for institutional orientation and do not constitute binding legal or tax advice.',
              delta: 'DISCLAIMER',
              isPositive: true,
              statutoryRef: 'UAE Commercial Code',
            },
          ]}
        />

        {/* 3. DETAILED STATUTORY CLAUSES */}
        <div className="space-y-10">
          <SectionHeader
            align="center"
            eyebrow="Terms & Conditions"
            title="Advisory & Platform Protocols"
            description="Clear regulatory standards governing property listings, conveyancing procedures, and brokerage representations."
          />

          <div className="space-y-6 text-xs text-[#6e6e73] leading-relaxed">
            {/* Clause 1 */}
            <div className="p-6 sm:p-8 rounded-3xl bg-white border border-black/10 space-y-3 shadow-sm">
              <div className="flex items-center gap-2 text-[#1d1d1f] font-bold text-sm">
                <Scale className="h-4 w-4 text-accent" />
                <h3>1. Platform Scope & Intellectual Authority</h3>
              </div>
              <p className="text-[#6e6e73]">
                This platform provides institutional-grade real estate market intelligence, statutory transaction roadmaps, and private client advisory coordination for Dubai freehold properties. All platform methodologies, custom analytical calculators, and data classification structures are proprietary.
              </p>
            </div>

            {/* Clause 2 */}
            <div className="p-6 sm:p-8 rounded-3xl bg-white border border-black/10 space-y-3 shadow-sm">
              <div className="flex items-center gap-2 text-[#1d1d1f] font-bold text-sm">
                <Building className="h-4 w-4 text-accent" />
                <h3>2. Verified Listings & Pricing Integrity</h3>
              </div>
              <p className="text-[#6e6e73]">
                Property details, unit layouts, and developer data presented on the platform are verified against active Dubai Land Department records and authorized master developer releases. Advertised prices represent verified asking prices or starting developer launch tiers and do not constitute binding bilateral options until Form F execution.
              </p>
            </div>

            {/* Clause 3 */}
            <div className="p-6 sm:p-8 rounded-3xl bg-white border border-black/10 space-y-3 shadow-sm">
              <div className="flex items-center gap-2 text-[#1d1d1f] font-bold text-sm">
                <FileCheck className="h-4 w-4 text-accent" />
                <h3>3. Statutory Conveyancing & Closing Fees</h3>
              </div>
              <p className="text-[#6e6e73]">
                Every transaction executed in Dubai is subject to statutory government tariffs, including the 4% Dubai Land Department transfer fee (Executive Council Resolution No. 30 of 2013), DLD Registration Trustee conveyancing fees (AED 4,000 + 5% VAT), and standard RERA brokerage commissions (2% + 5% VAT) unless explicitly modified by contract.
              </p>
            </div>

            {/* Clause 4 */}
            <div className="p-6 sm:p-8 rounded-3xl bg-white border border-black/10 space-y-3 shadow-sm">
              <div className="flex items-center gap-2 text-[#1d1d1f] font-bold text-sm">
                <AlertTriangle className="h-4 w-4 text-accent" />
                <h3>4. Investment Underwriting Disclaimer</h3>
              </div>
              <p className="text-[#6e6e73]">
                Financial projections, rental yield estimations, debt-service calculations, and tax arbitrage comparisons generated through our investment tools are mathematical models designed for due diligence support. Past performance and historical market appreciation trends are not guarantees of future investment performance.
              </p>
            </div>

            {/* Clause 5 */}
            <div className="p-6 sm:p-8 rounded-3xl bg-white border border-black/10 space-y-3 shadow-sm">
              <div className="flex items-center gap-2 text-[#1d1d1f] font-bold text-sm">
                <ShieldCheck className="h-4 w-4 text-accent" />
                <h3>5. Applicable Law & Judicial Venue</h3>
              </div>
              <p className="text-[#6e6e73]">
                These terms are governed by the laws of the Emirate of Dubai and the applicable Federal Laws of the United Arab Emirates. Any disputes arising from platform use or advisory mandates shall be subject to the exclusive jurisdiction of the competent courts of Dubai or the DIFC Courts where designated.
              </p>
            </div>
          </div>
        </div>

        {/* 4. PRIVATE CLIENT LINK */}
        <div className="p-8 rounded-3xl border border-black/10 bg-[#f5f5f7] flex flex-col sm:flex-row sm:items-center justify-between gap-6 shadow-sm">
          <div className="space-y-1">
            <h3 className="text-base font-extrabold text-[#1d1d1f]">Require a formal advisory agreement?</h3>
            <p className="text-xs text-[#6e6e73]">
              Contact Cristian Văduva Private Client Advisory for bespoke institutional representation and POA services.
            </p>
          </div>
          <Link
            href="/private-client"
            className="px-6 py-3 rounded-full bg-[#1d1d1f] text-white hover:bg-black text-xs font-semibold transition-colors flex items-center gap-2 shrink-0 cursor-pointer shadow-sm hover:shadow-md"
          >
            <span>Initiate Advisory Mandate</span>
            <ArrowRight className="h-3.5 w-3.5" />
          </Link>
        </div>
      </main>
    </div>
  )
}
