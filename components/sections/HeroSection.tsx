'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { ShieldCheck, Clock, Star, ArrowRight, CheckCircle2, ChevronDown } from 'lucide-react'
import { fadeUpVariants, containerVariants } from '@/lib/animations'

const trustBadges = [
  { Icon: ShieldCheck, text: 'Гарантия 12 мес' },
  { Icon: Clock, text: 'Ремонт за 2 часа' },
  { Icon: Star, text: '4.9 / 5 на Я.Картах' },
]

const features = [
  'Бесплатная диагностика',
  'Выезд мастера в день обращения',
  'Оригинальные запчасти',
]

interface HeroSectionProps {
  onOpenForm: () => void
}

export function HeroSection({ onOpenForm }: HeroSectionProps) {
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <section
      className="relative pt-[72px] overflow-hidden"
      style={{
        background: 'linear-gradient(-45deg, #fff9f2, #fff4eb, #fdf6ee, #fffbf7)',
        backgroundSize: '400% 400%',
        animation: 'gradient-shift 8s ease infinite',
      }}
    >
      {/* Animated gradient keyframes injected via style tag */}
      <style>{`
        @keyframes gradient-shift {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
        @keyframes float-delayed {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        .animate-float-delayed {
          animation: float-delayed 6s ease-in-out 1s infinite;
        }
      `}</style>

      {/* Decorative blobs — with parallax */}
      <div
        className="absolute -top-40 -right-40 w-[600px] h-[600px] rounded-full bg-[#E87722] opacity-[0.08] blur-3xl pointer-events-none"
        style={{ transform: `translateY(${scrollY * 0.15}px)` }}
      />
      <div
        className="absolute top-1/3 -left-32 w-[400px] h-[400px] rounded-full bg-[#C9A96E] opacity-[0.12] blur-3xl pointer-events-none"
        style={{ transform: `translateY(${scrollY * 0.15}px)` }}
      />
      <div className="absolute inset-0 bg-dots opacity-50 pointer-events-none" />

      <div className="container relative z-10 py-16 lg:py-24">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left — content */}
          <motion.div variants={containerVariants} initial="hidden" animate="visible">
            <motion.div
              variants={fadeUpVariants}
              className="inline-flex items-center gap-2 mb-6 bg-white shadow-sm border border-[rgba(26,20,16,0.06)] px-4 py-2 rounded-full"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500" />
              </span>
              <span className="text-[13px] font-medium text-[#1A1410]">
                Уже <strong>12</strong> заявок сегодня
              </span>
            </motion.div>

            <motion.h1
              variants={fadeUpVariants}
              className="text-[#1A1410] mb-6"
              style={{ fontFamily: 'var(--font-display)' }}
            >
              Ремонт кофемашин<br />
              <span className="bg-gradient-to-r from-[#E87722] to-[#C9A96E] bg-clip-text text-transparent">
                в Санкт-Петербурге
              </span>
            </motion.h1>

            <motion.p variants={fadeUpVariants} className="text-[#4A4540] text-lg leading-relaxed mb-8 max-w-xl">
              Бесплатная диагностика, ремонт за 2 часа, гарантия 12 месяцев.
              Работаем со всеми брендами: Jura, De&apos;Longhi, Saeco, BORK, Bosch и другими.
            </motion.p>

            {/* Features list */}
            <motion.ul variants={fadeUpVariants} className="space-y-3 mb-10">
              {features.map((f) => (
                <li key={f} className="flex items-center gap-3 text-[#1A1410]">
                  <CheckCircle2 size={20} className="text-[#E87722] shrink-0" />
                  <span className="font-medium">{f}</span>
                </li>
              ))}
            </motion.ul>

            <motion.div variants={fadeUpVariants} className="flex flex-col sm:flex-row gap-3 mb-6">
              {/* Animated pulsing CTA button */}
              <button onClick={onOpenForm} className="btn-primary relative overflow-hidden">
                <span className="absolute inset-0 rounded-lg animate-ping bg-[#E87722] opacity-20" />
                Вызвать мастера <ArrowRight size={16} />
              </button>
              <a href="tel:+78121234567" className="btn-secondary">
                +7 (812) 123-45-67
              </a>
            </motion.div>

            {/* Service area badges */}
            <motion.div variants={fadeUpVariants} className="flex flex-wrap gap-2 mb-10">
              {['Центральный', 'Васильевский о-в', 'Петроградский', 'Выборгский', 'Московский', 'Приморский', 'Калининский', 'Невский'].map(d => (
                <span key={d} className="text-xs text-[#8B847C] bg-[#F7F5F2] px-2 py-1 rounded-full border border-[rgba(26,20,16,0.06)]">{d}</span>
              ))}
            </motion.div>

            {/* Trust badges */}
            <motion.div variants={fadeUpVariants} className="flex flex-wrap gap-x-6 gap-y-3 pt-8 border-t border-[rgba(26,20,16,0.08)]">
              {trustBadges.map((b) => (
                <div key={b.text} className="flex items-center gap-2">
                  <b.Icon size={18} className="text-[#E87722]" />
                  <span className="text-sm font-medium text-[#1A1410]">{b.text}</span>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right — image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="relative"
          >
            <div className="relative aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl accent-glow">
              <Image
                src="https://images.unsplash.com/photo-1610632380989-680fe40816c6?auto=format&fit=crop&w=900&q=80"
                alt="Профессиональный ремонт кофемашины"
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />

              {/* Gradient overlay for floating cards readability */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />

              {/* Floating card — top (animate-float) */}
              <div className="absolute top-6 left-6 bg-white/95 backdrop-blur-md rounded-xl p-4 shadow-lg flex items-center gap-3 animate-float">
                <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center">
                  <CheckCircle2 size={20} className="text-green-600" />
                </div>
                <div>
                  <p className="text-[13px] font-semibold text-[#1A1410]">Диагностика</p>
                  <p className="text-[11px] text-[#8B847C]">бесплатно</p>
                </div>
              </div>

              {/* Floating card — bottom (animate-float-delayed) */}
              <div className="absolute bottom-6 right-6 bg-white/95 backdrop-blur-md rounded-xl p-4 shadow-lg animate-float-delayed">
                <div className="flex items-center gap-1 mb-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={14} className="fill-[#E87722] text-[#E87722]" />
                  ))}
                </div>
                <p className="text-[13px] font-semibold text-[#1A1410]">847 отзывов</p>
                <p className="text-[11px] text-[#8B847C]">средняя оценка 4.9</p>
              </div>
            </div>

            {/* Stat block — visible on mobile too, responsive sizing */}
            <div className="absolute -bottom-6 -left-6 bg-[#1A1410] text-white rounded-xl p-3 md:p-5 shadow-xl flex flex-col">
              <p
                className="text-2xl md:text-3xl font-semibold tabular text-[#E87722]"
                style={{ fontFamily: 'var(--font-display)' }}
              >
                4 800+
              </p>
              <p className="text-[10px] md:text-xs uppercase tracking-wider mt-1 text-[#A8A29A]">
                кофемашин<br />отремонтировано
              </p>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        animate={{ y: [0, 8, 0] }}
        transition={{ repeat: Infinity, duration: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-[#8B847C]"
      >
        <span className="text-xs font-medium tracking-widest uppercase">Прокрутите</span>
        <ChevronDown size={20} />
      </motion.div>
    </section>
  )
}
