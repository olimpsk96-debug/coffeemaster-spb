import type { CollectionConfig } from 'payload'

export const Services: CollectionConfig = {
  slug: 'services',
  access: { read: () => true },
  admin: {
    useAsTitle: 'title',
    defaultColumns: ['title', 'category', 'priceFrom', 'updatedAt'],
  },
  fields: [
    { name: 'title', type: 'text', required: true, label: 'Название' },
    {
      name: 'slug',
      type: 'text',
      required: true,
      unique: true,
      label: 'URL slug',
      admin: { description: 'Например: remont-kofemelki' },
    },
    {
      name: 'category',
      type: 'select',
      required: true,
      label: 'Категория',
      options: [
        { label: 'Ремонт', value: 'repair' },
        { label: 'Профилактика', value: 'maintenance' },
        { label: 'Диагностика', value: 'diagnostics' },
        { label: 'Чистка', value: 'cleaning' },
        { label: 'Замена запчастей', value: 'parts' },
        { label: 'Выездной ремонт', value: 'onsite' },
      ],
    },
    {
      name: 'priceFrom',
      type: 'number',
      required: true,
      label: 'Цена от (₽)',
      min: 0,
    },
    { name: 'shortDescription', type: 'textarea', label: 'Краткое описание' },
    { name: 'description', type: 'richText', label: 'Полное описание' },
    {
      name: 'image',
      type: 'upload',
      relationTo: 'media',
      label: 'Изображение',
    },
    {
      name: 'brands',
      type: 'relationship',
      relationTo: 'brands',
      hasMany: true,
      label: 'Бренды',
    },
    {
      name: 'faq',
      type: 'array',
      label: 'FAQ',
      fields: [
        { name: 'question', type: 'text', required: true, label: 'Вопрос' },
        { name: 'answer', type: 'textarea', required: true, label: 'Ответ' },
      ],
    },
    { name: 'featured', type: 'checkbox', label: 'Показать на главной', defaultValue: false },
    {
      name: 'meta',
      type: 'group',
      label: 'SEO',
      fields: [
        { name: 'title', type: 'text', label: 'Meta title' },
        { name: 'description', type: 'textarea', label: 'Meta description' },
      ],
    },
  ],
}
