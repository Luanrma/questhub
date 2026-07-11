import test from 'node:test'
import assert from 'node:assert/strict'
import {
  countCharacterOptions,
  findCharacterOption,
  findCharacterOptionBySource,
  listCharacterOptions,
} from './registry'

test('listCharacterOptions returns Pathfinder 2e classes with pagination and search', () => {
  const entries = listCharacterOptions('PATHFINDER_2E', {
    kind: 'class',
    search: 'fighter',
    limit: 10,
    offset: 0,
  })

  assert.ok(entries)
  assert.deepEqual(entries.map((entry) => entry.id), ['pf2e:class:fighter'])
})

test('countCharacterOptions counts filtered Pathfinder 2e entries', () => {
  const total = countCharacterOptions('PATHFINDER_2E', {
    kind: 'class',
    search: 'fighter',
  })

  assert.equal(total, 1)
})

test('findCharacterOption returns a Pathfinder 2e entry by kind and id', () => {
  const entry = findCharacterOption('PATHFINDER_2E', 'ancestry', 'pf2e:ancestry:elf')

  assert.equal(entry?.name, 'Elf')
  assert.equal(entry?.source.id, 'PgKmsA2aKdbLU6O0')
})

test('findCharacterOptionBySource traces a Pathfinder 2e source reference back to catalog', () => {
  const entry = findCharacterOptionBySource('PATHFINDER_2E', 'class', 'classes', '8zn3cD6GSmoo1LW4')

  assert.equal(entry?.id, 'pf2e:class:fighter')
})

test('listCharacterOptions filters heritages by ancestry and includes versatile heritages', () => {
  const entries = listCharacterOptions('PATHFINDER_2E', {
    kind: 'heritage',
    filters: { ancestryId: 'pf2e:ancestry:elf' },
    limit: 500,
    offset: 0,
  })

  assert.ok(entries)
  assert.ok(entries.some((entry) => entry.id === 'pf2e:heritage:arctic-elf'))
  assert.ok(entries.some((entry) => entry.id === 'pf2e:heritage:nephilim'))
  assert.equal(entries.some((entry) => entry.id === 'pf2e:heritage:ancient-blooded-dwarf'), false)
})

test('listCharacterOptions returns null for unsupported systems', () => {
  const entries = listCharacterOptions('DND_5E', {
    kind: 'class',
    limit: 10,
    offset: 0,
  })

  assert.equal(entries, null)
})
