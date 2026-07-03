export type Pathfinder2eProficiencyRank = 0 | 2 | 4 | 6 | 8

export type Pathfinder2eProficiencyValue = {
  rank: Pathfinder2eProficiencyRank
  value: number
}

export type Pathfinder2eSkills = {
  acrobatics: Pathfinder2eProficiencyValue
  arcana: Pathfinder2eProficiencyValue
  athletics: Pathfinder2eProficiencyValue
  crafting: Pathfinder2eProficiencyValue
  deception: Pathfinder2eProficiencyValue
  diplomacy: Pathfinder2eProficiencyValue
  intimidation: Pathfinder2eProficiencyValue
  medicine: Pathfinder2eProficiencyValue
  nature: Pathfinder2eProficiencyValue
  occultism: Pathfinder2eProficiencyValue
  performance: Pathfinder2eProficiencyValue
  religion: Pathfinder2eProficiencyValue
  society: Pathfinder2eProficiencyValue
  stealth: Pathfinder2eProficiencyValue
  survival: Pathfinder2eProficiencyValue
  thievery: Pathfinder2eProficiencyValue
}

export type Pathfinder2eSheet = {
  general: {
    experience: {
      current: number
      nextLevel: number
    }
    movementMeters: number
  }
  identity: {
    level: number
    ancestry: string
    heritage: string
    background: string
    className: string
  }
  attributes: {
    strength: number
    dexterity: number
    constitution: number
    intelligence: number
    wisdom: number
    charisma: number
  }
  hitPoints: {
    maximum: number
    current: number
    temporary: number
    wounded: number
    dying: number
    doomed: number
  }
  armorClass: number
  initiative: number
  perception: Pathfinder2eProficiencyValue
  savingThrows: {
    fortitude: Pathfinder2eProficiencyValue
    reflex: Pathfinder2eProficiencyValue
    will: Pathfinder2eProficiencyValue
  }
  skills: Pathfinder2eSkills
  notes: string
}

export type Pathfinder2eSheetEnvelope = {
  system: 'PATHFINDER_2E'
  version: number
  metadata?: {
    bio?: string | null
  }
  data: {
    pathfinder2e: Pathfinder2eSheet
  }
}
