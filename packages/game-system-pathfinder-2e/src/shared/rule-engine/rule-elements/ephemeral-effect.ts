import { testPredicate } from '../predicates'
import type { Predicate } from '../predicates'
import type { RollOptions } from '../roll-options'
import type { UnknownRuleElement } from './flat-modifier'

/**
 * Raw shape of an EphemeralEffect Rule Element (audited from
 * pf2e-master/packs and cross checked against
 * pf2e-master/src/module/rules/rule-element/ephemeral-effect.ts, which
 * defaults `affects` to `'target'`). Grants a short-lived effect to
 * whichever side of a roll (`origin`/`target`) is specified, scoped to
 * specific roll selectors. Like GrantItem, this resolver does not resolve
 * `uuid` into a concrete document — that already happens at catalog
 * import time.
 */
export type EphemeralEffectSource = {
  key: 'EphemeralEffect'
  uuid: string
  selectors: string[]
  affects?: 'origin' | 'target'
  predicate?: Predicate
}

export type SkippedEphemeralEffect = {
  source: EphemeralEffectSource
  reason: 'dynamic-uuid' | 'predicate-not-satisfied'
}

export type ResolvedEphemeralEffect = {
  uuid: string
  selectors: string[]
  affects: 'origin' | 'target'
}

export type EphemeralEffectResolution = {
  resolved: ResolvedEphemeralEffect[]
  skipped: SkippedEphemeralEffect[]
}

function isEphemeralEffectSource(rule: UnknownRuleElement): rule is EphemeralEffectSource {
  const selectors = (rule as { selectors?: unknown }).selectors
  return rule.key === 'EphemeralEffect' && typeof (rule as { uuid?: unknown }).uuid === 'string' && Array.isArray(selectors)
}

function isDynamicUuid(uuid: string): boolean {
  return uuid.startsWith('{') && uuid.endsWith('}')
}

export function resolveEphemeralEffects(rules: UnknownRuleElement[], rollOptions: RollOptions): EphemeralEffectResolution {
  const resolved: ResolvedEphemeralEffect[] = []
  const skipped: SkippedEphemeralEffect[] = []

  for (const rule of rules) {
    if (!isEphemeralEffectSource(rule)) continue

    if (rule.predicate && !testPredicate(rule.predicate, rollOptions)) {
      skipped.push({ source: rule, reason: 'predicate-not-satisfied' })
      continue
    }

    if (isDynamicUuid(rule.uuid)) {
      skipped.push({ source: rule, reason: 'dynamic-uuid' })
      continue
    }

    resolved.push({ uuid: rule.uuid, selectors: rule.selectors, affects: rule.affects ?? 'target' })
  }

  return { resolved, skipped }
}
