'use client'

import { motion, useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import { ShieldCheck, Clock, Award, Coffee, Truck, BadgeCheck } from 'lucide-react'

const features = [
  {
    icon: ShieldCheck,
    title: 'Бесплатная диагностика',
    description: 'Определяем причину неисправности и озвучиваем стоимость ремонта без предоплаты.',
    tooltip: 'Никаких скрытых платежей — озвучим цену до начала ремонта.',
    color: 'bg-orange-50 text-[#E87722]',
    gradientFrom: 'from-[#E87722]/50',
    gradientTo: 'to-[#C9A96E]/30',
  },
  {
    icon: Clock,
    title: 'Ремонт за 2 часа',
    description: 'Большинство неисправностей устраняем в день обращения — вы не остаётесь без кофе.',
    tooltip: 'Срочный ремонт — без очереди, с наценкой 30% от стоимости.',
    color: 'bg-amber-50 text-[#C9A96E]',
    gradientFrom: 'from-[#C9A96E]/50',
    gradientTo: 'to-[#E87722]/20',
  },
  {
    icon: Award,
    title: 'Гарантия 12 месяцев',
    description: 'На все виды работ и установленные запчасти. Официальный договор и чек.',
    tooltip: 'Если поломка повторится — устраним бесплатно.',
    color: 'bg-green-50 text-green-600',
    gradientFrom: 'from-green-400/40',
    gradientTo: 'to-emerald-300/20',
  },
  {
    icon: Coffee,
    title: 'Подменная машина',
    description: 'На время ремонта предоставим кофемашину в долг — бесплатно, по запросу.',
    tooltip: 'Доступно для клиентов, чей ремонт займёт более одного дня.',
    color: 'bg-blue-50 text-blue-600',
    gradientFrom: 'from-blue-400/40',
    gradientTo: 'to-sky-300/20',
  },
  {
    icon: Truck,
    title: 'Выезд по СПб бесплатно',
    description: 'Мастер приедет в пределах КАД без доплаты. По области — по тарифу.',
    tooltip: 'Выезд за КАД — от 500 ₽ в зависимости от расстояния.',
    color: 'bg-purple-50 text-purple-600',
    gradientFrom: 'from-purple-400/40',
    gradientTo: 'to-violet-300/20',
  },
  {
    icon: BadgeCheck,
    title: 'Оригинальные запчасти',
    description: 'Только сертифицированные детали от производителей. Свой склад в СПб.',
    tooltip: 'Более 3 000 позиций на складе — нет ожидания доставки.',
    color: 'bg-rose-50 text-rose-600',
    gradientFrom: 'from-rose-400/40',
    gradientTo: 'to-pink-300/20',
  },
]

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.12, delayChildren: 0.2 },
  },
}

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] },
  },
}

const fadeUpVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
  },
}

export function WhyUsSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

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
            <motion.div
              key={i}
              variants={cardVariants}
              className={`relative p-[1px] rounded-2xl bg-gradient-to-br ${feature.gradientFrom} ${feature.gradientTo} transition-all duration-500`}
              style={{
                background: hoveredIndex === i
                  ? undefined
                  : 'transparent',
              }}
              onMouseEnter={() => setHoveredIndex(i)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              {/* Gradient border layer */}
              <div
                className={[
                  'absolute inset-0 rounded-2xl transition-opacity duration-500',
                  hoveredIndex === i ? 'opacity-100' : 'opacity-0',
                ].join(' ')}
                style={{
                  background: `linear-gradient(135deg, var(--tw-gradient-from, rgba(232,119,34,0.5)), var(--tw-gradient-to, rgba(201,169,110,0.3)))`,
                  padding: '1px',
                }}
              />

              <div className="card-service group relative bg-white rounded-2xl h-full overflow-hidden">
                {/* Background dots pattern on hover */}
                <div
                  className={[
                    'absolute inset-0 transition-opacity duration-500 pointer-events-none',
                    hoveredIndex === i ? 'opacity-100' : 'opacity-0',
                  ].join(' ')}
                  style={{
                    backgroundImage: 'radial-gradient(circle, rgba(232,119,34,0.06) 1px, transparent 1px)',
                    backgroundSize: '18px 18px',
                  }}
                />

                {/* Icon */}
                <div className={`w-14 h-14 rounded-xl ${feature.color} flex items-center justify-center mb-5 transition-transform duration-500 group-hover:rotate-12`}>
                  <feature.icon size={26} />
                </div>

                <h3 className="text-[#1A1410] text-xl mb-3 font-semibold">{feature.title}</h3>
                <p className="text-[#4A4540] leading-relaxed">{feature.description}</p>

                {/* Hover tooltip */}
                <div
                  className={[
                    'mt-4 pt-4 border-t border-[rgba(26,20,16,0.06)] text-xs text-[#8B847C] leading-relaxed transition-all duration-400 overflow-hidden',
                    hoveredIndex === i ? 'max-h-20 opacity-100' : 'max-h-0 opacity-0',
                  ].join(' ')}
                >
                  <span className="text-[#E87722] font-medium">Подробнее: </span>
                  {feature.tooltip}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
