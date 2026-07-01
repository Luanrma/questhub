import type { Server as HttpServer } from 'node:http'
import cookie from 'cookie'
import { Server as SocketIOServer } from 'socket.io'
import { z } from 'zod'
import { verifyToken } from '../../auth/jwt'
import { isActiveSession } from '../../auth/session'
import { prisma } from '../../db/prisma'
import { TOKEN_COOKIE } from '../../http/auth'
import { assetService } from '../assets/service'

type UserPresence = { socketId: string; campaignId: string; characterId: string }
type CampaignSessionState = 'ACTIVE' | 'PAUSED'
type OnlineCampaign = { masterSocketId: string; masterUserId: string; masterCharacterId: string; state: CampaignSessionState }
type PresenceAck = (response: { ok: boolean; error?: string }) => void
type VttGridSettings = z.infer<typeof vttGridSettingsSchema>
type VttTokenPosition = z.infer<typeof vttTokenPositionSchema>
type VttMeasurement = z.infer<typeof vttMeasurementSchema>
type VttDiceRoll = z.infer<typeof vttDiceRolledSchema>
type VttTableScene = Omit<z.infer<typeof vttTableSceneSchema>, 'imageUrl'> & {
  imageUrl: string | null
  grid?: VttGridSettings
  tokens?: VttPlayerToken[]
}
type VttPlayerToken = {
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

const defaultVttGridSettings: VttGridSettings = {
  visible: false,
  shape: 'square',
  size: 32,
  metersPerCell: 1,
  squareMeasurementColor: '#f97316',
  hexMeasurementColor: '#f97316',
  lineWidth: 1,
  color: '#94a3b8',
}

const vttGridSettingsSchema = z.object({
  visible: z.boolean(),
  shape: z.enum(['square', 'hex']),
  size: z.number().int().min(24).max(96),
  metersPerCell: z.number().positive().max(10000),
  squareMeasurementColor: z.string().regex(/^#[0-9a-fA-F]{6}$/),
  hexMeasurementColor: z.string().regex(/^#[0-9a-fA-F]{6}$/),
  lineWidth: z.number().int().min(1).max(4),
  color: z.string().regex(/^#[0-9a-fA-F]{6}$/),
})

const vttGridUpdateSchema = z.object({
  campaignId: z.string().min(1),
  sceneId: z.string().min(1).optional(),
  settings: vttGridSettingsSchema,
})

const vttTokenPositionSchema = z.object({
  x: z.number().min(0).max(100000),
  y: z.number().min(0).max(100000),
})

const vttMeasurementPointSchema = z.object({
  x: z.number().min(0).max(100000),
  y: z.number().min(0).max(100000),
})

const vttMeasurementSchema = z.discriminatedUnion('shape', [
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

const vttMeasurementUpdateSchema = z.object({
  campaignId: z.string().min(1),
  measurement: vttMeasurementSchema.nullable(),
})

const vttTableSceneSchema = z.object({
  id: z.string().min(1).max(200),
  name: z.string().min(1).max(120),
  imageUrl: z.string().min(1).max(12000).nullable(),
  fileName: z.string().min(1).max(255).nullable(),
  assetId: z.string().min(1).max(200).nullable(),
  width: z.number().int().min(1).max(100000),
  height: z.number().int().min(1).max(100000),
})

const vttSceneSelectSchema = z.object({
  campaignId: z.string().min(1),
  scene: vttTableSceneSchema.nullable(),
})

const vttDiceSidesSchema = z.union([z.literal(4), z.literal(6), z.literal(8), z.literal(10), z.literal(12), z.literal(20)])

const vttDiceRollItemSchema = z
  .object({
    sides: vttDiceSidesSchema,
    value: z.number().int().min(1),
  })
  .refine((roll) => roll.value <= roll.sides)

const vttDiceRollSchema = z
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

const vttDiceRolledSchema = z.object({
  id: z.number().int().positive(),
  sides: vttDiceSidesSchema,
  value: z.number().int().min(1),
  characterId: z.string().min(1),
  characterName: z.string().min(1),
  rolledAt: z.number().int().positive(),
})

const vttTokenUpdateSchema = z.object({
  campaignId: z.string().min(1),
  characterId: z.string().min(1).optional(),
  position: vttTokenPositionSchema,
})

const vttTokenPlaceSchema = z.object({
  campaignId: z.string().min(1),
  characterId: z.string().min(1),
  position: vttTokenPositionSchema,
})

const vttTokenActionSchema = z.object({
  campaignId: z.string().min(1),
  characterId: z.string().min(1),
})

const vttTokensRemoveBulkSchema = z.discriminatedUnion('scope', [
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

export function setupCampaignPresence(server: HttpServer) {
  const io = new SocketIOServer(server, {
    cors: {
      origin: process.env.NODE_ENV !== 'production' ? true : (process.env.WEB_ORIGIN ?? false),
      credentials: true,
    },
  })

  const userPresence = new Map<string, UserPresence>()
  const campaignOnline = new Map<string, OnlineCampaign>()
  const campaignGridSettings = new Map<string, VttGridSettings>()
  const campaignTokens = new Map<string, Map<string, VttPlayerToken>>()
  const campaignTokenSceneIds = new Map<string, Map<string, string>>()
  const campaignSceneGridSettings = new Map<string, Map<string, VttGridSettings>>()
  const campaignMeasurements = new Map<string, VttMeasurement>()
  const campaignScenes = new Map<string, VttTableScene>()
  const campaignPendingScenes = new Map<string, VttTableScene | null>()

  function isCampaignOnline(campaignId: string) {
    return campaignOnline.has(campaignId)
  }

  function isSessionMaster(campaignId: string, socketId: string, userId: string) {
    const online = campaignOnline.get(campaignId)
    return Boolean(online && online.masterSocketId === socketId && online.masterUserId === userId)
  }

  function getCampaignSessionState(campaignId: string) {
    return campaignOnline.get(campaignId)?.state ?? null
  }

  function emitCampaignSessionState(campaignId: string) {
    const state = getCampaignSessionState(campaignId)
    if (!state) return
    io.to(`campaign:${campaignId}`).emit('presence:session:state', { campaignId, state })
  }

  async function notifyCampaignStatus(campaignId: string, online: boolean) {
    const members = await prisma.campaignCharacter.findMany({
      where: { campaignId, status: 'ACTIVE' },
      select: { character: { select: { userId: true } } },
    })

    for (const member of members) {
      io.to(`user:${member.character.userId}`).emit('campaign:status', { campaignId, online })
    }
  }

  async function endCampaignSession(campaignId: string, message: string) {
    await persistCampaignLiveState(campaignId)
    campaignOnline.delete(campaignId)
    campaignTokens.delete(campaignId)
    campaignTokenSceneIds.delete(campaignId)
    campaignSceneGridSettings.delete(campaignId)
    campaignMeasurements.delete(campaignId)
    campaignScenes.delete(campaignId)
    campaignPendingScenes.delete(campaignId)
    await notifyCampaignStatus(campaignId, false)

    const sockets = await io.in(`campaign:${campaignId}`).fetchSockets()
    for (const campaignSocket of sockets) {
      const role = campaignSocket.data.characterRole as string | undefined
      const socketUser = campaignSocket.data.user as { id: string } | undefined
      const characterId = campaignSocket.data.characterId as string | undefined

      if (role === 'PLAYER') {
        campaignSocket.emit('campaign:kicked', { campaignId, message })
      }

      if (socketUser?.id) {
        userPresence.delete(socketUser.id)
      }

      if (characterId) {
        io.to(`campaign:${campaignId}`).emit('presence:update', { campaignId, characterId, online: false })
      }

      campaignSocket.leave(`campaign:${campaignId}`)
      campaignSocket.data.campaignId = undefined
      campaignSocket.data.characterId = undefined
      campaignSocket.data.characterRole = undefined
    }
  }

  function getCampaignGridSettings(campaignId: string) {
    return campaignGridSettings.get(campaignId) ?? defaultVttGridSettings
  }

  function sceneGridToVttSettings(scene: {
    gridVisible: boolean
    gridShape: 'SQUARE' | 'HEX'
    gridSize: number
    metersPerCell: number
    squareMeasurementColor: string
    hexMeasurementColor: string
    gridLineWidth: number
    gridColor: string
  }): VttGridSettings {
    return {
      visible: scene.gridVisible,
      shape: scene.gridShape === 'HEX' ? 'hex' : 'square',
      size: scene.gridSize,
      metersPerCell: scene.metersPerCell,
      squareMeasurementColor: scene.squareMeasurementColor,
      hexMeasurementColor: scene.hexMeasurementColor,
      lineWidth: scene.gridLineWidth,
      color: scene.gridColor,
    }
  }

  function vttGridSettingsToSceneData(settings: VttGridSettings) {
    return {
      gridVisible: settings.visible,
      gridShape: settings.shape === 'hex' ? 'HEX' as const : 'SQUARE' as const,
      gridSize: settings.size,
      metersPerCell: settings.metersPerCell,
      squareMeasurementColor: settings.squareMeasurementColor,
      hexMeasurementColor: settings.hexMeasurementColor,
      gridLineWidth: settings.lineWidth,
      gridColor: settings.color,
    }
  }

  async function getMasterActiveSceneId(campaignId: string) {
    const viewState = await prisma.campaignSceneViewState.findUnique({
      where: { campaignId },
      select: { masterActiveSceneId: true },
    })
    if (viewState?.masterActiveSceneId) return viewState.masterActiveSceneId

    const firstScene = await prisma.campaignScene.findFirst({
      where: { campaignId },
      orderBy: { order: 'asc' },
      select: { id: true },
    })
    return firstScene?.id ?? null
  }

  async function updateMasterActiveScene(campaignId: string, sceneId: string | null) {
    if (sceneId) {
      const scene = await prisma.campaignScene.findFirst({
        where: { id: sceneId, campaignId },
        select: { id: true },
      })
      if (!scene) return false
    }

    await prisma.campaignSceneViewState.upsert({
      where: { campaignId },
      create: { campaignId, masterActiveSceneId: sceneId },
      update: { masterActiveSceneId: sceneId },
    })
    return true
  }

  async function sceneBelongsToCampaign(campaignId: string, sceneId: string) {
    const scene = await prisma.campaignScene.findFirst({
      where: { id: sceneId, campaignId },
      select: { id: true },
    })
    return Boolean(scene)
  }

  async function removeCampaignTokens(campaignId: string, options: { sceneId?: string | null }) {
    const tokenMap = campaignTokens.get(campaignId)
    const tokenSceneMap = campaignTokenSceneIds.get(campaignId)
    if (!tokenMap || !tokenSceneMap) return

    const tokensToRemove = [...tokenMap.values()].filter((token) => {
      if (!options.sceneId) return true
      return tokenSceneMap.get(token.characterId) === options.sceneId
    })

    for (const token of tokensToRemove) {
      const sceneId = tokenSceneMap.get(token.characterId)
      if (!sceneId) continue

      tokenMap.delete(token.characterId)
      tokenSceneMap.delete(token.characterId)
      await emitSceneTokenRemoved(campaignId, sceneId, token.characterId)
    }
  }

  async function getActiveSceneGridSettings(campaignId: string) {
    const sceneId = await getMasterActiveSceneId(campaignId)
    if (!sceneId) return getCampaignGridSettings(campaignId)

    const liveGrid = campaignSceneGridSettings.get(campaignId)?.get(sceneId)
    if (liveGrid) return liveGrid

    const scene = await prisma.campaignScene.findUnique({
      where: { id: sceneId },
      select: {
        gridVisible: true,
        gridShape: true,
        gridSize: true,
        metersPerCell: true,
        squareMeasurementColor: true,
        hexMeasurementColor: true,
        gridLineWidth: true,
        gridColor: true,
      },
    })

    return scene ? sceneGridToVttSettings(scene) : getCampaignGridSettings(campaignId)
  }

  async function getVisibleSceneIdForSocket(campaignId: string, socket: { data: any }) {
    const role = socket.data.characterRole as string | undefined
    if (role === 'MASTER') return getMasterActiveSceneId(campaignId)

    const viewState = await prisma.campaignSceneViewState.findUnique({
      where: { campaignId },
      select: { forcedSceneId: true },
    })
    if (viewState?.forcedSceneId) return viewState.forcedSceneId

    const characterId = socket.data.characterId as string | undefined
    if (!characterId) return null

    const liveTokenSceneMap = campaignTokenSceneIds.get(campaignId)
    if (liveTokenSceneMap) return liveTokenSceneMap.get(characterId) ?? null

    const token = await prisma.campaignSceneToken.findFirst({
      where: {
        characterId,
        scene: { campaignId },
      },
      select: { sceneId: true },
    })

    return token?.sceneId ?? null
  }

  async function findPersistedSceneToken(campaignId: string, characterId: string): Promise<VttPlayerToken | null> {
    const token = await prisma.campaignSceneToken.findFirst({
      where: { characterId, scene: { campaignId } },
      select: {
        id: true,
        characterId: true,
        hidden: true,
        positionX: true,
        positionY: true,
        character: {
          select: {
            name: true,
            avatarUrl: true,
            userId: true,
            campaigns: {
              where: { campaignId },
              select: {
                role: true,
                user: { select: { email: true } },
              },
            },
          },
        },
      },
    })
    if (!token) return null

    const campaignCharacter = token.character.campaigns[0]
    const role = campaignCharacter?.role === 'NPC' ? 'NPC' : 'PLAYER'

    return {
      id: token.id,
      characterId: token.characterId,
      name: token.character.name,
      avatarUrl: token.character.avatarUrl,
      ownerUserId: token.character.userId,
      ownerName: campaignCharacter?.user?.email ?? token.character.name,
      role,
      hidden: token.hidden,
      position: {
        x: token.positionX,
        y: token.positionY,
      },
    }
  }

  async function emitSceneGridSettings(campaignId: string, sceneId: string, settings: VttGridSettings) {
    const sockets = await io.in(`campaign:${campaignId}`).fetchSockets()
    await Promise.all(
      sockets.map(async (campaignSocket) => {
        const visibleSceneId = await getVisibleSceneIdForSocket(campaignId, campaignSocket)
        if (visibleSceneId !== sceneId) return
        campaignSocket.emit('vtt:grid:changed', {
          campaignId,
          sceneId,
          settings,
        })
      }),
    )
  }

  async function emitSceneTokenChanged(campaignId: string, sceneId: string, token: VttPlayerToken) {
    const sockets = await io.in(`campaign:${campaignId}`).fetchSockets()
    await Promise.all(
      sockets.map(async (campaignSocket) => {
        const visibleSceneId = await getVisibleSceneIdForSocket(campaignId, campaignSocket)
        if (visibleSceneId !== sceneId) return
        campaignSocket.emit('vtt:token:changed', {
          campaignId,
          sceneId,
          token,
        })
      }),
    )
  }

  async function emitSceneTokenRemoved(campaignId: string, sceneId: string, characterId: string) {
    const sockets = await io.in(`campaign:${campaignId}`).fetchSockets()
    await Promise.all(
      sockets.map(async (campaignSocket) => {
        const isRemovedTokenOwner = campaignSocket.data.characterId === characterId
        const visibleSceneId = await getVisibleSceneIdForSocket(campaignId, campaignSocket)
        if (visibleSceneId !== sceneId && !isRemovedTokenOwner) return
        campaignSocket.emit('vtt:token:removed', {
          campaignId,
          sceneId,
          characterId,
        })
        if (isRemovedTokenOwner) await emitVisibleTableSnapshot(campaignId, campaignSocket)
      }),
    )
  }

  function getCampaignTokenMap(campaignId: string) {
    const existing = campaignTokens.get(campaignId)
    if (existing) return existing

    const next = new Map<string, VttPlayerToken>()
    campaignTokens.set(campaignId, next)
    return next
  }

  function getCampaignTokenSceneMap(campaignId: string) {
    const existing = campaignTokenSceneIds.get(campaignId)
    if (existing) return existing

    const next = new Map<string, string>()
    campaignTokenSceneIds.set(campaignId, next)
    return next
  }

  function getCampaignSceneGridMap(campaignId: string) {
    const existing = campaignSceneGridSettings.get(campaignId)
    if (existing) return existing

    const next = new Map<string, VttGridSettings>()
    campaignSceneGridSettings.set(campaignId, next)
    return next
  }

  function tableTokenFromPersistedToken(token: {
    id: string
    characterId: string
    hidden: boolean
    positionX: number
    positionY: number
    character: {
      name: string
      avatarUrl: string | null
      userId: string
      campaigns: Array<{
        role: 'PLAYER' | 'NPC' | 'MASTER'
        user: { email: string } | null
      }>
    }
  }): VttPlayerToken {
    const campaignCharacter = token.character.campaigns[0]
    const role = campaignCharacter?.role === 'NPC' ? 'NPC' : 'PLAYER'

    return {
      id: token.id,
      characterId: token.characterId,
      name: token.character.name,
      avatarUrl: token.character.avatarUrl,
      ownerUserId: token.character.userId,
      ownerName: campaignCharacter?.user?.email ?? token.character.name,
      role,
      hidden: token.hidden,
      position: {
        x: token.positionX,
        y: token.positionY,
      },
    }
  }

  async function hydrateCampaignLiveState(campaignId: string) {
    const scenes = await prisma.campaignScene.findMany({
      where: { campaignId },
      select: {
        id: true,
        gridVisible: true,
        gridShape: true,
        gridSize: true,
        metersPerCell: true,
        squareMeasurementColor: true,
        hexMeasurementColor: true,
        gridLineWidth: true,
        gridColor: true,
      },
    })

    const sceneGridMap = new Map<string, VttGridSettings>()
    for (const scene of scenes) {
      sceneGridMap.set(scene.id, sceneGridToVttSettings(scene))
    }

    const persistedTokens = await prisma.campaignSceneToken.findMany({
      where: { scene: { campaignId } },
      select: {
        id: true,
        sceneId: true,
        characterId: true,
        hidden: true,
        positionX: true,
        positionY: true,
        character: {
          select: {
            name: true,
            avatarUrl: true,
            userId: true,
            campaigns: {
              where: { campaignId },
              select: {
                role: true,
                user: { select: { email: true } },
              },
            },
          },
        },
      },
    })

    const tokenMap = new Map<string, VttPlayerToken>()
    const tokenSceneMap = new Map<string, string>()
    for (const persistedToken of persistedTokens) {
      tokenMap.set(persistedToken.characterId, tableTokenFromPersistedToken(persistedToken))
      tokenSceneMap.set(persistedToken.characterId, persistedToken.sceneId)
    }

    campaignSceneGridSettings.set(campaignId, sceneGridMap)
    campaignTokens.set(campaignId, tokenMap)
    campaignTokenSceneIds.set(campaignId, tokenSceneMap)
  }

  async function persistCampaignLiveState(campaignId: string) {
    const sceneGridMap = campaignSceneGridSettings.get(campaignId)
    const tokenMap = campaignTokens.get(campaignId)
    const tokenSceneMap = campaignTokenSceneIds.get(campaignId)

    if (sceneGridMap) {
      await Promise.all(
        [...sceneGridMap.entries()].map(([sceneId, settings]) =>
          prisma.campaignScene.update({
            where: { id: sceneId },
            data: vttGridSettingsToSceneData(settings),
          }),
        ),
      )
    }

    if (!tokenMap || !tokenSceneMap) return

    await prisma.$transaction(async (tx) => {
      await tx.campaignSceneToken.deleteMany({ where: { scene: { campaignId } } })
      const tokensToCreate: Array<{
        sceneId: string
        characterId: string
        hidden: boolean
        positionX: number
        positionY: number
      }> = []
      for (const token of tokenMap.values()) {
        const sceneId = tokenSceneMap.get(token.characterId)
        if (!sceneId) continue
        tokensToCreate.push({
          sceneId,
          characterId: token.characterId,
          hidden: token.hidden,
          positionX: token.position.x,
          positionY: token.position.y,
        })
      }

      if (tokensToCreate.length) {
        await tx.campaignSceneToken.createMany({
          data: tokensToCreate,
          skipDuplicates: true,
        })
      }
    })
  }

  function setLiveSceneGrid(campaignId: string, sceneId: string, settings: VttGridSettings) {
    getCampaignSceneGridMap(campaignId).set(sceneId, settings)
    campaignGridSettings.set(campaignId, settings)
  }

  function setLiveSceneToken(campaignId: string, sceneId: string, token: VttPlayerToken) {
    getCampaignTokenMap(campaignId).set(token.characterId, token)
    getCampaignTokenSceneMap(campaignId).set(token.characterId, sceneId)
  }

  async function listSceneTokens(campaignId: string, sceneId?: string | null) {
    const visibleSceneId = sceneId ?? (await getMasterActiveSceneId(campaignId))
    if (!visibleSceneId) return []

    const liveTokenMap = campaignTokens.get(campaignId)
    const liveTokenSceneMap = campaignTokenSceneIds.get(campaignId)
    if (liveTokenMap && liveTokenSceneMap) {
      return [...liveTokenMap.values()].filter((token) => liveTokenSceneMap.get(token.characterId) === visibleSceneId)
    }

    const tokens = await prisma.campaignSceneToken.findMany({
      where: { sceneId: visibleSceneId },
      select: { characterId: true },
      orderBy: { createdAt: 'asc' },
    })

    const hydratedTokens = await Promise.all(tokens.map((token) => findPersistedSceneToken(campaignId, token.characterId)))
    return hydratedTokens.filter((token): token is VttPlayerToken => Boolean(token))
  }

  async function findTableScene(campaignId: string, sceneId: string | null): Promise<VttTableScene | null> {
    if (!sceneId) return null

    const scene = await prisma.campaignScene.findFirst({
      where: { id: sceneId, campaignId },
      select: {
        id: true,
        name: true,
        assetId: true,
        backgroundUrl: true,
        backgroundCacheKey: true,
        gridVisible: true,
        gridShape: true,
        gridSize: true,
        metersPerCell: true,
        squareMeasurementColor: true,
        hexMeasurementColor: true,
        gridLineWidth: true,
        gridColor: true,
      },
    })
    if (!scene) return null

    const grid = campaignSceneGridSettings.get(campaignId)?.get(scene.id) ?? sceneGridToVttSettings(scene)
    const tokens = await listSceneTokens(campaignId, scene.id)
    let imageUrl = scene.backgroundUrl
    if (scene.backgroundCacheKey) {
      imageUrl = await assetService.getSignedUrl(scene.backgroundCacheKey).catch(() => scene.backgroundUrl)
    }

    return {
      id: scene.id,
      name: scene.name,
      imageUrl,
      fileName: scene.name,
      assetId: scene.assetId,
      width: 50 * grid.size,
      height: 34 * grid.size,
      grid,
      tokens,
    }
  }

  async function emitCampaignTokenSnapshot(campaignId: string, socketId: string, sceneId?: string | null) {
    const persistedTokens = await listSceneTokens(campaignId, sceneId)
    const tokenMap = getCampaignTokenMap(campaignId)
    persistedTokens.forEach((token) => tokenMap.set(token.characterId, token))
    io.to(socketId).emit('vtt:tokens:snapshot', {
      campaignId,
      sceneId: sceneId ?? null,
      tokens: persistedTokens,
      sessionState: getCampaignSessionState(campaignId),
    })
  }

  function emitCampaignMeasurementSnapshot(campaignId: string, socketId: string) {
    io.to(socketId).emit('vtt:measurement:snapshot', {
      campaignId,
      measurement: campaignMeasurements.get(campaignId) ?? null,
    })
  }

  async function emitVisibleTableSnapshot(campaignId: string, socket: { id: string; data: any }) {
    const sceneId = await getVisibleSceneIdForSocket(campaignId, socket)
    const scene = await findTableScene(campaignId, sceneId)

    io.to(socket.id).emit('vtt:scene:snapshot', {
      campaignId,
      scene,
    })

    io.to(socket.id).emit('vtt:grid:changed', {
      campaignId,
      sceneId: scene?.id ?? null,
      settings: scene?.grid ?? defaultVttGridSettings,
    })

    await emitCampaignTokenSnapshot(campaignId, socket.id, scene?.id ?? null)
  }

  async function emitVisibleTableSnapshots(campaignId: string) {
    const sockets = await io.in(`campaign:${campaignId}`).fetchSockets()
    await Promise.all(sockets.map((campaignSocket) => emitVisibleTableSnapshot(campaignId, campaignSocket)))
  }

  function emitCampaignSceneSnapshot(campaignId: string, socketId: string) {
    io.to(socketId).emit('vtt:scene:snapshot', {
      campaignId,
      scene: campaignScenes.get(campaignId) ?? null,
    })
  }

  function emitCampaignScene(campaignId: string, scene: VttTableScene | null) {
    io.to(`campaign:${campaignId}`).emit('vtt:scene:changed', {
      campaignId,
      scene,
    })
  }

  async function removeCampaignToken(campaignId: string, characterId: string) {
    const tokenMap = campaignTokens.get(campaignId)
    const sceneId = campaignTokenSceneIds.get(campaignId)?.get(characterId)
    if (!tokenMap?.has(characterId)) return
    if (!sceneId) return

    tokenMap.delete(characterId)
    campaignTokenSceneIds.get(campaignId)?.delete(characterId)
    await emitSceneTokenRemoved(campaignId, sceneId, characterId)
  }

  io.use((socket, next) => {
    const raw = socket.handshake.headers.cookie ?? ''
    const parsed = cookie.parse(raw)
    const token = parsed[TOKEN_COOKIE]
    if (!token) return next(new Error('Nao autenticado'))

    const user = verifyToken(token)
    if (!user) return next(new Error('Token invalido'))
    if (!isActiveSession(user.id, user.sessionId)) return next(new Error('Sessao expirada'))

    socket.data.user = user
    next()
  })

  io.on('connection', (socket) => {
    const user = socket.data.user as { id: string }

    socket.join(`user:${user.id}`)

    socket.on(
      'presence:session:start',
      async ({ campaignId, characterId }: { campaignId: string; characterId: string }, ack?: PresenceAck) => {
        try {
          if (!campaignId || !characterId) {
            ack?.({ ok: false, error: 'Dados invalidos' })
            return
          }

          const campaignCharacter = await prisma.campaignCharacter.findFirst({
            where: { campaignId, characterId, status: 'ACTIVE', role: 'MASTER' },
            select: { role: true, character: { select: { userId: true, name: true } } },
          })
          if (!campaignCharacter || campaignCharacter.character.userId !== user.id) {
            ack?.({ ok: false, error: 'Apenas o mestre pode iniciar a sessao' })
            return
          }

          socket.data.campaignId = campaignId
          socket.data.characterId = characterId
          socket.data.characterRole = campaignCharacter.role
          socket.data.characterName = campaignCharacter.character.name
          socket.join(`campaign:${campaignId}`)
          userPresence.set(user.id, { socketId: socket.id, campaignId, characterId })
          campaignOnline.set(campaignId, { masterSocketId: socket.id, masterUserId: user.id, masterCharacterId: characterId, state: 'ACTIVE' })
          await hydrateCampaignLiveState(campaignId)
          await persistCampaignLiveState(campaignId)
          campaignMeasurements.delete(campaignId)
          campaignScenes.delete(campaignId)
          campaignPendingScenes.delete(campaignId)

          await notifyCampaignStatus(campaignId, true)
          io.to(`campaign:${campaignId}`).emit('presence:update', { campaignId, characterId, online: true })
          emitCampaignSessionState(campaignId)
          emitCampaignMeasurementSnapshot(campaignId, socket.id)
          await emitVisibleTableSnapshot(campaignId, socket)
          ack?.({ ok: true })
        } catch {
          ack?.({ ok: false, error: 'Erro ao iniciar sessao' })
        }
      },
    )

    socket.on('presence:session:end', async ({ campaignId }: { campaignId: string }, ack?: PresenceAck) => {
      try {
        if (!campaignId) {
          ack?.({ ok: false, error: 'Dados invalidos' })
          return
        }

        const online = campaignOnline.get(campaignId)
        if (!online || online.masterSocketId !== socket.id || online.masterUserId !== user.id) {
          ack?.({ ok: false, error: 'Sessao nao iniciada por este mestre' })
          return
        }

        await endCampaignSession(campaignId, 'O mestre encerrou a sessão.')
        ack?.({ ok: true })
      } catch {
        ack?.({ ok: false, error: 'Erro ao encerrar sessao' })
      }
    })

    socket.on('presence:session:pause', async ({ campaignId }: { campaignId: string }, ack?: PresenceAck) => {
      try {
        if (!campaignId) {
          ack?.({ ok: false, error: 'Dados invalidos' })
          return
        }

        const online = campaignOnline.get(campaignId)
        if (!online || online.masterSocketId !== socket.id || online.masterUserId !== user.id) {
          ack?.({ ok: false, error: 'Sessao nao iniciada por este mestre' })
          return
        }

        campaignOnline.set(campaignId, { ...online, state: 'PAUSED' })
        emitCampaignSessionState(campaignId)
        ack?.({ ok: true })
      } catch {
        ack?.({ ok: false, error: 'Erro ao pausar sessao' })
      }
    })

    socket.on('presence:session:resume', async ({ campaignId }: { campaignId: string }, ack?: PresenceAck) => {
      try {
        if (!campaignId) {
          ack?.({ ok: false, error: 'Dados invalidos' })
          return
        }

        const online = campaignOnline.get(campaignId)
        if (!online || online.masterSocketId !== socket.id || online.masterUserId !== user.id) {
          ack?.({ ok: false, error: 'Sessao nao iniciada por este mestre' })
          return
        }

        campaignOnline.set(campaignId, { ...online, state: 'ACTIVE' })
        emitCampaignSessionState(campaignId)
        if (campaignPendingScenes.has(campaignId)) {
          const pendingScene = campaignPendingScenes.get(campaignId) ?? null
          campaignPendingScenes.delete(campaignId)
          if (pendingScene) {
            campaignScenes.set(campaignId, pendingScene)
          } else {
            campaignScenes.delete(campaignId)
          }
          emitCampaignScene(campaignId, pendingScene)
        }
        ack?.({ ok: true })
      } catch {
        ack?.({ ok: false, error: 'Erro ao retomar sessao' })
      }
    })

    socket.on('presence:enter', async ({ campaignId, characterId }: { campaignId: string; characterId: string }) => {
      try {
        if (!campaignId || !characterId) return

        const campaignCharacter = await prisma.campaignCharacter.findFirst({
          where: { campaignId, characterId, status: 'ACTIVE' },
          select: { role: true, character: { select: { userId: true, name: true, avatarUrl: true } } },
        })
        if (!campaignCharacter || campaignCharacter.character.userId !== user.id) {
          socket.emit('presence:error', { message: 'Acesso nao liberado' })
          return
        }
        if (campaignCharacter.role === 'NPC') return
        if (campaignCharacter.role !== 'PLAYER') return
        if (!isCampaignOnline(campaignId)) {
          socket.emit('presence:error', { message: 'Mestre offline' })
          return
        }

        socket.data.campaignId = campaignId
        socket.data.characterId = characterId
        socket.data.characterRole = campaignCharacter.role
        socket.data.characterName = campaignCharacter.character.name
        socket.data.characterAvatarUrl = campaignCharacter.character.avatarUrl
        socket.join(`campaign:${campaignId}`)
        userPresence.set(user.id, { socketId: socket.id, campaignId, characterId })
        socket.emit('presence:session:state', {
          campaignId,
          state: getCampaignSessionState(campaignId),
        })
        emitCampaignMeasurementSnapshot(campaignId, socket.id)
        await emitVisibleTableSnapshot(campaignId, socket)

        io.to(`campaign:${campaignId}`).emit('presence:update', {
          campaignId,
          characterId,
          online: true,
        })
      } catch {
        socket.emit('presence:error', { message: 'Erro de presenca' })
      }
    })

    socket.on('vtt:grid:update', async (input: unknown) => {
      try {
        const parsed = vttGridUpdateSchema.safeParse(input)
        if (!parsed.success) return

        const { campaignId, sceneId: requestedSceneId, settings } = parsed.data
        const online = campaignOnline.get(campaignId)
        if (!online || online.masterSocketId !== socket.id || online.masterUserId !== user.id) return

        const sceneId = requestedSceneId ?? (await getMasterActiveSceneId(campaignId))
        if (!sceneId) return
        if (!(await sceneBelongsToCampaign(campaignId, sceneId))) return

        setLiveSceneGrid(campaignId, sceneId, settings)
        await emitSceneGridSettings(campaignId, sceneId, settings)
      } catch {
        socket.emit('presence:error', { message: 'Nao foi possivel atualizar o grid da cena.' })
      }
    })

    socket.on('vtt:token:place', async (input: unknown) => {
      const parsed = vttTokenPlaceSchema.safeParse(input)
      if (!parsed.success) return

      const { campaignId, characterId, position } = parsed.data
      const online = campaignOnline.get(campaignId)
      if (!online) return
      if (online.masterSocketId !== socket.id || online.masterUserId !== user.id) return

      const campaignCharacter = await prisma.campaignCharacter.findFirst({
        where: {
          campaignId,
          characterId,
          status: 'ACTIVE',
          role: { in: ['PLAYER', 'NPC'] },
        },
        select: {
          role: true,
          userId: true,
          character: { select: { name: true, avatarUrl: true } },
        },
      })
      if (!campaignCharacter) return
      if (campaignCharacter.role !== 'PLAYER' && campaignCharacter.role !== 'NPC') return

      const sceneId = await getMasterActiveSceneId(campaignId)
      if (!sceneId) return

      const tokenMap = getCampaignTokenMap(campaignId)
      const existingToken = tokenMap.get(characterId)
      if (existingToken) return
      if (campaignCharacter.role === 'PLAYER') {
        const ownerPresence = userPresence.get(campaignCharacter.userId)
        const isOwnerConnectedToAnotherCharacter =
          ownerPresence?.campaignId === campaignId && ownerPresence.characterId !== characterId
        if (isOwnerConnectedToAnotherCharacter) return

        const hasOtherPlayerTokenFromOwner = [...tokenMap.values()].some(
          (token) => token.role === 'PLAYER' && token.ownerUserId === campaignCharacter.userId && token.characterId !== characterId,
        )
        if (hasOtherPlayerTokenFromOwner) return
      }

      const token: VttPlayerToken = {
        id: `token:${characterId}`,
        characterId,
        name: campaignCharacter.character.name,
        avatarUrl: campaignCharacter.character.avatarUrl,
        ownerUserId: campaignCharacter.userId,
        ownerName: campaignCharacter.character.name,
        role: campaignCharacter.role,
        hidden: false,
        position,
      }

      setLiveSceneToken(campaignId, sceneId, token)
      await emitVisibleTableSnapshots(campaignId)
    })

    socket.on('vtt:token:move', async (input: unknown) => {
      const parsed = vttTokenUpdateSchema.safeParse(input)
      if (!parsed.success) return

      const { campaignId, position } = parsed.data
      const online = campaignOnline.get(campaignId)
      if (!online) return
      if (socket.data.campaignId !== campaignId) return

      const role = socket.data.characterRole as string | undefined
      const isPlayerOwnerMove = online.state === 'ACTIVE' && role === 'PLAYER'
      const isMasterPausedMove = online.state === 'PAUSED' && isSessionMaster(campaignId, socket.id, user.id)
      if (!isPlayerOwnerMove && !isMasterPausedMove) return

      const characterId = isMasterPausedMove ? parsed.data.characterId : (socket.data.characterId as string | undefined)
      if (!characterId) return

      const tokenMap = campaignTokens.get(campaignId)
      const token = tokenMap ? tokenMap.get(characterId) : await findPersistedSceneToken(campaignId, characterId)
      if (!token) return
      if (isPlayerOwnerMove && token.ownerUserId !== user.id) return

      const nextToken = { ...token, position }
      const sceneId = getCampaignTokenSceneMap(campaignId).get(characterId)
      if (!sceneId) return
      setLiveSceneToken(campaignId, sceneId, nextToken)
      await emitSceneTokenChanged(campaignId, sceneId, nextToken)
    })

    socket.on('vtt:token:remove', async (input: unknown) => {
      const parsed = vttTokenActionSchema.safeParse(input)
      if (!parsed.success) return

      const { campaignId, characterId } = parsed.data
      const online = campaignOnline.get(campaignId)
      if (!online) return
      if (online.masterSocketId !== socket.id || online.masterUserId !== user.id) return

      await removeCampaignToken(campaignId, characterId)
    })

    socket.on('vtt:tokens:remove-bulk', async (input: unknown) => {
      const parsed = vttTokensRemoveBulkSchema.safeParse(input)
      if (!parsed.success) return

      const { campaignId } = parsed.data
      const online = campaignOnline.get(campaignId)
      if (!online) return
      if (online.masterSocketId !== socket.id || online.masterUserId !== user.id) return

      if (parsed.data.scope === 'scene') {
        if (!(await sceneBelongsToCampaign(campaignId, parsed.data.sceneId))) return
        await removeCampaignTokens(campaignId, { sceneId: parsed.data.sceneId })
        return
      }

      await removeCampaignTokens(campaignId, { sceneId: null })
    })

    socket.on('vtt:token:visibility', async (input: unknown) => {
      const parsed = vttTokenActionSchema.safeParse(input)
      if (!parsed.success) return

      const { campaignId, characterId } = parsed.data
      const online = campaignOnline.get(campaignId)
      if (!online) return
      if (online.masterSocketId !== socket.id || online.masterUserId !== user.id) return

      const tokenMap = campaignTokens.get(campaignId)
      const token = tokenMap ? tokenMap.get(characterId) : await findPersistedSceneToken(campaignId, characterId)
      if (!token) return

      const nextToken = { ...token, hidden: !token.hidden }
      const sceneId = getCampaignTokenSceneMap(campaignId).get(characterId)
      if (!sceneId) return
      setLiveSceneToken(campaignId, sceneId, nextToken)
      await emitSceneTokenChanged(campaignId, sceneId, nextToken)
    })

    socket.on('vtt:tokens:request', (input: unknown) => {
      const parsed = z.object({ campaignId: z.string().min(1) }).safeParse(input)
      if (!parsed.success) return

      const { campaignId } = parsed.data
      if (!isCampaignOnline(campaignId)) return
      if (socket.data.campaignId !== campaignId) return

      getVisibleSceneIdForSocket(campaignId, socket)
        .then((sceneId) => emitCampaignTokenSnapshot(campaignId, socket.id, sceneId))
        .catch(() => {})
    })

    socket.on('vtt:measurement:update', (input: unknown) => {
      const parsed = vttMeasurementUpdateSchema.safeParse(input)
      if (!parsed.success) return

      const { campaignId, measurement } = parsed.data
      const online = campaignOnline.get(campaignId)
      if (!online) return
      if (socket.data.campaignId !== campaignId) return
      if (online.state === 'PAUSED' && socket.data.characterRole !== 'MASTER') return

      if (measurement) {
        campaignMeasurements.set(campaignId, measurement)
      } else {
        campaignMeasurements.delete(campaignId)
      }

      io.to(`campaign:${campaignId}`).emit('vtt:measurement:changed', {
        campaignId,
        measurement,
      })
    })

    socket.on('vtt:measurement:request', (input: unknown) => {
      const parsed = z.object({ campaignId: z.string().min(1) }).safeParse(input)
      if (!parsed.success) return

      const { campaignId } = parsed.data
      if (!isCampaignOnline(campaignId)) return
      if (socket.data.campaignId !== campaignId) return

      emitCampaignMeasurementSnapshot(campaignId, socket.id)
    })

    socket.on('vtt:scene:select', async (input: unknown) => {
      const parsed = vttSceneSelectSchema.safeParse(input)
      if (!parsed.success) return

      const { campaignId, scene } = parsed.data
      const online = campaignOnline.get(campaignId)
      if (online && (online.masterSocketId !== socket.id || online.masterUserId !== user.id)) return
      if (!online && socket.data.characterRole !== 'MASTER') return

      const sceneUpdated = await updateMasterActiveScene(campaignId, scene?.id ?? null)
      if (!sceneUpdated) return
      if (scene?.id) {
        const settings = await getActiveSceneGridSettings(campaignId)
        campaignGridSettings.set(campaignId, settings)
      }

      if (!online) return

      const pausedOnline = { ...online, state: 'PAUSED' as const }
      campaignOnline.set(campaignId, pausedOnline)
      emitCampaignSessionState(campaignId)
      await emitVisibleTableSnapshot(campaignId, socket)

      campaignPendingScenes.delete(campaignId)
    })

    socket.on('vtt:scene:request', async (input: unknown) => {
      const parsed = z.object({ campaignId: z.string().min(1) }).safeParse(input)
      if (!parsed.success) return

      const { campaignId } = parsed.data
      if (!isCampaignOnline(campaignId)) return
      if (socket.data.campaignId !== campaignId) return

      await emitVisibleTableSnapshot(campaignId, socket)
    })

    socket.on('vtt:dice:roll', (input: unknown) => {
      const parsed = vttDiceRollSchema.safeParse(input)
      if (!parsed.success) return

      const { campaignId, rolls: diceRolls } = parsed.data
      const online = campaignOnline.get(campaignId)
      if (!online) return
      if (socket.data.campaignId !== campaignId) return
      if (online.state === 'PAUSED' && socket.data.characterRole !== 'MASTER') return

      const characterId = socket.data.characterId as string | undefined
      const characterName = socket.data.characterName as string | undefined
      if (!characterId || !characterName) return

      const rolledAt = Date.now()
      const rolls: VttDiceRoll[] = diceRolls.map((diceRoll, index) => ({
        id: rolledAt + index,
        sides: diceRoll.sides,
        value: diceRoll.value,
        characterId,
        characterName,
        rolledAt,
      }))

      io.to(`campaign:${campaignId}`).emit('vtt:dice:rolled', {
        campaignId,
        roll: rolls[0],
        rolls,
      })
    })

    socket.on('disconnect', () => {
      const prev = userPresence.get(user.id)
      if (prev?.socketId !== socket.id) return

      const role = socket.data.characterRole as string | undefined

      if (role === 'MASTER') {
        const online = campaignOnline.get(prev.campaignId)
        if (online?.masterSocketId === socket.id) {
          endCampaignSession(prev.campaignId, 'O mestre foi desconectado da sessão.')
            .catch(() => {})
        }
      }

      io.to(`campaign:${prev.campaignId}`).emit('presence:update', {
        campaignId: prev.campaignId,
        characterId: prev.characterId,
        online: false,
      })
      userPresence.delete(user.id)
    })
  })

  return { io, isCampaignOnline, getCampaignSessionState }
}
