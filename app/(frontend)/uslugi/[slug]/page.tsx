import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import {
  Phone, MessageCircle, Clock, Shield,
  AlertTriangle, ChevronRight, Wrench, Star, ArrowRight,
} from 'lucide-react'
import { formatPrice } from '@/lib/utils'
import { servicesData, allServices } from '@/lib/services-data'
import { ServiceJsonLd, FAQJsonLd, BreadcrumbJsonLd } from '@/components/shared/JsonLd'
import { FaqItem, BenefitCard, SatisfactionBar } from '@/components/sections/ServicePageClient'

export function generateStaticParams() {
  return allServices.map((s) => ({ slug: s.slug }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params
  const service = servicesData[slug]
  if (!service) return { title: 'Услуга не найдена' }
  return {
    title: `${service.title} в СПб — CoffeeMaster`,
    description: service.description.slice(0, 158),
    alternates: { canonical: `/uslugi/${slug}` },
    openGraph: {
      title: `${service.title} в Санкт-Петербурге`,
      description: service.description.slice(0, 158),
      locale: 'ru_RU',
      type: 'website',
    },
  }
}

export default async function ServicePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const service = servicesData[slug]

  if (!service) notFound()

  const url = `https://coffeemaster.spb.ru/uslugi/${slug}`
  const relatedServices = allServices.filter(s => s.slug !== slug && s.categoryId === service.categoryId).slice(0, 3)

  return (
    <div className="pt-[72px]">
      <ServiceJsonLd name={service.title} description={service.description} priceFrom={service.priceFrom} url={url} />
      {service.faq.length > 0 && <FAQJsonLd faq={service.faq} />}
      <BreadcrumbJsonLd items={[
        { name: 'Главная', url: 'https://coffeemaster.spb.ru' },
        { name: 'Услуги', url: 'https://coffeemaster.spb.ru/uslugi' },
        { name: service.title, url },
      ]} />

      {/* Hero — gradient with decorative glow blobs */}
      <section className="relative bg-gradient-to-br from-[#FFF9F2] to-[#FFF4EB] overflow-hidden py-14 lg:py-20 border-b border-[rgba(26,20,16,0.06)]">
        {/* Decorative glow */}
        <div className="absolute -top-20 -right-20 w-96 h-96 rounded-full bg-[#E87722]/08 blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-1/4 w-64 h-64 rounded-full bg-[#C9A96E]/06 blur-3xl pointer-events-none" />

        <div className="container relative">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-sm text-[#8B847C] mb-8">
            <Link href="/" className="hover:text-[#E87722] transition-colors">Главная</Link>
            <ChevronRight size={14} />
            <Link href="/uslugi" className="hover:text-[#E87722] transition-colors">Услуги</Link>
            <ChevronRight size={14} />
            <span className="text-[#1A1410]">{service.title}</span>
          </nav>

          <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-8">
            <div className="max-w-2xl">
              {/* Badges row */}
              <div className="flex flex-wrap items-center gap-2 mb-5">
                <span className="section-label">{service.category}</span>
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#E87722] text-white text-xs font-semibold uppercase tracking-wide">
                  <Star size={11} className="fill-white" />
                  Популярная услуга
                </span>
              </div>

              <h1 className="text-[#1A1410] mb-5" style={{ fontFamily: 'var(--font-display)' }}>
                {service.title}
                <span className="block text-[#8B847C] font-normal text-lg mt-2">
                  Ремонт кофемашин в Санкт-Петербурге
                </span>
              </h1>
              <p className="text-[#4A4540] text-lg leading-relaxed mb-6">{service.description}</p>

              {/* Satisfaction progress bar (client component) */}
              <SatisfactionBar />

              {/* Stats row */}
              <div className="flex flex-wrap gap-3">
                <div className="flex items-center gap-2 bg-white border border-[rgba(26,20,16,0.08)] rounded-xl px-4 py-2.5 shadow-sm">
                  <Clock size={16} className="text-[#E87722]" />
                  <span className="text-sm font-medium text-[#1A1410]">{service.duration}</span>
                </div>
                <div className="flex items-center gap-2 bg-white border border-[rgba(26,20,16,0.08)] rounded-xl px-4 py-2.5 shadow-sm">
                  <Shield size={16} className="text-[#E87722]" />
                  <span className="text-sm font-medium text-[#1A1410]">Гарантия {service.warranty}</span>
                </div>
                <div className="flex items-center gap-2 bg-white border border-[rgba(26,20,16,0.08)] rounded-xl px-4 py-2.5 shadow-sm">
                  <Star size={16} className="text-[#E87722] fill-[#E87722]" />
                  <span className="text-sm font-medium text-[#1A1410]">4.9 / 5 — 847 отзывов</span>
                </div>
              </div>
            </div>

            {/* Price card */}
            <div className="lg:w-72 shrink-0">
              <div className="bg-white rounded-2xl p-7 border-2 border-[#E87722]/20 shadow-xl shadow-[#E87722]/05">
                <p className="text-[#8B847C] text-sm mb-1">Стоимость от</p>
                <p className="text-[#E87722] text-4xl font-bold tabular mb-1">
                  {service.priceFrom === 0 ? 'Бесплатно' : formatPrice(service.priceFrom)}
                </p>
                {service.priceFrom > 0 && (
                  <p className="text-[#8B847C] text-xs mb-6">+ стоимость запчастей</p>
                )}
                {service.priceFrom === 0 && (
                  <p className="text-[#8B847C] text-xs mb-6">стоимость ремонта — после диагностики</p>
                )}
                <div className="space-y-3">
                  <a href="tel:+78121234567" className="btn-primary w-full">
                    <Phone size={16} /> Позвонить
                  </a>
                  <a href="https://wa.me/79991234567" className="btn-secondary w-full">
                    <MessageCircle size={16} /> Написать в WhatsApp
                  </a>
                </div>
                <p className="text-center text-[#8B847C] text-xs mt-4">
                  Работаем 7 дней в неделю, 9:00–20:00
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main content */}
      <section className="py-16 lg:py-20 bg-[#F7F5F2]">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">

            {/* Left column */}
            <div className="lg:col-span-2 space-y-8">

              {/* Benefits — animated hover cards */}
              <div className="bg-white rounded-2xl p-8 border border-[rgba(26,20,16,0.06)]">
                <h2 className="text-[#1A1410] text-2xl mb-6 font-semibold" style={{ fontFamily: 'var(--font-display)' }}>
                  Почему выбирают нас
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {service.benefits.map((benefit, index) => (
                    <BenefitCard key={benefit} benefit={benefit} index={index} />
                  ))}
                </div>
              </div>

              {/* What's included */}
              <div className="bg-white rounded-2xl p-8 border border-[rgba(26,20,16,0.06)]">
                <h2 className="text-[#1A1410] text-2xl mb-6 font-semibold" style={{ fontFamily: 'var(--font-display)' }}>
                  Что входит в услугу
                </h2>
                <ul className="space-y-4">
                  {service.includes.map((item, idx) => (
                    <li key={item} className="flex items-start gap-4">
                      <span className="w-7 h-7 rounded-full bg-[#FFF4EB] text-[#E87722] text-sm font-bold flex items-center justify-center shrink-0 mt-0.5">
                        {idx + 1}
                      </span>
                      <span className="text-[#1A1410] leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Symptoms */}
              <div className="bg-[#FFFBF5] rounded-2xl p-8 border border-[rgba(232,119,34,0.15)]">
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-10 h-10 rounded-xl bg-[#FFF4EB] flex items-center justify-center">
                    <AlertTriangle size={20} className="text-[#E87722]" />
                  </div>
                  <h2 className="text-[#1A1410] text-xl font-semibold" style={{ fontFamily: 'var(--font-display)' }}>
                    Когда нужна эта услуга?
                  </h2>
                </div>
                <ul className="space-y-3">
                  {service.symptoms.map((symptom) => (
                    <li key={symptom} className="flex items-start gap-3">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#E87722] mt-2 shrink-0" />
                      <span className="text-[#4A4540] leading-relaxed">{symptom}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* FAQ — animated accordion */}
              <div>
                <h2 className="text-[#1A1410] text-2xl mb-6 font-semibold" style={{ fontFamily: 'var(--font-display)' }}>
                  Вопросы и ответы
                </h2>
                <div className="space-y-3">
                  {service.faq.map((item) => (
                    <FaqItem key={item.question} item={item} />
                  ))}
                </div>
              </div>
            </div>

            {/* Sidebar — sticky */}
            <div className="space-y-6">

              {/* CTA sticky card */}
              <div className="bg-white rounded-2xl p-7 border-2 border-[#E87722]/20 shadow-lg lg:sticky lg:top-24 self-start">
                <span className="section-label mb-4">Записаться</span>
                <h3 className="text-[#1A1410] text-xl mt-4 mb-2 font-semibold" style={{ fontFamily: 'var(--font-display)' }}>
                  Диагностика — бесплатно
                </h3>
                <p className="text-[#4A4540] text-sm mb-5 leading-relaxed">
                  Стоимость назовём до начала работ. Без скрытых доплат.
                </p>

                {/* Price highlight inside sidebar */}
                <div className="bg-[#FFF9F2] rounded-xl p-4 mb-5 border border-[rgba(232,119,34,0.12)]">
                  <p className="text-[#8B847C] text-xs mb-0.5">Стоимость от</p>
                  <p className="text-[#E87722] text-3xl font-bold tabular">
                    {service.priceFrom === 0 ? 'Бесплатно' : formatPrice(service.priceFrom)}
                  </p>
                </div>

                <div className="space-y-3 mb-6">
                  <a href="tel:+78121234567" className="btn-primary w-full text-sm">
                    <Phone size={15} /> +7 (812) 123-45-67
                  </a>
                  <a href="https://wa.me/79991234567" className="btn-secondary w-full text-sm">
                    <MessageCircle size={15} /> WhatsApp
                  </a>
                </div>
                <div className="pt-5 border-t border-[rgba(26,20,16,0.06)] space-y-3">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-[#8B847C]">Срок ремонта</span>
                    <span className="text-[#1A1410] font-medium">{service.duration}</span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-[#8B847C]">Гарантия</span>
                    <span className="text-[#1A1410] font-medium">{service.warranty}</span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-[#8B847C]">Стоимость от</span>
                    <span className="text-[#E87722] font-bold">
                      {service.priceFrom === 0 ? 'Бесплатно' : formatPrice(service.priceFrom)}
                    </span>
                  </div>
                </div>
              </div>

              {/* Compatible brands */}
              <div className="bg-white rounded-2xl p-7 border border-[rgba(26,20,16,0.06)]">
                <h3 className="text-[#1A1410] text-base font-semibold mb-4" style={{ fontFamily: 'var(--font-display)' }}>
                  Обслуживаемые бренды
                </h3>
                <div className="flex flex-wrap gap-2">
                  {service.brands.map((brand) => (
                    <span key={brand} className="px-3 py-1.5 bg-[#F7F5F2] rounded-lg text-sm text-[#4A4540] font-medium hover:bg-[#FFF4EB] hover:text-[#E87722] transition-colors cursor-default">
                      {brand}
                    </span>
                  ))}
                </div>
              </div>

              {/* Trust badge */}
              <div className="bg-[#1A1410] rounded-2xl p-7 text-white">
                <Wrench size={28} className="text-[#E87722] mb-4" />
                <p className="font-semibold mb-3" style={{ fontFamily: 'var(--font-display)' }}>
                  4 800+ отремонтированных кофемашин
                </p>
                <p className="text-white/60 text-sm leading-relaxed">
                  Работаем с 2015 года. Сертифицированные мастера, оригинальные запчасти.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related services */}
      {relatedServices.length > 0 && (
        <section className="py-16 bg-white">
          <div className="container">
            <h2 className="text-[#1A1410] text-2xl mb-8 font-semibold" style={{ fontFamily: 'var(--font-display)' }}>
              Похожие услуги
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              {relatedServices.map((s) => (
                <Link
                  key={s.slug}
                  href={`/uslugi/${s.slug}`}
                  className="bg-[#F7F5F2] rounded-2xl p-6 border border-[rgba(26,20,16,0.06)] hover:border-[#E87722] hover:bg-white hover:shadow-md transition-all group"
                >
                  <span className="text-xs font-semibold uppercase tracking-wider text-[#E87722] mb-3 block">{s.category}</span>
                  <h3 className="text-[#1A1410] font-semibold mb-2 group-hover:text-[#E87722] transition-colors">{s.title}</h3>
                  <p className="text-[#4A4540] text-sm leading-relaxed mb-4">{s.shortDescription}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-[#1A1410] font-semibold text-sm">
                      {s.priceFrom === 0 ? 'Бесплатно' : `от ${formatPrice(s.priceFrom)}`}
                    </span>
                    <span className="text-[#E87722] flex items-center gap-1 text-sm font-medium">
                      Подробнее <ArrowRight size={13} />
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Bottom CTA */}
      <section className="py-16 bg-[#1A1410]">
        <div className="container text-center">
          <p className="text-white/50 text-sm uppercase tracking-widest mb-4">Не откладывайте</p>
          <h2 className="text-white text-3xl lg:text-4xl mb-4" style={{ fontFamily: 'var(--font-display)' }}>
            Запишитесь прямо сейчас
          </h2>
          <p className="text-white/60 mb-8 max-w-lg mx-auto">
            Бесплатная диагностика. Стоимость ремонта — до начала работ. Гарантия 12 месяцев.
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
