'use client'

import { motion, useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight, Wrench, Sparkles, Droplet, Cpu, Truck, Settings } from 'lucide-react'
import { containerVariants, fadeUpVariants } from '@/lib/animations'
import { formatPrice } from '@/lib/utils'

const services = [
  {
    slug: 'remont-kofemelki',
    title: 'Ремонт кофемолки',
    description: 'Замена жерновов, регулировка помола, ремонт двигателя.',
    priceFrom: 690,
    Icon: Settings,
    category: 'remont',
    image: 'https://images.unsplash.com/photo-1510017803434-a899398421b3?auto=format&fit=crop&w=600&q=80',
  },
  {
    slug: 'profilaktika-to',
    title: 'Профилактика и ТО',
    description: 'Комплексное обслуживание: чистка, смазка, проверка всех систем.',
    priceFrom: 990,
    Icon: Sparkles,
    category: 'profilaktika',
    image: 'https://images.unsplash.com/photo-1559056199-641a0ac8b55e?auto=format&fit=crop&w=600&q=80',
  },
  {
    slug: 'chistka-ot-nakipi',
    title: 'Чистка от накипи',
    description: 'Профессиональная декальцинация. Восстанавливаем давление и температуру.',
    priceFrom: 790,
    Icon: Droplet,
    category: 'profilaktika',
    image: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=600&q=80',
  },
  {
    slug: 'remont-gidrosistemy',
    title: 'Ремонт гидросистемы',
    description: 'Устраняем течи, меняем помпу, трубки и клапаны.',
    priceFrom: 890,
    Icon: Wrench,
    category: 'remont',
    image: 'https://images.unsplash.com/photo-1559496417-e7f25cb247f3?auto=format&fit=crop&w=600&q=80',
  },
  {
    slug: 'remont-elektroniki',
    title: 'Ремонт электроники',
    description: 'Ремонт платы управления, дисплея, датчиков. Устраняем ошибки на дисплее.',
    priceFrom: 760,
    Icon: Cpu,
    category: 'remont',
    image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=600&q=80',
  },
  {
    slug: 'vyezdnoy-remont',
    title: 'Выездной ремонт',
    description: 'Мастер приедет к вам домой или в офис. По СПб бесплатно.',
    priceFrom: 0,
    Icon: Truck,
    category: 'diagnostika',
    image: 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&w=600&q=80',
  },
]

const FILTERS = [
  { key: 'all', label: 'Все' },
  { key: 'remont', label: 'Ремонт' },
  { key: 'profilaktika', label: 'Профилактика' },
  { key: 'diagnostika', label: 'Диагностика' },
] as const

type FilterKey = typeof FILTERS[number]['key']

function SkeletonCard() {
  return (
    <div className="bg-white rounded-2xl overflow-hidden border border-[rgba(26,20,16,0.06)] h-full animate-pulse">
      <div className="aspect-[16/10] bg-[#E5E0D9]" />
      <div className="p-6 space-y-3">
        <div className="h-5 bg-[#E5E0D9] rounded w-2/3" />
        <div className="h-4 bg-[#E5E0D9] rounded w-full" />
        <div className="h-4 bg-[#E5E0D9] rounded w-4/5" />
        <div className="flex justify-between pt-4 border-t border-[rgba(26,20,16,0.06)]">
          <div className="h-4 bg-[#E5E0D9] rounded w-1/4" />
          <div className="h-4 bg-[#E5E0D9] rounded w-1/4" />
        </div>
      </div>
    </div>
  )
}

export function ServicesSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  const [activeFilter, setActiveFilter] = useState<FilterKey>('all')
  const [isFiltering, setIsFiltering] = useState(false)

  const filtered = activeFilter === 'all'
    ? services
    : services.filter((s) => s.category === activeFilter)

  function handleFilterChange(key: FilterKey) {
    if (key === activeFilter) return
    setIsFiltering(true)
    setTimeout(() => {
      setActiveFilter(key)
      setIsFiltering(false)
    }, 200)
  }

  return (
    <section ref={ref} className="py-20 lg:py-28 bg-[#F7F5F2]">
      <div className="container">
        <motion.div
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          variants={containerVariants}
          className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6"
        >
          <div className="max-w-2xl">
            <motion.span variants={fadeUpVariants} className="section-label mb-5">
              Наши услуги
            </motion.span>
            <motion.h2
              variants={fadeUpVariants}
              className="text-[#1A1410] mt-5"
              style={{ fontFamily: 'var(--font-display)' }}
            >
              Всё для вашей<br />кофемашины
            </motion.h2>
          </div>
          <motion.div variants={fadeUpVariants}>
            <Link href="/uslugi" className="btn-ghost">
              Все услуги <ArrowRight size={16} />
            </Link>
          </motion.div>
        </motion.div>

        {/* Category filter tabs */}
        <motion.div
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          variants={fadeUpVariants}
          className="flex flex-wrap gap-2 mb-10"
        >
          {FILTERS.map((f) => (
            <button
              key={f.key}
              onClick={() => handleFilterChange(f.key)}
              className={[
                'px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 border',
                activeFilter === f.key
                  ? 'bg-[#E87722] text-white border-[#E87722] shadow-md'
                  : 'bg-white text-[#4A4540] border-[rgba(26,20,16,0.12)] hover:border-[#E87722] hover:text-[#E87722]',
              ].join(' ')}
            >
              {f.label}
            </button>
          ))}
        </motion.div>

        <motion.div
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          variants={containerVariants}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {isFiltering
            ? Array.from({ length: filtered.length || 3 }).map((_, i) => (
                <motion.div key={`skel-${i}`} variants={fadeUpVariants}>
                  <SkeletonCard />
                </motion.div>
              ))
            : filtered.map((s, index) => (
                <motion.div
                  key={s.slug}
                  variants={fadeUpVariants}
                  layout
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                >
                  <Link
                    href={`/uslugi/${s.slug}`}
                    className="block bg-white rounded-2xl overflow-hidden border border-[rgba(26,20,16,0.06)] hover:border-[#E87722] hover:shadow-xl transition-all duration-300 group h-full"
                  >
                    {/* Image block */}
                    <div className="relative aspect-[16/10] overflow-hidden bg-[#F7F5F2]">
                      <Image
                        src={s.image}
                        alt={s.title}
                        fill
                        sizes="(max-width: 768px) 100vw, 33vw"
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                      />

                      {/* Gradient overlay on hover */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                      {/* Popular badge on first card */}
                      {index === 0 && (
                        <div className="absolute top-3 left-3 z-10 bg-[#E87722] text-white text-xs font-bold px-3 py-1 rounded-full shadow-md">
                          🔥 Популярное
                        </div>
                      )}

                      {/* Icon badge */}
                      <div className="absolute top-4 right-4 w-10 h-10 rounded-lg bg-white/95 backdrop-blur flex items-center justify-center shadow-md z-10">
                        <s.Icon size={18} className="text-[#E87722]" />
                      </div>

                      {/* Price tooltip — slides up on hover */}
                      <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-400 bg-white/95 backdrop-blur-sm z-10">
                        <span className="text-[#E87722] font-bold text-base">
                          {s.priceFrom === 0 ? 'Бесплатно' : `от ${formatPrice(s.priceFrom)} ₽`}
                        </span>
                      </div>
                    </div>

                    {/* Card body */}
                    <div className="p-6">
                      <h3 className="text-[#1A1410] text-xl mb-3 font-semibold group-hover:text-[#E87722] transition-colors">
                        {s.title}
                      </h3>
                      <p className="text-[#4A4540] text-sm leading-relaxed mb-5 min-h-[44px]">
                        {s.description}
                      </p>
                      <div className="flex items-center justify-between pt-4 border-t border-[rgba(26,20,16,0.06)]">
                        <span className="text-[#1A1410] font-semibold">
                          {s.priceFrom === 0 ? 'Бесплатно' : `от ${formatPrice(s.priceFrom)}`}
                        </span>
                        <span className="text-[#E87722] flex items-center gap-1 text-sm font-medium group-hover:gap-2 transition-all">
                          Подробнее <ArrowRight size={14} />
                        </span>
                      </div>
                    </div>
                  </Link>
                </motion.div>
              ))}
        </motion.div>
      </div>
    </section>
  )
}
