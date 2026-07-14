import test from 'node:test'
import assert from 'node:assert/strict'
import { createRollOptions } from './roll-options'
import { testPredicate, testPredicateStatement } from './predicates'

// Real predicate statements audited from pf2e-master/packs/spell-effects and conditions
// (Fase 1 dependency graph closure), not invented from the plan's description alone.

test('plain string statement matches roll option membership', () => {
  const rollOptions = createRollOptions(['item:trait:auditory'])
  assert.equal(testPredicateStatement('item:trait:auditory', rollOptions), true)
  assert.equal(testPredicateStatement('item:trait:sonic', rollOptions), false)
})

test('real "or" statement: item:trait:auditory / item:trait:sonic', () => {
  const statement = { or: ['item:trait:auditory', 'item:trait:sonic'] }
  assert.equal(testPredicateStatement(statement, createRollOptions(['item:trait:sonic'])), true)
  assert.equal(testPredicateStatement(statement, createRollOptions(['item:trait:fire'])), false)
})

test('real "nor" statement: self:trait:unholy / item:trait:unholy', () => {
  const statement = { nor: ['self:trait:unholy', 'item:trait:unholy'] }
  assert.equal(testPredicateStatement(statement, createRollOptions([])), true)
  assert.equal(testPredicateStatement(statement, createRollOptions(['self:trait:unholy'])), false)
  assert.equal(testPredicateStatement(statement, createRollOptions(['item:trait:unholy'])), false)
})

test('real "not" statement wrapping a dynamic Foundry resolvable never matches, so not() is true', () => {
  // Real rule element: { not: 'self:signature:{item|origin.signature}' }
  const statement = { not: 'self:signature:{item|origin.signature}' }
  assert.equal(testPredicateStatement(statement, createRollOptions(['self:signature:something'])), true)
})

test('real "gte" statement resolves a numeric roll option by prefix: item:level >= 3', () => {
  const statement = { gte: ['item:level', 3] as [string, number] }
  assert.equal(testPredicateStatement(statement, createRollOptions(['item:level:5'])), true)
  assert.equal(testPredicateStatement(statement, createRollOptions(['item:level:2'])), false)
  assert.equal(testPredicateStatement(statement, createRollOptions([])), false)
})

test('real "lte" statement: target:distance <= 30', () => {
  const statement = { lte: ['target:distance', 30] as [string, number] }
  assert.equal(testPredicateStatement(statement, createRollOptions(['target:distance:20'])), true)
  assert.equal(testPredicateStatement(statement, createRollOptions(['target:distance:35'])), false)
})

test('comparisons with a dynamic Foundry resolvable on either side always evaluate to false', () => {
  // Real rule element: { gte: ['{item|level}', 'self:level'] }
  const statement = { gte: ['{item|level}', 'self:level'] as [string, string] }
  assert.equal(testPredicateStatement(statement, createRollOptions(['self:level:99'])), false)
})

test('and/xor combinators', () => {
  assert.equal(testPredicateStatement({ and: ['a', 'b'] }, createRollOptions(['a', 'b'])), true)
  assert.equal(testPredicateStatement({ and: ['a', 'b'] }, createRollOptions(['a'])), false)
  assert.equal(testPredicateStatement({ xor: ['a', 'b'] }, createRollOptions(['a'])), true)
  assert.equal(testPredicateStatement({ xor: ['a', 'b'] }, createRollOptions(['a', 'b'])), false)
})

test('testPredicate applies implicit AND across the top-level array', () => {
  const predicate = ['item:trait:death', { gte: ['item:level', 3] as [string, number] }]
  assert.equal(testPredicate(predicate, createRollOptions(['item:trait:death', 'item:level:5'])), true)
  assert.equal(testPredicate(predicate, createRollOptions(['item:trait:death', 'item:level:1'])), false)
  assert.equal(testPredicate(predicate, createRollOptions(['item:level:5'])), false)
})
