import type { FastifyInstance } from 'fastify'
import { Prisma } from '@prisma/client'
import { z } from 'zod'
import { prisma } from '../../db/prisma'
import { requireAuth } from '../../http/auth'
import {
  buildDefaultCharacterActiveEffectsEnvelope,
  safeValidateCharacterActiveEffectsEnvelope,
} from '../game_systems/registry'

const characterActiveEffectsParamsSchema = z.object({
  characterId: z.string().trim().min(1, 'Personagem invalido'),
})

const putCharacterActiveEffectsBodySchema = z.object({
  revision: z.number().int().min(0),
  activeEffects: z.object({
    system: z.string().trim().min(1),
    version: z.number().int().positive(),
    data: z.record(z.string(), z.unknown()),
  }),
})

async function getCharacterAccess(characterId: string, userId: string) {
  return prisma.character.findFirst({
    where: {
      id: characterId,
      deletedAt: null,
      OR: [
        { userId },
        {
          campaigns: {
            some: {
              campaign: {
                characters: {
                  some: { userId, role: 'MASTER', status: 'ACTIVE' },
                },
              },
            },
          },
        },
      ],
    },
    select: {
      id: true,
      userId: true,
      system: true,
      activeEffects: {
        select: { system: true, version: true, revision: true, data: true },
      },
    },
  })
}

export function registerCharacterActiveEffectsRoutes(app: FastifyInstance) {
  app.get('/api/characters/:characterId/active-effects', async (req, reply) => {
    const payload = requireAuth(req, reply)
    if (!payload) return

    const params = characterActiveEffectsParamsSchema.safeParse(req.params)
    if (!params.success) return reply.status(400).send({ error: 'Personagem invalido' })

    const character = await getCharacterAccess(params.data.characterId, payload.id)
    if (!character) return reply.status(404).send({ error: 'Personagem nao encontrado' })

    if (!character.system) return reply.status(400).send({ error: 'Personagem sem sistema de jogo definido' })

    if (!character.activeEffects) {
      try {
        return reply.send({
          characterId: character.id,
          system: character.system,
          revision: 0,
          activeEffects: buildDefaultCharacterActiveEffectsEnvelope(character.system),
        })
      } catch {
        return reply.status(404).send({ error: 'Efeitos ativos nao disponiveis para este sistema' })
      }
    }

    return reply.send({
      characterId: character.id,
      system: character.system,
      revision: character.activeEffects.revision,
      activeEffects: {
        system: character.activeEffects.system,
        version: character.activeEffects.version,
        data: character.activeEffects.data,
      },
    })
  })

  app.put('/api/characters/:characterId/active-effects', async (req, reply) => {
    const payload = requireAuth(req, reply)
    if (!payload) return

    const params = characterActiveEffectsParamsSchema.safeParse(req.params)
    if (!params.success) return reply.status(400).send({ error: 'Personagem invalido' })

    const body = putCharacterActiveEffectsBodySchema.safeParse(req.body)
    if (!body.success) return reply.status(400).send({ error: 'Payload invalido' })

    const character = await getCharacterAccess(params.data.characterId, payload.id)
    if (!character) return reply.status(404).send({ error: 'Personagem nao encontrado' })

    if (character.system && body.data.activeEffects.system !== character.system) {
      return reply.status(400).send({ error: 'Efeitos ativos incompativeis com o sistema do personagem' })
    }

    const parsedActiveEffects = safeValidateCharacterActiveEffectsEnvelope(body.data.activeEffects)
    if (!parsedActiveEffects.success) return reply.status(400).send({ error: 'Efeitos ativos invalidos' })

    const currentRevision = character.activeEffects?.revision ?? 0
    if (body.data.revision !== currentRevision) {
      return reply.status(409).send({ error: 'Os efeitos ativos foram alterados por outra sessao. Recarregue antes de salvar.' })
    }

    const nextRevision = currentRevision + 1

    if (!character.activeEffects) {
      try {
        await prisma.characterActiveEffects.create({
          data: {
            characterId: character.id,
            system: parsedActiveEffects.data.system as never,
            version: parsedActiveEffects.data.version,
            revision: nextRevision,
            data: parsedActiveEffects.data.data as never,
          },
        })
      } catch (error) {
        if (error instanceof Prisma.PrismaClientKnownRequestError && error.code === 'P2002') {
          return reply.status(409).send({ error: 'Os efeitos ativos foram alterados por outra sessao. Recarregue antes de salvar.' })
        }
        throw error
      }
    } else {
      const result = await prisma.characterActiveEffects.updateMany({
        where: { characterId: character.id, revision: currentRevision },
        data: {
          version: parsedActiveEffects.data.version,
          revision: nextRevision,
          data: parsedActiveEffects.data.data as never,
        },
      })

      if (result.count === 0) {
        return reply.status(409).send({ error: 'Os efeitos ativos foram alterados por outra sessao. Recarregue antes de salvar.' })
      }
    }

    return reply.send({
      characterId: character.id,
      system: parsedActiveEffects.data.system,
      revision: nextRevision,
      activeEffects: parsedActiveEffects.data,
    })
  })
}
