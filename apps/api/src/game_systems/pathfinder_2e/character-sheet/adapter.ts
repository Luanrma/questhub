import type { CharacterSheetRuntimeAdapter } from '../../runtime/contracts'
import { createDefaultPathfinder2eCharacterSheet } from './defaults'
import {
  derivePathfinder2eCharacterSheet,
  type Pathfinder2eDerivedCharacterSheet,
} from './derivation'
import {
  pathfinder2eCharacterSheetSchema,
  type Pathfinder2eCharacterSheetData,
  type Pathfinder2eProficiencyRank,
} from './schema'

type UnknownRecord = Record<string, unknown>

function asRecord(value: unknown): UnknownRecord {
  return typeof value === 'object' && value !== null && !Array.isArray(value)
    ? value as UnknownRecord
    : {}
}

function readNumber(record: UnknownRecord, key: string, fallback: number) {
  const value = record[key]
  return typeof value === 'number' && Number.isFinite(value) ? value : fallback
}

function readString(record: UnknownRecord, key: string, fallback: string) {
  const value = record[key]
  return typeof value === 'string' ? value : fallback
}

function readRank(record: UnknownRecord, key: string): Pathfinder2eProficiencyRank {
  const value = record[key]
  return value === 0 || value === 2 || value === 4 || value === 6 || value === 8 ? value : 0
}

function migrateProficiency(value: unknown) {
  const record = asRecord(value)
  return {
    rank: readRank(record, 'rank'),
    bonus: 0,
  }
}

export function migratePathfinder2eCharacterSheet(input: unknown): unknown {
  const source = asRecord(input)
  if (source.schemaVersion !== 1) return input

  const defaults = createDefaultPathfinder2eCharacterSheet()
  const general = asRecord(source.general)
  const experience = asRecord(general.experience)
  const identity = asRecord(source.identity)
  const attributes = asRecord(source.attributes)
  const hitPoints = asRecord(source.hitPoints)
  const savingThrows = asRecord(source.savingThrows)
  const skills = asRecord(source.skills)
  const armorProficiencies = asRecord(source.armorProficiencies)

  return {
    ...defaults,
    general: {
      experience: {
        current: readNumber(experience, 'current', defaults.general.experience.current),
        nextLevel: readNumber(experience, 'nextLevel', defaults.general.experience.nextLevel),
      },
      movementMeters: readNumber(general, 'movementMeters', defaults.general.movementMeters),
    },
    identity: {
      level: readNumber(identity, 'level', defaults.identity.level),
      ancestry: readString(identity, 'ancestry', defaults.identity.ancestry),
      heritage: readString(identity, 'heritage', defaults.identity.heritage),
      background: readString(identity, 'background', defaults.identity.background),
      class: readString(identity, 'class', defaults.identity.class),
      deity: readString(identity, 'deity', defaults.identity.deity),
    },
    attributes: {
      strength: readNumber(attributes, 'strength', defaults.attributes.strength),
      dexterity: readNumber(attributes, 'dexterity', defaults.attributes.dexterity),
      constitution: readNumber(attributes, 'constitution', defaults.attributes.constitution),
      intelligence: readNumber(attributes, 'intelligence', defaults.attributes.intelligence),
      wisdom: readNumber(attributes, 'wisdom', defaults.attributes.wisdom),
      charisma: readNumber(attributes, 'charisma', defaults.attributes.charisma),
    },
    hitPoints: {
      current: readNumber(hitPoints, 'current', defaults.hitPoints.current),
      temporary: readNumber(hitPoints, 'temporary', defaults.hitPoints.temporary),
      wounded: readNumber(hitPoints, 'wounded', defaults.hitPoints.wounded),
      dying: readNumber(hitPoints, 'dying', defaults.hitPoints.dying),
      doomed: readNumber(hitPoints, 'doomed', defaults.hitPoints.doomed),
      bonus: readNumber(hitPoints, 'bonus', defaults.hitPoints.bonus),
    },
    armorClass: { bonus: 0 },
    initiative: { bonus: 0 },
    perception: migrateProficiency(source.perception),
    savingThrows: {
      fortitude: migrateProficiency(savingThrows.fortitude),
      reflex: migrateProficiency(savingThrows.reflex),
      will: migrateProficiency(savingThrows.will),
    },
    skills: {
      acrobatics: migrateProficiency(skills.acrobatics),
      arcana: migrateProficiency(skills.arcana),
      athletics: migrateProficiency(skills.athletics),
      crafting: migrateProficiency(skills.crafting),
      deception: migrateProficiency(skills.deception),
      diplomacy: migrateProficiency(skills.diplomacy),
      intimidation: migrateProficiency(skills.intimidation),
      medicine: migrateProficiency(skills.medicine),
      nature: migrateProficiency(skills.nature),
      occultism: migrateProficiency(skills.occultism),
      performance: migrateProficiency(skills.performance),
      religion: migrateProficiency(skills.religion),
      society: migrateProficiency(skills.society),
      stealth: migrateProficiency(skills.stealth),
      survival: migrateProficiency(skills.survival),
      thievery: migrateProficiency(skills.thievery),
    },
    armorProficiencies: {
      unarmored: readRank(armorProficiencies, 'unarmored'),
      light: readRank(armorProficiencies, 'light'),
      medium: readRank(armorProficiencies, 'medium'),
      heavy: readRank(armorProficiencies, 'heavy'),
    },
    notes: readString(source, 'notes', defaults.notes),
  }
}

export const pathfinder2eCharacterSheetRuntimeAdapter: CharacterSheetRuntimeAdapter<
  Pathfinder2eCharacterSheetData,
  Pathfinder2eDerivedCharacterSheet
> = {
  systemKey: 'pathfinder-2e',
  schemaVersion: 2,
  createDefault: createDefaultPathfinder2eCharacterSheet,
  migrate: migratePathfinder2eCharacterSheet,
  parse(input) {
    return pathfinder2eCharacterSheetSchema.parse(input)
  },
  derive: derivePathfinder2eCharacterSheet,
}
