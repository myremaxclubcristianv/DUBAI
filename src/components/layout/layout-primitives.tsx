import * as React from 'react'
import Link from 'next/link'
import { ArrowRight, ArrowUpRight } from 'lucide-react'
import { cn } from '@/lib/utils'

/* ========================================================================= */
/* 01. CONTAINER SYSTEM                                                      */
/* Full Bleed: 100vw                                                         */
/* Wide: max-w-[1440px]                                                      */
/* Primary: max-w-[1280px]                                                   */
/* Editorial: max-w-[1120px]                                                 */
/* Reading: max-w-[880px]                                                    */
/* Narrow: max-w-[680px]                                                     */
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
        !noPadding && 'px-6 sm:px-8 lg:px-12',
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
/* 02. SECTION — Deliberate Vertical Rhythm (Separate Architectural Rooms)   */
/* Spacing: 16, 24, 32, 48, 64, 80, 96, 120, 144, 160, 200, 240              */
/* ========================================================================= */

export type SectionSpacing = 'hero' | 'room-240' | 'room-200' | 'room-160' | 'room-120' | 'room-96' | 'room-80' | 'room-64' | 'default' | 'tight' | 'none'
export type SectionSurface = 'white' | 'pure' | 'subtle' | 'surface' | 'dark' | 'dark-surface'

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
  hero: 'pt-24 pb-20 sm:pt-32 sm:pb-28 lg:pt-36 lg:pb-32',
  'room-240': 'py-28 sm:py-44 lg:py-60',
  'room-200': 'py-24 sm:py-36 lg:py-48',
  'room-160': 'py-20 sm:py-32 lg:py-40',
  'room-120': 'py-16 sm:py-24 lg:py-30',
  'room-96': 'py-14 sm:py-20 lg:py-24',
  'room-80': 'py-12 sm:py-16 lg:py-20',
  'room-64': 'py-10 sm:py-12 lg:py-16',
  default: 'py-20 sm:py-28 lg:py-36',
  tight: 'py-10 sm:py-14',
  none: 'py-0',
}

const SECTION_SURFACE_CLASSES: Record<SectionSurface, string> = {
  white: 'bg-[#ffffff] text-[#111111]',
  pure: 'bg-[#ffffff] text-[#111111]',
  subtle: 'bg-[#fafaf8] text-[#111111]',
  surface: 'bg-[#f5f5f3] text-[#111111]',
  dark: 'bg-[#0c0c0e] text-[#fafaf8]',
  'dark-surface': 'bg-[#161618] text-[#fafaf8]',
}

export function Section({
  spacing = 'default',
  surface = 'white',
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
  const isDark = surface === 'dark' || surface === 'dark-surface'
  const borderColor = isDark ? 'border-[#242428]' : 'border-[#e5e5ea]'

  return (
    <Component
      className={cn(
        'relative w-full overflow-hidden',
        SECTION_SPACING_CLASSES[spacing],
        SECTION_SURFACE_CLASSES[surface],
        borderTop && `border-t ${borderColor}`,
        borderBottom && `border-b ${borderColor}`,
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
        'text-[11px] font-mono tracking-[0.2em] uppercase font-medium block',
        accent ? 'text-[#9f8144]' : 'text-[#6b6b6b]',
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
    hero: 'text-[52px] sm:text-[76px] lg:text-[104px] font-light tracking-[-0.04em] leading-[0.94]',
    section: 'text-[36px] sm:text-[54px] lg:text-[68px] font-light tracking-[-0.03em] leading-[1.02]',
    editorial: 'text-[28px] sm:text-[40px] lg:text-[48px] font-light tracking-[-0.025em] leading-[1.12]',
    dossier: 'text-[24px] sm:text-[32px] lg:text-[38px] font-light tracking-[-0.02em] leading-[1.2]',
    subhead: 'text-[19px] sm:text-[22px] font-normal tracking-[-0.015em] leading-[1.35]',
  }

  return (
    <Tag className={cn(sizeClasses[size], 'text-inherit', className)} {...props}>
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
    large: 'text-lg sm:text-2xl font-light leading-relaxed text-[#3a3a3a]',
    regular: 'text-base sm:text-lg font-light leading-relaxed text-[#484848]',
    small: 'text-sm font-normal leading-relaxed text-[#6b6b6b]',
    caption: 'text-xs font-mono uppercase tracking-wider text-[#8e8e93]',
  }

  return (
    <p className={cn(sizeClasses[size], className)} {...props}>
      {children}
    </p>
  )
}

/* ========================================================================= */
/* 04. PROVENANCE & SOURCE BADGES (Verified Institutional Status)             */
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
  isDark = false,
}: {
  sourceClass: SourceClass
  sourceName?: string
  className?: string
  isDark?: boolean
}) {
  return (
    <span
      className={cn(
        'inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[10px] font-mono tracking-wider uppercase border',
        isDark
          ? 'bg-[#161618] border-[#242428] text-[#a1a1a6]'
          : 'bg-[#ffffff] border-[#e5e5ea] text-[#6b6b6b]',
        sourceClass === 'OFFICIAL GOVERNMENT' &&
          (isDark ? 'text-emerald-400 border-emerald-900/50' : 'text-emerald-800 border-emerald-300/80 bg-emerald-50/60'),
        sourceClass === 'OFFICIAL REGULATORY' &&
          (isDark ? 'text-blue-300 border-blue-900/50' : 'text-blue-800 border-blue-200 bg-blue-50/60'),
        sourceClass === 'CALCULATED' &&
          (isDark ? 'text-[#9f8144] border-[#9f8144]/40' : 'text-[#9f8144] border-[#9f8144]/30 bg-[#9f8144]/5'),
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
        'group flex flex-col sm:flex-row sm:items-center justify-between py-6 sm:py-8 border-b border-[#e5e5ea] hover:border-[#111111] transition-all gap-4',
        className
      )}
    >
      <div className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-8">
        {leftLabel && (
          <span className="text-[11px] font-mono uppercase text-[#8e8e93] w-28 shrink-0">
            {leftLabel}
          </span>
        )}
        <div className="space-y-1">
          <div className="flex items-center gap-3">
            <span className="text-xl sm:text-2xl font-light text-[#111111] group-hover:text-[#9f8144] transition-colors">
              {title}
            </span>
            {badge}
          </div>
          {subtitle && (
            <p className="text-xs sm:text-sm text-[#6b6b6b] font-light">
              {subtitle}
            </p>
          )}
        </div>
      </div>

      <div className="flex items-center gap-6 self-end sm:self-auto shrink-0">
        {rightValue && (
          <span className="text-sm sm:text-base font-mono text-[#111111] tabular-nums">
            {rightValue}
          </span>
        )}
        <ArrowUpRight className="h-4 w-4 text-[#8e8e93] group-hover:text-[#111111] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
      </div>
    </Link>
  )
}

export function DataRow({
  label,
  value,
  subvalue,
  source,
  isDark = false,
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
        'flex flex-col sm:flex-row sm:items-center justify-between py-3.5 border-b gap-1',
        isDark ? 'border-[#242428]' : 'border-[#e5e5ea]',
        className
      )}
    >
      <div className="flex items-center gap-2">
        <span className={cn('text-xs font-mono uppercase tracking-wider', isDark ? 'text-[#8e8e93]' : 'text-[#6b6b6b]')}>
          {label}
        </span>
        {source && <span className="opacity-60">{source}</span>}
      </div>
      <div className="flex items-baseline gap-2">
        <span className={cn('text-sm sm:text-base font-mono tabular-nums', isDark ? 'text-[#fafaf8]' : 'text-[#111111]')}>
          {value}
        </span>
        {subvalue && (
          <span className={cn('text-xs font-mono', isDark ? 'text-[#8e8e93]' : 'text-[#8e8e93]')}>
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
    <div className={cn('flex gap-6 sm:gap-10 py-7 sm:py-9 border-b border-[#e5e5ea]/80', className)}>
      <span className="text-xl sm:text-2xl font-light font-mono text-[#9f8144] shrink-0 w-8 sm:w-10">
        {number}
      </span>
      <div className="space-y-2 max-w-2xl">
        <h3 className="text-lg sm:text-2xl font-light text-[#111111] tracking-tight">
          {title}
        </h3>
        <p className="text-sm sm:text-base text-[#484848] font-light leading-relaxed">
          {description}
        </p>
        {source && (
          <div className="pt-1">
            <span className="text-[10px] font-mono text-[#8e8e93] uppercase tracking-wider">
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
        'inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-[#111111] hover:bg-[#242428] text-[#fafaf8] text-xs font-medium tracking-tight transition-all',
        className
      )}
      {...props}
    >
      <span>{children}</span>
      <ArrowRight className="h-3.5 w-3.5 opacity-80" />
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
        'inline-flex items-center gap-1.5 text-xs font-medium text-[#111111] hover:text-[#9f8144] tracking-tight transition-colors py-2',
        className
      )}
      {...props}
    >
      <span>{children}</span>
      <ArrowUpRight className="h-3.5 w-3.5 opacity-60" />
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
    <div className={cn('w-full flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 sm:mb-16', className)}>
      <div className="space-y-3 max-w-2xl">
        {eyebrow && typeof eyebrow === 'string' ? <Eyebrow>{eyebrow}</Eyebrow> : eyebrow}
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light tracking-[-0.03em] leading-tight text-[#111111]">
          {title}
        </h2>
        {description && (
          <p className="text-base text-[#6b6b6b] font-light leading-relaxed">
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
    <section className={cn('pt-16 pb-16 sm:pt-24 sm:pb-20 border-b border-[#e5e5ea] bg-[#fafaf8]', className)}>
      <Container size="editorial" className="space-y-6">
        <div className="flex flex-wrap items-center justify-between gap-4">
          {eyebrow && typeof eyebrow === 'string' ? <Eyebrow>{eyebrow}</Eyebrow> : eyebrow}
          {badge}
        </div>
        <div className="space-y-4">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-light tracking-[-0.03em] leading-[1.05] text-[#111111]">
            {title}
          </h1>
          {description && (
            <p className="text-lg sm:text-xl text-[#6b6b6b] font-light max-w-2xl leading-relaxed">
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
    <div className={cn('w-full grid grid-cols-2 lg:grid-cols-4 gap-6 py-6 border-y border-[#e5e5ea]', className)}>
      {items.map((item, idx) => (
        <div key={idx} className="space-y-1">
          <span className="text-[10px] font-mono uppercase tracking-wider text-[#8e8e93] block">{item.label}</span>
          <span className="text-2xl font-light text-[#111111] tabular-nums block">{item.value}</span>
          {item.subtext && <span className="text-xs text-[#6b6b6b] font-light block">{item.subtext}</span>}
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
