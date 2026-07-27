export const defaultTokenColor = '#4f46e5'

export function tokenFallbackLetter(seed: string): string {
  let hash = 0
  for (const actor of seed) hash = Math.imul(hash, 31) + actor.charCodeAt(0)
  return String.fromCharCode(65 + ((hash >>> 0) % 26))
}

export function isTokenColor(value: string): boolean {
  return /^#[0-9a-fA-F]{6}$/.test(value)
}
