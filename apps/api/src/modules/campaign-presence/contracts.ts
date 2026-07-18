import { z } from 'zod'

export const vttGridSettingsSchema = z.object({
  visible: z.boolean(),
  shape: z.enum(['square', 'hex']),
  size: z.number().int().min(24).max(96),
  offsetX: z.number().int().min(-96).max(96),
  offsetY: z.number().int().min(-96).max(96),
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

const vttScenePointSchema = z.object({
  x: z.number().finite().min(0).max(100000),
  y: z.number().finite().min(0).max(100000),
})

const vttDoorStateSchema = z.object({
  open: z.boolean(),
  locked: z.boolean().default(false),
  blocked: z.boolean().default(false),
  ajar: z.boolean().default(false),
}).transform((door) => door.open
  ? { open: true, locked: false, blocked: false, ajar: false }
  : door)

export const vttWallSegmentSchema = z.discriminatedUnion('kind', [
  z.object({
    id: z.string().min(1).max(200),
    kind: z.literal('wall'),
    start: vttScenePointSchema,
    end: vttScenePointSchema,
    color: z.string().regex(/^#[0-9a-fA-F]{6}$/).optional(),
    playerVisible: z.boolean().default(false),
    blocksEffects: z.boolean().default(true),
  }),
  z.object({
    id: z.string().min(1).max(200),
    kind: z.literal('door'),
    start: vttScenePointSchema,
    end: vttScenePointSchema,
    color: z.string().regex(/^#[0-9a-fA-F]{6}$/).optional(),
    playerVisible: z.boolean().default(false),
    blocksEffects: z.boolean().default(true),
    door: vttDoorStateSchema,
  }),
])

export const vttTableSceneSchema = z.object({
  id: z.string().min(1).max(200),
  name: z.string().min(1).max(120),
  imageUrl: z.string().min(1).max(12000).nullable(),
  fileName: z.string().min(1).max(255).nullable(),
  assetId: z.string().min(1).max(200).nullable(),
  width: z.number().int().min(1).max(100000),
  height: z.number().int().min(1).max(100000),
  walls: z.array(vttWallSegmentSchema).max(1000).default([]),
})

export const vttSceneSelectSchema = z.object({
  campaignId: z.string().min(1),
  scene: vttTableSceneSchema.nullable(),
})

export const vttWallsUpdateSchema = z.object({
  campaignId: z.string().min(1),
  sceneId: z.string().min(1),
  walls: z.array(vttWallSegmentSchema).max(1000).default([]),
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
  tokenId: z.string().min(1),
  position: vttTokenPositionSchema,
})

export const vttTokenPlaceSchema = z.object({
  campaignId: z.string().min(1),
  tokenId: z.string().min(1),
  position: vttTokenPositionSchema,
})

export const vttTokenActionSchema = z.object({
  campaignId: z.string().min(1),
  tokenId: z.string().min(1),
})

export const vttTokenRotateSchema = vttTokenActionSchema.extend({
  rotation: z.number().finite().min(-36000).max(36000),
})

export const vttTokenLayerSchema = vttTokenActionSchema.extend({
  layer: z.enum(['OBJECT', 'TOKEN', 'OVERLAY']),
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

export const vttCombatStartSchema = z.object({
  campaignId: z.string().min(1),
  sceneId: z.string().min(1),
  tokenIds: z.array(z.string().min(1)).min(1).max(100),
}).refine((input) => new Set(input.tokenIds).size === input.tokenIds.length)

export const vttCombatCommandSchema = z.object({
  campaignId: z.string().min(1),
})

export const vttCombatUpdateInitiativeSchema = z.object({
  campaignId: z.string().min(1),
  tokenId: z.string().min(1),
  initiative: z.number().int().min(-1000).max(1000).nullable(),
})

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
  characterId: string | null
  name: string
  avatarUrl: string | null
  color: string | null
  size: number
  ownerUserId: string | null
  ownerName: string | null
  controllerMemberId: string | null
  controllerUserId: string | null
  role: 'PLAYER' | 'NPC' | 'GENERIC'
  canCustomizeAppearance: boolean
  hidden: boolean
  rotation: number
  layer: 'OBJECT' | 'TOKEN' | 'OVERLAY'
  position: VttTokenPosition
}

export type VttCombatParticipant = {
  tokenId: string
  characterId: string | null
  name: string
  avatarUrl: string | null
  color: string | null
  initiative: number | null
}

export type VttCombatState = {
  campaignId: string
  sceneId: string
  round: number
  activeTurnIndex: number
  status: 'ACTIVE'
  participants: VttCombatParticipant[]
}

export const defaultVttGridSettings: VttGridSettings = {
  visible: false,
  shape: 'square',
  size: 32,
  offsetX: 0,
  offsetY: 0,
  metersPerCell: 1,
  squareMeasurementColor: '#f97316',
  hexMeasurementColor: '#f97316',
  lineWidth: 1,
  color: '#94a3b8',
}
