import assert from 'node:assert/strict'
import test from 'node:test'
import { applyPathfinder2eBasicSaveDamage } from './basic-save-damage'

test('critical success negates all damage', () => {
  assert.equal(applyPathfinder2eBasicSaveDamage(24, 'criticalSuccess'), 0)
})

test('success halves damage, rounded down', () => {
  assert.equal(applyPathfinder2eBasicSaveDamage(24, 'success'), 12)
  assert.equal(applyPathfinder2eBasicSaveDamage(25, 'success'), 12)
})

test('failure applies full damage', () => {
  assert.equal(applyPathfinder2eBasicSaveDamage(24, 'failure'), 24)
})

test('critical failure doubles damage', () => {
  assert.equal(applyPathfinder2eBasicSaveDamage(24, 'criticalFailure'), 48)
})
