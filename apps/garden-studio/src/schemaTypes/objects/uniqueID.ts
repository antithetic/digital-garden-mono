import {defineField, defineType} from 'sanity'

export const uniqueID = defineType({
  name: 'uniqueID',
  type: 'object',
  fields: [
    defineField({
      name: 'id',
      type: 'string',
      title: 'Unique ID',
      readOnly: true,
      initialValue: () => {
        const now = new Date()
        return (
          now.getFullYear() +
          String(now.getMonth() + 1).padStart(2, '0') +
          String(now.getDate()).padStart(2, '0') +
          String(now.getHours()).padStart(2, '0') +
          String(now.getMinutes()).padStart(2, '0')
        )
      },
      validation: (Rule) => Rule.required(),
    }),
  ],
})
