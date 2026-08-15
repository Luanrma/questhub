import { Prisma } from '@prisma/client'
import type { FastifyInstance } from 'fastify'
import { z } from 'zod'
import { prisma } from '../../../db/prisma'
import { requireAuth } from '../../../http/auth'
import { pathfinder2eCharacterSheetRuntimeAdapter } from '../character-sheet/adapter'
import {
  addPathfinder2eCurrency,
  emptyPathfinder2eCurrency,
  hasPathfinder2eCurrencyValue,
  parsePathfinder2eCurrency,
  PATHFINDER_2E_CURRENCY_CATALOG_CONTENT_ID,
  PATHFINDER_2E_CURRENCY_CATALOG_NAMESPACE,
  PATHFINDER_2E_CURRENCY_NAMESPACE,
  PATHFINDER_2E_CURRENCY_TYPE_KEY,
  pathfinder2eCurrencyAdjustmentSchema,
  pathfinder2eCurrencySchema,
  subtractPathfinder2eCurrency,
  type Pathfinder2eCurrency,
} from './domain'

const PATHFINDER_2E_GAME_SYSTEM = 'PATHFINDER_2E'
const PATHFINDER_2E_SYSTEM_KEY = pathfinder2eCharacterSheetRuntimeAdapter.systemKey
const paramsSchema = z.object({ campaignId: z.string().trim().min(1), actorId: z.string().trim().min(1) })
const transferSchema = z.object({
  recipientActorId: z.string().trim().min(1),
  amount: pathfinder2eCurrencySchema,
}).strict()
const adjustmentSchema = z.object({ adjustment: pathfinder2eCurrencyAdjustmentSchema }).strict()

async function findCurrencyAccess(campaignId: string, actorId: string, userId: string) {
  const member = await prisma.campaignMember.findFirst({
    where: { campaignId, userId, status: 'ACTIVE' },
    select: { id: true, role: true },
  })
  if (!member) return null

  const actor = await prisma.campaignActor.findFirst({
    where: { id: actorId, campaignId, archivedAt: null },
    select: {
      id: true,
      name: true,
      controllerMemberId: true,
      campaign: { select: { gameSystem: true } },
      characterSheet: { select: { id: true, systemKey: true } },
    },
  })
  if (!actor) return null
  if (actor.campaign.gameSystem !== PATHFINDER_2E_GAME_SYSTEM) return null
  if (actor.characterSheet?.systemKey !== PATHFINDER_2E_SYSTEM_KEY) return null
  if (member.role !== 'MASTER' && actor.controllerMemberId !== member.id) return null
  return { member, actor, sheetId: actor.characterSheet.id }
}

function walletWhere(characterSheetId: string) {
  return {
    characterSheetId,
    namespace: PATHFINDER_2E_CURRENCY_NAMESPACE,
    typeKey: PATHFINDER_2E_CURRENCY_TYPE_KEY,
    catalogNamespace: PATHFINDER_2E_CURRENCY_CATALOG_NAMESPACE,
    catalogContentId: PATHFINDER_2E_CURRENCY_CATALOG_CONTENT_ID,
  }
}

async function ensureWallet(client: typeof prisma, characterSheetId: string) {
  const where = walletWhere(characterSheetId)
  const existing = await client.campaignCharacterSheetEntry.findFirst({ where })
  if (existing) return existing

  return client.campaignCharacterSheetEntry.create({
    data: {
      ...where,
      schemaVersion: 1,
      data: emptyPathfinder2eCurrency as Prisma.InputJsonValue,
    },
  })
}

function presentWallet(wallet: { data: unknown }) {
  return { currency: parsePathfinder2eCurrency(wallet.data) }
}

async function loadWallet(client: typeof prisma, characterSheetId: string) {
  const wallet = await ensureWallet(client, characterSheetId)
  return { wallet, currency: parsePathfinder2eCurrency(wallet.data) }
}

function updateWallet(client: typeof prisma, entryId: string, currency: Pathfinder2eCurrency) {
  return client.campaignCharacterSheetEntry.update({
    where: { id: entryId },
    data: { data: currency as Prisma.InputJsonValue },
  })
}

export function registerPathfinder2eCurrencyRoutes(app: FastifyInstance) {
  app.get('/api/campaigns/:campaignId/actors/:actorId/pathfinder-2e/currency', async (req, reply) => {
    const auth = requireAuth(req, reply)
    if (!auth) return
    const params = paramsSchema.safeParse(req.params)
    if (!params.success) return reply.status(400).send({ error: 'Carteira inválida' })
    const access = await findCurrencyAccess(params.data.campaignId, params.data.actorId, auth.id)
    if (!access) return reply.status(404).send({ error: 'Ator sem carteira PF2e ou sem acesso' })

    const wallet = await ensureWallet(prisma, access.sheetId)
    return reply.send({
      ...presentWallet(wallet),
      canTransfer: true,
      canAdjust: access.member.role === 'MASTER',
    })
  })

  app.get('/api/campaigns/:campaignId/actors/:actorId/pathfinder-2e/currency/recipients', async (req, reply) => {
    const auth = requireAuth(req, reply)
    if (!auth) return
    const params = paramsSchema.safeParse(req.params)
    if (!params.success) return reply.status(400).send({ error: 'Carteira inválida' })
    const access = await findCurrencyAccess(params.data.campaignId, params.data.actorId, auth.id)
    if (!access) return reply.status(404).send({ error: 'Ator sem carteira PF2e ou sem acesso' })

    const recipients = await prisma.campaignActor.findMany({
      where: {
        campaignId: params.data.campaignId,
        archivedAt: null,
        id: { not: access.actor.id },
        controllerMember: { is: { status: 'ACTIVE' } },
        characterSheet: { is: { systemKey: PATHFINDER_2E_SYSTEM_KEY } },
      },
      select: {
        id: true,
        name: true,
        controllerMember: { select: { role: true } },
      },
      orderBy: [{ name: 'asc' }, { createdAt: 'asc' }],
    })
    return reply.send({ recipients: recipients.map((recipient) => ({
      id: recipient.id,
      name: recipient.name,
      role: recipient.controllerMember?.role,
    })) })
  })

  app.post('/api/campaigns/:campaignId/actors/:actorId/pathfinder-2e/currency/transfers', async (req, reply) => {
    const auth = requireAuth(req, reply)
    if (!auth) return
    const params = paramsSchema.safeParse(req.params)
    const body = transferSchema.safeParse(req.body ?? {})
    if (!params.success || !body.success || !hasPathfinder2eCurrencyValue(body.data.amount)) {
      return reply.status(400).send({ error: 'Transferência de moedas inválida' })
    }
    if (body.data.recipientActorId === params.data.actorId) {
      return reply.status(400).send({ error: 'O destinatário deve ser outro ator' })
    }
    const source = await findCurrencyAccess(params.data.campaignId, params.data.actorId, auth.id)
    if (!source) return reply.status(404).send({ error: 'Ator de origem sem acesso' })

    const result = await prisma.$transaction(async (tx) => {
      const recipient = await tx.campaignActor.findFirst({
        where: {
          id: body.data.recipientActorId,
          campaignId: params.data.campaignId,
          archivedAt: null,
          controllerMember: { is: { status: 'ACTIVE' } },
          characterSheet: { is: { systemKey: PATHFINDER_2E_SYSTEM_KEY } },
        },
        select: { id: true, characterSheet: { select: { id: true } } },
      })
      if (!recipient?.characterSheet) return null

      const [sourceWallet, recipientWallet] = await Promise.all([
        loadWallet(tx as typeof prisma, source.sheetId),
        loadWallet(tx as typeof prisma, recipient.characterSheet.id),
      ])
      const sourceCurrency = subtractPathfinder2eCurrency(sourceWallet.currency, body.data.amount)
      const recipientCurrency = addPathfinder2eCurrency(recipientWallet.currency, body.data.amount)
      if (!sourceCurrency || !recipientCurrency) return 'INSUFFICIENT' as const

      const [updatedSource, updatedRecipient] = await Promise.all([
        updateWallet(tx as typeof prisma, sourceWallet.wallet.id, sourceCurrency),
        updateWallet(tx as typeof prisma, recipientWallet.wallet.id, recipientCurrency),
      ])
      return { source: presentWallet(updatedSource), recipient: presentWallet(updatedRecipient) }
    }, { isolationLevel: Prisma.TransactionIsolationLevel.Serializable })

    if (result === null) return reply.status(404).send({ error: 'Ator destinatário não encontrado na campanha' })
    if (result === 'INSUFFICIENT') return reply.status(409).send({ error: 'Saldo insuficiente para a transferência' })
    return reply.send(result)
  })

  app.patch('/api/campaigns/:campaignId/actors/:actorId/pathfinder-2e/currency', async (req, reply) => {
    const auth = requireAuth(req, reply)
    if (!auth) return
    const params = paramsSchema.safeParse(req.params)
    const body = adjustmentSchema.safeParse(req.body ?? {})
    if (!params.success || !body.success || !hasPathfinder2eCurrencyValue(body.data.adjustment)) {
      return reply.status(400).send({ error: 'Ajuste de moedas inválido' })
    }
    const access = await findCurrencyAccess(params.data.campaignId, params.data.actorId, auth.id)
    if (!access) return reply.status(404).send({ error: 'Ator sem carteira PF2e ou sem acesso' })
    if (access.member.role !== 'MASTER') return reply.status(403).send({ error: 'Apenas o Mestre pode ajustar moedas' })

    const result = await prisma.$transaction(async (tx) => {
      const wallet = await loadWallet(tx as typeof prisma, access.sheetId)
      const currency = addPathfinder2eCurrency(wallet.currency, body.data.adjustment)
      if (!currency) return null
      return updateWallet(tx as typeof prisma, wallet.wallet.id, currency)
    }, { isolationLevel: Prisma.TransactionIsolationLevel.Serializable })
    if (!result) return reply.status(409).send({ error: 'O ajuste deixaria o saldo negativo ou acima do limite' })
    return reply.send(presentWallet(result))
  })
}
