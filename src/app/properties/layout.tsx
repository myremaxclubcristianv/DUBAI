import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Dubai Prime Properties & Acquisition Inventory',
  description:
    'Curated portfolio of prime Dubai penthouses, villas, and architectural residences with complete data provenance and statutory fee schedules.',
  alternates: {
    canonical: 'https://dubai.cristianvaduva.com/properties',
  },
  openGraph: {
    title: 'Dubai Prime Properties & Acquisition Inventory',
    description:
      'Curated portfolio of prime Dubai penthouses, villas, and architectural residences with complete data provenance.',
    url: 'https://dubai.cristianvaduva.com/properties',
  },
}

export default function PropertiesLayout({ children }: { children: React.ReactNode }) {
  return children
}
