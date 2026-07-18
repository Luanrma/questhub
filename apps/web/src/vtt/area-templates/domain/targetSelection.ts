export function toggleTargetSelection(selectedTokenIds: string[], tokenId: string, maximumTargets: number) {
  if (selectedTokenIds.includes(tokenId)) return selectedTokenIds.filter((selectedId) => selectedId !== tokenId)
  if (selectedTokenIds.length >= maximumTargets) return selectedTokenIds
  return [...selectedTokenIds, tokenId]
}

export function findIntersectingTargetTokenId(
  point: { x: number; y: number },
  tokens: Array<{ id: string; position: { x: number; y: number }; size: number }>,
  gridSize: number,
  markerRadius = 18,
) {
  let nearest: { id: string; distance: number } | null = null
  for (const token of tokens) {
    const center = { x: token.position.x * gridSize, y: token.position.y * gridSize }
    const distance = Math.hypot(point.x - center.x, point.y - center.y)
    if (distance > token.size * gridSize / 2 + markerRadius) continue
    if (!nearest || distance < nearest.distance) nearest = { id: token.id, distance }
  }
  return nearest?.id ?? null
}
