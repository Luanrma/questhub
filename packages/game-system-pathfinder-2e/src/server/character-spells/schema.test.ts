import test from 'node:test'
import assert from 'node:assert/strict'
import { DEFAULT_PATHFINDER_2E_CHARACTER_SPELLBOOK, pathfinder2eCharacterSpellbookSchema } from './models'
import { pathfinder2eCharacterSpellbookAdapter } from './index'

test('default spellbook validates against the schema', () => {
  const result = pathfinder2eCharacterSpellbookSchema.safeParse(DEFAULT_PATHFINDER_2E_CHARACTER_SPELLBOOK)
  assert.equal(result.success, true)
})

test('adapter exposes the expected system identity', () => {
  assert.equal(pathfinder2eCharacterSpellbookAdapter.system, 'PATHFINDER_2E')
  assert.equal(pathfinder2eCharacterSpellbookAdapter.dataKey, 'pathfinder2e')
  assert.equal(pathfinder2eCharacterSpellbookAdapter.version, 1)
})

test('accepts a fully populated prepared spellcasting entry', () => {
  const result = pathfinder2eCharacterSpellbookSchema.safeParse({
    entries: [
      {
        id: 'wizard-arcane',
        name: 'Wizard Spellcasting',
        category: 'PREPARED',
        tradition: 'arcane',
        ability: 'int',
        proficiencyRank: 2,
        preparationStyle: 'STANDARD',
        slots: [{ rank: 1, max: 3 }],
        known: [],
        prepared: [{ rank: 1, slotIndex: 0, spellId: 'pf2e:spells:fireball', name: 'Fireball', expended: false }],
        focusPool: { points: 1, max: 1 },
        innateUses: [],
        signatureSpellIds: [],
      },
    ],
    rituals: [{ spellId: 'pf2e:spells:heal', name: 'Heal' }],
  })
  assert.equal(result.success, true)
})

test('accepts a global focus pool on the spellbook', () => {
  const result = pathfinder2eCharacterSpellbookSchema.safeParse({
    entries: [],
    rituals: [],
    focusPool: { points: 1, max: 2 },
  })
  assert.equal(result.success, true)
})

test('rejects an unknown spellcasting category', () => {
  const result = pathfinder2eCharacterSpellbookSchema.safeParse({
    entries: [
      {
        id: 'x',
        name: 'x',
        category: 'BOGUS',
        tradition: 'arcane',
        ability: 'int',
        proficiencyRank: 1,
        slots: [],
        known: [],
        prepared: [],
        innateUses: [],
        signatureSpellIds: [],
      },
    ],
    rituals: [],
  })
  assert.equal(result.success, false)
})

test('rejects a spell rank outside 0-10', () => {
  const result = pathfinder2eCharacterSpellbookSchema.safeParse({
    entries: [
      {
        id: 'x',
        name: 'x',
        category: 'SPONTANEOUS',
        tradition: 'arcane',
        ability: 'cha',
        proficiencyRank: 1,
        slots: [{ rank: 11, max: 1 }],
        known: [],
        prepared: [],
        innateUses: [],
        signatureSpellIds: [],
      },
    ],
    rituals: [],
  })
  assert.equal(result.success, false)
})

test('rejects a known spell without a stored display name', () => {
  const result = pathfinder2eCharacterSpellbookSchema.safeParse({
    entries: [
      {
        id: 'x',
        name: 'x',
        category: 'SPONTANEOUS',
        tradition: 'arcane',
        ability: 'cha',
        proficiencyRank: 1,
        slots: [],
        known: [{ spellId: 'pf2e:spells:fireball', rank: 3 }],
        prepared: [],
        innateUses: [],
        signatureSpellIds: [],
      },
    ],
    rituals: [],
  })
  assert.equal(result.success, false)
})

test('rejects unknown extra fields (strict envelope)', () => {
  const result = pathfinder2eCharacterSpellbookSchema.safeParse({
    entries: [],
    rituals: [],
    unexpectedField: true,
  })
  assert.equal(result.success, false)
})
