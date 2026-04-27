import type { CollectionConfig } from 'payload'

export const Testimonials: CollectionConfig = {
  slug: 'testimonials',
  access: { read: () => true },
  admin: {
    useAsTitle: 'author',
    defaultColumns: ['author', 'rating', 'coffeeMachine', 'date'],
  },
  fields: [
    { name: 'author', type: 'text', required: true, label: 'Имя клиента' },
    { name: 'avatar', type: 'upload', relationTo: 'media', label: 'Фото' },
    { name: 'rating', type: 'number', required: true, min: 1, max: 5, label: 'Оценка' },
    { name: 'text', type: 'textarea', required: true, label: 'Текст отзыва' },
    { name: 'brand', type: 'relationship', relationTo: 'brands', label: 'Бренд' },
    { name: 'coffeeMachine', type: 'text', label: 'Модель кофемашины' },
    { name: 'date', type: 'date', label: 'Дата' },
    { name: 'published', type: 'checkbox', defaultValue: true, label: 'Опубликован' },
  ],
}
