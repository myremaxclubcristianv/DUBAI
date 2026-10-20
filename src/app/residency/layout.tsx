import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'UAE Golden Residency & Investor Visa Framework',
  description:
    'Statutory requirements, eligibility baselines, and application protocols for the 10-Year UAE Real Estate Investor Residency under Cabinet Resolution No. 65 of 2022.',
  alternates: {
    canonical: 'https://dubai.cristianvaduva.com/residency',
  },
  openGraph: {
    title: 'UAE Golden Residency & Investor Visa Framework | Dubai Platform',
    description:
      'Statutory requirements and eligibility baselines for the 10-Year UAE Real Estate Investor Residency.',
    url: 'https://dubai.cristianvaduva.com/residency',
  },
}

export default function ResidencyLayout({ children }: { children: React.ReactNode }) {
  return children
}
