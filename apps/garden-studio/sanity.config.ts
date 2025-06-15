import {visionTool} from '@sanity/vision'
import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {iconPicker} from 'sanity-plugin-icon-picker'

import {schemaTypes} from './src/schemaTypes'

export default defineConfig({
  name: 'default',
  title: 'mono garden',

  projectId: 'zdfnyzir',
  dataset: 'production',

  plugins: [structureTool(), visionTool(), iconPicker()],

  schema: {
    types: schemaTypes,
  },
})
