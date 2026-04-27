'use client'

import { motion, useInView } from 'framer-motion'
import { useRef, useEffect, useState } from 'react'
import { Coffee, Users, Clock, Award } from 'lucide-react'

const stats = [
  { Icon: Coffee, value: 4800, suffix: '+', label: 'отремонтированных кофемашин' },
  { Icon: Users, value: 3200, suffix: '+', label: 'довольных клиентов' },
  { Icon: Award, value: 9, suffix: ' лет', label: 'опыта в сервисе' },
  { Icon: Clock, value: 12, suffix: ' мес', label: 'гарантия на работы' },
]

function Counter({ value, suffix, isInView }: { value: number; suffix: string; isInView: boolean }) {
  const [n, setN] = useState(0)
  useEffect(() => {
    if (!isInView) return
    const start = Date.now()
    const duration = 1500
    const id = setInterval(() => {
      const elapsed = Date.now() - start
      const progress = Math.min(elapsed / duration, 1)
      const eased = 1 - Math.pow(1 - progress, 3)
      setN(Math.floor(eased * value))
      if (progress >= 1) clearInterval(id)
    }, 16)
    return () => clearInterval(id)
  }, [isInView, value])
  return (
    <span className="tabular">
      {n.toLocaleString('ru-RU')}{suffix}
    </span>
  )
}

export function StatsSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section ref={ref} className="py-16 lg:py-20 bg-[#1A1410] relative overflow-hidden">
      <div className="absolute inset-0 bg-grid opacity-[0.04]" />
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] rounded-full opacity-20 pointer-events-none"
        style={{ background: 'radial-gradient(ellipse at center, rgba(232,119,34,0.4) 0%, transparent 70%)' }}
      />

      <div className="container relative">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="text-center lg:text-left"
            >
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-[#E87722]/15 border border-[#E87722]/20 mb-4">
                <s.Icon size={22} className="text-[#E87722]" />
              </div>
              <p className="text-4xl lg:text-5xl font-semibold text-white mb-2" style={{ fontFamily: 'var(--font-display)' }}>
                <Counter value={s.value} suffix={s.suffix} isInView={isInView} />
              </p>
              <p className="text-sm text-[#A8A29A] leading-snug">{s.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
