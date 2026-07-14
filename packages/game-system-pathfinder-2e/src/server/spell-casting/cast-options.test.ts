import test from 'node:test'
import assert from 'node:assert/strict'
import { buildPathfinder2eCastOptions } from './cast-options'
import type { Pathfinder2eCharacterSpellbookData } from '../character-spells/models'

function makeSpellbook(): Pathfinder2eCharacterSpellbookData {
  return {
    entries: [
      {
        id: 'bard-occult',
        name: 'Repertorio Oculto',
        category: 'SPONTANEOUS',
        tradition: 'occult',
        ability: 'cha',
        proficiencyRank: 2,
        slots: [
          { rank: 1, max: 3, used: 0 },
          { rank: 2, max: 2, used: 1 },
          { rank: 3, max: 1, used: 0 },
        ],
        known: [{ spellId: 'pf2e:spells:blur', name: 'Blur', rank: 2 }],
        prepared: [],
        innateUses: [],
        signatureSpellIds: [],
      },
      {
        id: 'innate-entry',
        name: 'Magias Inatas',
        category: 'INNATE',
        tradition: 'primal',
        ability: 'cha',
        proficiencyRank: 2,
        slots: [],
        known: [],
        prepared: [],
        innateUses: [{ spellId: 'pf2e:spells:darkness', name: 'Darkness', usesPerDay: 1, used: 0 }],
        signatureSpellIds: [],
      },
      {
        id: 'focus-entry',
        name: 'Foco Divino',
        category: 'FOCUS',
        tradition: 'divine',
        ability: 'wis',
        proficiencyRank: 2,
        slots: [],
        known: [{ spellId: 'pf2e:spells:lay-on-hands', name: 'Lay on Hands', rank: 1 }],
        prepared: [],
        innateUses: [],
        signatureSpellIds: [],
      },
      {
        id: 'focus-entry-2',
        name: 'Foco Oculto',
        category: 'FOCUS',
        tradition: 'occult',
        ability: 'cha',
        proficiencyRank: 2,
        slots: [],
        known: [{ spellId: 'pf2e:spells:dread-aura', name: 'Dread Aura', rank: 1 }],
        prepared: [],
        innateUses: [],
        signatureSpellIds: [],
      },
    ],
    rituals: [],
    focusPool: { points: 1, max: 2 },
  }
}

test('spontaneous byRank only offers slots at or above the known rank', () => {
  const options = buildPathfinder2eCastOptions(makeSpellbook(), () => null)

  const blur = options[0].spells.find((spell) => spell.spellId === 'pf2e:spells:blur')
  assert.ok(blur)
  assert.equal(blur.resource.kind, 'spontaneous')
  if (blur.resource.kind !== 'spontaneous') return
  // Regra 5.1/5.3 do doc normativo: Blur conhecida no rank 2 nunca pode
  // consumir slot de rank 1.
  assert.deepEqual(
    blur.resource.byRank.map((slot) => slot.rank),
    [2, 3],
  )
})

test('innate spell without catalog definition is never treated as a free cantrip', () => {
  const options = buildPathfinder2eCastOptions(makeSpellbook(), () => null)

  const darkness = options[1].spells.find((spell) => spell.spellId === 'pf2e:spells:darkness')
  assert.ok(darkness)
  assert.equal(darkness.isCantrip, false)
  assert.equal(darkness.resource.kind, 'innate')
})

test('focus entries expose the same global focus pool', () => {
  const options = buildPathfinder2eCastOptions(makeSpellbook(), () => null)

  assert.deepEqual(options[2].focusPoints, { points: 1, max: 2 })
  assert.deepEqual(options[3].focusPoints, { points: 1, max: 2 })
})
