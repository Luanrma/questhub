export type Pathfinder2eSpellTargetProfile =
  | { kind: 'none' }
  | { kind: 'count'; min: number; max: number }
  | { kind: 'unsupported'; raw: string }

const WORD_NUMBERS: Record<string, number> = { one: 1, two: 2, three: 3 }

/**
 * Interpreta `system.target.value` (texto livre do compendio, 346 valores
 * distintos auditados em pf2e-master/packs/spells) e extrai apenas a
 * contagem de alvos, quando o formato e um dos padroes limpos reais:
 * "N creature(s)", "up to N creature(s)", "N or M creature(s)", "one/two/
 * three creature(s)". Cobre ~86% das ~860 magias com texto de alvo.
 *
 * String vazia (856 magias, a maioria com area ou auto-alvo) vira `'none'`
 * — nao ha selecao de alvo individual para conjurar. Qualquer padrao fora
 * dos listados (traits como "willing"/"ally"/"enemy", "any number of",
 * "N or more", clausulas compostas como "1 ally and 1 enemy") vira
 * `'unsupported'`: a UI nao exige nem bloqueia selecao de alvo, apenas nao
 * ajuda — nunca adivinha uma contagem.
 */
export function parsePathfinder2eSpellTargetCount(raw: string | undefined | null): Pathfinder2eSpellTargetProfile {
  const normalized = raw?.trim().toLowerCase() ?? ''
  if (!normalized) return { kind: 'none' }

  // Clausulas compostas ("1 ally and 1 enemy") nao sao uma unica contagem —
  // o leading-number generico abaixo pegaria so a primeira clausula e
  // mentiria sobre o total. Detectado com um caso real do compendio.
  if (normalized.includes(' and ')) return { kind: 'unsupported', raw: raw ?? '' }

  const upToMatch = normalized.match(/^up to (\d+)\b/)
  if (upToMatch) return { kind: 'count', min: 1, max: Number(upToMatch[1]) }

  const orRangeMatch = normalized.match(/^(\d+) or (\d+)\b/)
  if (orRangeMatch) return { kind: 'count', min: Number(orRangeMatch[1]), max: Number(orRangeMatch[2]) }

  if (/^\d+ or more\b/.test(normalized)) return { kind: 'unsupported', raw: raw ?? '' }

  const leadingNumberMatch = normalized.match(/^(\d+)\b/)
  if (leadingNumberMatch) {
    const count = Number(leadingNumberMatch[1])
    return { kind: 'count', min: count, max: count }
  }

  const wordMatch = normalized.match(/^(one|two|three)\b/)
  if (wordMatch) {
    const count = WORD_NUMBERS[wordMatch[1]]
    return { kind: 'count', min: count, max: count }
  }

  return { kind: 'unsupported', raw: raw ?? '' }
}
