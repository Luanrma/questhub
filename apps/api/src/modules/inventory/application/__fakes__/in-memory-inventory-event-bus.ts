import type {
  InventoryChangedEvent,
  InventoryEventBus,
  InventoryItemTransferredEvent,
  WalletChangedEvent,
  WalletCurrencyTransferredEvent,
} from '../ports/inventory-event-bus'

export function createInMemoryInventoryEventBus() {
  const inventoryChanged: InventoryChangedEvent[] = []
  const walletChanged: WalletChangedEvent[] = []
  const itemTransferred: InventoryItemTransferredEvent[] = []
  const currencyTransferred: WalletCurrencyTransferredEvent[] = []

  const eventBus: InventoryEventBus = {
    emitInventoryChanged(event) {
      inventoryChanged.push(event)
    },
    emitWalletChanged(event) {
      walletChanged.push(event)
    },
    emitItemTransferred(event) {
      itemTransferred.push(event)
    },
    emitCurrencyTransferred(event) {
      currencyTransferred.push(event)
    },
  }

  return { eventBus, inventoryChanged, walletChanged, itemTransferred, currencyTransferred }
}
