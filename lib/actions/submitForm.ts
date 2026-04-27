'use server'

import { z } from 'zod'

const formSchema = z.object({
  name: z.string().min(2, 'Укажите имя'),
  phone: z.string().min(10, 'Укажите телефон'),
  machineType: z.string().optional(),
  brand: z.string().optional(),
  issue: z.string().optional(),
  source: z.string().optional(),
})

export type FormData = z.infer<typeof formSchema>

export async function submitDiagnosticsForm(data: FormData) {
  const parsed = formSchema.safeParse(data)
  if (!parsed.success) {
    return { success: false, error: parsed.error.errors[0].message }
  }

  try {
    const serverUrl = process.env.NEXT_PUBLIC_SERVER_URL || 'http://localhost:3000'
    const res = await fetch(`${serverUrl}/api/form-submissions`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ ...parsed.data, status: 'new' }),
    })

    if (!res.ok) throw new Error('Failed to save submission')

    const submission = await res.json()

    // Telegram notification
    const botToken = process.env.TELEGRAM_BOT_TOKEN
    const chatId = process.env.TELEGRAM_CHAT_ID
    if (botToken && chatId) {
      const message = [
        '🔧 *Новая заявка на ремонт*',
        `👤 *Имя:* ${parsed.data.name}`,
        `📞 *Телефон:* ${parsed.data.phone}`,
        parsed.data.brand ? `☕ *Марка:* ${parsed.data.brand}` : '',
        parsed.data.machineType ? `🔩 *Тип:* ${parsed.data.machineType}` : '',
        parsed.data.issue ? `📝 *Проблема:* ${parsed.data.issue}` : '',
        parsed.data.source ? `📍 *Источник:* ${parsed.data.source}` : '',
      ].filter(Boolean).join('\n')

      await fetch(`https://api.telegram.org/bot${botToken}/sendMessage`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          chat_id: chatId,
          text: message,
          parse_mode: 'Markdown',
        }),
      }).catch(() => {}) // don't fail if telegram is down
    }

    return { success: true, id: submission.doc?.id }
  } catch (err) {
    console.error('Form submission error:', err)
    return { success: false, error: 'Произошла ошибка. Попробуйте ещё раз или позвоните нам.' }
  }
}
