import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Underwriting Methodology & Data Governance',
  description:
    'Six-part analytical decision intelligence framework: location tenure, liquidity velocity, valuation baselines, net yields, and statutory escrow protection.',
  alternates: {
    canonical: 'https://dubai.cristianvaduva.com/methodology',
  },
  openGraph: {
    title: 'Underwriting Methodology & Data Governance | Dubai Platform',
    description:
      'The six-part decision intelligence underwriting framework for Dubai real estate assets.',
    url: 'https://dubai.cristianvaduva.com/methodology',
  },
}

export default function MethodologyLayout({ children }: { children: React.ReactNode }) {
  return children
}
