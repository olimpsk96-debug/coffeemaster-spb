import type { MetadataRoute } from 'next'

export const dynamic = 'force-static'

const SITE = process.env.NEXT_PUBLIC_SERVER_URL || 'https://coffeemaster.spb.ru'

const staticRoutes = [
  '',
  '/uslugi',
  '/brendy',
  '/prajs',
  '/o-kompanii',
  '/kontakty',
  '/blog',
  '/trade-in',
]

const services = [
  'remont-kofemelki',
  'remont-gidrosistemy',
  'remont-kapuchinator',
  'remont-elektroniki',
  'zamena-boylera',
  'remont-zavark-bloka',
  'profilaktika-to',
  'chistka-ot-nakipi',
  'chistka-ot-masel',
  'diagnostika',
  'vyezdnoy-remont',
  'srochniy-remont',
]

const brands = ['jura', 'delonghi', 'saeco', 'bork', 'bosch', 'siemens']

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date()
  return [
    ...staticRoutes.map((path) => ({
      url: `${SITE}${path}`,
      lastModified: now,
      changeFrequency: 'weekly' as const,
      priority: path === '' ? 1.0 : 0.8,
    })),
    ...services.map((slug) => ({
      url: `${SITE}/uslugi/${slug}`,
      lastModified: now,
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    })),
    ...brands.map((slug) => ({
      url: `${SITE}/brendy/${slug}`,
      lastModified: now,
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    })),
  ]
}
