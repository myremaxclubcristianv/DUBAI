import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'UAE Property Investor Residency & Golden Visa Framework',
  description:
    'Statutory requirements, eligibility baselines, and application protocols for the UAE Real Estate Investor Residency under Cabinet Resolution No. 65 of 2022 (5-year renewable statutory baseline on u.ae / ICP and distinction from 10-year routes such as qualifying public investments or exceptional talents).',
  alternates: {
    canonical: 'https://dubai.cristianvaduva.com/residency',
  },
  openGraph: {
    title: 'UAE Property Investor Residency & Golden Visa Framework | Dubai Platform',
    description:
      'Statutory requirements and eligibility baselines for the UAE Real Estate Investor Residency (5-Year renewable statutory baseline under Cabinet Res. 65/2022).',
    url: 'https://dubai.cristianvaduva.com/residency',
  },
}

export default function ResidencyLayout({ children }: { children: React.ReactNode }) {
  return children
}
