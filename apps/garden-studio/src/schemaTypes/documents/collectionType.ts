import {Library} from 'lucide-react'
import {defineArrayMember, defineField, defineType} from 'sanity'

export const collectionType = defineType({
  name: 'collection',
  title: 'Collection',
  type: 'document',
  icon: Library,
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'blockContent',
    }),
    defineField({
      name: 'linkedNotes',
      title: 'Connected Notes',
      type: 'array',
      of: [
        defineArrayMember({
          type: 'reference',
          to: [{type: 'note'}],
        }),
      ],
      description: 'Notes in this collection',
    }),
    defineField({
      name: 'sources',
      title: 'Source',
      description: 'Sources for this collection',
      type: 'array',
      of: [
        defineArrayMember({
          type: 'reference',
          to: [{type: 'source'}],
        }),
      ],
    }),
    defineField({
      name: 'tags',
      title: 'Tags',
      type: 'array',
      of: [
        defineArrayMember({
          type: 'reference',
          to: [{type: 'tag'}],
        }),
      ],
    }),
    defineField({
      name: 'dates',
      title: 'Document Dates',
      type: 'dates',
    }),
    defineField({
      name: 'id',
      title: 'Unique ID',
      description: 'The Unique ID of this collection',
      type: 'string',
      readOnly: true,
      initialValue: () => {
        const now = new Date()
        return (
          now.getFullYear() +
          String(now.getMonth() + 1).padStart(2, '0') +
          String(now.getDate()).padStart(2, '0') +
          String(now.getHours()).padStart(2, '0') +
          String(now.getMinutes()).padStart(2, '0')
        )
      },
      validation: (Rule) => Rule.required(),
    }),
  ],
})
