import { Prisma } from '@prisma/client'
import type { FastifyInstance } from 'fastify'
import { z } from 'zod'
import { prisma } from '../../../../db/prisma'
import { requireAuth } from '../../../../http/auth'
import { createDefaultPathfinder2eManualCharacterSheet } from './defaults'
import { pathfinder2eCharacterSheetOptions } from './options'
import { pathfinder2eManualCharacterSheetSchema } from './schema'

const PATHFINDER_2E_SYSTEM_KEY = 'pathfinder-2e'
const PATHFINDER_2E_SHEET_VERSION = 1

const paramsSchema = z.object({ characterId: z.string().trim().min(1) })
const saveSchema = z.object({ data: pathfinder2eManualCharacterSheetSchema }).strict()

async function findOwnedCharacter(characterId: string, userId: string) {
  return prisma.character.findFirst({
    where: { id: characterId, userId, deletedAt: null },
    select: {
      id: true,
      name: true,
      avatarUrl: true,
      bio: true,
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
    if (!params.success) return reply.status(400).send({ error: 'Personagem invalido' })

    const character = await findOwnedCharacter(params.data.characterId, auth.id)
    if (!character) return reply.status(404).send({ error: 'Personagem nao encontrado' })

    if (character.sheet && character.sheet.systemKey !== PATHFINDER_2E_SYSTEM_KEY) {
      return reply.status(409).send({ error: 'O personagem possui uma ficha de outro sistema' })
    }

    const parsedSheet = character.sheet
      ? pathfinder2eManualCharacterSheetSchema.safeParse(character.sheet.data)
      : { success: true as const, data: createDefaultPathfinder2eManualCharacterSheet() }

    if (!parsedSheet.success) {
      req.log.error({ characterId: character.id, issues: parsedSheet.error.issues }, 'Stored PF2e character sheet is invalid')
      return reply.status(500).send({ error: 'A ficha armazenada esta invalida' })
    }

    return reply.send({
      character: {
        id: character.id,
        name: character.name,
        avatarUrl: character.avatarUrl,
        bio: character.bio,
      },
      sheet: {
        systemKey: PATHFINDER_2E_SYSTEM_KEY,
        schemaVersion: PATHFINDER_2E_SHEET_VERSION,
        persisted: Boolean(character.sheet),
        updatedAt: character.sheet?.updatedAt ?? null,
        data: parsedSheet.data,
      },
    })
  })

  app.put('/api/characters/:characterId/pathfinder-2e-sheet', async (req, reply) => {
    const auth = requireAuth(req, reply)
    if (!auth) return

    const params = paramsSchema.safeParse(req.params)
    if (!params.success) return reply.status(400).send({ error: 'Personagem invalido' })

    const body = saveSchema.safeParse(req.body ?? {})
    if (!body.success) return reply.status(400).send({ error: body.error.flatten() })

    const character = await findOwnedCharacter(params.data.characterId, auth.id)
    if (!character) return reply.status(404).send({ error: 'Personagem nao encontrado' })

    if (character.sheet && character.sheet.systemKey !== PATHFINDER_2E_SYSTEM_KEY) {
      return reply.status(409).send({ error: 'O personagem possui uma ficha de outro sistema' })
    }

    const stored = await prisma.characterSheet.upsert({
      where: { characterId: character.id },
      create: {
        characterId: character.id,
        systemKey: PATHFINDER_2E_SYSTEM_KEY,
        schemaVersion: PATHFINDER_2E_SHEET_VERSION,
        data: body.data.data as Prisma.InputJsonValue,
      },
      update: {
        systemKey: PATHFINDER_2E_SYSTEM_KEY,
        schemaVersion: PATHFINDER_2E_SHEET_VERSION,
        data: body.data.data as Prisma.InputJsonValue,
      },
      select: {
        schemaVersion: true,
        data: true,
        updatedAt: true,
      },
    })

    return reply.send({
      systemKey: PATHFINDER_2E_SYSTEM_KEY,
      schemaVersion: stored.schemaVersion,
      data: stored.data,
      updatedAt: stored.updatedAt,
    })
  })
}
