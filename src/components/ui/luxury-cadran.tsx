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
  status?: 'OPTIMAL' | 'STABLE' | 'MODERATE' | 'RESTRICTED' | 'VERIFIED'
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
        'relative p-6 rounded-3xl bg-[#0c0c0e] border border-white/10 hover:border-accent/40 transition-all duration-300 flex flex-col justify-between shadow-2xl group',
        className
      )}
    >
      {/* Background ambient light */}
      <div className="absolute top-0 right-0 w-32 h-32 bg-accent/5 blur-[50px] rounded-full pointer-events-none" />

      <div className="flex items-start justify-between gap-3 relative z-10">
        <div>
          <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-accent font-semibold block mb-1">
            {label}
          </span>
          {sublabel && (
            <span className="text-xs text-zinc-400 block font-normal">
              {sublabel}
            </span>
          )}
        </div>

        {status && (
          <span
            className={cn(
              'px-2.5 py-0.5 rounded-full text-[9px] font-mono uppercase tracking-wider font-semibold border shrink-0',
              status === 'VERIFIED' || status === 'OPTIMAL'
                ? 'bg-emerald-500/10 text-emerald-400 border-emerald-500/30'
                : status === 'STABLE'
                ? 'bg-blue-500/10 text-blue-400 border-blue-500/30'
                : 'bg-accent/10 text-accent border-accent/30'
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
            className="text-white/[0.06]"
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
              <stop offset="0%" stopColor="#d4af37" />
              <stop offset="100%" stopColor="#f3e5ab" />
            </linearGradient>
          </defs>
        </svg>

        {/* Center Readout */}
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
          {Icon && <Icon className="h-4 w-4 text-accent mb-0.5 opacity-80" />}
          <div className="text-xl sm:text-2xl font-bold font-mono text-white tracking-tight tabular-nums">
            {value}
          </div>
          {unit && (
            <span className="text-[10px] font-mono text-zinc-400 uppercase tracking-wider">
              {unit}
            </span>
          )}
        </div>
      </div>

      {/* Footer Benchmark Data */}
      <div className="pt-3 border-t border-white/5 flex items-center justify-between text-[11px] font-mono text-zinc-400 relative z-10">
        {targetValue ? (
          <span>Benchmark: <strong className="text-zinc-200">{targetValue}</strong></span>
        ) : (
          <span>Verified Register</span>
        )}
        {statutoryRef && (
          <span className="truncate max-w-[140px] text-zinc-500 text-[10px]" title={statutoryRef}>
            {statutoryRef}
          </span>
        )}
      </div>
    </div>
  )
}

interface CadranQuadrantProps {
  title: string
  eyebrow?: string
  statutorySource?: string
  quadrants: {
    title: string
    value: string
    subtext: string
    delta?: string
    isPositive?: boolean
    statutoryRef?: string
  }[]
  className?: string
}

export function CadranQuadrant({
  title,
  eyebrow = 'MACROECONOMIC INSTRUMENT QUADRANT',
  statutorySource = 'Dubai Land Department & UAE Central Bank',
  quadrants,
  className,
}: CadranQuadrantProps) {
  return (
    <div
      className={cn(
        'rounded-3xl bg-[#0c0c0e] border border-white/10 p-6 sm:p-8 shadow-2xl space-y-6 relative overflow-hidden',
        className
      )}
    >
      {/* Background Subtle Gradient */}
      <div className="absolute -top-24 -right-24 w-96 h-96 bg-accent/5 blur-[120px] rounded-full pointer-events-none" />

      {/* Quadrant Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-white/10 pb-5">
        <div>
          {eyebrow && (
            <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-accent font-semibold block mb-1">
              {eyebrow}
            </span>
          )}
          <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
            {title}
          </h3>
        </div>
        <div className="text-[10px] font-mono text-zinc-400 px-3 py-1 rounded-full bg-white/[0.03] border border-white/10 w-fit">
          Source: {statutorySource}
        </div>
      </div>

      {/* 4-Quadrant Precision Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {quadrants.map((q, idx) => (
          <div
            key={idx}
            className="p-5 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-accent/30 transition-colors space-y-3 flex flex-col justify-between"
          >
            <div className="space-y-1">
              <div className="flex items-center justify-between text-[10px] font-mono text-zinc-400">
                <span className="uppercase tracking-wider font-semibold">{q.title}</span>
                {q.delta && (
                  <span
                    className={cn(
                      'px-2 py-0.5 rounded-full text-[9px] font-mono font-bold',
                      q.isPositive !== false
                        ? 'text-emerald-400 bg-emerald-500/10 border border-emerald-500/20'
                        : 'text-amber-400 bg-amber-500/10 border border-amber-500/20'
                    )}
                  >
                    {q.delta}
                  </span>
                )}
              </div>
              <div className="text-2xl sm:text-3xl font-extrabold font-mono text-white tracking-tight pt-1">
                {q.value}
              </div>
              <p className="text-xs text-zinc-400 leading-relaxed font-normal">
                {q.subtext}
              </p>
            </div>

            {q.statutoryRef && (
              <div className="pt-2.5 border-t border-white/5 text-[10px] font-mono text-zinc-500 truncate" title={q.statutoryRef}>
                § {q.statutoryRef}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}
