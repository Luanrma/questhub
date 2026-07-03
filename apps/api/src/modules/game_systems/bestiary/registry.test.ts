import test from 'node:test'
import assert from 'node:assert/strict'
import { countBestiaryCreatures, listBestiaryCreatures } from './registry'

test('listBestiaryCreatures returns Pathfinder 2e creatures ordered by level', () => {
  const creatures = listBestiaryCreatures('PATHFINDER_2E')

  assert.ok(creatures)
  assert.equal(creatures[0].name, 'Goblin Warrior')
  assert.ok(creatures.some((creature) => creature.name === 'Balor'))
})

test('listBestiaryCreatures filters Pathfinder 2e creatures by trait', () => {
  const creatures = listBestiaryCreatures('PATHFINDER_2E', { search: 'fiend' })

  assert.deepEqual(
    creatures?.map((creature) => creature.name),
    ['Barghest', 'Balor'],
  )
})

test('listBestiaryCreatures paginates Pathfinder 2e creatures', () => {
  const creatures = listBestiaryCreatures('PATHFINDER_2E', { limit: 2, offset: 2 })

  assert.deepEqual(
    creatures?.map((creature) => creature.name),
    ['Barghest', 'Aapoph Granitescale'],
  )
})

test('countBestiaryCreatures counts filtered Pathfinder 2e creatures', () => {
  assert.equal(countBestiaryCreatures('PATHFINDER_2E', { search: 'fiend' }), 2)
})

test('listBestiaryCreatures filters Pathfinder 2e creatures by level and rarity', () => {
  const creatures = listBestiaryCreatures('PATHFINDER_2E', {
    filters: {
      level: 18,
      rarity: 'rare',
    },
  })

  assert.deepEqual(
    creatures?.map((creature) => creature.name),
    ['Adamantine Golem'],
  )
})

test('countBestiaryCreatures counts Pathfinder 2e creatures by rarity', () => {
  assert.equal(countBestiaryCreatures('PATHFINDER_2E', { filters: { rarity: 'common' } }), 5)
})

test('listBestiaryCreatures returns null for unsupported systems', () => {
  assert.equal(listBestiaryCreatures('DND_5E'), null)
})
