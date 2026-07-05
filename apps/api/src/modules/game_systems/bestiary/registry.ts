import type { GameSystemBestiaryAdapter, GameSystemBestiaryListOptions } from './models'
import { pathfinder2eBestiaryAdapter } from '../pathfinder_2e/bestiary'

const bestiaryAdapters = new Map<string, GameSystemBestiaryAdapter>([
  [pathfinder2eBestiaryAdapter.system, pathfinder2eBestiaryAdapter],
])

export function getBestiaryAdapter(system: string) {
  return bestiaryAdapters.get(system)
}

export function listBestiaryCreatures(system: string, options?: GameSystemBestiaryListOptions) {
  const adapter = getBestiaryAdapter(system)
  if (!adapter) return null

  return adapter.listCreatures(options)
}

export function listBestiaryEntries(system: string, options?: GameSystemBestiaryListOptions) {
  const adapter = getBestiaryAdapter(system)
  if (!adapter) return null

  if (adapter.listEntries) return adapter.listEntries(options)
  return adapter.listCreatures(options)
}

export function countBestiaryCreatures(system: string, options?: Pick<GameSystemBestiaryListOptions, 'search' | 'filters'>) {
  const adapter = getBestiaryAdapter(system)
  if (!adapter) return null

  return adapter.countCreatures(options)
}

export function countBestiaryEntries(system: string, options?: Pick<GameSystemBestiaryListOptions, 'search' | 'filters'>) {
  const adapter = getBestiaryAdapter(system)
  if (!adapter) return null

  if (adapter.countEntries) return adapter.countEntries(options)
  return adapter.countCreatures(options)
}

export function findBestiaryCreature(system: string, creatureId: string) {
  const adapter = getBestiaryAdapter(system)
  if (!adapter) return null

  if (adapter.findCreature) return adapter.findCreature(creatureId)

  const total = adapter.countCreatures()
  return adapter.listCreatures({ limit: total }).find((creature) => creature.id === creatureId) ?? null
}

export function findBestiaryEntry(system: string, entryId: string) {
  const adapter = getBestiaryAdapter(system)
  if (!adapter) return null

  if (adapter.findEntry) return adapter.findEntry(entryId)
  return findBestiaryCreature(system, entryId)
}
