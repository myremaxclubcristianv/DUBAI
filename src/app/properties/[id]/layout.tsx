import type { Metadata } from 'next'
import { getPropertyById, VERIFIED_PROPERTIES } from '@/lib/data/properties'

export function generateStaticParams() {
  return VERIFIED_PROPERTIES.map((p) => ({ id: p.id }))
}

export async function generateMetadata(
  props: { params: Promise<{ id: string }> }
): Promise<Metadata> {
  const params = await props.params
  const property = getPropertyById(params.id)
  const title = property ? `${property.title} | Dubai Real Estate Dossier` : 'Property Dossier | DUBAI'
  const description = property
    ? `Curated investment brief for ${property.title} in ${property.area_name}. Master developer: ${property.developer_name}.`
    : 'Curated Dubai real estate research brief with complete provenance.'

  return {
    title,
    description,
    alternates: {
      canonical: `https://dubai.cristianvaduva.com/properties/${params.id}`,
    },
    openGraph: {
      title,
      description,
      url: `https://dubai.cristianvaduva.com/properties/${params.id}`,
    },
  }
}

export default function PropertyDetailLayout({ children }: { children: React.ReactNode }) {
  return children
}
