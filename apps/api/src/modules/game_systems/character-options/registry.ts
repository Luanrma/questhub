import type {
  GameSystemCharacterOptionKind,
  GameSystemCharacterOptionListOptions,
  GameSystemCharacterOptionsAdapter,
} from './models'
import { pathfinder2eCharacterOptionsAdapter } from '../pathfinder_2e/character_options'

const characterOptionsAdapters = new Map<string, GameSystemCharacterOptionsAdapter>([
  [pathfinder2eCharacterOptionsAdapter.system, pathfinder2eCharacterOptionsAdapter],
])

export function getCharacterOptionsAdapter(system: string) {
  return characterOptionsAdapters.get(system)
}

export function listCharacterOptions(system: string, options: GameSystemCharacterOptionListOptions) {
  const adapter = getCharacterOptionsAdapter(system)
  if (!adapter) return null

  return adapter.listEntries(options)
}

export function countCharacterOptions(
  system: string,
  options: Omit<GameSystemCharacterOptionListOptions, 'limit' | 'offset'>,
) {
  const adapter = getCharacterOptionsAdapter(system)
  if (!adapter) return null

  return adapter.countEntries(options)
}

export function findCharacterOption(system: string, kind: GameSystemCharacterOptionKind, entryId: string) {
  const adapter = getCharacterOptionsAdapter(system)
  if (!adapter) return null

  return adapter.findEntry(kind, entryId)
}

export function findCharacterOptionBySource(
  system: string,
  kind: GameSystemCharacterOptionKind,
  sourcePack: string,
  sourceId: string,
) {
  const adapter = getCharacterOptionsAdapter(system)
  if (!adapter?.findEntryBySource) return null

  return adapter.findEntryBySource(kind, sourcePack, sourceId)
}

