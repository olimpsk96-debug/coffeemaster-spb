'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { Phone, Search, Wrench, Award } from 'lucide-react'
import { containerVariants, fadeUpVariants } from '@/lib/animations'

const steps = [
  {
    number: '01',
    Icon: Phone,
    title: 'Заявка',
    description: 'Звоните или оставляете заявку онлайн. Отвечаем в течение 5 минут.',
  },
  {
    number: '02',
    Icon: Search,
    title: 'Диагностика',
    description: 'Бесплатно определяем причину неисправности и озвучиваем стоимость.',
  },
  {
    number: '03',
    Icon: Wrench,
    title: 'Ремонт',
    description: 'Выполняем работы в согласованные сроки. Только оригинальные запчасти.',
  },
  {
    number: '04',
    Icon: Award,
    title: 'Гарантия',
    description: 'Выдаём письменную гарантию 12 месяцев на работы и детали.',
  },
]

export function ProcessSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section ref={ref} className="py-20 lg:py-28 bg-white">
      <div className="container">
        <motion.div
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          variants={containerVariants}
          className="text-center mb-16 max-w-3xl mx-auto"
        >
          <motion.span variants={fadeUpVariants} className="section-label mb-5">
            Как мы работаем
          </motion.span>
          <motion.h2
            variants={fadeUpVariants}
            className="text-[#1A1410] mt-5 mb-4"
            style={{ fontFamily: 'var(--font-display)' }}
          >
            Просто и прозрачно
          </motion.h2>
          <motion.p variants={fadeUpVariants} className="text-[#4A4540] text-lg">
            4 шага от заявки до отремонтированной кофемашины с гарантией
          </motion.p>
        </motion.div>

        <motion.div
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          variants={containerVariants}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative"
        >
          {/* Connector dashed line */}
          <div className="hidden lg:block absolute top-12 left-[12.5%] right-[12.5%] h-px border-t-2 border-dashed border-[#E87722]/30" />

          {steps.map((step) => (
            <motion.div key={step.number} variants={fadeUpVariants} className="relative bg-white rounded-2xl border border-[rgba(26,20,16,0.08)] p-7 hover:border-[#E87722] hover:shadow-lg transition-all group">
              <div className="absolute -top-4 right-6 px-3 py-1 bg-[#E87722] text-white text-xs font-bold rounded-full tabular tracking-wider">
                ШАГ {step.number}
              </div>
              <div className="w-14 h-14 rounded-xl bg-[#FFF4EB] flex items-center justify-center mb-5 group-hover:bg-[#E87722] transition-colors">
                <step.Icon size={26} className="text-[#E87722] group-hover:text-white transition-colors" />
              </div>
              <h3 className="text-[#1A1410] text-xl mb-3 font-semibold">{step.title}</h3>
              <p className="text-[#4A4540] text-sm leading-relaxed">{step.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
