import type { Pathfinder2eAttributeSlug, Pathfinder2eBuildChoices, Pathfinder2eSheetBase } from '../types'

export type Pathfinder2eAttributeScores = Pathfinder2eSheetBase['attributes']

const DEFAULT_ATTRIBUTE_SCORE = 10
const ATTRIBUTE_BONUS_STEP = 2

export const PATHFINDER_2E_ATTRIBUTE_KEY_BY_SLUG: Record<Pathfinder2eAttributeSlug, keyof Pathfinder2eAttributeScores> = {
  str: 'strength',
  dex: 'dexterity',
  con: 'constitution',
  int: 'intelligence',
  wis: 'wisdom',
  cha: 'charisma',
}

export function createDefaultPathfinder2eAttributeScores(): Pathfinder2eAttributeScores {
  return {
    strength: DEFAULT_ATTRIBUTE_SCORE,
    dexterity: DEFAULT_ATTRIBUTE_SCORE,
    constitution: DEFAULT_ATTRIBUTE_SCORE,
    intelligence: DEFAULT_ATTRIBUTE_SCORE,
    wisdom: DEFAULT_ATTRIBUTE_SCORE,
    charisma: DEFAULT_ATTRIBUTE_SCORE,
  }
}

function applyAttributeChange(
  scores: Pathfinder2eAttributeScores,
  attribute: Pathfinder2eAttributeSlug,
  change: number,
): Pathfinder2eAttributeScores {
  const key = PATHFINDER_2E_ATTRIBUTE_KEY_BY_SLUG[attribute]

  return {
    ...scores,
    [key]: scores[key] + change,
  }
}

function applyAttributeChoices(
  scores: Pathfinder2eAttributeScores,
  choices: Record<string, Pathfinder2eAttributeSlug>,
  change: number,
) {
  return Object.values(choices).reduce(
    (nextScores, attribute) => applyAttributeChange(nextScores, attribute, change),
    scores,
  )
}

export function derivePathfinder2eAttributeScoresFromBuildChoices(
  buildChoices: Pathfinder2eBuildChoices,
): Pathfinder2eAttributeScores {
  let scores = createDefaultPathfinder2eAttributeScores()

  scores = applyAttributeChoices(scores, buildChoices.ancestry.boosts, ATTRIBUTE_BONUS_STEP)
  scores = applyAttributeChoices(scores, buildChoices.ancestry.flaws, -ATTRIBUTE_BONUS_STEP)
  scores = applyAttributeChoices(scores, buildChoices.background.boosts, ATTRIBUTE_BONUS_STEP)

  if (buildChoices.class.keyAbility) {
    scores = applyAttributeChange(scores, buildChoices.class.keyAbility, ATTRIBUTE_BONUS_STEP)
  }

  return scores
}
