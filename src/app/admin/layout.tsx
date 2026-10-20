import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Platform Administration Desk',
  description: 'Internal platform management and system status desk.',
  robots: {
    index: false,
    follow: false,
  },
}

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  return children
}
