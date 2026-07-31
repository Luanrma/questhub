import { Prisma } from '@prisma/client'
import type { FastifyInstance, FastifyReply } from 'fastify'
import { z } from 'zod'
import { prisma } from '../../../db/prisma'
import { requireAuth } from '../../../http/auth'
import type { GameSystemAutomationEventPublisher } from '../../automation/contracts'
import { pathfinder2eCharacterSheetRuntimeAdapter } from '../character-sheet/adapter'
import {
  createPathfinder2eCharacterSpellSnapshot,
  listPathfinder2eSpellCatalog,
  PATHFINDER_2E_CHARACTER_ENTRY_NAMESPACE,
  PATHFINDER_2E_CHARACTER_SPELL_CATALOG_NAMESPACE,
  PATHFINDER_2E_CHARACTER_SPELL_TYPE_KEY,
  presentPathfinder2eCharacterSpell,
} from './domain'

const PATHFINDER_2E_GAME_SYSTEM = 'PATHFINDER_2E'
const PATHFINDER_2E_SYSTEM_KEY = pathfinder2eCharacterSheetRuntimeAdapter.systemKey

const paramsSchema = z.object({
  campaignId: z.string().trim().min(1),
  sheetId: z.string().trim().min(1),
})
const spellParamsSchema = paramsSchema.extend({
  spellId: z.string().trim().min(1),
})
const localeQuerySchema = z.object({
  locale: z.enum(['en-US', 'pt-BR']).default('pt-BR'),
})
const catalogQuerySchema = localeQuerySchema.extend({
  q: z.string().trim().max(120).optional(),
  rank: z.coerce.number().int().min(1).max(10).optional(),
  page: z.coerce.number().int().min(1).default(1),
  limit: z.coerce.number().int().min(1).max(60).default(24),
})
const createSpellSchema = z.object({
  contentId: z.string().trim().min(1),
}).strict()

type AccessibleSheet = NonNullable<Awaited<ReturnType<typeof findAccessibleFullSheet>>>

async function findAccessibleFullSheet(campaignId: string, sheetId: string, userId: string) {
  const member = await prisma.campaignMember.findFirst({
    where: {
      campaignId,
      userId,
      status: 'ACTIVE',
      role: { in: ['MASTER', 'PLAYER'] },
    },
    select: { role: true },
  })
  if (!member) return null

  const sheet = await prisma.campaignCharacterSheet.findFirst({
    where: {
      id: sheetId,
      actor: { campaignId, archivedAt: null },
    },
    select: {
      id: true,
      systemKey: true,
      actor: {
        select: {
          controllerMember: { select: { userId: true } },
          token: { select: { id: true } },
          campaign: { select: { gameSystem: true } },
        },
      },
    },
  })
  if (!sheet) return null

  const canAccess = member.role === 'MASTER'
    || sheet.actor.controllerMember?.userId === userId
  return canAccess ? sheet : null
}

function ensurePathfinderFullSheet(sheet: AccessibleSheet, reply: FastifyReply) {
  if (sheet.actor.campaign.gameSystem !== PATHFINDER_2E_GAME_SYSTEM) {
    reply.status(409).send({ error: 'A campanha utiliza outro sistema de jogo' })
    return false
  }
  if (sheet.systemKey !== PATHFINDER_2E_SYSTEM_KEY) {
    reply.status(409).send({ error: 'Apenas fichas completas de Pathfinder 2e recebem magias' })
    return false
  }
  return true
}

async function publishSheetTokenChanged(
  events: GameSystemAutomationEventPublisher,
  sheet: AccessibleSheet,
  campaignId: string,
  sourceUserId: string,
  log: { error(input: unknown, message: string): void },
) {
  const tokenId = sheet.actor.token?.id
  if (!tokenId) return

  try {
    await events.publishTokenPresentationChanged({ campaignId, tokenId, sourceUserId })
  } catch (error) {
    log.error(
      { campaignId, tokenId, error },
      'Failed to publish Token presentation change after character spell update',
    )
  }
}

export function registerPathfinder2eCharacterSpellRoutes(
  app: FastifyInstance,
  events: GameSystemAutomationEventPublisher,
) {
  app.get(
    '/api/campaigns/:campaignId/character-sheets/:sheetId/pathfinder-2e/spells',
    async (req, reply) => {
      const auth = requireAuth(req, reply)
      if (!auth) return

      const params = paramsSchema.safeParse(req.params)
      const query = localeQuerySchema.safeParse(req.query ?? {})
      if (!params.success || !query.success) {
        return reply.status(400).send({ error: 'Consulta de magias inválida' })
      }

      const sheet = await findAccessibleFullSheet(
        params.data.campaignId,
        params.data.sheetId,
        auth.id,
      )
      if (!sheet) return reply.status(404).send({ error: 'Ficha não encontrada ou sem acesso' })
      if (!ensurePathfinderFullSheet(sheet, reply)) return

      const stored = await prisma.campaignCharacterSheetEntry.findMany({
        where: {
          characterSheetId: sheet.id,
          namespace: PATHFINDER_2E_CHARACTER_ENTRY_NAMESPACE,
          typeKey: PATHFINDER_2E_CHARACTER_SPELL_TYPE_KEY,
          catalogNamespace: PATHFINDER_2E_CHARACTER_SPELL_CATALOG_NAMESPACE,
        },
        orderBy: [{ sortOrder: 'asc' }, { createdAt: 'asc' }],
      })

      const entries = stored
        .map((spell) => presentPathfinder2eCharacterSpell(spell, query.data.locale))
        .filter((spell) => spell !== null)
        .sort((left, right) => (
          left.baseRank - right.baseRank
          || left.name.localeCompare(right.name, query.data.locale)
        ))

      return reply.send({ entries })
    },
  )

  app.get(
    '/api/campaigns/:campaignId/character-sheets/:sheetId/pathfinder-2e/spells/catalog',
    async (req, reply) => {
      const auth = requireAuth(req, reply)
      if (!auth) return

      const params = paramsSchema.safeParse(req.params)
      const query = catalogQuerySchema.safeParse(req.query ?? {})
      if (!params.success || !query.success) {
        return reply.status(400).send({ error: 'Consulta do catálogo de magias inválida' })
      }

      const sheet = await findAccessibleFullSheet(
        params.data.campaignId,
        params.data.sheetId,
        auth.id,
      )
      if (!sheet) return reply.status(404).send({ error: 'Ficha não encontrada ou sem acesso' })
      if (!ensurePathfinderFullSheet(sheet, reply)) return

      const linked = await prisma.campaignCharacterSheetEntry.findMany({
        where: {
          characterSheetId: sheet.id,
          namespace: PATHFINDER_2E_CHARACTER_ENTRY_NAMESPACE,
          typeKey: PATHFINDER_2E_CHARACTER_SPELL_TYPE_KEY,
          catalogNamespace: PATHFINDER_2E_CHARACTER_SPELL_CATALOG_NAMESPACE,
        },
        select: { catalogContentId: true },
      })

      return reply.send(listPathfinder2eSpellCatalog({
        locale: query.data.locale,
        search: query.data.q,
        rank: query.data.rank,
        linkedContentIds: new Set(linked.flatMap((entry) => (
          entry.catalogContentId ? [entry.catalogContentId] : []
        ))),
        page: query.data.page,
        limit: query.data.limit,
      }))
    },
  )

  app.post(
    '/api/campaigns/:campaignId/character-sheets/:sheetId/pathfinder-2e/spells',
    async (req, reply) => {
      const auth = requireAuth(req, reply)
      if (!auth) return

      const params = paramsSchema.safeParse(req.params)
      const body = createSpellSchema.safeParse(req.body ?? {})
      if (!params.success || !body.success) {
        return reply.status(400).send({ error: body.success ? 'Ficha inválida' : body.error.flatten() })
      }

      const sheet = await findAccessibleFullSheet(
        params.data.campaignId,
        params.data.sheetId,
        auth.id,
      )
      if (!sheet) return reply.status(404).send({ error: 'Ficha não encontrada ou sem acesso' })
      if (!ensurePathfinderFullSheet(sheet, reply)) return

      const snapshot = createPathfinder2eCharacterSpellSnapshot(body.data.contentId)
      if (!snapshot) return reply.status(404).send({ error: 'Magia não encontrada no catálogo Pathfinder 2e' })

      const existing = await prisma.campaignCharacterSheetEntry.findFirst({
        where: {
          characterSheetId: sheet.id,
          namespace: snapshot.namespace,
          typeKey: snapshot.typeKey,
          catalogNamespace: snapshot.catalogNamespace,
          catalogContentId: snapshot.catalogContentId,
        },
        select: { id: true },
      })
      if (existing) return reply.status(409).send({ error: 'Esta magia já está vinculada à ficha' })

      const created = await prisma.campaignCharacterSheetEntry.create({
        data: {
          characterSheetId: sheet.id,
          namespace: snapshot.namespace,
          typeKey: snapshot.typeKey,
          catalogNamespace: snapshot.catalogNamespace,
          catalogContentId: snapshot.catalogContentId,
          schemaVersion: snapshot.schemaVersion,
          data: snapshot.data as Prisma.InputJsonValue,
        },
      })

      await publishSheetTokenChanged(
        events,
        sheet,
        params.data.campaignId,
        auth.id,
        req.log,
      )

      return reply.status(201).send({
        entry: presentPathfinder2eCharacterSpell(created, 'pt-BR'),
      })
    },
  )

  app.delete(
    '/api/campaigns/:campaignId/character-sheets/:sheetId/pathfinder-2e/spells/:spellId',
    async (req, reply) => {
      const auth = requireAuth(req, reply)
      if (!auth) return

      const params = spellParamsSchema.safeParse(req.params)
      if (!params.success) return reply.status(400).send({ error: 'Magia inválida' })

      const sheet = await findAccessibleFullSheet(
        params.data.campaignId,
        params.data.sheetId,
        auth.id,
      )
      if (!sheet) return reply.status(404).send({ error: 'Ficha não encontrada ou sem acesso' })
      if (!ensurePathfinderFullSheet(sheet, reply)) return

      const spell = await prisma.campaignCharacterSheetEntry.findFirst({
        where: {
          id: params.data.spellId,
          characterSheetId: sheet.id,
          namespace: PATHFINDER_2E_CHARACTER_ENTRY_NAMESPACE,
          typeKey: PATHFINDER_2E_CHARACTER_SPELL_TYPE_KEY,
          catalogNamespace: PATHFINDER_2E_CHARACTER_SPELL_CATALOG_NAMESPACE,
        },
        select: { id: true },
      })
      if (!spell) return reply.status(404).send({ error: 'Magia vinculada não encontrada' })

      await prisma.campaignCharacterSheetEntry.delete({ where: { id: spell.id } })
      await publishSheetTokenChanged(
        events,
        sheet,
        params.data.campaignId,
        auth.id,
        req.log,
      )

      return reply.status(204).send()
    },
  )
}
