import type { Metadata } from 'next'
import './globals.css'
import { cormorant, inter, jetbrainsMono } from '@/lib/fonts'

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SERVER_URL || 'http://localhost:3000'),
  title: {
    template: '%s — CoffeeMaster | Ремонт кофемашин в Санкт-Петербурге',
    default: 'CoffeeMaster | Ремонт кофемашин премиум-класса в Санкт-Петербурге',
  },
  description:
    'Профессиональный ремонт и обслуживание кофемашин в Санкт-Петербурге. Бесплатная диагностика, гарантия 12 месяцев. Jura, De\'Longhi, Saeco, BORK, Bosch.',
  keywords: [
    'ремонт кофемашин СПб',
    'ремонт кофемашин Санкт-Петербург',
    'обслуживание кофемашин',
    'чистка кофемашины',
    'сервис кофемашин',
  ],
  openGraph: {
    type: 'website',
    locale: 'ru_RU',
    siteName: 'CoffeeMaster SPb',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang="ru"
      className={`${cormorant.variable} ${inter.variable} ${jetbrainsMono.variable}`}
    >
      <body>{children}</body>
    </html>
  )
}
