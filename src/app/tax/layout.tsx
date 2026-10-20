import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'UAE Corporate Tax, VAT & Double Taxation Treaties Guide',
  description:
    'Comprehensive statutory guide to Federal Decree-Law No. 47/2022 (Corporate Tax), Qualifying Free Zone Person (QFZP) criteria, VAT Law No. 8/2017, and Romania-UAE Double Tax Treaty.',
  alternates: {
    canonical: 'https://dubai.cristianvaduva.com/tax',
  },
  openGraph: {
    title: 'UAE Corporate Tax, VAT & Double Taxation Treaties | Dubai Platform',
    description:
      'Statutory breakdown of UAE Corporate Tax (0% vs 9%), QFZP requirements, VAT thresholds, and Natural Person real estate exemptions.',
    url: 'https://dubai.cristianvaduva.com/tax',
  },
}

export default function TaxLayout({ children }: { children: React.ReactNode }) {
  return children
}
