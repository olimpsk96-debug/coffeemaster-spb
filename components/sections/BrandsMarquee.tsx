'use client'

import { motion, useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { fadeUpVariants } from '@/lib/animations'

const brands = [
  { name: 'Jura',       domain: 'jura.com',        abbr: 'J',  color: '#4A5568', bg: '#EDF2F7',  slug: 'jura' },
  { name: "De'Longhi",  domain: 'delonghi.com',     abbr: 'D',  color: '#C41E3A', bg: '#FFF5F5',  slug: 'delonghi' },
  { name: 'Saeco',      domain: 'saeco.com',        abbr: 'S',  color: '#003087', bg: '#EBF4FF',  slug: 'saeco' },
  { name: 'BORK',       domain: 'bork.ru',          abbr: 'B',  color: '#1A1410', bg: '#F7F5F2',  slug: 'bork' },
  { name: 'Bosch',      domain: 'bosch-home.com',   abbr: 'B',  color: '#CC0000', bg: '#FFF5F5',  slug: 'bosch' },
  { name: 'Siemens',    domain: 'siemens.com',      abbr: 'S',  color: '#009999', bg: '#E6FFFA',  slug: 'siemens' },
  { name: 'Melitta',    domain: 'melitta.com',      abbr: 'M',  color: '#E04C1E', bg: '#FFF3EE',  slug: null },
  { name: 'Nivona',     domain: 'nivona.com',       abbr: 'N',  color: '#2B4C7E', bg: '#EBF4FF',  slug: null },
  { name: 'Gaggia',     domain: 'gaggia.com',       abbr: 'G',  color: '#CC1B2C', bg: '#FFF5F5',  slug: null },
  { name: 'Krups',      domain: 'krups.com',        abbr: 'K',  color: '#333333', bg: '#F5F5F5',  slug: null },
  { name: 'WMF',        domain: 'wmf.com',          abbr: 'W',  color: '#6B7280', bg: '#F3F4F6',  slug: null },
  { name: 'Miele',      domain: 'miele.com',        abbr: 'M',  color: '#1A2744', bg: '#EBF4FF',  slug: null },
  { name: 'Smeg',       domain: 'smeg.com',         abbr: 'S',  color: '#D97706', bg: '#FFFBEB',  slug: null },
  { name: 'Nespresso',  domain: 'nespresso.com',    abbr: 'N',  color: '#1A4731', bg: '#F0FDF4',  slug: null },
  { name: 'Philips',    domain: 'philips.com',      abbr: 'P',  color: '#0070C0', bg: '#EBF4FF',  slug: null },
  { name: 'KitchenAid', domain: 'kitchenaid.com',   abbr: 'K',  color: '#CC2222', bg: '#FFF5F5',  slug: null },
]

const row1 = brands.slice(0, 8)
const row2 = brands.slice(8, 16)

function BrandCard({ brand }: { brand: typeof brands[0] }) {
  const [imgError, setImgError] = useState(false)
  const logoUrl = `https://logo.clearbit.com/${brand.domain}`

  const inner = (
    <div className="flex items-center gap-3 px-5 py-3.5 bg-white border border-[rgba(26,20,16,0.07)] rounded-2xl hover:border-[#E87722] hover:shadow-md transition-all duration-300 group cursor-pointer shrink-0 mx-2">
      <div
        className="w-10 h-10 rounded-xl flex items-center justify-center overflow-hidden shrink-0"
        style={{ backgroundColor: imgError ? brand.bg : 'transparent' }}
      >
        {!imgError ? (
          <Image
            src={logoUrl}
            alt={brand.name}
            width={40}
            height={40}
            className="object-contain w-9 h-9"
            onError={() => setImgError(true)}
            unoptimized
          />
        ) : (
          <span
            className="text-xl font-bold leading-none"
            style={{ color: brand.color, fontFamily: 'var(--font-display)' }}
          >
            {brand.abbr}
          </span>
        )}
      </div>
      <span className="text-sm font-semibold text-[#4A4540] group-hover:text-[#E87722] transition-colors whitespace-nowrap">
        {brand.name}
      </span>
    </div>
  )

  if (brand.slug) {
    return <Link href={`/brendy/${brand.slug}`}>{inner}</Link>
  }
  return inner
}

function MarqueeRow({ items, reverse = false }: { items: typeof brands; reverse?: boolean }) {
  return (
    <div
      className="flex overflow-hidden"
      style={{
        maskImage: 'linear-gradient(to right, transparent, black 8%, black 92%, transparent)',
        WebkitMaskImage: 'linear-gradient(to right, transparent, black 8%, black 92%, transparent)',
      }}
    >
      <div className={reverse ? 'animate-marquee-reverse flex' : 'animate-marquee flex'}>
        {[...items, ...items, ...items, ...items].map((brand, i) => (
          <BrandCard key={i} brand={brand} />
        ))}
      </div>
    </div>
  )
}

export function BrandsMarquee() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section ref={ref} className="py-16 bg-white overflow-hidden">
      <div className="container mb-10">
        <motion.p
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          variants={fadeUpVariants}
          className="text-center text-sm uppercase tracking-[0.18em] text-[#8B847C] font-medium"
        >
          Обслуживаем кофемашины всех ведущих брендов
        </motion.p>
      </div>

      <div className="space-y-3">
        <MarqueeRow items={row1} />
        <MarqueeRow items={row2} reverse />
      </div>
    </section>
  )
}
