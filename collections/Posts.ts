import type { CollectionConfig } from 'payload'

export const Posts: CollectionConfig = {
  slug: 'posts',
  access: { read: () => true },
  admin: {
    useAsTitle: 'title',
    defaultColumns: ['title', 'category', 'publishedAt', 'updatedAt'],
  },
  fields: [
    { name: 'title', type: 'text', required: true, label: 'Заголовок' },
    { name: 'slug', type: 'text', required: true, unique: true, label: 'URL slug' },
    { name: 'excerpt', type: 'textarea', label: 'Анонс' },
    { name: 'content', type: 'richText', label: 'Контент' },
    { name: 'featuredImage', type: 'upload', relationTo: 'media', label: 'Обложка' },
    {
      name: 'category',
      type: 'select',
      label: 'Категория',
      options: [
        { label: 'Уход и обслуживание', value: 'maintenance' },
        { label: 'Неисправности', value: 'issues' },
        { label: 'Советы', value: 'tips' },
        { label: 'Бренды', value: 'brands' },
        { label: 'Новости', value: 'news' },
      ],
    },
    { name: 'publishedAt', type: 'date', label: 'Дата публикации' },
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
