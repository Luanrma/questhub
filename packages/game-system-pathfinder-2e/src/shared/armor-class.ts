import type { Pathfinder2eProficiencyRank } from '../server/character-sheet/models'

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
}

function getProficiencyBonus(level: number, rank: Pathfinder2eProficiencyRank): number {
  return rank === 0 ? 0 : level + rank
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
  const proficiencyBonus = getProficiencyBonus(input.level, proficiencyRank)

  const dexterityCap = input.equippedArmor?.dexCap ?? null
  const dexterityModifierApplied =
    dexterityCap === null ? input.dexterityModifier : Math.min(input.dexterityModifier, dexterityCap)

  const itemBonus = input.equippedArmor?.itemBonus ?? 0
  const shieldBonus = input.equippedShield?.raised ? input.equippedShield.itemBonus : 0

  const total =
    10 + dexterityModifierApplied + proficiencyBonus + itemBonus + shieldBonus + input.manualAdjustment

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
  }
}
