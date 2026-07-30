import { z } from 'zod'
import { GRID_SIZE_LIMITS, METERS_PER_CELL_LIMITS } from './domain/grid-settings'

export const CAMPAIGN_SCENE_NAME_MAX_LENGTH = 80

export const colorHexSchema = z.string().regex(/^#[0-9a-fA-F]{6}$/, 'Cor deve estar no formato hexadecimal #RRGGBB')

export const campaignSceneParamsSchema = z.object({
  campaignId: z.string().trim().min(1, 'Campanha invalida'),
})

export const campaignSceneIdParamsSchema = campaignSceneParamsSchema.extend({
  sceneId: z.string().trim().min(1, 'Cena invalida'),
})

export const campaignSceneGridSchema = z.discriminatedUnion('shape', [
  z.object({
    visible: z.boolean().default(true),
    shape: z.literal('square'),
    size: z.number().int().min(GRID_SIZE_LIMITS.min).max(GRID_SIZE_LIMITS.max),
    offsetX: z.number().int().min(-96).max(96).default(0),
    offsetY: z.number().int().min(-96).max(96).default(0),
    metersPerCell: z.number()
      .min(METERS_PER_CELL_LIMITS.min)
      .max(METERS_PER_CELL_LIMITS.max)
      .multipleOf(METERS_PER_CELL_LIMITS.step),
    squareMeasurementColor: colorHexSchema,
    lineWidth: z.number().int().min(1).max(4),
    color: colorHexSchema,
  }),
  z.object({
    visible: z.boolean().default(true),
    shape: z.literal('hex'),
    size: z.number().int().min(GRID_SIZE_LIMITS.min).max(GRID_SIZE_LIMITS.max),
    offsetX: z.number().int().min(-96).max(96).default(0),
    offsetY: z.number().int().min(-96).max(96).default(0),
    metersPerCell: z.number()
      .min(METERS_PER_CELL_LIMITS.min)
      .max(METERS_PER_CELL_LIMITS.max)
      .multipleOf(METERS_PER_CELL_LIMITS.step),
    hexMeasurementColor: colorHexSchema,
    lineWidth: z.number().int().min(1).max(4),
    color: colorHexSchema,
  }),
])

export const defaultCampaignSceneGrid = {
  visible: true,
  shape: 'square',
  size: GRID_SIZE_LIMITS.default,
  offsetX: 0,
  offsetY: 0,
  metersPerCell: METERS_PER_CELL_LIMITS.default,
  squareMeasurementColor: '#facc15',
  lineWidth: 1,
  color: '#ffffff',
} as const

const campaignSceneWallPointSchema = z.object({
  x: z.number().finite().min(0).max(100000),
  y: z.number().finite().min(0).max(100000),
})

const campaignScenePassageStateSchema = z.object({
  open: z.boolean(),
  locked: z.boolean().default(false),
  blocked: z.boolean().default(false),
  ajar: z.boolean().default(false),
}).transform((door) => door.open
  ? { open: true, locked: false, blocked: false, ajar: false }
  : door)

export const campaignSceneWallSchema = z.discriminatedUnion('kind', [
  z.object({
    id: z.string().trim().min(1).max(200),
    kind: z.literal('wall'),
    start: campaignSceneWallPointSchema,
    end: campaignSceneWallPointSchema,
    color: colorHexSchema.optional(),
    playerVisible: z.boolean().default(false),
    blocksEffects: z.boolean().default(true),
    allowsLight: z.boolean().default(false),
  }),
  z.object({
    id: z.string().trim().min(1).max(200),
    kind: z.literal('door'),
    start: campaignSceneWallPointSchema,
    end: campaignSceneWallPointSchema,
    color: colorHexSchema.optional(),
    playerVisible: z.boolean().default(false),
    blocksEffects: z.boolean().default(true),
    door: campaignScenePassageStateSchema.default({ open: false, locked: false, blocked: false, ajar: true }),
  }),
  z.object({
    id: z.string().trim().min(1).max(200),
    kind: z.literal('window'),
    start: campaignSceneWallPointSchema,
    end: campaignSceneWallPointSchema,
    color: colorHexSchema.optional(),
    playerVisible: z.boolean().default(false),
    blocksEffects: z.boolean().default(true),
    allowsLight: z.boolean().default(true),
    window: campaignScenePassageStateSchema.default({ open: false, locked: false, blocked: false, ajar: false }),
  }),
]).refine((wall) => Math.hypot(wall.end.x - wall.start.x, wall.end.y - wall.start.y) > 0.001, 'Segmento invalido')

export const campaignSceneWallsSchema = z.array(campaignSceneWallSchema).max(1000).default([])

export const createCampaignSceneSchema = z.object({
  name: z.string().trim().min(1, 'Nome e obrigatorio').max(CAMPAIGN_SCENE_NAME_MAX_LENGTH, 'Nome muito longo'),
  order: z.number().int().min(1).optional(),
  assetId: z.string().trim().min(1).nullable().optional(),
  backgroundUrl: z.string().trim().max(2048).nullable().optional(),
  backgroundCacheKey: z.string().trim().max(256).nullable().optional(),
  grid: campaignSceneGridSchema.optional(),
  walls: campaignSceneWallsSchema.optional(),
})

export const updateCampaignSceneSchema = z.object({
  name: z.string().trim().min(1, 'Nome e obrigatorio').max(CAMPAIGN_SCENE_NAME_MAX_LENGTH, 'Nome muito longo').optional(),
  order: z.number().int().min(1).optional(),
  assetId: z.string().trim().min(1).nullable().optional(),
  backgroundUrl: z.string().trim().max(2048).nullable().optional(),
  backgroundCacheKey: z.string().trim().max(256).nullable().optional(),
  grid: campaignSceneGridSchema.optional(),
  walls: campaignSceneWallsSchema.optional(),
})

export const campaignTokenPositionSchema = z.object({
  x: z.number().finite().min(0),
  y: z.number().finite().min(0),
})

export const campaignTokenPlacementSchema = z.object({
  sceneId: z.string().trim().min(1, 'Cena invalida'),
  tokenId: z.string().trim().min(1, 'Token invalido'),
  hidden: z.boolean().optional(),
  position: campaignTokenPositionSchema,
})

export const campaignSceneViewStateSchema = z.object({
  masterActiveSceneId: z.string().trim().min(1).nullable().optional(),
  forcedSceneId: z.string().trim().min(1).nullable().optional(),
})

export const deleteCampaignSceneQuerySchema = z.object({
  force: z.coerce.boolean().default(false),
})
