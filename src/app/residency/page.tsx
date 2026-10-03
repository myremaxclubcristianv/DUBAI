'use client'

import * as React from 'react'
import {
  Section,
  Eyebrow,
  TimelineStep,
  PrimaryLink,
} from '@/components/layout/layout-primitives'
import { AlertCircle, ExternalLink } from 'lucide-react'

export default function ResidencyPage() {
  return (
    <div className="flex flex-col min-h-screen bg-[#ffffff] text-[#111111]">
      
      {/* 1. EDITORIAL OPENING */}
      <section className="pt-20 pb-16 sm:pt-28 sm:pb-24 border-b border-[#e5e5ea] bg-[#fafaf8]">
        <div className="w-full max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-16 space-y-6">
          <Eyebrow>PROPERTY RESIDENCY &bull; STATUTORY FRAMEWORK</Eyebrow>
          
          <div className="max-w-3xl space-y-4">
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-light tracking-[-0.035em] leading-[1.02] text-[#111111]">
              PROPERTY-BASED<br />RESIDENCY IN THE UAE.
            </h1>
            <p className="text-lg sm:text-xl text-[#6b6b6b] font-light leading-relaxed">
              Source-led overview of property investor residency routes in Dubai, including the 10-Year Golden Residency framework under Cabinet Resolution No. 65 of 2022 and standard investor permits. Eligibility and validity terms are determined by the relevant statutory authorities.
            </p>
          </div>
        </div>
      </section>

      {/* 2. STATUTORY PARAMETERS STRIP */}
      <section className="py-12 border-b border-[#e5e5ea] bg-[#ffffff]">
        <div className="w-full max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-16">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="space-y-1.5">
              <span className="text-[10px] font-mono uppercase tracking-widest text-[#8e8e93] block">
                01 &bull; GOLDEN VISA THRESHOLD
              </span>
              <div className="text-xl font-light text-[#111111]">&ge; AED 2,000,000</div>
              <p className="text-xs text-[#6b6b6b] font-light">Cabinet Res. 65/2022 qualifying real estate valuation across freehold titles</p>
            </div>

            <div className="space-y-1.5">
              <span className="text-[10px] font-mono uppercase tracking-widest text-[#8e8e93] block">
                02 &bull; GOLDEN VISA DURATION
              </span>
              <div className="text-xl font-light text-[#111111]">Up to 10 Years</div>
              <p className="text-xs text-[#6b6b6b] font-light">Renewable self-sponsored term as published by ICP &amp; GDRFA official portals</p>
            </div>

            <div className="space-y-1.5">
              <span className="text-[10px] font-mono uppercase tracking-widest text-[#8e8e93] block">
                03 &bull; PROPERTY INVESTOR PERMIT
              </span>
              <div className="text-xl font-light text-[#111111]">&ge; AED 750,000</div>
              <p className="text-xs text-[#6b6b6b] font-light">DLD / GDRFA 2-year renewable property investor visa route</p>
            </div>

            <div className="space-y-1.5">
              <span className="text-[10px] font-mono uppercase tracking-widest text-[#8e8e93] block">
                04 &bull; AUTHORITY DISCRETION
              </span>
              <div className="text-xl font-light text-[#111111]">Subject to Authority Review</div>
              <p className="text-xs text-[#6b6b6b] font-light">Approval is governed by GDRFA, ICP, and DLD Cube verification protocols</p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. VERTICAL 6-STAGE RESIDENCY JOURNEY */}
      <Section spacing="room-200" surface="white" containerSize="editorial">
        <div className="space-y-16">
          
          <div className="space-y-4">
            <Eyebrow>CONVEYANCING WORKFLOW</Eyebrow>
            <h2 className="text-3xl sm:text-5xl font-light tracking-[-0.03em] text-[#111111]">
              The Statutory Conveyancing Progression
            </h2>
            <p className="text-base sm:text-lg text-[#6b6b6b] font-light max-w-2xl leading-relaxed">
              Step-by-step conveyancing and application progression under published Dubai Land Department and immigration procedures.
            </p>
          </div>

          <div className="divide-y divide-[#e5e5ea] border-t border-b border-[#e5e5ea]">
            <TimelineStep
              number="01"
              title="Eligibility & Freehold Enclave Verification"
              description="Confirm that the real estate asset is located within designated foreign freehold territories under Dubai Regulation No. 3 of 2006, ensuring valid registered title status."
              source="Dubai Land Department (DLD)"
            />
            <TimelineStep
              number="02"
              title="Ownership & Valuation Verification"
              description="Verify that the gross purchase value or official DLD valuation certificate meets or exceeds the applicable statutory threshold (AED 2,000,000 for Golden Visa or AED 750,000 for standard property visa). Mortgaged properties qualify subject to bank NOC and equity guidelines."
              source="Cabinet Resolution No. 65 of 2022 & DLD Guidelines"
            />
            <TimelineStep
              number="03"
              title="Statutory Documentation Assemblage"
              description="Compile authentic electronic Title Deed, valid passport (min. 6 months validity), Good Conduct certificate where required, and comprehensive DHA-compliant health insurance."
              source="DLD Cube & GDRFA Dubai"
            />
            <TimelineStep
              number="04"
              title="Application Lodgement via DLD Cube / GDRFA"
              description="Direct electronic lodgement of the residency dossier through the DLD Cube investor portal or GDRFA smart service platforms."
              source="DLD Cube Customer Happiness Centre"
            />
            <TimelineStep
              number="05"
              title="Authority Review, Biometrics & DHA Medical"
              description="Statutory security review by immigration authorities, sovereign medical fitness examination at DHA centres, and ICP biometric registration."
              source="Dubai Health Authority (DHA) / ICP"
            />
            <TimelineStep
              number="06"
              title="Visa Endorsement & Emirates ID Issuance"
              description="Issuance of the digital residence permit and physical delivery of the unified Emirates Identity card according to the approved permit duration."
              source="Federal Authority for Identity and Citizenship (ICP)"
            />
          </div>

          {/* Action & Caveat */}
          <div className="p-8 rounded-2xl bg-[#fafaf8] border border-[#e5e5ea] space-y-4">
            <div className="flex items-center gap-2">
              <AlertCircle className="h-4 w-4 text-[#9f8144]" />
              <span className="text-xs font-mono uppercase tracking-wider text-[#111111] font-semibold">
                Statutory Authority Caveat
              </span>
            </div>
            <p className="text-xs text-[#6b6b6b] leading-relaxed">
              Qualifying property ownership must be maintained throughout the residency validity term. Property acquisition does not automatically guarantee visa approval; all applications are subject to sovereign background clearance, medical examination, and official authority discretion. Residency does not confer UAE citizenship or passport rights.
            </p>
            <div className="pt-2 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-t border-[#e5e5ea]">
              <a
                href="https://u.ae/en/information-and-services/visa-and-emirates-id/residence-visas/golden-visa"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs font-mono text-[#111111] underline inline-flex items-center gap-1.5"
              >
                <span>Review Official UAE Government Portal</span>
                <ExternalLink className="h-3 w-3" />
              </a>

              <PrimaryLink href="/private-client">
                Request Private Golden Visa Mandate
              </PrimaryLink>
            </div>
          </div>

        </div>
      </Section>

    </div>
  )
}
