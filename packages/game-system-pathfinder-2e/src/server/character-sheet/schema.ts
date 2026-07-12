import { z } from 'zod'
import { PATHFINDER_2E_ATTRIBUTE_SLUGS } from '../character-options/constants'
import { PROFICIENCY_RANK_VALUES } from './constants'

const freeTextSchema = z.string()
const integerSchema = z.number().int()
const nonNegativeIntegerSchema = integerSchema.min(0)
const nonNegativeNumberSchema = z.number().min(0)
const positiveIntegerSchema = integerSchema.min(1)
const attributeSlugSchema = z.enum(PATHFINDER_2E_ATTRIBUTE_SLUGS)
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

const catalogSelectionSchema = z
  .object({
    source: z.literal('catalog'),
    id: z.string().trim().min(1),
    sourcePack: z.string().trim().min(1),
    sourceId: z.string().trim().min(1),
    slug: z.string().trim().min(1),
    name: z.string(),
  })
  .strict()

const customSelectionSchema = z
  .object({
    source: z.literal('custom'),
    name: z.string(),
  })
  .strict()

const characterSelectionSchema = z.union([catalogSelectionSchema, customSelectionSchema])

const ruleSelectionsSchema = z.record(z.string(), z.string())

const buildChoicesSchema = z
  .object({
    ancestry: z
      .object({
        boosts: z.record(z.string(), attributeSlugSchema),
        flaws: z.record(z.string(), attributeSlugSchema),
        alternateBoostsEnabled: z.boolean(),
        additionalLanguages: z.array(z.string()),
        ruleSelections: ruleSelectionsSchema,
      })
      .strict(),
    heritage: z
      .object({
        ruleSelections: ruleSelectionsSchema,
      })
      .strict(),
    background: z
      .object({
        boosts: z.record(z.string(), attributeSlugSchema),
        ruleSelections: ruleSelectionsSchema,
      })
      .strict(),
    class: z
      .object({
        keyAbility: attributeSlugSchema.nullable(),
        trainedSkills: z.array(z.string()),
        ruleSelections: ruleSelectionsSchema,
      })
      .strict(),
  })
  .strict()

const armorProficienciesSchema = z
  .object({
    unarmored: proficiencyRankSchema,
    light: proficiencyRankSchema,
    medium: proficiencyRankSchema,
    heavy: proficiencyRankSchema,
  })
  .strict()

const armorClassManualSchema = z
  .object({
    manualAdjustment: integerSchema,
  })
  .strict()

// Formato anterior a Armor Class dinamico (`.ai/game_systems/pathfinder_2e/armor_class/`):
// aceito apenas para migrar dados legados que ainda nao passaram por uma escrita
// com o codigo novo. Novas escritas nunca produzem este formato.
const legacyArmorClassSchema = nonNegativeIntegerSchema

const baseSheetFields = {
  general: z
    .object({
      experience: z
        .object({
          current: nonNegativeIntegerSchema,
          nextLevel: nonNegativeIntegerSchema,
        })
        .strict(),
      movementMeters: nonNegativeNumberSchema,
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
      // Aditivo (ver .ai/game_systems/pathfinder_2e/hit_points/specs.md secao 4):
      // fichas persistidas antes desta feature nao tem este campo, entao o
      // default cobre a leitura sem exigir migracao de versao de envelope.
      manualAdjustment: integerSchema.default(0),
    })
    .strict(),
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
}

const identityV1Schema = z
  .object({
    level: positiveIntegerSchema,
    ancestry: freeTextSchema,
    heritage: freeTextSchema,
    background: freeTextSchema,
    className: freeTextSchema,
  })
  .strict()

const identityV2Schema = z
  .object({
    level: positiveIntegerSchema,
    ancestry: characterSelectionSchema.nullable(),
    heritage: characterSelectionSchema.nullable(),
    background: characterSelectionSchema.nullable(),
    class: characterSelectionSchema.nullable(),
  })
  .strict()

// Legado: identidade V1 (texto livre), sempre com Armor Class no formato antigo —
// sheets V1 nunca chegaram a existir com o formato novo de Armor Class.
export const pathfinder2eSheetV1Schema = z
  .object({
    ...baseSheetFields,
    armorClass: legacyArmorClassSchema,
    identity: identityV1Schema,
  })
  .strict()

// Legado: identidade V2 estruturada, mas ainda com Armor Class no formato antigo
// (dados persistidos antes da evolucao V3 de Armor Class dinamico).
const pathfinder2eSheetV2LegacyArmorClassSchema = z
  .object({
    ...baseSheetFields,
    armorClass: legacyArmorClassSchema,
    identity: identityV2Schema,
    buildChoices: buildChoicesSchema,
  })
  .strict()

// Atual: identidade V2 estruturada + Armor Class dinamico (proficiencias de
// armadura + ajuste manual, total sempre derivado — ver
// .ai/game_systems/pathfinder_2e/armor_class/specs.md).
export const pathfinder2eSheetV2Schema = z
  .object({
    ...baseSheetFields,
    armorClass: armorClassManualSchema,
    armorProficiencies: armorProficienciesSchema,
    identity: identityV2Schema,
    buildChoices: buildChoicesSchema,
  })
  .strict()

export const pathfinder2eSheetSchema = z.union([
  pathfinder2eSheetV1Schema,
  pathfinder2eSheetV2LegacyArmorClassSchema,
  pathfinder2eSheetV2Schema,
])
