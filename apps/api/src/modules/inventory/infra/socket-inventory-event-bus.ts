import type { DefaultEventsMap, RemoteSocket, Server as SocketIOServer } from 'socket.io'
import { campaignRoom, userRoom } from '../../campaign-presence/rooms'
import type {
  InventoryChangedEvent,
  InventoryEventBus,
  InventoryItemTransferredEvent,
  WalletChangedEvent,
  WalletCurrencyTransferredEvent,
} from '../application/ports/inventory-event-bus'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type FetchedSocket = RemoteSocket<DefaultEventsMap, any>

function isMasterSocket(socket: FetchedSocket): boolean {
  return (socket.data.characterRole as string | undefined) === 'MASTER'
}

function isOwnerSocket(socket: FetchedSocket, ownerUserId: string): boolean {
  const user = socket.data.user as { id: string } | undefined
  return user?.id === ownerUserId
}

async function broadcastToCampaignRoom(
  io: SocketIOServer,
  campaignId: string,
  ownerUserId: string,
  isNpc: boolean,
  event: string,
  payload: unknown,
) {
  const sockets = await io.in(campaignRoom(campaignId)).fetchSockets()
  for (const socket of sockets) {
    if (isMasterSocket(socket)) {
      socket.emit(event, payload)
      continue
    }
    if (isNpc) continue
    if (isOwnerSocket(socket, ownerUserId)) socket.emit(event, payload)
  }
}

export function createSocketInventoryEventBus(io: SocketIOServer): InventoryEventBus {
  function emitInventoryChanged(event: InventoryChangedEvent) {
    const payload = {
      campaignId: event.campaignId,
      characterId: event.characterId,
      campaignCharacterId: event.campaignCharacterId,
      inventoryId: event.inventoryId,
      reason: event.reason,
      changedItemIds: event.changedItemIds,
      occurredAt: new Date().toISOString(),
    }

    void broadcastToCampaignRoom(io, event.campaignId, event.ownerUserId, event.isNpc, 'inventory:changed', payload)
    if (!event.isNpc) io.to(userRoom(event.ownerUserId)).emit('inventory:changed', payload)
  }

  function emitWalletChanged(event: WalletChangedEvent) {
    const payload = {
      campaignId: event.campaignId,
      characterId: event.characterId,
      campaignCharacterId: event.campaignCharacterId,
      walletId: event.walletId,
      reason: event.reason,
      balanceMinorUnit: event.balanceMinorUnit,
      occurredAt: new Date().toISOString(),
    }

    void broadcastToCampaignRoom(io, event.campaignId, event.ownerUserId, event.isNpc, 'wallet:changed', payload)
    if (!event.isNpc) io.to(userRoom(event.ownerUserId)).emit('wallet:changed', payload)
  }

  function emitItemTransferred(event: InventoryItemTransferredEvent) {
    const payload = {
      campaignId: event.campaignId,
      fromCharacterId: event.fromCharacterId,
      fromCampaignCharacterId: event.fromCampaignCharacterId,
      toCharacterId: event.toCharacterId,
      toCampaignCharacterId: event.toCampaignCharacterId,
      inventoryItemId: event.inventoryItemId,
      occurredAt: new Date().toISOString(),
    }

    io.to(userRoom(event.fromOwnerUserId)).emit('inventory:item-transferred', payload)
    io.to(userRoom(event.toOwnerUserId)).emit('inventory:item-transferred', payload)
    void broadcastToCampaignRoom(io, event.campaignId, event.fromOwnerUserId, false, 'inventory:item-transferred', payload)
  }

  function emitCurrencyTransferred(event: WalletCurrencyTransferredEvent) {
    const payload = {
      campaignId: event.campaignId,
      fromCharacterId: event.fromCharacterId,
      fromCampaignCharacterId: event.fromCampaignCharacterId,
      toCharacterId: event.toCharacterId,
      toCampaignCharacterId: event.toCampaignCharacterId,
      amountMinorUnit: event.amountMinorUnit,
      occurredAt: new Date().toISOString(),
    }

    io.to(userRoom(event.fromOwnerUserId)).emit('wallet:currency-transferred', payload)
    io.to(userRoom(event.toOwnerUserId)).emit('wallet:currency-transferred', payload)
    void broadcastToCampaignRoom(io, event.campaignId, event.fromOwnerUserId, false, 'wallet:currency-transferred', payload)
  }

  return { emitInventoryChanged, emitWalletChanged, emitItemTransferred, emitCurrencyTransferred }
}
