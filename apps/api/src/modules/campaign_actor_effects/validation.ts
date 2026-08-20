import { z } from 'zod'

const nullableTrimmedText = (max: number) => z.preprocess(
  (value) => typeof value === 'string' && value.trim() === '' ? null : value,
  z.string().trim().max(max).nullable().optional(),
)

export const actorEffectsParamsSchema = z.object({
  campaignId: z.string().trim().min(1),
  actorId: z.string().trim().min(1),
})

export const actorEffectParamsSchema = actorEffectsParamsSchema.extend({
  effectId: z.string().trim().min(1),
})

export const createManualActorEffectSchema = z.object({
  name: z.string().trim().min(1).max(120),
  description: nullableTrimmedText(4000),
  iconUrl: nullableTrimmedText(2048),
  polarity: z.enum(['BENEFICIAL', 'HARMFUL', 'NEUTRAL']),
  category: nullableTrimmedText(120),
  displayValue: nullableTrimmedText(120),
}).strict()

export const updateActorEffectSchema = z.object({
  name: z.string().trim().min(1).max(120).optional(),
  description: nullableTrimmedText(4000),
  iconUrl: nullableTrimmedText(2048),
  polarity: z.enum(['BENEFICIAL', 'HARMFUL', 'NEUTRAL']).optional(),
  category: nullableTrimmedText(120),
  displayValue: nullableTrimmedText(120),
}).strict().refine(
  (value) => Object.keys(value).length > 0,
  { message: 'Informe ao menos um campo para atualizar' },
)
