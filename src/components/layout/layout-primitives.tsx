import * as React from 'react'
import { cn } from '@/lib/utils'

/* ========================================================================= */
/* 1. CONTAINER — Canonical Content Boundary & Gutters                       */
/* ========================================================================= */

export type ContainerSize = 'default' | 'narrow' | 'wide' | 'editorial' | 'cinematic' | 'prose' | 'full'

interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  size?: ContainerSize
  as?: React.ElementType
}

const CONTAINER_SIZES: Record<ContainerSize, string> = {
  default: 'max-w-7xl',
  narrow: 'max-w-4xl',
  wide: 'max-w-7xl',
  editorial: 'max-w-[1400px]',
  cinematic: 'max-w-[1600px]',
  prose: 'max-w-3xl',
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
/* 2. SECTION — Controlled Vertical Rhythm & Surface Treatments              */
/* ========================================================================= */

export type SectionSpacing = 'hero' | 'default' | 'tight' | 'loose' | 'none'
export type SectionSurface = 'white' | 'subtle' | 'elevated' | 'dark' | 'dark-elevated'

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
  hero: 'pt-20 pb-24 md:pt-32 md:pb-36',
  default: 'py-20 md:py-28',
  tight: 'py-12 md:py-16',
  loose: 'py-24 md:py-36',
  none: 'py-0',
}

const SURFACE_CLASSES: Record<SectionSurface, string> = {
  white: 'bg-white text-[#1d1d1f]',
  subtle: 'bg-[#f5f5f7] text-[#1d1d1f]',
  elevated: 'bg-white text-[#1d1d1f] shadow-[0_4px_24px_rgba(0,0,0,0.03)]',
  dark: 'bg-[#1d1d1f] text-white',
  'dark-elevated': 'bg-[#161618] text-white',
}

export function Section({
  spacing = 'default',
  surface = 'white',
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
  return (
    <Component
      className={cn(
        'relative w-full overflow-hidden',
        SPACING_CLASSES[spacing],
        SURFACE_CLASSES[surface],
        bordered && 'border-y border-black/10',
        borderBottom && !bordered && 'border-b border-black/10',
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
/* 3. SECTION HEADER — Standardized Eyebrow, Heading & Action Axis           */
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
  align = 'center',
  className,
  ...props
}: SectionHeaderProps) {
  const effectiveEyebrow = eyebrow || badge
  const effectiveDescription = description || subtitle
  return (
    <div
      className={cn(
        'w-full flex flex-col gap-4',
        align === 'split' && 'sm:flex-row sm:items-end sm:justify-between',
        align === 'center' && 'text-center items-center justify-center',
        align === 'left' && 'text-left items-start',
        className
      )}
      {...props}
    >
      <div className={cn('space-y-3.5', align === 'split' && 'max-w-2xl', align === 'center' && 'max-w-3xl mx-auto text-center')}>
        {effectiveEyebrow && (
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#f5f5f7] border border-black/10 text-[11px] font-mono font-semibold tracking-[0.15em] uppercase text-[#b8860b]">
            <span className="h-1.5 w-1.5 rounded-full bg-[#b8860b] animate-pulse" />
            <span>{effectiveEyebrow}</span>
          </div>
        )}
        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-[#1d1d1f] leading-[1.08]">
          {title}
        </h2>
        {effectiveDescription && (
          <p className="text-base sm:text-lg md:text-xl leading-relaxed font-normal text-[#6e6e73] max-w-2xl mx-auto">
            {effectiveDescription}
          </p>
        )}
      </div>

      {action && (
        <div className={cn('shrink-0 pt-2 sm:pt-0', align === 'center' && 'pt-3 flex justify-center')}>
          {action}
        </div>
      )}
    </div>
  )
}

/* ========================================================================= */
/* 4. EDITORIAL 12-COLUMN GRID                                               */
/* ========================================================================= */

interface EditorialGridProps extends React.HTMLAttributes<HTMLDivElement> {
  gap?: 'sm' | 'md' | 'lg' | 'xl'
}

const GRID_GAPS = {
  sm: 'gap-4',
  md: 'gap-6',
  lg: 'gap-6 lg:gap-8',
  xl: 'gap-8 lg:gap-12',
}

export function EditorialGrid({
  gap = 'lg',
  className,
  children,
  ...props
}: EditorialGridProps) {
  return (
    <div
      className={cn(
        'grid grid-cols-1 md:grid-cols-6 lg:grid-cols-12',
        GRID_GAPS[gap],
        className
      )}
      {...props}
    >
      {children}
    </div>
  )
}

/* ========================================================================= */
/* 5. SPLIT LAYOUT — 2-Column Asymmetric Compositions                        */
/* ========================================================================= */

export type SplitRatio = '50-50' | '40-60' | '60-40' | '30-70' | '70-30'

interface SplitLayoutProps extends React.HTMLAttributes<HTMLDivElement> {
  ratio?: SplitRatio
  align?: 'start' | 'center' | 'end' | 'baseline'
  gap?: 'sm' | 'md' | 'lg' | 'xl'
  reverseOnMobile?: boolean
  left: React.ReactNode
  right: React.ReactNode
}

const SPLIT_LEFT_COLS: Record<SplitRatio, string> = {
  '50-50': 'lg:col-span-6',
  '40-60': 'lg:col-span-5',
  '60-40': 'lg:col-span-7',
  '30-70': 'lg:col-span-4',
  '70-30': 'lg:col-span-8',
}

const SPLIT_RIGHT_COLS: Record<SplitRatio, string> = {
  '50-50': 'lg:col-span-6',
  '40-60': 'lg:col-span-7',
  '60-40': 'lg:col-span-5',
  '30-70': 'lg:col-span-8',
  '70-30': 'lg:col-span-4',
}

export function SplitLayout({
  ratio = '50-50',
  align = 'start',
  gap = 'lg',
  reverseOnMobile = false,
  left,
  right,
  className,
  ...props
}: SplitLayoutProps) {
  const alignClass = {
    start: 'items-start',
    center: 'items-center',
    end: 'items-end',
    baseline: 'items-baseline',
  }[align]

  return (
    <div
      className={cn(
        'grid grid-cols-1 md:grid-cols-12',
        alignClass,
        GRID_GAPS[gap],
        className
      )}
      {...props}
    >
      <div className={cn('md:col-span-6', SPLIT_LEFT_COLS[ratio], reverseOnMobile && 'order-2 lg:order-1')}>
        {left}
      </div>
      <div className={cn('md:col-span-6', SPLIT_RIGHT_COLS[ratio], reverseOnMobile && 'order-1 lg:order-2')}>
        {right}
      </div>
    </div>
  )
}

/* ========================================================================= */
/* 6. DATA RAIL — Horizontal Stat Rail with Strict Baselines                */
/* ========================================================================= */

interface DataRailProps extends React.HTMLAttributes<HTMLDivElement> {
  items: Array<{
    label: string
    value: string
    subtext?: string
    status?: string
  }>
  theme?: 'light' | 'dark'
}

export function DataRail({ items, className, ...props }: DataRailProps) {
  return (
    <div
      className={cn(
        'w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4',
        className
      )}
      {...props}
    >
      {items.map((item, idx) => (
        <div
          key={idx}
          className="p-6 rounded-3xl bg-white border border-black/10 flex flex-col justify-between h-full space-y-4 shadow-[0_2px_12px_rgba(0,0,0,0.03)] apple-card-hover"
        >
          <div className="space-y-2">
            <div className="flex items-center justify-between gap-1.5 min-h-[1.25rem]">
              <span className="text-[10px] font-mono uppercase tracking-wider text-[#86868b] font-medium">
                {item.label}
              </span>
              {item.status && (
                <span className="text-[9px] font-mono px-2 py-0.5 rounded-full bg-[#f5f5f7] text-[#b8860b] border border-black/10 font-bold shrink-0">
                  {item.status}
                </span>
              )}
            </div>
            <div className="text-2xl sm:text-3xl font-extrabold tabular-nums tracking-tight text-[#1d1d1f] leading-none min-h-[2rem] flex items-baseline">
              {item.value}
            </div>
          </div>
          {item.subtext && (
            <div className="text-xs font-normal leading-relaxed pt-3 border-t border-black/10 text-[#6e6e73]">
              {item.subtext}
            </div>
          )}
        </div>
      ))}
    </div>
  )
}

/* ========================================================================= */
/* 7. METRIC GRID — Tabular Financial & Operational Indicators               */
/* ========================================================================= */

interface MetricGridProps extends React.HTMLAttributes<HTMLDivElement> {
  columns?: 2 | 3 | 4 | 5
}

const METRIC_COLS = {
  2: 'grid-cols-1 sm:grid-cols-2',
  3: 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3',
  4: 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-4',
  5: 'grid-cols-2 sm:grid-cols-3 lg:grid-cols-5',
}

export function MetricGrid({ columns = 4, className, children, ...props }: MetricGridProps) {
  return (
    <div className={cn('grid gap-4 sm:gap-6', METRIC_COLS[columns], className)} {...props}>
      {children}
    </div>
  )
}

/* ========================================================================= */
/* 8. STACK — Controlled Vertical Spacing Scales                             */
/* ========================================================================= */

export type StackGap = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl'

interface StackProps extends React.HTMLAttributes<HTMLDivElement> {
  gap?: StackGap
  align?: 'start' | 'center' | 'end' | 'stretch'
  as?: React.ElementType
}

const STACK_GAPS: Record<StackGap, string> = {
  xs: 'space-y-1.5',
  sm: 'space-y-3',
  md: 'space-y-4',
  lg: 'space-y-6',
  xl: 'space-y-8',
  '2xl': 'space-y-12',
}

export function Stack({
  gap = 'md',
  align = 'stretch',
  as: Component = 'div',
  className,
  children,
  ...props
}: StackProps) {
  const alignClass = {
    start: 'items-start',
    center: 'items-center',
    end: 'items-end',
    stretch: 'items-stretch',
  }[align]

  return (
    <Component className={cn('flex flex-col', alignClass, STACK_GAPS[gap], className)} {...props}>
      {children}
    </Component>
  )
}

/* ========================================================================= */
/* 9. PAGE INTRO — Canonical Apple Pro Centered Keynote Architecture         */
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
  align = 'center',
  className,
  ...props
}: PageIntroProps) {
  const isCentered = align === 'center'
  const effectiveDescription = description || subtitle

  return (
    <section
      className={cn(
        'relative pt-24 pb-20 sm:pt-32 sm:pb-28 overflow-hidden border-b border-black/10 bg-white',
        className
      )}
      {...props}
    >
      {/* Multilayer Ambient Apple Light Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-[1000px] h-[350px] bg-gradient-to-b from-[#f5f5f7] via-[#fbfbfd] to-transparent blur-[80px] rounded-full pointer-events-none -z-10" />

      <Container size="default" className="relative z-10">
        <div
          className={cn(
            'flex flex-col gap-6',
            isCentered ? 'items-center text-center mx-auto max-w-4xl' : 'items-start text-left'
          )}
        >
          {/* Eyebrow / Badges */}
          {(eyebrow || badge) && (
            <div
              className={cn(
                'flex flex-wrap items-center gap-3',
                isCentered ? 'justify-center' : 'justify-between w-full'
              )}
            >
              {eyebrow && (
                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#f5f5f7] border border-black/10 text-xs font-mono font-semibold tracking-wider text-[#b8860b] uppercase shadow-sm">
                  <span className="h-2 w-2 rounded-full bg-[#b8860b] animate-pulse" />
                  <span>{eyebrow}</span>
                </div>
              )}
              {badge && <div className="shrink-0">{badge}</div>}
            </div>
          )}

          {/* Keynote Display Title */}
          <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-[#1d1d1f] leading-[1.05]">
            {title}
          </h1>

          {/* Editorial Subtitle */}
          {effectiveDescription && (
            <p
              className={cn(
                'text-base sm:text-xl md:text-2xl text-[#6e6e73] font-normal leading-relaxed',
                isCentered ? 'max-w-2xl mx-auto' : 'max-w-3xl'
              )}
            >
              {effectiveDescription}
            </p>
          )}

          {/* Action CTAs */}
          {actions && (
            <div
              className={cn(
                'flex flex-wrap items-center gap-3.5 pt-4',
                isCentered && 'justify-center'
              )}
            >
              {actions}
            </div>
          )}
        </div>
      </Container>
    </section>
  )
}

/* ========================================================================= */
/* 10. METRIC BAND — Tabular Keynote Stats Horizontal Matrix                 */
/* ========================================================================= */

interface MetricBandProps extends React.HTMLAttributes<HTMLDivElement> {
  items: Array<{
    label: string
    value: string
    unit?: string
    subtext?: string
    source?: string
  }>
  columns?: 2 | 3 | 4 | 5
}

export function MetricBand({ items, columns = 4, className, ...props }: MetricBandProps) {
  const colClass = {
    2: 'grid-cols-1 sm:grid-cols-2',
    3: 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3',
    4: 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-4',
    5: 'grid-cols-2 sm:grid-cols-3 lg:grid-cols-5',
  }[columns]

  return (
    <div className={cn('w-full grid gap-4 sm:gap-6', colClass, className)} {...props}>
      {items.map((item, idx) => (
        <div
          key={idx}
          className="p-6 sm:p-7 rounded-3xl bg-white border border-black/10 shadow-[0_2px_12px_rgba(0,0,0,0.03)] apple-card-hover flex flex-col justify-between"
        >
          <div className="space-y-2">
            <div className="text-[10px] font-mono uppercase tracking-wider text-[#86868b] font-semibold">
              {item.label}
            </div>
            <div className="text-2xl sm:text-3xl font-extrabold text-[#1d1d1f] tracking-tight tabular-nums">
              {item.value}
            </div>
            {item.unit && (
              <div className="text-[10px] font-mono font-bold text-[#b8860b] uppercase tracking-wider">
                {item.unit}
              </div>
            )}
          </div>
          {item.subtext && (
            <div className="text-xs text-[#6e6e73] pt-3 border-t border-black/10 leading-relaxed">
              {item.subtext}
            </div>
          )}
        </div>
      ))}
    </div>
  )
}
