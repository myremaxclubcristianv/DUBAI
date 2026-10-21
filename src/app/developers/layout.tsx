import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Dubai Master Developers Directory | Track Records & Escrow Audits',
  description: 'Audited directory of major Dubai real estate developers, delivery metrics, financial health, and RERA registration credentials.',
  alternates: {
    canonical: 'https://dubai.cristianvaduva.com/developers',
  },
}

export default function DevelopersLayout({ children }: { children: React.ReactNode }) {
  return children
}
