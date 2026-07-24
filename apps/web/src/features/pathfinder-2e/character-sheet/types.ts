export type Pathfinder2eProficiencyRank = 0 | 2 | 4 | 6 | 8

export type Pathfinder2eProficiencyValue = {
  rank: Pathfinder2eProficiencyRank
  value: number
}

export type Pathfinder2eManualCharacterSheet = {
  schemaVersion: 1
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
    class: string
    deity: string
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
    bonus: number
  }
  armorClass: number
  initiative: number
  perception: Pathfinder2eProficiencyValue
  savingThrows: {
    fortitude: Pathfinder2eProficiencyValue
    reflex: Pathfinder2eProficiencyValue
    will: Pathfinder2eProficiencyValue
  }
  skills: {
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
  armorProficiencies: {
    unarmored: Pathfinder2eProficiencyRank
    light: Pathfinder2eProficiencyRank
    medium: Pathfinder2eProficiencyRank
    heavy: Pathfinder2eProficiencyRank
  }
  notes: string
}

export type Pathfinder2eCharacterSheetOptions = {
  ancestries: string[]
  heritages: string[]
  backgrounds: string[]
  classes: string[]
  deities: string[]
}

export type Pathfinder2eCharacterSheetResponse = {
  character: {
    id: string
    name: string
    avatarUrl: string | null
    bio: string | null
  }
  sheet: {
    systemKey: 'pathfinder-2e'
    schemaVersion: 1
    persisted: boolean
    updatedAt: string | null
    data: Pathfinder2eManualCharacterSheet
  }
}
