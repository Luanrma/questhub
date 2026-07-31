import { z } from 'zod'
import {
  createAreaTemplateSchema,
  updateAreaTemplateSchema,
  type AreaTemplateInput,
  type AreaTemplatePatch,
} from '../../../shared/area-effect/validation'

export * from '../../../shared/area-effect/validation'

export const campaignParamsSchema = z.object({ campaignId: z.string().min(1) })
export const templateParamsSchema = campaignParamsSchema.extend({ templateId: z.string().min(1) })
export const sceneParamsSchema = campaignParamsSchema.extend({ sceneId: z.string().min(1) })
export const effectParamsSchema = sceneParamsSchema.extend({ effectId: z.string().min(1) })

export const createSceneAreaEffectSchema = z.object({
  templateId: z.string().min(1),
  sourceTokenId: z.string().min(1).optional(),
  targetTokenId: z.string().min(1).optional(),
  origin: z.object({
    x: z.number().finite(),
    y: z.number().finite(),
    elevation: z.number().finite().optional(),
  }).strict(),
  rotationDegrees: z.number().int(),
  scale: z.number().finite().min(0.1).max(10).default(1),
}).strict()

export const updateSceneAreaEffectSchema = z.object({
  origin: z.object({
    x: z.number().finite(),
    y: z.number().finite(),
    elevation: z.number().finite().optional(),
  }).strict().optional(),
  rotationDegrees: z.number().int().optional(),
  scale: z.number().finite().min(0.1).max(10).optional(),
}).strict().refine((value) => Object.keys(value).length > 0, 'Informe ao menos uma alteracao')

export const areaPreviewUpdateSchema = z.object({
  campaignId: z.string().min(1),
  sceneId: z.string().min(1),
  preview: z.object({
    templateId: z.string().min(1),
    origin: z.object({ x: z.number().finite(), y: z.number().finite() }).strict(),
    rotationDegrees: z.number().finite(),
    scale: z.number().finite().min(0.1).max(10),
    selectedTargetIds: z.array(z.string().min(1)).max(100),
  }).strict().nullable(),
}).strict()

export { createAreaTemplateSchema, updateAreaTemplateSchema }
export type { AreaTemplateInput, AreaTemplatePatch }
export type SceneAreaEffectInput = z.infer<typeof createSceneAreaEffectSchema>
export type SceneAreaEffectPatch = z.infer<typeof updateSceneAreaEffectSchema>
