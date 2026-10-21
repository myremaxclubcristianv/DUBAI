import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Dubai Government Real Estate & Urban Planning Entities',
  description: 'Authoritative directory of Dubai government authorities, Land Department departments, RERA, and municipal entities.',
  alternates: {
    canonical: 'https://dubai.cristianvaduva.com/government',
  },
}

export default function GovernmentLayout({ children }: { children: React.ReactNode }) {
  return children
}
