'use client'

import * as React from 'react'
import Link from 'next/link'
import { PageIntro, Eyebrow } from '@/components/layout/layout-primitives'
import { SourceBadge } from '@/components/ui/source-badge'
import { CadranQuadrant } from '@/components/ui/luxury-cadran'
import {
  Lock,
  EyeOff,
  Database,
  FileText,
  ArrowRight,
} from 'lucide-react'

export default function PrivacyPage() {
  return (
    <div className="bg-[#08080a] text-[#f5f5f7] min-h-screen pb-28 selection:bg-[#c9a962]/20 selection:text-[#f5f5f7]">
      {/* 1. EDITORIAL PAGE INTRO */}
      <PageIntro
        eyebrow="Data Protection & UAE Federal Decree-Law No. 45/2021"
        badge={<SourceBadge status="OFFICIAL SOURCE" sourceName="UAE Data Office & Federal Law" />}
        title={<>Privacy Policy<span className="text-[#c9a962]">.</span></>}
        description="Statutory data governance and confidential client protection framework under UAE Federal Decree-Law No. 45 of 2021 on Personal Data Protection (PDPL) and international privacy standards."
      />

      <main className="w-full max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-16 pt-10 space-y-16">
        {/* 2. STATUTORY PRIVACY QUADRANT */}
        <CadranQuadrant
          eyebrow="UAE PDPL STATUTORY PROTOCOLS"
          title="Data Sovereignty & Client Confidentiality Framework"
          statutorySource="UAE Federal Decree-Law No. 45 of 2021 (PDPL)"
          quadrants={[
            {
              title: 'Zero Third-Party Data Brokering',
              value: '100% PRIVATE',
              subtext: 'Client search parameters, shortlisted properties, and comparison matrices are stored strictly in local browser memory without ad trackers.',
              delta: 'ZERO TRACKERS',
              isPositive: true,
              statutoryRef: 'PDPL Art. 5 (Lawful Processing)',
            },
            {
              title: 'Confidential Advisory Mandates',
              value: 'DISCREET DESK',
              subtext: 'All private client inquiries submitted to Cristian Văduva desk are processed under strict professional non-disclosure protocols.',
              delta: 'ENCRYPTED',
              isPositive: true,
              statutoryRef: 'UAE Civil Code Confidentiality',
            },
            {
              title: 'Right to Erasure & Rectification',
              value: 'INSTANT PURGE',
              subtext: 'Principals may purge all locally cached shortlists or request deletion of stored mandate records at any time.',
              delta: 'FULL CONTROL',
              isPositive: true,
              statutoryRef: 'PDPL Art. 14 (Right to Erasure)',
            },
            {
              title: 'Cross-Border Data Transfer',
              value: 'ADEQUACY RULE',
              subtext: 'International data transfers comply with statutory cross-border safeguard frameworks verified under UAE data protection laws.',
              delta: 'ADEQUATE SHIELD',
              isPositive: true,
              statutoryRef: 'PDPL Art. 22 (Cross-Border)',
            },
          ]}
        />

        {/* 3. DETAILED PRIVACY CLAUSES */}
        <div className="space-y-6">
          <div className="mb-8 space-y-2">
            <Eyebrow>DATA GOVERNANCE</Eyebrow>
            <h2 className="text-2xl sm:text-3xl font-light text-[#f5f5f7]">
              Client Privacy Commitments
            </h2>
          </div>

          <div className="space-y-4 text-xs text-[#a1a1aa] leading-relaxed font-light">
            <div className="p-6 sm:p-8 rounded-xs bg-[#111116] border border-white/[0.08] space-y-3">
              <div className="flex items-center gap-2 text-[#f5f5f7] font-medium text-sm">
                <Lock className="h-4 w-4 text-[#c9a962]" />
                <h3>1. Collection of Data &amp; Local Storage</h3>
              </div>
              <p>
                The platform utilizes localized client-side browser storage (localStorage) for managing saved searches, property shortlists, and analytical comparison sets. We do not transmit or monetize client preference profiles with third-party marketing networks or lead resellers.
              </p>
            </div>

            <div className="p-6 sm:p-8 rounded-xs bg-[#111116] border border-white/[0.08] space-y-3">
              <div className="flex items-center gap-2 text-[#f5f5f7] font-medium text-sm">
                <EyeOff className="h-4 w-4 text-[#c9a962]" />
                <h3>2. Zero Behavioral Surveillance</h3>
              </div>
              <p>
                We do not deploy invasive third-party cross-site cookies, pixel trackers, or fingerprinting scripts. Our analytics adhere to privacy-preserving standards focused solely on aggregate technical performance and route reliability.
              </p>
            </div>

            <div className="p-6 sm:p-8 rounded-xs bg-[#111116] border border-white/[0.08] space-y-3">
              <div className="flex items-center gap-2 text-[#f5f5f7] font-medium text-sm">
                <Database className="h-4 w-4 text-[#c9a962]" />
                <h3>3. Private Client Mandate Handling</h3>
              </div>
              <p>
                Contact details and acquisition parameters submitted through our Private Client intake desk are treated as strictly confidential commercial communications. Information is used exclusively to evaluate acquisition criteria, verify KYC/AML requirements, and coordinate official conveyancing.
              </p>
            </div>

            <div className="p-6 sm:p-8 rounded-xs bg-[#111116] border border-white/[0.08] space-y-3">
              <div className="flex items-center gap-2 text-[#f5f5f7] font-medium text-sm">
                <FileText className="h-4 w-4 text-[#c9a962]" />
                <h3>4. Statutory Rights &amp; Data Erasure Requests</h3>
              </div>
              <p>
                Under UAE Federal Decree-Law No. 45 of 2021, data subjects maintain the right to access, rectify, restrict processing of, or permanently delete personal records held on file. Inquiries may be directed to our data compliance officer.
              </p>
            </div>
          </div>
        </div>

        {/* 4. PRIVACY DESK CTA */}
        <div className="p-8 rounded-xs border border-white/[0.08] bg-[#111116] flex flex-col sm:flex-row sm:items-center justify-between gap-6">
          <div className="space-y-1">
            <h3 className="text-base font-medium text-[#f5f5f7]">Questions regarding your data rights?</h3>
            <p className="text-xs text-[#a1a1aa] font-light">
              Our compliance office handles all statutory data inquiries within 48 hours.
            </p>
          </div>
          <Link
            href="/private-client"
            className="px-6 py-3 rounded-xs bg-[#c9a962] text-[#08080a] hover:bg-[#dbbe7a] text-xs font-mono uppercase tracking-wider font-semibold transition-colors flex items-center gap-2 shrink-0 cursor-pointer"
          >
            <span>Contact Advisory Compliance</span>
            <ArrowRight className="h-3.5 w-3.5" />
          </Link>
        </div>
      </main>
    </div>
  )
}
