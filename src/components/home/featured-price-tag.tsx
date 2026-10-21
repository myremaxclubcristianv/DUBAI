'use client'

import * as React from 'react'

interface FeaturedPriceTagProps {
  priceAed: number | undefined
  className?: string
}

export function FeaturedPriceTag({ className = '' }: FeaturedPriceTagProps) {
  return (
    <span className={className}>
      REQUEST PRICE
    </span>
  )
}
