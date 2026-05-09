'use client'

import Link from 'next/link'
import { useState, useEffect } from 'react'
import { usePathname } from 'next/navigation'
import { Menu, X, Phone, Coffee } from 'lucide-react'
import { cn } from '@/lib/utils'
import { useFormModal } from '@/components/layout/FormContext'

const navLinks = [
  { href: '/uslugi', label: 'Услуги' },
  { href: '/brendy', label: 'Бренды' },
  { href: '/prajs', label: 'Прайс' },
  { href: '/blog', label: 'Блог' },
  { href: '/o-kompanii', label: 'О нас' },
  { href: '/kontakty', label: 'Контакты' },
]

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileOpen, setIsMobileOpen] = useState(false)
  const [scrollProgress, setScrollProgress] = useState(0)
  const pathname = usePathname()
  const { open } = useFormModal()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight
      const progress = totalHeight > 0 ? (window.scrollY / totalHeight) * 100 : 0
      setScrollProgress(progress)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileOpen(false)
  }, [pathname])

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        isScrolled
          ? 'bg-white/95 backdrop-blur-md shadow-sm border-b border-[rgba(26,20,16,0.06)]'
          : 'bg-white/80 backdrop-blur-sm',
      )}
    >
      <div className="container">
        <div className="flex items-center justify-between h-[72px]">
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center gap-3 group hover:opacity-80 transition-opacity duration-200"
          >
            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[#E87722] to-[#C9A96E] flex items-center justify-center shadow-md">
              <Coffee size={20} className="text-white" />
            </div>
            <div className="flex flex-col leading-none">
              <span
                className="text-[20px] font-semibold tracking-tight text-[#1A1410]"
                style={{ fontFamily: 'var(--font-display)' }}
              >
                CoffeeMaster
              </span>
              <span className="text-[10px] tracking-[0.2em] uppercase text-[#8B847C] mt-0.5">
                Санкт-Петербург
              </span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-7">
            {navLinks.map((link) => {
              const isActive = pathname === link.href || pathname.startsWith(link.href + '/')
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={cn(
                    'relative text-[14px] font-medium transition-colors duration-200',
                    'overflow-hidden pb-0.5',
                    // Animated underline on hover (all links)
                    'after:content-[""] after:absolute after:bottom-0 after:left-0 after:h-0.5 after:bg-[#E87722] after:rounded-full after:transition-all after:duration-300',
                    isActive
                      ? // Active state: orange text + full underline
                        'text-[#E87722] after:w-full'
                      : // Inactive state: grey text + underline animates on hover
                        'text-[#4A4540] hover:text-[#E87722] after:w-0 hover:after:w-full',
                  )}
                >
                  {link.label}
                </Link>
              )
            })}
          </nav>

          {/* CTA + Phone */}
          <div className="hidden lg:flex items-center gap-5">
            <a
              href="tel:+78121234567"
              className="flex items-center gap-2 text-[14px] font-semibold text-[#1A1410] hover:text-[#E87722] transition-colors"
            >
              <Phone size={15} className="text-[#E87722]" />
              <span>+7 (812) 123-45-67</span>
            </a>
            <button onClick={open} className="btn-primary text-[13px] py-3 px-5">
              Вызвать мастера
            </button>
          </div>

          {/* Mobile burger */}
          <button
            className="lg:hidden text-[#1A1410] hover:text-[#E87722] transition-colors"
            onClick={() => setIsMobileOpen(!isMobileOpen)}
            aria-label="Меню"
          >
            {isMobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Scroll progress bar */}
      <div
        style={{ width: `${scrollProgress}%` }}
        className="absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-[#E87722] to-[#C9A96E] transition-[width] duration-100"
      />

      {/* Mobile menu */}
      <div
        className={cn(
          'lg:hidden absolute top-full left-0 right-0 border-b border-[rgba(26,20,16,0.08)] shadow-lg overflow-hidden',
          'backdrop-blur-md bg-white/95',
          'transition-all duration-300 ease-out',
          isMobileOpen
            ? 'max-h-[600px] opacity-100 translate-y-0'
            : 'max-h-0 opacity-0 -translate-y-2.5',
        )}
      >
        <div className="container py-6 flex flex-col gap-4">
          {navLinks.map((link, index) => {
            const isActive = pathname === link.href || pathname.startsWith(link.href + '/')
            return (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  'text-[16px] font-medium py-2 transition-colors duration-200',
                  'transition-all',
                  isActive ? 'text-[#E87722]' : 'text-[#1A1410] hover:text-[#E87722]',
                )}
                style={{
                  transitionDelay: isMobileOpen ? `${index * 50}ms` : '0ms',
                  transform: isMobileOpen ? 'translateY(0)' : 'translateY(-8px)',
                  opacity: isMobileOpen ? 1 : 0,
                }}
                onClick={() => setIsMobileOpen(false)}
              >
                {link.label}
              </Link>
            )
          })}
          <div className="divider my-2" />
          <a
            href="tel:+78121234567"
            className="flex items-center gap-2 text-[#1A1410] text-lg font-semibold hover:text-[#E87722] transition-colors"
            style={{
              transitionDelay: isMobileOpen ? `${navLinks.length * 50}ms` : '0ms',
              transform: isMobileOpen ? 'translateY(0)' : 'translateY(-8px)',
              opacity: isMobileOpen ? 1 : 0,
              transition: 'transform 0.3s ease-out, opacity 0.3s ease-out, color 0.2s',
            }}
          >
            <Phone size={18} className="text-[#E87722]" />
            +7 (812) 123-45-67
          </a>
          <button
            onClick={() => {
              open()
              setIsMobileOpen(false)
            }}
            className="btn-primary w-full mt-2"
            style={{
              transitionDelay: isMobileOpen ? `${(navLinks.length + 1) * 50}ms` : '0ms',
              transform: isMobileOpen ? 'translateY(0)' : 'translateY(-8px)',
              opacity: isMobileOpen ? 1 : 0,
              transition: 'transform 0.3s ease-out, opacity 0.3s ease-out',
            }}
          >
            Вызвать мастера
          </button>
        </div>
      </div>
    </header>
  )
}
