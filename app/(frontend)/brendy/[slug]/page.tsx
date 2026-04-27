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

      {/* Hero */}
      <section
        className="py-14 lg:py-20 border-b border-[rgba(26,20,16,0.06)]"
        style={{ background: `linear-gradient(135deg, ${brand.bg} 0%, #FFFFFF 70%)` }}
      >
        <div className="container">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-sm text-[#8B847C] mb-8">
            <Link href="/" className="hover:text-[#E87722] transition-colors">Главная</Link>
            <ChevronRight size={14} />
            <Link href="/brendy" className="hover:text-[#E87722] transition-colors">Бренды</Link>
            <ChevronRight size={14} />
            <span className="text-[#1A1410]">{brand.name}</span>
          </nav>

          <div className="grid grid-cols-1 lg:grid-cols-[1fr,360px] gap-10 items-start">
            <div>
              {/* Logo + name row */}
              <div className="flex items-center gap-5 mb-7">
                <div className="w-20 h-20 lg:w-24 lg:h-24 rounded-2xl bg-white border border-[rgba(26,20,16,0.08)] shadow-sm flex items-center justify-center overflow-hidden p-2">
                  <Image
                    src={`https://logo.clearbit.com/${brand.domain}`}
                    alt={brand.name}
                    width={80}
                    height={80}
                    className="object-contain w-16 h-16 lg:w-20 lg:h-20"
                    unoptimized
                  />
                </div>
                <div>
                  <span className="section-label mb-2 inline-block">Авторизованный сервис</span>
                  <h1 className="text-[#1A1410] mt-2" style={{ fontFamily: 'var(--font-display)' }}>
                    {brand.name}
                  </h1>
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
                <div className="flex items-center gap-2 bg-white border border-[rgba(26,20,16,0.08)] rounded-xl px-4 py-2.5">
                  <MapPin size={15} className="text-[#E87722]" />
                  <span className="text-sm font-medium text-[#1A1410]">{brand.country}</span>
                </div>
                <div className="flex items-center gap-2 bg-white border border-[rgba(26,20,16,0.08)] rounded-xl px-4 py-2.5">
                  <Calendar size={15} className="text-[#E87722]" />
                  <span className="text-sm font-medium text-[#1A1410]">с {brand.founded} года</span>
                </div>
                <div className="flex items-center gap-2 bg-white border border-[rgba(26,20,16,0.08)] rounded-xl px-4 py-2.5">
                  <Award size={15} className="text-[#E87722]" />
                  <span className="text-sm font-medium text-[#1A1410]">{brand.models.length} серий моделей</span>
                </div>
              </div>
            </div>

            {/* CTA card */}
            <div className="bg-white rounded-2xl p-7 border border-[rgba(26,20,16,0.08)] shadow-lg">
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

      {/* Overview Article */}
      <section className="py-16 lg:py-20 bg-white">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-[#FFF4EB] flex items-center justify-center">
                  <Coffee size={18} className="text-[#E87722]" />
                </div>
                <h2 className="text-[#1A1410] text-2xl lg:text-3xl font-semibold" style={{ fontFamily: 'var(--font-display)' }}>
                  О бренде {brand.name}
                </h2>
              </div>

              <div className="space-y-5 text-[#4A4540] leading-relaxed text-lg max-w-none">
                {brand.overview.map((paragraph, idx) => (
                  <p key={idx}>{paragraph}</p>
                ))}
              </div>

              {/* Philosophy quote */}
              <blockquote className="my-10 pl-6 border-l-4 border-[#E87722] py-2">
                <p className="text-[#1A1410] text-xl lg:text-2xl italic leading-relaxed" style={{ fontFamily: 'var(--font-display)' }}>
                  «{brand.philosophy}»
                </p>
                <p className="text-[#8B847C] text-sm mt-3">— философия {brand.name}</p>
              </blockquote>

              {/* Signature features */}
              <div className="bg-[#FFF9F2] rounded-2xl p-7 border border-[rgba(232,119,34,0.12)]">
                <div className="flex items-center gap-3 mb-5">
                  <Sparkles size={18} className="text-[#E87722]" />
                  <h3 className="text-[#1A1410] text-lg font-semibold">Знаковые технологии {brand.name}</h3>
                </div>
                <ul className="space-y-3">
                  {brand.signatureFeatures.map((feature) => (
                    <li key={feature} className="flex items-start gap-3">
                      <CheckCircle2 size={18} className="text-[#E87722] mt-0.5 shrink-0" />
                      <span className="text-[#1A1410]">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Sidebar quick facts */}
            <aside className="space-y-5">
              <div className="bg-[#1A1410] rounded-2xl p-7 text-white">
                <p className="text-white/50 text-xs uppercase tracking-widest mb-4">Краткое досье</p>
                <dl className="space-y-4">
                  <div className="flex items-center justify-between pb-3 border-b border-white/10">
                    <dt className="text-white/60 text-sm">Страна</dt>
                    <dd className="text-white font-medium">{brand.country}</dd>
                  </div>
                  <div className="flex items-center justify-between pb-3 border-b border-white/10">
                    <dt className="text-white/60 text-sm">Год основания</dt>
                    <dd className="text-white font-medium">{brand.founded}</dd>
                  </div>
                  <div className="flex items-center justify-between pb-3 border-b border-white/10">
                    <dt className="text-white/60 text-sm">Лет на рынке</dt>
                    <dd className="text-white font-medium">{new Date().getFullYear() - brand.founded}+</dd>
                  </div>
                  <div className="flex items-center justify-between pb-3 border-b border-white/10">
                    <dt className="text-white/60 text-sm">Серий моделей</dt>
                    <dd className="text-white font-medium">{brand.models.length}</dd>
                  </div>
                  <div className="flex items-center justify-between">
                    <dt className="text-white/60 text-sm">Сервис</dt>
                    <dd className="text-[#E87722] font-medium">Авторизован</dd>
                  </div>
                </dl>
              </div>

              <div className="bg-white rounded-2xl p-7 border border-[rgba(26,20,16,0.06)]">
                <Wrench size={28} className="text-[#E87722] mb-4" />
                <p className="text-[#1A1410] font-semibold mb-2" style={{ fontFamily: 'var(--font-display)' }}>
                  4 800+ кофемашин отремонтировано
                </p>
                <p className="text-[#4A4540] text-sm leading-relaxed">
                  С 2015 года. Из них более 600 машин {brand.name}.
                </p>
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* Models lineup */}
      <section className="py-16 lg:py-20 bg-[#F7F5F2]">
        <div className="container">
          <div className="max-w-3xl mb-12">
            <span className="section-label mb-5">Модельный ряд</span>
            <h2 className="text-[#1A1410] mt-5 mb-4" style={{ fontFamily: 'var(--font-display)' }}>
              Серии и модели {brand.name}
            </h2>
            <p className="text-[#4A4540] text-lg">
              Мы обслуживаем все серии {brand.name} — от базовых моделей до флагманских автоматов.
              Запчасти на склад поставляются напрямую от производителя.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {brand.models.map((model, idx) => (
              <article
                key={idx}
                className="bg-white rounded-2xl p-7 border border-[rgba(26,20,16,0.06)] hover:border-[#E87722] hover:shadow-md transition-all"
              >
                <div className="flex items-start justify-between mb-4 gap-4">
                  <div className="flex-1">
                    <span className="text-xs font-semibold uppercase tracking-wider text-[#E87722] mb-2 inline-block">
                      {model.type}
                    </span>
                    <h3 className="text-[#1A1410] text-xl font-semibold" style={{ fontFamily: 'var(--font-display)' }}>
                      {model.series}
                    </h3>
                  </div>
                  {model.yearRange && (
                    <span className="text-xs text-[#8B847C] bg-[#F7F5F2] rounded-md px-2.5 py-1 shrink-0">
                      {model.yearRange}
                    </span>
                  )}
                </div>

                <p className="text-[#4A4540] text-sm leading-relaxed mb-5">
                  {model.description}
                </p>

                <div className="pt-5 border-t border-[rgba(26,20,16,0.06)]">
                  <p className="text-[#8B847C] text-xs uppercase tracking-wider font-medium mb-3">
                    Популярные модели
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {model.models.map((m) => (
                      <span
                        key={m}
                        className="text-sm px-3 py-1.5 bg-[#FFF9F2] border border-[rgba(232,119,34,0.15)] rounded-lg text-[#1A1410] font-medium"
                      >
                        {m}
                      </span>
                    ))}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Common issues + tips */}
      <section className="py-16 lg:py-20 bg-white">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            {/* Issues */}
            <div>
              <span className="section-label mb-5">Типичные неисправности</span>
              <h2 className="text-[#1A1410] mt-5 mb-6" style={{ fontFamily: 'var(--font-display)' }}>
                Частые поломки {brand.name}
              </h2>
              <div className="bg-[#F7F5F2] rounded-2xl border border-[rgba(26,20,16,0.06)] overflow-hidden">
                {brand.commonIssues.map((item, i) => (
                  <div
                    key={i}
                    className="px-6 py-5 border-b border-[rgba(26,20,16,0.06)] last:border-0 hover:bg-white transition-colors"
                  >
                    <div className="flex items-start justify-between gap-4 mb-2">
                      <div className="flex items-start gap-3 flex-1">
                        <CheckCircle2 size={18} className="text-[#E87722] mt-0.5 shrink-0" />
                        <span className="text-[#1A1410] font-medium">{item.issue}</span>
                      </div>
                      <span className="text-[#E87722] font-bold shrink-0 tabular">
                        от {formatPrice(item.priceFrom)}
                      </span>
                    </div>
                    {item.description && (
                      <p className="text-[#8B847C] text-sm pl-8 leading-relaxed">{item.description}</p>
                    )}
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
                    className="bg-[#FFF9F2] rounded-xl p-5 border border-[rgba(232,119,34,0.12)] flex items-start gap-4"
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
