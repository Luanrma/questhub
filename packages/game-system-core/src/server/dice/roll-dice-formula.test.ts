import assert from 'node:assert/strict'
import test from 'node:test'
import { rollD20, rollDiceFormula } from './roll-dice-formula'

test('rollDiceFormula: flat formula never calls rollDie and returns the fixed amount', () => {
  const result = rollDiceFormula({ kind: 'flat', amount: 10 }, () => {
    throw new Error('rollDie should not be called for a flat formula')
  })
  assert.deepEqual(result, { total: 10, rolls: [] })
})

test('rollDiceFormula: dice formula with a deterministic roller sums rolls plus bonus', () => {
  const result = rollDiceFormula({ kind: 'dice', count: 6, sides: 6, bonus: 0 }, () => 3)
  assert.deepEqual(result, { total: 18, rolls: [3, 3, 3, 3, 3, 3] })
})

test('rollDiceFormula: bonus is added once, not per die', () => {
  const result = rollDiceFormula({ kind: 'dice', count: 1, sides: 8, bonus: 4 }, () => 5)
  assert.deepEqual(result, { total: 9, rolls: [5] })
})

test('rollDiceFormula: real RNG stays within [count, count*sides+bonus]', () => {
  const formula = { kind: 'dice' as const, count: 6, sides: 6, bonus: 0 }
  for (let i = 0; i < 200; i++) {
    const { total, rolls } = rollDiceFormula(formula)
    assert.equal(rolls.length, 6)
    for (const roll of rolls) {
      assert.ok(roll >= 1 && roll <= 6, `roll ${roll} out of bounds`)
    }
    assert.ok(total >= 6 && total <= 36, `total ${total} out of bounds`)
  }
})

test('rollD20: deterministic roller', () => {
  assert.equal(rollD20(() => 15), 15)
})

test('rollD20: real RNG stays within [1,20]', () => {
  for (let i = 0; i < 200; i++) {
    const value = rollD20()
    assert.ok(value >= 1 && value <= 20, `d20 ${value} out of bounds`)
  }
})
