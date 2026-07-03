import test from 'node:test'
import assert from 'node:assert/strict'
import { listBestiaryCreatures } from './registry'

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

test('listBestiaryCreatures returns null for unsupported systems', () => {
  assert.equal(listBestiaryCreatures('DND_5E'), null)
})
