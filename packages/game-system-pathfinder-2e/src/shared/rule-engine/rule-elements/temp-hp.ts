import { testPredicate } from '../predicates'
import type { Predicate } from '../predicates'
import type { RollOptions } from '../roll-options'
import type { UnknownRuleElement } from './flat-modifier'

/**
 * Raw shape of a TempHP Rule Element as found in the PF2e compendium
 * (audited from pf2e-master/packs/spell-effects and conditions). The vast
 * majority of real examples use a formula value (e.g. "@item.level"),
 * which this resolver does not evaluate — see `skipped`.
 */
export type TempHpSource = {
  key: 'TempHP'
  value: number | string
  predicate?: Predicate
}

export type SkippedTempHp = {
  source: TempHpSource
  reason: 'dynamic-value' | 'non-positive-value' | 'predicate-not-satisfied'
}

export type ResolvedTempHp = {
  value: number
}

export type TempHpResolution = {
  resolved: ResolvedTempHp[]
  skipped: SkippedTempHp[]
}

function isTempHpSource(rule: UnknownRuleElement): rule is TempHpSource {
  const value = (rule as { value?: unknown }).value
  return rule.key === 'TempHP' && (typeof value === 'number' || typeof value === 'string')
}

export function resolveTempHp(rules: UnknownRuleElement[], rollOptions: RollOptions): TempHpResolution {
  const resolved: ResolvedTempHp[] = []
  const skipped: SkippedTempHp[] = []

  for (const rule of rules) {
    if (!isTempHpSource(rule)) continue

    if (rule.predicate && !testPredicate(rule.predicate, rollOptions)) {
      skipped.push({ source: rule, reason: 'predicate-not-satisfied' })
      continue
    }

    if (typeof rule.value !== 'number') {
      skipped.push({ source: rule, reason: 'dynamic-value' })
      continue
    }

    const value = Math.floor(rule.value)
    if (value <= 0) {
      skipped.push({ source: rule, reason: 'non-positive-value' })
      continue
    }

    resolved.push({ value })
  }

  return { resolved, skipped }
}
