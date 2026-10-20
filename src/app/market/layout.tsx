import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Dubai Market Intelligence — Macro Trends & Statutory Data',
  description:
    'Institutional transaction volumes, rental yield bifurcation, capital growth curves, and statutory market baselines across Dubai freehold sectors.',
  alternates: {
    canonical: 'https://dubai.cristianvaduva.com/market',
  },
  openGraph: {
    title: 'Dubai Market Intelligence — Macro Trends & Statutory Data',
    description:
      'Institutional transaction volumes, rental yields, and statutory market baselines across Dubai.',
    url: 'https://dubai.cristianvaduva.com/market',
  },
}

export default function MarketLayout({ children }: { children: React.ReactNode }) {
  return children
}
