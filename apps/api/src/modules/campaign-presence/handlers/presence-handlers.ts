import type { Server as SocketIOServer, Socket } from 'socket.io'
import { prisma } from '../../../db/prisma'
import type { PresenceAck, VttTableScene } from '../contracts'
import type { CampaignPresenceState } from '../live-state'
import { campaignRoom, userRoom } from '../rooms'

type AuthenticatedSocketUser = { id: string }

type PresenceHandlersDependencies = {
  io: SocketIOServer
  state: CampaignPresenceState
  isCampaignOnline: (campaignId: string) => boolean
  getCampaignSessionState: (campaignId: string) => 'ACTIVE' | 'PAUSED' | null
  emitCampaignSessionState: (campaignId: string) => void
  emitCampaignMeasurementSnapshot: (campaignId: string, socketId: string) => void
  emitCampaignScene: (campaignId: string, scene: VttTableScene | null) => void
  emitVisibleTableSnapshot: (campaignId: string, socket: { id: string; data: unknown }) => Promise<void>
  notifyCampaignStatus: (campaignId: string, online: boolean) => Promise<void>
  hydrateCampaignLiveState: (campaignId: string) => Promise<void>
  persistCampaignLiveState: (campaignId: string) => Promise<void>
  endCampaignSession: (campaignId: string, message: string) => Promise<void>
}

export function registerPresenceHandlers(socket: Socket, dependencies: PresenceHandlersDependencies) {
  const {
    io,
    state,
    isCampaignOnline,
    getCampaignSessionState,
    emitCampaignSessionState,
    emitCampaignMeasurementSnapshot,
    emitCampaignScene,
    emitVisibleTableSnapshot,
    notifyCampaignStatus,
    hydrateCampaignLiveState,
    persistCampaignLiveState,
    endCampaignSession,
  } = dependencies

  const user = socket.data.user as AuthenticatedSocketUser

  socket.join(userRoom(user.id))

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
        socket.join(campaignRoom(campaignId))
        state.setUserPresence(user.id, { socketId: socket.id, campaignId, characterId })
        state.setCampaignOnline(campaignId, {
          masterSocketId: socket.id,
          masterUserId: user.id,
          masterCharacterId: characterId,
          state: 'ACTIVE',
        })
        await hydrateCampaignLiveState(campaignId)
        await persistCampaignLiveState(campaignId)
        state.clearTransientVttState(campaignId)

        await notifyCampaignStatus(campaignId, true)
        io.to(campaignRoom(campaignId)).emit('presence:update', { campaignId, characterId, online: true })
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

      const online = state.getCampaignOnline(campaignId)
      if (!online || online.masterSocketId !== socket.id || online.masterUserId !== user.id) {
        ack?.({ ok: false, error: 'Sessao nao iniciada por este mestre' })
        return
      }

      await endCampaignSession(campaignId, 'O mestre encerrou a sessao.')
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

      const online = state.getCampaignOnline(campaignId)
      if (!online || online.masterSocketId !== socket.id || online.masterUserId !== user.id) {
        ack?.({ ok: false, error: 'Sessao nao iniciada por este mestre' })
        return
      }

      state.setCampaignOnline(campaignId, { ...online, state: 'PAUSED' })
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

      const online = state.getCampaignOnline(campaignId)
      if (!online || online.masterSocketId !== socket.id || online.masterUserId !== user.id) {
        ack?.({ ok: false, error: 'Sessao nao iniciada por este mestre' })
        return
      }

      state.setCampaignOnline(campaignId, { ...online, state: 'ACTIVE' })
      emitCampaignSessionState(campaignId)
      if (state.hasPendingCampaignScene(campaignId)) {
        const pendingScene = state.getPendingCampaignScene(campaignId)
        state.deletePendingCampaignScene(campaignId)
        if (pendingScene) {
          state.setCampaignScene(campaignId, pendingScene)
        } else {
          state.deleteCampaignScene(campaignId)
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
      socket.join(campaignRoom(campaignId))
      state.setUserPresence(user.id, { socketId: socket.id, campaignId, characterId })
      socket.emit('presence:session:state', {
        campaignId,
        state: getCampaignSessionState(campaignId),
      })
      emitCampaignMeasurementSnapshot(campaignId, socket.id)
      await emitVisibleTableSnapshot(campaignId, socket)

      io.to(campaignRoom(campaignId)).emit('presence:update', {
        campaignId,
        characterId,
        online: true,
      })
    } catch {
      socket.emit('presence:error', { message: 'Erro de presenca' })
    }
  })

  socket.on('disconnect', () => {
    const prev = state.getUserPresence(user.id)
    if (prev?.socketId !== socket.id) return

    const role = socket.data.characterRole as string | undefined

    if (role === 'MASTER') {
      const online = state.getCampaignOnline(prev.campaignId)
      if (online?.masterSocketId === socket.id) {
        endCampaignSession(prev.campaignId, 'O mestre foi desconectado da sessao.')
          .catch(() => {})
      }
    }

    io.to(campaignRoom(prev.campaignId)).emit('presence:update', {
      campaignId: prev.campaignId,
      characterId: prev.characterId,
      online: false,
    })
    state.deleteUserPresence(user.id)
  })
}
