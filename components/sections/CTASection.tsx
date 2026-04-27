'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { Phone, ArrowRight } from 'lucide-react'
import { containerVariants, fadeUpVariants } from '@/lib/animations'

interface CTASectionProps {
  onOpenForm: () => void
}

export function CTASection({ onOpenForm }: CTASectionProps) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section ref={ref} className="py-20 lg:py-28 bg-white">
      <div className="container">
        <motion.div
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          variants={containerVariants}
          className="relative bg-gradient-to-br from-[#1A1410] via-[#2A1F18] to-[#1A1410] rounded-3xl overflow-hidden p-10 md:p-16"
        >
          {/* Decorative elements */}
          <div className="absolute -top-32 -right-32 w-96 h-96 rounded-full bg-[#E87722] opacity-20 blur-3xl" />
          <div className="absolute -bottom-32 -left-32 w-96 h-96 rounded-full bg-[#C9A96E] opacity-15 blur-3xl" />
          <div className="absolute inset-0 bg-grid opacity-[0.04]" />

          <div className="relative z-10 max-w-3xl">
            <motion.span variants={fadeUpVariants} className="inline-block px-4 py-2 bg-[#E87722]/15 border border-[#E87722]/30 text-[#FFB87C] rounded-full text-xs font-semibold uppercase tracking-wider mb-6">
              Бесплатная диагностика
            </motion.span>
            <motion.h2 variants={fadeUpVariants} className="text-white mb-5" style={{ fontFamily: 'var(--font-display)' }}>
              Оставьте заявку —<br />
              <span className="bg-gradient-to-r from-[#E87722] to-[#C9A96E] bg-clip-text text-transparent">перезвоним за 5 минут</span>
            </motion.h2>
            <motion.p variants={fadeUpVariants} className="text-[#A8A29A] text-lg leading-relaxed mb-10 max-w-2xl">
              Определим неисправность, сообщим точную стоимость и сроки ремонта.
              Без предоплаты, с гарантией 12 месяцев.
            </motion.p>
            <motion.div variants={fadeUpVariants} className="flex flex-col sm:flex-row gap-3">
              <button onClick={onOpenForm} className="btn-primary">
                Записаться на диагностику <ArrowRight size={16} />
              </button>
              <a href="tel:+78121234567" className="inline-flex items-center justify-center gap-2 px-6 py-4 bg-white/10 border border-white/20 text-white rounded-lg font-semibold hover:bg-white/15 transition-all">
                <Phone size={16} /> +7 (812) 123-45-67
              </a>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
