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

await app.register(cors, {
  origin: process.env.WEB_ORIGIN ?? true,
  credentials: true,
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

async function generateInviteCode() {
  // 8 chars, alfanumérico em maiúsculo (ex.: "A1B2C3D4")
  for (let i = 0; i < 5; i++) {
    const code = crypto.randomBytes(6).toString('base64url').slice(0, 8).toUpperCase()
    const exists = await prisma.campaign.findUnique({ where: { inviteCode: code } })
    if (!exists) return code
  }
  // fallback
  return crypto.randomBytes(12).toString('hex').slice(0, 10).toUpperCase()
}

/** Socket.IO */
const io = new SocketIOServer(app.server, {
  cors: {
    origin: process.env.WEB_ORIGIN ?? 'http://localhost:5173',
    credentials: true,
  },
})

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

  // (opcional) entrar em campanha via evento
  socket.on('campaign:join', ({ campaignId }: { campaignId: string }) => {
    socket.join(`campaign:${campaignId}`)
    socket.emit('campaign:joined', { campaignId })
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
    where: { userId: payload.id, active: true },
    select: { role: true, campaign: { select: { id: true, title: true, description: true, inviteCode: true, gmName: true, gmUserId: true, createdAt: true } } },
    orderBy: { createdAt: 'desc' },
  })

  // Também inclui campanhas onde o usuário é GM (caso ainda não tenha membership por algum motivo)
  const gmCampaigns = await prisma.campaign.findMany({
    where: { gmUserId: payload.id },
    select: { id: true, title: true, description: true, inviteCode: true, gmName: true, gmUserId: true, createdAt: true },
    orderBy: { createdAt: 'desc' },
  })

  const byId = new Map<string, any>()
  for (const m of memberships) {
    byId.set(m.campaign.id, { ...m.campaign, role: m.role })
  }
  for (const c of gmCampaigns) {
    if (!byId.has(c.id)) byId.set(c.id, { ...c, role: 'GM' })
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

  const campaign = await prisma.campaign.create({
    data: {
      title: parsed.data.title,
      description: parsed.data.description,
      inviteCode,
      gmName: parsed.data.gmName,
      gmUserId: payload.id,
      members: {
        create: { userId: payload.id, role: 'GM' },
      },
    },
    select: { id: true, title: true, description: true, inviteCode: true, gmName: true, gmUserId: true, createdAt: true },
  })

  return reply.status(201).send({ ...campaign, role: 'GM' })
})

app.post('/api/campaigns/join', async (req, reply) => {
  const payload = requireAuth(req, reply)
  if (!payload) return

  const schema = z.object({ inviteCode: z.string().min(1) })
  const parsed = schema.safeParse(req.body ?? {})
  if (!parsed.success) return reply.status(400).send({ error: 'inviteCode obrigatório' })

  const inviteCode = parsed.data.inviteCode.trim().toUpperCase()
  const campaign = await prisma.campaign.findUnique({
    where: { inviteCode },
    select: { id: true, title: true, description: true, inviteCode: true, gmName: true, gmUserId: true, createdAt: true },
  })
  if (!campaign) return reply.status(404).send({ error: 'Campanha não encontrada' })

  const role = campaign.gmUserId === payload.id ? 'GM' : 'PLAYER'

  await prisma.campaignMember.upsert({
    where: { campaignId_userId: { campaignId: campaign.id, userId: payload.id } },
    update: { active: true, role },
    create: { campaignId: campaign.id, userId: payload.id, role },
  })

  return reply.send({ ...campaign, role })
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
