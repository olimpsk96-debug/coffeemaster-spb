import type { Metadata } from 'next'
import BlogClient from './BlogClient'

export const metadata: Metadata = {
  title: 'Блог о кофемашинах — советы по уходу и ремонту',
  description: 'Экспертные статьи о кофемашинах: как ухаживать, как починить, сравнение брендов, советы по выбору. Всё для владельцев кофемашин в Санкт-Петербурге.',
  openGraph: {
    title: 'Блог о кофемашинах — CoffeeMaster',
    description: 'Советы по уходу, ремонту и выбору кофемашин от экспертов сервисного центра.',
    locale: 'ru_RU',
    type: 'website',
  },
}

export default function BlogPage() {
  return <BlogClient />
}
