import type { FastifyInstance } from 'fastify'
import { z } from 'zod'
import { requireAuth } from '../../../http/auth'
import {
  findPathfinder2eContentEntry,
  getPathfinder2eRoundSummary,
  listPathfinder2eRoundEntries,
} from './catalog'
import {
  getPathfinder2eActiveEffectDefinitionView,
  listPathfinder2eActiveEffectDefinitionViews,
} from './active-effect-query'
import { getPathfinder2eActiveEffectReferences } from './active-effect-references'

const localeSchema = z.enum(['en-US', 'pt-BR']).default('pt-BR')
const roundParamsSchema = z.object({ roundId: z.string().trim().min(1).max(100) })
const entryParamsSchema = z.object({ contentId: z.string().trim().min(1).max(240) })
const querySchema = z.object({ locale: localeSchema }).partial()
const activeEffectDefinitionParamsSchema = z.object({
  definitionKey: z.string().trim().min(3).max(240).refine((value) => value.includes(':')),
})
const activeEffectDefinitionListQuerySchema = z.object({
  locale: z.enum(['en-US', 'pt-BR']).optional(),
  kind: z.enum(['condition', 'effect', 'affliction']).optional(),
  q: z.string().trim().min(1).max(120).optional(),
  offset: z.coerce.number().int().min(0).max(100_000).optional(),
  limit: z.coerce.number().int().min(1).max(100).optional(),
})

export function registerPathfinder2eContentCatalogRoutes(app: FastifyInstance) {
  app.get('/api/game-systems/pathfinder-2e/content/rounds/:roundId', async (req, reply) => {
    const auth = requireAuth(req, reply)
    if (!auth) return

    const params = roundParamsSchema.safeParse(req.params)
    const query = querySchema.safeParse(req.query ?? {})
    if (!params.success || !query.success) return reply.status(400).send({ error: 'Consulta de conteúdo inválida' })

    const locale = query.data.locale ?? 'pt-BR'
    const round = getPathfinder2eRoundSummary(params.data.roundId)
    if (!round) return reply.status(404).send({ error: 'Rodada de conteúdo não encontrada' })

    return reply.send({
      round,
      entries: listPathfinder2eRoundEntries(params.data.roundId, locale),
    })
  })

  app.get('/api/game-systems/pathfinder-2e/content/entries/:contentId', async (req, reply) => {
    const auth = requireAuth(req, reply)
    if (!auth) return

    const params = entryParamsSchema.safeParse(req.params)
    const query = querySchema.safeParse(req.query ?? {})
    if (!params.success || !query.success) return reply.status(400).send({ error: 'Consulta de conteúdo inválida' })

    const entry = findPathfinder2eContentEntry(params.data.contentId, query.data.locale ?? 'pt-BR')
    if (!entry) return reply.status(404).send({ error: 'Conteúdo não encontrado' })

    return reply.send(entry)
  })

  app.get('/api/game-systems/pathfinder-2e/content/active-effect-references/:contentId', async (req, reply) => {
    const auth = requireAuth(req, reply)
    if (!auth) return

    const params = entryParamsSchema.safeParse(req.params)
    const query = querySchema.safeParse(req.query ?? {})
    if (!params.success || !query.success) {
      return reply.status(400).send({ error: 'Consulta de referências PF2e inválida' })
    }

    const locale = query.data.locale ?? 'pt-BR'
    return reply.send({
      contentId: params.data.contentId,
      locale,
      references: getPathfinder2eActiveEffectReferences(params.data.contentId, locale),
    })
  })

  app.get('/api/game-systems/pathfinder-2e/content/active-effects', async (req, reply) => {
    const auth = requireAuth(req, reply)
    if (!auth) return

    const query = activeEffectDefinitionListQuerySchema.safeParse(req.query ?? {})
    if (!query.success) return reply.status(400).send({ error: 'Consulta de efeitos PF2e inválida' })

    return reply.send(listPathfinder2eActiveEffectDefinitionViews({
      locale: query.data.locale ?? 'pt-BR',
      ...(query.data.kind ? { kind: query.data.kind } : {}),
      ...(query.data.q ? { query: query.data.q } : {}),
      ...(query.data.offset !== undefined ? { offset: query.data.offset } : {}),
      ...(query.data.limit !== undefined ? { limit: query.data.limit } : {}),
    }))
  })

  app.get('/api/game-systems/pathfinder-2e/content/active-effects/:definitionKey', async (req, reply) => {
    const auth = requireAuth(req, reply)
    if (!auth) return

    const params = activeEffectDefinitionParamsSchema.safeParse(req.params)
    const query = querySchema.safeParse(req.query ?? {})
    if (!params.success || !query.success) {
      return reply.status(400).send({ error: 'Consulta de efeito PF2e inválida' })
    }

    const definition = getPathfinder2eActiveEffectDefinitionView(
      params.data.definitionKey,
      query.data.locale ?? 'pt-BR',
    )
    if (!definition) return reply.status(404).send({ error: 'Definição de efeito PF2e não encontrada' })

    return reply.send(definition)
  })
}
