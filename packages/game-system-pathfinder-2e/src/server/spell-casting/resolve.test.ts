import assert from 'node:assert/strict'
import test from 'node:test'
import { resolvePathfinder2eBasicSaveDamage } from './resolve'

test('a single target that fails the save takes full damage', () => {
  const [result] = resolvePathfinder2eBasicSaveDamage({
    spellDC: 20,
    statistic: 'reflex',
    baseDamage: 24,
    targets: [{ tokenId: 't1', characterId: 'c1', name: 'Alvo', level: 1, rank: 0, attributeModifier: 0, ruleElements: [] }],
    rollD20: () => 15, // total 15, between dc-10=10 and dc=20 -> failure
  })

  assert.equal(result!.degree, 'failure')
  assert.equal(result!.damageApplied, 24)
  assert.equal(result!.naturalRoll, 15)
  assert.equal(result!.saveModifier, 0)
})

test('a target that critically succeeds takes no damage', () => {
  const [result] = resolvePathfinder2eBasicSaveDamage({
    spellDC: 15,
    statistic: 'reflex',
    baseDamage: 20,
    targets: [{ tokenId: 't1', characterId: 'c1', name: 'Alvo', level: 5, rank: 2, attributeModifier: 4, ruleElements: [] }],
    rollD20: () => 18, // save total = 18 + (5+2) + 4 = 29, dc+10=25 -> criticalSuccess
  })

  assert.equal(result!.degree, 'criticalSuccess')
  assert.equal(result!.damageApplied, 0)
})

test('each target rolls its own d20 against the same shared damage roll', () => {
  const rolls = [3, 15]
  let index = 0
  const results = resolvePathfinder2eBasicSaveDamage({
    spellDC: 18,
    statistic: 'will',
    baseDamage: 16,
    targets: [
      { tokenId: 't1', characterId: 'c1', name: 'Fraco', level: 1, rank: 0, attributeModifier: 0, ruleElements: [] },
      { tokenId: 't2', characterId: 'c2', name: 'Forte', level: 1, rank: 2, attributeModifier: 3, ruleElements: [] },
    ],
    rollD20: () => rolls[index++]!,
  })

  assert.equal(results.length, 2)
  assert.equal(results[0]!.tokenId, 't1')
  assert.equal(results[0]!.saveModifier, 0)
  assert.equal(results[0]!.degree, 'criticalFailure') // total 3, dc-10=8
  assert.equal(results[0]!.damageApplied, 32)

  assert.equal(results[1]!.tokenId, 't2')
  assert.equal(results[1]!.saveModifier, 6) // proficiency: level(1)+trained(2)=3, + attribute(3) = 6
  assert.equal(results[1]!.saveTotal, 21) // naturalRoll(15) + saveModifier(6)
  assert.equal(results[1]!.degree, 'success') // total 21 >= dc(18), below dc+10=28
  assert.equal(results[1]!.damageApplied, 8)
})

test('rule engine flat modifiers on the target flow into the save total', () => {
  const [result] = resolvePathfinder2eBasicSaveDamage({
    spellDC: 15,
    statistic: 'fortitude',
    baseDamage: 10,
    targets: [
      {
        tokenId: 't1',
        characterId: 'c1',
        name: 'Alvo',
        level: 1,
        rank: 0,
        attributeModifier: 0,
        ruleElements: [{ key: 'FlatModifier', selector: 'fortitude', type: 'status', value: 5 }],
      },
    ],
    rollD20: () => 10,
  })

  assert.equal(result!.saveModifier, 5)
  assert.equal(result!.saveTotal, 15)
  assert.equal(result!.degree, 'success')
})
