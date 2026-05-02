'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  CheckCircle2, ChevronRight, Wrench,
  Zap, Shield, Award, ThumbsUp, TrendingUp, Clock,
} from 'lucide-react'

// ── FAQ Accordion ──────────────────────────────────────────────────────────────

interface FaqItemProps {
  item: { question: string; answer: string }
}

export function FaqItem({ item }: FaqItemProps) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="bg-white rounded-2xl border border-[rgba(26,20,16,0.06)] overflow-hidden">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center justify-between gap-4 w-full px-7 py-5 text-left hover:bg-[#FFF9F2] transition-colors"
        aria-expanded={isOpen}
      >
        <span className="text-[#1A1410] font-semibold text-base">{item.question}</span>
        <motion.span
          animate={{ rotate: isOpen ? 90 : 0 }}
          transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
          className={`w-7 h-7 rounded-full border flex items-center justify-center shrink-0 transition-colors ${
            isOpen ? 'bg-[#E87722] border-[#E87722]' : 'border-[rgba(26,20,16,0.12)]'
          }`}
        >
          <ChevronRight size={14} className={isOpen ? 'text-white' : 'text-[#4A4540]'} />
        </motion.span>
      </button>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="overflow-hidden"
          >
            <div className="px-7 pb-5">
              <div className="h-px bg-[rgba(26,20,16,0.06)] mb-4" />
              <p className="text-[#4A4540] leading-relaxed">{item.answer}</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

// ── Animated benefit card ──────────────────────────────────────────────────────

const ICONS = [Zap, Shield, Award, ThumbsUp, CheckCircle2, TrendingUp, Clock, Wrench]

interface BenefitCardProps {
  benefit: string
  index: number
}

export function BenefitCard({ benefit, index }: BenefitCardProps) {
  const Icon = ICONS[index % ICONS.length]

  return (
    <motion.div
      whileHover={{ y: -4, boxShadow: '0 12px 32px rgba(232,119,34,0.12)' }}
      transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
      className="flex items-start gap-3 p-4 bg-[#FFF9F2] rounded-xl border border-[rgba(232,119,34,0.12)] cursor-default"
    >
      <div className="w-8 h-8 rounded-lg bg-[#E87722]/10 flex items-center justify-center shrink-0 mt-0.5">
        <Icon size={16} className="text-[#E87722]" />
      </div>
      <span className="text-[#1A1410] text-sm font-medium leading-snug">{benefit}</span>
    </motion.div>
  )
}

// ── Satisfaction progress bar ──────────────────────────────────────────────────

export function SatisfactionBar() {
  return (
    <div className="mb-7 bg-white/80 rounded-xl p-4 border border-[rgba(232,119,34,0.12)]">
      <div className="flex justify-between items-center text-sm mb-2">
        <span className="text-[#4A4540] font-medium">Удовлетворённость клиентов</span>
        <span className="font-bold text-[#E87722] tabular">96%</span>
      </div>
      <div className="h-2 bg-[#F0EDE9] rounded-full overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: '96%' }}
          transition={{ duration: 1.2, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="h-full bg-gradient-to-r from-[#E87722] to-[#C9A96E] rounded-full"
        />
      </div>
      <p className="text-[#8B847C] text-xs mt-2">На основе 847 отзывов наших клиентов</p>
    </div>
  )
}
