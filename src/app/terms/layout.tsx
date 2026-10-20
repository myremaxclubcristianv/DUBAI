import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Terms of Service',
  description: 'Statutory terms of use, data provenance verification rules, independent research status, and advisory protocols.',
  alternates: {
    canonical: 'https://dubai.cristianvaduva.com/terms',
  },
  openGraph: {
    title: 'Terms of Service | Dubai Real Estate Platform',
    description: 'Terms of use, independent platform status, and professional standards.',
    url: 'https://dubai.cristianvaduva.com/terms',
  },
}

export default function TermsLayout({ children }: { children: React.ReactNode }) {
  return children
}
