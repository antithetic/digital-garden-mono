import {UserRoundPen} from 'lucide-react'
import {defineArrayMember, defineField, defineType} from 'sanity'

export const authorType = defineType({
  name: 'author',
  title: 'Author',
  type: 'document',
  icon: UserRoundPen,
  fields: [
    defineField({
      name: 'name',
      title: 'Name',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'name',
      },
      hidden: ({document}) => !document?.name,
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'bio',
      title: 'Bio',
      type: 'blockContent',
    }),
    defineField({
      name: 'tags',
      title: 'Tags',
      type: 'array',
      of: [{type: 'reference', to: [{type: 'tag'}]}],
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
      description: 'Thread ideas together',
    }),
    defineField({
      name: 'dates',
      title: 'Dates',
      type: 'dates',
    }),
    defineField({
      name: 'id',
      title: 'Author ID',
      type: 'uniqueID',
    }),
  ],
})
