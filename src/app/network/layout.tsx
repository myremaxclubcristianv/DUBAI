import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Licensed Advisory & Partner Ecosystem | Dubai',
  description: 'Verified directory of licensed conveyancing solicitors, RERA-certified audit firms, tax agents, and private banking desks.',
  alternates: {
    canonical: 'https://dubai.cristianvaduva.com/network',
  },
}

export default function NetworkLayout({ children }: { children: React.ReactNode }) {
  return children
}
