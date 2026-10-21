import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Real Estate & Wealth Insurance Framework in Dubai',
  description: 'Statutory building insurance, Title Deed risk mitigation, health coverage mandates, and high-value asset protections.',
  alternates: {
    canonical: 'https://dubai.cristianvaduva.com/insurance',
  },
}

export default function InsuranceLayout({ children }: { children: React.ReactNode }) {
  return children
}
