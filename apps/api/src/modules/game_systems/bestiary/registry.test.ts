import test from 'node:test'
import assert from 'node:assert/strict'
import { countBestiaryCreatures, findBestiaryCreature, listBestiaryCreatures } from './registry'

test('listBestiaryCreatures returns Pathfinder 2e creatures ordered by level', () => {
  const creatures = listBestiaryCreatures('PATHFINDER_2E')

  assert.ok(creatures)
  assert.equal(creatures.length, 24)
  assert.ok(creatures[0].display.level?.value.startsWith('-'))
})

test('listBestiaryCreatures filters Pathfinder 2e creatures by trait', () => {
  const creatures = listBestiaryCreatures('PATHFINDER_2E', { search: 'fiend' })

  assert.ok(creatures)
  assert.ok(creatures.length > 2)
  assert.ok(creatures.every((creature) => creature.name.toLocaleLowerCase().includes('fiend') || creature.display.tags.includes('fiend')))
})

test('listBestiaryCreatures paginates Pathfinder 2e creatures', () => {
  const firstPage = listBestiaryCreatures('PATHFINDER_2E', { limit: 2, offset: 0 })
  const secondPage = listBestiaryCreatures('PATHFINDER_2E', { limit: 2, offset: 2 })

  assert.equal(firstPage?.length, 2)
  assert.equal(secondPage?.length, 2)
  assert.notDeepEqual(firstPage?.map((creature) => creature.id), secondPage?.map((creature) => creature.id))
})

test('countBestiaryCreatures counts filtered Pathfinder 2e creatures', () => {
  const total = countBestiaryCreatures('PATHFINDER_2E', { search: 'fiend' })

  assert.ok(total)
  assert.ok(total > 2)
})

test('listBestiaryCreatures filters Pathfinder 2e creatures by level and rarity', () => {
  const creatures = listBestiaryCreatures('PATHFINDER_2E', {
    filters: {
      level: 18,
      rarity: 'rare',
    },
  })

  assert.ok(creatures)
  assert.ok(creatures.length > 0)
  assert.ok(creatures.every((creature) => creature.display.level?.value === '+18' && creature.display.tags.includes('rare')))
})

test('countBestiaryCreatures counts the complete extracted Pathfinder 2e bestiary', () => {
  assert.equal(countBestiaryCreatures('PATHFINDER_2E'), 2141)
  assert.ok((countBestiaryCreatures('PATHFINDER_2E', { filters: { rarity: 'common' } }) ?? 0) > 1000)
})

test('listBestiaryCreatures includes simplified sheet sections for Pathfinder 2e creatures', () => {
  const creatures = listBestiaryCreatures('PATHFINDER_2E', { search: 'goblin' })
  const goblin = creatures?.find((creature) => creature.name === 'Goblin Warrior')

  assert.ok(goblin)
  assert.ok(goblin.display.sheet)
  assert.ok(goblin.display.sheet.sections.some((section) => section.key === 'attacks'))
  assert.ok(goblin.display.sheet.sections.some((section) => section.key === 'actions'))
  assert.ok(goblin.display.sheet.sections.some((section) => section.entries.some((entry) => entry.label === 'Dogslicer')))
})

test('listBestiaryCreatures exposes Pathfinder 2e translated sheet content', () => {
  const creatures = listBestiaryCreatures('PATHFINDER_2E', { search: 'goblin' })
  const goblin = creatures?.find((creature) => creature.name === 'Goblin Warrior')
  const translatedSheet = goblin?.translations?.ptBR?.display?.sheet

  assert.ok(translatedSheet)
  assert.ok(translatedSheet.sections.some((section) => section.title === 'Ataques'))
  assert.ok(translatedSheet.sections.some((section) => section.title === 'Acoes'))
  assert.ok(translatedSheet.sections.some((section) => section.entries.some((entry) => entry.label === 'Shortbow')))
})

test('findBestiaryCreature returns a Pathfinder 2e creature by catalog id', () => {
  const creature = findBestiaryCreature('PATHFINDER_2E', 'pf2e:pathfinder-monster-core:goblin-warrior')

  assert.ok(creature)
  assert.equal(creature.name, 'Goblin Warrior')
  assert.ok(creature.display.sheet?.sections.some((section) => section.key === 'attacks'))
})

test('findBestiaryCreature returns creatures from adventure and npc packs', () => {
  const kingmakerCreature = findBestiaryCreature('PATHFINDER_2E', 'pf2e:kingmaker-bestiary:aecora-silverfire')
  const npcGalleryCreature = findBestiaryCreature('PATHFINDER_2E', 'pf2e:npc-gallery:acolyte-of-nethys')

  assert.ok(kingmakerCreature)
  assert.equal((kingmakerCreature.systemData as { sourcePack?: string }).sourcePack, 'kingmaker-bestiary')
  assert.ok(npcGalleryCreature)
  assert.equal((npcGalleryCreature.systemData as { sourcePack?: string }).sourcePack, 'npc-gallery')
})

test('listBestiaryCreatures returns null for unsupported systems', () => {
  assert.equal(listBestiaryCreatures('DND_5E'), null)
})
