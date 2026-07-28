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
  getVisibleCampaignSessionState: (campaignId: string, socket: { data: unknown }) => Promise<'ACTIVE' | 'PAUSED' | null>
  emitCampaignSessionState: (campaignId: string) => Promise<void>
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
    getVisibleCampaignSessionState,
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

  function requestFogExplorationFlush(campaignId: string, reason: 'PAUSE' | 'END') {
    return new Promise<void>((resolve) => {
      io.timeout(500).to(campaignRoom(campaignId)).emit('fog:exploration:flush-request', { campaignId, reason }, () => resolve())
    })
  }

  socket.join(userRoom(user.id))

  socket.on(
    'presence:session:start',
    async ({ campaignId, actorId }: { campaignId: string; actorId: string }, ack?: PresenceAck) => {
      try {
        if (!campaignId || !actorId) {
          ack?.({ ok: false, error: 'Dados invalidos' })
          return
        }

        const campaignMember = await prisma.campaignMember.findFirst({
          where: { campaignId, actorId, userId: user.id, status: 'ACTIVE', role: 'MASTER' },
          select: { role: true, actor: { select: { name: true } } },
        })
        if (!campaignMember || !campaignMember.actor) {
          ack?.({ ok: false, error: 'Apenas o mestre pode iniciar a sessao' })
          return
        }

        socket.data.campaignId = campaignId
        socket.data.actorId = actorId
        socket.data.actorRole = campaignMember.role
        socket.data.actorName = campaignMember.actor.name
        socket.join(campaignRoom(campaignId))
        state.setUserPresence(user.id, { socketId: socket.id, campaignId, actorId })
        await hydrateCampaignLiveState(campaignId)
        await persistCampaignLiveState(campaignId)
        state.clearTransientVttState(campaignId)
        await hydrateCampaignLiveState(campaignId)
        state.setCampaignOnline(campaignId, {
          masterSocketId: socket.id,
          masterUserId: user.id,
          masterActorId: actorId,
          state: 'PAUSED',
        })

        await notifyCampaignStatus(campaignId, true)
        io.to(campaignRoom(campaignId)).emit('presence:update', { campaignId, actorId, online: true })
        await emitCampaignSessionState(campaignId)
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

      await requestFogExplorationFlush(campaignId, 'END')
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

      await requestFogExplorationFlush(campaignId, 'PAUSE')
      state.setCampaignOnline(campaignId, { ...online, state: 'PAUSED' })
      await emitCampaignSessionState(campaignId)
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
      await emitCampaignSessionState(campaignId)
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

  socket.on('presence:enter', async ({ campaignId, actorId }: { campaignId: string; actorId: string }) => {
    try {
      if (!campaignId || !actorId) return

      const campaignMember = await prisma.campaignMember.findFirst({
        where: { campaignId, actorId, userId: user.id, status: 'ACTIVE' },
        select: { role: true, actor: { select: { name: true, avatarUrl: true } } },
      })
      if (!campaignMember || !campaignMember.actor) {
        socket.emit('presence:error', { message: 'Acesso nao liberado' })
        return
      }
      if (campaignMember.role !== 'PLAYER') return
      if (!isCampaignOnline(campaignId)) {
        socket.emit('presence:error', { message: 'Mestre offline' })
        return
      }

      socket.data.campaignId = campaignId
      socket.data.actorId = actorId
      socket.data.actorRole = campaignMember.role
      socket.data.actorName = campaignMember.actor.name
      socket.data.actorAvatarUrl = campaignMember.actor.avatarUrl
      socket.join(campaignRoom(campaignId))
      state.setUserPresence(user.id, { socketId: socket.id, campaignId, actorId })
      socket.emit('presence:session:state', {
        campaignId,
        state: await getVisibleCampaignSessionState(campaignId, socket),
      })
      emitCampaignMeasurementSnapshot(campaignId, socket.id)
      await emitVisibleTableSnapshot(campaignId, socket)

      io.to(campaignRoom(campaignId)).emit('presence:update', {
        campaignId,
        actorId,
        online: true,
      })
    } catch {
      socket.emit('presence:error', { message: 'Erro de presenca' })
    }
  })

  socket.on('disconnect', () => {
    const prev = state.getUserPresence(user.id)
    if (prev?.socketId !== socket.id) return

    const role = socket.data.actorRole as string | undefined

    if (role === 'MASTER') {
      const online = state.getCampaignOnline(prev.campaignId)
      if (online?.masterSocketId === socket.id) {
        endCampaignSession(prev.campaignId, 'O mestre foi desconectado da sessao.')
          .catch(() => {})
      }
    }

    io.to(campaignRoom(prev.campaignId)).emit('presence:update', {
      campaignId: prev.campaignId,
      actorId: prev.actorId,
      online: false,
    })
    state.deleteUserPresence(user.id)
  })
}
