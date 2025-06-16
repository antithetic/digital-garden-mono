import {visionTool} from '@sanity/vision'
import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {iconPicker} from 'sanity-plugin-icon-picker'
import {imageAssetPickerPlugin} from 'sanity-plugin-image-asset-picker'
import {linkField} from 'sanity-plugin-link-field'
import {media} from 'sanity-plugin-media'
import {simplerColorInput} from 'sanity-plugin-simpler-color-input'

import {schemaTypes} from './src/schemaTypes'

export default defineConfig({
  name: 'default',
  title: 'mono garden',

  projectId: 'zdfnyzir',
  dataset: 'production',

  plugins: [
    structureTool(),
    visionTool(),
    iconPicker(),
    media(),
    imageAssetPickerPlugin(),
    simplerColorInput(),
    linkField({
      linkableSchemaTypes: ['note', 'collection', 'source', 'links', 'page'],
      enableLinkParameters: false,
    }),
  ],

  schema: {
    types: schemaTypes,
  },
})
