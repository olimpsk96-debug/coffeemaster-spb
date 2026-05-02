'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { Phone, ArrowRight, Clock } from 'lucide-react'
import { containerVariants, fadeUpVariants } from '@/lib/animations'

interface CTASectionProps {
  onOpenForm: () => void
}

export function CTASection({ onOpenForm }: CTASectionProps) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section ref={ref} className="py-20 lg:py-28 bg-white">
      <style>{`
        @keyframes gradient-shift {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        @keyframes float {
          0%, 100% { transform: translateY(0px) scale(1); opacity: 0.2; }
          50% { transform: translateY(-18px) scale(1.15); opacity: 0.45; }
        }
        .cta-gradient-bg {
          background: linear-gradient(
            135deg,
            #1A1410 0%,
            #2A1F18 20%,
            #1C150E 40%,
            #241A12 60%,
            #1A1410 80%,
            #2E1E14 100%
          );
          background-size: 300% 300%;
          animation: gradient-shift 10s ease infinite;
        }
        .cta-mesh-overlay {
          background:
            radial-gradient(ellipse at 20% 50%, rgba(232, 119, 34, 0.18) 0%, transparent 50%),
            radial-gradient(ellipse at 80% 20%, rgba(201, 169, 110, 0.12) 0%, transparent 45%),
            radial-gradient(ellipse at 60% 80%, rgba(184, 115, 51, 0.1) 0%, transparent 40%);
        }
        .animate-float {
          animation: float var(--dur, 5s) ease-in-out infinite;
          animation-delay: var(--delay, 0s);
        }
        .btn-shine {
          position: relative;
          overflow: hidden;
        }
        .btn-shine::after {
          content: '';
          position: absolute;
          top: -50%;
          left: -75%;
          width: 50%;
          height: 200%;
          background: linear-gradient(
            to right,
            transparent 0%,
            rgba(255, 255, 255, 0.18) 50%,
            transparent 100%
          );
          transform: skewX(-20deg);
          transition: left 0.6s ease;
        }
        .btn-shine:hover::after {
          left: 130%;
        }
      `}</style>

      <div className="container">
        <motion.div
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          variants={containerVariants}
          className="relative cta-gradient-bg rounded-3xl overflow-hidden p-10 md:p-16"
        >
          {/* Mesh gradient overlay */}
          <div className="absolute inset-0 cta-mesh-overlay pointer-events-none" />

          {/* Decorative glow blobs */}
          <div className="absolute -top-32 -right-32 w-96 h-96 rounded-full bg-[#E87722] opacity-20 blur-3xl pointer-events-none" />
          <div className="absolute -bottom-32 -left-32 w-96 h-96 rounded-full bg-[#C9A96E] opacity-15 blur-3xl pointer-events-none" />
          <div className="absolute inset-0 bg-grid opacity-[0.04] pointer-events-none" />

          {/* Floating particles */}
          {[...Array(6)].map((_, i) => (
            <div
              key={i}
              className="absolute rounded-full bg-white animate-float pointer-events-none"
              style={{
                width: i % 2 === 0 ? '6px' : '8px',
                height: i % 2 === 0 ? '6px' : '8px',
                left: `${15 + i * 14}%`,
                top: `${20 + (i % 3) * 30}%`,
                '--delay': `${i * 0.5}s`,
                '--dur': `${4 + i}s`,
                opacity: 0.2,
              } as React.CSSProperties}
            />
          ))}

          <div className="relative z-10 max-w-3xl">
            <motion.span
              variants={fadeUpVariants}
              className="inline-block px-4 py-2 bg-[#E87722]/15 border border-[#E87722]/30 text-[#FFB87C] rounded-full text-xs font-semibold uppercase tracking-wider mb-6"
            >
              Бесплатная диагностика
            </motion.span>

            <motion.h2
              variants={fadeUpVariants}
              className="text-white mb-5"
              style={{ fontFamily: 'var(--font-display)' }}
            >
              Оставьте заявку —<br />
              <span className="bg-gradient-to-r from-[#E87722] to-[#C9A96E] bg-clip-text text-transparent">
                перезвоним за 5 минут
              </span>
            </motion.h2>

            <motion.p
              variants={fadeUpVariants}
              className="text-[#A8A29A] text-lg leading-relaxed mb-6 max-w-2xl"
            >
              Определим неисправность, сообщим точную стоимость и сроки ремонта.
              Без предоплаты, с гарантией 12 месяцев.
            </motion.p>

            {/* Countdown timer */}
            <motion.div
              variants={fadeUpVariants}
              className="inline-flex items-center gap-2 mb-8 px-4 py-2.5 bg-white/5 border border-white/10 rounded-xl"
            >
              <Clock size={14} className="text-[#C9A96E] shrink-0" />
              <span className="text-[#A8A29A] text-xs font-medium">
                Бесплатная диагностика действует ещё:&nbsp;
              </span>
              <span
                className="text-[#FFB87C] text-xs font-bold tracking-widest"
                style={{ fontFamily: 'var(--font-mono, monospace)' }}
              >
                23:47:12
              </span>
            </motion.div>

            <motion.div variants={fadeUpVariants} className="flex flex-col sm:flex-row gap-3">
              <button
                onClick={onOpenForm}
                className="btn-shine inline-flex items-center justify-center gap-2 px-8 py-5 bg-gradient-to-r from-[#E87722] to-[#C9A96E] text-white rounded-xl font-semibold text-base hover:opacity-90 transition-all shadow-lg shadow-[#E87722]/25 hover:shadow-[#E87722]/40 hover:-translate-y-0.5"
              >
                Записаться на диагностику <ArrowRight size={18} />
              </button>
              <a
                href="tel:+78121234567"
                className="inline-flex items-center justify-center gap-2 px-6 py-5 bg-white/10 border border-white/20 text-white rounded-xl font-semibold hover:bg-white/15 transition-all"
              >
                <Phone size={16} /> +7 (812) 123-45-67
              </a>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
