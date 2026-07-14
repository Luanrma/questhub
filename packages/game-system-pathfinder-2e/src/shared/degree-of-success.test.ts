import assert from 'node:assert/strict'
import test from 'node:test'
import { calculatePathfinder2eDegreeOfSuccess } from './degree-of-success'

test('base degrees without natural 20/1', () => {
  assert.equal(calculatePathfinder2eDegreeOfSuccess({ naturalRoll: 12, modifier: 3, dc: 15 }), 'success') // total 15, exactly dc
  assert.equal(calculatePathfinder2eDegreeOfSuccess({ naturalRoll: 15, modifier: 15, dc: 15 }), 'criticalSuccess') // total 30, dc+10=25
  assert.equal(calculatePathfinder2eDegreeOfSuccess({ naturalRoll: 11, modifier: 0, dc: 20 }), 'failure') // total 11, above dc-10=10
  assert.equal(calculatePathfinder2eDegreeOfSuccess({ naturalRoll: 5, modifier: 0, dc: 20 }), 'criticalFailure') // total 5, at/below dc-10=10
})

test('natural 20 shifts the degree up by one, even from a low total', () => {
  const result = calculatePathfinder2eDegreeOfSuccess({ naturalRoll: 20, modifier: -15, dc: 20 })
  // total = 5, base degree would be criticalFailure, nat 20 shifts up to failure
  assert.equal(result, 'failure')
})

test('natural 20 shifting a success stays capped at criticalSuccess, never overflows', () => {
  const result = calculatePathfinder2eDegreeOfSuccess({ naturalRoll: 20, modifier: 20, dc: 10 })
  // total = 40, already criticalSuccess by margin, nat 20 keeps it at the ceiling
  assert.equal(result, 'criticalSuccess')
})

test('natural 1 shifts the degree down by one, even from a high total', () => {
  const result = calculatePathfinder2eDegreeOfSuccess({ naturalRoll: 1, modifier: 25, dc: 10 })
  // total = 26, base degree would be criticalSuccess, nat 1 shifts down to success
  assert.equal(result, 'success')
})

test('natural 1 shifting a failure stays capped at criticalFailure, never underflows', () => {
  const result = calculatePathfinder2eDegreeOfSuccess({ naturalRoll: 1, modifier: -20, dc: 20 })
  assert.equal(result, 'criticalFailure')
})

test('exact margins of 10 land precisely on critical thresholds', () => {
  assert.equal(calculatePathfinder2eDegreeOfSuccess({ naturalRoll: 15, modifier: 15, dc: 20 }), 'criticalSuccess') // total 30, dc+10=30
  assert.equal(calculatePathfinder2eDegreeOfSuccess({ naturalRoll: 5, modifier: 5, dc: 20 }), 'criticalFailure') // total 10, dc-10=10
})
