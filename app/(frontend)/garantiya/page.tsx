import type { Metadata } from 'next'
import Link from 'next/link'
import {
  ChevronRight,
  ShieldCheck,
  FileCheck,
  Wrench,
  Award,
  XCircle,
  Phone,
  MessageCircle,
  FileText,
  ReceiptText,
  ScrollText,
  BadgeCheck,
} from 'lucide-react'

export const metadata: Metadata = {
  title: 'Гарантия 12 месяцев на ремонт кофемашин | CoffeeMaster СПб',
  description:
    'Официальная гарантия 12 месяцев на все работы и 6 месяцев на запчасти. Бесплатное повторное обращение и право отзыва ремонта в течение 14 дней.',
  alternates: { canonical: '/garantiya' },
  openGraph: {
    title: 'Гарантия 12 месяцев на ремонт кофемашин | CoffeeMaster СПб',
    description: 'Условия и порядок предоставления гарантии сервисного центра CoffeeMaster.',
    locale: 'ru_RU',
    type: 'website',
  },
}

const includes = [
  {
    Icon: ShieldCheck,
    title: 'Все виды работ',
    text: 'Любые ремонтные операции, выполненные нашими мастерами — от замены ТЭНа до восстановления электроники.',
  },
  {
    Icon: FileCheck,
    title: 'Установленные запчасти',
    text: 'Отдельная гарантия 6 месяцев на каждую запчасть, заменённую в ходе ремонта.',
  },
  {
    Icon: Wrench,
    title: 'Профилактика и чистка',
    text: 'Гарантия на работоспособность узлов в течение 12 месяцев после комплексной профилактики.',
  },
  {
    Icon: Award,
    title: 'Калибровка и настройка',
    text: 'Гарантируем стабильную работу узлов после диагностических настроек и калибровки помола.',
  },
]

const exclusions = [
  'Механические повреждения, возникшие после ремонта (падения, удары, сколы корпуса).',
  'Попадание жидкостей в неположенные узлы, залив электроники, скачки напряжения сети.',
  'Использование неоригинальных капсул, фильтров и средств для чистки, не рекомендованных производителем.',
  'Самостоятельное вмешательство в конструкцию, попытки вскрытия и ремонта в других сервисах после нашего ремонта.',
  'Естественный износ расходных материалов: уплотнителей, прокладок, заварочных блоков по моторесурсу.',
]

const steps = [
  { num: '01', title: 'Свяжитесь с нами', text: 'Позвоните на +7 (812) 123-45-67 или напишите в Telegram. Назовите номер заказ-наряда.' },
  { num: '02', title: 'Опишите проблему', text: 'Расскажите о неисправности и пришлите фото или видео. Менеджер согласует время.' },
  { num: '03', title: 'Привезите машину', text: 'Бесплатный приём в сервис или вызов курьера. Возможен выезд мастера на дом.' },
  { num: '04', title: 'Бесплатный ремонт', text: 'Повторно устраняем неисправность за наш счёт в течение 1–3 рабочих дней.' },
]

const documents = [
  { Icon: FileText, title: 'Договор-заказ-наряд', text: 'Фиксирует состав работ, согласованную стоимость и сроки.' },
  { Icon: ScrollText, title: 'Акт выполненных работ', text: 'Подтверждает приёмку услуг и качество ремонта.' },
  { Icon: ReceiptText, title: 'Кассовый чек', text: 'Официальный фискальный документ для физических и юридических лиц.' },
  { Icon: BadgeCheck, title: 'Гарантийный талон', text: 'С серийным номером машины, перечнем работ и сроком гарантии.' },
]

const additional = [
  { title: 'Запчасти — отдельно 6 месяцев', text: 'Каждая установленная нами запчасть имеет собственный гарантийный срок 6 месяцев.' },
  { title: 'Отзыв ремонта 14 дней', text: 'Если результат вас не устроил — в течение 14 дней вернём деньги или повторим работы бесплатно.' },
  { title: 'Бесплатное повторное обращение', text: 'Если неисправность повторилась в гарантийный период — все работы за наш счёт, включая логистику.' },
]

export default function GarantiyaPage() {
  return (
    <div className="pt-[72px] bg-[#F7F5F2]">
      <section className="bg-gradient-to-br from-[#FFF9F2] to-white py-14 lg:py-24 border-b border-[rgba(26,20,16,0.06)]">
        <div className="container">
          <nav className="flex items-center gap-2 text-[13px] text-[#6B6661] mb-6">
            <Link href="/" className="hover:text-[#E87722] transition-colors">
              Главная
            </Link>
            <ChevronRight size={14} />
            <span className="text-[#1A1410]">Гарантия</span>
          </nav>
          <span className="section-label mb-5">Доверие</span>
          <h1
            className="text-[#1A1410] max-w-3xl mt-5 mb-5"
            style={{ fontFamily: 'var(--font-display)' }}
          >
            Гарантия{' '}
            <span className="bg-gradient-to-r from-[#E87722] to-[#C9A96E] bg-clip-text text-transparent">
              12 месяцев
            </span>{' '}
            на все работы
          </h1>
          <p className="text-[#4A4540] text-lg max-w-2xl">
            Официальные документы, отдельная гарантия на запчасти, право отзыва ремонта в течение 14 дней. Никаких мелких сносок.
          </p>
        </div>
      </section>

      <section className="py-16 lg:py-20 bg-white">
        <div className="container">
          <span className="section-label mb-5">Что входит в гарантию</span>
          <h2
            className="text-[#1A1410] mt-5 mb-12 max-w-2xl"
            style={{ fontFamily: 'var(--font-display)' }}
          >
            Полное покрытие выполненных работ
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {includes.map(({ Icon, title, text }) => (
              <div
                key={title}
                className="bg-[#FFF9F2] rounded-2xl border border-[rgba(26,20,16,0.06)] p-8 hover:border-[#E87722] transition-colors"
              >
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#E87722] to-[#C9A96E] flex items-center justify-center mb-5">
                  <Icon size={22} className="text-white" />
                </div>
                <h3 className="text-[#1A1410] text-[20px] font-semibold mb-3">{title}</h3>
                <p className="text-[#4A4540] leading-relaxed">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-20">
        <div className="container">
          <span className="section-label mb-5">Когда гарантия не действует</span>
          <h2
            className="text-[#1A1410] mt-5 mb-12 max-w-2xl"
            style={{ fontFamily: 'var(--font-display)' }}
          >
            Случаи негарантийного ремонта
          </h2>
          <div className="bg-white rounded-2xl border border-[rgba(26,20,16,0.06)] p-8 lg:p-10">
            <ul className="space-y-5">
              {exclusions.map((item, i) => (
                <li key={i} className="flex items-start gap-4">
                  <XCircle size={22} className="text-[#E87722] shrink-0 mt-0.5" />
                  <p className="text-[#4A4540] leading-relaxed">{item}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-20 bg-white">
        <div className="container">
          <span className="section-label mb-5">Гарантийный случай</span>
          <h2
            className="text-[#1A1410] mt-5 mb-12 max-w-2xl"
            style={{ fontFamily: 'var(--font-display)' }}
          >
            Как воспользоваться гарантией
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {steps.map(({ num, title, text }) => (
              <div
                key={num}
                className="bg-[#FFF9F2] rounded-2xl border border-[rgba(26,20,16,0.06)] p-8 hover:border-[#E87722] transition-colors"
              >
                <div
                  className="text-[40px] text-[#E87722] mb-4 leading-none"
                  style={{ fontFamily: 'var(--font-display)' }}
                >
                  {num}
                </div>
                <h3 className="text-[#1A1410] text-[18px] font-semibold mb-3">{title}</h3>
                <p className="text-[#4A4540] text-[15px] leading-relaxed">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-20">
        <div className="container">
          <span className="section-label mb-5">Документы</span>
          <h2
            className="text-[#1A1410] mt-5 mb-3 max-w-2xl"
            style={{ fontFamily: 'var(--font-display)' }}
          >
            Что вы получаете при ремонте
          </h2>
          <p className="text-[#4A4540] mb-12 max-w-2xl">
            Каждый клиент получает полный пакет официальных документов для подтверждения гарантии и бухгалтерской отчётности.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {documents.map(({ Icon, title, text }) => (
              <div
                key={title}
                className="bg-white rounded-2xl border border-[rgba(26,20,16,0.06)] p-8 hover:border-[#E87722] transition-colors flex gap-5"
              >
                <div className="w-12 h-12 rounded-xl bg-[#FFF4EB] flex items-center justify-center shrink-0">
                  <Icon size={22} className="text-[#E87722]" />
                </div>
                <div>
                  <h3 className="text-[#1A1410] text-[18px] font-semibold mb-2">{title}</h3>
                  <p className="text-[#4A4540] leading-relaxed">{text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-20 bg-white">
        <div className="container">
          <span className="section-label mb-5">Сверх стандарта</span>
          <h2
            className="text-[#1A1410] mt-5 mb-12 max-w-2xl"
            style={{ fontFamily: 'var(--font-display)' }}
          >
            Что мы гарантируем дополнительно
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {additional.map(({ title, text }) => (
              <div
                key={title}
                className="bg-gradient-to-br from-[#FFF4EB] to-white rounded-2xl border border-[rgba(26,20,16,0.06)] p-8 hover:border-[#E87722] transition-colors"
              >
                <h3 className="text-[#1A1410] text-[18px] font-semibold mb-3">{title}</h3>
                <p className="text-[#4A4540] leading-relaxed">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-20">
        <div className="container">
          <div className="bg-[#1A1410] rounded-3xl p-10 lg:p-16 text-center">
            <h2
              className="text-white max-w-2xl mx-auto mb-5"
              style={{ fontFamily: 'var(--font-display)' }}
            >
              Возникла повторная неисправность?
            </h2>
            <p className="text-[#A8A29A] text-lg max-w-xl mx-auto mb-8">
              Свяжитесь с нами любым удобным способом — оперативно решим вопрос по гарантии.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="tel:+78121234567" className="btn-primary inline-flex items-center justify-center gap-2">
                <Phone size={16} /> +7 (812) 123-45-67
              </a>
              <a
                href="https://t.me/coffeemaster_spb"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full border border-white/20 text-white hover:bg-white/10 transition-colors"
              >
                <MessageCircle size={16} /> Написать в Telegram
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
