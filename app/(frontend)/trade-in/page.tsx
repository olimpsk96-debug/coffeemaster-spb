import type { Metadata } from 'next'
import Link from 'next/link'
import { CheckCircle2, Phone, Search, Calculator, FileCheck, MessageCircle, ArrowRight, Star } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Trade-In кофемашин в Санкт-Петербурге — обмен с доплатой',
  description:
    'Сдайте старую кофемашину в зачёт новой. Принимаем любые бренды и состояния. Бесплатная оценка за 24 часа. Доплата до 60% от стоимости новой модели. Официальный договор.',
  keywords: [
    'trade-in кофемашин СПб',
    'обмен кофемашины на новую',
    'сдать кофемашину в зачёт',
    'trade-in кофемашина Санкт-Петербург',
    'выкуп кофемашин',
  ],
  openGraph: {
    title: 'Trade-In кофемашин в Санкт-Петербурге — обмен с доплатой',
    description: 'Сдайте старую кофемашину в зачёт новой. Оценка за 24 часа. Любые бренды.',
    locale: 'ru_RU',
    type: 'website',
  },
}

const steps = [
  {
    num: '01',
    icon: Phone,
    title: 'Заявка online',
    text: 'Опишите вашу кофемашину: бренд, модель, год покупки и текущее состояние. Занимает не больше 2 минут.',
  },
  {
    num: '02',
    icon: Search,
    title: 'Бесплатный осмотр',
    text: 'Мастер осматривает машину у вас дома или в нашем сервисе. Выезд по СПб — бесплатно. Никаких скрытых условий.',
  },
  {
    num: '03',
    icon: Calculator,
    title: 'Оценка и выбор',
    text: 'Называем зачётную стоимость и помогаем подобрать новую модель. Никаких давлений — только честный расчёт.',
  },
  {
    num: '04',
    icon: FileCheck,
    title: 'Обмен с документами',
    text: 'Подписываем официальный договор купли-продажи. Вы уходите с новой машиной и полным пакетом документов.',
  },
]

const acceptedTypes = [
  {
    type: 'Суперавтоматические',
    note: 'Зерновые автоматы с капучинатором и встроенной кофемолкой',
  },
  {
    type: 'Рожковые',
    note: 'Профессиональные и бытовые эспрессо-машины под молотый кофе',
  },
  {
    type: 'Капсульные',
    note: 'Nespresso, Dolce Gusto, Tassimo и другие капсульные форматы',
  },
  {
    type: 'Капельные',
    note: 'Классические фильтровые кофеварки любой мощности',
  },
  {
    type: 'Гейзерные',
    note: 'Мока-машины и гейзерные кофеварки любого объёма',
  },
  {
    type: 'Профессиональные',
    note: 'Коммерческое оборудование для кафе, офисов и ресторанов',
  },
]

const comparisonRows = [
  {
    param: 'Время на оформление',
    tradeIn: '1 день',
    avito: '2–4 недели',
    repair: 'не применимо',
  },
  {
    param: 'Гарантия сделки',
    tradeIn: '✓ Договор',
    avito: '✗ Нет',
    repair: '✗ Нет',
  },
  {
    param: 'Зачётная доплата',
    tradeIn: 'до 60%',
    avito: 'до 50% (с торгом)',
    repair: '0 ₽',
  },
  {
    param: 'Официальные документы',
    tradeIn: '✓ Да',
    avito: '✗ Обычно нет',
    repair: '✗ Нет',
  },
  {
    param: 'Получаете новую машину',
    tradeIn: '✓ Сразу',
    avito: '✗ Только деньги',
    repair: '✗ Нет',
  },
  {
    param: 'Бесплатный выезд',
    tradeIn: '✓ Да',
    avito: '✗ За ваш счёт',
    repair: '✓ Да',
  },
]

const benefits = [
  'Бесплатная оценка без каких-либо обязательств с вашей стороны',
  'Официальный договор купли-продажи с печатью и подписью',
  'Персональная помощь с выбором новой модели под ваши задачи',
  'Доставка и забор кофемашины на нашем транспорте — бесплатно',
  'Настройка и первый запуск новой машины в подарок',
  'Консультация по уходу, очистке и продлению срока службы',
]

const faqs = [
  {
    q: 'Принимаете ли неисправные машины?',
    a: 'Да, принимаем кофемашины в любом состоянии — рабочие, неисправные, без деталей, после падения или затопления. Оценочная стоимость зависит от степени износа, однако неисправность не является причиной отказа. Даже машина «под списание» может быть принята в зачёт.',
  },
  {
    q: 'Как рассчитывается зачётная стоимость?',
    a: 'Оценка проводится по четырём критериям: марка и модель (насколько востребована на рынке), год выпуска, техническое состояние (работает / требует ремонта), внешний вид (царапины, сколы, трещины). Среднее значение по нашей базе — 35% от розничной цены аналогичной новой модели.',
  },
  {
    q: 'Нужны ли документы на старую машину?',
    a: 'Нет, паспорт техники, чеки и гарантийные талоны не обязательны. Однако при наличии оригинальных документов оценочная стоимость будет выше — это подтверждает легальность происхождения и полную историю машины.',
  },
  {
    q: 'Могу ли я получить деньги вместо новой машины?',
    a: 'Программа Trade-In предусматривает только обмен: старая машина плюс доплата в обмен на новую модель из нашего ассортимента. Денежный выкуп в рамках Trade-In не предусмотрен. Если вас интересует именно выкуп — свяжитесь с нами, мы обсудим условия отдельно.',
  },
  {
    q: 'Сколько занимает весь процесс?',
    a: 'При наличии нужной модели весь процесс — от заявки до получения новой машины — занимает от 1 рабочего дня. Стандартный срок: заявка сегодня → осмотр завтра → обмен в тот же день. Если нужная модель под заказ, срок может составить 3–5 дней.',
  },
]

export default function TradeInPage() {
  return (
    <div className="pt-[72px]">

      {/* ── HERO ─────────────────────────────────────────────────────── */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#FFF9F2] via-[#FFF4EB] to-[#F7F5F2] py-20 lg:py-28">
        {/* decorative circle */}
        <div
          aria-hidden
          className="pointer-events-none absolute -right-40 -top-40 h-[600px] w-[600px] rounded-full"
          style={{ background: 'radial-gradient(circle, rgba(232,119,34,0.10) 0%, transparent 70%)' }}
        />
        <div className="container relative">
          {/* badge row */}
          <div className="mb-8 flex flex-wrap items-center gap-3">
            <span className="section-label">Trade-In</span>
            <div className="flex flex-wrap gap-2">
              {['Оценка за 24 часа', 'Доплата до 60%', 'Любой бренд'].map((stat) => (
                <span
                  key={stat}
                  className="inline-flex items-center gap-1.5 rounded-full border border-[rgba(232,119,34,0.25)] bg-white/70 px-3 py-1 text-xs font-medium text-[#4A4540]"
                >
                  <span className="h-1.5 w-1.5 rounded-full bg-[#E87722]" />
                  {stat}
                </span>
              ))}
            </div>
          </div>

          <h1
            className="mb-6 max-w-3xl text-[#1A1410]"
            style={{ fontFamily: 'var(--font-display)' }}
          >
            Старая кофемашина —{' '}
            <span className="bg-gradient-to-r from-[#E87722] to-[#C9A96E] bg-clip-text text-transparent">
              в зачёт новой
            </span>
          </h1>

          <p className="mb-10 max-w-2xl text-lg leading-relaxed text-[#4A4540]">
            Принимаем любые кофемашины&nbsp;— рабочие, неисправные, любого возраста и бренда.
            Бесплатная оценка, официальный договор и доплата до&nbsp;60% от стоимости новой модели.
          </p>

          <div className="flex flex-wrap gap-3">
            <a href="tel:+78121234567" className="btn-primary inline-flex items-center gap-2">
              <Phone size={16} />
              Позвонить сейчас
            </a>
            <a
              href="https://wa.me/79991234567"
              className="btn-secondary inline-flex items-center gap-2"
              target="_blank"
              rel="noopener noreferrer"
            >
              <MessageCircle size={16} />
              Написать в WhatsApp
            </a>
          </div>

          {/* trust note */}
          <p className="mt-6 flex items-center gap-2 text-sm text-[#8B847C]">
            <Star size={14} className="text-[#E87722]" fill="#E87722" />
            Более 4&nbsp;800 машин принято в зачёт с 2017 года
          </p>
        </div>
      </section>

      {/* ── STATS BAR ────────────────────────────────────────────────── */}
      <section className="bg-[#1A1410]">
        <div className="container">
          <div className="grid grid-cols-2 divide-x divide-white/10 lg:grid-cols-4">
            {[
              { value: '4 800+', label: 'принятых машин' },
              { value: '35%', label: 'средний зачёт' },
              { value: '24 ч', label: 'срок оценки' },
              { value: '0 ₽', label: 'осмотр и выезд' },
            ].map((stat) => (
              <div
                key={stat.label}
                className="flex flex-col items-center justify-center gap-1 py-6 text-center"
              >
                <span className="font-mono text-2xl font-bold text-[#E87722] lg:text-3xl">
                  {stat.value}
                </span>
                <span className="text-xs uppercase tracking-widest text-white/50">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── HOW IT WORKS ─────────────────────────────────────────────── */}
      <section className="bg-white py-20 lg:py-28">
        <div className="container">
          <div className="mb-12">
            <span className="section-label mb-4 block">Как это работает</span>
            <h2 className="max-w-xl text-[#1A1410]" style={{ fontFamily: 'var(--font-display)' }}>
              Четыре шага до новой кофемашины
            </h2>
            <p className="mt-4 max-w-lg text-[#4A4540]">
              Весь процесс занимает от одного рабочего дня. Вам не нужно никуда ехать —
              мастер приедет сам.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {steps.map((s) => {
              const Icon = s.icon
              return (
                <div
                  key={s.num}
                  className="group relative rounded-2xl border border-[rgba(26,20,16,0.06)] bg-[#F7F5F2] p-7 transition-all duration-300 hover:-translate-y-1 hover:border-[#E87722]/30 hover:shadow-lg"
                >
                  <span className="absolute right-6 top-5 font-mono text-5xl font-bold leading-none text-[#1A1410]/05 select-none">
                    {s.num}
                  </span>
                  <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-[#FFF4EB]">
                    <Icon size={22} className="text-[#E87722]" />
                  </div>
                  <h3 className="mb-2 text-lg font-semibold text-[#1A1410]">{s.title}</h3>
                  <p className="text-sm leading-relaxed text-[#4A4540]">{s.text}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* ── WHAT WE ACCEPT ───────────────────────────────────────────── */}
      <section className="bg-[#F7F5F2] py-20 lg:py-28">
        <div className="container">
          <div className="mb-12">
            <span className="section-label mb-4 block">Что принимаем</span>
            <h2 className="max-w-2xl text-[#1A1410]" style={{ fontFamily: 'var(--font-display)' }}>
              Принимаем кофемашины всех типов и брендов
            </h2>
            <p className="mt-4 max-w-lg text-[#4A4540]">
              Неважно, рабочая машина или нет — оценка проводится бесплатно,
              отказов по типу или состоянию не бывает.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {acceptedTypes.map((item) => (
              <div
                key={item.type}
                className="flex items-start gap-4 rounded-xl border border-[rgba(26,20,16,0.06)] bg-white p-5 transition-all duration-200 hover:border-[#E87722]/30"
              >
                <div className="mt-0.5 shrink-0">
                  <CheckCircle2 size={20} className="text-[#E87722]" />
                </div>
                <div>
                  <div className="font-semibold text-[#1A1410]">{item.type}</div>
                  <div className="mt-1 text-sm text-[#8B847C]">{item.note}</div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 rounded-2xl border border-[rgba(232,119,34,0.2)] bg-[#FFF4EB] p-6">
            <p className="text-sm font-medium text-[#1A1410]">
              Принимаем все бренды:
            </p>
            <p className="mt-2 text-sm leading-relaxed text-[#4A4540]">
              Jura, De&rsquo;Longhi, Saeco, BORK, Bosch, Siemens, Melitta, Nivona, Gaggia, Krups,
              WMF, Miele, Smeg, KitchenAid, Philips, Nespresso, Illy, Lavazza,
              Rocket Espresso и другие — полный список брендов уточняйте по телефону.
            </p>
          </div>
        </div>
      </section>

      {/* ── COMPARISON TABLE ─────────────────────────────────────────── */}
      <section className="bg-white py-20 lg:py-28">
        <div className="container">
          <div className="mb-12">
            <span className="section-label mb-4 block">Сравнение</span>
            <h2 className="max-w-2xl text-[#1A1410]" style={{ fontFamily: 'var(--font-display)' }}>
              Trade-In vs другие варианты
            </h2>
            <p className="mt-4 max-w-lg text-[#4A4540]">
              Честный взгляд на три пути расстаться со старой машиной.
            </p>
          </div>

          <div className="overflow-x-auto rounded-2xl border border-[rgba(26,20,16,0.06)] shadow-sm">
            <table className="w-full min-w-[600px] border-collapse text-sm">
              <thead>
                <tr className="bg-[#FFF4EB]">
                  <th className="px-6 py-4 text-left font-semibold text-[#1A1410]">Параметр</th>
                  <th className="px-6 py-4 text-center font-semibold text-[#E87722]">
                    Trade-In у нас
                  </th>
                  <th className="px-6 py-4 text-center font-semibold text-[#4A4540]">
                    Продать на Авито
                  </th>
                  <th className="px-6 py-4 text-center font-semibold text-[#4A4540]">
                    Ремонт
                  </th>
                </tr>
              </thead>
              <tbody>
                {comparisonRows.map((row, idx) => (
                  <tr
                    key={row.param}
                    className={idx % 2 === 0 ? 'bg-white' : 'bg-[#F7F5F2]/60'}
                  >
                    <td className="px-6 py-4 font-medium text-[#1A1410]">{row.param}</td>
                    <td className="px-6 py-4 text-center font-medium text-[#E87722]">
                      {row.tradeIn}
                    </td>
                    <td className="px-6 py-4 text-center text-[#4A4540]">{row.avito}</td>
                    <td className="px-6 py-4 text-center text-[#4A4540]">{row.repair}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* ── BENEFITS ─────────────────────────────────────────────────── */}
      <section className="bg-[#F7F5F2] py-20 lg:py-28">
        <div className="container">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <div>
              <span className="section-label mb-4 block">Условия сделки</span>
              <h2 className="mb-4 text-[#1A1410]" style={{ fontFamily: 'var(--font-display)' }}>
                Что входит в Trade-In
              </h2>
              <p className="mb-8 text-[#4A4540]">
                Никаких скрытых платежей и неприятных сюрпризов. Всё, что перечислено
                ниже,&nbsp;— включено в стандартные условия программы и не требует доплаты.
              </p>
              <ul className="space-y-4">
                {benefits.map((b) => (
                  <li key={b} className="flex items-start gap-3">
                    <CheckCircle2 size={20} className="mt-0.5 shrink-0 text-[#E87722]" />
                    <span className="text-[#1A1410]">{b}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* side card */}
            <div className="rounded-2xl border border-[rgba(26,20,16,0.06)] bg-white p-8 shadow-sm">
              <div className="mb-6 flex items-start gap-4 rounded-xl bg-[#FFF4EB] p-4">
                <ArrowRight size={20} className="mt-0.5 shrink-0 text-[#E87722]" />
                <p className="text-sm leading-relaxed text-[#4A4540]">
                  <strong className="text-[#1A1410]">Пример:</strong> Ваш De&rsquo;Longhi 2019 года
                  оценивается в&nbsp;8&nbsp;000&nbsp;₽. Вы выбираете новую Jura за
                  60&nbsp;000&nbsp;₽. Итого доплачиваете 52&nbsp;000&nbsp;₽ и получаете новую
                  машину с гарантией, настроенную и готовую к работе.
                </p>
              </div>

              <div className="mb-6 space-y-3 text-sm">
                {[
                  ['Диагностика и оценка', 'Бесплатно'],
                  ['Забор старой машины', 'Бесплатно'],
                  ['Доставка новой', 'Бесплатно'],
                  ['Настройка и запуск', 'Бесплатно'],
                  ['Договор купли-продажи', 'Включён'],
                ].map(([label, value]) => (
                  <div
                    key={label}
                    className="flex items-center justify-between border-b border-[rgba(26,20,16,0.06)] pb-2 last:border-0 last:pb-0"
                  >
                    <span className="text-[#4A4540]">{label}</span>
                    <span className="font-medium text-[#E87722]">{value}</span>
                  </div>
                ))}
              </div>

              <a href="tel:+78121234567" className="btn-primary inline-flex w-full items-center justify-center gap-2">
                <Phone size={16} />
                Узнать зачётную стоимость
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ── FAQ ──────────────────────────────────────────────────────── */}
      <section className="bg-white py-20 lg:py-28">
        <div className="container">
          <div className="mb-12">
            <span className="section-label mb-4 block">FAQ</span>
            <h2 className="max-w-xl text-[#1A1410]" style={{ fontFamily: 'var(--font-display)' }}>
              Частые вопросы о Trade-In
            </h2>
          </div>

          <div className="mx-auto max-w-3xl divide-y divide-[rgba(26,20,16,0.06)]">
            {faqs.map((faq) => (
              <details
                key={faq.q}
                className="group py-1"
              >
                <summary
                  className="flex cursor-pointer list-none items-center justify-between gap-4 py-4 font-medium text-[#1A1410] marker:hidden [&::-webkit-details-marker]:hidden"
                >
                  <span>{faq.q}</span>
                  <span className="shrink-0 transition-transform duration-200 group-open:rotate-45">
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                      <path d="M10 4v12M4 10h12" stroke="#E87722" strokeWidth="1.5" strokeLinecap="round" />
                    </svg>
                  </span>
                </summary>
                <div className="pb-5 pr-8 text-[#4A4540] leading-relaxed">
                  {faq.a}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ──────────────────────────────────────────────────────── */}
      <section className="bg-[#1A1410] py-20 lg:py-28">
        <div className="container text-center">
          <span className="section-label mb-6 block" style={{ color: 'rgba(255,255,255,0.35)' }}>
            Начать Trade-In
          </span>
          <h2
            className="mb-4 text-white"
            style={{ fontFamily: 'var(--font-display)' }}
          >
            Узнайте стоимость вашей машины
          </h2>
          <p className="mx-auto mb-10 max-w-lg text-white/60">
            Позвоните или напишите нам — оценка проводится бесплатно, без обязательств.
            Мастер выедет в удобное для вас время.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <a
              href="tel:+78121234567"
              className="inline-flex items-center gap-2 rounded-full border border-[#E87722] bg-[#E87722] px-8 py-4 text-xs font-semibold uppercase tracking-widest text-white transition-all duration-300 hover:bg-transparent hover:text-[#E87722]"
            >
              <Phone size={16} />
              +7 (812) 123-45-67
            </a>
            <a
              href="https://wa.me/79991234567"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-transparent px-8 py-4 text-xs font-semibold uppercase tracking-widest text-white/80 transition-all duration-300 hover:border-white/50 hover:text-white"
            >
              <MessageCircle size={16} />
              WhatsApp
            </a>
          </div>
          <p className="mt-8 text-xs text-white/30">
            Работаем с 9:00 до 21:00 · Пн–Вс · Выезд по СПб и Ленобласти
          </p>
        </div>
      </section>

    </div>
  )
}
