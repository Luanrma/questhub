import assert from 'node:assert/strict'
import test from 'node:test'
import { calculateSpellDC } from './spell-dc'

test('untrained spell DC still uses the base 10 plus attribute modifier, no proficiency bonus', () => {
  const result = calculateSpellDC({ level: 5, rank: 0, attributeModifier: 3 })

  assert.equal(result.proficiencyBonus, 0)
  assert.equal(result.total, 13)
})

test('trained spell DC sums 10, level, rank bonus and attribute modifier', () => {
  const result = calculateSpellDC({ level: 4, rank: 2, attributeModifier: 4 })

  assert.equal(result.proficiencyBonus, 6) // level(4) + trained(2)
  assert.equal(result.total, 20) // 10 + 6 + 4
})

test('a flat modifier with the "spell-dc" selector is added on top', () => {
  const result = calculateSpellDC({
    level: 1,
    rank: 2,
    attributeModifier: 2,
    ruleElements: [{ key: 'FlatModifier', selector: 'spell-dc', type: 'status', value: 1 }],
  })

  assert.equal(result.ruleEngineBonus, 1)
  assert.equal(result.total, 16) // 10 + (1+2) + 2 + 1
})

test('a flat modifier targeting a different selector does not apply', () => {
  const result = calculateSpellDC({
    level: 1,
    rank: 0,
    attributeModifier: 0,
    ruleElements: [{ key: 'FlatModifier', selector: 'ac', type: 'status', value: 5 }],
  })

  assert.equal(result.ruleEngineBonus, 0)
  assert.equal(result.total, 10)
})

test('omitting ruleElements keeps the base formula unaffected', () => {
  const result = calculateSpellDC({ level: 3, rank: 4, attributeModifier: 1 })

  assert.equal(result.proficiencyBonus, 7) // level(3) + expert(4)
  assert.equal(result.ruleEngineBonus, 0)
  assert.deepEqual(result.ruleEngineModifiers, [])
  assert.equal(result.total, 18) // 10 + 7 + 1
})
