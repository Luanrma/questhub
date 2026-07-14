import assert from 'node:assert/strict'
import { test } from 'node:test'
import { preparedSlotsMatchSlotRanks, syncPreparedSlotsWithSlotRanks } from './spellbookHelpers'
import type { Pathfinder2eSpellcastingEntry } from '../types'

function preparedEntry(patch: Partial<Pathfinder2eSpellcastingEntry> = {}): Pathfinder2eSpellcastingEntry {
  return {
    id: 'entry-cleric',
    name: 'Conjuracao de Cleric',
    category: 'PREPARED',
    tradition: 'divine',
    ability: 'wis',
    proficiencyRank: 2,
    slots: [],
    known: [],
    prepared: [],
    innateUses: [],
    signatureSpellIds: [],
    ...patch,
  }
}

test('syncPreparedSlotsWithSlotRanks derives prepared slots from slot ranks and preserves existing spells', () => {
  const entry = preparedEntry({
    slots: [
      { rank: 1, max: 2 },
      { rank: 2, max: 1 },
    ],
    prepared: [
      { rank: 1, slotIndex: 0, spellId: 'pf2e:spell:heal', name: 'Heal', expended: true },
      { rank: 1, slotIndex: 4, spellId: 'pf2e:spell:extra', name: 'Extra', expended: false },
    ],
  })

  const synced = syncPreparedSlotsWithSlotRanks(entry)

  assert.deepEqual(synced.prepared, [
    { rank: 1, slotIndex: 0, spellId: 'pf2e:spell:heal', name: 'Heal', expended: true },
    { rank: 1, slotIndex: 1, spellId: null, name: null, expended: false },
    { rank: 2, slotIndex: 0, spellId: null, name: null, expended: false },
  ])
})

test('syncPreparedSlotsWithSlotRanks leaves non-prepared entries unchanged', () => {
  const entry = preparedEntry({ category: 'SPONTANEOUS', slots: [{ rank: 1, max: 3 }] })

  assert.equal(syncPreparedSlotsWithSlotRanks(entry), entry)
})

test('preparedSlotsMatchSlotRanks detects whether prepared slots already match rank resources', () => {
  const matching = preparedEntry({
    slots: [{ rank: 1, max: 2 }],
    prepared: [
      { rank: 1, slotIndex: 0, spellId: null, name: null, expended: false },
      { rank: 1, slotIndex: 1, spellId: null, name: null, expended: false },
    ],
  })

  const stale = preparedEntry({
    slots: [{ rank: 1, max: 2 }],
    prepared: [{ rank: 1, slotIndex: 0, spellId: null, name: null, expended: false }],
  })

  assert.equal(preparedSlotsMatchSlotRanks(matching), true)
  assert.equal(preparedSlotsMatchSlotRanks(stale), false)
})
