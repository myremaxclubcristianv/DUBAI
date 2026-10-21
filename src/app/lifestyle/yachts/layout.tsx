import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Superyachts, Marinas & Berthing in Dubai | Lifestyle Directory',
  description: 'Guide to Dubai Harbour, Palm Jumeirah Marina, Bulgari Marina, yacht charters, and superyacht berthing facilities.',
  alternates: {
    canonical: 'https://dubai.cristianvaduva.com/lifestyle/yachts',
  },
}

export default function YachtsLayout({ children }: { children: React.ReactNode }) {
  return children
}
