'use client'

import { motion } from 'framer-motion'
import { containerVariants, fadeUpVariants } from '@/lib/animations'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { ShieldCheck, Clock, Award, Coffee, Truck, BadgeCheck } from 'lucide-react'

const features = [
  {
    icon: ShieldCheck,
    title: 'Бесплатная диагностика',
    description: 'Определяем причину неисправности и озвучиваем стоимость ремонта без предоплаты.',
    color: 'bg-orange-50 text-[#E87722]',
  },
  {
    icon: Clock,
    title: 'Ремонт за 2 часа',
    description: 'Большинство неисправностей устраняем в день обращения — вы не остаётесь без кофе.',
    color: 'bg-amber-50 text-[#C9A96E]',
  },
  {
    icon: Award,
    title: 'Гарантия 12 месяцев',
    description: 'На все виды работ и установленные запчасти. Официальный договор и чек.',
    color: 'bg-green-50 text-green-600',
  },
  {
    icon: Coffee,
    title: 'Подменная машина',
    description: 'На время ремонта предоставим кофемашину в долг — бесплатно, по запросу.',
    color: 'bg-blue-50 text-blue-600',
  },
  {
    icon: Truck,
    title: 'Выезд по СПб бесплатно',
    description: 'Мастер приедет в пределах КАД без доплаты. По области — по тарифу.',
    color: 'bg-purple-50 text-purple-600',
  },
  {
    icon: BadgeCheck,
    title: 'Оригинальные запчасти',
    description: 'Только сертифицированные детали от производителей. Свой склад в СПб.',
    color: 'bg-rose-50 text-rose-600',
  },
]

export function WhyUsSection() {
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
            Почему выбирают нас
          </motion.span>
          <motion.h2
            variants={fadeUpVariants}
            className="text-[#1A1410] mt-5 mb-4"
            style={{ fontFamily: 'var(--font-display)' }}
          >
            Сервис, которому доверяют<br />тысячи клиентов
          </motion.h2>
          <motion.p variants={fadeUpVariants} className="text-[#4A4540] text-lg">
            6 причин выбрать CoffeeMaster для ремонта вашей кофемашины
          </motion.p>
        </motion.div>

        <motion.div
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          variants={containerVariants}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {features.map((feature, i) => (
            <motion.div key={i} variants={fadeUpVariants} className="card-service group">
              <div className={`w-14 h-14 rounded-xl ${feature.color} flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300`}>
                <feature.icon size={26} />
              </div>
              <h3 className="text-[#1A1410] text-xl mb-3 font-semibold">{feature.title}</h3>
              <p className="text-[#4A4540] leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
