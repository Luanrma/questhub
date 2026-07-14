import type { Pathfinder2eProficiencyRank } from '../server/character-sheet/models'
import { getPathfinder2eProficiencyBonus } from './proficiency'
import { createRollOptions } from './rule-engine/roll-options'
import { applyStackingRules } from './rule-engine/modifiers'
import type { Modifier } from './rule-engine/modifiers'
import { resolveFlatModifiers } from './rule-engine/rule-elements/flat-modifier'
import type { UnknownRuleElement } from './rule-engine/rule-elements/flat-modifier'
import type { RollOptions } from './rule-engine/roll-options'

/**
 * Selector real do compendio PF2e para um FlatModifier que afeta a
 * Dificuldade de Conjuracao (Spell DC), auditado em pf2e-master/packs.
 */
const SPELL_DC_SELECTOR = 'spell-dc'

export type Pathfinder2eSpellDCInput = {
  level: number
  rank: Pathfinder2eProficiencyRank
  attributeModifier: number
  /**
   * Rule Elements brutos dos efeitos ativos do conjurador. Opcional: quando
   * omitido ou vazio, o calculo e identico a formula basica (10 +
   * proficiencia + atributo), sem nenhum bonus do Rule Engine.
   */
  ruleElements?: UnknownRuleElement[]
  rollOptions?: RollOptions
}

export type Pathfinder2eSpellDCBreakdown = {
  total: number
  rank: Pathfinder2eProficiencyRank
  proficiencyBonus: number
  attributeModifier: number
  ruleEngineBonus: number
  ruleEngineModifiers: Modifier[]
}

export function calculateSpellDC(input: Pathfinder2eSpellDCInput): Pathfinder2eSpellDCBreakdown {
  const proficiencyBonus = getPathfinder2eProficiencyBonus(input.level, input.rank)

  const { modifiers } = resolveFlatModifiers(input.ruleElements ?? [], input.rollOptions ?? createRollOptions([]))
  const relevantModifiers = modifiers.filter((modifier) => modifier.selector === SPELL_DC_SELECTOR)
  const { total: ruleEngineBonus, applied: ruleEngineModifiers } = applyStackingRules(relevantModifiers)

  const total = 10 + proficiencyBonus + input.attributeModifier + ruleEngineBonus

  return {
    total,
    rank: input.rank,
    proficiencyBonus,
    attributeModifier: input.attributeModifier,
    ruleEngineBonus,
    ruleEngineModifiers,
  }
}
