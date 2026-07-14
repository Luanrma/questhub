import test from 'node:test'
import assert from 'node:assert/strict'
import { PATHFINDER_2E_SPELL_COMPATIBILITY_REPORT } from './compatibility-report.generated'
import { PATHFINDER_2E_SPELL_DATA, PATHFINDER_2E_SPELL_EFFECT_DEPENDENCIES } from './data.generated'
import { PATHFINDER_2E_SPELL_SOURCE_MANIFEST } from './source-manifest.generated'
import type { Pathfinder2eSpellDefinition } from './models'

function findSpell(name: string): Pathfinder2eSpellDefinition {
  const spell = PATHFINDER_2E_SPELL_DATA.find((entry) => entry.name === name)
  assert.ok(spell, `expected to find spell named ${name}`)
  return spell
}

test('source manifest records a verifiable system version and never fabricates a commit sha', () => {
  assert.equal(PATHFINDER_2E_SPELL_SOURCE_MANIFEST.repository, 'foundryvtt/pf2e')
  assert.equal(PATHFINDER_2E_SPELL_SOURCE_MANIFEST.systemVersion, '6.12.4')
  assert.equal(PATHFINDER_2E_SPELL_SOURCE_MANIFEST.commitSha, null)
  assert.ok(PATHFINDER_2E_SPELL_SOURCE_MANIFEST.packs.length > 0)
  for (const pack of PATHFINDER_2E_SPELL_SOURCE_MANIFEST.packs) {
    assert.ok(pack.fileCount > 0, `${pack.path} should have files`)
    assert.match(pack.checksum, /^[0-9a-f]{64}$/)
  }
})

test('compatibility report has zero unresolved references and zero compilation failures for the current snapshot', () => {
  assert.deepEqual(PATHFINDER_2E_SPELL_COMPATIBILITY_REPORT.unresolvedReferences, [])
  assert.deepEqual(PATHFINDER_2E_SPELL_COMPATIBILITY_REPORT.compilationFailures, [])
  assert.equal(PATHFINDER_2E_SPELL_COMPATIBILITY_REPORT.totalSpells + PATHFINDER_2E_SPELL_COMPATIBILITY_REPORT.totalRituals, PATHFINDER_2E_SPELL_DATA.length)
})

test('golden fixture: Fireball preserves full damage, defense, area and interval heightening losslessly', () => {
  const fireball = findSpell('Fireball')

  assert.equal(fireball.category, 'spell')
  assert.equal(fireball.rank, 3)
  assert.deepEqual(fireball.damage, {
    '0': { formula: '6d6', type: 'fire', kinds: ['damage'], category: null, applyMod: false, materials: [] },
  })
  assert.deepEqual(fireball.defense, { save: { statistic: 'reflex', basic: true } })
  assert.deepEqual(fireball.area, { type: 'burst', value: 20 })
  assert.deepEqual(fireball.heightening, { type: 'interval', interval: 1, damage: { '0': '2d6' } })
  assert.ok(fireball.description.raw.includes('Heightened (+1)'))
  assert.ok(fireball.description.nodes.length > 0)
})

test('golden fixture: Heal preserves the four action-count overlays as structured patches', () => {
  const heal = findSpell('Heal')

  assert.equal(heal.overlays.length, 4)
  const oneAction = heal.overlays.find((overlay) => (overlay.system as { time?: { value?: string } }).time?.value === '1')
  assert.ok(oneAction)
  assert.equal(oneAction?.overlayType, 'override')

  const versusUndead = heal.overlays.find((overlay) => overlay.name === 'Heal (vs. Undead)')
  assert.ok(versusUndead)
  const versusUndeadDamage = (versusUndead?.system as { damage?: { '0'?: { kinds?: string[] } } }).damage
  assert.deepEqual(versusUndeadDamage?.['0']?.kinds, ['damage'])

  assert.ok(heal.damage['0'].kinds.includes('damage'))
  assert.ok(heal.damage['0'].kinds.includes('healing'))
})

test('golden fixture: Haste resolves its dependency graph to Spell Effect: Haste -> GrantItem -> Quickened', () => {
  const haste = findSpell('Haste')

  assert.deepEqual(haste.rules, [])
  assert.equal(haste.dependencyIds.length, 2)

  const spellEffect = PATHFINDER_2E_SPELL_EFFECT_DEPENDENCIES.find((dependency) => dependency.name === 'Spell Effect: Haste')
  assert.ok(spellEffect)
  assert.equal(spellEffect?.documentType, 'effect')
  assert.ok(haste.dependencyIds.includes(spellEffect!.id))

  const grantItemRule = spellEffect?.rules.find((rule) => rule.key === 'GrantItem')
  assert.ok(grantItemRule)
  assert.equal(grantItemRule?.uuid, 'Compendium.pf2e.conditionitems.Item.Quickened')

  const quickened = PATHFINDER_2E_SPELL_EFFECT_DEPENDENCIES.find((dependency) => dependency.name === 'Quickened')
  assert.ok(quickened)
  assert.equal(quickened?.documentType, 'condition')
  assert.ok(haste.dependencyIds.includes(quickened!.id))
})
