'use client'

import * as React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { VERIFIED_LIFESTYLE } from '@/lib/data/lifestyle'
import { SourceBadge } from '@/components/ui/source-badge'
import { ArrowLeft, ExternalLink, MapPin } from 'lucide-react'

export default function DiningPage() {
  const diningList = VERIFIED_LIFESTYLE.filter((l) => l.category === 'dining')

  const diningImages: Record<string, string> = {
    'life-dining-ossiano': 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1200&q=80',
    'life-dining-tresind': 'https://images.unsplash.com/photo-1550966871-3ed3cdb5ed0c?auto=format&fit=crop&w=1200&q=80',
    'life-dining-zuma': 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=1200&q=80',
  }

  return (
    <div className="bg-white text-text-primary min-h-screen pb-24">
      {/* 1. TOP BREADCRUMB */}
      <div className="border-b border-border bg-surface-subtle py-4">
        <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            href="/lifestyle"
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-text-secondary hover:text-text-primary transition-colors"
          >
            <ArrowLeft className="h-4 w-4" />
            <span>Back to Lifestyle Directory</span>
          </Link>
        </div>
      </div>

      <main className="w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 space-y-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-border pb-6">
          <div>
            <div className="flex items-center gap-2">
              <span className="text-[10px] font-bold uppercase tracking-wider text-accent font-mono">
                MICHELIN GUIDE CERTIFIED
              </span>
              <SourceBadge status="OFFICIAL SOURCE" sourceName="Michelin Guide Dubai Inspection" />
            </div>
            <h1 className="text-3xl sm:text-4xl font-extrabold text-text-primary tracking-tight mt-1">
              Michelin Fine Dining in Dubai
            </h1>
            <p className="text-xs sm:text-sm text-text-secondary mt-1">
              Verified Michelin-starred establishments and culinary theaters with transparent tasting menu tariffs.
            </p>
          </div>
        </div>

        {/* Entities Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {diningList.map((item) => (
            <div
              key={item.id}
              className="p-6 bg-white rounded-2xl border border-border hover:border-accent hover:shadow-md transition-all duration-300 flex flex-col justify-between space-y-5"
            >
              <div className="space-y-4">
                <div className="relative aspect-[16/10] rounded-xl overflow-hidden bg-surface-elevated">
                  <Image
                    src={diningImages[item.id] || 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=800&q=80'}
                    alt={item.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover"
                  />
                  <div className="absolute top-3 left-3">
                    <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-amber-50 text-amber-900 border border-amber-200">
                      Michelin Certified
                    </span>
                  </div>
                </div>

                <div className="flex items-start justify-between gap-2">
                  <div>
                    <h3 className="text-xl font-bold text-text-primary">{item.title}</h3>
                    <p className="text-xs text-text-muted flex items-center gap-1 mt-0.5">
                      <MapPin className="h-3.5 w-3.5 text-accent shrink-0" />
                      <span className="truncate">{item.location}</span>
                    </p>
                  </div>
                  <SourceBadge provenance={item.provenance} showDetailButton={false} />
                </div>

                <p className="text-xs text-text-secondary leading-relaxed line-clamp-3">
                  {item.description}
                </p>

                {item.specs && (
                  <div className="p-3.5 bg-surface rounded-xl border border-border text-xs space-y-1.5">
                    {Object.entries(item.specs).map(([k, v]) => (
                      <div key={k} className="flex justify-between">
                        <span className="text-text-muted">{k}:</span>
                        <span className="font-semibold text-text-primary">{v}</span>
                      </div>
                    ))}
                  </div>
                )}

                <div className="pt-2">
                  <span className="text-[10px] font-mono uppercase text-text-muted block">Tariff / Pricing</span>
                  <span className="text-sm font-extrabold text-accent">{item.price_display}</span>
                </div>
              </div>

              {item.official_url && (
                <div className="pt-3 border-t border-border-subtle">
                  <a
                    href={item.official_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-2 px-3 rounded-xl border border-border bg-surface hover:bg-text-primary hover:text-white text-xs font-bold text-center transition-all flex items-center justify-center gap-1.5"
                  >
                    <span>Official Reservations Portal</span>
                    <ExternalLink className="h-3.5 w-3.5" />
                  </a>
                </div>
              )}
            </div>
          ))}
        </div>
      </main>
    </div>
  )
}