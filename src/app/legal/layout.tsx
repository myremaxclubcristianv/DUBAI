import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Legal Architecture & Conveyancing in Dubai',
  description: 'Legal conveyancing steps, DLD trustee registration, contract law, and statutory protections for property buyers.',
  alternates: {
    canonical: 'https://dubai.cristianvaduva.com/legal',
  },
}

export default function LegalLayout({ children }: { children: React.ReactNode }) {
  return children
}
