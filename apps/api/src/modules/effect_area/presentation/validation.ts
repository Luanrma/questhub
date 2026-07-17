import { z } from 'zod'
import { areaTemplateNameMaxLength } from '../domain/template-name'

const finitePositive = z.number().finite().positive().max(100_000)
const optionalDimension = finitePositive.optional()
const colorSchema = z.string().regex(/^#[0-9a-fA-F]{6}$/, 'Cor hexadecimal invalida')

export const areaShapeSchema = z.enum(['CIRCLE', 'CONE', 'LINE', 'RECTANGLE', 'RING', 'POLYGON'])
export const areaVolumeShapeSchema = z.enum(['NONE', 'SPHERE', 'CYLINDER', 'CUBE', 'CUSTOM'])
export const measurementModeSchema = z.enum(['WORLD_UNIT', 'GRID_CELLS'])
export const originModeSchema = z.enum(['SOURCE_TOKEN', 'TARGET_TOKEN', 'FREE_POINT', 'GRID_CELL', 'GRID_INTERSECTION'])
export const placementModeSchema = z.enum(['POINT', 'DIRECTIONAL', 'ATTACHED', 'DRAWN'])
export const propagationModeSchema = z.enum(['BLOCKED_BY_WALLS', 'SPREAD_AROUND_WALLS', 'IGNORE_WALLS'])
export const persistenceModeSchema = z.enum(['PREVIEW_ONLY', 'INSTANT', 'PERSISTENT'])
export const movementModeSchema = z.enum(['STATIC', 'FOLLOW_SOURCE', 'MANUAL'])
export const inclusionRuleSchema = z.enum(['ANY_OVERLAP', 'CENTER_INSIDE', 'HALF_OR_MORE', 'FULLY_INSIDE'])
export const tokenIntersectionRuleSchema = z.enum(['ANY_OVERLAP', 'CENTER_INSIDE', 'HALF_OR_MORE', 'FULLY_INSIDE', 'COVERED_CELLS', 'MANUAL'])
export const visibilitySchema = z.enum(['MASTER_ONLY', 'ALL_PLAYERS', 'SELECTED_PLAYERS'])
export const visualEffectSchema = z.enum(['DEFAULT', 'FIRE', 'ELECTRIC', 'HEALING', 'EARTH', 'VINES', 'LEAVES'])

export const dimensionsSchema = z.object({
  radius: optionalDimension,
  innerRadius: z.number().finite().min(0).max(100_000).optional(),
  length: optionalDimension,
  width: optionalDimension,
  startWidth: z.number().finite().min(0).max(100_000).optional(),
  endWidth: optionalDimension,
  angleDegrees: z.number().finite().min(1).max(359).optional(),
  height: optionalDimension,
  elevation: z.number().finite().min(-100_000).max(100_000).optional(),
  polygonPoints: z.array(z.object({ x: z.number().finite(), y: z.number().finite() })).min(3).max(100).optional(),
}).strict()

export const affectedTokenRingStyleSchema = z.object({
  color: colorSchema,
  opacity: z.number().finite().min(0).max(1),
  thicknessPx: z.number().finite().min(1).max(16),
  gapPx: z.number().finite().min(0).max(32),
  pulse: z.boolean(),
}).strict()

export const areaStyleSchema = z.object({
  visualEffect: visualEffectSchema.default('DEFAULT'),
  fillColor: colorSchema,
  borderColor: colorSchema,
  borderWidthPx: z.number().finite().min(1).max(16),
  opacity: z.number().finite().min(0).max(1),
  textureAssetId: z.string().min(1).max(200).optional(),
  showCoveredCells: z.boolean(),
  showOrigin: z.boolean(),
  showDirectionLine: z.boolean(),
  affectedTokenRing: affectedTokenRingStyleSchema,
}).strict()

const durationSchema = z.object({
  rounds: z.number().int().positive().max(100_000).optional(),
  turns: z.number().int().positive().max(100_000).optional(),
  seconds: z.number().int().positive().max(31_536_000).optional(),
  description: z.string().trim().max(300).optional(),
}).strict()

const templateFieldsSchema = z.object({
  name: z.string().trim().min(1).max(areaTemplateNameMaxLength),
  description: z.string().trim().max(1000).optional(),
  category: z.string().trim().max(80).optional(),
  tags: z.array(z.string().trim().min(1).max(40)).max(20).default([]),
  iconAssetId: z.string().min(1).max(200).optional(),
  shape: areaShapeSchema,
  volumeShape: areaVolumeShapeSchema.default('NONE'),
  dimensions: dimensionsSchema,
  measurementMode: measurementModeSchema,
  measurementUnit: z.string().trim().min(1).max(30).optional(),
  originMode: originModeSchema,
  placementMode: placementModeSchema,
  propagationMode: propagationModeSchema,
  persistenceMode: persistenceModeSchema,
  movementMode: movementModeSchema,
  cellInclusionRule: inclusionRuleSchema,
  tokenIntersectionRule: tokenIntersectionRuleSchema,
  includesOrigin: z.boolean(),
  stopAtFirstObstacle: z.boolean(),
  duration: durationSchema.optional(),
  style: areaStyleSchema,
  visibility: visibilitySchema,
}).strict()

function validateShapeDimensions(value: z.infer<typeof templateFieldsSchema>, context: z.RefinementCtx) {
  const missing = (field: keyof z.infer<typeof dimensionsSchema>) => context.addIssue({
    code: 'custom',
    path: ['dimensions', field],
    message: `Dimensao ${field} obrigatoria para ${value.shape}`,
  })

  if (value.shape === 'CIRCLE' && value.dimensions.radius === undefined) missing('radius')
  if (value.shape === 'CONE') {
    if (value.dimensions.length === undefined) missing('length')
    if (value.dimensions.angleDegrees === undefined && value.dimensions.endWidth === undefined) missing('angleDegrees')
  }
  if (value.shape === 'LINE' || value.shape === 'RECTANGLE') {
    if (value.dimensions.length === undefined) missing('length')
    if (value.dimensions.width === undefined) missing('width')
  }
  if (value.shape === 'RING') {
    if (value.dimensions.radius === undefined) missing('radius')
    if (value.dimensions.innerRadius === undefined) missing('innerRadius')
    if ((value.dimensions.innerRadius ?? 0) >= (value.dimensions.radius ?? 0)) {
      context.addIssue({ code: 'custom', path: ['dimensions', 'innerRadius'], message: 'Raio interno deve ser menor que o externo' })
    }
  }
  if (value.shape === 'POLYGON' && !value.dimensions.polygonPoints) missing('polygonPoints')
}

export const createAreaTemplateSchema = templateFieldsSchema.superRefine(validateShapeDimensions)
export const updateAreaTemplateSchema = templateFieldsSchema.partial().refine((value) => Object.keys(value).length > 0, 'Informe ao menos um campo')
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

export type AreaTemplateInput = z.infer<typeof createAreaTemplateSchema>
export type AreaTemplatePatch = z.infer<typeof updateAreaTemplateSchema>
export type SceneAreaEffectInput = z.infer<typeof createSceneAreaEffectSchema>
export type SceneAreaEffectPatch = z.infer<typeof updateSceneAreaEffectSchema>
