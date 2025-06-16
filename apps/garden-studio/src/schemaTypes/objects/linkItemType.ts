import {defineArrayMember, defineField, defineType} from 'sanity'

export const linkItems = defineType({
  name: 'linkItem',
  title: 'Link Item',
  type: 'object',
  fields: [
    defineField({
      name: 'link',
      title: 'Link',
      type: 'array',
      of: [
        defineArrayMember({
          type: 'link',
        }),
      ],
    }),
  ],
})
