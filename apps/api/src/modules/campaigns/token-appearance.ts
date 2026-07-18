export const DEFAULT_TOKEN_COLOR = '#4f46e5'

export function normalizeTokenColor(input: {
  nextAvatarUrl: string | null
  requestedColor: string | null | undefined
  currentColor?: string | null
  avatarChanged?: boolean
}): string | null {
  if (input.requestedColor !== undefined) {
    return input.nextAvatarUrl === null && input.requestedColor === null
      ? input.currentColor ?? DEFAULT_TOKEN_COLOR
      : input.requestedColor
  }

  if (input.nextAvatarUrl !== null && input.avatarChanged) return null
  if (input.nextAvatarUrl === null) return input.currentColor ?? DEFAULT_TOKEN_COLOR
  return input.currentColor ?? null
}
