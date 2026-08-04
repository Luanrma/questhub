import assert from 'node:assert/strict'
import test from 'node:test'
import { presentActorInventoryRecipient } from './actor-recipient-routes'

test('master-controlled actors are valid inventory recipients', () => {
  assert.deepEqual(
    presentActorInventoryRecipient({
      id: 'actor-master',
      name: 'Companheiro do Mestre',
      avatarUrl: null,
      controllerMember: {
        id: 'member-master',
        userId: 'user-master',
        role: 'MASTER',
        user: { email: 'master@example.com' },
      },
    }),
    {
      recipientActorId: 'actor-master',
      actor: {
        id: 'actor-master',
        name: 'Companheiro do Mestre',
        avatarUrl: null,
      },
      controller: {
        memberId: 'member-master',
        userId: 'user-master',
        email: 'master@example.com',
        role: 'MASTER',
      },
    },
  )
})

test('actors without a controller remain valid inventory recipients', () => {
  assert.deepEqual(
    presentActorInventoryRecipient({
      id: 'actor-unassigned',
      name: 'Baú da campanha',
      avatarUrl: null,
      controllerMember: null,
    }),
    {
      recipientActorId: 'actor-unassigned',
      actor: {
        id: 'actor-unassigned',
        name: 'Baú da campanha',
        avatarUrl: null,
      },
      controller: null,
    },
  )
})
