import { z } from 'zod'
import { GRID_SIZE_LIMITS, METERS_PER_CELL_LIMITS } from '../campaign_scene/domain/grid-settings'

export const vttGridSettingsSchema = z.object({
  visible: z.boolean(),
  shape: z.enum(['square', 'hex']),
  size: z.number().int().min(GRID_SIZE_LIMITS.min).max(GRID_SIZE_LIMITS.max),
  offsetX: z.number().int().min(-96).max(96),
  offsetY: z.number().int().min(-96).max(96),
  metersPerCell: z.number()
    .min(METERS_PER_CELL_LIMITS.min)
    .max(METERS_PER_CELL_LIMITS.max)
    .multipleOf(METERS_PER_CELL_LIMITS.step),
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

export const vttTargetMarkerStyleSchema = z.enum(['ARROWS', 'RETICLE'])

export const vttTargetMarkerStyleUpdateSchema = z.object({
  campaignId: z.string().min(1),
  style: vttTargetMarkerStyleSchema,
})

export const vttTokenPositionSchema = z.object({
  x: z.number().min(0).max(100000),
  y: z.number().min(0).max(100000),
})

const vttMeasurementPointSchema = z.object({
  x: z.number().min(0).max(100000),
  y: z.number().min(0).max(100000),
})

export const vttMeasurementSchema = z.object({
  tokenId: z.string().min(1),
  sceneId: z.string().min(1),
  points: z.array(vttMeasurementPointSchema).min(1).max(100),
  color: z.string().regex(/^#[0-9a-fA-F]{6}$/),
})

export const vttMeasurementUpdateSchema = z.object({
  campaignId: z.string().min(1),
  measurement: vttMeasurementSchema.nullable(),
})

const vttScenePointSchema = z.object({
  x: z.number().finite().min(0).max(100000),
  y: z.number().finite().min(0).max(100000),
})

const vttPassageStateSchema = z.object({
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
    allowsLight: z.boolean().default(false),
  }),
  z.object({
    id: z.string().min(1).max(200),
    kind: z.literal('door'),
    start: vttScenePointSchema,
    end: vttScenePointSchema,
    color: z.string().regex(/^#[0-9a-fA-F]{6}$/).optional(),
    playerVisible: z.boolean().default(false),
    blocksEffects: z.boolean().default(true),
    door: vttPassageStateSchema,
  }),
  z.object({
    id: z.string().min(1).max(200),
    kind: z.literal('window'),
    start: vttScenePointSchema,
    end: vttScenePointSchema,
    color: z.string().regex(/^#[0-9a-fA-F]{6}$/).optional(),
    playerVisible: z.boolean().default(false),
    blocksEffects: z.boolean().default(true),
    allowsLight: z.boolean().default(true),
    window: vttPassageStateSchema,
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
  fogConfig: z.unknown().default({}),
  fixedLightSources: z.array(z.unknown()).max(256).default([]),
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

const vttDiceRollGroupSchema = z.object({
  sides: vttDiceSidesSchema,
  count: z.number().int().min(1).max(40),
})

export const vttDiceRollSchema = z
  .object({
    campaignId: z.string().trim().min(1),
    groups: z.array(vttDiceRollGroupSchema).min(1).max(6),
    rolls: z.array(vttDiceRollItemSchema).min(1).max(40),
    modifier: z.number().int().min(Number.MIN_SAFE_INTEGER).max(Number.MAX_SAFE_INTEGER - 800).default(0),
    label: z.string().trim().min(1).max(120).nullable().default(null),
  })
  .superRefine((input, context) => {
    const declaredCounts = new Map<number, number>()
    for (const group of input.groups) {
      if (declaredCounts.has(group.sides)) {
        context.addIssue({ code: 'custom', path: ['groups'], message: 'Dice groups must use unique sides' })
      }
      declaredCounts.set(group.sides, group.count)
    }

    const declaredTotal = input.groups.reduce((total, group) => total + group.count, 0)
    if (declaredTotal > 40) {
      context.addIssue({ code: 'custom', path: ['groups'], message: 'A roll may contain at most 40 dice' })
    }
    if (declaredTotal !== input.rolls.length) {
      context.addIssue({ code: 'custom', path: ['rolls'], message: 'Roll values must match declared dice groups' })
    }

    const receivedCounts = new Map<number, number>()
    for (const roll of input.rolls) receivedCounts.set(roll.sides, (receivedCounts.get(roll.sides) ?? 0) + 1)
    for (const [sides, count] of declaredCounts) {
      if (receivedCounts.get(sides) !== count) {
        context.addIssue({ code: 'custom', path: ['rolls'], message: 'Roll values must match each declared dice group' })
      }
    }
  })

export const vttDiceRolledSchema = z.object({
  id: z.number().int().positive(),
  sides: vttDiceSidesSchema,
  value: z.number().int().min(1),
  actorId: z.null(),
  actorName: z.string().min(1),
  rolledAt: z.number().int().positive(),
})

export const vttTokenUpdateSchema = z.object({
  campaignId: z.string().min(1),
  tokenId: z.string().min(1),
  position: vttTokenPositionSchema,
})

export const vttTokenMovePathSchema = z.object({
  campaignId: z.string().min(1),
  tokenId: z.string().min(1),
  sceneId: z.string().min(1),
  path: z.array(vttMeasurementPointSchema).min(2).max(100),
}).refine((input) => input.path.some((point, index) => {
  if (index === 0) return false
  const previous = input.path[index - 1]
  return Math.hypot(point.x - previous.x, point.y - previous.y) > 0.001
}))

export const vttTokenPlaceSchema = z.object({
  campaignId: z.string().min(1),
  sceneId: z.string().min(1),
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

export const vttCombatParticipantsSchema = z.object({
  campaignId: z.string().min(1),
  tokenIds: z.array(z.string().min(1)).min(1).max(100),
}).refine((input) => new Set(input.tokenIds).size === input.tokenIds.length)

export const vttCombatAdjustInitiativeSchema = z.object({
  campaignId: z.string().min(1),
  tokenId: z.string().min(1),
  initiativeAdjustment: z.number().int().min(-1000).max(1000),
})

export type UserPresence = { socketId: string; campaignId: string }
export type CampaignSessionState = 'ACTIVE' | 'PAUSED'
export type OnlineCampaign = {
  masterSocketId: string
  masterUserId: string
  state: CampaignSessionState
}
export type PresenceAck = (response: { ok: boolean; error?: string }) => void
export type VttGridSettings = z.infer<typeof vttGridSettingsSchema>
export type VttTargetMarkerStyle = z.infer<typeof vttTargetMarkerStyleSchema>
export type VttTokenPosition = z.infer<typeof vttTokenPositionSchema>
export type VttMeasurement = z.infer<typeof vttMeasurementSchema>
export type VttTokenMovePath = z.infer<typeof vttTokenMovePathSchema>
export type VttTokenMovementStarted = VttTokenMovePath & {
  startedAt: number
  durationMs: number
}
export type VttDiceRoll = z.infer<typeof vttDiceRolledSchema>
export type VttTableScene = Omit<z.infer<typeof vttTableSceneSchema>, 'imageUrl'> & {
  imageUrl: string | null
  grid?: VttGridSettings
  tokens?: VttPlayerToken[]
}
export type VttPlayerToken = {
  id: string
  actorId: string | null
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
  visionConfig: unknown
  lightConfig: unknown
  hidden: boolean
  rotation: number
  layer: 'OBJECT' | 'TOKEN' | 'OVERLAY'
  blocksVisionAndLight: boolean
  position: VttTokenPosition
}

export type { VttCombatParticipant, VttCombatState } from './domain/encounter'

export const defaultVttGridSettings: VttGridSettings = {
  visible: false,
  shape: 'square',
  size: GRID_SIZE_LIMITS.default,
  offsetX: 0,
  offsetY: 0,
  metersPerCell: METERS_PER_CELL_LIMITS.default,
  squareMeasurementColor: '#f97316',
  hexMeasurementColor: '#f97316',
  lineWidth: 1,
  color: '#94a3b8',
}
