import assert from 'node:assert/strict'
import test from 'node:test'
import { listPathfinder2eActiveEffectDefinitions } from './active-effect-definitions'
import { PATHFINDER_2E_EFFECT_POLARITY_EDITORIAL } from './active-effect-polarity-editorial'

type SuggestedPolarity = 'BENEFICIAL' | 'HARMFUL'

function plainText(markup: string) {
  return markup
    .replace(/<[^>]*>/g, ' ')
    .replace(/@UUID\[[^\]]+\](?:\{([^}]*)\})?/g, '$1')
    .replace(/@Check\[[^\]]+\]/g, ' ')
    .replace(/\s+/g, ' ')
    .trim()
    .toLowerCase()
}

const BENEFICIAL_SIGNALS = [
  /\bgains? (?:a |an )?\+\d/,
  /\bgains? (?:a |an )?(?:status|circumstance|item) bonus\b/,
  /\bbonus to\b/,
  /\btemporary hit points\b/,
  /\bfast healing\b/,
  /\bregeneration \d/,
  /\bgains? resistance\b/,
  /\bresistance \d/,
  /\bbecomes? immune\b/,
  /\bgains? immunit(?:y|ies)\b/,
  /\broll twice[^.]{0,120}\b(?:higher|better) result\b/,
  /\btake the (?:higher|better) result\b/,
  /\bdeals? (?:an )?additional\b/,
  /\bdeal an additional\b/,
  /\bextra \d+d\d+[^.]{0,40}\bdamage\b/,
  /\bincreases?[^.]{0,80}\b(?:damage|armor class|ac|hardness)\b/,
  /\bignore(?:s)?[^.]{0,80}\bpenalt(?:y|ies)\b/,
  /\breduce(?:s)? the dc of (?:your|its) recovery checks\b/,
  /\bgain a fly speed\b/,
] as const

const HARMFUL_SIGNALS = [
  /\bpenalt(?:y|ies)\b/,
  /\bgains? weakness\b/,
  /\bweakness \d/,
  /\bbecomes? (?:clumsy|confused|dazzled|doomed|drained|enfeebled|frightened|immobilized|off-guard|paralyzed|sickened|slowed|stunned|stupefied|unconscious)\b/,
  /\bis (?:clumsy|confused|dazzled|doomed|drained|enfeebled|frightened|immobilized|off-guard|paralyzed|sickened|slowed|stunned|stupefied|unconscious)\b/,
  /\bmust roll twice[^.]{0,120}\b(?:lower|worse) result\b/,
  /\btake the (?:lower|worse) result\b/,
  /\bpersistent [a-z -]*damage\b/,
  /\b(?:speed|speeds) (?:is|are) reduced\b/,
  /\bunable to recover\b/,
  /\bcan't naturally recover\b/,
  /\bcan't flank\b/,
  /\bautomatically roll a 1\b/,
] as const

function suggestedPolarity(description: string): SuggestedPolarity | null {
  const text = plainText(description)
  const beneficial = BENEFICIAL_SIGNALS.some((pattern) => pattern.test(text))
  const harmful = HARMFUL_SIGNALS.some((pattern) => pattern.test(text))
  if (beneficial === harmful) return null
  return beneficial ? 'BENEFICIAL' : 'HARMFUL'
}

test('obviously one-sided Effects are not left at the historical blanket NEUTRAL baseline', () => {
  const leftovers = listPathfinder2eActiveEffectDefinitions()
    .filter((definition) => definition.kind === 'effect' && definition.polarity === 'NEUTRAL')
    .flatMap((definition) => {
      const suggestion = suggestedPolarity(definition.description)
      if (!suggestion) return []
      return [{
        definitionKey: definition.definitionKey,
        name: definition.name,
        suggestedPolarity: suggestion,
      }]
    })

  assert.deepEqual(
    leftovers,
    [],
    `QH-EFF-012 editorial review still has obvious one-sided NEUTRAL Effects:\n${JSON.stringify(leftovers, null, 2)}`,
  )
})

test('editorial overlay contains only explicit enum values', () => {
  assert.ok(Object.keys(PATHFINDER_2E_EFFECT_POLARITY_EDITORIAL).length > 0)
  assert.ok(Object.values(PATHFINDER_2E_EFFECT_POLARITY_EDITORIAL).every((polarity) => (
    polarity === 'BENEFICIAL' || polarity === 'HARMFUL' || polarity === 'NEUTRAL'
  )))
})
