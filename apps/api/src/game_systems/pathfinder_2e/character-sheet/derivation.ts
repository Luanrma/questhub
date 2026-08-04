import {
  getPathfinder2eAncestryMechanics,
  getPathfinder2eBackgroundMechanics,
  getPathfinder2eClassMechanics,
  getPathfinder2eAncestryHitPoints,
  getPathfinder2eClassHitPointsPerLevel,
} from './mechanical-catalog'
import { isPathfinder2eHeritageCompatible } from './options'
import type {
  Pathfinder2eCharacterSheetData,
  Pathfinder2eProficiencyRank,
  Pathfinder2eProficiencyValue,
} from './schema'

export type Pathfinder2eArmorCategory = 'unarmored' | 'light' | 'medium' | 'heavy'

export type Pathfinder2eEquippedArmor = {
  name: string
  category: Pathfinder2eArmorCategory
  armorClassBonus: number
  dexterityCap: number
}

export type Pathfinder2eCharacterSheetDerivationContext = {
  armor?: Pathfinder2eEquippedArmor | null
}

export type Pathfinder2eDerivedStatistic = {
  value: number
  attributeModifier: number
  proficiencyBonus: number
  bonus: number
  manualRank: Pathfinder2eProficiencyRank
  grantedRank: Pathfinder2eProficiencyRank
  effectiveRank: Pathfinder2eProficiencyRank
  grantSources: Pathfinder2eProficiencyGrantSource[]
}

export type Pathfinder2eProficiencyGrantSource = 'background' | 'class'

export type Pathfinder2eDerivedProficiency = {
  manualRank: Pathfinder2eProficiencyRank
  grantedRank: Pathfinder2eProficiencyRank
  effectiveRank: Pathfinder2eProficiencyRank
  grantSources: Pathfinder2eProficiencyGrantSource[]
}

export type Pathfinder2eDerivedCharacterSheet = {
  mechanics: {
    ancestryHitPoints: number
    ancestrySpeedFeet: number
    classHitPointsPerLevel: number
    classAdditionalTrainedSkills: number
    backgroundTrainedSkills: string[]
    backgroundLoreSkills: string[]
  }
  movement: {
    valueMeters: number
    ancestryBaseFeet: number
    manualOverride: boolean
  }
  hitPoints: {
    maximum: number
  }
  armorClass: {
    value: number
    rawDexterityModifier: number
    dexterityModifier: number
    dexterityCap: number | null
    proficiencyBonus: number
    itemBonus: number
    bonus: number
    armorCategory: Pathfinder2eArmorCategory
    sourceName: string | null
    proficiency: Pathfinder2eDerivedProficiency
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
  armorProficiencies: {
    [Key in keyof Pathfinder2eCharacterSheetData['armorProficiencies']]: Pathfinder2eDerivedProficiency
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

type ProficiencyGrant = {
  rank: Pathfinder2eProficiencyRank
  source: Pathfinder2eProficiencyGrantSource
}

function toProficiencyRank(value: number | undefined): Pathfinder2eProficiencyRank {
  return value === 2 || value === 4 || value === 6 || value === 8 ? value : 0
}

function deriveProficiency(
  manualRank: Pathfinder2eProficiencyRank,
  grants: ProficiencyGrant[] = [],
): Pathfinder2eDerivedProficiency {
  const grantedRank = grants.reduce<Pathfinder2eProficiencyRank>(
    (highest, grant) => Math.max(highest, grant.rank) as Pathfinder2eProficiencyRank,
    0,
  )
  return {
    manualRank,
    grantedRank,
    effectiveRank: Math.max(manualRank, grantedRank) as Pathfinder2eProficiencyRank,
    grantSources: [...new Set(grants.map((grant) => grant.source))],
  }
}

function deriveStatistic(
  level: number,
  attributeModifier: number,
  proficiency: Pathfinder2eProficiencyValue,
  grants: ProficiencyGrant[] = [],
): Pathfinder2eDerivedStatistic {
  const derivedProficiency = deriveProficiency(proficiency.rank, grants)
  const proficiencyBonus = calculatePathfinder2eProficiencyBonus(
    level,
    derivedProficiency.effectiveRank,
  )
  return {
    value: attributeModifier + proficiencyBonus + proficiency.bonus,
    attributeModifier,
    proficiencyBonus,
    bonus: proficiency.bonus,
    ...derivedProficiency,
  }
}

export function derivePathfinder2eCharacterSheet(
  data: Pathfinder2eCharacterSheetData,
  context: Pathfinder2eCharacterSheetDerivationContext = {},
) {
  const warnings: string[] = []
  const level = data.identity.level
  const ancestryMechanics = getPathfinder2eAncestryMechanics(data.identity.ancestry)
  const classMechanics = getPathfinder2eClassMechanics(data.identity.class)
  const backgroundMechanics = getPathfinder2eBackgroundMechanics(data.identity.background)
  const ancestryHitPoints = getPathfinder2eAncestryHitPoints(data.identity.ancestry)
  const classHitPointsPerLevel = getPathfinder2eClassHitPointsPerLevel(data.identity.class)
  const ancestrySpeedFeet = ancestryMechanics?.speedFeet ?? 0
  const backgroundTrainedSkills = backgroundMechanics?.trainedSkills ?? []
  const backgroundLoreSkills = backgroundMechanics?.trainedLore ?? []

  if (!data.identity.ancestry) warnings.push('Selecione uma ancestralidade para calcular a parcela ancestral de PV.')
  if (!data.identity.class) warnings.push('Selecione uma classe para calcular os PV recebidos por nivel.')
  if (
    data.identity.ancestry
    && data.identity.heritage
    && !isPathfinder2eHeritageCompatible(data.identity.ancestry, data.identity.heritage)
  ) {
    warnings.push('A heranca selecionada nao e compativel com a ancestralidade.')
  }
  if (
    (data.identity.class === 'Cleric' || data.identity.class === 'Champion')
    && !data.identity.deity
  ) {
    warnings.push('A classe selecionada exige uma divindade para completar a construcao.')
  }

  const hitPointsMaximum = Math.max(
    0,
    ancestryHitPoints
      + level * (classHitPointsPerLevel + data.attributes.constitution)
      + data.hitPoints.bonus,
  )

  if (data.hitPoints.current > hitPointsMaximum) {
    warnings.push('A vida atual esta acima da vida maxima calculada.')
  }

  const classGrant = (rank: number | undefined): ProficiencyGrant[] => {
    const normalizedRank = toProficiencyRank(rank)
    return normalizedRank ? [{ rank: normalizedRank, source: 'class' }] : []
  }

  const skillGrants = Object.fromEntries(
    (Object.keys(skillAttributeMap) as Array<keyof typeof skillAttributeMap>)
      .map((skill) => [skill, [] as ProficiencyGrant[]]),
  ) as Record<keyof Pathfinder2eCharacterSheetData['skills'], ProficiencyGrant[]>

  for (const skill of classMechanics?.fixedSkills ?? []) {
    if (skill in skillGrants) {
      skillGrants[skill as keyof typeof skillGrants].push({ rank: 2, source: 'class' })
    }
  }
  for (const skill of backgroundTrainedSkills) {
    if (skill in skillGrants) {
      skillGrants[skill as keyof typeof skillGrants].push({ rank: 2, source: 'background' })
    }
  }

  const perception = deriveStatistic(
    level,
    data.attributes.wisdom,
    data.perception,
    classGrant(classMechanics?.perceptionRank),
  )
  const fortitude = deriveStatistic(
    level,
    data.attributes.constitution,
    data.savingThrows.fortitude,
    classGrant(classMechanics?.savingThrowRanks.fortitude),
  )
  const reflex = deriveStatistic(
    level,
    data.attributes.dexterity,
    data.savingThrows.reflex,
    classGrant(classMechanics?.savingThrowRanks.reflex),
  )
  const will = deriveStatistic(
    level,
    data.attributes.wisdom,
    data.savingThrows.will,
    classGrant(classMechanics?.savingThrowRanks.will),
  )

  const skills = Object.fromEntries(
    (Object.keys(skillAttributeMap) as Array<keyof typeof skillAttributeMap>).map((skill) => [
      skill,
      deriveStatistic(
        level,
        data.attributes[skillAttributeMap[skill]],
        data.skills[skill],
        skillGrants[skill],
      ),
    ]),
  ) as Pathfinder2eDerivedCharacterSheet['skills']

  const armorProficiencies = Object.fromEntries(
    (Object.keys(data.armorProficiencies) as Array<keyof typeof data.armorProficiencies>)
      .map((category) => [
        category,
        deriveProficiency(
          data.armorProficiencies[category],
          classGrant(classMechanics?.armorRanks[category]),
        ),
      ]),
  ) as Pathfinder2eDerivedCharacterSheet['armorProficiencies']

  const equippedArmor = context.armor?.category === 'unarmored' ? null : context.armor ?? null
  const armorCategory = equippedArmor?.category ?? 'unarmored'
  const armorProficiency = armorProficiencies[armorCategory]
  const armorProficiencyBonus = calculatePathfinder2eProficiencyBonus(
    level,
    armorProficiency.effectiveRank,
  )
  const dexterityCap = equippedArmor?.dexterityCap ?? null
  const dexterityModifier = dexterityCap === null
    ? data.attributes.dexterity
    : Math.min(data.attributes.dexterity, dexterityCap)
  const itemBonus = equippedArmor?.armorClassBonus ?? 0
  const armorClass = {
    value: 10 + dexterityModifier + armorProficiencyBonus + itemBonus + data.armorClass.bonus,
    rawDexterityModifier: data.attributes.dexterity,
    dexterityModifier,
    dexterityCap,
    proficiencyBonus: armorProficiencyBonus,
    itemBonus,
    bonus: data.armorClass.bonus,
    armorCategory,
    sourceName: equippedArmor?.name ?? null,
    proficiency: armorProficiency,
  }

  const manualMovement = data.general.movementMeters > 0
  const movementMeters = manualMovement
    ? data.general.movementMeters
    : Math.round(ancestrySpeedFeet * 3) / 10

  const derived: Pathfinder2eDerivedCharacterSheet = {
    mechanics: {
      ancestryHitPoints,
      ancestrySpeedFeet,
      classHitPointsPerLevel,
      classAdditionalTrainedSkills: classMechanics?.additionalTrainedSkills ?? 0,
      backgroundTrainedSkills: [...backgroundTrainedSkills],
      backgroundLoreSkills: [...backgroundLoreSkills],
    },
    movement: {
      valueMeters: movementMeters,
      ancestryBaseFeet,
      manualOverride: manualMovement,
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
    armorProficiencies,
  }

  return { derived, warnings }
}
