'use client'

import * as React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { SourceBadge } from '@/components/ui/source-badge'
import { ArrowLeft } from 'lucide-react'

export default function LuxuryCarsPage() {
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
                RTA LICENSED FLEETS
              </span>
              <SourceBadge status="LICENSED OPERATOR" sourceName="RTA Commercial Register" />
            </div>
            <h1 className="text-3xl sm:text-4xl font-extrabold text-text-primary tracking-tight mt-1">
              Exotic Supercars & Executive Fleet
            </h1>
            <p className="text-xs sm:text-sm text-text-secondary mt-1">
              RTA-licensed luxury exotic fleet management, airport VIP transfers, and armored security escort protocols.
            </p>
          </div>
        </div>

        {/* Entities Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Card 1: Supercars */}
          <div className="p-6 sm:p-8 bg-white rounded-2xl border border-border hover:border-accent hover:shadow-md transition-all duration-300 flex flex-col justify-between space-y-5">
            <div className="space-y-4">
              <div className="relative aspect-[16/9] rounded-xl overflow-hidden bg-surface-elevated">
                <Image
                  src="https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1200&q=80"
                  alt="Supercar Marque Fleet"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover"
                />
                <div className="absolute top-3 left-3">
                  <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono font-bold bg-white/95 backdrop-blur-md text-text-primary shadow-xs">
                    RTA Licensed Luxury Fleet
                  </span>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-bold text-text-primary">Supercar & Exotic Marque Fleet</h3>
                <p className="text-xs text-text-muted mt-0.5">
                  Ferrari, Lamborghini, Rolls-Royce, Bentley, Porsche
                </p>
              </div>

              <p className="text-xs sm:text-sm text-text-secondary leading-relaxed">
                Direct access to authenticated exotic marques with full comprehensive insurance, bespoke door-to-door delivery across Dubai, and private track access options.
              </p>

              <div className="p-4 bg-surface rounded-xl border border-border text-xs space-y-1">
                <span className="text-[10px] uppercase font-mono text-text-muted block">Tariff Structure</span>
                <span className="font-extrabold text-accent block">
                  PRICE ON REQUEST (Daily / Weekly Rates via Licensed Partner Desk)
                </span>
              </div>
            </div>

            <div className="pt-4 border-t border-border-subtle">
              <Link
                href="/private-client"
                className="w-full py-2.5 px-4 rounded-xl border border-border bg-surface hover:bg-text-primary hover:text-white text-xs font-bold text-center transition-all flex items-center justify-center gap-1.5"
              >
                <span>Request Fleet Manifest via Private Desk</span>
              </Link>
            </div>
          </div>

          {/* Card 2: Executive Chauffeur */}
          <div className="p-6 sm:p-8 bg-white rounded-2xl border border-border hover:border-accent hover:shadow-md transition-all duration-300 flex flex-col justify-between space-y-5">
            <div className="space-y-4">
              <div className="relative aspect-[16/9] rounded-xl overflow-hidden bg-surface-elevated">
                <Image
                  src="https://images.unsplash.com/photo-1549399542-7e3f8b79c341?auto=format&fit=crop&w=1200&q=80"
                  alt="Executive Chauffeur"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover"
                />
                <div className="absolute top-3 left-3">
                  <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono font-bold bg-white/95 backdrop-blur-md text-text-primary shadow-xs">
                    RTA Certified Chauffeur
                  </span>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-bold text-text-primary">VIP Chauffeur & Executive Protection</h3>
                <p className="text-xs text-text-muted mt-0.5">
                  Mercedes-Maybach, Cadillac Escalade ESV, Range Rover Autobiography
                </p>
              </div>

              <p className="text-xs sm:text-sm text-text-secondary leading-relaxed">
                Professional RTA-certified multi-lingual drivers with airport tarmac meet-and-greet protocol and continuous private inter-emirate executive mobility.
              </p>

              <div className="p-4 bg-surface rounded-xl border border-border text-xs space-y-1">
                <span className="text-[10px] uppercase font-mono text-text-muted block">Tariff Structure</span>
                <span className="font-extrabold text-accent block">
                  PRICE ON REQUEST (Hourly / Daily Retainers)
                </span>
              </div>
            </div>

            <div className="pt-4 border-t border-border-subtle">
              <Link
                href="/private-client"
                className="w-full py-2.5 px-4 rounded-xl border border-border bg-surface hover:bg-text-primary hover:text-white text-xs font-bold text-center transition-all flex items-center justify-center gap-1.5"
              >
                <span>Book Chauffeur Protocol via Private Desk</span>
              </Link>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}