import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Investment Underwriting Tools & Financial Models',
  description:
    'Institutional property financial modeling desks: DLD transfer tariffs, net achieved rental yields, off-plan payment schedules, and mortgage debt service.',
  alternates: {
    canonical: 'https://dubai.cristianvaduva.com/investment',
  },
  openGraph: {
    title: 'Investment Underwriting Tools & Financial Models | Dubai Platform',
    description:
      'Property financial modeling desks: statutory fees, net yields, and mortgage debt service.',
    url: 'https://dubai.cristianvaduva.com/investment',
  },
}

export default function InvestmentLayout({ children }: { children: React.ReactNode }) {
  return children
}
