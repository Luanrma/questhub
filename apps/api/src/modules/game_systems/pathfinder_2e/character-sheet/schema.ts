import { z } from 'zod'
import {
  PATHFINDER_2E_ANCESTRIES,
  PATHFINDER_2E_BACKGROUNDS,
  PATHFINDER_2E_CLASSES,
  PATHFINDER_2E_DEITIES,
  PATHFINDER_2E_HERITAGES,
} from './options'

const integer = z.number().int().finite().min(-100_000).max(100_000)
const nonNegativeInteger = z.number().int().finite().min(0).max(100_000_000)
const nonNegativeNumber = z.number().finite().min(0).max(100_000_000)
const proficiencyRankSchema = z.union([z.literal(0), z.literal(2), z.literal(4), z.literal(6), z.literal(8)])

function catalogSelectionSchema(values: readonly string[], label: string) {
  return z.string().trim().max(200).refine(
    (value) => value === '' || values.includes(value),
    `${label} deve ser selecionada no catalogo da ficha`,
  )
}

const proficiencyValueSchema = z.object({
  rank: proficiencyRankSchema,
  value: integer,
}).strict()

export const pathfinder2eManualCharacterSheetSchema = z.object({
  schemaVersion: z.literal(1),
  general: z.object({
    experience: z.object({
      current: nonNegativeInteger,
      nextLevel: nonNegativeInteger,
    }).strict(),
    movementMeters: nonNegativeNumber,
  }).strict(),
  identity: z.object({
    level: z.number().int().min(1).max(20),
    ancestry: catalogSelectionSchema(PATHFINDER_2E_ANCESTRIES, 'Ancestralidade'),
    heritage: catalogSelectionSchema(PATHFINDER_2E_HERITAGES, 'Heranca'),
    background: catalogSelectionSchema(PATHFINDER_2E_BACKGROUNDS, 'Background'),
    class: catalogSelectionSchema(PATHFINDER_2E_CLASSES, 'Classe'),
    deity: catalogSelectionSchema(PATHFINDER_2E_DEITIES, 'Divindade'),
  }).strict(),
  attributes: z.object({
    strength: integer,
    dexterity: integer,
    constitution: integer,
    intelligence: integer,
    wisdom: integer,
    charisma: integer,
  }).strict(),
  hitPoints: z.object({
    maximum: nonNegativeInteger,
    current: nonNegativeInteger,
    temporary: nonNegativeInteger,
    wounded: nonNegativeInteger,
    dying: nonNegativeInteger,
    doomed: nonNegativeInteger,
    bonus: integer,
  }).strict(),
  armorClass: integer,
  initiative: integer,
  perception: proficiencyValueSchema,
  savingThrows: z.object({
    fortitude: proficiencyValueSchema,
    reflex: proficiencyValueSchema,
    will: proficiencyValueSchema,
  }).strict(),
  skills: z.object({
    acrobatics: proficiencyValueSchema,
    arcana: proficiencyValueSchema,
    athletics: proficiencyValueSchema,
    crafting: proficiencyValueSchema,
    deception: proficiencyValueSchema,
    diplomacy: proficiencyValueSchema,
    intimidation: proficiencyValueSchema,
    medicine: proficiencyValueSchema,
    nature: proficiencyValueSchema,
    occultism: proficiencyValueSchema,
    performance: proficiencyValueSchema,
    religion: proficiencyValueSchema,
    society: proficiencyValueSchema,
    stealth: proficiencyValueSchema,
    survival: proficiencyValueSchema,
    thievery: proficiencyValueSchema,
  }).strict(),
  armorProficiencies: z.object({
    unarmored: proficiencyRankSchema,
    light: proficiencyRankSchema,
    medium: proficiencyRankSchema,
    heavy: proficiencyRankSchema,
  }).strict(),
  notes: z.string().max(20_000),
}).strict()

export type Pathfinder2eManualCharacterSheet = z.infer<typeof pathfinder2eManualCharacterSheetSchema>
export type Pathfinder2eProficiencyRank = z.infer<typeof proficiencyRankSchema>
export type Pathfinder2eProficiencyValue = z.infer<typeof proficiencyValueSchema>
