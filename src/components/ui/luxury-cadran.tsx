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
        'relative p-5 sm:p-6 rounded-sm bg-[#111116] border border-white/10 hover:border-[#c9a962]/40 transition-all flex flex-col justify-between group shadow-[0_4px_20px_rgba(0,0,0,0.4)]',
        className
      )}
    >
      <div className="flex items-start justify-between gap-3 relative z-10">
        <div>
          <span className="text-[10px] font-mono uppercase tracking-[0.16em] text-[#c9a962] font-semibold block mb-0.5">
            {label}
          </span>
          {sublabel && (
            <span className="text-xs text-[#8e8e93] block font-light">
              {sublabel}
            </span>
          )}
        </div>

        {status && (
          <span
            className={cn(
              'px-2 py-0.5 rounded-xs text-[9px] font-mono uppercase tracking-wider font-semibold border shrink-0',
              status === 'VERIFIED' || status === 'OPTIMAL' || status === 'OFFICIAL'
                ? 'bg-emerald-950/40 text-emerald-400 border-emerald-500/30'
                : status === 'STABLE'
                ? 'bg-sky-950/40 text-sky-300 border-sky-500/30'
                : 'bg-amber-950/40 text-amber-300 border-amber-500/30'
            )}
          >
            {status}
          </span>
        )}
      </div>

      {/* Cadran Radial Gauge Display */}
      <div className="my-4 flex items-center justify-center relative">
        <svg className="w-28 h-28 transform -rotate-135" viewBox="0 0 100 100">
          {/* Background Track */}
          <circle
            cx="50"
            cy="50"
            r={radius}
            fill="none"
            stroke="currentColor"
            strokeWidth="5"
            strokeLinecap="round"
            strokeDasharray={`${arcLength} ${circumference}`}
            className="text-white/[0.08]"
          />
          {/* Active Accent Arc */}
          <circle
            cx="50"
            cy="50"
            r={radius}
            fill="none"
            stroke="url(#cadran-champagne-gradient)"
            strokeWidth="5"
            strokeLinecap="round"
            strokeDasharray={`${arcLength} ${circumference}`}
            strokeDashoffset={strokeDashoffset}
            className="transition-all duration-1000 ease-out"
          />
          <defs>
            <linearGradient id="cadran-champagne-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#c9a962" />
              <stop offset="100%" stopColor="#e5cca0" />
            </linearGradient>
          </defs>
        </svg>

        {/* Center Readout */}
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
          {Icon && <Icon className="h-3.5 w-3.5 text-[#c9a962] mb-0.5 opacity-90" />}
          <div className="text-lg sm:text-xl font-light font-mono text-[#f5f5f7] tracking-tight tabular-nums">
            {value}
          </div>
          {unit && (
            <span className="text-[9px] font-mono text-[#8e8e93] uppercase tracking-wider">
              {unit}
            </span>
          )}
        </div>
      </div>

      {/* Footer Benchmark Data */}
      <div className="pt-3 border-t border-white/10 flex items-center justify-between text-[10px] font-mono text-[#8e8e93] relative z-10">
        {targetValue ? (
          <span className="truncate max-w-[180px]">Target: <strong className="text-[#f5f5f7] font-normal">{targetValue}</strong></span>
        ) : (
          <span>Verified Register</span>
        )}
        {statutoryRef && (
          <span className="truncate max-w-[110px] text-[#71717a]" title={statutoryRef}>
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
        'p-6 sm:p-8 rounded-sm bg-[#111116] border border-white/10 space-y-6 shadow-[0_4px_20px_rgba(0,0,0,0.4)]',
        className
      )}
    >
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-white/10 pb-4">
        <div>
          {eyebrow && (
            <span className="text-[10px] font-mono uppercase tracking-[0.16em] text-[#c9a962] font-semibold block mb-0.5">
              {eyebrow}
            </span>
          )}
          <h3 className="text-xl sm:text-2xl font-light text-[#f5f5f7] tracking-tight">
            {title}
          </h3>
        </div>
        {statutorySource && (
          <span className="text-xs font-mono text-[#8e8e93] bg-[#08080a] px-3 py-1 rounded-xs border border-white/10 shrink-0">
            {statutorySource}
          </span>
        )}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
        {quadrants.map((q, idx) => (
          <div
            key={idx}
            className="p-5 rounded-xs bg-[#0d0d11] border border-white/10 flex flex-col justify-between space-y-3 hover:border-[#c9a962]/40 transition-all duration-200"
          >
            <div className="space-y-1.5">
              <div className="flex items-start justify-between gap-2">
                <span className="text-xs font-mono uppercase text-[#a1a1aa]">
                  {q.title}
                </span>
                {q.delta && (
                  <span
                    className={cn(
                      'text-[9px] font-mono px-1.5 py-0.5 rounded-xs border font-semibold shrink-0',
                      q.isPositive
                        ? 'bg-emerald-950/40 text-emerald-400 border-emerald-500/30'
                        : 'bg-white/5 text-[#a1a1aa] border-white/10'
                    )}
                  >
                    {q.delta}
                  </span>
                )}
              </div>

              <div className="text-2xl sm:text-3xl font-light text-[#f5f5f7] tabular-nums font-mono">
                {q.value}
              </div>
            </div>

            <div className="space-y-1.5 pt-3 border-t border-white/10">
              <p className="text-xs text-[#8e8e93] leading-relaxed font-light">
                {q.subtext}
              </p>
              {q.statutoryRef && (
                <div className="text-[9px] font-mono text-[#71717a] truncate">
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
