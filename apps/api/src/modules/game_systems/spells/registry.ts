import type { GameSystemSpellAdapter, GameSystemSpellListOptions } from './models'
import { pathfinder2eSpellAdapter } from '../pathfinder_2e/spells'

const spellAdapters = new Map<string, GameSystemSpellAdapter>([[pathfinder2eSpellAdapter.system, pathfinder2eSpellAdapter]])

export function getSpellAdapter(system: string) {
  return spellAdapters.get(system)
}

export function listCampaignSpells(system: string, options?: GameSystemSpellListOptions) {
  const adapter = getSpellAdapter(system)
  if (!adapter) return null

  return adapter.listEntries(options)
}

export function countCampaignSpells(system: string, options?: Pick<GameSystemSpellListOptions, 'search' | 'filters'>) {
  const adapter = getSpellAdapter(system)
  if (!adapter) return null

  return adapter.countEntries(options)
}

export function findCampaignSpell(system: string, spellId: string) {
  const adapter = getSpellAdapter(system)
  if (!adapter) return null

  if (adapter.findEntry) return adapter.findEntry(spellId)

  const total = adapter.countEntries()
  return adapter.listEntries({ limit: total }).find((entry) => entry.id === spellId) ?? null
}
