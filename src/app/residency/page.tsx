'use client'

import * as React from 'react'
import Link from 'next/link'
import { ProvenanceTag } from '@/components/layout/layout-primitives'
import {
  CheckCircle2,
  AlertCircle,
  ArrowRight,
  ExternalLink,
} from 'lucide-react'

type ObjectiveType = 
  | 'property_2m' 
  | 'property_sub2m' 
  | 'business_setup' 
  | 'remote_work'

interface PathwayResult {
  title: string
  validity: string
  authority: string
  authorityUrl: string
  legalBasis: string
  minInvestment: string
  eligibilitySummary: string
  familySponsorship: string
  mandatoryDocuments: string[]
  processSteps: { step: string; title: string; desc: string }[]
  officialCaveats: string[]
}

const PATHWAY_DATA: Record<ObjectiveType, PathwayResult> = {
  property_2m: {
    title: '10-Year Golden Residency — Real Estate Investor',
    validity: '10 Years (Federal & Dubai GDRFA Portals) / 5 Years (Historical Overview)',
    authority: 'GDRFA Dubai / ICP / DLD Cube',
    authorityUrl: 'https://u.ae/en/information-and-services/visa-and-emirates-id/residence-visas/golden-visa',
    legalBasis: 'Cabinet Resolution No. 65 of 2022',
    minInvestment: 'Property title value ≥ AED 2,000,000',
    eligibilitySummary: 'Foreign national property owners holding freehold title deeds valued at AED 2,000,000 or greater across one or multiple properties in Dubai or the UAE.',
    familySponsorship: 'Includes spouse, unmarried sons up to age 25, unmarried daughters of any age, and domestic staff without numerical caps.',
    mandatoryDocuments: [
      'Original Passport with minimum 6 months validity',
      'Electronic Title Deed issued by Dubai Land Department (DLD)',
      'Digital passport-standard photograph matching ICP specifications',
      'DHA-compliant UAE health insurance policy',
      'Police Clearance Certificate (Good Conduct Certificate)'
    ],
    processSteps: [
      { step: '01', title: 'ELIGIBILITY', desc: 'Verify property purchase price or DLD valuation certificate meets or exceeds AED 2,000,000.' },
      { step: '02', title: 'OWNERSHIP / VALUE', desc: 'Secure official electronic Title Deed from the Dubai Land Department.' },
      { step: '03', title: 'DOCUMENTATION', desc: 'Assemble passport, police clearance, and DHA medical insurance policy.' },
      { step: '04', title: 'APPLICATION', desc: 'Submit application through DLD Cube or GDRFA smart electronic channels.' },
      { step: '05', title: 'AUTHORITY REVIEW', desc: 'Complete DHA medical fitness screening and ICP biometric registration.' },
      { step: '06', title: 'ISSUANCE', desc: 'Receive electronic 10-Year Golden Visa residency permit and physical Emirates ID.' }
    ],
    officialCaveats: [
      'Duration Note: The official UAE Government portal describes both 5-year and 10-year categories depending on specific legal track. Current DLD Cube and GDRFA Dubai portals process 10-year residency for titles meeting AED 2M.',
      'Property Retention: Qualifying real estate ownership must be maintained. Disposal without replacement terminates residency status.',
      'Stay Requirement Exemption: Golden Visa holders may remain outside the UAE for more than 6 consecutive months without voiding their visa.'
    ]
  },
  property_sub2m: {
    title: '2-Year Property Investor Residency',
    validity: '2 Years (Renewable)',
    authority: 'Dubai Land Department (DLD) / GDRFA Dubai',
    authorityUrl: 'https://dubailand.gov.ae/en/eservices/cube-services/',
    legalBasis: 'DLD Investor Services Regulations',
    minInvestment: 'Property title value ≥ AED 750,000',
    eligibilitySummary: 'Property owners holding ready residential real estate with title deed value of AED 750,000 or above.',
    familySponsorship: 'Sponsorship of spouse and dependent children under standard GDRFA rules.',
    mandatoryDocuments: [
      'Original Passport & current UAE entry status',
      'Electronic Title Deed for ready residential property',
      'Police Good Conduct Certificate from Dubai Police',
      'DHA approved Health Insurance',
      'Attested Marriage Certificate (for family sponsorship)'
    ],
    processSteps: [
      { step: '01', title: 'ELIGIBILITY', desc: 'Confirm ready residential property title deed value meets AED 750,000.' },
      { step: '02', title: 'OWNERSHIP / VALUE', desc: 'Obtain building completion certificate and DLD Title Deed.' },
      { step: '03', title: 'DOCUMENTATION', desc: 'Compile police clearance, passport copies, and health coverage.' },
      { step: '04', title: 'APPLICATION', desc: 'File application dossier at DLD Cube Customer Happiness Center.' },
      { step: '05', title: 'AUTHORITY REVIEW', desc: 'Complete DHA medical examination and Emirates ID biometrics.' },
      { step: '06', title: 'ISSUANCE', desc: 'Issuance of 2-year renewable investor residency permit.' }
    ],
    officialCaveats: [
      'Applies only to completed residential properties with ready title deeds. Off-plan properties do not qualify for the 2-year scheme.',
      'Holders are subject to the standard rule requiring entry to the UAE at least once every 180 days to maintain validity.'
    ]
  },
  business_setup: {
    title: 'Green Residency & Corporate Entrepreneurship',
    validity: '5 Years (Green Visa) / 2 Years (Standard Commercial)',
    authority: 'Ministry of Economy / Dubai DET / Free Zone Authorities',
    authorityUrl: 'https://u.ae/en/information-and-services/visa-and-emirates-id/residence-visas/green-visa',
    legalBasis: 'Cabinet Resolution No. 65 of 2022',
    minInvestment: 'AED 500,000 capital in registered UAE enterprise',
    eligibilitySummary: 'Entrepreneurs, partners, and investors holding equity in mainland or free zone registered entities.',
    familySponsorship: 'Includes spouse and children for the full 5-year duration under Green Visa framework.',
    mandatoryDocuments: [
      'Valid Commercial Trade License and Memorandum of Association',
      'Proof of capital investment or audited company balance sheet',
      'Approval certificate from competent licensing authority',
      'Health insurance and passport documentation'
    ],
    processSteps: [
      { step: '01', title: 'ELIGIBILITY', desc: 'Establish trade license with minimum capital participation.' },
      { step: '02', title: 'OWNERSHIP / VALUE', desc: 'Obtain establishment card and commercial registry extract.' },
      { step: '03', title: 'DOCUMENTATION', desc: 'Prepare corporate resolutions, passport copies, and health policy.' },
      { step: '04', title: 'APPLICATION', desc: 'Submit Green Visa petition via ICP or Dubai DET portal.' },
      { step: '05', title: 'AUTHORITY REVIEW', desc: 'Complete statutory medical testing and biometrics capture.' },
      { step: '06', title: 'ISSUANCE', desc: 'Issuance of 5-year self-sponsored Green Residency.' }
    ],
    officialCaveats: [
      'Requires maintenance of active commercial license in good standing throughout residency term.'
    ]
  },
  remote_work: {
    title: 'Virtual Working Program (Remote Work Visa)',
    validity: '1 Year (Renewable)',
    authority: 'Dubai Department of Economy and Tourism (DET) / GDRFA',
    authorityUrl: 'https://www.visitdubai.com/en/invest-in-dubai/live-and-work/visas-and-entry/work-remotely-from-dubai',
    legalBasis: 'Dubai Virtual Working Directive',
    minInvestment: 'USD 3,500 monthly income verification',
    eligibilitySummary: 'Foreign employed professionals or business owners who work remotely for an entity outside the UAE.',
    familySponsorship: 'Permits sponsorship of immediate family members for 1-year renewable terms.',
    mandatoryDocuments: [
      'Proof of employment outside UAE or company ownership document',
      'Last 3 months bank statements showing regular monthly income ≥ USD 3,500',
      'Valid health insurance with UAE coverage',
      'Passport with minimum 6 months validity'
    ],
    processSteps: [
      { step: '01', title: 'ELIGIBILITY', desc: 'Demonstrate active remote employment or foreign entity ownership.' },
      { step: '02', title: 'INCOME AUDIT', desc: 'Provide 3 consecutive months of official bank statements.' },
      { step: '03', title: 'DOCUMENTATION', desc: 'Prepare employment contract, passport copy, and health coverage.' },
      { step: '04', title: 'APPLICATION', desc: 'Submit online via Dubai DET virtual work portal.' },
      { step: '05', title: 'AUTHORITY REVIEW', desc: 'Security clearance and entry permit issuance.' },
      { step: '06', title: 'ISSUANCE', desc: 'Arrival in UAE, medical fitness check, and Emirates ID receipt.' }
    ],
    officialCaveats: [
      'Income must originate from outside the UAE. Local employment requires standard work permits.'
    ]
  }
}

export default function ResidencyPage() {
  const [selectedObjective, setSelectedObjective] = React.useState<ObjectiveType>('property_2m')
  const activePathway = PATHWAY_DATA[selectedObjective]

  return (
    <div className="bg-[#ffffff] text-[#111111] min-h-screen pb-24">
      
      {/* 1. EDITORIAL HEADER */}
      <section className="pt-20 pb-20 sm:pt-28 sm:pb-28 border-b border-black/[0.06] bg-[#fafaf8]">
        <div className="w-full max-w-[1120px] mx-auto px-6 sm:px-8 space-y-6">
          <div className="flex items-center justify-between">
            <span className="text-[11px] font-mono font-medium uppercase tracking-[0.2em] text-[#9f8144]">
              SOVEREIGN RESIDENCY &bull; STATUTORY FRAMEWORK
            </span>
            <ProvenanceTag sourceClass="OFFICIAL GOVERNMENT" sourceName="Cabinet Res. 65/2022" />
          </div>

          <h1 className="text-[38px] sm:text-[54px] lg:text-[64px] font-light tracking-[-0.03em] leading-[1.04] text-[#111111]">
            UAE Golden Visa &amp; Residency Dossier
          </h1>
          
          <p className="text-base sm:text-xl text-[#6b6b6b] font-light max-w-2xl leading-relaxed">
            Statutory qualification criteria, official document checklists, and the 6-stage conveyancing timeline for property investors and principals.
          </p>
        </div>
      </section>

      {/* 2. PATHWAY SELECTOR BAR */}
      <section className="sticky top-[74px] z-30 bg-[#ffffff]/90 backdrop-blur-md border-b border-black/[0.06] py-4 px-6 sm:px-8">
        <div className="w-full max-w-[1120px] mx-auto flex items-center gap-2.5 overflow-x-auto">
          <button
            onClick={() => setSelectedObjective('property_2m')}
            className={`px-4 py-2 rounded-full text-xs font-mono font-medium transition-all shrink-0 ${
              selectedObjective === 'property_2m'
                ? 'bg-[#111111] text-[#fafaf8]'
                : 'border border-black/[0.08] text-[#6b6b6b] hover:text-[#111111] bg-[#ffffff]'
            }`}
          >
            10-Yr Golden Visa (≥ AED 2M)
          </button>
          <button
            onClick={() => setSelectedObjective('property_sub2m')}
            className={`px-4 py-2 rounded-full text-xs font-mono font-medium transition-all shrink-0 ${
              selectedObjective === 'property_sub2m'
                ? 'bg-[#111111] text-[#fafaf8]'
                : 'border border-black/[0.08] text-[#6b6b6b] hover:text-[#111111] bg-[#ffffff]'
            }`}
          >
            2-Yr Property Visa (≥ AED 750k)
          </button>
          <button
            onClick={() => setSelectedObjective('business_setup')}
            className={`px-4 py-2 rounded-full text-xs font-mono font-medium transition-all shrink-0 ${
              selectedObjective === 'business_setup'
                ? 'bg-[#111111] text-[#fafaf8]'
                : 'border border-black/[0.08] text-[#6b6b6b] hover:text-[#111111] bg-[#ffffff]'
            }`}
          >
            5-Yr Green Visa (Commercial)
          </button>
          <button
            onClick={() => setSelectedObjective('remote_work')}
            className={`px-4 py-2 rounded-full text-xs font-mono font-medium transition-all shrink-0 ${
              selectedObjective === 'remote_work'
                ? 'bg-[#111111] text-[#fafaf8]'
                : 'border border-black/[0.08] text-[#6b6b6b] hover:text-[#111111] bg-[#ffffff]'
            }`}
          >
            1-Yr Virtual Work Visa
          </button>
        </div>
      </section>

      {/* 3. PATHWAY DOSSIER & 6-STAGE CONVEYANCING TIMELINE */}
      <main className="w-full max-w-[1120px] mx-auto px-6 sm:px-8 py-16 sm:py-24 space-y-16">
        
        {/* Pathway Header Details */}
        <div className="bg-[#fafaf8] p-6 sm:p-8 rounded border border-[#e5e5ea] space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-[#e5e5ea] pb-4">
            <div>
              <span className="text-[10px] font-mono text-[#9f8144] font-semibold uppercase block">
                STATUTORY PATHWAY DOSSIER
              </span>
              <h2 className="text-2xl sm:text-3xl font-semibold text-[#111111]">
                {activePathway.title}
              </h2>
            </div>
            <div className="text-right">
              <span className="text-[10px] font-mono text-[#6b6b6b] uppercase block">Statutory Validity</span>
              <span className="text-sm font-bold text-[#111111] font-mono">{activePathway.validity}</span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs font-mono">
            <div className="p-3.5 rounded bg-[#ffffff] border border-[#e5e5ea]">
              <span className="text-[#6b6b6b] block text-[10px]">COMPETENT AUTHORITY</span>
              <span className="font-semibold text-[#111111]">{activePathway.authority}</span>
            </div>
            <div className="p-3.5 rounded bg-[#ffffff] border border-[#e5e5ea]">
              <span className="text-[#6b6b6b] block text-[10px]">LEGAL BASIS</span>
              <span className="font-semibold text-[#111111]">{activePathway.legalBasis}</span>
            </div>
            <div className="p-3.5 rounded bg-[#ffffff] border border-[#e5e5ea]">
              <span className="text-[#6b6b6b] block text-[10px]">INVESTMENT THRESHOLD</span>
              <span className="font-semibold text-[#111111]">{activePathway.minInvestment}</span>
            </div>
          </div>

          <p className="text-sm text-[#484848] leading-relaxed">
            {activePathway.eligibilitySummary}
          </p>
        </div>

        {/* 6-Stage Conveyancing Timeline */}
        <div className="space-y-6">
          <div className="border-b border-[#e5e5ea] pb-3">
            <h3 className="text-xl font-semibold text-[#111111]">
              6-Stage Procedural Roadmap
            </h3>
            <p className="text-xs text-[#6b6b6b]">
              Standard administrative workflow from title acquisition to physical Emirates ID issuance.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {activePathway.processSteps.map((step, idx) => (
              <div
                key={idx}
                className="p-5 rounded border border-[#e5e5ea] bg-[#ffffff] space-y-2 flex flex-col justify-between"
              >
                <div className="space-y-1.5">
                  <span className="text-[10px] font-mono font-bold text-[#9f8144] block">
                    STAGE {step.step}
                  </span>
                  <div className="text-sm font-semibold text-[#111111]">
                    {step.title}
                  </div>
                  <p className="text-xs text-[#484848] leading-relaxed">
                    {step.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Mandatory Documentation Checklist & Caveats */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
          
          {/* Documentation */}
          <div className="p-6 rounded border border-[#e5e5ea] bg-[#ffffff] space-y-4">
            <h3 className="text-base font-semibold text-[#111111] border-b border-[#e5e5ea] pb-2">
              Mandatory Filing Checklist
            </h3>
            <ul className="space-y-2.5 text-xs text-[#484848]">
              {activePathway.mandatoryDocuments.map((doc, idx) => (
                <li key={idx} className="flex items-start gap-2.5">
                  <CheckCircle2 className="h-4 w-4 text-[#9f8144] shrink-0 mt-0.5" />
                  <span>{doc}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Official Regulatory Caveats */}
          <div className="p-6 rounded border border-[#e5e5ea] bg-[#fafaf8] space-y-4">
            <h3 className="text-base font-semibold text-[#111111] border-b border-[#e5e5ea] pb-2 flex items-center gap-2">
              <AlertCircle className="h-4 w-4 text-[#9f8144]" />
              <span>Official Regulatory Caveats</span>
            </h3>
            <ul className="space-y-2 text-xs text-[#484848] leading-relaxed">
              {activePathway.officialCaveats.map((cav, idx) => (
                <li key={idx} className="space-y-1">
                  <p>{cav}</p>
                </li>
              ))}
            </ul>
            <div className="pt-2 border-t border-[#e5e5ea]">
              <a
                href={activePathway.authorityUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs text-[#111111] underline inline-flex items-center gap-1 font-mono"
              >
                <span>Review Official Government Portal</span>
                <ExternalLink className="h-3 w-3" />
              </a>
            </div>
          </div>

        </div>

        {/* Private Client Desk CTA */}
        <div className="p-8 rounded border border-[#e5e5ea] bg-[#fafaf8] text-center space-y-4 max-w-2xl mx-auto">
          <h3 className="text-xl font-semibold text-[#111111]">
            Require Private Golden Visa Coordination?
          </h3>
          <p className="text-xs text-[#484848] leading-relaxed">
            Our private client desk coordinates title clearances, DLD Cube filings, DHA medical screenings, and family file attestation.
          </p>
          <div className="pt-2">
            <Link
              href="/private-client"
              className="px-5 py-2.5 rounded bg-[#111111] hover:bg-[#2a2a2e] text-[#fafaf8] text-xs font-medium tracking-tight transition-colors inline-flex items-center gap-2"
            >
              <span>Consult Private Advisory Desk</span>
              <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          </div>
        </div>

      </main>

    </div>
  )
}
