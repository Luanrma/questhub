import type { Pathfinder2eProficiencyRank } from '../server/character-sheet/models'
import { getPathfinder2eProficiencyBonus } from './proficiency'
import { createRollOptions } from './rule-engine/roll-options'
import { applyStackingRules } from './rule-engine/modifiers'
import type { Modifier } from './rule-engine/modifiers'
import { resolveFlatModifiers } from './rule-engine/rule-elements/flat-modifier'
import type { UnknownRuleElement } from './rule-engine/rule-elements/flat-modifier'
import type { RollOptions } from './rule-engine/roll-options'

export type Pathfinder2eArmorCategory = 'unarmored' | 'light' | 'medium' | 'heavy'

export type Pathfinder2eArmorProficiencies = {
  unarmored: Pathfinder2eProficiencyRank
  light: Pathfinder2eProficiencyRank
  medium: Pathfinder2eProficiencyRank
  heavy: Pathfinder2eProficiencyRank
}

export type Pathfinder2eEquippedArmorFacts = {
  category: Pathfinder2eArmorCategory
  itemBonus: number
  dexCap: number | null
} | null

export type Pathfinder2eEquippedShieldFacts = {
  itemBonus: number
  raised: boolean
} | null

export type Pathfinder2eArmorClassInput = {
  level: number
  dexterityModifier: number
  armorProficiencies: Pathfinder2eArmorProficiencies
  equippedArmor: Pathfinder2eEquippedArmorFacts
  equippedShield: Pathfinder2eEquippedShieldFacts
  manualAdjustment: number
  /**
   * Rule Elements brutos dos efeitos ativos do personagem
   * (.ai/game_systems/pathfinder_2e/character_effects/). Opcional: quando
   * omitido ou vazio, o calculo e identico ao existente antes desta
   * integracao (nenhum chamador atual muda de resultado).
   */
  ruleElements?: UnknownRuleElement[]
  rollOptions?: RollOptions
}

export type Pathfinder2eArmorClassBreakdown = {
  total: number
  base: 10
  armorCategory: Pathfinder2eArmorCategory
  proficiencyRank: Pathfinder2eProficiencyRank
  proficiencyBonus: number
  dexterityModifier: number
  dexterityCap: number | null
  dexterityModifierApplied: number
  itemBonus: number
  shieldBonus: number
  manualAdjustment: number
  /** Soma dos FlatModifiers de selector 'ac' vindos de efeitos ativos, apos a regra real de stacking do PF2e. 0 quando `ruleElements` foi omitido. */
  ruleEngineBonus: number
  /** Os modifiers que efetivamente contaram para `ruleEngineBonus` (para breakdown/tooltip). */
  ruleEngineModifiers: Modifier[]
}

const KNOWN_ARMOR_CATEGORIES: readonly Pathfinder2eArmorCategory[] = ['unarmored', 'light', 'medium', 'heavy']

/**
 * Categoria desconhecida, ausente ou de item legado/custom cai em
 * `'unarmored'` — fallback seguro documentado em
 * .ai/game_systems/pathfinder_2e/armor_class/specs.md secao 4.
 */
export function normalizePathfinder2eArmorCategory(category: string | null | undefined): Pathfinder2eArmorCategory {
  return (KNOWN_ARMOR_CATEGORIES as readonly string[]).includes(category ?? '')
    ? (category as Pathfinder2eArmorCategory)
    : 'unarmored'
}

export function calculateArmorClass(input: Pathfinder2eArmorClassInput): Pathfinder2eArmorClassBreakdown {
  const armorCategory = input.equippedArmor?.category ?? 'unarmored'
  const proficiencyRank = input.armorProficiencies[armorCategory]
  const proficiencyBonus = getPathfinder2eProficiencyBonus(input.level, proficiencyRank)

  const dexterityCap = input.equippedArmor?.dexCap ?? null
  const dexterityModifierApplied =
    dexterityCap === null ? input.dexterityModifier : Math.min(input.dexterityModifier, dexterityCap)

  const itemBonus = input.equippedArmor?.itemBonus ?? 0
  const shieldBonus = input.equippedShield?.raised ? input.equippedShield.itemBonus : 0

  const { modifiers } = resolveFlatModifiers(input.ruleElements ?? [], input.rollOptions ?? createRollOptions([]))
  const acModifiers = modifiers.filter((modifier) => modifier.selector === 'ac')
  const { total: ruleEngineBonus, applied: ruleEngineModifiers } = applyStackingRules(acModifiers)

  const total =
    10 + dexterityModifierApplied + proficiencyBonus + itemBonus + shieldBonus + input.manualAdjustment + ruleEngineBonus

  return {
    total,
    base: 10,
    armorCategory,
    proficiencyRank,
    proficiencyBonus,
    dexterityModifier: input.dexterityModifier,
    dexterityCap,
    dexterityModifierApplied,
    itemBonus,
    shieldBonus,
    manualAdjustment: input.manualAdjustment,
    ruleEngineBonus,
    ruleEngineModifiers,
  }
}
