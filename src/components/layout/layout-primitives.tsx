import * as React from 'react'
import { cn } from '@/lib/utils'

/* ========================================================================= */
/* 1. CONTAINER — Single Canonical Global Grid (max-w-[1240px] centered)     */
/* ========================================================================= */

export type ContainerSize = 'default' | 'narrow' | 'wide' | 'editorial' | 'cinematic' | 'prose' | 'full'

interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  size?: ContainerSize
  as?: React.ElementType
}

const CONTAINER_SIZES: Record<ContainerSize, string> = {
  default: 'max-w-[1240px]',
  narrow: 'max-w-[840px]',
  wide: 'max-w-[1240px]',
  editorial: 'max-w-[1240px]',
  cinematic: 'max-w-[1240px]',
  prose: 'max-w-[760px]',
  full: 'max-w-full',
}

export function Container({
  size = 'default',
  as: Component = 'div',
  className,
  children,
  ...props
}: ContainerProps) {
  return (
    <Component
      className={cn(
        'w-full mx-auto px-4 sm:px-6 lg:px-8',
        CONTAINER_SIZES[size],
        className
      )}
      {...props}
    >
      {children}
    </Component>
  )
}

/* ========================================================================= */
/* 2. SECTION — Controlled Editorial Vertical Rhythm & Surfaces             */
/* ========================================================================= */

export type SectionSpacing = 'hero' | 'default' | 'tight' | 'loose' | 'none'
export type SectionSurface = 'pure' | 'subtle' | 'surface' | 'dark' | 'white' | 'elevated' | 'dark-elevated'

interface SectionProps extends React.HTMLAttributes<HTMLElement> {
  spacing?: SectionSpacing
  surface?: SectionSurface
  bordered?: boolean
  borderBottom?: boolean
  containerSize?: ContainerSize
  containerClassName?: string
  noContainer?: boolean
  as?: React.ElementType
}

const SPACING_CLASSES: Record<SectionSpacing, string> = {
  hero: 'pt-16 pb-20 sm:pt-24 sm:pb-28',
  default: 'py-16 sm:py-24',
  tight: 'py-10 sm:py-14',
  loose: 'py-20 sm:py-32',
  none: 'py-0',
}

const SURFACE_CLASSES: Record<SectionSurface, string> = {
  pure: 'bg-[#ffffff] text-[#111111]',
  white: 'bg-[#ffffff] text-[#111111]',
  subtle: 'bg-[#fafaf8] text-[#111111]',
  surface: 'bg-[#f5f5f3] text-[#111111]',
  elevated: 'bg-[#ffffff] text-[#111111]',
  dark: 'bg-[#111111] text-[#fafaf8]',
  'dark-elevated': 'bg-[#1a1a1c] text-[#fafaf8]',
}

export function Section({
  spacing = 'default',
  surface = 'pure',
  bordered = false,
  borderBottom = true,
  containerSize = 'default',
  containerClassName,
  noContainer = false,
  as: Component = 'section',
  className,
  children,
  ...props
}: SectionProps) {
  const isDark = surface === 'dark' || surface === 'dark-elevated'

  return (
    <Component
      className={cn(
        'relative w-full overflow-hidden',
        SPACING_CLASSES[spacing],
        SURFACE_CLASSES[surface],
        bordered && (isDark ? 'border-y border-[#2a2a2e]' : 'border-y border-[#e5e5ea]'),
        borderBottom && !bordered && (isDark ? 'border-b border-[#2a2a2e]' : 'border-b border-[#e5e5ea]'),
        className
      )}
      {...props}
    >
      {noContainer ? (
        children
      ) : (
        <Container size={containerSize} className={containerClassName}>
          {children}
        </Container>
      )}
    </Component>
  )
}

/* ========================================================================= */
/* 3. SECTION HEADER — Editorial Hierarchy & Provenance Badges               */
/* ========================================================================= */

interface SectionHeaderProps extends Omit<React.HTMLAttributes<HTMLDivElement>, 'title'> {
  eyebrow?: React.ReactNode
  badge?: React.ReactNode
  title: React.ReactNode
  description?: React.ReactNode
  subtitle?: React.ReactNode
  action?: React.ReactNode
  align?: 'left' | 'center' | 'split'
  theme?: 'light' | 'dark'
}

export function SectionHeader({
  eyebrow,
  badge,
  title,
  description,
  subtitle,
  action,
  align = 'left',
  theme = 'light',
  className,
  ...props
}: SectionHeaderProps) {
  const effectiveEyebrow = eyebrow || badge
  const effectiveDesc = description || subtitle
  const isDark = theme === 'dark'

  return (
    <div
      className={cn(
        'w-full flex flex-col gap-4',
        align === 'split' && 'md:flex-row md:items-end md:justify-between',
        align === 'center' && 'text-center items-center justify-center',
        align === 'left' && 'text-left items-start',
        className
      )}
      {...props}
    >
      <div className={cn('space-y-2.5', align === 'split' && 'max-w-2xl', align === 'center' && 'max-w-3xl mx-auto')}>
        {effectiveEyebrow && (
          <div className="flex items-center gap-2">
            <span className="text-[10px] font-mono font-bold tracking-[0.18em] uppercase text-[#9f8144]">
              {effectiveEyebrow}
            </span>
          </div>
        )}
        <h2 className={cn(
          'text-2xl sm:text-3xl lg:text-4xl font-semibold tracking-tight leading-[1.15]',
          isDark ? 'text-[#fafaf8]' : 'text-[#111111]'
        )}>
          {title}
        </h2>
        {effectiveDesc && (
          <p className={cn(
            'text-sm sm:text-base leading-relaxed',
            isDark ? 'text-[#a1a1a6]' : 'text-[#484848]'
          )}>
            {effectiveDesc}
          </p>
        )}
      </div>

      {action && (
        <div className={cn('shrink-0 pt-2 md:pt-0', align === 'center' && 'pt-3 flex justify-center')}>
          {action}
        </div>
      )}
    </div>
  )
}

/* ========================================================================= */
/* 4. PAGE INTRO — Editorial Header Component                                */
/* ========================================================================= */

interface PageIntroProps extends Omit<React.HTMLAttributes<HTMLDivElement>, 'title'> {
  eyebrow?: React.ReactNode
  title: React.ReactNode
  description?: React.ReactNode
  subtitle?: React.ReactNode
  badge?: React.ReactNode
  actions?: React.ReactNode
  align?: 'left' | 'center' | 'split'
  surface?: 'white' | 'subtle' | 'dark'
}

export function PageIntro({
  eyebrow,
  title,
  description,
  subtitle,
  badge,
  actions,
  align = 'left',
  className,
  ...props
}: PageIntroProps) {
  const effectiveDesc = description || subtitle

  return (
    <section className={cn('pt-12 pb-12 sm:pt-16 sm:pb-16 border-b border-[#e5e5ea] bg-[#fafaf8]', className)} {...props}>
      <Container size="default" className="space-y-4">
        <div className="flex flex-wrap items-center justify-between gap-3">
          {eyebrow && (
            <span className="text-[10px] font-mono font-bold uppercase tracking-[0.2em] text-[#9f8144]">
              {eyebrow}
            </span>
          )}
          {badge && <div className="shrink-0">{badge}</div>}
        </div>

        <div className={cn(
          'flex flex-col gap-6',
          align === 'center' ? 'text-center items-center mx-auto' : 'md:flex-row md:items-end md:justify-between'
        )}>
          <div className={cn('space-y-2', align === 'center' && 'max-w-2xl mx-auto')}>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-[#111111]">
              {title}
            </h1>
            {effectiveDesc && (
              <p className="text-sm sm:text-base text-[#484848] max-w-3xl leading-relaxed">
                {effectiveDesc}
              </p>
            )}
          </div>

          {actions && <div className="shrink-0">{actions}</div>}
        </div>
      </Container>
    </section>
  )
}

/* ========================================================================= */
/* 5. METRIC BAND, DATA RAIL, SPLIT LAYOUT, EDITORIAL GRID                   */
/* ========================================================================= */

export function DataRail({
  items,
  className,
  ...props
}: {
  items: Array<{ label: string; value: string; subtext?: string; status?: string }>
  className?: string
}) {
  return (
    <div className={cn('w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4', className)} {...props}>
      {items.map((item, idx) => (
        <div key={idx} className="p-5 rounded bg-[#ffffff] border border-[#e5e5ea] space-y-1.5">
          <span className="text-[10px] font-mono uppercase text-[#6b6b6b] block">{item.label}</span>
          <span className="text-xl font-bold text-[#111111] tabular-nums block">{item.value}</span>
          {item.subtext && <span className="text-xs text-[#484848] block">{item.subtext}</span>}
        </div>
      ))}
    </div>
  )
}

export function MetricBand({
  items,
  columns = 4,
  className,
  ...props
}: {
  items: Array<{ label: string; value: string; unit?: string; subtext?: string; source?: string }>
  columns?: number
  className?: string
}) {
  const colClass = columns === 3 ? 'lg:grid-cols-3' : columns === 2 ? 'lg:grid-cols-2' : 'lg:grid-cols-4'
  return (
    <div className={cn('w-full grid grid-cols-1 sm:grid-cols-2 gap-4', colClass, className)} {...props}>
      {items.map((item, idx) => (
        <div key={idx} className="p-5 rounded bg-[#ffffff] border border-[#e5e5ea] space-y-1.5">
          <span className="text-[10px] font-mono uppercase text-[#6b6b6b] block">{item.label}</span>
          <span className="text-xl font-bold text-[#111111] tabular-nums block">{item.value}</span>
          {item.subtext && <span className="text-xs text-[#484848] block">{item.subtext}</span>}
        </div>
      ))}
    </div>
  )
}

export function EditorialGrid({
  className,
  children,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div className={cn('grid grid-cols-1 md:grid-cols-6 lg:grid-cols-12 gap-6', className)} {...props}>
      {children}
    </div>
  )
}

export function SplitLayout({
  left,
  right,
  className,
}: {
  left: React.ReactNode
  right: React.ReactNode
  className?: string
  ratio?: string
  align?: string
  gap?: string
  reverseOnMobile?: boolean
}) {
  return (
    <div className={cn('grid grid-cols-1 lg:grid-cols-12 gap-8 items-start', className)}>
      <div className="lg:col-span-6">{left}</div>
      <div className="lg:col-span-6">{right}</div>
    </div>
  )
}

export function Stack({
  className,
  children,
  ...props
}: React.HTMLAttributes<HTMLDivElement> & { gap?: string; align?: string; as?: React.ElementType }) {
  return (
    <div className={cn('flex flex-col space-y-4', className)} {...props}>
      {children}
    </div>
  )
}

/* ========================================================================= */
/* 6. PROVENANCE BADGE — Strict Source Hierarchy Label                       */
/* ========================================================================= */

export type SourceClass = 
  | 'OFFICIAL GOVERNMENT'
  | 'OFFICIAL REGULATORY'
  | 'OFFICIAL CORPORATE'
  | 'LICENSED OPERATOR'
  | 'EDITORIAL SOURCE'
  | 'CALCULATED'
  | 'USER PROVIDED'
  | 'INDICATIVE'
  | 'PRICE ON REQUEST'

interface ProvenanceTagProps {
  sourceClass: SourceClass
  sourceName?: string
  className?: string
  isDark?: boolean
}

export function ProvenanceTag({
  sourceClass,
  sourceName,
  className,
  isDark = false,
}: ProvenanceTagProps) {
  return (
    <span
      className={cn(
        'inline-flex items-center gap-1.5 px-2 py-0.5 rounded text-[10px] font-mono tracking-wider uppercase border',
        isDark
          ? 'bg-[#1a1a1c] border-[#2a2a2e] text-[#a1a1a6]'
          : 'bg-[#f5f5f3] border-[#e5e5ea] text-[#6b6b6b]',
        sourceClass === 'OFFICIAL GOVERNMENT' && (isDark ? 'text-emerald-400 border-emerald-900/50 bg-emerald-950/20' : 'text-emerald-800 border-emerald-200 bg-emerald-50/70'),
        sourceClass === 'CALCULATED' && (isDark ? 'text-amber-400 border-amber-900/50' : 'text-[#9f8144] border-[#9f8144]/30 bg-[#9f8144]/5'),
        className
      )}
    >
      <span className="font-semibold">{sourceClass}</span>
      {sourceName && (
        <>
          <span className="opacity-40">•</span>
          <span className="opacity-80 truncate max-w-[140px]">{sourceName}</span>
        </>
      )}
    </span>
  )
}
