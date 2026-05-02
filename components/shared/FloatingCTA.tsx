'use client'

import { Phone, MessageCircle, Send, ChevronUp, Plus, X } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import { useState, useEffect } from 'react'

interface FloatingCTAProps {
  onOpenForm: () => void
}

const buttonVariants = {
  hidden: { opacity: 0, scale: 0.5, y: 10 },
  visible: (i: number) => ({
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { delay: i * 0.07, duration: 0.3, ease: [0.16, 1, 0.3, 1] },
  }),
  exit: (i: number) => ({
    opacity: 0,
    scale: 0.5,
    y: 10,
    transition: { delay: i * 0.04, duration: 0.2 },
  }),
}

interface TooltipButtonProps {
  href?: string
  onClick?: () => void
  className: string
  label: string
  ariaLabel: string
  children: React.ReactNode
  target?: string
  rel?: string
}

function TooltipButton({ href, onClick, className, label, ariaLabel, children, target, rel }: TooltipButtonProps) {
  const [showTooltip, setShowTooltip] = useState(false)

  const sharedProps = {
    className: `relative w-14 h-14 rounded-full flex items-center justify-center shadow-xl transition-transform hover:scale-110 ${className}`,
    'aria-label': ariaLabel,
    onMouseEnter: () => setShowTooltip(true),
    onMouseLeave: () => setShowTooltip(false),
    onFocus: () => setShowTooltip(true),
    onBlur: () => setShowTooltip(false),
  }

  const tooltip = (
    <AnimatePresence>
      {showTooltip && (
        <motion.span
          initial={{ opacity: 0, x: 8 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 8 }}
          transition={{ duration: 0.18 }}
          className="absolute right-full mr-3 top-1/2 -translate-y-1/2 whitespace-nowrap bg-[#1C1C1C] text-white text-[12px] font-medium px-3 py-1.5 rounded-md shadow-lg pointer-events-none border border-white/10"
        >
          {label}
          <span className="absolute right-[-5px] top-1/2 -translate-y-1/2 w-0 h-0 border-t-4 border-b-4 border-l-4 border-t-transparent border-b-transparent border-l-[#1C1C1C]" />
        </motion.span>
      )}
    </AnimatePresence>
  )

  if (href) {
    return (
      <a href={href} target={target} rel={rel} {...sharedProps}>
        {children}
        {tooltip}
      </a>
    )
  }

  return (
    <button onClick={onClick} {...sharedProps}>
      {children}
      {tooltip}
    </button>
  )
}

export function FloatingCTA({ onOpenForm }: FloatingCTAProps) {
  const [speedDialOpen, setSpeedDialOpen] = useState(false)
  const [showBackToTop, setShowBackToTop] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 500)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleBackToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const speedDialItems = [
    {
      href: 'https://wa.me/79991234567',
      className: 'bg-[#25D366]',
      label: 'Написать в WhatsApp',
      ariaLabel: 'WhatsApp',
      icon: <MessageCircle size={22} className="text-white" />,
      target: '_blank',
      rel: 'noopener noreferrer',
    },
    {
      href: 'https://t.me/coffeemaster_spb',
      className: 'bg-[#229ED9]',
      label: 'Написать в Telegram',
      ariaLabel: 'Telegram',
      icon: <Send size={20} className="text-white" />,
      target: '_blank',
      rel: 'noopener noreferrer',
    },
    {
      href: 'tel:+78121234567',
      className: 'bg-[#E87722] hover:bg-[#D26210]',
      label: 'Позвонить',
      ariaLabel: 'Позвонить',
      icon: <Phone size={22} className="text-white" />,
    },
  ]

  return (
    <>
      {/* Back to top — появляется при scroll > 500px */}
      <AnimatePresence>
        {showBackToTop && (
          <motion.button
            initial={{ opacity: 0, scale: 0.7 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.7 }}
            transition={{ duration: 0.25 }}
            onClick={handleBackToTop}
            className="fixed bottom-6 left-6 z-40 w-11 h-11 rounded-full bg-[#1C1C1C] border border-white/10 text-white flex items-center justify-center shadow-lg hover:bg-[#E87722] hover:border-[#E87722] hover:-translate-y-1 transition-all"
            aria-label="Наверх"
          >
            <ChevronUp size={20} />
          </motion.button>
        )}
      </AnimatePresence>

      {/* Desktop: 3 кнопки стеком с тултипами */}
      <div className="hidden md:flex fixed bottom-6 right-6 z-40 flex-col gap-3">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.8 }}
        >
          <TooltipButton
            href="https://wa.me/79991234567"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#25D366]"
            label="Написать в WhatsApp"
            ariaLabel="WhatsApp"
          >
            <MessageCircle size={22} className="text-white" />
          </TooltipButton>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.9 }}
        >
          <TooltipButton
            href="https://t.me/coffeemaster_spb"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#229ED9]"
            label="Написать в Telegram"
            ariaLabel="Telegram"
          >
            <Send size={20} className="text-white" />
          </TooltipButton>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1.0 }}
          className="relative"
        >
          {/* Pulse rings */}
          <span className="absolute inset-0 rounded-full bg-[#E87722] animate-ping opacity-30 pointer-events-none" style={{ animationDuration: '3s' }} />
          <TooltipButton
            onClick={onOpenForm}
            className="bg-[#E87722] hover:bg-[#D26210] relative z-10"
            label="Позвонить"
            ariaLabel="Вызвать мастера"
          >
            <Phone size={22} className="text-white" />
          </TooltipButton>
        </motion.div>
      </div>

      {/* Mobile: speed-dial */}
      <div className="flex md:hidden fixed bottom-6 right-6 z-40 flex-col items-end gap-3">
        {/* Раскрытые кнопки */}
        <AnimatePresence>
          {speedDialOpen && (
            <motion.div
              initial="hidden"
              animate="visible"
              exit="hidden"
              className="flex flex-col items-end gap-3"
            >
              {speedDialItems.map((item, i) => (
                <motion.div
                  key={item.ariaLabel}
                  custom={speedDialItems.length - 1 - i}
                  variants={buttonVariants}
                  className="flex items-center gap-3"
                >
                  <span className="bg-[#1C1C1C] text-white text-[12px] font-medium px-3 py-1.5 rounded-md shadow border border-white/10 whitespace-nowrap">
                    {item.label}
                  </span>
                  <a
                    href={item.href}
                    target={item.target}
                    rel={item.rel}
                    aria-label={item.ariaLabel}
                    className={`w-12 h-12 rounded-full flex items-center justify-center shadow-xl ${item.className}`}
                    onClick={() => {
                      if (!item.href?.startsWith('http') && !item.href?.startsWith('https')) {
                        setSpeedDialOpen(false)
                      }
                    }}
                  >
                    {item.icon}
                  </a>
                </motion.div>
              ))}
            </motion.div>
          )}
        </AnimatePresence>

        {/* Главная кнопка "+" с pulse */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.8 }}
          className="relative"
        >
          <span className="absolute inset-0 rounded-full bg-[#E87722] animate-ping opacity-30 pointer-events-none" style={{ animationDuration: '3s' }} />
          <button
            onClick={() => setSpeedDialOpen((prev) => !prev)}
            className="relative z-10 w-14 h-14 rounded-full bg-[#E87722] flex items-center justify-center shadow-xl hover:bg-[#D26210] transition-all"
            aria-label={speedDialOpen ? 'Закрыть меню' : 'Открыть меню связи'}
          >
            <motion.div
              animate={{ rotate: speedDialOpen ? 45 : 0 }}
              transition={{ duration: 0.25 }}
            >
              {speedDialOpen ? <X size={22} className="text-white" /> : <Plus size={22} className="text-white" />}
            </motion.div>
          </button>
        </motion.div>
      </div>
    </>
  )
}
