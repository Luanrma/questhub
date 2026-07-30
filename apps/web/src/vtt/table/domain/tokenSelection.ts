import type { VttPlayerToken } from './types'

export type TokenSelectionPoint = {
  x: number
  y: number
}

export type TokenSelectionRectangle = {
  start: TokenSelectionPoint
  end: TokenSelectionPoint
}

export type TargetMarkerStyle = 'ARROWS' | 'RETICLE'

export function normalizeTargetMarkerStyle(value: unknown): TargetMarkerStyle {
  return value === 'RETICLE' ? 'RETICLE' : 'ARROWS'
}

export function toggleTargetsForSelection(currentTargetIds: string[], selectedTokenIds: string[]) {
  if (selectedTokenIds.length === 0) return currentTargetIds
  const selectedIds = new Set(selectedTokenIds)
  const allSelectedTokensAreTargets = selectedTokenIds.every((tokenId) => currentTargetIds.includes(tokenId))

  if (allSelectedTokensAreTargets) {
    return currentTargetIds.filter((tokenId) => !selectedIds.has(tokenId))
  }

  return [...currentTargetIds, ...selectedTokenIds.filter((tokenId) => !currentTargetIds.includes(tokenId))]
}

export function tokenIdsForContextAction(contextTokenId: string, selectedTokenIds: string[]) {
  return selectedTokenIds.includes(contextTokenId) ? selectedTokenIds : [contextTokenId]
}

export function translateTokenSelection(
  tokens: VttPlayerToken[],
  sourceTokenId: string,
  sourceDestination: VttPlayerToken['position'],
) {
  const sourceToken = tokens.find((token) => token.id === sourceTokenId)
  if (!sourceToken) return []

  const delta = {
    x: sourceDestination.x - sourceToken.position.x,
    y: sourceDestination.y - sourceToken.position.y,
  }

  return tokens.map((token) => ({
    token,
    position: {
      x: token.position.x + delta.x,
      y: token.position.y + delta.y,
    },
  }))
}

export function normalizeTokenSelectionRectangle(rectangle: TokenSelectionRectangle) {
  const left = Math.min(rectangle.start.x, rectangle.end.x)
  const top = Math.min(rectangle.start.y, rectangle.end.y)

  return {
    left,
    top,
    right: Math.max(rectangle.start.x, rectangle.end.x),
    bottom: Math.max(rectangle.start.y, rectangle.end.y),
    width: Math.abs(rectangle.end.x - rectangle.start.x),
    height: Math.abs(rectangle.end.y - rectangle.start.y),
  }
}

export function tokenIdsIntersectingSelectionRectangle(
  tokens: VttPlayerToken[],
  rectangle: TokenSelectionRectangle,
  gridSize: number,
  gridOffset: TokenSelectionPoint,
) {
  const selection = normalizeTokenSelectionRectangle(rectangle)

  return tokens
    .filter((token) => {
      const displaySize = gridSize * token.size
      const centerX = token.position.x * gridSize + gridOffset.x
      const centerY = token.position.y * gridSize + gridOffset.y
      const halfSize = displaySize / 2

      return (
        centerX + halfSize >= selection.left
        && centerX - halfSize <= selection.right
        && centerY + halfSize >= selection.top
        && centerY - halfSize <= selection.bottom
      )
    })
    .map((token) => token.id)
}
