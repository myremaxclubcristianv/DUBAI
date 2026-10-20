import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Accessibility Statement',
  description: 'WCAG 2.1 AA accessibility commitments, keyboard navigation standards, and inclusive design principles.',
  alternates: {
    canonical: 'https://dubai.cristianvaduva.com/accessibility',
  },
  openGraph: {
    title: 'Accessibility Statement | Dubai Platform',
    description: 'Accessibility commitments and digital inclusion standards.',
    url: 'https://dubai.cristianvaduva.com/accessibility',
  },
}

export default function AccessibilityLayout({ children }: { children: React.ReactNode }) {
  return children
}
