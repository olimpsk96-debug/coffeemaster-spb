import Link from 'next/link'
import { Home, Wrench } from 'lucide-react'

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#FFF9F2] to-white pt-[72px]">
      <div className="container text-center py-20">
        <p
          className="text-[8rem] lg:text-[12rem] font-semibold leading-none mb-4 bg-gradient-to-r from-[#E87722] to-[#C9A96E] bg-clip-text text-transparent"
          style={{ fontFamily: 'var(--font-display)' }}
        >
          404
        </p>
        <div className="gold-line mx-auto mb-8" />
        <h1 className="text-[#1A1410] text-3xl mb-4" style={{ fontFamily: 'var(--font-display)' }}>
          Страница не найдена
        </h1>
        <p className="text-[#4A4540] mb-12 max-w-md mx-auto text-lg">
          Похоже, страница, которую вы ищете, переехала или больше не существует.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Link href="/" className="btn-primary">
            <Home size={16} /> На главную
          </Link>
          <Link href="/uslugi" className="btn-secondary">
            <Wrench size={16} /> Все услуги
          </Link>
        </div>
      </div>
    </div>
  )
}
