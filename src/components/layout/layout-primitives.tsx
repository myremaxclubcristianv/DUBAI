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
  default: 'max-w-6xl',
  narrow: 'max-w-4xl',
  wide: 'max-w-7xl',
  editorial: 'max-w-[1400px]',
  cinematic: 'max-w-[1600px]',
  prose: 'max-w-2xl',
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
  hero: 'pt-12 pb-16 md:pt-16 md:pb-24',
  default: 'py-16 md:py-24',
  tight: 'py-10 md:py-16',
  loose: 'py-20 md:py-32',
  none: 'py-0',
}

const SURFACE_CLASSES: Record<SectionSurface, string> = {
  white: 'bg-white text-text-primary',
  subtle: 'bg-surface-subtle text-text-primary',
  elevated: 'bg-surface text-text-primary',
  dark: 'bg-[#111111] text-white',
  'dark-elevated': 'bg-[#181818] text-white',
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
        bordered && (surface.startsWith('dark') ? 'border-y border-white/10' : 'border-y border-border'),
        borderBottom && !bordered && (surface.startsWith('dark') ? 'border-b border-white/10' : 'border-b border-border'),
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
  eyebrow?: string
  title: React.ReactNode
  description?: React.ReactNode
  action?: React.ReactNode
  align?: 'left' | 'center' | 'split'
  theme?: 'light' | 'dark'
}

export function SectionHeader({
  eyebrow,
  title,
  description,
  action,
  align = 'split',
  theme = 'light',
  className,
  ...props
}: SectionHeaderProps) {
  const isDark = theme === 'dark'

  return (
    <div
      className={cn(
        'w-full flex flex-col gap-4',
        align === 'split' && 'sm:flex-row sm:items-end sm:justify-between',
        align === 'center' && 'text-center items-center',
        align === 'left' && 'text-left items-start',
        className
      )}
      {...props}
    >
      <div className={cn('space-y-1.5', align === 'split' && 'max-w-2xl', align === 'center' && 'max-w-xl mx-auto')}>
        {eyebrow && (
          <div
            className={cn(
              'text-[11px] font-mono font-bold tracking-widest uppercase',
              isDark ? 'text-[#c9a962]' : 'text-accent'
            )}
          >
            {eyebrow}
          </div>
        )}
        <h2
          className={cn(
            'text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight',
            isDark ? 'text-white' : 'text-text-primary'
          )}
        >
          {title}
        </h2>
        {description && (
          <p
            className={cn(
              'text-xs sm:text-sm leading-relaxed font-normal',
              isDark ? 'text-white/70' : 'text-text-secondary'
            )}
          >
            {description}
          </p>
        )}
      </div>

      {action && (
        <div className={cn('shrink-0 pt-2 sm:pt-0', align === 'center' && 'pt-4')}>
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

export function DataRail({ items, theme = 'light', className, ...props }: DataRailProps) {
  const isDark = theme === 'dark'

  return (
    <div
      className={cn(
        'grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 rounded-2xl border divide-y sm:divide-y-0 divide-x-0 sm:divide-x overflow-hidden',
        isDark
          ? 'bg-white/5 border-white/10 divide-white/10'
          : 'bg-surface-subtle border-border divide-border',
        className
      )}
      {...props}
    >
      {items.map((item, idx) => (
        <div key={idx} className="p-4 sm:p-5 flex flex-col justify-between space-y-2">
          <div className="flex items-center justify-between gap-1">
            <span
              className={cn(
                'text-[10px] font-mono uppercase tracking-wider',
                isDark ? 'text-white/60' : 'text-text-muted'
              )}
            >
              {item.label}
            </span>
            {item.status && (
              <span
                className={cn(
                  'text-[9px] font-mono px-1.5 py-0.5 rounded',
                  isDark ? 'bg-[#c9a962]/20 text-[#c9a962]' : 'bg-accent-subtle text-accent font-bold'
                )}
              >
                {item.status}
              </span>
            )}
          </div>
          <div
            className={cn(
              'text-lg sm:text-xl font-black tabular-nums tracking-tight',
              isDark ? 'text-white' : 'text-text-primary'
            )}
          >
            {item.value}
          </div>
          {item.subtext && (
            <div
              className={cn(
                'text-[11px] font-normal leading-snug',
                isDark ? 'text-white/50' : 'text-text-secondary'
              )}
            >
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
    <div className={cn('grid gap-4', METRIC_COLS[columns], className)} {...props}>
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
/* 9. PAGE INTRO — Canonical Header Architecture Across Platform             */
/* ========================================================================= */

interface PageIntroProps extends Omit<React.HTMLAttributes<HTMLDivElement>, 'title'> {
  eyebrow?: React.ReactNode
  title: React.ReactNode
  description?: React.ReactNode
  badge?: React.ReactNode
  actions?: React.ReactNode
  surface?: 'white' | 'subtle' | 'dark'
}

export function PageIntro({
  eyebrow,
  title,
  description,
  badge,
  actions,
  surface = 'subtle',
  className,
  ...props
}: PageIntroProps) {
  const surfaceClass = {
    white: 'bg-white border-b border-border',
    subtle: 'bg-surface-subtle border-b border-border',
    dark: 'bg-[#111111] text-white border-b border-white/10',
  }[surface]

  return (
    <section className={cn('pt-12 pb-10', surfaceClass, className)} {...props}>
      <Container size="default" className="space-y-4">
        {(eyebrow || badge) && (
          <div className="flex flex-wrap items-center justify-between gap-4">
            {eyebrow && (
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-border text-xs font-semibold text-text-secondary shadow-2xs">
                <span className="h-2 w-2 rounded-full bg-emerald-600 animate-pulse" />
                <span>{eyebrow}</span>
              </div>
            )}
            {badge && <div>{badge}</div>}
          </div>
        )}

        <div className="space-y-3">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-text-primary uppercase leading-tight break-words">
            {title}
          </h1>

          {description && (
            <p className="text-base sm:text-lg text-text-secondary max-w-2xl font-normal leading-relaxed">
              {description}
            </p>
          )}
        </div>

        {actions && <div className="pt-2 flex flex-wrap items-center gap-3">{actions}</div>}
      </Container>
    </section>
  )
}

/* ========================================================================= */
/* 10. METRIC BAND — Integrated Financial & Operational Ribbon               */
/* ========================================================================= */

export interface MetricBandItem {
  label: string
  value: React.ReactNode
  unit?: string
  subtext?: string
  source?: string
}

interface MetricBandProps extends React.HTMLAttributes<HTMLDivElement> {
  items: MetricBandItem[]
  columns?: 2 | 3 | 4 | 5
}

export function MetricBand({ items, columns = 4, className, ...props }: MetricBandProps) {
  const colClass = {
    2: 'grid-cols-1 sm:grid-cols-2',
    3: 'grid-cols-1 sm:grid-cols-3',
    4: 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-4',
    5: 'grid-cols-2 sm:grid-cols-3 lg:grid-cols-5',
  }[columns]

  return (
    <div
      className={cn(
        'w-full py-6 border-y border-border grid gap-6 divide-y sm:divide-y-0 sm:divide-x divide-border',
        colClass,
        className
      )}
      {...props}
    >
      {items.map((item, idx) => (
        <div key={idx} className={cn('flex flex-col justify-between space-y-1.5', idx > 0 && 'pt-4 sm:pt-0 sm:pl-6')}>
          <div className="flex items-center justify-between gap-2">
            <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-text-muted">
              {item.label}
            </span>
            {item.source && (
              <span className="text-[9px] font-mono px-1.5 py-0.5 rounded bg-surface border border-border text-accent font-bold">
                {item.source}
              </span>
            )}
          </div>
          <div className="flex items-baseline gap-1">
            <span className="text-2xl sm:text-3xl font-extrabold text-text-primary tracking-tight tabular-nums">
              {item.value}
            </span>
            {item.unit && <span className="text-xs font-semibold text-text-secondary">{item.unit}</span>}
          </div>
          {item.subtext && (
            <p className="text-[11px] text-text-muted leading-normal">{item.subtext}</p>
          )}
        </div>
      ))}
    </div>
  )
}
