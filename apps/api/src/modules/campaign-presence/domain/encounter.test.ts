import assert from 'node:assert/strict'
import test from 'node:test'
import {
  addParticipantsToCombatState,
  adjustCombatInitiative,
  advanceCombatTurn,
  combatInitiativeTotalLimits,
  removeParticipantsFromCombatState,
  rewindCombatTurn,
  sortCombatParticipants,
  type VttCombatParticipant,
  type VttCombatState,
} from './encounter'

function participant(tokenId: string, initiative: number): VttCombatParticipant {
  return {
    tokenId,
    actorId: null,
    name: tokenId,
    avatarUrl: null,
    color: null,
    initiative,
  }
}

function combat(participants: VttCombatParticipant[]): VttCombatState {
  return {
    campaignId: 'campaign-1',
    sceneId: 'scene-1',
    round: 1,
    turnCount: 1,
    activeTurnIndex: 0,
    status: 'ACTIVE',
    participants,
  }
}

test('encounter sorts the highest initiative first and keeps ties stable', () => {
  const participants = [
    participant('low', 4),
    participant('first-tie', 18),
    participant('second-tie', 18),
  ]

  assert.deepEqual(
    sortCombatParticipants(participants).map((item) => item.tokenId),
    ['first-tie', 'second-tie', 'low'],
  )
})

test('manual adjustment is added to the current total and reorders participants', () => {
  const state = combat([participant('active', 12), participant('boosted', 4)])
  const updated = adjustCombatInitiative(state, 'boosted', 10)

  assert.deepEqual(updated.participants.map((item) => item.tokenId), ['boosted', 'active'])
  assert.equal(updated.participants[0].initiative, 14)
  assert.equal(updated.participants[updated.activeTurnIndex].tokenId, 'active')
  assert.equal(
    adjustCombatInitiative(
      combat([participant('bounded', combatInitiativeTotalLimits.maximum)]),
      'bounded',
      1,
    ).participants[0].initiative,
    combatInitiativeTotalLimits.maximum,
  )
})

test('participants can enter and leave an active encounter without duplicating tokens', () => {
  const state = combat([participant('active', 12), participant('existing', 8)])
  const added = addParticipantsToCombatState(state, [
    participant('new-highest', 20),
    participant('existing', 19),
  ])

  assert.deepEqual(added.participants.map((item) => item.tokenId), ['new-highest', 'active', 'existing'])
  assert.equal(added.participants[added.activeTurnIndex].tokenId, 'active')

  const removed = removeParticipantsFromCombatState(added, ['new-highest'])
  assert.deepEqual(removed?.participants.map((item) => item.tokenId), ['active', 'existing'])
  assert.equal(removeParticipantsFromCombatState(combat([participant('only', 10)]), ['only']), null)
})

test('turn progression counts every participant turn and wraps rounds', () => {
  const first = combat([participant('first', 20), participant('second', 10)])
  const second = advanceCombatTurn(first)
  const third = advanceCombatTurn(second)

  assert.deepEqual(
    { round: second.round, turnCount: second.turnCount, activeTurnIndex: second.activeTurnIndex },
    { round: 1, turnCount: 2, activeTurnIndex: 1 },
  )
  assert.deepEqual(
    { round: third.round, turnCount: third.turnCount, activeTurnIndex: third.activeTurnIndex },
    { round: 2, turnCount: 3, activeTurnIndex: 0 },
  )
  assert.deepEqual(rewindCombatTurn(third), second)
  assert.equal(rewindCombatTurn(first), first)
})
