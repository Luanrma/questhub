import type { Server as HttpServer } from 'node:http'
import { randomInt } from 'node:crypto'
import cookie from 'cookie'
import { Server as SocketIOServer } from 'socket.io'
import { z } from 'zod'
import { verifyToken } from '../../auth/jwt'
import { isActiveSession } from '../../auth/session'
import { prisma } from '../../db/prisma'
import { TOKEN_COOKIE } from '../../http/auth'
import { assetService } from '../assets/service'
import { presentChatMessage } from '../chat/presenter'
import { findBestiaryCreature } from '../game_systems/bestiary/registry'
import { derivePublicNpcHealth, toCombatantHealth } from '../combat/domain/health-rules'
import type { CombatantIdentity, RawCombatHealth } from '../combat/domain/types'
import {
  vttCombatHealthAdjustSchema,
  vttCombatHealthRequestSchema,
  vttCombatHealthSetSchema,
} from '../combat/domain/validation'
import { adjustHealth, getOrInitializeHealth, presentHealthForCombatant, setHealth } from '../combat/services/combat-health-service'
import { feetToMeters } from '../encounter_movement/domain/movement-distance'
import { commitMovementAction, validateMovement } from '../encounter_movement/domain/movement-validation'
import { getCatalogSpeedFeet } from '../encounter_movement/repositories/bestiary-speed'
import { getCharacterSpeedMeters } from '../encounter_movement/repositories/character-speed'
import { presentSceneHazardForRole } from '../campaign_scene/hazard-instances/domain/presenter'
import { hiddenHazardName, type SceneHazardInstance } from '../campaign_scene/hazard-instances/domain/types'
import { isMovementPathBlockedBySceneWalls, normalizeSceneWalls } from '../campaign_scene/domain/wall-geometry'
import {
  placeSceneHazardSchema,
  removeSceneHazardSchema,
  requestSceneHazardsSchema,
  updateSceneHazardSchema,
} from '../campaign_scene/hazard-instances/domain/validation'
import {
  findArmedTokenEnterHazards,
  findSceneHazardsForEncounter,
  listSceneHazardsForRole,
  placeSceneHazard,
  removeSceneHazardInstance,
  updateSceneHazardInstance,
} from '../campaign_scene/hazard-instances/services/hazard-instance-service'
import {
  defaultVttGridSettings,
  vttEncounterLogLimit,
  type PublicNpcHealth,
  type VttCombatantHealth,
  type VttEncounterCreatureParticipant,
  type VttEncounterHazardParticipant,
  type VttEncounterLogEntry,
  type VttEncounterParticipant,
  type VttEncounterState,
  type VttDiceRoll,
  type VttGridSettings,
  type VttPlayerToken,
  type VttTableScene,
  type VttTokenPosition,
  vttCombatMovementCommitSchema,
  vttCombatMovementResetSchema,
  vttEncounterCommandSchema,
  vttEncounterJoinSchema,
  vttEncounterRemoveParticipantSchema,
  vttEncounterStartSchema,
  vttEncounterTriggerHazardSchema,
  vttEncounterUpdateInitiativeSchema,
  vttDiceRollSchema,
  vttGridUpdateSchema,
  vttMeasurementUpdateSchema,
  vttSpellAreaUpdateSchema,
  vttSceneSelectSchema,
  vttTokenActionSchema,
  vttTokenPlaceSchema,
  vttTokenUpdateSchema,
  vttTokensRemoveBulkSchema,
  vttWallsUpdateSchema,
} from './contracts'
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
    const members = await prisma.campaignCharacter.findMany({
      where: { campaignId, status: 'ACTIVE' },
      select: { character: { select: { userId: true } } },
    })

    for (const member of members) {
      io.to(userRoom(member.character.userId)).emit('campaign:status', { campaignId, online })
    }
  }

  async function endCampaignSession(campaignId: string, message: string) {
    await persistCampaignLiveState(campaignId)
    state.clearCampaignSession(campaignId)
    await notifyCampaignStatus(campaignId, false)

    const sockets = await io.in(campaignRoom(campaignId)).fetchSockets()
    for (const campaignSocket of sockets) {
      const role = campaignSocket.data.characterRole as string | undefined
      const socketUser = campaignSocket.data.user as { id: string } | undefined
      const characterId = campaignSocket.data.characterId as string | undefined

      if (role === 'PLAYER') {
        campaignSocket.emit('campaign:kicked', { campaignId, message })
      }

      if (socketUser?.id) {
        state.deleteUserPresence(socketUser.id)
      }

      if (characterId) {
        io.to(campaignRoom(campaignId)).emit('presence:update', { campaignId, characterId, online: false })
      }

      campaignSocket.leave(campaignRoom(campaignId))
      campaignSocket.data.campaignId = undefined
      campaignSocket.data.characterId = undefined
      campaignSocket.data.characterRole = undefined
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

  async function sceneBelongsToCampaign(campaignId: string, sceneId: string) {
    const scene = await prisma.campaignScene.findFirst({
      where: { id: sceneId, campaignId },
      select: { id: true },
    })
    return Boolean(scene)
  }

  async function isActiveCampaignMaster(campaignId: string, userId: string) {
    const master = await prisma.campaignCharacter.findFirst({
      where: {
        campaignId,
        userId,
        role: 'MASTER',
        status: 'ACTIVE',
      },
      select: { id: true },
    })
    return Boolean(master)
  }

  async function canControlCampaignAsMaster(campaignId: string, socketId: string, userId: string) {
    const online = state.getCampaignOnline(campaignId)
    if (online) return online.masterSocketId === socketId && online.masterUserId === userId
    return isActiveCampaignMaster(campaignId, userId)
  }

  async function removeCampaignTokens(campaignId: string, options: { sceneId?: string | null }) {
    const tokenMap = state.getCampaignTokens(campaignId)
    const tokenSceneMap = state.getCampaignTokenSceneIds(campaignId)
    const tokensToRemove = tokenMap && tokenSceneMap
      ? [...tokenMap.values()].filter((token) => {
          if (!options.sceneId) return true
          return tokenSceneMap.get(token.id) === options.sceneId
        })
      : []

    if (tokenMap && tokenSceneMap) {
      for (const token of tokensToRemove) {
        const sceneId = tokenSceneMap.get(token.id)
        if (!sceneId) continue

        tokenMap.delete(token.id)
        tokenSceneMap.delete(token.id)
        await emitSceneTokenRemoved(campaignId, sceneId, token)
      }
    }

    await prisma.campaignSceneToken.deleteMany({
      where: {
        scene: {
          campaignId,
          ...(options.sceneId ? { id: options.sceneId } : {}),
        },
      },
    })

    removeEncounterParticipants(campaignId, tokensToRemove.map((token) => token.id))
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
        metersPerCell: true,
        squareMeasurementColor: true,
        hexMeasurementColor: true,
        gridLineWidth: true,
        gridColor: true,
        walls: true,
      },
    })

    return scene ? sceneGridToVttSettings(scene) : getCampaignGridSettings(campaignId)
  }

  async function getVisibleSceneIdForSocket(campaignId: string, socket: { data: any }) {
    const role = socket.data.characterRole as string | undefined
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

    const characterId = socket.data.characterId as string | undefined
    if (!characterId) return null

    const liveTokenSceneMap = state.getCampaignTokenSceneIds(campaignId)
    const liveTokenMap = state.getCampaignTokens(campaignId)
    if (liveTokenMap && liveTokenSceneMap) {
      const ownToken = [...liveTokenMap.values()].find((token) => token.characterId === characterId)
      return ownToken ? liveTokenSceneMap.get(ownToken.id) ?? null : null
    }

    const token = await prisma.campaignSceneToken.findFirst({
      where: {
        characterId,
        scene: { campaignId },
      },
      select: { sceneId: true },
    })

    return token?.sceneId ?? null
  }

  async function getVisibleCampaignSessionState(campaignId: string, socket: { data: any }) {
    const online = state.getCampaignOnline(campaignId)
    if (!online) return null
    if (online.state === 'PAUSED') return 'PAUSED' as const

    const role = socket.data.characterRole as string | undefined
    if (role === 'MASTER') return 'ACTIVE' as const

    const masterSceneId = await getMasterActiveSceneId(campaignId)
    const visibleSceneId = await getVisibleSceneIdForSocket(campaignId, socket)
    return masterSceneId && visibleSceneId === masterSceneId ? 'ACTIVE' as const : 'PAUSED' as const
  }

  async function findPersistedSceneTokenWithScene(
    campaignId: string,
    tokenIdentity: string,
  ): Promise<{ sceneId: string; token: VttPlayerToken } | null> {
    const token = await prisma.campaignSceneToken.findFirst({
      where: {
        scene: { campaignId },
        OR: [{ id: tokenIdentity }, { characterId: tokenIdentity }],
      },
      select: {
        id: true,
        sceneId: true,
        source: true,
        characterId: true,
        bestiaryCreatureId: true,
        campaignNpcDefinitionId: true,
        name: true,
        avatarUrl: true,
        tokenBorderColor: true,
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

    return {
      sceneId: token.sceneId,
      token: tableTokenFromPersistedToken(token),
    }
  }

  async function findPersistedSceneToken(campaignId: string, tokenIdentity: string): Promise<VttPlayerToken | null> {
    const record = await findPersistedSceneTokenWithScene(campaignId, tokenIdentity)
    return record?.token ?? null
  }

  async function persistSceneToken(campaignId: string, sceneId: string, token: VttPlayerToken) {
    const scene = await prisma.campaignScene.findFirst({
      where: { id: sceneId, campaignId },
      select: { campaign: { select: { system: true } } },
    })
    if (!scene) return false

    await prisma.campaignSceneToken.upsert({
      where: { id: token.id },
      create: {
        id: token.id,
        sceneId,
        source: token.source === 'bestiary' ? 'BESTIARY' : 'CHARACTER',
        characterId: token.source === 'character' ? token.characterId : null,
        bestiarySystem: token.source === 'bestiary' ? scene.campaign.system : null,
        bestiaryCreatureId: token.source === 'bestiary' ? token.bestiaryCreatureId ?? null : null,
        campaignNpcDefinitionId: token.source === 'bestiary' ? token.campaignNpcDefinitionId ?? null : null,
        name: token.source === 'bestiary' ? token.name : null,
        avatarUrl: token.source === 'bestiary' ? token.avatarUrl : null,
        tokenBorderColor: token.tokenBorderColor ?? null,
        hidden: token.hidden,
        positionX: token.position.x,
        positionY: token.position.y,
      },
      update: {
        sceneId,
        hidden: token.hidden,
        positionX: token.position.x,
        positionY: token.position.y,
        tokenBorderColor: token.tokenBorderColor ?? null,
      },
    })
    return true
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
    options?: { refreshOwnerVisibleScene?: boolean; movementPath?: VttTokenPosition[] },
  ) {
    const sockets = await io.in(campaignRoom(campaignId)).fetchSockets()
    await Promise.all(
      sockets.map(async (campaignSocket) => {
        const visibleSceneId = await getVisibleSceneIdForSocket(campaignId, campaignSocket)
        const isTokenOwner = Boolean(token.characterId && campaignSocket.data.characterId === token.characterId)
        if (visibleSceneId !== sceneId) {
          if (isTokenOwner && options?.refreshOwnerVisibleScene) await emitVisibleTableSnapshot(campaignId, campaignSocket)
          return
        }
        campaignSocket.emit('vtt:token:changed', {
          campaignId,
          sceneId,
          token,
          movementPath: options?.movementPath,
        })
        if (isTokenOwner && options?.refreshOwnerVisibleScene && campaignSocket.data.characterRole !== 'MASTER') {
          await emitVisibleTableSnapshot(campaignId, campaignSocket)
        }
      }),
    )
  }

  async function emitSceneTokenRemoved(campaignId: string, sceneId: string, token: VttPlayerToken) {
    const sockets = await io.in(campaignRoom(campaignId)).fetchSockets()
    await Promise.all(
      sockets.map(async (campaignSocket) => {
        const isRemovedTokenOwner = Boolean(token.characterId && campaignSocket.data.characterId === token.characterId)
        const visibleSceneId = await getVisibleSceneIdForSocket(campaignId, campaignSocket)
        if (visibleSceneId !== sceneId && !isRemovedTokenOwner) return
        campaignSocket.emit('vtt:token:removed', {
          campaignId,
          sceneId,
          tokenId: token.id,
          characterId: token.characterId,
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

    const persistedTokens = await prisma.campaignSceneToken.findMany({
      where: { scene: { campaignId } },
      select: {
        id: true,
        sceneId: true,
        source: true,
        characterId: true,
        bestiaryCreatureId: true,
        campaignNpcDefinitionId: true,
        name: true,
        avatarUrl: true,
        tokenBorderColor: true,
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
      tokenMap.set(persistedToken.id, tableTokenFromPersistedToken(persistedToken))
      tokenSceneMap.set(persistedToken.id, persistedToken.sceneId)
    }

    state.setCampaignSceneGridSettings(campaignId, sceneGridMap)
    state.setCampaignTokens(campaignId, tokenMap)
    state.setCampaignTokenSceneIds(campaignId, tokenSceneMap)
  }

  async function persistCampaignLiveState(campaignId: string) {
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

    if (!tokenMap || !tokenSceneMap) return

    await prisma.$transaction(async (tx) => {
      await tx.campaignSceneToken.deleteMany({ where: { scene: { campaignId } } })
      const tokensToCreate: Array<{
        id: string
        sceneId: string
        source: 'CHARACTER' | 'BESTIARY'
        characterId: string | null
        bestiarySystem?: 'PATHFINDER_2E' | 'DND_5E' | null
        bestiaryCreatureId?: string | null
        campaignNpcDefinitionId?: string | null
        name?: string | null
        avatarUrl?: string | null
        tokenBorderColor?: string | null
        hidden: boolean
        positionX: number
        positionY: number
      }> = []
      for (const token of tokenMap.values()) {
        const sceneId = tokenSceneMap.get(token.id)
        if (!sceneId) continue
        tokensToCreate.push({
          id: token.id,
          sceneId,
          source: token.source === 'bestiary' ? 'BESTIARY' : 'CHARACTER',
          characterId: token.source === 'character' ? token.characterId : null,
          bestiarySystem: token.source === 'bestiary' ? 'PATHFINDER_2E' : null,
          bestiaryCreatureId: token.source === 'bestiary' ? token.bestiaryCreatureId ?? null : null,
          campaignNpcDefinitionId: token.source === 'bestiary' ? token.campaignNpcDefinitionId ?? null : null,
          name: token.source === 'bestiary' ? token.name : null,
          avatarUrl: token.source === 'bestiary' ? token.avatarUrl : null,
          tokenBorderColor: token.tokenBorderColor ?? null,
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
    state.setCampaignGridSettings(campaignId, settings)
  }

  function setLiveSceneToken(campaignId: string, sceneId: string, token: VttPlayerToken) {
    getCampaignTokenMap(campaignId).set(token.id, token)
    getCampaignTokenSceneMap(campaignId).set(token.id, sceneId)
  }

  function setLiveSceneWalls(campaignId: string, sceneId: string, walls: VttTableScene['walls']) {
    const activeScene = state.getCampaignScene(campaignId)
    if (activeScene?.id === sceneId) {
      state.setCampaignScene(campaignId, { ...activeScene, walls })
    }
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

  async function listSceneTokens(campaignId: string, sceneId?: string | null) {
    const visibleSceneId = sceneId === undefined ? await getMasterActiveSceneId(campaignId) : sceneId
    if (!visibleSceneId) return []

    const liveTokenMap = state.getCampaignTokens(campaignId)
    const liveTokenSceneMap = state.getCampaignTokenSceneIds(campaignId)
    if (liveTokenMap && liveTokenSceneMap) {
      return [...liveTokenMap.values()].filter((token) => liveTokenSceneMap.get(token.id) === visibleSceneId)
    }

    const tokens = await prisma.campaignSceneToken.findMany({
      where: { sceneId: visibleSceneId },
      select: { id: true, characterId: true },
      orderBy: { createdAt: 'asc' },
    })

    const hydratedTokens = await Promise.all(tokens.map((token) => findPersistedSceneToken(campaignId, token.characterId ?? token.id)))
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
        walls: true,
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
      walls: Array.isArray(scene.walls) ? scene.walls : [],
    }
  }

  async function getSceneWalls(campaignId: string, sceneId: string) {
    const scene = await prisma.campaignScene.findFirst({
      where: { id: sceneId, campaignId },
      select: { walls: true },
    })
    return normalizeSceneWalls(scene?.walls)
  }

  async function emitCampaignTokenSnapshot(campaignId: string, socketId: string, sceneId?: string | null) {
    const persistedTokens = await listSceneTokens(campaignId, sceneId)
    const tokenMap = getCampaignTokenMap(campaignId)
    persistedTokens.forEach((token) => tokenMap.set(token.id, token))
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
    await emitSceneHazardsSnapshot(campaignId, scene?.id ?? null, socket)
  }

  async function emitSceneHazardsSnapshot(campaignId: string, sceneId: string | null, socket: { id: string; data: any }) {
    const role = socket.data.characterRole as 'MASTER' | 'PLAYER' | 'NPC' | undefined
    const hazards = sceneId ? await listSceneHazardsForRole(sceneId, role) : []
    io.to(socket.id).emit('vtt:hazards:snapshot', { campaignId, sceneId, hazards })
  }

  async function emitSceneHazardChanged(campaignId: string, sceneId: string, instance: SceneHazardInstance) {
    const sockets = await io.in(campaignRoom(campaignId)).fetchSockets()
    await Promise.all(
      sockets.map(async (campaignSocket) => {
        const visibleSceneId = await getVisibleSceneIdForSocket(campaignId, campaignSocket)
        if (visibleSceneId !== sceneId) return

        const role = campaignSocket.data.characterRole as 'MASTER' | 'PLAYER' | 'NPC' | undefined
        const presented = presentSceneHazardForRole(instance, role)
        if (presented) {
          campaignSocket.emit('vtt:hazard:changed', { campaignId, sceneId, hazard: presented })
        } else {
          campaignSocket.emit('vtt:hazard:removed', { campaignId, sceneId, hazardId: instance.id })
        }
      }),
    )
  }

  function toCombatantIdentity(token: VttPlayerToken): CombatantIdentity {
    return {
      tokenId: token.id,
      source: token.source,
      characterId: token.characterId,
      bestiaryCreatureId: token.bestiaryCreatureId ?? null,
      ownerUserId: token.ownerUserId,
      hidden: token.hidden,
    }
  }

  async function resolveMovementMaxMeters(campaignId: string, sceneId: string, token: VttPlayerToken): Promise<number | null> {
    if (token.source === 'character') {
      return token.characterId ? getCharacterSpeedMeters(token.characterId) : null
    }

    if (!token.bestiaryCreatureId) return null
    const speedFeet = await getCatalogSpeedFeet(campaignId, token.bestiaryCreatureId)
    if (speedFeet === null) return null

    const grid = getCampaignSceneGridMap(campaignId).get(sceneId) ?? defaultVttGridSettings
    return feetToMeters(speedFeet, grid.metersPerCell)
  }

  function resetParticipantMovement(participants: VttEncounterParticipant[], index: number): VttEncounterParticipant[] {
    const participant = participants[index]
    if (!participant || participant.type !== 'creature') return participants

    const next = [...participants]
    next[index] = { ...participant, movement: { ...participant.movement, actionsRemaining: 3, metersUsedThisAction: 0 } }
    return next
  }

  async function ensureBestiaryTokenPersisted(campaignId: string, sceneId: string, token: VttPlayerToken) {
    if (token.source !== 'bestiary') return
    await persistSceneToken(campaignId, sceneId, token)
  }

  async function buildEncounterParticipants(
    campaignId: string,
    sceneId: string,
    tokenIds: string[],
    hazardInstanceIds: string[],
  ): Promise<VttEncounterParticipant[]> {
    const selectedTokenIds = new Set(tokenIds)
    const tokens = (await listSceneTokens(campaignId, sceneId)).filter(
      (token) => selectedTokenIds.has(token.id) && !token.hidden,
    )
    const hazardInstances = await findSceneHazardsForEncounter(sceneId, hazardInstanceIds)

    const creatureParticipants: VttEncounterParticipant[] = await Promise.all(
      tokens.map(async (token) => {
        await ensureBestiaryTokenPersisted(campaignId, sceneId, token)
        const combatant = toCombatantIdentity(token)
        const health = await getOrInitializeHealth(combatant, campaignId)
        const maxMetersPerAction = await resolveMovementMaxMeters(campaignId, sceneId, token)
        return {
          type: 'creature' as const,
          participantId: token.id,
          tokenId: token.id,
          characterId: token.characterId ?? token.id,
          source: token.source,
          name: token.name,
          avatarUrl: token.avatarUrl,
          initiative: null,
          health: health ? toCombatantHealth(health) : null,
          movement: { maxMetersPerAction, actionsRemaining: 3, metersUsedThisAction: 0 },
        }
      }),
    )

    const hazardParticipants: VttEncounterParticipant[] = hazardInstances.map((instance) => ({
      type: 'hazard',
      participantId: instance.id,
      hazardInstanceId: instance.id,
      hazardEntryId: instance.hazardEntryId,
      name: instance.name,
      initiative: null,
      visibility: instance.visibility === 'HIDDEN' ? 'HIDDEN' : 'REVEALED',
      state: instance.state,
      executionMode: instance.executionMode,
    }))

    return [...creatureParticipants, ...hazardParticipants]
  }

  async function resolveTokenForHealth(campaignId: string, tokenId: string): Promise<{ sceneId: string; token: VttPlayerToken } | null> {
    const tokenMap = state.getCampaignTokens(campaignId)
    const liveToken = tokenMap?.get(tokenId)
    if (liveToken) {
      const sceneId = getCampaignTokenSceneMap(campaignId).get(tokenId)
      if (!sceneId) return null
      // Tokens de bestiario ficam somente em memoria durante sessao ao vivo (setLiveSceneToken).
      // CampaignSceneTokenHealth tem FK pra CampaignSceneToken, entao precisa existir no banco
      // antes de qualquer leitura/gravacao de HP, senao o upsert de health quebra a constraint.
      await ensureBestiaryTokenPersisted(campaignId, sceneId, liveToken)
      return { sceneId, token: liveToken }
    }

    return findPersistedSceneTokenWithScene(campaignId, tokenId)
  }

  async function emitCombatHealthChanged(campaignId: string, sceneId: string, combatant: CombatantIdentity, health: RawCombatHealth) {
    const sockets = await io.in(campaignRoom(campaignId)).fetchSockets()
    await Promise.all(
      sockets.map(async (campaignSocket) => {
        const visibleSceneId = await getVisibleSceneIdForSocket(campaignId, campaignSocket)
        if (visibleSceneId !== sceneId) return

        const role = campaignSocket.data.characterRole as 'MASTER' | 'PLAYER' | 'NPC' | undefined
        const presented = presentHealthForCombatant(health, combatant, role)
        if (!presented) return

        campaignSocket.emit('vtt:combat:health:changed', {
          campaignId,
          sceneId,
          tokenId: combatant.tokenId,
          health: presented,
        })
      }),
    )
  }

  function appendEncounterLogEntry(
    campaignId: string,
    sceneId: string,
    entry: Omit<VttEncounterLogEntry, 'id' | 'createdAt'>,
  ): boolean {
    const encounter = state.getCampaignEncounter(campaignId)
    if (!encounter || encounter.sceneId !== sceneId || encounter.status !== 'ACTIVE') return false

    const fullEntry = { ...entry, id: crypto.randomUUID(), createdAt: new Date().toISOString() } as VttEncounterLogEntry
    const log = [...encounter.log, fullEntry].slice(-vttEncounterLogLimit)
    state.setCampaignEncounter(campaignId, { ...encounter, log })
    return true
  }

  function syncEncounterParticipantHealth(campaignId: string, tokenId: string, health: RawCombatHealth): boolean {
    const encounter = state.getCampaignEncounter(campaignId)
    if (!encounter) return false

    const index = encounter.participants.findIndex((participant) => participant.type === 'creature' && participant.tokenId === tokenId)
    if (index === -1) return false

    const participants = [...encounter.participants]
    const participant = participants[index] as VttEncounterCreatureParticipant
    participants[index] = { ...participant, health: toCombatantHealth(health) }
    state.setCampaignEncounter(campaignId, { ...encounter, participants })
    return true
  }

  async function emitSceneHazardRemoved(campaignId: string, sceneId: string, hazardId: string) {
    const sockets = await io.in(campaignRoom(campaignId)).fetchSockets()
    await Promise.all(
      sockets.map(async (campaignSocket) => {
        const visibleSceneId = await getVisibleSceneIdForSocket(campaignId, campaignSocket)
        if (visibleSceneId !== sceneId) return
        campaignSocket.emit('vtt:hazard:removed', { campaignId, sceneId, hazardId })
      }),
    )
  }

  async function emitVisibleTableSnapshots(campaignId: string) {
    const sockets = await io.in(campaignRoom(campaignId)).fetchSockets()
    await Promise.all(sockets.map((campaignSocket) => emitVisibleTableSnapshot(campaignId, campaignSocket)))
  }

  async function emitSceneWallsChanged(campaignId: string, sceneId: string, walls: unknown[]) {
    const sockets = await io.in(campaignRoom(campaignId)).fetchSockets()
    await Promise.all(
      sockets.map(async (campaignSocket) => {
        const visibleSceneId = await getVisibleSceneIdForSocket(campaignId, campaignSocket)
        if (visibleSceneId !== sceneId) return
        campaignSocket.emit('vtt:walls:changed', { campaignId, sceneId, walls })
      }),
    )
  }

  function emitCampaignScene(campaignId: string, scene: VttTableScene | null) {
    io.to(campaignRoom(campaignId)).emit('vtt:scene:changed', {
      campaignId,
      scene,
    })
  }

  function hazardTriggerChatMessage(
    hazardName: string,
    executionMode: 'INSTANT' | 'ONGOING' | 'ENCOUNTER_PARTICIPANT',
  ) {
    if (executionMode === 'ONGOING') return `⚠ ${hazardName} esta ativo!`
    if (executionMode === 'ENCOUNTER_PARTICIPANT') return `⚠ ${hazardName} entrou em atividade!`
    return `⚠ ${hazardName} foi disparado!`
  }

  async function postHazardTriggerChatMessage(
    campaignId: string,
    sceneId: string,
    hazardName: string,
    executionMode: 'INSTANT' | 'ONGOING' | 'ENCOUNTER_PARTICIPANT',
  ) {
    const online = state.getCampaignOnline(campaignId)
    if (!online) return

    const campaignCharacter = await prisma.campaignCharacter.findFirst({
      where: { campaignId, characterId: online.masterCharacterId, userId: online.masterUserId, status: 'ACTIVE' },
      select: { role: true, characterId: true, character: { select: { name: true } } },
    })
    if (!campaignCharacter) return

    const message = await prisma.chatMessage.create({
      data: {
        campaign: { connect: { id: campaignId } },
        character: { connect: { id: campaignCharacter.characterId } },
        user: { connect: { id: online.masterUserId } },
        content: hazardTriggerChatMessage(hazardName, executionMode),
      },
      select: { id: true, campaignId: true, characterId: true, content: true, createdAt: true },
    })

    const presented = presentChatMessage({
      ...message,
      characterName: campaignCharacter.character.name,
      role: campaignCharacter.role,
    })
    io.to(campaignRoom(campaignId)).emit('chat:message:created', presented)

    const logged = appendEncounterLogEntry(campaignId, sceneId, {
      type: 'SYSTEM',
      message: hazardTriggerChatMessage(hazardName, executionMode),
    })
    if (logged) await emitEncounterChanged(campaignId)
  }

  async function checkTokenTriggeredHazards(campaignId: string, sceneId: string, path: VttTokenPosition[]) {
    if (!path.length) return

    const armedTriggerInstances = await findArmedTokenEnterHazards(sceneId)
    if (!armedTriggerInstances.length) return

    const gridSize = getCampaignSceneGridMap(campaignId).get(sceneId)?.size ?? defaultVttGridSettings.size
    const cellKey = (point: VttTokenPosition) => `${Math.floor(point.x / gridSize)}:${Math.floor(point.y / gridSize)}`
    const pathCells = new Set(path.map(cellKey))

    for (const instance of armedTriggerInstances) {
      if (!instance.position || !pathCells.has(cellKey(instance.position))) continue

      const nextState = instance.executionMode === 'INSTANT' ? 'TRIGGERED' : 'ACTIVE'
      const result = await updateSceneHazardInstance({
        campaignId,
        hazardId: instance.id,
        state: nextState,
        visibility: 'REVEALED',
      })
      if (!result) continue

      await emitSceneHazardChanged(campaignId, result.sceneId, result.instance)
      await postHazardTriggerChatMessage(campaignId, result.sceneId, instance.name, instance.executionMode)
    }
  }

  function isActiveSessionMaster(campaignId: string, socketId: string, userId: string) {
    const online = state.getCampaignOnline(campaignId)
    return Boolean(online && online.masterSocketId === socketId && online.masterUserId === userId)
  }

  function sortEncounterParticipants(participants: VttEncounterParticipant[]) {
    return participants
      .map((participant, index) => ({ participant, index }))
      .sort((left, right) => {
        const leftInitiative = left.participant.initiative
        const rightInitiative = right.participant.initiative
        if (leftInitiative === null && rightInitiative === null) return left.index - right.index
        if (leftInitiative === null) return 1
        if (rightInitiative === null) return -1
        if (rightInitiative !== leftInitiative) return rightInitiative - leftInitiative
        return left.index - right.index
      })
      .map((item) => item.participant)
  }

  function normalizeEncounterTurnIndex(encounter: VttEncounterState, activeParticipantId?: string | null): VttEncounterState {
    if (!encounter.participants.length) return { ...encounter, activeTurnIndex: 0 }
    if (!activeParticipantId) {
      return {
        ...encounter,
        activeTurnIndex: Math.min(Math.max(encounter.activeTurnIndex, 0), encounter.participants.length - 1),
      }
    }

    const nextIndex = encounter.participants.findIndex((participant) => participant.participantId === activeParticipantId)
    return {
      ...encounter,
      activeTurnIndex: nextIndex >= 0 ? nextIndex : 0,
    }
  }

  function presentEncounterForRole(
    encounter: VttEncounterState | null,
    role: 'MASTER' | 'PLAYER' | 'NPC' | undefined,
  ): VttEncounterState | null {
    if (!encounter || role === 'MASTER') return encounter

    const bestiaryParticipantIds = new Set(
      encounter.participants
        .filter((participant): participant is VttEncounterCreatureParticipant => participant.type === 'creature' && participant.source === 'bestiary')
        .map((participant) => participant.participantId),
    )

    return {
      ...encounter,
      participants: encounter.participants.map((participant) => {
        if (participant.type === 'hazard' && participant.visibility === 'HIDDEN') {
          return { ...participant, name: hiddenHazardName }
        }
        if (participant.type === 'creature' && participant.source === 'bestiary' && participant.health) {
          return { ...participant, health: derivePublicNpcHealth(participant.health as VttCombatantHealth) }
        }
        return participant
      }),
      log: encounter.log.map((entry) => {
        if (entry.type !== 'DAMAGE' && entry.type !== 'HEAL') return entry
        if (!entry.targetParticipantId || !bestiaryParticipantIds.has(entry.targetParticipantId)) return entry

        const resultingHealth =
          entry.resultingHealth && 'currentHitPoints' in entry.resultingHealth
            ? derivePublicNpcHealth(entry.resultingHealth as VttCombatantHealth)
            : (entry.resultingHealth as PublicNpcHealth | null)

        return { ...entry, amount: null, resultingHealth }
      }),
    }
  }

  async function emitEncounterChanged(campaignId: string) {
    const encounter = state.getCampaignEncounter(campaignId)
    const sockets = await io.in(campaignRoom(campaignId)).fetchSockets()
    await Promise.all(
      sockets.map(async (campaignSocket) => {
        const role = campaignSocket.data.characterRole as 'MASTER' | 'PLAYER' | 'NPC' | undefined
        campaignSocket.emit('vtt:encounter:changed', {
          campaignId,
          encounter: presentEncounterForRole(encounter, role),
        })
      }),
    )
  }

  function removeEncounterParticipantsMatching(campaignId: string, predicate: (participant: VttEncounterParticipant) => boolean) {
    const encounter = state.getCampaignEncounter(campaignId)
    if (!encounter) return

    const activeParticipant = encounter.participants[encounter.activeTurnIndex] ?? null
    const removingActiveParticipant = activeParticipant ? predicate(activeParticipant) : false
    const participants = encounter.participants.filter((participant) => !predicate(participant))
    if (participants.length === encounter.participants.length) return

    if (!participants.length) {
      state.deleteCampaignEncounter(campaignId)
      emitEncounterChanged(campaignId)
      return
    }

    state.setCampaignEncounter(
      campaignId,
      normalizeEncounterTurnIndex(
        { ...encounter, participants },
        removingActiveParticipant ? null : (activeParticipant?.participantId ?? null),
      ),
    )
    emitEncounterChanged(campaignId)
  }

  function removeEncounterParticipants(campaignId: string, tokenIds: string[]) {
    if (!tokenIds.length) return
    const tokenIdSet = new Set(tokenIds)
    removeEncounterParticipantsMatching(
      campaignId,
      (participant) => participant.type === 'creature' && tokenIdSet.has(participant.tokenId),
    )
  }

  function removeEncounterParticipantById(campaignId: string, participantId: string) {
    removeEncounterParticipantsMatching(campaignId, (participant) => participant.participantId === participantId)
  }

  async function removeCampaignToken(
    campaignId: string,
    tokenId: string,
    originSocket?: { emit: (event: string, payload: unknown) => void },
  ) {
    const tokenMap = state.getCampaignTokens(campaignId)
    const tokenSceneMap = state.getCampaignTokenSceneIds(campaignId)
    const liveToken = tokenMap?.get(tokenId) ?? [...(tokenMap?.values() ?? [])].find((token) => token.characterId === tokenId)
    const persistedTokenRecord = liveToken ? null : await findPersistedSceneTokenWithScene(campaignId, tokenId)
    const token = liveToken ?? persistedTokenRecord?.token
    const sceneId = (token ? tokenSceneMap?.get(token.id) : null) ?? persistedTokenRecord?.sceneId
    if (!token || !sceneId) return

    tokenMap?.delete(token.id)
    tokenSceneMap?.delete(token.id)
    await prisma.campaignSceneToken.deleteMany({
      where: {
        scene: { campaignId },
        OR: [{ id: token.id }, ...(token.characterId ? [{ characterId: token.characterId }] : [])],
      },
    })
    if (token) await emitSceneTokenRemoved(campaignId, sceneId, token)
    originSocket?.emit('vtt:token:removed', {
      campaignId,
      sceneId,
      tokenId: token.id,
      characterId: token.characterId,
    })
    removeEncounterParticipants(campaignId, [token.id])
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
    })
    socket.on('vtt:grid:update', async (input: unknown) => {
      try {
        const parsed = vttGridUpdateSchema.safeParse(input)
        if (!parsed.success) return

        const { campaignId, sceneId: requestedSceneId, settings } = parsed.data
        const online = state.getCampaignOnline(campaignId)
        if (!(await canControlCampaignAsMaster(campaignId, socket.id, user.id))) return

        const sceneId = requestedSceneId ?? (await getMasterActiveSceneId(campaignId))
        if (!sceneId) return
        if (!(await sceneBelongsToCampaign(campaignId, sceneId))) return

        setLiveSceneGrid(campaignId, sceneId, settings)
        await prisma.campaignScene.update({
          where: { id: sceneId },
          data: vttGridSettingsToSceneData(settings),
        })
        if (online) await emitSceneGridSettings(campaignId, sceneId, settings)
        else socket.emit('vtt:grid:changed', { campaignId, sceneId, settings })
      } catch {
        socket.emit('presence:error', { message: 'Nao foi possivel atualizar o grid da cena.' })
      }
    })

    socket.on('vtt:token:place', async (input: unknown) => {
      const parsed = vttTokenPlaceSchema.safeParse(input)
      if (!parsed.success) return

      const { campaignId, position } = parsed.data
      const online = state.getCampaignOnline(campaignId)
      if (!(await canControlCampaignAsMaster(campaignId, socket.id, user.id))) return

      const sceneId = await getMasterActiveSceneId(campaignId)
      if (!sceneId) return

      if (parsed.data.source === 'bestiary') {
        const campaign = await prisma.campaign.findUnique({
          where: { id: campaignId },
          select: { system: true },
        })
        if (!campaign) return

        const creature = findBestiaryCreature(campaign.system, parsed.data.creatureId)
        if (!creature) return

        // NPC customizado pelo Mestre (.ai/game_systems/pathfinder_2e/bestiary/specs.md
        // secao 8): so aceita a definicao se ela realmente pertence a esta campanha e
        // referencia a mesma criatura do catalogo — nunca confia so no id enviado pelo
        // cliente para decidir nome/spellbook do token.
        let campaignNpcDefinitionId: string | null = null
        let tokenName = creature.name
        if (parsed.data.campaignNpcDefinitionId) {
          const definition = await prisma.campaignNpcDefinition.findFirst({
            where: { id: parsed.data.campaignNpcDefinitionId, campaignId, bestiaryCreatureId: creature.id },
            select: { id: true, name: true },
          })
          if (definition) {
            campaignNpcDefinitionId = definition.id
            tokenName = definition.name
          }
        }

        const token: VttPlayerToken = {
          id: `bestiary:${crypto.randomUUID()}`,
          source: 'bestiary',
          characterId: null,
          bestiaryCreatureId: creature.id,
          campaignNpcDefinitionId,
          name: tokenName,
          avatarUrl: creature.token.imageUrl,
          tokenBorderColor: creature.token.borderColor,
          ownerUserId: '',
          ownerName: 'Mestre',
          role: 'NPC',
          hidden: false,
          position,
        }

        setLiveSceneToken(campaignId, sceneId, token)
        if (online) await emitSceneTokenChanged(campaignId, sceneId, token, { refreshOwnerVisibleScene: true })
        else {
          await persistSceneToken(campaignId, sceneId, token)
          socket.emit('vtt:token:changed', { campaignId, sceneId, token })
        }
        return
      }

      const { characterId } = parsed.data

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

      const tokenMap = getCampaignTokenMap(campaignId)
      const existingToken =
        [...tokenMap.values()].find((token) => token.characterId === characterId) ??
        (await findPersistedSceneToken(campaignId, characterId))
      if (existingToken) return
      if (campaignCharacter.role === 'PLAYER') {
        const ownerPresence = state.getUserPresence(campaignCharacter.userId)
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
        source: 'character',
        characterId,
        bestiaryCreatureId: null,
        name: campaignCharacter.character.name,
        avatarUrl: campaignCharacter.character.avatarUrl,
        tokenBorderColor: null,
        ownerUserId: campaignCharacter.userId,
        ownerName: campaignCharacter.character.name,
        role: campaignCharacter.role,
        hidden: false,
        position,
      }

      setLiveSceneToken(campaignId, sceneId, token)
      if (online) await emitSceneTokenChanged(campaignId, sceneId, token, { refreshOwnerVisibleScene: true })
      else {
        await persistSceneToken(campaignId, sceneId, token)
        socket.emit('vtt:token:changed', { campaignId, sceneId, token })
      }
    })

    socket.on('vtt:token:move', async (input: unknown) => {
      const parsed = vttTokenUpdateSchema.safeParse(input)
      if (!parsed.success) return

      const { campaignId, position, movementPath } = parsed.data
      const online = state.getCampaignOnline(campaignId)
      const isMasterMove = await canControlCampaignAsMaster(campaignId, socket.id, user.id)
      if (!online && !isMasterMove) return
      if (online && !isMasterMove && socket.data.campaignId !== campaignId) return

      const role = socket.data.characterRole as string | undefined
      const isPlayerOwnerMove = Boolean(online && online.state === 'ACTIVE' && role === 'PLAYER')
      if (!isPlayerOwnerMove && !isMasterMove) return

      const tokenIdentity = isMasterMove ? parsed.data.tokenId ?? parsed.data.characterId : (socket.data.characterId as string | undefined)
      if (!tokenIdentity) return

      const tokenMap = state.getCampaignTokens(campaignId)
      const liveToken = tokenMap?.get(tokenIdentity) ?? [...(tokenMap?.values() ?? [])].find((item) => item.characterId === tokenIdentity)
      const persistedTokenRecord = liveToken ? null : await findPersistedSceneTokenWithScene(campaignId, tokenIdentity)
      const token = liveToken ?? persistedTokenRecord?.token
      if (!token) return
      if (isPlayerOwnerMove && token.ownerUserId !== user.id) return

      const sceneId = getCampaignTokenSceneMap(campaignId).get(token.id) ?? persistedTokenRecord?.sceneId
      if (!sceneId) return

      let finalPosition = position
      const encounter = state.getCampaignEncounter(campaignId)
      let encounterMovementChanged = false

      if (encounter) {
        const participantIndex = encounter.participants.findIndex(
          (participant) => participant.type === 'creature' && participant.tokenId === token.id,
        )
        const participant = participantIndex >= 0 ? (encounter.participants[participantIndex] as VttEncounterCreatureParticipant) : null

        if (!participant) {
          if (!isMasterMove) return
          // Token fora do encontro: Mestre continua livre, sem orcamento de movimento pra aplicar.
        } else {
          if (!isMasterMove) {
            const isActiveTurn = encounter.participants[encounter.activeTurnIndex]?.participantId === participant.participantId
            if (!isActiveTurn) return
          }

          const grid = getCampaignSceneGridMap(campaignId).get(sceneId) ?? defaultVttGridSettings
          const validation = validateMovement({
            from: token.position,
            to: position,
            cellSizePx: grid.size,
            metersPerCell: grid.metersPerCell,
            budget: participant.movement,
          })
          if (validation.allowed === false) return

          finalPosition = validation.position
          const participants = [...encounter.participants]
          participants[participantIndex] = {
            ...participant,
            movement: { ...participant.movement, metersUsedThisAction: validation.metersUsedThisAction },
          }
          state.setCampaignEncounter(campaignId, { ...encounter, participants })
          encounterMovementChanged = true
        }
      }

      if (!isMasterMove) {
        const walls = await getSceneWalls(campaignId, sceneId)
        const pathPoints =
          movementPath && movementPath.length >= 2
            ? [...movementPath.slice(0, -1), finalPosition]
            : [token.position, finalPosition]
        if (isMovementPathBlockedBySceneWalls({ points: pathPoints, walls })) return
      }

      const nextToken = { ...token, position: finalPosition }
      setLiveSceneToken(campaignId, sceneId, nextToken)
      await persistSceneToken(campaignId, sceneId, nextToken)
      if (online) await emitSceneTokenChanged(campaignId, sceneId, nextToken, { movementPath })
      else socket.emit('vtt:token:changed', { campaignId, sceneId, token: nextToken, movementPath })
      if (encounterMovementChanged) await emitEncounterChanged(campaignId)

      await checkTokenTriggeredHazards(campaignId, sceneId, movementPath && movementPath.length ? movementPath : [finalPosition])
    })

    socket.on('vtt:token:remove', async (input: unknown) => {
      const parsed = vttTokenActionSchema.safeParse(input)
      if (!parsed.success) return

      const { campaignId } = parsed.data
      if (!(await canControlCampaignAsMaster(campaignId, socket.id, user.id))) return

      await removeCampaignToken(campaignId, parsed.data.tokenId ?? parsed.data.characterId ?? '', socket)
    })

    socket.on('vtt:tokens:remove-bulk', async (input: unknown) => {
      const parsed = vttTokensRemoveBulkSchema.safeParse(input)
      if (!parsed.success) return

      const { campaignId } = parsed.data
      const online = state.getCampaignOnline(campaignId)
      if (!(await canControlCampaignAsMaster(campaignId, socket.id, user.id))) return

      if (parsed.data.scope === 'scene') {
        if (!(await sceneBelongsToCampaign(campaignId, parsed.data.sceneId))) return
        await removeCampaignTokens(campaignId, { sceneId: parsed.data.sceneId })
        if (!online) await emitVisibleTableSnapshot(campaignId, socket)
        return
      }

      await removeCampaignTokens(campaignId, { sceneId: null })
      if (!online) await emitVisibleTableSnapshot(campaignId, socket)
    })

    socket.on('vtt:token:visibility', async (input: unknown) => {
      const parsed = vttTokenActionSchema.safeParse(input)
      if (!parsed.success) return

      const { campaignId } = parsed.data
      const online = state.getCampaignOnline(campaignId)
      if (!(await canControlCampaignAsMaster(campaignId, socket.id, user.id))) return

      const tokenIdentity = parsed.data.tokenId ?? parsed.data.characterId
      if (!tokenIdentity) return
      const tokenMap = state.getCampaignTokens(campaignId)
      const liveToken = tokenMap?.get(tokenIdentity) ?? [...(tokenMap?.values() ?? [])].find((item) => item.characterId === tokenIdentity)
      const persistedTokenRecord = liveToken ? null : await findPersistedSceneTokenWithScene(campaignId, tokenIdentity)
      const token = liveToken ?? persistedTokenRecord?.token
      if (!token) return

      const nextToken = { ...token, hidden: !token.hidden }
      const sceneId = getCampaignTokenSceneMap(campaignId).get(token.id) ?? persistedTokenRecord?.sceneId
      if (!sceneId) return
      setLiveSceneToken(campaignId, sceneId, nextToken)
      await persistSceneToken(campaignId, sceneId, nextToken)
      if (online) await emitSceneTokenChanged(campaignId, sceneId, nextToken)
      else socket.emit('vtt:token:changed', { campaignId, sceneId, token: nextToken })
      if (nextToken.hidden) removeEncounterParticipants(campaignId, [token.id])
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

    socket.on('vtt:encounter:start', async (input: unknown) => {
      const parsed = vttEncounterStartSchema.safeParse(input)
      if (!parsed.success) return

      const { campaignId, sceneId, tokenIds, hazardInstanceIds } = parsed.data
      if (!isActiveSessionMaster(campaignId, socket.id, user.id)) return
      // Encontro exige sessao rodando (nao pausada): a economia de acoes/turnos nao faz
      // sentido com a mesa pausada.
      if (state.getCampaignOnline(campaignId)?.state !== 'ACTIVE') return
      if (!(await sceneBelongsToCampaign(campaignId, sceneId))) return

      const participants = await buildEncounterParticipants(campaignId, sceneId, tokenIds, hazardInstanceIds)
      if (!participants.length) return

      state.setCampaignEncounter(campaignId, {
        campaignId,
        sceneId,
        round: 1,
        activeTurnIndex: 0,
        status: 'ACTIVE',
        participants,
        log: [],
      })
      emitEncounterChanged(campaignId)
    })

    socket.on('vtt:encounter:join', async (input: unknown) => {
      const parsed = vttEncounterJoinSchema.safeParse(input)
      if (!parsed.success) return

      const { campaignId, tokenIds, hazardInstanceIds } = parsed.data
      if (!isActiveSessionMaster(campaignId, socket.id, user.id)) return
      if (state.getCampaignOnline(campaignId)?.state !== 'ACTIVE') return

      const encounter = state.getCampaignEncounter(campaignId)
      if (!encounter) return

      const existingTokenIds = new Set(
        encounter.participants
          .filter((participant): participant is VttEncounterCreatureParticipant => participant.type === 'creature')
          .map((participant) => participant.tokenId),
      )
      const existingHazardInstanceIds = new Set(
        encounter.participants
          .filter((participant): participant is VttEncounterHazardParticipant => participant.type === 'hazard')
          .map((participant) => participant.hazardInstanceId),
      )

      const newTokenIds = tokenIds.filter((tokenId) => !existingTokenIds.has(tokenId))
      const newHazardInstanceIds = hazardInstanceIds.filter((hazardId) => !existingHazardInstanceIds.has(hazardId))
      if (!newTokenIds.length && !newHazardInstanceIds.length) return

      const newParticipants = await buildEncounterParticipants(campaignId, encounter.sceneId, newTokenIds, newHazardInstanceIds)
      if (!newParticipants.length) return

      const activeParticipantId = encounter.participants[encounter.activeTurnIndex]?.participantId ?? null
      const participants = sortEncounterParticipants([...encounter.participants, ...newParticipants])
      state.setCampaignEncounter(campaignId, normalizeEncounterTurnIndex({ ...encounter, participants }, activeParticipantId))

      newParticipants.forEach((participant) => {
        appendEncounterLogEntry(campaignId, encounter.sceneId, { type: 'SYSTEM', message: `${participant.name} entrou no encontro.` })
      })

      emitEncounterChanged(campaignId)
    })

    socket.on('vtt:encounter:update-initiative', (input: unknown) => {
      const parsed = vttEncounterUpdateInitiativeSchema.safeParse(input)
      if (!parsed.success) return

      const { campaignId, participantId, initiative, activateHighest } = parsed.data
      if (!isActiveSessionMaster(campaignId, socket.id, user.id)) return

      const encounter = state.getCampaignEncounter(campaignId)
      if (!encounter) return

      const activeParticipantId = encounter.participants[encounter.activeTurnIndex]?.participantId ?? null
      const participants = sortEncounterParticipants(
        encounter.participants.map((participant) =>
          participant.participantId === participantId ? { ...participant, initiative } : participant,
        ),
      )

      state.setCampaignEncounter(
        campaignId,
        activateHighest
          ? { ...encounter, activeTurnIndex: 0, participants: resetParticipantMovement(participants, 0) }
          : normalizeEncounterTurnIndex({ ...encounter, participants }, activeParticipantId),
      )
      emitEncounterChanged(campaignId)
    })

    socket.on('vtt:encounter:roll-all-initiatives', (input: unknown) => {
      const parsed = vttEncounterCommandSchema.safeParse(input)
      if (!parsed.success) return

      const { campaignId } = parsed.data
      if (!isActiveSessionMaster(campaignId, socket.id, user.id)) return

      const encounter = state.getCampaignEncounter(campaignId)
      if (!encounter?.participants.length) return

      const participants = sortEncounterParticipants(
        encounter.participants.map((participant) => ({
          ...participant,
          initiative: randomInt(1, 21),
        })),
      )

      state.setCampaignEncounter(campaignId, {
        ...encounter,
        activeTurnIndex: 0,
        participants: resetParticipantMovement(participants, 0),
      })
      emitEncounterChanged(campaignId)
    })

    socket.on('vtt:encounter:trigger-hazard', async (input: unknown) => {
      const parsed = vttEncounterTriggerHazardSchema.safeParse(input)
      if (!parsed.success) return

      const { campaignId, participantId } = parsed.data
      if (!isActiveSessionMaster(campaignId, socket.id, user.id)) return

      const encounter = state.getCampaignEncounter(campaignId)
      if (!encounter) return

      const participant = encounter.participants.find((item) => item.participantId === participantId)
      if (!participant || participant.type !== 'hazard' || participant.state === 'TRIGGERED' || participant.state === 'ACTIVE') return

      const nextState = participant.executionMode === 'INSTANT' ? ('TRIGGERED' as const) : ('ACTIVE' as const)
      const participants = encounter.participants.map((item) =>
        item.participantId === participantId ? { ...item, state: nextState, visibility: 'REVEALED' as const } : item,
      )
      state.setCampaignEncounter(campaignId, { ...encounter, participants })
      emitEncounterChanged(campaignId)

      await postHazardTriggerChatMessage(campaignId, encounter.sceneId, participant.name, participant.executionMode)
    })

    socket.on('vtt:encounter:remove-participant', (input: unknown) => {
      const parsed = vttEncounterRemoveParticipantSchema.safeParse(input)
      if (!parsed.success) return

      const { campaignId, participantId } = parsed.data
      if (!isActiveSessionMaster(campaignId, socket.id, user.id)) return

      removeEncounterParticipantById(campaignId, participantId)
    })

    socket.on('vtt:encounter:next-turn', (input: unknown) => {
      const parsed = vttEncounterCommandSchema.safeParse(input)
      if (!parsed.success) return

      const { campaignId } = parsed.data
      if (!isActiveSessionMaster(campaignId, socket.id, user.id)) return

      const encounter = state.getCampaignEncounter(campaignId)
      if (!encounter?.participants.length) return

      const isLastParticipant = encounter.activeTurnIndex >= encounter.participants.length - 1
      const nextActiveTurnIndex = isLastParticipant ? 0 : encounter.activeTurnIndex + 1
      state.setCampaignEncounter(campaignId, {
        ...encounter,
        round: isLastParticipant ? encounter.round + 1 : encounter.round,
        activeTurnIndex: nextActiveTurnIndex,
        participants: resetParticipantMovement(encounter.participants, nextActiveTurnIndex),
      })
      emitEncounterChanged(campaignId)
    })

    socket.on('vtt:encounter:previous-turn', (input: unknown) => {
      const parsed = vttEncounterCommandSchema.safeParse(input)
      if (!parsed.success) return

      const { campaignId } = parsed.data
      if (!isActiveSessionMaster(campaignId, socket.id, user.id)) return

      const encounter = state.getCampaignEncounter(campaignId)
      if (!encounter?.participants.length) return

      const isFirstParticipant = encounter.activeTurnIndex <= 0
      const nextActiveTurnIndex = isFirstParticipant ? encounter.participants.length - 1 : encounter.activeTurnIndex - 1
      state.setCampaignEncounter(campaignId, {
        ...encounter,
        round: isFirstParticipant ? Math.max(1, encounter.round - 1) : encounter.round,
        activeTurnIndex: nextActiveTurnIndex,
        participants: resetParticipantMovement(encounter.participants, nextActiveTurnIndex),
      })
      emitEncounterChanged(campaignId)
    })

    socket.on('vtt:combat:movement:commit', async (input: unknown) => {
      const parsed = vttCombatMovementCommitSchema.safeParse(input)
      if (!parsed.success) return

      const { campaignId, tokenId } = parsed.data
      const isMasterMove = await canControlCampaignAsMaster(campaignId, socket.id, user.id)

      const encounter = state.getCampaignEncounter(campaignId)
      if (!encounter) return

      const participantIndex = encounter.participants.findIndex(
        (participant) => participant.type === 'creature' && participant.tokenId === tokenId,
      )
      if (participantIndex === -1) return
      const participant = encounter.participants[participantIndex] as VttEncounterCreatureParticipant

      if (!isMasterMove) {
        const online = state.getCampaignOnline(campaignId)
        const role = socket.data.characterRole as string | undefined
        const isPlayerOwnerMove = Boolean(online && online.state === 'ACTIVE' && role === 'PLAYER')
        if (!isPlayerOwnerMove) return

        const resolved = await resolveTokenForHealth(campaignId, tokenId)
        if (!resolved || resolved.token.ownerUserId !== user.id) return

        const isActiveTurn = encounter.participants[encounter.activeTurnIndex]?.participantId === participant.participantId
        if (!isActiveTurn) return
      }

      const participants = [...encounter.participants]
      participants[participantIndex] = { ...participant, movement: commitMovementAction(participant.movement) }
      state.setCampaignEncounter(campaignId, { ...encounter, participants })
      emitEncounterChanged(campaignId)
    })

    socket.on('vtt:combat:movement:reset', (input: unknown) => {
      const parsed = vttCombatMovementResetSchema.safeParse(input)
      if (!parsed.success) return

      const { campaignId, participantId } = parsed.data
      if (!isActiveSessionMaster(campaignId, socket.id, user.id)) return

      const encounter = state.getCampaignEncounter(campaignId)
      if (!encounter) return

      const index = encounter.participants.findIndex((participant) => participant.participantId === participantId)
      if (index === -1) return

      state.setCampaignEncounter(campaignId, {
        ...encounter,
        participants: resetParticipantMovement(encounter.participants, index),
      })
      emitEncounterChanged(campaignId)
    })

    socket.on('vtt:encounter:end', (input: unknown) => {
      const parsed = vttEncounterCommandSchema.safeParse(input)
      if (!parsed.success) return

      const { campaignId } = parsed.data
      if (!isActiveSessionMaster(campaignId, socket.id, user.id)) return

      state.deleteCampaignEncounter(campaignId)
      emitEncounterChanged(campaignId)
    })

    socket.on('vtt:encounter:request', (input: unknown) => {
      const parsed = vttEncounterCommandSchema.safeParse(input)
      if (!parsed.success) return

      const { campaignId } = parsed.data
      if (!isCampaignOnline(campaignId)) return
      if (socket.data.campaignId !== campaignId) return

      socket.emit('vtt:encounter:changed', {
        campaignId,
        encounter: presentEncounterForRole(state.getCampaignEncounter(campaignId), socket.data.characterRole),
      })
    })

    socket.on('vtt:hazard:place', async (input: unknown) => {
      const parsed = placeSceneHazardSchema.safeParse(input)
      if (!parsed.success) return

      const { campaignId, sceneId, hazardEntryId, scope, position, triggerMode, executionMode } = parsed.data
      if (!(await canControlCampaignAsMaster(campaignId, socket.id, user.id))) return
      if (!(await sceneBelongsToCampaign(campaignId, sceneId))) return

      const instance = await placeSceneHazard({
        campaignId,
        sceneId,
        hazardEntryId,
        scope,
        position: position ?? null,
        triggerMode,
        executionMode,
      })
      if (!instance) return

      await emitSceneHazardChanged(campaignId, sceneId, instance)
    })

    socket.on('vtt:hazard:update', async (input: unknown) => {
      const parsed = updateSceneHazardSchema.safeParse(input)
      if (!parsed.success) return

      const { campaignId, hazardId, scope, position, visibility, state: hazardState, triggerMode, executionMode, notes } = parsed.data
      if (!(await canControlCampaignAsMaster(campaignId, socket.id, user.id))) return

      const result = await updateSceneHazardInstance({
        campaignId,
        hazardId,
        scope,
        position,
        visibility,
        state: hazardState,
        triggerMode,
        executionMode,
        notes,
      })
      if (!result) return

      await emitSceneHazardChanged(campaignId, result.sceneId, result.instance)
    })

    socket.on('vtt:hazard:remove', async (input: unknown) => {
      const parsed = removeSceneHazardSchema.safeParse(input)
      if (!parsed.success) return

      const { campaignId, hazardId } = parsed.data
      if (!(await canControlCampaignAsMaster(campaignId, socket.id, user.id))) return

      const result = await removeSceneHazardInstance({ campaignId, hazardId })
      if (!result) return

      await emitSceneHazardRemoved(campaignId, result.sceneId, hazardId)
    })

    socket.on('vtt:hazards:request', async (input: unknown) => {
      const parsed = requestSceneHazardsSchema.safeParse(input)
      if (!parsed.success) return

      const { campaignId } = parsed.data
      const online = state.getCampaignOnline(campaignId)
      if (online && socket.data.campaignId !== campaignId) return
      if (!online && !(await isActiveCampaignMaster(campaignId, user.id))) return

      const sceneId = await getVisibleSceneIdForSocket(campaignId, socket)
      await emitSceneHazardsSnapshot(campaignId, sceneId, socket)
    })

    socket.on('vtt:combat:health:adjust', async (input: unknown) => {
      const parsed = vttCombatHealthAdjustSchema.safeParse(input)
      if (!parsed.success) return

      const { campaignId, tokenId, operation, amount, note } = parsed.data
      if (!(await canControlCampaignAsMaster(campaignId, socket.id, user.id))) return

      const resolved = await resolveTokenForHealth(campaignId, tokenId)
      if (!resolved) return

      const combatant = toCombatantIdentity(resolved.token)
      const health = await adjustHealth({
        combatant,
        campaignId,
        sceneId: resolved.sceneId,
        operation,
        amount,
        actorUserId: user.id,
        actorCharacterId: (socket.data.characterId as string | undefined) ?? null,
        note: note ?? null,
      })
      if (!health) return

      await emitCombatHealthChanged(campaignId, resolved.sceneId, combatant, health)
      const participantSynced = syncEncounterParticipantHealth(campaignId, tokenId, health)

      const encounterForLog = state.getCampaignEncounter(campaignId)
      const targetParticipantId =
        encounterForLog?.participants.find(
          (participant) => participant.type === 'creature' && participant.tokenId === tokenId,
        )?.participantId ?? null
      const logged = appendEncounterLogEntry(campaignId, resolved.sceneId, {
        type: operation,
        actorName: (socket.data.characterName as string | undefined) ?? 'Mestre',
        targetParticipantId,
        targetName: resolved.token.name,
        amount,
        resultingHealth: toCombatantHealth(health),
      })

      if (participantSynced || logged) {
        await emitEncounterChanged(campaignId)
      }
    })

    socket.on('vtt:combat:health:set', async (input: unknown) => {
      const parsed = vttCombatHealthSetSchema.safeParse(input)
      if (!parsed.success) return

      const { campaignId, tokenId, currentHitPoints, maxHitPoints, temporaryHitPoints, note } = parsed.data
      if (!(await canControlCampaignAsMaster(campaignId, socket.id, user.id))) return

      const resolved = await resolveTokenForHealth(campaignId, tokenId)
      if (!resolved) return

      const combatant = toCombatantIdentity(resolved.token)
      const health = await setHealth({
        combatant,
        campaignId,
        sceneId: resolved.sceneId,
        currentHitPoints,
        maxHitPoints,
        temporaryHitPoints,
        actorUserId: user.id,
        actorCharacterId: (socket.data.characterId as string | undefined) ?? null,
        note: note ?? null,
      })
      if (!health) return

      await emitCombatHealthChanged(campaignId, resolved.sceneId, combatant, health)
      if (syncEncounterParticipantHealth(campaignId, tokenId, health)) {
        await emitEncounterChanged(campaignId)
      }
    })

    socket.on('vtt:combat:health:request', async (input: unknown) => {
      const parsed = vttCombatHealthRequestSchema.safeParse(input)
      if (!parsed.success) return

      const { campaignId, tokenId } = parsed.data
      const online = state.getCampaignOnline(campaignId)
      if (online && socket.data.campaignId !== campaignId) return
      if (!online && !(await isActiveCampaignMaster(campaignId, user.id))) return

      const resolved = await resolveTokenForHealth(campaignId, tokenId)
      if (!resolved) return

      const combatant = toCombatantIdentity(resolved.token)
      const health = await getOrInitializeHealth(combatant, campaignId)
      if (!health) return

      const role = socket.data.characterRole as 'MASTER' | 'PLAYER' | 'NPC' | undefined
      const presented = presentHealthForCombatant(health, combatant, role)
      if (!presented) return

      socket.emit('vtt:combat:health:changed', {
        campaignId,
        sceneId: resolved.sceneId,
        tokenId,
        health: presented,
      })
    })

    socket.on('vtt:measurement:update', (input: unknown) => {
      const parsed = vttMeasurementUpdateSchema.safeParse(input)
      if (!parsed.success) return

      const { campaignId, measurement } = parsed.data
      const online = state.getCampaignOnline(campaignId)
      if (!online) return
      if (socket.data.campaignId !== campaignId) return
      if (online.state === 'PAUSED' && socket.data.characterRole !== 'MASTER') return

      if (measurement) {
        state.setCampaignMeasurement(campaignId, measurement)
      } else {
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

    // Preview efemero de area de magia — mesmo modelo do measurement
    // (.ai/spell_casting/specs.md secao 3). O payload carrega a forma; cada
    // cliente recalcula celulas/alvos localmente.
    socket.on('vtt:spell-area:update', (input: unknown) => {
      const parsed = vttSpellAreaUpdateSchema.safeParse(input)
      if (!parsed.success) return

      const { campaignId, area } = parsed.data
      const online = state.getCampaignOnline(campaignId)
      if (!online) return
      if (socket.data.campaignId !== campaignId) return
      if (online.state === 'PAUSED' && socket.data.characterRole !== 'MASTER') return

      if (area) {
        state.setCampaignSpellArea(campaignId, area)
      } else {
        state.deleteCampaignSpellArea(campaignId)
      }

      io.to(campaignRoom(campaignId)).emit('vtt:spell-area:changed', {
        campaignId,
        area,
      })
    })

    socket.on('vtt:spell-area:request', (input: unknown) => {
      const parsed = z.object({ campaignId: z.string().min(1) }).safeParse(input)
      if (!parsed.success) return

      const { campaignId } = parsed.data
      if (!isCampaignOnline(campaignId)) return
      if (socket.data.campaignId !== campaignId) return

      io.to(socket.id).emit('vtt:spell-area:changed', {
        campaignId,
        area: state.getCampaignSpellArea(campaignId) ?? null,
      })
    })

    socket.on('vtt:scene:select', async (input: unknown) => {
      const parsed = vttSceneSelectSchema.safeParse(input)
      if (!parsed.success) return

      const { campaignId, scene } = parsed.data
      const online = state.getCampaignOnline(campaignId)
      if (online && (online.masterSocketId !== socket.id || online.masterUserId !== user.id)) return
      if (!online && !(await isActiveCampaignMaster(campaignId, user.id))) return

      const sceneUpdated = await updateMasterActiveScene(campaignId, scene?.id ?? null)
      if (!sceneUpdated) return
      if (online) await persistCampaignLiveState(campaignId)
      const encounter = state.getCampaignEncounter(campaignId)
      if (encounter && encounter.sceneId !== (scene?.id ?? null)) {
        state.deleteCampaignEncounter(campaignId)
        emitEncounterChanged(campaignId)
      }
      if (scene?.id) {
        const settings = await getActiveSceneGridSettings(campaignId)
        state.setCampaignGridSettings(campaignId, settings)
      }

      if (online) {
        const pausedOnline = { ...online, state: 'PAUSED' as const }
        state.setCampaignOnline(campaignId, pausedOnline)
        emitCampaignSessionState(campaignId)
      }
      await emitVisibleTableSnapshot(campaignId, socket)

      state.deletePendingCampaignScene(campaignId)
    })

    socket.on('vtt:walls:update', async (input: unknown) => {
      const parsed = vttWallsUpdateSchema.safeParse(input)
      if (!parsed.success) return

      const { campaignId, sceneId, walls } = parsed.data
      if (!(await canControlCampaignAsMaster(campaignId, socket.id, user.id))) return

      const scene = await prisma.campaignScene.findFirst({
        where: { id: sceneId, campaignId },
        select: { id: true },
      })
      if (!scene) return

      await prisma.campaignScene.update({
        where: { id: sceneId },
        data: { walls },
      })

      setLiveSceneWalls(campaignId, sceneId, walls)
      await emitSceneWallsChanged(campaignId, sceneId, walls)
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

    socket.on('vtt:dice:roll', (input: unknown) => {
      const parsed = vttDiceRollSchema.safeParse(input)
      if (!parsed.success) return

      const { campaignId, rolls: diceRolls } = parsed.data
      const online = state.getCampaignOnline(campaignId)
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

      io.to(campaignRoom(campaignId)).emit('vtt:dice:rolled', {
        campaignId,
        roll: rolls[0],
        rolls,
      })
    })

  })

  async function appendDiceRollToActiveEncounter(
    campaignId: string,
    socketLike: { data: any },
    actorName: string,
    notation: string,
    total: number,
  ) {
    const sceneId = await getVisibleSceneIdForSocket(campaignId, socketLike)
    if (!sceneId) return

    const logged = appendEncounterLogEntry(campaignId, sceneId, { type: 'DICE_ROLL', actorName, notation, total })
    if (logged) await emitEncounterChanged(campaignId)
  }

  async function appendSystemLogToActiveEncounter(campaignId: string, sceneId: string, message: string) {
    const logged = appendEncounterLogEntry(campaignId, sceneId, { type: 'SYSTEM', message })
    if (logged) await emitEncounterChanged(campaignId)
  }

  async function consumeEncounterActionsForCharacter(input: {
    campaignId: string
    sceneId: string
    characterId: string
    actionCost: number
  }): Promise<{ ok: true } | { ok: false; error: string }> {
    if (input.actionCost <= 0) return { ok: true }

    const encounter = state.getCampaignEncounter(input.campaignId)
    if (!encounter || encounter.sceneId !== input.sceneId) return { ok: true }

    const participantIndex = encounter.participants.findIndex(
      (participant) => participant.type === 'creature' && participant.characterId === input.characterId,
    )
    if (participantIndex < 0) return { ok: false, error: 'Personagem nao participa do encontro ativo' }

    const participant = encounter.participants[participantIndex]
    if (!participant || participant.type !== 'creature') return { ok: false, error: 'Participante invalido no encontro ativo' }

    const activeParticipant = encounter.participants[encounter.activeTurnIndex]
    if (activeParticipant?.participantId !== participant.participantId) {
      return { ok: false, error: 'Nao e o turno deste personagem' }
    }

    if (participant.movement.actionsRemaining < input.actionCost) {
      return { ok: false, error: 'Acoes insuficientes para conjurar esta magia' }
    }

    const participants = [...encounter.participants]
    participants[participantIndex] = {
      ...participant,
      movement: {
        ...participant.movement,
        actionsRemaining: participant.movement.actionsRemaining - input.actionCost,
        metersUsedThisAction: 0,
      },
    }

    state.setCampaignEncounter(input.campaignId, { ...encounter, participants })
    await emitEncounterChanged(input.campaignId)
    return { ok: true }
  }

  async function restoreEncounterActionsForCharacter(input: {
    campaignId: string
    sceneId: string
    characterId: string
    actionCost: number
  }) {
    if (input.actionCost <= 0) return

    const encounter = state.getCampaignEncounter(input.campaignId)
    if (!encounter || encounter.sceneId !== input.sceneId) return

    const participantIndex = encounter.participants.findIndex(
      (participant) => participant.type === 'creature' && participant.characterId === input.characterId,
    )
    if (participantIndex < 0) return

    const participant = encounter.participants[participantIndex]
    if (!participant || participant.type !== 'creature') return

    const participants = [...encounter.participants]
    participants[participantIndex] = {
      ...participant,
      movement: {
        ...participant.movement,
        actionsRemaining: Math.min(3, participant.movement.actionsRemaining + input.actionCost),
      },
    }

    state.setCampaignEncounter(input.campaignId, { ...encounter, participants })
    await emitEncounterChanged(input.campaignId)
  }

  /**
   * Aplica dano/cura calculado pelo servidor (Resolution,
   * .ai/game_systems/pathfinder_2e/resolution/) diretamente no HP do token
   * alvo (personagem OU bestiario), sem o guard `canControlCampaignAsMaster`
   * do handler `vtt:combat:health:adjust` — excecao documentada em
   * .ai/combat/specs.md secao 6.4.
   */
  async function applyResolvedCombatHealth(input: {
    campaignId: string
    sceneId: string
    tokenId: string
    operation: 'DAMAGE' | 'HEAL'
    amount: number
    actorUserId: string
    actorCharacterId: string
    actorName: string
    note: string
  }): Promise<{ ok: true; health: RawCombatHealth } | { ok: false; error: string }> {
    const resolved = await resolveTokenForHealth(input.campaignId, input.tokenId)
    if (!resolved || resolved.sceneId !== input.sceneId) return { ok: false, error: 'Token alvo invalido' }

    const combatant = toCombatantIdentity(resolved.token)
    const health = await adjustHealth({
      combatant,
      campaignId: input.campaignId,
      sceneId: resolved.sceneId,
      operation: input.operation,
      amount: input.amount,
      actorUserId: input.actorUserId,
      actorCharacterId: input.actorCharacterId,
      note: input.note,
    })
    if (!health) return { ok: false, error: 'Falha ao aplicar resultado no alvo' }

    await emitCombatHealthChanged(input.campaignId, resolved.sceneId, combatant, health)
    const participantSynced = syncEncounterParticipantHealth(input.campaignId, input.tokenId, health)

    const encounterForLog = state.getCampaignEncounter(input.campaignId)
    const targetParticipantId =
      encounterForLog?.participants.find(
        (participant) => participant.type === 'creature' && participant.tokenId === input.tokenId,
      )?.participantId ?? null
    const logged = appendEncounterLogEntry(input.campaignId, resolved.sceneId, {
      type: input.operation,
      actorName: input.actorName,
      targetParticipantId,
      targetName: resolved.token.name,
      amount: input.amount,
      resultingHealth: toCombatantHealth(health),
    })

    if (participantSynced || logged) await emitEncounterChanged(input.campaignId)

    return { ok: true, health }
  }

  return {
    io,
    isCampaignOnline,
    getCampaignSessionState,
    appendDiceRollToActiveEncounter,
    appendSystemLogToActiveEncounter,
    consumeEncounterActionsForCharacter,
    restoreEncounterActionsForCharacter,
    applyResolvedCombatHealth,
  }
}

