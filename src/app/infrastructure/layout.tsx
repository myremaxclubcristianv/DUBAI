import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Dubai Master Infrastructure & Urban Transit Network',
  description: 'Analysis of major transport corridors, Dubai Metro expansion, Etihad Rail, airport developments, and utility grids.',
  alternates: {
    canonical: 'https://dubai.cristianvaduva.com/infrastructure',
  },
}

export default function InfrastructureLayout({ children }: { children: React.ReactNode }) {
  return children
}
