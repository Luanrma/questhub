import { useEffect } from 'react'
import type { Socket } from 'socket.io-client'
import type {
  InventoryChangedEvent,
  InventoryItemTransferredEvent,
  WalletChangedEvent,
  WalletCurrencyTransferredEvent,
} from '../domain/inventoryTypes'

export function useInventoryRealtime(
  socket: Socket | null,
  campaignId: string | null | undefined,
  characterId: string | null | undefined,
  onInventoryChanged: () => void,
  onWalletChanged: () => void,
) {
  useEffect(() => {
    if (!socket || !campaignId || !characterId) return

    function handleInventoryChanged(payload: InventoryChangedEvent) {
      if (payload.campaignId === campaignId && payload.characterId === characterId) onInventoryChanged()
    }

    function handleItemTransferred(payload: InventoryItemTransferredEvent) {
      if (payload.campaignId !== campaignId) return
      if (payload.fromCharacterId === characterId || payload.toCharacterId === characterId) onInventoryChanged()
    }

    function handleWalletChanged(payload: WalletChangedEvent) {
      if (payload.campaignId === campaignId && payload.characterId === characterId) onWalletChanged()
    }

    function handleCurrencyTransferred(payload: WalletCurrencyTransferredEvent) {
      if (payload.campaignId !== campaignId) return
      if (payload.fromCharacterId === characterId || payload.toCharacterId === characterId) onWalletChanged()
    }

    socket.on('inventory:changed', handleInventoryChanged)
    socket.on('inventory:item-transferred', handleItemTransferred)
    socket.on('wallet:changed', handleWalletChanged)
    socket.on('wallet:currency-transferred', handleCurrencyTransferred)

    return () => {
      socket.off('inventory:changed', handleInventoryChanged)
      socket.off('inventory:item-transferred', handleItemTransferred)
      socket.off('wallet:changed', handleWalletChanged)
      socket.off('wallet:currency-transferred', handleCurrencyTransferred)
    }
  }, [socket, campaignId, characterId, onInventoryChanged, onWalletChanged])
}
