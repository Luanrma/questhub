import type { Pathfinder2eProficiencyRank } from '../character-sheet/models'
import type { Pathfinder2eSavingThrowKey } from '../../shared/saving-throws'
import { calculateSavingThrow } from '../../shared/saving-throws'
import { calculatePathfinder2eDegreeOfSuccess } from '../../shared/degree-of-success'
import type { Pathfinder2eDegreeOfSuccess } from '../../shared/degree-of-success'
import { applyPathfinder2eBasicSaveDamage } from '../../shared/basic-save-damage'
import type { UnknownRuleElement } from '../../shared/rule-engine/rule-elements/flat-modifier'

export type Pathfinder2eResolveTargetInput = {
  tokenId: string
  characterId: string
  name: string
  level: number
  rank: Pathfinder2eProficiencyRank
  attributeModifier: number
  ruleElements: UnknownRuleElement[]
}

export type Pathfinder2eResolveTargetResult = {
  tokenId: string
  characterId: string
  targetName: string
  saveStatistic: Pathfinder2eSavingThrowKey
  naturalRoll: number
  saveModifier: number
  saveTotal: number
  degree: Pathfinder2eDegreeOfSuccess
  damageApplied: number
}

/**
 * Rola o salvamento de cada alvo (d20 injetavel, um por alvo) contra um
 * unico Spell DC e um unico dano ja rolado (`baseDamage`), aplicando a
 * regra de salvamento basico do PF2e por alvo. Pura e testavel — quem
 * chama decide como aplicar `damageApplied` no HP real.
 */
export function resolvePathfinder2eBasicSaveDamage(input: {
  spellDC: number
  statistic: Pathfinder2eSavingThrowKey
  baseDamage: number
  targets: Pathfinder2eResolveTargetInput[]
  rollD20: () => number
}): Pathfinder2eResolveTargetResult[] {
  return input.targets.map((target) => {
    const save = calculateSavingThrow(input.statistic, {
      level: target.level,
      rank: target.rank,
      attributeModifier: target.attributeModifier,
      ruleElements: target.ruleElements,
    })
    const naturalRoll = input.rollD20()
    const saveTotal = naturalRoll + save.total
    const degree = calculatePathfinder2eDegreeOfSuccess({ naturalRoll, modifier: save.total, dc: input.spellDC })
    const damageApplied = applyPathfinder2eBasicSaveDamage(input.baseDamage, degree)

    return {
      tokenId: target.tokenId,
      characterId: target.characterId,
      targetName: target.name,
      saveStatistic: input.statistic,
      naturalRoll,
      saveModifier: save.total,
      saveTotal,
      degree,
      damageApplied,
    }
  })
}
