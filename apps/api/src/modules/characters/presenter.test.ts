import test from 'node:test'
import assert from 'node:assert/strict'
import { presentCharacter } from './presenter'

test('presentCharacter marks a character without campaign links as available', () => {
  const createdAt = new Date('2026-06-21T10:00:00.000Z')

  const result = presentCharacter({
    id: 'character-1',
    name: 'Arion',
    avatarUrl: null,
    bio: null,
    system: null,
    sheet: null,
    createdAt,
    campaigns: [],
  })

  assert.equal(result.available, true)
  assert.equal(result.hasSheet, false)
  assert.equal(result.createdAt, createdAt)
  assert.equal('updatedAt' in result, false)
})

test('presentCharacter marks linked characters and sheets correctly', () => {
  const updatedAt = new Date('2026-06-21T11:00:00.000Z')
  const campaigns = [{ id: 'campaign-character-1' }]

  const result = presentCharacter({
    id: 'character-1',
    name: 'Arion',
    avatarUrl: '/avatars/hooded-ranger.svg',
    bio: 'Guardiao do norte.',
    system: 'DND_5E',
    sheet: { version: 1 },
    createdAt: new Date('2026-06-21T10:00:00.000Z'),
    updatedAt,
    campaigns,
  })

  assert.equal(result.available, false)
  assert.equal(result.hasSheet, true)
  assert.equal(result.updatedAt, updatedAt)
  assert.equal(result.campaigns, campaigns)
})
