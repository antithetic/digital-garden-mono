import {visionTool} from '@sanity/vision'
import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {iconify} from 'sanity-plugin-iconify'

import {schemaTypes} from './src/schemaTypes'

export default defineConfig({
  name: 'default',
  title: 'mono garden',

  projectId: 'zdfnyzir',
  dataset: 'production',

  plugins: [structureTool(), visionTool(), iconify()],

  schema: {
    types: schemaTypes,
  },
})
