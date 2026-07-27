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

const paramsSchema = z.object({
  campaignId: z.string().trim().min(1),
  sheetId: z.string().trim().min(1),
})
const sheetBodySchema = z.object({ data: z.unknown() }).strict()

async function findAccessibleSheet(campaignId: string, sheetId: string, userId: string) {
  const access = await prisma.campaignMember.findFirst({
    where: {
      campaignId,
      userId,
      status: 'ACTIVE',
      role: { in: ['MASTER', 'PLAYER'] },
    },
    select: { role: true },
  })
  if (!access) return null

  const sheet = await prisma.campaignMemberSheet.findFirst({
    where: { id: sheetId, campaignId },
    select: {
      id: true,
      campaignId: true,
      assignedUserId: true,
      name: true,
      avatarUrl: true,
      bio: true,
      systemKey: true,
      schemaVersion: true,
      data: true,
      updatedAt: true,
      campaign: { select: { gameSystem: true } },
    },
  })
  if (!sheet) return null
  if (access.role !== 'MASTER' && sheet.assignedUserId !== userId) return null

  return sheet
}

function ensurePathfinderSheet(
  sheet: NonNullable<Awaited<ReturnType<typeof findAccessibleSheet>>>,
  reply: FastifyReply,
) {
  if (sheet.campaign.gameSystem !== PATHFINDER_2E_GAME_SYSTEM) {
    reply.status(409).send({ error: 'A campanha utiliza outro sistema de jogo' })
    return false
  }
  if (sheet.systemKey !== PATHFINDER_2E_SYSTEM_KEY) {
    reply.status(409).send({ error: 'A ficha armazenada pertence a outro sistema' })
    return false
  }
  return true
}

function resolveCharacterSheet(input: unknown) {
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

  app.get('/api/campaigns/:campaignId/character-sheets/:sheetId/pathfinder-2e', async (req, reply) => {
    const auth = requireAuth(req, reply)
    if (!auth) return

    const params = paramsSchema.safeParse(req.params)
    if (!params.success) return reply.status(400).send({ error: 'Ficha invalida' })

    const sheet = await findAccessibleSheet(params.data.campaignId, params.data.sheetId, auth.id)
    if (!sheet) return reply.status(404).send({ error: 'Ficha nao encontrada ou sem acesso' })
    if (!ensurePathfinderSheet(sheet, reply)) return

    let resolved
    try {
      resolved = resolveCharacterSheet(sheet.data)
    } catch (error) {
      req.log.error({ sheetId: sheet.id, error }, 'Stored PF2e campaign character sheet is invalid')
      return reply.status(500).send({ error: 'A ficha armazenada esta invalida' })
    }

    return reply.send({
      metadata: {
        id: sheet.id,
        name: sheet.name,
        avatarUrl: sheet.avatarUrl,
        bio: sheet.bio,
      },
      sheet: {
        ...resolved,
        persisted: true,
        updatedAt: sheet.updatedAt,
      },
    })
  })

  app.post('/api/campaigns/:campaignId/character-sheets/:sheetId/pathfinder-2e/derive', async (req, reply) => {
    const auth = requireAuth(req, reply)
    if (!auth) return

    const params = paramsSchema.safeParse(req.params)
    const body = sheetBodySchema.safeParse(req.body ?? {})
    if (!params.success || !body.success) {
      return reply.status(400).send({ error: body.success ? 'Ficha invalida' : body.error.flatten() })
    }

    const sheet = await findAccessibleSheet(params.data.campaignId, params.data.sheetId, auth.id)
    if (!sheet) return reply.status(404).send({ error: 'Ficha nao encontrada ou sem acesso' })
    if (!ensurePathfinderSheet(sheet, reply)) return

    try {
      return reply.send(resolveCharacterSheet(body.data.data))
    } catch (error) {
      return sendInvalidSheet(reply, error)
    }
  })

  app.put('/api/campaigns/:campaignId/character-sheets/:sheetId/pathfinder-2e', async (req, reply) => {
    const auth = requireAuth(req, reply)
    if (!auth) return

    const params = paramsSchema.safeParse(req.params)
    const body = sheetBodySchema.safeParse(req.body ?? {})
    if (!params.success || !body.success) {
      return reply.status(400).send({ error: body.success ? 'Ficha invalida' : body.error.flatten() })
    }

    const sheet = await findAccessibleSheet(params.data.campaignId, params.data.sheetId, auth.id)
    if (!sheet) return reply.status(404).send({ error: 'Ficha nao encontrada ou sem acesso' })
    if (!ensurePathfinderSheet(sheet, reply)) return

    let resolved
    try {
      resolved = resolveCharacterSheet(body.data.data)
    } catch (error) {
      return sendInvalidSheet(reply, error)
    }

    const stored = await prisma.campaignMemberSheet.update({
      where: { id: sheet.id },
      data: {
        systemKey: PATHFINDER_2E_SYSTEM_KEY,
        schemaVersion: PATHFINDER_2E_SHEET_VERSION,
        data: resolved.data as Prisma.InputJsonValue,
      },
      select: { updatedAt: true },
    })

    return reply.send({
      ...resolved,
      persisted: true,
      updatedAt: stored.updatedAt,
    })
  })
}
