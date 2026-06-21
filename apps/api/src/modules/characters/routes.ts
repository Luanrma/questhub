import type { FastifyInstance } from 'fastify'
import { z } from 'zod'
import { prisma } from '../../db/prisma'
import { requireAuth } from '../../http/auth'
import { presentCharacter } from './presenter'
import { createCharacterSchema, updateCharacterSchema } from './validation'

export function registerCharacterRoutes(app: FastifyInstance) {
  app.post('/api/characters', async (req, reply) => {
    const payload = requireAuth(req, reply)
    if (!payload) return

    const parsed = createCharacterSchema.safeParse(req.body ?? {})
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

  app.get('/api/characters/:characterId', async (req, reply) => {
    const payload = requireAuth(req, reply)
    if (!payload) return

    const paramsSchema = z.object({
      characterId: z.string().min(1),
    })

    const params = paramsSchema.safeParse(req.params)
    if (!params.success) return reply.status(400).send({ error: 'Personagem invalido' })

    const character = await prisma.character.findFirst({
      where: {
        id: params.data.characterId,
        userId: payload.id,
        deletedAt: null,
      },
      select: {
        id: true,
        name: true,
        avatarUrl: true,
        bio: true,
        system: true,
        sheet: true,
        createdAt: true,
        updatedAt: true,
        campaigns: {
          select: {
            id: true,
            role: true,
            status: true,
            campaign: { select: { id: true, title: true, system: true } },
          },
        },
      },
    })

    if (!character) return reply.status(404).send({ error: 'Personagem nao encontrado' })

    return reply.send(presentCharacter(character))
  })

  app.patch('/api/characters/:characterId', async (req, reply) => {
    const payload = requireAuth(req, reply)
    if (!payload) return

    const paramsSchema = z.object({
      characterId: z.string().min(1),
    })

    const params = paramsSchema.safeParse(req.params)
    if (!params.success) return reply.status(400).send({ error: 'Personagem invalido' })

    const body = updateCharacterSchema.safeParse(req.body ?? {})
    if (!body.success) return reply.status(400).send({ error: body.error.flatten() })

    const character = await prisma.character.findFirst({
      where: {
        id: params.data.characterId,
        userId: payload.id,
        deletedAt: null,
      },
      select: {
        id: true,
        name: true,
        campaigns: { select: { id: true } },
      },
    })

    if (!character) return reply.status(404).send({ error: 'Personagem nao encontrado' })

    const isLinked = character.campaigns.length > 0
    if (isLinked && body.data.name !== undefined && body.data.name !== character.name) {
      return reply.status(403).send({ error: 'Nome de personagem vinculado nao pode ser alterado pelo jogador' })
    }

    const updated = await prisma.character.update({
      where: { id: character.id },
      data: {
        ...(body.data.name !== undefined && !isLinked ? { name: body.data.name } : {}),
        ...(body.data.avatarUrl !== undefined ? { avatarUrl: body.data.avatarUrl?.trim() || null } : {}),
        ...(body.data.bio !== undefined ? { bio: body.data.bio?.trim() || null } : {}),
      },
      select: {
        id: true,
        name: true,
        avatarUrl: true,
        bio: true,
        system: true,
        sheet: true,
        createdAt: true,
        updatedAt: true,
        campaigns: {
          select: {
            id: true,
            role: true,
            status: true,
            campaign: { select: { id: true, title: true, system: true } },
          },
        },
      },
    })

    return reply.send(presentCharacter(updated))
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

    return reply.send(characters.map((character) => presentCharacter(character)))
  })
}
