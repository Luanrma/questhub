export type Pathfinder2eProficiencyRank = 0 | 2 | 4 | 6 | 8

export type Pathfinder2eProficiencyValue = {
  rank: Pathfinder2eProficiencyRank
  bonus: number
}

export type Pathfinder2eCharacterSheetData = {
  schemaVersion: 3
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
    current: number
    temporary: number
    wounded: number
    dying: number
    doomed: number
    bonus: number
  }
  armorClass: {
    bonus: number
  }
  initiative: {
    bonus: number
  }
  perception: Pathfinder2eProficiencyValue
  savingThrows: {
    fortitude: Pathfinder2eProficiencyValue
    reflex: Pathfinder2eProficiencyValue
    will: Pathfinder2eProficiencyValue
  }
  defenses: {
    resistances: string[]
    weaknesses: string[]
    immunities: string[]
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

export type Pathfinder2eManualCharacterSheet = Pathfinder2eCharacterSheetData

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
    dexterityModifier: number
    proficiencyBonus: number
    bonus: number
    armorCategory: 'unarmored'
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

export type Pathfinder2eCharacterOption = {
  value: string
  labels: {
    'en-US': string
    'pt-BR'?: string
  }
  translationStatus: {
    'pt-BR': 'MACHINE_DRAFT' | 'NOT_STARTED'
  }
}

export type Pathfinder2eHeritageOption = Pathfinder2eCharacterOption & {
  compatibility: {
    ancestry: string | null
    versatile: boolean
  }
}

export type Pathfinder2eCharacterSheetOptions = {
  ancestries: Pathfinder2eCharacterOption[]
  heritages: Pathfinder2eHeritageOption[]
  backgrounds: Pathfinder2eCharacterOption[]
  classes: Pathfinder2eCharacterOption[]
  deities: Pathfinder2eCharacterOption[]
}

export type Pathfinder2eResolvedCharacterSheet = {
  systemKey: 'pathfinder-2e'
  schemaVersion: 3
  data: Pathfinder2eCharacterSheetData
  derived: Pathfinder2eDerivedCharacterSheet
  warnings: string[]
  persisted?: boolean
  updatedAt?: string | null
}

export type Pathfinder2eCharacterSheetResponse = {
  metadata: {
    id: string
    name: string
    avatarUrl: string | null
    bio: string | null
  }
  sheet: Pathfinder2eResolvedCharacterSheet & {
    persisted: boolean
    updatedAt: string | null
  }
}
