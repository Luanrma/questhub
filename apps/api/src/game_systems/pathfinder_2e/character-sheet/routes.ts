import { Prisma } from '@prisma/client'
import type { FastifyInstance, FastifyReply } from 'fastify'
import { z } from 'zod'
import { prisma } from '../../../db/prisma'
import { requireAuth } from '../../../http/auth'
import type { GameSystemAutomationEventPublisher } from '../../automation/contracts'
import { gameSystemRuntime } from '../../runtime/game-system-runtime'
import { pathfinder2eCharacterSheetRuntimeAdapter } from './adapter'
import { derivePathfinder2eCharacterSheet } from './derivation'
import { initializePathfinder2eCurrentHitPoints } from './initialization'
import {
  isPathfinder2eHeritageCompatible,
  pathfinder2eCharacterSheetOptions,
} from './options'
import { resolvePathfinder2eEquippedArmor } from '../equipment/domain'

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

  const sheet = await prisma.campaignCharacterSheet.findFirst({
    where: { id: sheetId, actor: { campaignId, archivedAt: null } },
    select: {
      id: true,
      systemKey: true,
      schemaVersion: true,
      data: true,
      updatedAt: true,
      actor: {
        select: {
          name: true,
          avatarUrl: true,
          bio: true,
          campaign: { select: { gameSystem: true } },
          controllerMember: { select: { userId: true } },
          token: { select: { id: true } },
          inventory: {
            select: {
              entries: {
                select: {
                  id: true,
                  quantity: true,
                  data: true,
                  state: true,
                },
                orderBy: { slotIndex: 'asc' },
              },
            },
          },
        },
      },
    },
  })
  if (!sheet) return null

  const canAccess = access.role === 'MASTER'
    || sheet.actor.controllerMember?.userId === userId
  return canAccess ? sheet : null
}

function ensurePathfinderSheet(
  sheet: NonNullable<Awaited<ReturnType<typeof findAccessibleSheet>>>,
  reply: FastifyReply,
) {
  if (sheet.actor.campaign.gameSystem !== PATHFINDER_2E_GAME_SYSTEM) {
    reply.status(409).send({ error: 'A campanha utiliza outro sistema de jogo' })
    return false
  }
  if (sheet.systemKey !== PATHFINDER_2E_SYSTEM_KEY) {
    reply.status(409).send({ error: 'A ficha armazenada pertence a outro sistema' })
    return false
  }
  return true
}

type EquipmentEntries = NonNullable<
  NonNullable<Awaited<ReturnType<typeof findAccessibleSheet>>>['actor']['inventory']
>['entries']

function resolveCharacterSheet(input: unknown, entries: EquipmentEntries = []) {
  const resolved = gameSystemRuntime.resolveCharacterSheet(
    pathfinder2eCharacterSheetRuntimeAdapter,
    input,
  )
  const withEquipment = derivePathfinder2eCharacterSheet(resolved.data, {
    armor: resolvePathfinder2eEquippedArmor(entries),
  })

  return {
    ...resolved,
    derived: withEquipment.derived,
    warnings: [...new Set([...resolved.warnings, ...withEquipment.warnings])],
  }
}

function resolveCharacterSheetUpdate(
  previousInput: unknown,
  nextInput: unknown,
  entries: EquipmentEntries,
) {
  const next = resolveCharacterSheet(nextInput, entries)

  try {
    const previous = resolveCharacterSheet(previousInput, entries)
    const initialized = initializePathfinder2eCurrentHitPoints(previous.data, next.data)
    return resolveCharacterSheet(initialized, entries)
  } catch {
    // An invalid stored sheet must still be repairable with a valid submitted payload.
    return next
  }
}

function sendInvalidSheet(reply: FastifyReply, error: unknown) {
  if (error instanceof z.ZodError) {
    return reply.status(400).send({ error: error.flatten() })
  }
  throw error
}

export function registerPathfinder2eCharacterSheetRoutes(
  app: FastifyInstance,
  events: GameSystemAutomationEventPublisher,
) {
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
      resolved = resolveCharacterSheet(sheet.data, sheet.actor.inventory?.entries ?? [])
    } catch (error) {
      req.log.error({ sheetId: sheet.id, error }, 'Stored PF2e campaign character sheet is invalid')
      return reply.status(500).send({ error: 'A ficha armazenada esta invalida' })
    }

    return reply.send({
      metadata: {
        id: sheet.id,
        name: sheet.actor.name,
        avatarUrl: sheet.actor.avatarUrl,
        bio: sheet.actor.bio,
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
      return reply.send(resolveCharacterSheetUpdate(
        sheet.data,
        body.data.data,
        sheet.actor.inventory?.entries ?? [],
      ))
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
      resolved = resolveCharacterSheetUpdate(
        sheet.data,
        body.data.data,
        sheet.actor.inventory?.entries ?? [],
      )
    } catch (error) {
      return sendInvalidSheet(reply, error)
    }
    if (
      resolved.data.identity.ancestry
      && resolved.data.identity.heritage
      && !isPathfinder2eHeritageCompatible(
        resolved.data.identity.ancestry,
        resolved.data.identity.heritage,
      )
    ) {
      return reply.status(400).send({
        error: {
          code: 'INCOMPATIBLE_HERITAGE',
          message: 'A heranca selecionada nao e compativel com a ancestralidade.',
        },
      })
    }

    const stored = await prisma.campaignCharacterSheet.update({
      where: { id: sheet.id },
      data: {
        systemKey: PATHFINDER_2E_SYSTEM_KEY,
        schemaVersion: PATHFINDER_2E_SHEET_VERSION,
        data: resolved.data as Prisma.InputJsonValue,
      },
      select: { updatedAt: true },
    })

    if (sheet.actor.token?.id) {
      try {
        await events.publishTokenPresentationChanged({
          campaignId: params.data.campaignId,
          tokenId: sheet.actor.token.id,
          sourceUserId: auth.id,
        })
      } catch (error) {
        req.log.error(
          { campaignId: params.data.campaignId, tokenId: sheet.actor.token.id, error },
          'Failed to publish token presentation change',
        )
      }
    }

    return reply.send({
      ...resolved,
      persisted: true,
      updatedAt: stored.updatedAt,
    })
  })
}
