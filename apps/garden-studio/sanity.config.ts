import {visionTool} from '@sanity/vision'
import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {unsplashImageAsset} from 'sanity-plugin-asset-source-unsplash'
import {iconPicker} from 'sanity-plugin-icon-picker'
import {imageAssetPickerPlugin} from 'sanity-plugin-image-asset-picker'
import {linkField} from 'sanity-plugin-link-field'
import {media} from 'sanity-plugin-media'
import {simplerColorInput} from 'sanity-plugin-simpler-color-input'
import {singletonTools} from 'sanity-plugin-singleton-tools'

import {schemaTypes} from './src/schemaTypes'

declare module 'sanity' {
  interface BaseSchemaTypeOptions {
    singleton?: boolean
  }
}
export default defineConfig({
  name: 'default',
  title: 'mono garden',

  projectId: 'zdfnyzir',
  dataset: 'production',

  plugins: [
    singletonTools(),
    structureTool(),
    visionTool(),
    iconPicker(),
    media(),
    imageAssetPickerPlugin(),
    simplerColorInput(),
    linkField({
      linkableSchemaTypes: ['note', 'collection', 'source', 'linkItem', 'page'],
      enableLinkParameters: false,
    }),
    unsplashImageAsset(),
  ],

  schema: {
    types: schemaTypes,
  },
})
