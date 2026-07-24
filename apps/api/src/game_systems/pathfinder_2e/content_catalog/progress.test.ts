import assert from 'node:assert/strict'
import test from 'node:test'
import {
  calculatePathfinder2eRoundReadiness,
  getPathfinder2eRoundNextAction,
} from './progress'

const completeDomain = {
  planned: 2,
  imported: 2,
  normalized: 2,
  translated: 2,
  reviewed: 2,
  stale: 0,
  rejected: 0,
}

test('PF2e round status always resolves to an explicit next action', () => {
  assert.equal(getPathfinder2eRoundNextAction('PLANNED'), 'LOCK_SOURCE')
  assert.equal(getPathfinder2eRoundNextAction('SOURCE_LOCKED'), 'INVENTORY_SOURCE')
  assert.equal(getPathfinder2eRoundNextAction('IMPORTING'), 'IMPORT_AND_NORMALIZE')
  assert.equal(getPathfinder2eRoundNextAction('TRANSLATING'), 'TRANSLATE_PT_BR')
  assert.equal(getPathfinder2eRoundNextAction('REVIEWING'), 'REVIEW_PT_BR')
  assert.equal(getPathfinder2eRoundNextAction('READY'), 'PUBLISH')
  assert.equal(getPathfinder2eRoundNextAction('PUBLISHED'), 'COMPLETE')
  assert.equal(getPathfinder2eRoundNextAction('BLOCKED'), 'RESOLVE_BLOCKER')
})

test('a PF2e round is ready only when all three domains are reviewed', () => {
  const coverage = calculatePathfinder2eRoundReadiness({
    roundId: 'round-1',
    bestiary: completeDomain,
    spells: completeDomain,
    items: completeDomain,
  })

  assert.equal(coverage.ready, true)
})

test('a stale translation blocks the PF2e round', () => {
  const coverage = calculatePathfinder2eRoundReadiness({
    roundId: 'round-1',
    bestiary: completeDomain,
    spells: { ...completeDomain, stale: 1 },
    items: completeDomain,
  })

  assert.equal(coverage.ready, false)
})
