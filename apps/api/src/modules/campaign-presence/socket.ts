import type { Server as HttpServer } from 'node:http'
import { randomInt } from 'node:crypto'
import type { Prisma } from '@prisma/client'
import cookie from 'cookie'
import { Server as SocketIOServer } from 'socket.io'
import { z } from 'zod'
import { verifyToken } from '../../auth/jwt'
import { isActiveSession } from '../../auth/session'
import { prisma } from '../../db/prisma'
import { TOKEN_COOKIE } from '../../http/auth'
import { assetService } from '../assets/service'
import { isMovementBlockedBySceneWalls, normalizeSceneWalls } from '../campaign_scene/domain/wall-geometry'
import {
  defaultVttGridSettings,
  type VttDiceRoll,
  type VttGridSettings,
  type VttPlayerToken,
  type VttTableScene,
  type VttTokenMovementStarted,
  vttCombatAdjustInitiativeSchema,
  vttCombatCommandSchema,
  vttCombatParticipantsSchema,
  vttCombatStartSchema,
  vttDiceRollSchema,
  vttGridUpdateSchema,
  vttMeasurementUpdateSchema,
  vttSceneSelectSchema,
  vttTargetMarkerStyleUpdateSchema,
  vttTokenActionSchema,
  vttTokenLayerSchema,
  vttTokenMovePathSchema,
  vttTokenPlaceSchema,
  vttTokenRotateSchema,
  vttTokenUpdateSchema,
  vttTokensRemoveBulkSchema,
  vttWallsUpdateSchema,
} from './contracts'
import { areMovementPointsEqual, movementDurationMs, pathHasBlockedSegment } from './domain/token-movement'
import {
  addParticipantsToCombatState,
  adjustCombatInitiative,
  advanceCombatTurn,
  removeParticipantsFromCombatState,
  rewindCombatTurn,
  sortCombatParticipants,
  type VttCombatParticipant,
} from './domain/encounter'
import { selectPlayerVisibleSceneId } from './domain/scene-visibility'
import { CampaignMutationQueue } from './application/campaign-mutation-queue'
import {
  canonicalVttPersistenceTrigger,
  type VttPersistenceTrigger,
} from './application/vtt-persistence-policy'
import { registerPresenceHandlers } from './handlers/presence-handlers'
import { CampaignPresenceState } from './live-state'
import { sceneGridToVttSettings, tableTokenFromPersistedToken, vttGridSettingsToSceneData } from './mappers'
import { campaignRoom, userRoom } from './rooms'

const boardGridLimits = { columns: 50, rows: 34 }
const hexRowStepUnits = Math.sqrt(3) / 2

export function setupCampaignPresence(server: HttpServer) {
  const io = new SocketIOServer(server, {
    cors: {
      origin: process.env.NODE_ENV !== 'production' ? true : (process.env.WEB_ORIGIN ?? false),
      credentials: true,
    },
  })

  const state = new CampaignPresenceState()
  const campaignMutationQueue = new CampaignMutationQueue()
  const runCampaignMutation = campaignMutationQueue.run.bind(campaignMutationQueue)
  const campaignVttHydrationPromises = new Map<string, Promise<void>>()

  function isCampaignOnline(campaignId: string) {
    return state.isCampaignOnline(campaignId)
  }

  function getCampaignSessionState(campaignId: string) {
    return state.getCampaignSessionState(campaignId)
  }

  async function emitCampaignSessionState(campaignId: string) {
    const sessionState = getCampaignSessionState(campaignId)
    if (!sessionState) return

    const sockets = await io.in(campaignRoom(campaignId)).fetchSockets()
    await Promise.all(
      sockets.map(async (campaignSocket) => {
        campaignSocket.emit('presence:session:state', {
          campaignId,
          state: await getVisibleCampaignSessionState(campaignId, campaignSocket),
        })
      }),
    )
  }

  async function notifyCampaignStatus(campaignId: string, online: boolean) {
    const members = await prisma.campaignMember.findMany({
      where: { campaignId, status: 'ACTIVE' },
      select: { userId: true },
    })

    for (const member of members) {
      io.to(userRoom(member.userId)).emit('campaign:status', { campaignId, online })
    }
  }

  async function endCampaignSession(campaignId: string, message: string, trigger: VttPersistenceTrigger) {
    await persistCampaignLiveState(campaignId, trigger)
    state.clearCampaignSession(campaignId)
    await notifyCampaignStatus(campaignId, false)

    const sockets = await io.in(campaignRoom(campaignId)).fetchSockets()
    for (const campaignSocket of sockets) {
      const role = campaignSocket.data.memberRole as string | undefined
      const socketUser = campaignSocket.data.user as { id: string } | undefined

      if (role === 'PLAYER') {
        campaignSocket.emit('campaign:kicked', { campaignId, message })
      }

      if (socketUser?.id) {
        state.deleteUserPresence(socketUser.id)
      }

      if (socketUser?.id) {
        io.to(campaignRoom(campaignId)).emit('presence:update', {
          campaignId,
          userId: socketUser.id,
          online: false,
        })
      }

      campaignSocket.leave(campaignRoom(campaignId))
      campaignSocket.data.campaignId = undefined
      campaignSocket.data.memberRole = undefined
    }
  }

  function getCampaignGridSettings(campaignId: string) {
    return state.getCampaignGridSettings(campaignId)
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

  async function isActiveCampaignMaster(campaignId: string, userId: string) {
    const master = await prisma.campaignMember.findFirst({
      where: { campaignId, userId, role: 'MASTER', status: 'ACTIVE' },
      select: { id: true },
    })
    return Boolean(master)
  }

  async function canControlCampaignAsMaster(campaignId: string, socketId: string, userId: string) {
    const online = state.getCampaignOnline(campaignId)
    if (online) return online.masterSocketId === socketId && online.masterUserId === userId
    return isActiveCampaignMaster(campaignId, userId)
  }

  async function sceneBelongsToCampaign(campaignId: string, sceneId: string) {
    const scene = await prisma.campaignScene.findFirst({
      where: { id: sceneId, campaignId },
      select: { id: true },
    })
    return Boolean(scene)
  }

  async function removeCampaignTokens(campaignId: string, options: { sceneId?: string | null }) {
    const tokenMap = state.getCampaignTokens(campaignId)
    const tokenSceneMap = state.getCampaignTokenSceneIds(campaignId)
    if (!tokenMap || !tokenSceneMap) return

    const tokensToRemove = [...tokenMap.values()].filter((token) => {
      if (!options.sceneId) return true
      return tokenSceneMap.get(token.id) === options.sceneId
    })

    for (const token of tokensToRemove) {
      const sceneId = tokenSceneMap.get(token.id)
      if (!sceneId) continue

      tokenSceneMap.delete(token.id)
      await emitSceneTokenRemoved(campaignId, sceneId, token)
    }

    removeCombatParticipants(campaignId, tokensToRemove.map((token) => token.id))
    if (tokensToRemove.length) state.markCampaignVttStateDirty(campaignId)

    if (!options.sceneId) {
      tokenSceneMap.clear()
    }
  }

  async function getActiveSceneGridSettings(campaignId: string) {
    const sceneId = await getMasterActiveSceneId(campaignId)
    if (!sceneId) return getCampaignGridSettings(campaignId)

    const liveGrid = state.getCampaignSceneGridSettings(campaignId)?.get(sceneId)
    if (liveGrid) return liveGrid

    const scene = await prisma.campaignScene.findUnique({
      where: { id: sceneId },
      select: {
        gridVisible: true,
        gridShape: true,
        gridSize: true,
        gridOffsetX: true,
        gridOffsetY: true,
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
    const role = socket.data.memberRole as string | undefined
    if (role === 'MASTER') return getMasterActiveSceneId(campaignId)

    const online = state.getCampaignOnline(campaignId)
    const socketUser = socket.data.user as { id: string } | undefined
    if (!online && socketUser?.id && (await isActiveCampaignMaster(campaignId, socketUser.id))) {
      return getMasterActiveSceneId(campaignId)
    }

    const viewState = await prisma.campaignSceneViewState.findUnique({
      where: { campaignId },
      select: { forcedSceneId: true },
    })
    if (viewState?.forcedSceneId) return viewState.forcedSceneId

    if (!socketUser?.id) return null
    const liveTokenSceneMap = state.getCampaignTokenSceneIds(campaignId)
    const liveTokenMap = state.getCampaignTokens(campaignId)
    if (liveTokenSceneMap && liveTokenMap) {
      return selectPlayerVisibleSceneId(
        liveTokenMap.values(),
        liveTokenSceneMap,
        socketUser.id,
      )
    }

    const controlledTokenWhere: Prisma.CampaignTokenWhereInput = {
      campaignId,
      OR: [
        { actor: { controllerMember: { userId: socketUser.id } } },
        { actorId: null, controllerMember: { userId: socketUser.id } },
      ],
      placement: { isNot: null },
    }
    const token = await prisma.campaignToken.findFirst({
      where: controlledTokenWhere,
      orderBy: { createdAt: 'asc' },
      select: { placement: { select: { sceneId: true } } },
    })

    return token?.placement?.sceneId ?? null
  }

  async function getVisibleCampaignSessionState(campaignId: string, socket: { data: any }) {
    const online = state.getCampaignOnline(campaignId)
    if (!online) return null
    if (online.state === 'PAUSED') return 'PAUSED' as const

    const role = socket.data.memberRole as string | undefined
    if (role === 'MASTER') return 'ACTIVE' as const

    const masterSceneId = await getMasterActiveSceneId(campaignId)
    const visibleSceneId = await getVisibleSceneIdForSocket(campaignId, socket)
    return masterSceneId && visibleSceneId === masterSceneId ? 'ACTIVE' as const : 'PAUSED' as const
  }

  async function findPersistedSceneToken(campaignId: string, tokenId: string): Promise<VttPlayerToken | null> {
    const placement = await prisma.campaignTokenPlacement.findFirst({
      where: { tokenId, token: { campaignId } },
      select: {
        id: true,
        tokenId: true,
        sceneId: true,
        hidden: true,
        positionX: true,
        positionY: true,
        rotation: true,
        layer: true,
        blocksVisionAndLight: true,
        token: {
          include: {
            controllerMember: {
              select: { id: true, userId: true, role: true, user: { select: { email: true } } },
            },
            actor: {
              select: {
                controllerMember: {
                  select: { id: true, userId: true, role: true, user: { select: { email: true } } },
                },
              },
            },
          },
        },
      },
    })
    return placement ? tableTokenFromPersistedToken(placement) : null
  }

  async function refreshLiveTokenIdentity(campaignId: string, token: VttPlayerToken) {
    const identity = await prisma.campaignToken.findFirst({
      where: { id: token.id, campaignId },
      include: {
        controllerMember: {
          select: { id: true, userId: true, role: true, user: { select: { email: true } } },
        },
        actor: {
          select: {
            controllerMember: {
              select: { id: true, userId: true, role: true, user: { select: { email: true } } },
            },
          },
        },
      },
    })
    if (!identity) return null
    const effectiveController = identity.actor?.controllerMember ?? identity.controllerMember
    return {
      ...token,
      actorId: identity.actorId,
      name: identity.name,
      avatarUrl: identity.avatarUrl,
      color: identity.color,
      size: identity.size,
      ownerUserId: effectiveController?.userId ?? null,
      ownerName: effectiveController?.user.email ?? null,
      controllerMemberId: effectiveController?.id ?? null,
      controllerUserId: effectiveController?.userId ?? null,
      role: effectiveController?.role === 'PLAYER' ? 'PLAYER' as const : identity.actor ? 'NPC' as const : 'GENERIC' as const,
      canCustomizeAppearance: identity.canCustomizeAppearance,
      visionConfig: identity.visionConfig,
      lightConfig: identity.lightConfig,
    }
  }

  async function emitSceneGridSettings(campaignId: string, sceneId: string, settings: VttGridSettings) {
    const sockets = await io.in(campaignRoom(campaignId)).fetchSockets()
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

  async function emitSceneTokenChanged(
    campaignId: string,
    sceneId: string,
    token: VttPlayerToken,
    options?: { refreshOwnerVisibleScene?: boolean },
  ) {
    const sockets = await io.in(campaignRoom(campaignId)).fetchSockets()
    await Promise.all(
      sockets.map(async (campaignSocket) => {
        const visibleSceneId = await getVisibleSceneIdForSocket(campaignId, campaignSocket)
        const socketUser = campaignSocket.data.user as { id: string } | undefined
        const isTokenOwner = Boolean(socketUser?.id && token.controllerUserId === socketUser.id)
        if (visibleSceneId !== sceneId) {
          if (isTokenOwner && options?.refreshOwnerVisibleScene) await emitVisibleTableSnapshot(campaignId, campaignSocket)
          return
        }
        campaignSocket.emit('vtt:token:changed', {
          campaignId,
          sceneId,
          token,
        })
        if (isTokenOwner && options?.refreshOwnerVisibleScene && campaignSocket.data.memberRole !== 'MASTER') {
          await emitVisibleTableSnapshot(campaignId, campaignSocket)
        }
      }),
    )
  }

  async function emitSceneTokenMovementStarted(movement: VttTokenMovementStarted) {
    const sockets = await io.in(campaignRoom(movement.campaignId)).fetchSockets()
    await Promise.all(
      sockets.map(async (campaignSocket) => {
        const visibleSceneId = await getVisibleSceneIdForSocket(movement.campaignId, campaignSocket)
        if (visibleSceneId !== movement.sceneId) return
        campaignSocket.emit('vtt:token:movement-started', movement)
      }),
    )
  }

  async function emitSceneTokenRemoved(campaignId: string, sceneId: string, token: VttPlayerToken) {
    const sockets = await io.in(campaignRoom(campaignId)).fetchSockets()
    await Promise.all(
      sockets.map(async (campaignSocket) => {
        const socketUser = campaignSocket.data.user as { id: string } | undefined
        const isRemovedTokenOwner = Boolean(socketUser?.id && token.controllerUserId === socketUser.id)
        const visibleSceneId = await getVisibleSceneIdForSocket(campaignId, campaignSocket)
        if (visibleSceneId !== sceneId && !isRemovedTokenOwner) return
        campaignSocket.emit('vtt:token:removed', {
          campaignId,
          sceneId,
          tokenId: token.id,
          actorId: token.actorId,
        })
        if (isRemovedTokenOwner) await emitVisibleTableSnapshot(campaignId, campaignSocket)
      }),
    )
  }

  function getCampaignTokenMap(campaignId: string) {
    return state.getOrCreateCampaignTokenMap(campaignId)
  }

  function getCampaignTokenSceneMap(campaignId: string) {
    return state.getOrCreateCampaignTokenSceneMap(campaignId)
  }

  function getCampaignSceneGridMap(campaignId: string) {
    return state.getOrCreateCampaignSceneGridMap(campaignId)
  }

  async function hydrateCampaignLiveState(campaignId: string) {
    const scenes = await prisma.campaignScene.findMany({
      where: { campaignId },
      select: {
        id: true,
        gridVisible: true,
        gridShape: true,
        gridSize: true,
        gridOffsetX: true,
        gridOffsetY: true,
        metersPerCell: true,
        squareMeasurementColor: true,
        hexMeasurementColor: true,
        gridLineWidth: true,
        gridColor: true,
        walls: true,
      },
    })

    const sceneGridMap = new Map<string, VttGridSettings>()
    for (const scene of scenes) {
      sceneGridMap.set(scene.id, sceneGridToVttSettings(scene))
    }

    const persistedTokens = await prisma.campaignTokenPlacement.findMany({
      where: { token: { campaignId } },
      select: {
        id: true,
        tokenId: true,
        sceneId: true,
        hidden: true,
        positionX: true,
        positionY: true,
        rotation: true,
        layer: true,
        blocksVisionAndLight: true,
        token: {
          include: {
            controllerMember: {
              select: { id: true, userId: true, role: true, user: { select: { email: true } } },
            },
            actor: {
              select: {
                controllerMember: {
                  select: { id: true, userId: true, role: true, user: { select: { email: true } } },
                },
              },
            },
          },
        },
      },
    })

    const tokenMap = new Map<string, VttPlayerToken>()
    const tokenSceneMap = new Map<string, string>()
    for (const persistedToken of persistedTokens) {
      tokenMap.set(persistedToken.tokenId, tableTokenFromPersistedToken(persistedToken))
      tokenSceneMap.set(persistedToken.tokenId, persistedToken.sceneId)
    }

    state.setCampaignSceneGridSettings(campaignId, sceneGridMap)
    state.setCampaignTokens(campaignId, tokenMap)
    state.setCampaignTokenSceneIds(campaignId, tokenSceneMap)
    state.markCampaignVttStateHydrated(campaignId)
    state.clearCampaignVttStateDirty(campaignId)
  }

  async function ensureCampaignLiveStateHydrated(campaignId: string) {
    if (state.isCampaignVttStateHydrated(campaignId)) return

    const currentHydration = campaignVttHydrationPromises.get(campaignId)
    if (currentHydration) return currentHydration

    const hydration = hydrateCampaignLiveState(campaignId)
      .finally(() => campaignVttHydrationPromises.delete(campaignId))
    campaignVttHydrationPromises.set(campaignId, hydration)
    return hydration
  }

  async function persistCampaignLiveState(campaignId: string, trigger: VttPersistenceTrigger) {
    await ensureCampaignLiveStateHydrated(campaignId)
    if (!state.hasDirtyCampaignVttState(campaignId)) return
    void trigger

    const sceneGridMap = state.getCampaignSceneGridSettings(campaignId)
    const tokenMap = state.getCampaignTokens(campaignId)
    const tokenSceneMap = state.getCampaignTokenSceneIds(campaignId)

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

    if (!tokenMap || !tokenSceneMap) {
      state.clearCampaignVttStateDirty(campaignId)
      return
    }

    await prisma.$transaction(async (tx) => {
      await tx.campaignTokenPlacement.deleteMany({ where: { token: { campaignId } } })
      const tokensToCreate: Array<{
        tokenId: string
        sceneId: string
        hidden: boolean
        positionX: number
        positionY: number
        rotation: number
        layer: 'OBJECT' | 'TOKEN' | 'OVERLAY'
        blocksVisionAndLight: boolean
      }> = []
      for (const token of tokenMap.values()) {
        const sceneId = tokenSceneMap.get(token.id)
        if (!sceneId) continue
        tokensToCreate.push({
          tokenId: token.id,
          sceneId,
          hidden: token.hidden,
          positionX: token.position.x,
          positionY: token.position.y,
          rotation: token.rotation,
          layer: token.layer,
          blocksVisionAndLight: token.blocksVisionAndLight,
        })
      }

      if (tokensToCreate.length) {
        await tx.campaignTokenPlacement.createMany({
          data: tokensToCreate,
          skipDuplicates: true,
        })
      }
    })
    state.clearCampaignVttStateDirty(campaignId)
  }

  function setLiveSceneGrid(campaignId: string, sceneId: string, settings: VttGridSettings) {
    getCampaignSceneGridMap(campaignId).set(sceneId, settings)
    state.setCampaignGridSettings(campaignId, settings)
    state.markCampaignVttStateDirty(campaignId)
  }

  function setLiveSceneToken(campaignId: string, sceneId: string, token: VttPlayerToken) {
    getCampaignTokenMap(campaignId).set(token.id, token)
    getCampaignTokenSceneMap(campaignId).set(token.id, sceneId)
    state.markCampaignVttStateDirty(campaignId)
  }

  function getDefaultSceneDimensions(grid: VttGridSettings) {
    if (grid.shape === 'hex') {
      return {
        width: boardGridLimits.columns * grid.size,
        height: (boardGridLimits.rows * hexRowStepUnits + 0.5) * grid.size,
      }
    }

    return {
      width: boardGridLimits.columns * grid.size,
      height: boardGridLimits.rows * grid.size,
    }
  }

  async function listSceneTokens(campaignId: string, sceneId: string | null) {
    if (!sceneId) return []

    const liveTokenMap = state.getCampaignTokens(campaignId)
    const liveTokenSceneMap = state.getCampaignTokenSceneIds(campaignId)
    if (liveTokenMap && liveTokenSceneMap) {
      return [...liveTokenMap.values()].filter((token) => liveTokenSceneMap.get(token.id) === sceneId)
    }

    const tokens = await prisma.campaignTokenPlacement.findMany({
      where: { sceneId },
      select: { tokenId: true },
      orderBy: { createdAt: 'asc' },
    })

    const hydratedTokens = await Promise.all(tokens.map((token) => findPersistedSceneToken(campaignId, token.tokenId)))
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
        walls: true,
        gridVisible: true,
        gridShape: true,
        gridSize: true,
        gridOffsetX: true,
        gridOffsetY: true,
        metersPerCell: true,
        squareMeasurementColor: true,
        hexMeasurementColor: true,
        gridLineWidth: true,
        gridColor: true,
        fogConfig: true,
        fixedLightSources: true,
      },
    })
    if (!scene) return null

    const grid = state.getCampaignSceneGridSettings(campaignId)?.get(scene.id) ?? sceneGridToVttSettings(scene)
    const tokens = await listSceneTokens(campaignId, scene.id)
    let imageUrl = scene.backgroundUrl
    if (scene.backgroundCacheKey) {
      imageUrl = await assetService.getSignedUrl(scene.backgroundCacheKey).catch(() => scene.backgroundUrl)
    }

    const dimensions = getDefaultSceneDimensions(grid)

    return {
      id: scene.id,
      name: scene.name,
      imageUrl,
      fileName: scene.name,
      assetId: scene.assetId,
      width: dimensions.width,
      height: dimensions.height,
      grid,
      tokens,
      walls: normalizeSceneWalls(scene.walls).map((wall) => ({ ...wall, allowsLight: wall.allowsLight ?? wall.kind === 'window' })),
      fogConfig: scene.fogConfig,
      fixedLightSources: Array.isArray(scene.fixedLightSources) ? scene.fixedLightSources : [],
    }
  }

  async function getSceneWallCollisionContext(campaignId: string, sceneId: string) {
    const scene = await prisma.campaignScene.findFirst({
      where: { id: sceneId, campaignId },
      select: { walls: true, gridSize: true, gridOffsetX: true, gridOffsetY: true },
    })
    return scene ? {
      walls: normalizeSceneWalls(scene.walls),
      gridSize: scene.gridSize,
      offsetX: scene.gridOffsetX,
      offsetY: scene.gridOffsetY,
    } : null
  }

  async function emitSceneWallsChanged(campaignId: string, sceneId: string, walls: unknown[]) {
    const sockets = await io.in(campaignRoom(campaignId)).fetchSockets()
    await Promise.all(sockets.map(async (campaignSocket) => {
      const visibleSceneId = await getVisibleSceneIdForSocket(campaignId, campaignSocket)
      if (visibleSceneId === sceneId) campaignSocket.emit('vtt:walls:changed', { campaignId, sceneId, walls })
    }))
  }

  async function emitCampaignTokenSnapshot(campaignId: string, socketId: string, sceneId: string | null) {
    const persistedTokens = await listSceneTokens(campaignId, sceneId)
    const tokenMap = getCampaignTokenMap(campaignId)
    const tokenSceneMap = getCampaignTokenSceneMap(campaignId)
    persistedTokens.forEach((token) => {
      tokenMap.set(token.id, token)
      if (sceneId) tokenSceneMap.set(token.id, sceneId)
    })
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
      measurement: state.getCampaignMeasurement(campaignId) ?? null,
    })
  }

  async function emitVisibleTableSnapshot(campaignId: string, socket: { id: string; data: any }) {
    await ensureCampaignLiveStateHydrated(campaignId)
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

    io.to(socket.id).emit('vtt:target-marker-style:changed', {
      campaignId,
      style: state.getCampaignTargetMarkerStyle(campaignId),
    })

    await emitCampaignTokenSnapshot(campaignId, socket.id, scene?.id ?? null)
  }

  function emitCampaignScene(campaignId: string, scene: VttTableScene | null) {
    io.to(campaignRoom(campaignId)).emit('vtt:scene:changed', {
      campaignId,
      scene,
    })
  }

  function isActiveSessionMaster(campaignId: string, socketId: string, userId: string) {
    const online = state.getCampaignOnline(campaignId)
    return Boolean(online && online.masterSocketId === socketId && online.masterUserId === userId)
  }

  function emitCombatChanged(campaignId: string) {
    io.to(campaignRoom(campaignId)).emit('vtt:combat:changed', {
      campaignId,
      combat: state.getCampaignCombat(campaignId),
    })
  }

  function combatParticipantFromToken(token: VttPlayerToken): VttCombatParticipant {
    return {
      tokenId: token.id,
      actorId: token.actorId,
      name: token.name,
      avatarUrl: token.avatarUrl,
      color: token.color,
      initiative: randomInt(1, 21),
    }
  }

  function requestFogExplorationFlush(campaignId: string) {
    return new Promise<void>((resolve) => {
      io.timeout(500).to(campaignRoom(campaignId)).emit('fog:exploration:flush-request', { campaignId, reason: 'SCENE_CHANGE' }, () => resolve())
    })
  }

  function removeCombatParticipants(campaignId: string, tokenIds: string[]) {
    const combat = state.getCampaignCombat(campaignId)
    if (!combat || !tokenIds.length) return

    const updatedCombat = removeParticipantsFromCombatState(combat, tokenIds)
    if (!updatedCombat) {
      state.deleteCampaignCombat(campaignId)
      emitCombatChanged(campaignId)
      return
    }

    state.setCampaignCombat(campaignId, updatedCombat)
    emitCombatChanged(campaignId)
  }

  function removeCampaignTokenFromLiveState(campaignId: string, tokenId: string) {
    const tokenRemoved = state.getCampaignTokens(campaignId)?.delete(tokenId) ?? false
    const placementRemoved = state.getCampaignTokenSceneIds(campaignId)?.delete(tokenId) ?? false
    if (tokenRemoved || placementRemoved) state.markCampaignVttStateDirty(campaignId)
    removeCombatParticipants(campaignId, [tokenId])
  }

  async function refreshCampaignTokenInLiveState(campaignId: string, tokenId: string) {
    const tokenMap = state.getCampaignTokens(campaignId)
    const cachedToken = tokenMap?.get(tokenId)
    if (!tokenMap || !cachedToken) return
    const refreshedToken = await refreshLiveTokenIdentity(campaignId, cachedToken)
    if (refreshedToken) tokenMap.set(tokenId, refreshedToken)
  }

  function getCampaignTokenLivePlacement(campaignId: string, tokenId: string) {
    const tokenMap = state.getCampaignTokens(campaignId)
    const tokenSceneMap = state.getCampaignTokenSceneIds(campaignId)
    if (!tokenMap || !tokenSceneMap) return undefined

    const sceneId = tokenSceneMap.get(tokenId)
    if (!sceneId) return null

    const token = tokenMap.get(tokenId)
    if (!token) return undefined

    return {
      sceneId,
      hidden: token.hidden,
      position: token.position,
      rotation: token.rotation,
      layer: token.layer,
      blocksVisionAndLight: token.blocksVisionAndLight,
    }
  }

  async function removeScenePlacementsFromLiveState(campaignId: string, sceneId: string) {
    await ensureCampaignLiveStateHydrated(campaignId)
    const tokenMap = state.getCampaignTokens(campaignId)
    const tokenSceneMap = state.getCampaignTokenSceneIds(campaignId)
    if (!tokenMap || !tokenSceneMap) return

    const removedTokenIds: string[] = []
    for (const [tokenId, placedSceneId] of tokenSceneMap.entries()) {
      if (placedSceneId !== sceneId) continue
      tokenSceneMap.delete(tokenId)
      removedTokenIds.push(tokenId)
      const token = tokenMap.get(tokenId)
      if (token) await emitSceneTokenRemoved(campaignId, sceneId, token)
    }
    if (removedTokenIds.length) state.markCampaignVttStateDirty(campaignId)
    removeCombatParticipants(campaignId, removedTokenIds)
  }

  async function removeCampaignToken(campaignId: string, tokenId: string) {
    const tokenMap = state.getCampaignTokens(campaignId)
    const token = tokenMap?.get(tokenId) ?? await findPersistedSceneToken(campaignId, tokenId)
    if (!token) return
    const liveSceneId = state.getCampaignTokenSceneIds(campaignId)?.get(tokenId)
    const persistedPlacement = liveSceneId
      ? null
      : await prisma.campaignTokenPlacement.findFirst({
          where: { tokenId, token: { campaignId } },
          select: { sceneId: true },
        })
    const sceneId = liveSceneId ?? persistedPlacement?.sceneId
    if (!sceneId) return

    state.getCampaignTokenSceneIds(campaignId)?.delete(tokenId)
    state.markCampaignVttStateDirty(campaignId)
    await emitSceneTokenRemoved(campaignId, sceneId, token)
    removeCombatParticipants(campaignId, [tokenId])
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

    registerPresenceHandlers(socket, {
      io,
      state,
      isCampaignOnline,
      getCampaignSessionState,
      getVisibleCampaignSessionState,
      emitCampaignSessionState,
      emitCampaignMeasurementSnapshot,
      emitCampaignScene,
      emitVisibleTableSnapshot,
      notifyCampaignStatus,
      hydrateCampaignLiveState,
      persistCampaignLiveState,
      endCampaignSession,
      runCampaignMutation,
    })
    socket.on('vtt:grid:update', async (input: unknown) => {
      try {
        const parsed = vttGridUpdateSchema.safeParse(input)
        if (!parsed.success) return

        const { campaignId, sceneId: requestedSceneId, settings } = parsed.data
        await runCampaignMutation(campaignId, async () => {
          const online = state.getCampaignOnline(campaignId)
          if (!(await canControlCampaignAsMaster(campaignId, socket.id, user.id))) return
          await ensureCampaignLiveStateHydrated(campaignId)

          const sceneId = requestedSceneId ?? (await getMasterActiveSceneId(campaignId))
          if (!sceneId) return
          if (!(await sceneBelongsToCampaign(campaignId, sceneId))) return

          setLiveSceneGrid(campaignId, sceneId, settings)
          if (online) await emitSceneGridSettings(campaignId, sceneId, settings)
          else socket.emit('vtt:grid:changed', { campaignId, sceneId, settings })
        })
      } catch {
        socket.emit('presence:error', { message: 'Nao foi possivel atualizar o grid da cena.' })
      }
    })

    socket.on('vtt:target-marker-style:update', async (
      input: unknown,
      ack?: (
        response:
          | { ok: true; data: { style: 'ARROWS' | 'RETICLE' } }
          | { ok: false; error: { code: string; message: string } }
      ) => void,
    ) => {
      const reject = (code: string, message: string) => ack?.({ ok: false, error: { code, message } })

      try {
        const parsed = vttTargetMarkerStyleUpdateSchema.safeParse(input)
        if (!parsed.success) return reject('INVALID_PAYLOAD', 'Layout do marcador de alvo invalido.')

        const { campaignId, style } = parsed.data
        if (!(await canControlCampaignAsMaster(campaignId, socket.id, user.id))) {
          return reject('FORBIDDEN', 'Somente o Mestre pode alterar o marcador de alvo.')
        }

        state.setCampaignTargetMarkerStyle(campaignId, style)
        io.to(campaignRoom(campaignId)).emit('vtt:target-marker-style:changed', {
          campaignId,
          style,
        })
        ack?.({ ok: true, data: { style } })
      } catch {
        socket.emit('presence:error', { message: 'Nao foi possivel alterar o marcador de alvo.' })
        reject('INTERNAL_ERROR', 'Nao foi possivel alterar o marcador de alvo.')
      }
    })

    socket.on('vtt:target-marker-style:request', async (input: unknown) => {
      const parsed = z.object({ campaignId: z.string().min(1) }).safeParse(input)
      if (!parsed.success) return

      const { campaignId } = parsed.data
      const online = state.getCampaignOnline(campaignId)
      if (online && socket.data.campaignId !== campaignId) return
      if (!online && !(await isActiveCampaignMaster(campaignId, user.id))) return

      socket.emit('vtt:target-marker-style:changed', {
        campaignId,
        style: state.getCampaignTargetMarkerStyle(campaignId),
      })
    })

    socket.on('vtt:token:place', async (
      input: unknown,
      ack?: (response: { ok: true } | { ok: false; error: { code: string; message: string } }) => void,
    ) => {
      const reject = (code: string, message: string) => ack?.({ ok: false, error: { code, message } })

      try {
        const parsed = vttTokenPlaceSchema.safeParse(input)
        if (!parsed.success) return reject('INVALID_PAYLOAD', 'Posicionamento invalido')

        const { campaignId, sceneId, tokenId, position } = parsed.data
        const online = state.getCampaignOnline(campaignId)
        if (!(await canControlCampaignAsMaster(campaignId, socket.id, user.id))) {
          return reject('FORBIDDEN', 'Posicionamento nao permitido')
        }
        if (!(await sceneBelongsToCampaign(campaignId, sceneId))) {
          return reject('SCENE_NOT_FOUND', 'Cena nao encontrada')
        }
        await ensureCampaignLiveStateHydrated(campaignId)

        const campaignToken = await prisma.campaignToken.findFirst({
          where: { id: tokenId, campaignId },
          include: {
            controllerMember: {
              select: { id: true, userId: true, role: true, user: { select: { email: true } } },
            },
            actor: {
              select: {
                controllerMember: {
                  select: { id: true, userId: true, role: true, user: { select: { email: true } } },
                },
              },
            },
          },
        })
        if (!campaignToken) return reject('TOKEN_NOT_FOUND', 'Token nao encontrado')

        if (getCampaignTokenSceneMap(campaignId).has(tokenId)) {
          return reject('TOKEN_ALREADY_PLACED', 'O Token ja esta posicionado em uma cena')
        }

        const effectiveController = campaignToken.actor?.controllerMember ?? campaignToken.controllerMember

        const token: VttPlayerToken = {
          id: campaignToken.id,
          actorId: campaignToken.actorId,
          name: campaignToken.name,
          avatarUrl: campaignToken.avatarUrl,
          color: campaignToken.color,
          size: campaignToken.size,
          ownerUserId: effectiveController?.userId ?? null,
          ownerName: effectiveController?.user.email ?? null,
          controllerMemberId: effectiveController?.id ?? null,
          controllerUserId: effectiveController?.userId ?? null,
          role: effectiveController?.role === 'PLAYER' ? 'PLAYER' : campaignToken.actor ? 'NPC' : 'GENERIC',
          canCustomizeAppearance: campaignToken.canCustomizeAppearance,
          visionConfig: campaignToken.visionConfig,
          lightConfig: campaignToken.lightConfig,
          hidden: false,
          rotation: 0,
          layer: 'TOKEN',
          blocksVisionAndLight: false,
          position,
        }

        setLiveSceneToken(campaignId, sceneId, token)
        if (online) await emitSceneTokenChanged(campaignId, sceneId, token, { refreshOwnerVisibleScene: true })
        else {
          socket.emit('vtt:token:changed', { campaignId, sceneId, token })
        }
        ack?.({ ok: true })
      } catch {
        reject('INTERNAL_ERROR', 'Nao foi possivel posicionar o Token')
      }
    })

    socket.on('vtt:token:move', async (
      input: unknown,
      ack?: (response: { ok: true } | { ok: false; error: { code: string; message: string } }) => void,
    ) => {
      const reject = (code: string, message: string) => ack?.({ ok: false, error: { code, message } })
      const parsed = vttTokenUpdateSchema.safeParse(input)
      if (!parsed.success) return reject('INVALID_PAYLOAD', 'Movimento invalido')

      const { campaignId, tokenId, position } = parsed.data
      const online = state.getCampaignOnline(campaignId)
      const isMasterMove = await canControlCampaignAsMaster(campaignId, socket.id, user.id)
      const isPlayerMove = Boolean(
        online?.state === 'ACTIVE' &&
        socket.data.campaignId === campaignId &&
        socket.data.memberRole === 'PLAYER',
      )
      if (!isMasterMove && !isPlayerMove) return reject('FORBIDDEN', 'Movimento nao permitido')
      await ensureCampaignLiveStateHydrated(campaignId)

      const tokenMap = state.getCampaignTokens(campaignId)
      const cachedToken = tokenMap ? tokenMap.get(tokenId) : await findPersistedSceneToken(campaignId, tokenId)
      if (!cachedToken) return reject('TOKEN_NOT_FOUND', 'Token nao encontrado')
      const token = await refreshLiveTokenIdentity(campaignId, cachedToken)
      if (!token) return reject('TOKEN_NOT_FOUND', 'Token nao encontrado')
      if (isPlayerMove && token.controllerUserId !== user.id) return reject('FORBIDDEN', 'Token nao controlado')
      if (isPlayerMove && state.getCampaignCombat(campaignId)) return reject('INVALID_MOVE', 'Movimento livre indisponivel em combate')
      if (state.isTokenMovementActive(campaignId, tokenId)) return reject('INVALID_MOVE', 'Token ja esta em movimento')

      const nextToken = { ...token, position }
      const sceneId = getCampaignTokenSceneMap(campaignId).get(tokenId)
      if (!sceneId) return reject('TOKEN_NOT_FOUND', 'Token fora da cena')
      if (isPlayerMove) {
        const collision = await getSceneWallCollisionContext(campaignId, sceneId)
        if (!collision) return reject('SCENE_NOT_FOUND', 'Cena nao encontrada')
        const toScenePixels = (point: { x: number; y: number }) => ({
          x: point.x * collision.gridSize + collision.offsetX,
          y: point.y * collision.gridSize + collision.offsetY,
        })
        if (isMovementBlockedBySceneWalls({ from: toScenePixels(token.position), to: toScenePixels(position), walls: collision.walls })) return reject('INVALID_MOVE', 'Movimento bloqueado por uma barreira')
      }
      setLiveSceneToken(campaignId, sceneId, nextToken)
      if (online) await emitSceneTokenChanged(campaignId, sceneId, nextToken)
      else socket.emit('vtt:token:changed', { campaignId, sceneId, token: nextToken })
      ack?.({ ok: true })
    })

    socket.on('vtt:token:move-path', async (
      input: unknown,
      ack?: (response: { ok: true } | { ok: false; error: { code: string; message: string } }) => void,
    ) => {
      const reject = (code: string, message: string) => ack?.({ ok: false, error: { code, message } })
      const parsed = vttTokenMovePathSchema.safeParse(input)
      if (!parsed.success) return reject('INVALID_PAYLOAD', 'Trajeto invalido.')

      const { campaignId, tokenId, sceneId, path } = parsed.data
      const online = state.getCampaignOnline(campaignId)
      const isMasterMove = await canControlCampaignAsMaster(campaignId, socket.id, user.id)
      const isPlayerMove = Boolean(
        online?.state === 'ACTIVE' &&
        socket.data.campaignId === campaignId &&
        socket.data.memberRole === 'PLAYER',
      )
      if (!isMasterMove && !isPlayerMove) return reject('FORBIDDEN', 'Movimento nao autorizado.')
      await ensureCampaignLiveStateHydrated(campaignId)
      if (state.isTokenMovementActive(campaignId, tokenId)) return reject('TOKEN_MOVING', 'O Token ja esta em movimento.')

      const tokenMap = state.getCampaignTokens(campaignId)
      const cachedToken = tokenMap ? tokenMap.get(tokenId) : await findPersistedSceneToken(campaignId, tokenId)
      if (!cachedToken) return reject('TOKEN_NOT_FOUND', 'Token nao encontrado.')
      const token = await refreshLiveTokenIdentity(campaignId, cachedToken)
      if (!token) return reject('TOKEN_NOT_FOUND', 'Token nao encontrado.')
      if (getCampaignTokenSceneMap(campaignId).get(tokenId) !== sceneId) return reject('INVALID_MOVE', 'Token fora da cena informada.')
      if (!areMovementPointsEqual(path[0], token.position)) return reject('INVALID_MOVE', 'O trajeto nao inicia na posicao atual do Token.')
      if (isPlayerMove && token.controllerUserId !== user.id) return reject('FORBIDDEN', 'Token sem controle do jogador.')

      const combat = state.getCampaignCombat(campaignId)
      const activeCombatTokenId = combat?.participants[combat.activeTurnIndex]?.tokenId ?? null
      if (isPlayerMove && combat && activeCombatTokenId !== tokenId) {
        return reject('NOT_ACTIVE_TURN', 'Somente o Token do turno ativo pode se mover.')
      }

      const collision = await getSceneWallCollisionContext(campaignId, sceneId)
      if (!collision) return reject('INVALID_MOVE', 'Nao foi possivel validar a cena.')
      const toScenePixels = (point: { x: number; y: number }) => ({
        x: point.x * collision.gridSize + collision.offsetX,
        y: point.y * collision.gridSize + collision.offsetY,
      })
      const blocked = pathHasBlockedSegment(path, (from, to) => isMovementBlockedBySceneWalls({
        from: toScenePixels(from),
        to: toScenePixels(to),
        walls: collision.walls,
      }))
      if (blocked) return reject('INVALID_MOVE', 'O trajeto atravessa uma parede fechada.')

      const durationMs = movementDurationMs(path)
      const startedAt = Date.now() + 120
      const finalPosition = path[path.length - 1]
      const nextToken = { ...token, position: finalPosition }
      setLiveSceneToken(campaignId, sceneId, nextToken)
      state.setTokenMovementDeadline(campaignId, tokenId, startedAt + durationMs)

      const movement = { campaignId, tokenId, sceneId, path, startedAt, durationMs }
      if (online) {
        await emitSceneTokenMovementStarted(movement)
      } else {
        socket.emit('vtt:token:movement-started', movement)
      }
      setTimeout(() => {
        const currentMeasurement = state.getCampaignMeasurement(campaignId)
        if (currentMeasurement?.tokenId !== tokenId) return
        state.deleteCampaignMeasurement(campaignId)
        io.to(campaignRoom(campaignId)).emit('vtt:measurement:changed', { campaignId, measurement: null })
      }, Math.max(0, startedAt + durationMs - Date.now()))
      ack?.({ ok: true })
    })

    socket.on('vtt:token:remove', async (input: unknown) => {
      const parsed = vttTokenActionSchema.safeParse(input)
      if (!parsed.success) return

      const { campaignId, tokenId } = parsed.data
      if (!(await canControlCampaignAsMaster(campaignId, socket.id, user.id))) return
      await ensureCampaignLiveStateHydrated(campaignId)

      await removeCampaignToken(campaignId, tokenId)
    })

    socket.on('vtt:token:rotate', async (input: unknown) => {
      const parsed = vttTokenRotateSchema.safeParse(input)
      if (!parsed.success) return

      const { campaignId, tokenId, rotation } = parsed.data
      const online = state.getCampaignOnline(campaignId)
      const isMasterRotation = await canControlCampaignAsMaster(campaignId, socket.id, user.id)
      const isPlayerRotation = Boolean(
        online?.state === 'ACTIVE' &&
        socket.data.campaignId === campaignId &&
        socket.data.memberRole === 'PLAYER',
      )
      if (!isMasterRotation && !isPlayerRotation) return
      await ensureCampaignLiveStateHydrated(campaignId)

      const cachedToken = state.getCampaignTokens(campaignId)?.get(tokenId) ?? await findPersistedSceneToken(campaignId, tokenId)
      if (!cachedToken) return
      const token = await refreshLiveTokenIdentity(campaignId, cachedToken)
      if (!token) return
      if (isPlayerRotation && token.controllerUserId !== user.id) return

      const sceneId = getCampaignTokenSceneMap(campaignId).get(tokenId)
      if (!sceneId) return
      const normalizedRotation = ((rotation % 360) + 360) % 360
      const nextToken = { ...token, rotation: normalizedRotation }
      setLiveSceneToken(campaignId, sceneId, nextToken)
      if (online) await emitSceneTokenChanged(campaignId, sceneId, nextToken)
      else socket.emit('vtt:token:changed', { campaignId, sceneId, token: nextToken })
    })

    socket.on('vtt:token:layer', async (input: unknown) => {
      const parsed = vttTokenLayerSchema.safeParse(input)
      if (!parsed.success) return

      const { campaignId, tokenId, layer } = parsed.data
      const online = state.getCampaignOnline(campaignId)
      if (!(await canControlCampaignAsMaster(campaignId, socket.id, user.id))) return
      await ensureCampaignLiveStateHydrated(campaignId)

      const cachedToken = state.getCampaignTokens(campaignId)?.get(tokenId) ?? await findPersistedSceneToken(campaignId, tokenId)
      if (!cachedToken) return
      const token = await refreshLiveTokenIdentity(campaignId, cachedToken)
      if (!token) return
      const sceneId = getCampaignTokenSceneMap(campaignId).get(tokenId)
      if (!sceneId) return

      const nextToken = { ...token, layer }
      setLiveSceneToken(campaignId, sceneId, nextToken)
      if (online) await emitSceneTokenChanged(campaignId, sceneId, nextToken)
      else socket.emit('vtt:token:changed', { campaignId, sceneId, token: nextToken })
    })

    socket.on('vtt:tokens:remove-bulk', async (input: unknown) => {
      const parsed = vttTokensRemoveBulkSchema.safeParse(input)
      if (!parsed.success) return

      const { campaignId } = parsed.data
      if (!(await canControlCampaignAsMaster(campaignId, socket.id, user.id))) return
      await ensureCampaignLiveStateHydrated(campaignId)

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

      const { campaignId, tokenId } = parsed.data
      const online = state.getCampaignOnline(campaignId)
      if (!(await canControlCampaignAsMaster(campaignId, socket.id, user.id))) return
      await ensureCampaignLiveStateHydrated(campaignId)

      const tokenMap = state.getCampaignTokens(campaignId)
      const cachedToken = tokenMap ? tokenMap.get(tokenId) : await findPersistedSceneToken(campaignId, tokenId)
      if (!cachedToken) return
      const token = await refreshLiveTokenIdentity(campaignId, cachedToken)
      if (!token) return

      const nextToken = { ...token, hidden: !token.hidden }
      const sceneId = getCampaignTokenSceneMap(campaignId).get(tokenId)
      if (!sceneId) return
      setLiveSceneToken(campaignId, sceneId, nextToken)
      if (online) await emitSceneTokenChanged(campaignId, sceneId, nextToken)
      else socket.emit('vtt:token:changed', { campaignId, sceneId, token: nextToken })
      if (nextToken.hidden) removeCombatParticipants(campaignId, [tokenId])
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

    socket.on('vtt:combat:start', async (input: unknown) => {
      const parsed = vttCombatStartSchema.safeParse(input)
      if (!parsed.success) return

      const { campaignId, sceneId, tokenIds } = parsed.data
      if (!isActiveSessionMaster(campaignId, socket.id, user.id)) return
      if (!(await sceneBelongsToCampaign(campaignId, sceneId))) return

      const selectedTokenIds = new Set(tokenIds)
      const tokens = (await listSceneTokens(campaignId, sceneId)).filter(
        (token) => selectedTokenIds.has(token.id) && !token.hidden,
      )
      if (!tokens.length) return

      const participants = sortCombatParticipants(tokens.map(combatParticipantFromToken))

      state.setCampaignCombat(campaignId, {
        campaignId,
        sceneId,
        round: 1,
        turnCount: 1,
        activeTurnIndex: 0,
        status: 'ACTIVE',
        participants,
      })
      emitCombatChanged(campaignId)
    })

    socket.on('vtt:combat:add-participants', async (input: unknown) => {
      const parsed = vttCombatParticipantsSchema.safeParse(input)
      if (!parsed.success) return

      const { campaignId, tokenIds } = parsed.data
      if (!isActiveSessionMaster(campaignId, socket.id, user.id)) return

      const combat = state.getCampaignCombat(campaignId)
      if (!combat) return

      const requestedTokenIds = new Set(tokenIds)
      const currentTokenIds = new Set(combat.participants.map((participant) => participant.tokenId))
      const tokens = (await listSceneTokens(campaignId, combat.sceneId)).filter(
        (token) => requestedTokenIds.has(token.id) && !currentTokenIds.has(token.id) && !token.hidden,
      )
      if (!tokens.length) return

      state.setCampaignCombat(
        campaignId,
        addParticipantsToCombatState(combat, tokens.map(combatParticipantFromToken)),
      )
      emitCombatChanged(campaignId)
    })

    socket.on('vtt:combat:remove-participants', (input: unknown) => {
      const parsed = vttCombatParticipantsSchema.safeParse(input)
      if (!parsed.success) return

      const { campaignId, tokenIds } = parsed.data
      if (!isActiveSessionMaster(campaignId, socket.id, user.id)) return

      removeCombatParticipants(campaignId, tokenIds)
    })

    socket.on('vtt:combat:adjust-initiative', (input: unknown) => {
      const parsed = vttCombatAdjustInitiativeSchema.safeParse(input)
      if (!parsed.success) return

      const { campaignId, tokenId, initiativeAdjustment } = parsed.data
      if (!isActiveSessionMaster(campaignId, socket.id, user.id)) return

      const combat = state.getCampaignCombat(campaignId)
      if (!combat) return

      state.setCampaignCombat(campaignId, adjustCombatInitiative(combat, tokenId, initiativeAdjustment))
      emitCombatChanged(campaignId)
    })

    socket.on('vtt:combat:next-turn', (input: unknown) => {
      const parsed = vttCombatCommandSchema.safeParse(input)
      if (!parsed.success) return

      const { campaignId } = parsed.data
      if (!isActiveSessionMaster(campaignId, socket.id, user.id)) return

      const combat = state.getCampaignCombat(campaignId)
      if (!combat?.participants.length) return

      state.setCampaignCombat(campaignId, advanceCombatTurn(combat))
      emitCombatChanged(campaignId)
    })

    socket.on('vtt:combat:previous-turn', (input: unknown) => {
      const parsed = vttCombatCommandSchema.safeParse(input)
      if (!parsed.success) return

      const { campaignId } = parsed.data
      if (!isActiveSessionMaster(campaignId, socket.id, user.id)) return

      const combat = state.getCampaignCombat(campaignId)
      if (!combat?.participants.length) return

      state.setCampaignCombat(campaignId, rewindCombatTurn(combat))
      emitCombatChanged(campaignId)
    })

    socket.on('vtt:combat:end', (input: unknown) => {
      const parsed = vttCombatCommandSchema.safeParse(input)
      if (!parsed.success) return

      const { campaignId } = parsed.data
      if (!isActiveSessionMaster(campaignId, socket.id, user.id)) return

      state.deleteCampaignCombat(campaignId)
      emitCombatChanged(campaignId)
    })

    socket.on('vtt:combat:request', (input: unknown) => {
      const parsed = vttCombatCommandSchema.safeParse(input)
      if (!parsed.success) return

      const { campaignId } = parsed.data
      if (!isCampaignOnline(campaignId)) return
      if (socket.data.campaignId !== campaignId) return

      socket.emit('vtt:combat:changed', {
        campaignId,
        combat: state.getCampaignCombat(campaignId),
      })
    })

    socket.on('vtt:measurement:update', (input: unknown) => {
      const parsed = vttMeasurementUpdateSchema.safeParse(input)
      if (!parsed.success) return

      const { campaignId, measurement } = parsed.data
      const online = state.getCampaignOnline(campaignId)
      if (!online) return
      if (socket.data.campaignId !== campaignId) return
      if (online.state === 'PAUSED' && socket.data.memberRole !== 'MASTER') return

      if (measurement) {
        const token = state.getCampaignTokens(campaignId)?.get(measurement.tokenId)
        const tokenSceneId = state.getCampaignTokenSceneIds(campaignId)?.get(measurement.tokenId)
        if (!token || tokenSceneId !== measurement.sceneId) return
        const isMasterMeasurement = socket.data.memberRole === 'MASTER'
        const isPlayerMeasurement = socket.data.memberRole === 'PLAYER' && token.controllerUserId === user.id
        if (!isMasterMeasurement && !isPlayerMeasurement) return
        if (!areMovementPointsEqual(measurement.points[0], token.position)) return
        const combat = state.getCampaignCombat(campaignId)
        const activeTokenId = combat?.participants[combat.activeTurnIndex]?.tokenId ?? null
        if (isPlayerMeasurement && combat && activeTokenId !== measurement.tokenId) return
        state.setCampaignMeasurement(campaignId, measurement)
      } else {
        const currentMeasurement = state.getCampaignMeasurement(campaignId)
        if (currentMeasurement) {
          const token = state.getCampaignTokens(campaignId)?.get(currentMeasurement.tokenId)
          const canClear = socket.data.memberRole === 'MASTER' || (
            socket.data.memberRole === 'PLAYER' && token?.controllerUserId === user.id
          )
          if (!canClear) return
        }
        state.deleteCampaignMeasurement(campaignId)
      }

      io.to(campaignRoom(campaignId)).emit('vtt:measurement:changed', {
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
      const online = state.getCampaignOnline(campaignId)
      if (!(await canControlCampaignAsMaster(campaignId, socket.id, user.id))) return

      if (online) await requestFogExplorationFlush(campaignId)
      await runCampaignMutation(campaignId, () =>
        persistCampaignLiveState(campaignId, canonicalVttPersistenceTrigger('vtt:scene:select')),
      )
      const sceneUpdated = await updateMasterActiveScene(campaignId, scene?.id ?? null)
      if (!sceneUpdated) return
      const combat = state.getCampaignCombat(campaignId)
      if (combat && combat.sceneId !== (scene?.id ?? null)) {
        state.deleteCampaignCombat(campaignId)
        emitCombatChanged(campaignId)
      }
      if (scene?.id) {
        const settings = await getActiveSceneGridSettings(campaignId)
        state.setCampaignGridSettings(campaignId, settings)
      }

      if (!online) return

      const pausedOnline = { ...online, state: 'PAUSED' as const }
      state.setCampaignOnline(campaignId, pausedOnline)
      emitCampaignSessionState(campaignId)
      await emitVisibleTableSnapshot(campaignId, socket)

      state.deletePendingCampaignScene(campaignId)
    })

    socket.on('vtt:scene:request', async (input: unknown) => {
      const parsed = z.object({ campaignId: z.string().min(1) }).safeParse(input)
      if (!parsed.success) return

      const { campaignId } = parsed.data
      const online = state.getCampaignOnline(campaignId)
      if (online && socket.data.campaignId !== campaignId) return
      if (!online && !(await isActiveCampaignMaster(campaignId, user.id))) return

      await emitVisibleTableSnapshot(campaignId, socket)
    })

    socket.on('vtt:walls:update', async (input: unknown) => {
      const parsed = vttWallsUpdateSchema.safeParse(input)
      if (!parsed.success) return

      const { campaignId, sceneId, walls } = parsed.data
      if (!(await canControlCampaignAsMaster(campaignId, socket.id, user.id))) return
      if (!(await sceneBelongsToCampaign(campaignId, sceneId))) return

      await prisma.campaignScene.update({ where: { id: sceneId }, data: { walls } })
      await emitSceneWallsChanged(campaignId, sceneId, walls)
    })

    socket.on('vtt:dice:roll', async (input: unknown) => {
      const parsed = vttDiceRollSchema.safeParse(input)
      if (!parsed.success) return

      const { campaignId, rolls: diceRolls } = parsed.data
      const online = state.getCampaignOnline(campaignId)
      if (!online) return
      if (socket.data.campaignId !== campaignId) return
      if (online.state === 'PAUSED' && socket.data.memberRole !== 'MASTER') return

      const member = await prisma.campaignMember.findFirst({
        where: { campaignId, userId: user.id, status: 'ACTIVE' },
        select: { role: true, user: { select: { email: true } } },
      })
      if (!member) return

      const rolledAt = Date.now()
      const rolls: VttDiceRoll[] = diceRolls.map((diceRoll, index) => ({
        id: rolledAt + index,
        sides: diceRoll.sides,
        value: diceRoll.value,
        actorId: null,
        actorName: member.role === 'MASTER' ? 'Mestre' : member.user.email,
        rolledAt,
      }))

      io.to(campaignRoom(campaignId)).emit('vtt:dice:rolled', {
        campaignId,
        roll: rolls[0],
        rolls,
      })
    })

  })

  return {
    io,
    isCampaignOnline,
    getCampaignSessionState,
    getVisibleSceneId: async (campaignId: string, socketId: string) => {
      const targetSocket = io.sockets.sockets.get(socketId)
      return targetSocket ? getVisibleSceneIdForSocket(campaignId, targetSocket) : null
    },
    removeCampaignTokenFromLiveState,
    refreshCampaignTokenInLiveState,
    getCampaignTokenLivePlacement,
    removeScenePlacementsFromLiveState,
  }
}
