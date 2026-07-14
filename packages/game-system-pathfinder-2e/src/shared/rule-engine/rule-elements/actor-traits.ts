import { testPredicate } from '../predicates'
import type { Predicate } from '../predicates'
import type { RollOptions } from '../roll-options'
import type { UnknownRuleElement } from './flat-modifier'

/**
 * Raw shape of an ActorTraits Rule Element (audited from
 * pf2e-master/packs and cross checked against
 * pf2e-master/src/module/rules/rule-element/actor-traits.ts). The real
 * system also pushes a `self:trait:<trait>` roll option per added trait;
 * that cross-family wiring is out of scope here — this resolver only
 * decides which traits would be added/removed.
 */
export type ActorTraitsSource = {
  key: 'ActorTraits'
  add?: string[]
  remove?: string[]
  predicate?: Predicate
}

export type SkippedActorTraits = {
  source: ActorTraitsSource
  reason: 'predicate-not-satisfied'
}

export type ResolvedActorTraits = {
  add: string[]
  remove: string[]
}

export type ActorTraitsResolution = {
  resolved: ResolvedActorTraits[]
  skipped: SkippedActorTraits[]
}

function isActorTraitsSource(rule: UnknownRuleElement): rule is ActorTraitsSource {
  return rule.key === 'ActorTraits'
}

export function resolveActorTraits(rules: UnknownRuleElement[], rollOptions: RollOptions): ActorTraitsResolution {
  const resolved: ResolvedActorTraits[] = []
  const skipped: SkippedActorTraits[] = []

  for (const rule of rules) {
    if (!isActorTraitsSource(rule)) continue

    if (rule.predicate && !testPredicate(rule.predicate, rollOptions)) {
      skipped.push({ source: rule, reason: 'predicate-not-satisfied' })
      continue
    }

    resolved.push({ add: rule.add ?? [], remove: rule.remove ?? [] })
  }

  return { resolved, skipped }
}
