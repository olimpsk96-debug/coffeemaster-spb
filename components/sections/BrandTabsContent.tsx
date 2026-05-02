'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { CheckCircle2, Coffee, Sparkles, Wrench } from 'lucide-react'
import { formatPrice } from '@/lib/utils'
import type { BrandData } from '@/lib/brands-data'

const TABS = [
  { id: 'about', label: 'О бренде' },
  { id: 'models', label: 'Модели' },
  { id: 'issues', label: 'Неисправности' },
  { id: 'prices', label: 'Цены' },
] as const

type TabId = typeof TABS[number]['id']

interface Props {
  brand: BrandData
}

export function BrandTabsContent({ brand }: Props) {
  const [active, setActive] = useState<TabId>('about')

  return (
    <section className="py-16 lg:py-20 bg-white">
      <div className="container">
        {/* Tab nav */}
        <div className="flex overflow-x-auto scrollbar-none gap-1 mb-10 bg-[#F7F5F2] rounded-2xl p-1.5">
          {TABS.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActive(tab.id)}
              className={`relative flex-1 min-w-max px-5 py-3 rounded-xl text-sm font-semibold transition-colors whitespace-nowrap ${
                active === tab.id
                  ? 'text-white'
                  : 'text-[#4A4540] hover:text-[#1A1410]'
              }`}
            >
              {active === tab.id && (
                <motion.span
                  layoutId="brand-tab-pill"
                  className="absolute inset-0 bg-[#E87722] rounded-xl"
                  transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                />
              )}
              <span className="relative z-10">{tab.label}</span>
            </button>
          ))}
        </div>

        {/* Tab content */}
        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
          >
            {/* О бренде */}
            {active === 'about' && (
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

                  <div className="space-y-5 text-[#4A4540] leading-relaxed text-lg">
                    {brand.overview.map((paragraph, idx) => (
                      <p key={idx}>{paragraph}</p>
                    ))}
                  </div>

                  <blockquote className="my-10 pl-6 border-l-4 border-[#E87722] py-2">
                    <p className="text-[#1A1410] text-xl lg:text-2xl italic leading-relaxed" style={{ fontFamily: 'var(--font-display)' }}>
                      «{brand.philosophy}»
                    </p>
                    <p className="text-[#8B847C] text-sm mt-3">— философия {brand.name}</p>
                  </blockquote>

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

                {/* Quick facts sidebar */}
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
            )}

            {/* Модели */}
            {active === 'models' && (
              <div>
                <div className="max-w-3xl mb-10">
                  <h2 className="text-[#1A1410] text-2xl lg:text-3xl font-semibold mb-3" style={{ fontFamily: 'var(--font-display)' }}>
                    Серии и модели {brand.name}
                  </h2>
                  <p className="text-[#4A4540] text-lg">
                    Мы обслуживаем все серии {brand.name} — от базовых моделей до флагманских автоматов.
                    Запчасти поставляются напрямую от производителя.
                  </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  {brand.models.map((model, idx) => (
                    <motion.article
                      key={idx}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.4, delay: idx * 0.06, ease: [0.16, 1, 0.3, 1] }}
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
                      <p className="text-[#4A4540] text-sm leading-relaxed mb-5">{model.description}</p>
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
                    </motion.article>
                  ))}
                </div>
              </div>
            )}

            {/* Неисправности */}
            {active === 'issues' && (
              <div>
                <h2 className="text-[#1A1410] text-2xl lg:text-3xl font-semibold mb-8" style={{ fontFamily: 'var(--font-display)' }}>
                  Частые поломки {brand.name}
                </h2>
                <div className="grid md:grid-cols-2 gap-4">
                  {brand.commonIssues.map((item, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.4, delay: i * 0.07, ease: [0.16, 1, 0.3, 1] }}
                      className="bg-[#F7F5F2] rounded-2xl p-6 border border-[rgba(26,20,16,0.06)] hover:border-[#E87722] hover:bg-white hover:shadow-md transition-all group"
                    >
                      <span className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-semibold bg-[#E87722]/10 text-[#E87722] border border-[#E87722]/20 mb-3">
                        {i === 0 ? 'Очень часто' : i === 1 ? 'Часто' : i === 2 ? 'Иногда' : 'Редко'}
                      </span>
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
                    </motion.div>
                  ))}
                </div>
              </div>
            )}

            {/* Цены */}
            {active === 'prices' && (
              <div>
                <h2 className="text-[#1A1410] text-2xl lg:text-3xl font-semibold mb-8" style={{ fontFamily: 'var(--font-display)' }}>
                  Прайс-лист на ремонт {brand.name}
                </h2>
                <div className="bg-white rounded-2xl border border-[rgba(26,20,16,0.06)] overflow-hidden">
                  {/* Table header */}
                  <div className="grid grid-cols-[1fr,auto,auto] gap-4 px-6 py-3 bg-[#F7F5F2] border-b border-[rgba(26,20,16,0.06)]">
                    <span className="text-xs font-semibold uppercase tracking-wider text-[#8B847C]">Услуга</span>
                    <span className="text-xs font-semibold uppercase tracking-wider text-[#8B847C] text-right">Стоимость</span>
                    <span className="text-xs font-semibold uppercase tracking-wider text-[#8B847C] text-right hidden sm:block">Срок</span>
                  </div>
                  {brand.commonIssues.map((item, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, x: -12 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: i * 0.05, ease: [0.16, 1, 0.3, 1] }}
                      className="grid grid-cols-[1fr,auto,auto] gap-4 items-center px-6 py-4 border-b border-[rgba(26,20,16,0.05)] last:border-0 hover:bg-[#FFF9F2] transition-colors"
                    >
                      <div>
                        <p className="text-[#1A1410] font-medium">{item.issue}</p>
                        {item.description && (
                          <p className="text-xs text-[#8B847C] mt-0.5">{item.description}</p>
                        )}
                      </div>
                      <span className="text-[#E87722] font-bold tabular text-right whitespace-nowrap">
                        от {formatPrice(item.priceFrom)}
                      </span>
                      <span className="text-[#8B847C] text-sm text-right hidden sm:block whitespace-nowrap">
                        1–3 часа
                      </span>
                    </motion.div>
                  ))}
                </div>
                <p className="text-[#8B847C] text-sm mt-5 text-center">
                  Точная стоимость определяется после бесплатной диагностики. Цены указаны без учёта стоимости запчастей.
                </p>
              </div>
            )}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  )
}
