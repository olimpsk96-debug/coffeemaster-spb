export function LocalBusinessJsonLd() {
  const data = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    '@id': 'https://coffeemaster.spb.ru/#organization',
    name: 'CoffeeMaster',
    description: 'Сервисный центр по ремонту и обслуживанию кофемашин в Санкт-Петербурге',
    url: 'https://coffeemaster.spb.ru',
    telephone: '+78121234567',
    email: 'info@coffeemaster.spb.ru',
    priceRange: '₽₽',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Невский проспект, 100',
      addressLocality: 'Санкт-Петербург',
      addressCountry: 'RU',
      postalCode: '191025',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 59.9343,
      longitude: 30.3351,
    },
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
        opens: '09:00',
        closes: '20:00',
      },
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Saturday', 'Sunday'],
        opens: '10:00',
        closes: '18:00',
      },
    ],
    areaServed: {
      '@type': 'City',
      name: 'Санкт-Петербург',
    },
    sameAs: [
      'https://t.me/coffeemaster_spb',
      'https://wa.me/79991234567',
      'https://vk.com/coffeemaster_spb',
    ],
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.9',
      reviewCount: '847',
      bestRating: '5',
      worstRating: '1',
    },
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  )
}

interface ServiceJsonLdProps {
  name: string
  description: string
  priceFrom: number
  url: string
}

export function ServiceJsonLd({ name, description, priceFrom, url }: ServiceJsonLdProps) {
  const data = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    serviceType: name,
    name,
    description,
    provider: { '@id': 'https://coffeemaster.spb.ru/#organization' },
    areaServed: { '@type': 'City', name: 'Санкт-Петербург' },
    url,
    offers: {
      '@type': 'Offer',
      price: priceFrom,
      priceCurrency: 'RUB',
      priceSpecification: {
        '@type': 'PriceSpecification',
        price: priceFrom,
        priceCurrency: 'RUB',
        valueAddedTaxIncluded: true,
      },
    },
  }
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  )
}

interface FAQJsonLdProps {
  faq: { question: string; answer: string }[]
}

export function FAQJsonLd({ faq }: FAQJsonLdProps) {
  const data = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faq.map((item) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.answer,
      },
    })),
  }
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  )
}

interface BreadcrumbJsonLdProps {
  items: { name: string; url: string }[]
}

export function BreadcrumbJsonLd({ items }: BreadcrumbJsonLdProps) {
  const data = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: item.name,
      item: item.url,
    })),
  }
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  )
}

interface ReviewJsonLdProps {
  reviews: { author: string; rating: number; text: string; date: string }[]
}
export function ReviewJsonLd({ reviews }: ReviewJsonLdProps) {
  const data = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    itemListElement: reviews.map((r, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      item: {
        '@type': 'Review',
        author: { '@type': 'Person', name: r.author },
        reviewRating: { '@type': 'Rating', ratingValue: r.rating, bestRating: 5 },
        reviewBody: r.text,
        datePublished: r.date,
        itemReviewed: {
          '@type': 'LocalBusiness',
          name: 'CoffeeMaster',
          url: 'https://coffeemaster.spb.ru',
        },
      },
    })),
  }
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />
}
