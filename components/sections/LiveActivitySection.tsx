'use client'

import { Phone, Wrench, Star } from 'lucide-react'

const items = [
  { type: 'dot', label: '3 мастера онлайн' },
  { type: 'icon', icon: Phone, label: '12 заявок принято сегодня' },
  { type: 'icon', icon: Wrench, label: '8 ремонтов завершено за неделю' },
  { type: 'star', label: 'Средняя оценка 4.9 / 5' },
] as const

export function LiveActivitySection() {
  return (
    <section className="bg-[#1A1410] py-6 border-y border-[rgba(201,169,110,0.15)]">
      <div className="container">
        <div className="flex items-center gap-6 lg:gap-10 overflow-x-auto lg:overflow-visible lg:justify-between scrollbar-hide -mx-4 px-4 lg:mx-0 lg:px-0">
          {items.map((item, idx) => (
            <div key={idx} className="flex items-center gap-6 lg:gap-10 shrink-0">
              <div className="flex items-center gap-3 shrink-0">
                {item.type === 'dot' && (
                  <span className="relative flex h-2.5 w-2.5 shrink-0">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#4CAF50] opacity-75" />
                    <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-[#4CAF50]" />
                  </span>
                )}
                {item.type === 'icon' && (
                  <item.icon size={16} className="text-[#C9A96E] shrink-0" />
                )}
                {item.type === 'star' && (
                  <Star
                    size={16}
                    className="shrink-0"
                    fill="#E87722"
                    color="#E87722"
                  />
                )}
                <span className="text-sm text-[#F5F5F5] whitespace-nowrap font-medium">
                  {item.label}
                </span>
              </div>
              {idx < items.length - 1 && (
                <span className="hidden lg:inline-block w-px h-5 bg-gradient-to-b from-transparent via-[#C9A96E]/40 to-transparent shrink-0" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
