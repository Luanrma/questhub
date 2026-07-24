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

test('createCharacterSchema requires name, game system and limits bio', () => {
  assert.equal(createCharacterSchema.safeParse({ name: '  ', gameSystem: 'PATHFINDER_2E' }).success, false)
  assert.equal(createCharacterSchema.safeParse({ name: 'A', gameSystem: 'PATHFINDER_2E', bio: 'x'.repeat(2001) }).success, false)
  assert.equal(createCharacterSchema.safeParse({ name: 'Arion' }).success, false)
  assert.equal(createCharacterSchema.safeParse({ name: 'Arion', gameSystem: 'DND_5E' }).success, false)

  const parsed = createCharacterSchema.safeParse({
    name: '  Arion  ',
    gameSystem: 'PATHFINDER_2E',
    avatarUrl: '/avatars/hooded-ranger.svg',
    bio: 'Guardiao do norte.',
  })

  assert.equal(parsed.success, true)
  if (parsed.success) {
    assert.equal(parsed.data.name, 'Arion')
    assert.equal(parsed.data.gameSystem, 'PATHFINDER_2E')
  }
})

test('createCharacterSchema allows nullable optional fields from the form', () => {
  const parsed = createCharacterSchema.safeParse({
    name: 'Arion',
    gameSystem: 'PATHFINDER_2E',
    avatarUrl: null,
    bio: null,
  })

  assert.equal(parsed.success, true)
})

test('updateCharacterSchema does not allow changing the game system', () => {
  const parsed = updateCharacterSchema.safeParse({
    avatarUrl: null,
    bio: null,
    gameSystem: 'PATHFINDER_2E',
  })

  assert.equal(parsed.success, true)
  if (parsed.success) assert.equal('gameSystem' in parsed.data, false)
})
