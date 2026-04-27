import type { CollectionConfig } from 'payload'

export const Brands: CollectionConfig = {
  slug: 'brands',
  access: { read: () => true },
  admin: {
    useAsTitle: 'name',
    defaultColumns: ['name', 'slug', 'updatedAt'],
  },
  fields: [
    { name: 'name', type: 'text', required: true, label: 'Название' },
    { name: 'slug', type: 'text', required: true, unique: true, label: 'URL slug' },
    { name: 'logo', type: 'upload', relationTo: 'media', label: 'Логотип' },
    { name: 'description', type: 'richText', label: 'Описание' },
    {
      name: 'commonIssues',
      type: 'array',
      label: 'Типичные неисправности',
      fields: [
        { name: 'issue', type: 'text', required: true, label: 'Неисправность' },
        { name: 'description', type: 'textarea', label: 'Описание' },
        { name: 'priceFrom', type: 'number', label: 'Цена от' },
      ],
    },
    {
      name: 'services',
      type: 'relationship',
      relationTo: 'services',
      hasMany: true,
      label: 'Услуги',
    },
    { name: 'featured', type: 'checkbox', label: 'Показать в marquee', defaultValue: true },
    { name: 'sortOrder', type: 'number', label: 'Порядок сортировки', defaultValue: 0 },
  ],
}
