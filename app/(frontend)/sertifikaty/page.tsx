import type { Metadata } from 'next'
import Link from 'next/link'
import { ChevronRight, Award, GraduationCap, MapPin, BookOpen } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Сертификаты и авторизации | CoffeeMaster СПб',
  description:
    'Авторизованный сервисный центр Jura, De\'Longhi, Saeco, BORK, Bosch, Siemens. Сертифицированные мастера с обучением в Швейцарии, Италии и Германии.',
  alternates: { canonical: '/sertifikaty' },
  openGraph: {
    title: 'Сертификаты и авторизации | CoffeeMaster СПб',
    description: 'Документально подтверждённая квалификация и авторизации производителей.',
    locale: 'ru_RU',
    type: 'website',
  },
}

const certificates = [
  {
    org: 'Jura Elektroapparate AG',
    type: 'Авторизованный сервисный партнёр',
    year: '2018',
    bg: 'from-[#FFF4EB] to-white',
  },
  {
    org: "De'Longhi Appliances S.r.l.",
    type: 'Сертификат сервисного центра',
    year: '2017',
    bg: 'from-[#F7F5F2] to-white',
  },
  {
    org: 'Saeco Professional',
    type: 'Авторизация на ремонт и ТО',
    year: '2019',
    bg: 'from-[#FFF9F2] to-white',
  },
  {
    org: 'BORK Service Network',
    type: 'Партнёр сервисной сети',
    year: '2016',
    bg: 'from-[#FFF4EB] to-white',
  },
  {
    org: 'Bosch Hausgeräte',
    type: 'Авторизованный мастер',
    year: '2020',
    bg: 'from-[#F7F5F2] to-white',
  },
  {
    org: 'Siemens Home Appliances',
    type: 'Сертификат на сервис EQ-серии',
    year: '2020',
    bg: 'from-[#FFF9F2] to-white',
  },
  {
    org: 'SCA — Specialty Coffee Association',
    type: 'Профессиональный калибровщик',
    year: '2021',
    bg: 'from-[#FFF4EB] to-white',
  },
  {
    org: 'ISO 9001:2015',
    type: 'Сертификат системы менеджмента качества',
    year: '2022',
    bg: 'from-[#F7F5F2] to-white',
  },
]

const brandAuth = [
  { name: 'Jura', since: 2018 },
  { name: "De'Longhi", since: 2017 },
  { name: 'Saeco', since: 2019 },
  { name: 'BORK', since: 2016 },
  { name: 'Bosch', since: 2020 },
  { name: 'Siemens', since: 2020 },
]

const trainings = [
  {
    Icon: MapPin,
    place: 'Швейцария',
    title: 'Учебный центр Jura, Niederbuchsiten',
    text: 'Ежегодное обучение по новым моделям линейки ENA, GIGA и Z. Калибровка помола, ремонт заварочных блоков нового поколения.',
  },
  {
    Icon: GraduationCap,
    place: 'Италия',
    title: "Академия De'Longhi, Тревизо",
    text: 'Курсы по сервису полностью автоматических машин Dinamica, Eletta, Maestosa. Диагностика гидросистем и капучинаторов.',
  },
  {
    Icon: BookOpen,
    place: 'Германия',
    title: 'Bosch / Siemens Service Academy, Мюнхен',
    text: 'Сертификация мастеров по линейке EQ.6, EQ.9, VeroAroma. Электронные блоки управления и прошивки.',
  },
  {
    Icon: Award,
    place: 'Россия',
    title: 'Внутренний учебный центр CoffeeMaster',
    text: 'Регулярные внутренние аттестации, разбор сложных кейсов, обучение младших мастеров под наставничеством.',
  },
]

export default function SertifikatyPage() {
  return (
    <div className="pt-[72px] bg-[#F7F5F2]">
      <section className="bg-gradient-to-br from-[#FFF9F2] to-white py-14 lg:py-24 border-b border-[rgba(26,20,16,0.06)]">
        <div className="container">
          <nav className="flex items-center gap-2 text-[13px] text-[#6B6661] mb-6">
            <Link href="/" className="hover:text-[#E87722] transition-colors">
              Главная
            </Link>
            <ChevronRight size={14} />
            <span className="text-[#1A1410]">Сертификаты</span>
          </nav>
          <span className="section-label mb-5">Авторизации</span>
          <h1
            className="text-[#1A1410] max-w-3xl mt-5 mb-5"
            style={{ fontFamily: 'var(--font-display)' }}
          >
            Сертификаты и{' '}
            <span className="bg-gradient-to-r from-[#E87722] to-[#C9A96E] bg-clip-text text-transparent">
              авторизации производителей
            </span>
          </h1>
          <p className="text-[#4A4540] text-lg max-w-2xl">
            Мы официально авторизованы шестью ведущими производителями кофемашин. Мастера регулярно проходят обучение в Швейцарии, Италии и Германии.
          </p>
        </div>
      </section>

      <section className="py-16 lg:py-20 bg-white">
        <div className="container">
          <span className="section-label mb-5">Документы</span>
          <h2
            className="text-[#1A1410] mt-5 mb-12 max-w-2xl"
            style={{ fontFamily: 'var(--font-display)' }}
          >
            Действующие сертификаты
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {certificates.map((c) => (
              <div
                key={c.org}
                className={`bg-gradient-to-br ${c.bg} rounded-2xl border border-[rgba(26,20,16,0.06)] p-8 hover:border-[#E87722] transition-colors`}
              >
                <div className="aspect-[4/5] flex flex-col">
                  <div className="flex items-start justify-between mb-6">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#E87722] to-[#C9A96E] flex items-center justify-center">
                      <Award size={22} className="text-white" />
                    </div>
                    <span
                      className="text-[24px] text-[#E87722]"
                      style={{ fontFamily: 'var(--font-display)' }}
                    >
                      {c.year}
                    </span>
                  </div>
                  <div className="flex-1 flex flex-col justify-end">
                    <p className="text-[11px] uppercase tracking-[0.15em] text-[#6B6661] mb-2">
                      {c.type}
                    </p>
                    <h3
                      className="text-[#1A1410] text-[18px] leading-snug"
                      style={{ fontFamily: 'var(--font-display)' }}
                    >
                      {c.org}
                    </h3>
                  </div>
                  <div className="h-px bg-[rgba(232,119,34,0.2)] mt-6" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-20">
        <div className="container">
          <span className="section-label mb-5">Авторизованные бренды</span>
          <h2
            className="text-[#1A1410] mt-5 mb-3 max-w-2xl"
            style={{ fontFamily: 'var(--font-display)' }}
          >
            Производители, доверяющие нам сервис
          </h2>
          <p className="text-[#4A4540] mb-12 max-w-2xl">
            Авторизация производителя означает доступ к оригинальным запчастям, технической документации и обновлениям прошивок.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {brandAuth.map((b) => (
              <div
                key={b.name}
                className="bg-white rounded-2xl border border-[rgba(26,20,16,0.06)] p-6 text-center hover:border-[#E87722] transition-colors"
              >
                <p
                  className="text-[#1A1410] text-[22px] mb-2"
                  style={{ fontFamily: 'var(--font-display)' }}
                >
                  {b.name}
                </p>
                <p className="text-[12px] uppercase tracking-[0.15em] text-[#E87722]">
                  с {b.since}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-20 bg-white">
        <div className="container">
          <span className="section-label mb-5">Обучение мастеров</span>
          <h2
            className="text-[#1A1410] mt-5 mb-3 max-w-2xl"
            style={{ fontFamily: 'var(--font-display)' }}
          >
            Где учатся наши специалисты
          </h2>
          <p className="text-[#4A4540] mb-12 max-w-2xl">
            Технологии меняются — каждый мастер ежегодно проходит переаттестацию у производителей и в собственном учебном центре.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {trainings.map(({ Icon, place, title, text }) => (
              <div
                key={title}
                className="bg-[#FFF9F2] rounded-2xl border border-[rgba(26,20,16,0.06)] p-8 hover:border-[#E87722] transition-colors"
              >
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-[#E87722] to-[#C9A96E] flex items-center justify-center">
                    <Icon size={20} className="text-white" />
                  </div>
                  <span className="text-[12px] uppercase tracking-[0.15em] text-[#E87722] font-semibold">
                    {place}
                  </span>
                </div>
                <h3 className="text-[#1A1410] text-[20px] font-semibold mb-3">{title}</h3>
                <p className="text-[#4A4540] leading-relaxed">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
