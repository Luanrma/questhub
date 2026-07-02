import type { GameSystemBestiaryAdapter } from './models'
import { pathfinder2eBestiaryAdapter } from '../pathfinder_2e/bestiary'

const bestiaryAdapters = new Map<string, GameSystemBestiaryAdapter>([
  [pathfinder2eBestiaryAdapter.system, pathfinder2eBestiaryAdapter],
])

export function getBestiaryAdapter(system: string) {
  return bestiaryAdapters.get(system)
}

export function listBestiaryCreatures(system: string, options?: { search?: string; limit?: number }) {
  const adapter = getBestiaryAdapter(system)
  if (!adapter) return null

  return adapter.listCreatures(options)
}

export function findBestiaryCreature(system: string, creatureId: string) {
  const adapter = getBestiaryAdapter(system)
  if (!adapter) return null

  return adapter.listCreatures({ limit: 1000 }).find((creature) => creature.id === creatureId) ?? null
}
