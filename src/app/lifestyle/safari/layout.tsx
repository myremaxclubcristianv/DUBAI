import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Luxury Desert Conservation & Safari Retreats in Dubai',
  description: 'Private desert conservation reserves, luxury desert resorts, and bespoke dunes hospitality in Dubai.',
  alternates: {
    canonical: 'https://dubai.cristianvaduva.com/lifestyle/safari',
  },
}

export default function SafariLayout({ children }: { children: React.ReactNode }) {
  return children
}
