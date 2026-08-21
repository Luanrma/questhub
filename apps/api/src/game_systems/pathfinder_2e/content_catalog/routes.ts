import type { FastifyInstance } from 'fastify'
import { z } from 'zod'
import { requireAuth } from '../../../http/auth'
import {
  findPathfinder2eContentEntry,
  getPathfinder2eRoundSummary,
  listPathfinder2eRoundEntries,
} from './catalog'
import { getPathfinder2eSourceReferences } from './source-references'

const localeSchema = z.enum(['en-US', 'pt-BR']).default('pt-BR')
const roundParamsSchema = z.object({ roundId: z.string().trim().min(1).max(100) })
const entryParamsSchema = z.object({ contentId: z.string().trim().min(1).max(240) })
const querySchema = z.object({ locale: localeSchema }).partial()

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

  app.get('/api/game-systems/pathfinder-2e/content/entries/:contentId/source-references', async (req, reply) => {
    const auth = requireAuth(req, reply)
    if (!auth) return

    const params = entryParamsSchema.safeParse(req.params)
    if (!params.success) return reply.status(400).send({ error: 'Content ID inválido' })

    const entry = findPathfinder2eContentEntry(params.data.contentId, 'pt-BR')
    if (!entry) return reply.status(404).send({ error: 'Conteúdo não encontrado' })

    const references = getPathfinder2eSourceReferences(params.data.contentId)

    return reply.send({
      contentId: params.data.contentId,
      count: references.length,
      references,
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
}
