import {Link} from 'lucide-react'
import {defineArrayMember, defineField, defineType} from 'sanity'

export const linkType = defineType({
  name: 'linkItem',
  title: 'Links',
  type: 'document',
  icon: Link,
  fields: [
    defineField({
      name: 'title',
      title: 'Link Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'url',
      title: 'Link URL',
      description: 'Link to an absolute URL to a page on another website.',
      type: 'url',
      validation: (Rule) =>
        Rule.uri({
          scheme: ['http', 'https'],
        }),
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
          to: [{type: 'note'}, {type: 'collection'}, {type: 'source'}, {type: 'linkItem'}],
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
