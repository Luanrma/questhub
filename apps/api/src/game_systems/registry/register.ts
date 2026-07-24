import type { Prisma } from '@prisma/client'
import type { FastifyInstance } from 'fastify'
import { z } from 'zod'
import { prisma } from '../../db/prisma'
import { requireAuth } from '../../http/auth'
import {
  GAME_SYSTEM_DESCRIPTORS,
  getGameSystemCatalogProvider,
  getGameSystemDescriptor,
  type GameSystemCatalogDomain,
  type GameSystemContentLocale,
  type GameSystemKey,
} from '../catalog'
import { getGameSystemCharacterSheetManagerProvider } from '../character-sheets'

const campaignParamsSchema = z.object({ campaignId: z.string().trim().min(1) })
const sheetParamsSchema = campaignParamsSchema.extend({ sheetId: z.string().trim().min(1) })
const tokenSheetParamsSchema = campaignParamsSchema.extend({ tokenId: z.string().trim().min(1) })
const inviteParamsSchema = z.object({ inviteCode: z.string().trim().min(1) })
const catalogParamsSchema = campaignParamsSchema.extend({
  domain: z.enum(['bestiary', 'spells', 'items']),
})
const catalogEntryParamsSchema = catalogParamsSchema.extend({
  contentId: z.string().trim().min(1),
})
const catalogQuerySchema = z.object({
  locale: z.enum(['en-US', 'pt-BR']).default('pt-BR'),
  q: z.string().trim().max(120).optional(),
  editorialStatus: z.enum(['all', 'review', 'ready']).default('all'),
  page: z.coerce.number().int().min(1).default(1),
  limit: z.coerce.number().int().min(1).max(60).default(24),
})
const catalogEntryQuerySchema = z.object({
  locale: z.enum(['en-US', 'pt-BR']).default('pt-BR'),
})
const createCharacterSheetSchema = z.object({
  name: z.string().trim().min(1).max(80),
  avatarUrl: z.string().trim().max(2048).nullable().optional(),
  bio: z.string().trim().max(2000).nullable().optional(),
})
const updateCharacterSheetAssignmentsSchema = z.object({
  assignedUserId: z.string().trim().min(1).nullable().optional(),
  tokenId: z.string().trim().min(1).nullable().optional(),
}).refine(
  (value) => value.assignedUserId !== undefined || value.tokenId !== undefined,
  'Informe ao menos uma atribuição para alterar',
)
const setCampaignGameSystemSchema = z.object({
  gameSystem: z.enum(['PATHFINDER_2E']),
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

async function findActiveCampaignRole(campaignId: string, userId: string) {
  return prisma.campaignCharacter.findFirst({
    where: { campaignId, userId, status: 'ACTIVE' },
    select: { role: true },
  })
}

async function listAssignmentTargets(campaignId: string) {
  const [participants, tokens] = await Promise.all([
    prisma.campaignCharacter.findMany({
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
            user: { select: { email: true } },
          },
        },
      },
      orderBy: [{ role: 'asc' }, { createdAt: 'asc' }],
    }),
    prisma.campaignToken.findMany({
      where: { campaignId },
      select: {
        id: true,
        name: true,
        characterSheet: { select: { id: true } },
      },
      orderBy: { createdAt: 'asc' },
    }),
  ])

  return {
    users: participants.map((entry) => ({
      userId: entry.userId,
      role: entry.role,
      email: entry.character.user.email,
    })),
    tokens: tokens.map((token) => ({
      tokenId: token.id,
      name: token.name,
      assignedSheetId: token.characterSheet?.id ?? null,
    })),
  }
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

    const sheetCount = await prisma.campaignCharacterSheet.count({
      where: { campaignId: campaign.id },
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
    const created = await prisma.campaignCharacterSheet.create({
      data: {
        campaignId: campaign.id,
        createdByUserId: auth.id,
        name: body.data.name,
        avatarUrl: body.data.avatarUrl?.trim() || null,
        bio: body.data.bio?.trim() || null,
        systemKey: defaultSheet.systemKey,
        schemaVersion: defaultSheet.schemaVersion,
        data: defaultSheet.data as Prisma.InputJsonValue,
      },
      select: { id: true },
    })

    const entries = await provider.list({ campaignId: campaign.id })
    const entry = entries.find((candidate) => candidate.sheetId === created.id)
    return reply.status(201).send({ sheetId: created.id, entry: entry ?? null })
  })

  app.patch('/api/campaigns/:campaignId/character-sheets/:sheetId/assignments', async (req, reply) => {
    const auth = requireAuth(req, reply)
    if (!auth) return

    const params = sheetParamsSchema.safeParse(req.params)
    const body = updateCharacterSheetAssignmentsSchema.safeParse(req.body ?? {})
    if (!params.success || !body.success) {
      return reply.status(400).send({ error: body.success ? 'Ficha invalida' : body.error.flatten() })
    }

    const campaign = await findMasterCampaign(params.data.campaignId, auth.id)
    if (!campaign) return reply.status(403).send({ error: 'Apenas o Mestre pode atribuir fichas' })

    const sheet = await prisma.campaignCharacterSheet.findFirst({
      where: { id: params.data.sheetId, campaignId: campaign.id },
      select: { id: true },
    })
    if (!sheet) return reply.status(404).send({ error: 'Ficha nao encontrada' })

    if (body.data.assignedUserId) {
      const participant = await prisma.campaignCharacter.findFirst({
        where: {
          campaignId: campaign.id,
          userId: body.data.assignedUserId,
          role: { in: ['MASTER', 'PLAYER'] },
          status: 'ACTIVE',
        },
        select: { id: true },
      })
      if (!participant) return reply.status(400).send({ error: 'Usuario nao participa ativamente da campanha' })
    }

    if (body.data.tokenId) {
      const token = await prisma.campaignToken.findFirst({
        where: { id: body.data.tokenId, campaignId: campaign.id },
        select: { id: true },
      })
      if (!token) return reply.status(400).send({ error: 'Token nao pertence a esta campanha' })
    }

    try {
      const updated = await prisma.campaignCharacterSheet.update({
        where: { id: sheet.id },
        data: {
          ...(body.data.assignedUserId !== undefined ? { assignedUserId: body.data.assignedUserId } : {}),
          ...(body.data.tokenId !== undefined ? { tokenId: body.data.tokenId } : {}),
        },
        select: {
          id: true,
          assignedUser: { select: { id: true, email: true } },
          token: { select: { id: true, name: true } },
        },
      })

      return reply.send({
        sheetId: updated.id,
        assignedUser: updated.assignedUser
          ? { id: updated.assignedUser.id, label: updated.assignedUser.email }
          : null,
        token: updated.token,
      })
    } catch (error: unknown) {
      const prismaError = error as { code?: string }
      if (prismaError.code === 'P2002') {
        return reply.status(409).send({ error: 'Este Token ja esta vinculado a outra ficha' })
      }
      throw error
    }
  })

  app.get('/api/campaigns/:campaignId/tokens/:tokenId/character-sheet', async (req, reply) => {
    const auth = requireAuth(req, reply)
    if (!auth) return

    const params = tokenSheetParamsSchema.safeParse(req.params)
    if (!params.success) return reply.status(400).send({ error: 'Token invalido' })

    const role = await findActiveCampaignRole(params.data.campaignId, auth.id)
    if (!role) return reply.status(403).send({ error: 'Acesso nao liberado' })

    const token = await prisma.campaignToken.findFirst({
      where: { id: params.data.tokenId, campaignId: params.data.campaignId },
      select: {
        controllerMember: { select: { userId: true } },
        characterSheet: {
          select: {
            id: true,
            name: true,
            assignedUserId: true,
          },
        },
      },
    })
    if (!token?.characterSheet) return reply.status(404).send({ error: 'Token sem ficha vinculada' })

    const canOpen = role.role === 'MASTER'
      || token.controllerMember?.userId === auth.id
      || token.characterSheet.assignedUserId === auth.id
    if (!canOpen) return reply.status(403).send({ error: 'Sem permissao para abrir esta ficha' })

    return reply.send({
      sheetId: token.characterSheet.id,
      title: token.characterSheet.name,
    })
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
      editorialStatus: query.data.editorialStatus,
      page: query.data.page,
      limit: query.data.limit,
    })

    return reply.send({
      available: true,
      system: descriptor,
      domain,
      locale: query.data.locale,
      editorialStatus: query.data.editorialStatus,
      ...result,
    })
  })

  app.get('/api/campaigns/:campaignId/catalog/:domain/:contentId', async (req, reply) => {
    const auth = requireAuth(req, reply)
    if (!auth) return

    const params = catalogEntryParamsSchema.safeParse(req.params)
    const query = catalogEntryQuerySchema.safeParse(req.query ?? {})
    if (!params.success || !query.success) {
      return reply.status(400).send({ error: 'Consulta de ficha invalida' })
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
    if (!provider) return reply.status(404).send({ error: 'Catalogo ainda nao instalado' })

    const entry = await provider.get({
      campaignId: campaign.id,
      domain,
      locale: query.data.locale as GameSystemContentLocale,
      contentId: params.data.contentId,
    })
    if (!entry) return reply.status(404).send({ error: 'Entidade nao encontrada' })

    return reply.send({
      available: true,
      system: descriptor,
      domain,
      locale: query.data.locale,
      entry,
    })
  })
}
