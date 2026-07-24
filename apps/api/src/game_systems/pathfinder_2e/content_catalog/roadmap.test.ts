import assert from 'node:assert/strict'
import test from 'node:test'
import type { Pathfinder2eContentRoadmap, Pathfinder2eContentRound } from './models'
import {
  getNextPathfinder2eContentRound,
  PATHFINDER_2E_CONTENT_ROADMAP,
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
