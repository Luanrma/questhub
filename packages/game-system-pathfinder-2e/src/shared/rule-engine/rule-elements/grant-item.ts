import { testPredicate } from '../predicates'
import type { Predicate } from '../predicates'
import type { RollOptions } from '../roll-options'
import type { UnknownRuleElement } from './flat-modifier'

/**
 * Raw shape of a GrantItem Rule Element as found in the PF2e compendium
 * (audited from pf2e-master/packs/spell-effects and conditions, and cross
 * checked against the real Foundry system source at
 * pf2e-master/src/module/rules/rule-element/grant-item/{schema,rule-element}.ts).
 */
export type GrantItemSource = {
  key: 'GrantItem'
  uuid: string
  predicate?: Predicate
  inMemoryOnly?: boolean
  allowDuplicate?: boolean
  reevaluateOnUpdate?: boolean
}

export type SkippedGrantItem = {
  source: GrantItemSource
  reason: 'dynamic-uuid' | 'predicate-not-satisfied'
}

export type GrantedItemReference = {
  uuid: string
  /** Virtual grant (e.g. a condition) instead of a persisted actor item. */
  inMemoryOnly: boolean
  /** Whether granting the same source item again is allowed. */
  allowDuplicate: boolean
  /** Whether the grant should be re-checked on every actor update. */
  reevaluateOnUpdate: boolean
}

export type GrantItemResolution = {
  granted: GrantedItemReference[]
  skipped: SkippedGrantItem[]
}

function isGrantItemSource(rule: UnknownRuleElement): rule is GrantItemSource {
  return rule.key === 'GrantItem' && typeof (rule as { uuid?: unknown }).uuid === 'string'
}

function isDynamicUuid(uuid: string): boolean {
  return uuid.startsWith('{') && uuid.endsWith('}')
}

/**
 * Reproduces the real GrantItem flag interaction from the Foundry PF2e
 * source (rule-element.ts): inMemoryOnly forces reevaluateOnUpdate and
 * allowDuplicate to true; otherwise reevaluateOnUpdate forces
 * allowDuplicate to false.
 */
function resolveGrantItemFlags(source: GrantItemSource): { inMemoryOnly: boolean; reevaluateOnUpdate: boolean; allowDuplicate: boolean } {
  const inMemoryOnly = source.inMemoryOnly ?? false
  let reevaluateOnUpdate = source.reevaluateOnUpdate ?? false
  let allowDuplicate = source.allowDuplicate ?? true

  if (inMemoryOnly) {
    reevaluateOnUpdate = true
    allowDuplicate = true
  } else if (reevaluateOnUpdate) {
    allowDuplicate = false
  }

  return { inMemoryOnly, reevaluateOnUpdate, allowDuplicate }
}

/**
 * Resolves the GrantItem Rule Elements found in a list of raw rule
 * elements against a roll option context. Does not resolve the target
 * UUID into a concrete document — that resolution already happens at
 * catalog import time (see the spell dependency graph in
 * packages/game-system-pathfinder-2e/src/server/spells). This function
 * only decides whether the grant fires right now and exposes its raw
 * target reference.
 */
export function resolveGrantItems(rules: UnknownRuleElement[], rollOptions: RollOptions): GrantItemResolution {
  const granted: GrantedItemReference[] = []
  const skipped: SkippedGrantItem[] = []

  for (const rule of rules) {
    if (!isGrantItemSource(rule)) continue

    if (rule.predicate && !testPredicate(rule.predicate, rollOptions)) {
      skipped.push({ source: rule, reason: 'predicate-not-satisfied' })
      continue
    }

    if (isDynamicUuid(rule.uuid)) {
      skipped.push({ source: rule, reason: 'dynamic-uuid' })
      continue
    }

    granted.push({ uuid: rule.uuid, ...resolveGrantItemFlags(rule) })
  }

  return { granted, skipped }
}
