import { testPredicate } from '../predicates'
import type { Predicate } from '../predicates'
import type { RollOptions } from '../roll-options'
import type { UnknownRuleElement } from './flat-modifier'

/**
 * Raw shape of a Striking Rule Element (audited from pf2e-master/packs).
 * Sets the striking rune level (extra weapon damage dice) for a strike
 * selector. Most real examples resolve `value` from a formula
 * (`"ternary(gte(@item.level,9),3,...)"`); those are skipped, same as
 * FlatModifier's dynamic-value handling.
 */
export type StrikingSource = {
  key: 'Striking'
  selector: string
  value: number | string
  predicate?: Predicate
}

export type SkippedStriking = {
  source: StrikingSource
  reason: 'dynamic-value' | 'dynamic-selector' | 'predicate-not-satisfied'
}

export type ResolvedStriking = {
  selector: string
  value: number
}

export type StrikingResolution = {
  resolved: ResolvedStriking[]
  skipped: SkippedStriking[]
}

function isStrikingSource(rule: UnknownRuleElement): rule is StrikingSource {
  const value = (rule as { value?: unknown }).value
  return rule.key === 'Striking' && typeof (rule as { selector?: unknown }).selector === 'string' && (typeof value === 'number' || typeof value === 'string')
}

function containsDynamicSegment(value: string): boolean {
  return /\{[^}]*\}/.test(value)
}

export function resolveStriking(rules: UnknownRuleElement[], rollOptions: RollOptions): StrikingResolution {
  const resolved: ResolvedStriking[] = []
  const skipped: SkippedStriking[] = []

  for (const rule of rules) {
    if (!isStrikingSource(rule)) continue

    if (rule.predicate && !testPredicate(rule.predicate, rollOptions)) {
      skipped.push({ source: rule, reason: 'predicate-not-satisfied' })
      continue
    }

    if (containsDynamicSegment(rule.selector)) {
      skipped.push({ source: rule, reason: 'dynamic-selector' })
      continue
    }

    if (typeof rule.value !== 'number') {
      skipped.push({ source: rule, reason: 'dynamic-value' })
      continue
    }

    resolved.push({ selector: rule.selector, value: rule.value })
  }

  return { resolved, skipped }
}
