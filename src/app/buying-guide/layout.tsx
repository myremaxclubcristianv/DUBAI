import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Dubai Property Buying Guide — Statutory Conveyancing Flow',
  description:
    'End-to-end statutory property conveyancing roadmap in Dubai: Form F execution, DLD trustee settlement, escrow verification, and title deed issuance.',
  alternates: {
    canonical: 'https://dubai.cristianvaduva.com/buying-guide',
  },
  openGraph: {
    title: 'Dubai Property Buying Guide — Statutory Conveyancing Flow',
    description:
      'Step-by-step statutory conveyancing guide for purchasing real estate in Dubai.',
    url: 'https://dubai.cristianvaduva.com/buying-guide',
  },
}

export default function BuyingGuideLayout({ children }: { children: React.ReactNode }) {
  return children
}
