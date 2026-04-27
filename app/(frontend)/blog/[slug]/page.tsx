import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import Image from 'next/image'
import { Phone, CheckCircle2, Lightbulb, Clock, Calendar, User, Tag, ChevronRight, MessageCircle } from 'lucide-react'
import { BreadcrumbJsonLd, FAQJsonLd } from '@/components/shared/JsonLd'
import { blogPostsMap, blogPosts } from '@/lib/blog-data'

interface BlogPost {
  slug: string
  category: string
  categoryId: string
  title: string
  titleSeo: string
  excerpt: string
  date: string
  dateIso: string
  readTime: string
  image: string
  imageAlt: string
  author: string
  tags: string[]
  keyPoints: string[]
  faq: { question: string; answer: string }[]
  content: string
  relatedSlugs: string[]
}

export function generateStaticParams() {
  return blogPosts.map((p: BlogPost) => ({ slug: p.slug }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params
  const post = blogPostsMap[slug]
  if (!post) return { title: 'Статья не найдена' }

  return {
    title: post.titleSeo,
    description: post.excerpt,
    alternates: {
      canonical: `https://coffeemaster.spb.ru/blog/${post.slug}`,
    },
    openGraph: {
      title: post.titleSeo,
      description: post.excerpt,
      type: 'article',
      publishedTime: post.dateIso,
      authors: [post.author],
      images: [{ url: post.image, alt: post.imageAlt }],
      locale: 'ru_RU',
      url: `https://coffeemaster.spb.ru/blog/${post.slug}`,
    },
  }
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const post = blogPostsMap[slug]
  if (!post) notFound()

  const relatedPosts = blogPosts.filter((p: BlogPost) => post.relatedSlugs.includes(p.slug))

  const authorInitials = post.author
    .split(' ')
    .map((n: string) => n[0])
    .join('')
    .slice(0, 2)
    .toUpperCase()

  const articleJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: post.title,
    description: post.excerpt,
    image: post.image,
    datePublished: post.dateIso,
    dateModified: post.dateIso,
    author: {
      '@type': 'Person',
      name: post.author,
    },
    publisher: {
      '@type': 'Organization',
      name: 'CoffeeMaster СПб',
      url: 'https://coffeemaster.spb.ru',
    },
    mainEntityOfPage: `https://coffeemaster.spb.ru/blog/${post.slug}`,
  }

  return (
    <div className="pt-[72px]">
      {/* JSON-LD */}
      <BreadcrumbJsonLd
        items={[
          { name: 'Главная', url: 'https://coffeemaster.spb.ru' },
          { name: 'Блог', url: 'https://coffeemaster.spb.ru/blog' },
          { name: post.title, url: `https://coffeemaster.spb.ru/blog/${post.slug}` },
        ]}
      />
      {post.faq && post.faq.length > 0 && <FAQJsonLd faq={post.faq} />}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />

      {/* A) Hero section */}
      <section className="bg-gradient-to-br from-[#FFF9F2] to-white py-14 lg:py-20">
        <div className="container max-w-5xl">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-sm text-[#8B847C] mb-8" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-[#E87722] transition-colors">Главная</Link>
            <ChevronRight size={14} className="flex-shrink-0" />
            <Link href="/blog" className="hover:text-[#E87722] transition-colors">Блог</Link>
            <ChevronRight size={14} className="flex-shrink-0" />
            <span className="text-[#1A1410] truncate max-w-[200px] sm:max-w-none">{post.title}</span>
          </nav>

          {/* Category badge */}
          <div className="mb-5">
            <span className="section-label">{post.category}</span>
          </div>

          {/* H1 */}
          <h1
            className="text-[#1A1410] mb-6"
            style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(2rem, 4vw, 3.5rem)', fontWeight: 400, lineHeight: 1.15 }}
          >
            {post.title}
          </h1>

          {/* Meta row */}
          <div className="flex flex-wrap items-center gap-4 text-sm text-[#8B847C] mb-6">
            {/* Author avatar + name */}
            <div className="flex items-center gap-2">
              <div
                className="w-8 h-8 rounded-full flex items-center justify-center text-white text-xs font-semibold flex-shrink-0"
                style={{ background: 'linear-gradient(135deg, #E87722, #C9A96E)' }}
                aria-hidden="true"
              >
                {authorInitials}
              </div>
              <span className="text-[#4A4540] font-medium">{post.author}</span>
            </div>

            <span className="w-px h-4 bg-[rgba(26,20,16,0.12)]" aria-hidden="true" />

            <span className="flex items-center gap-1.5">
              <Calendar size={14} />
              <time dateTime={post.dateIso}>{post.date}</time>
            </span>

            <span className="w-px h-4 bg-[rgba(26,20,16,0.12)]" aria-hidden="true" />

            <span className="flex items-center gap-1.5">
              <Clock size={14} />
              {post.readTime}
            </span>
          </div>

          {/* Excerpt */}
          <p className="text-[#4A4540] text-lg leading-relaxed max-w-2xl">
            {post.excerpt}
          </p>
        </div>
      </section>

      {/* B) Featured image */}
      <div className="container max-w-5xl py-0 pb-8">
        <div className="relative w-full max-h-[480px] overflow-hidden rounded-2xl">
          <Image
            src={post.image}
            alt={post.imageAlt}
            width={1200}
            height={480}
            className="w-full object-cover max-h-[480px]"
            priority
          />
        </div>
      </div>

      {/* C) Content area — 2/3 + 1/3 grid */}
      <section className="py-10 lg:py-14 bg-white">
        <div className="container max-w-5xl">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 lg:gap-12">
            {/* Left column — 2/3 */}
            <div className="lg:col-span-2 min-w-0">
              {/* "Главное из статьи" box */}
              {post.keyPoints && post.keyPoints.length > 0 && (
                <div className="bg-[#FFF4EB] border border-[rgba(232,119,34,0.15)] rounded-2xl p-7 mb-10">
                  <div className="flex items-center gap-2.5 mb-5">
                    <Lightbulb size={20} className="text-[#E87722] flex-shrink-0" />
                    <span className="font-semibold text-[#1A1410] text-base">Главное из статьи</span>
                  </div>
                  <ul className="space-y-3">
                    {post.keyPoints.map((point: string, i: number) => (
                      <li key={i} className="flex items-start gap-3">
                        <CheckCircle2 size={17} className="text-[#E87722] flex-shrink-0 mt-0.5" />
                        <span className="text-[#4A4540] text-sm leading-relaxed">{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Article body */}
              <div
                className="prose prose-lg max-w-none
                  [&_h2]:font-semibold [&_h2]:text-[#1A1410] [&_h2]:text-2xl [&_h2]:mt-12 [&_h2]:mb-5 [&_h2]:pb-3 [&_h2]:border-b [&_h2]:border-[rgba(26,20,16,0.08)]
                  [&_h3]:font-semibold [&_h3]:text-[#1A1410] [&_h3]:text-xl [&_h3]:mt-8 [&_h3]:mb-4
                  [&_p]:text-[#4A4540] [&_p]:leading-relaxed [&_p]:mb-5
                  [&_ul]:my-5 [&_ul_li]:text-[#4A4540] [&_ul_li]:mb-2 [&_ul_li]:pl-2
                  [&_ol]:my-5 [&_ol_li]:text-[#4A4540] [&_ol_li]:mb-2 [&_ol_li]:pl-2
                  [&_strong]:text-[#1A1410] [&_strong]:font-semibold
                  [&_table]:w-full [&_table]:border-collapse [&_table]:my-8
                  [&_th]:bg-[#F7F5F2] [&_th]:text-[#1A1410] [&_th]:font-semibold [&_th]:px-4 [&_th]:py-3 [&_th]:text-left [&_th]:border [&_th]:border-[rgba(26,20,16,0.08)]
                  [&_td]:px-4 [&_td]:py-3 [&_td]:text-[#4A4540] [&_td]:border [&_td]:border-[rgba(26,20,16,0.08)]
                  [&_tr:hover_td]:bg-[#FFF9F2]"
                dangerouslySetInnerHTML={{ __html: post.content }}
              />

              {/* FAQ accordion */}
              {post.faq && post.faq.length > 0 && (
                <div className="mt-14">
                  <h2
                    className="text-[#1A1410] text-2xl font-semibold mb-6"
                    style={{ fontFamily: 'var(--font-display)' }}
                  >
                    Вопросы и ответы
                  </h2>
                  <div className="space-y-3">
                    {post.faq.map((item: { question: string; answer: string }, i: number) => (
                      <details
                        key={i}
                        className="group border border-[rgba(26,20,16,0.08)] rounded-xl overflow-hidden bg-white"
                      >
                        <summary className="flex items-center justify-between gap-4 px-6 py-4 cursor-pointer list-none select-none font-medium text-[#1A1410] hover:text-[#E87722] transition-colors">
                          <span>{item.question}</span>
                          <svg
                            className="w-5 h-5 flex-shrink-0 text-[#8B847C] transition-transform duration-300 group-open:rotate-180"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth={2}
                          >
                            <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                          </svg>
                        </summary>
                        <div className="px-6 pb-5 pt-1 text-[#4A4540] leading-relaxed border-t border-[rgba(26,20,16,0.06)]">
                          {item.answer}
                        </div>
                      </details>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Right sidebar — 1/3 */}
            <aside className="lg:col-span-1">
              <div className="sticky top-24 space-y-6">
                {/* CTA card */}
                <div className="bg-[#FFF4EB] border border-[rgba(232,119,34,0.15)] rounded-2xl p-6">
                  <span className="section-label mb-4 block">Записаться</span>
                  <h3
                    className="text-[#1A1410] text-xl font-semibold mb-3 leading-snug"
                    style={{ fontFamily: 'var(--font-display)' }}
                  >
                    Нужна помощь с кофемашиной?
                  </h3>
                  <p className="text-[#4A4540] text-sm mb-5 leading-relaxed">
                    Бесплатная диагностика — без разборки. Мастер приедет в день обращения.
                  </p>
                  <div className="space-y-3">
                    <a
                      href="tel:+78121234567"
                      className="btn-primary w-full justify-center"
                    >
                      <Phone size={16} />
                      Позвонить
                    </a>
                    <a
                      href="https://wa.me/79991234567"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-secondary w-full justify-center"
                    >
                      <MessageCircle size={16} />
                      WhatsApp
                    </a>
                  </div>
                  <p className="text-center text-[#8B847C] text-xs mt-4">
                    Диагностика бесплатно
                  </p>
                </div>

                {/* Tags */}
                {post.tags && post.tags.length > 0 && (
                  <div className="bg-white border border-[rgba(26,20,16,0.08)] rounded-2xl p-5">
                    <div className="flex items-center gap-2 mb-4">
                      <Tag size={15} className="text-[#8B847C]" />
                      <span className="text-sm font-semibold text-[#1A1410]">Теги</span>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {post.tags.map((tag: string, i: number) => (
                        <span
                          key={i}
                          className="bg-[#F7F5F2] rounded-md px-3 py-1.5 text-sm text-[#4A4540] hover:bg-[#FFF4EB] hover:text-[#E87722] transition-colors cursor-default"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                {/* Article meta box */}
                <div className="bg-white border border-[rgba(26,20,16,0.08)] rounded-2xl p-5">
                  <span className="text-sm font-semibold text-[#1A1410] block mb-4">О статье</span>
                  <div className="space-y-3">
                    <div className="flex items-center gap-3 text-sm">
                      <User size={15} className="text-[#8B847C] flex-shrink-0" />
                      <div>
                        <p className="text-[#8B847C] text-xs">Автор</p>
                        <p className="text-[#4A4540] font-medium">{post.author}</p>
                      </div>
                    </div>
                    <div className="w-full h-px bg-[rgba(26,20,16,0.06)]" />
                    <div className="flex items-center gap-3 text-sm">
                      <Calendar size={15} className="text-[#8B847C] flex-shrink-0" />
                      <div>
                        <p className="text-[#8B847C] text-xs">Опубликовано</p>
                        <p className="text-[#4A4540] font-medium">
                          <time dateTime={post.dateIso}>{post.date}</time>
                        </p>
                      </div>
                    </div>
                    <div className="w-full h-px bg-[rgba(26,20,16,0.06)]" />
                    <div className="flex items-center gap-3 text-sm">
                      <Clock size={15} className="text-[#8B847C] flex-shrink-0" />
                      <div>
                        <p className="text-[#8B847C] text-xs">Время чтения</p>
                        <p className="text-[#4A4540] font-medium">{post.readTime}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* D) Related posts */}
      {relatedPosts.length > 0 && (
        <section className="bg-[#F7F5F2] py-16">
          <div className="container max-w-5xl">
            <h2
              className="text-[#1A1410] text-2xl font-semibold mb-10"
              style={{ fontFamily: 'var(--font-display)' }}
            >
              Читайте также
            </h2>
            <div className={`grid gap-6 ${relatedPosts.length === 1 ? 'grid-cols-1 max-w-sm' : relatedPosts.length === 2 ? 'grid-cols-1 sm:grid-cols-2' : 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3'}`}>
              {relatedPosts.map((related: BlogPost) => (
                <Link
                  key={related.slug}
                  href={`/blog/${related.slug}`}
                  className="group bg-white rounded-2xl border border-[rgba(26,20,16,0.08)] overflow-hidden hover:border-[#E87722] hover:shadow-[0_12px_32px_rgba(26,20,16,0.08)] transition-all duration-300"
                >
                  {/* Card image */}
                  <div className="relative w-full overflow-hidden" style={{ aspectRatio: '16/10' }}>
                    <Image
                      src={related.image}
                      alt={related.imageAlt}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                  </div>
                  {/* Card body */}
                  <div className="p-5">
                    <span className="section-label mb-3 inline-block text-xs">{related.category}</span>
                    <h3
                      className="text-[#1A1410] font-semibold text-base leading-snug mb-2 group-hover:text-[#E87722] transition-colors"
                      style={{ fontFamily: 'var(--font-display)' }}
                    >
                      {related.title}
                    </h3>
                    <p className="text-[#8B847C] text-sm leading-relaxed line-clamp-2 mb-3">
                      {related.excerpt}
                    </p>
                    <span className="flex items-center gap-1.5 text-[#8B847C] text-xs">
                      <Clock size={12} />
                      {related.readTime}
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* E) Bottom CTA */}
      <section className="bg-[#1A1410] py-16">
        <div className="container max-w-5xl">
          <div className="text-center">
            <p className="text-[#8B847C] text-sm uppercase tracking-widest mb-4 font-medium">Сервисный центр</p>
            <h2
              className="text-white text-3xl lg:text-4xl font-medium mb-4"
              style={{ fontFamily: 'var(--font-display)' }}
            >
              Проблема с кофемашиной?
            </h2>
            <p className="text-[#8B847C] text-base mb-8 max-w-md mx-auto leading-relaxed">
              Диагностика бесплатно. Выезд по СПб и Ленобласти. Гарантия 12 месяцев.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+78121234567"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-lg font-semibold text-sm text-white transition-all duration-300 hover:-translate-y-0.5"
                style={{ background: '#E87722', boxShadow: '0 8px 24px rgba(232,119,34,0.35)' }}
              >
                <Phone size={17} />
                Позвонить
              </a>
              <a
                href="https://wa.me/79991234567"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-lg font-semibold text-sm text-white border border-[rgba(255,255,255,0.15)] hover:border-[rgba(255,255,255,0.35)] transition-all duration-300"
              >
                <MessageCircle size={17} />
                WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
