export type VttCombatParticipant = {
  tokenId: string
  actorId: string | null
  name: string
  avatarUrl: string | null
  color: string | null
  initiative: number
}

export type VttCombatState = {
  campaignId: string
  sceneId: string
  round: number
  turnCount: number
  activeTurnIndex: number
  status: 'ACTIVE'
  participants: VttCombatParticipant[]
}

export const combatInitiativeTotalLimits = { minimum: -10_000, maximum: 10_000 }
export const maximumCombatParticipantCount = 100

export function sortCombatParticipants(participants: VttCombatParticipant[]) {
  return participants
    .map((participant, index) => ({ participant, index }))
    .sort((left, right) => (
      right.participant.initiative - left.participant.initiative || left.index - right.index
    ))
    .map((item) => item.participant)
}

export function normalizeCombatTurnIndex(
  combat: VttCombatState,
  activeTokenId?: string | null,
): VttCombatState {
  if (!combat.participants.length) return { ...combat, activeTurnIndex: 0 }
  if (!activeTokenId) {
    return {
      ...combat,
      activeTurnIndex: Math.min(Math.max(combat.activeTurnIndex, 0), combat.participants.length - 1),
    }
  }

  const nextIndex = combat.participants.findIndex((participant) => participant.tokenId === activeTokenId)
  return {
    ...combat,
    activeTurnIndex: nextIndex >= 0 ? nextIndex : 0,
  }
}

export function addParticipantsToCombatState(
  combat: VttCombatState,
  addedParticipants: VttCombatParticipant[],
) {
  const activeTokenId = combat.participants[combat.activeTurnIndex]?.tokenId ?? null
  const existingTokenIds = new Set(combat.participants.map((participant) => participant.tokenId))
  const availableParticipantSlots = Math.max(0, maximumCombatParticipantCount - combat.participants.length)
  const uniqueAddedParticipants = addedParticipants.filter((participant) => {
    if (existingTokenIds.has(participant.tokenId)) return false
    existingTokenIds.add(participant.tokenId)
    return true
  }).slice(0, availableParticipantSlots)
  const participants = sortCombatParticipants([
    ...combat.participants,
    ...uniqueAddedParticipants,
  ])

  return normalizeCombatTurnIndex({ ...combat, participants }, activeTokenId)
}

export function removeParticipantsFromCombatState(
  combat: VttCombatState,
  removedTokenIds: string[],
) {
  const removedTokenIdSet = new Set(removedTokenIds)
  const activeTokenId = combat.participants[combat.activeTurnIndex]?.tokenId ?? null
  const participants = combat.participants.filter((participant) => !removedTokenIdSet.has(participant.tokenId))
  if (!participants.length) return null

  return normalizeCombatTurnIndex(
    { ...combat, participants },
    activeTokenId && removedTokenIdSet.has(activeTokenId) ? null : activeTokenId,
  )
}

export function adjustCombatInitiative(
  combat: VttCombatState,
  tokenId: string,
  initiativeAdjustment: number,
) {
  const activeTokenId = combat.participants[combat.activeTurnIndex]?.tokenId ?? null
  const participants = sortCombatParticipants(
    combat.participants.map((participant) => {
      if (participant.tokenId !== tokenId) return participant
      const initiative = participant.initiative + initiativeAdjustment
      if (initiative < combatInitiativeTotalLimits.minimum || initiative > combatInitiativeTotalLimits.maximum) {
        return participant
      }
      return { ...participant, initiative }
    }),
  )

  return normalizeCombatTurnIndex({ ...combat, participants }, activeTokenId)
}

export function advanceCombatTurn(combat: VttCombatState) {
  if (!combat.participants.length) return combat
  const isLastParticipant = combat.activeTurnIndex >= combat.participants.length - 1

  return {
    ...combat,
    round: isLastParticipant ? combat.round + 1 : combat.round,
    turnCount: combat.turnCount + 1,
    activeTurnIndex: isLastParticipant ? 0 : combat.activeTurnIndex + 1,
  }
}

export function rewindCombatTurn(combat: VttCombatState) {
  if (!combat.participants.length || combat.turnCount <= 1) return combat
  const isFirstParticipant = combat.activeTurnIndex <= 0

  return {
    ...combat,
    round: isFirstParticipant ? Math.max(1, combat.round - 1) : combat.round,
    turnCount: combat.turnCount - 1,
    activeTurnIndex: isFirstParticipant ? combat.participants.length - 1 : combat.activeTurnIndex - 1,
  }
}
