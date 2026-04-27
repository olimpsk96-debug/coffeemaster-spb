import type { Metadata } from 'next'
import { Phone, Mail, MapPin, Clock, Send, MessageCircle } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Контакты',
  description: 'Адрес, телефон и режим работы сервисного центра по ремонту кофемашин в Санкт-Петербурге.',
  openGraph: {
    title: 'Контакты',
    description: 'Адрес, телефон и режим работы сервисного центра по ремонту кофемашин в Санкт-Петербурге.',
    locale: 'ru_RU',
    type: 'website',
  },
}

export default function ContactsPage() {
  return (
    <div className="pt-[72px]">
      <section className="bg-gradient-to-br from-[#FFF9F2] to-white py-16 lg:py-20">
        <div className="container">
          <span className="section-label mb-5">Связаться с нами</span>
          <h1 className="text-[#1A1410] mt-5" style={{ fontFamily: 'var(--font-display)' }}>
            Контакты
          </h1>
        </div>
      </section>

      <section className="py-16 lg:py-20 bg-[#F7F5F2]">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            <div className="bg-white rounded-2xl p-8 lg:p-10 border border-[rgba(26,20,16,0.06)] space-y-8">
              <div>
                <p className="text-xs uppercase tracking-wider font-semibold text-[#E87722] mb-4">Телефоны</p>
                <div className="space-y-3">
                  <a href="tel:+78121234567" className="flex items-center gap-3 group">
                    <Phone size={18} className="text-[#E87722]" />
                    <span className="text-[#1A1410] group-hover:text-[#E87722] transition-colors text-lg font-semibold">
                      +7 (812) 123-45-67
                    </span>
                  </a>
                  <a href="tel:+79991234567" className="flex items-center gap-3 group">
                    <Phone size={18} className="text-[#E87722]" />
                    <span className="text-[#1A1410] group-hover:text-[#E87722] transition-colors text-lg font-semibold">
                      +7 (999) 123-45-67
                    </span>
                  </a>
                </div>
              </div>

              <div>
                <p className="text-xs uppercase tracking-wider font-semibold text-[#E87722] mb-4">Мессенджеры</p>
                <div className="flex gap-3">
                  <a href="https://t.me/coffeemaster_spb" className="flex items-center gap-2 px-4 py-3 bg-[#229ED9] text-white rounded-lg hover:bg-[#1d8cc1] transition-colors font-semibold">
                    <Send size={16} /> Telegram
                  </a>
                  <a href="https://wa.me/79991234567" className="flex items-center gap-2 px-4 py-3 bg-[#25D366] text-white rounded-lg hover:bg-[#1faa56] transition-colors font-semibold">
                    <MessageCircle size={16} /> WhatsApp
                  </a>
                </div>
              </div>

              <div>
                <p className="text-xs uppercase tracking-wider font-semibold text-[#E87722] mb-4">Email</p>
                <a href="mailto:info@coffeemaster.spb.ru" className="flex items-center gap-3 group">
                  <Mail size={18} className="text-[#E87722]" />
                  <span className="text-[#1A1410] group-hover:text-[#E87722] transition-colors">
                    info@coffeemaster.spb.ru
                  </span>
                </a>
              </div>

              <div>
                <p className="text-xs uppercase tracking-wider font-semibold text-[#E87722] mb-4">Адрес</p>
                <div className="flex items-start gap-3">
                  <MapPin size={18} className="text-[#E87722] mt-1 shrink-0" />
                  <div>
                    <p className="text-[#1A1410] font-medium">Санкт-Петербург,</p>
                    <p className="text-[#1A1410] font-medium">Невский проспект, 100</p>
                    <p className="text-[#8B847C] text-sm mt-1">м. Площадь Восстания / Маяковская</p>
                  </div>
                </div>
              </div>

              <div>
                <p className="text-xs uppercase tracking-wider font-semibold text-[#E87722] mb-4">Часы работы</p>
                <div className="flex items-start gap-3">
                  <Clock size={18} className="text-[#E87722] mt-1 shrink-0" />
                  <div className="space-y-2">
                    <div className="flex gap-6">
                      <span className="text-[#8B847C] w-20">Пн — Пт</span>
                      <span className="text-[#1A1410] font-medium">9:00 — 20:00</span>
                    </div>
                    <div className="flex gap-6">
                      <span className="text-[#8B847C] w-20">Сб — Вс</span>
                      <span className="text-[#1A1410] font-medium">10:00 — 18:00</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl border border-[rgba(26,20,16,0.06)] flex items-center justify-center min-h-[500px] overflow-hidden">
              <iframe
                src="https://yandex.ru/map-widget/v1/?ll=30.3604%2C59.9311&z=14&pt=30.3604,59.9311,pm2rdm"
                width="100%"
                height="100%"
                className="min-h-[500px] w-full border-0"
                title="Адрес"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
