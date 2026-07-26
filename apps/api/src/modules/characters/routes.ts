import type { FastifyInstance } from 'fastify'
import { z } from 'zod'
import { prisma } from '../../db/prisma'
import { requireAuth } from '../../http/auth'
import { presentCharacter } from './presenter'
import { updateCharacterSchema } from './validation'

const characterSelect = {
  id: true,
  name: true,
  avatarUrl: true,
  bio: true,
  gameSystem: true,
  createdAt: true,
  updatedAt: true,
  campaigns: {
    select: {
      id: true,
      role: true,
      status: true,
      campaign: { select: { id: true, title: true, gameSystem: true } },
    },
  },
} as const

export function registerCharacterRoutes(app: FastifyInstance) {
  app.post('/api/characters', async (req, reply) => {
    const payload = requireAuth(req, reply)
    if (!payload) return

    return reply.status(403).send({
      error: 'Fichas sao criadas somente pelo Mestre dentro de uma campanha',
    })
  })

  app.get('/api/characters/:characterId', async (req, reply) => {
    const payload = requireAuth(req, reply)
    if (!payload) return

    const params = z.object({ characterId: z.string().min(1) }).safeParse(req.params)
    if (!params.success) return reply.status(400).send({ error: 'Personagem invalido' })

    const character = await prisma.character.findFirst({
      where: { id: params.data.characterId, userId: payload.id, deletedAt: null },
      select: characterSelect,
    })
    if (!character) return reply.status(404).send({ error: 'Personagem nao encontrado' })

    return reply.send(presentCharacter(character))
  })

  app.patch('/api/characters/:characterId', async (req, reply) => {
    const payload = requireAuth(req, reply)
    if (!payload) return

    const params = z.object({ characterId: z.string().min(1) }).safeParse(req.params)
    if (!params.success) return reply.status(400).send({ error: 'Personagem invalido' })

    const body = updateCharacterSchema.safeParse(req.body ?? {})
    if (!body.success) return reply.status(400).send({ error: body.error.flatten() })

    const existing = await prisma.character.findFirst({
      where: { id: params.data.characterId, userId: payload.id, deletedAt: null },
      select: { id: true, name: true, campaigns: { select: { id: true } } },
    })
    if (!existing) return reply.status(404).send({ error: 'Personagem nao encontrado' })

    const isLinked = existing.campaigns.length > 0
    if (isLinked && body.data.name !== undefined && body.data.name !== existing.name) {
      return reply.status(403).send({ error: 'Nome de personagem vinculado nao pode ser alterado pelo jogador' })
    }

    const character = await prisma.character.update({
      where: { id: existing.id },
      data: {
        ...(body.data.name !== undefined && !isLinked ? { name: body.data.name } : {}),
        ...(body.data.avatarUrl !== undefined ? { avatarUrl: body.data.avatarUrl?.trim() || null } : {}),
        ...(body.data.bio !== undefined ? { bio: body.data.bio?.trim() || null } : {}),
      },
      select: characterSelect,
    })

    return reply.send(presentCharacter(character))
  })

  app.get('/api/characters', async (req, reply) => {
    const payload = requireAuth(req, reply)
    if (!payload) return

    const characters = await prisma.character.findMany({
      where: { userId: payload.id, deletedAt: null },
      select: characterSelect,
      orderBy: { createdAt: 'desc' },
    })

    return reply.send(characters.map(presentCharacter))
  })
}
