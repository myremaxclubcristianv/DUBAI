import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Protocol Oficial de Vizionare Imobiliară în Dubai | DUBAI',
  description: 'Programare vizionări private în Dubai prin rețeaua de parteneri licențiați RERA: asistență la fața locului și verificarea dosarului juridic.',
  alternates: {
    canonical: 'https://dubai.cristianvaduva.com/vizionari',
  },
}

export default function VizionariLayout({ children }: { children: React.ReactNode }) {
  return children
}
