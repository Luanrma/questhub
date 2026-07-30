import assert from 'node:assert/strict'
import test from 'node:test'
import { createDefaultPathfinder2eCharacterSheet } from './defaults'
import { derivePathfinder2eCharacterSheet } from './derivation'
import {
  getPathfinder2eAncestryMechanics,
  getPathfinder2eBackgroundMechanics,
  getPathfinder2eClassMechanics,
} from './mechanical-catalog'
import {
  PATHFINDER_2E_ANCESTRIES,
  PATHFINDER_2E_BACKGROUNDS,
  PATHFINDER_2E_CLASSES,
  PATHFINDER_2E_HERITAGES,
  isPathfinder2eHeritageCompatible,
  pathfinder2eCharacterSheetOptions,
  resolvePathfinder2eOptionLabel,
} from './options'

test('localized PF2e options preserve en-US values and fall back explicitly', () => {
  const fighter = pathfinder2eCharacterSheetOptions.classes.find(
    (option) => option.value === 'Fighter',
  )

  assert.ok(fighter)
  assert.equal(fighter.labels['en-US'], 'Fighter')
  assert.equal(resolvePathfinder2eOptionLabel(fighter, 'pt-BR'), 'Guerreiro')
  assert.equal(resolvePathfinder2eOptionLabel({
    value: 'Untranslated Option',
    labels: { 'en-US': 'Untranslated Option' },
    translationStatus: { 'pt-BR': 'NOT_STARTED' },
  }, 'pt-BR'), 'Untranslated Option')
})

test('heritage compatibility follows ancestry and keeps versatile heritages available', () => {
  assert.equal(isPathfinder2eHeritageCompatible('Elf', 'Ancient Elf'), true)
  assert.equal(isPathfinder2eHeritageCompatible('Dwarf', 'Ancient Elf'), false)
  assert.equal(isPathfinder2eHeritageCompatible('Dwarf', 'Aiuvarin'), true)
})

test('every selectable heritage has an explicit pt-BR label', () => {
  const options = pathfinder2eCharacterSheetOptions.heritages
  const untranslated = options
    .filter((option) => !option.labels['pt-BR'])
    .map((option) => option.value)

  assert.deepEqual(untranslated, [])
  assert.equal(
    options.find((option) => option.value === 'Ironhoof Centaur')?.labels['pt-BR'],
    'Centauro de Casco de Ferro',
  )
  assert.equal(
    options.find((option) => option.value === 'Mottle-Coat Centaur')?.labels['pt-BR'],
    'Centauro de Pelagem Malhada',
  )
  assert.equal(
    options.find((option) => option.value === 'Ghost Bull Minotaur')?.labels['pt-BR'],
    'Minotauro Touro Fantasma',
  )
})

test('every selectable background has an explicit pt-BR label', () => {
  const options = pathfinder2eCharacterSheetOptions.backgrounds
  const untranslated = options
    .filter((option) => !option.labels['pt-BR'])
    .map((option) => option.value)

  assert.deepEqual(untranslated, [])
  assert.equal(
    options.find((option) => option.value === 'Able Carter')?.labels['pt-BR'],
    'Carroceiro Habilidoso',
  )
  assert.equal(
    options.find((option) => option.value === "Abadar's Avenger")?.labels['pt-BR'],
    'Vingador de Abadar',
  )
})

test('generated mechanical catalogs cover every currently selectable option', () => {
  assert.equal(
    PATHFINDER_2E_ANCESTRIES.every((name) => getPathfinder2eAncestryMechanics(name)),
    true,
  )
  assert.equal(
    PATHFINDER_2E_CLASSES.every((name) => getPathfinder2eClassMechanics(name)),
    true,
  )
  assert.equal(
    PATHFINDER_2E_BACKGROUNDS.every((name) => getPathfinder2eBackgroundMechanics(name)),
    true,
  )
  assert.equal(pathfinder2eCharacterSheetOptions.heritages.length, PATHFINDER_2E_HERITAGES.length)
})

test('ancestry, class and background grants affect the derived sheet without overwriting manual ranks', () => {
  const data = createDefaultPathfinder2eCharacterSheet()
  data.identity.ancestry = 'Human'
  data.identity.heritage = 'Skilled Human'
  data.identity.background = 'Field Medic'
  data.identity.class = 'Fighter'

  const { derived } = derivePathfinder2eCharacterSheet(data)

  assert.equal(derived.hitPoints.maximum, 18)
  assert.equal(derived.movement.valueMeters, 7.5)
  assert.equal(derived.perception.effectiveRank, 4)
  assert.equal(derived.savingThrows.fortitude.effectiveRank, 4)
  assert.equal(derived.skills.medicine.effectiveRank, 2)
  assert.deepEqual(derived.skills.medicine.grantSources, ['background'])
  assert.equal(derived.armorClass.value, 13)
  assert.equal(data.skills.medicine.rank, 0)

  data.skills.medicine.rank = 8
  const manuallyImproved = derivePathfinder2eCharacterSheet(data)
  assert.equal(manuallyImproved.derived.skills.medicine.effectiveRank, 8)
})

test('incomplete deity requirements and incompatible heritage are reported as warnings', () => {
  const data = createDefaultPathfinder2eCharacterSheet()
  data.identity.ancestry = 'Dwarf'
  data.identity.heritage = 'Ancient Elf'
  data.identity.class = 'Cleric'

  const { warnings } = derivePathfinder2eCharacterSheet(data)

  assert.equal(warnings.some((warning) => warning.includes('nao e compativel')), true)
  assert.equal(warnings.some((warning) => warning.includes('exige uma divindade')), true)
})
