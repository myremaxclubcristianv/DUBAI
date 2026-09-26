import * as React from 'react'
import { cn } from '@/lib/utils'
import { LucideIcon } from 'lucide-react'

interface CadranDialProps {
  label: string
  sublabel?: string
  value: string | number
  unit?: string
  targetValue?: string | number
  percentage?: number // 0 to 100 for arc meter
  status?: 'OPTIMAL' | 'STABLE' | 'MODERATE' | 'RESTRICTED' | 'VERIFIED' | 'OFFICIAL'
  statutoryRef?: string
  icon?: LucideIcon
  className?: string
}

export function CadranDial({
  label,
  sublabel,
  value,
  unit,
  targetValue,
  percentage = 78,
  status = 'VERIFIED',
  statutoryRef,
  icon: Icon,
  className,
}: CadranDialProps) {
  // SVG circular arc calculation (240 degree gauge)
  const radius = 42
  const circumference = 2 * Math.PI * radius
  const arcLength = circumference * 0.75 // 270 deg
  const strokeDashoffset = arcLength - (arcLength * Math.min(Math.max(percentage, 0), 100)) / 100

  return (
    <div
      className={cn(
        'relative p-6 sm:p-7 rounded-3xl bg-white border border-black/10 shadow-[0_2px_12px_rgba(0,0,0,0.03)] apple-card-hover flex flex-col justify-between group',
        className
      )}
    >
      <div className="flex items-start justify-between gap-3 relative z-10">
        <div>
          <span className="text-[10px] font-mono uppercase tracking-[0.15em] text-[#b8860b] font-bold block mb-1">
            {label}
          </span>
          {sublabel && (
            <span className="text-xs text-[#6e6e73] block font-normal">
              {sublabel}
            </span>
          )}
        </div>

        {status && (
          <span
            className={cn(
              'px-2.5 py-0.5 rounded-full text-[9px] font-mono uppercase tracking-wider font-bold border shrink-0',
              status === 'VERIFIED' || status === 'OPTIMAL' || status === 'OFFICIAL'
                ? 'bg-emerald-50 text-emerald-700 border-emerald-200'
                : status === 'STABLE'
                ? 'bg-blue-50 text-blue-700 border-blue-200'
                : 'bg-amber-50 text-amber-700 border-amber-200'
            )}
          >
            {status}
          </span>
        )}
      </div>

      {/* Cadran Radial Gauge Display */}
      <div className="my-5 flex items-center justify-center relative">
        <svg className="w-32 h-32 transform -rotate-135" viewBox="0 0 100 100">
          {/* Background Track */}
          <circle
            cx="50"
            cy="50"
            r={radius}
            fill="none"
            stroke="currentColor"
            strokeWidth="6"
            strokeLinecap="round"
            strokeDasharray={`${arcLength} ${circumference}`}
            className="text-black/[0.06]"
          />
          {/* Active Accent Arc */}
          <circle
            cx="50"
            cy="50"
            r={radius}
            fill="none"
            stroke="url(#cadran-gold-gradient)"
            strokeWidth="6"
            strokeLinecap="round"
            strokeDasharray={`${arcLength} ${circumference}`}
            strokeDashoffset={strokeDashoffset}
            className="transition-all duration-1000 ease-out"
          />
          <defs>
            <linearGradient id="cadran-gold-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#b8860b" />
              <stop offset="100%" stopColor="#d4af37" />
            </linearGradient>
          </defs>
        </svg>

        {/* Center Readout */}
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
          {Icon && <Icon className="h-4 w-4 text-[#b8860b] mb-0.5 opacity-80" />}
          <div className="text-xl sm:text-2xl font-extrabold font-mono text-[#1d1d1f] tracking-tight tabular-nums">
            {value}
          </div>
          {unit && (
            <span className="text-[10px] font-mono text-[#86868b] uppercase tracking-wider font-medium">
              {unit}
            </span>
          )}
        </div>
      </div>

      {/* Footer Benchmark Data */}
      <div className="pt-3 border-t border-black/10 flex items-center justify-between text-[11px] font-mono text-[#6e6e73] relative z-10">
        {targetValue ? (
          <span>Benchmark: <strong className="text-[#1d1d1f]">{targetValue}</strong></span>
        ) : (
          <span>Verified Register</span>
        )}
        {statutoryRef && (
          <span className="truncate max-w-[140px] text-[#86868b] text-[10px]" title={statutoryRef}>
            {statutoryRef}
          </span>
        )}
      </div>
    </div>
  )
}

interface CadranQuadrantProps {
  eyebrow?: string
  title: string
  statutorySource?: string
  quadrants: Array<{
    title: string
    value: string
    subtext: string
    delta?: string
    isPositive?: boolean
    statutoryRef?: string
  }>
  className?: string
}

export function CadranQuadrant({
  eyebrow,
  title,
  statutorySource,
  quadrants,
  className,
}: CadranQuadrantProps) {
  return (
    <div
      className={cn(
        'p-6 sm:p-10 rounded-3xl bg-white border border-black/10 shadow-[0_2px_12px_rgba(0,0,0,0.03)] apple-card-hover space-y-6',
        className
      )}
    >
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-black/10 pb-5">
        <div>
          {eyebrow && (
            <span className="text-[10px] font-mono font-bold uppercase tracking-[0.15em] text-[#b8860b] block">
              {eyebrow}
            </span>
          )}
          <h3 className="text-xl sm:text-2xl font-extrabold text-[#1d1d1f] tracking-tight">
            {title}
          </h3>
        </div>
        {statutorySource && (
          <span className="text-xs font-mono text-[#86868b] bg-[#f5f5f7] px-3 py-1.5 rounded-full border border-black/10 shrink-0 font-medium">
            {statutorySource}
          </span>
        )}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6">
        {quadrants.map((q, idx) => (
          <div
            key={idx}
            className="p-6 rounded-2xl bg-[#f5f5f7] border border-black/10 flex flex-col justify-between space-y-4 hover:border-black/20 transition-all duration-200"
          >
            <div className="space-y-2">
              <div className="flex items-start justify-between gap-2 min-h-[1.5rem]">
                <span className="text-xs font-semibold text-[#1d1d1f]">
                  {q.title}
                </span>
                {q.delta && (
                  <span
                    className={cn(
                      'text-[10px] font-mono px-2 py-0.5 rounded-full border font-bold shrink-0',
                      q.isPositive
                        ? 'bg-emerald-50 text-emerald-700 border-emerald-200'
                        : 'bg-zinc-200 text-[#1d1d1f] border-zinc-300'
                    )}
                  >
                    {q.delta}
                  </span>
                )}
              </div>

              <div className="text-2xl sm:text-3xl font-extrabold text-[#1d1d1f] tabular-nums tracking-tight">
                {q.value}
              </div>
            </div>

            <div className="space-y-2 pt-3 border-t border-black/10">
              <p className="text-xs text-[#6e6e73] leading-relaxed font-normal">
                {q.subtext}
              </p>
              {q.statutoryRef && (
                <div className="text-[10px] font-mono text-[#86868b] truncate">
                  Ref: {q.statutoryRef}
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
