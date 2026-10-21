import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Client Workspace',
  description: 'Private client workspace for property shortlists, side-by-side comparison matrices, and acquisition worksheets.',
  robots: {
    index: false,
    follow: false,
  },
  alternates: {
    canonical: 'https://dubai.cristianvaduva.com/client',
  },
}

export default function ClientLayout({ children }: { children: React.ReactNode }) {
  return children
}
