import { useCallback } from 'react'
import { Backpack } from 'lucide-react'
import type { Socket } from 'socket.io-client'
import { useInventory } from '../hooks/useInventory'
import { useWallet } from '../hooks/useWallet'
import { useInventoryRealtime } from '../hooks/useInventoryRealtime'
import { getEquippedItemViews, getStoredItems } from '../domain/inventoryViewModel'
import { InventoryItemCard } from './InventoryItemCard'
import { EquippedItemsPanel } from './EquippedItemsPanel'
import { WalletPanel } from './WalletPanel'
import { MasterInventoryAdminPanel } from './MasterInventoryAdminPanel'
import { createCampaignItemDefinition } from '../infrastructure/inventoryApi'

export function InventoryPanel({
  campaignId,
  characterId,
  isMaster,
  socket,
}: {
  campaignId: string
  characterId: string
  isMaster: boolean
  socket: Socket | null
}) {
  const { inventory, loading, error, reload, equip, unequip, transferItem, addItem } = useInventory(campaignId, characterId)
  const wallet = useWallet(campaignId, characterId)

  const reloadInventory = useCallback(() => void reload(), [reload])
  const reloadWallet = useCallback(() => void wallet.reload(), [wallet])
  useInventoryRealtime(socket, campaignId, characterId, reloadInventory, reloadWallet)

  return (
    <div className="grid h-full content-start gap-3 overflow-y-auto">
      <section className="grid gap-2 rounded-lg border border-white/10 bg-white/[0.035] p-3">
        <div className="flex items-center gap-2 border-b border-white/10 pb-3">
          <Backpack className="h-4 w-4 text-amber-300" />
          <div>
            <div className="text-sm font-semibold text-white">Inventario</div>
            <div className="text-[11px] uppercase text-zinc-500">Itens guardados</div>
          </div>
        </div>

        {loading ? <div className="text-xs text-zinc-500">Carregando inventario...</div> : null}
        {error ? <div className="text-xs text-red-400">{error}</div> : null}

        {inventory && getStoredItems(inventory).length === 0 && !loading ? (
          <div className="text-xs text-zinc-500">Nenhum item guardado.</div>
        ) : null}

        {inventory
          ? getStoredItems(inventory).map((item) => (
              <InventoryItemCard
                key={item.id}
                item={item}
                canManage
                onEquip={(slot) => void equip(item.id, slot)}
                onTransfer={(toCharacterId, quantity) => void transferItem(item.id, { toCharacterId, quantity })}
              />
            ))
          : null}
      </section>

      {inventory ? (
        <EquippedItemsPanel
          equippedItemViews={getEquippedItemViews(inventory)}
          canManage
          onUnequip={(equippedItemId) => void unequip(equippedItemId)}
        />
      ) : null}

      <WalletPanel
        wallet={wallet.wallet}
        loading={wallet.loading}
        error={wallet.error}
        canAdjust={isMaster}
        canTransfer
        onAdjust={(deltaMinorUnit, reason) => void wallet.adjust({ deltaMinorUnit, reason })}
        onTransfer={(toCharacterId, amountMinorUnit) => void wallet.transfer({ toCharacterId, amountMinorUnit })}
      />

      {isMaster ? (
        <MasterInventoryAdminPanel
          onCreateItemDefinition={(payload) => void createCampaignItemDefinition(campaignId, payload)}
          onGrantItem={(itemDefinitionId, quantity) => void addItem({ itemDefinitionId, quantity })}
        />
      ) : null}
    </div>
  )
}
