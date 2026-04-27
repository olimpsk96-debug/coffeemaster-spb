import type { MetadataRoute } from 'next'

export const dynamic = 'force-static'

const SITE = process.env.NEXT_PUBLIC_SERVER_URL || 'https://coffeemaster.spb.ru'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/admin/', '/api/'],
      },
    ],
    sitemap: `${SITE}/sitemap.xml`,
  }
}
