import test from 'node:test'
import assert from 'node:assert/strict'
import {
  PATHFINDER_2E_ANCESTRIES,
  PATHFINDER_2E_BACKGROUNDS,
  PATHFINDER_2E_CHARACTER_OPTIONS_SOURCE_SUMMARY,
  PATHFINDER_2E_CLASSES,
  PATHFINDER_2E_HERITAGES,
  pathfinder2eCharacterOptionsAdapter,
} from './index'

function requiredEntry<T extends { id: string }>(entries: T[], id: string) {
  const entry = entries.find((candidate) => candidate.id === id)
  assert.ok(entry, `missing generated entry ${id}`)
  return entry
}

test('generated PF2e character options preserve source counts and rule summary', () => {
  assert.equal(PATHFINDER_2E_CLASSES.length, 25)
  assert.equal(PATHFINDER_2E_ANCESTRIES.length, 48)
  assert.equal(PATHFINDER_2E_HERITAGES.length, 311)
  assert.equal(PATHFINDER_2E_BACKGROUNDS.length, 459)
  assert.equal(PATHFINDER_2E_CHARACTER_OPTIONS_SOURCE_SUMMARY.counts.versatileHeritages, 17)
  assert.ok(PATHFINDER_2E_CHARACTER_OPTIONS_SOURCE_SUMMARY.ruleKeys.ChoiceSet > 0)
})

test('generated PF2e class catalog normalizes Fighter mechanics and preserves rules', () => {
  const fighter = requiredEntry(PATHFINDER_2E_CLASSES, 'pf2e:class:fighter')

  assert.equal(fighter.source.sourceId, '8zn3cD6GSmoo1LW4')
  assert.equal(fighter.hitPointsPerLevel, 10)
  assert.deepEqual(fighter.keyAbility.options, ['dex', 'str'])
  assert.equal(fighter.proficiencies.perception, 2)
  assert.deepEqual(fighter.proficiencies.savingThrows, { fortitude: 2, reflex: 2, will: 1 })
  assert.equal(fighter.proficiencies.attacks.simple, 2)
  assert.equal(fighter.proficiencies.attacks.martial, 2)
  assert.equal(fighter.proficiencies.attacks.advanced, 1)
  assert.equal(fighter.trainedSkills.additional, 3)
  assert.ok(fighter.rules.some((rule) => rule.key === 'ChoiceSet'))
})

test('generated PF2e ancestry catalog normalizes Elf ancestry data', () => {
  const elf = requiredEntry(PATHFINDER_2E_ANCESTRIES, 'pf2e:ancestry:elf')

  assert.equal(elf.source.sourceId, 'PgKmsA2aKdbLU6O0')
  assert.equal(elf.hitPoints, 6)
  assert.equal(elf.speedFeet, 30)
  assert.equal(elf.size, 'med')
  assert.equal(elf.hands, 2)
  assert.equal(elf.reachFeet, 5)
  assert.equal(elf.vision, 'low-light-vision')
  assert.deepEqual(elf.languages.granted, ['common', 'elven'])
  assert.deepEqual(
    elf.attributes.boosts.map((boost) => boost.options),
    [['dex'], ['int'], ['str', 'dex', 'con', 'int', 'wis', 'cha']],
  )
  assert.deepEqual(
    elf.attributes.flaws.map((flaw) => flaw.options),
    [['con']],
  )
})

test('generated PF2e heritage catalog distinguishes specific and versatile heritages', () => {
  const arcticElf = requiredEntry(PATHFINDER_2E_HERITAGES, 'pf2e:heritage:arctic-elf')
  const nephilim = requiredEntry(PATHFINDER_2E_HERITAGES, 'pf2e:heritage:nephilim')

  assert.equal(arcticElf.versatile, false)
  assert.equal(arcticElf.ancestry?.slug, 'elf')
  assert.equal(arcticElf.ancestry?.sourceId, 'PgKmsA2aKdbLU6O0')
  assert.equal(nephilim.versatile, true)
  assert.equal(nephilim.ancestry, null)
})

test('generated PF2e background catalog normalizes Acolyte boosts, skills, lore, and granted feat', () => {
  const acolyte = requiredEntry(PATHFINDER_2E_BACKGROUNDS, 'pf2e:background:acolyte')

  assert.equal(acolyte.source.sourceId, 'CAjQrHZZbALE7Qjy')
  assert.deepEqual(
    acolyte.attributes.boosts.map((boost) => boost.options),
    [
      ['int', 'wis'],
      ['cha', 'con', 'dex', 'int', 'str', 'wis'],
    ],
  )
  assert.deepEqual(acolyte.trainedSkills.skills, ['religion'])
  assert.deepEqual(acolyte.trainedSkills.lore, ['Scribing Lore'])
  assert.ok(acolyte.grantedItems.some((item) => item.name === 'Student of the Canon'))
})

test('pathfinder2eCharacterOptionsAdapter lists, searches, filters, and finds entries', () => {
  const classes = pathfinder2eCharacterOptionsAdapter.listEntries({ kind: 'class', search: 'fighter', limit: 10, offset: 0 })
  const fighter = pathfinder2eCharacterOptionsAdapter.findEntry('class', 'pf2e:class:fighter')
  const fighterBySource = pathfinder2eCharacterOptionsAdapter.findEntryBySource?.('class', 'classes', '8zn3cD6GSmoo1LW4')
  const elfHeritages = pathfinder2eCharacterOptionsAdapter.listEntries({
    kind: 'heritage',
    filters: { ancestryId: 'pf2e:ancestry:elf' },
    limit: 500,
    offset: 0,
  })

  assert.deepEqual(classes.map((entry) => entry.id), ['pf2e:class:fighter'])
  assert.equal(fighter?.name, 'Fighter')
  assert.equal(fighterBySource?.id, 'pf2e:class:fighter')
  assert.ok(elfHeritages.some((entry) => entry.id === 'pf2e:heritage:arctic-elf'))
  assert.ok(elfHeritages.some((entry) => entry.id === 'pf2e:heritage:nephilim'))
  assert.equal(elfHeritages.some((entry) => entry.id === 'pf2e:heritage:ancient-blooded-dwarf'), false)
})
