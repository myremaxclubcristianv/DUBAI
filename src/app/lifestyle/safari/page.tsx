'use client'

import * as React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { VERIFIED_LIFESTYLE } from '@/lib/data/lifestyle'
import { SourceBadge } from '@/components/ui/source-badge'
import { PageIntro } from '@/components/layout/layout-primitives'
import { ArrowLeft, ExternalLink, MapPin, ShieldCheck } from 'lucide-react'

export default function SafariPage() {
  const safariList = VERIFIED_LIFESTYLE.filter((l) => l.category === 'safari')

  return (
    <div className="bg-white text-slate-900 min-h-screen pb-24">
      {/* 1. EDITORIAL PAGE INTRO */}
      <PageIntro
        eyebrow="DDCR Conservation Operators"
        badge={<SourceBadge status="LICENSED OPERATOR" sourceName="Dubai Desert Conservation Reserve" />}
        title={<>Conservation Desert Safaris<span className="text-[#0284c7]">.</span></>}
        description="Eco-luxury private desert expeditions inside the protected Dubai Desert Conservation Reserve (DDCR) with vintage heritage fleets and astronomy camps."
      />

      <div className="w-full max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-16 pt-4">
        <Link
          href="/lifestyle"
          className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-slate-600 hover:text-[#0284c7] transition-colors"
        >
          <ArrowLeft className="h-4 w-4" />
          <span>Back to Lifestyle Monograph</span>
        </Link>
      </div>

      <main className="w-full max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-16 pt-6 space-y-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {safariList.map((item) => (
            <div
              key={item.id}
              className="p-6 sm:p-8 bg-white rounded-xs border border-slate-200 hover:border-[#0284c7]/40 transition-all duration-300 flex flex-col justify-between space-y-6 group shadow-xs hover:shadow-md"
            >
              <div className="space-y-5">
                <div className="relative aspect-[16/9] rounded-xs overflow-hidden bg-slate-100 border border-slate-200">
                  <Image
                    src={item.image || 'https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?auto=format&fit=crop&w=1200&q=80'}
                    alt={item.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="px-2.5 py-0.5 rounded-xs text-[10px] font-mono font-semibold uppercase bg-white/90 backdrop-blur-md text-[#0284c7] border border-sky-100 shadow-xs">
                      Eco-Sanctuary Licensed
                    </span>
                  </div>
                </div>

                <div className="flex items-start justify-between gap-3">
                  <div>
                    <h3 className="text-xl font-light text-slate-900 tracking-tight group-hover:text-[#0284c7] transition-colors font-serif">{item.title}</h3>
                    <p className="text-xs text-slate-500 flex items-center gap-1.5 mt-1 font-mono">
                      <MapPin className="h-3.5 w-3.5 text-[#0284c7] shrink-0" />
                      <span className="truncate">{item.location}</span>
                    </p>
                  </div>
                  <SourceBadge provenance={item.provenance} showDetailButton={false} />
                </div>

                <p className="text-xs sm:text-sm text-slate-600 font-light leading-relaxed">
                  {item.description}
                </p>

                {item.specs && (
                  <div className="p-4 bg-slate-50 rounded-xs border border-slate-200 text-xs space-y-2 font-mono">
                    {Object.entries(item.specs).map(([k, v]) => (
                      <div key={k} className="flex justify-between items-center text-slate-600">
                        <span className="text-slate-400 capitalize">{k.replace(/_/g, ' ')}:</span>
                        <span className="font-medium text-slate-900">{String(v)}</span>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                <span className="text-[11px] font-mono text-slate-500 flex items-center gap-1.5">
                  <ShieldCheck className="w-3.5 h-3.5 text-[#0284c7]" />
                  Verified DDCR Conservation Partner
                </span>
                {item.provenance.source_url && (
                  <a
                    href={item.provenance.source_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-mono text-[#0284c7] hover:underline font-medium"
                  >
                    <span>Expedition Portal</span>
                    <ExternalLink className="h-3 w-3" />
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  )
}
