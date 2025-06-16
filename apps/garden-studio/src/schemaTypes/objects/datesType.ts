import {defineField, defineType} from 'sanity'

export const datesType = defineType({
  name: 'dates',
  type: 'object',
  options: {
    columns: 2,
  },
  fields: [
    defineField({
      name: 'createdAt',
      title: 'Created At',
      description: 'The date and time the note was created',
      type: 'datetime',
      initialValue: () => new Date().toISOString(),
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'modifiedAt',
      title: 'Modified At',
      description: 'The date and time the note was last modified',
      type: 'datetime',
      validation: (rule) => rule.required(),
    }),
  ],
})
