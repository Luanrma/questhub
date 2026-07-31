import type { Prisma } from '@prisma/client'
import type { FastifyInstance } from 'fastify'
import { z } from 'zod'
import { prisma, withoutCampaignActorInventory } from '../../db/prisma'
import { requireAuth } from '../../http/auth'
import type { GameSystemAutomationEventPublisher } from '../automation/contracts'
import {
  catalogTokenSheetSystemKey,
  createCatalogTokenSheetEnvelope,
  GAME_SYSTEM_DESCRIPTORS,
  getGameSystemCatalogProvider,
  getGameSystemDescriptor,
  parseCatalogTokenSheetEnvelope,
  resolveCatalogTokenSize,
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
const catalogFilterSchema = z.string()
  .trim()
  .min(3)
  .max(160)
  .refine((value) => {
    const separatorIndex = value.indexOf(':')
    return separatorIndex > 0
      && separatorIndex <= 40
      && separatorIndex < value.length - 1
  })
const catalogQuerySchema = z.object({
  locale: z.enum(['en-US', 'pt-BR']).default('pt-BR'),
  q: z.string().trim().max(120).optional(),
  editorialStatus: z.enum(['all', 'review', 'ready']).default('all'),
  filter: z.preprocess(
    (value) => value === undefined ? [] : Array.isArray(value) ? value : [value],
    z.array(catalogFilterSchema).max(24),
  ),
  page: z.coerce.number().int().min(1).default(1),
  limit: z.coerce.number().int().min(1).max(60).default(24),
})
const catalogEntryQuerySchema = z.object({
  locale: z.enum(['en-US', 'pt-BR']).default('pt-BR'),
})
const catalogTokenCreateSchema = z.object({
  locale: z.enum(['en-US', 'pt-BR']).default('pt-BR'),
})
const gameSystemTokenParamsSchema = campaignParamsSchema.extend({
  tokenId: z.string().trim().min(1),
})
const simplifiedSheetParamsSchema = campaignParamsSchema.extend({
  sheetId: z.string().trim().min(1),
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

function groupCatalogFilters(filters: readonly string[]) {
  return filters.reduce<Record<string, string[]>>((selection, filter) => {
    const separatorIndex = filter.indexOf(':')
    const id = filter.slice(0, separatorIndex)
    const value = filter.slice(separatorIndex + 1)
    const values = selection[id] ?? []
    if (!values.includes(value)) values.push(value)
    selection[id] = values
    return selection
  }, {})
}

async function findAccessibleCampaign(campaignId: string, userId: string) {
  return prisma.campaign.findFirst({
    where: {
      id: campaignId,
      members: {
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
      members: {
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
  return prisma.campaignMember.findFirst({
    where: { campaignId, userId, status: 'ACTIVE' },
    select: { role: true },
  })
}

function asPrismaJson(value: unknown): Prisma.InputJsonValue {
  return JSON.parse(JSON.stringify(value)) as Prisma.InputJsonValue
}

async function listAssignmentTargets(campaignId: string) {
  const [participants, tokens] = await Promise.all([
    prisma.campaignMember.findMany({
      where: {
        campaignId,
        role: { in: ['MASTER', 'PLAYER'] },
        status: 'ACTIVE',
      },
      select: {
        userId: true,
        role: true,
        user: { select: { email: true } },
      },
      orderBy: [{ role: 'asc' }, { createdAt: 'asc' }],
    }),
    prisma.campaignToken.findMany({
      where: { campaignId },
      select: {
        id: true,
        name: true,
        actor: {
          select: {
            characterSheet: { select: { id: true } },
          },
        },
      },
      orderBy: { createdAt: 'asc' },
    }),
  ])

  return {
    users: participants.map((entry) => ({
      userId: entry.userId,
      role: entry.role,
      email: entry.user.email,
    })),
    tokens: tokens.map((token) => ({
      tokenId: token.id,
      name: token.name,
      assignedSheetId: token.actor?.characterSheet?.id ?? null,
    })),
  }
}

export function registerGameSystemRoutes(
  app: FastifyInstance,
  events: GameSystemAutomationEventPublisher,
) {
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
      where: { actor: { campaignId: campaign.id } },
    })
    if (sheetCount > 0 && campaign.gameSystem !== body.data.gameSystem) {
      return reply.status(409).send({ error: 'O sistema nao pode ser alterado depois da criacao de fichas' })
    }

    const updated = await prisma.campaign.update({
      where: { id: campaign.id },
      data: { gameSystem: body.data.gameSystem },
      select: { id: true, gameSystem: true },
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
    const created = await prisma.$transaction(async (tx) => {
      const actor = await tx.campaignActor.create({
        data: {
          campaignId: campaign.id,
          name: body.data.name,
          avatarUrl: body.data.avatarUrl?.trim() || null,
          bio: body.data.bio?.trim() || null,
          inventory: { create: {} },
        },
        select: { id: true },
      })

      return tx.campaignCharacterSheet.create({
        data: {
          actorId: actor.id,
          createdByUserId: auth.id,
          systemKey: defaultSheet.systemKey,
          schemaVersion: defaultSheet.schemaVersion,
          data: defaultSheet.data as Prisma.InputJsonValue,
        },
        select: { id: true },
      })
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
      where: { id: params.data.sheetId, actor: { campaignId: campaign.id } },
      select: {
        id: true,
        actorId: true,
        actor: { select: { token: { select: { id: true } } } },
      },
    })
    if (!sheet) return reply.status(404).send({ error: 'Ficha nao encontrada' })

    let controllerMemberId: string | null | undefined
    if (body.data.assignedUserId !== undefined) {
      if (body.data.assignedUserId === null) {
        controllerMemberId = null
      } else {
        const participant = await prisma.campaignMember.findFirst({
          where: {
            campaignId: campaign.id,
            userId: body.data.assignedUserId,
            role: { in: ['MASTER', 'PLAYER'] },
            status: 'ACTIVE',
          },
          select: { id: true },
        })
        if (!participant) return reply.status(400).send({ error: 'Usuario nao participa ativamente da campanha' })
        controllerMemberId = participant.id
      }
    }

    let selectedTokenId: string | null | undefined
    if (body.data.tokenId !== undefined) {
      if (body.data.tokenId === null) {
        selectedTokenId = null
      } else {
        const token = await prisma.campaignToken.findFirst({
          where: { id: body.data.tokenId, campaignId: campaign.id },
          select: { id: true },
        })
        if (!token) return reply.status(400).send({ error: 'Token nao pertence a esta campanha' })
        selectedTokenId = token.id
      }
    }

    const updated = await prisma.$transaction(async (tx) => {
      if (controllerMemberId !== undefined) {
        await tx.campaignActor.update({
          where: { id: sheet.actorId },
          data: { controllerMemberId },
        })
      }

      if (selectedTokenId !== undefined) {
        await tx.campaignToken.updateMany({
          where: { campaignId: campaign.id, actorId: sheet.actorId },
          data: { actorId: null },
        })
        if (selectedTokenId) {
          await tx.campaignToken.update({
            where: { id: selectedTokenId },
            data: { actorId: sheet.actorId },
          })
        }
      }

      return tx.campaignActor.findUnique({
        where: { id: sheet.actorId },
        select: {
          controllerMember: { select: { userId: true, user: { select: { email: true } } } },
          token: { select: { id: true, name: true } },
        },
      })
    })

    const changedTokenIds = new Set(
      [sheet.actor.token?.id, updated?.token?.id].filter((tokenId): tokenId is string => Boolean(tokenId)),
    )
    for (const tokenId of changedTokenIds) {
      try {
        await events.publishTokenPresentationChanged({
          campaignId: campaign.id,
          tokenId,
          sourceUserId: auth.id,
        })
      } catch (error) {
        req.log.error(
          { campaignId: campaign.id, tokenId, error },
          'Failed to publish token presentation assignment change',
        )
      }
    }

    return reply.send({
      sheetId: sheet.id,
      assignedUser: updated?.controllerMember
        ? { id: updated.controllerMember.userId, label: updated.controllerMember.user.email }
        : null,
      token: updated?.token ?? null,
    })
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
        campaign: { select: { gameSystem: true } },
        actor: {
          select: {
            name: true,
            inventory: { select: { id: true } },
            controllerMember: { select: { userId: true } },
            characterSheet: { select: { id: true, systemKey: true, data: true } },
          },
        },
      },
    })
    const sheet = token?.actor?.characterSheet
    if (!sheet) return reply.status(404).send({ error: 'Token sem ficha vinculada' })

    const canOpen = role.role === 'MASTER'
      || token.controllerMember?.userId === auth.id
      || token.actor?.controllerMember?.userId === auth.id
    if (!canOpen) return reply.status(403).send({ error: 'Sem permissao para abrir esta ficha' })
    const hasSimplifiedPresentation =
      sheet.systemKey === catalogTokenSheetSystemKey(token.campaign.gameSystem as GameSystemKey)
      && Boolean(parseCatalogTokenSheetEnvelope(sheet.data))

    return reply.send({
      sheetId: sheet.id,
      title: token.actor?.name ?? 'Ficha',
      inventoryAvailable: !hasSimplifiedPresentation && Boolean(token.actor?.inventory),
      presentation: hasSimplifiedPresentation ? 'SIMPLIFIED' : 'FULL',
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
      filters: groupCatalogFilters(query.data.filter),
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

  app.post('/api/campaigns/:campaignId/catalog/:domain/:contentId/tokens', async (req, reply) => {
    const auth = requireAuth(req, reply)
    if (!auth) return

    const params = catalogEntryParamsSchema.safeParse(req.params)
    const body = catalogTokenCreateSchema.safeParse(req.body ?? {})
    if (!params.success || !body.success) {
      return reply.status(400).send({ error: 'Criacao de Token invalida' })
    }

    const campaign = await findMasterCampaign(params.data.campaignId, auth.id)
    if (!campaign) return reply.status(403).send({ error: 'Apenas o Mestre pode criar Tokens' })

    const domain = domainByPath[params.data.domain]
    const provider = getGameSystemCatalogProvider(campaign.gameSystem as GameSystemKey)
    if (!provider?.getTokenizableSheet) {
      return reply.status(409).send({ error: 'O sistema da campanha nao permite criar Tokens deste catalogo' })
    }

    const query = {
      campaignId: campaign.id,
      domain,
      locale: body.data.locale as GameSystemContentLocale,
      contentId: params.data.contentId,
    }
    const tokenSheet = await provider.getTokenizableSheet(query)
    if (!tokenSheet) {
      return reply.status(422).send({ error: 'Esta entrada do catalogo nao pode originar um Token' })
    }

    const envelope = createCatalogTokenSheetEnvelope({
      domain,
      contentId: params.data.contentId,
      locale: body.data.locale as GameSystemContentLocale,
    }, tokenSheet)
    const catalogSheet = tokenSheet.sheet
    const created = await prisma.$transaction(async (tx) => {
      const actor = await tx.campaignActor.create({
        data: withoutCampaignActorInventory({
          campaignId: campaign.id,
          name: catalogSheet.name,
          avatarUrl: catalogSheet.imageUrl ?? null,
          bio: null,
        }),
        select: { id: true },
      })
      const sheet = await tx.campaignCharacterSheet.create({
        data: {
          actorId: actor.id,
          createdByUserId: auth.id,
          systemKey: catalogTokenSheetSystemKey(campaign.gameSystem as GameSystemKey),
          schemaVersion: 1,
          data: asPrismaJson(envelope),
        },
        select: { id: true },
      })
      const token = await tx.campaignToken.create({
        data: {
          campaignId: campaign.id,
          actorId: actor.id,
          name: catalogSheet.name,
          avatarUrl: catalogSheet.imageUrl ?? null,
          color: catalogSheet.imageUrl ? null : '#4f46e5',
          size: resolveCatalogTokenSize(tokenSheet),
          canCustomizeAppearance: false,
        },
        select: { id: true },
      })

      return { actorId: actor.id, sheetId: sheet.id, tokenId: token.id }
    })

    return reply.status(201).send(created)
  })

  app.get('/api/campaigns/:campaignId/game-system/token-capabilities', async (req, reply) => {
    const auth = requireAuth(req, reply)
    if (!auth) return

    const params = campaignParamsSchema.safeParse(req.params)
    if (!params.success) return reply.status(400).send({ error: 'Campanha invalida' })

    const campaign = await findMasterCampaign(params.data.campaignId, auth.id)
    if (!campaign) return reply.status(403).send({ error: 'Apenas o Mestre pode consultar capacidades de Tokens' })

    const tokens = await prisma.campaignToken.findMany({
      where: {
        campaignId: campaign.id,
        actor: {
          characterSheet: {
            systemKey: catalogTokenSheetSystemKey(campaign.gameSystem as GameSystemKey),
          },
        },
      },
      select: {
        id: true,
        actor: { select: { characterSheet: { select: { data: true } } } },
      },
    })

    return reply.send({
      tokens: tokens
        .filter((token) => parseCatalogTokenSheetEnvelope(token.actor?.characterSheet?.data))
        .map((token) => ({ tokenId: token.id, actions: ['duplicate'] as const })),
    })
  })

  app.post('/api/campaigns/:campaignId/game-system/tokens/:tokenId/duplicate', async (req, reply) => {
    const auth = requireAuth(req, reply)
    if (!auth) return

    const params = gameSystemTokenParamsSchema.safeParse(req.params)
    if (!params.success) return reply.status(400).send({ error: 'Token invalido' })

    const campaign = await findMasterCampaign(params.data.campaignId, auth.id)
    if (!campaign) return reply.status(403).send({ error: 'Apenas o Mestre pode duplicar Tokens' })

    const source = await prisma.campaignToken.findFirst({
      where: { id: params.data.tokenId, campaignId: campaign.id },
      select: {
        name: true,
        avatarUrl: true,
        color: true,
        size: true,
        canCustomizeAppearance: true,
        visionConfig: true,
        lightConfig: true,
        actor: {
          select: {
            name: true,
            avatarUrl: true,
            bio: true,
            characterSheet: {
              select: { systemKey: true, schemaVersion: true, data: true },
            },
          },
        },
      },
    })
    const sourceSheet = source?.actor?.characterSheet
    if (
      !source
      || !source.actor
      || !sourceSheet
      || sourceSheet.systemKey !== catalogTokenSheetSystemKey(campaign.gameSystem as GameSystemKey)
      || !parseCatalogTokenSheetEnvelope(sourceSheet.data)
    ) {
      return reply.status(409).send({ error: 'Este Token nao oferece duplicacao pelo sistema de jogo' })
    }

    const actorName = `${source.actor.name} (Copia)`
    const tokenName = `${source.name} (Copia)`
    const created = await prisma.$transaction(async (tx) => {
      const actor = await tx.campaignActor.create({
        data: withoutCampaignActorInventory({
          campaignId: campaign.id,
          name: actorName,
          avatarUrl: source.actor?.avatarUrl ?? null,
          bio: null,
        }),
        select: { id: true },
      })
      const sheet = await tx.campaignCharacterSheet.create({
        data: {
          actorId: actor.id,
          createdByUserId: auth.id,
          systemKey: sourceSheet.systemKey,
          schemaVersion: sourceSheet.schemaVersion,
          data: asPrismaJson(sourceSheet.data),
        },
        select: { id: true },
      })
      const token = await tx.campaignToken.create({
        data: {
          campaignId: campaign.id,
          actorId: actor.id,
          name: tokenName,
          avatarUrl: source.avatarUrl,
          color: source.color,
          size: source.size,
          canCustomizeAppearance: source.canCustomizeAppearance,
          visionConfig: asPrismaJson(source.visionConfig),
          lightConfig: asPrismaJson(source.lightConfig),
        },
        select: { id: true },
      })

      return { actorId: actor.id, sheetId: sheet.id, tokenId: token.id }
    })

    return reply.status(201).send(created)
  })

  app.get('/api/campaigns/:campaignId/character-sheets/:sheetId/simplified', async (req, reply) => {
    const auth = requireAuth(req, reply)
    if (!auth) return

    const params = simplifiedSheetParamsSchema.safeParse(req.params)
    if (!params.success) return reply.status(400).send({ error: 'Ficha invalida' })

    const role = await findActiveCampaignRole(params.data.campaignId, auth.id)
    if (!role) return reply.status(403).send({ error: 'Acesso nao liberado' })

    const sheet = await prisma.campaignCharacterSheet.findFirst({
      where: {
        id: params.data.sheetId,
        actor: { campaignId: params.data.campaignId },
      },
      select: {
        systemKey: true,
        data: true,
        actor: {
          select: {
            name: true,
            controllerMember: { select: { userId: true } },
            token: {
              select: {
                controllerMember: { select: { userId: true } },
              },
            },
            campaign: { select: { gameSystem: true } },
          },
        },
      },
    })
    if (!sheet) return reply.status(404).send({ error: 'Ficha nao encontrada' })

    const canOpen = role.role === 'MASTER'
      || sheet.actor.controllerMember?.userId === auth.id
      || sheet.actor.token?.controllerMember?.userId === auth.id
    if (!canOpen) return reply.status(403).send({ error: 'Sem permissao para abrir esta ficha' })

    const envelope = sheet.systemKey === catalogTokenSheetSystemKey(sheet.actor.campaign.gameSystem as GameSystemKey)
      ? parseCatalogTokenSheetEnvelope(sheet.data)
      : null
    if (!envelope) return reply.status(409).send({ error: 'A ficha nao possui apresentacao simplificada' })

    return reply.send({
      metadata: { name: sheet.actor.name },
      source: envelope.source,
      entry: envelope.sheet,
    })
  })
}
