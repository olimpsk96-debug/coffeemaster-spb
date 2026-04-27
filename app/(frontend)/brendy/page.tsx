import type { Metadata } from 'next'
import BrendyClient from './BrendyClient'

export const metadata: Metadata = {
  title: 'Ремонт кофемашин по брендам в Санкт-Петербурге',
  description: 'Авторизованный сервис для Jura, De\'Longhi, Saeco, BORK, Bosch, Siemens и других брендов кофемашин в Санкт-Петербурге. Оригинальные запчасти.',
  openGraph: {
    title: 'Ремонт кофемашин по брендам в Санкт-Петербурге',
    description: 'Авторизованный сервис для 12 ведущих брендов кофемашин. Оригинальные запчасти. Гарантия 12 месяцев.',
    locale: 'ru_RU',
    type: 'website',
  },
}

export default function BrandsPage() {
  return <BrendyClient />
}
