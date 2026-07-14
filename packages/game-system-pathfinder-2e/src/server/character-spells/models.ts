import { z } from 'zod'

export const PATHFINDER_2E_SPELLCASTING_CATEGORIES = ['PREPARED', 'SPONTANEOUS', 'INNATE', 'FOCUS', 'ITEMS', 'RITUAL'] as const

export type Pathfinder2eSpellcastingCategory = (typeof PATHFINDER_2E_SPELLCASTING_CATEGORIES)[number]

export const PATHFINDER_2E_PREPARATION_STYLES = ['STANDARD', 'FLEXIBLE'] as const

export type Pathfinder2ePreparationStyle = (typeof PATHFINDER_2E_PREPARATION_STYLES)[number]

const spellRankSchema = z.number().int().min(0).max(10)

export const pathfinder2eSpellSlotRankSchema = z
  .object({
    rank: spellRankSchema,
    max: z.number().int().min(0),
    // Slots ja gastos neste rank (conjuracao espontanea). Opcional para
    // compatibilidade com spellbooks gravados antes do fluxo de conjuracao;
    // ausente equivale a 0.
    used: z.number().int().min(0).optional(),
  })
  .strict()

export type Pathfinder2eSpellSlotRank = z.infer<typeof pathfinder2eSpellSlotRankSchema>

export const pathfinder2eKnownSpellSchema = z
  .object({
    spellId: z.string().trim().min(1),
    name: z.string().trim().min(1),
    rank: spellRankSchema,
  })
  .strict()

export type Pathfinder2eKnownSpell = z.infer<typeof pathfinder2eKnownSpellSchema>

export const pathfinder2ePreparedSpellSlotSchema = z
  .object({
    rank: spellRankSchema,
    slotIndex: z.number().int().min(0),
    spellId: z.string().trim().min(1).nullable(),
    name: z.string().trim().min(1).nullable(),
    expended: z.boolean(),
  })
  .strict()

export type Pathfinder2ePreparedSpellSlot = z.infer<typeof pathfinder2ePreparedSpellSlotSchema>

export const pathfinder2eFocusPoolSchema = z
  .object({
    points: z.number().min(0),
    max: z.number().min(0),
  })
  .strict()

export type Pathfinder2eFocusPool = z.infer<typeof pathfinder2eFocusPoolSchema>

export const pathfinder2eInnateSpellUseSchema = z
  .object({
    spellId: z.string().trim().min(1),
    name: z.string().trim().min(1),
    usesPerDay: z.union([z.number().int().min(0), z.literal('at-will')]),
    used: z.number().int().min(0),
  })
  .strict()

export type Pathfinder2eInnateSpellUse = z.infer<typeof pathfinder2eInnateSpellUseSchema>

export const pathfinder2eRitualEntrySchema = z
  .object({
    spellId: z.string().trim().min(1),
    name: z.string().trim().min(1),
  })
  .strict()

export type Pathfinder2eRitualEntry = z.infer<typeof pathfinder2eRitualEntrySchema>

export const pathfinder2eRecentCastSchema = z
  .object({
    clientCastId: z.string().trim().min(1).max(80),
    requestKey: z.string().trim().min(1),
    response: z
      .object({
        characterId: z.string().trim().min(1),
        revision: z.number().int().min(0),
        spellName: z.string().trim().min(1),
        consumed: z.string().trim().min(1),
        entryId: z.string().trim().min(1).optional(),
        spellId: z.string().trim().min(1).optional(),
        castRank: spellRankSchema.optional(),
      })
      .strict(),
    createdAt: z.string().trim().min(1),
  })
  .strict()

export type Pathfinder2eRecentCast = z.infer<typeof pathfinder2eRecentCastSchema>

export const pathfinder2eSpellcastingEntrySchema = z
  .object({
    id: z.string().trim().min(1),
    name: z.string().trim().min(1),
    category: z.enum(PATHFINDER_2E_SPELLCASTING_CATEGORIES),
    tradition: z.string().trim().min(1),
    ability: z.string().trim().min(1),
    proficiencyRank: z.number().int().min(0),
    preparationStyle: z.enum(PATHFINDER_2E_PREPARATION_STYLES).optional(),
    slots: z.array(pathfinder2eSpellSlotRankSchema),
    known: z.array(pathfinder2eKnownSpellSchema),
    prepared: z.array(pathfinder2ePreparedSpellSlotSchema),
    focusPool: pathfinder2eFocusPoolSchema.optional(),
    innateUses: z.array(pathfinder2eInnateSpellUseSchema),
    signatureSpellIds: z.array(z.string().trim().min(1)),
    // Spell DC fixo, so presente em entradas de NPC (statblocks de monstro
    // imprimem o DC final, nao proficiencia+atributo) — ver
    // .ai/game_systems/pathfinder_2e/npc_spellcasting/specs.md secao 2.
    // Entradas de personagem nunca preenchem este campo.
    npcSpellDC: z.number().int().min(1).max(60).optional(),
  })
  .strict()

export type Pathfinder2eSpellcastingEntry = z.infer<typeof pathfinder2eSpellcastingEntrySchema>

export const pathfinder2eCharacterSpellbookSchema = z
  .object({
    entries: z.array(pathfinder2eSpellcastingEntrySchema),
    rituals: z.array(pathfinder2eRitualEntrySchema),
    focusPool: pathfinder2eFocusPoolSchema.optional(),
    recentCasts: z.array(pathfinder2eRecentCastSchema).max(20).optional(),
  })
  .strict()

export type Pathfinder2eCharacterSpellbookData = z.infer<typeof pathfinder2eCharacterSpellbookSchema>

export const DEFAULT_PATHFINDER_2E_CHARACTER_SPELLBOOK: Pathfinder2eCharacterSpellbookData = {
  entries: [],
  rituals: [],
}
