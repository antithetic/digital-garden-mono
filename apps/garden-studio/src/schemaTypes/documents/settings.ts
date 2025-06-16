import {Settings} from 'lucide-react'
import {defineField, defineType} from 'sanity'

export const settingsType = defineType({
  name: 'settings',
  title: 'Settings',
  type: 'document',
  icon: Settings,
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      description: 'Website Title',
      type: 'string',
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
})
