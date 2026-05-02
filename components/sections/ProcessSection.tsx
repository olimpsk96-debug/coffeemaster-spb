'use client'

import { motion, useInView, useMotionValue, useSpring, useTransform } from 'framer-motion'
import { useRef, useEffect, useState } from 'react'
import { Phone, Search, Wrench, Award, ArrowRight, Clock } from 'lucide-react'
import { containerVariants, fadeUpVariants } from '@/lib/animations'

const steps = [
  {
    number: '01',
    Icon: Phone,
    title: 'Заявка',
    description: 'Звоните или оставляете заявку онлайн. Отвечаем в течение 5 минут.',
    time: '5 минут',
  },
  {
    number: '02',
    Icon: Search,
    title: 'Диагностика',
    description: 'Бесплатно определяем причину неисправности и озвучиваем стоимость.',
    time: '15–30 минут',
  },
  {
    number: '03',
    Icon: Wrench,
    title: 'Ремонт',
    description: 'Выполняем работы в согласованные сроки. Только оригинальные запчасти.',
    time: '1–2 часа',
  },
  {
    number: '04',
    Icon: Award,
    title: 'Гарантия',
    description: 'Выдаём письменную гарантию 12 месяцев на работы и детали.',
    time: 'навсегда',
  },
]

/* Анимированный числовой счётчик */
function AnimatedNumber({ value, isInView }: { value: string; isInView: boolean }) {
  const numericPart = parseInt(value, 10)
  const motionVal = useMotionValue(0)
  const spring = useSpring(motionVal, { duration: 800, bounce: 0 })
  const display = useTransform(spring, (v) =>
    String(Math.round(v)).padStart(2, '0')
  )

  useEffect(() => {
    if (isInView) {
      motionVal.set(numericPart)
    }
  }, [isInView, numericPart, motionVal])

  return <motion.span>{display}</motion.span>
}

/* Animated connector line (desktop) */
function ConnectorLine({ isInView }: { isInView: boolean }) {
  return (
    <div className="hidden lg:block absolute top-12 left-[12.5%] right-[12.5%] h-px overflow-hidden">
      <div className="w-full h-full border-t border-dashed border-[#E87722]/20" />
      <motion.div
        className="absolute top-0 left-0 h-full bg-gradient-to-r from-[#E87722] to-[#C9A96E]"
        style={{ height: '1px' }}
        initial={{ width: '0%' }}
        animate={isInView ? { width: '100%' } : { width: '0%' }}
        transition={{ duration: 1.2, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
      />
    </div>
  )
}

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

        {/* DESKTOP: горизонтальный layout */}
        <motion.div
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          variants={containerVariants}
          className="hidden md:grid grid-cols-4 gap-6 relative"
        >
          <ConnectorLine isInView={isInView} />

          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              variants={fadeUpVariants}
              className="relative bg-white rounded-2xl border border-[rgba(26,20,16,0.08)] p-7 hover:border-[#E87722] hover:shadow-lg transition-all group"
            >
              <div className="absolute -top-4 right-6 px-3 py-1 bg-[#E87722] text-white text-xs font-bold rounded-full tabular tracking-wider">
                ШАГ{' '}
                <AnimatedNumber value={step.number} isInView={isInView} />
              </div>

              <div className="w-14 h-14 rounded-xl bg-[#FFF4EB] flex items-center justify-center mb-5 group-hover:bg-[#E87722] transition-colors">
                <step.Icon size={26} className="text-[#E87722] group-hover:text-white transition-colors" />
              </div>

              <h3 className="text-[#1A1410] text-xl mb-2 font-semibold">{step.title}</h3>

              {/* Estimated time */}
              <div className="flex items-center gap-1.5 mb-3">
                <Clock size={12} className="text-[#E87722]" />
                <span className="text-[12px] text-[#E87722] font-medium tracking-wide">{step.time}</span>
              </div>

              <p className="text-[#4A4540] text-sm leading-relaxed">{step.description}</p>

              {/* Arrow between steps (не на последнем) */}
              {index < steps.length - 1 && (
                <ArrowRight
                  size={16}
                  className="absolute -right-3 top-12 text-[#E87722]/40 hidden lg:block z-10"
                />
              )}
            </motion.div>
          ))}
        </motion.div>

        {/* MOBILE: вертикальный timeline */}
        <motion.div
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          variants={containerVariants}
          className="flex md:hidden flex-col relative"
        >
          {/* Вертикальная линия */}
          <div className="absolute left-6 top-0 bottom-0 w-px overflow-hidden">
            <div className="w-full h-full bg-[#E87722]/15" />
            <motion.div
              className="absolute top-0 left-0 w-full bg-gradient-to-b from-[#E87722] to-[#C9A96E]"
              initial={{ height: '0%' }}
              animate={isInView ? { height: '100%' } : { height: '0%' }}
              transition={{ duration: 1.4, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            />
          </div>

          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              variants={fadeUpVariants}
              className="relative flex gap-6 pb-8 last:pb-0"
            >
              {/* Animated dot */}
              <div className="relative z-10 flex-shrink-0 w-12 flex flex-col items-center">
                <motion.div
                  className="w-4 h-4 rounded-full bg-[#E87722] border-2 border-white shadow-md mt-7"
                  initial={{ scale: 0 }}
                  animate={isInView ? { scale: 1 } : { scale: 0 }}
                  transition={{ delay: 0.4 + index * 0.15, duration: 0.3, type: 'spring', bounce: 0.4 }}
                />
              </div>

              {/* Card */}
              <div className="flex-1 bg-white rounded-2xl border border-[rgba(26,20,16,0.08)] p-5 hover:border-[#E87722] hover:shadow-md transition-all group">
                <div className="flex items-start justify-between mb-4">
                  <div className="w-11 h-11 rounded-xl bg-[#FFF4EB] flex items-center justify-center group-hover:bg-[#E87722] transition-colors">
                    <step.Icon size={22} className="text-[#E87722] group-hover:text-white transition-colors" />
                  </div>
                  <span className="px-2.5 py-0.5 bg-[#E87722] text-white text-[11px] font-bold rounded-full tracking-wider">
                    ШАГ <AnimatedNumber value={step.number} isInView={isInView} />
                  </span>
                </div>

                <h3 className="text-[#1A1410] text-lg mb-1.5 font-semibold">{step.title}</h3>

                <div className="flex items-center gap-1.5 mb-2">
                  <Clock size={11} className="text-[#E87722]" />
                  <span className="text-[11px] text-[#E87722] font-medium tracking-wide">{step.time}</span>
                </div>

                <p className="text-[#4A4540] text-sm leading-relaxed">{step.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
