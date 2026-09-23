import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function formatCurrency(amount: number | null | undefined, currency: string = 'AED'): string {
  if (amount === null || amount === undefined) return 'Price on request'
  return new Intl.NumberFormat('en-AE', {
    style: 'currency',
    currency: currency,
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(amount)
}

export function formatNumber(num: number | null | undefined): string {
  if (num === null || num === undefined) return 'N/A'
  return new Intl.NumberFormat('en-AE').format(num)
}

export function formatDate(date: string | null | undefined): string {
  if (!date) return 'N/A'
  return new Intl.DateTimeFormat('en-AE', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  }).format(new Date(date))
}

export function formatArea(sqft: number | null | undefined): string {
  if (sqft === null || sqft === undefined) return 'N/A'
  return `${formatNumber(sqft)} sqft`
}

export function calculatePricePerSqft(price: number | null, area: number | null): number | null {
  if (!price || !area || area === 0) return null
  return price / area
}

export function calculateGrossYield(annualRent: number | null, propertyPrice: number | null): number | null {
  if (!annualRent || !propertyPrice || propertyPrice === 0) return null
  return (annualRent / propertyPrice) * 100
}