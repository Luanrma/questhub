import type { FastifyInstance, FastifyReply } from 'fastify'
import { requireAuth } from '../../../http/auth'
import { getGameSystemAdapter } from '../../game_systems/registry'
import { presentInventory, presentItemDefinition, presentWallet } from '../domain/presenters'
import type { createAddItemToInventoryUseCase } from '../application/add-item-to-inventory.use-case'
import type { createAdjustWalletUseCase } from '../application/adjust-wallet.use-case'
import type { createCreateCampaignItemDefinitionUseCase } from '../application/create-campaign-item-definition.use-case'
import type { createEquipItemUseCase } from '../application/equip-item.use-case'
import type { createGetInventoryItemCatalogSheetUseCase } from '../application/get-inventory-item-catalog-sheet.use-case'
import type { createGetInventoryLedgerUseCase } from '../application/get-inventory-ledger.use-case'
import type { createGetInventoryUseCase } from '../application/get-inventory.use-case'
import type { createGetWalletLedgerUseCase } from '../application/get-wallet-ledger.use-case'
import type { createGetWalletUseCase } from '../application/get-wallet.use-case'
import type { createTransferCurrencyUseCase } from '../application/transfer-currency.use-case'
import type { createTransferItemUseCase } from '../application/transfer-item.use-case'
import type { createUnequipItemUseCase } from '../application/unequip-item.use-case'
import type { createUpdateInventoryItemUseCase } from '../application/update-inventory-item.use-case'
import {
  addInventoryItemSchema,
  adjustWalletSchema,
  campaignCharacterParamsSchema,
  campaignFromCharacterParamsSchema,
  campaignParamsSchema,
  createCampaignItemDefinitionSchema,
  equipInventoryItemSchema,
  equippedItemParamsSchema,
  inventoryItemParamsSchema,
  ledgerQuerySchema,
  transferCurrencySchema,
  transferInventoryItemSchema,
  updateInventoryItemSchema,
} from './validation'

export type InventoryUseCases = {
  getInventory: ReturnType<typeof createGetInventoryUseCase>
  getInventoryItemCatalogSheet: ReturnType<typeof createGetInventoryItemCatalogSheetUseCase>
  getWallet: ReturnType<typeof createGetWalletUseCase>
  createCampaignItemDefinition: ReturnType<typeof createCreateCampaignItemDefinitionUseCase>
  addItemToInventory: ReturnType<typeof createAddItemToInventoryUseCase>
  updateInventoryItem: ReturnType<typeof createUpdateInventoryItemUseCase>
  equipItem: ReturnType<typeof createEquipItemUseCase>
  unequipItem: ReturnType<typeof createUnequipItemUseCase>
  transferItem: ReturnType<typeof createTransferItemUseCase>
  adjustWallet: ReturnType<typeof createAdjustWalletUseCase>
  transferCurrency: ReturnType<typeof createTransferCurrencyUseCase>
  getInventoryLedger: ReturnType<typeof createGetInventoryLedgerUseCase>
  getWalletLedger: ReturnType<typeof createGetWalletLedgerUseCase>
}

function sendError(reply: FastifyReply, httpStatus: number, code: string, message: string) {
  return reply.status(httpStatus).send({ error: { code, message } })
}

function walletDisplay(system: string, balanceMinorUnit: number) {
  const currency = getGameSystemAdapter(system)?.currency
  if (!currency) {
    return {
      system,
      breakdown: {},
      label: String(balanceMinorUnit),
    }
  }

  return {
    system,
    breakdown: currency.breakdown(balanceMinorUnit),
    label: currency.format(balanceMinorUnit),
  }
}

export function registerInventoryHttpRoutes(app: FastifyInstance, useCases: InventoryUseCases) {
  app.get('/api/campaigns/:campaignId/characters/:characterId/inventory', async (req, reply) => {
    const payload = requireAuth(req, reply)
    if (!payload) return

    const params = campaignCharacterParamsSchema.safeParse(req.params)
    if (!params.success) return sendError(reply, 400, 'INVALID_PAYLOAD', 'Parametros invalidos')

    const result = await useCases.getInventory({ ...params.data, actorUserId: payload.id })
    if (result.status === 'not_found') return sendError(reply, 404, 'CAMPAIGN_CHARACTER_NOT_FOUND', 'Personagem nao encontrado na campanha')
    if (result.status === 'forbidden') return sendError(reply, 403, 'FORBIDDEN', 'Sem permissao para ver este inventario')

    const inventoryAdapter = getGameSystemAdapter(result.system)?.inventory
    const equipmentOptions = inventoryAdapter?.listEquipmentOptions() ?? []
    const equippedGroups = inventoryAdapter?.listEquippedGroups({
      items: result.inventory.items.flatMap((item) =>
        item.equipped
          ? [
              {
                equippedItemId: item.equipped.id,
                inventoryItemId: item.id,
                equipmentOptionKey: item.equipped.equipmentOptionKey,
                resourceLocks: item.equipped.resourceLocks,
                systemData: item.equipped.systemData,
                item: item.itemDefinition,
              },
            ]
          : [],
      ),
    }) ?? []
    return reply.send(presentInventory(result.inventory, equipmentOptions, equippedGroups))
  })

  app.get('/api/campaigns/:campaignId/inventory-items/:inventoryItemId/catalog-sheet', async (req, reply) => {
    const payload = requireAuth(req, reply)
    if (!payload) return

    const params = inventoryItemParamsSchema.safeParse(req.params)
    if (!params.success) return sendError(reply, 400, 'INVALID_PAYLOAD', 'Parametros invalidos')

    const result = await useCases.getInventoryItemCatalogSheet({ ...params.data, actorUserId: payload.id })
    if (result.status === 'not_found') return sendError(reply, 404, 'INVENTORY_ITEM_NOT_FOUND', 'Item nao encontrado')
    if (result.status === 'forbidden') return sendError(reply, 403, 'FORBIDDEN', 'Sem permissao para ver este item')
    if (result.status === 'not_from_catalog') {
      return sendError(reply, 404, 'ITEM_NOT_FROM_CATALOG', 'Este item nao possui ficha de catalogo')
    }

    return reply.send(result.entry)
  })

  app.get('/api/campaigns/:campaignId/characters/:characterId/wallet', async (req, reply) => {
    const payload = requireAuth(req, reply)
    if (!payload) return

    const params = campaignCharacterParamsSchema.safeParse(req.params)
    if (!params.success) return sendError(reply, 400, 'INVALID_PAYLOAD', 'Parametros invalidos')

    const result = await useCases.getWallet({ ...params.data, actorUserId: payload.id })
    if (result.status === 'not_found') return sendError(reply, 404, 'CAMPAIGN_CHARACTER_NOT_FOUND', 'Personagem nao encontrado na campanha')
    if (result.status === 'forbidden') return sendError(reply, 403, 'FORBIDDEN', 'Sem permissao para ver esta carteira')

    return reply.send(presentWallet(result.wallet, walletDisplay(result.system, result.wallet.balanceMinorUnit)))
  })

  app.post('/api/campaigns/:campaignId/items', async (req, reply) => {
    const payload = requireAuth(req, reply)
    if (!payload) return

    const params = campaignParamsSchema.safeParse(req.params)
    if (!params.success) return sendError(reply, 400, 'INVALID_PAYLOAD', 'Campanha invalida')

    const body = createCampaignItemDefinitionSchema.safeParse(req.body ?? {})
    if (!body.success) return sendError(reply, 400, 'INVALID_PAYLOAD', 'Payload invalido')

    const result = await useCases.createCampaignItemDefinition({
      campaignId: params.data.campaignId,
      actorUserId: payload.id,
      ...body.data,
    })
    if (result.status === 'not_found') return sendError(reply, 404, 'CAMPAIGN_NOT_FOUND', 'Campanha nao encontrada')
    if (result.status === 'forbidden') return sendError(reply, 403, 'FORBIDDEN', 'Apenas o mestre pode criar itens')

    return reply.status(201).send(presentItemDefinition(result.itemDefinition))
  })

  app.post('/api/campaigns/:campaignId/characters/:characterId/inventory/items', async (req, reply) => {
    const payload = requireAuth(req, reply)
    if (!payload) return

    const params = campaignCharacterParamsSchema.safeParse(req.params)
    if (!params.success) return sendError(reply, 400, 'INVALID_PAYLOAD', 'Parametros invalidos')

    const body = addInventoryItemSchema.safeParse(req.body ?? {})
    if (!body.success) return sendError(reply, 400, 'INVALID_PAYLOAD', 'Payload invalido')

    const result = await useCases.addItemToInventory({ ...params.data, ...body.data, actorUserId: payload.id })
    if (result.status === 'not_found') return sendError(reply, 404, 'CAMPAIGN_CHARACTER_NOT_FOUND', 'Personagem nao encontrado na campanha')
    if (result.status === 'forbidden') return sendError(reply, 403, 'FORBIDDEN', 'Sem permissao para adicionar itens')
    if (result.status === 'invalid_quantity') return sendError(reply, 400, 'INVALID_QUANTITY', 'Quantidade invalida')
    if (result.status === 'item_definition_not_found') return sendError(reply, 404, 'ITEM_DEFINITION_NOT_FOUND', 'Item nao encontrado')

    return reply.status(201).send(presentInventory(result.inventory))
  })

  app.patch('/api/campaigns/:campaignId/inventory-items/:inventoryItemId', async (req, reply) => {
    const payload = requireAuth(req, reply)
    if (!payload) return

    const params = inventoryItemParamsSchema.safeParse(req.params)
    if (!params.success) return sendError(reply, 400, 'INVALID_PAYLOAD', 'Parametros invalidos')

    const body = updateInventoryItemSchema.safeParse(req.body ?? {})
    if (!body.success) return sendError(reply, 400, 'INVALID_PAYLOAD', 'Payload invalido')

    const result = await useCases.updateInventoryItem({ ...params.data, ...body.data, actorUserId: payload.id })
    if (result.status === 'not_found') return sendError(reply, 404, 'INVENTORY_ITEM_NOT_FOUND', 'Item nao encontrado')
    if (result.status === 'forbidden') return sendError(reply, 403, 'FORBIDDEN', 'Sem permissao para editar este item')
    if (result.status === 'invalid_quantity') return sendError(reply, 400, 'INVALID_QUANTITY', 'Quantidade invalida')
    if (result.status === 'invalid_payload') return sendError(reply, 400, 'INVALID_PAYLOAD', 'Transicao de estado invalida')

    return reply.send(presentInventory(result.inventory))
  })

  app.post('/api/campaigns/:campaignId/inventory-items/:inventoryItemId/equip', async (req, reply) => {
    const payload = requireAuth(req, reply)
    if (!payload) return

    const params = inventoryItemParamsSchema.safeParse(req.params)
    if (!params.success) return sendError(reply, 400, 'INVALID_PAYLOAD', 'Parametros invalidos')

    const body = equipInventoryItemSchema.safeParse(req.body ?? {})
    if (!body.success) return sendError(reply, 400, 'INVALID_PAYLOAD', 'Payload invalido')

    const result = await useCases.equipItem({ ...params.data, ...body.data, actorUserId: payload.id })
    if (result.status === 'not_found') return sendError(reply, 404, 'INVENTORY_ITEM_NOT_FOUND', 'Item nao encontrado')
    if (result.status === 'item_belongs_to_another_character') {
      return sendError(reply, 403, 'ITEM_BELONGS_TO_ANOTHER_CHARACTER', 'Este item pertence a outro personagem')
    }
    if (result.status === 'already_equipped') return sendError(reply, 409, 'ITEM_ALREADY_EQUIPPED', 'Item ja equipado')
    if (result.status === 'equipment_conflict') return sendError(reply, 409, 'EQUIPMENT_CONFLICT', 'Opcao de equipamento em conflito')
    if (result.status === 'invalid_payload') return sendError(reply, 400, 'INVALID_PAYLOAD', 'Slot invalido')

    return reply.send(presentInventory(result.inventory))
  })

  app.delete('/api/campaigns/:campaignId/equipped-items/:equippedItemId', async (req, reply) => {
    const payload = requireAuth(req, reply)
    if (!payload) return

    const params = equippedItemParamsSchema.safeParse(req.params)
    if (!params.success) return sendError(reply, 400, 'INVALID_PAYLOAD', 'Parametros invalidos')

    const result = await useCases.unequipItem({ ...params.data, actorUserId: payload.id })
    if (result.status === 'not_found') return sendError(reply, 404, 'EQUIPPED_ITEM_NOT_FOUND', 'Equipamento nao encontrado')
    if (result.status === 'item_belongs_to_another_character') {
      return sendError(reply, 403, 'ITEM_BELONGS_TO_ANOTHER_CHARACTER', 'Este item pertence a outro personagem')
    }

    return reply.send(presentInventory(result.inventory))
  })

  app.post('/api/campaigns/:campaignId/inventory-items/:inventoryItemId/transfer', async (req, reply) => {
    const payload = requireAuth(req, reply)
    if (!payload) return

    const params = inventoryItemParamsSchema.safeParse(req.params)
    if (!params.success) return sendError(reply, 400, 'INVALID_PAYLOAD', 'Parametros invalidos')

    const body = transferInventoryItemSchema.safeParse(req.body ?? {})
    if (!body.success) return sendError(reply, 400, 'INVALID_PAYLOAD', 'Payload invalido')

    const result = await useCases.transferItem({ ...params.data, ...body.data, actorUserId: payload.id })
    if (result.status === 'not_found') return sendError(reply, 404, 'INVENTORY_ITEM_NOT_FOUND', 'Item nao encontrado')
    if (result.status === 'item_belongs_to_another_character') {
      return sendError(reply, 403, 'ITEM_BELONGS_TO_ANOTHER_CHARACTER', 'Este item pertence a outro personagem')
    }
    if (result.status === 'invalid_quantity') return sendError(reply, 400, 'INVALID_QUANTITY', 'Quantidade invalida')
    if (result.status === 'cross_campaign_transfer_not_allowed') {
      return sendError(reply, 400, 'CROSS_CAMPAIGN_TRANSFER_NOT_ALLOWED', 'Transferencia entre campanhas nao permitida')
    }
    if (result.status === 'item_already_equipped') return sendError(reply, 409, 'ITEM_ALREADY_EQUIPPED', 'Desequipe o item antes de transferir')
    if (result.status === 'insufficient_quantity') return sendError(reply, 400, 'INVALID_QUANTITY', 'Quantidade insuficiente')

    return reply.send(presentInventory(result.inventory))
  })

  app.post('/api/campaigns/:campaignId/characters/:characterId/wallet/adjust', async (req, reply) => {
    const payload = requireAuth(req, reply)
    if (!payload) return

    const params = campaignCharacterParamsSchema.safeParse(req.params)
    if (!params.success) return sendError(reply, 400, 'INVALID_PAYLOAD', 'Parametros invalidos')

    const body = adjustWalletSchema.safeParse(req.body ?? {})
    if (!body.success) return sendError(reply, 400, 'INVALID_PAYLOAD', 'Payload invalido')

    const result = await useCases.adjustWallet({ ...params.data, ...body.data, actorUserId: payload.id })
    if (result.status === 'not_found') return sendError(reply, 404, 'CAMPAIGN_CHARACTER_NOT_FOUND', 'Personagem nao encontrado na campanha')
    if (result.status === 'forbidden') return sendError(reply, 403, 'FORBIDDEN', 'Apenas o mestre pode ajustar saldo')
    if (result.status === 'negative_balance_not_allowed') {
      return sendError(reply, 400, 'NEGATIVE_BALANCE_NOT_ALLOWED', 'Saldo nao pode ficar negativo')
    }

    return reply.send(presentWallet(result.wallet, walletDisplay(result.system, result.wallet.balanceMinorUnit)))
  })

  app.post('/api/campaigns/:campaignId/characters/:fromCharacterId/wallet/transfer', async (req, reply) => {
    const payload = requireAuth(req, reply)
    if (!payload) return

    const params = campaignFromCharacterParamsSchema.safeParse(req.params)
    if (!params.success) return sendError(reply, 400, 'INVALID_PAYLOAD', 'Parametros invalidos')

    const body = transferCurrencySchema.safeParse(req.body ?? {})
    if (!body.success) return sendError(reply, 400, 'INVALID_PAYLOAD', 'Payload invalido')

    const result = await useCases.transferCurrency({
      campaignId: params.data.campaignId,
      fromCharacterId: params.data.fromCharacterId,
      ...body.data,
      actorUserId: payload.id,
    })
    if (result.status === 'not_found') return sendError(reply, 404, 'CAMPAIGN_CHARACTER_NOT_FOUND', 'Personagem nao encontrado na campanha')
    if (result.status === 'forbidden') return sendError(reply, 403, 'FORBIDDEN', 'Sem permissao para transferir')
    if (result.status === 'invalid_currency_amount') return sendError(reply, 400, 'INVALID_CURRENCY_AMOUNT', 'Valor invalido')
    if (result.status === 'cross_campaign_transfer_not_allowed') {
      return sendError(reply, 400, 'CROSS_CAMPAIGN_TRANSFER_NOT_ALLOWED', 'Transferencia entre campanhas nao permitida')
    }
    if (result.status === 'insufficient_funds') return sendError(reply, 400, 'INSUFFICIENT_FUNDS', 'Saldo insuficiente')

    return reply.send(presentWallet(result.wallet, walletDisplay(result.system, result.wallet.balanceMinorUnit)))
  })

  app.get('/api/campaigns/:campaignId/characters/:characterId/inventory/ledger', async (req, reply) => {
    const payload = requireAuth(req, reply)
    if (!payload) return

    const params = campaignCharacterParamsSchema.safeParse(req.params)
    if (!params.success) return sendError(reply, 400, 'INVALID_PAYLOAD', 'Parametros invalidos')

    const query = ledgerQuerySchema.safeParse(req.query ?? {})
    if (!query.success) return sendError(reply, 400, 'INVALID_PAYLOAD', 'Parametros de paginacao invalidos')

    const result = await useCases.getInventoryLedger({ ...params.data, ...query.data, actorUserId: payload.id })
    if (result.status === 'not_found') return sendError(reply, 404, 'CAMPAIGN_CHARACTER_NOT_FOUND', 'Personagem nao encontrado na campanha')
    if (result.status === 'forbidden') return sendError(reply, 403, 'FORBIDDEN', 'Sem permissao para ver o historico')

    return reply.send({ entries: result.entries, total: result.total, page: result.page, limit: result.limit })
  })

  app.get('/api/campaigns/:campaignId/characters/:characterId/wallet/ledger', async (req, reply) => {
    const payload = requireAuth(req, reply)
    if (!payload) return

    const params = campaignCharacterParamsSchema.safeParse(req.params)
    if (!params.success) return sendError(reply, 400, 'INVALID_PAYLOAD', 'Parametros invalidos')

    const query = ledgerQuerySchema.safeParse(req.query ?? {})
    if (!query.success) return sendError(reply, 400, 'INVALID_PAYLOAD', 'Parametros de paginacao invalidos')

    const result = await useCases.getWalletLedger({ ...params.data, ...query.data, actorUserId: payload.id })
    if (result.status === 'not_found') return sendError(reply, 404, 'CAMPAIGN_CHARACTER_NOT_FOUND', 'Personagem nao encontrado na campanha')
    if (result.status === 'forbidden') return sendError(reply, 403, 'FORBIDDEN', 'Sem permissao para ver o historico')

    return reply.send({ entries: result.entries, total: result.total, page: result.page, limit: result.limit })
  })
}
