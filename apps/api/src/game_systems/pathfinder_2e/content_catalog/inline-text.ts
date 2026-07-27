import type { GameSystemContentLocale } from '../../catalog'
import { translatePathfinder2eTerm } from './translations/pt-BR/glossary'

export type Pathfinder2eInlineTextContext = {
  locale: GameSystemContentLocale
  itemLevel?: number
  itemRank?: number
  actorLevel?: number
  actorStrengthModifier?: number
}

const AREA_TYPE_PT_BR: Readonly<Record<string, string>> = {
  burst: 'explosão',
  cone: 'cone',
  emanation: 'emanação',
  line: 'linha',
}

function formatPtBrNumber(value: number) {
  return Number.isInteger(value)
    ? String(value)
    : value.toLocaleString('pt-BR', { maximumFractionDigits: 2 })
}

function formatTemplate(options: string, locale: GameSystemContentLocale) {
  const [type, ...properties] = options.split('|')
  const distance = properties
    .map((property) => property.split(':'))
    .find(([key]) => key === 'distance')?.[1]
  const numericDistance = distance === undefined ? null : Number(distance)

  if (!Number.isFinite(numericDistance)) {
    return locale === 'pt-BR' ? (AREA_TYPE_PT_BR[type] ?? type) : type
  }

  if (locale !== 'pt-BR') return `${numericDistance}-foot ${type}`

  const feet = numericDistance as number
  const meters = feet * 0.3
  return `${AREA_TYPE_PT_BR[type] ?? type} de ${formatPtBrNumber(feet)} pés (${formatPtBrNumber(meters)} metros)`
}

function evaluateArithmetic(expression: string): number | null {
  const matchedTokens = expression.match(/\d+(?:\.\d+)?|[()+\-*/]/g)
  if (!matchedTokens || matchedTokens.join('') !== expression.replace(/\s+/g, '')) return null
  const tokens = matchedTokens

  let index = 0

  function primary(): number | null {
    const token = tokens[index]
    if (token === undefined) return null

    if (token === '(') {
      index += 1
      const value = addition()
      if (tokens[index] !== ')') return null
      index += 1
      return value
    }

    if (token === '+' || token === '-') {
      index += 1
      const value = primary()
      if (value === null) return null
      return token === '-' ? -value : value
    }

    const value = Number(token)
    if (!Number.isFinite(value)) return null
    index += 1
    return value
  }

  function multiplication(): number | null {
    let value = primary()
    if (value === null) return null

    while (tokens[index] === '*' || tokens[index] === '/') {
      const operator = tokens[index]
      index += 1
      const right = primary()
      if (right === null || (operator === '/' && right === 0)) return null
      value = operator === '*' ? value * right : value / right
    }

    return value
  }

  function addition(): number | null {
    let value = multiplication()
    if (value === null) return null

    while (tokens[index] === '+' || tokens[index] === '-') {
      const operator = tokens[index]
      index += 1
      const right = multiplication()
      if (right === null) return null
      value = operator === '+' ? value + right : value - right
    }

    return value
  }

  const value = addition()
  return value !== null && index === tokens.length && Number.isFinite(value) ? value : null
}

function resolveArithmeticFunctions(value: string) {
  let resolved = value
  let previous = ''

  while (resolved !== previous) {
    previous = resolved
    resolved = resolved
      .replace(/\b(floor|ceil)\(([-+*/.\d\s]+)\)/gi, (match, operation: string, expression: string) => {
        const result = evaluateArithmetic(expression)
        if (result === null) return match
        return String(operation.toLowerCase() === 'floor' ? Math.floor(result) : Math.ceil(result))
      })
      .replace(/\bmax\(([-+*/.\d\s]+),\s*([-+*/.\d\s]+)\)/gi, (match, left: string, right: string) => {
        const leftValue = evaluateArithmetic(left)
        const rightValue = evaluateArithmetic(right)
        return leftValue === null || rightValue === null ? match : String(Math.max(leftValue, rightValue))
      })
      .replace(/\(([-+*/.\d\s]+)\)/g, (match, expression: string) => {
        const result = evaluateArithmetic(expression)
        return result === null ? match : String(result)
      })
  }

  return resolved
}

function localizedDamageType(value: string, locale: GameSystemContentLocale) {
  const normalized = value.trim().toLowerCase()
  if (locale !== 'pt-BR') return normalized
  if (normalized === 'bleed') return 'sangramento'
  if (normalized === 'healing') return 'cura'
  if (normalized === 'persistent') return 'persistente'

  return translatePathfinder2eTerm(normalized, locale, {
    domain: 'SPELLS',
    category: 'damage-type',
  })
}

function formatDamageAnnotation(
  formula: string,
  annotation: string,
  locale: GameSystemContentLocale,
) {
  const tags = annotation
    .split('|')[0]
    .split(',')
    .map((tag) => tag.trim().toLowerCase())
    .filter(Boolean)
  const persistent = tags.includes('persistent') || tags.includes('persistente')
  const healing = tags.includes('healing') || tags.includes('cura')
  const type = tags.find((tag) => !['persistent', 'persistente', 'healing', 'cura'].includes(tag))

  if (locale !== 'pt-BR') {
    if (healing) return `${formula} healing`
    if (persistent && type) return `${formula} persistent ${localizedDamageType(type, locale)} damage`
    if (type === 'bleed') return `${formula} persistent bleed damage`
    return type ? `${formula} ${localizedDamageType(type, locale)} damage` : formula
  }

  if (healing) return `${formula} de cura`
  if (persistent && type) return `${formula} de dano persistente de ${localizedDamageType(type, locale)}`
  if (type === 'bleed') return `${formula} de dano persistente de sangramento`
  return type ? `${formula} de dano de ${localizedDamageType(type, locale)}` : formula
}

function replaceRuntimeVariables(value: string, context: Pathfinder2eInlineTextContext) {
  const replacements: Readonly<Record<string, number | undefined>> = {
    '@item.level': context.itemLevel,
    '@item.rank': context.itemRank,
    '@actor.level': context.actorLevel,
    '@actor.abilities.str.mod': context.actorStrengthModifier,
  }

  let resolved = value
  for (const [token, replacement] of Object.entries(replacements)) {
    if (replacement !== undefined) {
      resolved = resolved.replace(new RegExp(token.replaceAll('.', '\\.'), 'gi'), String(replacement))
    }
  }

  return resolved
}

function replaceUnknownRuntimeVariables(value: string, locale: GameSystemContentLocale) {
  return value.replace(/@[a-z][a-z0-9_.]*/gi, (token) => {
    const normalized = token.toLowerCase()
    if (normalized.includes('breathweapon') || normalized.includes('energygland')) {
      return locale === 'pt-BR' ? 'tipo de dano escolhido' : 'selected damage type'
    }
    if (normalized.includes('abilities.str.mod')) {
      return locale === 'pt-BR' ? 'modificador de Força' : 'Strength modifier'
    }
    return locale === 'pt-BR' ? 'valor do efeito' : 'effect value'
  })
}

const CHECK_LABELS_PT_BR: Readonly<Record<string, string>> = {
  fortitude: 'Fortitude',
  reflex: 'Reflexos',
  reflexo: 'Reflexos',
  reflexos: 'Reflexos',
  roubo: 'Ladinagem',
  thevery: 'Ladinagem',
  thievery: 'Ladinagem',
  vontade: 'Vontade',
  will: 'Vontade',
}

function formatCheckMacro(options: string, locale: GameSystemContentLocale) {
  const parts = options.split(',').map((part) => part.trim()).filter(Boolean)
  const rawType = parts[0]?.toLocaleLowerCase(locale) ?? ''
  const normalizedType = rawType === 'thevery' || rawType === 'roubo' ? 'thievery' : rawType
  const difficultyClass = parts
    .map((part) => part.match(/^(?:dc|cd)\s*:\s*(\d+)$/i)?.[1])
    .find(Boolean)
  const basic = parts.some((part) => /^(?:basic|básico)$/i.test(part))
  const isSave = ['fortitude', 'reflex', 'reflexo', 'reflexos', 'will', 'vontade'].includes(rawType)

  if (locale !== 'pt-BR') {
    const label = normalizedType
      ? `${normalizedType.charAt(0).toUpperCase()}${normalizedType.slice(1)}`
      : 'Check'
    if (isSave) return `${basic ? 'basic ' : ''}DC ${difficultyClass ?? '?'} ${label} save`
    return `DC ${difficultyClass ?? '?'} ${label} check`
  }

  const label = CHECK_LABELS_PT_BR[rawType]
    ?? translatePathfinder2eTerm(normalizedType, locale, {
      domain: 'BESTIARY',
      category: 'skill',
    })
  const capitalizedLabel = label
    ? `${label.charAt(0).toLocaleUpperCase(locale)}${label.slice(1)}`
    : 'Teste'

  if (isSave) {
    return `salvamento ${basic ? 'básico ' : ''}de ${capitalizedLabel} CD ${difficultyClass ?? '?'}`
  }
  return `${capitalizedLabel} CD ${difficultyClass ?? '?'}`
}

function replaceCheckMacros(value: string, locale: GameSystemContentLocale) {
  const startPattern = /\b(?:check|teste|verificar)\s*\(/gi
  let resolved = value
  let match = startPattern.exec(resolved)

  while (match) {
    const openingParenthesis = resolved.indexOf('(', match.index)
    let depth = 1
    let cursor = openingParenthesis + 1

    while (cursor < resolved.length && depth > 0) {
      if (resolved[cursor] === '(') depth += 1
      if (resolved[cursor] === ')') depth -= 1
      cursor += 1
    }

    if (depth !== 0) break

    const options = resolved.slice(openingParenthesis + 1, cursor - 1)
    const trailingMarker = resolved.slice(cursor).match(/^\s+(?:save|salvamento|check|teste)\b/i)?.[0] ?? ''
    const replacement = formatCheckMacro(options, locale)
    resolved = `${resolved.slice(0, match.index)}${replacement}${resolved.slice(cursor + trailingMarker.length)}`
    startPattern.lastIndex = match.index + replacement.length
    match = startPattern.exec(resolved)
  }

  return resolved
}

const ACTION_LABELS_PT_BR: Readonly<Record<string, string>> = {
  escape: 'Escapar',
  hide: 'Esconder-se',
}

function formatActionCommand(value: string, locale: GameSystemContentLocale) {
  const [action = 'action', ...options] = value.trim().split(/\s+/)
  const difficultyClass = options
    .map((option) => option.match(/^(?:dc|cd)=(\d+)$/i)?.[1])
    .find(Boolean)
  const englishLabel = action
    .split('-')
    .map((part) => `${part.charAt(0).toUpperCase()}${part.slice(1)}`)
    .join(' ')
  const label = locale === 'pt-BR'
    ? ACTION_LABELS_PT_BR[action.toLowerCase()] ?? englishLabel
    : englishLabel

  return `${label}${difficultyClass ? ` ${locale === 'pt-BR' ? 'CD' : 'DC'} ${difficultyClass}` : ''}`
}

export function resolvePathfinder2eInlineText(
  value: string,
  context: Pathfinder2eInlineTextContext,
) {
  return replaceUnknownRuntimeVariables(
    replaceCheckMacros(
      resolveArithmeticFunctions(replaceRuntimeVariables(value, context)),
      context.locale,
    )
      .replace(/@Template\[([^\]\n]+)\]/gi, (_, options: string) => formatTemplate(options, context.locale))
      .replace(
        /\[\[\/(?:r|gmr|br)\s+([^\]#]+?)(?:\s+#[^\]]*)?\]\](?:\{[^}\n]*\})?/gi,
        (_, formula: string) => formula.trim(),
      )
      .replace(
        /\[\[\/act\s+([^\]]+)\]\](?:\{[^}\n]*\})?/gi,
        (_, action: string) => formatActionCommand(action, context.locale),
      )
      .replace(
        /\[\[\/([a-z][a-z0-9-]*)(?:\s+[^\]]*)?\]\](?:\{[^}\n]*\})?/gi,
        (_, command: string) => command.replaceAll('-', ' '),
      )
      .replace(
        /\(?(\b\d+(?:\.\d+)?(?:d\d+(?:[+-]\d+)?)?)\)?\[([^\]\n]+)\](?:\{[^}\n]*\})?(?:\s+(?:damage|de dano))?/gi,
        (_, formula: string, annotation: string) => formatDamageAnnotation(formula, annotation, context.locale),
      )
      .replace(/\|(?:options|opções):[^\]\n]+\]/gi, '')
      .replace(/\{[^}\n]*\}/g, '')
      .replace(/[ \t]{2,}/g, ' ')
      .trim(),
    context.locale,
  )
}
