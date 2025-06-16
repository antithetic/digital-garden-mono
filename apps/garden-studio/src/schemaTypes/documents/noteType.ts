import {NotepadText} from 'lucide-react'
import {defineArrayMember, defineField, defineType} from 'sanity'

export const noteType = defineType({
  name: 'note',
  title: 'Note',
  type: 'document',
  icon: NotepadText,
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      description: 'The title of the note',
      type: 'string',
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      description: 'The slug of the note',
      type: 'slug',
      options: {
        source: (doc: any) => `${doc.id}-${doc.title}`,
        slugify: (input: string) => input.toLowerCase().replace(/\s+/g, '-'),
      },
    }),
    defineField({
      name: 'noteType',
      title: 'Note Type',
      description: 'The type of note',
      type: 'string',
      options: {
        list: [
          {title: 'Fleeting', value: 'fleeting'},
          {title: 'Literature', value: 'literature'},
          {title: 'Permanent', value: 'permanent'},
        ],
        layout: 'radio',
      },
      initialValue: 'fleeting',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'content',
      title: 'Content',
      description: 'The main content of the note',
      type: 'blockContent',
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
      name: 'commentary',
      title: 'Commentary',
      description: 'The commentary of this note in relation to the content',
      type: 'blockContent',
      hidden: ({parent}: any) => parent?.noteType !== 'literature',
    }),
    defineField({
      name: 'source',
      title: 'Source',
      description: 'The source of the note',
      type: 'string',
      hidden: ({parent}: any) => parent?.noteType !== 'literature',
    }),
    defineField({
      name: 'author',
      title: 'Author',
      description: 'The author of the note',
      type: 'string',
      hidden: ({parent}: any) => parent?.noteType !== 'literature',
    }),
    defineField({
      name: 'tags',
      title: 'Tags',
      type: 'array',
      of: [
        defineArrayMember({
          type: 'reference',
          to: [{type: 'tag'}],
        }),
      ],
    }),
    defineField({
      name: 'dates',
      title: 'Document Dates',
      type: 'dates',
    }),
    defineField({
      name: 'id',
      title: 'Note ID',
      type: 'uniqueID',
    }),
  ],
})
