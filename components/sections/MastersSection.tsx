'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import Image from 'next/image'
import { Star, Wrench } from 'lucide-react'
import { containerVariants, fadeUpVariants } from '@/lib/animations'

const masters = [
  {
    name: 'Андрей Соколов',
    role: 'Старший мастер',
    experience: 14,
    specialization: 'Jura, Saeco, профессиональные машины',
    rating: 4.9,
    repairs: 1840,
    photo: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=600&q=80',
  },
  {
    name: 'Михаил Воронов',
    role: 'Мастер-электронщик',
    experience: 9,
    specialization: 'Электроника, платы, прошивки',
    rating: 5.0,
    repairs: 1120,
    photo: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=600&q=80',
  },
  {
    name: 'Дмитрий Лебедев',
    role: 'Выездной мастер',
    experience: 7,
    specialization: "De'Longhi, Bosch, бытовые машины",
    rating: 4.9,
    repairs: 980,
    photo: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=600&q=80',
  },
  {
    name: 'Игорь Беляев',
    role: 'Мастер-механик',
    experience: 11,
    specialization: 'BORK, рожковые, кофемолки',
    rating: 5.0,
    repairs: 860,
    photo: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=600&q=80',
  },
]

export function MastersSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section ref={ref} className="py-20 lg:py-28 bg-white">
      <div className="container">
        <motion.div
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          variants={containerVariants}
          className="text-center mb-14 max-w-3xl mx-auto"
        >
          <motion.span variants={fadeUpVariants} className="section-label mb-5">
            Наши мастера
          </motion.span>
          <motion.h2
            variants={fadeUpVariants}
            className="text-[#1A1410] mt-5 mb-4"
            style={{ fontFamily: 'var(--font-display)' }}
          >
            Сертифицированные специалисты
          </motion.h2>
          <motion.p variants={fadeUpVariants} className="text-[#4A4540] text-lg">
            Все мастера прошли заводское обучение у производителей. Постоянно повышаем квалификацию.
          </motion.p>
        </motion.div>

        <motion.div
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          variants={containerVariants}
          className="grid grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {masters.map((m) => (
            <motion.div
              key={m.name}
              variants={fadeUpVariants}
              className="group bg-white rounded-2xl border border-[rgba(26,20,16,0.08)] overflow-hidden hover:border-[#E87722] hover:shadow-xl transition-all"
            >
              <div className="relative aspect-[4/5] bg-[#F7F5F2] overflow-hidden">
                <Image
                  src={m.photo}
                  alt={m.name}
                  fill
                  sizes="(max-width: 768px) 50vw, 25vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-3 right-3 bg-white/95 backdrop-blur rounded-full px-3 py-1 flex items-center gap-1 shadow">
                  <Star size={12} className="fill-[#E87722] text-[#E87722]" />
                  <span className="text-xs font-semibold text-[#1A1410]">{m.rating}</span>
                </div>
                <div className="absolute bottom-3 left-3 bg-[#1A1410]/85 backdrop-blur rounded-lg px-3 py-1.5 text-white text-xs font-medium flex items-center gap-1.5">
                  <Wrench size={11} className="text-[#E87722]" />
                  {m.repairs}+ ремонтов
                </div>
              </div>
              <div className="p-5">
                <p className="text-xs uppercase tracking-wider text-[#E87722] font-semibold mb-1">{m.role}</p>
                <h3 className="text-[#1A1410] text-lg font-semibold mb-2">{m.name}</h3>
                <p className="text-sm text-[#4A4540] mb-3 line-clamp-2 min-h-[2.5rem]">{m.specialization}</p>
                <div className="pt-3 border-t border-[rgba(26,20,16,0.06)] text-xs text-[#8B847C] flex items-center justify-between">
                  <span>опыт {m.experience} лет</span>
                  <span className="text-[#E87722] font-semibold">сертифицирован</span>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
