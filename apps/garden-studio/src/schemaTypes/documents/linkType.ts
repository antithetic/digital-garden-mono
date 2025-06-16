import {Link} from 'lucide-react'
import {defineArrayMember, defineField, defineType} from 'sanity'

export const linkType = defineType({
  name: 'links',
  title: 'Links',
  type: 'document',
  icon: Link,
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
    }),
    defineField({
      name: 'url',
      title: 'URL',
      type: 'url',
    }),
    defineField({
      name: 'description',
      title: 'Description',
      description: 'A short description of the link',
      type: 'text',
      rows: 2,
    }),
    defineField({
      name: 'tags',
      title: 'Tags',
      description: 'Tags that describe this link',
      type: 'array',
      of: [{type: 'reference', to: [{type: 'tag'}]}],
    }),
    defineField({
      name: 'references',
      title: 'References',
      description: 'References to other notes, collections, sources, or links',
      type: 'array',
      of: [
        defineArrayMember({
          type: 'reference',
          to: [{type: 'note'}, {type: 'collection'}, {type: 'source'}, {type: 'links'}],
        }),
      ],
    }),
    defineField({
      name: 'id',
      title: 'Link ID',
      type: 'uniqueID',
    }),
  ],
})
