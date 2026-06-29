import type { Server as HttpServer } from 'node:http'
import cookie from 'cookie'
import { Server as SocketIOServer } from 'socket.io'
import { z } from 'zod'
import { verifyToken } from '../../auth/jwt'
import { isActiveSession } from '../../auth/session'
import { prisma } from '../../db/prisma'
import { TOKEN_COOKIE } from '../../http/auth'

type UserPresence = { socketId: string; campaignId: string; characterId: string }
type CampaignSessionState = 'ACTIVE' | 'PAUSED'
type OnlineCampaign = { masterSocketId: string; masterUserId: string; masterCharacterId: string; state: CampaignSessionState }
type PresenceAck = (response: { ok: boolean; error?: string }) => void
type VttGridSettings = z.infer<typeof vttGridSettingsSchema>
type VttTokenPosition = z.infer<typeof vttTokenPositionSchema>
type VttMeasurement = z.infer<typeof vttMeasurementSchema>
type VttDiceRoll = z.infer<typeof vttDiceRolledSchema>
type VttTableScene = z.infer<typeof vttTableSceneSchema>
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

const vttTableSceneSchema = z.object({
  id: z.string().min(1).max(200),
  name: z.string().min(1).max(120),
  imageUrl: z.string().min(1).max(12000),
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
    campaignOnline.delete(campaignId)
    campaignTokens.delete(campaignId)
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
      sessionState: getCampaignSessionState(campaignId),
    })
  }

  function emitCampaignMeasurementSnapshot(campaignId: string, socketId: string) {
    io.to(socketId).emit('vtt:measurement:snapshot', {
      campaignId,
      measurement: campaignMeasurements.get(campaignId) ?? null,
    })
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
          campaignTokens.set(campaignId, new Map())
          campaignMeasurements.delete(campaignId)
          campaignScenes.delete(campaignId)
          campaignPendingScenes.delete(campaignId)

          await notifyCampaignStatus(campaignId, true)
          io.to(`campaign:${campaignId}`).emit('presence:update', { campaignId, characterId, online: true })
          emitCampaignSessionState(campaignId)
          emitCampaignGridSettings(campaignId)
          emitCampaignTokenSnapshot(campaignId, socket.id)
          emitCampaignMeasurementSnapshot(campaignId, socket.id)
          emitCampaignSceneSnapshot(campaignId, socket.id)
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
        socket.emit('vtt:grid:changed', {
          campaignId,
          settings: getCampaignGridSettings(campaignId),
        })
        socket.emit('presence:session:state', {
          campaignId,
          state: getCampaignSessionState(campaignId),
        })
        emitCampaignTokenSnapshot(campaignId, socket.id)
        emitCampaignMeasurementSnapshot(campaignId, socket.id)
        emitCampaignSceneSnapshot(campaignId, socket.id)

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

      getCampaignTokenMap(campaignId).set(characterId, token)
      io.to(`campaign:${campaignId}`).emit('vtt:token:changed', {
        campaignId,
        token,
      })
    })

    socket.on('vtt:token:move', (input: unknown) => {
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
      const token = tokenMap?.get(characterId)
      if (!token) return
      if (isPlayerOwnerMove && token.ownerUserId !== user.id) return

      const nextToken = { ...token, position }
      tokenMap?.set(characterId, nextToken)
      io.to(`campaign:${campaignId}`).emit('vtt:token:changed', {
        campaignId,
        token: nextToken,
      })
    })

    socket.on('vtt:token:remove', (input: unknown) => {
      const parsed = vttTokenActionSchema.safeParse(input)
      if (!parsed.success) return

      const { campaignId, characterId } = parsed.data
      const online = campaignOnline.get(campaignId)
      if (!online) return
      if (online.masterSocketId !== socket.id || online.masterUserId !== user.id) return

      removeCampaignToken(campaignId, characterId)
    })

    socket.on('vtt:token:visibility', (input: unknown) => {
      const parsed = vttTokenActionSchema.safeParse(input)
      if (!parsed.success) return

      const { campaignId, characterId } = parsed.data
      const online = campaignOnline.get(campaignId)
      if (!online) return
      if (online.masterSocketId !== socket.id || online.masterUserId !== user.id) return

      const tokenMap = campaignTokens.get(campaignId)
      const token = tokenMap?.get(characterId)
      if (!token) return

      const nextToken = { ...token, hidden: !token.hidden }
      tokenMap?.set(characterId, nextToken)
      io.to(`campaign:${campaignId}`).emit('vtt:token:changed', {
        campaignId,
        token: nextToken,
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

    socket.on('vtt:scene:select', (input: unknown) => {
      const parsed = vttSceneSelectSchema.safeParse(input)
      if (!parsed.success) return

      const { campaignId, scene } = parsed.data
      const online = campaignOnline.get(campaignId)
      if (!online) return
      if (online.masterSocketId !== socket.id || online.masterUserId !== user.id) return

      if (online.state === 'PAUSED') {
        campaignPendingScenes.set(campaignId, scene)
        return
      }

      if (scene) {
        campaignScenes.set(campaignId, scene)
      } else {
        campaignScenes.delete(campaignId)
      }
      campaignPendingScenes.delete(campaignId)
      emitCampaignScene(campaignId, scene)
    })

    socket.on('vtt:scene:request', (input: unknown) => {
      const parsed = z.object({ campaignId: z.string().min(1) }).safeParse(input)
      if (!parsed.success) return

      const { campaignId } = parsed.data
      if (!isCampaignOnline(campaignId)) return
      if (socket.data.campaignId !== campaignId) return

      emitCampaignSceneSnapshot(campaignId, socket.id)
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
