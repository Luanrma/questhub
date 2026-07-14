import { testPredicate } from '../predicates'
import type { Predicate } from '../predicates'
import type { RollOptions } from '../roll-options'
import type { UnknownRuleElement } from './flat-modifier'

/**
 * Immunity / Weakness / Resistance (IWR). Raw shapes audited from
 * pf2e-master/packs/spell-effects and conditions, cross checked against
 * the real Foundry system source at
 * pf2e-master/src/module/rules/rule-element/iwr/{base,immunity,weakness,resistance}.ts.
 * All three share the same base schema in the real system (mode/type/
 * exceptions/override), which is why they share helpers here.
 */
export type Pathfinder2eIwrMode = 'add' | 'remove'

export type ImmunitySource = {
  key: 'Immunity'
  type: string | string[]
  mode?: Pathfinder2eIwrMode
  predicate?: Predicate
  exceptions?: unknown[]
  override?: boolean
}

export type WeaknessSource = {
  key: 'Weakness'
  type: string | string[]
  value: number | string
  mode?: Pathfinder2eIwrMode
  predicate?: Predicate
  exceptions?: unknown[]
  override?: boolean
}

export type ResistanceSource = {
  key: 'Resistance'
  type: string | string[]
  value: number | string
  mode?: Pathfinder2eIwrMode
  predicate?: Predicate
  exceptions?: unknown[]
  doubleVs?: unknown[]
  override?: boolean
}

export type SkippedIwr<TSource> = {
  source: TSource
  reason: 'dynamic-type' | 'dynamic-value' | 'non-positive-value' | 'predicate-not-satisfied'
}

export type ResolvedImmunity = { type: string; mode: Pathfinder2eIwrMode; override: boolean; exceptions: string[] }
export type ResolvedWeakness = { type: string; value: number; mode: Pathfinder2eIwrMode; override: boolean; exceptions: string[] }
export type ResolvedResistance = { type: string; value: number; mode: Pathfinder2eIwrMode; override: boolean; exceptions: string[]; doubleVs: string[] }

function normalizeTypeList(type: string | string[]): string[] {
  return Array.isArray(type) ? type : [type]
}

function containsDynamicSegment(value: string): boolean {
  return /\{[^}]*\}/.test(value)
}

function stringEntries(list: unknown[] | undefined): string[] {
  return (list ?? []).filter((entry): entry is string => typeof entry === 'string')
}

function resolveNumericValue(value: number | string): number | null {
  return typeof value === 'number' ? Math.floor(value) : null
}

function isImmunitySource(rule: UnknownRuleElement): rule is ImmunitySource {
  const type = (rule as { type?: unknown }).type
  return rule.key === 'Immunity' && (typeof type === 'string' || Array.isArray(type))
}

function isWeaknessSource(rule: UnknownRuleElement): rule is WeaknessSource {
  const type = (rule as { type?: unknown }).type
  return rule.key === 'Weakness' && (typeof type === 'string' || Array.isArray(type)) && 'value' in rule
}

function isResistanceSource(rule: UnknownRuleElement): rule is ResistanceSource {
  const type = (rule as { type?: unknown }).type
  return rule.key === 'Resistance' && (typeof type === 'string' || Array.isArray(type)) && 'value' in rule
}

export function resolveImmunities(rules: UnknownRuleElement[], rollOptions: RollOptions): { resolved: ResolvedImmunity[]; skipped: SkippedIwr<ImmunitySource>[] } {
  const resolved: ResolvedImmunity[] = []
  const skipped: SkippedIwr<ImmunitySource>[] = []

  for (const rule of rules) {
    if (!isImmunitySource(rule)) continue

    if (rule.predicate && !testPredicate(rule.predicate, rollOptions)) {
      skipped.push({ source: rule, reason: 'predicate-not-satisfied' })
      continue
    }

    const types = normalizeTypeList(rule.type)
    if (types.some(containsDynamicSegment)) {
      skipped.push({ source: rule, reason: 'dynamic-type' })
      continue
    }

    const mode = rule.mode ?? 'add'
    const override = rule.override ?? false
    const exceptions = stringEntries(rule.exceptions)
    for (const type of types) resolved.push({ type, mode, override, exceptions })
  }

  return { resolved, skipped }
}

export function resolveWeaknesses(rules: UnknownRuleElement[], rollOptions: RollOptions): { resolved: ResolvedWeakness[]; skipped: SkippedIwr<WeaknessSource>[] } {
  const resolved: ResolvedWeakness[] = []
  const skipped: SkippedIwr<WeaknessSource>[] = []

  for (const rule of rules) {
    if (!isWeaknessSource(rule)) continue

    if (rule.predicate && !testPredicate(rule.predicate, rollOptions)) {
      skipped.push({ source: rule, reason: 'predicate-not-satisfied' })
      continue
    }

    const types = normalizeTypeList(rule.type)
    if (types.some(containsDynamicSegment)) {
      skipped.push({ source: rule, reason: 'dynamic-type' })
      continue
    }

    const value = resolveNumericValue(rule.value)
    if (value === null) {
      skipped.push({ source: rule, reason: 'dynamic-value' })
      continue
    }
    if (value <= 0) {
      skipped.push({ source: rule, reason: 'non-positive-value' })
      continue
    }

    const mode = rule.mode ?? 'add'
    const override = rule.override ?? false
    const exceptions = stringEntries(rule.exceptions)
    for (const type of types) resolved.push({ type, value, mode, override, exceptions })
  }

  return { resolved, skipped }
}

export function resolveResistances(rules: UnknownRuleElement[], rollOptions: RollOptions): { resolved: ResolvedResistance[]; skipped: SkippedIwr<ResistanceSource>[] } {
  const resolved: ResolvedResistance[] = []
  const skipped: SkippedIwr<ResistanceSource>[] = []

  for (const rule of rules) {
    if (!isResistanceSource(rule)) continue

    if (rule.predicate && !testPredicate(rule.predicate, rollOptions)) {
      skipped.push({ source: rule, reason: 'predicate-not-satisfied' })
      continue
    }

    const types = normalizeTypeList(rule.type)
    if (types.some(containsDynamicSegment)) {
      skipped.push({ source: rule, reason: 'dynamic-type' })
      continue
    }

    const value = resolveNumericValue(rule.value)
    if (value === null) {
      skipped.push({ source: rule, reason: 'dynamic-value' })
      continue
    }
    if (value <= 0) {
      skipped.push({ source: rule, reason: 'non-positive-value' })
      continue
    }

    const mode = rule.mode ?? 'add'
    const override = rule.override ?? false
    const exceptions = stringEntries(rule.exceptions)
    const doubleVs = stringEntries(rule.doubleVs)
    for (const type of types) resolved.push({ type, value, mode, override, exceptions, doubleVs })
  }

  return { resolved, skipped }
}
