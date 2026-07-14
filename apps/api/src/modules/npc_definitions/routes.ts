import type { FastifyInstance } from 'fastify'
import { z } from 'zod'
import { prisma } from '../../db/prisma'
import { requireAuth } from '../../http/auth'
import { findPathfinder2eBestiaryCreature } from '../../../../../packages/game-system-pathfinder-2e/src/server/bestiary'
import {
  pathfinder2eCharacterSpellbookSchema,
  DEFAULT_PATHFINDER_2E_CHARACTER_SPELLBOOK,
} from '../../../../../packages/game-system-pathfinder-2e/src/server/character-spells/models'
import type { Pathfinder2eCharacterSpellbookData } from '../../../../../packages/game-system-pathfinder-2e/src/server/character-spells/models'

const campaignParamsSchema = z.object({
  campaignId: z.string().trim().min(1, 'Campanha invalida'),
})

const definitionParamsSchema = campaignParamsSchema.extend({
  definitionId: z.string().trim().min(1, 'NPC invalido'),
})

const createDefinitionBodySchema = z.object({
  bestiaryCreatureId: z.string().trim().min(1),
  name: z.string().trim().min(1).max(120),
})

const updateDefinitionBodySchema = z.object({
  name: z.string().trim().min(1).max(120),
})

const putSpellbookBodySchema = z.object({
  entries: z.array(z.unknown()),
  rituals: z.array(z.unknown()),
})

export type CampaignNpcDefinitionRecord = {
  id: string
  campaignId: string
  bestiaryCreatureId: string
  name: string
  spellbook: unknown
  createdAt: Date
  updatedAt: Date
}

export async function getMasterCampaignAccess(campaignId: string, userId: string) {
  return prisma.campaignCharacter.findFirst({
    where: { campaignId, userId, role: 'MASTER', status: 'ACTIVE' },
    select: { campaign: { select: { id: true, system: true } } },
  })
}

export async function getNpcDefinitionForMaster(campaignId: string, definitionId: string, userId: string) {
  const access = await getMasterCampaignAccess(campaignId, userId)
  if (!access) return null

  const definition = await prisma.campaignNpcDefinition.findFirst({
    where: { id: definitionId, campaignId },
  })
  if (!definition) return null

  return definition
}

export function parseNpcSpellbook(data: unknown): Pathfinder2eCharacterSpellbookData {
  const raw = (data as Record<string, unknown> | null)?.pathfinder2e
  const parsed = pathfinder2eCharacterSpellbookSchema.safeParse(raw ?? DEFAULT_PATHFINDER_2E_CHARACTER_SPELLBOOK)
  return parsed.success ? parsed.data : DEFAULT_PATHFINDER_2E_CHARACTER_SPELLBOOK
}

function serializeDefinition(definition: CampaignNpcDefinitionRecord) {
  return {
    id: definition.id,
    campaignId: definition.campaignId,
    bestiaryCreatureId: definition.bestiaryCreatureId,
    name: definition.name,
    spellbook: parseNpcSpellbook(definition.spellbook),
  }
}

export function registerNpcDefinitionRoutes(app: FastifyInstance) {
  app.get('/api/campaigns/:campaignId/npc-definitions', async (req, reply) => {
    const payload = requireAuth(req, reply)
    if (!payload) return

    const params = campaignParamsSchema.safeParse(req.params)
    if (!params.success) return reply.status(400).send({ error: 'Campanha invalida' })

    const access = await getMasterCampaignAccess(params.data.campaignId, payload.id)
    if (!access) return reply.status(403).send({ error: 'Apenas o Mestre pode gerenciar NPCs customizados' })

    const definitions = await prisma.campaignNpcDefinition.findMany({
      where: { campaignId: params.data.campaignId },
      orderBy: { createdAt: 'asc' },
    })
    return reply.send({ definitions: definitions.map(serializeDefinition) })
  })

  app.post('/api/campaigns/:campaignId/npc-definitions', async (req, reply) => {
    const payload = requireAuth(req, reply)
    if (!payload) return

    const params = campaignParamsSchema.safeParse(req.params)
    if (!params.success) return reply.status(400).send({ error: 'Campanha invalida' })

    const body = createDefinitionBodySchema.safeParse(req.body)
    if (!body.success) return reply.status(400).send({ error: 'Payload invalido' })

    const access = await getMasterCampaignAccess(params.data.campaignId, payload.id)
    if (!access) return reply.status(403).send({ error: 'Apenas o Mestre pode gerenciar NPCs customizados' })
    if (access.campaign.system !== 'PATHFINDER_2E') {
      return reply.status(400).send({ error: 'Customizacao de NPC disponivel apenas para Pathfinder 2e nesta fase' })
    }

    const creature = findPathfinder2eBestiaryCreature(body.data.bestiaryCreatureId)
    if (!creature) return reply.status(404).send({ error: 'Criatura nao encontrada no catalogo' })

    const definition = await prisma.campaignNpcDefinition.upsert({
      where: {
        campaignId_source_sourcePack_bestiaryCreatureId_name: {
          campaignId: params.data.campaignId,
          source: 'SYSTEM_CATALOG',
          sourcePack: creature.sourcePack,
          bestiaryCreatureId: body.data.bestiaryCreatureId,
          name: body.data.name,
        },
      },
      create: {
        campaignId: params.data.campaignId,
        system: 'PATHFINDER_2E',
        source: 'SYSTEM_CATALOG',
        sourcePack: creature.sourcePack,
        bestiaryCreatureId: body.data.bestiaryCreatureId,
        name: body.data.name,
        spellbook: { pathfinder2e: DEFAULT_PATHFINDER_2E_CHARACTER_SPELLBOOK } as never,
        createdByUserId: payload.id,
      },
      update: {},
    })

    return reply.send(serializeDefinition(definition))
  })

  app.patch('/api/campaigns/:campaignId/npc-definitions/:definitionId', async (req, reply) => {
    const payload = requireAuth(req, reply)
    if (!payload) return

    const params = definitionParamsSchema.safeParse(req.params)
    if (!params.success) return reply.status(400).send({ error: 'Parametros invalidos' })

    const body = updateDefinitionBodySchema.safeParse(req.body)
    if (!body.success) return reply.status(400).send({ error: 'Payload invalido' })

    const definition = await getNpcDefinitionForMaster(params.data.campaignId, params.data.definitionId, payload.id)
    if (!definition) return reply.status(404).send({ error: 'NPC customizado nao encontrado' })

    const updated = await prisma.campaignNpcDefinition.update({
      where: { id: definition.id },
      data: { name: body.data.name },
    })

    return reply.send(serializeDefinition(updated))
  })

  app.delete('/api/campaigns/:campaignId/npc-definitions/:definitionId', async (req, reply) => {
    const payload = requireAuth(req, reply)
    if (!payload) return

    const params = definitionParamsSchema.safeParse(req.params)
    if (!params.success) return reply.status(400).send({ error: 'Parametros invalidos' })

    const definition = await getNpcDefinitionForMaster(params.data.campaignId, params.data.definitionId, payload.id)
    if (!definition) return reply.status(404).send({ error: 'NPC customizado nao encontrado' })

    const tokenCount = await prisma.campaignSceneToken.count({ where: { campaignNpcDefinitionId: definition.id } })
    if (tokenCount > 0) {
      return reply.status(409).send({ error: 'Remova os tokens deste NPC das cenas antes de excluir a definicao' })
    }

    await prisma.campaignNpcDefinition.delete({ where: { id: definition.id } })
    return reply.send({ ok: true })
  })

  app.put('/api/campaigns/:campaignId/npc-definitions/:definitionId/spellbook', async (req, reply) => {
    const payload = requireAuth(req, reply)
    if (!payload) return

    const params = definitionParamsSchema.safeParse(req.params)
    if (!params.success) return reply.status(400).send({ error: 'Parametros invalidos' })

    const body = putSpellbookBodySchema.safeParse(req.body)
    if (!body.success) return reply.status(400).send({ error: 'Payload invalido' })

    const definition = await getNpcDefinitionForMaster(params.data.campaignId, params.data.definitionId, payload.id)
    if (!definition) return reply.status(404).send({ error: 'NPC customizado nao encontrado' })

    const parsed = pathfinder2eCharacterSpellbookSchema.safeParse(body.data)
    if (!parsed.success) return reply.status(400).send({ error: 'Livro de magias invalido' })

    const updated = await prisma.campaignNpcDefinition.update({
      where: { id: definition.id },
      data: { spellbook: { pathfinder2e: parsed.data } as never },
    })

    return reply.send(serializeDefinition(updated))
  })
}
