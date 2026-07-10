import { z } from 'zod'

const positionSchema = z.object({
  x: z.number().min(0).max(100000),
  y: z.number().min(0).max(100000),
})

const sceneHazardScopeSchema = z.enum(['POINT', 'AREA', 'SCENE', 'TARGET'])
const sceneHazardTriggerModeSchema = z.enum(['MANUAL', 'ON_TOKEN_ENTER', 'ALWAYS_ON'])
const sceneHazardExecutionModeSchema = z.enum(['INSTANT', 'ONGOING', 'ENCOUNTER_PARTICIPANT'])
const sceneHazardStateSchema = z.enum(['ARMED', 'TRIGGERED', 'ACTIVE', 'DISABLED', 'EXPIRED'])

export const placeSceneHazardSchema = z
  .object({
    campaignId: z.string().min(1),
    sceneId: z.string().min(1),
    hazardEntryId: z.string().min(1),
    scope: sceneHazardScopeSchema.default('POINT'),
    position: positionSchema.nullable().optional(),
    triggerMode: sceneHazardTriggerModeSchema.default('MANUAL'),
    executionMode: sceneHazardExecutionModeSchema.default('INSTANT'),
  })
  .superRefine((input, ctx) => {
    if ((input.scope === 'POINT' || input.scope === 'AREA') && !input.position) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message: 'Hazards POINT ou AREA exigem position.',
        path: ['position'],
      })
    }
  })

export const updateSceneHazardSchema = z
  .object({
    campaignId: z.string().min(1),
    hazardId: z.string().min(1),
    scope: sceneHazardScopeSchema.optional(),
    position: positionSchema.nullable().optional(),
    visibility: z.enum(['HIDDEN', 'HINTED', 'REVEALED']).optional(),
    state: sceneHazardStateSchema.optional(),
    triggerMode: sceneHazardTriggerModeSchema.optional(),
    executionMode: sceneHazardExecutionModeSchema.optional(),
    notes: z.string().max(2000).nullable().optional(),
  })
  .refine(
    (input) =>
      input.scope !== undefined ||
      input.position !== undefined ||
      input.visibility !== undefined ||
      input.state !== undefined ||
      input.triggerMode !== undefined ||
      input.executionMode !== undefined ||
      input.notes !== undefined,
  )

export const removeSceneHazardSchema = z.object({
  campaignId: z.string().min(1),
  hazardId: z.string().min(1),
})

export const requestSceneHazardsSchema = z.object({
  campaignId: z.string().min(1),
})
