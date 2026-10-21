import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Luxury Hotels & Branded Resorts in Dubai | Lifestyle Directory',
  description: 'Ultra-luxury hospitality, presidential suites, beachfront resorts, and world-class retreats across Dubai.',
  alternates: {
    canonical: 'https://dubai.cristianvaduva.com/lifestyle/hotels',
  },
}

export default function HotelsLayout({ children }: { children: React.ReactNode }) {
  return children
}
