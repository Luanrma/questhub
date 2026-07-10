import type { FastifyInstance } from 'fastify'
import type { Server as SocketIOServer } from 'socket.io'
import { createAddItemToInventoryUseCase } from './application/add-item-to-inventory.use-case'
import { createAdjustWalletUseCase } from './application/adjust-wallet.use-case'
import { createCreateCampaignItemDefinitionUseCase } from './application/create-campaign-item-definition.use-case'
import { createEquipItemUseCase } from './application/equip-item.use-case'
import { createGetInventoryLedgerUseCase } from './application/get-inventory-ledger.use-case'
import { createGetInventoryUseCase } from './application/get-inventory.use-case'
import { createGetWalletLedgerUseCase } from './application/get-wallet-ledger.use-case'
import { createGetWalletUseCase } from './application/get-wallet.use-case'
import { createSendCatalogItemToPlayerUseCase } from './application/send-catalog-item-to-player.use-case'
import { createTransferCurrencyUseCase } from './application/transfer-currency.use-case'
import { createTransferItemUseCase } from './application/transfer-item.use-case'
import { createUnequipItemUseCase } from './application/unequip-item.use-case'
import { createUpdateInventoryItemUseCase } from './application/update-inventory-item.use-case'
import { prismaCampaignAccessRepository } from './infra/campaign-access-repository'
import { gameSystemCatalogItemLookup } from './infra/game-system-catalog-item-lookup'
import { prismaInventoryRepository } from './infra/prisma-inventory-repository'
import { prismaWalletRepository } from './infra/prisma-wallet-repository'
import { createSocketInventoryEventBus } from './infra/socket-inventory-event-bus'
import { registerInventoryHttpRoutes } from './presentation/routes'

export type { SendCatalogItemToPlayerResult } from './application/send-catalog-item-to-player.use-case'

/** Built once and shared by other modules (e.g. the items catalog "send to player" action) that need to grant a catalog item without duplicating inventory composition. */
export function createSendCatalogItemToPlayer(io: SocketIOServer) {
  return createSendCatalogItemToPlayerUseCase({
    inventoryRepository: prismaInventoryRepository,
    eventBus: createSocketInventoryEventBus(io),
    campaignAccess: prismaCampaignAccessRepository,
    catalogItemLookup: gameSystemCatalogItemLookup,
  })
}

export function registerInventoryRoutes(app: FastifyInstance, io: SocketIOServer) {
  const inventoryRepository = prismaInventoryRepository
  const walletRepository = prismaWalletRepository
  const campaignAccess = prismaCampaignAccessRepository
  const eventBus = createSocketInventoryEventBus(io)

  registerInventoryHttpRoutes(app, {
    getInventory: createGetInventoryUseCase({ inventoryRepository, campaignAccess }),
    getWallet: createGetWalletUseCase({ walletRepository, campaignAccess }),
    createCampaignItemDefinition: createCreateCampaignItemDefinitionUseCase({ inventoryRepository, campaignAccess }),
    addItemToInventory: createAddItemToInventoryUseCase({ inventoryRepository, eventBus, campaignAccess }),
    updateInventoryItem: createUpdateInventoryItemUseCase({ inventoryRepository, eventBus, campaignAccess }),
    equipItem: createEquipItemUseCase({ inventoryRepository, eventBus, campaignAccess }),
    unequipItem: createUnequipItemUseCase({ inventoryRepository, eventBus, campaignAccess }),
    transferItem: createTransferItemUseCase({ inventoryRepository, eventBus, campaignAccess }),
    adjustWallet: createAdjustWalletUseCase({ walletRepository, eventBus, campaignAccess }),
    transferCurrency: createTransferCurrencyUseCase({ walletRepository, eventBus, campaignAccess }),
    getInventoryLedger: createGetInventoryLedgerUseCase({ inventoryRepository, campaignAccess }),
    getWalletLedger: createGetWalletLedgerUseCase({ walletRepository, campaignAccess }),
  })
}
