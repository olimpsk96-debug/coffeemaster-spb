'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import Image from 'next/image'
import { Star, Quote } from 'lucide-react'
import { cn } from '@/lib/utils'
import { ReviewJsonLd } from '@/components/shared/JsonLd'
import { fadeUpVariants, containerVariants } from '@/lib/animations'

const testimonials = [
  {
    author: 'Александр М.',
    coffeeMachine: 'Jura E8',
    rating: 5,
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80',
    text: 'Сдал машину в понедельник утром — забрал во вторник вечером. Всё работает идеально. Мастер объяснил причину поломки, показал что заменили. Гарантия на руках.',
  },
  {
    author: 'Елена К.',
    coffeeMachine: "De'Longhi Magnifica",
    rating: 5,
    avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=200&q=80',
    text: 'Машина перестала молоть кофе. Приехал мастер, диагностика действительно бесплатно. Заменили жернова за 2 часа. Теперь кофе как в кофейне.',
  },
  {
    author: 'Дмитрий В.',
    coffeeMachine: 'Saeco Xelsis',
    rating: 5,
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80',
    text: 'Профессионализм на высоте. Машина текла снизу — оказался лопнувший патрубок. Починили быстро, цена адекватная. Уже рекомендовал коллегам.',
  },
  {
    author: 'Ирина П.',
    coffeeMachine: 'BORK C801',
    rating: 5,
    avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=200&q=80',
    text: 'Обратилась после того как другой сервис не смог починить. Здесь разобрались за день. Отдельное спасибо за подменную машину — без кофе я не могу!',
  },
  {
    author: 'Михаил С.',
    coffeeMachine: 'Siemens EQ.9',
    rating: 5,
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=200&q=80',
    text: 'Комплексное ТО делаю у них раз в год. Всегда качественно, всегда в срок. Машине уже 6 лет, а варит как новая. Лучший сервис в городе.',
  },
  {
    author: 'Наталья Р.',
    coffeeMachine: 'Bosch VeroBar',
    rating: 5,
    avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=200&q=80',
    text: 'Быстро, чисто, профессионально. Замена ТЭНа заняла один день. Цены честные, без скрытых доплат. Рекомендую всем владельцам кофемашин в СПб.',
  },
  {
    author: 'Андрей Л.',
    coffeeMachine: 'Miele CM7',
    rating: 5,
    avatar: 'https://images.unsplash.com/photo-1552058544-f2b08422138a?auto=format&fit=crop&w=200&q=80',
    text: 'Давно ищу такой сервис. Взяли машину на диагностику, всё объяснили по-человечески. Ремонт прошёл быстро, стоимость совпала с озвученной изначально.',
  },
  {
    author: 'Светлана Н.',
    coffeeMachine: 'Melitta Avanza',
    rating: 5,
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80',
    text: 'Привезла машину с ошибкой E7 — никто не брался. Здесь починили за два дня. Теперь работает как новая. Очень довольна!',
  },
]

const firstRow = testimonials.slice(0, 4)
const secondRow = testimonials.slice(4, 8)

function Stars({ rating }: { rating: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star key={i} size={14} className={i < rating ? 'fill-[#E87722] text-[#E87722]' : 'text-[#E5E0D9]'} />
      ))}
    </div>
  )
}

function TestimonialCard({ item }: { item: typeof testimonials[0] }) {
  return (
    <div className={cn(
      'relative w-[340px] shrink-0 mx-3 bg-white rounded-2xl p-6 border border-[rgba(26,20,16,0.07)]',
      'hover:border-[#E87722] hover:shadow-lg transition-all duration-300',
    )}>
      <Quote size={28} className="text-[#E87722]/15 absolute top-5 right-5" />
      <Stars rating={item.rating} />
      <p className="text-[#1A1410] leading-relaxed mt-4 mb-5 text-[15px] line-clamp-4">
        {item.text}
      </p>
      <div className="flex items-center gap-3 pt-4 border-t border-[rgba(26,20,16,0.06)]">
        <div className="relative w-10 h-10 rounded-full overflow-hidden bg-[#F7F5F2] shrink-0">
          <Image src={item.avatar} alt={item.author} fill sizes="40px" className="object-cover" />
        </div>
        <div>
          <p className="text-[#1A1410] font-semibold text-sm">{item.author}</p>
          <p className="text-[#8B847C] text-xs">{item.coffeeMachine}</p>
        </div>
      </div>
    </div>
  )
}

function InfiniteRow({ items, reverse = false }: { items: typeof testimonials; reverse?: boolean }) {
  return (
    <div
      className="flex overflow-hidden"
      style={{
        maskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)',
        WebkitMaskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)',
      }}
    >
      <div
        className="flex"
        style={{
          animationDuration: '40s',
          animationDirection: reverse ? 'reverse' : 'normal',
          animation: `scroll 40s ${reverse ? 'reverse' : 'normal'} linear infinite`,
        }}
      >
        {[...items, ...items, ...items, ...items].map((item, i) => (
          <TestimonialCard key={i} item={item} />
        ))}
      </div>
    </div>
  )
}

export function TestimonialsSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section ref={ref} className="py-20 lg:py-28 bg-[#F7F5F2] overflow-hidden">
      <ReviewJsonLd reviews={testimonials.map(t => ({ author: t.author, rating: t.rating, text: t.text, date: '2026-01-01' }))} />

      <div className="container mb-12">
        <motion.div
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          variants={containerVariants}
        >
          <motion.span variants={fadeUpVariants} className="section-label mb-5">
            Отзывы клиентов
          </motion.span>
          <motion.div variants={fadeUpVariants} className="flex flex-col md:flex-row md:items-end justify-between gap-6 mt-5">
            <div>
              <h2 className="text-[#1A1410]" style={{ fontFamily: 'var(--font-display)' }}>
                Нам доверяют 4 800+ клиентов
              </h2>
            </div>
            <div className="flex items-center gap-4">
              <div className="flex gap-0.5">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} size={20} className="fill-[#E87722] text-[#E87722]" />
                ))}
              </div>
              <div>
                <span className="text-[#1A1410] font-bold text-xl">4.9</span>
                <span className="text-[#8B847C] text-sm ml-2">— 847 отзывов</span>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>

      <div className="space-y-4">
        <InfiniteRow items={firstRow} />
        <InfiniteRow items={secondRow} reverse />
      </div>
    </section>
  )
}
