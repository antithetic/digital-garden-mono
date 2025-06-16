import {authorType} from './documents/authorType'
import {collectionType} from './documents/collectionType'
import {linkItemType} from './documents/linkItemType'
import {noteType} from './documents/noteType'
import {pageType} from './documents/pageType'
import {settingsType} from './documents/settings'
import {sourceType} from './documents/sourceType'
import {tagType} from './documents/tagType'
import {blockContent} from './objects/blockContentType'
import {datesType} from './objects/datesType'
import {uniqueID} from './objects/uniqueID'

export const schemaTypes = [
  // Documents
  collectionType,
  linkItemType,
  noteType,
  sourceType,
  tagType,
  pageType,
  authorType,
  settingsType,
  // Objects
  blockContent,
  datesType,
  uniqueID,

  // Assets
]
