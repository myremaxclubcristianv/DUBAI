import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Dubai Macroeconomic Intelligence & D33 Agenda',
  description: 'Macroeconomic indicators, GDP growth sectors, sovereign debt ratings, and the Dubai Economic Agenda D33.',
  alternates: {
    canonical: 'https://dubai.cristianvaduva.com/economy',
  },
}

export default function EconomyLayout({ children }: { children: React.ReactNode }) {
  return children
}
