import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Top Corporate Conglomerates & Family Groups in Dubai',
  description: 'Intelligence on sovereign investment entities, family-owned trading conglomerates, and institutional real estate operators.',
  alternates: {
    canonical: 'https://dubai.cristianvaduva.com/companies',
  },
}

export default function CompaniesLayout({ children }: { children: React.ReactNode }) {
  return children
}
