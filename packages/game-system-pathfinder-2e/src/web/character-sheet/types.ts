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

export type Pathfinder2eAttributeSlug = 'str' | 'dex' | 'con' | 'int' | 'wis' | 'cha'

export type Pathfinder2eCatalogSelection = {
  source: 'catalog'
  id: string
  sourcePack: string
  sourceId: string
  slug: string
  name: string
}

export type Pathfinder2eCustomSelection = {
  source: 'custom'
  name: string
}

export type Pathfinder2eCharacterSelection = Pathfinder2eCatalogSelection | Pathfinder2eCustomSelection

export type Pathfinder2eBuildChoices = {
  ancestry: {
    boosts: Record<string, Pathfinder2eAttributeSlug>
    flaws: Record<string, Pathfinder2eAttributeSlug>
    alternateBoostsEnabled: boolean
    additionalLanguages: string[]
    ruleSelections: Record<string, string>
  }
  heritage: {
    ruleSelections: Record<string, string>
  }
  background: {
    boosts: Record<string, Pathfinder2eAttributeSlug>
    ruleSelections: Record<string, string>
  }
  class: {
    keyAbility: Pathfinder2eAttributeSlug | null
    trainedSkills: string[]
    ruleSelections: Record<string, string>
  }
}

export type Pathfinder2eArmorProficiencies = {
  unarmored: Pathfinder2eProficiencyRank
  light: Pathfinder2eProficiencyRank
  medium: Pathfinder2eProficiencyRank
  heavy: Pathfinder2eProficiencyRank
}

// Total de AC nunca e persistido. Formula, breakdown e fatos de equipamento
// em packages/game-system-pathfinder-2e/src/shared/armor-class.ts e
// .ai/game_systems/pathfinder_2e/armor_class/specs.md.
export type Pathfinder2eArmorClassManual = {
  manualAdjustment: number
}

export type Pathfinder2eSheetBase = {
  general: {
    experience: {
      current: number
      nextLevel: number
    }
    movementMeters: number
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

// Formato legado (identidade em texto livre); Armor Class sempre no formato
// antigo (`number`) — sheets V1 nunca existiram com Armor Class dinamico.
export type Pathfinder2eSheetV1 = Pathfinder2eSheetBase & {
  armorClass: number
  identity: {
    level: number
    ancestry: string
    heritage: string
    background: string
    className: string
  }
}

export type Pathfinder2eSheetV2 = Pathfinder2eSheetBase & {
  armorClass: Pathfinder2eArmorClassManual
  armorProficiencies: Pathfinder2eArmorProficiencies
  identity: {
    level: number
    ancestry: Pathfinder2eCharacterSelection | null
    heritage: Pathfinder2eCharacterSelection | null
    background: Pathfinder2eCharacterSelection | null
    class: Pathfinder2eCharacterSelection | null
  }
  buildChoices: Pathfinder2eBuildChoices
}

export type Pathfinder2eSheet = Pathfinder2eSheetV1 | Pathfinder2eSheetV2

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
