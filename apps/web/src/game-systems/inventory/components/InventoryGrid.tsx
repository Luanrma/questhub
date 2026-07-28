import { useEffect, useMemo, useState } from 'react'
import { ChevronLeft, ChevronRight, Package } from 'lucide-react'
import {
  availableInventoryPageCount,
  entriesBySlot,
  inventoryGridColumns,
  inventoryGridPageRows,
  inventoryPageSlotIndexes,
} from '../domain/inventoryGrid'

export type InventoryGridEntry = {
  id: string
  quantity: number
  slotIndex: number
  catalogNamespace: string | null
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
  const [pageIndex, setPageIndex] = useState(0)
  const slotMap = useMemo(() => entriesBySlot(entries), [entries])
  const pageCount = availableInventoryPageCount(entries)
  const slotIndexes = useMemo(() => inventoryPageSlotIndexes(pageIndex), [pageIndex])

  useEffect(() => {
    setPageIndex((current) => Math.min(current, pageCount - 1))
  }, [pageCount])

  return (
    <div className="flex min-h-0 flex-1 flex-col overflow-hidden rounded-xl border border-white/10 bg-black/25">
      <div className="flex items-center justify-between border-b border-white/10 px-3 py-2 text-xs text-zinc-400">
        <button
          type="button"
          disabled={pageIndex === 0}
          onClick={() => setPageIndex((current) => Math.max(0, current - 1))}
          className="rounded-md border border-white/10 p-1.5 text-zinc-300 transition hover:bg-white/10 disabled:cursor-not-allowed disabled:opacity-35"
          aria-label="Página anterior do inventário"
        >
          <ChevronLeft className="h-4 w-4" />
        </button>
        <span>Página {pageIndex + 1} de {pageCount}</span>
        <button
          type="button"
          disabled={pageIndex >= pageCount - 1}
          onClick={() => setPageIndex((current) => Math.min(pageCount - 1, current + 1))}
          className="rounded-md border border-white/10 p-1.5 text-zinc-300 transition hover:bg-white/10 disabled:cursor-not-allowed disabled:opacity-35"
          aria-label="Próxima página do inventário"
        >
          <ChevronRight className="h-4 w-4" />
        </button>
      </div>

      <div className="grid min-h-0 flex-1 place-items-stretch overflow-auto p-2">
        <div
          className="grid min-w-0 gap-1"
          style={{
            gridTemplateColumns: `repeat(${inventoryGridColumns}, minmax(0, 1fr))`,
            gridTemplateRows: `repeat(${inventoryGridPageRows}, minmax(3rem, 1fr))`,
          }}
          role="grid"
          aria-label={`Página ${pageIndex + 1} da grade do inventário`}
        >
          {slotIndexes.map((slotIndex) => {
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
    </div>
  )
}
