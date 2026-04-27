'use client'

import { motion, useInView, AnimatePresence } from 'framer-motion'
import { useRef, useState } from 'react'
import { ChevronDown, Phone } from 'lucide-react'
import { containerVariants, fadeUpVariants } from '@/lib/animations'
import { FAQJsonLd } from '@/components/shared/JsonLd'
import { cn } from '@/lib/utils'

const faq = [
  {
    question: 'Сколько стоит диагностика?',
    answer:
      'Диагностика кофемашины — бесплатно. Мы определим причину неисправности и согласуем с вами стоимость ремонта до начала работ. Если вы откажетесь от ремонта, никаких платежей не будет.',
  },
  {
    question: 'Сколько займёт ремонт?',
    answer:
      'Большинство ремонтов мы выполняем в день обращения — за 1–3 часа. Сложные случаи с заказом запчастей занимают до 3 рабочих дней. Точные сроки мастер сообщит после диагностики.',
  },
  {
    question: 'Какая гарантия на ремонт?',
    answer:
      'На все виды работ и установленные запчасти мы даём официальную гарантию 12 месяцев. Если та же неисправность проявится снова — устраним бесплатно.',
  },
  {
    question: 'Можно ли вызвать мастера на дом?',
    answer:
      'Да, мы работаем по всему Санкт-Петербургу и Ленинградской области. Выезд мастера в пределах КАД — бесплатно. За пределами — рассчитывается индивидуально.',
  },
  {
    question: 'Используете оригинальные запчасти?',
    answer:
      'Да, мы используем только оригинальные комплектующие от производителей или сертифицированные аналоги топового качества. Все запчасти имеют свою гарантию.',
  },
  {
    question: 'Работаете с юридическими лицами?',
    answer:
      'Конечно. Мы заключаем договоры на абонентское обслуживание с кафе, ресторанами и офисами. Работаем по безналичному расчёту, предоставляем все закрывающие документы.',
  },
  {
    question: 'Что если сервис не сможет починить кофемашину?',
    answer:
      'Если ремонт окажется экономически нецелесообразным или невозможным, мы честно сообщим об этом и предложим программу Trade-In — выгодный обмен старой машины на новую.',
  },
  {
    question: 'Нужна ли предоплата?',
    answer:
      'Нет. Вы оплачиваете ремонт только после его завершения и проверки работоспособности кофемашины. Предоплата может потребоваться только при заказе редких запчастей под заказ.',
  },
]

export function FAQSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  return (
    <section ref={ref} className="py-20 lg:py-28 bg-white">
      <FAQJsonLd faq={faq} />
      <div className="container">
        <motion.div
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          variants={containerVariants}
        >
          <motion.div
            variants={fadeUpVariants}
            className="text-center mb-14 max-w-3xl mx-auto"
          >
            <span className="section-label mb-5">Частые вопросы</span>
            <h2
              className="text-[#1A1410] mt-5"
              style={{ fontFamily: 'var(--font-display)' }}
            >
              Отвечаем на частые вопросы
            </h2>
          </motion.div>

          <motion.div
            variants={fadeUpVariants}
            className="mx-auto"
            style={{ maxWidth: '800px' }}
          >
            <div className="space-y-3">
              {faq.map((item, idx) => {
                const isOpen = openIndex === idx
                return (
                  <div
                    key={idx}
                    className={cn(
                      'rounded-xl border transition-colors',
                      isOpen
                        ? 'border-[#E87722] bg-[#FFF9F2]'
                        : 'border-[rgba(26,20,16,0.08)] bg-white hover:border-[rgba(232,119,34,0.4)]',
                    )}
                  >
                    <button
                      onClick={() => setOpenIndex(isOpen ? null : idx)}
                      className="w-full flex items-center justify-between gap-4 p-5 lg:p-6 text-left"
                      aria-expanded={isOpen}
                    >
                      <span className="text-base lg:text-lg font-medium text-[#1A1410]">
                        {item.question}
                      </span>
                      <ChevronDown
                        size={20}
                        className={cn(
                          'shrink-0 transition-transform duration-300',
                          isOpen ? 'rotate-180 text-[#E87722]' : 'text-[#8B847C]',
                        )}
                      />
                    </button>
                    <AnimatePresence initial={false}>
                      {isOpen && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                          className="overflow-hidden"
                        >
                          <p className="px-5 lg:px-6 pb-5 lg:pb-6 text-[#4A4540] leading-relaxed">
                            {item.answer}
                          </p>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                )
              })}
            </div>

            <motion.div
              variants={fadeUpVariants}
              className="mt-10 rounded-2xl border border-[rgba(26,20,16,0.08)] bg-gradient-to-br from-[#FFF9F2] to-white p-6 lg:p-8 flex flex-col sm:flex-row items-center gap-5 text-center sm:text-left"
            >
              <div className="w-14 h-14 rounded-full bg-[#E87722] flex items-center justify-center shrink-0">
                <Phone size={22} className="text-white" />
              </div>
              <div className="flex-1">
                <p className="text-[#1A1410] font-medium text-lg">
                  Не нашли ответ на свой вопрос?
                </p>
                <p className="text-[#8B847C] text-sm mt-1">
                  Позвоните, и мы расскажем подробнее
                </p>
              </div>
              <a
                href="tel:+78121234567"
                className="btn-primary whitespace-nowrap"
              >
                +7 (812) 123-45-67
              </a>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
