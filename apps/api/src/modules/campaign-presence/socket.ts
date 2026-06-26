import type { Server as HttpServer } from 'node:http'
import cookie from 'cookie'
import { Server as SocketIOServer } from 'socket.io'
import { z } from 'zod'
import { verifyToken } from '../../auth/jwt'
import { prisma } from '../../db/prisma'
import { TOKEN_COOKIE } from '../../http/auth'

type UserPresence = { socketId: string; campaignId: string; characterId: string }
type OnlineCampaign = { masterSocketId: string; masterUserId: string; masterCharacterId: string }
type PresenceAck = (response: { ok: boolean; error?: string }) => void
type VttGridSettings = z.infer<typeof vttGridSettingsSchema>
type VttTokenPosition = z.infer<typeof vttTokenPositionSchema>
type VttMeasurement = z.infer<typeof vttMeasurementSchema>
type VttPlayerToken = {
  id: string
  characterId: string
  name: string
  avatarUrl: string | null
  position: VttTokenPosition
}

const squareMetersAllowedValues = new Set([
  ...Array.from({ length: 10 }, (_, index) => index + 1),
  ...Array.from({ length: 18 }, (_, index) => (index + 3) * 5),
  ...Array.from({ length: 90 }, (_, index) => (index + 11) * 10),
  ...Array.from({ length: 9 }, (_, index) => (index + 2) * 1000),
])

const defaultVttGridSettings: VttGridSettings = {
  visible: false,
  shape: 'square',
  size: 32,
  squareMeters: 1,
  squareMeasurementColor: '#f97316',
  hexMeasurementColor: '#f97316',
  lineWidth: 1,
  color: '#94a3b8',
}

const vttGridSettingsSchema = z.object({
  visible: z.boolean(),
  shape: z.enum(['square', 'hex']),
  size: z.number().int().min(24).max(96),
  squareMeters: z.number().int().min(1).max(10000).refine((value) => squareMetersAllowedValues.has(value)),
  squareMeasurementColor: z.string().regex(/^#[0-9a-fA-F]{6}$/),
  hexMeasurementColor: z.string().regex(/^#[0-9a-fA-F]{6}$/),
  lineWidth: z.number().int().min(1).max(4),
  color: z.string().regex(/^#[0-9a-fA-F]{6}$/),
})

const vttGridUpdateSchema = z.object({
  campaignId: z.string().min(1),
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

const vttTokenUpdateSchema = z.object({
  campaignId: z.string().min(1),
  position: vttTokenPositionSchema,
})

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
  const campaignMeasurements = new Map<string, VttMeasurement>()

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
    campaignTokens.delete(campaignId)
    campaignMeasurements.delete(campaignId)
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

  function emitCampaignGridSettings(campaignId: string) {
    io.to(`campaign:${campaignId}`).emit('vtt:grid:changed', {
      campaignId,
      settings: getCampaignGridSettings(campaignId),
    })
  }

  function getCampaignTokenMap(campaignId: string) {
    const existing = campaignTokens.get(campaignId)
    if (existing) return existing

    const next = new Map<string, VttPlayerToken>()
    campaignTokens.set(campaignId, next)
    return next
  }

  function emitCampaignTokenSnapshot(campaignId: string, socketId: string) {
    const tokenMap = campaignTokens.get(campaignId)
    io.to(socketId).emit('vtt:tokens:snapshot', {
      campaignId,
      tokens: tokenMap ? Array.from(tokenMap.values()) : [],
    })
  }

  function emitCampaignMeasurementSnapshot(campaignId: string, socketId: string) {
    io.to(socketId).emit('vtt:measurement:snapshot', {
      campaignId,
      measurement: campaignMeasurements.get(campaignId) ?? null,
    })
  }

  function removeCampaignToken(campaignId: string, characterId: string) {
    const tokenMap = campaignTokens.get(campaignId)
    if (!tokenMap?.delete(characterId)) return

    io.to(`campaign:${campaignId}`).emit('vtt:token:removed', {
      campaignId,
      characterId,
    })
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
          campaignTokens.set(campaignId, new Map())
          campaignMeasurements.delete(campaignId)

          await notifyCampaignStatus(campaignId, true)
          io.to(`campaign:${campaignId}`).emit('presence:update', { campaignId, characterId, online: true })
          emitCampaignGridSettings(campaignId)
          emitCampaignTokenSnapshot(campaignId, socket.id)
          emitCampaignMeasurementSnapshot(campaignId, socket.id)
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
        socket.emit('vtt:grid:changed', {
          campaignId,
          settings: getCampaignGridSettings(campaignId),
        })
        emitCampaignTokenSnapshot(campaignId, socket.id)
        emitCampaignMeasurementSnapshot(campaignId, socket.id)

        io.to(`campaign:${campaignId}`).emit('presence:update', {
          campaignId,
          characterId,
          online: true,
        })
      } catch {
        socket.emit('presence:error', { message: 'Erro de presenca' })
      }
    })

    socket.on('vtt:grid:update', (input: unknown) => {
      const parsed = vttGridUpdateSchema.safeParse(input)
      if (!parsed.success) return

      const { campaignId, settings } = parsed.data
      const online = campaignOnline.get(campaignId)
      if (!online || online.masterSocketId !== socket.id || online.masterUserId !== user.id) return

      campaignGridSettings.set(campaignId, settings)
      emitCampaignGridSettings(campaignId)
    })

    socket.on('vtt:token:update', (input: unknown) => {
      const parsed = vttTokenUpdateSchema.safeParse(input)
      if (!parsed.success) return

      const { campaignId, position } = parsed.data
      if (!isCampaignOnline(campaignId)) return
      if (socket.data.campaignId !== campaignId) return
      if (socket.data.characterRole !== 'PLAYER') return

      const characterId = socket.data.characterId as string | undefined
      const characterName = socket.data.characterName as string | undefined
      const characterAvatarUrl = socket.data.characterAvatarUrl as string | null | undefined
      if (!characterId || !characterName) return

      const token: VttPlayerToken = {
        id: `token:${characterId}`,
        characterId,
        name: characterName,
        avatarUrl: characterAvatarUrl ?? null,
        position,
      }

      getCampaignTokenMap(campaignId).set(characterId, token)
      io.to(`campaign:${campaignId}`).emit('vtt:token:changed', {
        campaignId,
        token,
      })
    })

    socket.on('vtt:tokens:request', (input: unknown) => {
      const parsed = z.object({ campaignId: z.string().min(1) }).safeParse(input)
      if (!parsed.success) return

      const { campaignId } = parsed.data
      if (!isCampaignOnline(campaignId)) return
      if (socket.data.campaignId !== campaignId) return

      emitCampaignTokenSnapshot(campaignId, socket.id)
    })

    socket.on('vtt:measurement:update', (input: unknown) => {
      const parsed = vttMeasurementUpdateSchema.safeParse(input)
      if (!parsed.success) return

      const { campaignId, measurement } = parsed.data
      if (!isCampaignOnline(campaignId)) return
      if (socket.data.campaignId !== campaignId) return

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

      if (role === 'PLAYER') {
        removeCampaignToken(prev.campaignId, prev.characterId)
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
