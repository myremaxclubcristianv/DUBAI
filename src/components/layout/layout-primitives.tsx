import * as React from 'react'
import Link from 'next/link'
import { ArrowRight, ArrowUpRight } from 'lucide-react'
import { cn } from '@/lib/utils'

/* ========================================================================= */
/* 01. CONTAINER SYSTEM                                                      */
/* ========================================================================= */

export type ContainerSize = 'full' | 'wide' | 'primary' | 'editorial' | 'reading' | 'narrow' | 'default'

interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  size?: ContainerSize
  as?: React.ElementType
  noPadding?: boolean
}

const CONTAINER_CLASSES: Record<ContainerSize, string> = {
  full: 'w-full max-w-full',
  wide: 'max-w-[1440px]',
  primary: 'max-w-[1280px]',
  default: 'max-w-[1280px]',
  editorial: 'max-w-[1120px]',
  reading: 'max-w-[880px]',
  narrow: 'max-w-[680px]',
}

export function Container({
  size = 'primary',
  as: Component = 'div',
  noPadding = false,
  className,
  children,
  ...props
}: ContainerProps) {
  return (
    <Component
      className={cn(
        'w-full mx-auto',
        !noPadding && 'px-6 sm:px-10 lg:px-16',
        CONTAINER_CLASSES[size],
        className
      )}
      {...props}
    >
      {children}
    </Component>
  )
}

/* ========================================================================= */
/* 02. SECTION — Architectural Spatial Hierarchy                             */
/* ========================================================================= */

export type SectionSpacing = 'hero' | 'room-240' | 'room-200' | 'room-160' | 'room-120' | 'room-96' | 'room-80' | 'room-64' | 'default' | 'tight' | 'none'
export type SectionSurface = 'white' | 'pure' | 'subtle' | 'surface' | 'blue-glass' | 'sky' | 'dark' | 'dark-surface' | 'black' | 'charcoal'

interface SectionProps extends React.HTMLAttributes<HTMLElement> {
  spacing?: SectionSpacing
  surface?: SectionSurface
  borderTop?: boolean
  borderBottom?: boolean
  containerSize?: ContainerSize
  containerClassName?: string
  noContainer?: boolean
  as?: React.ElementType
}

const SECTION_SPACING_CLASSES: Record<SectionSpacing, string> = {
  hero: 'pt-20 pb-20 sm:pt-28 sm:pb-28 lg:pt-32 lg:pb-32',
  'room-240': 'py-20 sm:py-28 lg:py-36',
  'room-200': 'py-16 sm:py-24 lg:py-32',
  'room-160': 'py-14 sm:py-20 lg:py-24',
  'room-120': 'py-12 sm:py-16 lg:py-20',
  'room-96': 'py-10 sm:py-14 lg:py-16',
  'room-80': 'py-8 sm:py-12 lg:py-14',
  'room-64': 'py-6 sm:py-8 lg:py-10',
  default: 'py-14 sm:py-20 lg:py-24',
  tight: 'py-8 sm:py-12',
  none: 'py-0',
}

const SECTION_SURFACE_CLASSES: Record<SectionSurface, string> = {
  white: 'bg-white text-slate-900',
  pure: 'bg-white text-slate-900',
  subtle: 'bg-slate-50/70 text-slate-900',
  surface: 'bg-slate-100/70 text-slate-900',
  'blue-glass': 'bg-[#f0f7ff] text-slate-900',
  sky: 'bg-[#e0f2fe]/40 text-slate-900',
  dark: 'bg-[#0b1528] text-white',
  'dark-surface': 'bg-[#111f38] text-white',
  black: 'bg-[#070d18] text-white',
  charcoal: 'bg-[#0e1726] text-white',
}

export function Section({
  spacing = 'default',
  surface = 'pure',
  borderTop = false,
  borderBottom = true,
  containerSize = 'primary',
  containerClassName,
  noContainer = false,
  as: Component = 'section',
  className,
  children,
  ...props
}: SectionProps) {
  return (
    <Component
      className={cn(
        'relative w-full overflow-hidden',
        SECTION_SPACING_CLASSES[spacing],
        SECTION_SURFACE_CLASSES[surface],
        borderTop && 'border-t border-slate-200/80',
        borderBottom && 'border-b border-slate-200/80',
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
/* 03. TYPOGRAPHY PRIMITIVES                                                 */
/* ========================================================================= */

export function Eyebrow({
  children,
  className,
  accent = true,
  ...props
}: React.HTMLAttributes<HTMLSpanElement> & { accent?: boolean }) {
  return (
    <span
      className={cn(
        'text-[10px] sm:text-[11px] font-mono tracking-[0.2em] uppercase font-semibold block',
        accent ? 'text-[#0284c7]' : 'text-slate-500',
        className
      )}
      {...props}
    >
      {children}
    </span>
  )
}

export function EditorialHeading({
  as: Tag = 'h2',
  size = 'section',
  children,
  className,
  ...props
}: React.HTMLAttributes<HTMLHeadingElement> & {
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'div'
  size?: 'hero' | 'section' | 'editorial' | 'dossier' | 'subhead'
}) {
  const sizeClasses = {
    hero: 'text-[44px] sm:text-[68px] lg:text-[88px] font-light tracking-[-0.04em] leading-[0.95]',
    section: 'text-[30px] sm:text-[44px] lg:text-[54px] font-light tracking-[-0.03em] leading-[1.05]',
    editorial: 'text-[24px] sm:text-[32px] lg:text-[40px] font-light tracking-[-0.025em] leading-[1.12]',
    dossier: 'text-[20px] sm:text-[26px] lg:text-[32px] font-light tracking-[-0.02em] leading-[1.2]',
    subhead: 'text-[17px] sm:text-[19px] font-normal tracking-[-0.015em] leading-[1.4]',
  }

  return (
    <Tag className={cn('font-serif', sizeClasses[size], 'text-slate-900', className)} {...props}>
      {children}
    </Tag>
  )
}

export function EditorialText({
  children,
  size = 'regular',
  className,
  ...props
}: React.HTMLAttributes<HTMLParagraphElement> & {
  size?: 'large' | 'regular' | 'small' | 'caption'
}) {
  const sizeClasses = {
    large: 'text-lg sm:text-xl font-light leading-relaxed text-slate-700',
    regular: 'text-base sm:text-lg font-light leading-relaxed text-slate-600',
    small: 'text-sm font-normal leading-relaxed text-slate-500',
    caption: 'text-xs font-mono uppercase tracking-wider text-slate-400',
  }

  return (
    <p className={cn(sizeClasses[size], className)} {...props}>
      {children}
    </p>
  )
}

/* ========================================================================= */
/* 04. PROVENANCE & SOURCE BADGES                                            */
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

export function SourceBadge({
  sourceClass,
  sourceName,
  className,
}: {
  sourceClass: SourceClass
  sourceName?: string
  className?: string
  isDark?: boolean
}) {
  return (
    <span
      className={cn(
        'inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-xs text-[10px] font-mono tracking-wider uppercase border',
        'bg-slate-50 border-slate-200 text-slate-600',
        sourceClass === 'OFFICIAL GOVERNMENT' && 'text-emerald-700 border-emerald-200 bg-emerald-50',
        sourceClass === 'OFFICIAL REGULATORY' && 'text-sky-700 border-sky-200 bg-sky-50',
        sourceClass === 'CALCULATED' && 'text-[#0284c7] border-sky-200 bg-sky-50/50',
        className
      )}
    >
      <span className="font-semibold">{sourceClass}</span>
      {sourceName && (
        <>
          <span className="opacity-40">&bull;</span>
          <span className="opacity-85 truncate max-w-[140px]">{sourceName}</span>
        </>
      )}
    </span>
  )
}

export function ProvenanceTag(props: {
  sourceClass: SourceClass
  sourceName?: string
  className?: string
  isDark?: boolean
}) {
  return <SourceBadge {...props} />
}

/* ========================================================================= */
/* 05. EDITORIAL ROWS & DIRECTORY PRIMITIVES                                 */
/* ========================================================================= */

export function DirectoryRow({
  href,
  leftLabel,
  title,
  subtitle,
  rightValue,
  badge,
  className,
}: {
  href: string
  leftLabel?: React.ReactNode
  title: React.ReactNode
  subtitle?: React.ReactNode
  rightValue?: React.ReactNode
  badge?: React.ReactNode
  className?: string
}) {
  return (
    <Link
      href={href}
      className={cn(
        'group flex flex-col sm:flex-row sm:items-center justify-between py-5 sm:py-6 border-b border-slate-200/80 hover:border-[#0284c7] hover:bg-sky-50/30 px-4 -mx-4 transition-all gap-4 rounded-xs',
        className
      )}
    >
      <div className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-8">
        {leftLabel && (
          <span className="text-[11px] font-mono uppercase text-slate-500 w-28 shrink-0">
            {leftLabel}
          </span>
        )}
        <div className="space-y-1">
          <div className="flex items-center gap-3">
            <span className="text-lg sm:text-xl font-light text-slate-900 group-hover:text-[#0284c7] transition-colors">
              {title}
            </span>
            {badge}
          </div>
          {subtitle && (
            <p className="text-xs sm:text-sm text-slate-500 font-light">
              {subtitle}
            </p>
          )}
        </div>
      </div>

      <div className="flex items-center gap-6 self-end sm:self-auto shrink-0">
        {rightValue && (
          <span className="text-sm sm:text-base font-mono text-slate-900 tabular-nums">
            {rightValue}
          </span>
        )}
        <ArrowUpRight className="h-4 w-4 text-slate-400 group-hover:text-[#0284c7] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
      </div>
    </Link>
  )
}

export function DataRow({
  label,
  value,
  subvalue,
  source,
  className,
}: {
  label: React.ReactNode
  value: React.ReactNode
  subvalue?: React.ReactNode
  source?: React.ReactNode
  isDark?: boolean
  className?: string
}) {
  return (
    <div
      className={cn(
        'flex flex-col sm:flex-row sm:items-center justify-between py-3 border-b border-slate-200/80 gap-1',
        className
      )}
    >
      <div className="flex items-center gap-2">
        <span className="text-xs font-mono uppercase tracking-wider text-slate-600">
          {label}
        </span>
        {source && <span className="opacity-75">{source}</span>}
      </div>
      <div className="flex items-baseline gap-2">
        <span className="text-sm sm:text-base font-mono tabular-nums text-slate-900 font-medium">
          {value}
        </span>
        {subvalue && (
          <span className="text-xs font-mono text-slate-500">
            {subvalue}
          </span>
        )}
      </div>
    </div>
  )
}

export function TimelineStep({
  number,
  title,
  description,
  source,
  className,
}: {
  number: string
  title: string
  description: string
  source?: string
  className?: string
}) {
  return (
    <div className={cn('flex gap-6 sm:gap-10 py-6 sm:py-8 border-b border-slate-200/80', className)}>
      <span className="text-xl sm:text-2xl font-light font-mono text-[#0284c7] shrink-0 w-8 sm:w-10">
        {number}
      </span>
      <div className="space-y-2 max-w-2xl">
        <h3 className="text-lg sm:text-xl font-light text-slate-900 tracking-tight">
          {title}
        </h3>
        <p className="text-sm text-slate-600 font-light leading-relaxed">
          {description}
        </p>
        {source && (
          <div className="pt-1">
            <span className="text-[10px] font-mono text-slate-500 uppercase tracking-wider">
              Statutory Basis: {source}
            </span>
          </div>
        )}
      </div>
    </div>
  )
}

/* ========================================================================= */
/* 06. ACTION LINKS & BUTTONS                                                */
/* ========================================================================= */

export function PrimaryLink({
  href,
  children,
  className,
  ...props
}: React.ComponentProps<typeof Link>) {
  return (
    <Link
      href={href}
      className={cn(
        'inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xs bg-[#0284c7] hover:bg-[#0369a1] text-white text-xs font-mono uppercase tracking-[0.14em] font-semibold transition-all shadow-[0_2px_10px_rgba(2,132,199,0.25)] hover:shadow-[0_4px_16px_rgba(2,132,199,0.35)]',
        className
      )}
      {...props}
    >
      <span>{children}</span>
      <ArrowRight className="h-3.5 w-3.5" />
    </Link>
  )
}

export function SecondaryLink({
  href,
  children,
  className,
  ...props
}: React.ComponentProps<typeof Link>) {
  return (
    <Link
      href={href}
      className={cn(
        'inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xs bg-white/90 hover:bg-white border border-slate-300 hover:border-[#0284c7] text-slate-800 hover:text-[#0284c7] text-xs font-mono uppercase tracking-[0.14em] font-medium transition-all shadow-[0_1px_3px_rgba(0,0,0,0.05)]',
        className
      )}
      {...props}
    >
      <span>{children}</span>
      <ArrowUpRight className="h-3.5 w-3.5 opacity-70" />
    </Link>
  )
}

/* ========================================================================= */
/* 07. BACKWARDS COMPATIBILITY EXPORTS                                       */
/* ========================================================================= */

export function SectionHeader({
  eyebrow,
  title,
  description,
  action,
  className,
}: {
  eyebrow?: React.ReactNode
  title: React.ReactNode
  description?: React.ReactNode
  action?: React.ReactNode
  className?: string
  align?: string
  theme?: string
  badge?: React.ReactNode
  subtitle?: React.ReactNode
}) {
  return (
    <div className={cn('w-full flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10 sm:mb-14', className)}>
      <div className="space-y-3 max-w-2xl">
        {eyebrow && typeof eyebrow === 'string' ? <Eyebrow>{eyebrow}</Eyebrow> : eyebrow}
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light tracking-[-0.03em] leading-tight text-slate-900 font-serif">
          {title}
        </h2>
        {description && (
          <p className="text-base text-slate-600 font-light leading-relaxed">
            {description}
          </p>
        )}
      </div>
      {action && <div className="shrink-0">{action}</div>}
    </div>
  )
}

export function PageIntro({
  eyebrow,
  title,
  description,
  actions,
  badge,
  className,
}: {
  eyebrow?: React.ReactNode
  title: React.ReactNode
  description?: React.ReactNode
  actions?: React.ReactNode
  badge?: React.ReactNode
  className?: string
  subtitle?: React.ReactNode
  align?: string
  surface?: string
}) {
  return (
    <section className={cn('pt-14 pb-14 sm:pt-20 sm:pb-20 border-b border-slate-200/80 bg-[#f0f7ff]/60', className)}>
      <Container size="editorial" className="space-y-6">
        <div className="flex flex-wrap items-center justify-between gap-4">
          {eyebrow && typeof eyebrow === 'string' ? <Eyebrow>{eyebrow}</Eyebrow> : eyebrow}
          {badge}
        </div>
        <div className="space-y-4">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-light tracking-[-0.03em] leading-[1.05] text-slate-900 font-serif">
            {title}
          </h1>
          {description && (
            <p className="text-lg sm:text-xl text-slate-600 font-light max-w-2xl leading-relaxed">
              {description}
            </p>
          )}
        </div>
        {actions && <div className="pt-2">{actions}</div>}
      </Container>
    </section>
  )
}

export function DataRail({
  items,
  className,
}: {
  items: Array<{ label: string; value: string; subtext?: string; status?: string }>
  className?: string
}) {
  return (
    <div className={cn('w-full grid grid-cols-2 lg:grid-cols-4 gap-6 py-6 border-y border-slate-200/80 bg-white', className)}>
      {items.map((item, idx) => (
        <div key={idx} className="space-y-1">
          <span className="text-[10px] font-mono uppercase tracking-wider text-slate-500 block">{item.label}</span>
          <span className="text-2xl font-light text-slate-900 tabular-nums block">{item.value}</span>
          {item.subtext && <span className="text-xs text-slate-600 font-light block">{item.subtext}</span>}
        </div>
      ))}
    </div>
  )
}

export function MetricBand(props: {
  items: Array<{ label: string; value: string; unit?: string; subtext?: string; source?: string }>
  columns?: number
  className?: string
}) {
  return <DataRail {...props} />
}

export function EditorialGrid({
  className,
  children,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div className={cn('grid grid-cols-1 md:grid-cols-12 gap-8', className)} {...props}>
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
    <div className={cn('grid grid-cols-1 lg:grid-cols-12 gap-12 items-start', className)}>
      <div className="lg:col-span-5">{left}</div>
      <div className="lg:col-span-7">{right}</div>
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
