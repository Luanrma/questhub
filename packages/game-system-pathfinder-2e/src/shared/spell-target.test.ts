import test from 'node:test'
import assert from 'node:assert/strict'
import { parsePathfinder2eSpellTargetCount } from './spell-target'

test('empty or missing target text means no discrete target selection', () => {
  assert.deepEqual(parsePathfinder2eSpellTargetCount(''), { kind: 'none' })
  assert.deepEqual(parsePathfinder2eSpellTargetCount(undefined), { kind: 'none' })
  assert.deepEqual(parsePathfinder2eSpellTargetCount(null), { kind: 'none' })
})

test('parses the real compendium format: a leading count (most common, 674 spells)', () => {
  assert.deepEqual(parsePathfinder2eSpellTargetCount('1 creature'), { kind: 'count', min: 1, max: 1 })
  assert.deepEqual(parsePathfinder2eSpellTargetCount('1 willing creature'), { kind: 'count', min: 1, max: 1 })
  assert.deepEqual(parsePathfinder2eSpellTargetCount('1 ally'), { kind: 'count', min: 1, max: 1 })
})

test('parses "up to N creatures"', () => {
  assert.deepEqual(parsePathfinder2eSpellTargetCount('up to 5 creatures'), { kind: 'count', min: 1, max: 5 })
  assert.deepEqual(parsePathfinder2eSpellTargetCount('up to 10 creatures'), { kind: 'count', min: 1, max: 10 })
})

test('parses "N or M creatures" as a min-max range', () => {
  assert.deepEqual(parsePathfinder2eSpellTargetCount('1 or 2 creatures'), { kind: 'count', min: 1, max: 2 })
})

test('parses spelled-out small numbers', () => {
  assert.deepEqual(parsePathfinder2eSpellTargetCount('one creature'), { kind: 'count', min: 1, max: 1 })
  assert.deepEqual(parsePathfinder2eSpellTargetCount('two creatures'), { kind: 'count', min: 2, max: 2 })
})

test('keeps unbounded and compound target text unsupported instead of guessing', () => {
  assert.deepEqual(parsePathfinder2eSpellTargetCount('1 or more creatures'), { kind: 'unsupported', raw: '1 or more creatures' })
  assert.deepEqual(parsePathfinder2eSpellTargetCount('any number of creatures'), {
    kind: 'unsupported',
    raw: 'any number of creatures',
  })
  assert.deepEqual(parsePathfinder2eSpellTargetCount('1 ally and 1 enemy'), { kind: 'unsupported', raw: '1 ally and 1 enemy' })
  assert.deepEqual(parsePathfinder2eSpellTargetCount('the triggering creature'), {
    kind: 'unsupported',
    raw: 'the triggering creature',
  })
})
