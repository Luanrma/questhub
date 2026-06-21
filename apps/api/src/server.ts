import './env'
import Fastify from 'fastify'
import cors from '@fastify/cors'
import cookiePlugin from '@fastify/cookie'
import { Server as SocketIOServer } from 'socket.io'
import cookie from 'cookie'
import crypto from 'node:crypto'
import bcrypt from 'bcryptjs'
import { z } from 'zod'
import { signToken, verifyToken } from './auth/jwt'
import { prisma } from './db/prisma'

const app = Fastify({ logger: true })

function parseOrigins(raw?: string) {
  if (!raw) return []
  return raw
    .split(',')
    .map((s) => s.trim())
    .filter(Boolean)
}

const allowedOrigins = new Set(parseOrigins(process.env.WEB_ORIGIN))

await app.register(cors, {
  // Em dev, a porta do Vite pode mudar (5173, 5174...). Então permitimos localhost:*.
  // Em produção, restringimos ao(s) origin(s) configurado(s) em WEB_ORIGIN.
  origin: (origin, cb) => {
    if (!origin) return cb(null, true)

    const isLocalhost =
      origin.startsWith('http://localhost:') ||
      origin.startsWith('http://127.0.0.1:') ||
      origin.startsWith('http://0.0.0.0:')

    if (process.env.NODE_ENV !== 'production') {
      if (isLocalhost) return cb(null, true)
      if (allowedOrigins.has(origin)) return cb(null, true)
      return cb(null, true)
    }

    if (allowedOrigins.size === 0) return cb(null, false)
    return cb(null, allowedOrigins.has(origin))
  },
  credentials: true,
  methods: ['GET', 'POST', 'PATCH', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type'],
})

await app.register(cookiePlugin)

const TOKEN_COOKIE = 'token'

function setAuthCookie(reply: any, token: string) {
  reply.setCookie(TOKEN_COOKIE, token, {
    httpOnly: true,
    sameSite: 'lax',
    secure: process.env.NODE_ENV === 'production',
    path: '/',
    maxAge: 60 * 60 * 24 * 7,
  })
}

function clearAuthCookie(reply: any) {
  reply.setCookie(TOKEN_COOKIE, '', {
    httpOnly: true,
    sameSite: 'lax',
    secure: process.env.NODE_ENV === 'production',
    path: '/',
    maxAge: 0,
  })
}

function requireAuth(req: any, reply: any) {
  const token = (req.cookies as any)?.[TOKEN_COOKIE]
  if (!token) {
    reply.status(401).send({ error: 'Não autenticado' })
    return null
  }

  const payload = verifyToken(token)
  if (!payload) {
    reply.status(401).send({ error: 'Não autenticado' })
    return null
  }

  return payload
}

async function generateInviteCode(db: typeof prisma = prisma) {
  // 8 chars, alfanumérico em maiúsculo (ex.: "A1B2C3D4")
  for (let i = 0; i < 5; i++) {
    const code = crypto.randomBytes(6).toString('base64url').slice(0, 8).toUpperCase()
    const exists = await db.campaign.findUnique({ where: { inviteCode: code } })
    if (!exists) return code
  }
  // fallback
  return crypto.randomBytes(12).toString('hex').slice(0, 10).toUpperCase()
}

/** Socket.IO */
const io = new SocketIOServer(app.server, {
  cors: {
    origin: process.env.NODE_ENV !== 'production' ? true : (process.env.WEB_ORIGIN ?? false),
    credentials: true,
  },
})

// Presença (um usuário só pode estar "online" em uma campanha por vez)
const userPresence = new Map<string, { socketId: string; campaignId: string; characterId: string }>()
const campaignOnline = new Map<string, { masterSocketId: string; masterUserId: string; masterCharacterId: string }>()

function isCampaignOnline(campaignId: string) {
  return campaignOnline.has(campaignId)
}

// Auth no handshake via cookie JWT
io.use((socket, next) => {
  const raw = socket.handshake.headers.cookie ?? ''
  const parsed = cookie.parse(raw)
  const token = parsed[TOKEN_COOKIE]
  if (!token) return next(new Error('Não autenticado'))

  const user = verifyToken(token)
  if (!user) return next(new Error('Token inválido'))

  socket.data.user = user
  next()
})

io.on('connection', (socket) => {
  const user = socket.data.user as any

  // Sala privada do usuário
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

      ;(socket.data as any).campaignId = campaignId
      ;(socket.data as any).characterId = characterId
      ;(socket.data as any).characterRole = campaignCharacter.role
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
      return
    } catch (err) {
      ;(socket as any).log?.error?.(err)
    }
  })

  socket.on('disconnect', () => {
    const prev = userPresence.get(user.id)
    if (prev?.socketId === socket.id) {
      const role = (socket.data as any).characterRole as string | undefined

      // Se o mestre saiu, marca campanha offline e "expulsa" os players
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
              for (const m of members) {
                io.to(`user:${m.character.userId}`).emit('campaign:status', { campaignId: prev.campaignId, online: false })
              }
            })
            .catch(() => {})

          io.in(`campaign:${prev.campaignId}`)
            .fetchSockets()
            .then((sockets) => {
              for (const s of sockets) {
                const sRole = (s.data as any).characterRole as string | undefined
                if (sRole === 'PLAYER') {
                  s.emit('campaign:kicked', { campaignId: prev.campaignId, message: 'Mestre saiu da campanha' })
                  s.leave(`campaign:${prev.campaignId}`)
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
    }
  })
})

app.get('/api/health', async () => ({ ok: true }))

app.post('/api/register', async (req, reply) => {
  const schema = z.object({
    email: z.string().email('Email inválido'),
    password: z.string().min(8, 'Senha deve ter no mínimo 8 caracteres'),
  })

  const parsed = schema.safeParse(req.body ?? {})
  if (!parsed.success) return reply.status(400).send({ error: parsed.error.flatten() })

  const { email, password } = parsed.data

  const exists = await prisma.user.findUnique({ where: { email } })
  if (exists) return reply.status(409).send({ error: 'Email já cadastrado' })

  const passwordHash = await bcrypt.hash(password, 10)
  const user = await prisma.user.create({
    data: { email, passwordHash },
    select: { id: true, email: true },
  })

  const token = signToken({
    id: user.id,
    name: user.email.split('@')[0] || 'User',
    email: user.email,
    type: 'USER',
  })

  setAuthCookie(reply, token)
  return reply.send({ message: 'Cadastro realizado com sucesso' })
})

app.post('/api/sign-in', async (req, reply) => {
  const schema = z.object({
    email: z.string().email(),
    password: z.string().min(1),
  })
  const parsed = schema.safeParse(req.body ?? {})
  if (!parsed.success) return reply.status(400).send({ error: 'Dados inválidos' })

  const { email, password } = parsed.data

  const user = await prisma.user.findUnique({ where: { email } })
  if (!user) return reply.status(401).send({ error: 'Credenciais inválidas' })

  const ok = await bcrypt.compare(password, user.passwordHash)
  if (!ok) return reply.status(401).send({ error: 'Credenciais inválidas' })

  const token = signToken({
    id: user.id,
    name: user.email.split('@')[0] || 'User',
    email: user.email,
    type: 'USER',
  })

  setAuthCookie(reply, token)
  return reply.send({ message: 'Login realizado com sucesso' })
})

app.get('/api/me', async (req, reply) => {
  const payload = requireAuth(req, reply)
  if (!payload) return

  // Confere no banco (evita token de usuário deletado)
  const user = await prisma.user.findUnique({
    where: { id: payload.id },
    select: { id: true, email: true, createdAt: true },
  })
  if (!user) return reply.status(401).send({ error: 'Não autenticado' })

  return reply.send({
    id: user.id,
    name: payload.name,
    email: user.email,
    type: payload.type,
  })
})

app.post('/api/logout', async (_req, reply) => {
  clearAuthCookie(reply)
  return reply.send({ message: 'Logout realizado com sucesso' })
})

app.post('/api/characters', async (req, reply) => {
  const payload = requireAuth(req, reply)
  if (!payload) return

  const avatarUrlSchema = z
    .string()
    .trim()
    .max(2048)
    .refine((value) => {
      if (value.startsWith('/')) return true

      try {
        const url = new URL(value)
        return url.protocol === 'http:' || url.protocol === 'https:'
      } catch {
        return false
      }
    }, 'Avatar deve ser uma URL valida')
    .optional()

  const schema = z.object({
    name: z.string().trim().min(1, 'Nome e obrigatorio').max(80, 'Nome muito longo'),
    avatarUrl: avatarUrlSchema,
    bio: z.string().trim().max(2000, 'Bio deve ter no maximo 2000 caracteres').optional(),
  })

  const parsed = schema.safeParse(req.body ?? {})
  if (!parsed.success) return reply.status(400).send({ error: parsed.error.flatten() })

  const character = await prisma.character.create({
    data: {
      userId: payload.id,
      name: parsed.data.name,
      avatarUrl: parsed.data.avatarUrl || null,
      bio: parsed.data.bio || null,
    },
    select: {
      id: true,
      userId: true,
      name: true,
      avatarUrl: true,
      bio: true,
      system: true,
      deletedAt: true,
      createdAt: true,
      updatedAt: true,
    },
  })

  return reply.status(201).send(character)
})

app.get('/api/characters', async (req, reply) => {
  const payload = requireAuth(req, reply)
  if (!payload) return

  const characters = await prisma.character.findMany({
    where: { userId: payload.id, deletedAt: null },
    select: {
      id: true,
      name: true,
      avatarUrl: true,
      bio: true,
      system: true,
      sheet: true,
      createdAt: true,
      campaigns: {
        select: {
          id: true,
          role: true,
          status: true,
          campaign: { select: { id: true, title: true, system: true } },
        },
      },
    },
    orderBy: { createdAt: 'desc' },
  })

  return reply.send(
    characters.map((character) => ({
      id: character.id,
      name: character.name,
      avatarUrl: character.avatarUrl,
      bio: character.bio,
      system: character.system,
      createdAt: character.createdAt,
      campaigns: character.campaigns,
      available: character.campaigns.length === 0,
      hasSheet: character.sheet !== null,
    })),
  )
})

app.get('/api/campaigns', async (req, reply) => {
  const payload = requireAuth(req, reply)
  if (!payload) return

  const campaignCharacters = await prisma.campaignCharacter.findMany({
    where: {
      status: 'ACTIVE',
      character: { userId: payload.id },
    },
    select: {
      role: true,
      character: { select: { id: true, name: true } },
      campaign: {
        select: {
          id: true,
          title: true,
          description: true,
          inviteCode: true,
          system: true,
          joinPolicy: true,
          createdAt: true,
          characters: {
            where: { role: 'MASTER', status: 'ACTIVE' },
            select: { character: { select: { id: true, userId: true, name: true } } },
            take: 1,
          },
        },
      },
    },
    orderBy: { createdAt: 'desc' },
  })

  return reply.send(
    campaignCharacters.map((entry) => {
      const master = entry.campaign.characters[0]?.character ?? null

      return {
        id: entry.campaign.id,
        title: entry.campaign.title,
        description: entry.campaign.description,
        inviteCode: entry.campaign.inviteCode,
        system: entry.campaign.system,
        joinPolicy: entry.campaign.joinPolicy,
        createdAt: entry.campaign.createdAt,
        gmName: master?.name ?? 'Mestre',
        gmUserId: master?.userId ?? '',
        myRole: entry.role,
        myCharacterId: entry.character.id,
        myCharacterName: entry.character.name,
        isOnline: isCampaignOnline(entry.campaign.id),
      }
    }),
  )
})

app.post('/api/campaigns', async (req, reply) => {
  const payload = requireAuth(req, reply)
  if (!payload) return

  const schema = z.object({
    title: z.string().trim().min(1, 'Titulo e obrigatorio'),
    description: z.string().optional(),
    joinPolicy: z.enum(['PUBLIC', 'PRIVATE']).default('PUBLIC'),
    system: z.enum(['DND_5E', 'PATHFINDER_2E']),
    masterCharacterId: z.string().optional(),
    masterCharacterName: z.string().trim().min(1).max(80).optional(),
  })

  const parsed = schema.safeParse(req.body ?? {})
  if (!parsed.success) return reply.status(400).send({ error: parsed.error.flatten() })
  if (!parsed.data.masterCharacterId && !parsed.data.masterCharacterName) {
    return reply.status(400).send({ error: 'Selecione ou crie um personagem mestre' })
  }

  const inviteCode = await generateInviteCode()

  try {
    const result = await prisma.$transaction(async (tx) => {
      let masterCharacter = parsed.data.masterCharacterId
        ? await tx.character.findUnique({
            where: { id: parsed.data.masterCharacterId },
            select: {
              id: true,
              userId: true,
              name: true,
              system: true,
              sheet: true,
              deletedAt: true,
              campaigns: { select: { id: true } },
            },
          })
        : null

      if (masterCharacter && masterCharacter.userId !== payload.id) throw new Error('CHARACTER_FORBIDDEN')
      if (masterCharacter && masterCharacter.deletedAt) throw new Error('CHARACTER_ARCHIVED')
      if (masterCharacter && masterCharacter.campaigns.length > 0) throw new Error('CHARACTER_ALREADY_LINKED')
      if (masterCharacter?.system && masterCharacter.system !== parsed.data.system) throw new Error('INCOMPATIBLE_SYSTEM')

      if (!masterCharacter) {
        masterCharacter = await tx.character.create({
          data: {
            userId: payload.id,
            name: parsed.data.masterCharacterName ?? 'Mestre',
            system: parsed.data.system,
          },
          select: {
            id: true,
            userId: true,
            name: true,
            system: true,
            sheet: true,
            deletedAt: true,
            campaigns: { select: { id: true } },
          },
        })
      }

      if (!masterCharacter.system) {
        masterCharacter = await tx.character.update({
          where: { id: masterCharacter.id },
          data: { system: parsed.data.system },
          select: {
            id: true,
            userId: true,
            name: true,
            system: true,
            sheet: true,
            deletedAt: true,
            campaigns: { select: { id: true } },
          },
        })
      }

      const campaign = await tx.campaign.create({
        data: {
          title: parsed.data.title,
          description: parsed.data.description?.trim() || null,
          inviteCode,
          system: parsed.data.system,
          joinPolicy: parsed.data.joinPolicy,
          createdByUserId: payload.id,
        },
        select: {
          id: true,
          title: true,
          description: true,
          inviteCode: true,
          system: true,
          joinPolicy: true,
          createdAt: true,
        },
      })

      await tx.campaignCharacter.create({
        data: {
          campaignId: campaign.id,
          characterId: masterCharacter.id,
          role: 'MASTER',
          status: 'ACTIVE',
          joinedAt: new Date(),
        },
      })

      return { campaign, masterCharacter }
    })

    return reply.status(201).send({
      ...result.campaign,
      gmName: result.masterCharacter.name,
      gmUserId: payload.id,
      myRole: 'MASTER',
      myCharacterId: result.masterCharacter.id,
      myCharacterName: result.masterCharacter.name,
      isOnline: false,
    })
  } catch (err) {
    const message = err instanceof Error ? err.message : ''
    if (message === 'CHARACTER_FORBIDDEN') return reply.status(403).send({ error: 'Personagem nao pertence ao usuario' })
    if (message === 'CHARACTER_ARCHIVED') return reply.status(400).send({ error: 'Personagem arquivado' })
    if (message === 'CHARACTER_ALREADY_LINKED') return reply.status(409).send({ error: 'Personagem ja esta vinculado' })
    if (message === 'INCOMPATIBLE_SYSTEM') return reply.status(409).send({ error: 'Sistema do personagem incompativel com a campanha' })
    throw err
  }
})

app.post('/api/campaigns/join', async (req, reply) => {
  const payload = requireAuth(req, reply)
  if (!payload) return

  const schema = z.object({
    inviteCode: z.string().trim().min(1),
    characterId: z.string().optional(),
    characterName: z.string().trim().min(1).max(80).optional(),
  })
  const parsed = schema.safeParse(req.body ?? {})
  if (!parsed.success) return reply.status(400).send({ error: parsed.error.flatten() })

  const inviteCode = parsed.data.inviteCode.toUpperCase()

  try {
    const result = await prisma.$transaction(async (tx) => {
      const campaign = await tx.campaign.findUnique({
        where: { inviteCode },
        select: {
          id: true,
          title: true,
          description: true,
          inviteCode: true,
          system: true,
          joinPolicy: true,
          createdAt: true,
          characters: {
            where: { role: 'MASTER', status: 'ACTIVE' },
            select: { character: { select: { userId: true, name: true } } },
            take: 1,
          },
        },
      })
      if (!campaign) throw Object.assign(new Error('CAMPAIGN_NOT_FOUND'), { statusCode: 404 })
      if (!isCampaignOnline(campaign.id)) throw Object.assign(new Error('MASTER_OFFLINE'), { statusCode: 409 })

      let character = parsed.data.characterId
        ? await tx.character.findUnique({
            where: { id: parsed.data.characterId },
            select: {
              id: true,
              userId: true,
              name: true,
              system: true,
              deletedAt: true,
              campaigns: { select: { id: true } },
            },
          })
        : null

      if (character && character.userId !== payload.id) throw Object.assign(new Error('CHARACTER_FORBIDDEN'), { statusCode: 403 })
      if (character && character.deletedAt) throw Object.assign(new Error('CHARACTER_ARCHIVED'), { statusCode: 400 })
      if (character && character.campaigns.length > 0) throw Object.assign(new Error('CHARACTER_ALREADY_LINKED'), { statusCode: 409 })
      if (character?.system && character.system !== campaign.system) throw Object.assign(new Error('INCOMPATIBLE_SYSTEM'), { statusCode: 409 })

      if (!character) {
        if (!parsed.data.characterName) return { campaign, status: 'PENDING' as const, missingCharacterName: true }
        character = await tx.character.create({
          data: {
            userId: payload.id,
            name: parsed.data.characterName,
            system: campaign.system,
          },
          select: {
            id: true,
            userId: true,
            name: true,
            system: true,
            deletedAt: true,
            campaigns: { select: { id: true } },
          },
        })
      }

      if (!character.system) {
        character = await tx.character.update({
          where: { id: character.id },
          data: { system: campaign.system },
          select: {
            id: true,
            userId: true,
            name: true,
            system: true,
            deletedAt: true,
            campaigns: { select: { id: true } },
          },
        })
      }

      const status = campaign.joinPolicy === 'PUBLIC' ? 'ACTIVE' : 'PENDING'
      const campaignCharacter = await tx.campaignCharacter.create({
        data: {
          campaignId: campaign.id,
          characterId: character.id,
          role: 'PLAYER',
          status,
          joinedAt: status === 'ACTIVE' ? new Date() : null,
        },
        select: { status: true, characterId: true },
      })

      const master = campaign.characters[0]?.character ?? null
      if (status === 'PENDING' && master?.userId) {
        io.to(`user:${master.userId}`).emit('campaign:join-requested', {
          campaignId: campaign.id,
          userId: payload.id,
          email: payload.email,
          characterName: character.name,
          createdAt: new Date().toISOString(),
        })
      }

      return { campaign, status: campaignCharacter.status, characterId: campaignCharacter.characterId }
    })

    const master = result.campaign.characters[0]?.character ?? null
    return reply.send({
      id: result.campaign.id,
      title: result.campaign.title,
      description: result.campaign.description,
      inviteCode: result.campaign.inviteCode,
      system: result.campaign.system,
      joinPolicy: result.campaign.joinPolicy,
      createdAt: result.campaign.createdAt,
      gmName: master?.name ?? 'Mestre',
      gmUserId: master?.userId ?? '',
      myRole: 'PLAYER',
      status: result.status,
      characterId: result.characterId ?? null,
      missingCharacterName: 'missingCharacterName' in result ? result.missingCharacterName : false,
    })
  } catch (err: any) {
    const status = Number(err?.statusCode ?? 500)
    if (status === 404) return reply.status(404).send({ error: 'Campanha nao encontrada' })
    if (status === 403) return reply.status(403).send({ error: 'Personagem nao pertence ao usuario' })
    if (status === 400) return reply.status(400).send({ error: 'Personagem arquivado' })
    if (status === 409) return reply.status(409).send({ error: err?.message === 'MASTER_OFFLINE' ? 'Mestre offline' : 'Conflito ao entrar na campanha' })
    req.log.error({ err }, 'Erro ao entrar na campanha')
    return reply.status(500).send({ error: 'Erro ao entrar na campanha' })
  }
})

app.get('/api/campaigns/:campaignId/my-character', async (req, reply) => {
  const payload = requireAuth(req, reply)
  if (!payload) return
  const params = req.params as { campaignId: string }

  const campaignCharacter = await prisma.campaignCharacter.findFirst({
    where: {
      campaignId: params.campaignId,
      status: 'ACTIVE',
      role: { in: ['MASTER', 'PLAYER'] },
      character: { userId: payload.id },
    },
    select: {
      role: true,
      status: true,
      character: {
        select: {
          id: true,
          name: true,
        },
      },
    },
  })

  if (!campaignCharacter) {
    return reply.status(403).send({ error: 'Acesso nao liberado' })
  }

  if (campaignCharacter.role === 'PLAYER' && !isCampaignOnline(params.campaignId)) {
    return reply.status(409).send({ error: 'Mestre offline' })
  }

  return reply.send({
    id: campaignCharacter.character.id,
    name: campaignCharacter.character.name,
    role: campaignCharacter.role,
    status: campaignCharacter.status,
  })
})

app.patch('/api/campaigns/:campaignId/settings', async (req, reply) => {
  const payload = requireAuth(req, reply)
  if (!payload) return

  const params = req.params as { campaignId: string }
  const schema = z.object({
    joinPolicy: z.enum(['PUBLIC', 'PRIVATE']),
  })
  const parsed = schema.safeParse(req.body ?? {})
  if (!parsed.success) return reply.status(400).send({ error: parsed.error.flatten() })

  const master = await prisma.campaignCharacter.findFirst({
    where: {
      campaignId: params.campaignId,
      role: 'MASTER',
      status: 'ACTIVE',
      character: { userId: payload.id },
    },
    select: { id: true },
  })
  if (!master) return reply.status(403).send({ error: 'Apenas o mestre pode alterar' })

  const updated = await prisma.campaign.update({
    where: { id: params.campaignId },
    data: { joinPolicy: parsed.data.joinPolicy },
    select: { id: true, joinPolicy: true },
  })

  return reply.send(updated)
})

app.get('/api/campaigns/:campaignId/players', async (req, reply) => {
  const payload = requireAuth(req, reply)
  if (!payload) return
  const params = req.params as { campaignId: string }

  const access = await prisma.campaignCharacter.findFirst({
    where: {
      campaignId: params.campaignId,
      status: 'ACTIVE',
      character: { userId: payload.id },
    },
    select: { role: true },
  })
  if (!access) return reply.status(403).send({ error: 'Acesso nao liberado' })

  const isMaster = access.role === 'MASTER'
  const entries = await prisma.campaignCharacter.findMany({
    where: {
      campaignId: params.campaignId,
      ...(isMaster ? {} : { status: 'ACTIVE' as const }),
    },
    select: {
      role: true,
      status: true,
      characterId: true,
      createdAt: true,
      updatedAt: true,
      character: {
        select: {
          userId: true,
          name: true,
          user: { select: { email: true } },
        },
      },
    },
    orderBy: { createdAt: 'asc' },
  })

  return reply.send(
    entries.map((entry) => ({
      userId: entry.character.userId,
      email: entry.character.user.email,
      role: entry.role,
      status: entry.status,
      characterId: entry.characterId,
      characterName: entry.character.name,
      createdAt: entry.createdAt,
      decidedAt: entry.status === 'PENDING' ? null : entry.updatedAt,
    })),
  )
})

app.post('/api/campaigns/:campaignId/players/:userId/approve', async (req, reply) => {
  const payload = requireAuth(req, reply)
  if (!payload) return
  const params = req.params as { campaignId: string; userId: string }

  const master = await prisma.campaignCharacter.findFirst({
    where: {
      campaignId: params.campaignId,
      role: 'MASTER',
      status: 'ACTIVE',
      character: { userId: payload.id },
    },
    select: { id: true },
  })
  if (!master) return reply.status(403).send({ error: 'Apenas o mestre pode aprovar' })

  const target = await prisma.campaignCharacter.findFirst({
    where: {
      campaignId: params.campaignId,
      role: 'PLAYER',
      character: { userId: params.userId },
    },
    select: { id: true },
  })
  if (!target) return reply.status(404).send({ error: 'Solicitacao nao encontrada' })

  const updated = await prisma.campaignCharacter.update({
    where: { id: target.id },
    data: { status: 'ACTIVE', joinedAt: new Date() },
    select: { campaignId: true, character: { select: { userId: true } } },
  })

  io.to(`user:${updated.character.userId}`).emit('campaign:join-approved', {
    campaignId: updated.campaignId,
    message: 'Sua solicitacao foi aprovada',
  })

  return reply.send({ ok: true })
})

app.post('/api/campaigns/:campaignId/players/:userId/reject', async (req, reply) => {
  const payload = requireAuth(req, reply)
  if (!payload) return
  const params = req.params as { campaignId: string; userId: string }

  const master = await prisma.campaignCharacter.findFirst({
    where: {
      campaignId: params.campaignId,
      role: 'MASTER',
      status: 'ACTIVE',
      character: { userId: payload.id },
    },
    select: { id: true },
  })
  if (!master) return reply.status(403).send({ error: 'Apenas o mestre pode recusar' })

  const target = await prisma.campaignCharacter.findFirst({
    where: {
      campaignId: params.campaignId,
      role: 'PLAYER',
      character: { userId: params.userId },
    },
    select: { id: true },
  })
  if (!target) return reply.status(404).send({ error: 'Solicitacao nao encontrada' })

  const updated = await prisma.campaignCharacter.update({
    where: { id: target.id },
    data: { status: 'REJECTED' },
    select: { campaignId: true, character: { select: { userId: true } } },
  })

  io.to(`user:${updated.character.userId}`).emit('campaign:join-rejected', {
    campaignId: updated.campaignId,
    message: 'Sua solicitacao foi recusada',
  })

  return reply.send({ ok: true })
})


app.post('/api/items/trade', async (req, reply) => {
  const fromUser = requireAuth(req, reply)
  if (!fromUser) return

  const body = (req.body ?? {}) as {
    campaignId?: string
    toUserId?: string
    item?: any
  }

  if (!body.toUserId) return reply.status(400).send({ error: 'toUserId obrigatório' })

  io.to(`user:${body.toUserId}`).emit('trade:received', {
    campaignId: body.campaignId ?? null,
    fromUserId: fromUser.id,
    item: body.item ?? null,
    createdAt: new Date().toISOString(),
  })

  return reply.send({ success: true })
})

await app.listen({ port: Number(process.env.PORT ?? 3001), host: '0.0.0.0' })



