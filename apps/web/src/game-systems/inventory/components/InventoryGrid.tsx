import { Package } from 'lucide-react'
import {
  entriesBySlot,
  inventoryGridColumns,
  inventoryGridRows,
  inventorySlotCount,
} from '../domain/inventoryGrid'

export type InventoryGridEntry = {
  id: string
  quantity: number
  slotIndex: number
  catalogContentId: string | null
  presentation: {
    name: string
    imageUrl?: string | null
  } | null
}

type Props = {
  entries: readonly InventoryGridEntry[]
  movingEntryId: string | null
  onMove: (entryId: string, slotIndex: number) => void
  onOpen: (entry: InventoryGridEntry) => void
  onManage?: (entry: InventoryGridEntry) => void
}

const inventoryEntryDragType = 'application/x-questhub-inventory-entry'

export function InventoryGrid({
  entries,
  movingEntryId,
  onMove,
  onOpen,
  onManage,
}: Props) {
  const slotMap = entriesBySlot(entries)

  return (
    <div className="grid min-h-0 flex-1 place-items-stretch overflow-hidden rounded-xl border border-white/10 bg-black/25 p-2">
      <div
        className="grid min-h-0 min-w-0 gap-1"
        style={{
          gridTemplateColumns: `repeat(${inventoryGridColumns}, minmax(0, 1fr))`,
          gridTemplateRows: `repeat(${inventoryGridRows}, minmax(0, 1fr))`,
        }}
        role="grid"
        aria-label="Grade do inventário, 10 por 10 slots"
      >
        {Array.from({ length: inventorySlotCount }, (_, slotIndex) => {
          const entry = slotMap.get(slotIndex)
          if (!entry) {
            return (
              <div
                key={slotIndex}
                role="gridcell"
                aria-label={`Slot ${slotIndex + 1} vazio`}
                className="min-h-0 min-w-0 rounded border border-white/[0.08] bg-white/[0.025] shadow-inner transition hover:border-indigo-300/25 hover:bg-indigo-500/[0.04]"
                onDragOver={(event) => {
                  if (!event.dataTransfer.types.includes(inventoryEntryDragType)) return
                  event.preventDefault()
                  event.dataTransfer.dropEffect = 'move'
                }}
                onDrop={(event) => {
                  event.preventDefault()
                  const entryId = event.dataTransfer.getData(inventoryEntryDragType)
                  if (entryId) onMove(entryId, slotIndex)
                }}
              />
            )
          }

          const name = entry.presentation?.name ?? 'Item do sistema'
          return (
            <button
              key={entry.id}
              type="button"
              role="gridcell"
              draggable
              title={`${name} — quantidade ${entry.quantity}`}
              aria-label={`${name}, quantidade ${entry.quantity}, slot ${slotIndex + 1}`}
              className={[
                'group relative grid min-h-0 min-w-0 place-items-center overflow-hidden rounded border bg-indigo-500/10 p-0.5 text-indigo-100 shadow-sm transition',
                movingEntryId === entry.id
                  ? 'border-indigo-200/70 opacity-50'
                  : 'border-indigo-300/25 hover:border-indigo-200/70 hover:bg-indigo-500/20',
              ].join(' ')}
              onClick={() => onOpen(entry)}
              onContextMenu={(event) => {
                if (!onManage) return
                event.preventDefault()
                onManage(entry)
              }}
              onDragStart={(event) => {
                event.dataTransfer.effectAllowed = 'move'
                event.dataTransfer.setData(inventoryEntryDragType, entry.id)
              }}
              onDragOver={(event) => {
                if (!event.dataTransfer.types.includes(inventoryEntryDragType)) return
                event.preventDefault()
                event.dataTransfer.dropEffect = 'move'
              }}
              onDrop={(event) => {
                event.preventDefault()
                event.stopPropagation()
                const entryId = event.dataTransfer.getData(inventoryEntryDragType)
                if (entryId) onMove(entryId, slotIndex)
              }}
            >
              {entry.presentation?.imageUrl ? (
                <img
                  src={entry.presentation.imageUrl}
                  alt=""
                  draggable={false}
                  className="h-full w-full rounded object-contain"
                />
              ) : (
                <Package className="h-5 w-5 text-indigo-200/75" />
              )}
              {entry.quantity > 1 ? (
                <span className="absolute bottom-1 right-1 min-w-5 rounded bg-black/80 px-1 text-center text-[10px] font-bold text-white shadow">
                  {entry.quantity}
                </span>
              ) : null}
              <span className="pointer-events-none absolute inset-x-0 bottom-0 translate-y-full truncate bg-black/85 px-1 py-0.5 text-[9px] text-zinc-100 transition group-hover:translate-y-0">
                {name}
              </span>
            </button>
          )
        })}
      </div>
    </div>
  )
}
