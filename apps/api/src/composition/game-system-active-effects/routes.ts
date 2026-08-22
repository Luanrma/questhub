import type { Prisma } from '@prisma/client'
import type { FastifyInstance, FastifyReply } from 'fastify'
import type { Server } from 'socket.io'
import { z } from 'zod'
import { prisma } from '../../db/prisma'
import {
  listPathfinder2eEffectCandidates,
  resolvePathfinder2eEffectApplication,
  searchPathfinder2eEffectDefinitions,
} from '../../game_systems/pathfinder_2e/active-effects/application'
import { requireAuth } from '../../http/auth'
import { campaignRoom } from '../../modules/campaign-presence/rooms'
import { createActorEffect } from '../../modules/campaign_actor_effects/service'

const campaignParamsSchema = z.object({
  campaignId: z.string().trim().min(1),
}).strict()

const actorParamsSchema = campaignParamsSchema.extend({
  actorId: z.string().trim().min(1),
}).strict()

const definitionQuerySchema = z.object({
  q: z.string().trim().max(120).optional().default(''),
  limit: z.coerce.number().int().min(1).max(100).optional().default(50),
}).strict()

const candidateQuerySchema = z.object({
  sourceType: z.enum(['SPELL', 'ITEM', 'CREATURE', 'HAZARD']),
  contentId: z.string().trim().min(1).max(240),
}).strict()

const applicationSourceSchema = z.discriminatedUnion('type', [
  z.object({
    type: z.literal('SPELL'),
    contentId: z.string().trim().min(1).max(240),
    occurrenceIndex: z.number().int().min(0),
  }).strict(),
  z.object({
    type: z.literal('ITEM'),
    contentId: z.string().trim().min(1).max(240),
    occurrenceIndex: z.number().int().min(0),
  }).strict(),
  z.object({
    type: z.literal('CREATURE'),
    contentId: z.string().trim().min(1).max(240),
    occurrenceIndex: z.number().int().min(0),
  }).strict(),
  z.object({
    type: z.literal('HAZARD'),
    contentId: z.string().trim().min(1).max(240),
    occurrenceIndex: z.number().int().min(0),
  }).strict(),
  z.object({
    type: z.literal('MANUAL'),
    definitionKey: z.string().trim().min(1).max(240),
  }).strict(),
])

const applicationBodySchema = z.object({
  source: applicationSourceSchema,
  value: z.number().int().positive().optional(),
}).strict()

async function findAccessibleCampaign(campaignId: string, userId: string) {
  return prisma.campaign.findFirst({
    where: {
      id: campaignId,
      members: { some: { userId, status: 'ACTIVE' } },
    },
    select: { id: true, gameSystem: true },
  })
}

async function findMasterCampaign(campaignId: string, userId: string) {
  return prisma.campaign.findFirst({
    where: {
      id: campaignId,
      members: {
        some: { userId, role: 'MASTER', status: 'ACTIVE' },
      },
    },
    select: { id: true, gameSystem: true },
  })
}

function isPathfinder2e(gameSystem: string) {
  return gameSystem === 'PATHFINDER_2E'
}

function asPrismaJson(value: unknown): Prisma.InputJsonValue {
  return JSON.parse(JSON.stringify(value)) as Prisma.InputJsonValue
}

function publishActorEffectsChanged(io: Server, campaignId: string, actorId: string) {
  io.to(campaignRoom(campaignId)).emit('vtt:actor-effects:changed', {
    campaignId,
    actorId,
  })
}

function sendResolutionFailure(
  reply: FastifyReply,
  reason: 'DEFINITION_NOT_FOUND'
    | 'SOURCE_NOT_FOUND'
    | 'SOURCE_NOT_POTENTIAL'
    | 'SOURCE_TYPE_MISMATCH'
    | 'INVALID_VALUE',
) {
  if (reason === 'INVALID_VALUE') {
    return reply.status(400).send({ error: 'Valor de efeito invalido para esta definicao' })
  }
  if (reason === 'SOURCE_NOT_POTENTIAL') {
    return reply.status(409).send({ error: 'A referencia selecionada nao representa um efeito potencial aplicavel' })
  }
  if (reason === 'SOURCE_TYPE_MISMATCH') {
    return reply.status(409).send({ error: 'A origem informada nao corresponde ao tipo do conteudo PF2e' })
  }
  return reply.status(404).send({ error: 'Definicao ou origem de efeito PF2e nao encontrada' })
}

export function registerGameSystemActiveEffectCompositionRoutes(
  app: FastifyInstance,
  io: Server,
) {
  app.get('/api/campaigns/:campaignId/game-system-effects/definitions', async (req, reply) => {
    const auth = requireAuth(req, reply)
    if (!auth) return

    const params = campaignParamsSchema.safeParse(req.params)
    const query = definitionQuerySchema.safeParse(req.query ?? {})
    if (!params.success || !query.success) {
      return reply.status(400).send({ error: 'Consulta de efeitos invalida' })
    }

    const campaign = await findAccessibleCampaign(params.data.campaignId, auth.id)
    if (!campaign) return reply.status(404).send({ error: 'Campanha nao encontrada' })
    if (!isPathfinder2e(campaign.gameSystem)) {
      return reply.status(409).send({ error: 'O sistema da campanha nao fornece este catalogo de efeitos' })
    }

    const definitions = searchPathfinder2eEffectDefinitions(query.data.q, query.data.limit)
      .map((definition) => ({
        definitionKey: definition.definitionKey,
        kind: definition.kind,
        name: definition.name,
        description: definition.description,
        iconUrl: definition.iconUrl,
        polarity: definition.polarity,
        group: definition.group,
        valued: definition.kind === 'condition' && definition.conditionValue?.isValued === true,
        baseValue: definition.conditionValue?.baseValue ?? null,
      }))

    return reply.send({ gameSystem: campaign.gameSystem, definitions })
  })

  app.get('/api/campaigns/:campaignId/game-system-effects/candidates', async (req, reply) => {
    const auth = requireAuth(req, reply)
    if (!auth) return

    const params = campaignParamsSchema.safeParse(req.params)
    const query = candidateQuerySchema.safeParse(req.query ?? {})
    if (!params.success || !query.success) {
      return reply.status(400).send({ error: 'Origem de efeito invalida' })
    }

    const campaign = await findAccessibleCampaign(params.data.campaignId, auth.id)
    if (!campaign) return reply.status(404).send({ error: 'Campanha nao encontrada' })
    if (!isPathfinder2e(campaign.gameSystem)) {
      return reply.status(409).send({ error: 'O sistema da campanha nao fornece candidatos de efeito' })
    }

    return reply.send({
      gameSystem: campaign.gameSystem,
      sourceType: query.data.sourceType,
      contentId: query.data.contentId,
      candidates: listPathfinder2eEffectCandidates(
        query.data.sourceType,
        query.data.contentId,
      ),
    })
  })

  app.post('/api/campaigns/:campaignId/actors/:actorId/game-system-effects', async (req, reply) => {
    const auth = requireAuth(req, reply)
    if (!auth) return

    const params = actorParamsSchema.safeParse(req.params)
    const body = applicationBodySchema.safeParse(req.body ?? {})
    if (!params.success || !body.success) {
      return reply.status(400).send({
        error: body.success ? 'Ator invalido' : body.error.flatten(),
      })
    }

    const campaign = await findMasterCampaign(params.data.campaignId, auth.id)
    if (!campaign) {
      return reply.status(403).send({ error: 'Apenas o Mestre pode aplicar efeitos ativos' })
    }
    if (!isPathfinder2e(campaign.gameSystem)) {
      return reply.status(409).send({ error: 'O sistema da campanha nao suporta esta aplicacao de efeito' })
    }

    const actor = await prisma.campaignActor.findFirst({
      where: {
        id: params.data.actorId,
        campaignId: campaign.id,
        archivedAt: null,
      },
      select: { id: true },
    })
    if (!actor) return reply.status(404).send({ error: 'Ator nao encontrado' })

    const resolved = resolvePathfinder2eEffectApplication(body.data)
    if (!resolved.ok) return sendResolutionFailure(reply, resolved.reason)

    const effect = await createActorEffect({
      actorId: actor.id,
      namespace: resolved.effect.namespace,
      definitionKey: resolved.effect.definitionKey,
      name: resolved.effect.name,
      description: resolved.effect.description,
      iconUrl: resolved.effect.iconUrl,
      polarity: resolved.effect.polarity,
      category: resolved.effect.category,
      displayValue: resolved.effect.displayValue,
      schemaVersion: resolved.effect.schemaVersion,
      payload: asPrismaJson(resolved.effect.payload),
      origin: asPrismaJson(resolved.effect.origin),
    })
    if (!effect) return reply.status(404).send({ error: 'Ator nao encontrado' })

    publishActorEffectsChanged(io, campaign.id, actor.id)
    return reply.status(201).send(effect)
  })
}
