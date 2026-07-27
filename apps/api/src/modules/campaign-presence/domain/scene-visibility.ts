type ControlledToken = {
  id: string
  actorId: string | null
  controllerUserId: string | null
}

export function selectPlayerVisibleSceneId(
  tokens: Iterable<ControlledToken>,
  tokenSceneIds: ReadonlyMap<string, string>,
  userId: string,
  mainActorId: string | null,
) {
  const placedControlledTokens = [...tokens].filter((token) => (
    token.controllerUserId === userId && tokenSceneIds.has(token.id)
  ))
  const preferredToken = mainActorId
    ? placedControlledTokens.find((token) => token.actorId === mainActorId)
    : null
  const selectedToken = preferredToken ?? placedControlledTokens[0]

  return selectedToken ? tokenSceneIds.get(selectedToken.id) ?? null : null
}
