import type { Server as HttpServer } from 'node:http'
import cookie from 'cookie'
import { Server as SocketIOServer } from 'socket.io'
import { verifyToken } from '../../auth/jwt'
import { prisma } from '../../db/prisma'
import { TOKEN_COOKIE } from '../../http/auth'

type UserPresence = { socketId: string; campaignId: string; characterId: string }
type OnlineCampaign = { masterSocketId: string; masterUserId: string; masterCharacterId: string }
type PresenceAck = (response: { ok: boolean; error?: string }) => void

export function setupCampaignPresence(server: HttpServer) {
  const io = new SocketIOServer(server, {
    cors: {
      origin: process.env.NODE_ENV !== 'production' ? true : (process.env.WEB_ORIGIN ?? false),
      credentials: true,
    },
  })

  const userPresence = new Map<string, UserPresence>()
  const campaignOnline = new Map<string, OnlineCampaign>()

  function isCampaignOnline(campaignId: string) {
    return campaignOnline.has(campaignId)
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
    campaignOnline.delete(campaignId)
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

  io.use((socket, next) => {
    const raw = socket.handshake.headers.cookie ?? ''
    const parsed = cookie.parse(raw)
    const token = parsed[TOKEN_COOKIE]
    if (!token) return next(new Error('Nao autenticado'))

    const user = verifyToken(token)
    if (!user) return next(new Error('Token invalido'))

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
            select: { role: true, character: { select: { userId: true } } },
          })
          if (!campaignCharacter || campaignCharacter.character.userId !== user.id) {
            ack?.({ ok: false, error: 'Apenas o mestre pode iniciar a sessao' })
            return
          }

          socket.data.campaignId = campaignId
          socket.data.characterId = characterId
          socket.data.characterRole = campaignCharacter.role
          socket.join(`campaign:${campaignId}`)
          userPresence.set(user.id, { socketId: socket.id, campaignId, characterId })
          campaignOnline.set(campaignId, { masterSocketId: socket.id, masterUserId: user.id, masterCharacterId: characterId })

          await notifyCampaignStatus(campaignId, true)
          io.to(`campaign:${campaignId}`).emit('presence:update', { campaignId, characterId, online: true })
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

    socket.on('presence:enter', async ({ campaignId, characterId }: { campaignId: string; characterId: string }) => {
      try {
        if (!campaignId || !characterId) return

        const campaignCharacter = await prisma.campaignCharacter.findFirst({
          where: { campaignId, characterId, status: 'ACTIVE' },
          select: { role: true, character: { select: { userId: true } } },
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
        socket.join(`campaign:${campaignId}`)
        userPresence.set(user.id, { socketId: socket.id, campaignId, characterId })

        io.to(`campaign:${campaignId}`).emit('presence:update', {
          campaignId,
          characterId,
          online: true,
        })
      } catch {
        socket.emit('presence:error', { message: 'Erro de presenca' })
      }
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

  return { io, isCampaignOnline }
}
