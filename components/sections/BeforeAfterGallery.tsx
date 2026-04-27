'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import Image from 'next/image'
import { containerVariants, fadeUpVariants } from '@/lib/animations'

type Case = {
  title: string
  brand: string
  problem: string
  solution: string
  price: string
  duration: string
  beforeImg: string
  afterImg: string
}

const cases: Case[] = [
  {
    title: 'Замена жерновов кофемолки',
    brand: 'Jura E8',
    problem: 'Износ жерновов, неравномерный помол, посторонний шум.',
    solution: 'Замена керамических жерновов, калибровка, чистка узла.',
    price: '~3 500 ₽',
    duration: '1 день',
    beforeImg: 'https://images.unsplash.com/photo-1610632380989-680fe40816c6',
    afterImg: 'https://images.unsplash.com/photo-1610632380989-680fe40816c6',
  },
  {
    title: 'Декальцинация после 2-х лет без обслуживания',
    brand: "De'Longhi Magnifica",
    problem: 'Накипь в гидросистеме, слабый напор, ошибка обслуживания.',
    solution: 'Профессиональная декальцинация, промывка контуров.',
    price: '~990 ₽',
    duration: '4 часа',
    beforeImg: 'https://images.unsplash.com/photo-1559496417-e7f25cb247f3',
    afterImg: 'https://images.unsplash.com/photo-1559496417-e7f25cb247f3',
  },
  {
    title: 'Замена помпы',
    brand: 'Saeco Xelsis',
    problem: 'Помпа не качает воду, прерывистая подача, гул.',
    solution: 'Установка новой помпы ULKA, проверка давления.',
    price: '~2 400 ₽',
    duration: '1 день',
    beforeImg: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085',
    afterImg: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085',
  },
  {
    title: 'Ремонт платы управления',
    brand: 'BORK C801',
    problem: 'Машина не включается, перегорел силовой блок платы.',
    solution: 'Замена силовых элементов, перепайка, тестирование.',
    price: '~3 800 ₽',
    duration: '2 дня',
    beforeImg: 'https://images.unsplash.com/photo-1442550528053-c431ecb55509',
    afterImg: 'https://images.unsplash.com/photo-1442550528053-c431ecb55509',
  },
]

export function BeforeAfterGallery() {
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
            Реальные кейсы
          </motion.span>
          <motion.h2
            variants={fadeUpVariants}
            className="text-[#1A1410] mt-5 mb-4"
            style={{ fontFamily: 'var(--font-display)' }}
          >
            Примеры наших работ
          </motion.h2>
          <motion.p variants={fadeUpVariants} className="text-[#4A4540] text-lg">
            Более 4 800 успешных ремонтов с 2015 года — каждый кейс задокументирован.
          </motion.p>
        </motion.div>

        <motion.div
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          variants={containerVariants}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {cases.map((c, i) => (
            <motion.article
              key={i}
              variants={fadeUpVariants}
              className="bg-[#FFF9F2] rounded-2xl overflow-hidden border border-[#F0E8DD]"
            >
              <div className="grid grid-cols-2 gap-1 bg-[#F0E8DD]">
                <div className="relative aspect-[4/3] overflow-hidden bg-[#1A1410]">
                  <Image
                    src={c.beforeImg}
                    alt={`${c.brand} до ремонта`}
                    fill
                    sizes="(max-width: 768px) 50vw, 25vw"
                    className="object-cover"
                    style={{ filter: 'grayscale(0.7) brightness(0.55) contrast(1.1)' }}
                  />
                  <span className="absolute top-3 left-3 px-2.5 py-1 text-[11px] tracking-[0.15em] uppercase font-medium bg-[#1A1410]/85 text-white rounded">
                    До
                  </span>
                </div>
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={c.afterImg}
                    alt={`${c.brand} после ремонта`}
                    fill
                    sizes="(max-width: 768px) 50vw, 25vw"
                    className="object-cover"
                    style={{ filter: 'saturate(1.1) brightness(1.05)' }}
                  />
                  <span className="absolute top-3 left-3 px-2.5 py-1 text-[11px] tracking-[0.15em] uppercase font-medium bg-[#E87722] text-white rounded">
                    После
                  </span>
                </div>
              </div>

              <div className="p-6 lg:p-8">
                <div className="text-[11px] tracking-[0.18em] uppercase text-[#8B847C] mb-2">
                  {c.brand}
                </div>
                <h3
                  className="text-[#1A1410] text-2xl mb-5 leading-tight"
                  style={{ fontFamily: 'var(--font-display)' }}
                >
                  {c.title}
                </h3>

                <div className="grid grid-cols-2 gap-4 pt-5 border-t border-[#F0E8DD]">
                  <div>
                    <div className="text-[11px] tracking-[0.15em] uppercase text-[#8B847C] mb-1.5">
                      Проблема
                    </div>
                    <p className="text-[#4A4540] text-sm leading-relaxed">{c.problem}</p>
                  </div>
                  <div>
                    <div className="text-[11px] tracking-[0.15em] uppercase text-[#8B847C] mb-1.5">
                      Решение
                    </div>
                    <p className="text-[#4A4540] text-sm leading-relaxed">{c.solution}</p>
                  </div>
                  <div>
                    <div className="text-[11px] tracking-[0.15em] uppercase text-[#8B847C] mb-1.5">
                      Стоимость
                    </div>
                    <p className="text-[#1A1410] text-base font-semibold">{c.price}</p>
                  </div>
                  <div>
                    <div className="text-[11px] tracking-[0.15em] uppercase text-[#8B847C] mb-1.5">
                      Срок
                    </div>
                    <p className="text-[#1A1410] text-base font-semibold">{c.duration}</p>
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
