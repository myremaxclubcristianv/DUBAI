import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'BRABUS ISLAND, Al Raha, Abu Dhabi | Signature Residences Dossier',
  description:
    'Official investor dossier for BRABUS ISLAND in Al Seef District, Al Raha, Abu Dhabi. Four towers, 352 apartments, 96 villas. 21 verified investor units listed with architectural floor plans, pricing, and area breakdowns.',
  alternates: {
    canonical: 'https://dubai.cristianvaduva.com/developments/brabus-island',
  },
  openGraph: {
    title: 'BRABUS ISLAND — Al Raha, Abu Dhabi, UAE',
    description:
      'Tailor-Made Waterfront Architecture on the Arabian Gulf. 4 towers, 352 apartments, 96 villas, 21 verified investor units.',
    url: 'https://dubai.cristianvaduva.com/developments/brabus-island',
    type: 'website',
    locale: 'en_US',
    siteName: 'DUBAI Real Estate & Investment Intelligence',
  },
}

export default function BrabusIslandLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
