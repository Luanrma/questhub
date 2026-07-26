import type { Prisma } from '@prisma/client'
import type { FastifyInstance } from 'fastify'
import { z } from 'zod'
import { prisma } from '../db/prisma'
import { requireAuth } from '../http/auth'
import {
  GAME_SYSTEM_DESCRIPTORS,
  getGameSystemCatalogProvider,
  getGameSystemDescriptor,
  type GameSystemCatalogDomain,
  type GameSystemContentLocale,
  type GameSystemKey,
} from './catalog'
import { getGameSystemCharacterSheetManagerProvider } from './character-sheets'

const campaignParamsSchema = z.object({ campaignId: z.string().trim().min(1) })
const inviteParamsSchema = z.object({ inviteCode: z.string().trim().min(1) })
const setCampaignGameSystemSchema = z.object({
  gameSystem: z.enum(['PATHFINDER_2E']),
}).strict()
const catalogParamsSchema = campaignParamsSchema.extend({
  domain: z.enum(['bestiary', 'spells', 'items']),
})
const catalogQuerySchema = z.object({
  locale: z.enum(['en-US', 'pt-BR']).default('pt-BR'),
  q: z.string().trim().max(120).optional(),
  page: z.coerce.number().int().min(1).default(1),
  limit: z.coerce.number().int().min(1).max(60).default(24),
})
const createCharacterSheetSchema = z.object({
  name: z.string().trim().min(1).max(80),
  role: z.enum(['MASTER', 'PLAYER', 'NPC']),
  assignedUserId: z.string().trim().min(1).optional(),
  avatarUrl: z.string().trim().max(2048).nullable().optional(),
  bio: z.string().trim().max(2000).nullable().optional(),
}).superRefine((value, context) => {
  if (value.role === 'PLAYER' && !value.assignedUserId) {
    context.addIssue({
      code: 'custom',
      path: ['assignedUserId'],
      message: 'Selecione o Player que recebera a ficha',
    })
  }
})

const domainByPath: Record<'bestiary' | 'spells' | 'items', GameSystemCatalogDomain> = {
  bestiary: 'BESTIARY',
  spells: 'SPELLS',
  items: 'ITEMS',
}

async function findAccessibleCampaign(campaignId: string, userId: string) {
  return prisma.campaign.findFirst({
    where: {
      id: campaignId,
      characters: {
        some: {
          userId,
          status: 'ACTIVE',
        },
      },
    },
    select: {
      id: true,
      gameSystem: true,
    },
  })
}

async function findMasterCampaign(campaignId: string, userId: string) {
  return prisma.campaign.findFirst({
    where: {
      id: campaignId,
      characters: {
        some: {
          userId,
          role: 'MASTER',
          status: 'ACTIVE',
        },
      },
    },
    select: {
      id: true,
      gameSystem: true,
      createdByUserId: true,
    },
  })
}

async function listAssignmentTargets(campaignId: string) {
  const entries = await prisma.campaignCharacter.findMany({
    where: {
      campaignId,
      role: { in: ['MASTER', 'PLAYER'] },
      status: 'ACTIVE',
    },
    select: {
      userId: true,
      role: true,
      character: {
        select: {
          id: true,
          name: true,
          sheet: { select: { id: true } },
          user: { select: { email: true } },
        },
      },
    },
    orderBy: [{ role: 'asc' }, { createdAt: 'asc' }],
  })

  return entries.map((entry) => ({
    userId: entry.userId,
    role: entry.role,
    email: entry.character.user.email,
    identityCharacterId: entry.character.id,
    identityName: entry.character.name,
    hasSheet: Boolean(entry.character.sheet),
  }))
}

export function registerGameSystemRoutes(app: FastifyInstance) {
  app.get('/api/game-systems', async (req, reply) => {
    const auth = requireAuth(req, reply)
    if (!auth) return
    return reply.send(GAME_SYSTEM_DESCRIPTORS)
  })

  app.get('/api/game-systems/campaign-invites/:inviteCode', async (req, reply) => {
    const auth = requireAuth(req, reply)
    if (!auth) return

    const params = inviteParamsSchema.safeParse(req.params)
    if (!params.success) return reply.status(400).send({ error: 'Codigo de convite invalido' })

    const campaign = await prisma.campaign.findUnique({
      where: { inviteCode: params.data.inviteCode.toUpperCase() },
      select: { id: true, gameSystem: true },
    })
    if (!campaign) return reply.status(404).send({ error: 'Campanha nao encontrada' })

    const descriptor = getGameSystemDescriptor(campaign.gameSystem)
    if (!descriptor) return reply.status(409).send({ error: 'Sistema de jogo nao suportado' })

    return reply.send({
      campaignId: campaign.id,
      gameSystem: campaign.gameSystem,
      descriptor,
    })
  })

  app.get('/api/campaigns/:campaignId/game-system', async (req, reply) => {
    const auth = requireAuth(req, reply)
    if (!auth) return

    const params = campaignParamsSchema.safeParse(req.params)
    if (!params.success) return reply.status(400).send({ error: 'Campanha invalida' })

    const campaign = await findAccessibleCampaign(params.data.campaignId, auth.id)
    if (!campaign) return reply.status(404).send({ error: 'Campanha nao encontrada' })

    const descriptor = getGameSystemDescriptor(campaign.gameSystem)
    if (!descriptor) return reply.status(409).send({ error: 'Sistema de jogo nao suportado' })

    return reply.send({
      campaignId: campaign.id,
      gameSystem: campaign.gameSystem,
      descriptor,
      catalogAvailable: Boolean(getGameSystemCatalogProvider(campaign.gameSystem as GameSystemKey)),
      characterSheetsAvailable: Boolean(
        getGameSystemCharacterSheetManagerProvider(campaign.gameSystem as GameSystemKey),
      ),
    })
  })

  app.patch('/api/campaigns/:campaignId/game-system', async (req, reply) => {
    const auth = requireAuth(req, reply)
    if (!auth) return

    const params = campaignParamsSchema.safeParse(req.params)
    const body = setCampaignGameSystemSchema.safeParse(req.body ?? {})
    if (!params.success || !body.success) {
      return reply.status(400).send({ error: body.success ? 'Campanha invalida' : body.error.flatten() })
    }

    const campaign = await findMasterCampaign(params.data.campaignId, auth.id)
    if (!campaign) return reply.status(403).send({ error: 'Apenas o Mestre pode definir o sistema' })

    const descriptor = getGameSystemDescriptor(body.data.gameSystem)
    if (!descriptor) return reply.status(409).send({ error: 'Sistema de jogo nao suportado' })

    const sheetCount = await prisma.characterSheet.count({
      where: {
        character: {
          campaigns: {
            some: { campaignId: campaign.id },
          },
        },
      },
    })
    if (sheetCount > 0 && campaign.gameSystem !== body.data.gameSystem) {
      return reply.status(409).send({ error: 'O sistema nao pode ser alterado depois da criacao de fichas' })
    }

    const updated = await prisma.$transaction(async (tx) => {
      const result = await tx.campaign.update({
        where: { id: campaign.id },
        data: { gameSystem: body.data.gameSystem },
        select: { id: true, gameSystem: true },
      })

      await tx.character.updateMany({
        where: {
          campaigns: {
            some: { campaignId: campaign.id },
          },
        },
        data: { gameSystem: body.data.gameSystem },
      })

      return result
    })

    return reply.send({
      campaignId: updated.id,
      gameSystem: updated.gameSystem,
      descriptor,
    })
  })

  app.get('/api/campaigns/:campaignId/character-sheets', async (req, reply) => {
    const auth = requireAuth(req, reply)
    if (!auth) return

    const params = campaignParamsSchema.safeParse(req.params)
    if (!params.success) return reply.status(400).send({ error: 'Campanha invalida' })

    const campaign = await findMasterCampaign(params.data.campaignId, auth.id)
    if (!campaign) return reply.status(403).send({ error: 'Apenas o Mestre pode gerenciar fichas' })

    const descriptor = getGameSystemDescriptor(campaign.gameSystem)
    if (!descriptor) return reply.status(409).send({ error: 'Sistema de jogo nao suportado' })

    const provider = getGameSystemCharacterSheetManagerProvider(campaign.gameSystem as GameSystemKey)
    const assignmentTargets = await listAssignmentTargets(campaign.id)
    if (!provider) {
      return reply.send({
        available: false,
        system: descriptor,
        entries: [],
        assignmentTargets,
      })
    }

    const entries = await provider.list({ campaignId: campaign.id })
    return reply.send({
      available: true,
      system: descriptor,
      entries,
      assignmentTargets,
    })
  })

  app.post('/api/campaigns/:campaignId/character-sheets', async (req, reply) => {
    const auth = requireAuth(req, reply)
    if (!auth) return

    const params = campaignParamsSchema.safeParse(req.params)
    const body = createCharacterSheetSchema.safeParse(req.body ?? {})
    if (!params.success || !body.success) {
      return reply.status(400).send({ error: body.success ? 'Campanha invalida' : body.error.flatten() })
    }

    const campaign = await findMasterCampaign(params.data.campaignId, auth.id)
    if (!campaign) return reply.status(403).send({ error: 'Apenas o Mestre pode criar fichas' })

    const provider = getGameSystemCharacterSheetManagerProvider(campaign.gameSystem as GameSystemKey)
    if (!provider) return reply.status(409).send({ error: 'O sistema da campanha nao fornece fichas' })

    const defaultSheet = provider.createDefault()

    try {
      const characterId = await prisma.$transaction(async (tx) => {
        if (body.data.role === 'NPC') {
          const character = await tx.character.create({
            data: {
              userId: auth.id,
              name: body.data.name,
              avatarUrl: body.data.avatarUrl?.trim() || null,
              bio: body.data.bio?.trim() || null,
              gameSystem: campaign.gameSystem,
            },
            select: { id: true },
          })

          await tx.campaignCharacter.create({
            data: {
              campaignId: campaign.id,
              characterId: character.id,
              userId: auth.id,
              role: 'NPC',
              status: 'ACTIVE',
              joinedAt: new Date(),
            },
          })

          await tx.characterSheet.create({
            data: {
              characterId: character.id,
              systemKey: defaultSheet.systemKey,
              schemaVersion: defaultSheet.schemaVersion,
              data: defaultSheet.data as Prisma.InputJsonValue,
            },
          })

          return character.id
        }

        const targetUserId = body.data.role === 'MASTER' ? auth.id : body.data.assignedUserId
        if (!targetUserId) throw new Error('ASSIGNMENT_REQUIRED')

        const identity = await tx.campaignCharacter.findFirst({
          where: {
            campaignId: campaign.id,
            userId: targetUserId,
            role: body.data.role,
            status: 'ACTIVE',
          },
          select: {
            characterId: true,
            character: { select: { sheet: { select: { id: true } } } },
          },
        })
        if (!identity) throw new Error('ASSIGNMENT_NOT_FOUND')
        if (identity.character.sheet) throw new Error('ASSIGNMENT_ALREADY_HAS_SHEET')

        await tx.character.update({
          where: { id: identity.characterId },
          data: {
            name: body.data.name,
            avatarUrl: body.data.avatarUrl?.trim() || null,
            bio: body.data.bio?.trim() || null,
            gameSystem: campaign.gameSystem,
          },
        })

        await tx.characterSheet.create({
          data: {
            characterId: identity.characterId,
            systemKey: defaultSheet.systemKey,
            schemaVersion: defaultSheet.schemaVersion,
            data: defaultSheet.data as Prisma.InputJsonValue,
          },
        })

        return identity.characterId
      })

      const entries = await provider.list({ campaignId: campaign.id })
      const entry = entries.find((candidate) => candidate.characterId === characterId)
      return reply.status(201).send({ characterId, entry: entry ?? null })
    } catch (error) {
      const message = error instanceof Error ? error.message : ''
      if (message === 'ASSIGNMENT_REQUIRED') return reply.status(400).send({ error: 'Selecione quem recebera a ficha' })
      if (message === 'ASSIGNMENT_NOT_FOUND') return reply.status(404).send({ error: 'Participante ativo nao encontrado' })
      if (message === 'ASSIGNMENT_ALREADY_HAS_SHEET') return reply.status(409).send({ error: 'Este participante ja possui uma ficha' })
      throw error
    }
  })

  app.get('/api/campaigns/:campaignId/catalog/:domain', async (req, reply) => {
    const auth = requireAuth(req, reply)
    if (!auth) return

    const params = catalogParamsSchema.safeParse(req.params)
    const query = catalogQuerySchema.safeParse(req.query ?? {})
    if (!params.success || !query.success) {
      return reply.status(400).send({ error: 'Consulta de catalogo invalida' })
    }

    const campaign = await findAccessibleCampaign(params.data.campaignId, auth.id)
    if (!campaign) return reply.status(404).send({ error: 'Campanha nao encontrada' })

    const descriptor = getGameSystemDescriptor(campaign.gameSystem)
    if (!descriptor) return reply.status(409).send({ error: 'Sistema de jogo nao suportado' })

    const domain = domainByPath[params.data.domain]
    if (!descriptor.catalogDomains.includes(domain)) {
      return reply.status(404).send({ error: 'Catalogo nao disponivel para este sistema' })
    }

    const provider = getGameSystemCatalogProvider(campaign.gameSystem as GameSystemKey)
    if (!provider) {
      return reply.send({
        available: false,
        system: descriptor,
        domain,
        locale: query.data.locale as GameSystemContentLocale,
        entries: [],
        pagination: {
          page: query.data.page,
          limit: query.data.limit,
          total: 0,
          totalPages: 0,
        },
      })
    }

    const result = await provider.list({
      campaignId: campaign.id,
      domain,
      locale: query.data.locale as GameSystemContentLocale,
      search: query.data.q,
      page: query.data.page,
      limit: query.data.limit,
    })

    return reply.send({
      available: true,
      system: descriptor,
      domain,
      locale: query.data.locale,
      ...result,
    })
  })
}
