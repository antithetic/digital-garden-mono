import {BookMarked} from 'lucide-react'
import {defineField, defineType} from 'sanity'

export const sourceType = defineType({
  name: 'source',
  title: 'Source',
  type: 'document',
  icon: BookMarked,
  fields: [
    defineField({
      name: 'type',
      type: 'string',
      options: {list: ['book', 'article', 'podcast', 'video', 'web']},
    }),
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
    }),
    defineField({
      name: 'description',
      title: 'Description',
      description: 'A short description of the source',
      type: 'blockContent',
    }),
    defineField({
      name: 'links',
      title: 'Links',
      description: 'Links related to the source',
      type: 'array',
      of: [{type: 'link'}],
    }),
    defineField({
      name: 'author',
      title: 'Authors',
      type: 'string',
    }),
    defineField({
      name: 'datePublished',
      title: 'Date Published',
      type: 'date',
    }),
    defineField({
      name: 'tags',
      title: 'Tags',
      type: 'array',
      of: [{type: 'reference', to: [{type: 'tag'}]}],
    }),
    defineField({
      name: 'id',
      title: 'Unique ID',
      type: 'uniqueID',
    }),
  ],
})
