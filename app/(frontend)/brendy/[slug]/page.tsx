import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import Image from 'next/image'
import {
  CheckCircle2, Phone, MessageCircle, ChevronRight, MapPin,
  Calendar, Award, Sparkles, ArrowRight, Coffee, Wrench,
} from 'lucide-react'
import { formatPrice } from '@/lib/utils'
import { brandsData, allBrands } from '@/lib/brands-data'
import { BreadcrumbJsonLd, FAQJsonLd } from '@/components/shared/JsonLd'
import { BrandTabsContent } from '@/components/sections/BrandTabsContent'

export function generateStaticParams() {
  return allBrands.map((b) => ({ slug: b.slug }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params
  const brand = brandsData[slug]
  if (!brand) return { title: 'Бренд не найден' }
  return {
    title: `Ремонт кофемашин ${brand.name} в Санкт-Петербурге — авторизованный сервис`,
    description: `${brand.shortDescription} Бесплатная диагностика, оригинальные запчасти, гарантия 12 месяцев. Все серии ${brand.name}.`,
    alternates: { canonical: `/brendy/${slug}` },
    openGraph: {
      title: `Ремонт кофемашин ${brand.name} в СПб`,
      description: brand.shortDescription,
      locale: 'ru_RU',
      type: 'website',
    },
  }
}

export default async function BrandPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const brand = brandsData[slug]

  if (!brand) notFound()

  const otherBrands = allBrands.filter(b => b.slug !== slug).slice(0, 6)

  return (
    <div className="pt-[72px]">
      <BreadcrumbJsonLd items={[
        { name: 'Главная', url: 'https://coffeemaster.spb.ru' },
        { name: 'Бренды', url: 'https://coffeemaster.spb.ru/brendy' },
        { name: brand.name, url: `https://coffeemaster.spb.ru/brendy/${slug}` },
      ]} />
      {brand.faq.length > 0 && <FAQJsonLd faq={brand.faq} />}

      {/* Hero — centered logo with glow */}
      <section
        className="relative overflow-hidden py-16 lg:py-24 border-b border-[rgba(26,20,16,0.06)]"
        style={{ background: `linear-gradient(135deg, ${brand.bg} 0%, #FFFFFF 70%)` }}
      >
        {/* Decorative blobs */}
        <div className="absolute -top-16 -right-16 w-80 h-80 rounded-full bg-[#E87722]/06 blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-1/3 w-48 h-48 rounded-full bg-[#C9A96E]/08 blur-3xl pointer-events-none" />

        <div className="container relative">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-sm text-[#8B847C] mb-10">
            <Link href="/" className="hover:text-[#E87722] transition-colors">Главная</Link>
            <ChevronRight size={14} />
            <Link href="/brendy" className="hover:text-[#E87722] transition-colors">Бренды</Link>
            <ChevronRight size={14} />
            <span className="text-[#1A1410]">{brand.name}</span>
          </nav>

          <div className="grid grid-cols-1 lg:grid-cols-[1fr,360px] gap-10 items-start">
            <div>
              {/* Logo + name — centered on mobile, inline on desktop */}
              <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6 mb-8">
                {/* Logo with glow */}
                <div className="relative shrink-0">
                  <div className="absolute inset-0 bg-[#E87722]/15 blur-2xl rounded-full scale-150" />
                  <div className="relative w-24 h-24 lg:w-28 lg:h-28 rounded-2xl bg-white border border-[rgba(26,20,16,0.08)] shadow-lg flex items-center justify-center overflow-hidden p-2">
                    <Image
                      src={`https://logo.clearbit.com/${brand.domain}`}
                      alt={brand.name}
                      width={88}
                      height={88}
                      className="object-contain w-full h-full"
                      unoptimized
                    />
                  </div>
                </div>

                <div className="text-center sm:text-left">
                  <span className="section-label mb-2 inline-block">Авторизованный сервис</span>
                  <h1 className="text-[#1A1410] mt-2" style={{ fontFamily: 'var(--font-display)' }}>
                    Ремонт {brand.name}
                  </h1>
                  <p className="text-[#8B847C] text-base mt-1">в Санкт-Петербурге</p>
                </div>
              </div>

              <p className="text-[#1A1410] text-xl lg:text-2xl font-medium leading-tight mb-5 max-w-2xl" style={{ fontFamily: 'var(--font-display)' }}>
                «{brand.tagline}»
              </p>
              <p className="text-[#4A4540] text-lg leading-relaxed mb-8 max-w-2xl">
                {brand.shortDescription}
              </p>

              {/* Brand meta badges */}
              <div className="flex flex-wrap gap-3">
                <div className="flex items-center gap-2 bg-white border border-[rgba(26,20,16,0.08)] rounded-xl px-4 py-2.5 shadow-sm">
                  <MapPin size={15} className="text-[#E87722]" />
                  <span className="text-sm font-medium text-[#1A1410]">{brand.country}</span>
                </div>
                <div className="flex items-center gap-2 bg-white border border-[rgba(26,20,16,0.08)] rounded-xl px-4 py-2.5 shadow-sm">
                  <Calendar size={15} className="text-[#E87722]" />
                  <span className="text-sm font-medium text-[#1A1410]">с {brand.founded} года</span>
                </div>
                <div className="flex items-center gap-2 bg-white border border-[rgba(26,20,16,0.08)] rounded-xl px-4 py-2.5 shadow-sm">
                  <Award size={15} className="text-[#E87722]" />
                  <span className="text-sm font-medium text-[#1A1410]">{brand.models.length} серий моделей</span>
                </div>
              </div>
            </div>

            {/* CTA card */}
            <div className="bg-white rounded-2xl p-7 border-2 border-[#E87722]/20 shadow-xl shadow-[#E87722]/05">
              <span className="section-label mb-4">Записаться</span>
              <h3 className="text-[#1A1410] text-xl mt-4 mb-3 font-semibold" style={{ fontFamily: 'var(--font-display)' }}>
                Сервис {brand.name} в СПб
              </h3>
              <p className="text-[#4A4540] text-sm mb-6 leading-relaxed">
                Бесплатная диагностика. Оригинальные запчасти. Гарантия 12 месяцев.
              </p>
              <div className="space-y-3">
                <a href="tel:+78121234567" className="btn-primary w-full">
                  <Phone size={16} /> +7 (812) 123-45-67
                </a>
                <a href="https://wa.me/79991234567" className="btn-secondary w-full">
                  <MessageCircle size={16} /> WhatsApp
                </a>
              </div>
              <p className="text-center text-[#8B847C] text-xs mt-4">
                Работаем 7 дней в неделю
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Tabbed content block */}
      <BrandTabsContent brand={brand} />

      {/* Common issues — card grid with badges */}
      <section className="py-16 lg:py-20 bg-white">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            {/* Issues */}
            <div>
              <span className="section-label mb-5">Типичные неисправности</span>
              <h2 className="text-[#1A1410] mt-5 mb-6" style={{ fontFamily: 'var(--font-display)' }}>
                Частые поломки {brand.name}
              </h2>
              <div className="grid md:grid-cols-1 gap-4">
                {brand.commonIssues.map((item, i) => (
                  <div
                    key={i}
                    className="bg-[#F7F5F2] rounded-2xl p-6 border border-[rgba(26,20,16,0.06)] hover:border-[#E87722] hover:bg-white hover:shadow-md transition-all group"
                  >
                    {/* Frequency badge */}
                    <div className="flex items-start justify-between gap-3 mb-3">
                      <span className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-semibold bg-[#E87722]/10 text-[#E87722] border border-[#E87722]/20">
                        {i === 0 ? 'Очень часто' : i === 1 ? 'Часто' : i === 2 ? 'Иногда' : 'Редко'}
                      </span>
                    </div>
                    <h3 className="text-[#1A1410] font-semibold mb-2 group-hover:text-[#E87722] transition-colors">
                      {item.issue}
                    </h3>
                    {item.description && (
                      <p className="text-sm text-[#8B847C] leading-relaxed mb-4">{item.description}</p>
                    )}
                    <div className="flex items-center justify-between pt-4 border-t border-[rgba(26,20,16,0.06)]">
                      <span className="text-[#E87722] font-bold tabular">от {formatPrice(item.priceFrom)}</span>
                      <span className="text-xs text-[#8B847C]">+ диагностика бесплатно</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Maintenance tips */}
            <div>
              <span className="section-label mb-5">Советы по уходу</span>
              <h2 className="text-[#1A1410] mt-5 mb-6" style={{ fontFamily: 'var(--font-display)' }}>
                Что важно знать владельцам
              </h2>
              <div className="space-y-4">
                {brand.maintenanceTips.map((tip, idx) => (
                  <div
                    key={idx}
                    className="bg-[#FFF9F2] rounded-xl p-5 border border-[rgba(232,119,34,0.12)] flex items-start gap-4 hover:border-[#E87722]/40 transition-colors"
                  >
                    <span className="w-8 h-8 rounded-full bg-[#E87722] text-white text-sm font-bold flex items-center justify-center shrink-0">
                      {idx + 1}
                    </span>
                    <p className="text-[#1A1410] text-sm leading-relaxed">{tip}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      {brand.faq.length > 0 && (
        <section className="py-16 lg:py-20 bg-[#F7F5F2]">
          <div className="container">
            <div className="max-w-3xl">
              <span className="section-label mb-5">Вопросы и ответы</span>
              <h2 className="text-[#1A1410] mt-5 mb-8" style={{ fontFamily: 'var(--font-display)' }}>
                Часто задаваемые вопросы про {brand.name}
              </h2>
              <div className="space-y-3">
                {brand.faq.map((item) => (
                  <details key={item.question} className="group bg-white rounded-2xl border border-[rgba(26,20,16,0.06)] overflow-hidden">
                    <summary className="flex items-center justify-between gap-4 px-7 py-5 cursor-pointer list-none select-none hover:bg-[#FFF9F2] transition-colors">
                      <span className="text-[#1A1410] font-semibold">{item.question}</span>
                      <span className="w-7 h-7 rounded-full border border-[rgba(26,20,16,0.12)] flex items-center justify-center shrink-0 group-open:bg-[#E87722] group-open:border-[#E87722] transition-colors">
                        <ChevronRight size={14} className="text-[#4A4540] group-open:text-white group-open:rotate-90 transition-transform" />
                      </span>
                    </summary>
                    <div className="px-7 pb-5">
                      <div className="h-px bg-[rgba(26,20,16,0.06)] mb-4" />
                      <p className="text-[#4A4540] leading-relaxed">{item.answer}</p>
                    </div>
                  </details>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Other brands */}
      <section className="py-16 bg-white">
        <div className="container">
          <h2 className="text-[#1A1410] text-2xl mb-8 font-semibold" style={{ fontFamily: 'var(--font-display)' }}>
            Другие бренды
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {otherBrands.map((b) => (
              <Link
                key={b.slug}
                href={`/brendy/${b.slug}`}
                className="bg-[#F7F5F2] rounded-xl p-5 border border-[rgba(26,20,16,0.06)] hover:border-[#E87722] hover:bg-white hover:shadow-sm transition-all group flex flex-col items-center text-center"
              >
                <div className="w-12 h-12 rounded-xl bg-white border border-[rgba(26,20,16,0.06)] flex items-center justify-center overflow-hidden mb-3 p-1">
                  <Image
                    src={`https://logo.clearbit.com/${b.domain}`}
                    alt={b.name}
                    width={40}
                    height={40}
                    className="object-contain w-9 h-9"
                    unoptimized
                  />
                </div>
                <span className="text-[#1A1410] text-sm font-semibold group-hover:text-[#E87722] transition-colors">
                  {b.name}
                </span>
              </Link>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link href="/brendy" className="btn-ghost">
              Все бренды <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-16 bg-[#1A1410]">
        <div className="container text-center">
          <p className="text-white/50 text-sm uppercase tracking-widest mb-4">Сервис {brand.name}</p>
          <h2 className="text-white text-3xl lg:text-4xl mb-4" style={{ fontFamily: 'var(--font-display)' }}>
            Запишитесь на бесплатную диагностику
          </h2>
          <p className="text-white/60 mb-8 max-w-lg mx-auto">
            Оригинальные запчасти {brand.name} на складе. Большинство ремонтов — в день обращения.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:+78121234567" className="btn-primary">
              <Phone size={16} /> +7 (812) 123-45-67
            </a>
            <a href="https://wa.me/79991234567" className="btn-secondary !bg-transparent !text-white !border-white/30 hover:!border-white">
              <MessageCircle size={16} /> WhatsApp
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
