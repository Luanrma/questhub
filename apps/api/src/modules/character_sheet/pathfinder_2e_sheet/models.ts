import type { PROFICIENCY_RANK_VALUES } from './constants'

export type Pathfinder2eProficiencyRank = (typeof PROFICIENCY_RANK_VALUES)[number]

export type Pathfinder2eIdentity = {
  level: number
  ancestry: string
  heritage: string
  background: string
  className: string
}

export type Pathfinder2eAttributes = {
  strength: number
  dexterity: number
  constitution: number
  intelligence: number
  wisdom: number
  charisma: number
}

export type Pathfinder2eHitPoints = {
  maximum: number
  current: number
  temporary: number
  wounded: number
  dying: number
  doomed: number
}

export type Pathfinder2eProficiencyValue = {
  rank: Pathfinder2eProficiencyRank
  value: number
}

export type Pathfinder2eSavingThrows = {
  fortitude: Pathfinder2eProficiencyValue
  reflex: Pathfinder2eProficiencyValue
  will: Pathfinder2eProficiencyValue
}

export type Pathfinder2eSheet = {
  identity: Pathfinder2eIdentity
  attributes: Pathfinder2eAttributes
  hitPoints: Pathfinder2eHitPoints
  armorClass: number
  initiative: number
  perception: Pathfinder2eProficiencyValue
  savingThrows: Pathfinder2eSavingThrows
  notes: string
}
