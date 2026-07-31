import type { FastifyInstance, FastifyReply } from 'fastify'
import { z } from 'zod'
import { prisma } from '../../db/prisma'
import { requireAuth } from '../../http/auth'
import {
  AREA_EFFECT_TOOL_BINDING_CATEGORY,
  AREA_EFFECT_TOOL_KEY,
  areaEffectToolBindingConfigurationSchema,
  areaEffectToolBindingTemplateData,
  parseToolBindingMetadata,
  presentAreaEffectToolBinding,
  sameToolBindingSource,
  toolBindingSourceSchema,
  type ToolBindingSource,
} from '../../modules/effect_area/domain/tool-binding'
import type { GameSystemAutomationEventPublisher } from './contracts'

const paramsSchema = z.object({
  campaignId: z.string().trim().min(1),
  toolKey: z.literal(AREA_EFFECT_TOOL_KEY),
})

const querySchema = toolBindingSourceSchema

const upsertSchema = z.object({
  source: toolBindingSourceSchema,
  name: z.string().trim().min(1).max(120),
  configuration: areaEffectToolBindingConfigurationSchema,
}).strict()

type ActiveMember = NonNullable<Awaited<ReturnType<typeof findActiveMember>>>

async function findActiveMember(campaignId: string, userId: string) {
  return prisma.campaignMember.findFirst({
    where: { campaignId, userId, status: 'ACTIVE' },
    select: { id: true, role: true, userId: true },
  })
}

function tokenIdFromActionSource(source: ToolBindingSource) {
  if (source.kind !== 'TOKEN_ACTION') return null
  const separator = source.id.indexOf('|')
  return separator > 0 ? source.id.slice(0, separator) : null
}

async function requireSourceAccess(input: {
  campaignId: string
  member: ActiveMember
  source: ToolBindingSource
  write: boolean
  reply: FastifyReply
}) {
  if (input.source.kind === 'CATALOG_CONTENT') {
    if (input.write && input.member.role !== 'MASTER') {
      input.reply.status(403).send({ error: 'Apenas o mestre pode configurar o padrão da campanha' })
      return null
    }
    return { tokenIds: [] as string[] }
  }

  if (input.source.kind === 'CHARACTER_SHEET_ENTRY') {
    const entry = await prisma.campaignCharacterSheetEntry.findFirst({
      where: {
        id: input.source.id,
        characterSheet: { actor: { campaignId: input.campaignId, archivedAt: null } },
      },
      select: {
        characterSheet: {
          select: {
            actor: {
              select: {
                controllerMember: { select: { userId: true } },
                token: { select: { id: true } },
              },
            },
          },
        },
      },
    })
    if (!entry) {
      input.reply.status(404).send({ error: 'Entrada da ficha não encontrada' })
      return null
    }
    const ownsEntry = entry.characterSheet.actor.controllerMember?.userId === input.member.userId
    if (input.member.role !== 'MASTER' && !ownsEntry) {
      input.reply.status(403).send({ error: 'Sem permissão para personalizar esta entrada da ficha' })
      return null
    }
    return {
      tokenIds: entry.characterSheet.actor.token
        ? [entry.characterSheet.actor.token.id]
        : [],
    }
  }

  const tokenId = tokenIdFromActionSource(input.source)
  if (!tokenId) {
    input.reply.status(400).send({ error: 'Origem de ação do Token inválida' })
    return null
  }
  const token = await prisma.campaignToken.findFirst({
    where: { id: tokenId, campaignId: input.campaignId },
    select: {
      id: true,
      controllerMember: { select: { userId: true } },
      actor: { select: { controllerMember: { select: { userId: true } } } },
    },
  })
  if (!token) {
    input.reply.status(404).send({ error: 'Token não encontrado' })
    return null
  }
  const controlsToken = token.controllerMember?.userId === input.member.userId
    || token.actor?.controllerMember?.userId === input.member.userId
  if (input.member.role !== 'MASTER' && !controlsToken) {
    input.reply.status(403).send({ error: 'Sem permissão para personalizar esta ação do Token' })
    return null
  }
  return { tokenIds: [token.id] }
}

async function listStoredBindings(campaignId: string) {
  return prisma.campaignAreaTemplate.findMany({
    where: { campaignId, category: AREA_EFFECT_TOOL_BINDING_CATEGORY },
    orderBy: { updatedAt: 'desc' },
  })
}

async function findStoredBinding(campaignId: string, source: ToolBindingSource) {
  const templates = await listStoredBindings(campaignId)
  return templates.find((template) => {
    const metadata = parseToolBindingMetadata(template)
    return metadata ? sameToolBindingSource(metadata.source, source) : false
  }) ?? null
}

async function publishChangedTokens(input: {
  campaignId: string
  source: ToolBindingSource
  directTokenIds: string[]
  sourceUserId: string
  events: GameSystemAutomationEventPublisher
  log: { error(input: unknown, message: string): void }
}) {
  const tokenIds = input.source.kind === 'CATALOG_CONTENT'
    ? (await prisma.campaignToken.findMany({
        where: { campaignId: input.campaignId },
        select: { id: true },
      })).map((token) => token.id)
    : input.directTokenIds

  await Promise.all([...new Set(tokenIds)].map(async (tokenId) => {
    try {
      await input.events.publishTokenPresentationChanged({
        campaignId: input.campaignId,
        tokenId,
        sourceUserId: input.sourceUserId,
      })
    } catch (error) {
      input.log.error(
        { campaignId: input.campaignId, tokenId, error },
        'Failed to publish Token presentation change after tool binding update',
      )
    }
  }))
}

export function registerGameSystemToolBindingRoutes(
  app: FastifyInstance,
  events: GameSystemAutomationEventPublisher,
) {
  app.get('/api/campaigns/:campaignId/tool-bindings/:toolKey', async (req, reply) => {
    const auth = requireAuth(req, reply)
    if (!auth) return
    const params = paramsSchema.safeParse(req.params)
    const query = querySchema.safeParse(req.query)
    if (!params.success || !query.success) {
      return reply.status(400).send({ error: 'Consulta de vínculo inválida' })
    }

    const member = await findActiveMember(params.data.campaignId, auth.id)
    if (!member) return reply.status(403).send({ error: 'Acesso não liberado' })
    const access = await requireSourceAccess({
      campaignId: params.data.campaignId,
      member,
      source: query.data,
      write: false,
      reply,
    })
    if (!access) return

    const stored = await findStoredBinding(params.data.campaignId, query.data)
    return reply.send({ binding: stored ? presentAreaEffectToolBinding(stored) : null })
  })

  app.put('/api/campaigns/:campaignId/tool-bindings/:toolKey', async (req, reply) => {
    const auth = requireAuth(req, reply)
    if (!auth) return
    const params = paramsSchema.safeParse(req.params)
    const body = upsertSchema.safeParse(req.body)
    if (!params.success || !body.success) {
      return reply.status(400).send({
        error: body.success ? 'Parâmetros inválidos' : body.error.flatten(),
      })
    }

    const member = await findActiveMember(params.data.campaignId, auth.id)
    if (!member) return reply.status(403).send({ error: 'Acesso não liberado' })
    const access = await requireSourceAccess({
      campaignId: params.data.campaignId,
      member,
      source: body.data.source,
      write: true,
      reply,
    })
    if (!access) return

    const existing = await findStoredBinding(params.data.campaignId, body.data.source)
    const data = areaEffectToolBindingTemplateData(body.data)
    const stored = existing
      ? await prisma.campaignAreaTemplate.update({
          where: { id: existing.id },
          data,
        })
      : await prisma.campaignAreaTemplate.create({
          data: {
            campaignId: params.data.campaignId,
            createdByUserId: auth.id,
            ...data,
          },
        })

    await publishChangedTokens({
      campaignId: params.data.campaignId,
      source: body.data.source,
      directTokenIds: access.tokenIds,
      sourceUserId: auth.id,
      events,
      log: req.log,
    })

    return reply.send({ binding: presentAreaEffectToolBinding(stored) })
  })

  app.delete('/api/campaigns/:campaignId/tool-bindings/:toolKey', async (req, reply) => {
    const auth = requireAuth(req, reply)
    if (!auth) return
    const params = paramsSchema.safeParse(req.params)
    const query = querySchema.safeParse(req.query)
    if (!params.success || !query.success) {
      return reply.status(400).send({ error: 'Vínculo inválido' })
    }

    const member = await findActiveMember(params.data.campaignId, auth.id)
    if (!member) return reply.status(403).send({ error: 'Acesso não liberado' })
    const access = await requireSourceAccess({
      campaignId: params.data.campaignId,
      member,
      source: query.data,
      write: true,
      reply,
    })
    if (!access) return

    const existing = await findStoredBinding(params.data.campaignId, query.data)
    if (existing) {
      await prisma.campaignAreaTemplate.delete({ where: { id: existing.id } })
    }

    await publishChangedTokens({
      campaignId: params.data.campaignId,
      source: query.data,
      directTokenIds: access.tokenIds,
      sourceUserId: auth.id,
      events,
      log: req.log,
    })

    return reply.status(204).send()
  })
}
