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
      name: 'image',
      title: 'Image',
      description: 'A profile image for the author',
      type: 'image',
      options: {
        hotspot: true,
      },
      fields: [
        defineField({
          name: 'alt',
          title: 'Alt Text',
          description: 'Short description for accessibility & SEO',
          type: 'string',
          validation: (Rule) => Rule.required().max(120),
        }),
      ],
    }),
    defineField({
      name: 'bio',
      title: 'Bio',
      type: 'text',
      rows: 3,
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
      name: 'authorId',
      title: 'Author ID',
      type: 'uniqueID',
    }),
  ],
  preview: {
    select: {
      title: 'name',
      subtitle: 'bio',
      media: 'image',
    },
  },
})
