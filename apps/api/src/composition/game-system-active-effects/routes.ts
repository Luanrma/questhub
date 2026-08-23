import type { Prisma } from '@prisma/client'
import type { FastifyInstance, FastifyReply } from 'fastify'
import type { Server } from 'socket.io'
import { z } from 'zod'
import { prisma } from '../../db/prisma'
import {
  listPathfinder2eEffectCandidates,
  resolvePathfinder2eEffectApplication,
  type Pathfinder2eEffectResolutionFailure,
} from '../../game_systems/pathfinder_2e/active-effects/application'
import {
  getPathfinder2eActiveEffectDefinitionView,
  listPathfinder2eActiveEffectDefinitionViews,
} from '../../game_systems/pathfinder_2e/content_catalog/active-effect-query'
import { requireAuth } from '../../http/auth'
import { campaignRoom } from '../../modules/campaign-presence/rooms'
import { createActorEffect } from '../../modules/campaign_actor_effects/service'

const campaignParamsSchema = z.object({
  campaignId: z.string().trim().min(1),
}).strict()

const actorParamsSchema = campaignParamsSchema.extend({
  actorId: z.string().trim().min(1),
}).strict()

const definitionParamsSchema = campaignParamsSchema.extend({
  definitionKey: z.string().trim().min(1).max(240),
}).strict()

const localeSchema = z.enum(['pt-BR', 'en-US'])

const definitionQuerySchema = z.object({
  q: z.string().trim().max(120).optional().default(''),
  limit: z.coerce.number().int().min(1).max(100).optional().default(50),
  locale: localeSchema.optional(),
}).strict()

const definitionDetailQuerySchema = z.object({
  locale: localeSchema.optional(),
}).strict()

const definitionPresentationsQuerySchema = z.object({
  definitionKeys: z.string().trim().min(1).max(12000),
  locale: localeSchema.optional(),
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

type ContentLocale = z.infer<typeof localeSchema>

function isRecord(value: unknown): value is Record<string, unknown> {
  return Boolean(value && typeof value === 'object' && !Array.isArray(value))
}

function pathfinder2eContentLocaleFromSettings(settings: unknown): ContentLocale {
  if (!isRecord(settings)) return 'pt-BR'
  const pathfinder2e = settings.pathfinder2e
  if (!isRecord(pathfinder2e)) return 'pt-BR'
  return pathfinder2e.contentLocale === 'en-US' ? 'en-US' : 'pt-BR'
}

async function resolvePathfinder2eContentLocale(
  campaignId: string,
  userId: string,
  override?: ContentLocale,
): Promise<ContentLocale> {
  if (override) return override
  const stored = await prisma.campaignUserSettings.findUnique({
    where: { campaignId_userId: { campaignId, userId } },
    select: { settings: true },
  })
  return pathfinder2eContentLocaleFromSettings(stored?.settings)
}

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
  reason: Pathfinder2eEffectResolutionFailure,
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

function definitionPresentation(definition: NonNullable<ReturnType<typeof getPathfinder2eActiveEffectDefinitionView>>) {
  const kindLabels = {
    condition: 'Condição',
    effect: 'Efeito',
    affliction: 'Aflição',
  } as const
  const polarityLabels = {
    BENEFICIAL: 'Benéfico',
    HARMFUL: 'Prejudicial',
    NEUTRAL: 'Neutro',
  } as const

  return {
    definitionKey: definition.definitionKey,
    headerLabel: 'Definição canônica PF2e',
    name: definition.name,
    description: definition.description,
    descriptionBlocks: definition.descriptionBlocks,
    iconUrl: definition.iconUrl,
    polarity: definition.polarity,
    category: definition.kind,
    tags: [
      { label: kindLabels[definition.kind], tone: 'neutral' as const },
      {
        label: polarityLabels[definition.polarity],
        tone: definition.polarity === 'HARMFUL'
          ? 'harmful' as const
          : definition.polarity === 'BENEFICIAL'
            ? 'beneficial' as const
            : 'neutral' as const,
      },
      ...(definition.group ? [{ label: definition.group, tone: 'neutral' as const }] : []),
      ...(definition.kind === 'condition' && definition.conditionValue?.isValued
        ? [{ label: 'Condição com valor', tone: 'accent' as const }]
        : []),
    ],
    sourceLabel: definition.source.publicationTitle ?? null,
    localization: definition.localization,
    supportedLocales: ['pt-BR', 'en-US'] as const,
  }
}

function parseDefinitionKeys(value: string) {
  return [...new Set(
    value
      .split(',')
      .map((key) => key.trim())
      .filter(Boolean),
  )]
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

    const locale = await resolvePathfinder2eContentLocale(
      campaign.id,
      auth.id,
      query.data.locale,
    )
    const catalog = listPathfinder2eActiveEffectDefinitionViews({
      locale,
      ...(query.data.q ? { query: query.data.q } : {}),
      limit: query.data.limit,
    })
    const definitions = catalog.items.map((definition) => ({
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

    return reply.send({ gameSystem: campaign.gameSystem, locale, definitions })
  })

  app.get('/api/campaigns/:campaignId/game-system-effects/presentations', async (req, reply) => {
    const auth = requireAuth(req, reply)
    if (!auth) return

    const params = campaignParamsSchema.safeParse(req.params)
    const query = definitionPresentationsQuerySchema.safeParse(req.query ?? {})
    if (!params.success || !query.success) {
      return reply.status(400).send({ error: 'Consulta de apresentacoes de efeitos invalida' })
    }

    const definitionKeys = parseDefinitionKeys(query.data.definitionKeys)
    if (definitionKeys.length > 100) {
      return reply.status(400).send({ error: 'Limite de 100 definicoes por consulta' })
    }

    const campaign = await findAccessibleCampaign(params.data.campaignId, auth.id)
    if (!campaign) return reply.status(404).send({ error: 'Campanha nao encontrada' })
    if (!isPathfinder2e(campaign.gameSystem)) {
      return reply.status(409).send({ error: 'O sistema da campanha nao fornece apresentacoes canonicas de efeito' })
    }

    const locale = await resolvePathfinder2eContentLocale(
      campaign.id,
      auth.id,
      query.data.locale,
    )
    const presentations = definitionKeys.flatMap((definitionKey) => {
      const definition = getPathfinder2eActiveEffectDefinitionView(definitionKey, locale)
      return definition ? [definitionPresentation(definition)] : []
    })

    return reply.send({
      gameSystem: campaign.gameSystem,
      locale,
      presentations,
    })
  })

  app.get('/api/campaigns/:campaignId/game-system-effects/definitions/:definitionKey', async (req, reply) => {
    const auth = requireAuth(req, reply)
    if (!auth) return

    const params = definitionParamsSchema.safeParse(req.params)
    const query = definitionDetailQuerySchema.safeParse(req.query ?? {})
    if (!params.success || !query.success) {
      return reply.status(400).send({ error: 'Definicao de efeito invalida' })
    }

    const campaign = await findAccessibleCampaign(params.data.campaignId, auth.id)
    if (!campaign) return reply.status(404).send({ error: 'Campanha nao encontrada' })
    if (!isPathfinder2e(campaign.gameSystem)) {
      return reply.status(409).send({ error: 'O sistema da campanha nao fornece detalhes canonicos de efeito' })
    }

    const locale = await resolvePathfinder2eContentLocale(
      campaign.id,
      auth.id,
      query.data.locale,
    )
    const definition = getPathfinder2eActiveEffectDefinitionView(
      params.data.definitionKey,
      locale,
    )
    if (!definition) return reply.status(404).send({ error: 'Definicao de efeito nao encontrada' })

    return reply.send({
      gameSystem: campaign.gameSystem,
      locale,
      presentation: definitionPresentation(definition),
    })
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
