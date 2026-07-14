import assert from 'node:assert/strict'
import { test } from 'node:test'
import { parseDiceFormula } from './dice-formula'

test('parseDiceFormula: NdM simples', () => {
  assert.deepEqual(parseDiceFormula('6d6'), { kind: 'dice', count: 6, sides: 6, bonus: 0 })
  assert.deepEqual(parseDiceFormula('1d4'), { kind: 'dice', count: 1, sides: 4, bonus: 0 })
})

test('parseDiceFormula: NdM+K', () => {
  assert.deepEqual(parseDiceFormula('1d8+4'), { kind: 'dice', count: 1, sides: 8, bonus: 4 })
  assert.deepEqual(parseDiceFormula('10d8+40'), { kind: 'dice', count: 10, sides: 8, bonus: 40 })
})

test('parseDiceFormula: numero fixo', () => {
  assert.deepEqual(parseDiceFormula('10'), { kind: 'flat', amount: 10 })
  assert.deepEqual(parseDiceFormula('0'), { kind: 'flat', amount: 0 })
})

test('parseDiceFormula: espacos ao redor sao tolerados', () => {
  assert.deepEqual(parseDiceFormula('  6d6  '), { kind: 'dice', count: 6, sides: 6, bonus: 0 })
})

test('parseDiceFormula: formatos nao suportados retornam null, nunca aproximam', () => {
  assert.equal(parseDiceFormula('@item.rank'), null)
  assert.equal(parseDiceFormula('1d6-2'), null)
  assert.equal(parseDiceFormula('2d6+1d4'), null)
  assert.equal(parseDiceFormula('1d6*2'), null)
  assert.equal(parseDiceFormula(''), null)
  assert.equal(parseDiceFormula('0d6'), null)
  assert.equal(parseDiceFormula('1d0'), null)
})
