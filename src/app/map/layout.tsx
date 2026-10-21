import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Interactive Dubai Real Estate & Freehold Atlas Map',
  description: 'Interactive map of designated foreign freehold zones, metro connectivity corridors, luxury districts, and development master plans.',
  alternates: {
    canonical: 'https://dubai.cristianvaduva.com/map',
  },
}

export default function MapLayout({ children }: { children: React.ReactNode }) {
  return children
}
