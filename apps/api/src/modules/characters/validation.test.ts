import test from 'node:test'
import assert from 'node:assert/strict'
import { avatarUrlSchema, createCharacterSchema, updateCharacterSchema } from './validation'

test('avatarUrlSchema accepts internal paths and http URLs', () => {
  assert.equal(avatarUrlSchema.safeParse('/avatars/hooded-ranger.svg').success, true)
  assert.equal(avatarUrlSchema.safeParse('https://example.com/avatar.png').success, true)
  assert.equal(avatarUrlSchema.safeParse('http://example.com/avatar.png').success, true)
})

test('avatarUrlSchema rejects unsupported URLs and arbitrary text', () => {
  assert.equal(avatarUrlSchema.safeParse('ftp://example.com/avatar.png').success, false)
  assert.equal(avatarUrlSchema.safeParse('not-a-url').success, false)
})

test('createCharacterSchema requires a non-empty name and limits bio', () => {
  assert.equal(createCharacterSchema.safeParse({ name: '  ', system: 'PATHFINDER_2E' }).success, false)
  assert.equal(createCharacterSchema.safeParse({ name: 'A', system: 'PATHFINDER_2E', bio: 'x'.repeat(2001) }).success, false)

  const parsed = createCharacterSchema.safeParse({
    name: '  Arion  ',
    system: 'PATHFINDER_2E',
    avatarUrl: '/avatars/hooded-ranger.svg',
    bio: 'Guardiao do norte.',
  })

  assert.equal(parsed.success, true)
  if (parsed.success) assert.equal(parsed.data.name, 'Arion')
})

test('createCharacterSchema allows nullable optional fields from the form', () => {
  const parsed = createCharacterSchema.safeParse({
    name: 'Arion',
    system: 'PATHFINDER_2E',
    avatarUrl: null,
    bio: null,
  })

  assert.equal(parsed.success, true)
})

test('createCharacterSchema requires the implemented character sheet module', () => {
  assert.equal(createCharacterSchema.safeParse({ name: 'Arion' }).success, false)
  assert.equal(createCharacterSchema.safeParse({ name: 'Arion', system: 'DND_5E' }).success, false)
  assert.equal(createCharacterSchema.safeParse({ name: 'Arion', system: 'PATHFINDER_2E' }).success, true)
})

test('updateCharacterSchema allows nullable avatar and bio', () => {
  const parsed = updateCharacterSchema.safeParse({
    system: 'PATHFINDER_2E',
    avatarUrl: null,
    bio: null,
  })

  assert.equal(parsed.success, true)
})
