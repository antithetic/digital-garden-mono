import {Tag} from 'lucide-react'
import {defineArrayMember, defineField, defineType} from 'sanity'
import {preview} from 'sanity-plugin-icon-picker'

export const tagType = defineType({
  name: 'tag',
  title: 'Tag',
  type: 'document',
  icon: Tag,
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
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
      rows: 2,
    }),
    defineField({
      name: 'icon',
      title: 'Icon',
      description: 'An icon for this tag',
      type: 'iconPicker',
    }),
    defineField({
      name: 'color',
      title: 'Tag Color',
      description: 'A unique color for this tag',
      type: 'simplerColor',
    }),
    defineField({
      name: 'related',
      title: 'Related Tags',
      description: 'Tags that are related to this one',
      type: 'array',
      of: [
        defineArrayMember({
          type: 'reference',
          to: [{type: 'tag'}],
          weak: true,
        }),
      ],
    }),
  ],
  preview: {
    select: {
      name: 'name',
      description: 'description',
      icon: 'icon',
    },
    prepare({name, description, icon}) {
      return {
        title: name,
        subtitle: description,
        media: preview(icon),
      }
    },
  },
})
