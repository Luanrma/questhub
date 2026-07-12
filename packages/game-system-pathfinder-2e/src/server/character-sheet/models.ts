import type { PROFICIENCY_RANK_VALUES } from './constants'
import type {
  Pathfinder2eBuildChoices,
  Pathfinder2eCharacterSelection,
} from '../character-options/models'

export type Pathfinder2eProficiencyRank = (typeof PROFICIENCY_RANK_VALUES)[number]

export type Pathfinder2eGeneral = {
  experience: {
    current: number
    nextLevel: number
  }
  movementMeters: number
}

export type Pathfinder2eIdentityV1 = {
  level: number
  ancestry: string
  heritage: string
  background: string
  className: string
}

export type Pathfinder2eIdentityV2 = {
  level: number
  ancestry: Pathfinder2eCharacterSelection | null
  heritage: Pathfinder2eCharacterSelection | null
  background: Pathfinder2eCharacterSelection | null
  class: Pathfinder2eCharacterSelection | null
}

export type Pathfinder2eIdentity = Pathfinder2eIdentityV1 | Pathfinder2eIdentityV2

export type Pathfinder2eAttributes = {
  strength: number
  dexterity: number
  constitution: number
  intelligence: number
  wisdom: number
  charisma: number
}

// `maximum` e um snapshot persistido, recalculado pelo frontend a cada
// mudanca de nivel/Constituicao/ancestralidade/classe/manualAdjustment
// (mesmo padrao de skills/saves/perception, nao o de Armor Class). Formula e
// regras de reconciliacao de `current` em
// packages/game-system-pathfinder-2e/src/shared/hit-points.ts e
// .ai/game_systems/pathfinder_2e/hit_points/specs.md.
export type Pathfinder2eHitPoints = {
  maximum: number
  current: number
  temporary: number
  wounded: number
  dying: number
  doomed: number
  manualAdjustment: number
}

export type Pathfinder2eProficiencyValue = {
  rank: Pathfinder2eProficiencyRank
  value: number
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

export type Pathfinder2eSavingThrows = {
  fortitude: Pathfinder2eProficiencyValue
  reflex: Pathfinder2eProficiencyValue
  will: Pathfinder2eProficiencyValue
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

// Formato legado (identidade em texto livre). Sempre com Armor Class no
// formato antigo (`armorClass: number`) — sheets V1 nunca chegaram a existir
// com o Armor Class dinamico (ver Pathfinder2eSheetV2 abaixo). So permanece
// no contrato para migrar dados existentes; novas escritas nunca a usam.
export type Pathfinder2eSheetV1 = {
  general: Pathfinder2eGeneral
  identity: Pathfinder2eIdentityV1
  attributes: Pathfinder2eAttributes
  hitPoints: Pathfinder2eHitPoints
  armorClass: number
  initiative: number
  perception: Pathfinder2eProficiencyValue
  savingThrows: Pathfinder2eSavingThrows
  skills: Pathfinder2eSkills
  notes: string
}

// Formato intermediario transitorio: identidade V2 estruturada, mas ainda com
// Armor Class no formato antigo. So existe entre a migracao de identidade
// (V1 -> V2) e a migracao de Armor Class (-> V3); nunca e o alvo final de uma
// escrita. Ver PATHFINDER_2E_SHEET_VERSION_LEGACY_ARMOR_CLASS em constants.ts.
export type Pathfinder2eSheetV2LegacyArmorClass = Omit<Pathfinder2eSheetV1, 'identity'> & {
  identity: Pathfinder2eIdentityV2
  buildChoices: Pathfinder2eBuildChoices
}

export type Pathfinder2eSheetV2 = Omit<Pathfinder2eSheetV2LegacyArmorClass, 'armorClass'> & {
  armorClass: Pathfinder2eArmorClassManual
  armorProficiencies: Pathfinder2eArmorProficiencies
}

export type Pathfinder2eSheet = Pathfinder2eSheetV1 | Pathfinder2eSheetV2LegacyArmorClass | Pathfinder2eSheetV2
