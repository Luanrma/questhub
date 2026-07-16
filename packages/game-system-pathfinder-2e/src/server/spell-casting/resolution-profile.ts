import type { Pathfinder2eSpellDefinition } from '../spells/models'
import type { Pathfinder2eSpellDamageComponent } from '../spells/models'
import type { Pathfinder2eSavingThrowKey } from '../../shared/saving-throws'
import { parseDiceFormula } from '../../../../game-system-core/src/shared/dice/dice-formula'
import type { DiceFormula } from '../../../../game-system-core/src/shared/dice/dice-formula'

export type Pathfinder2eSpellResolutionProfile =
  | { kind: 'none' }
  | { kind: 'basicSaveDamage'; formula: DiceFormula; damageType: string; statistic: Pathfinder2eSavingThrowKey }

export type Pathfinder2eSpellResolutionProfileOptions = {
  effectiveRank?: number
}

function addDiceFormulas(left: DiceFormula, right: DiceFormula): DiceFormula | null {
  if (left.kind === 'flat' && right.kind === 'flat') return { kind: 'flat', amount: left.amount + right.amount }

  if (left.kind === 'dice' && right.kind === 'flat') return { ...left, bonus: left.bonus + right.amount }
  if (left.kind === 'flat' && right.kind === 'dice') return { ...right, bonus: right.bonus + left.amount }

  if (left.kind === 'dice' && right.kind === 'dice' && left.sides === right.sides) {
    return { kind: 'dice', count: left.count + right.count, sides: left.sides, bonus: left.bonus + right.bonus }
  }

  return null
}

function multiplyDiceFormula(formula: DiceFormula, times: number): DiceFormula | null {
  if (times <= 0) return null
  if (formula.kind === 'flat') return { kind: 'flat', amount: formula.amount * times }
  return { kind: 'dice', count: formula.count * times, sides: formula.sides, bonus: formula.bonus * times }
}

function applyDamageHeightening(
  definition: Pathfinder2eSpellDefinition,
  damageKey: string,
  baseFormula: DiceFormula,
  effectiveRank: number | undefined,
): DiceFormula {
  if (effectiveRank === undefined || effectiveRank <= definition.rank) return baseFormula

  const heightening = definition.heightening
  let formula = baseFormula

  if (heightening.kind === 'INTERVAL') {
    const interval = heightening.everyRanks
    const extraRaw = heightening.damage?.[damageKey]
    if (!extraRaw || interval <= 0) return baseFormula

    const increments = Math.floor((effectiveRank - definition.rank) / interval)
    const extraFormula = parseDiceFormula(extraRaw)
    const multiplied = extraFormula ? multiplyDiceFormula(extraFormula, increments) : null
    const next = multiplied ? addDiceFormulas(formula, multiplied) : null
    return next ?? baseFormula
  }

  return formula
}

/**
 * Determina se uma magia tem uma rolagem de dano com salvamento basico
 * suportada nesta fatia de Resolution (.ai/game_systems/pathfinder_2e/resolution/).
 * Qualquer outro caso (sem salvamento, salvamento nao-basico, sem dano, mais
 * de um componente de dano, formula nao parseavel) retorna `{kind:'none'}`,
 * nunca aproximado — ver readme.md secao 3 para a lista completa de
 * exclusoes deliberadas.
 */
export function resolvePathfinder2eSpellResolutionProfile(
  definition: Pathfinder2eSpellDefinition | null,
  options: Pathfinder2eSpellResolutionProfileOptions = {},
): Pathfinder2eSpellResolutionProfile {
  if (!definition || definition.defense.kind !== 'SAVE' || !definition.defense.basic) return { kind: 'none' }

  const damageComponents = definition.damage.filter((component) => component.kind === 'DAMAGE')
  if (damageComponents.length !== 1) return { kind: 'none' }

  const damageComponent = damageComponents[0] as Pathfinder2eSpellDamageComponent
  const baseFormula = parseDiceFormula(damageComponent.formula)
  if (!baseFormula) return { kind: 'none' }

  const formula = applyDamageHeightening(definition, damageComponent.id, baseFormula, options.effectiveRank)

  return {
    kind: 'basicSaveDamage',
    formula,
    damageType: damageComponent.damageType,
    statistic: definition.defense.statistic.toLocaleLowerCase() as Pathfinder2eSavingThrowKey,
  }
}
