import { testPredicate } from '../predicates'
import type { Predicate } from '../predicates'
import type { RollOptions } from '../roll-options'
import type { UnknownRuleElement } from './flat-modifier'

/**
 * Raw shape of a WeaponPotency Rule Element (audited from
 * pf2e-master/packs). Sets the potency rune bonus for an attack-roll
 * selector. Shares the same shape and skip semantics as Striking.
 */
export type WeaponPotencySource = {
  key: 'WeaponPotency'
  selector: string
  value: number | string
  predicate?: Predicate
}

export type SkippedWeaponPotency = {
  source: WeaponPotencySource
  reason: 'dynamic-value' | 'dynamic-selector' | 'predicate-not-satisfied'
}

export type ResolvedWeaponPotency = {
  selector: string
  value: number
}

export type WeaponPotencyResolution = {
  resolved: ResolvedWeaponPotency[]
  skipped: SkippedWeaponPotency[]
}

function isWeaponPotencySource(rule: UnknownRuleElement): rule is WeaponPotencySource {
  const value = (rule as { value?: unknown }).value
  return rule.key === 'WeaponPotency' && typeof (rule as { selector?: unknown }).selector === 'string' && (typeof value === 'number' || typeof value === 'string')
}

function containsDynamicSegment(value: string): boolean {
  return /\{[^}]*\}/.test(value)
}

export function resolveWeaponPotency(rules: UnknownRuleElement[], rollOptions: RollOptions): WeaponPotencyResolution {
  const resolved: ResolvedWeaponPotency[] = []
  const skipped: SkippedWeaponPotency[] = []

  for (const rule of rules) {
    if (!isWeaponPotencySource(rule)) continue

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
