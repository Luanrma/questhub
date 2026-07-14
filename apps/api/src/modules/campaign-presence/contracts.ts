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
    points: z.array(vttMeasurementPointSchema).min(2).max(500).optional(),
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
  x: z.number().finite(),
  y: z.number().finite(),
})

const vttDoorStateSchema = z.object({
  open: z.boolean(),
  locked: z.boolean().default(false),
  blocked: z.boolean().default(false),
  ajar: z.boolean().default(false),
}).transform((door) => (
  door.open
    ? { open: true, locked: false, blocked: false, ajar: false }
    : door
))

export const vttWallSegmentSchema = z.discriminatedUnion('kind', [
  z.object({
    id: z.string().min(1).max(200),
    kind: z.literal('wall'),
    start: vttScenePointSchema,
    end: vttScenePointSchema,
    color: z.string().regex(/^#[0-9a-fA-F]{6}$/).optional(),
    playerVisible: z.boolean().default(false),
  }),
  z.object({
    id: z.string().min(1).max(200),
    kind: z.literal('door'),
    start: vttScenePointSchema,
    end: vttScenePointSchema,
    color: z.string().regex(/^#[0-9a-fA-F]{6}$/).optional(),
    playerVisible: z.boolean().default(false),
    door: vttDoorStateSchema,
  }),
])

// Espelha SceneAreaShape de packages/game-system-core/src/shared/scene-geometry
// (.ai/spell_casting/specs.md secao 3). O payload carrega a forma, nunca a
// lista de celulas — cada cliente recalcula localmente.
export const vttSpellAreaShapeSchema = z.discriminatedUnion('kind', [
  z.object({ kind: z.literal('BURST'), center: vttScenePointSchema, radiusCells: z.number().finite().min(0).max(500) }),
  z.object({ kind: z.literal('EMANATION'), center: vttScenePointSchema, radiusCells: z.number().finite().min(0).max(500) }),
  z.object({ kind: z.literal('CONE'), origin: vttScenePointSchema, directionRadians: z.number().finite(), lengthCells: z.number().finite().min(0).max(500) }),
  z.object({ kind: z.literal('LINE'), origin: vttScenePointSchema, directionRadians: z.number().finite(), lengthCells: z.number().finite().min(0).max(500), widthCells: z.number().finite().min(0).max(100) }),
  z.object({ kind: z.literal('CUBE'), origin: vttScenePointSchema, sizeCells: z.number().finite().min(0).max(500) }),
  z.object({ kind: z.literal('SQUARE'), origin: vttScenePointSchema, sizeCells: z.number().finite().min(0).max(500) }),
  z.object({ kind: z.literal('CYLINDER'), center: vttScenePointSchema, radiusCells: z.number().finite().min(0).max(500) }),
  z.object({ kind: z.literal('RING'), center: vttScenePointSchema, radiusCells: z.number().finite().min(0).max(500), thicknessCells: z.number().finite().min(0).max(500) }),
])

export const vttSpellAreaOverlaySchema = z.object({
  shape: vttSpellAreaShapeSchema,
  color: z.string().regex(/^#[0-9a-fA-F]{6}$/),
  label: z.string().min(1).max(120),
  casterTokenId: z.string().min(1).max(200).nullable(),
  phase: z.enum(['PREVIEW', 'CAST']),
})

export type VttSpellAreaOverlay = z.infer<typeof vttSpellAreaOverlaySchema>

export const vttSpellAreaUpdateSchema = z.object({
  campaignId: z.string().min(1),
  area: vttSpellAreaOverlaySchema.nullable(),
})

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
  tokenId: z.string().min(1).optional(),
  characterId: z.string().min(1).optional(),
  position: vttTokenPositionSchema,
  movementPath: z.array(vttTokenPositionSchema).min(2).max(500).optional(),
})

export const vttTokenPlaceSchema = z.union([
  z.object({
    campaignId: z.string().min(1),
    source: z.literal('character').optional(),
    characterId: z.string().min(1),
    position: vttTokenPositionSchema,
  }),
  z.object({
    campaignId: z.string().min(1),
    source: z.literal('bestiary'),
    creatureId: z.string().min(1),
    campaignNpcDefinitionId: z.string().min(1).optional(),
    position: vttTokenPositionSchema,
  }),
])

export const vttTokenActionSchema = z.object({
  campaignId: z.string().min(1),
  tokenId: z.string().min(1).optional(),
  characterId: z.string().min(1).optional(),
}).refine((input) => Boolean(input.tokenId || input.characterId))

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

export const vttEncounterStartSchema = z
  .object({
    campaignId: z.string().min(1),
    sceneId: z.string().min(1),
    tokenIds: z.array(z.string().min(1)).max(100).default([]),
    hazardInstanceIds: z.array(z.string().min(1)).max(20).default([]),
  })
  .refine((input) => input.tokenIds.length + input.hazardInstanceIds.length > 0)
  .refine((input) => new Set(input.tokenIds).size === input.tokenIds.length)
  .refine((input) => new Set(input.hazardInstanceIds).size === input.hazardInstanceIds.length)

export const vttEncounterJoinSchema = z
  .object({
    campaignId: z.string().min(1),
    tokenIds: z.array(z.string().min(1)).max(100).default([]),
    hazardInstanceIds: z.array(z.string().min(1)).max(20).default([]),
  })
  .refine((input) => input.tokenIds.length + input.hazardInstanceIds.length > 0)
  .refine((input) => new Set(input.tokenIds).size === input.tokenIds.length)
  .refine((input) => new Set(input.hazardInstanceIds).size === input.hazardInstanceIds.length)

export const vttEncounterRemoveParticipantSchema = z.object({
  campaignId: z.string().min(1),
  participantId: z.string().min(1),
})

export const vttEncounterCommandSchema = z.object({
  campaignId: z.string().min(1),
})

export const vttEncounterUpdateInitiativeSchema = z.object({
  campaignId: z.string().min(1),
  participantId: z.string().min(1),
  initiative: z.number().int().min(-1000).max(1000).nullable(),
  activateHighest: z.boolean().optional().default(false),
})

export const vttEncounterTriggerHazardSchema = z.object({
  campaignId: z.string().min(1),
  participantId: z.string().min(1),
})

export const vttCombatMovementResetSchema = z.object({
  campaignId: z.string().min(1),
  participantId: z.string().min(1),
})

export const vttCombatMovementCommitSchema = z.object({
  campaignId: z.string().min(1),
  tokenId: z.string().min(1),
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
  source: 'character' | 'bestiary'
  characterId: string | null
  bestiaryCreatureId?: string | null
  campaignNpcDefinitionId?: string | null
  name: string
  avatarUrl: string | null
  tokenBorderColor?: string | null
  ownerUserId: string
  ownerName: string
  role: 'PLAYER' | 'NPC'
  hidden: boolean
  position: VttTokenPosition
}

export type VttCombatantHealth = {
  currentHitPoints: number
  maxHitPoints: number
  temporaryHitPoints: number
  state: 'OK' | 'DOWN'
}

export type PublicNpcHealth = {
  state: 'HEALTHY' | 'SCRATCHED' | 'INJURED' | 'BLOODIED' | 'CRITICAL' | 'DOWN'
  percentage?: number
}

export type VttMovementBudget = {
  maxMetersPerAction: number | null
  actionsRemaining: number
  metersUsedThisAction: number
}

export type VttEncounterCreatureParticipant = {
  type: 'creature'
  participantId: string
  tokenId: string
  characterId: string
  source: 'character' | 'bestiary'
  name: string
  avatarUrl: string | null
  initiative: number | null
  health?: VttCombatantHealth | PublicNpcHealth | null
  movement: VttMovementBudget
}

export type VttEncounterHazardParticipant = {
  type: 'hazard'
  participantId: string
  hazardInstanceId: string
  hazardEntryId: string
  name: string
  initiative: number | null
  visibility: 'HIDDEN' | 'REVEALED'
  state: 'ARMED' | 'TRIGGERED' | 'ACTIVE' | 'DISABLED' | 'EXPIRED'
  executionMode: 'INSTANT' | 'ONGOING' | 'ENCOUNTER_PARTICIPANT'
}

export type VttEncounterParticipant = VttEncounterCreatureParticipant | VttEncounterHazardParticipant

export type VttEncounterLogEntryBase = {
  id: string
  createdAt: string
}

export type VttEncounterHealthLogEntry = VttEncounterLogEntryBase & {
  type: 'DAMAGE' | 'HEAL'
  actorName: string
  targetParticipantId: string | null
  targetName: string
  amount: number | null
  resultingHealth: VttCombatantHealth | PublicNpcHealth | null
}

export type VttEncounterDiceRollLogEntry = VttEncounterLogEntryBase & {
  type: 'DICE_ROLL'
  actorName: string
  notation: string
  total: number
}

export type VttEncounterSystemLogEntry = VttEncounterLogEntryBase & {
  type: 'SYSTEM'
  message: string
}

export type VttEncounterLogEntry = VttEncounterHealthLogEntry | VttEncounterDiceRollLogEntry | VttEncounterSystemLogEntry

export const vttEncounterLogLimit = 50

export type VttEncounterState = {
  campaignId: string
  sceneId: string
  round: number
  activeTurnIndex: number
  status: 'ACTIVE'
  participants: VttEncounterParticipant[]
  log: VttEncounterLogEntry[]
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

