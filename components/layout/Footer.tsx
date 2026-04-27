import Link from 'next/link'
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Coffee,
  Send,
  MessageCircle,
  CreditCard,
  Banknote,
  Building2,
} from 'lucide-react'

const services = [
  { href: '/uslugi/remont-kofemelki', label: 'Ремонт кофемолки' },
  { href: '/uslugi/remont-gidrosistemy', label: 'Ремонт гидросистемы' },
  { href: '/uslugi/profilaktika-to', label: 'Профилактика и ТО' },
  { href: '/uslugi/chistka-ot-nakipi', label: 'Чистка от накипи' },
  { href: '/uslugi/diagnostika', label: 'Диагностика' },
  { href: '/trade-in', label: 'Trade-In' },
]

const company = [
  { href: '/o-kompanii', label: 'О компании' },
  { href: '/garantiya', label: 'Гарантия' },
  { href: '/sertifikaty', label: 'Сертификаты' },
  { href: '/prajs', label: 'Прайс-лист' },
  { href: '/blog', label: 'Блог' },
  { href: '/kontakty', label: 'Контакты' },
]

const payments = [
  { Icon: Banknote, label: 'Наличные' },
  { Icon: CreditCard, label: 'Visa / MC / МИР' },
  { Icon: Building2, label: 'Безнал для юрлиц' },
]

export function Footer() {
  return (
    <footer className="bg-[#1A1410] text-[#A8A29A]">
      <div className="container py-16 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[#E87722] to-[#C9A96E] flex items-center justify-center">
                <Coffee size={20} className="text-white" />
              </div>
              <div>
                <p className="text-[20px] font-semibold text-white" style={{ fontFamily: 'var(--font-display)' }}>
                  CoffeeMaster
                </p>
                <p className="text-[10px] tracking-[0.2em] uppercase text-[#E87722]">
                  Санкт-Петербург
                </p>
              </div>
            </Link>
            <p className="text-sm leading-relaxed mb-6">
              Профессиональный ремонт и обслуживание кофемашин с 2015 года. Бесплатная диагностика, гарантия 12 месяцев.
            </p>
            <div className="flex gap-3 mb-8">
              {[
                { Icon: Send, href: 'https://t.me/coffeemaster_spb', label: 'Telegram' },
                { Icon: MessageCircle, href: 'https://wa.me/79991234567', label: 'WhatsApp' },
              ].map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  aria-label={s.label}
                  className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-[#A8A29A] hover:bg-[#E87722] hover:border-[#E87722] hover:text-white transition-all"
                >
                  <s.Icon size={16} />
                </a>
              ))}
            </div>

            {/* Способы оплаты */}
            <div>
              <p className="text-white font-semibold mb-3 text-[13px] uppercase tracking-[0.15em]">
                Способы оплаты
              </p>
              <ul className="space-y-2">
                {payments.map(({ Icon, label }) => (
                  <li key={label} className="flex items-center gap-3 text-sm">
                    <Icon size={15} className="text-[#E87722] shrink-0" />
                    <span>{label}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Services */}
          <div>
            <p className="text-white font-semibold mb-5 text-[15px]">Услуги</p>
            <ul className="space-y-3">
              {services.map((s) => (
                <li key={s.href}>
                  <Link href={s.href} className="text-sm hover:text-[#E87722] transition-colors">
                    {s.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <p className="text-white font-semibold mb-5 text-[15px]">Компания</p>
            <ul className="space-y-3">
              {company.map((c) => (
                <li key={c.href}>
                  <Link href={c.href} className="text-sm hover:text-[#E87722] transition-colors">
                    {c.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link href="/brendy" className="text-sm text-[#E87722] hover:text-[#FF8E3C] transition-colors font-medium">
                  Все бренды →
                </Link>
              </li>
            </ul>
          </div>

          {/* Contacts */}
          <div>
            <p className="text-white font-semibold mb-5 text-[15px]">Контакты</p>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Phone size={15} className="text-[#E87722] mt-1 shrink-0" />
                <div>
                  <a href="tel:+78121234567" className="text-sm text-white hover:text-[#E87722] transition-colors block font-semibold">
                    +7 (812) 123-45-67
                  </a>
                  <a href="tel:+79991234567" className="text-sm hover:text-[#E87722] transition-colors block mt-1">
                    +7 (999) 123-45-67
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Send size={15} className="text-[#E87722] mt-1 shrink-0" />
                <a
                  href="https://t.me/coffeemaster_spb"
                  className="text-sm hover:text-[#E87722] transition-colors"
                >
                  Telegram: @coffeemaster_spb
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MessageCircle size={15} className="text-[#E87722] mt-1 shrink-0" />
                <a
                  href="https://wa.me/79991234567"
                  className="text-sm hover:text-[#E87722] transition-colors"
                >
                  WhatsApp: +7 (999) 123-45-67
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Mail size={15} className="text-[#E87722] mt-1 shrink-0" />
                <a href="mailto:info@coffeemaster.spb.ru" className="text-sm hover:text-[#E87722] transition-colors">
                  info@coffeemaster.spb.ru
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin size={15} className="text-[#E87722] mt-1 shrink-0" />
                <span className="text-sm leading-relaxed">
                  Санкт-Петербург,<br />Невский пр., 100
                </span>
              </li>
              <li className="flex items-start gap-3">
                <Clock size={15} className="text-[#E87722] mt-1 shrink-0" />
                <div className="text-sm">
                  <p>Пн–Пт: 9:00–20:00</p>
                  <p>Сб–Вс: 10:00–18:00</p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Реквизиты */}
        <div className="h-px bg-white/10 mt-12 mb-8" />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
          <div>
            <p className="text-white font-semibold mb-3 text-[13px] uppercase tracking-[0.15em]">
              Реквизиты
            </p>
            <p className="text-[13px] leading-relaxed text-[#A8A29A]">
              ООО «КофеМастер СПб» · ИНН 7842123456 · ОГРН 1217800123456
            </p>
            <p className="text-[13px] leading-relaxed text-[#A8A29A]">
              Юр. адрес: 191024, Санкт-Петербург, Невский пр., 100
            </p>
          </div>
          <div className="md:text-right">
            <p className="text-white font-semibold mb-3 text-[13px] uppercase tracking-[0.15em]">
              Юридическая информация
            </p>
            <div className="flex flex-wrap gap-x-5 gap-y-2 md:justify-end">
              <Link href="/oferta" className="text-[13px] hover:text-[#E87722] transition-colors">
                Оферта
              </Link>
              <Link href="/privacy" className="text-[13px] hover:text-[#E87722] transition-colors">
                Политика конфиденциальности
              </Link>
              <Link href="/garantiya" className="text-[13px] hover:text-[#E87722] transition-colors">
                Гарантия
              </Link>
              <Link href="/sertifikaty" className="text-[13px] hover:text-[#E87722] transition-colors">
                Сертификаты
              </Link>
            </div>
          </div>
        </div>

        <div className="h-px bg-white/10 mb-8" />
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-[12px] text-[#666]">
            © 2015–2026 CoffeeMaster. Все права защищены.
          </p>
          <p className="text-[12px] text-[#666]">
            Цены на сайте носят справочный характер и не являются публичной офертой.
          </p>
        </div>
      </div>
    </footer>
  )
}
