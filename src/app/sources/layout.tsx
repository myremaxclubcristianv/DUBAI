import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Official Sources & Data Provenance Registry',
  description:
    'Complete provenance audit log and statutory references: Dubai Land Department, RERA, Central Bank of the UAE, and GDRFA decrees.',
  alternates: {
    canonical: 'https://dubai.cristianvaduva.com/sources',
  },
  openGraph: {
    title: 'Official Sources & Data Provenance Registry | Dubai Platform',
    description:
      'Complete statutory reference registry and official UAE authority citations.',
    url: 'https://dubai.cristianvaduva.com/sources',
  },
}

export default function SourcesLayout({ children }: { children: React.ReactNode }) {
  return children
}
