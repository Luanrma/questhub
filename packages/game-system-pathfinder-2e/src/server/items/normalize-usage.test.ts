import test from 'node:test'
import assert from 'node:assert/strict'
import { normalizePathfinder2eUsage, normalizePathfinder2eToken } from './normalize-usage'

test('normalizePathfinder2eToken removes separators and lowercases', () => {
  assert.equal(normalizePathfinder2eToken(' held-in_one hand '), 'heldinonehand')
})

test('normalizePathfinder2eUsage parses worn headwear variants', () => {
  for (const usage of ['wornheadwear', 'worn-headwear', 'worn_headwear', 'worncrown']) {
    const result = normalizePathfinder2eUsage(usage)
    assert.equal(result.mode, 'worn')
    assert.equal(result.hands, 0)
    assert.equal(result.placement, 'head')
    assert.deepEqual(result.warnings, [])
  }
})

test('normalizePathfinder2eUsage parses held hand counts', () => {
  assert.equal(normalizePathfinder2eUsage('held-in-one-hand').hands, 1)
  assert.equal(normalizePathfinder2eUsage('held-in-two-hands').hands, 2)
  assert.equal(normalizePathfinder2eUsage('heldinonehand').hands, 1)
})

test('normalizePathfinder2eUsage parses affixed values', () => {
  const result = normalizePathfinder2eUsage('affixed-to-armor')
  assert.equal(result.mode, 'affixed')
  assert.equal(result.hands, 0)
  assert.equal(result.placement, null)
})

test('normalizePathfinder2eUsage treats attached worn variants as affixed', () => {
  const result = normalizePathfinder2eUsage('worn-and-attached-to-two-weapons')
  assert.equal(result.mode, 'affixed')
  assert.equal(result.hands, 0)
  assert.equal(result.placement, null)
})

test('normalizePathfinder2eUsage handles empty and null values as none without warnings', () => {
  assert.deepEqual(normalizePathfinder2eUsage('').warnings, [])
  assert.equal(normalizePathfinder2eUsage(null).mode, 'none')
})

test('normalizePathfinder2eUsage warns on unknown values', () => {
  const result = normalizePathfinder2eUsage('mystery-slot')
  assert.equal(result.mode, 'none')
  assert.equal(result.hands, 0)
  assert.equal(result.placement, null)
  assert.deepEqual(result.warnings, ['UNKNOWN_USAGE:mystery-slot'])
})
