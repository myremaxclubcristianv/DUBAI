export interface TickerItem {
  label: string
  value: string
  status: 'VERIFIED' | 'REFERENCE'
  source: string
}

export const TICKER_ITEMS: readonly TickerItem[] = [
  {
    label: 'DUBAI INTELLIGENCE',
    value: 'VERIFIED REFERENCE REGISTRY',
    status: 'REFERENCE',
    source: 'Statutory Registers',
  },
  {
    label: 'DLD TRANSFER',
    value: 'BUYER 2% · SELLER 2% (4.00% TOTAL)',
    status: 'VERIFIED',
    source: 'Law No. 7 of 2006',
  },
  {
    label: 'USD / AED',
    value: '3.6725 OFFICIAL PEG',
    status: 'REFERENCE',
    source: 'CBUAE Official Rate',
  },
  {
    label: 'GOLDEN RESIDENCY',
    value: 'AED 2M+ PROPERTY INVESTMENT THRESHOLD',
    status: 'VERIFIED',
    source: 'ICP / GDRFA',
  },
  {
    label: 'PERSONAL INCOME TAX',
    value: 'NO UAE PERSONAL INCOME TAX',
    status: 'VERIFIED',
    source: 'UAE Govt / FTA',
  },
  {
    label: 'CORPORATE TAX',
    value: '9% ON TAXABLE PROFITS > AED 375K',
    status: 'VERIFIED',
    source: 'Federal Decree-Law No. 47/2022',
  },
  {
    label: 'TRUSTEE FEE',
    value: 'AED 4K (≥ AED 500K) · AED 2K (< AED 500K)',
    status: 'VERIFIED',
    source: 'DLD Official Schedule',
  },
  {
    label: 'MORTGAGE REGISTRATION',
    value: '0.25% + AED 290 ADMINISTRATIVE',
    status: 'VERIFIED',
    source: 'DLD Official Schedule',
  },
]
