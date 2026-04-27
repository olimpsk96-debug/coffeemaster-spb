import type { CollectionConfig } from 'payload'

export const FormSubmissions: CollectionConfig = {
  slug: 'form-submissions',
  access: {
    read: ({ req }) => Boolean(req.user),
    create: () => true,
  },
  admin: {
    useAsTitle: 'name',
    defaultColumns: ['name', 'phone', 'brand', 'status', 'createdAt'],
  },
  fields: [
    { name: 'name', type: 'text', required: true, label: 'Имя' },
    { name: 'phone', type: 'text', required: true, label: 'Телефон' },
    { name: 'email', type: 'email', label: 'Email' },
    {
      name: 'machineType',
      type: 'select',
      label: 'Тип кофемашины',
      options: [
        { label: 'Автоматическая', value: 'automatic' },
        { label: 'Рожковая', value: 'portafilter' },
        { label: 'Капсульная', value: 'capsule' },
        { label: 'Профессиональная', value: 'professional' },
        { label: 'Встраиваемая', value: 'built-in' },
      ],
    },
    { name: 'brand', type: 'text', label: 'Марка машины' },
    { name: 'issue', type: 'textarea', label: 'Описание проблемы' },
    { name: 'source', type: 'text', label: 'Источник заявки' },
    {
      name: 'status',
      type: 'select',
      defaultValue: 'new',
      label: 'Статус',
      options: [
        { label: 'Новая', value: 'new' },
        { label: 'Связались', value: 'contacted' },
        { label: 'В работе', value: 'inProgress' },
        { label: 'Выполнено', value: 'completed' },
        { label: 'Отменено', value: 'cancelled' },
      ],
    },
  ],
  timestamps: true,
}
