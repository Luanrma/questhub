import type {
  PATHFINDER_2E_ATTRIBUTE_SLUGS,
  PATHFINDER_2E_CHARACTER_OPTION_KINDS,
  PATHFINDER_2E_CHARACTER_SELECTION_SOURCES,
} from './constants'

export type Pathfinder2eCharacterOptionKind = (typeof PATHFINDER_2E_CHARACTER_OPTION_KINDS)[number]

export type Pathfinder2eAttributeSlug = (typeof PATHFINDER_2E_ATTRIBUTE_SLUGS)[number]

export type Pathfinder2eRarity = 'common' | 'uncommon' | 'rare' | 'unique' | string

export type Pathfinder2eDescription = {
  sourceHtml: string
  plainText: string
}

export type Pathfinder2eRuleElement = {
  key: string
  data: Record<string, unknown>
}

export type Pathfinder2eGrantedItemReference = {
  name: string
  image: string | null
  level: number
  uuid: string
  parsedReference: {
    system: string | null
    pack: string | null
    documentType: string | null
    documentIdOrName: string | null
  }
}

export type Pathfinder2eCharacterOptionSource = {
  sourcePack: string
  sourceId: string
  sourcePath: string
  slug: string
  image: string | null
  publication: {
    title: string | null
    license: string | null
    remaster: boolean
  }
}

export type Pathfinder2eCharacterOptionBase = {
  schemaVersion: 1
  id: string
  kind: Pathfinder2eCharacterOptionKind
  slug: string
  name: string
  description: Pathfinder2eDescription
  rarity: Pathfinder2eRarity
  traits: string[]
  rules: Pathfinder2eRuleElement[]
  grantedItems: Pathfinder2eGrantedItemReference[]
  source: Pathfinder2eCharacterOptionSource
  normalizationWarnings: string[]
}

export type Pathfinder2eAttributeChoice = {
  key: string
  options: Pathfinder2eAttributeSlug[]
  count: number
  free: boolean
}

export type Pathfinder2eClassEntry = Pathfinder2eCharacterOptionBase & {
  kind: 'class'
  hitPointsPerLevel: number
  keyAbility: {
    options: Pathfinder2eAttributeSlug[]
  }
  proficiencies: {
    perception: number
    savingThrows: {
      fortitude: number
      reflex: number
      will: number
    }
    attacks: {
      simple: number
      martial: number
      advanced: number
      unarmed: number
      other: {
        name: string
        rank: number
      }
    }
    defenses: {
      unarmored: number
      light: number
      medium: number
      heavy: number
    }
    spellcasting: number
  }
  trainedSkills: {
    fixed: string[]
    additional: number
  }
  progression: {
    ancestryFeatLevels: number[]
    classFeatLevels: number[]
    generalFeatLevels: number[]
    skillFeatLevels: number[]
    skillIncreaseLevels: number[]
  }
}

export type Pathfinder2eLanguageProfile = {
  granted: string[]
  additional: {
    count: number
    options: string[]
    custom: string | null
  }
}

export type Pathfinder2eAncestryEntry = Pathfinder2eCharacterOptionBase & {
  kind: 'ancestry'
  hitPoints: number
  speedFeet: number
  size: string
  hands: number
  reachFeet: number
  vision: string
  languages: Pathfinder2eLanguageProfile
  attributes: {
    boosts: Pathfinder2eAttributeChoice[]
    flaws: Pathfinder2eAttributeChoice[]
    alternateBoosts: Pathfinder2eAttributeSlug[]
  }
}

export type Pathfinder2eHeritageAncestryReference = {
  name: string
  slug: string
  uuid: string
  sourceId: string | null
}

export type Pathfinder2eHeritageEntry = Pathfinder2eCharacterOptionBase & {
  kind: 'heritage'
  ancestry: Pathfinder2eHeritageAncestryReference | null
  versatile: boolean
}

export type Pathfinder2eBackgroundEntry = Pathfinder2eCharacterOptionBase & {
  kind: 'background'
  attributes: {
    boosts: Pathfinder2eAttributeChoice[]
  }
  trainedSkills: {
    skills: string[]
    lore: string[]
  }
}

export type Pathfinder2eCharacterOptionEntry =
  | Pathfinder2eClassEntry
  | Pathfinder2eAncestryEntry
  | Pathfinder2eHeritageEntry
  | Pathfinder2eBackgroundEntry

export type Pathfinder2eCatalogSelection = {
  source: typeof PATHFINDER_2E_CHARACTER_SELECTION_SOURCES.CATALOG
  id: string
  sourcePack: string
  sourceId: string
  slug: string
  name: string
}

export type Pathfinder2eCustomSelection = {
  source: typeof PATHFINDER_2E_CHARACTER_SELECTION_SOURCES.CUSTOM
  name: string
}

export type Pathfinder2eCharacterSelection = Pathfinder2eCatalogSelection | Pathfinder2eCustomSelection

export type Pathfinder2eIdentityV2 = {
  level: number
  ancestry: Pathfinder2eCharacterSelection | null
  heritage: Pathfinder2eCharacterSelection | null
  background: Pathfinder2eCharacterSelection | null
  class: Pathfinder2eCharacterSelection | null
}

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

export type Pathfinder2eCharacterSheetV2<TLegacySheet> = Omit<TLegacySheet, 'identity'> & {
  identity: Pathfinder2eIdentityV2
  buildChoices: Pathfinder2eBuildChoices
}

export type Pathfinder2eMigrationIssue = {
  field: 'class' | 'ancestry' | 'heritage' | 'background'
  value: string
  reason: 'not_found' | 'ambiguous' | 'incompatible'
}
