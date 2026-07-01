import { z } from 'zod'

export const vttGridSettingsSchema = z.object({
  visible: z.boolean(),
  shape: z.enum(['square', 'hex']),
  size: z.number().int().min(24).max(96),
  metersPerCell: z.number().positive().max(10000),
  squareMeasurementColor: z.string().regex(/^#[0-9a-fA-F]{6}$/),
  hexMeasurementColor: z.string().regex(/^#[0-9a-fA-F]{6}$/),
  lineWidth: z.number().int().min(1).max(4),
  color: z.string().regex(/^#[0-9a-fA-F]{6}$/),
})

export const vttGridUpdateSchema = z.object({
  campaignId: z.string().min(1),
  sceneId: z.string().min(1).optional(),
  settings: vttGridSettingsSchema,
})

export const vttTokenPositionSchema = z.object({
  x: z.number().min(0).max(100000),
  y: z.number().min(0).max(100000),
})

const vttMeasurementPointSchema = z.object({
  x: z.number().min(0).max(100000),
  y: z.number().min(0).max(100000),
})

export const vttMeasurementSchema = z.discriminatedUnion('shape', [
  z.object({
    shape: z.literal('square'),
    start: vttMeasurementPointSchema,
    end: vttMeasurementPointSchema,
    color: z.string().regex(/^#[0-9a-fA-F]{6}$/),
  }),
  z.object({
    shape: z.literal('hex'),
    points: z.array(vttMeasurementPointSchema).min(1).max(500),
    color: z.string().regex(/^#[0-9a-fA-F]{6}$/),
  }),
])

export const vttMeasurementUpdateSchema = z.object({
  campaignId: z.string().min(1),
  measurement: vttMeasurementSchema.nullable(),
})

export const vttTableSceneSchema = z.object({
  id: z.string().min(1).max(200),
  name: z.string().min(1).max(120),
  imageUrl: z.string().min(1).max(12000).nullable(),
  fileName: z.string().min(1).max(255).nullable(),
  assetId: z.string().min(1).max(200).nullable(),
  width: z.number().int().min(1).max(100000),
  height: z.number().int().min(1).max(100000),
})

export const vttSceneSelectSchema = z.object({
  campaignId: z.string().min(1),
  scene: vttTableSceneSchema.nullable(),
})

export const vttDiceSidesSchema = z.union([
  z.literal(4),
  z.literal(6),
  z.literal(8),
  z.literal(10),
  z.literal(12),
  z.literal(20),
])

const vttDiceRollItemSchema = z
  .object({
    sides: vttDiceSidesSchema,
    value: z.number().int().min(1),
  })
  .refine((roll) => roll.value <= roll.sides)

export const vttDiceRollSchema = z
  .object({
    campaignId: z.string().min(1),
    sides: vttDiceSidesSchema.optional(),
    value: z.number().int().min(1).optional(),
    rolls: z.array(vttDiceRollItemSchema).min(1).max(20).optional(),
  })
  .transform((input) => ({
    campaignId: input.campaignId,
    rolls: input.rolls ?? (input.sides && input.value ? [{ sides: input.sides, value: input.value }] : []),
  }))
  .refine((input) => input.rolls.length > 0)

export const vttDiceRolledSchema = z.object({
  id: z.number().int().positive(),
  sides: vttDiceSidesSchema,
  value: z.number().int().min(1),
  characterId: z.string().min(1),
  characterName: z.string().min(1),
  rolledAt: z.number().int().positive(),
})

export const vttTokenUpdateSchema = z.object({
  campaignId: z.string().min(1),
  characterId: z.string().min(1).optional(),
  position: vttTokenPositionSchema,
})

export const vttTokenPlaceSchema = z.object({
  campaignId: z.string().min(1),
  characterId: z.string().min(1),
  position: vttTokenPositionSchema,
})

export const vttTokenActionSchema = z.object({
  campaignId: z.string().min(1),
  characterId: z.string().min(1),
})

export const vttTokensRemoveBulkSchema = z.discriminatedUnion('scope', [
  z.object({
    campaignId: z.string().min(1),
    scope: z.literal('scene'),
    sceneId: z.string().min(1),
  }),
  z.object({
    campaignId: z.string().min(1),
    scope: z.literal('global'),
  }),
])

export type UserPresence = { socketId: string; campaignId: string; characterId: string }
export type CampaignSessionState = 'ACTIVE' | 'PAUSED'
export type OnlineCampaign = {
  masterSocketId: string
  masterUserId: string
  masterCharacterId: string
  state: CampaignSessionState
}
export type PresenceAck = (response: { ok: boolean; error?: string }) => void
export type VttGridSettings = z.infer<typeof vttGridSettingsSchema>
export type VttTokenPosition = z.infer<typeof vttTokenPositionSchema>
export type VttMeasurement = z.infer<typeof vttMeasurementSchema>
export type VttDiceRoll = z.infer<typeof vttDiceRolledSchema>
export type VttTableScene = Omit<z.infer<typeof vttTableSceneSchema>, 'imageUrl'> & {
  imageUrl: string | null
  grid?: VttGridSettings
  tokens?: VttPlayerToken[]
}
export type VttPlayerToken = {
  id: string
  characterId: string
  name: string
  avatarUrl: string | null
  ownerUserId: string
  ownerName: string
  role: 'PLAYER' | 'NPC'
  hidden: boolean
  position: VttTokenPosition
}

export const defaultVttGridSettings: VttGridSettings = {
  visible: false,
  shape: 'square',
  size: 32,
  metersPerCell: 1,
  squareMeasurementColor: '#f97316',
  hexMeasurementColor: '#f97316',
  lineWidth: 1,
  color: '#94a3b8',
}
