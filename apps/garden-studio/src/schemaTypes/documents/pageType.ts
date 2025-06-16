import {SquareAsterisk} from 'lucide-react'
import {defineField, defineType} from 'sanity'

export const pageType = defineType({
  name: 'page',
  title: 'Page',
  type: 'document',
  icon: SquareAsterisk,
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
      },
    }),
    defineField({
      name: 'content',
      title: 'Content',
      type: 'blockContent',
    }),
    defineField({
      name: 'dates',
      title: 'Dates',
      type: 'dates',
    }),
    defineField({
      name: 'pageId',
      title: 'Page ID',
      type: 'uniqueID',
    }),
  ],
})
