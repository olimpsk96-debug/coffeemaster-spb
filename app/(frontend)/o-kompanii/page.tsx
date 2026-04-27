import type { Metadata } from 'next'
import { Award, Heart, Shield, Clock, Users, Star, Coffee, CheckCircle2 } from 'lucide-react'

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: 'О компании — профессиональный сервис кофемашин в СПб',
    description:
      'CoffeeMaster — профессиональный сервисный центр по ремонту и обслуживанию кофемашин в Санкт-Петербурге с 2015 года. 4800+ отремонтированных машин, сертифицированные мастера, гарантия 12 месяцев.',
    keywords: [
      'о компании',
      'CoffeeMaster',
      'сервис кофемашин СПб',
      'ремонт кофемашин Санкт-Петербург',
      'сертифицированный сервис Jura',
      'авторизованный сервис DeLonghi',
      'мастера по кофемашинам',
    ],
    openGraph: {
      title: 'О компании — профессиональный сервис кофемашин в СПб',
      description:
        'С 2015 года — профессиональный сервис премиум-кофемашин в Санкт-Петербурге. Jura, De\'Longhi, Saeco, BORK и другие бренды. Гарантия 12 месяцев.',
      locale: 'ru_RU',
      type: 'website',
      siteName: 'CoffeeMaster',
    },
    twitter: {
      card: 'summary_large_image',
      title: 'О компании — CoffeeMaster',
      description: 'Профессиональный сервис кофемашин в СПб с 2015 года. 4800+ машин, гарантия 12 мес.',
    },
  }
}

const values = [
  {
    icon: Heart,
    title: 'Честность',
    description:
      'Называем реальную стоимость ремонта до начала работ. Никаких скрытых доплат — финальная цена всегда совпадает с согласованной.',
  },
  {
    icon: Award,
    title: 'Мастерство',
    description:
      'Каждый мастер — сертифицированный специалист с опытом от 6 лет. Регулярно проходим обучение у производителей.',
  },
  {
    icon: Shield,
    title: 'Ответственность',
    description:
      'Письменная гарантия 12 месяцев на все выполненные работы и установленные запчасти. Гарантийные случаи — бесплатно.',
  },
  {
    icon: Clock,
    title: 'Уважение к времени',
    description:
      'Ремонт в согласованные сроки. Если сроки меняются — обязательно предупредим. Большинство ремонтов — в день обращения.',
  },
  {
    icon: Coffee,
    title: 'Специализация',
    description:
      'Мы работаем только с кофемашинами. Никаких пылесосов, утюгов и прочей техники. Узкая специализация — залог экспертизы.',
  },
  {
    icon: Star,
    title: 'Качество запчастей',
    description:
      'Используем только оригинальные запчасти от официальных дистрибьюторов. Никаких аналогов и «совместимых» деталей.',
  },
]

const certificates = [
  {
    title: 'Авторизованный сервис Jura',
    detail: 'Официальный сервисный партнёр',
    year: 'с 2017',
  },
  {
    title: "Авторизованный сервис De'Longhi",
    detail: 'Сертифицированный ремонт и ТО',
    year: 'с 2017',
  },
  {
    title: 'Сертифицированный партнёр Saeco',
    detail: 'Авторизованный сервисный центр',
    year: 'с 2023',
  },
  {
    title: 'ISO 9001:2015',
    detail: 'Система менеджмента качества',
    year: 'сертификат',
  },
]

const timeline = [
  {
    year: '2015',
    event: 'Основание компании',
    detail: 'Дмитрий Волков открыл первую мастерскую на Петроградской стороне.',
  },
  {
    year: '2017',
    event: "Авторизация Jura и De'Longhi",
    detail: 'Получили статус официального сервисного партнёра двух крупнейших брендов.',
  },
  {
    year: '2019',
    event: 'Переезд в новый сервисный центр',
    detail: 'Расширили площадь до 180 м², оснастили современным диагностическим оборудованием.',
  },
  {
    year: '2021',
    event: 'Запуск выездного сервиса',
    detail: 'Начали принимать кофемашины «от двери до двери» по всему СПб и Ленобласти.',
  },
  {
    year: '2023',
    event: 'Авторизация Saeco и BORK',
    detail: 'Расширили список авторизаций — теперь охватываем 90% рынка премиум-кофемашин.',
  },
  {
    year: '2024',
    event: '4800+ отремонтированных машин',
    detail: 'Достигли рекордного показателя — более 4800 успешных ремонтов за историю компании.',
  },
]

const stats = [
  { value: '4800+', label: 'отремонтированных машин' },
  { value: '9 лет', label: 'на рынке СПб' },
  { value: '12 мес', label: 'гарантия на работы' },
  { value: '97%', label: 'довольных клиентов' },
]

const team = [
  {
    name: 'Дмитрий Волков',
    role: 'Основатель и главный мастер',
    exp: '14 лет',
    spec: "Электромеханика, Jura, De'Longhi",
    bio: 'Прошёл обучение в сервисных центрах Bern и Milan. Лично выполняет все сложные случаи.',
  },
  {
    name: 'Алексей Петров',
    role: 'Старший мастер',
    exp: '9 лет',
    spec: 'Гидросистемы, Saeco, BORK',
    bio: 'Специализируется на ремонте гидравлических систем и профилактическом обслуживании.',
  },
  {
    name: 'Мария Соколова',
    role: 'Менеджер сервиса',
    exp: '6 лет',
    spec: 'Координация, Клиентский сервис',
    bio: 'Отвечает за коммуникацию с клиентами и контроль качества каждого ремонта.',
  },
  {
    name: 'Игорь Семёнов',
    role: 'Мастер-электроник',
    exp: '7 лет',
    spec: 'Электроника, Bosch, Siemens',
    bio: 'Специалист по ремонту плат управления и программной калибровке кофемашин.',
  },
]

const partners = [
  { name: 'Jura', detail: 'Официальный дистрибьютор запчастей' },
  { name: "De'Longhi", detail: 'Авторизованный сервисный партнёр' },
  { name: 'Saeco / Philips', detail: 'Сертифицированный ремонт' },
  { name: 'BORK', detail: 'Авторизованный сервисный центр' },
  { name: 'Bosch / Siemens', detail: 'Оригинальные запчасти' },
  { name: 'WMF', detail: 'Профессиональное оборудование' },
]

function getInitials(name: string) {
  return name
    .split(' ')
    .map((n) => n[0])
    .join('')
    .slice(0, 2)
    .toUpperCase()
}

export default function AboutPage() {
  return (
    <div className="pt-[72px]">
      {/* ─── Hero ─── */}
      <section className="bg-gradient-to-br from-[#FFF9F2] to-white py-16 lg:py-24">
        <div className="container">
          <span className="section-label mb-5">О нас</span>
          <h1
            className="text-[#1A1410] max-w-2xl mt-5 mb-6"
            style={{ fontFamily: 'var(--font-display)' }}
          >
            Мастера, которым{' '}
            <span className="bg-gradient-to-r from-[#E87722] to-[#C9A96E] bg-clip-text text-transparent">
              доверяют кофе
            </span>
          </h1>
          <p className="text-[#4A4540] text-lg max-w-2xl leading-relaxed mb-8">
            С 2015 года мы специализируемся исключительно на ремонте и обслуживании кофемашин
            премиум-класса. За это время отремонтировали более 4800 машин и стали авторизованным
            сервисным центром ведущих мировых брендов.
          </p>
          {/* Tagline badges */}
          <div className="flex flex-wrap gap-3">
            {[
              'Бесплатная диагностика',
              'Гарантия 12 мес',
              'Работаем с 2015 года',
            ].map((badge) => (
              <span
                key={badge}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#FFF4EB] border border-[#E87722]/20 text-[#E87722] text-sm font-medium"
              >
                <CheckCircle2 size={14} />
                {badge}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Stats ─── */}
      <section className="bg-[#1A1410] py-14 lg:py-20">
        <div className="container">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4">
            {stats.map((s) => (
              <div key={s.label} className="text-center">
                <p
                  className="text-[#E87722] text-4xl lg:text-5xl font-light mb-2"
                  style={{ fontFamily: 'var(--font-display)' }}
                >
                  {s.value}
                </p>
                <p className="text-[#8B847C] text-sm uppercase tracking-widest">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── History ─── */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div>
              <span className="section-label mb-5">История</span>
              <h2
                className="text-[#1A1410] mt-5 mb-6"
                style={{ fontFamily: 'var(--font-display)' }}
              >
                Девять лет с кофемашинами
              </h2>
              <div className="space-y-4 text-[#4A4540] leading-relaxed">
                <p>
                  CoffeeMaster основан в 2015 году мастером-электромехаником Дмитрием Волковым,
                  который прошёл обучение в сервисных центрах Швейцарии и Италии и вернулся в
                  Петербург с твёрдым намерением создать сервис, которого в городе ещё не было.
                </p>
                <p>
                  Начинали с маленькой мастерской на Петроградской стороне — три стола,
                  один осциллограф и безграничная страсть к точной механике. Сегодня это
                  современный сервисный центр площадью 180 м² с полным набором диагностического
                  оборудования и штатом из восьми сертифицированных специалистов.
                </p>
                <p>
                  Мы намеренно не расширяем ассортимент услуг. Кофемашины — это всё, что мы
                  делаем. И делаем это лучше всех в городе.
                </p>
              </div>
            </div>
            <div className="bg-[#F7F5F2] rounded-2xl p-8 lg:p-10 space-y-5 border border-[rgba(26,20,16,0.06)]">
              {timeline.map((item) => (
                <div
                  key={item.year}
                  className="flex items-start gap-5 pb-5 border-b border-[rgba(26,20,16,0.06)] last:border-0 last:pb-0"
                >
                  <span
                    className="text-[#E87722] font-semibold shrink-0 w-14 text-lg"
                    style={{ fontFamily: 'var(--font-display)' }}
                  >
                    {item.year}
                  </span>
                  <div>
                    <p className="text-[#1A1410] font-medium mb-1">{item.event}</p>
                    <p className="text-[#8B847C] text-sm leading-relaxed">{item.detail}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ─── Mission pull quote ─── */}
      <section className="py-16 lg:py-20 bg-[#FFF9F2]">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <div
              className="w-px h-12 bg-[#E87722]/40 mx-auto mb-8"
              aria-hidden="true"
            />
            <blockquote
              className="text-[#1A1410] text-2xl md:text-3xl lg:text-4xl font-light italic leading-snug mb-8"
              style={{ fontFamily: 'var(--font-display)' }}
            >
              «Мы не просто ремонтируем кофемашины — мы возвращаем людям их утреннюю чашку кофе.»
            </blockquote>
            <div className="flex items-center justify-center gap-3">
              <div className="w-8 h-px bg-[#E87722]/40" />
              <p className="text-[#8B847C] text-sm uppercase tracking-widest">
                Дмитрий Волков, основатель
              </p>
              <div className="w-8 h-px bg-[#E87722]/40" />
            </div>
          </div>
        </div>
      </section>

      {/* ─── Values ─── */}
      <section className="py-16 lg:py-24 bg-[#F7F5F2]">
        <div className="container">
          <span className="section-label mb-5">Наши ценности</span>
          <h2
            className="text-[#1A1410] mt-5 mb-12"
            style={{ fontFamily: 'var(--font-display)' }}
          >
            Принципы работы
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {values.map((v) => (
              <div
                key={v.title}
                className="bg-white rounded-2xl p-7 border border-[rgba(26,20,16,0.06)] hover:border-[#E87722] hover:shadow-lg transition-all duration-300 group"
              >
                <div className="w-12 h-12 rounded-xl bg-[#FFF4EB] flex items-center justify-center mb-5 group-hover:bg-[#E87722]/10 transition-colors">
                  <v.icon size={22} className="text-[#E87722]" />
                </div>
                <h3 className="text-[#1A1410] text-xl mb-3 font-semibold">{v.title}</h3>
                <p className="text-[#4A4540] leading-relaxed text-sm">{v.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Certificates & Authorizations ─── */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="container">
          <span className="section-label mb-5">Сертификаты</span>
          <h2
            className="text-[#1A1410] mt-5 mb-4"
            style={{ fontFamily: 'var(--font-display)' }}
          >
            Подтверждённая квалификация
          </h2>
          <p className="text-[#4A4540] mb-12 max-w-xl leading-relaxed">
            Авторизации производителей — не просто бумаги. Это обязательства по качеству,
            которые мы принимаем перед каждым клиентом.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-5 mb-8">
            {certificates.map((cert) => (
              <div
                key={cert.title}
                className="bg-[#F7F5F2] rounded-2xl p-6 text-center border border-[rgba(26,20,16,0.06)] hover:border-[#E87722] transition-colors group"
              >
                <Award
                  size={28}
                  className="text-[#E87722] mx-auto mb-3 group-hover:scale-110 transition-transform"
                />
                <p className="text-[#1A1410] text-sm leading-relaxed font-medium mb-1">
                  {cert.title}
                </p>
                <p className="text-[#8B847C] text-xs">{cert.detail}</p>
                <p className="text-[#E87722] text-xs mt-2 font-medium">{cert.year}</p>
              </div>
            ))}
          </div>
          <p className="text-[#8B847C] text-sm leading-relaxed border-l-2 border-[#E87722]/40 pl-4 max-w-2xl">
            Все документы доступны для ознакомления в офисе. Мы работаем только с оригинальными
            запчастями от официальных дистрибьюторов — это обязательное условие авторизаций.
          </p>
        </div>
      </section>

      {/* ─── Partners & Authorizations grid ─── */}
      <section className="py-16 lg:py-20 bg-[#F7F5F2]">
        <div className="container">
          <span className="section-label mb-5">Партнёрства</span>
          <h2
            className="text-[#1A1410] mt-5 mb-12"
            style={{ fontFamily: 'var(--font-display)' }}
          >
            Официальные партнёры брендов
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {partners.map((p) => (
              <div
                key={p.name}
                className="bg-white rounded-2xl p-6 flex items-start gap-4 border border-[rgba(26,20,16,0.06)] hover:border-[#E87722] transition-colors"
              >
                <div className="w-9 h-9 rounded-full bg-[#FFF4EB] flex items-center justify-center shrink-0 mt-0.5">
                  <CheckCircle2 size={16} className="text-[#E87722]" />
                </div>
                <div>
                  <p className="text-[#1A1410] font-semibold text-sm mb-0.5">{p.name}</p>
                  <p className="text-[#8B847C] text-xs">{p.detail}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Team ─── */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="container">
          <span className="section-label mb-5">Команда</span>
          <h2
            className="text-[#1A1410] mt-5 mb-4"
            style={{ fontFamily: 'var(--font-display)' }}
          >
            Люди за каждым ремонтом
          </h2>
          <p className="text-[#4A4540] mb-12 max-w-xl leading-relaxed">
            Небольшая, но сильная команда. Каждый специалист — профессионал в своей области
            с многолетним опытом работы с конкретными брендами и типами неисправностей.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {team.map((member) => (
              <div
                key={member.name}
                className="bg-white rounded-2xl p-7 border border-[rgba(26,20,16,0.06)] hover:border-[#E87722] hover:shadow-lg transition-all duration-300 flex flex-col"
              >
                {/* Avatar */}
                <div className="w-14 h-14 rounded-full bg-[#FFF4EB] flex items-center justify-center mb-5 shrink-0">
                  <span
                    className="text-[#E87722] text-lg font-semibold"
                    style={{ fontFamily: 'var(--font-display)' }}
                  >
                    {getInitials(member.name)}
                  </span>
                </div>
                {/* Name & role */}
                <h3 className="text-[#1A1410] font-semibold text-base mb-2">{member.name}</h3>
                <span className="inline-block px-3 py-1 rounded-full bg-[#FFF4EB] text-[#E87722] text-xs font-medium mb-3 self-start">
                  {member.role}
                </span>
                {/* Exp & spec */}
                <div className="flex items-center gap-2 mb-1">
                  <Clock size={12} className="text-[#8B847C] shrink-0" />
                  <span className="text-[#8B847C] text-xs">Опыт: {member.exp}</span>
                </div>
                <div className="flex items-start gap-2 mb-4">
                  <Star size={12} className="text-[#8B847C] shrink-0 mt-0.5" />
                  <span className="text-[#8B847C] text-xs">{member.spec}</span>
                </div>
                {/* Bio */}
                <p className="text-[#4A4540] text-sm leading-relaxed mt-auto">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Why choose us (USP strip) ─── */}
      <section className="py-14 lg:py-20 bg-[#FFF9F2]">
        <div className="container">
          <span className="section-label mb-5">Почему мы</span>
          <h2
            className="text-[#1A1410] mt-5 mb-10"
            style={{ fontFamily: 'var(--font-display)' }}
          >
            Наши преимущества
          </h2>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              'Бесплатная диагностика без обязательств',
              'Ремонт в день обращения для большинства неисправностей',
              'Подменная кофемашина на время ремонта — бесплатно',
              'Консьерж-сервис: заберём, отремонтируем и доставим обратно',
              'Работаем 7 дней в неделю, включая праздники',
              'Выезд мастера по СПб и Ленобласти — бесплатно в пределах КАД',
              'Оригинальные запчасти с гарантией производителя',
              'Все работы фиксируются письменно с чётким указанием цены',
            ].map((usp) => (
              <li
                key={usp}
                className="flex items-start gap-3 bg-white rounded-xl px-5 py-4 border border-[rgba(26,20,16,0.06)]"
              >
                <CheckCircle2 size={18} className="text-[#E87722] shrink-0 mt-0.5" />
                <span className="text-[#4A4540] text-sm leading-relaxed">{usp}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ─── CTA ─── */}
      <section className="py-16 lg:py-24 bg-[#1A1410]">
        <div className="container text-center">
          <Users size={36} className="text-[#E87722] mx-auto mb-6" />
          <h2
            className="text-white mb-4 max-w-xl mx-auto"
            style={{ fontFamily: 'var(--font-display)' }}
          >
            Познакомимся лично?
          </h2>
          <p className="text-[#8B847C] mb-8 max-w-md mx-auto leading-relaxed">
            Приезжайте на бесплатную диагностику — без записи, без обязательств.
            Мы честно скажем, что с вашей машиной и сколько стоит ремонт.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <a href="/kontakty" className="btn-primary">
              Записаться на диагностику
            </a>
            <a href="/uslugi" className="btn-secondary">
              Все услуги
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
