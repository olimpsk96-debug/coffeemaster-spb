'use client'

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { X, CheckCircle2, Loader2, Phone, User, Coffee, AlertCircle } from 'lucide-react'
import { cn } from '@/lib/utils'
import { submitDiagnosticsForm } from '@/lib/actions/submitForm'

const schema = z.object({
  name: z.string().min(2, 'Укажите имя'),
  phone: z.string().min(10, 'Укажите телефон'),
  machineType: z.string().optional(),
  brand: z.string().optional(),
  issue: z.string().optional(),
})

type FormValues = z.infer<typeof schema>

const machineTypes = [
  { value: 'automatic', label: 'Автоматическая' },
  { value: 'portafilter', label: 'Рожковая' },
  { value: 'capsule', label: 'Капсульная' },
  { value: 'professional', label: 'Профессиональная' },
  { value: 'built-in', label: 'Встраиваемая' },
]

const brandOptions = [
  'Jura', "De'Longhi", 'Saeco', 'BORK', 'Bosch', 'Siemens',
  'Melitta', 'Nivona', 'Gaggia', 'Krups', 'WMF', 'Miele', 'Другой',
]

interface DiagnosticsFormProps {
  isOpen: boolean
  onClose: () => void
}

export function DiagnosticsForm({ isOpen, onClose }: DiagnosticsFormProps) {
  const [isSuccess, setIsSuccess] = useState(false)
  const [submissionId, setSubmissionId] = useState<string>()

  const { register, handleSubmit, formState: { errors, isSubmitting }, reset } = useForm<FormValues>({
    resolver: zodResolver(schema),
  })

  const onSubmit = async (data: FormValues) => {
    const result = await submitDiagnosticsForm({ ...data, source: 'modal-form' })
    if (result.success) {
      setIsSuccess(true)
      setSubmissionId(result.id)
      reset()
    }
  }

  const handleClose = () => {
    onClose()
    setTimeout(() => setIsSuccess(false), 300)
  }

  if (!isOpen) return null

  const inputClass = (hasError?: boolean) => cn(
    'w-full bg-white border-2 text-[#1A1410] pl-11 pr-4 py-3 text-[15px] rounded-lg outline-none transition-colors placeholder:text-[#A8A29A]',
    hasError ? 'border-red-300 focus:border-red-500' : 'border-[#E5E0D9] focus:border-[#E87722]',
  )

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-[#1A1410]/60 backdrop-blur-sm" onClick={handleClose} />

      <div className="relative bg-white rounded-2xl shadow-2xl w-full max-w-lg max-h-[92vh] overflow-y-auto">
        <button onClick={handleClose} className="absolute top-5 right-5 w-9 h-9 rounded-lg bg-[#F7F5F2] hover:bg-[#FFF4EB] hover:text-[#E87722] flex items-center justify-center text-[#4A4540] transition-all" aria-label="Закрыть">
          <X size={18} />
        </button>

        {isSuccess ? (
          <div className="flex flex-col items-center text-center py-12 px-8">
            <div className="w-20 h-20 rounded-full bg-green-50 flex items-center justify-center mb-6">
              <CheckCircle2 size={42} className="text-green-600" />
            </div>
            <h3 className="text-[#1A1410] text-2xl mb-3 font-semibold" style={{ fontFamily: 'var(--font-display)' }}>
              Заявка принята!
            </h3>
            <p className="text-[#4A4540] leading-relaxed mb-2">
              Перезвоним вам в течение 5 минут в рабочее время.
            </p>
            {submissionId && <p className="text-[#8B847C] text-sm mt-2">№ заявки: <span className="font-mono">{submissionId}</span></p>}
            <button onClick={handleClose} className="btn-primary mt-8">Закрыть</button>
          </div>
        ) : (
          <div className="p-8">
            <div className="mb-6">
              <span className="section-label mb-3">Бесплатная диагностика</span>
              <h3 className="text-[#1A1410] text-2xl mt-3 font-semibold" style={{ fontFamily: 'var(--font-display)' }}>
                Вызвать мастера
              </h3>
              <p className="text-[#4A4540] text-sm mt-2">Перезвоним за 5 минут — без предоплаты</p>
            </div>

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
              <div>
                <label className="text-sm font-medium text-[#1A1410] block mb-1.5">Имя *</label>
                <div className="relative">
                  <User size={18} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-[#8B847C]" />
                  <input {...register('name')} placeholder="Александр" className={inputClass(!!errors.name)} />
                </div>
                {errors.name && <p className="text-red-500 text-xs mt-1 flex items-center gap-1"><AlertCircle size={12} /> {errors.name.message}</p>}
              </div>

              <div>
                <label className="text-sm font-medium text-[#1A1410] block mb-1.5">Телефон *</label>
                <div className="relative">
                  <Phone size={18} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-[#8B847C]" />
                  <input {...register('phone')} type="tel" placeholder="+7 (___) ___-__-__" className={inputClass(!!errors.phone)} />
                </div>
                {errors.phone && <p className="text-red-500 text-xs mt-1 flex items-center gap-1"><AlertCircle size={12} /> {errors.phone.message}</p>}
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="text-sm font-medium text-[#1A1410] block mb-1.5">Тип</label>
                  <select {...register('machineType')} className="w-full bg-white border-2 border-[#E5E0D9] text-[#1A1410] px-3 py-3 text-[15px] rounded-lg outline-none focus:border-[#E87722]">
                    <option value="">Выберите</option>
                    {machineTypes.map((t) => <option key={t.value} value={t.value}>{t.label}</option>)}
                  </select>
                </div>
                <div>
                  <label className="text-sm font-medium text-[#1A1410] block mb-1.5">Бренд</label>
                  <select {...register('brand')} className="w-full bg-white border-2 border-[#E5E0D9] text-[#1A1410] px-3 py-3 text-[15px] rounded-lg outline-none focus:border-[#E87722]">
                    <option value="">Выберите</option>
                    {brandOptions.map((b) => <option key={b} value={b}>{b}</option>)}
                  </select>
                </div>
              </div>

              <div>
                <label className="text-sm font-medium text-[#1A1410] block mb-1.5">Описание проблемы</label>
                <div className="relative">
                  <Coffee size={18} className="absolute left-3.5 top-3 text-[#8B847C]" />
                  <textarea {...register('issue')} rows={3} placeholder="Не включается, протекает, ошибка..." className={cn(inputClass(false), 'resize-none')} />
                </div>
              </div>

              <button type="submit" disabled={isSubmitting} className="btn-primary w-full">
                {isSubmitting ? (<><Loader2 size={16} className="animate-spin" /> Отправляем...</>) : 'Вызвать мастера'}
              </button>

              <p className="text-xs text-[#8B847C] text-center leading-relaxed">
                Нажимая кнопку, вы соглашаетесь с{' '}
                <a href="/privacy" className="text-[#E87722] underline hover:text-[#D26210]">политикой конфиденциальности</a>
              </p>
            </form>
          </div>
        )}
      </div>
    </div>
  )
}
