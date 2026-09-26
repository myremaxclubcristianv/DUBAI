import { MetadataRoute } from 'next'
import { VERIFIED_PROPERTIES } from '@/lib/data/properties'
import { DUBAI_AREAS } from '@/lib/data/areas'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://dubai.cristianvaduva.com'
  const currentDate = new Date().toISOString().split('T')[0]

  const staticRoutes = [
    '',
    '/properties',
    '/projects',
    '/developers',
    '/areas',
    '/market',
    '/investment',
    '/residency',
    '/network',
    '/buying-guide',
    '/map',
    '/private-client',
    '/regulatory',
    '/privacy',
    '/terms',
    '/accessibility',
    '/lifestyle',
    '/lifestyle/aviation',
    '/lifestyle/cars',
    '/lifestyle/concierge',
    '/lifestyle/dining',
    '/lifestyle/hotels',
    '/lifestyle/safari',
    '/lifestyle/yachts',
    '/lifestyle/clubs',
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: currentDate,
    changeFrequency: 'weekly' as const,
    priority: route === '' ? 1.0 : route.startsWith('/properties') || route.startsWith('/investment') || route.startsWith('/residency') ? 0.9 : 0.8,
  }))

  const propertyRoutes = VERIFIED_PROPERTIES.map((prop) => ({
    url: `${baseUrl}/properties/${prop.id}`,
    lastModified: currentDate,
    changeFrequency: 'weekly' as const,
    priority: 0.85,
  }))

  const areaRoutes = DUBAI_AREAS.map((area) => ({
    url: `${baseUrl}/areas/${area.slug}`,
    lastModified: currentDate,
    changeFrequency: 'monthly' as const,
    priority: 0.75,
  }))

  return [...staticRoutes, ...propertyRoutes, ...areaRoutes]
}
