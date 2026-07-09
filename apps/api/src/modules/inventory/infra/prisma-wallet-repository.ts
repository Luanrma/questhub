import { Prisma } from '@prisma/client'
import { prisma } from '../../../db/prisma'
import type { WalletSnapshot } from '../domain/types'
import type {
  AdjustWalletInput,
  AdjustWalletResult,
  TransferCurrencyInput,
  TransferCurrencyResult,
  WalletRepository,
} from '../application/ports/wallet-repository'

type WalletRow = {
  id: string
  campaignId: string
  campaignCharacterId: string
  balanceMinorUnit: number
  campaignCharacter: { characterId: string }
}

function toWalletSnapshot(row: WalletRow): WalletSnapshot {
  return {
    id: row.id,
    campaignId: row.campaignId,
    characterId: row.campaignCharacter.characterId,
    campaignCharacterId: row.campaignCharacterId,
    balanceMinorUnit: row.balanceMinorUnit,
  }
}

const walletWithCharacter = { campaignCharacter: { select: { characterId: true } } } as const

async function getOrCreateForCampaignCharacter(
  campaignId: string,
  campaignCharacterId: string,
): Promise<WalletSnapshot> {
  let wallet = await prisma.wallet.findUnique({
    where: { campaignCharacterId },
    include: walletWithCharacter,
  })

  if (!wallet) {
    try {
      wallet = await prisma.wallet.create({
        data: { campaignId, campaignCharacterId },
        include: walletWithCharacter,
      })
    } catch (error) {
      if (error instanceof Prisma.PrismaClientKnownRequestError && error.code === 'P2002') {
        wallet = await prisma.wallet.findUniqueOrThrow({ where: { campaignCharacterId }, include: walletWithCharacter })
      } else {
        throw error
      }
    }
  }

  return toWalletSnapshot(wallet)
}

async function adjustBalance(input: AdjustWalletInput): Promise<AdjustWalletResult> {
  return prisma.$transaction(async (tx) => {
    const wallet = await tx.wallet.upsert({
      where: { campaignCharacterId: input.campaignCharacterId },
      create: { campaignId: input.campaignId, campaignCharacterId: input.campaignCharacterId },
      update: {},
    })

    const balanceAfter = wallet.balanceMinorUnit + input.deltaMinorUnit
    if (balanceAfter < 0) return { status: 'negative_balance' as const }

    const updated = await tx.wallet.update({
      where: { id: wallet.id },
      data: { balanceMinorUnit: balanceAfter },
      include: walletWithCharacter,
    })

    await tx.walletLedger.create({
      data: {
        campaignId: input.campaignId,
        walletId: wallet.id,
        actorUserId: input.actorUserId,
        actorCharacterId: input.actorCharacterId,
        type: input.ledgerType,
        deltaMinorUnit: input.deltaMinorUnit,
        balanceBeforeMinorUnit: wallet.balanceMinorUnit,
        balanceAfterMinorUnit: balanceAfter,
        note: input.note ?? null,
      },
    })

    return { status: 'ok' as const, wallet: toWalletSnapshot(updated) }
  })
}

async function transferCurrency(input: TransferCurrencyInput): Promise<TransferCurrencyResult> {
  return prisma.$transaction(async (tx) => {
    const sourceWallet = await tx.wallet.findUnique({ where: { campaignCharacterId: input.fromCampaignCharacterId } })
    if (!sourceWallet || sourceWallet.balanceMinorUnit < input.amountMinorUnit) {
      return { status: 'insufficient_funds' as const }
    }

    const targetWallet = await tx.wallet.upsert({
      where: { campaignCharacterId: input.toCampaignCharacterId },
      create: { campaignId: sourceWallet.campaignId, campaignCharacterId: input.toCampaignCharacterId },
      update: {},
    })

    const sourceBalanceAfter = sourceWallet.balanceMinorUnit - input.amountMinorUnit
    const targetBalanceAfter = targetWallet.balanceMinorUnit + input.amountMinorUnit

    const updatedSource = await tx.wallet.update({
      where: { id: sourceWallet.id },
      data: { balanceMinorUnit: sourceBalanceAfter },
      include: walletWithCharacter,
    })
    const updatedTarget = await tx.wallet.update({
      where: { id: targetWallet.id },
      data: { balanceMinorUnit: targetBalanceAfter },
      include: walletWithCharacter,
    })

    await tx.walletLedger.create({
      data: {
        campaignId: sourceWallet.campaignId,
        walletId: sourceWallet.id,
        actorUserId: input.actorUserId,
        actorCharacterId: input.actorCharacterId,
        counterpartyWalletId: targetWallet.id,
        operationId: input.operationId,
        type: 'TRANSFER_OUT',
        deltaMinorUnit: -input.amountMinorUnit,
        balanceBeforeMinorUnit: sourceWallet.balanceMinorUnit,
        balanceAfterMinorUnit: sourceBalanceAfter,
        note: input.note ?? null,
      },
    })
    await tx.walletLedger.create({
      data: {
        campaignId: sourceWallet.campaignId,
        walletId: targetWallet.id,
        actorUserId: input.actorUserId,
        actorCharacterId: input.actorCharacterId,
        counterpartyWalletId: sourceWallet.id,
        operationId: input.operationId,
        type: 'TRANSFER_IN',
        deltaMinorUnit: input.amountMinorUnit,
        balanceBeforeMinorUnit: targetWallet.balanceMinorUnit,
        balanceAfterMinorUnit: targetBalanceAfter,
        note: input.note ?? null,
      },
    })

    return {
      status: 'ok' as const,
      sourceWallet: toWalletSnapshot(updatedSource),
      targetWallet: toWalletSnapshot(updatedTarget),
    }
  })
}

async function listLedger(walletId: string, page: number, limit: number) {
  const skip = (page - 1) * limit
  const [entries, total] = await Promise.all([
    prisma.walletLedger.findMany({ where: { walletId }, orderBy: { createdAt: 'desc' }, skip, take: limit }),
    prisma.walletLedger.count({ where: { walletId } }),
  ])

  return {
    entries: entries.map((entry) => ({
      id: entry.id,
      type: entry.type,
      deltaMinorUnit: entry.deltaMinorUnit,
      balanceBeforeMinorUnit: entry.balanceBeforeMinorUnit,
      balanceAfterMinorUnit: entry.balanceAfterMinorUnit,
      note: entry.note,
      actorUserId: entry.actorUserId,
      actorCharacterId: entry.actorCharacterId,
      createdAt: entry.createdAt,
    })),
    total,
  }
}

export const prismaWalletRepository: WalletRepository = {
  getOrCreateForCampaignCharacter,
  adjustBalance,
  transferCurrency,
  listLedger,
}
