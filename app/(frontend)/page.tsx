import type { Metadata } from 'next'
import { HomePageClient } from '@/components/sections/HomePageClient'

export const metadata: Metadata = {
  title: { absolute: 'Ремонт кофемашин в Санкт-Петербурге — CoffeeMaster' },
  description: 'Профессиональный ремонт и обслуживание кофемашин в СПб. Бесплатная диагностика, гарантия 12 месяцев. Jura, De\'Longhi, Saeco, BORK, Bosch. Выезд бесплатно.',
  keywords: ['ремонт кофемашин спб', 'ремонт кофемашин санкт-петербург', 'сервис кофемашин', 'чистка кофемашин спб'],
  openGraph: {
    title: 'Ремонт кофемашин в Санкт-Петербурге — CoffeeMaster',
    description: 'Бесплатная диагностика. Гарантия 12 месяцев. 4800+ отремонтированных кофемашин.',
    locale: 'ru_RU',
    type: 'website',
  },
}

export default function HomePage() {
  return <HomePageClient />
}
