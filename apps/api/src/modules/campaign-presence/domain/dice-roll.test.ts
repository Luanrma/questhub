import assert from 'node:assert/strict'
import test from 'node:test'
import { buildDiceRollExpression, calculateDiceRollTotal, normalizeDiceRollGroups } from './dice-roll'

test('manual dice roll domain normalizes groups and formats modifiers', () => {
  const groups = normalizeDiceRollGroups([
    { sides: 20, count: 1 },
    { sides: 6, count: 2 },
  ])

  assert.deepEqual(groups, [
    { sides: 6, count: 2 },
    { sides: 20, count: 1 },
  ])
  assert.equal(buildDiceRollExpression(groups, 7), '2D6 + 1D20 + 7')
  assert.equal(buildDiceRollExpression(groups, -2), '2D6 + 1D20 - 2')
  assert.equal(buildDiceRollExpression(groups, 0), '2D6 + 1D20')
})

test('manual dice roll domain calculates dice subtotal and final total on the server', () => {
  assert.deepEqual(calculateDiceRollTotal([18, 4, 5], 7), { diceTotal: 27, total: 34 })
  assert.deepEqual(calculateDiceRollTotal([2, 3], -2), { diceTotal: 5, total: 3 })
})
