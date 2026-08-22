const executableBlocks = /<(script|style)\b[^>]*>[\s\S]*?<\/\1>/gi
const lineBreakTags = /<br\s*\/?>|<\/(?:p|div|li|ul|ol|h[1-6]|tr|table)>/gi
const listItemTags = /<li\b[^>]*>/gi
const remainingTags = /<[^>]+>/g
const htmlEntity = /&(#x[0-9a-f]+|#\d+|amp|lt|gt|quot|apos|nbsp);/gi

function decodeEntity(entity: string): string {
  const normalized = entity.toLowerCase()
  if (normalized === 'amp') return '&'
  if (normalized === 'lt') return '<'
  if (normalized === 'gt') return '>'
  if (normalized === 'quot') return '"'
  if (normalized === 'apos') return "'"
  if (normalized === 'nbsp') return ' '

  const radix = normalized.startsWith('#x') ? 16 : 10
  const raw = normalized.startsWith('#x') ? normalized.slice(2) : normalized.slice(1)
  const codePoint = Number.parseInt(raw, radix)
  if (!Number.isFinite(codePoint) || codePoint < 0 || codePoint > 0x10ffff) return ''

  try {
    return String.fromCodePoint(codePoint)
  } catch {
    return ''
  }
}

export function normalizeActorEffectPresentationText(
  value: string | null | undefined,
): string | null {
  if (!value?.trim()) return null

  const normalized = value
    .replace(executableBlocks, '')
    .replace(lineBreakTags, '\n')
    .replace(listItemTags, '• ')
    .replace(remainingTags, '')
    .replace(htmlEntity, (_match, entity: string) => decodeEntity(entity))
    .replace(/\r\n?/g, '\n')
    .split('\n')
    .map((line) => line.replace(/[ \t]+/g, ' ').trim())
    .filter(Boolean)
    .join('\n')
    .trim()

  return normalized || null
}
