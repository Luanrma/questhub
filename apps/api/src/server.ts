import Fastify from 'fastify'
import cors from '@fastify/cors'
import cookiePlugin from '@fastify/cookie'
import { Server as SocketIOServer } from 'socket.io'
import cookie from 'cookie'
import { signToken, verifyToken } from './auth/jwt'

const app = Fastify({ logger: true })

await app.register(cors, {
  origin: process.env.WEB_ORIGIN ?? true,
  credentials: true,
})

await app.register(cookiePlugin)

const TOKEN_COOKIE = 'token'

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

app.post('/api/sign-in', async (req, reply) => {
  const body = (req.body ?? {}) as { email?: string; password?: string }
  const email = body.email ?? ''
  const password = body.password ?? ''

  const devPassword = process.env.DEV_USER_PASSWORD ?? 'dev'
  if (password !== devPassword) {
    return reply.status(401).send({ error: 'Credenciais inválidas' })
  }

  // DEV: id = email (pra facilitar testar 2 usuários)
  const token = signToken({
    id: email,
    name: email.split('@')[0] || 'Dev',
    email,
    type: 'ADMIN',
  })

  reply.setCookie(TOKEN_COOKIE, token, {
    httpOnly: true,
    sameSite: 'lax',
    secure: process.env.NODE_ENV === 'production',
    path: '/',
    maxAge: 60 * 60 * 24 * 7,
  })

  return reply.send({ message: 'Login realizado com sucesso' })
})

app.get('/api/me', async (req, reply) => {
  const token = (req.cookies as any)?.[TOKEN_COOKIE]
  if (!token) return reply.status(401).send({ error: 'Não autenticado' })

  const user = verifyToken(token)
  if (!user) return reply.status(401).send({ error: 'Não autenticado' })

  return reply.send(user)
})

app.post('/api/logout', async (_req, reply) => {
  reply.setCookie(TOKEN_COOKIE, '', {
    httpOnly: true,
    sameSite: 'lax',
    secure: process.env.NODE_ENV === 'production',
    path: '/',
    maxAge: 0,
  })
  return reply.send({ message: 'Logout realizado com sucesso' })
})

/**
 * Endpoint que dispara notificação realtime
 * Mantive o path parecido com seu caso anterior.
 */
app.post('/api/items/trade', async (req, reply) => {
  const fromToken = (req.cookies as any)?.[TOKEN_COOKIE]
  const fromUser = fromToken ? verifyToken(fromToken) : null
  if (!fromUser) return reply.status(401).send({ error: 'Não autenticado' })

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