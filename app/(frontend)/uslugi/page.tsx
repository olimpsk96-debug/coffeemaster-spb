import type { Metadata } from 'next'
import UslugiClient from './UslugiClient'

export const metadata: Metadata = {
  title: 'Услуги по ремонту кофемашин в Санкт-Петербурге',
  description: 'Все виды ремонта и обслуживания кофемашин в СПб: диагностика бесплатно, чистка от накипи, ремонт насоса, бойлера, кофемолки. Гарантия 12 месяцев.',
  openGraph: {
    title: 'Услуги по ремонту кофемашин в Санкт-Петербурге',
    description: 'Все виды ремонта и обслуживания кофемашин в СПб. Диагностика бесплатно. Гарантия 12 месяцев.',
    locale: 'ru_RU',
    type: 'website',
  },
}

export default function ServicesPage() {
  return <UslugiClient />
}
