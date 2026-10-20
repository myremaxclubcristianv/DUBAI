import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Dubai Atlas — Sovereign Freehold Districts',
  description:
    'Comprehensive spatial dossiers, foreign freehold tenure decrees, yield curves, and infrastructure profiles across Dubai master-planned districts.',
  alternates: {
    canonical: 'https://dubai.cristianvaduva.com/areas',
  },
  openGraph: {
    title: 'Dubai Atlas — Sovereign Freehold Districts',
    description:
      'Spatial dossiers and foreign freehold tenure profiles across Dubai master-planned districts.',
    url: 'https://dubai.cristianvaduva.com/areas',
  },
}

export default function AreasLayout({ children }: { children: React.ReactNode }) {
  return children
}
