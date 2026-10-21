import type { Metadata } from 'next'
import { getAreaBySlug, DUBAI_AREAS } from '@/lib/data/areas'

export function generateStaticParams() {
  return DUBAI_AREAS.map((a) => ({ slug: a.slug }))
}

export async function generateMetadata(
  props: { params: Promise<{ slug: string }> }
): Promise<Metadata> {
  const params = await props.params
  const area = getAreaBySlug(params.slug)
  const title = area ? `${area.name} | Dubai Real Estate & Freehold Atlas` : 'Dubai District Atlas | DUBAI'
  const description = area
    ? `Comprehensive urban, legal, and investment profile for ${area.name}, Dubai. Freehold zoning, master developer, and infrastructure.`
    : 'Comprehensive urban and investment profile for Dubai districts.'

  return {
    title,
    description,
    alternates: {
      canonical: `https://dubai.cristianvaduva.com/areas/${params.slug}`,
    },
    openGraph: {
      title,
      description,
      url: `https://dubai.cristianvaduva.com/areas/${params.slug}`,
    },
  }
}

export default function AreaDetailLayout({ children }: { children: React.ReactNode }) {
  return children
}
