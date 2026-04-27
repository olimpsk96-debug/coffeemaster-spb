'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { MapPin, Train, Clock, Phone, Navigation } from 'lucide-react'
import { containerVariants, fadeUpVariants } from '@/lib/animations'

const PHONE_DISPLAY = '+7 (812) 425-67-89'
const PHONE_TEL = '+78124256789'
const ROUTE_URL =
  'https://yandex.ru/maps/?text=%D0%A1%D0%B0%D0%BD%D0%BA%D1%82-%D0%9F%D0%B5%D1%82%D0%B5%D1%80%D0%B1%D1%83%D1%80%D0%B3%20%D0%9D%D0%B5%D0%B2%D1%81%D0%BA%D0%B8%D0%B9%20%D0%BF%D1%80%D0%BE%D1%81%D0%BF%D0%B5%D0%BA%D1%82%20100'
const MAP_SRC =
  'https://yandex.ru/map-widget/v1/?ll=30.357752%2C59.931858&mode=search&sll=30.357752%2C59.931858&text=%D0%9D%D0%B5%D0%B2%D1%81%D0%BA%D0%B8%D0%B9%20%D0%BF%D1%80%D0%BE%D1%81%D0%BF%D0%B5%D0%BA%D1%82%2C%20100%20%D0%A1%D0%9F%D0%B1&z=16'

export function YandexMapSection() {
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
            Сервисный центр
          </motion.span>
          <motion.h2
            variants={fadeUpVariants}
            className="text-[#1A1410] mt-5 mb-4"
            style={{ fontFamily: 'var(--font-display)' }}
          >
            Наш офис в центре СПб
          </motion.h2>
          <motion.p variants={fadeUpVariants} className="text-[#4A4540] text-lg">
            Принимаем кофемашины на ремонт без записи в часы работы. Выезд по СПб бесплатно.
          </motion.p>
        </motion.div>

        <motion.div
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          variants={containerVariants}
          className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10 items-stretch"
        >
          <motion.div
            variants={fadeUpVariants}
            className="bg-[#FFF9F2] rounded-2xl p-8 lg:p-10 border border-[#F0E8DD] flex flex-col"
          >
            <ul className="space-y-6 flex-1">
              <li className="flex gap-4">
                <span className="w-11 h-11 rounded-xl bg-orange-50 text-[#E87722] flex items-center justify-center flex-shrink-0">
                  <MapPin size={20} />
                </span>
                <div>
                  <div className="text-[11px] tracking-[0.15em] uppercase text-[#8B847C] mb-1">
                    Адрес
                  </div>
                  <p className="text-[#1A1410] text-lg font-medium">
                    Невский пр., 100, Санкт-Петербург
                  </p>
                </div>
              </li>
              <li className="flex gap-4">
                <span className="w-11 h-11 rounded-xl bg-amber-50 text-[#C9A96E] flex items-center justify-center flex-shrink-0">
                  <Train size={20} />
                </span>
                <div>
                  <div className="text-[11px] tracking-[0.15em] uppercase text-[#8B847C] mb-1">
                    Метро
                  </div>
                  <p className="text-[#1A1410] text-lg font-medium">пл. Восстания — 5 минут пешком</p>
                </div>
              </li>
              <li className="flex gap-4">
                <span className="w-11 h-11 rounded-xl bg-green-50 text-green-600 flex items-center justify-center flex-shrink-0">
                  <Clock size={20} />
                </span>
                <div>
                  <div className="text-[11px] tracking-[0.15em] uppercase text-[#8B847C] mb-1">
                    Часы работы
                  </div>
                  <p className="text-[#1A1410] text-base">
                    Пн–Пт: 9:00 — 20:00
                    <br />
                    Сб–Вс: 10:00 — 18:00
                  </p>
                </div>
              </li>
              <li className="flex gap-4">
                <span className="w-11 h-11 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center flex-shrink-0">
                  <Phone size={20} />
                </span>
                <div>
                  <div className="text-[11px] tracking-[0.15em] uppercase text-[#8B847C] mb-1">
                    Телефон
                  </div>
                  <a
                    href={`tel:${PHONE_TEL}`}
                    className="text-[#1A1410] text-lg font-medium hover:text-[#E87722] transition-colors"
                  >
                    {PHONE_DISPLAY}
                  </a>
                </div>
              </li>
            </ul>

            <div className="flex flex-col sm:flex-row gap-3 mt-8 pt-6 border-t border-[#F0E8DD]">
              <a
                href={ROUTE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary inline-flex items-center justify-center gap-2"
              >
                <Navigation size={16} />
                Построить маршрут
              </a>
              <a
                href={`tel:${PHONE_TEL}`}
                className="btn-secondary inline-flex items-center justify-center gap-2"
              >
                <Phone size={16} />
                Позвонить
              </a>
            </div>
          </motion.div>

          <motion.div
            variants={fadeUpVariants}
            className="rounded-2xl overflow-hidden border border-[#F0E8DD] bg-[#F7F5F2] min-h-[450px]"
          >
            <iframe
              src={MAP_SRC}
              width="100%"
              height="450"
              frameBorder="0"
              allowFullScreen
              className="rounded-2xl block w-full h-full"
              title="Карта офиса CoffeeMaster на Невском пр., 100"
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
