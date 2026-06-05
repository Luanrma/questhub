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
import type { CampaignJoinPolicy, CampaignMemberStatus, CharacterRole } from '@prisma/client'

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

      // valida que o usuário tem acesso (membership ACTIVE)
      const member = await prisma.campaignMember.findUnique({
        where: { campaignId_userId: { campaignId, userId: user.id } },
        select: { status: true },
      })
      if (!member || member.status !== 'ACTIVE') {
        socket.emit('presence:error', { message: 'Acesso não liberado' })
        return
      }

      const character = await prisma.character.findUnique({
        where: { id: characterId },
        select: { id: true, userId: true, campaignId: true, role: true, status: true },
      })
      if (!character || character.userId !== user.id || character.campaignId !== campaignId) return
      if (character.role === 'NPC') return
      if (character.status !== 'ACTIVE') return

      // Regra: jogador só entra se o mestre estiver online na campanha
      if (character.role === 'PLAYER' && !isCampaignOnline(campaignId)) {
        socket.emit('presence:error', { message: 'Mestre offline' })
        return
      }

      // Força regra: um usuário só pode estar em 1 campanha por vez.
      const prev = userPresence.get(user.id)
      if (prev && prev.socketId !== socket.id) {
        const prevSocket = io.sockets.sockets.get(prev.socketId)
        prevSocket?.disconnect(true)
      }

      // Sai da sala anterior deste socket, se houver
      const prevCampaignId = (socket.data as any).campaignId as string | undefined
      const prevCharacterId = (socket.data as any).characterId as string | undefined
      const prevRole = (socket.data as any).characterRole as CharacterRole | undefined
      if (prevCampaignId) {
        socket.leave(`campaign:${prevCampaignId}`)
        io.to(`campaign:${prevCampaignId}`).emit('presence:update', {
          campaignId: prevCampaignId,
          characterId: prevCharacterId ?? null,
          online: false,
        })

        // Se o mestre estava ativo nessa campanha e mudou para outra, derruba os players e marca offline
        if (prevRole === 'MASTER') {
          const online = campaignOnline.get(prevCampaignId)
          if (online?.masterSocketId === socket.id) {
            campaignOnline.delete(prevCampaignId)

            prisma.campaignMember
              .findMany({ where: { campaignId: prevCampaignId, status: 'ACTIVE' }, select: { userId: true } })
              .then((members) => {
                for (const m of members) {
                  io.to(`user:${m.userId}`).emit('campaign:status', { campaignId: prevCampaignId, online: false })
                }
              })
              .catch(() => {})

            io.in(`campaign:${prevCampaignId}`)
              .fetchSockets()
              .then((sockets) => {
                for (const s of sockets) {
                  const sRole = (s.data as any).characterRole as CharacterRole | undefined
                  if (sRole === 'PLAYER') {
                    s.emit('campaign:kicked', { campaignId: prevCampaignId, message: 'Mestre saiu da campanha' })
                    s.leave(`campaign:${prevCampaignId}`)
                  }
                }
              })
              .catch(() => {})
          }
        }
      }

      ;(socket.data as any).campaignId = campaignId
      ;(socket.data as any).characterId = characterId
      ;(socket.data as any).characterRole = character.role
      socket.join(`campaign:${campaignId}`)
      userPresence.set(user.id, { socketId: socket.id, campaignId, characterId })

      // Se for o mestre, marca campanha como online e avisa todo mundo (dashboard)
      if (character.role === 'MASTER') {
        campaignOnline.set(campaignId, { masterSocketId: socket.id, masterUserId: user.id, masterCharacterId: characterId })
        const members = await prisma.campaignMember.findMany({
          where: { campaignId, status: 'ACTIVE' },
          select: { userId: true },
        })
        for (const m of members) {
          io.to(`user:${m.userId}`).emit('campaign:status', { campaignId, online: true })
        }
      }

      io.to(`campaign:${campaignId}`).emit('presence:update', {
        campaignId,
        characterId,
        online: true,
      })
    } catch (err) {
      ;(socket as any).log?.error?.(err)
    }
  })

  socket.on('disconnect', () => {
    const prev = userPresence.get(user.id)
    if (prev?.socketId === socket.id) {
      const role = (socket.data as any).characterRole as CharacterRole | undefined

      // Se o mestre saiu, marca campanha offline e "expulsa" os players
      if (role === 'MASTER') {
        const online = campaignOnline.get(prev.campaignId)
        if (online?.masterSocketId === socket.id) {
          campaignOnline.delete(prev.campaignId)

          prisma.campaignMember
            .findMany({ where: { campaignId: prev.campaignId, status: 'ACTIVE' }, select: { userId: true } })
            .then((members) => {
              for (const m of members) {
                io.to(`user:${m.userId}`).emit('campaign:status', { campaignId: prev.campaignId, online: false })
              }
            })
            .catch(() => {})

          io.in(`campaign:${prev.campaignId}`)
            .fetchSockets()
            .then((sockets) => {
              for (const s of sockets) {
                const sRole = (s.data as any).characterRole as CharacterRole | undefined
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

app.get('/api/campaigns', async (req, reply) => {
  const payload = requireAuth(req, reply)
  if (!payload) return

  const memberships = await prisma.campaignMember.findMany({
    where: { userId: payload.id, status: 'ACTIVE' },
    select: {
      status: true,
      campaign: {
        select: { id: true, title: true, description: true, inviteCode: true, gmName: true, gmUserId: true, joinPolicy: true, createdAt: true },
      },
      character: { select: { role: true, name: true } },
    },
    orderBy: { createdAt: 'desc' },
  })

  // Também inclui campanhas onde o usuário é GM (caso ainda não tenha membership por algum motivo)
  const gmCampaigns = await prisma.campaign.findMany({
    where: { gmUserId: payload.id },
    select: { id: true, title: true, description: true, inviteCode: true, gmName: true, gmUserId: true, joinPolicy: true, createdAt: true },
    orderBy: { createdAt: 'desc' },
  })

  const byId = new Map<string, any>()
  for (const m of memberships) {
    byId.set(m.campaign.id, {
      ...m.campaign,
      myRole: m.character?.role ?? (m.campaign.gmUserId === payload.id ? 'MASTER' : 'PLAYER'),
      myCharacterName: m.character?.name ?? null,
      isOnline: isCampaignOnline(m.campaign.id),
    })
  }
  for (const c of gmCampaigns) {
    if (!byId.has(c.id))
      byId.set(c.id, { ...c, myRole: 'MASTER', myCharacterName: c.gmName, isOnline: isCampaignOnline(c.id) })
  }

  return reply.send(Array.from(byId.values()))
})

app.post('/api/campaigns', async (req, reply) => {
  const payload = requireAuth(req, reply)
  if (!payload) return

  const schema = z.object({
    gmName: z.string().min(1, 'Nome do mestre é obrigatório'),
    title: z.string().min(1, 'Título é obrigatório'),
    description: z.string().optional(),
  })
  const parsed = schema.safeParse(req.body ?? {})
  if (!parsed.success) return reply.status(400).send({ error: parsed.error.flatten() })

  const inviteCode = await generateInviteCode()

  const result = await prisma.$transaction(async (tx) => {
    const campaign = await tx.campaign.create({
      data: {
        title: parsed.data.title,
        description: parsed.data.description,
        inviteCode,
        gmName: parsed.data.gmName,
        gmUserId: payload.id,
        joinPolicy: 'PUBLIC',
      },
      select: { id: true, title: true, description: true, inviteCode: true, gmName: true, gmUserId: true, joinPolicy: true, createdAt: true },
    })

    // Cria personagem do mestre (MASTER)
    const gmCharacter = await tx.character.create({
      data: {
        campaignId: campaign.id,
        userId: payload.id,
        name: parsed.data.gmName,
        role: 'MASTER',
        status: 'ACTIVE',
      },
      select: { id: true, name: true },
    })

    await tx.campaignMember.create({
      data: { campaignId: campaign.id, userId: payload.id, status: 'ACTIVE', characterId: gmCharacter.id },
    })

    return { campaign, gmCharacter }
  })

  return reply.status(201).send({ ...result.campaign, myRole: 'MASTER', myCharacterId: result.gmCharacter.id })
})

app.post('/api/campaigns/join', async (req, reply) => {
  const payload = requireAuth(req, reply)
  if (!payload) return

  const schema = z.object({
    inviteCode: z.string().min(1),
    characterName: z.string().min(1, 'Nome do personagem é obrigatório').optional(),
  })
  const parsed = schema.safeParse(req.body ?? {})
  if (!parsed.success) return reply.status(400).send({ error: 'inviteCode obrigatório' })

  const inviteCode = parsed.data.inviteCode.trim().toUpperCase()
  const characterName = (parsed.data.characterName ?? '').trim()
  try {
    const result = await prisma.$transaction(async (tx) => {
      const campaign = await tx.campaign.findUnique({
        where: { inviteCode },
        select: {
          id: true,
          title: true,
          description: true,
          inviteCode: true,
          gmName: true,
          gmUserId: true,
          joinPolicy: true,
          createdAt: true,
        },
      })
      if (!campaign) {
        const err: any = new Error('Campanha não encontrada')
        err.statusCode = 404
        throw err
      }

      // MASTER entra sempre (caso use o invite)
      const myRole: CharacterRole = campaign.gmUserId === payload.id ? 'MASTER' : 'PLAYER'

      // Player só pode entrar/solicitar se o mestre estiver online
      if (myRole === 'PLAYER' && !isCampaignOnline(campaign.id)) {
        const err: any = new Error('Mestre offline')
        err.statusCode = 409
        throw err
      }

      const existing = await tx.campaignMember.findUnique({
        where: { campaignId_userId: { campaignId: campaign.id, userId: payload.id } },
        select: { id: true, status: true, characterId: true },
      })

      // Se já está ativo, ok.
      if (existing?.status === 'ACTIVE') {
        return { campaign, myRole, status: 'ACTIVE' as CampaignMemberStatus, characterId: existing.characterId }
      }

      // Se já foi recusado, mantém recusado (GM pode aprovar depois)
      if (existing?.status === 'REJECTED') {
        return { campaign, myRole, status: 'REJECTED' as CampaignMemberStatus, characterId: existing.characterId }
      }

      // Para PLAYER, precisa informar o nome do personagem na primeira entrada
      if (myRole === 'PLAYER' && !characterName) {
        return { campaign, myRole, status: 'PENDING' as CampaignMemberStatus, missingCharacterName: true }
      }

      // Cria (ou reutiliza) o personagem associado à solicitação/entrada (PC)
      let memberCharacterId: string | null = existing?.characterId ?? null
      if (!memberCharacterId) {
        const createdChar = await tx.character.create({
          data: {
            campaignId: campaign.id,
            userId: payload.id,
            name: myRole === 'MASTER' ? campaign.gmName : characterName,
            role: myRole,
            status: 'ACTIVE', // pode virar PENDING abaixo
          },
          select: { id: true },
        })
        memberCharacterId = createdChar.id
      }

      // campanha pública: entra direto (ACTIVE)
      if (myRole === 'MASTER' || campaign.joinPolicy === 'PUBLIC') {
        if (existing) {
          await tx.campaignMember.update({
            where: { id: existing.id },
            data: { status: 'ACTIVE', characterId: memberCharacterId },
          })
        } else {
          await tx.campaignMember.create({
            data: { campaignId: campaign.id, userId: payload.id, status: 'ACTIVE', characterId: memberCharacterId },
          })
        }

        await tx.character.update({
          where: { id: memberCharacterId },
          data: { status: 'ACTIVE', role: myRole, name: myRole === 'MASTER' ? campaign.gmName : characterName || undefined },
        })

        return { campaign, myRole, status: 'ACTIVE' as CampaignMemberStatus, characterId: memberCharacterId }
      }

      // campanha privada: cria solicitação (PENDING)
      if (existing) {
        await tx.campaignMember.update({
          where: { id: existing.id },
          data: { status: 'PENDING', characterId: memberCharacterId },
        })
      } else {
        await tx.campaignMember.create({
          data: { campaignId: campaign.id, userId: payload.id, status: 'PENDING', characterId: memberCharacterId },
        })
      }

      await tx.character.update({
        where: { id: memberCharacterId },
        data: { status: 'PENDING', role: myRole, name: characterName || undefined },
      })

      // notifica o GM
      io.to(`user:${campaign.gmUserId}`).emit('campaign:join-requested', {
        campaignId: campaign.id,
        userId: payload.id,
        email: payload.email,
        characterName: characterName || undefined,
        createdAt: new Date().toISOString(),
      })

      return { campaign, myRole, status: 'PENDING' as CampaignMemberStatus, characterId: memberCharacterId }
    })

    return reply.send({
      ...result.campaign,
      myRole: (result as any).myRole ?? null,
      status: result.status,
      characterId: (result as any).characterId ?? null,
      missingCharacterName: (result as any).missingCharacterName ?? false,
    })
  } catch (err: any) {
    const status = Number(err?.statusCode ?? 500)
    if (status === 404) return reply.status(404).send({ error: 'Campanha não encontrada' })
    if (status === 409) return reply.status(409).send({ error: err?.message ?? 'Mestre offline' })
    req.log.error({ err }, 'Erro ao entrar na campanha')
    return reply.status(500).send({ error: 'Erro ao entrar na campanha' })
  }
})

app.get('/api/campaigns/:campaignId/my-character', async (req, reply) => {
  const payload = requireAuth(req, reply)
  if (!payload) return
  const params = req.params as { campaignId: string }

  const membership = await prisma.campaignMember.findUnique({
    where: { campaignId_userId: { campaignId: params.campaignId, userId: payload.id } },
    select: { status: true, characterId: true, character: { select: { role: true } } },
  })

  if (!membership || membership.status !== 'ACTIVE') {
    return reply.status(403).send({ error: 'Acesso não liberado' })
  }

  // Regra: PLAYER só acessa campanha se o mestre estiver online
  if (membership.character?.role === 'PLAYER' && !isCampaignOnline(params.campaignId)) {
    return reply.status(409).send({ error: 'Mestre offline' })
  }

  // se tiver characterId já associado, usa ele
  if (membership.characterId) {
    const ch = await prisma.character.findUnique({
      where: { id: membership.characterId },
      select: { id: true, name: true, role: true, status: true },
    })
    if (ch) return reply.send(ch)
  }

  const ch = await prisma.character.findFirst({
    where: { campaignId: params.campaignId, userId: payload.id, role: { in: ['MASTER', 'PLAYER'] }, status: 'ACTIVE' },
    orderBy: { createdAt: 'asc' },
    select: { id: true, name: true, role: true, status: true },
  })
  if (!ch) return reply.status(404).send({ error: 'Personagem não encontrado' })

  return reply.send(ch)
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

  const campaign = await prisma.campaign.findUnique({
    where: { id: params.campaignId },
    select: { id: true, gmUserId: true, joinPolicy: true },
  })
  if (!campaign) return reply.status(404).send({ error: 'Campanha não encontrada' })
  if (campaign.gmUserId !== payload.id) {
    // fallback: se por algum motivo gmUserId não bater, valida por membership GM
    const m = await prisma.campaignMember.findUnique({
      where: { campaignId_userId: { campaignId: params.campaignId, userId: payload.id } },
      select: { status: true, character: { select: { role: true } } },
    })
    if (!m || m.character?.role !== 'MASTER' || m.status !== 'ACTIVE') {
      return reply.status(403).send({ error: 'Apenas o mestre pode alterar' })
    }
  }

  const updated = await prisma.campaign.update({
    where: { id: params.campaignId },
    data: { joinPolicy: parsed.data.joinPolicy as CampaignJoinPolicy },
    select: { id: true, joinPolicy: true },
  })

  return reply.send(updated)
})

app.get('/api/campaigns/:campaignId/players', async (req, reply) => {
  const payload = requireAuth(req, reply)
  if (!payload) return
  const params = req.params as { campaignId: string }

  const campaign = await prisma.campaign.findUnique({
    where: { id: params.campaignId },
    select: { id: true, gmUserId: true },
  })
  if (!campaign) return reply.status(404).send({ error: 'Campanha não encontrada' })

  // GM pode ver tudo; player só vê ACTIVE
  const isGM = campaign.gmUserId === payload.id

  const members = await prisma.campaignMember.findMany({
    where: {
      campaignId: params.campaignId,
      ...(isGM ? {} : { status: 'ACTIVE' }),
    },
    select: {
      userId: true,
      status: true,
      characterId: true,
      createdAt: true,
      decidedAt: true,
      user: { select: { email: true } },
      character: { select: { id: true, name: true, role: true } },
    },
    orderBy: { createdAt: 'asc' },
  })

  return reply.send(
    members.map((m) => ({
      userId: m.userId,
      email: m.user.email,
      role: m.character?.role ?? null,
      status: m.status,
      characterId: m.characterId,
      characterName: m.character?.name ?? null,
      createdAt: m.createdAt,
      decidedAt: m.decidedAt,
    })),
  )
})

app.post('/api/campaigns/:campaignId/players/:userId/approve', async (req, reply) => {
  const payload = requireAuth(req, reply)
  if (!payload) return
  const params = req.params as { campaignId: string; userId: string }

  const campaign = await prisma.campaign.findUnique({
    where: { id: params.campaignId },
    select: { id: true, gmUserId: true, title: true },
  })
  if (!campaign) return reply.status(404).send({ error: 'Campanha não encontrada' })
  if (campaign.gmUserId !== payload.id) return reply.status(403).send({ error: 'Apenas o mestre pode aprovar' })

  const member = await prisma.campaignMember.findUnique({
    where: { campaignId_userId: { campaignId: params.campaignId, userId: params.userId } },
    select: { id: true, status: true },
  })
  if (!member) return reply.status(404).send({ error: 'Solicitação não encontrada' })

  const updated = await prisma.campaignMember.update({
    where: { id: member.id },
    data: { status: 'ACTIVE', decidedAt: new Date() },
    select: { userId: true, campaignId: true, status: true, characterId: true },
  })

  if (updated.characterId) {
    await prisma.character.update({
      where: { id: updated.characterId },
      data: { status: 'ACTIVE' },
    })
  }

  io.to(`user:${updated.userId}`).emit('campaign:join-approved', {
    campaignId: updated.campaignId,
    message: 'Sua solicitação foi aprovada',
  })

  return reply.send({ ok: true })
})

app.post('/api/campaigns/:campaignId/players/:userId/reject', async (req, reply) => {
  const payload = requireAuth(req, reply)
  if (!payload) return
  const params = req.params as { campaignId: string; userId: string }

  const campaign = await prisma.campaign.findUnique({
    where: { id: params.campaignId },
    select: { id: true, gmUserId: true },
  })
  if (!campaign) return reply.status(404).send({ error: 'Campanha não encontrada' })
  if (campaign.gmUserId !== payload.id) return reply.status(403).send({ error: 'Apenas o mestre pode recusar' })

  const member = await prisma.campaignMember.findUnique({
    where: { campaignId_userId: { campaignId: params.campaignId, userId: params.userId } },
    select: { id: true, status: true },
  })
  if (!member) return reply.status(404).send({ error: 'Solicitação não encontrada' })

  const updated = await prisma.campaignMember.update({
    where: { id: member.id },
    data: { status: 'REJECTED', decidedAt: new Date() },
    select: { userId: true, campaignId: true, status: true, characterId: true },
  })

  if (updated.characterId) {
    await prisma.character.update({
      where: { id: updated.characterId },
      data: { status: 'REJECTED' },
    })
  }

  io.to(`user:${updated.userId}`).emit('campaign:join-rejected', {
    campaignId: updated.campaignId,
    message: 'Sua solicitação foi recusada',
  })

  return reply.send({ ok: true })
})

/**
 * Endpoint que dispara notificação realtime
 * Mantive o path parecido com seu caso anterior.
 */
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
