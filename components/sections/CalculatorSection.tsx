'use client'

import { motion, useInView, AnimatePresence } from 'framer-motion'
import { useRef, useState } from 'react'
import {
  ArrowRight,
  ArrowLeft,
  Coffee,
  Cog,
  Package,
  Building2,
  Layers,
  Droplet,
  Flame,
  Power,
  Sparkles,
  AlertTriangle,
  Wrench,
  CheckCircle2,
} from 'lucide-react'
import { containerVariants, fadeUpVariants } from '@/lib/animations'
import { cn } from '@/lib/utils'

const machineTypes = [
  { id: 'automatic', label: 'Автоматическая', icon: Cog, emoji: '⚙️', mult: 1 },
  { id: 'portafilter', label: 'Рожковая', icon: Coffee, emoji: '☕', mult: 0.85 },
  { id: 'capsule', label: 'Капсульная', icon: Package, emoji: '🎯', mult: 0.7 },
  { id: 'professional', label: 'Профессиональная', icon: Building2, emoji: '🏆', mult: 1.4 },
  { id: 'built-in', label: 'Встраиваемая', icon: Layers, emoji: '🔧', mult: 1.2 },
] as const

const brands = ['Jura', "De'Longhi", 'Saeco', 'BORK', 'Bosch', 'Siemens', 'Melitta', 'Другой'] as const

const brandMultipliers: Record<string, number> = {
  Jura: 1.2,
  Saeco: 1.2,
  BORK: 1.15,
  Miele: 1.15,
}

const issues = [
  { id: 'grinder', label: 'Не молет', icon: Cog, priceFrom: 690 },
  { id: 'leak', label: 'Протекает', icon: Droplet, priceFrom: 590 },
  { id: 'no-heat', label: 'Не греет', icon: Flame, priceFrom: 890 },
  { id: 'not-working', label: 'Не включается', icon: Power, priceFrom: 760 },
  { id: 'scale', label: 'Накипь', icon: Sparkles, priceFrom: 990 },
  { id: 'error', label: 'Ошибка на дисплее', icon: AlertTriangle, priceFrom: 760 },
] as const

const TOTAL_STEPS = 3

interface Props {
  onOpenForm: () => void
}

export function CalculatorSection({ onOpenForm }: Props) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  const [step, setStep] = useState(0)
  const [machine, setMachine] = useState<string | null>(null)
  const [brand, setBrand] = useState<string | null>(null)
  const [issue, setIssue] = useState<string | null>(null)

  const result = (() => {
    if (!machine || !brand || !issue) return null
    const m = machineTypes.find((x) => x.id === machine)
    const i = issues.find((x) => x.id === issue)
    if (!m || !i) return null
    const brandMult = brandMultipliers[brand] ?? 1
    return Math.round(i.priceFrom * m.mult * brandMult)
  })()

  const goNext = () => setStep((s) => Math.min(s + 1, 3))
  const goBack = () => setStep((s) => Math.max(s - 1, 0))

  // Progress bar: step 0 → 1/3, step 1 → 2/3, step 2 → 3/3, step 3 → 100%
  const progressPct = step >= 3 ? 100 : ((step + 1) / TOTAL_STEPS) * 100

  return (
    <section
      ref={ref}
      className="py-20 lg:py-28 bg-gradient-to-br from-[#FFF9F2] to-white"
    >
      <style>{`
        @keyframes pulse-ring {
          0% { transform: scale(0.85); opacity: 0.6; }
          70% { transform: scale(1.3); opacity: 0; }
          100% { transform: scale(0.85); opacity: 0; }
        }
        .pulse-ring {
          animation: pulse-ring 1.8s ease-out infinite;
        }
        .pulse-ring-2 {
          animation: pulse-ring 1.8s ease-out infinite 0.4s;
        }
        .pulse-ring-3 {
          animation: pulse-ring 1.8s ease-out infinite 0.8s;
        }
      `}</style>

      <div className="container">
        <motion.div
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          variants={containerVariants}
        >
          <motion.div
            variants={fadeUpVariants}
            className="text-center mb-12 max-w-3xl mx-auto"
          >
            <span className="section-label mb-5">Калькулятор стоимости</span>
            <h2
              className="text-[#1A1410] mt-5 mb-4"
              style={{ fontFamily: 'var(--font-display)' }}
            >
              Узнайте цену{' '}
              <span className="bg-gradient-to-r from-[#E87722] to-[#C9A96E] bg-clip-text text-transparent">
                за 30 секунд
              </span>
            </h2>
            <p className="text-[#4A4540] text-lg">
              Три простых шага — и вы знаете ориентировочную стоимость ремонта
            </p>
          </motion.div>

          <motion.div
            variants={fadeUpVariants}
            className="max-w-3xl mx-auto bg-white rounded-2xl p-6 lg:p-10 border border-[rgba(26,20,16,0.06)] shadow-sm"
          >
            {/* Progress bar */}
            <div className="mb-8">
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-semibold text-[#8B847C] uppercase tracking-wider">
                  {step < 3 ? `Шаг ${step + 1} из ${TOTAL_STEPS}` : 'Готово!'}
                </span>
                <span className="text-xs font-bold text-[#E87722]">
                  {Math.round(progressPct)}%
                </span>
              </div>
              <div className="h-1.5 w-full bg-[#F0EAE2] rounded-full overflow-hidden">
                <motion.div
                  className="h-full bg-gradient-to-r from-[#E87722] to-[#C9A96E] rounded-full"
                  initial={{ width: '33%' }}
                  animate={{ width: `${progressPct}%` }}
                  transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                />
              </div>
            </div>

            {/* Dot step indicators */}
            <div className="flex items-center justify-center gap-3 mb-10">
              {[0, 1, 2].map((i) => (
                <div
                  key={i}
                  className={cn(
                    'h-2.5 rounded-full transition-all duration-500',
                    i === Math.min(step, 2) ? 'w-10 bg-[#E87722]' : 'w-2.5',
                    i < step ? 'bg-[#E87722]' : i === Math.min(step, 2) ? 'bg-[#E87722]' : 'bg-[#D6CFC4]',
                  )}
                />
              ))}
            </div>

            <AnimatePresence mode="wait">
              {step === 0 && (
                <motion.div
                  key="step-0"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3 }}
                >
                  <h3
                    className="text-2xl text-center text-[#1A1410] mb-8"
                    style={{ fontFamily: 'var(--font-display)' }}
                  >
                    Тип вашей кофемашины
                  </h3>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                    {machineTypes.map((t) => {
                      const Icon = t.icon
                      const active = machine === t.id
                      return (
                        <motion.button
                          key={t.id}
                          whileTap={{ scale: 0.97 }}
                          onClick={() => {
                            setMachine(t.id)
                            setTimeout(goNext, 250)
                          }}
                          className={cn(
                            'relative flex flex-col items-center gap-3 p-5 rounded-xl border-2 transition-all',
                            active
                              ? 'border-[#E87722] bg-[#FFF4EB] ring-2 ring-[#E87722]/20'
                              : 'border-[rgba(26,20,16,0.08)] bg-white hover:border-[#E87722] hover:bg-[#FFF8F2]',
                          )}
                        >
                          {active && (
                            <motion.div
                              initial={{ scale: 0, opacity: 0 }}
                              animate={{ scale: 1, opacity: 1 }}
                              className="absolute top-2 right-2"
                            >
                              <CheckCircle2 size={16} className="text-[#E87722]" />
                            </motion.div>
                          )}
                          <span className="text-2xl leading-none">{t.emoji}</span>
                          <Icon
                            size={22}
                            className={active ? 'text-[#E87722]' : 'text-[#4A4540]'}
                          />
                          <span
                            className={cn(
                              'text-sm font-medium',
                              active ? 'text-[#E87722]' : 'text-[#1A1410]',
                            )}
                          >
                            {t.label}
                          </span>
                        </motion.button>
                      )
                    })}
                  </div>
                </motion.div>
              )}

              {step === 1 && (
                <motion.div
                  key="step-1"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3 }}
                >
                  <h3
                    className="text-2xl text-center text-[#1A1410] mb-8"
                    style={{ fontFamily: 'var(--font-display)' }}
                  >
                    Выберите бренд
                  </h3>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                    {brands.map((b) => {
                      const active = brand === b
                      return (
                        <motion.button
                          key={b}
                          whileTap={{ scale: 0.97 }}
                          onClick={() => {
                            setBrand(b)
                            setTimeout(goNext, 250)
                          }}
                          className={cn(
                            'relative px-4 py-4 rounded-xl border-2 text-sm font-medium transition-all',
                            active
                              ? 'border-[#E87722] bg-[#FFF4EB] text-[#E87722] ring-2 ring-[#E87722]/20'
                              : 'border-[rgba(26,20,16,0.08)] bg-white text-[#1A1410] hover:border-[#E87722] hover:bg-[#FFF8F2]',
                          )}
                        >
                          {active && (
                            <motion.span
                              initial={{ scale: 0, opacity: 0 }}
                              animate={{ scale: 1, opacity: 1 }}
                              className="absolute top-1.5 right-1.5"
                            >
                              <CheckCircle2 size={14} className="text-[#E87722]" />
                            </motion.span>
                          )}
                          {b}
                        </motion.button>
                      )
                    })}
                  </div>
                </motion.div>
              )}

              {step === 2 && (
                <motion.div
                  key="step-2"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3 }}
                >
                  <h3
                    className="text-2xl text-center text-[#1A1410] mb-8"
                    style={{ fontFamily: 'var(--font-display)' }}
                  >
                    Что произошло?
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {issues.map((i) => {
                      const Icon = i.icon
                      const active = issue === i.id
                      return (
                        <motion.button
                          key={i.id}
                          whileTap={{ scale: 0.97 }}
                          onClick={() => {
                            setIssue(i.id)
                            setTimeout(goNext, 300)
                          }}
                          className={cn(
                            'flex items-center gap-4 p-4 rounded-xl border-2 text-left transition-all',
                            active
                              ? 'border-[#E87722] bg-[#FFF4EB] ring-2 ring-[#E87722]/20'
                              : 'border-[rgba(26,20,16,0.08)] bg-white hover:border-[#E87722] hover:bg-[#FFF8F2]',
                          )}
                        >
                          <div
                            className={cn(
                              'w-11 h-11 rounded-lg flex items-center justify-center shrink-0',
                              active ? 'bg-[#E87722] text-white' : 'bg-[#FFF4EB] text-[#E87722]',
                            )}
                          >
                            <Icon size={20} />
                          </div>
                          <div className="flex-1 min-w-0">
                            <p
                              className={cn(
                                'text-sm font-medium',
                                active ? 'text-[#E87722]' : 'text-[#1A1410]',
                              )}
                            >
                              {i.label}
                            </p>
                            <p className="text-xs text-[#8B847C] mt-0.5">
                              от {i.priceFrom.toLocaleString('ru-RU')} ₽
                            </p>
                          </div>
                          {active && (
                            <motion.div
                              initial={{ scale: 0, opacity: 0 }}
                              animate={{ scale: 1, opacity: 1 }}
                            >
                              <CheckCircle2 size={18} className="text-[#E87722] shrink-0" />
                            </motion.div>
                          )}
                        </motion.button>
                      )
                    })}
                  </div>
                </motion.div>
              )}

              {step === 3 && (
                <motion.div
                  key="step-3"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.4 }}
                  className="text-center py-4"
                >
                  {/* Confetti-like pulse rings */}
                  <div className="relative inline-flex items-center justify-center mb-6">
                    <span className="absolute inline-flex w-16 h-16 rounded-full bg-[#E87722]/30 pulse-ring" />
                    <span className="absolute inline-flex w-16 h-16 rounded-full bg-[#C9A96E]/20 pulse-ring-2" />
                    <span className="absolute inline-flex w-16 h-16 rounded-full bg-[#E87722]/15 pulse-ring-3" />
                    <div className="relative inline-flex items-center justify-center w-16 h-16 rounded-full bg-[#FFF4EB] z-10">
                      <Wrench size={28} className="text-[#E87722]" />
                    </div>
                  </div>

                  {/* Scattered confetti dots */}
                  <div className="relative">
                    {[
                      { top: '-20px', left: '10%', size: 8, color: '#E87722', delay: 0 },
                      { top: '-14px', left: '25%', size: 6, color: '#C9A96E', delay: 0.15 },
                      { top: '-22px', left: '70%', size: 7, color: '#E87722', delay: 0.1 },
                      { top: '-12px', left: '85%', size: 5, color: '#C9A96E', delay: 0.25 },
                      { top: '-18px', left: '50%', size: 6, color: '#FFB87C', delay: 0.05 },
                      { top: '-8px',  left: '40%', size: 5, color: '#E87722', delay: 0.2 },
                    ].map((dot, idx) => (
                      <motion.div
                        key={idx}
                        initial={{ opacity: 0, y: 10, scale: 0 }}
                        animate={{ opacity: [0, 1, 1, 0], y: [10, -8, -12, -20], scale: [0, 1.2, 1, 0.5] }}
                        transition={{ duration: 1.4, delay: dot.delay, ease: 'easeOut' }}
                        className="absolute rounded-full pointer-events-none"
                        style={{
                          top: dot.top,
                          left: dot.left,
                          width: dot.size,
                          height: dot.size,
                          backgroundColor: dot.color,
                        }}
                      />
                    ))}

                    <p className="text-xs uppercase tracking-wider font-semibold text-[#8B847C] mb-3">
                      Ориентировочная стоимость
                    </p>
                    <motion.p
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.2, duration: 0.5 }}
                      className="text-5xl lg:text-6xl text-[#1A1410] mb-3"
                      style={{ fontFamily: 'var(--font-display)' }}
                    >
                      от{' '}
                      <span className="text-[#E87722]">
                        {result?.toLocaleString('ru-RU')} ₽
                      </span>
                    </motion.p>
                  </div>

                  <p className="text-[#8B847C] text-sm max-w-md mx-auto mb-8 leading-relaxed">
                    Окончательная стоимость определяется после диагностики.
                    Запчасти оплачиваются отдельно.
                  </p>
                  <button
                    onClick={onOpenForm}
                    className="btn-primary inline-flex items-center gap-2"
                  >
                    <CheckCircle2 size={18} />
                    Записаться на бесплатную диагностику
                    <ArrowRight size={16} />
                  </button>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Back button */}
            {step > 0 && (
              <div className="mt-8 pt-6 border-t border-[rgba(26,20,16,0.06)] flex justify-center">
                <button
                  onClick={goBack}
                  className="inline-flex items-center gap-2 text-sm text-[#8B847C] hover:text-[#E87722] transition-colors"
                >
                  <ArrowLeft size={14} />
                  Назад
                </button>
              </div>
            )}
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
