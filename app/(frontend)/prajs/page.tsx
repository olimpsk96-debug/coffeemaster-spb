import type { Metadata } from 'next'
import PraisClient from './PraisClient'

export const metadata: Metadata = {
  title: 'Прайс-лист на ремонт кофемашин в Санкт-Петербурге',
  description: 'Цены на ремонт и обслуживание кофемашин в Санкт-Петербурге. Диагностика бесплатно. Прозрачный прайс без скрытых доплат. Гарантия 12 месяцев.',
  openGraph: {
    title: 'Прайс-лист на ремонт кофемашин в Санкт-Петербурге',
    description: 'Цены на ремонт и обслуживание кофемашин в Санкт-Петербурге. Диагностика бесплатно. Прозрачный прайс без скрытых доплат.',
    locale: 'ru_RU',
    type: 'website',
  },
}

export default function PriceListPage() {
  return <PraisClient />
}
