import type { FastifyInstance } from 'fastify'
import bcrypt from 'bcryptjs'
import { z } from 'zod'
import { signToken } from '../../auth/jwt'
import { prisma } from '../../db/prisma'
import { clearAuthCookie, requireAuth, setAuthCookie } from '../../http/auth'

export function registerAuthRoutes(app: FastifyInstance) {
  app.post('/api/register', async (req, reply) => {
    const schema = z.object({
      email: z.string().email('Email invalido'),
      password: z.string().min(8, 'Senha deve ter no minimo 8 caracteres'),
    })

    const parsed = schema.safeParse(req.body ?? {})
    if (!parsed.success) return reply.status(400).send({ error: parsed.error.flatten() })

    const { email, password } = parsed.data

    const exists = await prisma.user.findUnique({ where: { email } })
    if (exists) return reply.status(409).send({ error: 'Email ja cadastrado' })

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
    if (!parsed.success) return reply.status(400).send({ error: 'Dados invalidos' })

    const { email, password } = parsed.data

    const user = await prisma.user.findUnique({ where: { email } })
    if (!user) return reply.status(401).send({ error: 'Credenciais invalidas' })

    const ok = await bcrypt.compare(password, user.passwordHash)
    if (!ok) return reply.status(401).send({ error: 'Credenciais invalidas' })

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

    const user = await prisma.user.findUnique({
      where: { id: payload.id },
      select: { id: true, email: true, createdAt: true },
    })
    if (!user) return reply.status(401).send({ error: 'Nao autenticado' })

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
}
