type ControlledToken = {
  id: string
  actorId: string | null
  controllerUserId: string | null
}

export function selectPlayerVisibleSceneId(
  tokens: Iterable<ControlledToken>,
  tokenSceneIds: ReadonlyMap<string, string>,
  userId: string,
) {
  const placedControlledTokens = [...tokens].filter((token) => (
    token.controllerUserId === userId && tokenSceneIds.has(token.id)
  ))
  const selectedToken = placedControlledTokens[0]

  return selectedToken ? tokenSceneIds.get(selectedToken.id) ?? null : null
}
