import { z } from 'zod'

export const CAMPAIGN_SCENE_NAME_MAX_LENGTH = 80
export const CAMPAIGN_DIARY_TITLE_MAX_LENGTH = 120
export const CAMPAIGN_DIARY_CONTENT_MAX_LENGTH = 50000

export const colorHexSchema = z.string().regex(/^#[0-9a-fA-F]{6}$/, 'Cor deve estar no formato hexadecimal #RRGGBB')

export const campaignSceneParamsSchema = z.object({
  campaignId: z.string().trim().min(1, 'Campanha invalida'),
})

export const campaignSceneIdParamsSchema = campaignSceneParamsSchema.extend({
  sceneId: z.string().trim().min(1, 'Cena invalida'),
})

export const campaignDiaryIdParamsSchema = campaignSceneParamsSchema.extend({
  diaryId: z.string().trim().min(1, 'Diario invalido'),
})

export const campaignSceneGridSchema = z.discriminatedUnion('shape', [
  z.object({
    visible: z.boolean().default(true),
    shape: z.literal('square'),
    size: z.number().int().min(24).max(96),
    metersPerCell: z.number().positive().max(10000),
    squareMeasurementColor: colorHexSchema,
    lineWidth: z.number().int().min(1).max(4),
    color: colorHexSchema,
  }),
  z.object({
    visible: z.boolean().default(true),
    shape: z.literal('hex'),
    size: z.number().int().min(24).max(96),
    hexMeasurementColor: colorHexSchema,
    lineWidth: z.number().int().min(1).max(4),
    color: colorHexSchema,
  }),
])

export const defaultCampaignSceneGrid = {
  visible: true,
  shape: 'square',
  size: 32,
  metersPerCell: 1,
  squareMeasurementColor: '#facc15',
  lineWidth: 1,
  color: '#ffffff',
} as const

export const createCampaignSceneSchema = z.object({
  name: z.string().trim().min(1, 'Nome e obrigatorio').max(CAMPAIGN_SCENE_NAME_MAX_LENGTH, 'Nome muito longo'),
  order: z.number().int().min(1).optional(),
  assetId: z.string().trim().min(1).nullable().optional(),
  backgroundUrl: z.string().trim().max(2048).nullable().optional(),
  backgroundCacheKey: z.string().trim().max(256).nullable().optional(),
  grid: campaignSceneGridSchema.optional(),
})

export const updateCampaignSceneSchema = z.object({
  name: z.string().trim().min(1, 'Nome e obrigatorio').max(CAMPAIGN_SCENE_NAME_MAX_LENGTH, 'Nome muito longo').optional(),
  order: z.number().int().min(1).optional(),
  assetId: z.string().trim().min(1).nullable().optional(),
  backgroundUrl: z.string().trim().max(2048).nullable().optional(),
  backgroundCacheKey: z.string().trim().max(256).nullable().optional(),
  grid: campaignSceneGridSchema.optional(),
})

export const campaignSceneTokenPositionSchema = z.object({
  x: z.number().finite().min(0),
  y: z.number().finite().min(0),
})

export const campaignSceneTokenSchema = z.object({
  sceneId: z.string().trim().min(1, 'Cena invalida'),
  characterId: z.string().trim().min(1, 'Personagem invalido'),
  hidden: z.boolean().optional(),
  position: campaignSceneTokenPositionSchema,
})

export const campaignSceneViewStateSchema = z.object({
  masterActiveSceneId: z.string().trim().min(1).nullable().optional(),
  forcedSceneId: z.string().trim().min(1).nullable().optional(),
})

export const deleteCampaignSceneQuerySchema = z.object({
  force: z.coerce.boolean().default(false),
})

export const createCampaignDiarySchema = z.object({
  title: z.string().trim().min(1, 'Titulo e obrigatorio').max(CAMPAIGN_DIARY_TITLE_MAX_LENGTH, 'Titulo muito longo'),
  content: z.string().max(CAMPAIGN_DIARY_CONTENT_MAX_LENGTH, 'Diario muito longo').optional(),
})

export const updateCampaignDiarySchema = z.object({
  title: z.string().trim().min(1, 'Titulo e obrigatorio').max(CAMPAIGN_DIARY_TITLE_MAX_LENGTH, 'Titulo muito longo').optional(),
  content: z.string().max(CAMPAIGN_DIARY_CONTENT_MAX_LENGTH, 'Diario muito longo').optional(),
})
