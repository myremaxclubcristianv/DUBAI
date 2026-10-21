import type { Metadata } from 'next'
import { getRomaniaPropertyById, ROMANIA_PROPERTIES } from '@/lib/data/romania-properties'

export function generateStaticParams() {
  return ROMANIA_PROPERTIES.map((p) => ({ id: p.id }))
}

export async function generateMetadata(
  props: { params: Promise<{ id: string }> }
): Promise<Metadata> {
  const params = await props.params
  const property = getRomaniaPropertyById(params.id)
  const title = property ? `${property.title} | Portofoliu Imobiliar România` : 'Dosar Imobiliar România | DUBAI'
  const description = property
    ? `Fișă tehnică și documentație verificată pentru ${property.title} în ${property.city}, Județul ${property.county}.`
    : 'Fișă de cercetare imobiliară România cu proveniență verificată.'

  return {
    title,
    description,
    alternates: {
      canonical: `https://dubai.cristianvaduva.com/romania/properties/${params.id}`,
    },
    openGraph: {
      title,
      description,
      url: `https://dubai.cristianvaduva.com/romania/properties/${params.id}`,
    },
  }
}

export default function RomaniaPropertyDetailLayout({ children }: { children: React.ReactNode }) {
  return children
}
