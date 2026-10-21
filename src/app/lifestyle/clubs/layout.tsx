import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Private Member & Beach Clubs in Dubai | Lifestyle Directory',
  description: 'Ultra-exclusive private social clubs, beach clubs, and executive business lounges across Dubai.',
  alternates: {
    canonical: 'https://dubai.cristianvaduva.com/lifestyle/clubs',
  },
}

export default function ClubsLayout({ children }: { children: React.ReactNode }) {
  return children
}
