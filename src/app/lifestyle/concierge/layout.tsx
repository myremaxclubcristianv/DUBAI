import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Private Client Concierge & Bespoke Relocation Services in Dubai',
  description: 'Confidential lifestyle management, relocation coordination, private school admissions, and family office logistics.',
  alternates: {
    canonical: 'https://dubai.cristianvaduva.com/lifestyle/concierge',
  },
}

export default function ConciergeLayout({ children }: { children: React.ReactNode }) {
  return children
}
