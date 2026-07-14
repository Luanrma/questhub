import type { Pathfinder2eAttributes, Pathfinder2eProficiencyRank } from '../server/character-sheet/models'
import { getPathfinder2eProficiencyBonus } from './proficiency'
import { createRollOptions } from './rule-engine/roll-options'
import { applyStackingRules } from './rule-engine/modifiers'
import type { Modifier } from './rule-engine/modifiers'
import { resolveFlatModifiers } from './rule-engine/rule-elements/flat-modifier'
import type { UnknownRuleElement } from './rule-engine/rule-elements/flat-modifier'
import type { RollOptions } from './rule-engine/roll-options'

export type Pathfinder2eSavingThrowKey = 'fortitude' | 'reflex' | 'will'

/**
 * Atributo que cada salvamento usa, fonte unica para qualquer calculo que
 * precise ir de estatistica de salvamento ate pontuacao de atributo (antes
 * so existia hardcoded em Pathfinder2eSheetForm.tsx).
 */
export const PATHFINDER_2E_SAVING_THROW_ATTRIBUTE: Record<Pathfinder2eSavingThrowKey, keyof Pathfinder2eAttributes> = {
  fortitude: 'constitution',
  reflex: 'dexterity',
  will: 'wisdom',
}

/**
 * Selector real do compendio PF2e para um FlatModifier que se aplica aos
 * tres salvamentos ao mesmo tempo (ex.: "+1 status a todos os salvamentos"),
 * auditado em pf2e-master/packs. Distinto do selector especifico de cada
 * salvamento (`'fortitude'`/`'reflex'`/`'will'`).
 */
const ALL_SAVING_THROWS_SELECTOR = 'saving-throw'

export type Pathfinder2eSavingThrowInput = {
  level: number
  rank: Pathfinder2eProficiencyRank
  attributeModifier: number
  /**
   * Rule Elements brutos dos efeitos ativos do personagem
   * (.ai/game_systems/pathfinder_2e/character_effects/). Opcional: quando
   * omitido ou vazio, o calculo e identico a formula basica (proficiencia +
   * atributo), sem nenhum bonus do Rule Engine.
   */
  ruleElements?: UnknownRuleElement[]
  rollOptions?: RollOptions
}

export type Pathfinder2eSavingThrowBreakdown = {
  total: number
  rank: Pathfinder2eProficiencyRank
  proficiencyBonus: number
  attributeModifier: number
  /** Soma dos FlatModifiers de selector igual ao salvamento OU 'saving-throw', apos a regra real de stacking do PF2e. 0 quando `ruleElements` foi omitido. */
  ruleEngineBonus: number
  /** Os modifiers que efetivamente contaram para `ruleEngineBonus` (para breakdown/tooltip). */
  ruleEngineModifiers: Modifier[]
}

export function calculateSavingThrow(
  key: Pathfinder2eSavingThrowKey,
  input: Pathfinder2eSavingThrowInput,
): Pathfinder2eSavingThrowBreakdown {
  const proficiencyBonus = getPathfinder2eProficiencyBonus(input.level, input.rank)

  const { modifiers } = resolveFlatModifiers(input.ruleElements ?? [], input.rollOptions ?? createRollOptions([]))
  const relevantModifiers = modifiers.filter(
    (modifier) => modifier.selector === key || modifier.selector === ALL_SAVING_THROWS_SELECTOR,
  )
  const { total: ruleEngineBonus, applied: ruleEngineModifiers } = applyStackingRules(relevantModifiers)

  const total = proficiencyBonus + input.attributeModifier + ruleEngineBonus

  return {
    total,
    rank: input.rank,
    proficiencyBonus,
    attributeModifier: input.attributeModifier,
    ruleEngineBonus,
    ruleEngineModifiers,
  }
}
