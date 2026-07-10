import { useCallback, useEffect, useRef, useState } from 'react'
import { createPortal } from 'react-dom'
import { Backpack, GripHorizontal, Shield, X } from 'lucide-react'
import type { Socket } from 'socket.io-client'
import { ResizableEdges, type ResizableBox } from '../../components/ResizableEdges'
import { calculateBounds, clamp } from '../../components/windowDrag'
import { ItemSheetModal } from '../../features/items/components/ItemSheetModal'
import type { CampaignItemEntry } from '../../features/items/types'
import { useInventory } from '../hooks/useInventory'
import { useWallet } from '../hooks/useWallet'
import { useInventoryRealtime } from '../hooks/useInventoryRealtime'
import { getEquippedGroupsForDisplay, getStoredItems } from '../domain/inventoryViewModel'
import type { InventoryItemView } from '../domain/inventoryTypes'
import { InventoryGrid } from './InventoryGrid'
import { InventoryItemContextMenu } from './InventoryItemContextMenu'
import { WalletPanel } from './WalletPanel'
import { MasterInventoryAdminPanel } from './MasterInventoryAdminPanel'
import { createCampaignItemDefinition, getInventoryItemCatalogSheet } from '../infrastructure/inventoryApi'

type ItemMenuState = { item: InventoryItemView; x: number; y: number }

export function InventoryModal({
  campaignId,
  characterId,
  characterName,
  isMaster,
  canManage,
  socket,
  onClose,
}: {
  campaignId: string
  characterId: string
  characterName: string
  isMaster: boolean
  canManage: boolean
  socket: Socket | null
  onClose: () => void
}) {
  const modalRef = useRef<HTMLDivElement | null>(null)
  const [box, setBox] = useState<ResizableBox>(() => ({
    x: 24,
    y: 24,
    width: Math.min(760, window.innerWidth - 24),
    height: Math.min(640, window.innerHeight - 24),
  }))
  const [dragging, setDragging] = useState(false)
  const dragStartRef = useRef({ pointerX: 0, pointerY: 0, modalX: 0, modalY: 0 })
  const [itemMenu, setItemMenu] = useState<ItemMenuState | null>(null)
  const [sheetEntry, setSheetEntry] = useState<CampaignItemEntry | null>(null)
  const [sheetError, setSheetError] = useState<string | null>(null)

  const { inventory, loading, error, reload, equip, unequip, updateItem, addItem } = useInventory(campaignId, characterId)
  const wallet = useWallet(campaignId, characterId)
  const reloadInventory = useCallback(() => void reload(), [reload])
  const reloadWallet = useCallback(() => void wallet.reload(), [wallet])
  useInventoryRealtime(socket, campaignId, characterId, reloadInventory, reloadWallet)

  useEffect(() => {
    function onPointerMove(event: PointerEvent) {
      if (!dragging) return

      const nextX = dragStartRef.current.modalX + event.clientX - dragStartRef.current.pointerX
      const nextY = dragStartRef.current.modalY + event.clientY - dragStartRef.current.pointerY
      const bounds = calculateBounds(modalRef.current)
      setBox((current) => ({
        ...current,
        x: clamp(nextX, bounds.minX, bounds.maxX),
        y: clamp(nextY, bounds.minY, bounds.maxY),
      }))
    }

    function onPointerUp() {
      setDragging(false)
    }

    window.addEventListener('pointermove', onPointerMove)
    window.addEventListener('pointerup', onPointerUp)

    return () => {
      window.removeEventListener('pointermove', onPointerMove)
      window.removeEventListener('pointerup', onPointerUp)
    }
  }, [dragging])

  function startDrag(event: React.PointerEvent<HTMLDivElement>) {
    dragStartRef.current = {
      pointerX: event.clientX,
      pointerY: event.clientY,
      modalX: box.x,
      modalY: box.y,
    }
    setDragging(true)
  }

  function openItemMenu(item: InventoryItemView, event: React.MouseEvent<HTMLButtonElement>) {
    if (!canManage) return
    setItemMenu({ item, x: event.clientX, y: event.clientY })
  }

  async function openItemSheet(item: InventoryItemView) {
    setSheetError(null)
    try {
      setSheetEntry(await getInventoryItemCatalogSheet(campaignId, item.id))
    } catch {
      setSheetError('Nao foi possivel carregar a ficha deste item.')
    }
  }

  const equippedGroups = inventory ? getEquippedGroupsForDisplay(inventory) : []
  const storedItems = inventory ? getStoredItems(inventory) : []

  const modal = (
    <div className="fixed inset-0 z-50 bg-black/50">
      <div
        ref={modalRef}
        className="absolute flex flex-col overflow-hidden rounded-xl border border-white/10 bg-[#0c0d11] text-white shadow-2xl"
        style={{ left: box.x, top: box.y, width: box.width, height: box.height }}
      >
        <ResizableEdges box={box} setBox={setBox} limits={{ minWidth: 420, minHeight: 360, viewportMargin: 12 }} />

        <div
          className="flex shrink-0 cursor-grab items-center justify-between gap-3 border-b border-white/10 bg-white/[0.03] px-4 py-3 active:cursor-grabbing"
          onPointerDown={startDrag}
        >
          <div className="flex min-w-0 items-center gap-3">
            <GripHorizontal className="h-4 w-4 shrink-0 text-zinc-500" />
            <Backpack className="h-4 w-4 shrink-0 text-amber-300" />
            <div className="min-w-0">
              <div className="truncate text-sm font-semibold">Mochila</div>
              <div className="truncate text-xs text-zinc-500">{characterName}</div>
            </div>
          </div>
          <button
            type="button"
            onPointerDown={(event) => event.stopPropagation()}
            onClick={onClose}
            className="flex h-7 w-7 shrink-0 items-center justify-center rounded-md text-zinc-300 transition hover:bg-white/10 hover:text-white"
            title="Fechar"
          >
            <X className="h-4 w-4" />
          </button>
        </div>

        <div className="grid flex-1 gap-3 overflow-y-auto p-4">
          {loading ? <div className="text-xs text-zinc-500">Carregando inventario...</div> : null}
          {error ? <div className="text-xs text-red-400">{error}</div> : null}
          {sheetError ? <div className="text-xs text-red-400">{sheetError}</div> : null}

          <section className="grid gap-2 rounded-lg border border-white/10 bg-white/[0.035] p-3">
            <div className="flex items-center gap-2 border-b border-white/10 pb-2">
              <Shield className="h-4 w-4 text-emerald-300" />
              <div className="text-sm font-semibold text-white">Equipados</div>
            </div>

            {inventory && equippedGroups.length === 0 ? (
              <div className="text-xs text-zinc-500">Nenhum item equipado.</div>
            ) : (
              equippedGroups.map((group) => (
                <div key={group.id} className="grid gap-1.5">
                  <div className="text-[11px] uppercase text-zinc-500">{group.label}</div>
                  <InventoryGrid items={group.items} emptyLabel="Nenhum item." onItemContextMenu={openItemMenu} />
                </div>
              ))
            )}
          </section>

          <section className="grid gap-2 rounded-lg border border-white/10 bg-white/[0.035] p-3">
            <div className="flex items-center gap-2 border-b border-white/10 pb-2">
              <Backpack className="h-4 w-4 text-amber-300" />
              <div className="text-sm font-semibold text-white">Mochila</div>
            </div>

            <InventoryGrid items={storedItems} emptyLabel="Nenhum item guardado." onItemContextMenu={openItemMenu} slotCount={50} />
          </section>

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
      </div>

      {itemMenu ? (
        <InventoryItemContextMenu
          item={itemMenu.item}
          x={itemMenu.x}
          y={itemMenu.y}
          equipmentOptions={inventory?.equipmentOptions ?? []}
          onOpenSheet={() => void openItemSheet(itemMenu.item)}
          onEquip={(equipmentOptionKey) => void equip(itemMenu.item.id, equipmentOptionKey)}
          onUnequip={() => itemMenu.item.equipped && void unequip(itemMenu.item.equipped.id)}
          onConsume={() => void updateItem(itemMenu.item.id, { state: 'CONSUMED' })}
          onDrop={() => void updateItem(itemMenu.item.id, { state: 'DROPPED' })}
          onClose={() => setItemMenu(null)}
        />
      ) : null}

      {sheetEntry ? (
        <ItemSheetModal campaignId={campaignId} itemId={sheetEntry.id} initialItem={sheetEntry} onClose={() => setSheetEntry(null)} />
      ) : null}
    </div>
  )

  if (typeof document === 'undefined') return null

  return createPortal(modal, document.body)
}
