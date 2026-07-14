import { testPredicate } from '../predicates'
import type { Predicate } from '../predicates'
import type { RollOptions } from '../roll-options'
import type { UnknownRuleElement } from './flat-modifier'

/**
 * Raw shape of a Sense Rule Element (audited from pf2e-master/packs and
 * cross checked against pf2e-master/src/module/rules/rule-element/sense.ts).
 * Real defaults per that source: `range` resolves to Infinity (unlimited)
 * when omitted; `acuity` has no schema default, this resolver applies the
 * well-known PF2e default of 'precise' rather than trying to replicate the
 * mandatory-acuity-by-selector lookup table, which is out of scope.
 */
export type SenseAcuity = 'precise' | 'imprecise' | 'vague'

export type SenseSource = {
  key: 'Sense'
  selector: string
  predicate?: Predicate
  acuity?: SenseAcuity
  range?: number | string
  force?: boolean
}

export type SkippedSense = {
  source: SenseSource
  reason: 'dynamic-range' | 'predicate-not-satisfied'
}

export type ResolvedSense = {
  selector: string
  acuity: SenseAcuity
  range: number
  force: boolean
}

export type SenseResolution = {
  resolved: ResolvedSense[]
  skipped: SkippedSense[]
}

function isSenseSource(rule: UnknownRuleElement): rule is SenseSource {
  return rule.key === 'Sense' && typeof (rule as { selector?: unknown }).selector === 'string'
}

export function resolveSenses(rules: UnknownRuleElement[], rollOptions: RollOptions): SenseResolution {
  const resolved: ResolvedSense[] = []
  const skipped: SkippedSense[] = []

  for (const rule of rules) {
    if (!isSenseSource(rule)) continue

    if (rule.predicate && !testPredicate(rule.predicate, rollOptions)) {
      skipped.push({ source: rule, reason: 'predicate-not-satisfied' })
      continue
    }

    if (typeof rule.range === 'string') {
      skipped.push({ source: rule, reason: 'dynamic-range' })
      continue
    }

    resolved.push({
      selector: rule.selector,
      acuity: rule.acuity ?? 'precise',
      range: rule.range ?? Infinity,
      force: rule.force ?? false,
    })
  }

  return { resolved, skipped }
}
