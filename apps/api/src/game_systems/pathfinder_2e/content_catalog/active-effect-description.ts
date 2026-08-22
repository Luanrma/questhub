import type { Pathfinder2eContentLocale } from './models'
import { resolvePathfinder2eInlineText } from './inline-text'

const executableBlocks = /<(script|style)\b[^>]*>[\s\S]*?<\/\1>/gi
const lineBreakTags = /<br\s*\/?>|<\/(?:p|div|li|ul|ol|h[1-6]|tr|table)>|<hr\s*\/?>/gi
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

function stripHtml(value: string) {
  return value
    .replace(executableBlocks, '')
    .replace(lineBreakTags, '\n')
    .replace(listItemTags, '• ')
    .replace(remainingTags, '')
    .replace(htmlEntity, (_match, entity: string) => decodeEntity(entity))
}

function readableCheck(options: string, label: string | undefined, locale: Pathfinder2eContentLocale) {
  const parts = options.split('|').map((part) => part.trim()).filter(Boolean)
  const type = parts[0]?.toLowerCase() ?? 'check'
  const dc = parts.map((part) => part.match(/^(?:dc|cd):(\d+)$/i)?.[1]).find(Boolean)
  if (label?.trim()) return label.trim()

  if (locale === 'pt-BR') {
    const typeLabel = type === 'flat' ? 'teste simples' : `teste de ${type}`
    return `${typeLabel}${dc ? ` CD ${dc}` : ''}`
  }
  const typeLabel = type === 'flat' ? 'flat check' : `${type} check`
  return `${dc ? `DC ${dc} ` : ''}${typeLabel}`
}

function resolveFoundryReferences(value: string, locale: Pathfinder2eContentLocale) {
  return value
    .replace(/@(?:Compendium|UUID)\[[^\]\n]+\]\{([^}\n]+)\}/gi, (_match, label: string) => label.trim())
    .replace(/@Check\[([^\]\n]+)\](?:\{([^}\n]+)\})?/gi, (_match, options: string, label?: string) => (
      readableCheck(options, label, locale)
    ))
    .replace(/@(?:Compendium|UUID)\[[^\]\n]+\]/gi, locale === 'pt-BR' ? 'referência' : 'reference')
}

export function presentPathfinder2eActiveEffectDescription(
  value: string | null | undefined,
  locale: Pathfinder2eContentLocale,
) {
  if (!value?.trim()) return { description: '', descriptionBlocks: [] as string[] }

  const resolved = resolvePathfinder2eInlineText(
    resolveFoundryReferences(stripHtml(value), locale),
    { locale },
  )
    .replace(/\r\n?/g, '\n')
    .split('\n')
    .map((line) => line.replace(/[ \t]+/g, ' ').trim())
    .filter(Boolean)

  return {
    description: resolved.join('\n'),
    descriptionBlocks: resolved,
  }
}
