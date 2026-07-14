import test from 'node:test'
import assert from 'node:assert/strict'
import {
  PATHFINDER_2E_RECENT_CAST_LIMIT,
  appendPathfinder2eRecentCast,
  applyPathfinder2eCast,
  applyPathfinder2eRefocus,
  applyPathfinder2eRest,
  buildPathfinder2eCastRequestKey,
  findPathfinder2eRecentCast,
} from './consume'
import type { Pathfinder2eCharacterSpellbookData } from '../character-spells/models'

function makeSpellbook(): Pathfinder2eCharacterSpellbookData {
  return {
    entries: [
      {
        id: 'wizard-arcane',
        name: 'Conjuracao Arcana',
        category: 'PREPARED',
        tradition: 'arcane',
        ability: 'int',
        proficiencyRank: 2,
        slots: [{ rank: 1, max: 2 }],
        known: [{ spellId: 'pf2e:spells:fireball', name: 'Fireball', rank: 3 }],
        prepared: [
          { rank: 3, slotIndex: 0, spellId: 'pf2e:spells:fireball', name: 'Fireball', expended: false },
          { rank: 3, slotIndex: 1, spellId: 'pf2e:spells:fireball', name: 'Fireball', expended: true },
        ],
        innateUses: [],
        signatureSpellIds: [],
      },
      {
        id: 'bard-occult',
        name: 'Repertorio Oculto',
        category: 'SPONTANEOUS',
        tradition: 'occult',
        ability: 'cha',
        proficiencyRank: 2,
        slots: [
          { rank: 1, max: 3, used: 2 },
          { rank: 2, max: 1, used: 0 },
        ],
        known: [
          { spellId: 'pf2e:spells:soothe', name: 'Soothe', rank: 1 },
          { spellId: 'pf2e:spells:blur', name: 'Blur', rank: 2 },
        ],
        prepared: [],
        innateUses: [],
        signatureSpellIds: [],
      },
      {
        id: 'focus-entry',
        name: 'Magias de Foco',
        category: 'FOCUS',
        tradition: 'divine',
        ability: 'wis',
        proficiencyRank: 2,
        slots: [],
        known: [{ spellId: 'pf2e:spells:lay-on-hands', name: 'Lay on Hands', rank: 1 }],
        prepared: [],
        innateUses: [],
        signatureSpellIds: [],
      },
      {
        id: 'focus-entry-2',
        name: 'Magias de Foco (arquetipo)',
        category: 'FOCUS',
        tradition: 'occult',
        ability: 'cha',
        proficiencyRank: 2,
        slots: [],
        known: [{ spellId: 'pf2e:spells:dread-aura', name: 'Dread Aura', rank: 1 }],
        prepared: [],
        innateUses: [],
        signatureSpellIds: [],
      },
      {
        id: 'innate-entry',
        name: 'Magias Inatas',
        category: 'INNATE',
        tradition: 'primal',
        ability: 'cha',
        proficiencyRank: 2,
        slots: [],
        known: [],
        prepared: [],
        innateUses: [
          { spellId: 'pf2e:spells:dancing-lights', name: 'Dancing Lights', usesPerDay: 'at-will', used: 0 },
          { spellId: 'pf2e:spells:darkness', name: 'Darkness', usesPerDay: 1, used: 1 },
        ],
        signatureSpellIds: [],
      },
    ],
    rituals: [],
    focusPool: { points: 1, max: 2 },
  }
}

test('casting a prepared spell expends exactly the chosen slot', () => {
  const result = applyPathfinder2eCast(makeSpellbook(), {
    entryId: 'wizard-arcane',
    spellId: 'pf2e:spells:fireball',
    source: { kind: 'prepared', rank: 3, slotIndex: 0 },
  })

  assert.equal(result.ok, true)
  if (!result.ok) return
  assert.equal(result.spellbook.entries[0].prepared[0].expended, true)
  assert.equal(result.consumed, 'slot preparado R3')
})

test('casting an already expended prepared slot fails without changing anything', () => {
  const result = applyPathfinder2eCast(makeSpellbook(), {
    entryId: 'wizard-arcane',
    spellId: 'pf2e:spells:fireball',
    source: { kind: 'prepared', rank: 3, slotIndex: 1 },
  })

  assert.equal(result.ok, false)
})

test('spontaneous casting increments used and fails when the rank is exhausted', () => {
  const first = applyPathfinder2eCast(makeSpellbook(), {
    entryId: 'bard-occult',
    spellId: 'pf2e:spells:soothe',
    source: { kind: 'spontaneous', rank: 1 },
  })
  assert.equal(first.ok, true)
  if (!first.ok) return
  assert.equal(first.spellbook.entries[1].slots[0].used, 3)

  const second = applyPathfinder2eCast(first.spellbook, {
    entryId: 'bard-occult',
    spellId: 'pf2e:spells:soothe',
    source: { kind: 'spontaneous', rank: 1 },
  })
  assert.equal(second.ok, false)
})

test('focus casting requires at least one point and decrements it', () => {
  const first = applyPathfinder2eCast(makeSpellbook(), {
    entryId: 'focus-entry',
    spellId: 'pf2e:spells:lay-on-hands',
    source: { kind: 'focus' },
  })
  assert.equal(first.ok, true)
  if (!first.ok) return
  assert.equal(first.spellbook.focusPool?.points, 0)

  const second = applyPathfinder2eCast(first.spellbook, {
    entryId: 'focus-entry',
    spellId: 'pf2e:spells:lay-on-hands',
    source: { kind: 'focus' },
  })
  assert.equal(second.ok, false)
})

test('at-will innate casting never mutates the spellbook', () => {
  const spellbook = makeSpellbook()
  const result = applyPathfinder2eCast(spellbook, {
    entryId: 'innate-entry',
    spellId: 'pf2e:spells:dancing-lights',
    source: { kind: 'innate' },
  })

  assert.equal(result.ok, true)
  if (!result.ok) return
  assert.deepEqual(result.spellbook, spellbook)
  assert.equal(result.consumed, 'nada (a vontade)')
})

test('limited innate casting fails when uses are exhausted', () => {
  const result = applyPathfinder2eCast(makeSpellbook(), {
    entryId: 'innate-entry',
    spellId: 'pf2e:spells:darkness',
    source: { kind: 'innate' },
  })

  assert.equal(result.ok, false)
})

test('cantrip casting validates spell presence but never consumes', () => {
  const spellbook = makeSpellbook()
  const result = applyPathfinder2eCast(spellbook, {
    entryId: 'wizard-arcane',
    spellId: 'pf2e:spells:fireball',
    source: { kind: 'cantrip' },
  })

  assert.equal(result.ok, true)
  if (!result.ok) return
  assert.deepEqual(result.spellbook, spellbook)
})

test('casting a spell that is not in the entry fails', () => {
  const result = applyPathfinder2eCast(makeSpellbook(), {
    entryId: 'wizard-arcane',
    spellId: 'pf2e:spells:heal',
    source: { kind: 'cantrip' },
  })

  assert.equal(result.ok, false)
})

test('rest restores prepared slots, spontaneous slots, innate uses and focus points', () => {
  const cast = applyPathfinder2eCast(makeSpellbook(), {
    entryId: 'wizard-arcane',
    spellId: 'pf2e:spells:fireball',
    source: { kind: 'prepared', rank: 3, slotIndex: 0 },
  })
  assert.equal(cast.ok, true)
  if (!cast.ok) return

  const rested = applyPathfinder2eRest(cast.spellbook)
  assert.equal(rested.entries[0].prepared.every((slot) => !slot.expended), true)
  assert.equal(rested.entries[1].slots[0].used, 0)
  assert.equal(rested.focusPool?.points, 2)
  assert.equal(rested.entries[4].innateUses[1].used, 0)
})

test('spontaneous casting with a slot below the known rank fails without consuming', () => {
  const result = applyPathfinder2eCast(makeSpellbook(), {
    entryId: 'bard-occult',
    spellId: 'pf2e:spells:blur',
    source: { kind: 'spontaneous', rank: 1 },
  })

  assert.equal(result.ok, false)
})

test('spontaneous casting with a slot at the known rank succeeds', () => {
  const result = applyPathfinder2eCast(makeSpellbook(), {
    entryId: 'bard-occult',
    spellId: 'pf2e:spells:blur',
    source: { kind: 'spontaneous', rank: 2 },
  })

  assert.equal(result.ok, true)
  if (!result.ok) return
  assert.equal(result.spellbook.entries[1].slots[1].used, 1)
})

test('focus casting uses one global pool across multiple entries', () => {
  const spent = applyPathfinder2eCast(makeSpellbook(), {
    entryId: 'focus-entry',
    spellId: 'pf2e:spells:lay-on-hands',
    source: { kind: 'focus' },
  })
  assert.equal(spent.ok, true)
  if (!spent.ok) return

  const secondEntryCast = applyPathfinder2eCast(spent.spellbook, {
    entryId: 'focus-entry-2',
    spellId: 'pf2e:spells:dread-aura',
    source: { kind: 'focus' },
  })
  assert.equal(secondEntryCast.ok, false)
})

test('refocus restores exactly one point in the global focus pool', () => {
  const spent = applyPathfinder2eCast(makeSpellbook(), {
    entryId: 'focus-entry',
    spellId: 'pf2e:spells:lay-on-hands',
    source: { kind: 'focus' },
  })
  assert.equal(spent.ok, true)
  if (!spent.ok) return

  const once = applyPathfinder2eRefocus(spent.spellbook)
  assert.equal(once.focusPool?.points, 1)

  const twice = applyPathfinder2eRefocus(once)
  assert.equal(twice.focusPool?.points, 2)

  const thrice = applyPathfinder2eRefocus(twice)
  assert.equal(thrice.focusPool?.points, 2)

  const fourth = applyPathfinder2eRefocus(thrice)
  assert.equal(fourth.focusPool?.points, 2)
})

test('legacy entry focus pools normalize to a single capped global pool', () => {
  const legacy = makeSpellbook()
  const withoutGlobal = {
    ...legacy,
    focusPool: undefined,
    entries: legacy.entries.map((entry) => {
      if (entry.id === 'focus-entry') return { ...entry, focusPool: { points: 2, max: 2 } }
      if (entry.id === 'focus-entry-2') return { ...entry, focusPool: { points: 1, max: 2 } }
      return entry
    }),
  }

  const rested = applyPathfinder2eRest(withoutGlobal)
  assert.equal(rested.focusPool?.points, 3)
  assert.equal(rested.focusPool?.max, 3)
  assert.equal(rested.entries.some((entry) => entry.focusPool), false)
})

test('recent cast ledger stores replay receipts by clientCastId', () => {
  const request = {
    entryId: 'wizard-arcane',
    spellId: 'pf2e:spells:fireball',
    source: { kind: 'prepared' as const, rank: 3, slotIndex: 0 },
  }
  const requestKey = buildPathfinder2eCastRequestKey(request)
  const spellbook = appendPathfinder2eRecentCast(makeSpellbook(), {
    clientCastId: 'cast-1',
    requestKey,
    response: { characterId: 'char-1', revision: 2, spellName: 'Fireball', consumed: 'slot preparado R3' },
    createdAt: '2026-07-13T00:00:00.000Z',
  })

  const recentCast = findPathfinder2eRecentCast(spellbook, 'cast-1')
  assert.equal(recentCast?.requestKey, requestKey)
  assert.equal(recentCast?.response.revision, 2)
})

test('recent cast ledger keeps only the newest receipts', () => {
  let spellbook = makeSpellbook()
  for (let index = 0; index < PATHFINDER_2E_RECENT_CAST_LIMIT + 2; index += 1) {
    spellbook = appendPathfinder2eRecentCast(spellbook, {
      clientCastId: `cast-${index}`,
      requestKey: `request-${index}`,
      response: { characterId: 'char-1', revision: index + 1, spellName: 'Shield', consumed: 'nada (truque)' },
      createdAt: '2026-07-13T00:00:00.000Z',
    })
  }

  assert.equal(spellbook.recentCasts?.length, PATHFINDER_2E_RECENT_CAST_LIMIT)
  assert.equal(findPathfinder2eRecentCast(spellbook, 'cast-0'), null)
  assert.equal(findPathfinder2eRecentCast(spellbook, 'cast-21')?.response.revision, 22)
})
