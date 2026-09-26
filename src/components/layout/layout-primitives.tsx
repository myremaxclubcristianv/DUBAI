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
  hero: 'pt-16 pb-20 md:pt-24 md:pb-28',
  default: 'py-16 md:py-24',
  tight: 'py-10 md:py-16',
  loose: 'py-20 md:py-32',
  none: 'py-0',
}

const SURFACE_CLASSES: Record<SectionSurface, string> = {
  white: 'bg-black text-white',
  subtle: 'bg-zinc-950 text-white',
  elevated: 'bg-zinc-900/80 text-white',
  dark: 'bg-black text-white',
  'dark-elevated': 'bg-zinc-950 text-white',
}

export function Section({
  spacing = 'default',
  surface = 'dark',
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
        bordered && 'border-y border-white/10',
        borderBottom && !bordered && 'border-b border-white/10',
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
  className,
  ...props
}: SectionHeaderProps) {
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
      <div className={cn('space-y-2', align === 'split' && 'max-w-2xl', align === 'center' && 'max-w-2xl mx-auto')}>
        {eyebrow && (
          <div className="text-[11px] font-mono font-bold tracking-widest uppercase text-gold">
            {eyebrow}
          </div>
        )}
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white leading-tight">
          {title}
        </h2>
        {description && (
          <p className="text-sm sm:text-base leading-relaxed font-normal text-zinc-400">
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

export function DataRail({ items, className, ...props }: DataRailProps) {
  return (
    <div
      className={cn(
        'w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3',
        className
      )}
      {...props}
    >
      {items.map((item, idx) => (
        <div
          key={idx}
          className="p-5 sm:p-6 rounded-3xl bg-zinc-950 border border-white/10 flex flex-col justify-between h-full space-y-4 backdrop-blur-md"
        >
          <div className="space-y-2">
            <div className="flex items-center justify-between gap-1.5 min-h-[1.25rem]">
              <span className="text-[10px] font-mono uppercase tracking-wider text-zinc-400">
                {item.label}
              </span>
              {item.status && (
                <span className="text-[9px] font-mono px-2 py-0.5 rounded-full bg-gold/10 text-gold border border-gold/20 font-bold shrink-0">
                  {item.status}
                </span>
              )}
            </div>
            <div className="text-xl sm:text-2xl font-bold tabular-nums tracking-tight text-white leading-none min-h-[2rem] flex items-baseline">
              {item.value}
            </div>
          </div>
          {item.subtext && (
            <div className="text-xs font-normal leading-relaxed pt-3 border-t border-white/10 text-zinc-400">
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
  className,
  ...props
}: PageIntroProps) {
  return (
    <section className={cn('relative pt-20 pb-12 overflow-hidden border-b border-white/10 bg-gradient-to-b from-zinc-950 via-black to-black', className)} {...props}>
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-full max-w-[600px] h-[300px] bg-gold/5 blur-[120px] rounded-full pointer-events-none" />
      
      <Container size="default" className="relative z-10 space-y-4">
        {(eyebrow || badge) && (
          <div className="flex flex-wrap items-center justify-between gap-4">
            {eyebrow && (
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 backdrop-blur-md text-[11px] font-mono font-semibold tracking-wider text-gold uppercase">
                <span className="h-2 w-2 rounded-full bg-gold animate-pulse" />
                <span>{eyebrow}</span>
              </div>
            )}
            {badge && <div>{badge}</div>}
          </div>
        )}

        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div className="space-y-2 max-w-3xl">
            <h1 className="text-4xl sm:text-6xl font-bold tracking-tight text-white">
              {title}
            </h1>

            {description && (
              <p className="text-base sm:text-xl text-zinc-400 font-normal leading-relaxed">
                {description}
              </p>
            )}
          </div>

          {actions && <div className="pt-2 flex flex-wrap items-center gap-3 shrink-0">{actions}</div>}
        </div>
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
        'w-full grid gap-4',
        colClass,
        className
      )}
      {...props}
    >
      {items.map((item, idx) => (
        <div
          key={idx}
          className="p-6 rounded-3xl bg-zinc-950 border border-white/10 flex flex-col justify-between h-full space-y-3 backdrop-blur-md"
        >
          <div className="space-y-2">
            {/* 1. Header: Label + Source Tag */}
            <div className="flex items-center justify-between gap-2 min-h-[1.25rem]">
              <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-zinc-400 truncate">
                {item.label}
              </span>
              {item.source && (
                <span className="text-[9px] font-mono px-2 py-0.5 rounded-full bg-zinc-900 border border-white/10 text-gold font-bold shrink-0">
                  {item.source}
                </span>
              )}
            </div>

            {/* 2. Numeric / Display Value */}
            <div className="flex items-baseline gap-1.5 pt-1 min-h-[2.25rem]">
              <span className="text-2xl sm:text-3xl font-bold text-white tracking-tight tabular-nums leading-none">
                {item.value}
              </span>
              {item.unit && (
                <span className="text-xs font-semibold text-zinc-400 tracking-tight">
                  {item.unit}
                </span>
              )}
            </div>
          </div>

          {/* 3. Supporting context */}
          {item.subtext && (
            <p className="text-xs text-zinc-400 leading-relaxed pt-3 border-t border-white/10">
              {item.subtext}
            </p>
          )}
        </div>
      ))}
    </div>
  )
}
