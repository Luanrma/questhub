import assert from 'node:assert/strict'
import test from 'node:test'
import type { Pathfinder2eContentRoadmap, Pathfinder2eContentRound } from './models'
import {
  getNextPathfinder2eContentRound,
  PATHFINDER_2E_CONTENT_ROADMAP,
  selectNextPathfinder2eCoverageBatch,
  validatePathfinder2eContentRoadmap,
} from './roadmap'

function withFirstRound(firstRound: Pathfinder2eContentRound): Pathfinder2eContentRoadmap {
  return {
    ...structuredClone(PATHFINDER_2E_CONTENT_ROADMAP),
    rounds: [firstRound, ...PATHFINDER_2E_CONTENT_ROADMAP.rounds.slice(1)],
  }
}

test('PF2e content roadmap is valid', () => {
  assert.deepEqual(validatePathfinder2eContentRoadmap(), { valid: true, errors: [] })
})

test('every PF2e content round requires Bestiary, Spells, Items, en-US and pt-BR', () => {
  for (const round of PATHFINDER_2E_CONTENT_ROADMAP.rounds) {
    assert.ok(round.selection.bestiary)
    assert.ok(round.selection.spells)
    assert.ok(round.selection.items)
    assert.ok(round.locales.includes('en-US'))
    assert.ok(round.locales.includes('pt-BR'))
  }
})

test('the next PF2e content round is deterministic', () => {
  assert.equal(getNextPathfinder2eContentRound()?.id, 'pf2e-core-remaster-01')

  const firstRound: Pathfinder2eContentRound = {
    ...PATHFINDER_2E_CONTENT_ROADMAP.rounds[0],
    status: 'PUBLISHED',
    frozenEntryIds: {
      bestiary: ['bestiary:1'],
      spells: ['spell:1'],
      items: ['item:1'],
    },
  }

  assert.equal(getNextPathfinder2eContentRound(withFirstRound(firstRound))?.id, 'pf2e-core-remaster-02')
})

test('a locked PF2e round cannot omit a frozen domain', () => {
  const firstRound: Pathfinder2eContentRound = {
    ...PATHFINDER_2E_CONTENT_ROADMAP.rounds[0],
    status: 'SOURCE_LOCKED',
    frozenEntryIds: {
      bestiary: ['bestiary:1'],
      spells: ['spell:1'],
      items: [],
    },
  }

  const validation = validatePathfinder2eContentRoadmap(withFirstRound(firstRound))
  assert.equal(validation.valid, false)
  assert.ok(validation.errors.includes('pf2e-core-remaster-01:non-planned-round-must-freeze-all-domains'))
})

test('exhaustive PF2e coverage freezes the configured limits without pre-skipping', () => {
  assert.deepEqual(PATHFINDER_2E_CONTENT_ROADMAP.roundLimits, {
    bestiary: 100,
    spells: 40,
    items: 100,
  })

  const backlog = PATHFINDER_2E_CONTENT_ROADMAP.rounds.find(
    (round) => round.id === 'pf2e-core-remaster-backlog-01',
  )

  assert.ok(backlog)
  assert.equal(backlog.status, 'REVIEWING')
  assert.equal(backlog.frozenEntryIds.bestiary.length, 50)
  assert.equal(backlog.frozenEntryIds.spells.length, 20)
  assert.equal(backlog.frozenEntryIds.items.length, 50)
  assert.deepEqual(backlog.selection.bestiary, {
    publications: ['Pathfinder Monster Core'],
    maxEntries: 50,
  })
  assert.deepEqual(backlog.selection.spells, {
    publications: ['Pathfinder Player Core'],
    maxEntries: 20,
  })
  assert.deepEqual(backlog.selection.items, {
    publications: ['Pathfinder Player Core'],
    maxEntries: 50,
  })

  const doubledBacklog = PATHFINDER_2E_CONTENT_ROADMAP.rounds.find(
    (round) => round.id === 'pf2e-core-remaster-backlog-02',
  )

  assert.ok(doubledBacklog)
  assert.equal(doubledBacklog.status, 'REVIEWING')
  assert.equal(doubledBacklog.frozenEntryIds.bestiary.length, 100)
  assert.equal(doubledBacklog.frozenEntryIds.spells.length, 40)
  assert.equal(doubledBacklog.frozenEntryIds.items.length, 100)
  assert.deepEqual(doubledBacklog.selection.bestiary, {
    publications: ['Pathfinder Monster Core'],
    maxEntries: 100,
  })
  assert.deepEqual(doubledBacklog.selection.spells, {
    publications: ['Pathfinder Player Core'],
    maxEntries: 40,
  })
  assert.deepEqual(doubledBacklog.selection.items, {
    publications: ['Pathfinder Player Core'],
    maxEntries: 100,
  })

  const thirdBacklog = PATHFINDER_2E_CONTENT_ROADMAP.rounds.find(
    (round) => round.id === 'pf2e-core-remaster-backlog-03',
  )

  assert.ok(thirdBacklog)
  assert.equal(thirdBacklog.status, 'REVIEWING')
  assert.equal(thirdBacklog.frozenEntryIds.bestiary.length, 100)
  assert.equal(thirdBacklog.frozenEntryIds.spells.length, 40)
  assert.equal(thirdBacklog.frozenEntryIds.items.length, 65)
  assert.deepEqual(thirdBacklog.selection.bestiary, {
    publications: ['Pathfinder Monster Core'],
    maxEntries: 100,
  })
  assert.deepEqual(thirdBacklog.selection.spells, {
    publications: ['Pathfinder Player Core'],
    maxEntries: 40,
  })
  assert.deepEqual(thirdBacklog.selection.items, {
    publications: ['Pathfinder Player Core'],
    maxEntries: 100,
  })

  const fourthBacklog = PATHFINDER_2E_CONTENT_ROADMAP.rounds.find(
    (round) => round.id === 'pf2e-core-remaster-backlog-04',
  )

  assert.ok(fourthBacklog)
  assert.equal(fourthBacklog.status, 'REVIEWING')
  assert.equal(fourthBacklog.frozenEntryIds.bestiary.length, 100)
  assert.equal(fourthBacklog.frozenEntryIds.spells.length, 40)
  assert.equal(fourthBacklog.frozenEntryIds.items.length, 100)
  assert.deepEqual(fourthBacklog.selection.bestiary, {
    publications: ['Pathfinder Monster Core'],
    maxEntries: 100,
  })
  assert.deepEqual(fourthBacklog.selection.spells, {
    publications: ['Pathfinder Player Core'],
    maxEntries: 40,
  })
  assert.deepEqual(fourthBacklog.selection.items, {
    publications: ['Pathfinder Player Core 2'],
    maxEntries: 100,
  })

  const fifthBacklog = PATHFINDER_2E_CONTENT_ROADMAP.rounds.find(
    (round) => round.id === 'pf2e-core-remaster-backlog-05',
  )

  assert.ok(fifthBacklog)
  assert.equal(fifthBacklog.status, 'REVIEWING')
  assert.equal(fifthBacklog.frozenEntryIds.bestiary.length, 100)
  assert.equal(fifthBacklog.frozenEntryIds.spells.length, 40)
  assert.equal(fifthBacklog.frozenEntryIds.items.length, 100)
  assert.deepEqual(fifthBacklog.selection.bestiary, {
    publications: ['Pathfinder Monster Core'],
    maxEntries: 100,
  })
  assert.deepEqual(fifthBacklog.selection.spells, {
    publications: ['Pathfinder Player Core'],
    maxEntries: 40,
  })
  assert.deepEqual(fifthBacklog.selection.items, {
    publications: ['Pathfinder Player Core 2'],
    maxEntries: 100,
  })

  const sixthBacklog = PATHFINDER_2E_CONTENT_ROADMAP.rounds.find(
    (round) => round.id === 'pf2e-core-remaster-backlog-06',
  )

  assert.ok(sixthBacklog)
  assert.equal(sixthBacklog.status, 'REVIEWING')
  assert.equal(sixthBacklog.frozenEntryIds.bestiary.length, 36)
  assert.equal(sixthBacklog.frozenEntryIds.spells.length, 40)
  assert.equal(sixthBacklog.frozenEntryIds.items.length, 83)
  assert.deepEqual(sixthBacklog.selection.bestiary, {
    publications: ['Pathfinder Monster Core'],
    maxEntries: 100,
  })
  assert.deepEqual(sixthBacklog.selection.spells, {
    publications: ['Pathfinder Player Core'],
    maxEntries: 40,
  })
  assert.deepEqual(sixthBacklog.selection.items, {
    publications: ['Pathfinder Player Core 2'],
    maxEntries: 100,
  })

  const seventhBacklog = PATHFINDER_2E_CONTENT_ROADMAP.rounds.find(
    (round) => round.id === 'pf2e-core-remaster-backlog-07',
  )

  assert.ok(seventhBacklog)
  assert.equal(seventhBacklog.status, 'REVIEWING')
  assert.equal(seventhBacklog.frozenEntryIds.bestiary.length, 100)
  assert.equal(seventhBacklog.frozenEntryIds.spells.length, 18)
  assert.equal(seventhBacklog.frozenEntryIds.items.length, 100)
  assert.deepEqual(seventhBacklog.selection.bestiary, {
    publications: ['Pathfinder Monster Core 2'],
    maxEntries: 100,
  })
  assert.deepEqual(seventhBacklog.selection.spells, {
    publications: ['Pathfinder Player Core'],
    maxEntries: 18,
  })
  assert.deepEqual(seventhBacklog.selection.items, {
    publications: ['Pathfinder GM Core'],
    maxEntries: 100,
  })
})

test('exhaustive PF2e batch selection never skips a lower pending value', () => {
  const inventory = [
    { contentId: 'level-1-b', value: 1, sourcePack: 'pack', sourceId: 'b' },
    { contentId: 'level-0-c', value: 0, sourcePack: 'pack', sourceId: 'c' },
    { contentId: 'level-0-a', value: 0, sourcePack: 'pack', sourceId: 'a' },
    { contentId: 'level-1-a', value: 1, sourcePack: 'pack', sourceId: 'a' },
  ]

  assert.deepEqual(
    selectNextPathfinder2eCoverageBatch(inventory, new Set(), 2).map((entry) => entry.contentId),
    ['level-0-a', 'level-0-c'],
  )
  assert.deepEqual(
    selectNextPathfinder2eCoverageBatch(inventory, new Set(['level-0-a']), 2)
      .map((entry) => entry.contentId),
    ['level-0-c', 'level-1-a'],
  )
})
