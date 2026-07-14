import test from 'node:test'
import assert from 'node:assert/strict'
import { calculateSavingThrow } from './saving-throws'

test('untrained saving throw uses no proficiency bonus and ignores level', () => {
  const result = calculateSavingThrow('fortitude', { level: 5, rank: 0, attributeModifier: 3 })

  assert.equal(result.proficiencyBonus, 0)
  assert.equal(result.total, 3)
})

test('trained saving throw sums level, rank bonus and attribute modifier', () => {
  const result = calculateSavingThrow('reflex', { level: 4, rank: 2, attributeModifier: 2 })

  assert.equal(result.proficiencyBonus, 6) // level(4) + trained(2)
  assert.equal(result.total, 8)
})

test('a flat modifier with the exact save selector is added on top', () => {
  const result = calculateSavingThrow('will', {
    level: 1,
    rank: 0,
    attributeModifier: 1,
    ruleElements: [{ key: 'FlatModifier', selector: 'will', type: 'status', value: 1 }],
  })

  assert.equal(result.ruleEngineBonus, 1)
  assert.equal(result.total, 2)
})

test('a flat modifier with the "saving-throw" selector applies to every save', () => {
  const fortitude = calculateSavingThrow('fortitude', {
    level: 1,
    rank: 0,
    attributeModifier: 0,
    ruleElements: [{ key: 'FlatModifier', selector: 'saving-throw', type: 'status', value: 1 }],
  })
  const reflex = calculateSavingThrow('reflex', {
    level: 1,
    rank: 0,
    attributeModifier: 0,
    ruleElements: [{ key: 'FlatModifier', selector: 'saving-throw', type: 'status', value: 1 }],
  })

  assert.equal(fortitude.ruleEngineBonus, 1)
  assert.equal(reflex.ruleEngineBonus, 1)
})

test('a flat modifier targeting a different save does not apply', () => {
  const result = calculateSavingThrow('fortitude', {
    level: 1,
    rank: 0,
    attributeModifier: 0,
    ruleElements: [{ key: 'FlatModifier', selector: 'reflex', type: 'status', value: 5 }],
  })

  assert.equal(result.ruleEngineBonus, 0)
  assert.equal(result.total, 0)
})

test('same-type bonuses from the specific selector and the "saving-throw" selector do not stack, only the best applies', () => {
  const result = calculateSavingThrow('will', {
    level: 1,
    rank: 0,
    attributeModifier: 0,
    ruleElements: [
      { key: 'FlatModifier', selector: 'will', type: 'status', value: 1 },
      { key: 'FlatModifier', selector: 'saving-throw', type: 'status', value: 2 },
    ],
  })

  assert.equal(result.ruleEngineBonus, 2)
})

test('omitting ruleElements keeps the base formula unaffected', () => {
  const result = calculateSavingThrow('fortitude', { level: 3, rank: 4, attributeModifier: -1 })

  assert.equal(result.proficiencyBonus, 7) // level(3) + expert(4)
  assert.equal(result.ruleEngineBonus, 0)
  assert.deepEqual(result.ruleEngineModifiers, [])
  assert.equal(result.total, 6)
})
