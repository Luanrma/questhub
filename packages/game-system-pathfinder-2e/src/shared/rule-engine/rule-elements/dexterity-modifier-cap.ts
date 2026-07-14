import { testPredicate } from '../predicates'
import type { Predicate } from '../predicates'
import type { RollOptions } from '../roll-options'
import type { UnknownRuleElement } from './flat-modifier'

/**
 * Raw shape of a DexterityModifierCap Rule Element (audited from
 * pf2e-master/packs and cross checked against
 * pf2e-master/src/module/rules/rule-element/dexterity-modifier-cap.ts).
 * The real schema has no `selector` field — this rule is always and only
 * about the Dexterity modifier cap applied to AC.
 */
export type DexterityModifierCapSource = {
  key: 'DexterityModifierCap'
  value: number | string
  predicate?: Predicate
}

export type SkippedDexterityModifierCap = {
  source: DexterityModifierCapSource
  reason: 'dynamic-value' | 'predicate-not-satisfied'
}

export type ResolvedDexterityModifierCap = {
  value: number
}

export type DexterityModifierCapResolution = {
  resolved: ResolvedDexterityModifierCap[]
  skipped: SkippedDexterityModifierCap[]
}

function isDexterityModifierCapSource(rule: UnknownRuleElement): rule is DexterityModifierCapSource {
  const value = (rule as { value?: unknown }).value
  return rule.key === 'DexterityModifierCap' && (typeof value === 'number' || typeof value === 'string')
}

export function resolveDexterityModifierCaps(rules: UnknownRuleElement[], rollOptions: RollOptions): DexterityModifierCapResolution {
  const resolved: ResolvedDexterityModifierCap[] = []
  const skipped: SkippedDexterityModifierCap[] = []

  for (const rule of rules) {
    if (!isDexterityModifierCapSource(rule)) continue

    if (rule.predicate && !testPredicate(rule.predicate, rollOptions)) {
      skipped.push({ source: rule, reason: 'predicate-not-satisfied' })
      continue
    }

    if (typeof rule.value !== 'number') {
      skipped.push({ source: rule, reason: 'dynamic-value' })
      continue
    }

    resolved.push({ value: rule.value })
  }

  return { resolved, skipped }
}
