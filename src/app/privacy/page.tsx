'use client'

import * as React from 'react'
import Link from 'next/link'
import { PageIntro, SectionHeader } from '@/components/layout/layout-primitives'
import { SourceBadge } from '@/components/ui/source-badge'
import { CadranQuadrant } from '@/components/ui/luxury-cadran'
import {
  ShieldCheck,
  Lock,
  EyeOff,
  Database,
  FileText,
  ArrowRight,
} from 'lucide-react'

export default function PrivacyPage() {
  return (
    <div className="bg-black text-white min-h-screen pb-28 selection:bg-accent/30 selection:text-white">
      {/* 1. EDITORIAL PAGE INTRO */}
      <PageIntro
        eyebrow="Data Protection & UAE Federal Decree-Law No. 45/2021"
        badge={<SourceBadge status="OFFICIAL SOURCE" sourceName="UAE Data Office & Federal Law" />}
        title="PRIVACY POLICY"
        description="Statutory data governance and confidential client protection framework under UAE Federal Decree-Law No. 45 of 2021 on Personal Data Protection (PDPL) and international privacy standards."
      />

      <main className="w-full max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 space-y-16">
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
              value: 'SOVEREIGN HOST',
              subtext: 'All server operations comply with UAE sovereign cloud and data residency safeguards with TLS 1.3 end-to-end encryption.',
              delta: 'TLS 1.3 SECURE',
              isPositive: true,
              statutoryRef: 'PDPL Art. 22 (Transfer Safeguards)',
            },
          ]}
        />

        {/* 3. DETAILED STATUTORY CLAUSES */}
        <div className="space-y-10">
          <SectionHeader
            align="center"
            eyebrow="Statutory Provisions"
            title="Privacy & Data Governance Terms"
            description="Comprehensive legal terms governing personal information handling, local storage vaults, and advisory communications."
          />

          <div className="space-y-6 text-xs text-zinc-300 leading-relaxed">
            {/* Clause 1 */}
            <div className="p-6 sm:p-8 rounded-3xl bg-[#0c0c0e] border border-white/10 space-y-3">
              <div className="flex items-center gap-2 text-white font-bold text-sm">
                <ShieldCheck className="h-4 w-4 text-accent" />
                <h3>1. Statutory Jurisdiction & Scope</h3>
              </div>
              <p className="text-zinc-400">
                This Privacy Policy establishes the protocol by which the Cristian Văduva Private Client Desk collects, processes, and protects information submitted through this platform. In accordance with UAE Federal Decree-Law No. 45 of 2021 on Personal Data Protection (PDPL), processing is conducted solely for lawful advisory facilitation and transaction due diligence.
              </p>
            </div>

            {/* Clause 2 */}
            <div className="p-6 sm:p-8 rounded-3xl bg-[#0c0c0e] border border-white/10 space-y-3">
              <div className="flex items-center gap-2 text-white font-bold text-sm">
                <Database className="h-4 w-4 text-accent" />
                <h3>2. Local Browser Storage & Workspace Isolation</h3>
              </div>
              <p className="text-zinc-400">
                Property shortlists, financial scenario worksheets, comparison matrices, and saved acquisition filters created within the Client Workspace are retained in your local browser storage (localStorage). This data remains exclusively on your hardware device and is not transmitted to external marketing databases or advertising networks.
              </p>
            </div>

            {/* Clause 3 */}
            <div className="p-6 sm:p-8 rounded-3xl bg-[#0c0c0e] border border-white/10 space-y-3">
              <div className="flex items-center gap-2 text-white font-bold text-sm">
                <Lock className="h-4 w-4 text-accent" />
                <h3>3. Confidential Mandate Inquiries</h3>
              </div>
              <p className="text-zinc-400">
                When you initiate a private mandate through the Private Client Desk or schedule a viewing inspection, details including your name, direct contact coordinates, capital allocation tier, and preferred property specifications are transmitted securely via encrypted channels directly to our authorized executive advisory personnel.
              </p>
            </div>

            {/* Clause 4 */}
            <div className="p-6 sm:p-8 rounded-3xl bg-[#0c0c0e] border border-white/10 space-y-3">
              <div className="flex items-center gap-2 text-white font-bold text-sm">
                <EyeOff className="h-4 w-4 text-accent" />
                <h3>4. Non-Disclosure & Anti-Spam Policy</h3>
              </div>
              <p className="text-zinc-400">
                We maintain an absolute prohibition against selling, renting, or leasing client registries to third-party telemarketers or unauthorized real estate lead aggregators. Client files are handled with single family office discretion.
              </p>
            </div>

            {/* Clause 5 */}
            <div className="p-6 sm:p-8 rounded-3xl bg-[#0c0c0e] border border-white/10 space-y-3">
              <div className="flex items-center gap-2 text-white font-bold text-sm">
                <FileText className="h-4 w-4 text-accent" />
                <h3>5. Data Subject Rights & Contact</h3>
              </div>
              <p className="text-zinc-400">
                Under Articles 13, 14, and 15 of Federal Decree-Law No. 45/2021, data subjects maintain the right to access, rectify, restrict, or request the immediate erasure of their personal profile. Direct all statutory compliance inquiries to: <strong className="text-white">privacy@cristianvaduva.com</strong>.
              </p>
            </div>
          </div>
        </div>

        {/* 4. PRIVATE CLIENT LINK */}
        <div className="p-8 rounded-3xl border border-white/10 bg-[#0c0c0e] flex flex-col sm:flex-row sm:items-center justify-between gap-6 shadow-2xl">
          <div className="space-y-1">
            <h3 className="text-base font-bold text-white">Have specific data sovereignty questions?</h3>
            <p className="text-xs text-zinc-400">
              Consult with our private client desk regarding family office confidentiality structures and NDA protocols.
            </p>
          </div>
          <Link
            href="/private-client"
            className="px-6 py-3 rounded-full bg-white text-black hover:bg-zinc-200 text-xs font-bold transition-colors flex items-center gap-2 shrink-0 cursor-pointer"
          >
            <span>Access Private Desk</span>
            <ArrowRight className="h-3.5 w-3.5" />
          </Link>
        </div>
      </main>
    </div>
  )
}
