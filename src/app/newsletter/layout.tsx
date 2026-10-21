import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Abonare Analize Lunare Imobiliare Dubai | DUBAI Newsletter',
  description: 'Analiză lunară factuală pentru investitorii din România: date oficiale DLD, noutăți legislative, fiscalitate și ghiduri de due diligence.',
  alternates: {
    canonical: 'https://dubai.cristianvaduva.com/newsletter',
  },
}

export default function NewsletterLayout({ children }: { children: React.ReactNode }) {
  return children
}
