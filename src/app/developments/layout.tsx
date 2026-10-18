import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Signature Developments | UAE Master Communities & Branded Enclaves',
  description:
    'Curated residential master communities, branded waterfront enclaves, and prime architectural releases across the United Arab Emirates. Featuring BRABUS ISLAND, Al Raha, Abu Dhabi.',
  alternates: {
    canonical: 'https://dubai.cristianvaduva.com/developments',
  },
  openGraph: {
    title: 'Signature Developments | UAE Master Communities',
    description:
      'Curated large-scale residential master communities and branded waterfront developments across the UAE.',
    url: 'https://dubai.cristianvaduva.com/developments',
    type: 'website',
    locale: 'en_US',
    siteName: 'DUBAI Real Estate & Investment Intelligence',
  },
}

export default function DevelopmentsLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
