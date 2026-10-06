'use client'

import * as React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { VERIFIED_LIFESTYLE } from '@/lib/data/lifestyle'
import { SourceBadge } from '@/components/ui/source-badge'
import { PageIntro } from '@/components/layout/layout-primitives'
import { ArrowLeft, ExternalLink, ShieldCheck } from 'lucide-react'

export default function LuxuryCarsPage() {
  const carsList = VERIFIED_LIFESTYLE.filter((l) => l.category === 'cars')

  return (
    <div className="bg-white text-slate-900 min-h-screen pb-24">
      {/* 1. EDITORIAL PAGE INTRO */}
      <PageIntro
        eyebrow="RTA Licensed Luxury Fleets"
        badge={<SourceBadge status="LICENSED OPERATOR" sourceName="RTA Commercial Register" />}
        title={<>Exotic Supercars &amp; Mobility<span className="text-[#0284c7]">.</span></>}
        description="RTA-licensed luxury exotic fleet management, airport VIP transfers, and armored security escort protocols across Dubai."
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
        {/* Entities Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {carsList.map((item) => (
            <div
              key={item.id}
              className="p-6 sm:p-7 bg-white rounded-xs border border-slate-200 hover:border-[#0284c7]/40 transition-all duration-300 flex flex-col justify-between space-y-6 group shadow-xs hover:shadow-md"
            >
              <div className="space-y-5">
                <div className="relative aspect-[16/10] rounded-xs overflow-hidden bg-slate-100 border border-slate-200">
                  <Image
                    src={item.image || 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1200&q=80'}
                    alt={item.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="px-2.5 py-0.5 rounded-xs text-[10px] font-mono font-semibold uppercase bg-white/90 backdrop-blur-md text-[#0284c7] border border-sky-100 shadow-xs">
                      RTA Licensed Fleet
                    </span>
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-light text-slate-900 tracking-tight group-hover:text-[#0284c7] transition-colors font-serif">{item.title}</h3>
                  <p className="text-xs text-slate-500 mt-1 font-mono">
                    {item.location}
                  </p>
                </div>

                <p className="text-xs text-slate-600 font-light leading-relaxed">
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
                  Verified RTA Operator
                </span>
                {item.provenance.source_url && (
                  <a
                    href={item.provenance.source_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-mono text-[#0284c7] hover:underline font-medium"
                  >
                    <span>Fleet Portal</span>
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