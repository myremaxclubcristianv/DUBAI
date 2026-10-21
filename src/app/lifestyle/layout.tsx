import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Curated Ultra-Prime Lifestyle Ecosystem in Dubai',
  description: 'Independent directory of private aviation, superyacht marinas, fine dining, private member clubs, and luxury mobility.',
  alternates: {
    canonical: 'https://dubai.cristianvaduva.com/lifestyle',
  },
}

export default function LifestyleLayout({ children }: { children: React.ReactNode }) {
  return children
}
