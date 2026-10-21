import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Dubai Business Setup, Free Zones & Corporate Structuring',
  description: 'Independent intelligence on Mainland vs Free Zone company formation, licensing, corporate taxation, and regulatory structuring in Dubai.',
  alternates: {
    canonical: 'https://dubai.cristianvaduva.com/business',
  },
}

export default function BusinessLayout({ children }: { children: React.ReactNode }) {
  return children
}
