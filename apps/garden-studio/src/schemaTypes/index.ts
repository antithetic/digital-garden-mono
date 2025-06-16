import {collectionType} from './documents/collectionType'
import {noteType} from './documents/noteType'
import {sourceType} from './documents/sourceType'
import {tagType} from './documents/tagType'
import {blockContentType} from './objects/blockContentType'
import {datesType} from './objects/datesType'
import {uniqueID} from './objects/uniqueID'

export const schemaTypes = [
  // Documents
  noteType,
  tagType,
  sourceType,
  collectionType,
  // Objects
  datesType,
  blockContentType,
  uniqueID,
  // Assets
]
