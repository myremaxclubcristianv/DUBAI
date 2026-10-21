import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Dubai Master Developments & Off-Plan Projects',
  description: 'Verified off-plan projects, master communities, escrow bank accounts, and delivery timelines across Dubai.',
  alternates: {
    canonical: 'https://dubai.cristianvaduva.com/projects',
  },
}

export default function ProjectsLayout({ children }: { children: React.ReactNode }) {
  return children
}
