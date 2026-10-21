import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Private Aviation & FBO Terminals in Dubai | Lifestyle Directory',
  description: 'Al Maktoum International VIP terminal, private jet charters, FBO handling, and corporate aircraft management in Dubai.',
  alternates: {
    canonical: 'https://dubai.cristianvaduva.com/lifestyle/aviation',
  },
}

export default function AviationLayout({ children }: { children: React.ReactNode }) {
  return children
}
