import type { CollectionConfig } from 'payload'

export const Team: CollectionConfig = {
  slug: 'team',
  access: { read: () => true },
  admin: { useAsTitle: 'name' },
  fields: [
    { name: 'name', type: 'text', required: true, label: 'Имя' },
    { name: 'role', type: 'text', required: true, label: 'Должность' },
    { name: 'photo', type: 'upload', relationTo: 'media', label: 'Фото' },
    { name: 'bio', type: 'textarea', label: 'Биография' },
    { name: 'experience', type: 'number', label: 'Лет опыта' },
    { name: 'specialization', type: 'text', label: 'Специализация' },
    { name: 'sortOrder', type: 'number', defaultValue: 0, label: 'Порядок' },
  ],
}
