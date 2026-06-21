import type { Server as HttpServer } from 'node:http'
import cookie from 'cookie'
import { Server as SocketIOServer } from 'socket.io'
import { verifyToken } from '../../auth/jwt'
import { prisma } from '../../db/prisma'
import { TOKEN_COOKIE } from '../../http/auth'

type UserPresence = { socketId: string; campaignId: string; characterId: string }
type OnlineCampaign = { masterSocketId: string; masterUserId: string; masterCharacterId: string }

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
        if (campaignCharacter.role === 'PLAYER' && !isCampaignOnline(campaignId)) {
          socket.emit('presence:error', { message: 'Mestre offline' })
          return
        }

        socket.data.campaignId = campaignId
        socket.data.characterId = characterId
        socket.data.characterRole = campaignCharacter.role
        socket.join(`campaign:${campaignId}`)
        userPresence.set(user.id, { socketId: socket.id, campaignId, characterId })

        if (campaignCharacter.role === 'MASTER') {
          campaignOnline.set(campaignId, { masterSocketId: socket.id, masterUserId: user.id, masterCharacterId: characterId })
          const members = await prisma.campaignCharacter.findMany({
            where: { campaignId, status: 'ACTIVE' },
            select: { character: { select: { userId: true } } },
          })
          for (const member of members) {
            io.to(`user:${member.character.userId}`).emit('campaign:status', { campaignId, online: true })
          }
        }

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
          campaignOnline.delete(prev.campaignId)

          prisma.campaignCharacter
            .findMany({
              where: { campaignId: prev.campaignId, status: 'ACTIVE' },
              select: { character: { select: { userId: true } } },
            })
            .then((members) => {
              for (const member of members) {
                io.to(`user:${member.character.userId}`).emit('campaign:status', { campaignId: prev.campaignId, online: false })
              }
            })
            .catch(() => {})

          io.in(`campaign:${prev.campaignId}`)
            .fetchSockets()
            .then((sockets) => {
              for (const campaignSocket of sockets) {
                const socketRole = campaignSocket.data.characterRole as string | undefined
                if (socketRole === 'PLAYER') {
                  campaignSocket.emit('campaign:kicked', { campaignId: prev.campaignId, message: 'Mestre saiu da campanha' })
                  campaignSocket.leave(`campaign:${prev.campaignId}`)
                }
              }
            })
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
