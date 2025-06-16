import {Settings} from 'lucide-react'
import {defineField, defineType} from 'sanity'

export const settingsType = defineType({
  name: 'settings',
  title: 'Settings',
  type: 'document',
  icon: Settings,
  options: {
    singleton: true,
  },
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      description: 'Website Title',
      type: 'string',
      validation: (Rule: any) => Rule.required(),
    }),
    defineField({
      name: 'description',
      title: 'Description',
      description: 'Website Description',
      type: 'blockContent',
    }),
    defineField({
      name: 'logo',
      title: 'Logo',
      description: 'Website Logo',
      type: 'image',
    }),
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'description',
      media: 'logo',
    },
  },
})
