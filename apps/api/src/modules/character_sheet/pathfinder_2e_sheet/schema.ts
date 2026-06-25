import { z } from 'zod'
import { PROFICIENCY_RANK_VALUES } from './constants'

const freeTextSchema = z.string()
const integerSchema = z.number().int()
const nonNegativeIntegerSchema = integerSchema.min(0)
const positiveIntegerSchema = integerSchema.min(1)
const proficiencyRankSchema = z.union([
  z.literal(PROFICIENCY_RANK_VALUES[0]),
  z.literal(PROFICIENCY_RANK_VALUES[1]),
  z.literal(PROFICIENCY_RANK_VALUES[2]),
  z.literal(PROFICIENCY_RANK_VALUES[3]),
  z.literal(PROFICIENCY_RANK_VALUES[4]),
])

const proficiencyValueSchema = z
  .object({
    rank: proficiencyRankSchema,
    value: integerSchema,
  })
  .strict()

const skillSetSchema = z
  .object({
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
  })
  .strict()

export const pathfinder2eSheetSchema = z
  .object({
    identity: z
      .object({
        level: positiveIntegerSchema,
        ancestry: freeTextSchema,
        heritage: freeTextSchema,
        background: freeTextSchema,
        className: freeTextSchema,
      })
      .strict(),
    attributes: z
      .object({
        strength: positiveIntegerSchema,
        dexterity: positiveIntegerSchema,
        constitution: positiveIntegerSchema,
        intelligence: positiveIntegerSchema,
        wisdom: positiveIntegerSchema,
        charisma: positiveIntegerSchema,
      })
      .strict(),
    hitPoints: z
      .object({
        maximum: nonNegativeIntegerSchema,
        current: nonNegativeIntegerSchema,
        temporary: nonNegativeIntegerSchema,
        wounded: nonNegativeIntegerSchema,
        dying: nonNegativeIntegerSchema,
        doomed: nonNegativeIntegerSchema,
      })
      .strict(),
    armorClass: nonNegativeIntegerSchema,
    initiative: integerSchema,
    perception: proficiencyValueSchema,
    savingThrows: z
      .object({
        fortitude: proficiencyValueSchema,
        reflex: proficiencyValueSchema,
        will: proficiencyValueSchema,
      })
      .strict(),
    skills: skillSetSchema,
    notes: freeTextSchema,
  })
  .strict()
