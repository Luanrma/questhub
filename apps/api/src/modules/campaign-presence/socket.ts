import type { Server as HttpServer } from 'node:http'
import cookie from 'cookie'
import { Server as SocketIOServer } from 'socket.io'
import { z } from 'zod'
import { verifyToken } from '../../auth/jwt'
import { isActiveSession } from '../../auth/session'
import { prisma } from '../../db/prisma'
import { TOKEN_COOKIE } from '../../http/auth'
import { assetService } from '../assets/service'
import { findBestiaryCreature } from '../game_systems/bestiary/registry'
import {
  defaultVttGridSettings,
  type VttCombatParticipant,
  type VttCombatState,
  type VttDiceRoll,
  type VttGridSettings,
  type VttPlayerToken,
  type VttTableScene,
  vttCombatCommandSchema,
  vttCombatStartSchema,
  vttCombatUpdateInitiativeSchema,
  vttDiceRollSchema,
  vttGridUpdateSchema,
  vttMeasurementUpdateSchema,
  vttSceneSelectSchema,
  vttTokenActionSchema,
  vttTokenPlaceSchema,
  vttTokenUpdateSchema,
  vttTokensRemoveBulkSchema,
} from './contracts'
import { registerPresenceHandlers } from './handlers/presence-handlers'
import { CampaignPresenceState } from './live-state'
import { sceneGridToVttSettings, tableTokenFromPersistedToken, vttGridSettingsToSceneData } from './mappers'
import { campaignRoom, userRoom } from './rooms'

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

    removeCombatParticipants(campaignId, tokensToRemove.map((token) => token.id))
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

  async function emitSceneTokenChanged(campaignId: string, sceneId: string, token: VttPlayerToken) {
    const sockets = await io.in(campaignRoom(campaignId)).fetchSockets()
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
      },
    })
    if (!scene) return null

    const grid = state.getCampaignSceneGridSettings(campaignId)?.get(scene.id) ?? sceneGridToVttSettings(scene)
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
  }

  async function emitVisibleTableSnapshots(campaignId: string) {
    const sockets = await io.in(campaignRoom(campaignId)).fetchSockets()
    await Promise.all(sockets.map((campaignSocket) => emitVisibleTableSnapshot(campaignId, campaignSocket)))
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

  function sortCombatParticipants(participants: VttCombatParticipant[]) {
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

  function normalizeCombatTurnIndex(combat: VttCombatState, activeCharacterId?: string | null): VttCombatState {
    if (!combat.participants.length) return { ...combat, activeTurnIndex: 0 }
    if (!activeCharacterId) {
      return {
        ...combat,
        activeTurnIndex: Math.min(Math.max(combat.activeTurnIndex, 0), combat.participants.length - 1),
      }
    }

    const nextIndex = combat.participants.findIndex((participant) => participant.characterId === activeCharacterId)
    return {
      ...combat,
      activeTurnIndex: nextIndex >= 0 ? nextIndex : 0,
    }
  }

  function emitCombatChanged(campaignId: string) {
    io.to(campaignRoom(campaignId)).emit('vtt:combat:changed', {
      campaignId,
      combat: state.getCampaignCombat(campaignId),
    })
  }

  function removeCombatParticipants(campaignId: string, tokenIds: string[]) {
    const combat = state.getCampaignCombat(campaignId)
    if (!combat || !tokenIds.length) return

    const tokenIdSet = new Set(tokenIds)
    const activeTokenId = combat.participants[combat.activeTurnIndex]?.tokenId ?? null
    const participants = combat.participants.filter((participant) => !tokenIdSet.has(participant.tokenId))
    if (!participants.length) {
      state.deleteCampaignCombat(campaignId)
      emitCombatChanged(campaignId)
      return
    }

    state.setCampaignCombat(
      campaignId,
      normalizeCombatTurnIndex(
        {
          ...combat,
          participants,
        },
        activeTokenId && tokenIdSet.has(activeTokenId)
          ? null
          : combat.participants.find((participant) => participant.tokenId === activeTokenId)?.characterId ?? null,
      ),
    )
    emitCombatChanged(campaignId)
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
    removeCombatParticipants(campaignId, [token.id])
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

        const token: VttPlayerToken = {
          id: `bestiary:${crypto.randomUUID()}`,
          source: 'bestiary',
          characterId: null,
          bestiaryCreatureId: creature.id,
          name: creature.name,
          avatarUrl: creature.token.imageUrl,
          tokenBorderColor: creature.token.borderColor,
          ownerUserId: '',
          ownerName: 'Mestre',
          role: 'NPC',
          hidden: false,
          position,
        }

        setLiveSceneToken(campaignId, sceneId, token)
        await persistSceneToken(campaignId, sceneId, token)
        if (online) await emitVisibleTableSnapshots(campaignId)
        else socket.emit('vtt:token:changed', { campaignId, sceneId, token })
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
      await persistSceneToken(campaignId, sceneId, token)
      if (online) await emitVisibleTableSnapshots(campaignId)
      else socket.emit('vtt:token:changed', { campaignId, sceneId, token })
    })

    socket.on('vtt:token:move', async (input: unknown) => {
      const parsed = vttTokenUpdateSchema.safeParse(input)
      if (!parsed.success) return

      const { campaignId, position } = parsed.data
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

      const nextToken = { ...token, position }
      const sceneId = getCampaignTokenSceneMap(campaignId).get(token.id) ?? persistedTokenRecord?.sceneId
      if (!sceneId) return
      setLiveSceneToken(campaignId, sceneId, nextToken)
      await persistSceneToken(campaignId, sceneId, nextToken)
      if (online) await emitSceneTokenChanged(campaignId, sceneId, nextToken)
      else socket.emit('vtt:token:changed', { campaignId, sceneId, token: nextToken })
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
        return
      }

      await removeCampaignTokens(campaignId, { sceneId: null })
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
      if (nextToken.hidden) removeCombatParticipants(campaignId, [token.id])
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

      const { campaignId, sceneId } = parsed.data
      if (!isActiveSessionMaster(campaignId, socket.id, user.id)) return
      if (!(await sceneBelongsToCampaign(campaignId, sceneId))) return

      const tokens = (await listSceneTokens(campaignId, sceneId)).filter((token) => !token.hidden)
      if (!tokens.length) return

      const participants = tokens.map((token) => ({
        tokenId: token.id,
        characterId: token.characterId ?? token.id,
        name: token.name,
        avatarUrl: token.avatarUrl,
        initiative: null,
      }))

      state.setCampaignCombat(campaignId, {
        campaignId,
        sceneId,
        round: 1,
        activeTurnIndex: 0,
        status: 'ACTIVE',
        participants,
      })
      emitCombatChanged(campaignId)
    })

    socket.on('vtt:combat:update-initiative', (input: unknown) => {
      const parsed = vttCombatUpdateInitiativeSchema.safeParse(input)
      if (!parsed.success) return

      const { campaignId, characterId, initiative } = parsed.data
      if (!isActiveSessionMaster(campaignId, socket.id, user.id)) return

      const combat = state.getCampaignCombat(campaignId)
      if (!combat) return

      const activeCharacterId = combat.participants[combat.activeTurnIndex]?.characterId ?? null
      const participants = sortCombatParticipants(
        combat.participants.map((participant) =>
          participant.characterId === characterId ? { ...participant, initiative } : participant,
        ),
      )

      state.setCampaignCombat(campaignId, normalizeCombatTurnIndex({ ...combat, participants }, activeCharacterId))
      emitCombatChanged(campaignId)
    })

    socket.on('vtt:combat:next-turn', (input: unknown) => {
      const parsed = vttCombatCommandSchema.safeParse(input)
      if (!parsed.success) return

      const { campaignId } = parsed.data
      if (!isActiveSessionMaster(campaignId, socket.id, user.id)) return

      const combat = state.getCampaignCombat(campaignId)
      if (!combat?.participants.length) return

      const isLastParticipant = combat.activeTurnIndex >= combat.participants.length - 1
      state.setCampaignCombat(campaignId, {
        ...combat,
        round: isLastParticipant ? combat.round + 1 : combat.round,
        activeTurnIndex: isLastParticipant ? 0 : combat.activeTurnIndex + 1,
      })
      emitCombatChanged(campaignId)
    })

    socket.on('vtt:combat:previous-turn', (input: unknown) => {
      const parsed = vttCombatCommandSchema.safeParse(input)
      if (!parsed.success) return

      const { campaignId } = parsed.data
      if (!isActiveSessionMaster(campaignId, socket.id, user.id)) return

      const combat = state.getCampaignCombat(campaignId)
      if (!combat?.participants.length) return

      const isFirstParticipant = combat.activeTurnIndex <= 0
      state.setCampaignCombat(campaignId, {
        ...combat,
        round: isFirstParticipant ? Math.max(1, combat.round - 1) : combat.round,
        activeTurnIndex: isFirstParticipant ? combat.participants.length - 1 : combat.activeTurnIndex - 1,
      })
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

    socket.on('vtt:scene:select', async (input: unknown) => {
      const parsed = vttSceneSelectSchema.safeParse(input)
      if (!parsed.success) return

      const { campaignId, scene } = parsed.data
      const online = state.getCampaignOnline(campaignId)
      if (online && (online.masterSocketId !== socket.id || online.masterUserId !== user.id)) return
      if (!online && !(await isActiveCampaignMaster(campaignId, user.id))) return

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

      if (online) {
        const pausedOnline = { ...online, state: 'PAUSED' as const }
        state.setCampaignOnline(campaignId, pausedOnline)
        emitCampaignSessionState(campaignId)
      }
      await emitVisibleTableSnapshot(campaignId, socket)

      state.deletePendingCampaignScene(campaignId)
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

  return { io, isCampaignOnline, getCampaignSessionState }
}
