import type { GameSystemCharacterOptionsAdapter } from '../../../../game-system-core/src/server/character-options'
import {
  findPathfinder2eCharacterOption,
  findPathfinder2eCharacterOptionBySource,
  listPathfinder2eCharacterOptions,
  toCharacterOptionEntry,
} from './catalog'

export const pathfinder2eCharacterOptionsAdapter: GameSystemCharacterOptionsAdapter = {
  system: 'PATHFINDER_2E',
  listEntries(options) {
    const limit = options.limit ?? 24
    const offset = options.offset ?? 0

    return listPathfinder2eCharacterOptions(options)
      .sort((left, right) => left.name.localeCompare(right.name) || left.id.localeCompare(right.id))
      .slice(offset, offset + limit)
      .map(toCharacterOptionEntry)
  },
  countEntries(options) {
    return listPathfinder2eCharacterOptions(options).length
  },
  findEntry(kind, entryId) {
    const entry = findPathfinder2eCharacterOption(kind, entryId)
    return entry ? toCharacterOptionEntry(entry) : null
  },
  findEntryBySource(kind, sourcePack, sourceId) {
    const entry = findPathfinder2eCharacterOptionBySource(kind, sourcePack, sourceId)
    return entry ? toCharacterOptionEntry(entry) : null
  },
}

