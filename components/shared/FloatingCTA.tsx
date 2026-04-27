'use client'

import { Phone, MessageCircle, Send } from 'lucide-react'
import { motion } from 'framer-motion'

interface FloatingCTAProps {
  onOpenForm: () => void
}

export function FloatingCTA({ onOpenForm }: FloatingCTAProps) {
  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col gap-3">
      <motion.a
        href="https://wa.me/79991234567"
        target="_blank"
        rel="noopener noreferrer"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.8 }}
        className="w-14 h-14 rounded-full bg-[#25D366] flex items-center justify-center shadow-xl hover:scale-110 transition-transform"
        aria-label="WhatsApp"
      >
        <MessageCircle size={22} className="text-white" />
      </motion.a>

      <motion.a
        href="https://t.me/coffeemaster_spb"
        target="_blank"
        rel="noopener noreferrer"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.9 }}
        className="w-14 h-14 rounded-full bg-[#229ED9] flex items-center justify-center shadow-xl hover:scale-110 transition-transform"
        aria-label="Telegram"
      >
        <Send size={20} className="text-white" />
      </motion.a>

      <motion.a
        href="tel:+78121234567"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1.0 }}
        className="w-14 h-14 rounded-full bg-[#E87722] flex items-center justify-center shadow-xl hover:bg-[#D26210] transition-colors md:hidden"
        aria-label="Позвонить"
      >
        <Phone size={22} className="text-white" />
      </motion.a>

      <motion.button
        onClick={onOpenForm}
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1.0 }}
        className="hidden md:flex w-14 h-14 rounded-full bg-[#E87722] items-center justify-center shadow-xl hover:bg-[#D26210] transition-colors animate-float"
        aria-label="Вызвать мастера"
      >
        <Phone size={22} className="text-white" />
      </motion.button>
    </div>
  )
}
