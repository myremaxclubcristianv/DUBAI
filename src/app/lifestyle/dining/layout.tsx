import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Fine Dining & Private Member Clubs in Dubai | Lifestyle Directory',
  description: 'Michelin-starred restaurants, private members clubs, rooftop lounges, and gastronomic landmarks in Dubai.',
  alternates: {
    canonical: 'https://dubai.cristianvaduva.com/lifestyle/dining',
  },
}

export default function DiningLayout({ children }: { children: React.ReactNode }) {
  return children
}
