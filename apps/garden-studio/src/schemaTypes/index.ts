import {authorType} from './documents/authorType'
import {collectionType} from './documents/collectionType'
import {linkType} from './documents/linkItemType'
import {noteType} from './documents/noteType'
import {pageType} from './documents/pageType'
import {settingsType} from './documents/settings'
import {sourceType} from './documents/sourceType'
import {tagType} from './documents/tagType'
import {blockContentType} from './objects/blockContentType'
import {datesType} from './objects/datesType'
import {linkItemType} from './objects/linkItemType'
import {uniqueID} from './objects/uniqueID'

export const schemaTypes = [
  // Documents
  collectionType,
  linkType,
  noteType,
  sourceType,
  tagType,
  pageType,
  authorType,
  settingsType,
  // Objects
  blockContentType,
  datesType,
  uniqueID,
  linkItemType,
  // Assets
]
