'use client'

import { useState } from 'react'
import { Search, Phone, MessageCircle, ChevronDown, CheckCircle, Info, Tag } from 'lucide-react'
import Link from 'next/link'

type CategoryId = 'all' | 'diagnostics' | 'cleaning' | 'mechanics' | 'electronics' | 'visit' | 'parts'

interface PriceItem { name: string; price: string; note: string }
interface PriceGroup { title: string; categoryId: Exclude<CategoryId, 'all'>; items: PriceItem[] }

const priceGroups: PriceGroup[] = [
  {
    title: 'Диагностика', categoryId: 'diagnostics',
    items: [
      { name: 'Первичная диагностика', price: 'Бесплатно', note: 'без разборки' },
      { name: 'Углублённая диагностика', price: 'от 490 ₽', note: 'с разборкой, зачитывается в ремонт' },
      { name: 'Диагностика электроники', price: 'от 590 ₽', note: 'с тестированием платы управления' },
      { name: 'Диагностика с составлением акта', price: 'от 690 ₽', note: 'для страховых случаев' },
    ],
  },
  {
    title: 'Чистка и профилактика', categoryId: 'cleaning',
    items: [
      { name: 'Декальцинация (чистка от накипи)', price: 'от 790 ₽', note: '' },
      { name: 'Чистка от кофейных масел', price: 'от 490 ₽', note: '' },
      { name: 'Комплексное ТО (чистка + смазка + проверка)', price: 'от 990 ₽', note: 'рекомендуется раз в год' },
      { name: 'Чистка капучинатора', price: 'от 390 ₽', note: '' },
      { name: 'Программная очистка', price: 'от 290 ₽', note: 'через сервисное меню' },
      { name: 'Промывка гидросистемы', price: 'от 590 ₽', note: '' },
      { name: 'Смазка и регулировка кофемолки', price: 'от 490 ₽', note: '' },
    ],
  },
  {
    title: 'Ремонт механики', categoryId: 'mechanics',
    items: [
      { name: 'Замена жерновов кофемолки', price: 'от 690 ₽', note: '+ стоимость запчасти' },
      { name: 'Ремонт заварочного блока', price: 'от 690 ₽', note: '' },
      { name: 'Замена помпы (насоса)', price: 'от 890 ₽', note: '+ стоимость запчасти' },
      { name: 'Устранение течи', price: 'от 590 ₽', note: '' },
      { name: 'Замена уплотнителей', price: 'от 490 ₽', note: '+ стоимость запчасти' },
      { name: 'Ремонт / замена клапанов', price: 'от 690 ₽', note: '' },
      { name: 'Ремонт капучинатора', price: 'от 590 ₽', note: '' },
      { name: 'Замена дренажного клапана', price: 'от 490 ₽', note: '+ стоимость запчасти' },
      { name: 'Ремонт системы подачи пара', price: 'от 690 ₽', note: '' },
      { name: 'Замена прокладок', price: 'от 390 ₽', note: '+ стоимость запчасти' },
    ],
  },
  {
    title: 'Ремонт электрики и электроники', categoryId: 'electronics',
    items: [
      { name: 'Замена ТЭНа / бойлера', price: 'от 890 ₽', note: '+ стоимость запчасти' },
      { name: 'Замена термостата', price: 'от 490 ₽', note: '+ стоимость запчасти' },
      { name: 'Ремонт платы управления', price: 'от 760 ₽', note: '' },
      { name: 'Замена дисплея', price: 'от 890 ₽', note: '+ стоимость запчасти' },
      { name: 'Замена кнопок / сенсоров', price: 'от 490 ₽', note: '' },
      { name: 'Ремонт или замена помпы', price: 'от 890 ₽', note: '' },
      { name: 'Замена предохранителей', price: 'от 290 ₽', note: '' },
      { name: 'Перепрошивка программы', price: 'от 490 ₽', note: 'восстановление заводских настроек' },
    ],
  },
  {
    title: 'Выезд и срочный ремонт', categoryId: 'visit',
    items: [
      { name: 'Выезд мастера (в пределах КАД)', price: 'Бесплатно', note: 'при выполнении ремонта' },
      { name: 'Выезд мастера (за КАД)', price: 'от 500 ₽', note: 'по договорённости' },
      { name: 'Срочный ремонт (наценка)', price: '+ 50%', note: 'к базовой стоимости' },
      { name: 'Ремонт в выходные / праздники', price: '+ 20%', note: 'к базовой стоимости' },
      { name: 'Консьерж-сервис (забрать и привезти)', price: 'от 500 ₽', note: 'в пределах КАД' },
    ],
  },
  {
    title: 'Запчасти (популярные)', categoryId: 'parts',
    items: [
      { name: 'Заварочный блок (в сборе)', price: 'от 1 200 ₽', note: 'оригинал' },
      { name: 'Помпа (насос) ULKA', price: 'от 890 ₽', note: 'оригинал' },
      { name: 'ТЭН / бойлер', price: 'от 1 500 ₽', note: 'зависит от модели' },
      { name: 'Жернова кофемолки', price: 'от 800 ₽', note: 'оригинал' },
      { name: 'Уплотнительное кольцо', price: 'от 150 ₽', note: 'в ассортименте' },
    ],
  },
]

const filterTabs: { id: CategoryId; label: string }[] = [
  { id: 'all', label: 'Все' },
  { id: 'diagnostics', label: 'Диагностика' },
  { id: 'cleaning', label: 'Чистка' },
  { id: 'mechanics', label: 'Ремонт механики' },
  { id: 'electronics', label: 'Электроника' },
  { id: 'visit', label: 'Выезд' },
  { id: 'parts', label: 'Запчасти' },
]

const faqItems = [
  {
    question: 'Почему итоговая цена может отличаться от прайса?',
    answer: 'Цены в прайсе — стоимость работ без учёта запчастей. Финальная сумма зависит от сложности поломки, модели кофемашины и необходимых деталей. После диагностики мастер озвучит точную стоимость — вы можете отказаться без каких-либо обязательств.',
  },
  {
    question: 'Что входит в гарантию 12 месяцев?',
    answer: 'Гарантия распространяется на все выполненные работы. Если в течение 12 месяцев проблема повторится по вине мастера — устраним бесплатно. Гарантия не распространяется на вторичные неисправности, возникшие после ремонта по независящим от нас причинам.',
  },
  {
    question: 'Можно ли получить счёт для юрлица?',
    answer: 'Да, мы работаем с ИП и ООО. Предоставляем полный комплект закрывающих документов: договор, акт выполненных работ, счёт. Возможна оплата по безналичному расчёту. Для корпоративных клиентов доступен договор на техническое обслуживание.',
  },
  {
    question: 'Есть ли скидки?',
    answer: 'Да: −10% при предоплате, −15% для постоянных клиентов (от второго обращения), бесплатная чистка от накипи при проведении полного ремонта стоимостью от 2 000 ₽. Следите за акциями в нашем Telegram-канале.',
  },
]

export default function PraisClient() {
  const [search, setSearch] = useState('')
  const [activeFilter, setActiveFilter] = useState<CategoryId>('all')

  const filteredGroups = priceGroups
    .filter((g) => activeFilter === 'all' || g.categoryId === activeFilter)
    .map((g) => ({
      ...g,
      items: search ? g.items.filter((item) => item.name.toLowerCase().includes(search.toLowerCase())) : g.items,
    }))
    .filter((g) => g.items.length > 0)

  const totalVisible = filteredGroups.reduce((acc, g) => acc + g.items.length, 0)
  const isPriceFree = (price: string) => price === 'Бесплатно'
  const isPriceSurcharge = (price: string) => price.startsWith('+')

  return (
    <div className="pt-[72px]">
      <section className="bg-gradient-to-br from-[#FFF9F2] to-[#F7F5F2] py-16 lg:py-24">
        <div className="container">
          <span className="section-label mb-5 block">Стоимость услуг</span>
          <h1 className="text-[#1A1410] max-w-3xl mt-4 mb-6 leading-tight" style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(2rem, 3.5vw, 3rem)', fontWeight: 400 }}>
            Прайс-лист на ремонт кофемашин<br />в Санкт-Петербурге
          </h1>
          <p className="text-[#4A4540] text-lg max-w-2xl leading-relaxed mb-8">
            Прозрачное ценообразование без скрытых доплат. Стоимость фиксируется до начала ремонта — вы всегда знаете, за что платите.
          </p>
          <div className="flex flex-wrap gap-3">
            {['Диагностика бесплатно', 'Гарантия 12 мес', 'Оригинальные запчасти'].map((label) => (
              <span key={label} className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-white border border-[rgba(26,20,16,0.1)] text-[#1A1410] text-sm font-medium shadow-sm">
                <CheckCircle size={15} className="text-[#E87722]" />{label}
              </span>
            ))}
          </div>
        </div>
      </section>

      <div className="container py-6">
        <div className="bg-[#FFF4EB] border-l-4 border-[#E87722] rounded-r-xl px-6 py-4 flex gap-3">
          <Info size={20} className="text-[#E87722] shrink-0 mt-0.5" />
          <p className="text-[#4A4540] text-sm leading-relaxed">
            <span className="font-semibold text-[#1A1410]">Важно: </span>
            Указанные цены — стоимость работ. Запчасти рассчитываются отдельно по прайсу производителя. Окончательная стоимость определяется после диагностики. При отказе от ремонта после диагностики — 0 ₽.
          </p>
        </div>
      </div>

      <div className="sticky top-[72px] z-30 bg-white shadow-[0_2px_16px_rgba(26,20,16,0.07)] border-b border-[rgba(26,20,16,0.06)]">
        <div className="container py-3 flex flex-col gap-3 lg:flex-row lg:items-center lg:gap-6">
          <div className="relative flex-shrink-0 w-full lg:w-72">
            <Search size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-[#8B847C]" />
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Поиск по услуге..."
              className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-[rgba(26,20,16,0.12)] bg-[#F7F5F2] text-[#1A1410] text-sm placeholder:text-[#8B847C] focus:outline-none focus:border-[#E87722] focus:ring-2 focus:ring-[#E87722]/20 transition-all"
            />
          </div>
          <div className="flex flex-wrap gap-2">
            {filterTabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveFilter(tab.id)}
                className={`px-4 py-1.5 rounded-full text-sm font-medium transition-all whitespace-nowrap ${activeFilter === tab.id ? 'bg-[#E87722] text-white shadow-sm' : 'text-[#4A4540] hover:text-[#E87722] bg-[#F7F5F2] hover:bg-[#FFF4EB]'}`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      <section className="py-10 lg:py-16 bg-[#F7F5F2]">
        <div className="container">
          {filteredGroups.length === 0 ? (
            <div className="text-center py-20">
              <Tag size={40} className="text-[#8B847C] mx-auto mb-4" />
              <p className="text-[#4A4540] text-lg">Ничего не найдено</p>
              <p className="text-[#8B847C] text-sm mt-2">Попробуйте изменить запрос или сбросить фильтр</p>
              <button onClick={() => { setSearch(''); setActiveFilter('all') }} className="mt-6 px-5 py-2.5 rounded-xl border border-[#E87722] text-[#E87722] text-sm font-medium hover:bg-[#E87722] hover:text-white transition-all">
                Сбросить фильтры
              </button>
            </div>
          ) : (
            <div className="space-y-8">
              <p className="text-[#8B847C] text-sm">Показано позиций: <span className="font-semibold text-[#1A1410]">{totalVisible}</span></p>
              {filteredGroups.map((group) => (
                <div key={group.title} className="bg-white rounded-2xl border border-[rgba(26,20,16,0.06)] overflow-hidden shadow-sm">
                  <div className="px-6 lg:px-8 py-4 bg-[#FFF4EB] border-b border-[rgba(26,20,16,0.06)] flex items-center justify-between">
                    <h2 className="text-[#1A1410] text-xl font-semibold" style={{ fontFamily: 'var(--font-display)' }}>{group.title}</h2>
                    <span className="text-xs text-[#8B847C] bg-white border border-[rgba(26,20,16,0.08)] rounded-full px-3 py-1">
                      {group.items.length} {group.items.length === 1 ? 'позиция' : group.items.length < 5 ? 'позиции' : 'позиций'}
                    </span>
                  </div>
                  <div className="divide-y divide-[rgba(26,20,16,0.05)]">
                    {group.items.map((item, i) => (
                      <div key={i} className="flex flex-col sm:flex-row sm:items-center justify-between px-6 lg:px-8 py-4 hover:bg-[#FFF9F2] transition-colors">
                        <div className="flex flex-col sm:flex-row sm:items-baseline gap-1 sm:gap-3 min-w-0">
                          <span className="text-[#1A1410] text-[15px] leading-snug">{item.name}</span>
                          {item.note && <span className="text-xs text-[#8B847C] shrink-0">— {item.note}</span>}
                        </div>
                        <span className={`font-semibold text-[15px] tabular-nums mt-2 sm:mt-0 shrink-0 sm:pl-6 ${isPriceFree(item.price) ? 'text-emerald-600' : isPriceSurcharge(item.price) ? 'text-[#4A4540]' : 'text-[#E87722]'}`}>
                          {item.price}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          )}
          <div className="mt-10 p-6 lg:p-8 bg-white rounded-2xl border border-[rgba(26,20,16,0.06)] shadow-sm flex gap-3">
            <Info size={18} className="text-[#8B847C] shrink-0 mt-0.5" />
            <p className="text-[#8B847C] text-sm leading-relaxed">
              Стоимость ремонта указана без учёта запчастей. Оригинальные запчасти рассчитываются отдельно по прайсу производителя. Диагностика бесплатна — при выполнении ремонта стоимость диагностики засчитывается в итоговую сумму. Гарантия 12 месяцев на все виды работ.
            </p>
          </div>
        </div>
      </section>

      <section className="py-14 lg:py-20 bg-[#FFF9F2] border-t border-[rgba(26,20,16,0.06)]">
        <div className="container">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8 bg-white rounded-2xl border border-[rgba(26,20,16,0.08)] px-8 lg:px-12 py-10 shadow-sm">
            <div>
              <span className="section-label mb-3 block">Нужна точная оценка?</span>
              <h2 className="text-[#1A1410] mb-3" style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(1.5rem, 2.5vw, 2rem)', fontWeight: 400 }}>Рассчитаем стоимость бесплатно</h2>
              <p className="text-[#4A4540] leading-relaxed max-w-md">Опишите проблему — мастер проконсультирует и назовёт ориентировочную цену ещё до приезда в сервис.</p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 shrink-0">
              <a href="tel:+78121234567" className="btn-primary inline-flex items-center justify-center gap-2 px-8 py-4"><Phone size={16} />Позвонить</a>
              <a href="https://wa.me/78121234567" target="_blank" rel="noopener noreferrer" className="btn-secondary inline-flex items-center justify-center gap-2 px-8 py-4"><MessageCircle size={16} />WhatsApp</a>
            </div>
          </div>
        </div>
      </section>

      <section className="py-14 lg:py-20 bg-[#F7F5F2]">
        <div className="container max-w-3xl">
          <span className="section-label mb-4 block">Вопросы о ценах</span>
          <h2 className="text-[#1A1410] mb-10" style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(1.5rem, 2.5vw, 2rem)', fontWeight: 400 }}>Часто задаваемые вопросы</h2>
          <div className="space-y-3">
            {faqItems.map((item, i) => (
              <details key={i} className="group bg-white border border-[rgba(26,20,16,0.07)] rounded-2xl overflow-hidden shadow-sm open:shadow-md transition-shadow">
                <summary className="flex items-center justify-between px-6 lg:px-8 py-5 cursor-pointer list-none select-none hover:bg-[#FFF9F2] transition-colors">
                  <span className="text-[#1A1410] font-medium pr-6 leading-snug">{item.question}</span>
                  <ChevronDown size={18} className="text-[#E87722] shrink-0 transition-transform duration-300 group-open:rotate-180" />
                </summary>
                <div className="px-6 lg:px-8 pb-6 pt-1">
                  <p className="text-[#4A4540] leading-relaxed text-[15px]">{item.answer}</p>
                </div>
              </details>
            ))}
          </div>
          <div className="mt-10 text-center">
            <p className="text-[#8B847C] text-sm mb-4">Не нашли ответ? Свяжитесь с нами — ответим на любой вопрос о стоимости.</p>
            <Link href="/kontakty" className="inline-flex items-center gap-2 text-[#E87722] text-sm font-medium hover:underline underline-offset-4 transition-all">
              Перейти на страницу контактов →
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
