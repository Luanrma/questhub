import { testPredicate } from '../predicates'
import type { Predicate } from '../predicates'
import type { RollOptions } from '../roll-options'
import type { UnknownRuleElement } from './flat-modifier'

/**
 * Raw shape of a MartialProficiency Rule Element (audited from
 * pf2e-master/packs and cross checked against
 * pf2e-master/src/module/rules/rule-element/martial-proficiency.ts).
 * `definition` is a *separate* predicate from the top-level `predicate`:
 * it matches which weapon/armor items the proficiency applies to (an
 * item-level roll-option domain this substrate has no context for), while
 * `predicate` gates whether the rule itself is active for the actor. Only
 * `predicate` is evaluated here; `definition` is passed through opaque.
 */
export type MartialProficiencySource = {
  key: 'MartialProficiency'
  slug?: string
  label?: string
  kind?: 'attack' | 'defense'
  definition: Predicate
  value: number | string
  sameAs?: string
  maxRank?: 'trained' | 'expert' | 'master' | 'legendary'
  predicate?: Predicate
}

export type SkippedMartialProficiency = {
  source: MartialProficiencySource
  reason: 'dynamic-value' | 'predicate-not-satisfied'
}

export type ResolvedMartialProficiency = {
  slug?: string
  kind: 'attack' | 'defense'
  definition: Predicate
  value: number
  sameAs?: string
  maxRank?: 'trained' | 'expert' | 'master' | 'legendary'
}

export type MartialProficiencyResolution = {
  resolved: ResolvedMartialProficiency[]
  skipped: SkippedMartialProficiency[]
}

function isMartialProficiencySource(rule: UnknownRuleElement): rule is MartialProficiencySource {
  const definition = (rule as { definition?: unknown }).definition
  const value = (rule as { value?: unknown }).value
  return rule.key === 'MartialProficiency' && Array.isArray(definition) && (typeof value === 'number' || typeof value === 'string')
}

export function resolveMartialProficiency(rules: UnknownRuleElement[], rollOptions: RollOptions): MartialProficiencyResolution {
  const resolved: ResolvedMartialProficiency[] = []
  const skipped: SkippedMartialProficiency[] = []

  for (const rule of rules) {
    if (!isMartialProficiencySource(rule)) continue

    if (rule.predicate && !testPredicate(rule.predicate, rollOptions)) {
      skipped.push({ source: rule, reason: 'predicate-not-satisfied' })
      continue
    }

    if (typeof rule.value !== 'number') {
      skipped.push({ source: rule, reason: 'dynamic-value' })
      continue
    }

    resolved.push({
      slug: rule.slug,
      kind: rule.kind ?? 'attack',
      definition: rule.definition,
      value: rule.value,
      sameAs: rule.sameAs,
      maxRank: rule.maxRank,
    })
  }

  return { resolved, skipped }
}
