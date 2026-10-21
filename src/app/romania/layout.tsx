import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Portofoliu Imobiliar România | Proprietăți Verificate',
  description: 'Catalog imobiliar selectiv România: proprietăți rezidențiale premium în București, Ilfov, litoral și terenuri intravilane pentru investiții.',
  alternates: {
    canonical: 'https://dubai.cristianvaduva.com/romania',
  },
}

export default function RomaniaLayout({ children }: { children: React.ReactNode }) {
  return children
}
