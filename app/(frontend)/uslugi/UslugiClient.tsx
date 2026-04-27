'use client'

import { useState } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowRight, Clock, Phone } from 'lucide-react'
import { containerVariants, fadeUpVariants } from '@/lib/animations'
import { formatPrice } from '@/lib/utils'

type CategoryId = 'all' | 'repair' | 'maintenance' | 'cleaning' | 'onsite'

const categories: { id: CategoryId; label: string }[] = [
  { id: 'all', label: 'Все' },
  { id: 'repair', label: 'Ремонт' },
  { id: 'maintenance', label: 'Обслуживание' },
  { id: 'cleaning', label: 'Чистка' },
  { id: 'onsite', label: 'Выездной' },
]

const categoryLabels: Record<string, string> = {
  repair: 'Ремонт',
  maintenance: 'Обслуживание',
  cleaning: 'Чистка',
  onsite: 'Выездной',
}

const services = [
  { slug: 'remont-kofemelki', category: 'repair', title: 'Ремонт кофемолки', description: 'Замена жерновов, регулировка помола, ремонт двигателя.', priceFrom: 690, duration: '1-2 часа' },
  { slug: 'remont-gidrosistemy', category: 'repair', title: 'Ремонт гидросистемы', description: 'Устранение течей, замена помпы, трубок, уплотнителей.', priceFrom: 890, duration: '1-3 часа' },
  { slug: 'remont-kapuchinator', category: 'repair', title: 'Ремонт капучинатора', description: 'Чистка и ремонт системы приготовления молочных напитков.', priceFrom: 590, duration: '1-2 часа' },
  { slug: 'remont-elektroniki', category: 'repair', title: 'Ремонт электроники', description: 'Ремонт платы управления, дисплея, датчиков, устранение ошибок.', priceFrom: 760, duration: '1-2 дня' },
  { slug: 'zamena-boylera', category: 'repair', title: 'Замена бойлера / ТЭНа', description: 'Замена нагревательного элемента, термостата, восстановление нагрева.', priceFrom: 890, duration: '2-4 часа' },
  { slug: 'remont-zavark-bloka', category: 'repair', title: 'Ремонт заварочного блока', description: 'Чистка, смазка, замена уплотнителей заварочного узла.', priceFrom: 690, duration: '1-2 часа' },
  { slug: 'profilaktika-to', category: 'maintenance', title: 'Комплексное ТО', description: 'Полная профилактика: чистка, смазка, проверка всех систем.', priceFrom: 990, duration: '2-3 часа' },
  { slug: 'chistka-ot-nakipi', category: 'cleaning', title: 'Чистка от накипи', description: 'Профессиональная декальцинация бойлера и водного контура.', priceFrom: 790, duration: '1-2 часа' },
  { slug: 'chistka-ot-masel', category: 'cleaning', title: 'Чистка от кофейных масел', description: 'Устранение прогорклого вкуса и посторонних запахов.', priceFrom: 490, duration: '1 час' },
  { slug: 'diagnostika', category: 'repair', title: 'Диагностика', description: 'Полная компьютерная диагностика. Определение причины неисправности.', priceFrom: 0, duration: '30-60 мин' },
  { slug: 'vyezdnoy-remont', category: 'onsite', title: 'Выездной ремонт', description: 'Мастер приедет домой или в офис. По СПб и Ленобласти.', priceFrom: 0, duration: 'По договорённости' },
  { slug: 'srochniy-remont', category: 'repair', title: 'Срочный ремонт', description: 'Приоритетный ремонт в день обращения. Работаем в выходные.', priceFrom: 1490, duration: 'В день обращения' },
]

export default function UslugiClient() {
  const [activeFilter, setActiveFilter] = useState<CategoryId>('all')

  const filtered = activeFilter === 'all'
    ? services
    : services.filter((s) => s.category === activeFilter)

  return (
    <div className="pt-[72px]">
      {/* Hero */}
      <section className="bg-gradient-to-br from-[#FFF9F2] to-white py-16 lg:py-20">
        <div className="container">
          <span className="section-label mb-5">Все услуги</span>
          <h1
            className="text-[#1A1410] max-w-2xl mt-5 mb-5"
            style={{ fontFamily: 'var(--font-display)' }}
          >
            Ремонт и обслуживание кофемашин в СПб
          </h1>
          <p className="text-[#4A4540] text-lg max-w-2xl mb-8">
            Полный спектр услуг для кофемашин любых брендов. Бесплатная диагностика,
            гарантия 12 месяцев на все работы, выезд мастера по СПб бесплатно.
          </p>
          {/* Stat badges */}
          <div className="flex flex-wrap gap-3">
            {[
              '12 услуг',
              'Гарантия 12 мес',
              'Бесплатная диагностика',
            ].map((badge) => (
              <span
                key={badge}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-[rgba(26,20,16,0.10)] text-[#1A1410] text-sm font-semibold shadow-sm"
              >
                {badge}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Filter tabs */}
      <div className="sticky top-[72px] bg-white z-10 border-b border-[rgba(26,20,16,0.08)]">
        <div className="container">
          <div className="flex gap-1 overflow-x-auto py-3 scrollbar-none">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveFilter(cat.id)}
                className={`flex-shrink-0 px-5 py-2 rounded-lg text-sm font-semibold transition-all duration-200 ${
                  activeFilter === cat.id
                    ? 'bg-[#E87722] text-white'
                    : 'text-[#4A4540] hover:text-[#E87722] hover:bg-[#FFF4EB]'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Services grid */}
      <section className="py-16 lg:py-20 bg-[#F7F5F2]">
        <div className="container">
          <motion.div
            key={activeFilter}
            initial="hidden"
            animate="visible"
            variants={containerVariants}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {filtered.map((service) => (
              <motion.div key={service.slug} variants={fadeUpVariants}>
                <Link
                  href={`/uslugi/${service.slug}`}
                  className="flex flex-col bg-white rounded-2xl p-7 border border-[rgba(26,20,16,0.06)] hover:border-[#E87722] hover:shadow-lg transition-all duration-300 group h-full"
                >
                  {/* Category badge */}
                  <span className="inline-block self-start px-3 py-1 rounded-full bg-[#FFF4EB] text-[#E87722] text-xs font-semibold uppercase tracking-wider mb-4">
                    {categoryLabels[service.category] ?? service.category}
                  </span>

                  {/* Title */}
                  <h3 className="text-[#1A1410] text-xl mb-3 font-semibold group-hover:text-[#E87722] transition-colors">
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p className="text-[#4A4540] text-sm leading-relaxed mb-5 flex-1 min-h-[60px]">
                    {service.description}
                  </p>

                  {/* Duration badge */}
                  <div className="flex items-center gap-1.5 text-[#8B847C] text-xs mb-5">
                    <Clock size={13} className="flex-shrink-0" />
                    <span>{service.duration}</span>
                  </div>

                  {/* Price + CTA */}
                  <div className="flex items-center justify-between pt-4 border-t border-[rgba(26,20,16,0.06)]">
                    <span className="text-[#1A1410] font-semibold">
                      {service.priceFrom === 0
                        ? 'Бесплатно'
                        : `от ${formatPrice(service.priceFrom)}`}
                    </span>
                    <span className="text-[#E87722] flex items-center gap-1 text-sm font-medium group-hover:gap-2 transition-all">
                      Подробнее <ArrowRight size={14} />
                    </span>
                  </div>
                </Link>
              </motion.div>
            ))}
          </motion.div>

          {filtered.length === 0 && (
            <p className="text-center text-[#8B847C] py-20 text-lg">
              В этой категории услуг пока нет.
            </p>
          )}
        </div>
      </section>

      {/* Bottom CTA strip */}
      <section className="bg-[#1A1410] text-white py-12">
        <div className="container">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-8">
            <div>
              <p className="text-[#8B847C] text-sm uppercase tracking-widest font-semibold mb-2">
                Нужна помощь?
              </p>
              <h2
                className="text-white text-2xl lg:text-3xl font-medium mb-1"
                style={{ fontFamily: 'var(--font-display)' }}
              >
                Не нашли нужную услугу?
              </h2>
              <p className="text-[#8B847C] text-sm">
                Позвоните — расскажем, что можем сделать для вашей кофемашины.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 flex-shrink-0">
              <a
                href="tel:+78121234567"
                className="flex items-center gap-2 text-white text-xl font-semibold hover:text-[#E87722] transition-colors"
              >
                <Phone size={20} className="text-[#E87722]" />
                +7 (812) 123-45-67
              </a>
              <div className="flex gap-3">
                <a href="tel:+78121234567" className="btn-primary">
                  Позвонить
                </a>
                <a
                  href="https://wa.me/78121234567"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-secondary !bg-transparent !text-white !border-white/20 hover:!border-[#E87722] hover:!text-[#E87722]"
                >
                  WhatsApp
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
