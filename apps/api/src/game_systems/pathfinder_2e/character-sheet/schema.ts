import { z } from 'zod'
import {
  PATHFINDER_2E_ANCESTRIES,
  PATHFINDER_2E_BACKGROUNDS,
  PATHFINDER_2E_CLASSES,
  PATHFINDER_2E_DEITIES,
  PATHFINDER_2E_HERITAGES,
} from './options'

const integer = z.number().int().finite().min(-100_000).max(100_000)
const attributeModifier = z.number().int().finite().min(-20).max(20)
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
  bonus: integer,
}).strict()

export const pathfinder2eCharacterSheetSchema = z.object({
  schemaVersion: z.literal(2),
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
    strength: attributeModifier,
    dexterity: attributeModifier,
    constitution: attributeModifier,
    intelligence: attributeModifier,
    wisdom: attributeModifier,
    charisma: attributeModifier,
  }).strict(),
  hitPoints: z.object({
    current: nonNegativeInteger,
    temporary: nonNegativeInteger,
    wounded: nonNegativeInteger,
    dying: nonNegativeInteger,
    doomed: nonNegativeInteger,
    bonus: integer,
  }).strict(),
  armorClass: z.object({
    bonus: integer,
  }).strict(),
  initiative: z.object({
    bonus: integer,
  }).strict(),
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

// Alias temporario para reduzir o impacto em imports da ficha V1 durante a migracao.
export const pathfinder2eManualCharacterSheetSchema = pathfinder2eCharacterSheetSchema

export type Pathfinder2eCharacterSheetData = z.infer<typeof pathfinder2eCharacterSheetSchema>
export type Pathfinder2eManualCharacterSheet = Pathfinder2eCharacterSheetData
export type Pathfinder2eProficiencyRank = z.infer<typeof proficiencyRankSchema>
export type Pathfinder2eProficiencyValue = z.infer<typeof proficiencyValueSchema>
