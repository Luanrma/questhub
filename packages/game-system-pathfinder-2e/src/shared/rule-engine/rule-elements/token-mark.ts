import { testPredicate } from '../predicates'
import type { Predicate } from '../predicates'
import type { RollOptions } from '../roll-options'
import type { UnknownRuleElement } from './flat-modifier'

/** Raw shape of a TokenMark Rule Element (audited from pf2e-master/packs). */
export type TokenMarkSource = {
  key: 'TokenMark'
  slug: string
  predicate?: Predicate
}

export type SkippedTokenMark = {
  source: TokenMarkSource
  reason: 'predicate-not-satisfied'
}

export type TokenMarkResolution = {
  resolved: string[]
  skipped: SkippedTokenMark[]
}

function isTokenMarkSource(rule: UnknownRuleElement): rule is TokenMarkSource {
  return rule.key === 'TokenMark' && typeof (rule as { slug?: unknown }).slug === 'string'
}

export function resolveTokenMarks(rules: UnknownRuleElement[], rollOptions: RollOptions): TokenMarkResolution {
  const resolved: string[] = []
  const skipped: SkippedTokenMark[] = []

  for (const rule of rules) {
    if (!isTokenMarkSource(rule)) continue

    if (rule.predicate && !testPredicate(rule.predicate, rollOptions)) {
      skipped.push({ source: rule, reason: 'predicate-not-satisfied' })
      continue
    }

    resolved.push(rule.slug)
  }

  return { resolved, skipped }
}
