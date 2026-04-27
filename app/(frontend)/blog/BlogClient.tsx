'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { ArrowRight, Clock, Phone } from 'lucide-react'
import { containerVariants, fadeUpVariants } from '@/lib/animations'
// eslint-disable-next-line @typescript-eslint/no-explicit-any
import { blogPosts as _blogPosts } from '@/lib/blog-data'

interface BlogPost {
  slug: string
  categoryId: string
  title: string
  excerpt: string
  date: string
  readTime: string
  image: string
}

// Cast to known type so TypeScript is happy while the module is being created
const blogPosts = _blogPosts as BlogPost[]

const CATEGORY_LABELS: Record<string, string> = {
  care: 'Уход',
  maintenance: 'Обслуживание',
  repair: 'Ремонт',
  comparison: 'Сравнения',
  guide: 'Гайды',
}

const FILTER_TABS = [
  { id: 'all', label: 'Все' },
  { id: 'care', label: 'Уход' },
  { id: 'maintenance', label: 'Обслуживание' },
  { id: 'repair', label: 'Ремонт' },
  { id: 'comparison', label: 'Сравнения' },
  { id: 'guide', label: 'Гайды' },
]

export default function BlogClient() {
  const [activeFilter, setActiveFilter] = useState('all')

  const featuredPost = blogPosts[0]
  const filteredPosts =
    activeFilter === 'all'
      ? blogPosts
      : blogPosts.filter((p) => p.categoryId === activeFilter)

  return (
    <div className="pt-[72px]">
      {/* ── Hero ── */}
      <section className="bg-gradient-to-br from-[#FFF9F2] to-white py-16 lg:py-20">
        <div className="container">
          <span className="section-label mb-5">Журнал</span>
          <h1
            className="text-[#1A1410] max-w-2xl mt-5 mb-5"
            style={{ fontFamily: 'var(--font-display)' }}
          >
            Всё о кофемашинах
          </h1>
          <p className="text-[#4A4540] text-lg max-w-2xl mb-10">
            Гайды, обзоры и советы от мастеров с 9-летним опытом. Простым языком
            о сложной технике.
          </p>

          {/* Stats row */}
          <div className="flex flex-wrap gap-6 sm:gap-10">
            {[
              '12 статей',
              'Обновляется каждую неделю',
              'Советы практикующих мастеров',
            ].map((stat) => (
              <div
                key={stat}
                className="flex items-center gap-2 text-sm font-medium text-[#4A4540]"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-[#E87722] inline-block" />
                {stat}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Featured post ── */}
      {featuredPost && (
        <section className="py-8 bg-[#F7F5F2]">
          <div className="container">
            <Link
              href={`/blog/${featuredPost.slug}`}
              className="group block bg-white rounded-2xl overflow-hidden border border-[rgba(26,20,16,0.06)] hover:border-[#E87722] hover:shadow-lg transition-all"
            >
              <div className="flex flex-col lg:flex-row">
                {/* Image */}
                <div className="relative w-full lg:w-1/2 aspect-[4/3] overflow-hidden">
                  <Image
                    src={featuredPost.image}
                    alt={featuredPost.title}
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>

                {/* Content */}
                <div className="w-full lg:w-1/2 p-8 lg:p-12 flex flex-col justify-center">
                  <span className="inline-block px-3 py-1 bg-[#FFF4EB] text-[#E87722] text-xs font-semibold rounded-full mb-5 w-fit">
                    {CATEGORY_LABELS[featuredPost.categoryId] ?? featuredPost.categoryId}
                  </span>
                  <h2
                    className="text-[#1A1410] mb-4 group-hover:text-[#E87722] transition-colors leading-tight"
                    style={{ fontFamily: 'var(--font-display)' }}
                  >
                    {featuredPost.title}
                  </h2>
                  <p className="text-[#4A4540] leading-relaxed mb-8 text-base">
                    {featuredPost.excerpt}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-[#8B847C] text-sm flex items-center gap-2">
                      <Clock size={14} />
                      {featuredPost.readTime} · {featuredPost.date}
                    </span>
                    <span className="btn-ghost text-sm">
                      Читать статью <ArrowRight size={14} />
                    </span>
                  </div>
                </div>
              </div>
            </Link>
          </div>
        </section>
      )}

      {/* ── Filter tabs ── */}
      <div className="sticky top-[72px] bg-white border-b border-[rgba(26,20,16,0.08)] z-10 py-3">
        <div className="container">
          <div className="flex items-center gap-2 overflow-x-auto no-scrollbar">
            {FILTER_TABS.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveFilter(tab.id)}
                className={
                  activeFilter === tab.id
                    ? 'bg-[#E87722] text-white rounded-full px-4 py-2 text-sm font-semibold whitespace-nowrap transition-all'
                    : 'text-[#4A4540] hover:text-[#E87722] px-4 py-2 text-sm font-medium whitespace-nowrap transition-colors'
                }
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* ── Posts grid ── */}
      <section className="py-16 bg-[#F7F5F2]">
        <div className="container">
          {filteredPosts.length === 0 ? (
            <p className="text-[#8B847C] text-center py-12">
              Статей в этой категории пока нет.
            </p>
          ) : (
            <motion.div
              key={activeFilter}
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {filteredPosts.map((post) => (
                <motion.div key={post.slug} variants={fadeUpVariants}>
                  <Link
                    href={`/blog/${post.slug}`}
                    className="group block bg-white rounded-2xl overflow-hidden border border-[rgba(26,20,16,0.06)] hover:border-[#E87722] hover:shadow-lg transition-all flex flex-col h-full"
                  >
                    {/* Image */}
                    <div className="relative aspect-[16/10] overflow-hidden bg-[#F7F5F2]">
                      <Image
                        src={post.image}
                        alt={post.title}
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <span className="absolute top-3 left-3 px-3 py-1 bg-white/95 backdrop-blur text-[#E87722] text-xs font-semibold rounded-full">
                        {CATEGORY_LABELS[post.categoryId] ?? post.categoryId}
                      </span>
                    </div>

                    {/* Card body */}
                    <div className="p-6 flex-1 flex flex-col">
                      <h3 className="text-[#1A1410] mb-3 font-semibold group-hover:text-[#E87722] transition-colors leading-snug">
                        {post.title}
                      </h3>
                      <p className="text-[#4A4540] text-sm leading-relaxed mb-5 flex-1 line-clamp-3">
                        {post.excerpt}
                      </p>
                      <div className="flex items-center justify-between pt-4 border-t border-[rgba(26,20,16,0.06)]">
                        <span className="text-[#8B847C] text-xs flex items-center gap-1">
                          <Clock size={12} /> {post.readTime}
                        </span>
                        <span className="text-[#E87722] flex items-center gap-1 text-sm font-medium group-hover:gap-2 transition-all">
                          Читать <ArrowRight size={14} />
                        </span>
                      </div>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </motion.div>
          )}
        </div>
      </section>

      {/* ── Newsletter / CTA ── */}
      <section className="bg-[#1A1410] py-16">
        <div className="container text-center">
          <h2
            className="text-white mb-4"
            style={{ fontFamily: 'var(--font-display)' }}
          >
            Есть вопрос о кофемашине?
          </h2>
          <p className="text-[#8B847C] text-lg mb-10 max-w-lg mx-auto">
            Позвоните — ответим бесплатно. Диагностика по телефону.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="tel:+78121234567"
              className="btn-primary flex items-center gap-2"
            >
              <Phone size={16} />
              Позвонить
            </a>
            <a
              href="https://wa.me/78121234567"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary flex items-center gap-2"
            >
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="currentColor"
                aria-hidden="true"
              >
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              WhatsApp
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
