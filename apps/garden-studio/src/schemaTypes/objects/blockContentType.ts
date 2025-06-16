import {defineType} from 'sanity'

export const blockContentType = defineType({
  name: 'blockContent',
  type: 'array',
  of: [{type: 'block'}],
})
