import type { FastifyInstance } from 'fastify'
import { Prisma } from '@prisma/client'
import { z } from 'zod'
import { prisma } from '../../db/prisma'
import { requireAuth } from '../../http/auth'
import {
  buildDefaultCharacterSpellbookEnvelope,
  safeValidateCharacterSpellbookEnvelope,
} from '../game_systems/registry'

const characterSpellbookParamsSchema = z.object({
  characterId: z.string().trim().min(1, 'Personagem invalido'),
})

const putCharacterSpellbookBodySchema = z.object({
  revision: z.number().int().min(0),
  spellbook: z.object({
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
      spellbook: {
        select: { system: true, version: true, revision: true, data: true },
      },
    },
  })
}

export function registerCharacterSpellbookRoutes(app: FastifyInstance) {
  app.get('/api/characters/:characterId/spellbook', async (req, reply) => {
    const payload = requireAuth(req, reply)
    if (!payload) return

    const params = characterSpellbookParamsSchema.safeParse(req.params)
    if (!params.success) return reply.status(400).send({ error: 'Personagem invalido' })

    const character = await getCharacterAccess(params.data.characterId, payload.id)
    if (!character) return reply.status(404).send({ error: 'Personagem nao encontrado' })

    if (!character.system) return reply.status(400).send({ error: 'Personagem sem sistema de jogo definido' })

    if (!character.spellbook) {
      try {
        return reply.send({
          characterId: character.id,
          system: character.system,
          revision: 0,
          spellbook: buildDefaultCharacterSpellbookEnvelope(character.system),
        })
      } catch {
        return reply.status(404).send({ error: 'Livro de magias nao disponivel para este sistema' })
      }
    }

    return reply.send({
      characterId: character.id,
      system: character.system,
      revision: character.spellbook.revision,
      spellbook: {
        system: character.spellbook.system,
        version: character.spellbook.version,
        data: character.spellbook.data,
      },
    })
  })

  app.put('/api/characters/:characterId/spellbook', async (req, reply) => {
    const payload = requireAuth(req, reply)
    if (!payload) return

    const params = characterSpellbookParamsSchema.safeParse(req.params)
    if (!params.success) return reply.status(400).send({ error: 'Personagem invalido' })

    const body = putCharacterSpellbookBodySchema.safeParse(req.body)
    if (!body.success) return reply.status(400).send({ error: 'Payload invalido' })

    const character = await getCharacterAccess(params.data.characterId, payload.id)
    if (!character) return reply.status(404).send({ error: 'Personagem nao encontrado' })

    if (character.system && body.data.spellbook.system !== character.system) {
      return reply.status(400).send({ error: 'Livro de magias incompativel com o sistema do personagem' })
    }

    const parsedSpellbook = safeValidateCharacterSpellbookEnvelope(body.data.spellbook)
    if (!parsedSpellbook.success) return reply.status(400).send({ error: 'Livro de magias invalido' })

    const currentRevision = character.spellbook?.revision ?? 0
    if (body.data.revision !== currentRevision) {
      return reply.status(409).send({ error: 'O livro de magias foi alterado por outra sessao. Recarregue antes de salvar.' })
    }

    const nextRevision = currentRevision + 1

    if (!character.spellbook) {
      try {
        await prisma.characterSpellbook.create({
          data: {
            characterId: character.id,
            system: parsedSpellbook.data.system as never,
            version: parsedSpellbook.data.version,
            revision: nextRevision,
            data: parsedSpellbook.data.data as never,
          },
        })
      } catch (error) {
        if (error instanceof Prisma.PrismaClientKnownRequestError && error.code === 'P2002') {
          return reply.status(409).send({ error: 'O livro de magias foi alterado por outra sessao. Recarregue antes de salvar.' })
        }
        throw error
      }
    } else {
      const result = await prisma.characterSpellbook.updateMany({
        where: { characterId: character.id, revision: currentRevision },
        data: {
          version: parsedSpellbook.data.version,
          revision: nextRevision,
          data: parsedSpellbook.data.data as never,
        },
      })

      if (result.count === 0) {
        return reply.status(409).send({ error: 'O livro de magias foi alterado por outra sessao. Recarregue antes de salvar.' })
      }
    }

    return reply.send({
      characterId: character.id,
      system: parsedSpellbook.data.system,
      revision: nextRevision,
      spellbook: parsedSpellbook.data,
    })
  })
}
