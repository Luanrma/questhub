import {
  getPathfinder2eAncestryHitPoints,
  getPathfinder2eClassHitPointsPerLevel,
} from './mechanical-catalog'
import type {
  Pathfinder2eCharacterSheetData,
  Pathfinder2eProficiencyRank,
  Pathfinder2eProficiencyValue,
} from './schema'

export type Pathfinder2eDerivedStatistic = {
  value: number
  attributeModifier: number
  proficiencyBonus: number
  bonus: number
}

export type Pathfinder2eDerivedCharacterSheet = {
  mechanics: {
    ancestryHitPoints: number
    classHitPointsPerLevel: number
  }
  hitPoints: {
    maximum: number
  }
  armorClass: {
    value: number
    dexterityModifier: number
    proficiencyBonus: number
    bonus: number
    armorCategory: 'unarmored'
  }
  initiative: {
    value: number
    source: 'perception'
    sourceValue: number
    bonus: number
  }
  perception: Pathfinder2eDerivedStatistic
  savingThrows: {
    fortitude: Pathfinder2eDerivedStatistic
    reflex: Pathfinder2eDerivedStatistic
    will: Pathfinder2eDerivedStatistic
  }
  skills: {
    [Key in keyof Pathfinder2eCharacterSheetData['skills']]: Pathfinder2eDerivedStatistic
  }
}

const skillAttributeMap: {
  [Key in keyof Pathfinder2eCharacterSheetData['skills']]: keyof Pathfinder2eCharacterSheetData['attributes']
} = {
  acrobatics: 'dexterity',
  arcana: 'intelligence',
  athletics: 'strength',
  crafting: 'intelligence',
  deception: 'charisma',
  diplomacy: 'charisma',
  intimidation: 'charisma',
  medicine: 'wisdom',
  nature: 'wisdom',
  occultism: 'intelligence',
  performance: 'charisma',
  religion: 'wisdom',
  society: 'intelligence',
  stealth: 'dexterity',
  survival: 'wisdom',
  thievery: 'dexterity',
}

export function calculatePathfinder2eProficiencyBonus(level: number, rank: Pathfinder2eProficiencyRank) {
  return rank === 0 ? 0 : level + rank
}

function deriveStatistic(
  level: number,
  attributeModifier: number,
  proficiency: Pathfinder2eProficiencyValue,
): Pathfinder2eDerivedStatistic {
  const proficiencyBonus = calculatePathfinder2eProficiencyBonus(level, proficiency.rank)
  return {
    value: attributeModifier + proficiencyBonus + proficiency.bonus,
    attributeModifier,
    proficiencyBonus,
    bonus: proficiency.bonus,
  }
}

export function derivePathfinder2eCharacterSheet(data: Pathfinder2eCharacterSheetData) {
  const warnings: string[] = []
  const level = data.identity.level
  const ancestryHitPoints = getPathfinder2eAncestryHitPoints(data.identity.ancestry)
  const classHitPointsPerLevel = getPathfinder2eClassHitPointsPerLevel(data.identity.class)

  if (!data.identity.ancestry) warnings.push('Selecione uma ancestralidade para calcular a parcela ancestral de PV.')
  if (!data.identity.class) warnings.push('Selecione uma classe para calcular os PV recebidos por nivel.')

  const hitPointsMaximum = Math.max(
    0,
    ancestryHitPoints
      + level * (classHitPointsPerLevel + data.attributes.constitution)
      + data.hitPoints.bonus,
  )

  if (data.hitPoints.current > hitPointsMaximum) {
    warnings.push('A vida atual esta acima da vida maxima calculada.')
  }

  const perception = deriveStatistic(level, data.attributes.wisdom, data.perception)
  const fortitude = deriveStatistic(level, data.attributes.constitution, data.savingThrows.fortitude)
  const reflex = deriveStatistic(level, data.attributes.dexterity, data.savingThrows.reflex)
  const will = deriveStatistic(level, data.attributes.wisdom, data.savingThrows.will)

  const skills = Object.fromEntries(
    (Object.keys(skillAttributeMap) as Array<keyof typeof skillAttributeMap>).map((skill) => [
      skill,
      deriveStatistic(level, data.attributes[skillAttributeMap[skill]], data.skills[skill]),
    ]),
  ) as Pathfinder2eDerivedCharacterSheet['skills']

  const armorProficiencyBonus = calculatePathfinder2eProficiencyBonus(
    level,
    data.armorProficiencies.unarmored,
  )
  const armorClass = {
    value: 10 + data.attributes.dexterity + armorProficiencyBonus + data.armorClass.bonus,
    dexterityModifier: data.attributes.dexterity,
    proficiencyBonus: armorProficiencyBonus,
    bonus: data.armorClass.bonus,
    armorCategory: 'unarmored' as const,
  }

  const derived: Pathfinder2eDerivedCharacterSheet = {
    mechanics: {
      ancestryHitPoints,
      classHitPointsPerLevel,
    },
    hitPoints: {
      maximum: hitPointsMaximum,
    },
    armorClass,
    initiative: {
      value: perception.value + data.initiative.bonus,
      source: 'perception',
      sourceValue: perception.value,
      bonus: data.initiative.bonus,
    },
    perception,
    savingThrows: {
      fortitude,
      reflex,
      will,
    },
    skills,
  }

  return { derived, warnings }
}
