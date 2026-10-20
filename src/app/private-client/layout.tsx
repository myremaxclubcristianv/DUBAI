import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Private Client Advisory Desk — Cristian Văduva',
  description:
    'Discreet acquisition mandates, off-market portfolio sourcing, and direct principal representation for prime Dubai real estate assets.',
  alternates: {
    canonical: 'https://dubai.cristianvaduva.com/private-client',
  },
  openGraph: {
    title: 'Private Client Advisory Desk — Cristian Văduva',
    description:
      'Discreet acquisition mandates and off-market portfolio advisory across Dubai.',
    url: 'https://dubai.cristianvaduva.com/private-client',
  },
}

export default function PrivateClientLayout({ children }: { children: React.ReactNode }) {
  return children
}
