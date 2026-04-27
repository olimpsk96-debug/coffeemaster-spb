'use client'

const logos: { name: string; className?: string }[] = [
  { name: 'КП Петербург', className: 'font-bold' },
  { name: 'Фонтанка.ру', className: 'italic' },
  { name: 'Деловой Петербург', className: 'font-semibold' },
  { name: 'ТЕХ.РИЭЛ', className: 'font-medium tracking-[0.2em]' },
  { name: 'ВКонтакте', className: 'font-semibold' },
  { name: 'Авито Услуги', className: 'font-medium' },
]

export function PressLogos() {
  return (
    <section className="bg-[#F7F5F2] py-12">
      <div className="container">
        <div className="text-center mb-8">
          <span className="section-label">Нам доверяют редакции и партнёры</span>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-x-6 gap-y-5 items-center">
          {logos.map((logo) => (
            <div
              key={logo.name}
              className={`text-center text-[18px] tracking-tight text-[#8B847C] hover:text-[#4A4540] transition-colors duration-300 cursor-default ${logo.className ?? ''}`}
            >
              {logo.name}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
