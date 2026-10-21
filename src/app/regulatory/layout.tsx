import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Dubai & UAE Real Estate Legal & Regulatory Registry',
  description: 'Primary legislative statutes, Executive Council resolutions, RERA directives, and official gazette citations governing property ownership in Dubai.',
  alternates: {
    canonical: 'https://dubai.cristianvaduva.com/regulatory',
  },
}

export default function RegulatoryLayout({ children }: { children: React.ReactNode }) {
  return children
}
