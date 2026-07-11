import test from 'node:test'
import assert from 'node:assert/strict'
import { calculateArmorClass, normalizePathfinder2eArmorCategory, type Pathfinder2eArmorProficiencies } from './armor-class'

const untrainedProficiencies: Pathfinder2eArmorProficiencies = {
  unarmored: 0,
  light: 0,
  medium: 0,
  heavy: 0,
}

test('unarmored character with no shield and no adjustment', () => {
  const result = calculateArmorClass({
    level: 1,
    dexterityModifier: 3,
    armorProficiencies: { ...untrainedProficiencies, unarmored: 2 },
    equippedArmor: null,
    equippedShield: null,
    manualAdjustment: 0,
  })

  assert.equal(result.armorCategory, 'unarmored')
  assert.equal(result.proficiencyBonus, 3) // level(1) + trained(2)
  assert.equal(result.dexterityCap, null)
  assert.equal(result.dexterityModifierApplied, 3)
  assert.equal(result.total, 10 + 3 + 3)
})

test('medium armor applies dex cap when dexterity modifier exceeds it', () => {
  const result = calculateArmorClass({
    level: 5,
    dexterityModifier: 4,
    armorProficiencies: { ...untrainedProficiencies, medium: 2 },
    equippedArmor: { category: 'medium', itemBonus: 4, dexCap: 1 },
    equippedShield: null,
    manualAdjustment: 0,
  })

  assert.equal(result.dexterityCap, 1)
  assert.equal(result.dexterityModifierApplied, 1)
  assert.equal(result.proficiencyBonus, 7) // level(5) + trained(2)
  assert.equal(result.itemBonus, 4)
  assert.equal(result.total, 10 + 1 + 7 + 4)
})

test('negative dexterity modifier is not clamped by a positive dex cap', () => {
  const result = calculateArmorClass({
    level: 3,
    dexterityModifier: -2,
    armorProficiencies: { ...untrainedProficiencies, heavy: 2 },
    equippedArmor: { category: 'heavy', itemBonus: 6, dexCap: 0 },
    equippedShield: null,
    manualAdjustment: 0,
  })

  assert.equal(result.dexterityModifierApplied, -2)
  assert.equal(result.total, 10 + -2 + 5 + 6)
})

test('untrained proficiency in equipped armor category ignores level', () => {
  const result = calculateArmorClass({
    level: 20,
    dexterityModifier: 0,
    armorProficiencies: untrainedProficiencies,
    equippedArmor: { category: 'heavy', itemBonus: 6, dexCap: 0 },
    equippedShield: null,
    manualAdjustment: 0,
  })

  assert.equal(result.proficiencyBonus, 0)
})

test('shield bonus only applies when raised', () => {
  const lowered = calculateArmorClass({
    level: 1,
    dexterityModifier: 0,
    armorProficiencies: untrainedProficiencies,
    equippedArmor: null,
    equippedShield: { itemBonus: 2, raised: false },
    manualAdjustment: 0,
  })
  assert.equal(lowered.shieldBonus, 0)
  assert.equal(lowered.total, 10)

  const raised = calculateArmorClass({
    level: 1,
    dexterityModifier: 0,
    armorProficiencies: untrainedProficiencies,
    equippedArmor: null,
    equippedShield: { itemBonus: 2, raised: true },
    manualAdjustment: 0,
  })
  assert.equal(raised.shieldBonus, 2)
  assert.equal(raised.total, 12)
})

test('manual adjustment applies as a positive or negative offset', () => {
  const boosted = calculateArmorClass({
    level: 1,
    dexterityModifier: 0,
    armorProficiencies: untrainedProficiencies,
    equippedArmor: null,
    equippedShield: null,
    manualAdjustment: 2,
  })
  assert.equal(boosted.total, 12)

  const penalized = calculateArmorClass({
    level: 1,
    dexterityModifier: 0,
    armorProficiencies: untrainedProficiencies,
    equippedArmor: null,
    equippedShield: null,
    manualAdjustment: -3,
  })
  assert.equal(penalized.total, 7)
})

test('normalizePathfinder2eArmorCategory falls back to unarmored for unknown or missing values', () => {
  assert.equal(normalizePathfinder2eArmorCategory('medium'), 'medium')
  assert.equal(normalizePathfinder2eArmorCategory('unknown-category'), 'unarmored')
  assert.equal(normalizePathfinder2eArmorCategory(null), 'unarmored')
  assert.equal(normalizePathfinder2eArmorCategory(undefined), 'unarmored')
})
