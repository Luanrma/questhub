import type { VttPlayerToken } from './types'

export const maximumEncounterParticipantCount = 100

export function addEncounterTokenId(
  selectedTokenIds: string[],
  tokenId: string,
  maximumParticipants = maximumEncounterParticipantCount,
) {
  if (selectedTokenIds.includes(tokenId) || selectedTokenIds.length >= maximumParticipants) {
    return selectedTokenIds
  }

  return [...selectedTokenIds, tokenId]
}

export function removeEncounterTokenId(selectedTokenIds: string[], tokenId: string) {
  if (!selectedTokenIds.includes(tokenId)) return selectedTokenIds
  return selectedTokenIds.filter((selectedTokenId) => selectedTokenId !== tokenId)
}

export function resolveEncounterTokens(selectedTokenIds: string[], sceneTokens: VttPlayerToken[]) {
  const selectableTokensById = new Map(
    sceneTokens
      .filter((token) => !token.hidden)
      .map((token) => [token.id, token] as const),
  )

  return selectedTokenIds
    .map((tokenId) => selectableTokensById.get(tokenId))
    .filter((token): token is VttPlayerToken => Boolean(token))
    .slice(0, maximumEncounterParticipantCount)
}

export function reconcileEncounterTokenIds(selectedTokenIds: string[], sceneTokens: VttPlayerToken[]) {
  const resolvedTokenIds = resolveEncounterTokens(selectedTokenIds, sceneTokens).map((token) => token.id)
  const unchanged = resolvedTokenIds.length === selectedTokenIds.length
    && resolvedTokenIds.every((tokenId, index) => tokenId === selectedTokenIds[index])

  return unchanged ? selectedTokenIds : resolvedTokenIds
}
