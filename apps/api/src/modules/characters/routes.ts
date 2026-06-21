import type { FastifyInstance } from 'fastify'
import { z } from 'zod'
import { prisma } from '../../db/prisma'
import { requireAuth } from '../../http/auth'

const avatarUrlSchema = z
  .string()
  .trim()
  .max(2048)
  .refine((value) => {
    if (value === '') return true
    if (value.startsWith('/')) return true

    try {
      const url = new URL(value)
      return url.protocol === 'http:' || url.protocol === 'https:'
    } catch {
      return false
    }
  }, 'Avatar deve ser uma URL valida')

function presentCharacter(character: {
  id: string
  name: string
  avatarUrl: string | null
  bio: string | null
  system: unknown
  sheet: unknown
  createdAt: Date
  updatedAt?: Date
  campaigns: unknown[]
}) {
  return {
    id: character.id,
    name: character.name,
    avatarUrl: character.avatarUrl,
    bio: character.bio,
    system: character.system,
    createdAt: character.createdAt,
    ...(character.updatedAt ? { updatedAt: character.updatedAt } : {}),
    campaigns: character.campaigns,
    available: character.campaigns.length === 0,
    hasSheet: character.sheet !== null,
  }
}

export function registerCharacterRoutes(app: FastifyInstance) {
  app.post('/api/characters', async (req, reply) => {
    const payload = requireAuth(req, reply)
    if (!payload) return

    const schema = z.object({
      name: z.string().trim().min(1, 'Nome e obrigatorio').max(80, 'Nome muito longo'),
      avatarUrl: avatarUrlSchema.optional(),
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

    const bodySchema = z.object({
      name: z.string().trim().min(1, 'Nome e obrigatorio').max(80, 'Nome muito longo').optional(),
      avatarUrl: avatarUrlSchema.nullable().optional(),
      bio: z.string().trim().max(2000, 'Bio deve ter no maximo 2000 caracteres').nullable().optional(),
    })

    const params = paramsSchema.safeParse(req.params)
    if (!params.success) return reply.status(400).send({ error: 'Personagem invalido' })

    const body = bodySchema.safeParse(req.body ?? {})
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
