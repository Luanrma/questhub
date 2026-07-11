import assert from 'node:assert/strict'
import { test } from 'node:test'
import { validatePathfinder2eIdentityWritePolicy } from './character-sheet-policy'

function sheet(identity: Record<string, unknown>) {
  return {
    system: 'PATHFINDER_2E',
    version: 3,
    data: {
      pathfinder2e: {
        identity,
      },
    },
  }
}

const completeIdentity = {
  level: 1,
  class: { source: 'catalog', id: 'alchemist', name: 'Alchemist' },
  ancestry: { source: 'catalog', id: 'athamaru', name: 'Athamaru' },
  heritage: { source: 'catalog', id: 'ardande', name: 'Ardande' },
  background: { source: 'catalog', id: 'able-carter', name: 'Able Carter' },
}

test('player owner must complete identity on first PF2e sheet save', () => {
  const result = validatePathfinder2eIdentityWritePolicy({
    previousSheet: null,
    nextSheet: sheet({ ...completeIdentity, heritage: null }),
    isOwner: true,
    isMaster: false,
  })

  assert.equal(result.ok, false)
  if (!result.ok) assert.equal(result.status, 400)
})

test('player owner can create complete identity once and cannot edit it after that', () => {
  assert.deepEqual(validatePathfinder2eIdentityWritePolicy({
    previousSheet: null,
    nextSheet: sheet(completeIdentity),
    isOwner: true,
    isMaster: false,
  }), { ok: true })

  const result = validatePathfinder2eIdentityWritePolicy({
    previousSheet: sheet(completeIdentity),
    nextSheet: sheet({
      ...completeIdentity,
      class: { source: 'catalog', id: 'wizard', name: 'Wizard' },
    }),
    isOwner: true,
    isMaster: false,
  })

  assert.equal(result.ok, false)
  if (!result.ok) assert.equal(result.status, 403)
})

test('active campaign master can create or edit player identity', () => {
  assert.deepEqual(validatePathfinder2eIdentityWritePolicy({
    previousSheet: sheet(completeIdentity),
    nextSheet: sheet({
      ...completeIdentity,
      class: { source: 'catalog', id: 'wizard', name: 'Wizard' },
    }),
    isOwner: false,
    isMaster: true,
  }), { ok: true })
})
