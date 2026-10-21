import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Buy Verified Property in Dubai | Direct Title & Escrow Audited',
  description: 'Acquire prime Dubai residential properties, penthouses, and branded residences with complete data provenance and statutory DLD conveyancing.',
  alternates: {
    canonical: 'https://dubai.cristianvaduva.com/buy',
  },
}

export default function BuyLayout({ children }: { children: React.ReactNode }) {
  return children
}
