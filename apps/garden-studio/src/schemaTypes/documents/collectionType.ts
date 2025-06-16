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
      type: 'uniqueID',
    }),
  ],
})
