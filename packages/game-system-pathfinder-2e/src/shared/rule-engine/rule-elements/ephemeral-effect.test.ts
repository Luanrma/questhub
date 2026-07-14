import test from 'node:test'
import assert from 'node:assert/strict'
import { createRollOptions } from '../roll-options'
import { resolveEphemeralEffects } from './ephemeral-effect'
import type { EphemeralEffectSource } from './ephemeral-effect'

// Real EphemeralEffect rule elements audited from pf2e-master/packs/spell-effects.

const ALBATROSS_CURSE: EphemeralEffectSource = {
  key: 'EphemeralEffect',
  affects: 'origin',
  selectors: ['strike-attack-roll'],
  uuid: 'Compendium.pf2e.spell-effects.Item.Spell Effect: Albatross Curse (Circumstance Bonus)',
}

test('a static uuid resolves with its selectors and affects side', () => {
  const { resolved, skipped } = resolveEphemeralEffects([ALBATROSS_CURSE], createRollOptions([]))
  assert.equal(skipped.length, 0)
  assert.deepEqual(resolved, [
    { uuid: ALBATROSS_CURSE.uuid, selectors: ['strike-attack-roll'], affects: 'origin' },
  ])
})

test('affects defaults to target when omitted (real Foundry schema default)', () => {
  const source: EphemeralEffectSource = { key: 'EphemeralEffect', selectors: ['attack-roll'], uuid: 'Compendium.pf2e.spell-effects.Item.Spell Effect: Charged Javelin (Attacker)' }
  const { resolved } = resolveEphemeralEffects([source], createRollOptions([]))
  assert.equal(resolved[0]?.affects, 'target')
})

test('a dynamic uuid is reported as skipped, never guessed at', () => {
  const source: EphemeralEffectSource = { key: 'EphemeralEffect', selectors: ['attack-roll'], uuid: '{item|flags.pf2e.rulesSelections.formEffect}' }
  const { resolved, skipped } = resolveEphemeralEffects([source], createRollOptions([]))
  assert.equal(resolved.length, 0)
  assert.equal(skipped[0]?.reason, 'dynamic-uuid')
})

test('a predicate gates resolution', () => {
  const source: EphemeralEffectSource = { ...ALBATROSS_CURSE, predicate: ['self:condition:quickened'] }
  assert.equal(resolveEphemeralEffects([source], createRollOptions([])).resolved.length, 0)
  assert.equal(resolveEphemeralEffects([source], createRollOptions(['self:condition:quickened'])).resolved.length, 1)
})
