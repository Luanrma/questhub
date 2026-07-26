import { Prisma } from '@prisma/client'
import type { FastifyInstance, FastifyReply } from 'fastify'
import { z } from 'zod'
import { prisma } from '../../../db/prisma'
import { requireAuth } from '../../../http/auth'
import { gameSystemRuntime } from '../../runtime/game-system-runtime'
import { pathfinder2eCharacterSheetRuntimeAdapter } from './adapter'
import { pathfinder2eCharacterSheetOptions } from './options'

const PATHFINDER_2E_GAME_SYSTEM = 'PATHFINDER_2E'
const PATHFINDER_2E_SYSTEM_KEY = pathfinder2eCharacterSheetRuntimeAdapter.systemKey
const PATHFINDER_2E_SHEET_VERSION = pathfinder2eCharacterSheetRuntimeAdapter.schemaVersion

const paramsSchema = z.object({ characterId: z.string().trim().min(1) })
const accessQuerySchema = z.object({ campaignId: z.string().trim().min(1).optional() })
const sheetBodySchema = z.object({ data: z.unknown() }).strict()

async function findCharacter(characterId: string) {
  return prisma.character.findFirst({
    where: { id: characterId, deletedAt: null },
    select: {
      id: true,
      userId: true,
      name: true,
      avatarUrl: true,
      bio: true,
      gameSystem: true,
      sheet: {
        select: {
          systemKey: true,
          schemaVersion: true,
          data: true,
          updatedAt: true,
        },
      },
    },
  })
}

async function findAccessibleCharacter(
  characterId: string,
  userId: string,
  campaignId?: string,
) {
  const character = await findCharacter(characterId)
  if (!character) return null
  if (character.userId === userId) return character

  const characterLink = await prisma.campaignCharacter.findFirst({
    where: {
      characterId,
      ...(campaignId ? { campaignId } : {}),
      campaign: {
        characters: {
          some: {
            userId,
            role: 'MASTER',
            status: 'ACTIVE',
          },
        },
      },
    },
    select: { id: true },
  })

  return characterLink ? character : null
}

function ensurePathfinderCharacter(
  character: NonNullable<Awaited<ReturnType<typeof findCharacter>>>,
  reply: FastifyReply,
) {
  if (character.gameSystem !== PATHFINDER_2E_GAME_SYSTEM) {
    reply.status(409).send({ error: 'Esta ficha pertence a outro sistema de jogo' })
    return false
  }
  return true
}

function resolveCharacterSheet(input?: unknown) {
  return gameSystemRuntime.resolveCharacterSheet(pathfinder2eCharacterSheetRuntimeAdapter, input)
}

function sendInvalidSheet(reply: FastifyReply, error: unknown) {
  if (error instanceof z.ZodError) {
    return reply.status(400).send({ error: error.flatten() })
  }
  throw error
}

export function registerPathfinder2eCharacterSheetRoutes(app: FastifyInstance) {
  app.get('/api/game-systems/pathfinder-2e/character-sheet/options', async (req, reply) => {
    const auth = requireAuth(req, reply)
    if (!auth) return
    return reply.send(pathfinder2eCharacterSheetOptions)
  })

  app.get('/api/characters/:characterId/pathfinder-2e-sheet', async (req, reply) => {
    const auth = requireAuth(req, reply)
    if (!auth) return

    const params = paramsSchema.safeParse(req.params)
    const query = accessQuerySchema.safeParse(req.query ?? {})
    if (!params.success || !query.success) return reply.status(400).send({ error: 'Personagem invalido' })

    const character = await findAccessibleCharacter(
      params.data.characterId,
      auth.id,
      query.data.campaignId,
    )
    if (!character) return reply.status(404).send({ error: 'Personagem nao encontrado ou sem acesso' })
    if (!ensurePathfinderCharacter(character, reply)) return

    if (character.sheet && character.sheet.systemKey !== PATHFINDER_2E_SYSTEM_KEY) {
      return reply.status(409).send({ error: 'O personagem possui uma ficha de outro sistema' })
    }

    let resolved
    try {
      resolved = resolveCharacterSheet(character.sheet?.data)
    } catch (error) {
      req.log.error({ characterId: character.id, error }, 'Stored PF2e character sheet is invalid')
      return reply.status(500).send({ error: 'A ficha armazenada esta invalida' })
    }

    return reply.send({
      character: {
        id: character.id,
        name: character.name,
        avatarUrl: character.avatarUrl,
        bio: character.bio,
        gameSystem: character.gameSystem,
      },
      sheet: {
        ...resolved,
        persisted: Boolean(character.sheet),
        updatedAt: character.sheet?.updatedAt ?? null,
      },
    })
  })

  app.post('/api/characters/:characterId/pathfinder-2e-sheet/derive', async (req, reply) => {
    const auth = requireAuth(req, reply)
    if (!auth) return

    const params = paramsSchema.safeParse(req.params)
    const query = accessQuerySchema.safeParse(req.query ?? {})
    if (!params.success || !query.success) return reply.status(400).send({ error: 'Personagem invalido' })

    const body = sheetBodySchema.safeParse(req.body ?? {})
    if (!body.success) return reply.status(400).send({ error: body.error.flatten() })

    const character = await findAccessibleCharacter(
      params.data.characterId,
      auth.id,
      query.data.campaignId,
    )
    if (!character) return reply.status(404).send({ error: 'Personagem nao encontrado ou sem acesso' })
    if (!ensurePathfinderCharacter(character, reply)) return

    try {
      return reply.send(resolveCharacterSheet(body.data.data))
    } catch (error) {
      return sendInvalidSheet(reply, error)
    }
  })

  app.put('/api/characters/:characterId/pathfinder-2e-sheet', async (req, reply) => {
    const auth = requireAuth(req, reply)
    if (!auth) return

    const params = paramsSchema.safeParse(req.params)
    const query = accessQuerySchema.safeParse(req.query ?? {})
    if (!params.success || !query.success) return reply.status(400).send({ error: 'Personagem invalido' })

    const body = sheetBodySchema.safeParse(req.body ?? {})
    if (!body.success) return reply.status(400).send({ error: body.error.flatten() })

    const character = await findAccessibleCharacter(
      params.data.characterId,
      auth.id,
      query.data.campaignId,
    )
    if (!character) return reply.status(404).send({ error: 'Personagem nao encontrado ou sem acesso' })
    if (!ensurePathfinderCharacter(character, reply)) return

    if (character.sheet && character.sheet.systemKey !== PATHFINDER_2E_SYSTEM_KEY) {
      return reply.status(409).send({ error: 'O personagem possui uma ficha de outro sistema' })
    }

    let resolved
    try {
      resolved = resolveCharacterSheet(body.data.data)
    } catch (error) {
      return sendInvalidSheet(reply, error)
    }

    const stored = await prisma.characterSheet.upsert({
      where: { characterId: character.id },
      create: {
        characterId: character.id,
        systemKey: PATHFINDER_2E_SYSTEM_KEY,
        schemaVersion: PATHFINDER_2E_SHEET_VERSION,
        data: resolved.data as Prisma.InputJsonValue,
      },
      update: {
        systemKey: PATHFINDER_2E_SYSTEM_KEY,
        schemaVersion: PATHFINDER_2E_SHEET_VERSION,
        data: resolved.data as Prisma.InputJsonValue,
      },
      select: {
        updatedAt: true,
      },
    })

    return reply.send({
      ...resolved,
      persisted: true,
      updatedAt: stored.updatedAt,
    })
  })
}
