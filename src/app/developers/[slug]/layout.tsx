import type { Metadata } from 'next'
import { getDeveloperBySlug, VERIFIED_DEVELOPERS } from '@/lib/data/developers'

export function generateStaticParams() {
  return VERIFIED_DEVELOPERS.map((d) => ({ slug: d.slug }))
}

export async function generateMetadata(
  props: { params: Promise<{ slug: string }> }
): Promise<Metadata> {
  const params = await props.params
  const developer = getDeveloperBySlug(params.slug)
  const title = developer ? `${developer.name} | Dubai Master Developer Profile` : 'Developer Profile | DUBAI'
  const description = developer
    ? `DLD registration, audited portfolio, and master community track record for ${developer.name}, Dubai.`
    : 'Audited master developer profile and project portfolio.'

  return {
    title,
    description,
    alternates: {
      canonical: `https://dubai.cristianvaduva.com/developers/${params.slug}`,
    },
    openGraph: {
      title,
      description,
      url: `https://dubai.cristianvaduva.com/developers/${params.slug}`,
    },
  }
}

export default function DeveloperDetailLayout({ children }: { children: React.ReactNode }) {
  return children
}
