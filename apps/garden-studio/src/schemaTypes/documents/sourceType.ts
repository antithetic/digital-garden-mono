import {BookMarked} from 'lucide-react'
import {defineArrayMember, defineField, defineType} from 'sanity'

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
      validation: (Rule) => Rule.required(),
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
      of: [{type: 'linkItem'}],
    }),
    defineField({
      name: 'author',
      title: 'Authors',
      type: 'array',
      of: [defineArrayMember({type: 'reference', to: [{type: 'author'}]})],
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
      name: 'sourceId',
      title: 'Unique ID',
      type: 'uniqueID',
    }),
  ],
  preview: {
    select: {
      title: 'title',
      type: 'type',
      author0: 'author.0.name',
      author1: 'author.1.name',
      author2: 'author.2.name',
      datePublished: 'datePublished',
    },
    prepare({title, type, author0, author1, author2, datePublished}) {
      const authors = [author0, author1, author2].filter(Boolean)
      const extra = authors.length === 3 ? '…' : ''
      const authorNames = authors.join(', ') + extra
      const formattedDate = datePublished ? new Date(datePublished).toLocaleDateString() : 'No date'
      return {
        title,
        subtitle: `${type} • ${authorNames} • ${formattedDate}`,
      }
    },
  },
})
