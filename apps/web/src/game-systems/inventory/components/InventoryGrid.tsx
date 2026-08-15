import { useMemo, useState } from 'react'
import {
  Backpack,
  ChevronLeft,
  ChevronRight,
  CircleDot,
  FlaskConical,
  Gem,
  Package,
  PackageOpen,
  Shield,
  Shirt,
  Swords,
  Wrench,
} from 'lucide-react'
import {
  availableInventoryPageCount,
  entriesBySlot,
  inventoryGridColumns,
  inventoryPageSlotIndexes,
  type SlottedInventoryEntry,
} from '../domain/inventoryGrid'

export type InventoryGridEntry = {
  id: string
  quantity: number
  slotIndex: number | null
  catalogNamespace: string | null
  catalogContentId: string | null
  presentation: {
    name: string
    imageUrl?: string | null
    iconKey?: string | null
  } | null
}

type SlottedInventoryGridEntry = InventoryGridEntry & SlottedInventoryEntry

type Props = {
  entries: readonly InventoryGridEntry[]
  movingEntryId: string | null
  onMove: (entryId: string, slotIndex: number) => void
  onOpen: (entry: InventoryGridEntry) => void
  onManage?: (entry: InventoryGridEntry) => void
}

const inventoryEntryDragType = 'application/x-questhub-inventory-entry'

function InventoryItemFallbackIcon({ iconKey }: { iconKey?: string | null }) {
  const className = 'h-1/2 w-1/2 text-indigo-200/75'

  switch (iconKey) {
    case 'weapon':
      return <Swords className={className} />
    case 'armor':
      return <Shirt className={className} />
    case 'shield':
      return <Shield className={className} />
    case 'consumable':
      return <FlaskConical className={className} />
    case 'ammunition':
      return <CircleDot className={className} />
    case 'treasure':
      return <Gem className={className} />
    case 'container':
      return <PackageOpen className={className} />
    case 'kit':
      return <Backpack className={className} />
    case 'equipment':
      return <Wrench className={className} />
    default:
      return <Package className={className} />
  }
}

function InventoryItemIcon({ entry }: { entry: InventoryGridEntry }) {
  const imageUrl = entry.presentation?.imageUrl ?? null
  const [failedImageUrl, setFailedImageUrl] = useState<string | null>(null)

  if (imageUrl && imageUrl !== failedImageUrl) {
    return (
      <img
        src={imageUrl}
        alt=""
        draggable={false}
        onError={() => setFailedImageUrl(imageUrl)}
        className="h-full w-full rounded-sm object-contain p-1"
      />
    )
  }

  return <InventoryItemFallbackIcon iconKey={entry.presentation?.iconKey} />
}

function isSlottedEntry(entry: InventoryGridEntry): entry is SlottedInventoryGridEntry {
  return entry.slotIndex !== null
}

export function InventoryGrid({
  entries,
  movingEntryId,
  onMove,
  onOpen,
  onManage,
}: Props) {
  const [pageIndex, setPageIndex] = useState(0)
  const backpackEntries = useMemo(
    () => entries.filter(isSlottedEntry),
    [entries],
  )
  const slotMap = useMemo(() => entriesBySlot(backpackEntries), [backpackEntries])
  const pageCount = availableInventoryPageCount(backpackEntries)
  const visiblePageIndex = Math.min(pageIndex, pageCount - 1)
  const slotIndexes = useMemo(() => inventoryPageSlotIndexes(visiblePageIndex), [visiblePageIndex])

  return (
    <div className="flex min-h-0 flex-1 flex-col overflow-hidden rounded-xl border border-white/10 bg-black/25">
      {pageCount > 1 ? (
        <div className="flex items-center justify-between border-b border-white/10 px-3 py-2 text-xs text-zinc-400">
          <button
            type="button"
            disabled={visiblePageIndex === 0}
            onClick={() => setPageIndex(Math.max(0, visiblePageIndex - 1))}
            className="rounded-md border border-white/10 p-1.5 text-zinc-300 transition hover:bg-white/10 disabled:cursor-not-allowed disabled:opacity-35"
            aria-label="Página anterior do inventário"
          >
            <ChevronLeft className="h-4 w-4" />
          </button>
          <span>Página {visiblePageIndex + 1} de {pageCount}</span>
          <button
            type="button"
            disabled={visiblePageIndex >= pageCount - 1}
            onClick={() => setPageIndex(Math.min(pageCount - 1, visiblePageIndex + 1))}
            className="rounded-md border border-white/10 p-1.5 text-zinc-300 transition hover:bg-white/10 disabled:cursor-not-allowed disabled:opacity-35"
            aria-label="Próxima página do inventário"
          >
            <ChevronRight className="h-4 w-4" />
          </button>
        </div>
      ) : null}

      <div className="grid min-h-0 flex-1 place-items-stretch overflow-auto p-2">
        <div
          className="grid w-full min-w-0 gap-1"
          style={{
            gridTemplateColumns: `repeat(${inventoryGridColumns}, minmax(0, 1fr))`,
          }}
          role="grid"
          aria-label={`Página ${visiblePageIndex + 1} da grade do inventário`}
        >
          {slotIndexes.map((slotIndex) => {
            const entry = slotMap.get(slotIndex)
            if (!entry) {
              return (
                <div
                  key={slotIndex}
                  role="gridcell"
                  aria-label={`Slot ${slotIndex + 1} vazio`}
                  className="aspect-square min-h-0 min-w-0 rounded border border-white/[0.08] bg-white/[0.025] shadow-inner transition hover:border-indigo-300/25 hover:bg-indigo-500/[0.04]"
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
                  'group relative grid aspect-square min-h-0 min-w-0 place-items-center overflow-hidden rounded border bg-indigo-500/10 text-indigo-100 shadow-sm transition',
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
                <InventoryItemIcon entry={entry} />
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
