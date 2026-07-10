import { useCallback, useEffect, useState } from 'react'
import { ApiError } from '../../lib/api'
import type { InventoryView } from '../domain/inventoryTypes'
import {
  addInventoryItem,
  equipInventoryItem,
  getInventory,
  transferInventoryItem,
  unequipInventoryItem,
  updateInventoryItem,
  type AddInventoryItemPayload,
  type TransferInventoryItemPayload,
  type UpdateInventoryItemPayload,
} from '../infrastructure/inventoryApi'

export function useInventory(campaignId: string | null | undefined, characterId: string | null | undefined) {
  const [inventory, setInventory] = useState<InventoryView | null>(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const reload = useCallback(async () => {
    if (!campaignId || !characterId) return
    setLoading(true)
    setError(null)
    try {
      setInventory(await getInventory(campaignId, characterId))
    } catch (err) {
      setError(err instanceof ApiError ? err.message : 'Falha ao carregar inventario')
    } finally {
      setLoading(false)
    }
  }, [campaignId, characterId])

  useEffect(() => {
    void reload()
  }, [reload])

  async function addItem(payload: AddInventoryItemPayload) {
    if (!campaignId || !characterId) return
    setInventory(await addInventoryItem(campaignId, characterId, payload))
  }

  async function updateItem(inventoryItemId: string, payload: UpdateInventoryItemPayload) {
    if (!campaignId) return
    setInventory(await updateInventoryItem(campaignId, inventoryItemId, payload))
  }

  async function equip(inventoryItemId: string, slot: string) {
    if (!campaignId) return
    setInventory(await equipInventoryItem(campaignId, inventoryItemId, slot))
  }

  async function unequip(equippedItemId: string) {
    if (!campaignId) return
    setInventory(await unequipInventoryItem(campaignId, equippedItemId))
  }

  async function transferItem(inventoryItemId: string, payload: TransferInventoryItemPayload) {
    if (!campaignId) return
    setInventory(await transferInventoryItem(campaignId, inventoryItemId, payload))
  }

  return { inventory, loading, error, reload, addItem, updateItem, equip, unequip, transferItem }
}
