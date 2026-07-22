type ControlledToken = {
  id: string
  characterId: string | null
  controllerUserId: string | null
}

export function selectPlayerVisibleSceneId(
  tokens: Iterable<ControlledToken>,
  tokenSceneIds: ReadonlyMap<string, string>,
  userId: string,
  mainCharacterId: string | null,
) {
  const placedControlledTokens = [...tokens].filter((token) => (
    token.controllerUserId === userId && tokenSceneIds.has(token.id)
  ))
  const preferredToken = mainCharacterId
    ? placedControlledTokens.find((token) => token.characterId === mainCharacterId)
    : null
  const selectedToken = preferredToken ?? placedControlledTokens[0]

  return selectedToken ? tokenSceneIds.get(selectedToken.id) ?? null : null
}
