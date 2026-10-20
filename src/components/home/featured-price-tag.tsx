'use client'

import * as React from 'react'
import { useClient } from '@/lib/context/client-context'

interface FeaturedPriceTagProps {
  priceAed: number | undefined
  className?: string
}

export function FeaturedPriceTag({ priceAed, className = '' }: FeaturedPriceTagProps) {
  const { formatCurrency } = useClient()

  return (
    <span className={className}>
      {formatCurrency(priceAed)}
    </span>
  )
}
