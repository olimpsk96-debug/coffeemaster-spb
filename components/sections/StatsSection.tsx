'use client'

import { motion, useInView } from 'framer-motion'
import { useRef, useEffect, useState } from 'react'
import { Coffee, Users, Clock, Award } from 'lucide-react'

const stats = [
  { Icon: Coffee, value: 4800, suffix: '+', label: 'отремонтированных кофемашин' },
  { Icon: Users,  value: 3200, suffix: '+', label: 'довольных клиентов' },
  { Icon: Award,  value: 9,    suffix: ' лет', label: 'опыта в сервисе' },
  { Icon: Clock,  value: 12,   suffix: ' мес', label: 'гарантия на работы' },
]

function AnimatedCounter({ value, suffix = '', isInView }: { value: number; suffix?: string; isInView: boolean }) {
  const ref = useRef<HTMLSpanElement>(null)
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (!isInView) return
    const duration = 2000
    const steps = 60
    const increment = value / steps
    let current = 0
    const timer = setInterval(() => {
      current += increment
      if (current >= value) {
        setCount(value)
        clearInterval(timer)
      } else {
        setCount(Math.floor(current))
      }
    }, duration / steps)
    return () => clearInterval(timer)
  }, [isInView, value])

  return (
    <span ref={ref} className="tabular-nums">
      {count.toLocaleString('ru-RU')}{suffix}
    </span>
  )
}

/** Vertical gradient divider for desktop */
function GradientDivider() {
  return (
    <div
      className="hidden lg:block w-px self-stretch"
      style={{
        background: 'linear-gradient(to bottom, transparent, rgba(232,119,34,0.35) 30%, rgba(232,119,34,0.35) 70%, transparent)',
      }}
    />
  )
}

export function StatsSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section ref={ref} className="py-16 lg:py-20 bg-[#1A1410] relative overflow-hidden">
      {/* Subtle grid texture */}
      <div className="absolute inset-0 bg-grid opacity-[0.04]" />

      {/* Central glow */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] rounded-full opacity-20 pointer-events-none"
        style={{ background: 'radial-gradient(ellipse at center, rgba(232,119,34,0.4) 0%, transparent 70%)' }}
      />

      <div className="container relative">
        <div className="grid grid-cols-2 lg:grid-cols-[1fr_1px_1fr_1px_1fr_1px_1fr] gap-y-10 lg:gap-y-0 items-center">
          {stats.map((s, i) => (
            <>
              {/* Stat card */}
              <motion.div
                key={s.label}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: i * 0.12 }}
                className="group flex flex-col items-center lg:items-start text-center lg:text-left px-6 py-4 rounded-xl transition-all duration-300 hover:-translate-y-1 hover:bg-white/[0.03] cursor-default"
                style={{
                  boxShadow: 'none',
                  // glow on hover is handled via Tailwind group + inline style below via a wrapper trick
                }}
              >
                {/* Icon badge */}
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-[#E87722]/15 border border-[#E87722]/20 mb-4 group-hover:bg-[#E87722]/25 group-hover:border-[#E87722]/40 transition-all duration-300">
                  <s.Icon size={22} className="text-[#E87722]" />
                </div>

                {/* Number */}
                <p
                  className="text-4xl lg:text-5xl font-semibold text-white mb-2 leading-none"
                  style={{ fontFamily: 'var(--font-display)' }}
                >
                  <AnimatedCounter value={s.value} suffix={s.suffix} isInView={isInView} />
                </p>

                {/* Label */}
                <p className="text-sm text-[#A8A29A] leading-snug">{s.label}</p>
              </motion.div>

              {/* Gradient divider after every card except the last */}
              {i < stats.length - 1 && <GradientDivider key={`div-${i}`} />}
            </>
          ))}
        </div>
      </div>
    </section>
  )
}
