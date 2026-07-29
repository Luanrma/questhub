export type LiveTokenPlacement = {
  sceneId: string
  hidden: boolean
  position: {
    x: number
    y: number
  }
  rotation: number
  layer: 'OBJECT' | 'TOKEN' | 'OVERLAY'
  blocksVisionAndLight: boolean
}

export function reconcileLiveTokenPlacement<
  Token extends { placement: LiveTokenPlacement | null },
>(
  token: Token,
  livePlacement: LiveTokenPlacement | null | undefined,
): Token {
  if (livePlacement === undefined) return token
  return { ...token, placement: livePlacement }
}
