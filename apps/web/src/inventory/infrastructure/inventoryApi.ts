import { api } from '../../lib/api'
import type { CampaignItemEntry } from '../../features/items/types'
import type { InventoryItemDefinitionView, InventoryView, WalletAdjustReason, WalletView } from '../domain/inventoryTypes'

export type CreateCampaignItemDefinitionPayload = {
  name: string
  itemType: string
  rarity?: string
  level?: number
  traits?: string[]
  bulk?: string
  priceMinorUnit?: number
  equipSlot?: string
  isStackable?: boolean
  systemData?: unknown
}

export type AddInventoryItemPayload = {
  itemDefinitionId: string
  quantity?: number
  customName?: string
  notes?: string
}

export type UpdateInventoryItemPayload = {
  quantity?: number
  customName?: string | null
  notes?: string | null
  state?: 'STORED' | 'CONSUMED' | 'DESTROYED' | 'DROPPED'
}

export type TransferInventoryItemPayload = {
  toCharacterId: string
  quantity: number
  note?: string
}

export type AdjustWalletPayload = {
  deltaMinorUnit: number
  reason: WalletAdjustReason
  note?: string
}

export type TransferCurrencyPayload = {
  toCharacterId: string
  amountMinorUnit: number
  note?: string
}

export type LedgerPage<T> = { entries: T[]; total: number; page: number; limit: number }

export function getInventory(campaignId: string, characterId: string): Promise<InventoryView> {
  return api(`/api/campaigns/${campaignId}/characters/${characterId}/inventory`)
}

/** Only resolves for items cloned from the system catalog (source = SYSTEM_CATALOG); the API returns 404/ITEM_NOT_FROM_CATALOG for custom items. */
export function getInventoryItemCatalogSheet(campaignId: string, inventoryItemId: string): Promise<CampaignItemEntry> {
  return api(`/api/campaigns/${campaignId}/inventory-items/${inventoryItemId}/catalog-sheet`)
}

export function getWallet(campaignId: string, characterId: string): Promise<WalletView> {
  return api(`/api/campaigns/${campaignId}/characters/${characterId}/wallet`)
}

export function createCampaignItemDefinition(
  campaignId: string,
  payload: CreateCampaignItemDefinitionPayload,
): Promise<InventoryItemDefinitionView> {
  return api(`/api/campaigns/${campaignId}/items`, { method: 'POST', body: JSON.stringify(payload) })
}

export function addInventoryItem(
  campaignId: string,
  characterId: string,
  payload: AddInventoryItemPayload,
): Promise<InventoryView> {
  return api(`/api/campaigns/${campaignId}/characters/${characterId}/inventory/items`, {
    method: 'POST',
    body: JSON.stringify(payload),
  })
}

export function updateInventoryItem(
  campaignId: string,
  inventoryItemId: string,
  payload: UpdateInventoryItemPayload,
): Promise<InventoryView> {
  return api(`/api/campaigns/${campaignId}/inventory-items/${inventoryItemId}`, {
    method: 'PATCH',
    body: JSON.stringify(payload),
  })
}

export function equipInventoryItem(
  campaignId: string,
  inventoryItemId: string,
  equipmentOptionKey: string,
): Promise<InventoryView> {
  return api(`/api/campaigns/${campaignId}/inventory-items/${inventoryItemId}/equip`, {
    method: 'POST',
    body: JSON.stringify({ equipmentOptionKey }),
  })
}

export function unequipInventoryItem(campaignId: string, equippedItemId: string): Promise<InventoryView> {
  return api(`/api/campaigns/${campaignId}/equipped-items/${equippedItemId}`, { method: 'DELETE' })
}

export function transferInventoryItem(
  campaignId: string,
  inventoryItemId: string,
  payload: TransferInventoryItemPayload,
): Promise<InventoryView> {
  return api(`/api/campaigns/${campaignId}/inventory-items/${inventoryItemId}/transfer`, {
    method: 'POST',
    body: JSON.stringify(payload),
  })
}

export function adjustWallet(campaignId: string, characterId: string, payload: AdjustWalletPayload): Promise<WalletView> {
  return api(`/api/campaigns/${campaignId}/characters/${characterId}/wallet/adjust`, {
    method: 'POST',
    body: JSON.stringify(payload),
  })
}

export function transferCurrency(
  campaignId: string,
  fromCharacterId: string,
  payload: TransferCurrencyPayload,
): Promise<WalletView> {
  return api(`/api/campaigns/${campaignId}/characters/${fromCharacterId}/wallet/transfer`, {
    method: 'POST',
    body: JSON.stringify(payload),
  })
}

export function getInventoryLedger(
  campaignId: string,
  characterId: string,
  page = 1,
  limit = 20,
): Promise<LedgerPage<unknown>> {
  return api(`/api/campaigns/${campaignId}/characters/${characterId}/inventory/ledger?page=${page}&limit=${limit}`)
}

export function getWalletLedger(
  campaignId: string,
  characterId: string,
  page = 1,
  limit = 20,
): Promise<LedgerPage<unknown>> {
  return api(`/api/campaigns/${campaignId}/characters/${characterId}/wallet/ledger?page=${page}&limit=${limit}`)
}
