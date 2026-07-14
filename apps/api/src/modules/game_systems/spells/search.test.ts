import test from 'node:test'
import assert from 'node:assert/strict'
import { toSpellSearchResult } from './search'
import type { GameSystemSpellEntry } from './models'

const FULL_ENTRY: GameSystemSpellEntry = {
  id: 'pf2e:spells:fireball',
  system: 'PATHFINDER_2E',
  category: 'spell',
  name: 'Fireball',
  source: { pack: 'spells', id: 'abc123', title: 'Pathfinder 2e Core Rules' },
  display: {
    subtitle: 'Pathfinder 2e Core Rules - spells',
    level: { label: 'Rank', value: '3' },
    stats: [{ key: 'range', label: 'Alcance', value: '150 pes' }],
    tags: ['uncommon', 'arcane', 'primal', 'evocation', 'fire'],
    sheet: { sections: [{ key: 'description', title: 'Descricao', entries: [{ key: 'text', label: 'Texto', value: 'Uma bola de fogo...' }] }] },
  },
  systemData: { rank: 3, traditions: ['arcane', 'primal'], damage: { formula: '6d6', type: 'fire' } },
}

test('toSpellSearchResult keeps only id/name/category/rank/tags', () => {
  const result = toSpellSearchResult(FULL_ENTRY)

  assert.deepEqual(result, {
    id: 'pf2e:spells:fireball',
    name: 'Fireball',
    category: 'spell',
    rank: '3',
    tags: ['uncommon', 'arcane', 'primal', 'evocation', 'fire'],
  })
})

test('toSpellSearchResult never leaks source, systemData or rich display fields', () => {
  const result = toSpellSearchResult(FULL_ENTRY) as Record<string, unknown>

  assert.equal('source' in result, false)
  assert.equal('systemData' in result, false)
  assert.equal('subtitle' in result, false)
  assert.equal('stats' in result, false)
  assert.equal('sheet' in result, false)
})

test('toSpellSearchResult falls back to null rank when display.level is absent', () => {
  const entryWithoutLevel: GameSystemSpellEntry = {
    ...FULL_ENTRY,
    display: { ...FULL_ENTRY.display, level: undefined },
  }

  const result = toSpellSearchResult(entryWithoutLevel)
  assert.equal(result.rank, null)
})

test('toSpellSearchResult preserves the ritual category', () => {
  const ritualEntry: GameSystemSpellEntry = { ...FULL_ENTRY, category: 'ritual' }
  const result = toSpellSearchResult(ritualEntry)
  assert.equal(result.category, 'ritual')
})
