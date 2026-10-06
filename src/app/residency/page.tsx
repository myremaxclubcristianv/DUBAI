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
    <div className="flex flex-col min-h-screen bg-[#08080a] text-[#f5f5f7]">
      
      {/* 1. EDITORIAL OPENING */}
      <section className="pt-16 pb-14 sm:pt-24 sm:pb-20 border-b border-white/10 bg-[#0d0d11]">
        <div className="w-full max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-16 space-y-6">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#c9a962]" />
            <Eyebrow>PROPERTY RESIDENCY &bull; STATUTORY SOVEREIGN FRAMEWORK</Eyebrow>
          </div>
          
          <div className="max-w-3xl space-y-4">
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-light tracking-[-0.035em] leading-[1.02] text-[#f5f5f7]">
              PROPERTY-BASED<br />RESIDENCY IN THE UAE.
            </h1>
            <p className="text-base sm:text-lg text-[#a1a1aa] font-light leading-relaxed">
              Source-led overview of property investor residency routes in Dubai, including the 10-Year Golden Residency framework under Cabinet Resolution No. 65 of 2022 and standard investor permits. Eligibility and validity terms are determined by the relevant statutory authorities.
            </p>
          </div>
        </div>
      </section>

      {/* 2. STATUTORY PARAMETERS STRIP */}
      <section className="py-10 border-b border-white/10 bg-[#08080a]">
        <div className="w-full max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-16">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-5 rounded-xs bg-[#111116] border border-white/10 space-y-1.5">
              <span className="text-[10px] font-mono uppercase tracking-widest text-[#c9a962] block font-semibold">
                01 &bull; GOLDEN VISA THRESHOLD
              </span>
              <div className="text-xl font-light text-[#f5f5f7] font-mono">&ge; AED 2,000,000</div>
              <p className="text-xs text-[#8e8e93] font-light">Cabinet Res. 65/2022 qualifying real estate valuation across freehold titles</p>
            </div>

            <div className="p-5 rounded-xs bg-[#111116] border border-white/10 space-y-1.5">
              <span className="text-[10px] font-mono uppercase tracking-widest text-[#c9a962] block font-semibold">
                02 &bull; GOLDEN VISA DURATION
              </span>
              <div className="text-xl font-light text-[#f5f5f7] font-mono">10-Year Self-Sponsored</div>
              <p className="text-xs text-[#8e8e93] font-light">Renewable term published by ICP &amp; GDRFA official portals</p>
            </div>

            <div className="p-5 rounded-xs bg-[#111116] border border-white/10 space-y-1.5">
              <span className="text-[10px] font-mono uppercase tracking-widest text-[#c9a962] block font-semibold">
                03 &bull; PROPERTY INVESTOR PERMIT
              </span>
              <div className="text-xl font-light text-[#f5f5f7] font-mono">&ge; AED 750,000</div>
              <p className="text-xs text-[#8e8e93] font-light">DLD / GDRFA 2-year renewable property investor visa route</p>
            </div>

            <div className="p-5 rounded-xs bg-[#111116] border border-white/10 space-y-1.5">
              <span className="text-[10px] font-mono uppercase tracking-widest text-[#c9a962] block font-semibold">
                04 &bull; AUTHORITY DISCRETION
              </span>
              <div className="text-xl font-light text-[#f5f5f7] font-mono">Subject to Review</div>
              <p className="text-xs text-[#8e8e93] font-light">Approval governed by GDRFA, ICP, and DLD Cube verification protocols</p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. VERTICAL 6-STAGE RESIDENCY JOURNEY */}
      <Section spacing="room-160" surface="subtle" containerSize="editorial">
        <div className="space-y-14">
          
          <div className="space-y-3">
            <Eyebrow>CONVEYANCING WORKFLOW</Eyebrow>
            <h2 className="text-3xl sm:text-5xl font-light tracking-[-0.03em] text-[#f5f5f7]">
              The Statutory Conveyancing Progression
            </h2>
            <p className="text-base text-[#a1a1aa] font-light max-w-2xl leading-relaxed">
              Step-by-step conveyancing and application progression under published Dubai Land Department and immigration procedures.
            </p>
          </div>

          <div className="divide-y divide-white/10 border-t border-b border-white/10">
            <TimelineStep
              number="01"
              title="Eligibility &amp; Freehold Enclave Verification"
              description="Confirm that the real estate asset is located within designated foreign freehold territories under Dubai Regulation No. 3 of 2006, ensuring valid registered title status."
              source="Dubai Land Department (DLD)"
            />
            <TimelineStep
              number="02"
              title="Ownership &amp; Valuation Verification"
              description="Verify that the gross purchase value or official DLD valuation certificate meets or exceeds the applicable statutory threshold (AED 2,000,000 for Golden Visa or AED 750,000 for standard property visa). Mortgaged properties qualify subject to bank NOC and equity guidelines."
              source="Cabinet Resolution No. 65 of 2022 &amp; DLD Guidelines"
            />
            <TimelineStep
              number="03"
              title="Statutory Documentation Assemblage"
              description="Compile authentic electronic Title Deed, valid passport (min. 6 months validity), Good Conduct certificate where required, and comprehensive DHA-compliant health insurance."
              source="DLD Cube &amp; GDRFA Dubai"
            />
            <TimelineStep
              number="04"
              title="Application Lodgement via DLD Cube / GDRFA"
              description="Direct electronic lodgement of the residency dossier through the DLD Cube investor portal or GDRFA smart service platforms."
              source="DLD Cube Customer Happiness Centre"
            />
            <TimelineStep
              number="05"
              title="Authority Review, Biometrics &amp; DHA Medical"
              description="Statutory security review by immigration authorities, sovereign medical fitness examination at DHA centres, and ICP biometric registration."
              source="Dubai Health Authority (DHA) / ICP"
            />
            <TimelineStep
              number="06"
              title="Visa Endorsement &amp; Emirates ID Issuance"
              description="Issuance of the digital residence permit and physical delivery of the unified Emirates Identity card according to the approved permit duration."
              source="Federal Authority for Identity and Citizenship (ICP)"
            />
          </div>

          {/* Action & Caveat */}
          <div className="p-6 sm:p-8 rounded-sm bg-[#111116] border border-white/10 space-y-4">
            <div className="flex items-center gap-2">
              <AlertCircle className="h-4 w-4 text-[#c9a962]" />
              <span className="text-xs font-mono uppercase tracking-wider text-[#f5f5f7] font-semibold">
                Statutory Authority Caveat
              </span>
            </div>
            <p className="text-xs text-[#a1a1aa] leading-relaxed font-light">
              Qualifying property ownership must be maintained throughout the residency validity term. Property acquisition does not automatically guarantee visa approval; all applications are subject to sovereign background clearance, medical examination, and official authority discretion. Residency does not confer UAE citizenship or passport rights.
            </p>
            <div className="pt-3 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-t border-white/10">
              <a
                href="https://u.ae/en/information-and-services/visa-and-emirates-id/residence-visas/golden-visa"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs font-mono text-[#c9a962] hover:underline inline-flex items-center gap-1.5"
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
