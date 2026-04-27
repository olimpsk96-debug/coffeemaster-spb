'use client'

import { motion, useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import { Plus, Minus, AlertCircle } from 'lucide-react'
import { containerVariants, fadeUpVariants } from '@/lib/animations'
import { cn } from '@/lib/utils'
import { FAQJsonLd } from '@/components/shared/JsonLd'

const issues = [
  { title: 'Не включается', cause: 'Чаще всего — обрыв провода питания, сгорел предохранитель или сломался выключатель. Иногда — неисправность платы управления.', priceFrom: 760 },
  { title: 'Протекает снизу', cause: 'Износ уплотнителей, лопнувшая трубка или негерметичность бойлера. Также возможна трещина в поддоне.', priceFrom: 590 },
  { title: 'Не молет кофе', cause: 'Заклинило жернова, вышел из строя двигатель кофемолки или попал посторонний предмет в бункер.', priceFrom: 690 },
  { title: 'Не нагревает воду', cause: 'Вышел из строя ТЭН, термостат или образовалась толстая накипь, блокирующая нагрев.', priceFrom: 890 },
  { title: 'Ошибка на дисплее', cause: 'Сбой датчиков, неисправность платы управления или превышен ресурс заварочного блока.', priceFrom: 760 },
  { title: 'Не делает пену', cause: 'Засор капучинатора, неисправность парового клапана или износ молочного шланга.', priceFrom: 590 },
  { title: 'Слабый кофе', cause: 'Изношены жернова — нужна замена. Также причина может быть в неправильной настройке помола или давления.', priceFrom: 690 },
  { title: 'Шумит сильнее обычного', cause: 'Износ помпы, попадание постороннего предмета в кофемолку или износ привода заварочного блока.', priceFrom: 690 },
]

interface Props { onOpenForm: () => void }

export function CommonIssues({ onOpenForm }: Props) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })
  const [openIdx, setOpenIdx] = useState<number | null>(0)

  const faqData = issues.map((item) => ({
    question: item.title,
    answer: `${item.cause} Стоимость ремонта от ${item.priceFrom} ₽.`,
  }))

  return (
    <section ref={ref} className="py-20 lg:py-28 bg-[#F7F5F2]">
      <FAQJsonLd faq={faqData} />
      <div className="container">
        <motion.div initial="hidden" animate={isInView ? 'visible' : 'hidden'} variants={containerVariants}>
          <motion.div variants={fadeUpVariants} className="text-center mb-14 max-w-3xl mx-auto">
            <span className="section-label mb-5">Частые неисправности</span>
            <h2 className="text-[#1A1410] mt-5 mb-4" style={{ fontFamily: 'var(--font-display)' }}>
              Что может сломаться?
            </h2>
            <p className="text-[#4A4540] text-lg">
              Мы отремонтировали более 4 800 кофемашин. Самые частые неисправности — кликните, чтобы узнать причину и стоимость.
            </p>
          </motion.div>

          <motion.div variants={fadeUpVariants} className="grid grid-cols-1 lg:grid-cols-2 gap-3">
            {issues.map((item, i) => {
              const isOpen = openIdx === i
              return (
                <div
                  key={i}
                  className={cn(
                    'bg-white rounded-xl border transition-all overflow-hidden',
                    isOpen ? 'border-[#E87722] shadow-md' : 'border-[rgba(26,20,16,0.08)]',
                  )}
                >
                  <button onClick={() => setOpenIdx(isOpen ? null : i)} className="w-full flex items-center justify-between p-5 text-left group">
                    <span className="flex items-center gap-3">
                      <span className={cn('w-9 h-9 rounded-lg flex items-center justify-center transition-colors shrink-0', isOpen ? 'bg-[#E87722] text-white' : 'bg-[#FFF4EB] text-[#E87722]')}>
                        <AlertCircle size={18} />
                      </span>
                      <span className="font-semibold text-[#1A1410]">{item.title}</span>
                    </span>
                    <span className="text-[#E87722] shrink-0 ml-4">
                      {isOpen ? <Minus size={20} /> : <Plus size={20} />}
                    </span>
                  </button>
                  <div className={cn('overflow-hidden transition-all duration-400', isOpen ? 'max-h-60' : 'max-h-0')}>
                    <div className="px-5 pb-5 pt-1 pl-[68px]">
                      <p className="text-[#4A4540] leading-relaxed mb-4">{item.cause}</p>
                      <div className="flex items-center justify-between flex-wrap gap-3">
                        <span className="text-[#1A1410] font-semibold">
                          Ремонт от {item.priceFrom} ₽
                        </span>
                        <button onClick={onOpenForm} className="text-sm font-semibold text-[#E87722] hover:text-[#D26210] transition-colors">
                          Вызвать мастера →
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              )
            })}
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
