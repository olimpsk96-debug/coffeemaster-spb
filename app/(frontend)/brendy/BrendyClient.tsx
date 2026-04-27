'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'
import { motion } from 'framer-motion'
import { ArrowRight, Phone, MessageCircle, Wrench, Shield, Award } from 'lucide-react'
import { allBrands } from '@/lib/brands-data'
import { containerVariants, fadeUpVariants } from '@/lib/animations'

function BrandLogo({ domain, name, abbr, color, bg }: { domain: string; name: string; abbr: string; color: string; bg: string }) {
  const [error, setError] = useState(false)
  if (error) {
    return (
      <div
        className="w-16 h-16 rounded-2xl flex items-center justify-center shrink-0"
        style={{ backgroundColor: bg }}
      >
        <span className="text-3xl font-bold" style={{ color, fontFamily: 'var(--font-display)' }}>
          {abbr}
        </span>
      </div>
    )
  }
  return (
    <div className="w-16 h-16 rounded-2xl bg-white border border-[rgba(26,20,16,0.06)] flex items-center justify-center shrink-0 overflow-hidden">
      <Image
        src={`https://logo.clearbit.com/${domain}`}
        alt={name}
        width={56}
        height={56}
        className="object-contain w-12 h-12"
        onError={() => setError(true)}
        unoptimized
      />
    </div>
  )
}

export default function BrendyClient() {
  return (
    <div className="pt-[72px]">
      {/* Hero */}
      <section className="bg-gradient-to-br from-[#FFF9F2] to-white py-16 lg:py-20 border-b border-[rgba(26,20,16,0.06)]">
        <div className="container">
          <div className="max-w-3xl">
            <span className="section-label mb-5">По брендам</span>
            <h1 className="text-[#1A1410] mt-5 mb-5" style={{ fontFamily: 'var(--font-display)' }}>
              Ремонт кофемашин всех ведущих брендов
            </h1>
            <p className="text-[#4A4540] text-lg leading-relaxed mb-8">
              Авторизованный сервис для 12 ведущих марок кофемашин. Оригинальные запчасти, сертифицированные мастера, полная диагностика бесплатно.
            </p>
            <div className="flex flex-wrap gap-3">
              <div className="flex items-center gap-2 bg-white border border-[rgba(26,20,16,0.08)] rounded-xl px-4 py-2.5">
                <Wrench size={16} className="text-[#E87722]" />
                <span className="text-sm font-medium text-[#1A1410]">12 марок</span>
              </div>
              <div className="flex items-center gap-2 bg-white border border-[rgba(26,20,16,0.08)] rounded-xl px-4 py-2.5">
                <Shield size={16} className="text-[#E87722]" />
                <span className="text-sm font-medium text-[#1A1410]">Гарантия 12 мес</span>
              </div>
              <div className="flex items-center gap-2 bg-white border border-[rgba(26,20,16,0.08)] rounded-xl px-4 py-2.5">
                <Award size={16} className="text-[#E87722]" />
                <span className="text-sm font-medium text-[#1A1410]">Авторизованный сервис</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Brands grid */}
      <section className="py-16 lg:py-20 bg-[#F7F5F2]">
        <div className="container">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={containerVariants}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5"
          >
            {allBrands.map((brand) => (
              <motion.div key={brand.slug} variants={fadeUpVariants}>
                <Link
                  href={`/brendy/${brand.slug}`}
                  className="bg-white rounded-2xl p-7 border border-[rgba(26,20,16,0.06)] hover:border-[#E87722] hover:shadow-xl transition-all group block h-full"
                >
                  <div className="flex items-start gap-4 mb-5">
                    <BrandLogo
                      domain={brand.domain}
                      name={brand.name}
                      abbr={brand.abbr}
                      color={brand.color}
                      bg={brand.bg}
                    />
                    <div className="flex-1 min-w-0">
                      <h3 className="text-[#1A1410] text-2xl font-semibold group-hover:text-[#E87722] transition-colors mb-1" style={{ fontFamily: 'var(--font-display)' }}>
                        {brand.name}
                      </h3>
                      <p className="text-[#8B847C] text-xs uppercase tracking-wider font-medium">
                        {brand.country} · с {brand.founded}
                      </p>
                    </div>
                  </div>

                  <p className="text-[#4A4540] text-sm leading-relaxed mb-5 min-h-[60px]">
                    {brand.shortDescription}
                  </p>

                  <div className="flex flex-wrap gap-1.5 mb-5">
                    {brand.models.slice(0, 3).map((m) => (
                      <span key={m.series} className="text-xs px-2.5 py-1 bg-[#F7F5F2] rounded-md text-[#4A4540] font-medium">
                        {m.series.split(' (')[0]}
                      </span>
                    ))}
                    {brand.models.length > 3 && (
                      <span className="text-xs px-2.5 py-1 bg-[#FFF4EB] rounded-md text-[#E87722] font-medium">
                        +{brand.models.length - 3}
                      </span>
                    )}
                  </div>

                  <div className="flex items-center justify-between pt-4 border-t border-[rgba(26,20,16,0.06)]">
                    <span className="text-[#1A1410] text-sm font-medium">
                      {brand.models.length} серий · ремонт от 490 ₽
                    </span>
                    <span className="text-[#E87722] flex items-center gap-1 text-sm font-semibold group-hover:gap-2 transition-all">
                      Открыть <ArrowRight size={14} />
                    </span>
                  </div>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-[#1A1410]">
        <div className="container text-center">
          <p className="text-white/50 text-sm uppercase tracking-widest mb-4">Не нашли свой бренд?</p>
          <h2 className="text-white text-3xl lg:text-4xl mb-4" style={{ fontFamily: 'var(--font-display)' }}>
            Мы работаем с любыми кофемашинами
          </h2>
          <p className="text-white/60 mb-8 max-w-lg mx-auto">
            Помимо 12 представленных брендов, ремонтируем редкие и профессиональные машины. Позвоните — обсудим.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:+78121234567" className="btn-primary">
              <Phone size={16} /> +7 (812) 123-45-67
            </a>
            <a href="https://wa.me/79991234567" className="btn-secondary !bg-transparent !text-white !border-white/30 hover:!border-white">
              <MessageCircle size={16} /> WhatsApp
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
