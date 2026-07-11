import type { FastifyInstance } from 'fastify'
import { z } from 'zod'
import { requireAuth } from '../../../http/auth'
import { countCharacterOptions, findCharacterOption, listCharacterOptions } from './registry'

const characterOptionKindSchema = z.enum(['class', 'ancestry', 'heritage', 'background'])

const characterOptionsParamsSchema = z.object({
  system: z.string().trim().min(1, 'Sistema invalido'),
})

const characterOptionParamsSchema = characterOptionsParamsSchema.extend({
  kind: characterOptionKindSchema,
  entryId: z.string().trim().min(1, 'Opcao invalida'),
})

const characterOptionsQuerySchema = z.object({
  kind: characterOptionKindSchema,
  q: z.string().trim().max(80).optional(),
  rarity: z.string().trim().max(40).optional(),
  ancestryId: z.string().trim().max(120).optional(),
  page: z.coerce.number().int().min(1).default(1),
  limit: z.coerce.number().int().min(1).max(50).default(20),
})

const heritageOptionsQuerySchema = characterOptionsQuerySchema.omit({ kind: true }).extend({
  ancestryId: z.string().trim().min(1, 'Ancestralidade invalida').max(120),
})

function buildFilters(query: { rarity?: string; ancestryId?: string }) {
  return {
    ...(query.rarity ? { rarity: query.rarity } : {}),
    ...(query.ancestryId ? { ancestryId: query.ancestryId } : {}),
  }
}

export function registerCharacterOptionsRoutes(app: FastifyInstance) {
  app.get('/api/game-systems/:system/character-options', async (req, reply) => {
    const payload = requireAuth(req, reply)
    if (!payload) return

    const params = characterOptionsParamsSchema.safeParse(req.params)
    if (!params.success) return reply.status(400).send({ error: 'Sistema invalido' })

    const query = characterOptionsQuerySchema.safeParse(req.query)
    if (!query.success) return reply.status(400).send({ error: 'Busca invalida' })

    const filters = buildFilters(query.data)
    const options = {
      kind: query.data.kind,
      search: query.data.q,
      filters,
      limit: query.data.limit,
      offset: (query.data.page - 1) * query.data.limit,
    }

    const entries = listCharacterOptions(params.data.system, options)
    if (!entries) return reply.status(404).send({ error: 'Catalogo de opcoes nao disponivel para este sistema' })

    const total = countCharacterOptions(params.data.system, {
      kind: query.data.kind,
      search: query.data.q,
      filters,
    }) ?? 0

    return reply.send({
      system: params.data.system,
      kind: query.data.kind,
      pagination: {
        page: query.data.page,
        limit: query.data.limit,
        total,
        totalPages: Math.max(1, Math.ceil(total / query.data.limit)),
      },
      entries,
    })
  })

  app.get('/api/game-systems/:system/character-options/heritages', async (req, reply) => {
    const payload = requireAuth(req, reply)
    if (!payload) return

    const params = characterOptionsParamsSchema.safeParse(req.params)
    if (!params.success) return reply.status(400).send({ error: 'Sistema invalido' })

    const query = heritageOptionsQuerySchema.safeParse(req.query)
    if (!query.success) return reply.status(400).send({ error: 'Busca invalida' })

    const filters = buildFilters(query.data)
    const options = {
      kind: 'heritage' as const,
      search: query.data.q,
      filters,
      limit: query.data.limit,
      offset: (query.data.page - 1) * query.data.limit,
    }

    const entries = listCharacterOptions(params.data.system, options)
    if (!entries) return reply.status(404).send({ error: 'Catalogo de opcoes nao disponivel para este sistema' })

    const total = countCharacterOptions(params.data.system, {
      kind: 'heritage',
      search: query.data.q,
      filters,
    }) ?? 0

    return reply.send({
      system: params.data.system,
      kind: 'heritage',
      ancestryId: query.data.ancestryId,
      pagination: {
        page: query.data.page,
        limit: query.data.limit,
        total,
        totalPages: Math.max(1, Math.ceil(total / query.data.limit)),
      },
      entries,
    })
  })

  app.get('/api/game-systems/:system/character-options/:kind/:entryId', async (req, reply) => {
    const payload = requireAuth(req, reply)
    if (!payload) return

    const params = characterOptionParamsSchema.safeParse(req.params)
    if (!params.success) return reply.status(400).send({ error: 'Opcao invalida' })

    const entry = findCharacterOption(params.data.system, params.data.kind, params.data.entryId)
    if (!entry) return reply.status(404).send({ error: 'Opcao nao encontrada no catalogo deste sistema' })

    return reply.send(entry)
  })
}

