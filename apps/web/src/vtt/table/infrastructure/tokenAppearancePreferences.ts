import { defaultTokenColor, isTokenColor } from '../domain/tokenAppearance'

const tokenColorPreferenceKey = 'questhub:vtt:last-token-color'

export function getLastTokenColor(): string {
  try {
    const color = window.localStorage.getItem(tokenColorPreferenceKey)
    return color && isTokenColor(color) ? color : defaultTokenColor
  } catch {
    return defaultTokenColor
  }
}

export function saveLastTokenColor(color: string): void {
  if (!isTokenColor(color)) return
  try {
    window.localStorage.setItem(tokenColorPreferenceKey, color)
  } catch {
    // A preferencia e opcional; o Token continua persistindo sua propria cor.
  }
}
