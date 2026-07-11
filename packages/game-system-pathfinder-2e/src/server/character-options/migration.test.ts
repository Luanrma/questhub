import test from 'node:test'
import assert from 'node:assert/strict'
import { defaultPathfinder2eSheet } from '../character-sheet/default-sheet'
import { migratePathfinder2eSheetV1ToV2 } from './migration'

// V1 legado nunca teve o Armor Class dinamico (`armorProficiencies` +
// `armorClass.manualAdjustment`); esses fixtures simulam o formato antigo
// (`armorClass: number`) a partir do sheet V2 atual.
const { armorClass: _defaultArmorClass, armorProficiencies: _defaultArmorProficiencies, ...legacySheetBase } =
  defaultPathfinder2eSheet
const legacySheetFixture = { ...legacySheetBase, armorClass: 10 }

test('migratePathfinder2eSheetV1ToV2 maps canonical V1 text to catalog selections', () => {
  const result = migratePathfinder2eSheetV1ToV2({
    ...legacySheetFixture,
    identity: {
      level: 1,
      ancestry: 'Elf',
      heritage: 'Arctic Elf',
      background: 'Acolyte',
      className: 'Fighter',
    },
  })

  assert.deepEqual(result.issues, [])
  assert.equal(result.sheet.identity.ancestry?.source, 'catalog')
  assert.equal(result.sheet.identity.ancestry?.id, 'pf2e:ancestry:elf')
  assert.equal(result.sheet.identity.heritage?.source, 'catalog')
  assert.equal(result.sheet.identity.heritage?.id, 'pf2e:heritage:arctic-elf')
  assert.equal(result.sheet.identity.background?.source, 'catalog')
  assert.equal(result.sheet.identity.background?.id, 'pf2e:background:acolyte')
  assert.equal(result.sheet.identity.class?.source, 'catalog')
  assert.equal(result.sheet.identity.class?.id, 'pf2e:class:fighter')
  assert.equal(result.sheet.buildChoices.class.keyAbility, null)
})

test('migratePathfinder2eSheetV1ToV2 matches slugs and normalizes whitespace', () => {
  const result = migratePathfinder2eSheetV1ToV2({
    ...legacySheetFixture,
    identity: {
      level: 1,
      ancestry: ' elf ',
      heritage: ' arctic   elf ',
      background: 'acolyte',
      className: 'fighter',
    },
  })

  assert.deepEqual(result.issues, [])
  assert.equal(result.sheet.identity.heritage?.source, 'catalog')
  assert.equal(result.sheet.identity.heritage?.slug, 'arctic-elf')
})

test('migratePathfinder2eSheetV1ToV2 preserves unknown text as custom selections', () => {
  const result = migratePathfinder2eSheetV1ToV2({
    ...legacySheetFixture,
    identity: {
      level: 1,
      ancestry: 'Moonfolk',
      heritage: '',
      background: 'Village Pie Judge',
      className: '',
    },
  })

  assert.equal(result.sheet.identity.ancestry?.source, 'custom')
  assert.equal(result.sheet.identity.ancestry?.name, 'Moonfolk')
  assert.equal(result.sheet.identity.background?.source, 'custom')
  assert.equal(result.sheet.identity.background?.name, 'Village Pie Judge')
  assert.deepEqual(
    result.issues.map((issue) => [issue.field, issue.reason]),
    [
      ['ancestry', 'not_found'],
      ['background', 'not_found'],
    ],
  )
})

test('migratePathfinder2eSheetV1ToV2 converts incompatible catalog heritage to custom with an issue', () => {
  const result = migratePathfinder2eSheetV1ToV2({
    ...legacySheetFixture,
    identity: {
      level: 1,
      ancestry: 'Dwarf',
      heritage: 'Arctic Elf',
      background: '',
      className: '',
    },
  })

  assert.equal(result.sheet.identity.ancestry?.source, 'catalog')
  assert.equal(result.sheet.identity.heritage?.source, 'custom')
  assert.equal(result.sheet.identity.heritage?.name, 'Arctic Elf')
  assert.deepEqual(result.issues, [{ field: 'heritage', value: 'Arctic Elf', reason: 'incompatible' }])
})

test('migratePathfinder2eSheetV1ToV2 keeps versatile heritages across ancestries', () => {
  const result = migratePathfinder2eSheetV1ToV2({
    ...legacySheetFixture,
    identity: {
      level: 1,
      ancestry: 'Dwarf',
      heritage: 'Nephilim',
      background: '',
      className: '',
    },
  })

  assert.deepEqual(result.issues, [])
  assert.equal(result.sheet.identity.heritage?.source, 'catalog')
  assert.equal(result.sheet.identity.heritage?.id, 'pf2e:heritage:nephilim')
})

