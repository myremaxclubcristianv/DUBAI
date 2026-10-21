import { MetadataRoute } from 'next'
import { VERIFIED_PROPERTIES } from '@/lib/data/properties'
import { DUBAI_AREAS } from '@/lib/data/areas'
import { VERIFIED_DEVELOPERS } from '@/lib/data/developers'
import { ROMANIA_PROPERTIES } from '@/lib/data/romania-properties'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://dubai.cristianvaduva.com'
  const currentDate = new Date().toISOString().split('T')[0]

  const staticRoutes = [
    '',
    '/properties',
    '/buy',
    '/rent',
    '/romania',
    '/business',
    '/tax',
    '/investment',
    '/investment/calculators',
    '/developments',
    '/developments/brabus-island',
    '/projects',
    '/developers',
    '/areas',
    '/market',
    '/residency',
    '/network',
    '/buying-guide',
    '/map',
    '/private-client',
    '/regulatory',
    '/legal',
    '/sources',
    '/methodology',
    '/investment-disclaimer',
    '/government',
    '/economy',
    '/infrastructure',
    '/insurance',
    '/companies',
    '/privacy',
    '/terms',
    '/accessibility',
    '/ghiduri',
    '/ghiduri/cum-cumperi-proprietate-dubai',
    '/ghiduri/costuri-achizitie-dubai',
    '/ghiduri/golden-visa-uae',
    '/ghiduri/impozitare-romania-dubai',
    '/ghiduri/dubai-vs-bucuresti',
    '/ghiduri/riscuri-off-plan-dubai',
    '/ghiduri/verificare-broker-anunt-dubai',
    '/raport-trimestrial',
    '/newsletter',
    '/vizionari',
    '/studii-de-caz',
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
    priority:
      route === ''
        ? 1.0
        : route.startsWith('/properties') ||
          route.startsWith('/ghiduri') ||
          route.startsWith('/raport-trimestrial') ||
          route.startsWith('/investment') ||
          route.startsWith('/residency') ||
          route.startsWith('/areas')
        ? 0.9
        : 0.8,
  }))

  const propertyRoutes = VERIFIED_PROPERTIES.map((prop) => ({
    url: `${baseUrl}/properties/${prop.id}`,
    lastModified: currentDate,
    changeFrequency: 'weekly' as const,
    priority: 0.85,
  }))

  const romaniaPropertyRoutes = ROMANIA_PROPERTIES.map((prop) => ({
    url: `${baseUrl}/romania/properties/${prop.id}`,
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

  const developerRoutes = VERIFIED_DEVELOPERS.map((dev) => ({
    url: `${baseUrl}/developers/${dev.slug}`,
    lastModified: currentDate,
    changeFrequency: 'monthly' as const,
    priority: 0.75,
  }))

  return [...staticRoutes, ...propertyRoutes, ...romaniaPropertyRoutes, ...areaRoutes, ...developerRoutes]
}
