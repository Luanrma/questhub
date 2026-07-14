import test from 'node:test'
import assert from 'node:assert/strict'
import { parsePathfinder2eCastActionCost } from './action-cost'

test('parses the real compendium format: a bare digit (system.time.value)', () => {
  // 1341 das ~1716 magias do snapshot auditado usam exatamente este formato
  // ("1"/"2"/"3", sem a palavra "action") — ver scripts/generate-pf2e-spell-data.cjs.
  assert.deepEqual(parsePathfinder2eCastActionCost('1'), { kind: 'actions', actions: 1 })
  assert.deepEqual(parsePathfinder2eCastActionCost('2'), { kind: 'actions', actions: 2 })
  assert.deepEqual(parsePathfinder2eCastActionCost('3'), { kind: 'actions', actions: 3 })
})

test('also accepts the spelled-out form, in case some data uses it', () => {
  assert.deepEqual(parsePathfinder2eCastActionCost('1 action'), { kind: 'actions', actions: 1 })
  assert.deepEqual(parsePathfinder2eCastActionCost('2 actions'), { kind: 'actions', actions: 2 })
  assert.deepEqual(parsePathfinder2eCastActionCost('3 actions'), { kind: 'actions', actions: 3 })
})

test('parses reaction and free action cast times', () => {
  assert.deepEqual(parsePathfinder2eCastActionCost('reaction'), { kind: 'reaction' })
  assert.deepEqual(parsePathfinder2eCastActionCost('free action'), { kind: 'free' })
  assert.deepEqual(parsePathfinder2eCastActionCost('free'), { kind: 'free' })
})

test('keeps variable cast times unsupported instead of guessing', () => {
  assert.deepEqual(parsePathfinder2eCastActionCost('1 to 3 actions'), { kind: 'unsupported', raw: '1 to 3 actions' })
  // Formatos reais auditados: "1 to 3", "2 or 3", "1 or 2", "2 to 2 rounds".
  assert.deepEqual(parsePathfinder2eCastActionCost('1 to 3'), { kind: 'unsupported', raw: '1 to 3' })
  assert.deepEqual(parsePathfinder2eCastActionCost('2 or 3'), { kind: 'unsupported', raw: '2 or 3' })
})

test('keeps duration-based cast times (rituals) unsupported', () => {
  assert.deepEqual(parsePathfinder2eCastActionCost('1 minute'), { kind: 'unsupported', raw: '1 minute' })
  assert.deepEqual(parsePathfinder2eCastActionCost('10 minutes'), { kind: 'unsupported', raw: '10 minutes' })
  assert.deepEqual(parsePathfinder2eCastActionCost('1 day'), { kind: 'unsupported', raw: '1 day' })
})
